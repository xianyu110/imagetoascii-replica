import { createFileRoute } from '@tanstack/react-router';

import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { AskAISection } from '@/blocks/ask-ai';
import { FAQ } from '@/blocks/faq';
import { FinalCTASection } from '@/blocks/final-cta';
import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import { Hero } from '@/blocks/hero';
import { HowItWorksSection } from '@/blocks/how-it-works';
import { StylesSection } from '@/blocks/styles-section';
import { ToolSection } from '@/blocks/tool-section';
import { UseCasesSection } from '@/blocks/usecases';

/**
 * Image to ASCII — landing page clone.
 * Phosphor-green CRT terminal aesthetic on near-black background.
 */
function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0c] text-[#33ff33]">
      <Header />
      <main>
        <Hero />
        <ToolSection />
        <AskAISection />
        <StylesSection />
        <UseCasesSection />
        <HowItWorksSection />
        <FAQ />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export const Route = createFileRoute('/')({
  loader: () => {
    const locale = getLocale();
    return { locale };
  },
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'en';
    return {
      meta: [
        {
          name: 'description',
          content:
            'Image to ASCII — free online converter. Upload a photo or generate one with AI, then turn it into ASCII art in your browser. Export as PNG or text.',
        },
      ],
      links: [
        ...locales.map((loc) => ({
          rel: 'alternate',
          hrefLang: loc,
          href: `/${loc === 'en' ? '' : loc}`,
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: '/' },
      ],
    };
  },
  component: HomePage,
});
