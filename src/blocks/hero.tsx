import { useCallback, useRef, useState } from 'react';

// Hero section with before/after image comparison slider
// Matching imagetoascii.app hero exactly

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  return (
    <section
      id="top"
      className="relative z-[6] mx-auto w-full"
      style={{
        maxWidth: '1728px',
        padding: '0 129px',
        fontFamily:
          'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
      }}
    >
      {/* Before/After Comparison Stage */}
      <div className="relative w-full">
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{
            backgroundColor: '#000000',
            aspectRatio: '1182 / 541',
          }}
          onMouseMove={(e) => {
            if (isDragging.current) handleMove(e.clientX);
          }}
          onMouseUp={() => {
            isDragging.current = false;
          }}
          onMouseLeave={() => {
            isDragging.current = false;
          }}
          onTouchMove={(e) => {
            if (e.touches.length > 0) handleMove(e.touches[0].clientX);
          }}
          onTouchEnd={() => {
            isDragging.current = false;
          }}
        >
          {/* Before side (left, clipped by slider) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src="/images/hero/before.jpg"
              alt="Original photo before converting to ASCII art"
              className="block h-full w-full object-cover"
            />
            <div
              className="absolute right-0 bottom-0 left-0"
              style={{
                height: '183px',
                background:
                  'linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 86.99%)',
              }}
            />
            <span
              className="absolute top-[47px] left-[47px]"
              style={{
                fontSize: '16px',
                letterSpacing: '0.04em',
                color: '#33ff33',
                fontFamily:
                  'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
                textShadow: '0 0 6px rgba(51,255,51,0.55)',
              }}
            >
              Before
            </span>
          </div>

          {/* After side (right) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <img
              src="/images/hero/after-green.png"
              alt="Photo converted to ASCII art with the image to ASCII tool"
              className="block h-full w-full object-cover"
            />
            <div
              className="absolute right-0 bottom-0 left-0"
              style={{
                height: '183px',
                background:
                  'linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 86.99%)',
              }}
            />
            <span
              className="absolute top-[47px] right-[47px] text-right"
              style={{
                fontSize: '16px',
                letterSpacing: '0.04em',
                color: '#33ff33',
                fontFamily:
                  'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
                textShadow: '0 0 6px rgba(51,255,51,0.55)',
              }}
            >
              After
            </span>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 h-full w-[2px]"
            style={{
              left: `${sliderPosition}%`,
              backgroundColor: 'rgba(0, 255, 255, 0.08)',
              transform: 'translateX(-1px)',
              zIndex: 5,
            }}
          />

          {/* Draggable grip */}
          <div
            className="absolute top-1/2 z-[6] flex items-center justify-center"
            style={{
              left: `${sliderPosition}%`,
              transform: 'translate(-50%, -50%)',
              width: '55px',
              height: '56px',
              backgroundColor: '#1a1a1c',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: 'rgba(0, 0, 0, 0.5) 0px 4px 20px 0px',
              cursor: 'grab',
              transition: 'transform 0.15s',
            }}
            onMouseDown={() => {
              isDragging.current = true;
            }}
            onTouchStart={() => {
              isDragging.current = true;
            }}
          >
            <div className="flex items-center gap-px">
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path
                  d="M11 1L4 8L11 15"
                  stroke="#33ff33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path
                  d="M4 1L11 8L4 15"
                  stroke="#33ff33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Copy */}
      <div
        className="relative z-[7] flow-root"
        style={{
          backgroundColor: '#0a0a0c',
          paddingBottom: '56px',
        }}
      >
        <div
          className="grid items-start"
          style={{
            padding: '0 47px',
            marginTop: '41px',
            gridTemplateColumns: '1fr auto 169px',
            gap: '48px',
          }}
        >
          <h1
            style={{
              fontFamily:
                '"GeistPixel-Square", ui-monospace, "SF Mono", Menlo, monospace',
              fontSize: '51.84px',
              fontWeight: 400,
              lineHeight: '1.18',
              letterSpacing: '-0.01em',
              color: '#33ff33',
              textShadow: '0 0 6px rgba(51, 255, 51, 0.55)',
              margin: 0,
            }}
          >
            Turn any picture into
            <br />
            ASCII art, text art,
            <br />
            and block characters
          </h1>
          <div className="col-start-3 flex gap-2" style={{ paddingTop: '8px' }}>
            <a
              href="#tool"
              className="flex h-[45px] w-[169px] items-center justify-center no-underline"
              style={{
                fontFamily:
                  '"GeistPixel-Square", ui-monospace, "SF Mono", Menlo, monospace',
                fontSize: '16px',
                backgroundColor: '#ff9d00',
                color: '#0a0a0c',
                boxShadow: 'rgba(255, 157, 0, 0.3) 0 0 8px 0',
                transition: 'background 0.15s, box-shadow 0.15s',
              }}
            >
              Open tool
            </a>
          </div>
        </div>

        <p
          style={{
            padding: '0 47px',
            marginTop: '24px',
            maxWidth: '674px',
            fontSize: '16px',
            lineHeight: '22px',
            color: 'rgba(51, 255, 51, 0.8)',
          }}
        >
          Turn any photo into ASCII art right on your device, or describe one
          and let AI create it — no signup, nothing uploaded.
        </p>
      </div>
    </section>
  );
}
