import { useMemo, useRef, useState } from 'react';

type CharacterStyle = {
  label: string;
  ramp: string;
};

const CHARACTER_STYLES: CharacterStyle[] = [
  { label: 'Characters', ramp: '@#S%?*+;:,. ' },
  {
    label: 'Detailed',
    ramp: '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. ',
  },
  { label: 'Blocks', ramp: '█▓▒░ ' },
  { label: 'Minimal', ramp: '@%#*+=-:. ' },
];

const CANVAS_FONT =
  'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace';

function convertImageToAscii(
  image: HTMLImageElement,
  width: number,
  ramp: string,
  invert: boolean
) {
  const canvas = document.createElement('canvas');
  const aspectRatio = image.naturalHeight / image.naturalWidth;
  const height = Math.max(1, Math.round(width * aspectRatio * 0.45));

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) return '';

  context.drawImage(image, 0, 0, width, height);

  const pixels = context.getImageData(0, 0, width, height).data;
  const chars = invert ? [...ramp].reverse().join('') : ramp;
  const lines: string[] = [];

  for (let y = 0; y < height; y += 1) {
    let line = '';
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      const r = pixels[index] ?? 0;
      const g = pixels[index + 1] ?? 0;
      const b = pixels[index + 2] ?? 0;
      const alpha = pixels[index + 3] ?? 255;
      const luminance = alpha === 0 ? 255 : 0.299 * r + 0.587 * g + 0.114 * b;
      const charIndex = Math.min(
        chars.length - 1,
        Math.floor((luminance / 255) * chars.length)
      );
      line += chars[charIndex] ?? ' ';
    }
    lines.push(line.trimEnd());
  }

  return lines.join('\n');
}

function renderAsciiToPng(ascii: string) {
  const lines = ascii.split('\n');
  const fontSize = 14;
  const lineHeight = 16;
  const padding = 24;
  const measure = document.createElement('canvas').getContext('2d');
  if (!measure) return null;

  measure.font = `${fontSize}px ${CANVAS_FONT}`;
  const textWidth = Math.max(
    ...lines.map((line) => measure.measureText(line).width)
  );
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(textWidth + padding * 2);
  canvas.height = Math.ceil(lines.length * lineHeight + padding * 2);

  const context = canvas.getContext('2d');
  if (!context) return null;

  context.fillStyle = '#050507';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = `${fontSize}px ${CANVAS_FONT}`;
  context.fillStyle = '#33ff33';
  context.textBaseline = 'top';

  lines.forEach((line, index) => {
    context.fillText(line, padding, padding + index * lineHeight);
  });

  return canvas.toDataURL('image/png');
}

