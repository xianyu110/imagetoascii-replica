import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { envConfigs } from '@/config';
import { defaultLocale, locales } from '@/config/locale';

const PAGE_SLUGS = ['privacy-policy', 'terms-of-service'] as const;
type PageSlug = (typeof PAGE_SLUGS)[number];

type PageMeta = {
  title: string;
  description: string;
  updated_at: string;
};

type PageModule = {
  default: React.ComponentType;
  meta: PageMeta;
};

async function loadPage(
  slug: string,
  locale: string
): Promise<PageModule | null> {
  if (!PAGE_SLUGS.includes(slug as PageSlug)) return null;

  try {
    return (await import(
      `@/content/pages/${slug}.${locale}.mdx`
    )) as PageModule;
  } catch {
    if (locale === defaultLocale) return null;
    try {
      return (await import(
        `@/content/pages/${slug}.${defaultLocale}.mdx`
      )) as PageModule;
    } catch {
      return null;
    }
  }
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    PAGE_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = await loadPage(slug, locale);
  if (!page) return {};

  const canonical =
    locale === defaultLocale
      ? `${envConfigs.app_url}/${slug}`
      : `${envConfigs.app_url}/${locale}/${slug}`;

  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical },
  };
}

export default async function StaticPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const page = await loadPage(slug, locale);
  if (!page) notFound();

  const Content = page.default;
  const t = await getTranslations('common.pages');

  return (
    <article>
      <header className="mb-6 border-b border-border pb-5">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {page.meta.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {page.meta.description}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {t('last_updated')}: {page.meta.updated_at}
        </p>
      </header>
      <div className="text-[15px] leading-7 text-foreground/90">
        <Content />
      </div>
    </article>
  );
}