export function ToolSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageName, setImageName] = useState('');
  const [ascii, setAscii] = useState('');
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [styleIndex, setStyleIndex] = useState(0);
  const [width, setWidth] = useState(90);
  const [invert, setInvert] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentImage, setCurrentImage] = useState<HTMLImageElement | null>(
    null
  );

  const activeStyle = CHARACTER_STYLES[styleIndex] ?? CHARACTER_STYLES[0];

  const stats = useMemo(() => {
    if (!ascii) return 'waiting for image';
    const lines = ascii.split('\n').length;
    return `${lines} lines / ${width} chars wide`;
  }, [ascii, width]);

  function updateAscii(
    image: HTMLImageElement | null = currentImage,
    nextStyle = activeStyle,
    nextWidth = width,
    nextInvert = invert
  ) {
    if (!image) return;
    setAscii(convertImageToAscii(image, nextWidth, nextStyle.ramp, nextInvert));
    setError('');
  }

  function loadFile(file: File | undefined) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file.');
      return;
    }

    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(url);
      setCurrentImage(image);
      setImageName(file.name);
      setAscii(convertImageToAscii(image, width, activeStyle.ramp, invert));
      setError('');
      setCopied(false);
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      setError('Could not read that image. Try another JPG, PNG, or WebP.');
    };

    image.src = url;
  }

  async function copyAscii() {
    if (!ascii) return;
    await navigator.clipboard.writeText(ascii);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function downloadPng() {
    if (!ascii) return;
    const dataUrl = renderAsciiToPng(ascii);
    if (!dataUrl) return;

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `${imageName.replace(/\.[^.]+$/, '') || 'ascii-art'}.png`;
    link.click();
  }

  return (
    <section
      id="tool"
      style={{
        padding: '64px 0 40px',
        width: '100%',
        background: 'transparent',
        color: '#33ff33',
        fontFamily: CANVAS_FONT,
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: '1080px', padding: '0 24px' }}
      >
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <p
            style={{
              fontSize: '11.52px',
              fontWeight: 400,
              lineHeight: '20px',
              letterSpacing: '0.18em',
              color: 'rgba(255, 255, 255, 0.5)',
              textTransform: 'uppercase',
              margin: '0.72em 0',
              fontFamily: 'ui-monospace, Menlo, monospace',
            }}
          >
            / IMAGE TO ASCII
          </p>
          <h2
            id="tool-title"
            style={{
              fontSize: '41.6px',
              fontWeight: 700,
              lineHeight: '45.76px',
              color: '#33ff33',
              textShadow: '0 0 6px rgba(51, 255, 51, 0.55)',
              margin: '8px 0 6px',
              fontFamily: CANVAS_FONT,
            }}
          >
            Image to ASCII — turn any image into ASCII art
          </h2>
          <p
            style={{
              fontSize: '15.2px',
              lineHeight: '20px',
              color: 'rgba(255, 255, 255, 0.55)',
              margin: '0 auto',
              maxWidth: '560px',
            }}
          >
            Upload a photo and the converter turns it into text art right in
            your browser. Free, no signup.
          </p>
        </div>

        <div
          className="mx-auto grid gap-4"
          style={{ maxWidth: '900px', gridTemplateColumns: 'minmax(0, 1fr)' }}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            className="sr-only"
            onChange={(event) => loadFile(event.target.files?.[0])}
          />

          <button
            type="button"
            className="flex flex-col items-center justify-center"
            style={{
              backgroundColor: isDragging ? '#101816' : '#08080c',
              padding: '40px 20px',
              borderRadius: '8px',
              border: `1px dashed ${
                isDragging
                  ? 'rgba(51, 255, 51, 0.72)'
                  : 'rgba(255, 255, 255, 0.2)'
              }`,
              cursor: 'pointer',
              transition: '0.15s',
              textAlign: 'center',
              minHeight: '150px',
            }}
            onClick={() => inputRef.current?.click()}
            onDragEnter={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragOver={(event) => {
              event.preventDefault();
              event.dataTransfer.dropEffect = 'copy';
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setIsDragging(false);
              loadFile(event.dataTransfer.files?.[0]);
            }}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{
                color: 'rgba(255, 255, 255, 0.55)',
                opacity: 0.85,
                marginBottom: '12px',
              }}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span
              style={{
                fontSize: '16.32px',
                fontWeight: 600,
                color: '#ffffff',
                display: 'block',
              }}
            >
              {imageName || 'Drop an image here'}
            </span>
            <span
              style={{
                fontSize: '13.12px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.45)',
                display: 'block',
                marginTop: '3px',
              }}
            >
              click to browse — JPG, PNG, GIF, WebP
            </span>
          </button>

          <div
            className="grid gap-3 md:grid-cols-[1fr_180px_auto]"
            style={{
              alignItems: 'end',
              backgroundColor: '#08080c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '16px',
            }}
          >
            <div>
              <span
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.52)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                }}
              >
                character style
              </span>
              <div className="flex flex-wrap gap-2">
                {CHARACTER_STYLES.map((style, index) => (
                  <button
                    key={style.label}
                    type="button"
                    style={{
                      height: '34px',
                      padding: '0 12px',
                      borderRadius: '6px',
                      border:
                        index === styleIndex
                          ? '1px solid rgba(51,255,51,0.7)'
                          : '1px solid rgba(255,255,255,0.1)',
                      backgroundColor:
                        index === styleIndex ? '#1d2a1d' : '#0d0d11',
                      color:
                        index === styleIndex
                          ? '#33ff33'
                          : 'rgba(255,255,255,0.62)',
                      cursor: 'pointer',
                      fontFamily: CANVAS_FONT,
                    }}
                    onClick={() => {
                      setStyleIndex(index);
                      updateAscii(currentImage, style, width, invert);
                    }}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            <label style={{ display: 'block' }}>
              <span
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.52)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                }}
              >
                width {width}
              </span>
              <input
                type="range"
                min="40"
                max="140"
                value={width}
                style={{ width: '100%', accentColor: '#33ff33' }}
                onChange={(event) => {
                  const nextWidth = Number(event.target.value);
                  setWidth(nextWidth);
                  updateAscii(currentImage, activeStyle, nextWidth, invert);
                }}
              />
            </label>

            <label
              className="flex items-center gap-2"
              style={{ color: 'rgba(255,255,255,0.72)', fontSize: '14px' }}
            >
              <input
                type="checkbox"
                checked={invert}
                style={{ accentColor: '#33ff33' }}
                onChange={(event) => {
                  const nextInvert = event.target.checked;
                  setInvert(nextInvert);
                  updateAscii(currentImage, activeStyle, width, nextInvert);
                }}
              />
              Invert
            </label>
          </div>

          <div
            style={{
              backgroundColor: '#050507',
              border: '1px solid rgba(51, 255, 51, 0.2)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <div
              className="flex flex-wrap items-center justify-between gap-3"
              style={{
                padding: '12px 14px',
                borderBottom: '1px solid rgba(51, 255, 51, 0.12)',
              }}
            >
              <span
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}
              >
                {stats}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={!ascii}
                  onClick={copyAscii}
                  style={{
                    height: '34px',
                    padding: '0 12px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backgroundColor: ascii ? '#101015' : '#08080c',
                    color: ascii ? '#33ff33' : 'rgba(255,255,255,0.3)',
                    cursor: ascii ? 'pointer' : 'not-allowed',
                    fontFamily: CANVAS_FONT,
                  }}
                >
                  {copied ? 'Copied' : 'Copy text'}
                </button>
                <button
                  type="button"
                  disabled={!ascii}
                  onClick={downloadPng}
                  style={{
                    height: '34px',
                    padding: '0 12px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: ascii ? '#ff9d00' : '#3a2b16',
                    color: '#0a0a0c',
                    cursor: ascii ? 'pointer' : 'not-allowed',
                    fontFamily: CANVAS_FONT,
                  }}
                >
                  Download PNG
                </button>
              </div>
            </div>
            <pre
              aria-live="polite"
              style={{
                minHeight: '280px',
                maxHeight: '560px',
                overflow: 'auto',
                margin: 0,
                padding: '18px',
                color: '#33ff33',
                fontSize: '8px',
                lineHeight: '8px',
                letterSpacing: 0,
                backgroundColor: '#050507',
                textShadow: '0 0 5px rgba(51,255,51,0.4)',
              }}
            >
              {ascii ||
                'Upload an image to generate ASCII art.\n\nThe conversion runs locally in your browser.'}
            </pre>
          </div>

          {error ? (
            <p style={{ margin: 0, color: '#ff9d00', fontSize: '14px' }}>
              {error}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
