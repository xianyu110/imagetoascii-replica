import * as crypto$1 from 'crypto';
import { randomBytes as randomBytes$1, timingSafeEqual } from 'crypto';
import { randomBytes, scrypt } from 'node:crypto';
import fs from 'node:fs';
import fsPromises, { mkdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { useEffect, useRef } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createFileRoute,
  createRootRoute,
  createRouter,
  HeadContent,
  lazyRouteComponent,
  notFound,
  Outlet,
  Scripts,
  useLoaderData,
} from '@tanstack/react-router';
import { useMDXComponents } from '@mdx-js/react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link as Link$2,
  Preview,
  render,
  Section,
  Text,
} from '@react-email/components';
import {
  and,
  asc,
  count,
  desc,
  eq,
  gt,
  gte,
  ilike,
  inArray,
  isNotNull,
  isNull,
  like,
  lt,
  lte,
  ne,
  notInArray,
  or,
  sql,
  sum,
} from 'drizzle-orm';
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import { ThemeProvider, useTheme } from 'next-themes';
import Replicate from 'replicate';
import { Resend } from 'resend';
import { Toaster } from 'sonner';
import Stripe from 'stripe';
import * as z$1 from 'zod';
import { z, ZodObject, ZodOptional } from 'zod';

import {
  c as createServerFn,
  n as deLocalizeUrl,
  r as getLocale,
  i as locales,
  o as localizeUrl,
} from '../server.js';
import { t as Route$77 } from './_slug-BFZG-Gyt.js';
import { t as Route$76 } from './blog-Cf1a6zyI.js';
import { t as __exportAll } from './chunk-D7D4PA-g.js';
import {
  l as betterFetch,
  u as createDefu,
  d as defu,
  n as getAuthClient,
  f as getBaseURL,
  p as getHost,
  m as getOrigin,
  h as getProtocol,
  g as isDynamicBaseURLConfig,
  y as PACKAGE_VERSION,
  _ as resolveBaseURL,
  c as useSession,
  v as wildcardMatch,
} from './client-CXZRF5YG.js';
import { n as sql$1 } from './compiled-query-XeoHuMeD.js';
import {
  t as createKyselyAdapter,
  n as getKyselyDatabaseType,
} from './dist-CitcucFH.js';
import {
  c as APIError,
  u as APIError$1,
  m as BASE_ERROR_CODES,
  l as BetterAuthError,
  d as BetterCallError,
  n as env,
  t as ENV,
  r as getBooleanEnvVar,
  i as getEnvVar,
  a as isDevelopment,
  o as isProduction,
  s as isTest,
  p as kAPIErrorHeaderSymbol,
  f as ValidationError,
} from './env-impl-DfE6feVB.js';
import {
  i as ATTR_CONTEXT,
  s as ATTR_DB_COLLECTION_NAME,
  a as ATTR_HOOK_TYPE,
  c as ATTR_HTTP_RESPONSE_STATUS_CODE,
  l as ATTR_HTTP_ROUTE,
  o as ATTR_OPERATION_ID,
  t as createAdapterFactory,
  h as createLogger,
  m as createRandomStringGenerator,
  p as generateId$1,
  u as getAuthTables,
  f as initGetFieldName,
  d as initGetModelName,
  g as logger,
  n as safeJSONParse,
  _ as shouldPublishLog,
  r as withSpan,
} from './factory-DSnfqGi2.js';
/* empty css                 */
import {
  xc as common_pages_last_updated,
  k as landing_pricing_description,
  A as landing_pricing_title,
} from './messages-DC2BhyRd.js';
import { n as getLocalPosts, i as mergePosts } from './posts-B8UvWEZG.js';
import {
  t as apikey,
  r as credit,
  v as db,
  b as envConfigs,
  i as inviteCode,
  a as order,
  o as permission,
  c as role,
  l as rolePermission,
  u as schema_exports,
  d as subscription,
  f as taxonomy,
  p as ticket,
  m as ticketMessage,
  h as user,
  g as userInvite,
  _ as userRole,
} from './schema-DUwBz_C6.js';
import { r as createSsrRpc } from './server-B7B6_04o.js';
import {
  t as create$2,
  n as getById,
  s as getSnowId,
  c as getUniSeq,
  l as getUuid,
  r as list$2,
  u as md5,
  i as remove$2,
  o as update$1,
} from './service-BTI8hC4J.js';
import {
  t as filterPublicConfigs,
  n as getAdminConfigs,
  r as getAllConfigs,
  i as getConfig,
  a as getCustomConfigs,
  o as getDbConfigs,
  s as isMaskedConfigValue,
  c as replaceCustomConfigs,
  l as saveConfigs,
} from './service-DtfYmNeb.js';
import { t as getTestSpec } from './settings-test-specs-BLIXgWgx.js';
import { t as usePublicConfig } from './use-public-config-CH8e7YtM.js';

//#region src/lib/query-client.ts
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3e4,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
}
var browserClient;
function getQueryClient() {
  if (typeof window === 'undefined') return makeQueryClient();
  if (!browserClient) browserClient = makeQueryClient();
  return browserClient;
}
//#endregion
//#region src/components/analytics/google-analytics.tsx
function GoogleAnalytics({ measurementId }) {
  if (!measurementId) return null;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('script', {
        id: 'ga-loader',
        src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
        async: true,
      }),
      /* @__PURE__ */ jsx('script', {
        id: 'ga-init',
        async: true,
        dangerouslySetInnerHTML: {
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}');`,
        },
      }),
    ],
  });
}
//#endregion
//#region src/components/analytics/plausible.tsx
function Plausible({ domain, src = 'https://plausible.io/js/script.js' }) {
  if (!domain) return null;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('script', {
        id: 'plausible-init',
        async: true,
        dangerouslySetInnerHTML: {
          __html: `window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};`,
        },
      }),
      /* @__PURE__ */ jsx('script', {
        id: 'plausible-loader',
        'data-domain': domain,
        src,
        defer: true,
        async: true,
      }),
    ],
  });
}
//#endregion
//#region src/components/customer-service/crisp.tsx
/**
 * Crisp live chat widget.
 * @see https://docs.crisp.chat/
 */
function Crisp({ websiteId }) {
  if (!websiteId) return null;
  return /* @__PURE__ */ jsx('script', {
    id: 'crisp-widget',
    async: true,
    dangerouslySetInnerHTML: {
      __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="${websiteId}";(function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
    },
  });
}
//#endregion
//#region src/components/customer-service/tawk.tsx
/**
 * Tawk.to live chat widget.
 * @see https://developer.tawk.to/jsapi/
 */
function Tawk({ propertyId, widgetId }) {
  if (!propertyId || !widgetId) return null;
  return /* @__PURE__ */ jsx('script', {
    id: 'tawk-widget',
    async: true,
    dangerouslySetInnerHTML: {
      __html: `var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src="https://embed.tawk.to/${propertyId}/${widgetId}";s1.charset="UTF-8";s1.setAttribute("crossorigin","*");s0.parentNode.insertBefore(s1,s0);})();`,
    },
  });
}
//#endregion
//#region src/components/customer-service/index.tsx
/**
 * Customer-service chat widgets — renders enabled providers.
 * Config data is passed as props (fetched via the root-route loader).
 */
function CustomerService({ crispWebsiteId, tawkPropertyId, tawkWidgetId }) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      crispWebsiteId
        ? /* @__PURE__ */ jsx(Crisp, { websiteId: crispWebsiteId })
        : null,
      tawkPropertyId && tawkWidgetId
        ? /* @__PURE__ */ jsx(Tawk, {
            propertyId: tawkPropertyId,
            widgetId: tawkWidgetId,
          })
        : null,
    ],
  });
}
//#endregion
//#region src/components/google-one-tap.tsx
function GoogleOneTap() {
  const { data: session, isPending } = useSession();
  const { data: configs } = usePublicConfig();
  const triggered = useRef(false);
  useEffect(() => {
    if (triggered.current) return;
    if (!configs) return;
    if (isPending) return;
    if (session?.user) return;
    if (configs.google_one_tap_enabled !== 'true' || !configs.google_client_id)
      return;
    triggered.current = true;
    getAuthClient(configs)
      .oneTap?.({
        callbackURL: '/',
        onPromptNotification: () => {},
      })
      .catch(() => {});
  }, [configs, session, isPending]);
  return null;
}
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
  const { theme = 'system' } = useTheme();
  return /* @__PURE__ */ jsx(Toaster, {
    theme,
    className: 'toaster group',
    icons: {
      success: /* @__PURE__ */ jsx(CircleCheckIcon, { className: 'size-4' }),
      info: /* @__PURE__ */ jsx(InfoIcon, { className: 'size-4' }),
      warning: /* @__PURE__ */ jsx(TriangleAlertIcon, { className: 'size-4' }),
      error: /* @__PURE__ */ jsx(OctagonXIcon, { className: 'size-4' }),
      loading: /* @__PURE__ */ jsx(Loader2Icon, {
        className: 'size-4 animate-spin',
      }),
    },
    style: {
      '--normal-bg': 'var(--popover)',
      '--normal-text': 'var(--popover-foreground)',
      '--normal-border': 'var(--border)',
      '--border-radius': 'var(--radius)',
    },
    toastOptions: { classNames: { toast: 'cn-toast' } },
    ...props,
  });
};
//#endregion
//#region src/routes/__root.tsx
var getAnalyticsConfigs = createServerFn().handler(
  createSsrRpc(
    'cbd81923ae1249d4c007f69579597cf1e79f1f7b8675cc608ba82e8926b5bb59'
  )
);
var Route$75 = createRootRoute({
  loader: () => getAnalyticsConfigs(),
  head: () => {
    const appUrl =
      (typeof window !== 'undefined' && window.location?.origin) ||
      envConfigs.app_url ||
      '';
    return {
      meta: [
        { charSet: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { title: 'Image to ASCII — Free Online ASCII Art Generator' },
        {
          name: 'description',
          content:
            'Image to ASCII — free online converter. Upload a photo or generate one with AI, then turn it into ASCII art in your browser. Export as PNG or text.',
        },
        {
          property: 'og:title',
          content: 'Image to ASCII — Free Online ASCII Art Generator',
        },
        {
          property: 'og:description',
          content:
            'Image to ASCII — free online converter. Upload a photo or generate one with AI, then turn it into ASCII art in your browser. Export as PNG or text.',
        },
        {
          property: 'og:image',
          content: '/seo/og.jpg',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'theme-color',
          content: '#0a0a0c',
        },
        {
          name: 'color-scheme',
          content: 'dark',
        },
      ],
      links: [
        {
          rel: 'icon',
          href: '/images/brand/favicon-32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: '/images/brand/favicon-16.png',
          sizes: '16x16',
        },
        {
          rel: 'apple-touch-icon',
          href: '/images/brand/apple-touch-icon.png',
          sizes: '180x180',
        },
        ...locales.map((loc) => ({
          rel: 'alternate',
          hrefLang: loc,
          href: localizeUrl(`${appUrl}/`, { locale: loc }).href,
        })),
      ],
    };
  },
  component: RootComponent,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: RootError,
});
function RootComponent() {
  const analytics = Route$75.useLoaderData();
  return /* @__PURE__ */ jsxs(QueryClientProvider, {
    client: getQueryClient(),
    children: [
      /* @__PURE__ */ jsxs(ThemeProvider, {
        attribute: 'class',
        defaultTheme: 'dark',
        enableSystem: false,
        disableTransitionOnChange: true,
        children: [
          /* @__PURE__ */ jsx(Outlet, {}),
          /* @__PURE__ */ jsx('div', { className: 'ia-crt' }),
          /* @__PURE__ */ jsx(Toaster$1, {
            position: 'top-center',
            richColors: true,
          }),
          /* @__PURE__ */ jsx(GoogleOneTap, {}),
          analytics?.gaId
            ? /* @__PURE__ */ jsx(GoogleAnalytics, {
                measurementId: analytics.gaId,
              })
            : null,
          analytics?.plausibleDomain
            ? /* @__PURE__ */ jsx(Plausible, {
                domain: analytics.plausibleDomain,
                src: analytics.plausibleSrc || void 0,
              })
            : null,
          /* @__PURE__ */ jsx(CustomerService, {
            crispWebsiteId: analytics?.crispWebsiteId || void 0,
            tawkPropertyId: analytics?.tawkPropertyId || void 0,
            tawkWidgetId: analytics?.tawkWidgetId || void 0,
          }),
        ],
      }),
      false,
    ],
  });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs('html', {
    lang: getLocale(),
    suppressHydrationWarning: true,
    className: 'dark',
    children: [
      /* @__PURE__ */ jsx('head', {
        children: /* @__PURE__ */ jsx(HeadContent, {}),
      }),
      /* @__PURE__ */ jsxs('body', {
        className: 'font-sans antialiased',
        style: {
          fontFamily:
            'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace',
        },
        children: [children, /* @__PURE__ */ jsx(Scripts, {})],
      }),
    ],
  });
}
function NotFound() {
  return /* @__PURE__ */ jsxs('div', {
    className:
      'bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-4',
    children: [
      /* @__PURE__ */ jsx('h1', {
        className: 'text-6xl font-bold',
        children: '404',
      }),
      /* @__PURE__ */ jsx('p', {
        className: 'text-muted-foreground',
        children: 'Page not found',
      }),
      /* @__PURE__ */ jsx('a', {
        href: '/',
        className: 'text-sm underline underline-offset-4',
        children: 'Back to home',
      }),
    ],
  });
}
function RootError({ error, reset }) {
  return /* @__PURE__ */ jsxs('div', {
    className:
      'bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-4',
    children: [
      /* @__PURE__ */ jsx('h1', {
        className: 'text-4xl font-bold',
        children: 'Oops',
      }),
      /* @__PURE__ */ jsx('p', {
        className: 'text-muted-foreground',
        children: 'Something went wrong. Please try again.',
      }),
      false,
      /* @__PURE__ */ jsx('button', {
        type: 'button',
        onClick: reset,
        className: 'text-sm underline underline-offset-4',
        children: 'Try again',
      }),
    ],
  });
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var STATIC_PATHS = [
  '',
  '/pricing',
  '/blog',
  '/privacy-policy',
  '/terms-of-service',
];
function urlFor(path, locale) {
  return localizeUrl(`${envConfigs.app_url}${path || '/'}`, { locale }).href;
}
function entryXml(e) {
  const alternates = locales
    .map(
      (loc) =>
        `    <xhtml:link rel="alternate" hreflang="${loc}" href="${urlFor(e.path, loc)}"/>`
    )
    .join('\n');
  return [
    '  <url>',
    `    <loc>${urlFor(e.path, 'en')}</loc>`,
    alternates,
    e.lastModified ? `    <lastmod>${e.lastModified}</lastmod>` : null,
    `    <changefreq>${e.changeFrequency}</changefreq>`,
    `    <priority>${e.priority}</priority>`,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');
}
var Route$74 = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const entries = STATIC_PATHS.map((path) => ({
          path,
          changeFrequency: path === '/blog' ? 'daily' : 'weekly',
          priority: path === '' ? 1 : 0.8,
        }));
        try {
          const { listPublishedArticles } =
            await import('./service-BTI8hC4J.js').then((n) => n.a);
          const posts = mergePosts(
            (await listPublishedArticles().catch(() => [])).map((row) => ({
              slug: row.slug,
              title: row.title || row.slug,
              description: row.description || '',
              createdAt: new Date(row.createdAt).toISOString(),
              source: 'db',
            })),
            getLocalPosts('en')
          );
          for (const post of posts)
            entries.push({
              path: `/blog/${post.slug}`,
              lastModified: post.createdAt,
              changeFrequency: 'monthly',
              priority: 0.6,
            });
        } catch {
          for (const post of getLocalPosts('en'))
            entries.push({
              path: `/blog/${post.slug}`,
              lastModified: post.createdAt,
              changeFrequency: 'monthly',
              priority: 0.6,
            });
        }
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...entries.map(entryXml),
          '</urlset>',
          '',
        ].join('\n');
        return new Response(xml, {
          headers: { 'Content-Type': 'application/xml' },
        });
      },
    },
  },
});
//#endregion
//#region src/routes/robots[.]txt.ts
var Route$73 = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: () => {
        const body = [
          'User-Agent: *',
          'Allow: /',
          'Disallow: /admin',
          'Disallow: /settings',
          'Disallow: /api/',
          'Disallow: /*?*',
          '',
          `Sitemap: ${envConfigs.app_url}/sitemap.xml`,
          '',
        ].join('\n');
        return new Response(body, {
          headers: { 'Content-Type': 'text/plain' },
        });
      },
    },
  },
});
//#endregion
//#region src/routes/pricing.tsx
var $$splitComponentImporter$29 = () => import('./pricing-Cho8VNyY.js');
var Route$72 = createFileRoute('/pricing')({
  loader: () => {
    const locale = getLocale();
    return {
      title: landing_pricing_title({}, { locale }),
      description: landing_pricing_description({}, { locale }),
    };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.title },
          {
            name: 'description',
            content: loaderData.description,
          },
        ]
      : [],
  }),
  component: lazyRouteComponent($$splitComponentImporter$29, 'component'),
});
//#endregion
//#region src/routes/llms[.]txt.ts
var STATIC_PAGES$1 = [
  {
    path: '',
    title: 'Home',
    description: 'Landing page',
  },
  {
    path: '/pricing',
    title: 'Pricing',
    description: 'Pricing plans',
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'Blog posts and articles',
  },
];
var Route$71 = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET: async () => {
        const { app_url, app_name, app_description } = envConfigs;
        let posts = getLocalPosts('en');
        try {
          const { listPublishedArticles } =
            await import('./service-BTI8hC4J.js').then((n) => n.a);
          posts = mergePosts(
            (await listPublishedArticles().catch(() => [])).map((row) => ({
              slug: row.slug,
              title: row.title || row.slug,
              description: row.description || '',
              createdAt: new Date(row.createdAt).toISOString(),
              source: 'db',
            })),
            posts
          );
        } catch {}
        const lines = [
          `# ${app_name}`,
          '',
          `> ${app_description}`,
          '',
          '## Pages',
          '',
          ...STATIC_PAGES$1.map(
            (p) => `- [${p.title}](${app_url}${p.path}): ${p.description}`
          ),
        ];
        if (posts.length > 0) {
          lines.push('', '## Blog Posts', '');
          for (const post of posts)
            lines.push(
              `- [${post.title}](${app_url}/blog/${post.slug}): ${post.description}`
            );
        }
        lines.push('');
        return new Response(lines.join('\n'), {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      },
    },
  },
});
//#endregion
//#region src/routes/llms-full[.]txt.ts
var STATIC_PAGES = [
  {
    path: '',
    title: 'Home',
    description: 'Landing page',
  },
  {
    path: '/pricing',
    title: 'Pricing',
    description: 'Pricing plans',
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'Blog posts and articles',
  },
];
var Route$70 = createFileRoute('/llms-full.txt')({
  server: {
    handlers: {
      GET: async () => {
        const { app_url, app_name, app_description } = envConfigs;
        const lines = [
          `# ${app_name}`,
          '',
          `> ${app_description}`,
          '',
          '## Pages',
          '',
          ...STATIC_PAGES.map(
            (p) => `- [${p.title}](${app_url}${p.path}): ${p.description}`
          ),
        ];
        let posts = getLocalPosts('en');
        try {
          const { listPublishedArticles, findPublishedBySlug } =
            await import('./service-BTI8hC4J.js').then((n) => n.a);
          posts = mergePosts(
            (await listPublishedArticles().catch(() => [])).map((row) => ({
              slug: row.slug,
              title: row.title || row.slug,
              description: row.description || '',
              createdAt: new Date(row.createdAt).toISOString(),
              source: 'db',
            })),
            posts
          );
          if (posts.length > 0) {
            lines.push('', '## Blog Posts', '');
            for (const post of posts) {
              lines.push(`### ${post.title}`, '');
              lines.push(`URL: ${app_url}/blog/${post.slug}`);
              if (post.description)
                lines.push(`Description: ${post.description}`);
              lines.push('');
              if (post.source === 'db') {
                const detail = await findPublishedBySlug(post.slug).catch(
                  () => null
                );
                if (detail?.content) lines.push(detail.content, '');
              }
              lines.push('---', '');
            }
          }
        } catch {
          if (posts.length > 0) {
            lines.push('', '## Blog Posts', '');
            for (const post of posts) {
              lines.push(`### ${post.title}`, '');
              lines.push(`URL: ${app_url}/blog/${post.slug}`);
              if (post.description)
                lines.push(`Description: ${post.description}`);
              lines.push('', '---', '');
            }
          }
        }
        lines.push('');
        return new Response(lines.join('\n'), {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      },
    },
  },
});
//#endregion
//#region src/routes/settings/route.tsx
var $$splitComponentImporter$28 = () => import('./route-B00VeUXy.js');
var Route$69 = createFileRoute('/settings')({
  component: lazyRouteComponent($$splitComponentImporter$28, 'component'),
});
//#endregion
//#region src/routes/admin/route.tsx
var $$splitComponentImporter$27 = () => import('./route-B7nlAbCt.js');
var Route$68 = createFileRoute('/admin')({
  component: lazyRouteComponent($$splitComponentImporter$27, 'component'),
});
//#endregion
//#region src/routes/(pages)/route.tsx
var $$splitComponentImporter$26 = () => import('./route-COWWxQH4.js');
var Route$67 = createFileRoute('/(pages)')({
  component: lazyRouteComponent($$splitComponentImporter$26, 'component'),
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$25 = () => import('./routes-CwVyc7zi.js');
/**
 * Image to ASCII — landing page clone.
 * Phosphor-green CRT terminal aesthetic on near-black background.
 */
var Route$66 = createFileRoute('/')({
  loader: () => {
    return { locale: getLocale() };
  },
  head: ({ loaderData }) => {
    loaderData?.locale;
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
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: '/',
        },
      ],
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$25, 'component'),
});
//#endregion
//#region src/routes/settings/index.tsx
var $$splitComponentImporter$24 = () => import('./settings-qsoJoQxD.js');
var Route$65 = createFileRoute('/settings/')({
  component: lazyRouteComponent($$splitComponentImporter$24, 'component'),
});
//#endregion
//#region src/routes/admin/index.tsx
var $$splitComponentImporter$23 = () => import('./admin-CZELHuer.js');
var Route$64 = createFileRoute('/admin/')({
  component: lazyRouteComponent($$splitComponentImporter$23, 'component'),
});
//#endregion
//#region src/routes/settings/tickets.tsx
var $$splitComponentImporter$22 = () => import('./tickets-sfULdC_-.js');
/** Extract uploaded URLs from uploader items; true while any upload is in flight. */
var Route$63 = createFileRoute('/settings/tickets')({
  component: lazyRouteComponent($$splitComponentImporter$22, 'component'),
});
//#endregion
//#region src/routes/settings/profile.tsx
var $$splitComponentImporter$21 = () => import('./profile-DwAVZeEB.js');
var Route$62 = createFileRoute('/settings/profile')({
  component: lazyRouteComponent($$splitComponentImporter$21, 'component'),
});
//#endregion
//#region src/routes/settings/payments.tsx
var $$splitComponentImporter$20 = () => import('./payments-BSEa2CjX.js');
var Route$61 = createFileRoute('/settings/payments')({
  component: lazyRouteComponent($$splitComponentImporter$20, 'component'),
});
//#endregion
//#region src/routes/settings/credits.tsx
var $$splitComponentImporter$19 = () => import('./credits-JnCindd2.js');
var Route$60 = createFileRoute('/settings/credits')({
  component: lazyRouteComponent($$splitComponentImporter$19, 'component'),
});
//#endregion
//#region src/routes/settings/billing.tsx
var $$splitComponentImporter$18 = () => import('./billing-BZDTjQT0.js');
var Route$59 = createFileRoute('/settings/billing')({
  component: lazyRouteComponent($$splitComponentImporter$18, 'component'),
});
//#endregion
//#region src/routes/settings/apikeys.tsx
var $$splitComponentImporter$17 = () => import('./apikeys-DGwyoJT6.js');
var Route$58 = createFileRoute('/settings/apikeys')({
  component: lazyRouteComponent($$splitComponentImporter$17, 'component'),
});
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/crypto/random.mjs
var generateRandomString = createRandomStringGenerator(
  'a-z',
  '0-9',
  'A-Z',
  '-_'
);
//#endregion
//#region node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/utils.js
/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */
function isBytes$1(a) {
  return (
    a instanceof Uint8Array ||
    (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array')
  );
}
/** Asserts something is positive integer. */
function anumber$1(n, title = '') {
  if (!Number.isSafeInteger(n) || n < 0) {
    const prefix = title && `"${title}" `;
    throw new Error(`${prefix}expected integer >= 0, got ${n}`);
  }
}
/** Asserts something is Uint8Array. */
function abytes$1(value, length, title = '') {
  const bytes = isBytes$1(value);
  const len = value?.length;
  const needsLen = length !== void 0;
  if (!bytes || (needsLen && len !== length)) {
    const prefix = title && `"${title}" `;
    const ofLen = needsLen ? ` of length ${length}` : '';
    const got = bytes ? `length=${len}` : `type=${typeof value}`;
    throw new Error(prefix + 'expected Uint8Array' + ofLen + ', got ' + got);
  }
  return value;
}
/** Asserts something is hash */
function ahash(h) {
  if (typeof h !== 'function' || typeof h.create !== 'function')
    throw new Error('Hash must wrapped by utils.createHasher');
  anumber$1(h.outputLen);
  anumber$1(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists$1(instance, checkFinished = true) {
  if (instance.destroyed) throw new Error('Hash instance has been destroyed');
  if (checkFinished && instance.finished)
    throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */
function aoutput$1(out, instance) {
  abytes$1(out, void 0, 'digestInto() output');
  const min = instance.outputLen;
  if (out.length < min)
    throw new Error('"digestInto() output" expected to be of length >=' + min);
}
/** Zeroize a byte array. Warning: JS provides no guarantees. */
function clean$1(...arrays) {
  for (let i = 0; i < arrays.length; i++) arrays[i].fill(0);
}
/** Create DataView of an array for easy byte-level manipulation. */
function createView$1(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */
function rotr(word, shift) {
  return (word << (32 - shift)) | (word >>> shift);
}
/** Creates function with outputLen, blockLen, create properties from a class constructor. */
function createHasher(hashCons, info = {}) {
  const hashC = (msg, opts) => hashCons(opts).update(msg).digest();
  const tmp = hashCons(void 0);
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  Object.assign(hashC, info);
  return Object.freeze(hashC);
}
/** Creates OID opts for NIST hashes, with prefix 06 09 60 86 48 01 65 03 04 02. */
var oidNist = (suffix) => ({
  oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, suffix]),
});
//#endregion
//#region node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/hmac.js
/**
 * HMAC: RFC2104 message authentication code.
 * @module
 */
/** Internal class for HMAC. */
var _HMAC = class {
  oHash;
  iHash;
  blockLen;
  outputLen;
  finished = false;
  destroyed = false;
  constructor(hash, key) {
    ahash(hash);
    abytes$1(key, void 0, 'key');
    this.iHash = hash.create();
    if (typeof this.iHash.update !== 'function')
      throw new Error('Expected instance of class which extends utils.Hash');
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad = new Uint8Array(blockLen);
    pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
    for (let i = 0; i < pad.length; i++) pad[i] ^= 54;
    this.iHash.update(pad);
    this.oHash = hash.create();
    for (let i = 0; i < pad.length; i++) pad[i] ^= 106;
    this.oHash.update(pad);
    clean$1(pad);
  }
  update(buf) {
    aexists$1(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    aexists$1(this);
    abytes$1(out, this.outputLen, 'output');
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to) {
    to ||= Object.create(Object.getPrototypeOf(this), {});
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to = to;
    to.finished = finished;
    to.destroyed = destroyed;
    to.blockLen = blockLen;
    to.outputLen = outputLen;
    to.oHash = oHash._cloneInto(to.oHash);
    to.iHash = iHash._cloneInto(to.iHash);
    return to;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
};
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 * @example
 * import { hmac } from '@noble/hashes/hmac';
 * import { sha256 } from '@noble/hashes/sha2';
 * const mac1 = hmac(sha256, 'key', 'message');
 */
var hmac = (hash, key, message) =>
  new _HMAC(hash, key).update(message).digest();
hmac.create = (hash, key) => new _HMAC(hash, key);
//#endregion
//#region node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/hkdf.js
/**
 * HKDF (RFC 5869): extract + expand in one step.
 * See https://soatok.blog/2021/11/17/understanding-hkdf/.
 * @module
 */
/**
 * HKDF-extract from spec. Less important part. `HKDF-Extract(IKM, salt) -> PRK`
 * Arguments position differs from spec (IKM is first one, since it is not optional)
 * @param hash - hash function that would be used (e.g. sha256)
 * @param ikm - input keying material, the initial key
 * @param salt - optional salt value (a non-secret random value)
 */
function extract(hash, ikm, salt) {
  ahash(hash);
  if (salt === void 0) salt = new Uint8Array(hash.outputLen);
  return hmac(hash, salt, ikm);
}
var HKDF_COUNTER = /* @__PURE__ */ Uint8Array.of(0);
var EMPTY_BUFFER = /* @__PURE__ */ Uint8Array.of();
/**
 * HKDF-expand from the spec. The most important part. `HKDF-Expand(PRK, info, L) -> OKM`
 * @param hash - hash function that would be used (e.g. sha256)
 * @param prk - a pseudorandom key of at least HashLen octets (usually, the output from the extract step)
 * @param info - optional context and application specific information (can be a zero-length string)
 * @param length - length of output keying material in bytes
 */
function expand(hash, prk, info, length = 32) {
  ahash(hash);
  anumber$1(length, 'length');
  const olen = hash.outputLen;
  if (length > 255 * olen) throw new Error('Length must be <= 255*HashLen');
  const blocks = Math.ceil(length / olen);
  if (info === void 0) info = EMPTY_BUFFER;
  else abytes$1(info, void 0, 'info');
  const okm = new Uint8Array(blocks * olen);
  const HMAC = hmac.create(hash, prk);
  const HMACTmp = HMAC._cloneInto();
  const T = new Uint8Array(HMAC.outputLen);
  for (let counter = 0; counter < blocks; counter++) {
    HKDF_COUNTER[0] = counter + 1;
    HMACTmp.update(counter === 0 ? EMPTY_BUFFER : T)
      .update(info)
      .update(HKDF_COUNTER)
      .digestInto(T);
    okm.set(T, olen * counter);
    HMAC._cloneInto(HMACTmp);
  }
  HMAC.destroy();
  HMACTmp.destroy();
  clean$1(T, HKDF_COUNTER);
  return okm.slice(0, length);
}
/**
 * HKDF (RFC 5869): derive keys from an initial input.
 * Combines hkdf_extract + hkdf_expand in one step
 * @param hash - hash function that would be used (e.g. sha256)
 * @param ikm - input keying material, the initial key
 * @param salt - optional salt value (a non-secret random value)
 * @param info - optional context and application specific information (can be a zero-length string)
 * @param length - length of output keying material in bytes
 * @example
 * import { hkdf } from '@noble/hashes/hkdf';
 * import { sha256 } from '@noble/hashes/sha2';
 * import { randomBytes } from '@noble/hashes/utils';
 * const inputKey = randomBytes(32);
 * const salt = randomBytes(32);
 * const info = 'application-key';
 * const hk1 = hkdf(sha256, inputKey, salt, info, 32);
 */
var hkdf = (hash, ikm, salt, info, length) =>
  expand(hash, extract(hash, ikm, salt), info, length);
//#endregion
//#region node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/_md.js
/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */
/** Choice: a ? b : c */
function Chi(a, b, c) {
  return (a & b) ^ (~a & c);
}
/** Majority function, true if any two inputs is true. */
function Maj(a, b, c) {
  return (a & b) ^ (a & c) ^ (b & c);
}
/**
 * Merkle-Damgard hash construction base class.
 * Could be used to create MD5, RIPEMD, SHA1, SHA2.
 */
var HashMD = class {
  blockLen;
  outputLen;
  padOffset;
  isLE;
  buffer;
  view;
  finished = false;
  length = 0;
  pos = 0;
  destroyed = false;
  constructor(blockLen, outputLen, padOffset, isLE) {
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView$1(this.buffer);
  }
  update(data) {
    aexists$1(this);
    abytes$1(data);
    const { view, buffer, blockLen } = this;
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView$1(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    aexists$1(this);
    aoutput$1(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    clean$1(this.buffer.subarray(pos));
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++) buffer[i] = 0;
    view.setBigUint64(blockLen - 8, BigInt(this.length * 8), isLE);
    this.process(view, 0);
    const oview = createView$1(out);
    const len = this.outputLen;
    if (len % 4) throw new Error('_sha2: outputLen must be aligned to 32bit');
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error('_sha2: outputLen bigger than state');
    for (let i = 0; i < outLen; i++) oview.setUint32(4 * i, state[i], isLE);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to ||= new this.constructor();
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.destroyed = destroyed;
    to.finished = finished;
    to.length = length;
    to.pos = pos;
    if (length % blockLen) to.buffer.set(buffer);
    return to;
  }
  clone() {
    return this._cloneInto();
  }
};
/**
 * Initial SHA-2 state: fractional parts of square roots of first 16 primes 2..53.
 * Check out `test/misc/sha2-gen-iv.js` for recomputation guide.
 */
/** Initial SHA256 state. Bits 0..32 of frac part of sqrt of primes 2..19 */
var SHA256_IV = /* @__PURE__ */ Uint32Array.from([
  1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
  528734635, 1541459225,
]);
//#endregion
//#region node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/sha2.js
/**
 * SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
 * SHA256 is the fastest hash implementable in JS, even faster than Blake3.
 * Check out [RFC 4634](https://www.rfc-editor.org/rfc/rfc4634) and
 * [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 */
/**
 * Round constants:
 * First 32 bits of fractional parts of the cube roots of the first 64 primes 2..311)
 */
var SHA256_K = /* @__PURE__ */ Uint32Array.from([
  1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
  2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
  1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
  264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
  2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
  113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
  1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
  3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
  430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
  1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
  2756734187, 3204031479, 3329325298,
]);
/** Reusable temporary buffer. "W" comes straight from spec. */
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
/** Internal 32-byte base SHA2 hash class. */
var SHA2_32B = class extends HashMD {
  constructor(outputLen) {
    super(64, outputLen, 8, false);
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ (W15 >>> 3);
      SHA256_W[i] =
        ((rotr(W2, 17) ^ rotr(W2, 19) ^ (W2 >>> 10)) +
          SHA256_W[i - 7] +
          s0 +
          SHA256_W[i - 16]) |
        0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
      const T2 = ((rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22)) + Maj(A, B, C)) | 0;
      H = G;
      G = F;
      F = E;
      E = (D + T1) | 0;
      D = C;
      C = B;
      B = A;
      A = (T1 + T2) | 0;
    }
    A = (A + this.A) | 0;
    B = (B + this.B) | 0;
    C = (C + this.C) | 0;
    D = (D + this.D) | 0;
    E = (E + this.E) | 0;
    F = (F + this.F) | 0;
    G = (G + this.G) | 0;
    H = (H + this.H) | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    clean$1(SHA256_W);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    clean$1(this.buffer);
  }
};
/** Internal SHA2-256 hash class. */
var _SHA256 = class extends SHA2_32B {
  A = SHA256_IV[0] | 0;
  B = SHA256_IV[1] | 0;
  C = SHA256_IV[2] | 0;
  D = SHA256_IV[3] | 0;
  E = SHA256_IV[4] | 0;
  F = SHA256_IV[5] | 0;
  G = SHA256_IV[6] | 0;
  H = SHA256_IV[7] | 0;
  constructor() {
    super(32);
  }
};
/**
 * SHA2-256 hash function from RFC 4634. In JS it's the fastest: even faster than Blake3. Some info:
 *
 * - Trying 2^128 hashes would get 50% chance of collision, using birthday attack.
 * - BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
 * - Each sha256 hash is executing 2^18 bit operations.
 * - Good 2024 ASICs can do 200Th/sec with 3500 watts of power, corresponding to 2^36 hashes/joule.
 */
var sha256 = /* @__PURE__ */ createHasher(
  () => new _SHA256(),
  /* @__PURE__ */ oidNist(1)
);
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var MAX_INT32 = 2 ** 32;
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  for (const buffer of buffers) {
    buf.set(buffer, i);
    i += buffer.length;
  }
  return buf;
}
function writeUInt32BE(buf, value, offset) {
  if (value < 0 || value >= MAX_INT32)
    throw new RangeError(
      `value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`
    );
  buf.set([value >>> 24, value >>> 16, value >>> 8, value & 255], offset);
}
function uint64be(value) {
  const high = Math.floor(value / MAX_INT32);
  const low = value % MAX_INT32;
  const buf = new Uint8Array(8);
  writeUInt32BE(buf, high, 0);
  writeUInt32BE(buf, low, 4);
  return buf;
}
function uint32be(value) {
  const buf = new Uint8Array(4);
  writeUInt32BE(buf, value);
  return buf;
}
function encode$1(string) {
  const bytes = new Uint8Array(string.length);
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (code > 127)
      throw new TypeError('non-ASCII string encountered in encode()');
    bytes[i] = code;
  }
  return bytes;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/base64.js
function encodeBase64(input) {
  if (Uint8Array.prototype.toBase64) return input.toBase64();
  const CHUNK_SIZE = 32768;
  const arr = [];
  for (let i = 0; i < input.length; i += CHUNK_SIZE)
    arr.push(
      String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE))
    );
  return btoa(arr.join(''));
}
function decodeBase64(encoded) {
  if (Uint8Array.fromBase64) return Uint8Array.fromBase64(encoded);
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/util/base64url.js
function decode(input) {
  if (Uint8Array.fromBase64)
    return Uint8Array.fromBase64(
      typeof input === 'string' ? input : decoder.decode(input),
      { alphabet: 'base64url' }
    );
  let encoded = input;
  if (encoded instanceof Uint8Array) encoded = decoder.decode(encoded);
  encoded = encoded.replace(/-/g, '+').replace(/_/g, '/');
  try {
    return decodeBase64(encoded);
  } catch {
    throw new TypeError('The input to be decoded is not correctly encoded.');
  }
}
function encode(input) {
  let unencoded = input;
  if (typeof unencoded === 'string') unencoded = encoder.encode(unencoded);
  if (Uint8Array.prototype.toBase64)
    return unencoded.toBase64({
      alphabet: 'base64url',
      omitPadding: true,
    });
  return encodeBase64(unencoded)
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/crypto_key.js
var unusable = (name, prop = 'algorithm.name') =>
  /* @__PURE__ */ new TypeError(
    `CryptoKey does not support this operation, its ${prop} must be ${name}`
  );
var isAlgorithm = (algorithm, name) => algorithm.name === name;
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function checkHashLength(algorithm, expected) {
  if (getHashLength(algorithm.hash) !== expected)
    throw unusable(`SHA-${expected}`, 'algorithm.hash');
}
function getNamedCurve(alg) {
  switch (alg) {
    case 'ES256':
      return 'P-256';
    case 'ES384':
      return 'P-384';
    case 'ES512':
      return 'P-521';
    default:
      throw new Error('unreachable');
  }
}
function checkUsage(key, usage) {
  if (usage && !key.usages.includes(usage))
    throw new TypeError(
      `CryptoKey does not support this operation, its usages must include ${usage}.`
    );
}
function checkSigCryptoKey(key, alg, usage) {
  switch (alg) {
    case 'HS256':
    case 'HS384':
    case 'HS512':
      if (!isAlgorithm(key.algorithm, 'HMAC')) throw unusable('HMAC');
      checkHashLength(key.algorithm, parseInt(alg.slice(2), 10));
      break;
    case 'RS256':
    case 'RS384':
    case 'RS512':
      if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5'))
        throw unusable('RSASSA-PKCS1-v1_5');
      checkHashLength(key.algorithm, parseInt(alg.slice(2), 10));
      break;
    case 'PS256':
    case 'PS384':
    case 'PS512':
      if (!isAlgorithm(key.algorithm, 'RSA-PSS')) throw unusable('RSA-PSS');
      checkHashLength(key.algorithm, parseInt(alg.slice(2), 10));
      break;
    case 'Ed25519':
    case 'EdDSA':
      if (!isAlgorithm(key.algorithm, 'Ed25519')) throw unusable('Ed25519');
      break;
    case 'ML-DSA-44':
    case 'ML-DSA-65':
    case 'ML-DSA-87':
      if (!isAlgorithm(key.algorithm, alg)) throw unusable(alg);
      break;
    case 'ES256':
    case 'ES384':
    case 'ES512': {
      if (!isAlgorithm(key.algorithm, 'ECDSA')) throw unusable('ECDSA');
      const expected = getNamedCurve(alg);
      if (key.algorithm.namedCurve !== expected)
        throw unusable(expected, 'algorithm.namedCurve');
      break;
    }
    default:
      throw new TypeError('CryptoKey does not support this operation');
  }
  checkUsage(key, usage);
}
function checkEncCryptoKey(key, alg, usage) {
  switch (alg) {
    case 'A128GCM':
    case 'A192GCM':
    case 'A256GCM': {
      if (!isAlgorithm(key.algorithm, 'AES-GCM')) throw unusable('AES-GCM');
      const expected = parseInt(alg.slice(1, 4), 10);
      if (key.algorithm.length !== expected)
        throw unusable(expected, 'algorithm.length');
      break;
    }
    case 'A128KW':
    case 'A192KW':
    case 'A256KW': {
      if (!isAlgorithm(key.algorithm, 'AES-KW')) throw unusable('AES-KW');
      const expected = parseInt(alg.slice(1, 4), 10);
      if (key.algorithm.length !== expected)
        throw unusable(expected, 'algorithm.length');
      break;
    }
    case 'ECDH':
      switch (key.algorithm.name) {
        case 'ECDH':
        case 'X25519':
          break;
        default:
          throw unusable('ECDH or X25519');
      }
      break;
    case 'PBES2-HS256+A128KW':
    case 'PBES2-HS384+A192KW':
    case 'PBES2-HS512+A256KW':
      if (!isAlgorithm(key.algorithm, 'PBKDF2')) throw unusable('PBKDF2');
      break;
    case 'RSA-OAEP':
    case 'RSA-OAEP-256':
    case 'RSA-OAEP-384':
    case 'RSA-OAEP-512':
      if (!isAlgorithm(key.algorithm, 'RSA-OAEP')) throw unusable('RSA-OAEP');
      checkHashLength(key.algorithm, parseInt(alg.slice(9), 10) || 1);
      break;
    default:
      throw new TypeError('CryptoKey does not support this operation');
  }
  checkUsage(key, usage);
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/invalid_key_input.js
function message(msg, actual, ...types) {
  types = types.filter(Boolean);
  if (types.length > 2) {
    const last = types.pop();
    msg += `one of type ${types.join(', ')}, or ${last}.`;
  } else if (types.length === 2)
    msg += `one of type ${types[0]} or ${types[1]}.`;
  else msg += `of type ${types[0]}.`;
  if (actual == null) msg += ` Received ${actual}`;
  else if (typeof actual === 'function' && actual.name)
    msg += ` Received function ${actual.name}`;
  else if (typeof actual === 'object' && actual != null) {
    if (actual.constructor?.name)
      msg += ` Received an instance of ${actual.constructor.name}`;
  }
  return msg;
}
var invalidKeyInput = (actual, ...types) =>
  message('Key must be ', actual, ...types);
var withAlg = (alg, actual, ...types) =>
  message(`Key for the ${alg} algorithm must be `, actual, ...types);
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/util/errors.js
var JOSEError = class extends Error {
  static code = 'ERR_JOSE_GENERIC';
  code = 'ERR_JOSE_GENERIC';
  constructor(message, options) {
    super(message, options);
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
var JWTClaimValidationFailed = class extends JOSEError {
  static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
  code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
  claim;
  reason;
  payload;
  constructor(message, payload, claim = 'unspecified', reason = 'unspecified') {
    super(message, {
      cause: {
        claim,
        reason,
        payload,
      },
    });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
};
var JWTExpired = class extends JOSEError {
  static code = 'ERR_JWT_EXPIRED';
  code = 'ERR_JWT_EXPIRED';
  claim;
  reason;
  payload;
  constructor(message, payload, claim = 'unspecified', reason = 'unspecified') {
    super(message, {
      cause: {
        claim,
        reason,
        payload,
      },
    });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
};
var JOSEAlgNotAllowed = class extends JOSEError {
  static code = 'ERR_JOSE_ALG_NOT_ALLOWED';
  code = 'ERR_JOSE_ALG_NOT_ALLOWED';
};
var JOSENotSupported = class extends JOSEError {
  static code = 'ERR_JOSE_NOT_SUPPORTED';
  code = 'ERR_JOSE_NOT_SUPPORTED';
};
var JWEDecryptionFailed = class extends JOSEError {
  static code = 'ERR_JWE_DECRYPTION_FAILED';
  code = 'ERR_JWE_DECRYPTION_FAILED';
  constructor(message = 'decryption operation failed', options) {
    super(message, options);
  }
};
var JWEInvalid = class extends JOSEError {
  static code = 'ERR_JWE_INVALID';
  code = 'ERR_JWE_INVALID';
};
var JWSInvalid = class extends JOSEError {
  static code = 'ERR_JWS_INVALID';
  code = 'ERR_JWS_INVALID';
};
var JWTInvalid = class extends JOSEError {
  static code = 'ERR_JWT_INVALID';
  code = 'ERR_JWT_INVALID';
};
var JWKInvalid = class extends JOSEError {
  static code = 'ERR_JWK_INVALID';
  code = 'ERR_JWK_INVALID';
};
var JWKSInvalid = class extends JOSEError {
  static code = 'ERR_JWKS_INVALID';
  code = 'ERR_JWKS_INVALID';
};
var JWKSNoMatchingKey = class extends JOSEError {
  static code = 'ERR_JWKS_NO_MATCHING_KEY';
  code = 'ERR_JWKS_NO_MATCHING_KEY';
  constructor(
    message = 'no applicable key found in the JSON Web Key Set',
    options
  ) {
    super(message, options);
  }
};
var JWKSMultipleMatchingKeys = class extends JOSEError {
  [Symbol.asyncIterator];
  static code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
  code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
  constructor(
    message = 'multiple matching keys found in the JSON Web Key Set',
    options
  ) {
    super(message, options);
  }
};
var JWKSTimeout = class extends JOSEError {
  static code = 'ERR_JWKS_TIMEOUT';
  code = 'ERR_JWKS_TIMEOUT';
  constructor(message = 'request timed out', options) {
    super(message, options);
  }
};
var JWSSignatureVerificationFailed = class extends JOSEError {
  static code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
  code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
  constructor(message = 'signature verification failed', options) {
    super(message, options);
  }
};
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/is_key_like.js
function assertCryptoKey(key) {
  if (!isCryptoKey(key)) throw new Error('CryptoKey instance expected');
}
var isCryptoKey = (key) => {
  if (key?.[Symbol.toStringTag] === 'CryptoKey') return true;
  try {
    return key instanceof CryptoKey;
  } catch {
    return false;
  }
};
var isKeyObject = (key) => key?.[Symbol.toStringTag] === 'KeyObject';
var isKeyLike = (key) => isCryptoKey(key) || isKeyObject(key);
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/content_encryption.js
function cekLength(alg) {
  switch (alg) {
    case 'A128GCM':
      return 128;
    case 'A192GCM':
      return 192;
    case 'A256GCM':
    case 'A128CBC-HS256':
      return 256;
    case 'A192CBC-HS384':
      return 384;
    case 'A256CBC-HS512':
      return 512;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var generateCek = (alg) =>
  crypto.getRandomValues(new Uint8Array(cekLength(alg) >> 3));
function checkCekLength(cek, expected) {
  const actual = cek.byteLength << 3;
  if (actual !== expected)
    throw new JWEInvalid(
      `Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`
    );
}
function ivBitLength(alg) {
  switch (alg) {
    case 'A128GCM':
    case 'A128GCMKW':
    case 'A192GCM':
    case 'A192GCMKW':
    case 'A256GCM':
    case 'A256GCMKW':
      return 96;
    case 'A128CBC-HS256':
    case 'A192CBC-HS384':
    case 'A256CBC-HS512':
      return 128;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var generateIv = (alg) =>
  crypto.getRandomValues(new Uint8Array(ivBitLength(alg) >> 3));
function checkIvLength(enc, iv) {
  if (iv.length << 3 !== ivBitLength(enc))
    throw new JWEInvalid('Invalid Initialization Vector length');
}
async function cbcKeySetup(enc, cek, usage) {
  if (!(cek instanceof Uint8Array))
    throw new TypeError(invalidKeyInput(cek, 'Uint8Array'));
  const keySize = parseInt(enc.slice(1, 4), 10);
  return {
    encKey: await crypto.subtle.importKey(
      'raw',
      cek.subarray(keySize >> 3),
      'AES-CBC',
      false,
      [usage]
    ),
    macKey: await crypto.subtle.importKey(
      'raw',
      cek.subarray(0, keySize >> 3),
      {
        hash: `SHA-${keySize << 1}`,
        name: 'HMAC',
      },
      false,
      ['sign']
    ),
    keySize,
  };
}
async function cbcHmacTag(macKey, macData, keySize) {
  return new Uint8Array(
    (await crypto.subtle.sign('HMAC', macKey, macData)).slice(0, keySize >> 3)
  );
}
async function cbcEncrypt(enc, plaintext, cek, iv, aad) {
  const { encKey, macKey, keySize } = await cbcKeySetup(enc, cek, 'encrypt');
  const ciphertext = new Uint8Array(
    await crypto.subtle.encrypt(
      {
        iv,
        name: 'AES-CBC',
      },
      encKey,
      plaintext
    )
  );
  return {
    ciphertext,
    tag: await cbcHmacTag(
      macKey,
      concat(aad, iv, ciphertext, uint64be(aad.length << 3)),
      keySize
    ),
    iv,
  };
}
async function timingSafeEqual$1(a, b) {
  if (!(a instanceof Uint8Array))
    throw new TypeError('First argument must be a buffer');
  if (!(b instanceof Uint8Array))
    throw new TypeError('Second argument must be a buffer');
  const algorithm = {
    name: 'HMAC',
    hash: 'SHA-256',
  };
  const key = await crypto.subtle.generateKey(algorithm, false, ['sign']);
  const aHmac = new Uint8Array(await crypto.subtle.sign(algorithm, key, a));
  const bHmac = new Uint8Array(await crypto.subtle.sign(algorithm, key, b));
  let out = 0;
  let i = -1;
  while (++i < 32) out |= aHmac[i] ^ bHmac[i];
  return out === 0;
}
async function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  const { encKey, macKey, keySize } = await cbcKeySetup(enc, cek, 'decrypt');
  const expectedTag = await cbcHmacTag(
    macKey,
    concat(aad, iv, ciphertext, uint64be(aad.length << 3)),
    keySize
  );
  let macCheckPassed;
  try {
    macCheckPassed = await timingSafeEqual$1(tag, expectedTag);
  } catch {}
  if (!macCheckPassed) throw new JWEDecryptionFailed();
  let plaintext;
  try {
    plaintext = new Uint8Array(
      await crypto.subtle.decrypt(
        {
          iv,
          name: 'AES-CBC',
        },
        encKey,
        ciphertext
      )
    );
  } catch {}
  if (!plaintext) throw new JWEDecryptionFailed();
  return plaintext;
}
async function gcmEncrypt(enc, plaintext, cek, iv, aad) {
  let encKey;
  if (cek instanceof Uint8Array)
    encKey = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, [
      'encrypt',
    ]);
  else {
    checkEncCryptoKey(cek, enc, 'encrypt');
    encKey = cek;
  }
  const encrypted = new Uint8Array(
    await crypto.subtle.encrypt(
      {
        additionalData: aad,
        iv,
        name: 'AES-GCM',
        tagLength: 128,
      },
      encKey,
      plaintext
    )
  );
  const tag = encrypted.slice(-16);
  return {
    ciphertext: encrypted.slice(0, -16),
    tag,
    iv,
  };
}
async function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
  let encKey;
  if (cek instanceof Uint8Array)
    encKey = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, [
      'decrypt',
    ]);
  else {
    checkEncCryptoKey(cek, enc, 'decrypt');
    encKey = cek;
  }
  try {
    return new Uint8Array(
      await crypto.subtle.decrypt(
        {
          additionalData: aad,
          iv,
          name: 'AES-GCM',
          tagLength: 128,
        },
        encKey,
        concat(ciphertext, tag)
      )
    );
  } catch {
    throw new JWEDecryptionFailed();
  }
}
var unsupportedEnc = 'Unsupported JWE Content Encryption Algorithm';
async function encrypt$1(enc, plaintext, cek, iv, aad) {
  if (!isCryptoKey(cek) && !(cek instanceof Uint8Array))
    throw new TypeError(
      invalidKeyInput(
        cek,
        'CryptoKey',
        'KeyObject',
        'Uint8Array',
        'JSON Web Key'
      )
    );
  if (iv) checkIvLength(enc, iv);
  else iv = generateIv(enc);
  switch (enc) {
    case 'A128CBC-HS256':
    case 'A192CBC-HS384':
    case 'A256CBC-HS512':
      if (cek instanceof Uint8Array)
        checkCekLength(cek, parseInt(enc.slice(-3), 10));
      return cbcEncrypt(enc, plaintext, cek, iv, aad);
    case 'A128GCM':
    case 'A192GCM':
    case 'A256GCM':
      if (cek instanceof Uint8Array)
        checkCekLength(cek, parseInt(enc.slice(1, 4), 10));
      return gcmEncrypt(enc, plaintext, cek, iv, aad);
    default:
      throw new JOSENotSupported(unsupportedEnc);
  }
}
async function decrypt$1(enc, cek, ciphertext, iv, tag, aad) {
  if (!isCryptoKey(cek) && !(cek instanceof Uint8Array))
    throw new TypeError(
      invalidKeyInput(
        cek,
        'CryptoKey',
        'KeyObject',
        'Uint8Array',
        'JSON Web Key'
      )
    );
  if (!iv) throw new JWEInvalid('JWE Initialization Vector missing');
  if (!tag) throw new JWEInvalid('JWE Authentication Tag missing');
  checkIvLength(enc, iv);
  switch (enc) {
    case 'A128CBC-HS256':
    case 'A192CBC-HS384':
    case 'A256CBC-HS512':
      if (cek instanceof Uint8Array)
        checkCekLength(cek, parseInt(enc.slice(-3), 10));
      return cbcDecrypt(enc, cek, ciphertext, iv, tag, aad);
    case 'A128GCM':
    case 'A192GCM':
    case 'A256GCM':
      if (cek instanceof Uint8Array)
        checkCekLength(cek, parseInt(enc.slice(1, 4), 10));
      return gcmDecrypt(enc, cek, ciphertext, iv, tag, aad);
    default:
      throw new JOSENotSupported(unsupportedEnc);
  }
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/helpers.js
var unprotected = Symbol();
function assertNotSet(value, name) {
  if (value) throw new TypeError(`${name} can only be called once`);
}
function decodeBase64url(value, label, ErrorClass) {
  try {
    return decode(value);
  } catch {
    throw new ErrorClass(`Failed to base64url decode the ${label}`);
  }
}
async function digest(algorithm, data) {
  const subtleDigest = `SHA-${algorithm.slice(-3)}`;
  return new Uint8Array(await crypto.subtle.digest(subtleDigest, data));
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/type_checks.js
var isObjectLike = (value) => typeof value === 'object' && value !== null;
function isObject(input) {
  if (
    !isObjectLike(input) ||
    Object.prototype.toString.call(input) !== '[object Object]'
  )
    return false;
  if (Object.getPrototypeOf(input) === null) return true;
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null)
    proto = Object.getPrototypeOf(proto);
  return Object.getPrototypeOf(input) === proto;
}
function isDisjoint(...headers) {
  const sources = headers.filter(Boolean);
  if (sources.length === 0 || sources.length === 1) return true;
  let acc;
  for (const header of sources) {
    const parameters = Object.keys(header);
    if (!acc || acc.size === 0) {
      acc = new Set(parameters);
      continue;
    }
    for (const parameter of parameters) {
      if (acc.has(parameter)) return false;
      acc.add(parameter);
    }
  }
  return true;
}
var isJWK = (key) => isObject(key) && typeof key.kty === 'string';
var isPrivateJWK = (key) =>
  key.kty !== 'oct' &&
  ((key.kty === 'AKP' && typeof key.priv === 'string') ||
    typeof key.d === 'string');
var isPublicJWK = (key) =>
  key.kty !== 'oct' && key.d === void 0 && key.priv === void 0;
var isSecretJWK = (key) => key.kty === 'oct' && typeof key.k === 'string';
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/aeskw.js
function checkKeySize(key, alg) {
  if (key.algorithm.length !== parseInt(alg.slice(1, 4), 10))
    throw new TypeError(`Invalid key size for alg: ${alg}`);
}
function getCryptoKey$2(key, alg, usage) {
  if (key instanceof Uint8Array)
    return crypto.subtle.importKey('raw', key, 'AES-KW', true, [usage]);
  checkEncCryptoKey(key, alg, usage);
  return key;
}
async function wrap$2(alg, key, cek) {
  const cryptoKey = await getCryptoKey$2(key, alg, 'wrapKey');
  checkKeySize(cryptoKey, alg);
  const cryptoKeyCek = await crypto.subtle.importKey(
    'raw',
    cek,
    {
      hash: 'SHA-256',
      name: 'HMAC',
    },
    true,
    ['sign']
  );
  return new Uint8Array(
    await crypto.subtle.wrapKey('raw', cryptoKeyCek, cryptoKey, 'AES-KW')
  );
}
async function unwrap$2(alg, key, encryptedKey) {
  const cryptoKey = await getCryptoKey$2(key, alg, 'unwrapKey');
  checkKeySize(cryptoKey, alg);
  const cryptoKeyCek = await crypto.subtle.unwrapKey(
    'raw',
    encryptedKey,
    cryptoKey,
    'AES-KW',
    {
      hash: 'SHA-256',
      name: 'HMAC',
    },
    true,
    ['sign']
  );
  return new Uint8Array(await crypto.subtle.exportKey('raw', cryptoKeyCek));
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/ecdhes.js
function lengthAndInput(input) {
  return concat(uint32be(input.length), input);
}
async function concatKdf(Z, L, OtherInfo) {
  const dkLen = L >> 3;
  const hashLen = 32;
  const reps = Math.ceil(dkLen / hashLen);
  const dk = new Uint8Array(reps * hashLen);
  for (let i = 1; i <= reps; i++) {
    const hashInput = new Uint8Array(4 + Z.length + OtherInfo.length);
    hashInput.set(uint32be(i), 0);
    hashInput.set(Z, 4);
    hashInput.set(OtherInfo, 4 + Z.length);
    const hashResult = await digest('sha256', hashInput);
    dk.set(hashResult, (i - 1) * hashLen);
  }
  return dk.slice(0, dkLen);
}
async function deriveKey$1(
  publicKey,
  privateKey,
  algorithm,
  keyLength,
  apu = new Uint8Array(),
  apv = new Uint8Array()
) {
  checkEncCryptoKey(publicKey, 'ECDH');
  checkEncCryptoKey(privateKey, 'ECDH', 'deriveBits');
  const otherInfo = concat(
    lengthAndInput(encode$1(algorithm)),
    lengthAndInput(apu),
    lengthAndInput(apv),
    uint32be(keyLength),
    new Uint8Array()
  );
  return concatKdf(
    new Uint8Array(
      await crypto.subtle.deriveBits(
        {
          name: publicKey.algorithm.name,
          public: publicKey,
        },
        privateKey,
        getEcdhBitLength(publicKey)
      )
    ),
    keyLength,
    otherInfo
  );
}
function getEcdhBitLength(publicKey) {
  if (publicKey.algorithm.name === 'X25519') return 256;
  return (
    Math.ceil(parseInt(publicKey.algorithm.namedCurve.slice(-3), 10) / 8) << 3
  );
}
function allowed(key) {
  switch (key.algorithm.namedCurve) {
    case 'P-256':
    case 'P-384':
    case 'P-521':
      return true;
    default:
      return key.algorithm.name === 'X25519';
  }
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/pbes2kw.js
function getCryptoKey$1(key, alg) {
  if (key instanceof Uint8Array)
    return crypto.subtle.importKey('raw', key, 'PBKDF2', false, ['deriveBits']);
  checkEncCryptoKey(key, alg, 'deriveBits');
  return key;
}
var concatSalt = (alg, p2sInput) =>
  concat(encode$1(alg), Uint8Array.of(0), p2sInput);
async function deriveKey(p2s, alg, p2c, key) {
  if (!(p2s instanceof Uint8Array) || p2s.length < 8)
    throw new JWEInvalid('PBES2 Salt Input must be 8 or more octets');
  const salt = concatSalt(alg, p2s);
  const keylen = parseInt(alg.slice(13, 16), 10);
  const subtleAlg = {
    hash: `SHA-${alg.slice(8, 11)}`,
    iterations: p2c,
    name: 'PBKDF2',
    salt,
  };
  const cryptoKey = await getCryptoKey$1(key, alg);
  return new Uint8Array(
    await crypto.subtle.deriveBits(subtleAlg, cryptoKey, keylen)
  );
}
async function wrap$1(
  alg,
  key,
  cek,
  p2c = 2048,
  p2s = crypto.getRandomValues(new Uint8Array(16))
) {
  const derived = await deriveKey(p2s, alg, p2c, key);
  return {
    encryptedKey: await wrap$2(alg.slice(-6), derived, cek),
    p2c,
    p2s: encode(p2s),
  };
}
async function unwrap$1(alg, key, encryptedKey, p2c, p2s) {
  const derived = await deriveKey(p2s, alg, p2c, key);
  return unwrap$2(alg.slice(-6), derived, encryptedKey);
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/signing.js
function checkKeyLength(alg, key) {
  if (alg.startsWith('RS') || alg.startsWith('PS')) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== 'number' || modulusLength < 2048)
      throw new TypeError(
        `${alg} requires key modulusLength to be 2048 bits or larger`
      );
  }
}
function subtleAlgorithm$1(alg, algorithm) {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case 'HS256':
    case 'HS384':
    case 'HS512':
      return {
        hash,
        name: 'HMAC',
      };
    case 'PS256':
    case 'PS384':
    case 'PS512':
      return {
        hash,
        name: 'RSA-PSS',
        saltLength: parseInt(alg.slice(-3), 10) >> 3,
      };
    case 'RS256':
    case 'RS384':
    case 'RS512':
      return {
        hash,
        name: 'RSASSA-PKCS1-v1_5',
      };
    case 'ES256':
    case 'ES384':
    case 'ES512':
      return {
        hash,
        name: 'ECDSA',
        namedCurve: algorithm.namedCurve,
      };
    case 'Ed25519':
    case 'EdDSA':
      return { name: 'Ed25519' };
    case 'ML-DSA-44':
    case 'ML-DSA-65':
    case 'ML-DSA-87':
      return { name: alg };
    default:
      throw new JOSENotSupported(
        `alg ${alg} is not supported either by JOSE or your javascript runtime`
      );
  }
}
async function getSigKey(alg, key, usage) {
  if (key instanceof Uint8Array) {
    if (!alg.startsWith('HS'))
      throw new TypeError(
        invalidKeyInput(key, 'CryptoKey', 'KeyObject', 'JSON Web Key')
      );
    return crypto.subtle.importKey(
      'raw',
      key,
      {
        hash: `SHA-${alg.slice(-3)}`,
        name: 'HMAC',
      },
      false,
      [usage]
    );
  }
  checkSigCryptoKey(key, alg, usage);
  return key;
}
async function sign(alg, key, data) {
  const cryptoKey = await getSigKey(alg, key, 'sign');
  checkKeyLength(alg, cryptoKey);
  const signature = await crypto.subtle.sign(
    subtleAlgorithm$1(alg, cryptoKey.algorithm),
    cryptoKey,
    data
  );
  return new Uint8Array(signature);
}
async function verify(alg, key, signature, data) {
  const cryptoKey = await getSigKey(alg, key, 'verify');
  checkKeyLength(alg, cryptoKey);
  const algorithm = subtleAlgorithm$1(alg, cryptoKey.algorithm);
  try {
    return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
  } catch {
    return false;
  }
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/rsaes.js
var subtleAlgorithm = (alg) => {
  switch (alg) {
    case 'RSA-OAEP':
    case 'RSA-OAEP-256':
    case 'RSA-OAEP-384':
    case 'RSA-OAEP-512':
      return 'RSA-OAEP';
    default:
      throw new JOSENotSupported(
        `alg ${alg} is not supported either by JOSE or your javascript runtime`
      );
  }
};
async function encrypt(alg, key, cek) {
  checkEncCryptoKey(key, alg, 'encrypt');
  checkKeyLength(alg, key);
  return new Uint8Array(
    await crypto.subtle.encrypt(subtleAlgorithm(alg), key, cek)
  );
}
async function decrypt(alg, key, encryptedKey) {
  checkEncCryptoKey(key, alg, 'decrypt');
  checkKeyLength(alg, key);
  return new Uint8Array(
    await crypto.subtle.decrypt(subtleAlgorithm(alg), key, encryptedKey)
  );
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/jwk_to_key.js
var unsupportedAlg =
  'Invalid or unsupported JWK "alg" (Algorithm) Parameter value';
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case 'AKP':
      switch (jwk.alg) {
        case 'ML-DSA-44':
        case 'ML-DSA-65':
        case 'ML-DSA-87':
          algorithm = { name: jwk.alg };
          keyUsages = jwk.priv ? ['sign'] : ['verify'];
          break;
        default:
          throw new JOSENotSupported(unsupportedAlg);
      }
      break;
    case 'RSA':
      switch (jwk.alg) {
        case 'PS256':
        case 'PS384':
        case 'PS512':
          algorithm = {
            name: 'RSA-PSS',
            hash: `SHA-${jwk.alg.slice(-3)}`,
          };
          keyUsages = jwk.d ? ['sign'] : ['verify'];
          break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
          algorithm = {
            name: 'RSASSA-PKCS1-v1_5',
            hash: `SHA-${jwk.alg.slice(-3)}`,
          };
          keyUsages = jwk.d ? ['sign'] : ['verify'];
          break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
          algorithm = {
            name: 'RSA-OAEP',
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`,
          };
          keyUsages = jwk.d ? ['decrypt', 'unwrapKey'] : ['encrypt', 'wrapKey'];
          break;
        default:
          throw new JOSENotSupported(unsupportedAlg);
      }
      break;
    case 'EC':
      switch (jwk.alg) {
        case 'ES256':
        case 'ES384':
        case 'ES512':
          algorithm = {
            name: 'ECDSA',
            namedCurve: {
              ES256: 'P-256',
              ES384: 'P-384',
              ES512: 'P-521',
            }[jwk.alg],
          };
          keyUsages = jwk.d ? ['sign'] : ['verify'];
          break;
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
          algorithm = {
            name: 'ECDH',
            namedCurve: jwk.crv,
          };
          keyUsages = jwk.d ? ['deriveBits'] : [];
          break;
        default:
          throw new JOSENotSupported(unsupportedAlg);
      }
      break;
    case 'OKP':
      switch (jwk.alg) {
        case 'Ed25519':
        case 'EdDSA':
          algorithm = { name: 'Ed25519' };
          keyUsages = jwk.d ? ['sign'] : ['verify'];
          break;
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ['deriveBits'] : [];
          break;
        default:
          throw new JOSENotSupported(unsupportedAlg);
      }
      break;
    default:
      throw new JOSENotSupported(
        'Invalid or unsupported JWK "kty" (Key Type) Parameter value'
      );
  }
  return {
    algorithm,
    keyUsages,
  };
}
async function jwkToKey(jwk) {
  if (!jwk.alg)
    throw new TypeError(
      '"alg" argument is required when "jwk.alg" is not present'
    );
  const { algorithm, keyUsages } = subtleMapping(jwk);
  const keyData = { ...jwk };
  if (keyData.kty !== 'AKP') delete keyData.alg;
  delete keyData.use;
  return crypto.subtle.importKey(
    'jwk',
    keyData,
    algorithm,
    jwk.ext ?? (jwk.d || jwk.priv ? false : true),
    jwk.key_ops ?? keyUsages
  );
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/normalize_key.js
var unusableForAlg =
  'given KeyObject instance cannot be used for this algorithm';
var cache$1;
var handleJWK = async (key, jwk, alg, freeze = false) => {
  cache$1 ||= /* @__PURE__ */ new WeakMap();
  let cached = cache$1.get(key);
  if (cached?.[alg]) return cached[alg];
  const cryptoKey = await jwkToKey({
    ...jwk,
    alg,
  });
  if (freeze) Object.freeze(key);
  if (!cached) cache$1.set(key, { [alg]: cryptoKey });
  else cached[alg] = cryptoKey;
  return cryptoKey;
};
var handleKeyObject = (keyObject, alg) => {
  cache$1 ||= /* @__PURE__ */ new WeakMap();
  let cached = cache$1.get(keyObject);
  if (cached?.[alg]) return cached[alg];
  const isPublic = keyObject.type === 'public';
  const extractable = isPublic ? true : false;
  let cryptoKey;
  if (keyObject.asymmetricKeyType === 'x25519') {
    switch (alg) {
      case 'ECDH-ES':
      case 'ECDH-ES+A128KW':
      case 'ECDH-ES+A192KW':
      case 'ECDH-ES+A256KW':
        break;
      default:
        throw new TypeError(unusableForAlg);
    }
    cryptoKey = keyObject.toCryptoKey(
      keyObject.asymmetricKeyType,
      extractable,
      isPublic ? [] : ['deriveBits']
    );
  }
  if (keyObject.asymmetricKeyType === 'ed25519') {
    if (alg !== 'EdDSA' && alg !== 'Ed25519')
      throw new TypeError(unusableForAlg);
    cryptoKey = keyObject.toCryptoKey(
      keyObject.asymmetricKeyType,
      extractable,
      [isPublic ? 'verify' : 'sign']
    );
  }
  switch (keyObject.asymmetricKeyType) {
    case 'ml-dsa-44':
    case 'ml-dsa-65':
    case 'ml-dsa-87':
      if (alg !== keyObject.asymmetricKeyType.toUpperCase())
        throw new TypeError(unusableForAlg);
      cryptoKey = keyObject.toCryptoKey(
        keyObject.asymmetricKeyType,
        extractable,
        [isPublic ? 'verify' : 'sign']
      );
  }
  if (keyObject.asymmetricKeyType === 'rsa') {
    let hash;
    switch (alg) {
      case 'RSA-OAEP':
        hash = 'SHA-1';
        break;
      case 'RS256':
      case 'PS256':
      case 'RSA-OAEP-256':
        hash = 'SHA-256';
        break;
      case 'RS384':
      case 'PS384':
      case 'RSA-OAEP-384':
        hash = 'SHA-384';
        break;
      case 'RS512':
      case 'PS512':
      case 'RSA-OAEP-512':
        hash = 'SHA-512';
        break;
      default:
        throw new TypeError(unusableForAlg);
    }
    if (alg.startsWith('RSA-OAEP'))
      return keyObject.toCryptoKey(
        {
          name: 'RSA-OAEP',
          hash,
        },
        extractable,
        isPublic ? ['encrypt'] : ['decrypt']
      );
    cryptoKey = keyObject.toCryptoKey(
      {
        name: alg.startsWith('PS') ? 'RSA-PSS' : 'RSASSA-PKCS1-v1_5',
        hash,
      },
      extractable,
      [isPublic ? 'verify' : 'sign']
    );
  }
  if (keyObject.asymmetricKeyType === 'ec') {
    const namedCurve = new Map([
      ['prime256v1', 'P-256'],
      ['secp384r1', 'P-384'],
      ['secp521r1', 'P-521'],
    ]).get(keyObject.asymmetricKeyDetails?.namedCurve);
    if (!namedCurve) throw new TypeError(unusableForAlg);
    const expectedCurve = {
      ES256: 'P-256',
      ES384: 'P-384',
      ES512: 'P-521',
    };
    if (expectedCurve[alg] && namedCurve === expectedCurve[alg])
      cryptoKey = keyObject.toCryptoKey(
        {
          name: 'ECDSA',
          namedCurve,
        },
        extractable,
        [isPublic ? 'verify' : 'sign']
      );
    if (alg.startsWith('ECDH-ES'))
      cryptoKey = keyObject.toCryptoKey(
        {
          name: 'ECDH',
          namedCurve,
        },
        extractable,
        isPublic ? [] : ['deriveBits']
      );
  }
  if (!cryptoKey) throw new TypeError(unusableForAlg);
  if (!cached) cache$1.set(keyObject, { [alg]: cryptoKey });
  else cached[alg] = cryptoKey;
  return cryptoKey;
};
async function normalizeKey(key, alg) {
  if (key instanceof Uint8Array) return key;
  if (isCryptoKey(key)) return key;
  if (isKeyObject(key)) {
    if (key.type === 'secret') return key.export();
    if ('toCryptoKey' in key && typeof key.toCryptoKey === 'function')
      try {
        return handleKeyObject(key, alg);
      } catch (err) {
        if (err instanceof TypeError) throw err;
      }
    return handleJWK(key, key.export({ format: 'jwk' }), alg);
  }
  if (isJWK(key)) {
    if (key.k) return decode(key.k);
    return handleJWK(key, key, alg, true);
  }
  throw new Error('unreachable');
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/key/import.js
async function importJWK(jwk, alg, options) {
  if (!isObject(jwk)) throw new TypeError('JWK must be an object');
  let ext;
  alg ??= jwk.alg;
  ext ??= options?.extractable ?? jwk.ext;
  switch (jwk.kty) {
    case 'oct':
      if (typeof jwk.k !== 'string' || !jwk.k)
        throw new TypeError('missing "k" (Key Value) Parameter value');
      return decode(jwk.k);
    case 'RSA':
      if ('oth' in jwk && jwk.oth !== void 0)
        throw new JOSENotSupported(
          'RSA JWK "oth" (Other Primes Info) Parameter value is not supported'
        );
      return jwkToKey({
        ...jwk,
        alg,
        ext,
      });
    case 'AKP':
      if (typeof jwk.alg !== 'string' || !jwk.alg)
        throw new TypeError('missing "alg" (Algorithm) Parameter value');
      if (alg !== void 0 && alg !== jwk.alg)
        throw new TypeError('JWK alg and alg option value mismatch');
      return jwkToKey({
        ...jwk,
        ext,
      });
    case 'EC':
    case 'OKP':
      return jwkToKey({
        ...jwk,
        alg,
        ext,
      });
    default:
      throw new JOSENotSupported(
        'Unsupported "kty" (Key Type) Parameter value'
      );
  }
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/key_to_jwk.js
async function keyToJWK(key) {
  if (isKeyObject(key))
    if (key.type === 'secret') key = key.export();
    else return key.export({ format: 'jwk' });
  if (key instanceof Uint8Array)
    return {
      kty: 'oct',
      k: encode(key),
    };
  if (!isCryptoKey(key))
    throw new TypeError(
      invalidKeyInput(key, 'CryptoKey', 'KeyObject', 'Uint8Array')
    );
  if (!key.extractable)
    throw new TypeError(
      'non-extractable CryptoKey cannot be exported as a JWK'
    );
  const { ext, key_ops, alg, use, ...jwk } = await crypto.subtle.exportKey(
    'jwk',
    key
  );
  if (jwk.kty === 'AKP') jwk.alg = alg;
  return jwk;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/key/export.js
async function exportJWK(key) {
  return keyToJWK(key);
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/aesgcmkw.js
async function wrap(alg, key, cek, iv) {
  const wrapped = await encrypt$1(
    alg.slice(0, 7),
    cek,
    key,
    iv,
    new Uint8Array()
  );
  return {
    encryptedKey: wrapped.ciphertext,
    iv: encode(wrapped.iv),
    tag: encode(wrapped.tag),
  };
}
async function unwrap(alg, key, encryptedKey, iv, tag) {
  return decrypt$1(
    alg.slice(0, 7),
    key,
    encryptedKey,
    iv,
    tag,
    new Uint8Array()
  );
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/key_management.js
var unsupportedAlgHeader =
  'Invalid or unsupported "alg" (JWE Algorithm) header value';
function assertEncryptedKey(encryptedKey) {
  if (encryptedKey === void 0)
    throw new JWEInvalid('JWE Encrypted Key missing');
}
async function decryptKeyManagement(
  alg,
  key,
  encryptedKey,
  joseHeader,
  options
) {
  switch (alg) {
    case 'dir':
      if (encryptedKey !== void 0)
        throw new JWEInvalid('Encountered unexpected JWE Encrypted Key');
      return key;
    case 'ECDH-ES':
      if (encryptedKey !== void 0)
        throw new JWEInvalid('Encountered unexpected JWE Encrypted Key');
    case 'ECDH-ES+A128KW':
    case 'ECDH-ES+A192KW':
    case 'ECDH-ES+A256KW': {
      if (!isObject(joseHeader.epk))
        throw new JWEInvalid(
          `JOSE Header "epk" (Ephemeral Public Key) missing or invalid`
        );
      assertCryptoKey(key);
      if (!allowed(key))
        throw new JOSENotSupported(
          'ECDH with the provided key is not allowed or not supported by your javascript runtime'
        );
      const epk = await importJWK(joseHeader.epk, alg);
      assertCryptoKey(epk);
      let partyUInfo;
      let partyVInfo;
      if (joseHeader.apu !== void 0) {
        if (typeof joseHeader.apu !== 'string')
          throw new JWEInvalid(
            `JOSE Header "apu" (Agreement PartyUInfo) invalid`
          );
        partyUInfo = decodeBase64url(joseHeader.apu, 'apu', JWEInvalid);
      }
      if (joseHeader.apv !== void 0) {
        if (typeof joseHeader.apv !== 'string')
          throw new JWEInvalid(
            `JOSE Header "apv" (Agreement PartyVInfo) invalid`
          );
        partyVInfo = decodeBase64url(joseHeader.apv, 'apv', JWEInvalid);
      }
      const sharedSecret = await deriveKey$1(
        epk,
        key,
        alg === 'ECDH-ES' ? joseHeader.enc : alg,
        alg === 'ECDH-ES'
          ? cekLength(joseHeader.enc)
          : parseInt(alg.slice(-5, -2), 10),
        partyUInfo,
        partyVInfo
      );
      if (alg === 'ECDH-ES') return sharedSecret;
      assertEncryptedKey(encryptedKey);
      return unwrap$2(alg.slice(-6), sharedSecret, encryptedKey);
    }
    case 'RSA-OAEP':
    case 'RSA-OAEP-256':
    case 'RSA-OAEP-384':
    case 'RSA-OAEP-512':
      assertEncryptedKey(encryptedKey);
      assertCryptoKey(key);
      return decrypt(alg, key, encryptedKey);
    case 'PBES2-HS256+A128KW':
    case 'PBES2-HS384+A192KW':
    case 'PBES2-HS512+A256KW': {
      assertEncryptedKey(encryptedKey);
      if (typeof joseHeader.p2c !== 'number')
        throw new JWEInvalid(
          `JOSE Header "p2c" (PBES2 Count) missing or invalid`
        );
      const p2cLimit = options?.maxPBES2Count || 1e4;
      if (joseHeader.p2c > p2cLimit)
        throw new JWEInvalid(
          `JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`
        );
      if (typeof joseHeader.p2s !== 'string')
        throw new JWEInvalid(
          `JOSE Header "p2s" (PBES2 Salt) missing or invalid`
        );
      let p2s;
      p2s = decodeBase64url(joseHeader.p2s, 'p2s', JWEInvalid);
      return unwrap$1(alg, key, encryptedKey, joseHeader.p2c, p2s);
    }
    case 'A128KW':
    case 'A192KW':
    case 'A256KW':
      assertEncryptedKey(encryptedKey);
      return unwrap$2(alg, key, encryptedKey);
    case 'A128GCMKW':
    case 'A192GCMKW':
    case 'A256GCMKW': {
      assertEncryptedKey(encryptedKey);
      if (typeof joseHeader.iv !== 'string')
        throw new JWEInvalid(
          `JOSE Header "iv" (Initialization Vector) missing or invalid`
        );
      if (typeof joseHeader.tag !== 'string')
        throw new JWEInvalid(
          `JOSE Header "tag" (Authentication Tag) missing or invalid`
        );
      let iv;
      iv = decodeBase64url(joseHeader.iv, 'iv', JWEInvalid);
      let tag;
      tag = decodeBase64url(joseHeader.tag, 'tag', JWEInvalid);
      return unwrap(alg, key, encryptedKey, iv, tag);
    }
    default:
      throw new JOSENotSupported(unsupportedAlgHeader);
  }
}
async function encryptKeyManagement(
  alg,
  enc,
  key,
  providedCek,
  providedParameters = {}
) {
  let encryptedKey;
  let parameters;
  let cek;
  switch (alg) {
    case 'dir':
      cek = key;
      break;
    case 'ECDH-ES':
    case 'ECDH-ES+A128KW':
    case 'ECDH-ES+A192KW':
    case 'ECDH-ES+A256KW': {
      assertCryptoKey(key);
      if (!allowed(key))
        throw new JOSENotSupported(
          'ECDH with the provided key is not allowed or not supported by your javascript runtime'
        );
      const { apu, apv } = providedParameters;
      let ephemeralKey;
      if (providedParameters.epk)
        ephemeralKey = await normalizeKey(providedParameters.epk, alg);
      else
        ephemeralKey = (
          await crypto.subtle.generateKey(key.algorithm, true, ['deriveBits'])
        ).privateKey;
      const { x, y, crv, kty } = await exportJWK(ephemeralKey);
      const sharedSecret = await deriveKey$1(
        key,
        ephemeralKey,
        alg === 'ECDH-ES' ? enc : alg,
        alg === 'ECDH-ES' ? cekLength(enc) : parseInt(alg.slice(-5, -2), 10),
        apu,
        apv
      );
      parameters = {
        epk: {
          x,
          crv,
          kty,
        },
      };
      if (kty === 'EC') parameters.epk.y = y;
      if (apu) parameters.apu = encode(apu);
      if (apv) parameters.apv = encode(apv);
      if (alg === 'ECDH-ES') {
        cek = sharedSecret;
        break;
      }
      cek = providedCek || generateCek(enc);
      encryptedKey = await wrap$2(alg.slice(-6), sharedSecret, cek);
      break;
    }
    case 'RSA-OAEP':
    case 'RSA-OAEP-256':
    case 'RSA-OAEP-384':
    case 'RSA-OAEP-512':
      cek = providedCek || generateCek(enc);
      assertCryptoKey(key);
      encryptedKey = await encrypt(alg, key, cek);
      break;
    case 'PBES2-HS256+A128KW':
    case 'PBES2-HS384+A192KW':
    case 'PBES2-HS512+A256KW': {
      cek = providedCek || generateCek(enc);
      const { p2c, p2s } = providedParameters;
      ({ encryptedKey, ...parameters } = await wrap$1(alg, key, cek, p2c, p2s));
      break;
    }
    case 'A128KW':
    case 'A192KW':
    case 'A256KW':
      cek = providedCek || generateCek(enc);
      encryptedKey = await wrap$2(alg, key, cek);
      break;
    case 'A128GCMKW':
    case 'A192GCMKW':
    case 'A256GCMKW': {
      cek = providedCek || generateCek(enc);
      const { iv } = providedParameters;
      ({ encryptedKey, ...parameters } = await wrap(alg, key, cek, iv));
      break;
    }
    default:
      throw new JOSENotSupported(unsupportedAlgHeader);
  }
  return {
    cek,
    encryptedKey,
    parameters,
  };
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/validate_crit.js
function validateCrit(
  Err,
  recognizedDefault,
  recognizedOption,
  protectedHeader,
  joseHeader
) {
  if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0)
    throw new Err(
      '"crit" (Critical) Header Parameter MUST be integrity protected'
    );
  if (!protectedHeader || protectedHeader.crit === void 0)
    return /* @__PURE__ */ new Set();
  if (
    !Array.isArray(protectedHeader.crit) ||
    protectedHeader.crit.length === 0 ||
    protectedHeader.crit.some(
      (input) => typeof input !== 'string' || input.length === 0
    )
  )
    throw new Err(
      '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present'
    );
  let recognized;
  if (recognizedOption !== void 0)
    recognized = new Map([
      ...Object.entries(recognizedOption),
      ...recognizedDefault.entries(),
    ]);
  else recognized = recognizedDefault;
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter))
      throw new JOSENotSupported(
        `Extension Header Parameter "${parameter}" is not recognized`
      );
    if (joseHeader[parameter] === void 0)
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    if (recognized.get(parameter) && protectedHeader[parameter] === void 0)
      throw new Err(
        `Extension Header Parameter "${parameter}" MUST be integrity protected`
      );
  }
  return new Set(protectedHeader.crit);
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/validate_algorithms.js
function validateAlgorithms(option, algorithms) {
  if (
    algorithms !== void 0 &&
    (!Array.isArray(algorithms) ||
      algorithms.some((s) => typeof s !== 'string'))
  )
    throw new TypeError(`"${option}" option must be an array of strings`);
  if (!algorithms) return;
  return new Set(algorithms);
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/check_key_type.js
var tag = (key) => key?.[Symbol.toStringTag];
var jwkMatchesOp = (alg, key, usage) => {
  if (key.use !== void 0) {
    let expected;
    switch (usage) {
      case 'sign':
      case 'verify':
        expected = 'sig';
        break;
      case 'encrypt':
      case 'decrypt':
        expected = 'enc';
        break;
    }
    if (key.use !== expected)
      throw new TypeError(
        `Invalid key for this operation, its "use" must be "${expected}" when present`
      );
  }
  if (key.alg !== void 0 && key.alg !== alg)
    throw new TypeError(
      `Invalid key for this operation, its "alg" must be "${alg}" when present`
    );
  if (Array.isArray(key.key_ops)) {
    let expectedKeyOp;
    switch (true) {
      case usage === 'sign' || usage === 'verify':
      case alg === 'dir':
      case alg.includes('CBC-HS'):
        expectedKeyOp = usage;
        break;
      case alg.startsWith('PBES2'):
        expectedKeyOp = 'deriveBits';
        break;
      case /^A\d{3}(?:GCM)?(?:KW)?$/.test(alg):
        if (!alg.includes('GCM') && alg.endsWith('KW'))
          expectedKeyOp = usage === 'encrypt' ? 'wrapKey' : 'unwrapKey';
        else expectedKeyOp = usage;
        break;
      case usage === 'encrypt' && alg.startsWith('RSA'):
        expectedKeyOp = 'wrapKey';
        break;
      case usage === 'decrypt':
        expectedKeyOp = alg.startsWith('RSA') ? 'unwrapKey' : 'deriveBits';
        break;
    }
    if (expectedKeyOp && key.key_ops?.includes?.(expectedKeyOp) === false)
      throw new TypeError(
        `Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`
      );
  }
  return true;
};
var symmetricTypeCheck = (alg, key, usage) => {
  if (key instanceof Uint8Array) return;
  if (isJWK(key)) {
    if (isSecretJWK(key) && jwkMatchesOp(alg, key, usage)) return;
    throw new TypeError(
      `JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`
    );
  }
  if (!isKeyLike(key))
    throw new TypeError(
      withAlg(alg, key, 'CryptoKey', 'KeyObject', 'JSON Web Key', 'Uint8Array')
    );
  if (key.type !== 'secret')
    throw new TypeError(
      `${tag(key)} instances for symmetric algorithms must be of type "secret"`
    );
};
var asymmetricTypeCheck = (alg, key, usage) => {
  if (isJWK(key))
    switch (usage) {
      case 'decrypt':
      case 'sign':
        if (isPrivateJWK(key) && jwkMatchesOp(alg, key, usage)) return;
        throw new TypeError(
          `JSON Web Key for this operation must be a private JWK`
        );
      case 'encrypt':
      case 'verify':
        if (isPublicJWK(key) && jwkMatchesOp(alg, key, usage)) return;
        throw new TypeError(
          `JSON Web Key for this operation must be a public JWK`
        );
    }
  if (!isKeyLike(key))
    throw new TypeError(
      withAlg(alg, key, 'CryptoKey', 'KeyObject', 'JSON Web Key')
    );
  if (key.type === 'secret')
    throw new TypeError(
      `${tag(key)} instances for asymmetric algorithms must not be of type "secret"`
    );
  if (key.type === 'public')
    switch (usage) {
      case 'sign':
        throw new TypeError(
          `${tag(key)} instances for asymmetric algorithm signing must be of type "private"`
        );
      case 'decrypt':
        throw new TypeError(
          `${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`
        );
    }
  if (key.type === 'private')
    switch (usage) {
      case 'verify':
        throw new TypeError(
          `${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`
        );
      case 'encrypt':
        throw new TypeError(
          `${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`
        );
    }
};
function checkKeyType(alg, key, usage) {
  switch (alg.substring(0, 2)) {
    case 'A1':
    case 'A2':
    case 'di':
    case 'HS':
    case 'PB':
      symmetricTypeCheck(alg, key, usage);
      break;
    default:
      asymmetricTypeCheck(alg, key, usage);
  }
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/deflate.js
function supported(name) {
  if (typeof globalThis[name] === 'undefined')
    throw new JOSENotSupported(
      `JWE "zip" (Compression Algorithm) Header Parameter requires the ${name} API.`
    );
}
async function compress(input) {
  supported('CompressionStream');
  const cs = new CompressionStream('deflate-raw');
  const writer = cs.writable.getWriter();
  writer.write(input).catch(() => {});
  writer.close().catch(() => {});
  const chunks = [];
  const reader = cs.readable.getReader();
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  return concat(...chunks);
}
async function decompress(input, maxLength) {
  supported('DecompressionStream');
  const ds = new DecompressionStream('deflate-raw');
  const writer = ds.writable.getWriter();
  writer.write(input).catch(() => {});
  writer.close().catch(() => {});
  const chunks = [];
  let length = 0;
  const reader = ds.readable.getReader();
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    chunks.push(value);
    length += value.byteLength;
    if (maxLength !== Infinity && length > maxLength)
      throw new JWEInvalid(
        'Decompressed plaintext exceeded the configured limit'
      );
  }
  return concat(...chunks);
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwe/flattened/decrypt.js
async function flattenedDecrypt(jwe, key, options) {
  if (!isObject(jwe)) throw new JWEInvalid('Flattened JWE must be an object');
  if (
    jwe.protected === void 0 &&
    jwe.header === void 0 &&
    jwe.unprotected === void 0
  )
    throw new JWEInvalid('JOSE Header missing');
  if (jwe.iv !== void 0 && typeof jwe.iv !== 'string')
    throw new JWEInvalid('JWE Initialization Vector incorrect type');
  if (typeof jwe.ciphertext !== 'string')
    throw new JWEInvalid('JWE Ciphertext missing or incorrect type');
  if (jwe.tag !== void 0 && typeof jwe.tag !== 'string')
    throw new JWEInvalid('JWE Authentication Tag incorrect type');
  if (jwe.protected !== void 0 && typeof jwe.protected !== 'string')
    throw new JWEInvalid('JWE Protected Header incorrect type');
  if (jwe.encrypted_key !== void 0 && typeof jwe.encrypted_key !== 'string')
    throw new JWEInvalid('JWE Encrypted Key incorrect type');
  if (jwe.aad !== void 0 && typeof jwe.aad !== 'string')
    throw new JWEInvalid('JWE AAD incorrect type');
  if (jwe.header !== void 0 && !isObject(jwe.header))
    throw new JWEInvalid('JWE Shared Unprotected Header incorrect type');
  if (jwe.unprotected !== void 0 && !isObject(jwe.unprotected))
    throw new JWEInvalid('JWE Per-Recipient Unprotected Header incorrect type');
  let parsedProt;
  if (jwe.protected)
    try {
      const protectedHeader = decode(jwe.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch {
      throw new JWEInvalid('JWE Protected Header is invalid');
    }
  if (!isDisjoint(parsedProt, jwe.header, jwe.unprotected))
    throw new JWEInvalid(
      'JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint'
    );
  const joseHeader = {
    ...parsedProt,
    ...jwe.header,
    ...jwe.unprotected,
  };
  validateCrit(
    JWEInvalid,
    /* @__PURE__ */ new Map(),
    options?.crit,
    parsedProt,
    joseHeader
  );
  if (joseHeader.zip !== void 0 && joseHeader.zip !== 'DEF')
    throw new JOSENotSupported(
      'Unsupported JWE "zip" (Compression Algorithm) Header Parameter value.'
    );
  if (joseHeader.zip !== void 0 && !parsedProt?.zip)
    throw new JWEInvalid(
      'JWE "zip" (Compression Algorithm) Header Parameter MUST be in a protected header.'
    );
  const { alg, enc } = joseHeader;
  if (typeof alg !== 'string' || !alg)
    throw new JWEInvalid('missing JWE Algorithm (alg) in JWE Header');
  if (typeof enc !== 'string' || !enc)
    throw new JWEInvalid(
      'missing JWE Encryption Algorithm (enc) in JWE Header'
    );
  const keyManagementAlgorithms =
    options &&
    validateAlgorithms(
      'keyManagementAlgorithms',
      options.keyManagementAlgorithms
    );
  const contentEncryptionAlgorithms =
    options &&
    validateAlgorithms(
      'contentEncryptionAlgorithms',
      options.contentEncryptionAlgorithms
    );
  if (
    (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg)) ||
    (!keyManagementAlgorithms && alg.startsWith('PBES2'))
  )
    throw new JOSEAlgNotAllowed(
      '"alg" (Algorithm) Header Parameter value not allowed'
    );
  if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc))
    throw new JOSEAlgNotAllowed(
      '"enc" (Encryption Algorithm) Header Parameter value not allowed'
    );
  let encryptedKey;
  if (jwe.encrypted_key !== void 0)
    encryptedKey = decodeBase64url(
      jwe.encrypted_key,
      'encrypted_key',
      JWEInvalid
    );
  let resolvedKey = false;
  if (typeof key === 'function') {
    key = await key(parsedProt, jwe);
    resolvedKey = true;
  }
  checkKeyType(alg === 'dir' ? enc : alg, key, 'decrypt');
  const k = await normalizeKey(key, alg);
  let cek;
  try {
    cek = await decryptKeyManagement(alg, k, encryptedKey, joseHeader, options);
  } catch (err) {
    if (
      err instanceof TypeError ||
      err instanceof JWEInvalid ||
      err instanceof JOSENotSupported
    )
      throw err;
    cek = generateCek(enc);
  }
  let iv;
  let tag;
  if (jwe.iv !== void 0) iv = decodeBase64url(jwe.iv, 'iv', JWEInvalid);
  if (jwe.tag !== void 0) tag = decodeBase64url(jwe.tag, 'tag', JWEInvalid);
  const protectedHeader =
    jwe.protected !== void 0 ? encode$1(jwe.protected) : new Uint8Array();
  let additionalData;
  if (jwe.aad !== void 0)
    additionalData = concat(protectedHeader, encode$1('.'), encode$1(jwe.aad));
  else additionalData = protectedHeader;
  const ciphertext = decodeBase64url(jwe.ciphertext, 'ciphertext', JWEInvalid);
  const plaintext = await decrypt$1(
    enc,
    cek,
    ciphertext,
    iv,
    tag,
    additionalData
  );
  const result = { plaintext };
  if (joseHeader.zip === 'DEF') {
    const maxDecompressedLength = options?.maxDecompressedLength ?? 25e4;
    if (maxDecompressedLength === 0)
      throw new JOSENotSupported(
        'JWE "zip" (Compression Algorithm) Header Parameter is not supported.'
      );
    if (
      maxDecompressedLength !== Infinity &&
      (!Number.isSafeInteger(maxDecompressedLength) ||
        maxDecompressedLength < 1)
    )
      throw new TypeError(
        'maxDecompressedLength must be 0, a positive safe integer, or Infinity'
      );
    result.plaintext = await decompress(plaintext, maxDecompressedLength).catch(
      (cause) => {
        if (cause instanceof JWEInvalid) throw cause;
        throw new JWEInvalid('Failed to decompress plaintext', { cause });
      }
    );
  }
  if (jwe.protected !== void 0) result.protectedHeader = parsedProt;
  if (jwe.aad !== void 0)
    result.additionalAuthenticatedData = decodeBase64url(
      jwe.aad,
      'aad',
      JWEInvalid
    );
  if (jwe.unprotected !== void 0)
    result.sharedUnprotectedHeader = jwe.unprotected;
  if (jwe.header !== void 0) result.unprotectedHeader = jwe.header;
  if (resolvedKey)
    return {
      ...result,
      key: k,
    };
  return result;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwe/compact/decrypt.js
async function compactDecrypt(jwe, key, options) {
  if (jwe instanceof Uint8Array) jwe = decoder.decode(jwe);
  if (typeof jwe !== 'string')
    throw new JWEInvalid('Compact JWE must be a string or Uint8Array');
  const {
    0: protectedHeader,
    1: encryptedKey,
    2: iv,
    3: ciphertext,
    4: tag,
    length,
  } = jwe.split('.');
  if (length !== 5) throw new JWEInvalid('Invalid Compact JWE');
  const decrypted = await flattenedDecrypt(
    {
      ciphertext,
      iv: iv || void 0,
      protected: protectedHeader,
      tag: tag || void 0,
      encrypted_key: encryptedKey || void 0,
    },
    key,
    options
  );
  const result = {
    plaintext: decrypted.plaintext,
    protectedHeader: decrypted.protectedHeader,
  };
  if (typeof key === 'function')
    return {
      ...result,
      key: decrypted.key,
    };
  return result;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwe/flattened/encrypt.js
var FlattenedEncrypt = class {
  #plaintext;
  #protectedHeader;
  #sharedUnprotectedHeader;
  #unprotectedHeader;
  #aad;
  #cek;
  #iv;
  #keyManagementParameters;
  constructor(plaintext) {
    if (!(plaintext instanceof Uint8Array))
      throw new TypeError('plaintext must be an instance of Uint8Array');
    this.#plaintext = plaintext;
  }
  setKeyManagementParameters(parameters) {
    assertNotSet(this.#keyManagementParameters, 'setKeyManagementParameters');
    this.#keyManagementParameters = parameters;
    return this;
  }
  setProtectedHeader(protectedHeader) {
    assertNotSet(this.#protectedHeader, 'setProtectedHeader');
    this.#protectedHeader = protectedHeader;
    return this;
  }
  setSharedUnprotectedHeader(sharedUnprotectedHeader) {
    assertNotSet(this.#sharedUnprotectedHeader, 'setSharedUnprotectedHeader');
    this.#sharedUnprotectedHeader = sharedUnprotectedHeader;
    return this;
  }
  setUnprotectedHeader(unprotectedHeader) {
    assertNotSet(this.#unprotectedHeader, 'setUnprotectedHeader');
    this.#unprotectedHeader = unprotectedHeader;
    return this;
  }
  setAdditionalAuthenticatedData(aad) {
    this.#aad = aad;
    return this;
  }
  setContentEncryptionKey(cek) {
    assertNotSet(this.#cek, 'setContentEncryptionKey');
    this.#cek = cek;
    return this;
  }
  setInitializationVector(iv) {
    assertNotSet(this.#iv, 'setInitializationVector');
    this.#iv = iv;
    return this;
  }
  async encrypt(key, options) {
    if (
      !this.#protectedHeader &&
      !this.#unprotectedHeader &&
      !this.#sharedUnprotectedHeader
    )
      throw new JWEInvalid(
        'either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()'
      );
    if (
      !isDisjoint(
        this.#protectedHeader,
        this.#unprotectedHeader,
        this.#sharedUnprotectedHeader
      )
    )
      throw new JWEInvalid(
        'JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint'
      );
    const joseHeader = {
      ...this.#protectedHeader,
      ...this.#unprotectedHeader,
      ...this.#sharedUnprotectedHeader,
    };
    validateCrit(
      JWEInvalid,
      /* @__PURE__ */ new Map(),
      options?.crit,
      this.#protectedHeader,
      joseHeader
    );
    if (joseHeader.zip !== void 0 && joseHeader.zip !== 'DEF')
      throw new JOSENotSupported(
        'Unsupported JWE "zip" (Compression Algorithm) Header Parameter value.'
      );
    if (joseHeader.zip !== void 0 && !this.#protectedHeader?.zip)
      throw new JWEInvalid(
        'JWE "zip" (Compression Algorithm) Header Parameter MUST be in a protected header.'
      );
    const { alg, enc } = joseHeader;
    if (typeof alg !== 'string' || !alg)
      throw new JWEInvalid(
        'JWE "alg" (Algorithm) Header Parameter missing or invalid'
      );
    if (typeof enc !== 'string' || !enc)
      throw new JWEInvalid(
        'JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid'
      );
    let encryptedKey;
    if (this.#cek && (alg === 'dir' || alg === 'ECDH-ES'))
      throw new TypeError(
        `setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${alg}`
      );
    checkKeyType(alg === 'dir' ? enc : alg, key, 'encrypt');
    let cek;
    {
      let parameters;
      const k = await normalizeKey(key, alg);
      ({ cek, encryptedKey, parameters } = await encryptKeyManagement(
        alg,
        enc,
        k,
        this.#cek,
        this.#keyManagementParameters
      ));
      if (parameters)
        if (options && unprotected in options)
          if (!this.#unprotectedHeader) this.setUnprotectedHeader(parameters);
          else
            this.#unprotectedHeader = {
              ...this.#unprotectedHeader,
              ...parameters,
            };
        else if (!this.#protectedHeader) this.setProtectedHeader(parameters);
        else
          this.#protectedHeader = {
            ...this.#protectedHeader,
            ...parameters,
          };
    }
    let additionalData;
    let protectedHeaderS;
    let protectedHeaderB;
    let aadMember;
    if (this.#protectedHeader) {
      protectedHeaderS = encode(JSON.stringify(this.#protectedHeader));
      protectedHeaderB = encode$1(protectedHeaderS);
    } else {
      protectedHeaderS = '';
      protectedHeaderB = new Uint8Array();
    }
    if (this.#aad) {
      aadMember = encode(this.#aad);
      const aadMemberBytes = encode$1(aadMember);
      additionalData = concat(protectedHeaderB, encode$1('.'), aadMemberBytes);
    } else additionalData = protectedHeaderB;
    let plaintext = this.#plaintext;
    if (joseHeader.zip === 'DEF')
      plaintext = await compress(plaintext).catch((cause) => {
        throw new JWEInvalid('Failed to compress plaintext', { cause });
      });
    const { ciphertext, tag, iv } = await encrypt$1(
      enc,
      plaintext,
      cek,
      this.#iv,
      additionalData
    );
    const jwe = { ciphertext: encode(ciphertext) };
    if (iv) jwe.iv = encode(iv);
    if (tag) jwe.tag = encode(tag);
    if (encryptedKey) jwe.encrypted_key = encode(encryptedKey);
    if (aadMember) jwe.aad = aadMember;
    if (this.#protectedHeader) jwe.protected = protectedHeaderS;
    if (this.#sharedUnprotectedHeader)
      jwe.unprotected = this.#sharedUnprotectedHeader;
    if (this.#unprotectedHeader) jwe.header = this.#unprotectedHeader;
    return jwe;
  }
};
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  if (!isObject(jws)) throw new JWSInvalid('Flattened JWS must be an object');
  if (jws.protected === void 0 && jws.header === void 0)
    throw new JWSInvalid(
      'Flattened JWS must have either of the "protected" or "header" members'
    );
  if (jws.protected !== void 0 && typeof jws.protected !== 'string')
    throw new JWSInvalid('JWS Protected Header incorrect type');
  if (jws.payload === void 0) throw new JWSInvalid('JWS Payload missing');
  if (typeof jws.signature !== 'string')
    throw new JWSInvalid('JWS Signature missing or incorrect type');
  if (jws.header !== void 0 && !isObject(jws.header))
    throw new JWSInvalid('JWS Unprotected Header incorrect type');
  let parsedProt = {};
  if (jws.protected)
    try {
      const protectedHeader = decode(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch {
      throw new JWSInvalid('JWS Protected Header is invalid');
    }
  if (!isDisjoint(parsedProt, jws.header))
    throw new JWSInvalid(
      'JWS Protected and JWS Unprotected Header Parameter names must be disjoint'
    );
  const joseHeader = {
    ...parsedProt,
    ...jws.header,
  };
  const extensions = validateCrit(
    JWSInvalid,
    new Map([['b64', true]]),
    options?.crit,
    parsedProt,
    joseHeader
  );
  let b64 = true;
  if (extensions.has('b64')) {
    b64 = parsedProt.b64;
    if (typeof b64 !== 'boolean')
      throw new JWSInvalid(
        'The "b64" (base64url-encode payload) Header Parameter must be a boolean'
      );
  }
  const { alg } = joseHeader;
  if (typeof alg !== 'string' || !alg)
    throw new JWSInvalid(
      'JWS "alg" (Algorithm) Header Parameter missing or invalid'
    );
  const algorithms =
    options && validateAlgorithms('algorithms', options.algorithms);
  if (algorithms && !algorithms.has(alg))
    throw new JOSEAlgNotAllowed(
      '"alg" (Algorithm) Header Parameter value not allowed'
    );
  if (b64) {
    if (typeof jws.payload !== 'string')
      throw new JWSInvalid('JWS Payload must be a string');
  } else if (
    typeof jws.payload !== 'string' &&
    !(jws.payload instanceof Uint8Array)
  )
    throw new JWSInvalid(
      'JWS Payload must be a string or an Uint8Array instance'
    );
  let resolvedKey = false;
  if (typeof key === 'function') {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  checkKeyType(alg, key, 'verify');
  const data = concat(
    jws.protected !== void 0 ? encode$1(jws.protected) : new Uint8Array(),
    encode$1('.'),
    typeof jws.payload === 'string'
      ? b64
        ? encode$1(jws.payload)
        : encoder.encode(jws.payload)
      : jws.payload
  );
  const signature = decodeBase64url(jws.signature, 'signature', JWSInvalid);
  const k = await normalizeKey(key, alg);
  if (!(await verify(alg, k, signature, data)))
    throw new JWSSignatureVerificationFailed();
  let payload;
  if (b64) payload = decodeBase64url(jws.payload, 'payload', JWSInvalid);
  else if (typeof jws.payload === 'string')
    payload = encoder.encode(jws.payload);
  else payload = jws.payload;
  const result = { payload };
  if (jws.protected !== void 0) result.protectedHeader = parsedProt;
  if (jws.header !== void 0) result.unprotectedHeader = jws.header;
  if (resolvedKey)
    return {
      ...result,
      key: k,
    };
  return result;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) jws = decoder.decode(jws);
  if (typeof jws !== 'string')
    throw new JWSInvalid('Compact JWS must be a string or Uint8Array');
  const {
    0: protectedHeader,
    1: payload,
    2: signature,
    length,
  } = jws.split('.');
  if (length !== 3) throw new JWSInvalid('Invalid Compact JWS');
  const verified = await flattenedVerify(
    {
      payload,
      protected: protectedHeader,
      signature,
    },
    key,
    options
  );
  const result = {
    payload: verified.payload,
    protectedHeader: verified.protectedHeader,
  };
  if (typeof key === 'function')
    return {
      ...result,
      key: verified.key,
    };
  return result;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/lib/jwt_claims_set.js
var epoch = (date) => Math.floor(date.getTime() / 1e3);
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var year = day * 365.25;
var REGEX$1 =
  /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
function secs(str) {
  const matched = REGEX$1.exec(str);
  if (!matched || (matched[4] && matched[1]))
    throw new TypeError('Invalid time period format');
  const value = parseFloat(matched[2]);
  const unit = matched[3].toLowerCase();
  let numericDate;
  switch (unit) {
    case 'sec':
    case 'secs':
    case 'second':
    case 'seconds':
    case 's':
      numericDate = Math.round(value);
      break;
    case 'minute':
    case 'minutes':
    case 'min':
    case 'mins':
    case 'm':
      numericDate = Math.round(value * minute);
      break;
    case 'hour':
    case 'hours':
    case 'hr':
    case 'hrs':
    case 'h':
      numericDate = Math.round(value * hour);
      break;
    case 'day':
    case 'days':
    case 'd':
      numericDate = Math.round(value * day);
      break;
    case 'week':
    case 'weeks':
    case 'w':
      numericDate = Math.round(value * week);
      break;
    default:
      numericDate = Math.round(value * year);
      break;
  }
  if (matched[1] === '-' || matched[4] === 'ago') return -numericDate;
  return numericDate;
}
function validateInput(label, input) {
  if (!Number.isFinite(input)) throw new TypeError(`Invalid ${label} input`);
  return input;
}
var normalizeTyp = (value) => {
  if (value.includes('/')) return value.toLowerCase();
  return `application/${value.toLowerCase()}`;
};
var checkAudiencePresence = (audPayload, audOption) => {
  if (typeof audPayload === 'string') return audOption.includes(audPayload);
  if (Array.isArray(audPayload))
    return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
  return false;
};
function validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
  let payload;
  try {
    payload = JSON.parse(decoder.decode(encodedPayload));
  } catch {}
  if (!isObject(payload))
    throw new JWTInvalid('JWT Claims Set must be a top-level JSON object');
  const { typ } = options;
  if (
    typ &&
    (typeof protectedHeader.typ !== 'string' ||
      normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))
  )
    throw new JWTClaimValidationFailed(
      'unexpected "typ" JWT header value',
      payload,
      'typ',
      'check_failed'
    );
  const {
    requiredClaims = [],
    issuer,
    subject,
    audience,
    maxTokenAge,
  } = options;
  const presenceCheck = [...requiredClaims];
  if (maxTokenAge !== void 0) presenceCheck.push('iat');
  if (audience !== void 0) presenceCheck.push('aud');
  if (subject !== void 0) presenceCheck.push('sub');
  if (issuer !== void 0) presenceCheck.push('iss');
  for (const claim of new Set(presenceCheck.reverse()))
    if (!(claim in payload))
      throw new JWTClaimValidationFailed(
        `missing required "${claim}" claim`,
        payload,
        claim,
        'missing'
      );
  if (
    issuer &&
    !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)
  )
    throw new JWTClaimValidationFailed(
      'unexpected "iss" claim value',
      payload,
      'iss',
      'check_failed'
    );
  if (subject && payload.sub !== subject)
    throw new JWTClaimValidationFailed(
      'unexpected "sub" claim value',
      payload,
      'sub',
      'check_failed'
    );
  if (
    audience &&
    !checkAudiencePresence(
      payload.aud,
      typeof audience === 'string' ? [audience] : audience
    )
  )
    throw new JWTClaimValidationFailed(
      'unexpected "aud" claim value',
      payload,
      'aud',
      'check_failed'
    );
  let tolerance;
  switch (typeof options.clockTolerance) {
    case 'string':
      tolerance = secs(options.clockTolerance);
      break;
    case 'number':
      tolerance = options.clockTolerance;
      break;
    case 'undefined':
      tolerance = 0;
      break;
    default:
      throw new TypeError('Invalid clockTolerance option type');
  }
  const { currentDate } = options;
  const now = epoch(currentDate || /* @__PURE__ */ new Date());
  if (
    (payload.iat !== void 0 || maxTokenAge) &&
    typeof payload.iat !== 'number'
  )
    throw new JWTClaimValidationFailed(
      '"iat" claim must be a number',
      payload,
      'iat',
      'invalid'
    );
  if (payload.nbf !== void 0) {
    if (typeof payload.nbf !== 'number')
      throw new JWTClaimValidationFailed(
        '"nbf" claim must be a number',
        payload,
        'nbf',
        'invalid'
      );
    if (payload.nbf > now + tolerance)
      throw new JWTClaimValidationFailed(
        '"nbf" claim timestamp check failed',
        payload,
        'nbf',
        'check_failed'
      );
  }
  if (payload.exp !== void 0) {
    if (typeof payload.exp !== 'number')
      throw new JWTClaimValidationFailed(
        '"exp" claim must be a number',
        payload,
        'exp',
        'invalid'
      );
    if (payload.exp <= now - tolerance)
      throw new JWTExpired(
        '"exp" claim timestamp check failed',
        payload,
        'exp',
        'check_failed'
      );
  }
  if (maxTokenAge) {
    const age = now - payload.iat;
    const max =
      typeof maxTokenAge === 'number' ? maxTokenAge : secs(maxTokenAge);
    if (age - tolerance > max)
      throw new JWTExpired(
        '"iat" claim timestamp check failed (too far in the past)',
        payload,
        'iat',
        'check_failed'
      );
    if (age < 0 - tolerance)
      throw new JWTClaimValidationFailed(
        '"iat" claim timestamp check failed (it should be in the past)',
        payload,
        'iat',
        'check_failed'
      );
  }
  return payload;
}
var JWTClaimsBuilder = class {
  #payload;
  constructor(payload) {
    if (!isObject(payload))
      throw new TypeError('JWT Claims Set MUST be an object');
    this.#payload = structuredClone(payload);
  }
  data() {
    return encoder.encode(JSON.stringify(this.#payload));
  }
  get iss() {
    return this.#payload.iss;
  }
  set iss(value) {
    this.#payload.iss = value;
  }
  get sub() {
    return this.#payload.sub;
  }
  set sub(value) {
    this.#payload.sub = value;
  }
  get aud() {
    return this.#payload.aud;
  }
  set aud(value) {
    this.#payload.aud = value;
  }
  set jti(value) {
    this.#payload.jti = value;
  }
  set nbf(value) {
    if (typeof value === 'number')
      this.#payload.nbf = validateInput('setNotBefore', value);
    else if (value instanceof Date)
      this.#payload.nbf = validateInput('setNotBefore', epoch(value));
    else this.#payload.nbf = epoch(/* @__PURE__ */ new Date()) + secs(value);
  }
  set exp(value) {
    if (typeof value === 'number')
      this.#payload.exp = validateInput('setExpirationTime', value);
    else if (value instanceof Date)
      this.#payload.exp = validateInput('setExpirationTime', epoch(value));
    else this.#payload.exp = epoch(/* @__PURE__ */ new Date()) + secs(value);
  }
  set iat(value) {
    if (value === void 0) this.#payload.iat = epoch(/* @__PURE__ */ new Date());
    else if (value instanceof Date)
      this.#payload.iat = validateInput('setIssuedAt', epoch(value));
    else if (typeof value === 'string')
      this.#payload.iat = validateInput(
        'setIssuedAt',
        epoch(/* @__PURE__ */ new Date()) + secs(value)
      );
    else this.#payload.iat = validateInput('setIssuedAt', value);
  }
};
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  const verified = await compactVerify(jwt, key, options);
  if (
    verified.protectedHeader.crit?.includes('b64') &&
    verified.protectedHeader.b64 === false
  )
    throw new JWTInvalid('JWTs MUST NOT use unencoded payload');
  const result = {
    payload: validateClaimsSet(
      verified.protectedHeader,
      verified.payload,
      options
    ),
    protectedHeader: verified.protectedHeader,
  };
  if (typeof key === 'function')
    return {
      ...result,
      key: verified.key,
    };
  return result;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwt/decrypt.js
async function jwtDecrypt(jwt, key, options) {
  const decrypted = await compactDecrypt(jwt, key, options);
  const payload = validateClaimsSet(
    decrypted.protectedHeader,
    decrypted.plaintext,
    options
  );
  const { protectedHeader } = decrypted;
  if (protectedHeader.iss !== void 0 && protectedHeader.iss !== payload.iss)
    throw new JWTClaimValidationFailed(
      'replicated "iss" claim header parameter mismatch',
      payload,
      'iss',
      'mismatch'
    );
  if (protectedHeader.sub !== void 0 && protectedHeader.sub !== payload.sub)
    throw new JWTClaimValidationFailed(
      'replicated "sub" claim header parameter mismatch',
      payload,
      'sub',
      'mismatch'
    );
  if (
    protectedHeader.aud !== void 0 &&
    JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)
  )
    throw new JWTClaimValidationFailed(
      'replicated "aud" claim header parameter mismatch',
      payload,
      'aud',
      'mismatch'
    );
  const result = {
    payload,
    protectedHeader,
  };
  if (typeof key === 'function')
    return {
      ...result,
      key: decrypted.key,
    };
  return result;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwe/compact/encrypt.js
var CompactEncrypt = class {
  #flattened;
  constructor(plaintext) {
    this.#flattened = new FlattenedEncrypt(plaintext);
  }
  setContentEncryptionKey(cek) {
    this.#flattened.setContentEncryptionKey(cek);
    return this;
  }
  setInitializationVector(iv) {
    this.#flattened.setInitializationVector(iv);
    return this;
  }
  setProtectedHeader(protectedHeader) {
    this.#flattened.setProtectedHeader(protectedHeader);
    return this;
  }
  setKeyManagementParameters(parameters) {
    this.#flattened.setKeyManagementParameters(parameters);
    return this;
  }
  async encrypt(key, options) {
    const jwe = await this.#flattened.encrypt(key, options);
    return [
      jwe.protected,
      jwe.encrypted_key,
      jwe.iv,
      jwe.ciphertext,
      jwe.tag,
    ].join('.');
  }
};
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jws/flattened/sign.js
var FlattenedSign = class {
  #payload;
  #protectedHeader;
  #unprotectedHeader;
  constructor(payload) {
    if (!(payload instanceof Uint8Array))
      throw new TypeError('payload must be an instance of Uint8Array');
    this.#payload = payload;
  }
  setProtectedHeader(protectedHeader) {
    assertNotSet(this.#protectedHeader, 'setProtectedHeader');
    this.#protectedHeader = protectedHeader;
    return this;
  }
  setUnprotectedHeader(unprotectedHeader) {
    assertNotSet(this.#unprotectedHeader, 'setUnprotectedHeader');
    this.#unprotectedHeader = unprotectedHeader;
    return this;
  }
  async sign(key, options) {
    if (!this.#protectedHeader && !this.#unprotectedHeader)
      throw new JWSInvalid(
        'either setProtectedHeader or setUnprotectedHeader must be called before #sign()'
      );
    if (!isDisjoint(this.#protectedHeader, this.#unprotectedHeader))
      throw new JWSInvalid(
        'JWS Protected and JWS Unprotected Header Parameter names must be disjoint'
      );
    const joseHeader = {
      ...this.#protectedHeader,
      ...this.#unprotectedHeader,
    };
    const extensions = validateCrit(
      JWSInvalid,
      new Map([['b64', true]]),
      options?.crit,
      this.#protectedHeader,
      joseHeader
    );
    let b64 = true;
    if (extensions.has('b64')) {
      b64 = this.#protectedHeader.b64;
      if (typeof b64 !== 'boolean')
        throw new JWSInvalid(
          'The "b64" (base64url-encode payload) Header Parameter must be a boolean'
        );
    }
    const { alg } = joseHeader;
    if (typeof alg !== 'string' || !alg)
      throw new JWSInvalid(
        'JWS "alg" (Algorithm) Header Parameter missing or invalid'
      );
    checkKeyType(alg, key, 'sign');
    let payloadS;
    let payloadB;
    if (b64) {
      payloadS = encode(this.#payload);
      payloadB = encode$1(payloadS);
    } else {
      payloadB = this.#payload;
      payloadS = '';
    }
    let protectedHeaderString;
    let protectedHeaderBytes;
    if (this.#protectedHeader) {
      protectedHeaderString = encode(JSON.stringify(this.#protectedHeader));
      protectedHeaderBytes = encode$1(protectedHeaderString);
    } else {
      protectedHeaderString = '';
      protectedHeaderBytes = new Uint8Array();
    }
    const data = concat(protectedHeaderBytes, encode$1('.'), payloadB);
    const jws = {
      signature: encode(await sign(alg, await normalizeKey(key, alg), data)),
      payload: payloadS,
    };
    if (this.#unprotectedHeader) jws.header = this.#unprotectedHeader;
    if (this.#protectedHeader) jws.protected = protectedHeaderString;
    return jws;
  }
};
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jws/compact/sign.js
var CompactSign = class {
  #flattened;
  constructor(payload) {
    this.#flattened = new FlattenedSign(payload);
  }
  setProtectedHeader(protectedHeader) {
    this.#flattened.setProtectedHeader(protectedHeader);
    return this;
  }
  async sign(key, options) {
    const jws = await this.#flattened.sign(key, options);
    if (jws.payload === void 0)
      throw new TypeError(
        'use the flattened module for creating JWS with b64: false'
      );
    return `${jws.protected}.${jws.payload}.${jws.signature}`;
  }
};
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwt/sign.js
var SignJWT = class {
  #protectedHeader;
  #jwt;
  constructor(payload = {}) {
    this.#jwt = new JWTClaimsBuilder(payload);
  }
  setIssuer(issuer) {
    this.#jwt.iss = issuer;
    return this;
  }
  setSubject(subject) {
    this.#jwt.sub = subject;
    return this;
  }
  setAudience(audience) {
    this.#jwt.aud = audience;
    return this;
  }
  setJti(jwtId) {
    this.#jwt.jti = jwtId;
    return this;
  }
  setNotBefore(input) {
    this.#jwt.nbf = input;
    return this;
  }
  setExpirationTime(input) {
    this.#jwt.exp = input;
    return this;
  }
  setIssuedAt(input) {
    this.#jwt.iat = input;
    return this;
  }
  setProtectedHeader(protectedHeader) {
    this.#protectedHeader = protectedHeader;
    return this;
  }
  async sign(key, options) {
    const sig = new CompactSign(this.#jwt.data());
    sig.setProtectedHeader(this.#protectedHeader);
    if (
      Array.isArray(this.#protectedHeader?.crit) &&
      this.#protectedHeader.crit.includes('b64') &&
      this.#protectedHeader.b64 === false
    )
      throw new JWTInvalid('JWTs MUST NOT use unencoded payload');
    return sig.sign(key, options);
  }
};
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwt/encrypt.js
var EncryptJWT = class {
  #cek;
  #iv;
  #keyManagementParameters;
  #protectedHeader;
  #replicateIssuerAsHeader;
  #replicateSubjectAsHeader;
  #replicateAudienceAsHeader;
  #jwt;
  constructor(payload = {}) {
    this.#jwt = new JWTClaimsBuilder(payload);
  }
  setIssuer(issuer) {
    this.#jwt.iss = issuer;
    return this;
  }
  setSubject(subject) {
    this.#jwt.sub = subject;
    return this;
  }
  setAudience(audience) {
    this.#jwt.aud = audience;
    return this;
  }
  setJti(jwtId) {
    this.#jwt.jti = jwtId;
    return this;
  }
  setNotBefore(input) {
    this.#jwt.nbf = input;
    return this;
  }
  setExpirationTime(input) {
    this.#jwt.exp = input;
    return this;
  }
  setIssuedAt(input) {
    this.#jwt.iat = input;
    return this;
  }
  setProtectedHeader(protectedHeader) {
    assertNotSet(this.#protectedHeader, 'setProtectedHeader');
    this.#protectedHeader = protectedHeader;
    return this;
  }
  setKeyManagementParameters(parameters) {
    assertNotSet(this.#keyManagementParameters, 'setKeyManagementParameters');
    this.#keyManagementParameters = parameters;
    return this;
  }
  setContentEncryptionKey(cek) {
    assertNotSet(this.#cek, 'setContentEncryptionKey');
    this.#cek = cek;
    return this;
  }
  setInitializationVector(iv) {
    assertNotSet(this.#iv, 'setInitializationVector');
    this.#iv = iv;
    return this;
  }
  replicateIssuerAsHeader() {
    this.#replicateIssuerAsHeader = true;
    return this;
  }
  replicateSubjectAsHeader() {
    this.#replicateSubjectAsHeader = true;
    return this;
  }
  replicateAudienceAsHeader() {
    this.#replicateAudienceAsHeader = true;
    return this;
  }
  async encrypt(key, options) {
    const enc = new CompactEncrypt(this.#jwt.data());
    if (
      this.#protectedHeader &&
      (this.#replicateIssuerAsHeader ||
        this.#replicateSubjectAsHeader ||
        this.#replicateAudienceAsHeader)
    )
      this.#protectedHeader = {
        ...this.#protectedHeader,
        iss: this.#replicateIssuerAsHeader ? this.#jwt.iss : void 0,
        sub: this.#replicateSubjectAsHeader ? this.#jwt.sub : void 0,
        aud: this.#replicateAudienceAsHeader ? this.#jwt.aud : void 0,
      };
    enc.setProtectedHeader(this.#protectedHeader);
    if (this.#iv) enc.setInitializationVector(this.#iv);
    if (this.#cek) enc.setContentEncryptionKey(this.#cek);
    if (this.#keyManagementParameters)
      enc.setKeyManagementParameters(this.#keyManagementParameters);
    return enc.encrypt(key, options);
  }
};
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwk/thumbprint.js
var check = (value, description) => {
  if (typeof value !== 'string' || !value)
    throw new JWKInvalid(`${description} missing or invalid`);
};
async function calculateJwkThumbprint(key, digestAlgorithm) {
  let jwk;
  if (isJWK(key)) jwk = key;
  else if (isKeyLike(key)) jwk = await exportJWK(key);
  else
    throw new TypeError(
      invalidKeyInput(key, 'CryptoKey', 'KeyObject', 'JSON Web Key')
    );
  digestAlgorithm ??= 'sha256';
  if (
    digestAlgorithm !== 'sha256' &&
    digestAlgorithm !== 'sha384' &&
    digestAlgorithm !== 'sha512'
  )
    throw new TypeError(
      'digestAlgorithm must one of "sha256", "sha384", or "sha512"'
    );
  let components;
  switch (jwk.kty) {
    case 'AKP':
      check(jwk.alg, '"alg" (Algorithm) Parameter');
      check(jwk.pub, '"pub" (Public key) Parameter');
      components = {
        alg: jwk.alg,
        kty: jwk.kty,
        pub: jwk.pub,
      };
      break;
    case 'EC':
      check(jwk.crv, '"crv" (Curve) Parameter');
      check(jwk.x, '"x" (X Coordinate) Parameter');
      check(jwk.y, '"y" (Y Coordinate) Parameter');
      components = {
        crv: jwk.crv,
        kty: jwk.kty,
        x: jwk.x,
        y: jwk.y,
      };
      break;
    case 'OKP':
      check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
      check(jwk.x, '"x" (Public Key) Parameter');
      components = {
        crv: jwk.crv,
        kty: jwk.kty,
        x: jwk.x,
      };
      break;
    case 'RSA':
      check(jwk.e, '"e" (Exponent) Parameter');
      check(jwk.n, '"n" (Modulus) Parameter');
      components = {
        e: jwk.e,
        kty: jwk.kty,
        n: jwk.n,
      };
      break;
    case 'oct':
      check(jwk.k, '"k" (Key Value) Parameter');
      components = {
        k: jwk.k,
        kty: jwk.kty,
      };
      break;
    default:
      throw new JOSENotSupported(
        '"kty" (Key Type) Parameter missing or unsupported'
      );
  }
  const data = encode$1(JSON.stringify(components));
  return encode(await digest(digestAlgorithm, data));
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwks/local.js
function getKtyFromAlg(alg) {
  switch (typeof alg === 'string' && alg.slice(0, 2)) {
    case 'RS':
    case 'PS':
      return 'RSA';
    case 'ES':
      return 'EC';
    case 'Ed':
      return 'OKP';
    case 'ML':
      return 'AKP';
    default:
      throw new JOSENotSupported(
        'Unsupported "alg" value for a JSON Web Key Set'
      );
  }
}
function isJWKSLike(jwks) {
  return (
    jwks &&
    typeof jwks === 'object' &&
    Array.isArray(jwks.keys) &&
    jwks.keys.every(isJWKLike)
  );
}
function isJWKLike(key) {
  return isObject(key);
}
var LocalJWKSet = class {
  #jwks;
  #cached = /* @__PURE__ */ new WeakMap();
  constructor(jwks) {
    if (!isJWKSLike(jwks)) throw new JWKSInvalid('JSON Web Key Set malformed');
    this.#jwks = structuredClone(jwks);
  }
  jwks() {
    return this.#jwks;
  }
  async getKey(protectedHeader, token) {
    const { alg, kid } = {
      ...protectedHeader,
      ...token?.header,
    };
    const kty = getKtyFromAlg(alg);
    const candidates = this.#jwks.keys.filter((jwk) => {
      let candidate = kty === jwk.kty;
      if (candidate && typeof kid === 'string') candidate = kid === jwk.kid;
      if (candidate && (typeof jwk.alg === 'string' || kty === 'AKP'))
        candidate = alg === jwk.alg;
      if (candidate && typeof jwk.use === 'string')
        candidate = jwk.use === 'sig';
      if (candidate && Array.isArray(jwk.key_ops))
        candidate = jwk.key_ops.includes('verify');
      if (candidate)
        switch (alg) {
          case 'ES256':
            candidate = jwk.crv === 'P-256';
            break;
          case 'ES384':
            candidate = jwk.crv === 'P-384';
            break;
          case 'ES512':
            candidate = jwk.crv === 'P-521';
            break;
          case 'Ed25519':
          case 'EdDSA':
            candidate = jwk.crv === 'Ed25519';
            break;
        }
      return candidate;
    });
    const { 0: jwk, length } = candidates;
    if (length === 0) throw new JWKSNoMatchingKey();
    if (length !== 1) {
      const error = new JWKSMultipleMatchingKeys();
      const _cached = this.#cached;
      error[Symbol.asyncIterator] = async function* () {
        for (const jwk of candidates)
          try {
            yield await importWithAlgCache(_cached, jwk, alg);
          } catch {}
      };
      throw error;
    }
    return importWithAlgCache(this.#cached, jwk, alg);
  }
};
async function importWithAlgCache(cache, jwk, alg) {
  const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
  if (cached[alg] === void 0) {
    const key = await importJWK(
      {
        ...jwk,
        ext: true,
      },
      alg
    );
    if (key instanceof Uint8Array || key.type !== 'public')
      throw new JWKSInvalid('JSON Web Key Set members must be public keys');
    cached[alg] = key;
  }
  return cached[alg];
}
function createLocalJWKSet(jwks) {
  const set = new LocalJWKSet(jwks);
  const localJWKSet = async (protectedHeader, token) =>
    set.getKey(protectedHeader, token);
  Object.defineProperties(localJWKSet, {
    jwks: {
      value: () => structuredClone(set.jwks()),
      enumerable: false,
      configurable: false,
      writable: false,
    },
  });
  return localJWKSet;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/jwks/remote.js
function isCloudflareWorkers() {
  return (
    typeof WebSocketPair !== 'undefined' ||
    (typeof navigator !== 'undefined' &&
      navigator.userAgent === 'Cloudflare-Workers') ||
    (typeof EdgeRuntime !== 'undefined' && EdgeRuntime === 'vercel')
  );
}
var USER_AGENT;
if (
  typeof navigator === 'undefined' ||
  !navigator.userAgent?.startsWith?.('Mozilla/5.0 ')
)
  USER_AGENT = `jose/v6.2.2`;
var customFetch = Symbol();
async function fetchJwks(url, headers, signal, fetchImpl = fetch) {
  const response = await fetchImpl(url, {
    method: 'GET',
    signal,
    redirect: 'manual',
    headers,
  }).catch((err) => {
    if (err.name === 'TimeoutError') throw new JWKSTimeout();
    throw err;
  });
  if (response.status !== 200)
    throw new JOSEError(
      'Expected 200 OK from the JSON Web Key Set HTTP response'
    );
  try {
    return await response.json();
  } catch {
    throw new JOSEError(
      'Failed to parse the JSON Web Key Set HTTP response as JSON'
    );
  }
}
var jwksCache = Symbol();
function isFreshJwksCache(input, cacheMaxAge) {
  if (typeof input !== 'object' || input === null) return false;
  if (
    !('uat' in input) ||
    typeof input.uat !== 'number' ||
    Date.now() - input.uat >= cacheMaxAge
  )
    return false;
  if (
    !('jwks' in input) ||
    !isObject(input.jwks) ||
    !Array.isArray(input.jwks.keys) ||
    !Array.prototype.every.call(input.jwks.keys, isObject)
  )
    return false;
  return true;
}
var RemoteJWKSet = class {
  #url;
  #timeoutDuration;
  #cooldownDuration;
  #cacheMaxAge;
  #jwksTimestamp;
  #pendingFetch;
  #headers;
  #customFetch;
  #local;
  #cache;
  constructor(url, options) {
    if (!(url instanceof URL))
      throw new TypeError('url must be an instance of URL');
    this.#url = new URL(url.href);
    this.#timeoutDuration =
      typeof options?.timeoutDuration === 'number'
        ? options?.timeoutDuration
        : 5e3;
    this.#cooldownDuration =
      typeof options?.cooldownDuration === 'number'
        ? options?.cooldownDuration
        : 3e4;
    this.#cacheMaxAge =
      typeof options?.cacheMaxAge === 'number' ? options?.cacheMaxAge : 6e5;
    this.#headers = new Headers(options?.headers);
    if (USER_AGENT && !this.#headers.has('User-Agent'))
      this.#headers.set('User-Agent', USER_AGENT);
    if (!this.#headers.has('accept')) {
      this.#headers.set('accept', 'application/json');
      this.#headers.append('accept', 'application/jwk-set+json');
    }
    this.#customFetch = options?.[customFetch];
    if (options?.[jwksCache] !== void 0) {
      this.#cache = options?.[jwksCache];
      if (isFreshJwksCache(options?.[jwksCache], this.#cacheMaxAge)) {
        this.#jwksTimestamp = this.#cache.uat;
        this.#local = createLocalJWKSet(this.#cache.jwks);
      }
    }
  }
  pendingFetch() {
    return !!this.#pendingFetch;
  }
  coolingDown() {
    return typeof this.#jwksTimestamp === 'number'
      ? Date.now() < this.#jwksTimestamp + this.#cooldownDuration
      : false;
  }
  fresh() {
    return typeof this.#jwksTimestamp === 'number'
      ? Date.now() < this.#jwksTimestamp + this.#cacheMaxAge
      : false;
  }
  jwks() {
    return this.#local?.jwks();
  }
  async getKey(protectedHeader, token) {
    if (!this.#local || !this.fresh()) await this.reload();
    try {
      return await this.#local(protectedHeader, token);
    } catch (err) {
      if (err instanceof JWKSNoMatchingKey) {
        if (this.coolingDown() === false) {
          await this.reload();
          return this.#local(protectedHeader, token);
        }
      }
      throw err;
    }
  }
  async reload() {
    if (this.#pendingFetch && isCloudflareWorkers())
      this.#pendingFetch = void 0;
    this.#pendingFetch ||= fetchJwks(
      this.#url.href,
      this.#headers,
      AbortSignal.timeout(this.#timeoutDuration),
      this.#customFetch
    )
      .then((json) => {
        this.#local = createLocalJWKSet(json);
        if (this.#cache) {
          this.#cache.uat = Date.now();
          this.#cache.jwks = json;
        }
        this.#jwksTimestamp = Date.now();
        this.#pendingFetch = void 0;
      })
      .catch((err) => {
        this.#pendingFetch = void 0;
        throw err;
      });
    await this.#pendingFetch;
  }
};
function createRemoteJWKSet(url, options) {
  const set = new RemoteJWKSet(url, options);
  const remoteJWKSet = async (protectedHeader, token) =>
    set.getKey(protectedHeader, token);
  Object.defineProperties(remoteJWKSet, {
    coolingDown: {
      get: () => set.coolingDown(),
      enumerable: true,
      configurable: false,
    },
    fresh: {
      get: () => set.fresh(),
      enumerable: true,
      configurable: false,
    },
    reload: {
      value: () => set.reload(),
      enumerable: true,
      configurable: false,
      writable: false,
    },
    reloading: {
      get: () => set.pendingFetch(),
      enumerable: true,
      configurable: false,
    },
    jwks: {
      value: () => set.jwks(),
      enumerable: true,
      configurable: false,
      writable: false,
    },
  });
  return remoteJWKSet;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/util/decode_protected_header.js
function decodeProtectedHeader(token) {
  let protectedB64u;
  if (typeof token === 'string') {
    const parts = token.split('.');
    if (parts.length === 3 || parts.length === 5) [protectedB64u] = parts;
  } else if (typeof token === 'object' && token)
    if ('protected' in token) protectedB64u = token.protected;
    else throw new TypeError('Token does not contain a Protected Header');
  try {
    if (typeof protectedB64u !== 'string' || !protectedB64u) throw new Error();
    const result = JSON.parse(decoder.decode(decode(protectedB64u)));
    if (!isObject(result)) throw new Error();
    return result;
  } catch {
    throw new TypeError('Invalid Token or Protected Header formatting');
  }
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.2/node_modules/jose/dist/webapi/util/decode_jwt.js
function decodeJwt(jwt) {
  if (typeof jwt !== 'string')
    throw new JWTInvalid(
      'JWTs must use Compact JWS serialization, JWT must be a string'
    );
  const { 1: payload, length } = jwt.split('.');
  if (length === 5)
    throw new JWTInvalid(
      'Only JWTs using Compact JWS serialization can be decoded'
    );
  if (length !== 3) throw new JWTInvalid('Invalid JWT');
  if (!payload) throw new JWTInvalid('JWTs must contain a payload');
  let decoded;
  try {
    decoded = decode(payload);
  } catch {
    throw new JWTInvalid('Failed to base64url decode the payload');
  }
  let result;
  try {
    result = JSON.parse(decoder.decode(decoded));
  } catch {
    throw new JWTInvalid('Failed to parse the decoded payload as JSON');
  }
  if (!isObject(result)) throw new JWTInvalid('Invalid JWT Claims Set');
  return result;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/crypto/jwt.mjs
async function signJWT(payload, secret, expiresIn = 3600) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn)
    .sign(new TextEncoder().encode(secret));
}
async function verifyJWT(token, secret) {
  try {
    return (await jwtVerify(token, new TextEncoder().encode(secret))).payload;
  } catch {
    return null;
  }
}
var info = new Uint8Array([
  66, 101, 116, 116, 101, 114, 65, 117, 116, 104, 46, 106, 115, 32, 71, 101,
  110, 101, 114, 97, 116, 101, 100, 32, 69, 110, 99, 114, 121, 112, 116, 105,
  111, 110, 32, 75, 101, 121,
]);
var now = () => (Date.now() / 1e3) | 0;
var alg = 'dir';
var enc = 'A256CBC-HS512';
function deriveEncryptionSecret(secret, salt) {
  return hkdf(
    sha256,
    new TextEncoder().encode(secret),
    new TextEncoder().encode(salt),
    info,
    64
  );
}
function getCurrentSecret(secret) {
  if (typeof secret === 'string') return secret;
  const value = secret.keys.get(secret.currentVersion);
  if (!value)
    throw new Error(
      `Secret version ${secret.currentVersion} not found in keys`
    );
  return value;
}
function getAllSecrets(secret) {
  if (typeof secret === 'string')
    return [
      {
        version: 0,
        value: secret,
      },
    ];
  const result = [];
  for (const [version, value] of secret.keys)
    result.push({
      version,
      value,
    });
  if (
    secret.legacySecret &&
    !result.some((s) => s.value === secret.legacySecret)
  )
    result.push({
      version: -1,
      value: secret.legacySecret,
    });
  return result;
}
async function symmetricEncodeJWT(payload, secret, salt, expiresIn = 3600) {
  const encryptionSecret = deriveEncryptionSecret(
    getCurrentSecret(secret),
    salt
  );
  const thumbprint = await calculateJwkThumbprint(
    {
      kty: 'oct',
      k: encode(encryptionSecret),
    },
    'sha256'
  );
  return await new EncryptJWT(payload)
    .setProtectedHeader({
      alg,
      enc,
      kid: thumbprint,
    })
    .setIssuedAt()
    .setExpirationTime(now() + expiresIn)
    .setJti(crypto.randomUUID())
    .encrypt(encryptionSecret);
}
var jwtDecryptOpts = {
  clockTolerance: 15,
  keyManagementAlgorithms: [alg],
  contentEncryptionAlgorithms: [enc, 'A256GCM'],
};
async function symmetricDecodeJWT(token, secret, salt) {
  if (!token) return null;
  let hasKid = false;
  try {
    hasKid = decodeProtectedHeader(token).kid !== void 0;
  } catch {
    return null;
  }
  try {
    const secrets = getAllSecrets(secret);
    const { payload } = await jwtDecrypt(
      token,
      async (protectedHeader) => {
        const kid = protectedHeader.kid;
        if (kid !== void 0) {
          for (const s of secrets) {
            const encryptionSecret = deriveEncryptionSecret(s.value, salt);
            if (
              kid ===
              (await calculateJwkThumbprint(
                {
                  kty: 'oct',
                  k: encode(encryptionSecret),
                },
                'sha256'
              ))
            )
              return encryptionSecret;
          }
          throw new Error('no matching decryption secret');
        }
        if (secrets.length === 1)
          return deriveEncryptionSecret(secrets[0].value, salt);
        return deriveEncryptionSecret(secrets[0].value, salt);
      },
      jwtDecryptOpts
    );
    return payload;
  } catch {
    if (hasKid) return null;
    const secrets = getAllSecrets(secret);
    if (secrets.length <= 1) return null;
    for (let i = 1; i < secrets.length; i++)
      try {
        const s = secrets[i];
        const { payload } = await jwtDecrypt(
          token,
          deriveEncryptionSecret(s.value, salt),
          jwtDecryptOpts
        );
        return payload;
      } catch {
        continue;
      }
    return null;
  }
}
//#endregion
//#region node_modules/.pnpm/@better-auth+utils@0.4.0/node_modules/@better-auth/utils/dist/password.node.mjs
var config = {
  N: 16384,
  r: 16,
  p: 1,
  dkLen: 64,
};
function generateKey$1(password, salt) {
  return new Promise((resolve, reject) => {
    scrypt(
      password.normalize('NFKC'),
      salt,
      config.dkLen,
      {
        N: config.N,
        r: config.r,
        p: config.p,
        maxmem: 128 * config.N * config.r * 2,
      },
      (err, key) => {
        if (err) reject(err);
        else resolve(key);
      }
    );
  });
}
async function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  return `${salt}:${(await generateKey$1(password, salt)).toString('hex')}`;
}
async function verifyPassword$2(hash, password) {
  const [salt, key] = hash.split(':');
  if (!salt || !key) throw new Error('Invalid password hash');
  return (await generateKey$1(password, salt)).toString('hex') === key;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/crypto/password.mjs
/**
 * `@better-auth/utils/password` uses the "node" export condition in package.json
 * to automatically pick the right implementation:
 *   - Node.js / Bun / Deno → `node:crypto scrypt` (libuv thread pool, non-blocking)
 *   - Unsupported runtimes → `@noble/hashes scrypt` (pure JS fallback)
 */
var hashPassword$1 = hashPassword;
var verifyPassword$1 = async ({ hash, password }) => {
  return verifyPassword$2(hash, password);
};
//#endregion
//#region node_modules/.pnpm/@better-auth+utils@0.4.0/node_modules/@better-auth/utils/dist/base64.mjs
function getAlphabet(urlSafe) {
  return urlSafe
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
}
function base64Encode(data, alphabet, padding) {
  let result = '';
  let buffer = 0;
  let shift = 0;
  for (const byte of data) {
    buffer = (buffer << 8) | byte;
    shift += 8;
    while (shift >= 6) {
      shift -= 6;
      result += alphabet[(buffer >> shift) & 63];
    }
  }
  if (shift > 0) result += alphabet[(buffer << (6 - shift)) & 63];
  if (padding) {
    const padCount = (4 - (result.length % 4)) % 4;
    result += '='.repeat(padCount);
  }
  return result;
}
function base64Decode(data, alphabet) {
  const decodeMap = /* @__PURE__ */ new Map();
  for (let i = 0; i < alphabet.length; i++) decodeMap.set(alphabet[i], i);
  const result = [];
  let buffer = 0;
  let bitsCollected = 0;
  for (const char of data) {
    if (char === '=') break;
    const value = decodeMap.get(char);
    if (value === void 0) throw new Error(`Invalid Base64 character: ${char}`);
    buffer = (buffer << 6) | value;
    bitsCollected += 6;
    if (bitsCollected >= 8) {
      bitsCollected -= 8;
      result.push((buffer >> bitsCollected) & 255);
    }
  }
  return Uint8Array.from(result);
}
var base64 = {
  encode(data, options = {}) {
    const alphabet = getAlphabet(false);
    return base64Encode(
      typeof data === 'string'
        ? new TextEncoder().encode(data)
        : new Uint8Array(data),
      alphabet,
      options.padding ?? true
    );
  },
  decode(data) {
    if (typeof data !== 'string') data = new TextDecoder().decode(data);
    const alphabet = getAlphabet(data.includes('-') || data.includes('_'));
    return base64Decode(data, alphabet);
  },
};
var base64Url = {
  encode(data, options = {}) {
    const alphabet = getAlphabet(true);
    return base64Encode(
      typeof data === 'string'
        ? new TextEncoder().encode(data)
        : new Uint8Array(data),
      alphabet,
      options.padding ?? true
    );
  },
  decode(data) {
    return base64Decode(
      data,
      getAlphabet(data.includes('-') || data.includes('_'))
    );
  },
};
//#endregion
//#region node_modules/.pnpm/@better-auth+utils@0.4.0/node_modules/@better-auth/utils/dist/index.mjs
function getWebcryptoSubtle() {
  const cr = typeof globalThis !== 'undefined' && globalThis.crypto;
  if (cr && typeof cr.subtle === 'object' && cr.subtle != null)
    return cr.subtle;
  throw new Error('crypto.subtle must be defined');
}
//#endregion
//#region node_modules/.pnpm/@better-auth+utils@0.4.0/node_modules/@better-auth/utils/dist/hash.mjs
function createHash(algorithm, encoding) {
  return {
    digest: async (input) => {
      const encoder = new TextEncoder();
      const data = typeof input === 'string' ? encoder.encode(input) : input;
      const hashBuffer = await getWebcryptoSubtle().digest(algorithm, data);
      if (encoding === 'hex')
        return Array.from(new Uint8Array(hashBuffer))
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('');
      if (
        encoding === 'base64' ||
        encoding === 'base64url' ||
        encoding === 'base64urlnopad'
      ) {
        if (encoding.includes('url'))
          return base64Url.encode(hashBuffer, {
            padding: encoding !== 'base64urlnopad',
          });
        return base64.encode(hashBuffer);
      }
      return hashBuffer;
    },
  };
}
//#endregion
//#region node_modules/.pnpm/@noble+ciphers@2.1.1/node_modules/@noble/ciphers/utils.js
/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */
/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */
/** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */
function isBytes(a) {
  return (
    a instanceof Uint8Array ||
    (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array')
  );
}
/** Asserts something is boolean. */
function abool(b) {
  if (typeof b !== 'boolean') throw new Error(`boolean expected, not ${b}`);
}
/** Asserts something is positive integer. */
function anumber(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error('positive integer expected, got ' + n);
}
/** Asserts something is Uint8Array. */
function abytes(value, length, title = '') {
  const bytes = isBytes(value);
  const len = value?.length;
  const needsLen = length !== void 0;
  if (!bytes || (needsLen && len !== length)) {
    const prefix = title && `"${title}" `;
    const ofLen = needsLen ? ` of length ${length}` : '';
    const got = bytes ? `length=${len}` : `type=${typeof value}`;
    throw new Error(prefix + 'expected Uint8Array' + ofLen + ', got ' + got);
  }
  return value;
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists(instance, checkFinished = true) {
  if (instance.destroyed) throw new Error('Hash instance has been destroyed');
  if (checkFinished && instance.finished)
    throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */
function aoutput(out, instance) {
  abytes(out, void 0, 'output');
  const min = instance.outputLen;
  if (out.length < min)
    throw new Error(
      'digestInto() expects output buffer of length at least ' + min
    );
}
/** Cast u8 / u16 / u32 to u32. */
function u32(arr) {
  return new Uint32Array(
    arr.buffer,
    arr.byteOffset,
    Math.floor(arr.byteLength / 4)
  );
}
/** Zeroize a byte array. Warning: JS provides no guarantees. */
function clean(...arrays) {
  for (let i = 0; i < arrays.length; i++) arrays[i].fill(0);
}
/** Create DataView of an array for easy byte-level manipulation. */
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** Is current platform little-endian? Most are. Big-Endian platform: IBM */
var isLE = /* @__PURE__ */ (() =>
  new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
var hasHexBuiltin = /* @__PURE__ */ (() =>
  typeof Uint8Array.from([]).toHex === 'function' &&
  typeof Uint8Array.fromHex === 'function')();
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) =>
  i.toString(16).padStart(2, '0')
);
/**
 * Convert byte array to hex string. Uses built-in function, when available.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
  abytes(bytes);
  if (hasHexBuiltin) return bytes.toHex();
  let hex = '';
  for (let i = 0; i < bytes.length; i++) hex += hexes[bytes[i]];
  return hex;
}
var asciis = {
  _0: 48,
  _9: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102,
};
function asciiToBase16(ch) {
  if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0;
  if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10);
  if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10);
}
/**
 * Convert hex string to byte array. Uses built-in function, when available.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
  if (typeof hex !== 'string')
    throw new Error('hex string expected, got ' + typeof hex);
  if (hasHexBuiltin) return Uint8Array.fromHex(hex);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error('hex string expected, got unpadded hex of length ' + hl);
  const array = new Uint8Array(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi));
    const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0) {
      const char = hex[hi] + hex[hi + 1];
      throw new Error(
        'hex string expected, got non-hex character "' +
          char +
          '" at index ' +
          hi
      );
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
/**
 * Converts string to bytes using UTF8 encoding.
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
  if (typeof str !== 'string') throw new Error('string expected');
  return new Uint8Array(new TextEncoder().encode(str));
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i];
    abytes(a);
    sum += a.length;
  }
  const res = new Uint8Array(sum);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const a = arrays[i];
    res.set(a, pad);
    pad += a.length;
  }
  return res;
}
function checkOpts(defaults, opts) {
  if (opts == null || typeof opts !== 'object')
    throw new Error('options must be defined');
  return Object.assign(defaults, opts);
}
/** Compares 2 uint8array-s in kinda constant time. */
function equalBytes(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}
/**
 * Wraps a cipher: validates args, ensures encrypt() can only be called once.
 * @__NO_SIDE_EFFECTS__
 */
var wrapCipher = (params, constructor) => {
  function wrappedCipher(key, ...args) {
    abytes(key, void 0, 'key');
    if (!isLE)
      throw new Error('Non little-endian hardware is not yet supported');
    if (params.nonceLength !== void 0) {
      const nonce = args[0];
      abytes(nonce, params.varSizeNonce ? void 0 : params.nonceLength, 'nonce');
    }
    const tagl = params.tagLength;
    if (tagl && args[1] !== void 0) abytes(args[1], void 0, 'AAD');
    const cipher = constructor(key, ...args);
    const checkOutput = (fnLength, output) => {
      if (output !== void 0) {
        if (fnLength !== 2) throw new Error('cipher output not supported');
        abytes(output, void 0, 'output');
      }
    };
    let called = false;
    return {
      encrypt(data, output) {
        if (called)
          throw new Error('cannot encrypt() twice with same key + nonce');
        called = true;
        abytes(data);
        checkOutput(cipher.encrypt.length, output);
        return cipher.encrypt(data, output);
      },
      decrypt(data, output) {
        abytes(data);
        if (tagl && data.length < tagl)
          throw new Error(
            '"ciphertext" expected length bigger than tagLength=' + tagl
          );
        checkOutput(cipher.decrypt.length, output);
        return cipher.decrypt(data, output);
      },
    };
  }
  Object.assign(wrappedCipher, params);
  return wrappedCipher;
};
/**
 * By default, returns u8a of length.
 * When out is available, it checks it for validity and uses it.
 */
function getOutput(expectedLength, out, onlyAligned = true) {
  if (out === void 0) return new Uint8Array(expectedLength);
  if (out.length !== expectedLength)
    throw new Error(
      '"output" expected Uint8Array of length ' +
        expectedLength +
        ', got: ' +
        out.length
    );
  if (onlyAligned && !isAligned32$1(out))
    throw new Error('invalid output, must be aligned');
  return out;
}
function u64Lengths(dataLength, aadLength, isLE) {
  abool(isLE);
  const num = new Uint8Array(16);
  const view = createView(num);
  view.setBigUint64(0, BigInt(aadLength), isLE);
  view.setBigUint64(8, BigInt(dataLength), isLE);
  return num;
}
function isAligned32$1(bytes) {
  return bytes.byteOffset % 4 === 0;
}
function copyBytes(bytes) {
  return Uint8Array.from(bytes);
}
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
function randomBytes$2(bytesLength = 32) {
  const cr = typeof globalThis === 'object' ? globalThis.crypto : null;
  if (typeof cr?.getRandomValues !== 'function')
    throw new Error('crypto.getRandomValues must be defined');
  return cr.getRandomValues(new Uint8Array(bytesLength));
}
/**
 * Uses CSPRG for nonce, nonce injected in ciphertext.
 * For `encrypt`, a `nonceBytes`-length buffer is fetched from CSPRNG and
 * prepended to encrypted ciphertext. For `decrypt`, first `nonceBytes` of ciphertext
 * are treated as nonce.
 *
 * NOTE: Under the same key, using random nonces (e.g. `managedNonce`) with AES-GCM and ChaCha
 * should be limited to `2**23` (8M) messages to get a collision chance of `2**-50`. Stretching to  * `2**32` (4B) messages, chance would become `2**-33` - still negligible, but creeping up.
 * @example
 * const gcm = managedNonce(aes.gcm);
 * const ciphr = gcm(key).encrypt(data);
 * const plain = gcm(key).decrypt(ciph);
 */
function managedNonce(fn, randomBytes_ = randomBytes$2) {
  const { nonceLength } = fn;
  anumber(nonceLength);
  const addNonce = (nonce, ciphertext) => {
    const out = concatBytes(nonce, ciphertext);
    ciphertext.fill(0);
    return out;
  };
  return (key, ...args) => ({
    encrypt(plaintext) {
      abytes(plaintext);
      const nonce = randomBytes_(nonceLength);
      const encrypted = fn(key, nonce, ...args).encrypt(plaintext);
      if (encrypted instanceof Promise)
        return encrypted.then((ct) => addNonce(nonce, ct));
      return addNonce(nonce, encrypted);
    },
    decrypt(ciphertext) {
      abytes(ciphertext);
      const nonce = ciphertext.subarray(0, nonceLength);
      const decrypted = ciphertext.subarray(nonceLength);
      return fn(key, nonce, ...args).decrypt(decrypted);
    },
  });
}
//#endregion
//#region node_modules/.pnpm/@noble+ciphers@2.1.1/node_modules/@noble/ciphers/_arx.js
/**
* Basic utils for ARX (add-rotate-xor) salsa and chacha ciphers.

RFC8439 requires multi-step cipher stream, where
authKey starts with counter: 0, actual msg with counter: 1.

For this, we need a way to re-use nonce / counter:

const counter = new Uint8Array(4);
chacha(..., counter, ...); // counter is now 1
chacha(..., counter, ...); // counter is now 2

This is complicated:

- 32-bit counters are enough, no need for 64-bit: max ArrayBuffer size in JS is 4GB
- Original papers don't allow mutating counters
- Counter overflow is undefined [^1]
- Idea A: allow providing (nonce | counter) instead of just nonce, re-use it
- Caveat: Cannot be re-used through all cases:
- * chacha has (counter | nonce)
- * xchacha has (nonce16 | counter | nonce16)
- Idea B: separate nonce / counter and provide separate API for counter re-use
- Caveat: there are different counter sizes depending on an algorithm.
- salsa & chacha also differ in structures of key & sigma:
salsa20:      s[0] | k(4) | s[1] | nonce(2) | cnt(2) | s[2] | k(4) | s[3]
chacha:       s(4) | k(8) | cnt(1) | nonce(3)
chacha20orig: s(4) | k(8) | cnt(2) | nonce(2)
- Idea C: helper method such as `setSalsaState(key, nonce, sigma, data)`
- Caveat: we can't re-use counter array

xchacha [^2] uses the subkey and remaining 8 byte nonce with ChaCha20 as normal
(prefixed by 4 NUL bytes, since [RFC8439] specifies a 12-byte nonce).

[^1]: https://mailarchive.ietf.org/arch/msg/cfrg/gsOnTJzcbgG6OqD8Sc0GO5aR_tU/
[^2]: https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha#appendix-A.2

* @module
*/
var encodeStr = (str) => Uint8Array.from(str.split(''), (c) => c.charCodeAt(0));
var sigma16 = encodeStr('expand 16-byte k');
var sigma32 = encodeStr('expand 32-byte k');
var sigma16_32 = u32(sigma16);
var sigma32_32 = u32(sigma32);
/** Rotate left. */
function rotl(a, b) {
  return (a << b) | (a >>> (32 - b));
}
function isAligned32(b) {
  return b.byteOffset % 4 === 0;
}
var BLOCK_LEN = 64;
var BLOCK_LEN32 = 16;
var MAX_COUNTER = 2 ** 32 - 1;
var U32_EMPTY = Uint32Array.of();
function runCipher(core, sigma, key, nonce, data, output, counter, rounds) {
  const len = data.length;
  const block = new Uint8Array(BLOCK_LEN);
  const b32 = u32(block);
  const isAligned = isAligned32(data) && isAligned32(output);
  const d32 = isAligned ? u32(data) : U32_EMPTY;
  const o32 = isAligned ? u32(output) : U32_EMPTY;
  for (let pos = 0; pos < len; counter++) {
    core(sigma, key, nonce, b32, counter, rounds);
    if (counter >= MAX_COUNTER) throw new Error('arx: counter overflow');
    const take = Math.min(BLOCK_LEN, len - pos);
    if (isAligned && take === BLOCK_LEN) {
      const pos32 = pos / 4;
      if (pos % 4 !== 0) throw new Error('arx: invalid block position');
      for (let j = 0, posj; j < BLOCK_LEN32; j++) {
        posj = pos32 + j;
        o32[posj] = d32[posj] ^ b32[j];
      }
      pos += BLOCK_LEN;
      continue;
    }
    for (let j = 0, posj; j < take; j++) {
      posj = pos + j;
      output[posj] = data[posj] ^ block[j];
    }
    pos += take;
  }
}
/** Creates ARX-like (ChaCha, Salsa) cipher stream from core function. */
function createCipher(core, opts) {
  const { allowShortKeys, extendNonceFn, counterLength, counterRight, rounds } =
    checkOpts(
      {
        allowShortKeys: false,
        counterLength: 8,
        counterRight: false,
        rounds: 20,
      },
      opts
    );
  if (typeof core !== 'function') throw new Error('core must be a function');
  anumber(counterLength);
  anumber(rounds);
  abool(counterRight);
  abool(allowShortKeys);
  return (key, nonce, data, output, counter = 0) => {
    abytes(key, void 0, 'key');
    abytes(nonce, void 0, 'nonce');
    abytes(data, void 0, 'data');
    const len = data.length;
    if (output === void 0) output = new Uint8Array(len);
    abytes(output, void 0, 'output');
    anumber(counter);
    if (counter < 0 || counter >= MAX_COUNTER)
      throw new Error('arx: counter overflow');
    if (output.length < len)
      throw new Error(
        `arx: output (${output.length}) is shorter than data (${len})`
      );
    const toClean = [];
    let l = key.length;
    let k;
    let sigma;
    if (l === 32) {
      toClean.push((k = copyBytes(key)));
      sigma = sigma32_32;
    } else if (l === 16 && allowShortKeys) {
      k = new Uint8Array(32);
      k.set(key);
      k.set(key, 16);
      sigma = sigma16_32;
      toClean.push(k);
    } else {
      abytes(key, 32, 'arx key');
      throw new Error('invalid key size');
    }
    if (!isAligned32(nonce)) toClean.push((nonce = copyBytes(nonce)));
    const k32 = u32(k);
    if (extendNonceFn) {
      if (nonce.length !== 24)
        throw new Error(`arx: extended nonce must be 24 bytes`);
      extendNonceFn(sigma, k32, u32(nonce.subarray(0, 16)), k32);
      nonce = nonce.subarray(16);
    }
    const nonceNcLen = 16 - counterLength;
    if (nonceNcLen !== nonce.length)
      throw new Error(`arx: nonce must be ${nonceNcLen} or 16 bytes`);
    if (nonceNcLen !== 12) {
      const nc = new Uint8Array(12);
      nc.set(nonce, counterRight ? 0 : 12 - nonce.length);
      nonce = nc;
      toClean.push(nonce);
    }
    const n32 = u32(nonce);
    runCipher(core, sigma, k32, n32, data, output, counter, rounds);
    clean(...toClean);
    return output;
  };
}
//#endregion
//#region node_modules/.pnpm/@noble+ciphers@2.1.1/node_modules/@noble/ciphers/_poly1305.js
/**
 * Poly1305 ([PDF](https://cr.yp.to/mac/poly1305-20050329.pdf),
 * [wiki](https://en.wikipedia.org/wiki/Poly1305))
 * is a fast and parallel secret-key message-authentication code suitable for
 * a wide variety of applications. It was standardized in
 * [RFC 8439](https://www.rfc-editor.org/rfc/rfc8439) and is now used in TLS 1.3.
 *
 * Polynomial MACs are not perfect for every situation:
 * they lack Random Key Robustness: the MAC can be forged, and can't be used in PAKE schemes.
 * See [invisible salamanders attack](https://keymaterial.net/2020/09/07/invisible-salamanders-in-aes-gcm-siv/).
 * To combat invisible salamanders, `hash(key)` can be included in ciphertext,
 * however, this would violate ciphertext indistinguishability:
 * an attacker would know which key was used - so `HKDF(key, i)`
 * could be used instead.
 *
 * Check out [original website](https://cr.yp.to/mac.html).
 * Based on Public Domain [poly1305-donna](https://github.com/floodyberry/poly1305-donna).
 * @module
 */
function u8to16(a, i) {
  return (a[i++] & 255) | ((a[i++] & 255) << 8);
}
/** Poly1305 class. Prefer poly1305() function instead. */
var Poly1305 = class {
  blockLen = 16;
  outputLen = 16;
  buffer = new Uint8Array(16);
  r = new Uint16Array(10);
  h = new Uint16Array(10);
  pad = new Uint16Array(8);
  pos = 0;
  finished = false;
  constructor(key) {
    key = copyBytes(abytes(key, 32, 'key'));
    const t0 = u8to16(key, 0);
    const t1 = u8to16(key, 2);
    const t2 = u8to16(key, 4);
    const t3 = u8to16(key, 6);
    const t4 = u8to16(key, 8);
    const t5 = u8to16(key, 10);
    const t6 = u8to16(key, 12);
    const t7 = u8to16(key, 14);
    this.r[0] = t0 & 8191;
    this.r[1] = ((t0 >>> 13) | (t1 << 3)) & 8191;
    this.r[2] = ((t1 >>> 10) | (t2 << 6)) & 7939;
    this.r[3] = ((t2 >>> 7) | (t3 << 9)) & 8191;
    this.r[4] = ((t3 >>> 4) | (t4 << 12)) & 255;
    this.r[5] = (t4 >>> 1) & 8190;
    this.r[6] = ((t4 >>> 14) | (t5 << 2)) & 8191;
    this.r[7] = ((t5 >>> 11) | (t6 << 5)) & 8065;
    this.r[8] = ((t6 >>> 8) | (t7 << 8)) & 8191;
    this.r[9] = (t7 >>> 5) & 127;
    for (let i = 0; i < 8; i++) this.pad[i] = u8to16(key, 16 + 2 * i);
  }
  process(data, offset, isLast = false) {
    const hibit = isLast ? 0 : 2048;
    const { h, r } = this;
    const r0 = r[0];
    const r1 = r[1];
    const r2 = r[2];
    const r3 = r[3];
    const r4 = r[4];
    const r5 = r[5];
    const r6 = r[6];
    const r7 = r[7];
    const r8 = r[8];
    const r9 = r[9];
    const t0 = u8to16(data, offset + 0);
    const t1 = u8to16(data, offset + 2);
    const t2 = u8to16(data, offset + 4);
    const t3 = u8to16(data, offset + 6);
    const t4 = u8to16(data, offset + 8);
    const t5 = u8to16(data, offset + 10);
    const t6 = u8to16(data, offset + 12);
    const t7 = u8to16(data, offset + 14);
    let h0 = h[0] + (t0 & 8191);
    let h1 = h[1] + (((t0 >>> 13) | (t1 << 3)) & 8191);
    let h2 = h[2] + (((t1 >>> 10) | (t2 << 6)) & 8191);
    let h3 = h[3] + (((t2 >>> 7) | (t3 << 9)) & 8191);
    let h4 = h[4] + (((t3 >>> 4) | (t4 << 12)) & 8191);
    let h5 = h[5] + ((t4 >>> 1) & 8191);
    let h6 = h[6] + (((t4 >>> 14) | (t5 << 2)) & 8191);
    let h7 = h[7] + (((t5 >>> 11) | (t6 << 5)) & 8191);
    let h8 = h[8] + (((t6 >>> 8) | (t7 << 8)) & 8191);
    let h9 = h[9] + ((t7 >>> 5) | hibit);
    let c = 0;
    let d0 =
      c +
      h0 * r0 +
      h1 * (5 * r9) +
      h2 * (5 * r8) +
      h3 * (5 * r7) +
      h4 * (5 * r6);
    c = d0 >>> 13;
    d0 &= 8191;
    d0 +=
      h5 * (5 * r5) +
      h6 * (5 * r4) +
      h7 * (5 * r3) +
      h8 * (5 * r2) +
      h9 * (5 * r1);
    c += d0 >>> 13;
    d0 &= 8191;
    let d1 =
      c + h0 * r1 + h1 * r0 + h2 * (5 * r9) + h3 * (5 * r8) + h4 * (5 * r7);
    c = d1 >>> 13;
    d1 &= 8191;
    d1 +=
      h5 * (5 * r6) +
      h6 * (5 * r5) +
      h7 * (5 * r4) +
      h8 * (5 * r3) +
      h9 * (5 * r2);
    c += d1 >>> 13;
    d1 &= 8191;
    let d2 = c + h0 * r2 + h1 * r1 + h2 * r0 + h3 * (5 * r9) + h4 * (5 * r8);
    c = d2 >>> 13;
    d2 &= 8191;
    d2 +=
      h5 * (5 * r7) +
      h6 * (5 * r6) +
      h7 * (5 * r5) +
      h8 * (5 * r4) +
      h9 * (5 * r3);
    c += d2 >>> 13;
    d2 &= 8191;
    let d3 = c + h0 * r3 + h1 * r2 + h2 * r1 + h3 * r0 + h4 * (5 * r9);
    c = d3 >>> 13;
    d3 &= 8191;
    d3 +=
      h5 * (5 * r8) +
      h6 * (5 * r7) +
      h7 * (5 * r6) +
      h8 * (5 * r5) +
      h9 * (5 * r4);
    c += d3 >>> 13;
    d3 &= 8191;
    let d4 = c + h0 * r4 + h1 * r3 + h2 * r2 + h3 * r1 + h4 * r0;
    c = d4 >>> 13;
    d4 &= 8191;
    d4 +=
      h5 * (5 * r9) +
      h6 * (5 * r8) +
      h7 * (5 * r7) +
      h8 * (5 * r6) +
      h9 * (5 * r5);
    c += d4 >>> 13;
    d4 &= 8191;
    let d5 = c + h0 * r5 + h1 * r4 + h2 * r3 + h3 * r2 + h4 * r1;
    c = d5 >>> 13;
    d5 &= 8191;
    d5 +=
      h5 * r0 + h6 * (5 * r9) + h7 * (5 * r8) + h8 * (5 * r7) + h9 * (5 * r6);
    c += d5 >>> 13;
    d5 &= 8191;
    let d6 = c + h0 * r6 + h1 * r5 + h2 * r4 + h3 * r3 + h4 * r2;
    c = d6 >>> 13;
    d6 &= 8191;
    d6 += h5 * r1 + h6 * r0 + h7 * (5 * r9) + h8 * (5 * r8) + h9 * (5 * r7);
    c += d6 >>> 13;
    d6 &= 8191;
    let d7 = c + h0 * r7 + h1 * r6 + h2 * r5 + h3 * r4 + h4 * r3;
    c = d7 >>> 13;
    d7 &= 8191;
    d7 += h5 * r2 + h6 * r1 + h7 * r0 + h8 * (5 * r9) + h9 * (5 * r8);
    c += d7 >>> 13;
    d7 &= 8191;
    let d8 = c + h0 * r8 + h1 * r7 + h2 * r6 + h3 * r5 + h4 * r4;
    c = d8 >>> 13;
    d8 &= 8191;
    d8 += h5 * r3 + h6 * r2 + h7 * r1 + h8 * r0 + h9 * (5 * r9);
    c += d8 >>> 13;
    d8 &= 8191;
    let d9 = c + h0 * r9 + h1 * r8 + h2 * r7 + h3 * r6 + h4 * r5;
    c = d9 >>> 13;
    d9 &= 8191;
    d9 += h5 * r4 + h6 * r3 + h7 * r2 + h8 * r1 + h9 * r0;
    c += d9 >>> 13;
    d9 &= 8191;
    c = ((c << 2) + c) | 0;
    c = (c + d0) | 0;
    d0 = c & 8191;
    c = c >>> 13;
    d1 += c;
    h[0] = d0;
    h[1] = d1;
    h[2] = d2;
    h[3] = d3;
    h[4] = d4;
    h[5] = d5;
    h[6] = d6;
    h[7] = d7;
    h[8] = d8;
    h[9] = d9;
  }
  finalize() {
    const { h, pad } = this;
    const g = new Uint16Array(10);
    let c = h[1] >>> 13;
    h[1] &= 8191;
    for (let i = 2; i < 10; i++) {
      h[i] += c;
      c = h[i] >>> 13;
      h[i] &= 8191;
    }
    h[0] += c * 5;
    c = h[0] >>> 13;
    h[0] &= 8191;
    h[1] += c;
    c = h[1] >>> 13;
    h[1] &= 8191;
    h[2] += c;
    g[0] = h[0] + 5;
    c = g[0] >>> 13;
    g[0] &= 8191;
    for (let i = 1; i < 10; i++) {
      g[i] = h[i] + c;
      c = g[i] >>> 13;
      g[i] &= 8191;
    }
    g[9] -= 8192;
    let mask = (c ^ 1) - 1;
    for (let i = 0; i < 10; i++) g[i] &= mask;
    mask = ~mask;
    for (let i = 0; i < 10; i++) h[i] = (h[i] & mask) | g[i];
    h[0] = (h[0] | (h[1] << 13)) & 65535;
    h[1] = ((h[1] >>> 3) | (h[2] << 10)) & 65535;
    h[2] = ((h[2] >>> 6) | (h[3] << 7)) & 65535;
    h[3] = ((h[3] >>> 9) | (h[4] << 4)) & 65535;
    h[4] = ((h[4] >>> 12) | (h[5] << 1) | (h[6] << 14)) & 65535;
    h[5] = ((h[6] >>> 2) | (h[7] << 11)) & 65535;
    h[6] = ((h[7] >>> 5) | (h[8] << 8)) & 65535;
    h[7] = ((h[8] >>> 8) | (h[9] << 5)) & 65535;
    let f = h[0] + pad[0];
    h[0] = f & 65535;
    for (let i = 1; i < 8; i++) {
      f = (((h[i] + pad[i]) | 0) + (f >>> 16)) | 0;
      h[i] = f & 65535;
    }
    clean(g);
  }
  update(data) {
    aexists(this);
    abytes(data);
    data = copyBytes(data);
    const { buffer, blockLen } = this;
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        for (; blockLen <= len - pos; pos += blockLen) this.process(data, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(buffer, 0, false);
        this.pos = 0;
      }
    }
    return this;
  }
  destroy() {
    clean(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { buffer, h } = this;
    let { pos } = this;
    if (pos) {
      buffer[pos++] = 1;
      for (; pos < 16; pos++) buffer[pos] = 0;
      this.process(buffer, 0, true);
    }
    this.finalize();
    let opos = 0;
    for (let i = 0; i < 8; i++) {
      out[opos++] = h[i] >>> 0;
      out[opos++] = h[i] >>> 8;
    }
    return out;
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
};
function wrapConstructorWithKey(hashCons) {
  const hashC = (msg, key) => hashCons(key).update(msg).digest();
  const tmp = hashCons(new Uint8Array(32));
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (key) => hashCons(key);
  return hashC;
}
/** Poly1305 MAC from RFC 8439. */
var poly1305 = (() => wrapConstructorWithKey((key) => new Poly1305(key)))();
//#endregion
//#region node_modules/.pnpm/@noble+ciphers@2.1.1/node_modules/@noble/ciphers/chacha.js
/**
 * ChaCha stream cipher, released
 * in 2008. Developed after Salsa20, ChaCha aims to increase diffusion per round.
 * It was standardized in [RFC 8439](https://www.rfc-editor.org/rfc/rfc8439) and
 * is now used in TLS 1.3.
 *
 * [XChaCha20](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha)
 * extended-nonce variant is also provided. Similar to XSalsa, it's safe to use with
 * randomly-generated nonces.
 *
 * Check out [PDF](http://cr.yp.to/chacha/chacha-20080128.pdf) and
 * [wiki](https://en.wikipedia.org/wiki/Salsa20) and
 * [website](https://cr.yp.to/chacha.html).
 *
 * @module
 */
/** Identical to `chachaCore_small`. Unused. */
function chachaCore(s, k, n, out, cnt, rounds = 20) {
  let y00 = s[0],
    y01 = s[1],
    y02 = s[2],
    y03 = s[3],
    y04 = k[0],
    y05 = k[1],
    y06 = k[2],
    y07 = k[3],
    y08 = k[4],
    y09 = k[5],
    y10 = k[6],
    y11 = k[7],
    y12 = cnt,
    y13 = n[0],
    y14 = n[1],
    y15 = n[2];
  let x00 = y00,
    x01 = y01,
    x02 = y02,
    x03 = y03,
    x04 = y04,
    x05 = y05,
    x06 = y06,
    x07 = y07,
    x08 = y08,
    x09 = y09,
    x10 = y10,
    x11 = y11,
    x12 = y12,
    x13 = y13,
    x14 = y14,
    x15 = y15;
  for (let r = 0; r < rounds; r += 2) {
    x00 = (x00 + x04) | 0;
    x12 = rotl(x12 ^ x00, 16);
    x08 = (x08 + x12) | 0;
    x04 = rotl(x04 ^ x08, 12);
    x00 = (x00 + x04) | 0;
    x12 = rotl(x12 ^ x00, 8);
    x08 = (x08 + x12) | 0;
    x04 = rotl(x04 ^ x08, 7);
    x01 = (x01 + x05) | 0;
    x13 = rotl(x13 ^ x01, 16);
    x09 = (x09 + x13) | 0;
    x05 = rotl(x05 ^ x09, 12);
    x01 = (x01 + x05) | 0;
    x13 = rotl(x13 ^ x01, 8);
    x09 = (x09 + x13) | 0;
    x05 = rotl(x05 ^ x09, 7);
    x02 = (x02 + x06) | 0;
    x14 = rotl(x14 ^ x02, 16);
    x10 = (x10 + x14) | 0;
    x06 = rotl(x06 ^ x10, 12);
    x02 = (x02 + x06) | 0;
    x14 = rotl(x14 ^ x02, 8);
    x10 = (x10 + x14) | 0;
    x06 = rotl(x06 ^ x10, 7);
    x03 = (x03 + x07) | 0;
    x15 = rotl(x15 ^ x03, 16);
    x11 = (x11 + x15) | 0;
    x07 = rotl(x07 ^ x11, 12);
    x03 = (x03 + x07) | 0;
    x15 = rotl(x15 ^ x03, 8);
    x11 = (x11 + x15) | 0;
    x07 = rotl(x07 ^ x11, 7);
    x00 = (x00 + x05) | 0;
    x15 = rotl(x15 ^ x00, 16);
    x10 = (x10 + x15) | 0;
    x05 = rotl(x05 ^ x10, 12);
    x00 = (x00 + x05) | 0;
    x15 = rotl(x15 ^ x00, 8);
    x10 = (x10 + x15) | 0;
    x05 = rotl(x05 ^ x10, 7);
    x01 = (x01 + x06) | 0;
    x12 = rotl(x12 ^ x01, 16);
    x11 = (x11 + x12) | 0;
    x06 = rotl(x06 ^ x11, 12);
    x01 = (x01 + x06) | 0;
    x12 = rotl(x12 ^ x01, 8);
    x11 = (x11 + x12) | 0;
    x06 = rotl(x06 ^ x11, 7);
    x02 = (x02 + x07) | 0;
    x13 = rotl(x13 ^ x02, 16);
    x08 = (x08 + x13) | 0;
    x07 = rotl(x07 ^ x08, 12);
    x02 = (x02 + x07) | 0;
    x13 = rotl(x13 ^ x02, 8);
    x08 = (x08 + x13) | 0;
    x07 = rotl(x07 ^ x08, 7);
    x03 = (x03 + x04) | 0;
    x14 = rotl(x14 ^ x03, 16);
    x09 = (x09 + x14) | 0;
    x04 = rotl(x04 ^ x09, 12);
    x03 = (x03 + x04) | 0;
    x14 = rotl(x14 ^ x03, 8);
    x09 = (x09 + x14) | 0;
    x04 = rotl(x04 ^ x09, 7);
  }
  let oi = 0;
  out[oi++] = (y00 + x00) | 0;
  out[oi++] = (y01 + x01) | 0;
  out[oi++] = (y02 + x02) | 0;
  out[oi++] = (y03 + x03) | 0;
  out[oi++] = (y04 + x04) | 0;
  out[oi++] = (y05 + x05) | 0;
  out[oi++] = (y06 + x06) | 0;
  out[oi++] = (y07 + x07) | 0;
  out[oi++] = (y08 + x08) | 0;
  out[oi++] = (y09 + x09) | 0;
  out[oi++] = (y10 + x10) | 0;
  out[oi++] = (y11 + x11) | 0;
  out[oi++] = (y12 + x12) | 0;
  out[oi++] = (y13 + x13) | 0;
  out[oi++] = (y14 + x14) | 0;
  out[oi++] = (y15 + x15) | 0;
}
/**
 * hchacha hashes key and nonce into key' and nonce' for xchacha20.
 * Identical to `hchacha_small`.
 * Need to find a way to merge it with `chachaCore` without 25% performance hit.
 */
function hchacha(s, k, i, out) {
  let x00 = s[0],
    x01 = s[1],
    x02 = s[2],
    x03 = s[3],
    x04 = k[0],
    x05 = k[1],
    x06 = k[2],
    x07 = k[3],
    x08 = k[4],
    x09 = k[5],
    x10 = k[6],
    x11 = k[7],
    x12 = i[0],
    x13 = i[1],
    x14 = i[2],
    x15 = i[3];
  for (let r = 0; r < 20; r += 2) {
    x00 = (x00 + x04) | 0;
    x12 = rotl(x12 ^ x00, 16);
    x08 = (x08 + x12) | 0;
    x04 = rotl(x04 ^ x08, 12);
    x00 = (x00 + x04) | 0;
    x12 = rotl(x12 ^ x00, 8);
    x08 = (x08 + x12) | 0;
    x04 = rotl(x04 ^ x08, 7);
    x01 = (x01 + x05) | 0;
    x13 = rotl(x13 ^ x01, 16);
    x09 = (x09 + x13) | 0;
    x05 = rotl(x05 ^ x09, 12);
    x01 = (x01 + x05) | 0;
    x13 = rotl(x13 ^ x01, 8);
    x09 = (x09 + x13) | 0;
    x05 = rotl(x05 ^ x09, 7);
    x02 = (x02 + x06) | 0;
    x14 = rotl(x14 ^ x02, 16);
    x10 = (x10 + x14) | 0;
    x06 = rotl(x06 ^ x10, 12);
    x02 = (x02 + x06) | 0;
    x14 = rotl(x14 ^ x02, 8);
    x10 = (x10 + x14) | 0;
    x06 = rotl(x06 ^ x10, 7);
    x03 = (x03 + x07) | 0;
    x15 = rotl(x15 ^ x03, 16);
    x11 = (x11 + x15) | 0;
    x07 = rotl(x07 ^ x11, 12);
    x03 = (x03 + x07) | 0;
    x15 = rotl(x15 ^ x03, 8);
    x11 = (x11 + x15) | 0;
    x07 = rotl(x07 ^ x11, 7);
    x00 = (x00 + x05) | 0;
    x15 = rotl(x15 ^ x00, 16);
    x10 = (x10 + x15) | 0;
    x05 = rotl(x05 ^ x10, 12);
    x00 = (x00 + x05) | 0;
    x15 = rotl(x15 ^ x00, 8);
    x10 = (x10 + x15) | 0;
    x05 = rotl(x05 ^ x10, 7);
    x01 = (x01 + x06) | 0;
    x12 = rotl(x12 ^ x01, 16);
    x11 = (x11 + x12) | 0;
    x06 = rotl(x06 ^ x11, 12);
    x01 = (x01 + x06) | 0;
    x12 = rotl(x12 ^ x01, 8);
    x11 = (x11 + x12) | 0;
    x06 = rotl(x06 ^ x11, 7);
    x02 = (x02 + x07) | 0;
    x13 = rotl(x13 ^ x02, 16);
    x08 = (x08 + x13) | 0;
    x07 = rotl(x07 ^ x08, 12);
    x02 = (x02 + x07) | 0;
    x13 = rotl(x13 ^ x02, 8);
    x08 = (x08 + x13) | 0;
    x07 = rotl(x07 ^ x08, 7);
    x03 = (x03 + x04) | 0;
    x14 = rotl(x14 ^ x03, 16);
    x09 = (x09 + x14) | 0;
    x04 = rotl(x04 ^ x09, 12);
    x03 = (x03 + x04) | 0;
    x14 = rotl(x14 ^ x03, 8);
    x09 = (x09 + x14) | 0;
    x04 = rotl(x04 ^ x09, 7);
  }
  let oi = 0;
  out[oi++] = x00;
  out[oi++] = x01;
  out[oi++] = x02;
  out[oi++] = x03;
  out[oi++] = x12;
  out[oi++] = x13;
  out[oi++] = x14;
  out[oi++] = x15;
}
/**
 * XChaCha eXtended-nonce ChaCha. With 24-byte nonce, it's safe to make it random (CSPRNG).
 * See [IRTF draft](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha).
 */
var xchacha20 = /* @__PURE__ */ createCipher(chachaCore, {
  counterRight: false,
  counterLength: 8,
  extendNonceFn: hchacha,
  allowShortKeys: false,
});
var ZEROS16 = /* @__PURE__ */ new Uint8Array(16);
var updatePadded = (h, msg) => {
  h.update(msg);
  const leftover = msg.length % 16;
  if (leftover) h.update(ZEROS16.subarray(leftover));
};
var ZEROS32 = /* @__PURE__ */ new Uint8Array(32);
function computeTag(fn, key, nonce, ciphertext, AAD) {
  if (AAD !== void 0) abytes(AAD, void 0, 'AAD');
  const authKey = fn(key, nonce, ZEROS32);
  const lengths = u64Lengths(ciphertext.length, AAD ? AAD.length : 0, true);
  const h = poly1305.create(authKey);
  if (AAD) updatePadded(h, AAD);
  updatePadded(h, ciphertext);
  h.update(lengths);
  const res = h.digest();
  clean(authKey, lengths);
  return res;
}
/**
 * AEAD algorithm from RFC 8439.
 * Salsa20 and chacha (RFC 8439) use poly1305 differently.
 * We could have composed them, but it's hard because of authKey:
 * In salsa20, authKey changes position in salsa stream.
 * In chacha, authKey can't be computed inside computeTag, it modifies the counter.
 */
var _poly1305_aead = (xorStream) => (key, nonce, AAD) => {
  const tagLength = 16;
  return {
    encrypt(plaintext, output) {
      const plength = plaintext.length;
      output = getOutput(plength + tagLength, output, false);
      output.set(plaintext);
      const oPlain = output.subarray(0, -16);
      xorStream(key, nonce, oPlain, oPlain, 1);
      const tag = computeTag(xorStream, key, nonce, oPlain, AAD);
      output.set(tag, plength);
      clean(tag);
      return output;
    },
    decrypt(ciphertext, output) {
      output = getOutput(ciphertext.length - tagLength, output, false);
      const data = ciphertext.subarray(0, -16);
      const passedTag = ciphertext.subarray(-16);
      const tag = computeTag(xorStream, key, nonce, data, AAD);
      if (!equalBytes(passedTag, tag)) throw new Error('invalid tag');
      output.set(ciphertext.subarray(0, -16));
      xorStream(key, nonce, output, output, 1);
      clean(tag);
      return output;
    },
  };
};
/**
 * XChaCha20-Poly1305 extended-nonce chacha.
 *
 * Can be safely used with random nonces (CSPRNG).
 * See [IRTF draft](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha).
 */
var xchacha20poly1305 = /* @__PURE__ */ wrapCipher(
  {
    blockSize: 64,
    nonceLength: 24,
    tagLength: 16,
  },
  _poly1305_aead(xchacha20)
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/crypto/index.mjs
var ENVELOPE_PREFIX = '$ba$';
function parseEnvelope(data) {
  if (!data.startsWith(ENVELOPE_PREFIX)) return null;
  const firstSep = 4;
  const secondSep = data.indexOf('$', firstSep);
  if (secondSep === -1) return null;
  const version = parseInt(data.slice(firstSep, secondSep), 10);
  if (!Number.isInteger(version) || version < 0) return null;
  return {
    version,
    ciphertext: data.slice(secondSep + 1),
  };
}
function formatEnvelope(version, ciphertext) {
  return `${ENVELOPE_PREFIX}${version}$${ciphertext}`;
}
async function rawEncrypt(secret, data) {
  const keyAsBytes = await createHash('SHA-256').digest(secret);
  const dataAsBytes = utf8ToBytes(data);
  return bytesToHex(
    managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes)).encrypt(
      dataAsBytes
    )
  );
}
async function rawDecrypt(secret, hex) {
  const keyAsBytes = await createHash('SHA-256').digest(secret);
  const dataAsBytes = hexToBytes(hex);
  const chacha = managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes));
  return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
}
var symmetricEncrypt = async ({ key, data }) => {
  if (typeof key === 'string') return rawEncrypt(key, data);
  const secret = key.keys.get(key.currentVersion);
  if (!secret)
    throw new Error(`Secret version ${key.currentVersion} not found in keys`);
  const ciphertext = await rawEncrypt(secret, data);
  return formatEnvelope(key.currentVersion, ciphertext);
};
var symmetricDecrypt = async ({ key, data }) => {
  if (typeof key === 'string') return rawDecrypt(key, data);
  const envelope = parseEnvelope(data);
  if (envelope) {
    const secret = key.keys.get(envelope.version);
    if (!secret)
      throw new Error(
        `Secret version ${envelope.version} not found in keys (key may have been retired)`
      );
    return rawDecrypt(secret, envelope.ciphertext);
  }
  if (key.legacySecret) return rawDecrypt(key.legacySecret, data);
  throw new Error(
    'Cannot decrypt legacy bare-hex payload: no legacy secret available. Set BETTER_AUTH_SECRET for backwards compatibility.'
  );
};
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/utils/date.mjs
var getDate = (span, unit = 'ms') => {
  return new Date(Date.now() + (unit === 'sec' ? span * 1e3 : span));
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/utils/db.mjs
/**
 * Filters output data by removing fields with the `returned: false` attribute.
 * This ensures sensitive fields are not exposed in API responses.
 */
function filterOutputFields(data, additionalFields) {
  if (!data || !additionalFields) return data;
  const returnFiltered = Object.entries(additionalFields)
    .filter(([, { returned }]) => returned === false)
    .map(([key]) => key);
  return Object.entries(structuredClone(data))
    .filter(([key]) => !returnFiltered.includes(key))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/db/schema.mjs
var cache = /* @__PURE__ */ new WeakMap();
function getFields(options, modelName, mode) {
  const cacheKey = `${modelName}:${mode}`;
  if (!cache.has(options)) cache.set(options, /* @__PURE__ */ new Map());
  const tableCache = cache.get(options);
  if (tableCache.has(cacheKey)) return tableCache.get(cacheKey);
  const coreSchema =
    mode === 'output' ? (getAuthTables(options)[modelName]?.fields ?? {}) : {};
  const additionalFields =
    modelName === 'user' || modelName === 'session' || modelName === 'account'
      ? options[modelName]?.additionalFields
      : void 0;
  let schema = {
    ...coreSchema,
    ...(additionalFields ?? {}),
  };
  for (const plugin of options.plugins || [])
    if (plugin.schema && plugin.schema[modelName])
      schema = {
        ...schema,
        ...plugin.schema[modelName].fields,
      };
  tableCache.set(cacheKey, schema);
  return schema;
}
function parseUserOutput(options, user) {
  return filterOutputFields(user, getFields(options, 'user', 'output'));
}
function parseSessionOutput(options, session) {
  return filterOutputFields(session, getFields(options, 'session', 'output'));
}
function parseAccountOutput(options, account) {
  const {
    accessToken: _accessToken,
    refreshToken: _refreshToken,
    idToken: _idToken,
    accessTokenExpiresAt: _accessTokenExpiresAt,
    refreshTokenExpiresAt: _refreshTokenExpiresAt,
    password: _password,
    ...rest
  } = filterOutputFields(account, getFields(options, 'account', 'output'));
  return rest;
}
function parseInputData(data, schema) {
  const action = schema.action || 'create';
  const fields = schema.fields;
  const parsedData = Object.create(null);
  for (const key in fields) {
    if (key in data) {
      if (fields[key].input === false) {
        if (fields[key].defaultValue !== void 0) {
          if (action !== 'update') {
            parsedData[key] = fields[key].defaultValue;
            continue;
          }
        }
        if (data[key])
          throw APIError.from('BAD_REQUEST', {
            ...BASE_ERROR_CODES.FIELD_NOT_ALLOWED,
            message: `${key} is not allowed to be set`,
          });
        continue;
      }
      if (fields[key].validator?.input && data[key] !== void 0) {
        const result = fields[key].validator.input['~standard'].validate(
          data[key]
        );
        if (result instanceof Promise)
          throw APIError.from(
            'INTERNAL_SERVER_ERROR',
            BASE_ERROR_CODES.ASYNC_VALIDATION_NOT_SUPPORTED
          );
        if ('issues' in result && result.issues)
          throw APIError.from('BAD_REQUEST', {
            ...BASE_ERROR_CODES.VALIDATION_ERROR,
            message: result.issues[0]?.message || 'Validation Error',
          });
        parsedData[key] = result.value;
        continue;
      }
      if (fields[key].transform?.input && data[key] !== void 0) {
        parsedData[key] = fields[key].transform?.input(data[key]);
        continue;
      }
      parsedData[key] = data[key];
      continue;
    }
    if (fields[key].defaultValue !== void 0 && action === 'create') {
      if (typeof fields[key].defaultValue === 'function') {
        parsedData[key] = fields[key].defaultValue();
        continue;
      }
      parsedData[key] = fields[key].defaultValue;
      continue;
    }
    if (fields[key].required && action === 'create')
      throw APIError.from('BAD_REQUEST', {
        ...BASE_ERROR_CODES.MISSING_FIELD,
        message: `${key} is required`,
      });
  }
  return parsedData;
}
function parseUserInput(options, user = {}, action) {
  return parseInputData(user, {
    fields: getFields(options, 'user', 'input'),
    action,
  });
}
function parseSessionInput(options, session, action) {
  return parseInputData(session, {
    fields: getFields(options, 'session', 'input'),
    action,
  });
}
function getSessionDefaultFields(options) {
  const fields = getFields(options, 'session', 'input');
  const defaults = {};
  for (const key in fields)
    if (fields[key].defaultValue !== void 0)
      defaults[key] =
        typeof fields[key].defaultValue === 'function'
          ? fields[key].defaultValue()
          : fields[key].defaultValue;
  return defaults;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/utils/is-promise.mjs
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/cookies/session-store.mjs
var ALLOWED_COOKIE_SIZE = 4096;
var ESTIMATED_EMPTY_COOKIE_SIZE = 200;
var CHUNK_SIZE = ALLOWED_COOKIE_SIZE - ESTIMATED_EMPTY_COOKIE_SIZE;
/**
 * Parse cookies from the request headers
 */
function parseCookiesFromContext(ctx) {
  const cookieHeader = ctx.headers?.get('cookie');
  if (!cookieHeader) return {};
  const cookies = {};
  const pairs = cookieHeader.split('; ');
  for (const pair of pairs) {
    const [name, ...valueParts] = pair.split('=');
    if (name && valueParts.length > 0) cookies[name] = valueParts.join('=');
  }
  return cookies;
}
/**
 * Extract the chunk index from a cookie name
 */
function getChunkIndex(cookieName) {
  const parts = cookieName.split('.');
  const lastPart = parts[parts.length - 1];
  const index = parseInt(lastPart || '0', 10);
  return isNaN(index) ? 0 : index;
}
/**
 * Read all existing chunks from cookies
 */
function readExistingChunks(cookieName, ctx) {
  const chunks = {};
  const cookies = parseCookiesFromContext(ctx);
  for (const [name, value] of Object.entries(cookies))
    if (name.startsWith(cookieName)) chunks[name] = value;
  return chunks;
}
/**
 * Get the full session data by joining all chunks
 */
function joinChunks(chunks) {
  return Object.keys(chunks)
    .sort((a, b) => {
      return getChunkIndex(a) - getChunkIndex(b);
    })
    .map((key) => chunks[key])
    .join('');
}
/**
 * Split a cookie value into chunks if needed
 */
function chunkCookie(storeName, cookie, chunks, logger) {
  const chunkCount = Math.ceil(cookie.value.length / CHUNK_SIZE);
  if (chunkCount === 1) {
    chunks[cookie.name] = cookie.value;
    return [cookie];
  }
  const cookies = [];
  for (let i = 0; i < chunkCount; i++) {
    const name = `${cookie.name}.${i}`;
    const start = i * CHUNK_SIZE;
    const value = cookie.value.substring(start, start + CHUNK_SIZE);
    cookies.push({
      ...cookie,
      name,
      value,
    });
    chunks[name] = value;
  }
  logger.debug(`CHUNKING_${storeName.toUpperCase()}_COOKIE`, {
    message: `${storeName} cookie exceeds allowed ${ALLOWED_COOKIE_SIZE} bytes.`,
    emptyCookieSize: ESTIMATED_EMPTY_COOKIE_SIZE,
    valueSize: cookie.value.length,
    chunkCount,
    chunks: cookies.map((c) => c.value.length + ESTIMATED_EMPTY_COOKIE_SIZE),
  });
  return cookies;
}
/**
 * Get all cookies that should be cleaned (removed)
 */
function getCleanCookies(chunks, cookieOptions) {
  const cleanedChunks = {};
  for (const name in chunks)
    cleanedChunks[name] = {
      name,
      value: '',
      attributes: {
        ...cookieOptions,
        maxAge: 0,
      },
    };
  return cleanedChunks;
}
/**
 * Create a session store for handling cookie chunking.
 * When session data exceeds 4KB, it automatically splits it into multiple cookies.
 *
 * Based on next-auth's SessionStore implementation.
 * @see https://github.com/nextauthjs/next-auth/blob/27b2519b84b8eb9cf053775dea29d577d2aa0098/packages/next-auth/src/core/lib/cookie.ts
 */
var storeFactory = (storeName) => (cookieName, cookieOptions, ctx) => {
  const chunks = readExistingChunks(cookieName, ctx);
  const logger = ctx.context.logger;
  return {
    getValue() {
      return joinChunks(chunks);
    },
    hasChunks() {
      return Object.keys(chunks).length > 0;
    },
    chunk(value, options) {
      const cleanedChunks = getCleanCookies(chunks, cookieOptions);
      for (const name in chunks) delete chunks[name];
      const cookies = cleanedChunks;
      const chunked = chunkCookie(
        storeName,
        {
          name: cookieName,
          value,
          attributes: {
            ...cookieOptions,
            ...options,
          },
        },
        chunks,
        logger
      );
      for (const chunk of chunked) cookies[chunk.name] = chunk;
      return Object.values(cookies);
    },
    clean() {
      const cleanedChunks = getCleanCookies(chunks, cookieOptions);
      for (const name in chunks) delete chunks[name];
      return Object.values(cleanedChunks);
    },
    setCookies(cookies) {
      for (const cookie of cookies)
        ctx.setCookie(cookie.name, cookie.value, cookie.attributes);
    },
  };
};
var createSessionStore = storeFactory('Session');
var createAccountStore = storeFactory('Account');
function getChunkedCookie(ctx, cookieName) {
  const value = ctx.getCookie(cookieName);
  if (value) return value;
  const chunks = [];
  const cookieHeader = ctx.headers?.get('cookie');
  if (!cookieHeader) return null;
  const cookies = {};
  const pairs = cookieHeader.split('; ');
  for (const pair of pairs) {
    const [name, ...valueParts] = pair.split('=');
    if (name && valueParts.length > 0) cookies[name] = valueParts.join('=');
  }
  for (const [name, val] of Object.entries(cookies))
    if (name.startsWith(cookieName + '.')) {
      const indexStr = name.split('.').at(-1);
      const index = parseInt(indexStr || '0', 10);
      if (!isNaN(index))
        chunks.push({
          index,
          value: val,
        });
    }
  if (chunks.length > 0) {
    chunks.sort((a, b) => a.index - b.index);
    return chunks.map((c) => c.value).join('');
  }
  return null;
}
async function setAccountCookie(c, accountData) {
  const accountDataCookie = c.context.authCookies.accountData;
  const options = {
    maxAge: 300,
    ...accountDataCookie.attributes,
  };
  const data = await symmetricEncodeJWT(
    accountData,
    c.context.secretConfig,
    'better-auth-account',
    options.maxAge
  );
  if (data.length > ALLOWED_COOKIE_SIZE) {
    const accountStore = createAccountStore(accountDataCookie.name, options, c);
    const cookies = accountStore.chunk(data, options);
    accountStore.setCookies(cookies);
  } else {
    const accountStore = createAccountStore(accountDataCookie.name, options, c);
    if (accountStore.hasChunks()) {
      const cleanCookies = accountStore.clean();
      accountStore.setCookies(cleanCookies);
    }
    c.setCookie(accountDataCookie.name, data, options);
  }
}
async function getAccountCookie(c) {
  const accountCookie = getChunkedCookie(
    c,
    c.context.authCookies.accountData.name
  );
  if (accountCookie) {
    const accountData = safeJSONParse(
      await symmetricDecodeJWT(
        accountCookie,
        c.context.secretConfig,
        'better-auth-account'
      )
    );
    if (accountData) return accountData;
  }
  return null;
}
var getSessionQuerySchema = z$1.optional(
  z$1.object({
    disableCookieCache: z$1.coerce
      .boolean()
      .meta({
        description: 'Disable cookie cache and fetch session from database',
      })
      .optional(),
    disableRefresh: z$1.coerce
      .boolean()
      .meta({
        description:
          'Disable session refresh. Useful for checking session status, without updating the session',
      })
      .optional(),
  })
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/utils/time.mjs
var SEC = 1e3;
var MIN = SEC * 60;
var HOUR = MIN * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365.25;
var REGEX =
  /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mo|years?|yrs?|y)(?: (ago|from now))?$/i;
function parse(value) {
  const match = REGEX.exec(value);
  if (!match || (match[4] && match[1]))
    throw new TypeError(
      `Invalid time string format: "${value}". Use formats like "7d", "30m", "1 hour", etc.`
    );
  const n = parseFloat(match[2]);
  const unit = match[3].toLowerCase();
  let result;
  switch (unit) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      result = n * YEAR;
      break;
    case 'months':
    case 'month':
    case 'mo':
      result = n * MONTH;
      break;
    case 'weeks':
    case 'week':
    case 'w':
      result = n * WEEK;
      break;
    case 'days':
    case 'day':
    case 'd':
      result = n * DAY;
      break;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      result = n * HOUR;
      break;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      result = n * MIN;
      break;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      result = n * SEC;
      break;
    default:
      throw new TypeError(`Unknown time unit: "${unit}"`);
  }
  if (match[1] === '-' || match[4] === 'ago') return -result;
  return result;
}
/**
 * Parse a time string and return the value in seconds.
 *
 * @param value - A time string like "7d", "30m", "1 hour", "2 hours ago"
 * @returns The parsed value in seconds (rounded)
 * @throws TypeError if the string format is invalid
 *
 * @example
 * sec("1d")          // 86400
 * sec("2 hours")     // 7200
 * sec("-30s")        // -30
 * sec("2 hours ago") // -7200
 */
function sec(value) {
  return Math.round(parse(value) / 1e3);
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/cookies/cookie-utils.mjs
var SECURE_COOKIE_PREFIX = '__Secure-';
//#endregion
//#region node_modules/.pnpm/@better-auth+utils@0.4.0/node_modules/@better-auth/utils/dist/binary.mjs
var decoders = /* @__PURE__ */ new Map();
var binary = {
  decode: (data, encoding = 'utf-8') => {
    if (!decoders.has(encoding))
      decoders.set(encoding, new TextDecoder(encoding));
    return decoders.get(encoding).decode(data);
  },
  encode: new TextEncoder().encode,
};
//#endregion
//#region node_modules/.pnpm/@better-auth+utils@0.4.0/node_modules/@better-auth/utils/dist/hex.mjs
var hexadecimal = '0123456789abcdef';
var hex = {
  encode: (data) => {
    if (typeof data === 'string') data = new TextEncoder().encode(data);
    if (data.byteLength === 0) return '';
    const buffer = new Uint8Array(data);
    let result = '';
    for (const byte of buffer) result += byte.toString(16).padStart(2, '0');
    return result;
  },
  decode: (data) => {
    if (!data) return '';
    if (typeof data === 'string') {
      if (data.length % 2 !== 0) throw new Error('Invalid hexadecimal string');
      if (!new RegExp(`^[${hexadecimal}]+$`).test(data))
        throw new Error('Invalid hexadecimal string');
      const result = new Uint8Array(data.length / 2);
      for (let i = 0; i < data.length; i += 2)
        result[i / 2] = parseInt(data.slice(i, i + 2), 16);
      return new TextDecoder().decode(result);
    }
    return new TextDecoder().decode(data);
  },
};
//#endregion
//#region node_modules/.pnpm/@better-auth+utils@0.4.0/node_modules/@better-auth/utils/dist/hmac.mjs
var createHMAC = (algorithm = 'SHA-256', encoding = 'none') => {
  const hmac = {
    importKey: async (key, keyUsage) => {
      return getWebcryptoSubtle().importKey(
        'raw',
        typeof key === 'string' ? new TextEncoder().encode(key) : key,
        {
          name: 'HMAC',
          hash: { name: algorithm },
        },
        false,
        [keyUsage]
      );
    },
    sign: async (hmacKey, data) => {
      if (typeof hmacKey === 'string')
        hmacKey = await hmac.importKey(hmacKey, 'sign');
      const signature = await getWebcryptoSubtle().sign(
        'HMAC',
        hmacKey,
        typeof data === 'string' ? new TextEncoder().encode(data) : data
      );
      if (encoding === 'hex') return hex.encode(signature);
      if (
        encoding === 'base64' ||
        encoding === 'base64url' ||
        encoding === 'base64urlnopad'
      )
        return base64Url.encode(signature, {
          padding: encoding !== 'base64urlnopad',
        });
      return signature;
    },
    verify: async (hmacKey, data, signature) => {
      if (typeof hmacKey === 'string')
        hmacKey = await hmac.importKey(hmacKey, 'verify');
      if (encoding === 'hex') signature = hex.decode(signature);
      if (
        encoding === 'base64' ||
        encoding === 'base64url' ||
        encoding === 'base64urlnopad'
      )
        signature = await base64.decode(signature);
      return getWebcryptoSubtle().verify(
        'HMAC',
        hmacKey,
        typeof signature === 'string'
          ? new TextEncoder().encode(signature)
          : signature,
        typeof data === 'string' ? new TextEncoder().encode(data) : data
      );
    },
  };
  return hmac;
};
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/cookies/index.mjs
function createCookieGetter(options) {
  const baseURLString =
    typeof options.baseURL === 'string' ? options.baseURL : void 0;
  const dynamicProtocol =
    typeof options.baseURL === 'object' && options.baseURL !== null
      ? options.baseURL.protocol
      : void 0;
  const secureCookiePrefix = (
    options.advanced?.useSecureCookies !== void 0
      ? options.advanced?.useSecureCookies
      : dynamicProtocol === 'https'
        ? true
        : dynamicProtocol === 'http'
          ? false
          : baseURLString
            ? baseURLString.startsWith('https://')
            : isProduction
  )
    ? SECURE_COOKIE_PREFIX
    : '';
  const crossSubdomainEnabled =
    !!options.advanced?.crossSubDomainCookies?.enabled;
  const domain = crossSubdomainEnabled
    ? options.advanced?.crossSubDomainCookies?.domain ||
      (baseURLString ? new URL(baseURLString).hostname : void 0)
    : void 0;
  if (
    crossSubdomainEnabled &&
    !domain &&
    !isDynamicBaseURLConfig(options.baseURL)
  )
    throw new BetterAuthError(
      'baseURL is required when crossSubdomainCookies are enabled.'
    );
  function createCookie(cookieName, overrideAttributes = {}) {
    const prefix = options.advanced?.cookiePrefix || 'better-auth';
    const name =
      options.advanced?.cookies?.[cookieName]?.name ||
      `${prefix}.${cookieName}`;
    const attributes =
      options.advanced?.cookies?.[cookieName]?.attributes ?? {};
    return {
      name: `${secureCookiePrefix}${name}`,
      attributes: {
        secure: !!secureCookiePrefix,
        sameSite: 'lax',
        path: '/',
        httpOnly: true,
        ...(crossSubdomainEnabled ? { domain } : {}),
        ...options.advanced?.defaultCookieAttributes,
        ...overrideAttributes,
        ...attributes,
      },
    };
  }
  return createCookie;
}
function getCookies(options) {
  const createCookie = createCookieGetter(options);
  const sessionToken = createCookie('session_token', {
    maxAge: options.session?.expiresIn || sec('7d'),
  });
  const sessionData = createCookie('session_data', {
    maxAge: options.session?.cookieCache?.maxAge || 300,
  });
  const accountData = createCookie('account_data', {
    maxAge: options.session?.cookieCache?.maxAge || 300,
  });
  const dontRememberToken = createCookie('dont_remember');
  return {
    sessionToken: {
      name: sessionToken.name,
      attributes: sessionToken.attributes,
    },
    sessionData: {
      name: sessionData.name,
      attributes: sessionData.attributes,
    },
    dontRememberToken: {
      name: dontRememberToken.name,
      attributes: dontRememberToken.attributes,
    },
    accountData: {
      name: accountData.name,
      attributes: accountData.attributes,
    },
  };
}
async function setCookieCache(ctx, session, dontRememberMe) {
  if (!ctx.context.options.session?.cookieCache?.enabled) return;
  const filteredSession = filterOutputFields(
    session.session,
    ctx.context.options.session?.additionalFields
  );
  const filteredUser = parseUserOutput(ctx.context.options, session.user);
  const versionConfig = ctx.context.options.session?.cookieCache?.version;
  let version = '1';
  if (versionConfig) {
    if (typeof versionConfig === 'string') version = versionConfig;
    else if (typeof versionConfig === 'function') {
      const result = versionConfig(session.session, session.user);
      version = isPromise(result) ? await result : result;
    }
  }
  const sessionData = {
    session: filteredSession,
    user: filteredUser,
    updatedAt: Date.now(),
    version,
  };
  const options = {
    ...ctx.context.authCookies.sessionData.attributes,
    maxAge: dontRememberMe
      ? void 0
      : ctx.context.authCookies.sessionData.attributes.maxAge,
  };
  const expiresAtDate = getDate(options.maxAge || 60, 'sec').getTime();
  const strategy =
    ctx.context.options.session?.cookieCache?.strategy || 'compact';
  let data;
  if (strategy === 'jwe')
    data = await symmetricEncodeJWT(
      sessionData,
      ctx.context.secretConfig,
      'better-auth-session',
      options.maxAge || 300
    );
  else if (strategy === 'jwt')
    data = await signJWT(
      sessionData,
      ctx.context.secret,
      options.maxAge || 300
    );
  else
    data = base64Url.encode(
      JSON.stringify({
        session: sessionData,
        expiresAt: expiresAtDate,
        signature: await createHMAC('SHA-256', 'base64urlnopad').sign(
          ctx.context.secret,
          JSON.stringify({
            ...sessionData,
            expiresAt: expiresAtDate,
          })
        ),
      }),
      { padding: false }
    );
  if (data.length > 4093) {
    const sessionStore = createSessionStore(
      ctx.context.authCookies.sessionData.name,
      options,
      ctx
    );
    const cookies = sessionStore.chunk(data, options);
    sessionStore.setCookies(cookies);
  } else {
    const sessionStore = createSessionStore(
      ctx.context.authCookies.sessionData.name,
      options,
      ctx
    );
    if (sessionStore.hasChunks()) {
      const cleanCookies = sessionStore.clean();
      sessionStore.setCookies(cleanCookies);
    }
    ctx.setCookie(ctx.context.authCookies.sessionData.name, data, options);
  }
  if (ctx.context.options.account?.storeAccountCookie) {
    const accountData = await getAccountCookie(ctx);
    if (accountData) await setAccountCookie(ctx, accountData);
  }
}
async function setSessionCookie(ctx, session, dontRememberMe, overrides) {
  const dontRememberMeCookie = await ctx.getSignedCookie(
    ctx.context.authCookies.dontRememberToken.name,
    ctx.context.secret
  );
  dontRememberMe =
    dontRememberMe !== void 0 ? dontRememberMe : !!dontRememberMeCookie;
  const options = ctx.context.authCookies.sessionToken.attributes;
  const maxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
  await ctx.setSignedCookie(
    ctx.context.authCookies.sessionToken.name,
    session.session.token,
    ctx.context.secret,
    {
      ...options,
      maxAge,
      ...overrides,
    }
  );
  if (dontRememberMe)
    await ctx.setSignedCookie(
      ctx.context.authCookies.dontRememberToken.name,
      'true',
      ctx.context.secret,
      ctx.context.authCookies.dontRememberToken.attributes
    );
  await setCookieCache(ctx, session, dontRememberMe);
  ctx.context.setNewSession(session);
}
/**
 * Expires a cookie by setting `maxAge: 0` while preserving its attributes
 */
function expireCookie(ctx, cookie) {
  ctx.setCookie(cookie.name, '', {
    ...cookie.attributes,
    maxAge: 0,
  });
}
function deleteSessionCookie(ctx, skipDontRememberMe) {
  expireCookie(ctx, ctx.context.authCookies.sessionToken);
  expireCookie(ctx, ctx.context.authCookies.sessionData);
  if (ctx.context.options.account?.storeAccountCookie) {
    expireCookie(ctx, ctx.context.authCookies.accountData);
    const accountStore = createAccountStore(
      ctx.context.authCookies.accountData.name,
      ctx.context.authCookies.accountData.attributes,
      ctx
    );
    const cleanCookies = accountStore.clean();
    accountStore.setCookies(cleanCookies);
  }
  if (ctx.context.oauthConfig.storeStateStrategy === 'cookie')
    expireCookie(ctx, ctx.context.createAuthCookie('oauth_state'));
  const sessionStore = createSessionStore(
    ctx.context.authCookies.sessionData.name,
    ctx.context.authCookies.sessionData.attributes,
    ctx
  );
  const cleanCookies = sessionStore.clean();
  sessionStore.setCookies(cleanCookies);
  if (!skipDontRememberMe)
    expireCookie(ctx, ctx.context.authCookies.dontRememberToken);
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/state.mjs
var stateDataSchema = z$1.looseObject({
  callbackURL: z$1.string(),
  codeVerifier: z$1.string(),
  errorURL: z$1.string().optional(),
  newUserURL: z$1.string().optional(),
  expiresAt: z$1.number(),
  oauthState: z$1.string().optional(),
  link: z$1
    .object({
      email: z$1.string(),
      userId: z$1.coerce.string(),
    })
    .optional(),
  requestSignUp: z$1.boolean().optional(),
});
var StateError = class extends BetterAuthError {
  code;
  details;
  constructor(message, options) {
    super(message, options);
    this.code = options.code;
    this.details = options.details;
  }
};
async function generateGenericState(c, stateData, settings) {
  const state = generateRandomString(32);
  if (c.context.oauthConfig.storeStateStrategy === 'cookie') {
    const payload = {
      ...stateData,
      oauthState: state,
    };
    const encryptedData = await symmetricEncrypt({
      key: c.context.secretConfig,
      data: JSON.stringify(payload),
    });
    const stateCookie = c.context.createAuthCookie(
      settings?.cookieName ?? 'oauth_state',
      { maxAge: 600 }
    );
    c.setCookie(stateCookie.name, encryptedData, stateCookie.attributes);
    return {
      state,
      codeVerifier: stateData.codeVerifier,
    };
  }
  const stateCookie = c.context.createAuthCookie(
    settings?.cookieName ?? 'state',
    { maxAge: 300 }
  );
  await c.setSignedCookie(
    stateCookie.name,
    state,
    c.context.secret,
    stateCookie.attributes
  );
  const expiresAt = /* @__PURE__ */ new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 10);
  if (
    !(await c.context.internalAdapter.createVerificationValue({
      value: JSON.stringify({
        ...stateData,
        oauthState: state,
      }),
      identifier: state,
      expiresAt,
    }))
  )
    throw new StateError(
      'Unable to create verification. Make sure the database adapter is properly working and there is a verification table in the database',
      { code: 'state_generation_error' }
    );
  return {
    state,
    codeVerifier: stateData.codeVerifier,
  };
}
async function parseGenericState(c, state, settings) {
  const storeStateStrategy = c.context.oauthConfig.storeStateStrategy;
  let parsedData;
  if (storeStateStrategy === 'cookie') {
    const stateCookie = c.context.createAuthCookie(
      settings?.cookieName ?? 'oauth_state'
    );
    const encryptedData = c.getCookie(stateCookie.name);
    if (!encryptedData)
      throw new StateError('State mismatch: auth state cookie not found', {
        code: 'state_mismatch',
        details: { state },
      });
    try {
      const decryptedData = await symmetricDecrypt({
        key: c.context.secretConfig,
        data: encryptedData,
      });
      parsedData = stateDataSchema.parse(JSON.parse(decryptedData));
    } catch (error) {
      throw new StateError(
        'State invalid: Failed to decrypt or parse auth state',
        {
          code: 'state_invalid',
          details: { state },
          cause: error,
        }
      );
    }
    if (!parsedData.oauthState || parsedData.oauthState !== state)
      throw new StateError(
        'State mismatch: OAuth state parameter does not match stored state',
        {
          code: 'state_security_mismatch',
          details: { state },
        }
      );
    expireCookie(c, stateCookie);
  } else {
    const data = await c.context.internalAdapter.findVerificationValue(state);
    if (!data)
      throw new StateError('State mismatch: verification not found', {
        code: 'state_mismatch',
        details: { state },
      });
    parsedData = stateDataSchema.parse(JSON.parse(data.value));
    if (parsedData.oauthState !== void 0 && parsedData.oauthState !== state)
      throw new StateError(
        'State mismatch: OAuth state parameter does not match stored state',
        {
          code: 'state_security_mismatch',
          details: { state },
        }
      );
    const stateCookie = c.context.createAuthCookie(
      settings?.cookieName ?? 'state'
    );
    const stateCookieValue = await c.getSignedCookie(
      stateCookie.name,
      c.context.secret
    );
    if (
      !(
        settings?.skipStateCookieCheck ??
        c.context.oauthConfig.skipStateCookieCheck
      ) &&
      (!stateCookieValue || stateCookieValue !== state)
    )
      throw new StateError('State mismatch: State not persisted correctly', {
        code: 'state_security_mismatch',
        details: { state },
      });
    expireCookie(c, stateCookie);
    await c.context.internalAdapter.deleteVerificationByIdentifier(state);
  }
  if (parsedData.expiresAt < Date.now())
    throw new StateError('Invalid state: request expired', {
      code: 'state_mismatch',
      details: { expiresAt: parsedData.expiresAt },
    });
  return parsedData;
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/context/global.mjs
var symbol = Symbol.for('better-auth:global');
var bind = null;
var __context = {};
var __betterAuthVersion = '1.6.2';
/**
 * We store context instance in the globalThis.
 *
 * The reason we do this is that some bundlers, web framework, or package managers might
 * create multiple copies of BetterAuth in the same process intentionally or unintentionally.
 *
 * For example, yarn v1, Next.js, SSR, Vite...
 *
 * @internal
 */
function __getBetterAuthGlobal() {
  if (!globalThis[symbol]) {
    globalThis[symbol] = {
      version: __betterAuthVersion,
      epoch: 1,
      context: __context,
    };
    bind = globalThis[symbol];
  }
  bind = globalThis[symbol];
  if (bind.version !== __betterAuthVersion) {
    bind.version = __betterAuthVersion;
    bind.epoch++;
  }
  return globalThis[symbol];
}
function getBetterAuthVersion() {
  return __getBetterAuthGlobal().version;
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/async_hooks/index.mjs
var AsyncLocalStoragePromise = import(
  /* @vite-ignore */
  /* webpackIgnore: true */
  'node:async_hooks'
)
  .then((mod) => mod.AsyncLocalStorage)
  .catch((err) => {
    if ('AsyncLocalStorage' in globalThis) return globalThis.AsyncLocalStorage;
    if (typeof window !== 'undefined') return null;
    console.warn(
      '[better-auth] Warning: AsyncLocalStorage is not available in this environment. Some features may not work as expected.'
    );
    console.warn(
      '[better-auth] Please read more about this warning at https://better-auth.com/docs/installation#mount-handler'
    );
    console.warn(
      '[better-auth] If you are using Cloudflare Workers, please see: https://developers.cloudflare.com/workers/configuration/compatibility-flags/#nodejs-compatibility-flag'
    );
    throw err;
  });
async function getAsyncLocalStorage() {
  const mod = await AsyncLocalStoragePromise;
  if (mod === null)
    throw new Error('getAsyncLocalStorage is only available in server code');
  else return mod;
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/context/endpoint-context.mjs
var ensureAsyncStorage$2 = async () => {
  const betterAuthGlobal = __getBetterAuthGlobal();
  if (!betterAuthGlobal.context.endpointContextAsyncStorage) {
    const AsyncLocalStorage = await getAsyncLocalStorage();
    betterAuthGlobal.context.endpointContextAsyncStorage =
      new AsyncLocalStorage();
  }
  return betterAuthGlobal.context.endpointContextAsyncStorage;
};
async function getCurrentAuthContext() {
  const context = (await ensureAsyncStorage$2()).getStore();
  if (!context)
    throw new Error(
      'No auth context found. Please make sure you are calling this function within a `runWithEndpointContext` callback.'
    );
  return context;
}
async function runWithEndpointContext(context, fn) {
  return (await ensureAsyncStorage$2()).run(context, fn);
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/context/request-state.mjs
var ensureAsyncStorage$1 = async () => {
  const betterAuthGlobal = __getBetterAuthGlobal();
  if (!betterAuthGlobal.context.requestStateAsyncStorage) {
    const AsyncLocalStorage = await getAsyncLocalStorage();
    betterAuthGlobal.context.requestStateAsyncStorage = new AsyncLocalStorage();
  }
  return betterAuthGlobal.context.requestStateAsyncStorage;
};
async function hasRequestState() {
  return (await ensureAsyncStorage$1()).getStore() !== void 0;
}
async function getCurrentRequestState() {
  const store = (await ensureAsyncStorage$1()).getStore();
  if (!store)
    throw new Error(
      'No request state found. Please make sure you are calling this function within a `runWithRequestState` callback.'
    );
  return store;
}
async function runWithRequestState(store, fn) {
  return (await ensureAsyncStorage$1()).run(store, fn);
}
function defineRequestState(initFn) {
  const ref = Object.freeze({});
  return {
    get ref() {
      return ref;
    },
    async get() {
      const store = await getCurrentRequestState();
      if (!store.has(ref)) {
        const initialValue = await initFn();
        store.set(ref, initialValue);
        return initialValue;
      }
      return store.get(ref);
    },
    async set(value) {
      (await getCurrentRequestState()).set(ref, value);
    },
  };
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/context/transaction.mjs
var ensureAsyncStorage = async () => {
  const betterAuthGlobal = __getBetterAuthGlobal();
  if (!betterAuthGlobal.context.adapterAsyncStorage) {
    const AsyncLocalStorage = await getAsyncLocalStorage();
    betterAuthGlobal.context.adapterAsyncStorage = new AsyncLocalStorage();
  }
  return betterAuthGlobal.context.adapterAsyncStorage;
};
var getCurrentAdapter = async (fallback) => {
  return ensureAsyncStorage()
    .then((als) => {
      return als.getStore()?.adapter || fallback;
    })
    .catch(() => {
      return fallback;
    });
};
var runWithAdapter = async (adapter, fn) => {
  let called = false;
  return ensureAsyncStorage()
    .then(async (als) => {
      called = true;
      const pendingHooks = [];
      let result;
      let error;
      let hasError = false;
      try {
        result = await als.run(
          {
            adapter,
            pendingHooks,
          },
          fn
        );
      } catch (err) {
        error = err;
        hasError = true;
      }
      for (const hook of pendingHooks) await hook();
      if (hasError) throw error;
      return result;
    })
    .catch((err) => {
      if (!called) return fn();
      throw err;
    });
};
var runWithTransaction = async (adapter, fn) => {
  let called = true;
  return ensureAsyncStorage()
    .then(async (als) => {
      called = true;
      const pendingHooks = [];
      let result;
      let error;
      let hasError = false;
      try {
        result = await adapter.transaction(async (trx) => {
          return als.run(
            {
              adapter: trx,
              pendingHooks,
            },
            fn
          );
        });
      } catch (e) {
        hasError = true;
        error = e;
      }
      for (const hook of pendingHooks) await hook();
      if (hasError) throw error;
      return result;
    })
    .catch((err) => {
      if (!called) return fn();
      throw err;
    });
};
/**
 * Queue a hook to be executed after the current transaction commits.
 * If not in a transaction, the hook will execute immediately.
 */
var queueAfterTransactionHook = async (hook) => {
  return ensureAsyncStorage()
    .then((als) => {
      const store = als.getStore();
      if (store) store.pendingHooks.push(hook);
      else return hook();
    })
    .catch(() => {
      return hook();
    });
};
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/state/oauth.mjs
var { get: getOAuthState, set: setOAuthState } = defineRequestState(() => null);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/oauth2/state.mjs
async function generateState(c, link, additionalData) {
  const callbackURL = c.body?.callbackURL || c.context.options.baseURL;
  if (!callbackURL)
    throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.CALLBACK_URL_REQUIRED);
  const codeVerifier = generateRandomString(128);
  const stateData = {
    ...(additionalData ? additionalData : {}),
    callbackURL,
    codeVerifier,
    errorURL: c.body?.errorCallbackURL,
    newUserURL: c.body?.newUserCallbackURL,
    link,
    expiresAt: Date.now() + 600 * 1e3,
    requestSignUp: c.body?.requestSignUp,
  };
  await setOAuthState(stateData);
  try {
    return generateGenericState(c, stateData);
  } catch (error) {
    c.context.logger.error('Failed to create verification', error);
    throw new APIError('INTERNAL_SERVER_ERROR', {
      message: 'Unable to create verification',
      cause: error,
    });
  }
}
async function parseState(c) {
  const state = c.query.state || c.body.state;
  const errorURL =
    c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
  let parsedData;
  try {
    parsedData = await parseGenericState(c, state);
  } catch (error) {
    c.context.logger.error('Failed to parse state', error);
    if (error instanceof StateError && error.code === 'state_security_mismatch')
      throw c.redirect(`${errorURL}?error=state_mismatch`);
    throw c.redirect(`${errorURL}?error=please_restart_the_process`);
  }
  if (!parsedData.errorURL) parsedData.errorURL = errorURL;
  if (parsedData) await setOAuthState(parsedData);
  return parsedData;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/utils/hide-metadata.mjs
var HIDE_METADATA = { scope: 'server' };
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/utils.mjs
var jsonContentTypeRegex = /^application\/([a-z0-9.+-]*\+)?json/i;
async function getBody(request, allowedMediaTypes) {
  const contentType = request.headers.get('content-type') || '';
  const normalizedContentType = contentType.toLowerCase();
  if (!request.body) return;
  if (allowedMediaTypes && allowedMediaTypes.length > 0) {
    if (
      !allowedMediaTypes.some((allowed) => {
        const normalizedContentTypeBase = normalizedContentType
          .split(';')[0]
          .trim();
        const normalizedAllowed = allowed.toLowerCase().trim();
        return (
          normalizedContentTypeBase === normalizedAllowed ||
          normalizedContentTypeBase.includes(normalizedAllowed)
        );
      })
    ) {
      if (!normalizedContentType)
        throw new APIError$1(415, {
          message: `Content-Type is required. Allowed types: ${allowedMediaTypes.join(', ')}`,
          code: 'UNSUPPORTED_MEDIA_TYPE',
        });
      throw new APIError$1(415, {
        message: `Content-Type "${contentType}" is not allowed. Allowed types: ${allowedMediaTypes.join(', ')}`,
        code: 'UNSUPPORTED_MEDIA_TYPE',
      });
    }
  }
  if (jsonContentTypeRegex.test(normalizedContentType))
    return await request.json();
  if (normalizedContentType.includes('application/x-www-form-urlencoded')) {
    const formData = await request.formData();
    const result = {};
    formData.forEach((value, key) => {
      result[key] = value.toString();
    });
    return result;
  }
  if (normalizedContentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const result = {};
    formData.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
  if (normalizedContentType.includes('text/plain')) return await request.text();
  if (normalizedContentType.includes('application/octet-stream'))
    return await request.arrayBuffer();
  if (
    normalizedContentType.includes('application/pdf') ||
    normalizedContentType.includes('image/') ||
    normalizedContentType.includes('video/')
  )
    return await request.blob();
  if (
    normalizedContentType.includes('application/stream') ||
    request.body instanceof ReadableStream
  )
    return request.body;
  return await request.text();
}
function isAPIError$1(error) {
  return error instanceof APIError$1 || error?.name === 'APIError';
}
function tryDecode(str) {
  try {
    return str.includes('%') ? decodeURIComponent(str) : str;
  } catch {
    return str;
  }
}
async function tryCatch(promise) {
  try {
    return {
      data: await promise,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
}
/**
 * Check if an object is a `Request`
 * - `instanceof`: works for native Request instances
 * - `toString`: handles where instanceof check fails but the object is still a valid Request
 */
function isRequest(obj) {
  return (
    obj instanceof Request ||
    Object.prototype.toString.call(obj) === '[object Request]'
  );
}
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/to-response.mjs
function isJSONSerializable(value) {
  if (value === void 0) return false;
  const t = typeof value;
  if (t === 'string' || t === 'number' || t === 'boolean' || t === null)
    return true;
  if (t !== 'object') return false;
  if (Array.isArray(value)) return true;
  if (value.buffer) return false;
  return (
    (value.constructor && value.constructor.name === 'Object') ||
    typeof value.toJSON === 'function'
  );
}
function safeStringify(obj, replacer, space) {
  let id = 0;
  const seen = /* @__PURE__ */ new WeakMap();
  const safeReplacer = (key, value) => {
    if (typeof value === 'bigint') return value.toString();
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return `[Circular ref-${seen.get(value)}]`;
      seen.set(value, id++);
    }
    if (replacer) return replacer(key, value);
    return value;
  };
  return JSON.stringify(obj, safeReplacer, space);
}
function isJSONResponse(value) {
  if (!value || typeof value !== 'object') return false;
  return '_flag' in value && value._flag === 'json';
}
/**
 * Headers that MUST be stripped when building an HTTP response from
 * arbitrary header input. These are request-only, hop-by-hop, or
 * transport-managed headers that cause protocol violations when present
 * on responses (e.g. Content-Length mismatch → net::ERR_CONTENT_LENGTH_MISMATCH).
 *
 * Sources:
 *   - RFC 9110 §10.1   (Request Context Fields)
 *   - RFC 9110 §7.6.1  (Connection / hop-by-hop)
 *   - RFC 9110 §11.6-7 (Authentication credentials)
 *   - RFC 9110 §12.5   (Content negotiation)
 *   - RFC 9110 §13.1   (Conditional request headers)
 *   - RFC 9110 §14.2   (Range requests)
 *   - RFC 6265 §5.4    (Cookie)
 *   - RFC 6454         (Origin)
 */
var REQUEST_ONLY_HEADERS = new Set([
  'host',
  'user-agent',
  'referer',
  'from',
  'expect',
  'authorization',
  'proxy-authorization',
  'cookie',
  'origin',
  'accept-charset',
  'accept-encoding',
  'accept-language',
  'if-match',
  'if-none-match',
  'if-modified-since',
  'if-unmodified-since',
  'if-range',
  'range',
  'max-forwards',
  'connection',
  'keep-alive',
  'transfer-encoding',
  'te',
  'upgrade',
  'trailer',
  'proxy-connection',
  'content-length',
]);
function stripRequestOnlyHeaders(headers) {
  for (const name of REQUEST_ONLY_HEADERS) headers.delete(name);
}
function toResponse(data, init) {
  if (data instanceof Response) {
    if (init?.headers) {
      const safeHeaders = new Headers(init.headers);
      stripRequestOnlyHeaders(safeHeaders);
      safeHeaders.forEach((value, key) => {
        data.headers.set(key, value);
      });
    }
    return data;
  }
  if (isJSONResponse(data)) {
    const body = data.body;
    const routerResponse = data.routerResponse;
    if (routerResponse instanceof Response) return routerResponse;
    const headers = new Headers();
    if (routerResponse?.headers) {
      const headers = new Headers(routerResponse.headers);
      for (const [key, value] of headers.entries()) headers.set(key, value);
    }
    if (data.headers)
      for (const [key, value] of new Headers(data.headers).entries())
        headers.set(key, value);
    if (init?.headers) {
      const safeHeaders = new Headers(init.headers);
      stripRequestOnlyHeaders(safeHeaders);
      for (const [key, value] of safeHeaders.entries()) headers.set(key, value);
    }
    headers.set('Content-Type', 'application/json');
    return new Response(JSON.stringify(body), {
      ...routerResponse,
      headers,
      status: data.status ?? init?.status ?? routerResponse?.status,
      statusText: init?.statusText ?? routerResponse?.statusText,
    });
  }
  if (isAPIError$1(data))
    return toResponse(data.body, {
      status: init?.status ?? data.statusCode,
      statusText: data.status.toString(),
      headers: init?.headers || data.headers,
    });
  let body = data;
  const headers = new Headers(init?.headers);
  stripRequestOnlyHeaders(headers);
  if (!data) {
    if (data === null) body = JSON.stringify(null);
    headers.set('content-type', 'application/json');
  } else if (typeof data === 'string') {
    body = data;
    headers.set('Content-Type', 'text/plain');
  } else if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
    body = data;
    headers.set('Content-Type', 'application/octet-stream');
  } else if (data instanceof Blob) {
    body = data;
    headers.set('Content-Type', data.type || 'application/octet-stream');
  } else if (data instanceof FormData) body = data;
  else if (data instanceof URLSearchParams) {
    body = data;
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
  } else if (data instanceof ReadableStream) {
    body = data;
    headers.set('Content-Type', 'application/octet-stream');
  } else if (isJSONSerializable(data)) {
    body = safeStringify(data);
    headers.set('Content-Type', 'application/json');
  }
  return new Response(body, {
    ...init,
    headers,
  });
}
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/crypto.mjs
var algorithm = {
  name: 'HMAC',
  hash: 'SHA-256',
};
var getCryptoKey = async (secret) => {
  const secretBuf =
    typeof secret === 'string' ? new TextEncoder().encode(secret) : secret;
  return await getWebcryptoSubtle().importKey(
    'raw',
    secretBuf,
    algorithm,
    false,
    ['sign', 'verify']
  );
};
var verifySignature = async (base64Signature, value, secret) => {
  try {
    const signatureBinStr = atob(base64Signature);
    const signature = new Uint8Array(signatureBinStr.length);
    for (let i = 0, len = signatureBinStr.length; i < len; i++)
      signature[i] = signatureBinStr.charCodeAt(i);
    return await getWebcryptoSubtle().verify(
      algorithm,
      secret,
      signature,
      new TextEncoder().encode(value)
    );
  } catch (e) {
    return false;
  }
};
var makeSignature = async (value, secret) => {
  const key = await getCryptoKey(secret);
  const signature = await getWebcryptoSubtle().sign(
    algorithm.name,
    key,
    new TextEncoder().encode(value)
  );
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
};
var signCookieValue = async (value, secret) => {
  const signature = await makeSignature(value, secret);
  value = `${value}.${signature}`;
  value = encodeURIComponent(value);
  return value;
};
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/cookies.mjs
var getCookieKey = (key, prefix) => {
  let finalKey = key;
  if (prefix)
    if (prefix === 'secure') finalKey = '__Secure-' + key;
    else if (prefix === 'host') finalKey = '__Host-' + key;
    else return;
  return finalKey;
};
/**
 * Parse an HTTP Cookie header string and returning an object of all cookie
 * name-value pairs.
 *
 * Inspired by https://github.com/unjs/cookie-es/blob/main/src/cookie/parse.ts
 *
 * @param str the string representing a `Cookie` header value
 */
function parseCookies$1(str) {
  if (typeof str !== 'string')
    throw new TypeError('argument str must be a string');
  const cookies = /* @__PURE__ */ new Map();
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf('=', index);
    if (eqIdx === -1) break;
    let endIdx = str.indexOf(';', index);
    if (endIdx === -1) endIdx = str.length;
    else if (endIdx < eqIdx) {
      index = str.lastIndexOf(';', eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (!cookies.has(key)) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) val = val.slice(1, -1);
      cookies.set(key, tryDecode(val));
    }
    index = endIdx + 1;
  }
  return cookies;
}
var _serialize = (key, value, opt = {}) => {
  let cookie;
  if (opt?.prefix === 'secure') cookie = `${`__Secure-${key}`}=${value}`;
  else if (opt?.prefix === 'host') cookie = `${`__Host-${key}`}=${value}`;
  else cookie = `${key}=${value}`;
  if (key.startsWith('__Secure-') && !opt.secure) opt.secure = true;
  if (key.startsWith('__Host-')) {
    if (!opt.secure) opt.secure = true;
    if (opt.path !== '/') opt.path = '/';
    if (opt.domain) opt.domain = void 0;
  }
  if (opt && typeof opt.maxAge === 'number' && opt.maxAge >= 0) {
    if (opt.maxAge > 3456e4)
      throw new Error(
        'Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration.'
      );
    cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
  }
  if (opt.domain && opt.prefix !== 'host') cookie += `; Domain=${opt.domain}`;
  if (opt.path) cookie += `; Path=${opt.path}`;
  if (opt.expires) {
    if (opt.expires.getTime() - Date.now() > 3456e7)
      throw new Error(
        'Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future.'
      );
    cookie += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) cookie += '; HttpOnly';
  if (opt.secure) cookie += '; Secure';
  if (opt.sameSite)
    cookie += `; SameSite=${opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1)}`;
  if (opt.partitioned) {
    if (!opt.secure) opt.secure = true;
    cookie += '; Partitioned';
  }
  return cookie;
};
var serializeCookie = (key, value, opt) => {
  value = encodeURIComponent(value);
  return _serialize(key, value, opt);
};
var serializeSignedCookie = async (key, value, secret, opt) => {
  value = await signCookieValue(value, secret);
  return _serialize(key, value, opt);
};
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/validator.mjs
/**
 * Runs validation on body and query
 * @returns error and data object
 */
async function runValidation(options, context = {}) {
  let request = {
    body: context.body,
    query: context.query,
  };
  if (options.body) {
    const result = await options.body['~standard'].validate(context.body);
    if (result.issues)
      return {
        data: null,
        error: fromError(result.issues, 'body'),
      };
    request.body = result.value;
  }
  if (options.query) {
    const result = await options.query['~standard'].validate(context.query);
    if (result.issues)
      return {
        data: null,
        error: fromError(result.issues, 'query'),
      };
    request.query = result.value;
  }
  if (options.requireHeaders && !context.headers)
    return {
      data: null,
      error: {
        message: 'Headers is required',
        issues: [],
      },
    };
  if (options.requireRequest && !context.request)
    return {
      data: null,
      error: {
        message: 'Request is required',
        issues: [],
      },
    };
  return {
    data: request,
    error: null,
  };
}
function fromError(error, validating) {
  return {
    message: error
      .map((e) => {
        return `[${e.path?.length ? `${validating}.` + e.path.map((x) => (typeof x === 'object' ? x.key : x)).join('.') : validating}] ${e.message}`;
      })
      .join('; '),
    issues: error,
  };
}
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/context.mjs
var createInternalContext = async (context, { options, path }) => {
  const headers = new Headers();
  let responseStatus = void 0;
  const { data, error } = await runValidation(options, context);
  if (error) throw new ValidationError(error.message, error.issues);
  const requestHeaders =
    'headers' in context
      ? context.headers instanceof Headers
        ? context.headers
        : new Headers(context.headers)
      : 'request' in context && isRequest(context.request)
        ? context.request.headers
        : null;
  const requestCookies = requestHeaders?.get('cookie');
  const parsedCookies = requestCookies
    ? parseCookies$1(requestCookies)
    : void 0;
  const internalContext = {
    ...context,
    body: data.body,
    query: data.query,
    path: context.path || path || 'virtual:',
    context: 'context' in context && context.context ? context.context : {},
    returned: void 0,
    headers: context?.headers,
    request: context?.request,
    params: 'params' in context ? context.params : void 0,
    method:
      context.method ??
      (Array.isArray(options.method)
        ? options.method[0]
        : options.method === '*'
          ? 'GET'
          : options.method),
    setHeader: (key, value) => {
      headers.set(key, value);
    },
    getHeader: (key) => {
      if (!requestHeaders) return null;
      return requestHeaders.get(key);
    },
    getCookie: (key, prefix) => {
      const finalKey = getCookieKey(key, prefix);
      if (!finalKey) return null;
      return parsedCookies?.get(finalKey) || null;
    },
    getSignedCookie: async (key, secret, prefix) => {
      const finalKey = getCookieKey(key, prefix);
      if (!finalKey) return null;
      const value = parsedCookies?.get(finalKey);
      if (!value) return null;
      const signatureStartPos = value.lastIndexOf('.');
      if (signatureStartPos < 1) return null;
      const signedValue = value.substring(0, signatureStartPos);
      const signature = value.substring(signatureStartPos + 1);
      if (signature.length !== 44 || !signature.endsWith('=')) return null;
      return (await verifySignature(
        signature,
        signedValue,
        await getCryptoKey(secret)
      ))
        ? signedValue
        : false;
    },
    setCookie: (key, value, options) => {
      const cookie = serializeCookie(key, value, options);
      headers.append('set-cookie', cookie);
      return cookie;
    },
    setSignedCookie: async (key, value, secret, options) => {
      const cookie = await serializeSignedCookie(key, value, secret, options);
      headers.append('set-cookie', cookie);
      return cookie;
    },
    redirect: (url) => {
      headers.set('location', url);
      return new APIError$1('FOUND', void 0, headers);
    },
    error: (status, body, headers) => {
      return new APIError$1(status, body, headers);
    },
    setStatus: (status) => {
      responseStatus = status;
    },
    json: (json, routerResponse) => {
      if (!context.asResponse) return json;
      return {
        body: routerResponse?.body || json,
        routerResponse,
        _flag: 'json',
      };
    },
    responseHeaders: headers,
    get responseStatus() {
      return responseStatus;
    },
  };
  for (const middleware of options.use || []) {
    const response = await middleware({
      ...internalContext,
      returnHeaders: true,
      asResponse: false,
    });
    if (response.response)
      Object.assign(internalContext.context, response.response);
    /**
     * Apply headers from the middleware to the endpoint headers
     */
    if (response.headers)
      response.headers.forEach((value, key) => {
        internalContext.responseHeaders.set(key, value);
      });
  }
  return internalContext;
};
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/endpoint.mjs
function createEndpoint(pathOrOptions, handlerOrOptions, handlerOrNever) {
  const path = typeof pathOrOptions === 'string' ? pathOrOptions : void 0;
  const options =
    typeof handlerOrOptions === 'object' ? handlerOrOptions : pathOrOptions;
  const handler =
    typeof handlerOrOptions === 'function' ? handlerOrOptions : handlerOrNever;
  if ((options.method === 'GET' || options.method === 'HEAD') && options.body)
    throw new BetterCallError('Body is not allowed with GET or HEAD methods');
  if (path && /\/{2,}/.test(path))
    throw new BetterCallError('Path cannot contain consecutive slashes');
  const internalHandler = async (...inputCtx) => {
    const context = inputCtx[0] || {};
    const { data: internalContext, error: validationError } = await tryCatch(
      createInternalContext(context, {
        options,
        path,
      })
    );
    if (validationError) {
      if (!(validationError instanceof ValidationError)) throw validationError;
      if (options.onValidationError)
        await options.onValidationError({
          message: validationError.message,
          issues: validationError.issues,
        });
      throw new APIError$1(400, {
        message: validationError.message,
        code: 'VALIDATION_ERROR',
      });
    }
    const response = await handler(internalContext).catch(async (e) => {
      if (isAPIError$1(e)) {
        const onAPIError = options.onAPIError;
        if (onAPIError) await onAPIError(e);
        if (context.asResponse) return e;
      }
      throw e;
    });
    const headers = internalContext.responseHeaders;
    const status = internalContext.responseStatus;
    return context.asResponse
      ? toResponse(response, {
          headers,
          status,
        })
      : context.returnHeaders
        ? context.returnStatus
          ? {
              headers,
              response,
              status,
            }
          : {
              headers,
              response,
            }
        : context.returnStatus
          ? {
              response,
              status,
            }
          : response;
  };
  internalHandler.options = options;
  internalHandler.path = path;
  return internalHandler;
}
createEndpoint.create = (opts) => {
  return (path, options, handler) => {
    return createEndpoint(
      path,
      {
        ...options,
        use: [...(options?.use || []), ...(opts?.use || [])],
      },
      handler
    );
  };
};
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/middleware.mjs
function createMiddleware(optionsOrHandler, handler) {
  const internalHandler = async (inputCtx) => {
    const context = inputCtx;
    const _handler =
      typeof optionsOrHandler === 'function' ? optionsOrHandler : handler;
    const internalContext = await createInternalContext(context, {
      options: typeof optionsOrHandler === 'function' ? {} : optionsOrHandler,
      path: '/',
    });
    if (!_handler) throw new Error('handler must be defined');
    try {
      const response = await _handler(internalContext);
      const headers = internalContext.responseHeaders;
      return context.returnHeaders
        ? {
            headers,
            response,
          }
        : response;
    } catch (e) {
      if (isAPIError$1(e))
        Object.defineProperty(e, kAPIErrorHeaderSymbol, {
          enumerable: false,
          configurable: true,
          get() {
            return internalContext.responseHeaders;
          },
        });
      throw e;
    }
  };
  internalHandler.options =
    typeof optionsOrHandler === 'function' ? {} : optionsOrHandler;
  return internalHandler;
}
createMiddleware.create = (opts) => {
  function fn(optionsOrHandler, handler) {
    if (typeof optionsOrHandler === 'function')
      return createMiddleware({ use: opts?.use }, optionsOrHandler);
    if (!handler) throw new Error('Middleware handler is required');
    return createMiddleware(
      {
        ...optionsOrHandler,
        method: '*',
        use: [...(opts?.use || []), ...(optionsOrHandler.use || [])],
      },
      handler
    );
  }
  return fn;
};
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/openapi.mjs
var paths = {};
function getTypeFromZodType(zodType) {
  switch (zodType.constructor.name) {
    case 'ZodString':
      return 'string';
    case 'ZodNumber':
      return 'number';
    case 'ZodBoolean':
      return 'boolean';
    case 'ZodObject':
      return 'object';
    case 'ZodArray':
      return 'array';
    default:
      return 'string';
  }
}
function getParameters(options) {
  const parameters = [];
  if (options.metadata?.openapi?.parameters) {
    parameters.push(...options.metadata.openapi.parameters);
    return parameters;
  }
  if (options.query instanceof ZodObject)
    Object.entries(options.query.shape).forEach(([key, value]) => {
      if (value instanceof ZodObject)
        parameters.push({
          name: key,
          in: 'query',
          schema: {
            type: getTypeFromZodType(value),
            ...('minLength' in value && value.minLength
              ? { minLength: value.minLength }
              : {}),
            description: value.description,
          },
        });
    });
  return parameters;
}
function getRequestBody(options) {
  if (options.metadata?.openapi?.requestBody)
    return options.metadata.openapi.requestBody;
  if (!options.body) return void 0;
  if (
    options.body instanceof ZodObject ||
    options.body instanceof ZodOptional
  ) {
    const shape = options.body.shape;
    if (!shape) return void 0;
    const properties = {};
    const required = [];
    Object.entries(shape).forEach(([key, value]) => {
      if (value instanceof ZodObject) {
        properties[key] = {
          type: getTypeFromZodType(value),
          description: value.description,
        };
        if (!(value instanceof ZodOptional)) required.push(key);
      }
    });
    return {
      required:
        options.body instanceof ZodOptional
          ? false
          : options.body
            ? true
            : false,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties,
            required,
          },
        },
      },
    };
  }
}
function getResponse(responses) {
  return {
    400: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: { message: { type: 'string' } },
            required: ['message'],
          },
        },
      },
      description:
        'Bad Request. Usually due to missing parameters, or invalid parameters.',
    },
    401: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: { message: { type: 'string' } },
            required: ['message'],
          },
        },
      },
      description: 'Unauthorized. Due to missing or invalid authentication.',
    },
    403: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: { message: { type: 'string' } },
          },
        },
      },
      description:
        'Forbidden. You do not have permission to access this resource or to perform this action.',
    },
    404: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: { message: { type: 'string' } },
          },
        },
      },
      description: 'Not Found. The requested resource was not found.',
    },
    429: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: { message: { type: 'string' } },
          },
        },
      },
      description:
        'Too Many Requests. You have exceeded the rate limit. Try again later.',
    },
    500: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: { message: { type: 'string' } },
          },
        },
      },
      description:
        'Internal Server Error. This is a problem with the server that you cannot fix.',
    },
    ...responses,
  };
}
async function generator(endpoints, config) {
  const components = { schemas: {} };
  Object.entries(endpoints).forEach(([_, value]) => {
    const options = value.options;
    if (!value.path || options.metadata?.SERVER_ONLY) return;
    if (options.method === 'GET')
      paths[value.path] = {
        get: {
          tags: ['Default', ...(options.metadata?.openapi?.tags || [])],
          description: options.metadata?.openapi?.description,
          operationId: options.metadata?.openapi?.operationId,
          security: [{ bearerAuth: [] }],
          parameters: getParameters(options),
          responses: getResponse(options.metadata?.openapi?.responses),
        },
      };
    if (options.method === 'POST') {
      const body = getRequestBody(options);
      paths[value.path] = {
        post: {
          tags: ['Default', ...(options.metadata?.openapi?.tags || [])],
          description: options.metadata?.openapi?.description,
          operationId: options.metadata?.openapi?.operationId,
          security: [{ bearerAuth: [] }],
          parameters: getParameters(options),
          ...(body
            ? { requestBody: body }
            : {
                requestBody: {
                  content: {
                    'application/json': {
                      schema: {
                        type: 'object',
                        properties: {},
                      },
                    },
                  },
                },
              }),
          responses: getResponse(options.metadata?.openapi?.responses),
        },
      };
    }
  });
  return {
    openapi: '3.1.1',
    info: {
      title: 'Better Auth',
      description: 'API Reference for your Better Auth Instance',
      version: '1.1.0',
    },
    components,
    security: [{ apiKeyCookie: [] }],
    servers: [{ url: config?.url }],
    tags: [
      {
        name: 'Default',
        description:
          'Default endpoints that are included with Better Auth by default. These endpoints are not part of any plugin.',
      },
    ],
    paths,
  };
}
var getHTML = (apiReference, config) => `<!doctype html>
<html>
  <head>
    <title>Scalar API Reference</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <script
      id="api-reference"
      type="application/json">
    ${JSON.stringify(apiReference)}
    <\/script>
	 <script>
      var configuration = {
	  	favicon: ${config?.logo ? `data:image/svg+xml;utf8,${encodeURIComponent(config.logo)}` : void 0} ,
	   	theme: ${config?.theme || 'saturn'},
        metaData: {
			title: ${config?.title || 'Open API Reference'},
			description: ${config?.description || 'Better Call Open API'},
		}
      }
      document.getElementById('api-reference').dataset.configuration =
        JSON.stringify(configuration)
    <\/script>
	  <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"><\/script>
  </body>
</html>`;
//#endregion
//#region node_modules/.pnpm/rou3@0.7.12/node_modules/rou3/dist/index.mjs
var NullProtoObj = /* @__PURE__ */ (() => {
  const e = function () {};
  return ((e.prototype = Object.create(null)), Object.freeze(e.prototype), e);
})();
/**
 * Create a new router context.
 */
function createRouter$2() {
  return {
    root: { key: '' },
    static: new NullProtoObj(),
  };
}
function splitPath(path) {
  const [_, ...s] = path.split('/');
  return s[s.length - 1] === '' ? s.slice(0, -1) : s;
}
function getMatchParams(segments, paramsMap) {
  const params = new NullProtoObj();
  for (const [index, name] of paramsMap) {
    const segment =
      index < 0 ? segments.slice(-(index + 1)).join('/') : segments[index];
    if (typeof name === 'string') params[name] = segment;
    else {
      const match = segment.match(name);
      if (match)
        for (const key in match.groups) params[key] = match.groups[key];
    }
  }
  return params;
}
/**
 * Add a route to the router context.
 */
function addRoute(ctx, method = '', path, data) {
  method = method.toUpperCase();
  if (path.charCodeAt(0) !== 47) path = `/${path}`;
  path = path.replace(/\\:/g, '%3A');
  const segments = splitPath(path);
  let node = ctx.root;
  let _unnamedParamIndex = 0;
  const paramsMap = [];
  const paramsRegexp = [];
  for (let i = 0; i < segments.length; i++) {
    let segment = segments[i];
    if (segment.startsWith('**')) {
      if (!node.wildcard) node.wildcard = { key: '**' };
      node = node.wildcard;
      paramsMap.push([
        -(i + 1),
        segment.split(':')[1] || '_',
        segment.length === 2,
      ]);
      break;
    }
    if (segment === '*' || segment.includes(':')) {
      if (!node.param) node.param = { key: '*' };
      node = node.param;
      if (segment === '*')
        paramsMap.push([i, `_${_unnamedParamIndex++}`, true]);
      else if (segment.includes(':', 1)) {
        const regexp = getParamRegexp(segment);
        paramsRegexp[i] = regexp;
        node.hasRegexParam = true;
        paramsMap.push([i, regexp, false]);
      } else paramsMap.push([i, segment.slice(1), false]);
      continue;
    }
    if (segment === '\\*') segment = segments[i] = '*';
    else if (segment === '\\*\\*') segment = segments[i] = '**';
    const child = node.static?.[segment];
    if (child) node = child;
    else {
      const staticNode = { key: segment };
      if (!node.static) node.static = new NullProtoObj();
      node.static[segment] = staticNode;
      node = staticNode;
    }
  }
  const hasParams = paramsMap.length > 0;
  if (!node.methods) node.methods = new NullProtoObj();
  node.methods[method] ??= [];
  node.methods[method].push({
    data: data || null,
    paramsRegexp,
    paramsMap: hasParams ? paramsMap : void 0,
  });
  if (!hasParams) ctx.static['/' + segments.join('/')] = node;
}
function getParamRegexp(segment) {
  const regex = segment
    .replace(/:(\w+)/g, (_, id) => `(?<${id}>[^/]+)`)
    .replace(/\./g, '\\.');
  return /* @__PURE__ */ new RegExp(`^${regex}$`);
}
/**
 * Find a route by path.
 */
function findRoute(ctx, method = '', path, opts) {
  if (path.charCodeAt(path.length - 1) === 47) path = path.slice(0, -1);
  const staticNode = ctx.static[path];
  if (staticNode && staticNode.methods) {
    const staticMatch = staticNode.methods[method] || staticNode.methods[''];
    if (staticMatch !== void 0) return staticMatch[0];
  }
  const segments = splitPath(path);
  const match = _lookupTree(ctx, ctx.root, method, segments, 0)?.[0];
  if (match === void 0) return;
  if (opts?.params === false) return match;
  return {
    data: match.data,
    params: match.paramsMap
      ? getMatchParams(segments, match.paramsMap)
      : void 0,
  };
}
function _lookupTree(ctx, node, method, segments, index) {
  if (index === segments.length) {
    if (node.methods) {
      const match = node.methods[method] || node.methods[''];
      if (match) return match;
    }
    if (node.param && node.param.methods) {
      const match = node.param.methods[method] || node.param.methods[''];
      if (match) {
        const pMap = match[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match;
      }
    }
    if (node.wildcard && node.wildcard.methods) {
      const match = node.wildcard.methods[method] || node.wildcard.methods[''];
      if (match) {
        const pMap = match[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) return match;
      }
    }
    return;
  }
  const segment = segments[index];
  if (node.static) {
    const staticChild = node.static[segment];
    if (staticChild) {
      const match = _lookupTree(ctx, staticChild, method, segments, index + 1);
      if (match) return match;
    }
  }
  if (node.param) {
    const match = _lookupTree(ctx, node.param, method, segments, index + 1);
    if (match) {
      if (node.param.hasRegexParam) {
        const exactMatch =
          match.find((m) => m.paramsRegexp[index]?.test(segment)) ||
          match.find((m) => !m.paramsRegexp[index]);
        return exactMatch ? [exactMatch] : void 0;
      }
      return match;
    }
  }
  if (node.wildcard && node.wildcard.methods)
    return node.wildcard.methods[method] || node.wildcard.methods[''];
}
/**
 * Find all route patterns that match the given path.
 */
function findAllRoutes(ctx, method = '', path, opts) {
  if (path.charCodeAt(path.length - 1) === 47) path = path.slice(0, -1);
  const segments = splitPath(path);
  const matches = _findAll(ctx, ctx.root, method, segments, 0);
  if (opts?.params === false) return matches;
  return matches.map((m) => {
    return {
      data: m.data,
      params: m.paramsMap ? getMatchParams(segments, m.paramsMap) : void 0,
    };
  });
}
function _findAll(ctx, node, method, segments, index, matches = []) {
  const segment = segments[index];
  if (node.wildcard && node.wildcard.methods) {
    const match = node.wildcard.methods[method] || node.wildcard.methods[''];
    if (match) matches.push(...match);
  }
  if (node.param) {
    _findAll(ctx, node.param, method, segments, index + 1, matches);
    if (index === segments.length && node.param.methods) {
      const match = node.param.methods[method] || node.param.methods[''];
      if (match) {
        const pMap = match[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) matches.push(...match);
      }
    }
  }
  const staticChild = node.static?.[segment];
  if (staticChild)
    _findAll(ctx, staticChild, method, segments, index + 1, matches);
  if (index === segments.length && node.methods) {
    const match = node.methods[method] || node.methods[''];
    if (match) matches.push(...match);
  }
  return matches;
}
//#endregion
//#region node_modules/.pnpm/better-call@1.3.5_zod@4.3.6/node_modules/better-call/dist/router.mjs
var createRouter$1 = (endpoints, config) => {
  if (!config?.openapi?.disabled) {
    const openapi = {
      path: '/api/reference',
      ...config?.openapi,
    };
    endpoints['openapi'] = createEndpoint(
      openapi.path,
      { method: 'GET' },
      async (c) => {
        const schema = await generator(endpoints);
        return new Response(getHTML(schema, openapi.scalar), {
          headers: { 'Content-Type': 'text/html' },
        });
      }
    );
  }
  const router = createRouter$2();
  const middlewareRouter = createRouter$2();
  for (const endpoint of Object.values(endpoints)) {
    if (!endpoint.options || !endpoint.path) continue;
    if (endpoint.options?.metadata?.SERVER_ONLY) continue;
    const methods = Array.isArray(endpoint.options?.method)
      ? endpoint.options.method
      : [endpoint.options?.method];
    for (const method of methods)
      addRoute(router, method, endpoint.path, endpoint);
  }
  if (config?.routerMiddleware?.length)
    for (const { path, middleware } of config.routerMiddleware)
      addRoute(middlewareRouter, '*', path, middleware);
  const processRequest = async (request) => {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const path =
      config?.basePath && config.basePath !== '/'
        ? pathname
            .split(config.basePath)
            .reduce((acc, curr, index) => {
              if (index !== 0)
                if (index > 1) acc.push(`${config.basePath}${curr}`);
                else acc.push(curr);
              return acc;
            }, [])
            .join('')
        : url.pathname;
    if (!path?.length)
      return new Response(null, {
        status: 404,
        statusText: 'Not Found',
      });
    if (/\/{2,}/.test(path))
      return new Response(null, {
        status: 404,
        statusText: 'Not Found',
      });
    const route = findRoute(router, request.method, path);
    if (
      path.endsWith('/') !== route?.data?.path?.endsWith('/') &&
      !config?.skipTrailingSlashes
    )
      return new Response(null, {
        status: 404,
        statusText: 'Not Found',
      });
    if (!route?.data)
      return new Response(null, {
        status: 404,
        statusText: 'Not Found',
      });
    const query = {};
    url.searchParams.forEach((value, key) => {
      if (key in query)
        if (Array.isArray(query[key])) query[key].push(value);
        else query[key] = [query[key], value];
      else query[key] = value;
    });
    const handler = route.data;
    try {
      const allowedMediaTypes =
        handler.options.metadata?.allowedMediaTypes ||
        config?.allowedMediaTypes;
      const context = {
        path,
        method: request.method,
        headers: request.headers,
        params: route.params ? JSON.parse(JSON.stringify(route.params)) : {},
        request,
        body: handler.options.disableBody
          ? void 0
          : await getBody(
              handler.options.cloneRequest ? request.clone() : request,
              allowedMediaTypes
            ),
        query,
        _flag: 'router',
        asResponse: true,
        context: config?.routerContext,
      };
      const middlewareRoutes = findAllRoutes(middlewareRouter, '*', path);
      if (middlewareRoutes?.length)
        for (const { data: middleware, params } of middlewareRoutes) {
          const res = await middleware({
            ...context,
            params,
            asResponse: false,
          });
          if (res instanceof Response) return res;
        }
      return await handler(context);
    } catch (error) {
      if (config?.onError)
        try {
          const errorResponse = await config.onError(error, request);
          if (errorResponse instanceof Response)
            return toResponse(errorResponse);
        } catch (error) {
          if (isAPIError$1(error)) return toResponse(error);
          throw error;
        }
      if (config?.throwError) throw error;
      if (isAPIError$1(error)) return toResponse(error);
      console.error(`# SERVER_ERROR: `, error);
      return new Response(null, {
        status: 500,
        statusText: 'Internal Server Error',
      });
    }
  };
  return {
    handler: async (request) => {
      const onReq = await config?.onRequest?.(request);
      if (onReq instanceof Response) return onReq;
      const req = isRequest(onReq) ? onReq : request;
      const res = await processRequest(req);
      const onRes = await config?.onResponse?.(res, req);
      if (onRes instanceof Response) return onRes;
      return res;
    },
    endpoints,
  };
};
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/utils/is-api-error.mjs
function isAPIError(error) {
  return (
    error instanceof APIError$1 ||
    error instanceof APIError ||
    error?.name === 'APIError'
  );
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/api/index.mjs
var optionsMiddleware = createMiddleware(async () => {
  /**
   * This will be passed on the instance of
   * the context. Used to infer the type
   * here.
   */
  return {};
});
var createAuthMiddleware = createMiddleware.create({
  use: [
    optionsMiddleware,
    createMiddleware(async () => {
      return {};
    }),
  ],
});
var use = [optionsMiddleware];
function createAuthEndpoint(pathOrOptions, handlerOrOptions, handlerOrNever) {
  const path = typeof pathOrOptions === 'string' ? pathOrOptions : void 0;
  const options =
    typeof handlerOrOptions === 'object' ? handlerOrOptions : pathOrOptions;
  const handler =
    typeof handlerOrOptions === 'function' ? handlerOrOptions : handlerOrNever;
  if (path)
    return createEndpoint(
      path,
      {
        ...options,
        use: [...(options?.use || []), ...use],
      },
      async (ctx) => runWithEndpointContext(ctx, () => handler(ctx))
    );
  return createEndpoint(
    {
      ...options,
      use: [...(options?.use || []), ...use],
    },
    async (ctx) => runWithEndpointContext(ctx, () => handler(ctx))
  );
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/auth/trusted-origins.mjs
/**
 * Matches the given url against an origin or origin pattern
 * See "options.trustedOrigins" for details of supported patterns
 *
 * @param url The url to test
 * @param pattern The origin pattern
 * @param [settings] Specify supported pattern matching settings
 * @returns {boolean} true if the URL matches the origin pattern, false otherwise.
 */
var matchesOriginPattern = (url, pattern, settings) => {
  if (url.startsWith('/')) {
    if (settings?.allowRelativePaths)
      return (
        url.startsWith('/') &&
        /^\/(?!\/|\\|%2f|%5c)[\w\-.\+/@]*(?:\?[\w\-.\+/=&%@]*)?$/.test(url)
      );
    return false;
  }
  if (pattern.includes('*') || pattern.includes('?')) {
    if (pattern.includes('://'))
      return wildcardMatch(pattern)(getOrigin(url) || url);
    const host = getHost(url);
    if (!host) return false;
    return wildcardMatch(pattern)(host);
  }
  const protocol = getProtocol(url);
  return protocol === 'http:' || protocol === 'https:' || !protocol
    ? pattern === getOrigin(url)
    : url.startsWith(pattern);
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/utils/url.mjs
/**
 * Normalizes a request pathname by removing the basePath prefix and trailing slashes.
 * This is useful for matching paths against configured path lists.
 *
 * @param requestUrl - The full request URL
 * @param basePath - The base path of the auth API (e.g., "/api/auth")
 * @returns The normalized path without basePath prefix or trailing slashes,
 *          or "/" if URL parsing fails
 *
 * @example
 * normalizePathname("http://localhost:3000/api/auth/sso/saml2/callback/provider1", "/api/auth")
 * // Returns: "/sso/saml2/callback/provider1"
 *
 * normalizePathname("http://localhost:3000/sso/saml2/callback/provider1/", "/")
 * // Returns: "/sso/saml2/callback/provider1"
 */
function normalizePathname(requestUrl, basePath) {
  let pathname;
  try {
    pathname = new URL(requestUrl).pathname.replace(/\/+$/, '') || '/';
  } catch {
    return '/';
  }
  if (basePath === '/' || basePath === '') return pathname;
  if (pathname === basePath) return '/';
  if (pathname.startsWith(basePath + '/'))
    return pathname.slice(basePath.length).replace(/\/+$/, '') || '/';
  return pathname;
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/utils/deprecate.mjs
/**
 * Wraps a function to log a deprecation warning at once.
 */
function deprecate(fn, message, logger) {
  let warned = false;
  return function (...args) {
    if (!warned) {
      (logger?.warn ?? console.warn)(`[Deprecation] ${message}`);
      warned = true;
    }
    return fn.apply(this, args);
  };
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/middlewares/origin-check.mjs
/**
 * Checks if CSRF should be skipped for backward compatibility.
 * Previously, disableOriginCheck also disabled CSRF checks.
 * This maintains that behavior when disableCSRFCheck isn't explicitly set.
 * Only triggers for skipOriginCheck === true, not for path arrays.
 */
function shouldSkipCSRFForBackwardCompat(ctx) {
  return (
    ctx.context.skipOriginCheck === true &&
    ctx.context.options.advanced?.disableCSRFCheck === void 0
  );
}
/**
 * Checks if the origin check should be skipped for the current request.
 * Handles both boolean (skip all) and array (skip specific paths) configurations.
 */
function shouldSkipOriginCheck(ctx) {
  const skipOriginCheck = ctx.context.skipOriginCheck;
  if (skipOriginCheck === true) return true;
  if (Array.isArray(skipOriginCheck) && ctx.request)
    try {
      const basePath = new URL(ctx.context.baseURL).pathname;
      const currentPath = normalizePathname(ctx.request.url, basePath);
      return skipOriginCheck.some((skipPath) =>
        currentPath.startsWith(skipPath)
      );
    } catch {}
  return false;
}
/**
 * Logs deprecation warning for users relying on coupled behavior.
 * Only logs if user explicitly set disableOriginCheck (not test environment default).
 */
var logBackwardCompatWarning = deprecate(
  function logBackwardCompatWarning() {},
  'disableOriginCheck: true currently also disables CSRF checks. In a future version, disableOriginCheck will ONLY disable URL validation. To keep CSRF disabled, add disableCSRFCheck: true to your config.'
);
/**
 * A middleware to validate callbackURL and origin against trustedOrigins.
 * Also handles CSRF protection using Fetch Metadata for first-login scenarios.
 */
var originCheckMiddleware = createAuthMiddleware(async (ctx) => {
  if (
    ctx.request?.method === 'GET' ||
    ctx.request?.method === 'OPTIONS' ||
    ctx.request?.method === 'HEAD' ||
    !ctx.request
  )
    return;
  await validateOrigin(ctx);
  if (shouldSkipOriginCheck(ctx)) return;
  const { body, query } = ctx;
  const callbackURL = body?.callbackURL || query?.callbackURL;
  const redirectURL = body?.redirectTo;
  const errorCallbackURL = body?.errorCallbackURL;
  const newUserCallbackURL = body?.newUserCallbackURL;
  const validateURL = (url, label) => {
    if (!url) return;
    if (
      !ctx.context.isTrustedOrigin(url, {
        allowRelativePaths: label !== 'origin',
      })
    ) {
      ctx.context.logger.error(`Invalid ${label}: ${url}`);
      ctx.context.logger.info(
        `If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`,
        `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`
      );
      if (label === 'origin')
        throw APIError.from('FORBIDDEN', BASE_ERROR_CODES.INVALID_ORIGIN);
      if (label === 'callbackURL')
        throw APIError.from('FORBIDDEN', BASE_ERROR_CODES.INVALID_CALLBACK_URL);
      if (label === 'redirectURL')
        throw APIError.from('FORBIDDEN', BASE_ERROR_CODES.INVALID_REDIRECT_URL);
      if (label === 'errorCallbackURL')
        throw APIError.from(
          'FORBIDDEN',
          BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL
        );
      if (label === 'newUserCallbackURL')
        throw APIError.from(
          'FORBIDDEN',
          BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL
        );
      throw APIError.fromStatus('FORBIDDEN', { message: `Invalid ${label}` });
    }
  };
  callbackURL && validateURL(callbackURL, 'callbackURL');
  redirectURL && validateURL(redirectURL, 'redirectURL');
  errorCallbackURL && validateURL(errorCallbackURL, 'errorCallbackURL');
  newUserCallbackURL && validateURL(newUserCallbackURL, 'newUserCallbackURL');
});
var originCheck = (getValue) =>
  createAuthMiddleware(async (ctx) => {
    if (!ctx.request) return;
    if (shouldSkipOriginCheck(ctx)) return;
    const callbackURL = getValue(ctx);
    const validateURL = (url, label) => {
      if (!url) return;
      if (
        !ctx.context.isTrustedOrigin(url, {
          allowRelativePaths: label !== 'origin',
        })
      ) {
        ctx.context.logger.error(`Invalid ${label}: ${url}`);
        ctx.context.logger.info(
          `If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`,
          `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`
        );
        if (label === 'origin')
          throw APIError.from('FORBIDDEN', BASE_ERROR_CODES.INVALID_ORIGIN);
        if (label === 'callbackURL')
          throw APIError.from(
            'FORBIDDEN',
            BASE_ERROR_CODES.INVALID_CALLBACK_URL
          );
        if (label === 'redirectURL')
          throw APIError.from(
            'FORBIDDEN',
            BASE_ERROR_CODES.INVALID_REDIRECT_URL
          );
        if (label === 'errorCallbackURL')
          throw APIError.from(
            'FORBIDDEN',
            BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL
          );
        if (label === 'newUserCallbackURL')
          throw APIError.from(
            'FORBIDDEN',
            BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL
          );
        throw APIError.fromStatus('FORBIDDEN', { message: `Invalid ${label}` });
      }
    };
    const callbacks = Array.isArray(callbackURL) ? callbackURL : [callbackURL];
    for (const url of callbacks) validateURL(url, 'callbackURL');
  });
/**
 * Validates origin header against trusted origins.
 * @param ctx - The endpoint context
 * @param forceValidate - If true, always validate origin regardless of cookies/skip flags
 */
async function validateOrigin(ctx, forceValidate = false) {
  const headers = ctx.request?.headers;
  if (!headers || !ctx.request) return;
  const originHeader = headers.get('origin') || headers.get('referer') || '';
  const useCookies = headers.has('cookie');
  if (ctx.context.skipCSRFCheck) return;
  if (shouldSkipCSRFForBackwardCompat(ctx)) {
    ctx.context.options.advanced?.disableOriginCheck === true &&
      logBackwardCompatWarning();
    return;
  }
  if (shouldSkipOriginCheck(ctx)) return;
  if (!(forceValidate || useCookies)) return;
  if (!originHeader || originHeader === 'null')
    throw APIError.from('FORBIDDEN', BASE_ERROR_CODES.MISSING_OR_NULL_ORIGIN);
  const trustedOrigins = Array.isArray(ctx.context.options.trustedOrigins)
    ? ctx.context.trustedOrigins
    : [
        ...ctx.context.trustedOrigins,
        ...((await ctx.context.options.trustedOrigins?.(ctx.request))?.filter(
          (v) => Boolean(v)
        ) || []),
      ];
  if (
    !trustedOrigins.some((origin) => matchesOriginPattern(originHeader, origin))
  ) {
    ctx.context.logger.error(`Invalid origin: ${originHeader}`);
    ctx.context.logger.info(
      `If it's a valid URL, please add ${originHeader} to trustedOrigins in your auth config\n`,
      `Current list of trustedOrigins: ${trustedOrigins}`
    );
    throw APIError.from('FORBIDDEN', BASE_ERROR_CODES.INVALID_ORIGIN);
  }
}
/**
 * Middleware for CSRF protection using Fetch Metadata headers.
 * This prevents cross-site navigation login attacks while supporting progressive enhancement.
 */
var formCsrfMiddleware = createAuthMiddleware(async (ctx) => {
  if (!ctx.request) return;
  await validateFormCsrf(ctx);
});
/**
 * Validates CSRF protection for first-login scenarios using Fetch Metadata headers.
 * This prevents cross-site form submission attacks while supporting progressive enhancement.
 */
async function validateFormCsrf(ctx) {
  const req = ctx.request;
  if (!req) return;
  if (ctx.context.skipCSRFCheck) return;
  if (shouldSkipCSRFForBackwardCompat(ctx)) return;
  const headers = req.headers;
  if (headers.has('cookie')) return await validateOrigin(ctx);
  const site = headers.get('Sec-Fetch-Site');
  const mode = headers.get('Sec-Fetch-Mode');
  const dest = headers.get('Sec-Fetch-Dest');
  if (
    Boolean(
      (site && site.trim()) || (mode && mode.trim()) || (dest && dest.trim())
    )
  ) {
    if (site === 'cross-site' && mode === 'navigate') {
      ctx.context.logger.error(
        'Blocked cross-site navigation login attempt (CSRF protection)',
        {
          secFetchSite: site,
          secFetchMode: mode,
          secFetchDest: dest,
        }
      );
      throw APIError.from(
        'FORBIDDEN',
        BASE_ERROR_CODES.CROSS_SITE_NAVIGATION_LOGIN_BLOCKED
      );
    }
    return await validateOrigin(ctx, true);
  }
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/utils/ip.mjs
/**
 * Checks if an IP is valid IPv4 or IPv6
 */
function isValidIP(ip) {
  return z$1.ipv4().safeParse(ip).success || z$1.ipv6().safeParse(ip).success;
}
/**
 * Checks if an IP is IPv6
 */
function isIPv6(ip) {
  return z$1.ipv6().safeParse(ip).success;
}
/**
 * Converts IPv4-mapped IPv6 address to IPv4
 * e.g., "::ffff:192.0.2.1" -> "192.0.2.1"
 */
function extractIPv4FromMapped(ipv6) {
  const lower = ipv6.toLowerCase();
  if (lower.startsWith('::ffff:')) {
    const ipv4Part = lower.substring(7);
    if (z$1.ipv4().safeParse(ipv4Part).success) return ipv4Part;
  }
  const parts = ipv6.split(':');
  if (parts.length === 7 && parts[5]?.toLowerCase() === 'ffff') {
    const ipv4Part = parts[6];
    if (ipv4Part && z$1.ipv4().safeParse(ipv4Part).success) return ipv4Part;
  }
  if (lower.includes('::ffff:') || lower.includes(':ffff:')) {
    const groups = expandIPv6(ipv6);
    if (
      groups.length === 8 &&
      groups[0] === '0000' &&
      groups[1] === '0000' &&
      groups[2] === '0000' &&
      groups[3] === '0000' &&
      groups[4] === '0000' &&
      groups[5] === 'ffff' &&
      groups[6] &&
      groups[7]
    )
      return `${Number.parseInt(groups[6].substring(0, 2), 16)}.${Number.parseInt(groups[6].substring(2, 4), 16)}.${Number.parseInt(groups[7].substring(0, 2), 16)}.${Number.parseInt(groups[7].substring(2, 4), 16)}`;
  }
  return null;
}
/**
 * Expands a compressed IPv6 address to full form
 * e.g., "2001:db8::1" -> ["2001", "0db8", "0000", "0000", "0000", "0000", "0000", "0001"]
 */
function expandIPv6(ipv6) {
  if (ipv6.includes('::')) {
    const sides = ipv6.split('::');
    const left = sides[0] ? sides[0].split(':') : [];
    const right = sides[1] ? sides[1].split(':') : [];
    const missingGroups = 8 - left.length - right.length;
    const zeros = Array(missingGroups).fill('0000');
    const paddedLeft = left.map((g) => g.padStart(4, '0'));
    const paddedRight = right.map((g) => g.padStart(4, '0'));
    return [...paddedLeft, ...zeros, ...paddedRight];
  }
  return ipv6.split(':').map((g) => g.padStart(4, '0'));
}
/**
 * Normalizes an IPv6 address to canonical form
 * e.g., "2001:DB8::1" -> "2001:0db8:0000:0000:0000:0000:0000:0001"
 */
function normalizeIPv6(ipv6, subnetPrefix) {
  const groups = expandIPv6(ipv6);
  if (subnetPrefix && subnetPrefix < 128) {
    let bitsRemaining = subnetPrefix;
    return groups
      .map((group) => {
        if (bitsRemaining <= 0) return '0000';
        if (bitsRemaining >= 16) {
          bitsRemaining -= 16;
          return group;
        }
        const masked =
          Number.parseInt(group, 16) &
          ((65535 << (16 - bitsRemaining)) & 65535);
        bitsRemaining = 0;
        return masked.toString(16).padStart(4, '0');
      })
      .join(':')
      .toLowerCase();
  }
  return groups.join(':').toLowerCase();
}
/**
 * Normalizes an IP address (IPv4 or IPv6) for consistent rate limiting.
 *
 * @param ip - The IP address to normalize
 * @param options - Normalization options
 * @returns Normalized IP address
 *
 * @example
 * normalizeIP("2001:DB8::1")
 * // -> "2001:0db8:0000:0000:0000:0000:0000:0000"
 *
 * @example
 * normalizeIP("::ffff:192.0.2.1")
 * // -> "192.0.2.1" (converted to IPv4)
 *
 * @example
 * normalizeIP("2001:db8::1", { ipv6Subnet: 64 })
 * // -> "2001:0db8:0000:0000:0000:0000:0000:0000" (subnet /64)
 */
function normalizeIP(ip, options = {}) {
  if (z$1.ipv4().safeParse(ip).success) return ip.toLowerCase();
  if (!isIPv6(ip)) return ip.toLowerCase();
  const ipv4 = extractIPv4FromMapped(ip);
  if (ipv4) return ipv4.toLowerCase();
  return normalizeIPv6(ip, options.ipv6Subnet || 64);
}
/**
 * Creates a rate limit key from IP and path
 * Uses a separator to prevent collision attacks
 *
 * @param ip - The IP address (should be normalized)
 * @param path - The request path
 * @returns Rate limit key
 */
function createRateLimitKey(ip, path) {
  return `${ip}|${path}`;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/utils/get-request-ip.mjs
var LOCALHOST_IP = '127.0.0.1';
function getIp(req, options) {
  if (options.advanced?.ipAddress?.disableIpTracking) return null;
  const headers = 'headers' in req ? req.headers : req;
  const ipHeaders = options.advanced?.ipAddress?.ipAddressHeaders || [
    'x-forwarded-for',
  ];
  for (const key of ipHeaders) {
    const value = 'get' in headers ? headers.get(key) : headers[key];
    if (typeof value === 'string') {
      const ip = value.split(',')[0].trim();
      if (isValidIP(ip))
        return normalizeIP(ip, {
          ipv6Subnet: options.advanced?.ipAddress?.ipv6Subnet,
        });
    }
  }
  if (isTest() || isDevelopment()) return LOCALHOST_IP;
  return null;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/rate-limiter/index.mjs
var memory = /* @__PURE__ */ new Map();
function shouldRateLimit(max, window, rateLimitData) {
  const now = Date.now();
  const windowInMs = window * 1e3;
  return (
    now - rateLimitData.lastRequest < windowInMs && rateLimitData.count >= max
  );
}
function rateLimitResponse(retryAfter) {
  return new Response(
    JSON.stringify({ message: 'Too many requests. Please try again later.' }),
    {
      status: 429,
      statusText: 'Too Many Requests',
      headers: { 'X-Retry-After': retryAfter.toString() },
    }
  );
}
function getRetryAfter(lastRequest, window) {
  const now = Date.now();
  const windowInMs = window * 1e3;
  return Math.ceil((lastRequest + windowInMs - now) / 1e3);
}
function createDatabaseStorageWrapper(ctx) {
  const model = 'rateLimit';
  const db = ctx.adapter;
  return {
    get: async (key) => {
      const data = (
        await db.findMany({
          model,
          where: [
            {
              field: 'key',
              value: key,
            },
          ],
        })
      )[0];
      if (typeof data?.lastRequest === 'bigint')
        data.lastRequest = Number(data.lastRequest);
      return data;
    },
    set: async (key, value, _update) => {
      try {
        if (_update)
          await db.updateMany({
            model,
            where: [
              {
                field: 'key',
                value: key,
              },
            ],
            update: {
              count: value.count,
              lastRequest: value.lastRequest,
            },
          });
        else
          await db.create({
            model,
            data: {
              key,
              count: value.count,
              lastRequest: value.lastRequest,
            },
          });
      } catch (e) {
        ctx.logger.error('Error setting rate limit', e);
      }
    },
  };
}
function getRateLimitStorage(ctx, rateLimitSettings) {
  if (ctx.options.rateLimit?.customStorage)
    return ctx.options.rateLimit.customStorage;
  const storage = ctx.rateLimit.storage;
  if (storage === 'secondary-storage')
    return {
      get: async (key) => {
        const data = await ctx.options.secondaryStorage?.get(key);
        return data ? safeJSONParse(data) : null;
      },
      set: async (key, value, _update) => {
        const ttl =
          rateLimitSettings?.window ?? ctx.options.rateLimit?.window ?? 10;
        await ctx.options.secondaryStorage?.set?.(
          key,
          JSON.stringify(value),
          ttl
        );
      },
    };
  else if (storage === 'memory')
    return {
      async get(key) {
        const entry = memory.get(key);
        if (!entry) return null;
        if (Date.now() >= entry.expiresAt) {
          memory.delete(key);
          return null;
        }
        return entry.data;
      },
      async set(key, value, _update) {
        const ttl =
          rateLimitSettings?.window ?? ctx.options.rateLimit?.window ?? 10;
        const expiresAt = Date.now() + ttl * 1e3;
        memory.set(key, {
          data: value,
          expiresAt,
        });
      },
    };
  return createDatabaseStorageWrapper(ctx);
}
var ipWarningLogged = false;
async function resolveRateLimitConfig(req, ctx) {
  const basePath = new URL(ctx.baseURL).pathname;
  const path = normalizePathname(req.url, basePath);
  let currentWindow = ctx.rateLimit.window;
  let currentMax = ctx.rateLimit.max;
  const ip = getIp(req, ctx.options);
  if (!ip) {
    if (!ipWarningLogged) {
      ctx.logger.warn(
        'Rate limiting skipped: could not determine client IP address. Ensure your runtime forwards a trusted client IP header and configure `advanced.ipAddress.ipAddressHeaders` if needed.'
      );
      ipWarningLogged = true;
    }
    return null;
  }
  const key = createRateLimitKey(ip, path);
  const specialRule = getDefaultSpecialRules().find((rule) =>
    rule.pathMatcher(path)
  );
  if (specialRule) {
    currentWindow = specialRule.window;
    currentMax = specialRule.max;
  }
  for (const plugin of ctx.options.plugins || [])
    if (plugin.rateLimit) {
      const matchedRule = plugin.rateLimit.find((rule) =>
        rule.pathMatcher(path)
      );
      if (matchedRule) {
        currentWindow = matchedRule.window;
        currentMax = matchedRule.max;
        break;
      }
    }
  if (ctx.rateLimit.customRules) {
    const _path = Object.keys(ctx.rateLimit.customRules).find((p) => {
      if (p.includes('*')) return wildcardMatch(p)(path);
      return p === path;
    });
    if (_path) {
      const customRule = ctx.rateLimit.customRules[_path];
      const resolved =
        typeof customRule === 'function'
          ? await customRule(req, {
              window: currentWindow,
              max: currentMax,
            })
          : customRule;
      if (resolved) {
        currentWindow = resolved.window;
        currentMax = resolved.max;
      }
      if (resolved === false) return null;
    }
  }
  return {
    key,
    currentWindow,
    currentMax,
  };
}
async function onRequestRateLimit(req, ctx) {
  if (!ctx.rateLimit.enabled) return;
  const config = await resolveRateLimitConfig(req, ctx);
  if (!config) return;
  const { key, currentWindow, currentMax } = config;
  const data = await getRateLimitStorage(ctx, { window: currentWindow }).get(
    key
  );
  if (data && shouldRateLimit(currentMax, currentWindow, data))
    return rateLimitResponse(getRetryAfter(data.lastRequest, currentWindow));
}
async function onResponseRateLimit(req, ctx) {
  if (!ctx.rateLimit.enabled) return;
  const config = await resolveRateLimitConfig(req, ctx);
  if (!config) return;
  const { key, currentWindow } = config;
  const storage = getRateLimitStorage(ctx, { window: currentWindow });
  const data = await storage.get(key);
  const now = Date.now();
  if (!data)
    await storage.set(key, {
      key,
      count: 1,
      lastRequest: now,
    });
  else if (now - data.lastRequest > currentWindow * 1e3)
    await storage.set(
      key,
      {
        ...data,
        count: 1,
        lastRequest: now,
      },
      true
    );
  else
    await storage.set(
      key,
      {
        ...data,
        count: data.count + 1,
        lastRequest: now,
      },
      true
    );
}
function getDefaultSpecialRules() {
  return [
    {
      pathMatcher(path) {
        return (
          path.startsWith('/sign-in') ||
          path.startsWith('/sign-up') ||
          path.startsWith('/change-password') ||
          path.startsWith('/change-email')
        );
      },
      window: 10,
      max: 3,
    },
    {
      pathMatcher(path) {
        return (
          path === '/request-password-reset' ||
          path === '/send-verification-email' ||
          path.startsWith('/forget-password') ||
          path === '/email-otp/send-verification-otp' ||
          path === '/email-otp/request-password-reset'
        );
      },
      window: 60,
      max: 3,
    },
  ];
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/state/should-session-refresh.mjs
/**
 * State for skipping session refresh
 *
 * In some cases, such as when using server-side rendering (SSR) or when dealing with
 * certain types of requests, it may be necessary to skip session refresh to prevent
 * potential inconsistencies between the session data in the database and the session
 * data stored in cookies.
 */
var { get: getShouldSkipSessionRefresh, set: setShouldSkipSessionRefresh } =
  defineRequestState(() => false);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/session.mjs
var getSession = () =>
  createAuthEndpoint(
    '/get-session',
    {
      method: ['GET', 'POST'],
      operationId: 'getSession',
      query: getSessionQuerySchema,
      requireHeaders: true,
      metadata: {
        openapi: {
          operationId: 'getSession',
          description: 'Get the current session',
          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    nullable: true,
                    properties: {
                      session: { $ref: '#/components/schemas/Session' },
                      user: { $ref: '#/components/schemas/User' },
                    },
                    required: ['session', 'user'],
                  },
                },
              },
            },
          },
        },
      },
    },
    async (ctx) => {
      const deferSessionRefresh =
        ctx.context.options.session?.deferSessionRefresh;
      const isPostRequest = ctx.method === 'POST';
      if (isPostRequest && !deferSessionRefresh)
        throw APIError.from(
          'METHOD_NOT_ALLOWED',
          BASE_ERROR_CODES.METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED
        );
      try {
        const sessionCookieToken = await ctx.getSignedCookie(
          ctx.context.authCookies.sessionToken.name,
          ctx.context.secret
        );
        if (!sessionCookieToken) return null;
        const sessionDataCookie = getChunkedCookie(
          ctx,
          ctx.context.authCookies.sessionData.name
        );
        let sessionDataPayload = null;
        if (sessionDataCookie) {
          const strategy =
            ctx.context.options.session?.cookieCache?.strategy || 'compact';
          if (strategy === 'jwe') {
            const payload = await symmetricDecodeJWT(
              sessionDataCookie,
              ctx.context.secretConfig,
              'better-auth-session'
            );
            if (payload && payload.session && payload.user)
              sessionDataPayload = {
                session: {
                  session: payload.session,
                  user: payload.user,
                  updatedAt: payload.updatedAt,
                  version: payload.version,
                },
                expiresAt: payload.exp ? payload.exp * 1e3 : Date.now(),
              };
            else {
              expireCookie(ctx, ctx.context.authCookies.sessionData);
              return ctx.json(null);
            }
          } else if (strategy === 'jwt') {
            const payload = await verifyJWT(
              sessionDataCookie,
              ctx.context.secret
            );
            if (payload && payload.session && payload.user)
              sessionDataPayload = {
                session: {
                  session: payload.session,
                  user: payload.user,
                  updatedAt: payload.updatedAt,
                  version: payload.version,
                },
                expiresAt: payload.exp ? payload.exp * 1e3 : Date.now(),
              };
            else {
              expireCookie(ctx, ctx.context.authCookies.sessionData);
              return ctx.json(null);
            }
          } else {
            const parsed = safeJSONParse(
              binary.decode(base64Url.decode(sessionDataCookie))
            );
            if (parsed)
              if (
                await createHMAC('SHA-256', 'base64urlnopad').verify(
                  ctx.context.secret,
                  JSON.stringify({
                    ...parsed.session,
                    expiresAt: parsed.expiresAt,
                  }),
                  parsed.signature
                )
              )
                sessionDataPayload = parsed;
              else {
                expireCookie(ctx, ctx.context.authCookies.sessionData);
                return ctx.json(null);
              }
          }
        }
        const dontRememberMe = await ctx.getSignedCookie(
          ctx.context.authCookies.dontRememberToken.name,
          ctx.context.secret
        );
        /**
         * If session data is present in the cookie, check if it should be used or refreshed
         */
        if (
          sessionDataPayload?.session &&
          ctx.context.options.session?.cookieCache?.enabled &&
          !ctx.query?.disableCookieCache
        ) {
          const session = sessionDataPayload.session;
          const versionConfig =
            ctx.context.options.session?.cookieCache?.version;
          let expectedVersion = '1';
          if (versionConfig) {
            if (typeof versionConfig === 'string')
              expectedVersion = versionConfig;
            else if (typeof versionConfig === 'function') {
              const result = versionConfig(session.session, session.user);
              expectedVersion =
                result instanceof Promise ? await result : result;
            }
          }
          if ((session.version || '1') !== expectedVersion)
            expireCookie(ctx, ctx.context.authCookies.sessionData);
          else {
            const cachedSessionExpiresAt = new Date(session.session.expiresAt);
            if (
              sessionDataPayload.expiresAt < Date.now() ||
              cachedSessionExpiresAt < /* @__PURE__ */ new Date()
            )
              expireCookie(ctx, ctx.context.authCookies.sessionData);
            else {
              const cookieRefreshCache =
                ctx.context.sessionConfig.cookieRefreshCache;
              if (cookieRefreshCache === false) {
                ctx.context.session = session;
                const parsedSession = parseSessionOutput(ctx.context.options, {
                  ...session.session,
                  expiresAt: new Date(session.session.expiresAt),
                  createdAt: new Date(session.session.createdAt),
                  updatedAt: new Date(session.session.updatedAt),
                });
                const parsedUser = parseUserOutput(ctx.context.options, {
                  ...session.user,
                  createdAt: new Date(session.user.createdAt),
                  updatedAt: new Date(session.user.updatedAt),
                });
                return ctx.json({
                  session: parsedSession,
                  user: parsedUser,
                });
              }
              const timeUntilExpiry = sessionDataPayload.expiresAt - Date.now();
              const updateAge = cookieRefreshCache.updateAge * 1e3;
              const shouldSkipSessionRefresh =
                await getShouldSkipSessionRefresh();
              if (timeUntilExpiry < updateAge && !shouldSkipSessionRefresh) {
                const newExpiresAt = getDate(
                  ctx.context.options.session?.cookieCache?.maxAge || 300,
                  'sec'
                );
                const refreshedSession = {
                  session: {
                    ...session.session,
                    expiresAt: newExpiresAt,
                  },
                  user: session.user,
                  updatedAt: Date.now(),
                };
                await setCookieCache(ctx, refreshedSession, false);
                const sessionTokenOptions =
                  ctx.context.authCookies.sessionToken.attributes;
                const sessionTokenMaxAge = dontRememberMe
                  ? void 0
                  : ctx.context.sessionConfig.expiresIn;
                await ctx.setSignedCookie(
                  ctx.context.authCookies.sessionToken.name,
                  session.session.token,
                  ctx.context.secret,
                  {
                    ...sessionTokenOptions,
                    maxAge: sessionTokenMaxAge,
                  }
                );
                const parsedRefreshedSession = parseSessionOutput(
                  ctx.context.options,
                  {
                    ...refreshedSession.session,
                    expiresAt: new Date(refreshedSession.session.expiresAt),
                    createdAt: new Date(refreshedSession.session.createdAt),
                    updatedAt: new Date(refreshedSession.session.updatedAt),
                  }
                );
                const parsedRefreshedUser = parseUserOutput(
                  ctx.context.options,
                  {
                    ...refreshedSession.user,
                    createdAt: new Date(refreshedSession.user.createdAt),
                    updatedAt: new Date(refreshedSession.user.updatedAt),
                  }
                );
                ctx.context.session = {
                  session: parsedRefreshedSession,
                  user: parsedRefreshedUser,
                };
                return ctx.json({
                  session: parsedRefreshedSession,
                  user: parsedRefreshedUser,
                });
              }
              const parsedSession = parseSessionOutput(ctx.context.options, {
                ...session.session,
                expiresAt: new Date(session.session.expiresAt),
                createdAt: new Date(session.session.createdAt),
                updatedAt: new Date(session.session.updatedAt),
              });
              const parsedUser = parseUserOutput(ctx.context.options, {
                ...session.user,
                createdAt: new Date(session.user.createdAt),
                updatedAt: new Date(session.user.updatedAt),
              });
              ctx.context.session = {
                session: parsedSession,
                user: parsedUser,
              };
              return ctx.json({
                session: parsedSession,
                user: parsedUser,
              });
            }
          }
        }
        const session =
          await ctx.context.internalAdapter.findSession(sessionCookieToken);
        ctx.context.session = session;
        if (
          !session ||
          session.session.expiresAt < /* @__PURE__ */ new Date()
        ) {
          deleteSessionCookie(ctx);
          if (session) {
            /**
             * if session expired clean up the session
             * Only delete on POST when deferSessionRefresh is enabled
             */
            if (!deferSessionRefresh || isPostRequest)
              await ctx.context.internalAdapter.deleteSession(
                session.session.token
              );
          }
          return ctx.json(null);
        }
        /**
         * We don't need to update the session if the user doesn't want to be remembered
         * or if the session refresh is disabled
         */
        if (dontRememberMe || ctx.query?.disableRefresh) {
          const parsedSession = parseSessionOutput(
            ctx.context.options,
            session.session
          );
          const parsedUser = parseUserOutput(ctx.context.options, session.user);
          return ctx.json({
            session: parsedSession,
            user: parsedUser,
          });
        }
        const expiresIn = ctx.context.sessionConfig.expiresIn;
        const updateAge = ctx.context.sessionConfig.updateAge;
        const shouldBeUpdated =
          session.session.expiresAt.valueOf() -
            expiresIn * 1e3 +
            updateAge * 1e3 <=
          Date.now();
        const disableRefresh =
          ctx.query?.disableRefresh ||
          ctx.context.options.session?.disableSessionRefresh;
        const shouldSkipSessionRefresh = await getShouldSkipSessionRefresh();
        const needsRefresh =
          shouldBeUpdated && !disableRefresh && !shouldSkipSessionRefresh;
        /**
         * When deferSessionRefresh is enabled and this is a GET request,
         * return the session without performing writes, but include needsRefresh flag
         */
        if (deferSessionRefresh && !isPostRequest) {
          await setCookieCache(ctx, session, !!dontRememberMe);
          const parsedSession = parseSessionOutput(
            ctx.context.options,
            session.session
          );
          const parsedUser = parseUserOutput(ctx.context.options, session.user);
          return ctx.json({
            session: parsedSession,
            user: parsedUser,
            needsRefresh,
          });
        }
        if (needsRefresh) {
          const updatedSession =
            await ctx.context.internalAdapter.updateSession(
              session.session.token,
              {
                expiresAt: getDate(ctx.context.sessionConfig.expiresIn, 'sec'),
                updatedAt: /* @__PURE__ */ new Date(),
              }
            );
          if (!updatedSession) {
            /**
             * Handle case where session update fails (e.g., concurrent deletion)
             */
            deleteSessionCookie(ctx);
            throw APIError.from(
              'UNAUTHORIZED',
              BASE_ERROR_CODES.FAILED_TO_GET_SESSION
            );
          }
          const maxAge =
            (updatedSession.expiresAt.valueOf() - Date.now()) / 1e3;
          await setSessionCookie(
            ctx,
            {
              session: updatedSession,
              user: session.user,
            },
            false,
            { maxAge }
          );
          const parsedUpdatedSession = parseSessionOutput(
            ctx.context.options,
            updatedSession
          );
          const parsedUser = parseUserOutput(ctx.context.options, session.user);
          return ctx.json({
            session: parsedUpdatedSession,
            user: parsedUser,
          });
        }
        await setCookieCache(ctx, session, !!dontRememberMe);
        const parsedSession = parseSessionOutput(
          ctx.context.options,
          session.session
        );
        const parsedUser = parseUserOutput(ctx.context.options, session.user);
        return ctx.json({
          session: parsedSession,
          user: parsedUser,
        });
      } catch (error) {
        if (isAPIError(error)) throw error;
        ctx.context.logger.error('INTERNAL_SERVER_ERROR', error);
        throw APIError.from(
          'INTERNAL_SERVER_ERROR',
          BASE_ERROR_CODES.FAILED_TO_GET_SESSION
        );
      }
    }
  );
var getSessionFromCtx = async (ctx, config) => {
  if (ctx.context.session) return ctx.context.session;
  const session = await getSession()({
    ...ctx,
    method: 'GET',
    asResponse: false,
    headers: ctx.headers,
    returnHeaders: false,
    returnStatus: false,
    query: {
      ...config,
      ...ctx.query,
    },
  }).catch((e) => {
    return null;
  });
  ctx.context.session = session;
  return session;
};
/**
 * The middleware forces the endpoint to require a valid session.
 */
var sessionMiddleware = createAuthMiddleware(async (ctx) => {
  const session = await getSessionFromCtx(ctx);
  if (!session?.session)
    throw APIError.from('UNAUTHORIZED', {
      message: 'Unauthorized',
      code: 'UNAUTHORIZED',
    });
  return { session };
});
/**
 * This middleware forces the endpoint to require a valid session and ignores cookie cache.
 * This should be used for sensitive operations like password changes, account deletion, etc.
 * to ensure that revoked sessions cannot be used even if they're still cached in cookies.
 */
var sensitiveSessionMiddleware = createAuthMiddleware(async (ctx) => {
  const session = await getSessionFromCtx(ctx, { disableCookieCache: true });
  if (!session?.session)
    throw APIError.from('UNAUTHORIZED', {
      message: 'Unauthorized',
      code: 'UNAUTHORIZED',
    });
  return { session };
});
createAuthMiddleware(async (ctx) => {
  const session = await getSessionFromCtx(ctx);
  if (!session?.session && (ctx.request || ctx.headers))
    throw APIError.from('UNAUTHORIZED', {
      message: 'Unauthorized',
      code: 'UNAUTHORIZED',
    });
  return { session };
});
/**
 * This middleware forces the endpoint to require a valid session,
 * as well as making sure the session is fresh before proceeding.
 *
 * Session freshness check will be skipped if the session config's freshAge
 * is set to 0
 */
var freshSessionMiddleware = createAuthMiddleware(async (ctx) => {
  const session = await getSessionFromCtx(ctx);
  if (!session?.session)
    throw APIError.from('UNAUTHORIZED', {
      message: 'Unauthorized',
      code: 'UNAUTHORIZED',
    });
  if (ctx.context.sessionConfig.freshAge !== 0) {
    const createdAt = new Date(session.session.createdAt).getTime();
    const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
    if (Date.now() - createdAt >= freshAge)
      throw APIError.from('FORBIDDEN', BASE_ERROR_CODES.SESSION_NOT_FRESH);
  }
  return { session };
});
/**
 * user active sessions list
 */
var listSessions = () =>
  createAuthEndpoint(
    '/list-sessions',
    {
      method: 'GET',
      operationId: 'listUserSessions',
      use: [sessionMiddleware],
      requireHeaders: true,
      metadata: {
        openapi: {
          operationId: 'listUserSessions',
          description: 'List all active sessions for the user',
          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Session' },
                  },
                },
              },
            },
          },
        },
      },
    },
    async (ctx) => {
      try {
        const activeSessions = (
          await ctx.context.internalAdapter.listSessions(
            ctx.context.session.user.id,
            { onlyActiveSessions: true }
          )
        ).filter((session) => {
          return session.expiresAt > /* @__PURE__ */ new Date();
        });
        return ctx.json(
          activeSessions.map((session) =>
            parseSessionOutput(ctx.context.options, session)
          )
        );
      } catch (e) {
        ctx.context.logger.error(e);
        throw ctx.error('INTERNAL_SERVER_ERROR');
      }
    }
  );
/**
 * revoke a single session
 */
var revokeSession = createAuthEndpoint(
  '/revoke-session',
  {
    method: 'POST',
    body: z$1.object({
      token: z$1.string().meta({ description: 'The token to revoke' }),
    }),
    use: [sensitiveSessionMiddleware],
    requireHeaders: true,
    metadata: {
      openapi: {
        description: 'Revoke a single session',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  token: {
                    type: 'string',
                    description: 'The token to revoke',
                  },
                },
                required: ['token'],
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'boolean',
                      description:
                        'Indicates if the session was revoked successfully',
                    },
                  },
                  required: ['status'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    const token = ctx.body.token;
    if (
      (await ctx.context.internalAdapter.findSession(token))?.session.userId ===
      ctx.context.session.user.id
    )
      try {
        await ctx.context.internalAdapter.deleteSession(token);
      } catch (error) {
        ctx.context.logger.error(
          error && typeof error === 'object' && 'name' in error
            ? error.name
            : '',
          error
        );
        throw APIError.from('INTERNAL_SERVER_ERROR', {
          message: 'Internal Server Error',
          code: 'INTERNAL_SERVER_ERROR',
        });
      }
    return ctx.json({ status: true });
  }
);
/**
 * revoke all user sessions
 */
var revokeSessions = createAuthEndpoint(
  '/revoke-sessions',
  {
    method: 'POST',
    use: [sensitiveSessionMiddleware],
    requireHeaders: true,
    metadata: {
      openapi: {
        description: 'Revoke all sessions for the user',
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'boolean',
                      description:
                        'Indicates if all sessions were revoked successfully',
                    },
                  },
                  required: ['status'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    try {
      await ctx.context.internalAdapter.deleteSessions(
        ctx.context.session.user.id
      );
    } catch (error) {
      ctx.context.logger.error(
        error && typeof error === 'object' && 'name' in error ? error.name : '',
        error
      );
      throw APIError.from('INTERNAL_SERVER_ERROR', {
        message: 'Internal Server Error',
        code: 'INTERNAL_SERVER_ERROR',
      });
    }
    return ctx.json({ status: true });
  }
);
var revokeOtherSessions = createAuthEndpoint(
  '/revoke-other-sessions',
  {
    method: 'POST',
    requireHeaders: true,
    use: [sensitiveSessionMiddleware],
    metadata: {
      openapi: {
        description:
          'Revoke all other sessions for the user except the current one',
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'boolean',
                      description:
                        'Indicates if all other sessions were revoked successfully',
                    },
                  },
                  required: ['status'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    const session = ctx.context.session;
    if (!session.user)
      throw APIError.from('UNAUTHORIZED', {
        message: 'Unauthorized',
        code: 'UNAUTHORIZED',
      });
    const otherSessions = (
      await ctx.context.internalAdapter.listSessions(session.user.id)
    )
      .filter((session) => {
        return session.expiresAt > /* @__PURE__ */ new Date();
      })
      .filter((session) => session.token !== ctx.context.session.session.token);
    await Promise.all(
      otherSessions.map((session) =>
        ctx.context.internalAdapter.deleteSession(session.token)
      )
    );
    return ctx.json({ status: true });
  }
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/db/verification-token-storage.mjs
var defaultKeyHasher = async (identifier) => {
  const hash = await createHash('SHA-256').digest(
    new TextEncoder().encode(identifier)
  );
  return base64Url.encode(new Uint8Array(hash), { padding: false });
};
async function processIdentifier(identifier, option) {
  if (!option || option === 'plain') return identifier;
  if (option === 'hashed') return defaultKeyHasher(identifier);
  if (typeof option === 'object' && 'hash' in option)
    return option.hash(identifier);
  return identifier;
}
function getStorageOption(identifier, config) {
  if (!config) return;
  if (typeof config === 'object' && 'default' in config) {
    if (config.overrides) {
      for (const [prefix, option] of Object.entries(config.overrides))
        if (identifier.startsWith(prefix)) return option;
    }
    return config.default;
  }
  return config;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/db/with-hooks.mjs
function getWithHooks(adapter, ctx) {
  const hooksEntries = ctx.hooks;
  async function createWithHooks(data, model, customCreateFn) {
    const context = await getCurrentAuthContext().catch(() => null);
    let actualData = data;
    for (const { source, hooks } of hooksEntries) {
      const toRun = hooks[model]?.create?.before;
      if (toRun) {
        const result = await withSpan(
          `db create.before ${model}`,
          {
            [ATTR_HOOK_TYPE]: 'create.before',
            [ATTR_DB_COLLECTION_NAME]: model,
            [ATTR_CONTEXT]: source,
          },
          () => toRun(actualData, context)
        );
        if (result === false) return null;
        if (typeof result === 'object' && 'data' in result)
          actualData = {
            ...actualData,
            ...result.data,
          };
      }
    }
    let created = null;
    if (!customCreateFn || customCreateFn.executeMainFn)
      created = await (
        await getCurrentAdapter(adapter)
      ).create({
        model,
        data: actualData,
        forceAllowId: true,
      });
    if (customCreateFn?.fn)
      created = await customCreateFn.fn(created ?? actualData);
    for (const { source, hooks } of hooksEntries) {
      const toRun = hooks[model]?.create?.after;
      if (toRun)
        await queueAfterTransactionHook(async () => {
          await withSpan(
            `db create.after ${model}`,
            {
              [ATTR_HOOK_TYPE]: 'create.after',
              [ATTR_DB_COLLECTION_NAME]: model,
              [ATTR_CONTEXT]: source,
            },
            () => toRun(created, context)
          );
        });
    }
    return created;
  }
  async function updateWithHooks(data, where, model, customUpdateFn) {
    const context = await getCurrentAuthContext().catch(() => null);
    let actualData = data;
    for (const { source, hooks } of hooksEntries) {
      const toRun = hooks[model]?.update?.before;
      if (toRun) {
        const result = await withSpan(
          `db update.before ${model}`,
          {
            [ATTR_HOOK_TYPE]: 'update.before',
            [ATTR_DB_COLLECTION_NAME]: model,
            [ATTR_CONTEXT]: source,
          },
          () => toRun(data, context)
        );
        if (result === false) return null;
        if (typeof result === 'object' && 'data' in result)
          actualData = {
            ...actualData,
            ...result.data,
          };
      }
    }
    const customUpdated = customUpdateFn
      ? await customUpdateFn.fn(actualData)
      : null;
    const updated =
      !customUpdateFn || customUpdateFn.executeMainFn
        ? await (
            await getCurrentAdapter(adapter)
          ).update({
            model,
            update: actualData,
            where,
          })
        : customUpdated;
    for (const { source, hooks } of hooksEntries) {
      const toRun = hooks[model]?.update?.after;
      if (toRun)
        await queueAfterTransactionHook(async () => {
          await withSpan(
            `db update.after ${model}`,
            {
              [ATTR_HOOK_TYPE]: 'update.after',
              [ATTR_DB_COLLECTION_NAME]: model,
              [ATTR_CONTEXT]: source,
            },
            () => toRun(updated, context)
          );
        });
    }
    return updated;
  }
  async function updateManyWithHooks(data, where, model, customUpdateFn) {
    const context = await getCurrentAuthContext().catch(() => null);
    let actualData = data;
    for (const { source, hooks } of hooksEntries) {
      const toRun = hooks[model]?.update?.before;
      if (toRun) {
        const result = await withSpan(
          `db updateMany.before ${model}`,
          {
            [ATTR_HOOK_TYPE]: 'updateMany.before',
            [ATTR_DB_COLLECTION_NAME]: model,
            [ATTR_CONTEXT]: source,
          },
          () => toRun(data, context)
        );
        if (result === false) return null;
        if (typeof result === 'object' && 'data' in result)
          actualData = {
            ...actualData,
            ...result.data,
          };
      }
    }
    const customUpdated = customUpdateFn
      ? await customUpdateFn.fn(actualData)
      : null;
    const updated =
      !customUpdateFn || customUpdateFn.executeMainFn
        ? await (
            await getCurrentAdapter(adapter)
          ).updateMany({
            model,
            update: actualData,
            where,
          })
        : customUpdated;
    for (const { source, hooks } of hooksEntries) {
      const toRun = hooks[model]?.update?.after;
      if (toRun)
        await queueAfterTransactionHook(async () => {
          await withSpan(
            `db updateMany.after ${model}`,
            {
              [ATTR_HOOK_TYPE]: 'updateMany.after',
              [ATTR_DB_COLLECTION_NAME]: model,
              [ATTR_CONTEXT]: source,
            },
            () => toRun(updated, context)
          );
        });
    }
    return updated;
  }
  async function deleteWithHooks(where, model, customDeleteFn) {
    const context = await getCurrentAuthContext().catch(() => null);
    let entityToDelete = null;
    try {
      entityToDelete =
        (
          await (
            await getCurrentAdapter(adapter)
          ).findMany({
            model,
            where,
            limit: 1,
          })
        )[0] || null;
    } catch {}
    if (entityToDelete)
      for (const { source, hooks } of hooksEntries) {
        const toRun = hooks[model]?.delete?.before;
        if (toRun) {
          if (
            (await withSpan(
              `db delete.before ${model}`,
              {
                ['better_auth.hook.type']: 'delete.before',
                ['db.collection.name']: model,
                ['better_auth.context']: source,
              },
              () => toRun(entityToDelete, context)
            )) === false
          )
            return null;
        }
      }
    const customDeleted = customDeleteFn
      ? await customDeleteFn.fn(where)
      : null;
    const deleted =
      (!customDeleteFn || customDeleteFn.executeMainFn) && entityToDelete
        ? await (
            await getCurrentAdapter(adapter)
          ).delete({
            model,
            where,
          })
        : customDeleted;
    if (entityToDelete)
      for (const { source, hooks } of hooksEntries) {
        const toRun = hooks[model]?.delete?.after;
        if (toRun)
          await queueAfterTransactionHook(async () => {
            await withSpan(
              `db delete.after ${model}`,
              {
                [ATTR_HOOK_TYPE]: 'delete.after',
                [ATTR_DB_COLLECTION_NAME]: model,
                [ATTR_CONTEXT]: source,
              },
              () => toRun(entityToDelete, context)
            );
          });
      }
    return deleted;
  }
  async function deleteManyWithHooks(where, model, customDeleteFn) {
    const context = await getCurrentAuthContext().catch(() => null);
    let entitiesToDelete = [];
    try {
      entitiesToDelete = await (
        await getCurrentAdapter(adapter)
      ).findMany({
        model,
        where,
      });
    } catch {}
    for (const entity of entitiesToDelete)
      for (const { source, hooks } of hooksEntries) {
        const toRun = hooks[model]?.delete?.before;
        if (toRun) {
          if (
            (await withSpan(
              `db delete.before ${model}`,
              {
                ['better_auth.hook.type']: 'delete.before',
                ['db.collection.name']: model,
                ['better_auth.context']: source,
              },
              () => toRun(entity, context)
            )) === false
          )
            return null;
        }
      }
    const customDeleted = customDeleteFn
      ? await customDeleteFn.fn(where)
      : null;
    const deleted =
      !customDeleteFn || customDeleteFn.executeMainFn
        ? await (
            await getCurrentAdapter(adapter)
          ).deleteMany({
            model,
            where,
          })
        : customDeleted;
    for (const entity of entitiesToDelete)
      for (const { source, hooks } of hooksEntries) {
        const toRun = hooks[model]?.delete?.after;
        if (toRun)
          await queueAfterTransactionHook(async () => {
            await withSpan(
              `db delete.after ${model}`,
              {
                [ATTR_HOOK_TYPE]: 'delete.after',
                [ATTR_DB_COLLECTION_NAME]: model,
                [ATTR_CONTEXT]: source,
              },
              () => toRun(entity, context)
            );
          });
      }
    return deleted;
  }
  return {
    createWithHooks,
    updateWithHooks,
    updateManyWithHooks,
    deleteWithHooks,
    deleteManyWithHooks,
  };
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/db/internal-adapter.mjs
function getTTLSeconds(expiresAt, now = Date.now()) {
  const expiresMs =
    typeof expiresAt === 'number' ? expiresAt : expiresAt.getTime();
  return Math.max(Math.floor((expiresMs - now) / 1e3), 0);
}
var createInternalAdapter = (adapter, ctx) => {
  const logger = ctx.logger;
  const options = ctx.options;
  const secondaryStorage = options.secondaryStorage;
  const sessionExpiration = options.session?.expiresIn || 3600 * 24 * 7;
  const {
    createWithHooks,
    updateWithHooks,
    updateManyWithHooks,
    deleteWithHooks,
    deleteManyWithHooks,
  } = getWithHooks(adapter, ctx);
  async function refreshUserSessions(user) {
    if (!secondaryStorage) return;
    const listRaw = await secondaryStorage.get(`active-sessions-${user.id}`);
    if (!listRaw) return;
    const now = Date.now();
    const validSessions = (safeJSONParse(listRaw) || []).filter(
      (s) => s.expiresAt > now
    );
    await Promise.all(
      validSessions.map(async ({ token }) => {
        const cached = await secondaryStorage.get(token);
        if (!cached) return;
        const parsed = safeJSONParse(cached);
        if (!parsed) return;
        const sessionTTL = getTTLSeconds(parsed.session.expiresAt, now);
        await secondaryStorage.set(
          token,
          JSON.stringify({
            session: parsed.session,
            user,
          }),
          Math.floor(sessionTTL)
        );
      })
    );
  }
  return {
    createOAuthUser: async (user, account) => {
      return runWithTransaction(adapter, async () => {
        const createdUser = await createWithHooks(
          {
            createdAt: /* @__PURE__ */ new Date(),
            updatedAt: /* @__PURE__ */ new Date(),
            ...user,
          },
          'user',
          void 0
        );
        return {
          user: createdUser,
          account: await createWithHooks(
            {
              ...account,
              userId: createdUser.id,
              createdAt: /* @__PURE__ */ new Date(),
              updatedAt: /* @__PURE__ */ new Date(),
            },
            'account',
            void 0
          ),
        };
      });
    },
    createUser: async (user) => {
      return await createWithHooks(
        {
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          ...user,
          email: user.email?.toLowerCase(),
        },
        'user',
        void 0
      );
    },
    createAccount: async (account) => {
      return await createWithHooks(
        {
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          ...account,
        },
        'account',
        void 0
      );
    },
    listSessions: async (userId, options) => {
      if (secondaryStorage) {
        const currentList = await secondaryStorage.get(
          `active-sessions-${userId}`
        );
        if (!currentList) return [];
        const list = safeJSONParse(currentList) || [];
        const now = Date.now();
        const seenTokens = /* @__PURE__ */ new Set();
        const sessions = [];
        for (const { token, expiresAt } of list) {
          if (expiresAt <= now || seenTokens.has(token)) continue;
          seenTokens.add(token);
          const data = await secondaryStorage.get(token);
          if (!data) continue;
          try {
            const parsed = typeof data === 'string' ? JSON.parse(data) : data;
            if (!parsed?.session) continue;
            sessions.push(
              parseSessionOutput(ctx.options, {
                ...parsed.session,
                expiresAt: new Date(parsed.session.expiresAt),
              })
            );
          } catch {
            continue;
          }
        }
        return sessions;
      }
      return await (
        await getCurrentAdapter(adapter)
      ).findMany({
        model: 'session',
        where: [
          {
            field: 'userId',
            value: userId,
          },
          ...(options?.onlyActiveSessions
            ? [
                {
                  field: 'expiresAt',
                  value: /* @__PURE__ */ new Date(),
                  operator: 'gt',
                },
              ]
            : []),
        ],
      });
    },
    listUsers: async (limit, offset, sortBy, where) => {
      return await (
        await getCurrentAdapter(adapter)
      ).findMany({
        model: 'user',
        limit,
        offset,
        sortBy,
        where,
      });
    },
    countTotalUsers: async (where) => {
      const total = await (
        await getCurrentAdapter(adapter)
      ).count({
        model: 'user',
        where,
      });
      if (typeof total === 'string') return parseInt(total);
      return total;
    },
    deleteUser: async (userId) => {
      if (!secondaryStorage || options.session?.storeSessionInDatabase)
        await deleteManyWithHooks(
          [
            {
              field: 'userId',
              value: userId,
            },
          ],
          'session',
          void 0
        );
      await deleteManyWithHooks(
        [
          {
            field: 'userId',
            value: userId,
          },
        ],
        'account',
        void 0
      );
      await deleteWithHooks(
        [
          {
            field: 'id',
            value: userId,
          },
        ],
        'user',
        void 0
      );
    },
    createSession: async (userId, dontRememberMe, override, overrideAll) => {
      const headers = await (async () => {
        const ctx = await getCurrentAuthContext().catch(() => null);
        return ctx?.headers || ctx?.request?.headers;
      })();
      const storeInDb = options.session?.storeSessionInDatabase;
      const { id: _, ...rest } = override || {};
      let sessionId;
      if (secondaryStorage && !storeInDb) {
        const generatedId = ctx.generateId({ model: 'session' });
        sessionId = generatedId !== false ? generatedId : generateId$1();
      }
      const defaultAdditionalFields = getSessionDefaultFields(options);
      const data = {
        ...(sessionId ? { id: sessionId } : {}),
        ipAddress: headers ? getIp(headers, options) || '' : '',
        userAgent: headers?.get('user-agent') || '',
        ...rest,
        expiresAt: dontRememberMe
          ? getDate(3600 * 24, 'sec')
          : getDate(sessionExpiration, 'sec'),
        userId,
        token: generateId$1(32),
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        ...defaultAdditionalFields,
        ...(overrideAll ? rest : {}),
      };
      return await createWithHooks(
        data,
        'session',
        secondaryStorage
          ? {
              fn: async (sessionData) => {
                /**
                 * store the session token for the user
                 * so we can retrieve it later for listing sessions
                 */
                const currentList = await secondaryStorage.get(
                  `active-sessions-${userId}`
                );
                let list = [];
                const now = Date.now();
                if (currentList) {
                  list = safeJSONParse(currentList) || [];
                  list = list.filter(
                    (session) =>
                      session.expiresAt > now && session.token !== data.token
                  );
                }
                const sorted = [
                  ...list,
                  {
                    token: data.token,
                    expiresAt: data.expiresAt.getTime(),
                  },
                ].sort((a, b) => a.expiresAt - b.expiresAt);
                const furthestSessionTTL = getTTLSeconds(
                  sorted.at(-1)?.expiresAt ?? data.expiresAt.getTime(),
                  now
                );
                if (furthestSessionTTL > 0)
                  await secondaryStorage.set(
                    `active-sessions-${userId}`,
                    JSON.stringify(sorted),
                    furthestSessionTTL
                  );
                const user = await (
                  await getCurrentAdapter(adapter)
                ).findOne({
                  model: 'user',
                  where: [
                    {
                      field: 'id',
                      value: userId,
                    },
                  ],
                });
                const sessionTTL = getTTLSeconds(data.expiresAt, now);
                if (sessionTTL > 0)
                  await secondaryStorage.set(
                    data.token,
                    JSON.stringify({
                      session: sessionData,
                      user,
                    }),
                    sessionTTL
                  );
                return sessionData;
              },
              executeMainFn: storeInDb,
            }
          : void 0
      );
    },
    findSession: async (token) => {
      if (secondaryStorage) {
        const sessionStringified = await secondaryStorage.get(token);
        if (
          !sessionStringified &&
          (!options.session?.storeSessionInDatabase ||
            ctx.options.session?.preserveSessionInDatabase)
        )
          return null;
        if (sessionStringified) {
          const s = safeJSONParse(sessionStringified);
          if (!s) return null;
          return {
            session: parseSessionOutput(ctx.options, {
              ...s.session,
              expiresAt: new Date(s.session.expiresAt),
              createdAt: new Date(s.session.createdAt),
              updatedAt: new Date(s.session.updatedAt),
            }),
            user: parseUserOutput(ctx.options, {
              ...s.user,
              createdAt: new Date(s.user.createdAt),
              updatedAt: new Date(s.user.updatedAt),
            }),
          };
        }
      }
      const result = await (
        await getCurrentAdapter(adapter)
      ).findOne({
        model: 'session',
        where: [
          {
            value: token,
            field: 'token',
          },
        ],
        join: { user: true },
      });
      if (!result) return null;
      const { user, ...session } = result;
      if (!user) return null;
      return {
        session: parseSessionOutput(ctx.options, session),
        user: parseUserOutput(ctx.options, user),
      };
    },
    findSessions: async (sessionTokens, options) => {
      if (secondaryStorage) {
        const sessions = [];
        for (const sessionToken of sessionTokens) {
          const sessionStringified = await secondaryStorage.get(sessionToken);
          if (sessionStringified)
            try {
              const s =
                typeof sessionStringified === 'string'
                  ? JSON.parse(sessionStringified)
                  : sessionStringified;
              if (!s) return [];
              const expiresAt = new Date(s.session.expiresAt);
              if (
                options?.onlyActiveSessions &&
                expiresAt <= /* @__PURE__ */ new Date()
              )
                continue;
              const session = {
                session: {
                  ...s.session,
                  expiresAt: new Date(s.session.expiresAt),
                },
                user: {
                  ...s.user,
                  createdAt: new Date(s.user.createdAt),
                  updatedAt: new Date(s.user.updatedAt),
                },
              };
              sessions.push(session);
            } catch {
              continue;
            }
        }
        return sessions;
      }
      const sessions = await (
        await getCurrentAdapter(adapter)
      ).findMany({
        model: 'session',
        where: [
          {
            field: 'token',
            value: sessionTokens,
            operator: 'in',
          },
          ...(options?.onlyActiveSessions
            ? [
                {
                  field: 'expiresAt',
                  value: /* @__PURE__ */ new Date(),
                  operator: 'gt',
                },
              ]
            : []),
        ],
        join: { user: true },
      });
      if (!sessions.length) return [];
      if (sessions.some((session) => !session.user)) return [];
      return sessions.map((_session) => {
        const { user, ...session } = _session;
        return {
          session,
          user,
        };
      });
    },
    updateSession: async (sessionToken, session) => {
      return await updateWithHooks(
        session,
        [
          {
            field: 'token',
            value: sessionToken,
          },
        ],
        'session',
        secondaryStorage
          ? {
              async fn(data) {
                const currentSession = await secondaryStorage.get(sessionToken);
                if (!currentSession) return null;
                const parsedSession = safeJSONParse(currentSession);
                if (!parsedSession) return null;
                const mergedSession = {
                  ...parsedSession.session,
                  ...data,
                  expiresAt: new Date(
                    data.expiresAt ?? parsedSession.session.expiresAt
                  ),
                  createdAt: new Date(parsedSession.session.createdAt),
                  updatedAt: new Date(
                    data.updatedAt ?? parsedSession.session.updatedAt
                  ),
                };
                const updatedSession = parseSessionOutput(
                  ctx.options,
                  mergedSession
                );
                const now = Date.now();
                const expiresMs = new Date(updatedSession.expiresAt).getTime();
                const sessionTTL = getTTLSeconds(expiresMs, now);
                if (sessionTTL > 0) {
                  await secondaryStorage.set(
                    sessionToken,
                    JSON.stringify({
                      session: updatedSession,
                      user: parsedSession.user,
                    }),
                    sessionTTL
                  );
                  const listKey = `active-sessions-${updatedSession.userId}`;
                  const listRaw = await secondaryStorage.get(listKey);
                  const sorted = (listRaw ? safeJSONParse(listRaw) || [] : [])
                    .filter(
                      (s) => s.token !== sessionToken && s.expiresAt > now
                    )
                    .concat([
                      {
                        token: sessionToken,
                        expiresAt: expiresMs,
                      },
                    ])
                    .sort((a, b) => a.expiresAt - b.expiresAt);
                  const furthestSessionExp = sorted.at(-1)?.expiresAt;
                  if (furthestSessionExp && furthestSessionExp > now)
                    await secondaryStorage.set(
                      listKey,
                      JSON.stringify(sorted),
                      getTTLSeconds(furthestSessionExp, now)
                    );
                  else await secondaryStorage.delete(listKey);
                }
                return updatedSession;
              },
              executeMainFn: options.session?.storeSessionInDatabase,
            }
          : void 0
      );
    },
    deleteSession: async (token) => {
      if (secondaryStorage) {
        const data = await secondaryStorage.get(token);
        if (data) {
          const { session } = safeJSONParse(data) ?? {};
          if (!session) {
            logger.error('Session not found in secondary storage');
            return;
          }
          const userId = session.userId;
          const currentList = await secondaryStorage.get(
            `active-sessions-${userId}`
          );
          if (currentList) {
            const list = safeJSONParse(currentList) || [];
            const now = Date.now();
            const filtered = list.filter(
              (session) => session.expiresAt > now && session.token !== token
            );
            const furthestSessionExp = filtered
              .sort((a, b) => a.expiresAt - b.expiresAt)
              .at(-1)?.expiresAt;
            if (
              filtered.length > 0 &&
              furthestSessionExp &&
              furthestSessionExp > Date.now()
            )
              await secondaryStorage.set(
                `active-sessions-${userId}`,
                JSON.stringify(filtered),
                getTTLSeconds(furthestSessionExp, now)
              );
            else await secondaryStorage.delete(`active-sessions-${userId}`);
          } else
            logger.error('Active sessions list not found in secondary storage');
        }
        await secondaryStorage.delete(token);
        if (
          !options.session?.storeSessionInDatabase ||
          ctx.options.session?.preserveSessionInDatabase
        )
          return;
      }
      await deleteWithHooks(
        [
          {
            field: 'token',
            value: token,
          },
        ],
        'session',
        void 0
      );
    },
    deleteAccounts: async (userId) => {
      await deleteManyWithHooks(
        [
          {
            field: 'userId',
            value: userId,
          },
        ],
        'account',
        void 0
      );
    },
    deleteAccount: async (accountId) => {
      await deleteWithHooks(
        [
          {
            field: 'id',
            value: accountId,
          },
        ],
        'account',
        void 0
      );
    },
    deleteSessions: async (userIdOrSessionTokens) => {
      if (secondaryStorage) {
        if (typeof userIdOrSessionTokens === 'string') {
          const activeSession = await secondaryStorage.get(
            `active-sessions-${userIdOrSessionTokens}`
          );
          const sessions = activeSession ? safeJSONParse(activeSession) : [];
          if (!sessions) return;
          for (const session of sessions)
            await secondaryStorage.delete(session.token);
          await secondaryStorage.delete(
            `active-sessions-${userIdOrSessionTokens}`
          );
        } else
          for (const sessionToken of userIdOrSessionTokens)
            if (await secondaryStorage.get(sessionToken))
              await secondaryStorage.delete(sessionToken);
        if (
          !options.session?.storeSessionInDatabase ||
          ctx.options.session?.preserveSessionInDatabase
        )
          return;
      }
      await deleteManyWithHooks(
        [
          {
            field: Array.isArray(userIdOrSessionTokens) ? 'token' : 'userId',
            value: userIdOrSessionTokens,
            operator: Array.isArray(userIdOrSessionTokens) ? 'in' : void 0,
          },
        ],
        'session',
        void 0
      );
    },
    findOAuthUser: async (email, accountId, providerId) => {
      const account = await (
        await getCurrentAdapter(adapter)
      ).findOne({
        model: 'account',
        where: [
          {
            value: accountId,
            field: 'accountId',
          },
          {
            value: providerId,
            field: 'providerId',
          },
        ],
        join: { user: true },
      });
      if (account)
        if (account.user)
          return {
            user: account.user,
            linkedAccount: account,
            accounts: [account],
          };
        else {
          const user = await (
            await getCurrentAdapter(adapter)
          ).findOne({
            model: 'user',
            where: [
              {
                value: email.toLowerCase(),
                field: 'email',
              },
            ],
          });
          if (user)
            return {
              user,
              linkedAccount: account,
              accounts: [account],
            };
          return null;
        }
      else {
        const user = await (
          await getCurrentAdapter(adapter)
        ).findOne({
          model: 'user',
          where: [
            {
              value: email.toLowerCase(),
              field: 'email',
            },
          ],
        });
        if (user)
          return {
            user,
            linkedAccount: null,
            accounts:
              (await (
                await getCurrentAdapter(adapter)
              ).findMany({
                model: 'account',
                where: [
                  {
                    value: user.id,
                    field: 'userId',
                  },
                ],
              })) || [],
          };
        else return null;
      }
    },
    findUserByEmail: async (email, options) => {
      const result = await (
        await getCurrentAdapter(adapter)
      ).findOne({
        model: 'user',
        where: [
          {
            value: email.toLowerCase(),
            field: 'email',
          },
        ],
        join: { ...(options?.includeAccounts ? { account: true } : {}) },
      });
      if (!result) return null;
      const { account: accounts, ...user } = result;
      return {
        user,
        accounts: accounts ?? [],
      };
    },
    findUserById: async (userId) => {
      if (!userId) return null;
      return await (
        await getCurrentAdapter(adapter)
      ).findOne({
        model: 'user',
        where: [
          {
            field: 'id',
            value: userId,
          },
        ],
      });
    },
    linkAccount: async (account) => {
      return await createWithHooks(
        {
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          ...account,
        },
        'account',
        void 0
      );
    },
    updateUser: async (userId, data) => {
      const user = await updateWithHooks(
        data,
        [
          {
            field: 'id',
            value: userId,
          },
        ],
        'user',
        void 0
      );
      await refreshUserSessions(user);
      return user;
    },
    updateUserByEmail: async (email, data) => {
      const user = await updateWithHooks(
        data,
        [
          {
            field: 'email',
            value: email.toLowerCase(),
          },
        ],
        'user',
        void 0
      );
      await refreshUserSessions(user);
      return user;
    },
    updatePassword: async (userId, password) => {
      await updateManyWithHooks(
        { password },
        [
          {
            field: 'userId',
            value: userId,
          },
          {
            field: 'providerId',
            value: 'credential',
          },
        ],
        'account',
        void 0
      );
    },
    findAccounts: async (userId) => {
      return await (
        await getCurrentAdapter(adapter)
      ).findMany({
        model: 'account',
        where: [
          {
            field: 'userId',
            value: userId,
          },
        ],
      });
    },
    findAccount: async (accountId) => {
      return await (
        await getCurrentAdapter(adapter)
      ).findOne({
        model: 'account',
        where: [
          {
            field: 'accountId',
            value: accountId,
          },
        ],
      });
    },
    findAccountByProviderId: async (accountId, providerId) => {
      return await (
        await getCurrentAdapter(adapter)
      ).findOne({
        model: 'account',
        where: [
          {
            field: 'accountId',
            value: accountId,
          },
          {
            field: 'providerId',
            value: providerId,
          },
        ],
      });
    },
    findAccountByUserId: async (userId) => {
      return await (
        await getCurrentAdapter(adapter)
      ).findMany({
        model: 'account',
        where: [
          {
            field: 'userId',
            value: userId,
          },
        ],
      });
    },
    updateAccount: async (id, data) => {
      return await updateWithHooks(
        data,
        [
          {
            field: 'id',
            value: id,
          },
        ],
        'account',
        void 0
      );
    },
    createVerificationValue: async (data) => {
      const storageOption = getStorageOption(
        data.identifier,
        options.verification?.storeIdentifier
      );
      const storedIdentifier = await processIdentifier(
        data.identifier,
        storageOption
      );
      return await createWithHooks(
        {
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          ...data,
          identifier: storedIdentifier,
        },
        'verification',
        secondaryStorage
          ? {
              async fn(verificationData) {
                const ttl = getTTLSeconds(verificationData.expiresAt);
                if (ttl > 0)
                  await secondaryStorage.set(
                    `verification:${storedIdentifier}`,
                    JSON.stringify(verificationData),
                    ttl
                  );
                return verificationData;
              },
              executeMainFn: options.verification?.storeInDatabase,
            }
          : void 0
      );
    },
    findVerificationValue: async (identifier) => {
      const storageOption = getStorageOption(
        identifier,
        options.verification?.storeIdentifier
      );
      const storedIdentifier = await processIdentifier(
        identifier,
        storageOption
      );
      if (secondaryStorage) {
        const cached = await secondaryStorage.get(
          `verification:${storedIdentifier}`
        );
        if (cached) {
          const parsed = safeJSONParse(cached);
          if (parsed) return parsed;
        }
        if (storageOption && storageOption !== 'plain') {
          const plainCached = await secondaryStorage.get(
            `verification:${identifier}`
          );
          if (plainCached) {
            const parsed = safeJSONParse(plainCached);
            if (parsed) return parsed;
          }
        }
        if (!options.verification?.storeInDatabase) return null;
      }
      const currentAdapter = await getCurrentAdapter(adapter);
      async function findByIdentifier(id) {
        return currentAdapter.findMany({
          model: 'verification',
          where: [
            {
              field: 'identifier',
              value: id,
            },
          ],
          sortBy: {
            field: 'createdAt',
            direction: 'desc',
          },
          limit: 1,
        });
      }
      let verification = await findByIdentifier(storedIdentifier);
      if (!verification.length && storageOption && storageOption !== 'plain')
        verification = await findByIdentifier(identifier);
      if (!options.verification?.disableCleanup)
        await deleteManyWithHooks(
          [
            {
              field: 'expiresAt',
              value: /* @__PURE__ */ new Date(),
              operator: 'lt',
            },
          ],
          'verification',
          void 0
        );
      return verification[0] || null;
    },
    deleteVerificationByIdentifier: async (identifier) => {
      const storedIdentifier = await processIdentifier(
        identifier,
        getStorageOption(identifier, options.verification?.storeIdentifier)
      );
      if (secondaryStorage)
        await secondaryStorage.delete(`verification:${storedIdentifier}`);
      if (!secondaryStorage || options.verification?.storeInDatabase)
        await deleteWithHooks(
          [
            {
              field: 'identifier',
              value: storedIdentifier,
            },
          ],
          'verification',
          void 0
        );
    },
    updateVerificationByIdentifier: async (identifier, data) => {
      const storedIdentifier = await processIdentifier(
        identifier,
        getStorageOption(identifier, options.verification?.storeIdentifier)
      );
      if (secondaryStorage) {
        const cached = await secondaryStorage.get(
          `verification:${storedIdentifier}`
        );
        if (cached) {
          const parsed = safeJSONParse(cached);
          if (parsed) {
            const updated = {
              ...parsed,
              ...data,
            };
            const expiresAt = updated.expiresAt ?? parsed.expiresAt;
            const ttl = getTTLSeconds(
              expiresAt instanceof Date ? expiresAt : new Date(expiresAt)
            );
            if (ttl > 0)
              await secondaryStorage.set(
                `verification:${storedIdentifier}`,
                JSON.stringify(updated),
                ttl
              );
            if (!options.verification?.storeInDatabase) return updated;
          }
        }
      }
      if (!secondaryStorage || options.verification?.storeInDatabase)
        return await updateWithHooks(
          data,
          [
            {
              field: 'identifier',
              value: storedIdentifier,
            },
          ],
          'verification',
          void 0
        );
      return data;
    },
  };
};
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/context/helpers.mjs
async function runPluginInit(context) {
  let options = context.options;
  const plugins = options.plugins || [];
  const pluginTrustedOrigins = [];
  const dbHooks = [];
  for (const plugin of plugins)
    if (plugin.init) {
      const initPromise = plugin.init(context);
      let result;
      if (isPromise(initPromise)) result = await initPromise;
      else result = initPromise;
      if (typeof result === 'object') {
        if (result.options) {
          const { databaseHooks, trustedOrigins, ...restOpts } = result.options;
          if (databaseHooks)
            dbHooks.push({
              source: `plugin:${plugin.id}`,
              hooks: databaseHooks,
            });
          if (trustedOrigins) pluginTrustedOrigins.push(trustedOrigins);
          options = defu(options, restOpts);
        }
        if (result.context) Object.assign(context, result.context);
      }
    }
  if (pluginTrustedOrigins.length > 0) {
    const allSources = [
      ...(options.trustedOrigins ? [options.trustedOrigins] : []),
      ...pluginTrustedOrigins,
    ];
    const staticOrigins = allSources.filter(Array.isArray).flat();
    const dynamicOrigins = allSources.filter((s) => typeof s === 'function');
    if (dynamicOrigins.length > 0)
      options.trustedOrigins = async (request) => {
        const resolved = await Promise.all(
          dynamicOrigins.map((fn) => fn(request))
        );
        return [...staticOrigins, ...resolved.flat()].filter(
          (v) => typeof v === 'string' && v !== ''
        );
      };
    else options.trustedOrigins = staticOrigins;
  }
  if (options.databaseHooks)
    dbHooks.push({
      source: 'user',
      hooks: options.databaseHooks,
    });
  context.internalAdapter = createInternalAdapter(context.adapter, {
    options,
    logger: context.logger,
    hooks: dbHooks,
    generateId: context.generateId,
  });
  context.options = options;
}
function getInternalPlugins(options) {
  const plugins = [];
  if (options.advanced?.crossSubDomainCookies?.enabled) {
  }
  return plugins;
}
async function getTrustedOrigins(options, request) {
  const trustedOrigins = [];
  if (isDynamicBaseURLConfig(options.baseURL)) {
    const allowedHosts = options.baseURL.allowedHosts;
    for (const host of allowedHosts)
      if (!host.includes('://')) {
        trustedOrigins.push(`https://${host}`);
        if (host.includes('localhost') || host.includes('127.0.0.1'))
          trustedOrigins.push(`http://${host}`);
      } else trustedOrigins.push(host);
    if (options.baseURL.fallback)
      try {
        trustedOrigins.push(new URL(options.baseURL.fallback).origin);
      } catch {}
  } else {
    const baseURL = getBaseURL(
      typeof options.baseURL === 'string' ? options.baseURL : void 0,
      options.basePath,
      request
    );
    if (baseURL) trustedOrigins.push(new URL(baseURL).origin);
  }
  if (options.trustedOrigins) {
    if (Array.isArray(options.trustedOrigins))
      trustedOrigins.push(...options.trustedOrigins);
    if (typeof options.trustedOrigins === 'function') {
      const validOrigins = await options.trustedOrigins(request);
      trustedOrigins.push(...validOrigins);
    }
  }
  const envTrustedOrigins = env.BETTER_AUTH_TRUSTED_ORIGINS;
  if (envTrustedOrigins) trustedOrigins.push(...envTrustedOrigins.split(','));
  return trustedOrigins.filter((v) => Boolean(v));
}
async function getAwaitableValue(arr, item) {
  if (!arr) return void 0;
  for (const val of arr) {
    const value = typeof val === 'function' ? await val() : val;
    if (value[item.field ?? 'id'] === item.value) return value;
  }
}
async function getTrustedProviders(options, request) {
  const trustedProviders = options.account?.accountLinking?.trustedProviders;
  if (!trustedProviders) return [];
  if (Array.isArray(trustedProviders))
    return trustedProviders.filter((v) => Boolean(v));
  return ((await trustedProviders(request)) ?? []).filter((v) => Boolean(v));
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/oauth2/utils.mjs
/**
 * Check if a string looks like encrypted data
 */
function isLikelyEncrypted(token) {
  if (token.startsWith('$ba$')) return true;
  return token.length % 2 === 0 && /^[0-9a-f]+$/i.test(token);
}
function decryptOAuthToken(token, ctx) {
  if (!token) return token;
  if (ctx.options.account?.encryptOAuthTokens) {
    if (!isLikelyEncrypted(token)) return token;
    return symmetricDecrypt({
      key: ctx.secretConfig,
      data: token,
    });
  }
  return token;
}
function setTokenUtil(token, ctx) {
  if (ctx.options.account?.encryptOAuthTokens && token)
    return symmetricEncrypt({
      key: ctx.secretConfig,
      data: token,
    });
  return token;
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/oauth2/utils.mjs
function getOAuth2Tokens(data) {
  const getDate = (seconds) => {
    return new Date(/* @__PURE__ */ new Date().getTime() + seconds * 1e3);
  };
  return {
    tokenType: data.token_type,
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    accessTokenExpiresAt: data.expires_in ? getDate(data.expires_in) : void 0,
    refreshTokenExpiresAt: data.refresh_token_expires_in
      ? getDate(data.refresh_token_expires_in)
      : void 0,
    scopes: data?.scope
      ? typeof data.scope === 'string'
        ? data.scope.split(' ')
        : data.scope
      : [],
    idToken: data.id_token,
    raw: data,
  };
}
async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return base64Url.encode(new Uint8Array(hash), { padding: false });
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/oauth2/create-authorization-url.mjs
async function createAuthorizationURL({
  id,
  options,
  authorizationEndpoint,
  state,
  codeVerifier,
  scopes,
  claims,
  redirectURI,
  duration,
  prompt,
  accessType,
  responseType,
  display,
  loginHint,
  hd,
  responseMode,
  additionalParams,
  scopeJoiner,
}) {
  options = typeof options === 'function' ? await options() : options;
  const url = new URL(options.authorizationEndpoint || authorizationEndpoint);
  url.searchParams.set('response_type', responseType || 'code');
  const primaryClientId = Array.isArray(options.clientId)
    ? options.clientId[0]
    : options.clientId;
  url.searchParams.set('client_id', primaryClientId);
  url.searchParams.set('state', state);
  if (scopes) url.searchParams.set('scope', scopes.join(scopeJoiner || ' '));
  url.searchParams.set('redirect_uri', options.redirectURI || redirectURI);
  duration && url.searchParams.set('duration', duration);
  display && url.searchParams.set('display', display);
  loginHint && url.searchParams.set('login_hint', loginHint);
  prompt && url.searchParams.set('prompt', prompt);
  hd && url.searchParams.set('hd', hd);
  accessType && url.searchParams.set('access_type', accessType);
  responseMode && url.searchParams.set('response_mode', responseMode);
  if (codeVerifier) {
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    url.searchParams.set('code_challenge_method', 'S256');
    url.searchParams.set('code_challenge', codeChallenge);
  }
  if (claims) {
    const claimsObj = claims.reduce((acc, claim) => {
      acc[claim] = null;
      return acc;
    }, {});
    url.searchParams.set(
      'claims',
      JSON.stringify({
        id_token: {
          email: null,
          email_verified: null,
          ...claimsObj,
        },
      })
    );
  }
  if (additionalParams)
    Object.entries(additionalParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  return url;
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/oauth2/refresh-access-token.mjs
/**
 * @deprecated use async'd refreshAccessTokenRequest instead
 */
function createRefreshAccessTokenRequest({
  refreshToken,
  options,
  authentication,
  extraParams,
  resource,
}) {
  const body = new URLSearchParams();
  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    accept: 'application/json',
  };
  body.set('grant_type', 'refresh_token');
  body.set('refresh_token', refreshToken);
  if (authentication === 'basic') {
    const primaryClientId = Array.isArray(options.clientId)
      ? options.clientId[0]
      : options.clientId;
    if (primaryClientId)
      headers['authorization'] =
        'Basic ' +
        base64.encode(`${primaryClientId}:${options.clientSecret ?? ''}`);
    else
      headers['authorization'] =
        'Basic ' + base64.encode(`:${options.clientSecret ?? ''}`);
  } else {
    const primaryClientId = Array.isArray(options.clientId)
      ? options.clientId[0]
      : options.clientId;
    body.set('client_id', primaryClientId);
    if (options.clientSecret) body.set('client_secret', options.clientSecret);
  }
  if (resource)
    if (typeof resource === 'string') body.append('resource', resource);
    else for (const _resource of resource) body.append('resource', _resource);
  if (extraParams)
    for (const [key, value] of Object.entries(extraParams))
      body.set(key, value);
  return {
    body,
    headers,
  };
}
async function refreshAccessToken({
  refreshToken,
  options,
  tokenEndpoint,
  authentication,
  extraParams,
}) {
  const { body, headers } = await createRefreshAccessTokenRequest({
    refreshToken,
    options,
    authentication,
    extraParams,
  });
  const { data, error } = await betterFetch(tokenEndpoint, {
    method: 'POST',
    body,
    headers,
  });
  if (error) throw error;
  const tokens = {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    tokenType: data.token_type,
    scopes: data.scope?.split(' '),
    idToken: data.id_token,
  };
  if (data.expires_in)
    tokens.accessTokenExpiresAt = new Date(
      /* @__PURE__ */ new Date().getTime() + data.expires_in * 1e3
    );
  if (data.refresh_token_expires_in)
    tokens.refreshTokenExpiresAt = new Date(
      /* @__PURE__ */ new Date().getTime() + data.refresh_token_expires_in * 1e3
    );
  return tokens;
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/oauth2/validate-authorization-code.mjs
async function authorizationCodeRequest({
  code,
  codeVerifier,
  redirectURI,
  options,
  authentication,
  deviceId,
  headers,
  additionalParams = {},
  resource,
}) {
  options = typeof options === 'function' ? await options() : options;
  return createAuthorizationCodeRequest({
    code,
    codeVerifier,
    redirectURI,
    options,
    authentication,
    deviceId,
    headers,
    additionalParams,
    resource,
  });
}
/**
 * @deprecated use async'd authorizationCodeRequest instead
 */
function createAuthorizationCodeRequest({
  code,
  codeVerifier,
  redirectURI,
  options,
  authentication,
  deviceId,
  headers,
  additionalParams = {},
  resource,
}) {
  const body = new URLSearchParams();
  const requestHeaders = {
    'content-type': 'application/x-www-form-urlencoded',
    accept: 'application/json',
    ...headers,
  };
  body.set('grant_type', 'authorization_code');
  body.set('code', code);
  codeVerifier && body.set('code_verifier', codeVerifier);
  options.clientKey && body.set('client_key', options.clientKey);
  deviceId && body.set('device_id', deviceId);
  body.set('redirect_uri', options.redirectURI || redirectURI);
  if (resource)
    if (typeof resource === 'string') body.append('resource', resource);
    else for (const _resource of resource) body.append('resource', _resource);
  if (authentication === 'basic') {
    const primaryClientId = Array.isArray(options.clientId)
      ? options.clientId[0]
      : options.clientId;
    requestHeaders['authorization'] =
      `Basic ${base64.encode(`${primaryClientId}:${options.clientSecret ?? ''}`)}`;
  } else {
    const primaryClientId = Array.isArray(options.clientId)
      ? options.clientId[0]
      : options.clientId;
    body.set('client_id', primaryClientId);
    if (options.clientSecret) body.set('client_secret', options.clientSecret);
  }
  for (const [key, value] of Object.entries(additionalParams))
    if (!body.has(key)) body.append(key, value);
  return {
    body,
    headers: requestHeaders,
  };
}
async function validateAuthorizationCode({
  code,
  codeVerifier,
  redirectURI,
  options,
  tokenEndpoint,
  authentication,
  deviceId,
  headers,
  additionalParams = {},
  resource,
}) {
  const { body, headers: requestHeaders } = await authorizationCodeRequest({
    code,
    codeVerifier,
    redirectURI,
    options,
    authentication,
    deviceId,
    headers,
    additionalParams,
    resource,
  });
  const { data, error } = await betterFetch(tokenEndpoint, {
    method: 'POST',
    body,
    headers: requestHeaders,
  });
  if (error) throw error;
  return getOAuth2Tokens(data);
}
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/apple.mjs
var apple = (options) => {
  const tokenEndpoint = 'https://appleid.apple.com/auth/token';
  return {
    id: 'apple',
    name: 'Apple',
    async createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scope = options.disableDefaultScope ? [] : ['email', 'name'];
      if (options.scope) _scope.push(...options.scope);
      if (scopes) _scope.push(...scopes);
      return await createAuthorizationURL({
        id: 'apple',
        options,
        authorizationEndpoint: 'https://appleid.apple.com/auth/authorize',
        scopes: _scope,
        state,
        redirectURI,
        responseMode: 'form_post',
        responseType: 'code id_token',
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    async verifyIdToken(token, nonce) {
      if (options.disableIdTokenSignIn) return false;
      if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
      try {
        const { kid, alg: jwtAlg } = decodeProtectedHeader(token);
        if (!kid || !jwtAlg) return false;
        const { payload: jwtClaims } = await jwtVerify(
          token,
          await getApplePublicKey(kid),
          {
            algorithms: [jwtAlg],
            issuer: 'https://appleid.apple.com',
            audience:
              options.audience && options.audience.length
                ? options.audience
                : options.appBundleIdentifier
                  ? options.appBundleIdentifier
                  : options.clientId,
            maxTokenAge: '1h',
          }
        );
        ['email_verified', 'is_private_email'].forEach((field) => {
          if (jwtClaims[field] !== void 0)
            jwtClaims[field] = Boolean(jwtClaims[field]);
        });
        if (nonce && jwtClaims.nonce !== nonce) return false;
        return !!jwtClaims;
      } catch {
        return false;
      }
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options,
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      if (!token.idToken) return null;
      const profile = decodeJwt(token.idToken);
      if (!profile) return null;
      let name;
      if (token.user?.name)
        name =
          `${token.user.name.firstName || ''} ${token.user.name.lastName || ''}`.trim();
      else name = profile.name || '';
      const emailVerified =
        typeof profile.email_verified === 'boolean'
          ? profile.email_verified
          : profile.email_verified === 'true';
      const enrichedProfile = {
        ...profile,
        name,
      };
      const userMap = await options.mapProfileToUser?.(enrichedProfile);
      return {
        user: {
          id: profile.sub,
          name: enrichedProfile.name,
          emailVerified,
          email: profile.email,
          ...userMap,
        },
        data: enrichedProfile,
      };
    },
    options,
  };
};
var getApplePublicKey = async (kid) => {
  const { data } = await betterFetch(`https://appleid.apple.com/auth/keys`);
  if (!data?.keys)
    throw new APIError('BAD_REQUEST', { message: 'Keys not found' });
  const jwk = data.keys.find((key) => key.kid === kid);
  if (!jwk) throw new Error(`JWK with kid ${kid} not found`);
  return await importJWK(jwk, jwk.alg);
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/atlassian.mjs
var atlassian = (options) => {
  const tokenEndpoint = 'https://auth.atlassian.com/oauth/token';
  return {
    id: 'atlassian',
    name: 'Atlassian',
    async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      if (!options.clientId || !options.clientSecret) {
        logger.error('Client Id and Secret are required for Atlassian');
        throw new BetterAuthError('CLIENT_ID_AND_SECRET_REQUIRED');
      }
      if (!codeVerifier)
        throw new BetterAuthError('codeVerifier is required for Atlassian');
      const _scopes = options.disableDefaultScope
        ? []
        : ['read:jira-user', 'offline_access'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'atlassian',
        options,
        authorizationEndpoint: 'https://auth.atlassian.com/authorize',
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
        additionalParams: { audience: 'api.atlassian.com' },
        prompt: options.prompt,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      if (!token.accessToken) return null;
      try {
        const { data: profile } = await betterFetch(
          'https://api.atlassian.com/me',
          { headers: { Authorization: `Bearer ${token.accessToken}` } }
        );
        if (!profile) return null;
        const userMap = await options.mapProfileToUser?.(profile);
        return {
          user: {
            id: profile.account_id,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
            emailVerified: false,
            ...userMap,
          },
          data: profile,
        };
      } catch (error) {
        logger.error('Failed to fetch user info from Figma:', error);
        return null;
      }
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/cognito.mjs
var cognito = (options) => {
  if (!options.domain || !options.region || !options.userPoolId) {
    logger.error(
      'Domain, region and userPoolId are required for Amazon Cognito. Make sure to provide them in the options.'
    );
    throw new BetterAuthError('DOMAIN_AND_REGION_REQUIRED');
  }
  const cleanDomain = options.domain.replace(/^https?:\/\//, '');
  const authorizationEndpoint = `https://${cleanDomain}/oauth2/authorize`;
  const tokenEndpoint = `https://${cleanDomain}/oauth2/token`;
  const userInfoEndpoint = `https://${cleanDomain}/oauth2/userinfo`;
  return {
    id: 'cognito',
    name: 'Cognito',
    async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      if (!options.clientId) {
        logger.error(
          'ClientId is required for Amazon Cognito. Make sure to provide them in the options.'
        );
        throw new BetterAuthError('CLIENT_ID_AND_SECRET_REQUIRED');
      }
      if (options.requireClientSecret && !options.clientSecret) {
        logger.error(
          'Client Secret is required when requireClientSecret is true. Make sure to provide it in the options.'
        );
        throw new BetterAuthError('CLIENT_SECRET_REQUIRED');
      }
      const _scopes = options.disableDefaultScope
        ? []
        : ['openid', 'profile', 'email'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      const url = await createAuthorizationURL({
        id: 'cognito',
        options: { ...options },
        authorizationEndpoint,
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
        prompt: options.prompt,
      });
      const scopeValue = url.searchParams.get('scope');
      if (scopeValue) {
        url.searchParams.delete('scope');
        const encodedScope = encodeURIComponent(scopeValue);
        const urlString = url.toString();
        const separator = urlString.includes('?') ? '&' : '?';
        return new URL(`${urlString}${separator}scope=${encodedScope}`);
      }
      return url;
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async verifyIdToken(token, nonce) {
      if (options.disableIdTokenSignIn) return false;
      if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
      try {
        const { kid, alg: jwtAlg } = decodeProtectedHeader(token);
        if (!kid || !jwtAlg) return false;
        const publicKey = await getCognitoPublicKey(
          kid,
          options.region,
          options.userPoolId
        );
        const expectedIssuer = `https://cognito-idp.${options.region}.amazonaws.com/${options.userPoolId}`;
        const { payload: jwtClaims } = await jwtVerify(token, publicKey, {
          algorithms: [jwtAlg],
          issuer: expectedIssuer,
          audience: options.clientId,
          maxTokenAge: '1h',
        });
        if (nonce && jwtClaims.nonce !== nonce) return false;
        return true;
      } catch (error) {
        logger.error('Failed to verify ID token:', error);
        return false;
      }
    },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      if (token.idToken)
        try {
          const profile = decodeJwt(token.idToken);
          if (!profile) return null;
          const name =
            profile.name || profile.given_name || profile.username || '';
          const enrichedProfile = {
            ...profile,
            name,
          };
          const userMap = await options.mapProfileToUser?.(enrichedProfile);
          return {
            user: {
              id: profile.sub,
              name: enrichedProfile.name,
              email: profile.email,
              image: profile.picture,
              emailVerified: profile.email_verified,
              ...userMap,
            },
            data: enrichedProfile,
          };
        } catch (error) {
          logger.error('Failed to decode ID token:', error);
        }
      if (token.accessToken)
        try {
          const { data: userInfo } = await betterFetch(userInfoEndpoint, {
            headers: { Authorization: `Bearer ${token.accessToken}` },
          });
          if (userInfo) {
            const userMap = await options.mapProfileToUser?.(userInfo);
            return {
              user: {
                id: userInfo.sub,
                name:
                  userInfo.name ||
                  userInfo.given_name ||
                  userInfo.username ||
                  '',
                email: userInfo.email,
                image: userInfo.picture,
                emailVerified: userInfo.email_verified,
                ...userMap,
              },
              data: userInfo,
            };
          }
        } catch (error) {
          logger.error('Failed to fetch user info from Cognito:', error);
        }
      return null;
    },
    options,
  };
};
var getCognitoPublicKey = async (kid, region, userPoolId) => {
  const COGNITO_JWKS_URI = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;
  try {
    const { data } = await betterFetch(COGNITO_JWKS_URI);
    if (!data?.keys)
      throw new APIError('BAD_REQUEST', { message: 'Keys not found' });
    const jwk = data.keys.find((key) => key.kid === kid);
    if (!jwk) throw new Error(`JWK with kid ${kid} not found`);
    return await importJWK(jwk, jwk.alg);
  } catch (error) {
    logger.error('Failed to fetch Cognito public key:', error);
    throw error;
  }
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/discord.mjs
var discord = (options) => {
  const tokenEndpoint = 'https://discord.com/api/oauth2/token';
  return {
    id: 'discord',
    name: 'Discord',
    createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : ['identify', 'email'];
      if (scopes) _scopes.push(...scopes);
      if (options.scope) _scopes.push(...options.scope);
      const permissionsParam =
        _scopes.includes('bot') && options.permissions !== void 0
          ? `&permissions=${options.permissions}`
          : '';
      return new URL(
        `https://discord.com/api/oauth2/authorize?scope=${_scopes.join('+')}&response_type=code&client_id=${options.clientId}&redirect_uri=${encodeURIComponent(options.redirectURI || redirectURI)}&state=${state}&prompt=${options.prompt || 'none'}${permissionsParam}`
      );
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://discord.com/api/users/@me',
        { headers: { authorization: `Bearer ${token.accessToken}` } }
      );
      if (error) return null;
      if (profile.avatar === null)
        profile.image_url = `https://cdn.discordapp.com/embed/avatars/${profile.discriminator === '0' ? Number(BigInt(profile.id) >> BigInt(22)) % 6 : parseInt(profile.discriminator) % 5}.png`;
      else {
        const format = profile.avatar.startsWith('a_') ? 'gif' : 'png';
        profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
      }
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.id,
          name: profile.global_name || profile.username || '',
          email: profile.email,
          emailVerified: profile.verified,
          image: profile.image_url,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/dropbox.mjs
var dropbox = (options) => {
  const tokenEndpoint = 'https://api.dropboxapi.com/oauth2/token';
  return {
    id: 'dropbox',
    name: 'Dropbox',
    createAuthorizationURL: async ({
      state,
      scopes,
      codeVerifier,
      redirectURI,
    }) => {
      const _scopes = options.disableDefaultScope ? [] : ['account_info.read'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      const additionalParams = {};
      if (options.accessType)
        additionalParams.token_access_type = options.accessType;
      return await createAuthorizationURL({
        id: 'dropbox',
        options,
        authorizationEndpoint: 'https://www.dropbox.com/oauth2/authorize',
        scopes: _scopes,
        state,
        redirectURI,
        codeVerifier,
        additionalParams,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return await validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://api.dropboxapi.com/2/users/get_current_account',
        {
          method: 'POST',
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.account_id,
          name: profile.name?.display_name,
          email: profile.email,
          emailVerified: profile.email_verified || false,
          image: profile.profile_photo_url,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/facebook.mjs
var facebook = (options) => {
  return {
    id: 'facebook',
    name: 'Facebook',
    async createAuthorizationURL({ state, scopes, redirectURI, loginHint }) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['email', 'public_profile'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return await createAuthorizationURL({
        id: 'facebook',
        options,
        authorizationEndpoint: 'https://www.facebook.com/v24.0/dialog/oauth',
        scopes: _scopes,
        state,
        redirectURI,
        loginHint,
        additionalParams: options.configId
          ? { config_id: options.configId }
          : {},
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint: 'https://graph.facebook.com/v24.0/oauth/access_token',
      });
    },
    async verifyIdToken(token, nonce) {
      if (options.disableIdTokenSignIn) return false;
      if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
      if (token.split('.').length === 3)
        try {
          const { payload: jwtClaims } = await jwtVerify(
            token,
            createRemoteJWKSet(
              new URL(
                'https://limited.facebook.com/.well-known/oauth/openid/jwks/'
              )
            ),
            {
              algorithms: ['RS256'],
              audience: options.clientId,
              issuer: 'https://www.facebook.com',
            }
          );
          if (nonce && jwtClaims.nonce !== nonce) return false;
          return !!jwtClaims;
        } catch {
          return false;
        }
      return true;
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint:
              'https://graph.facebook.com/v24.0/oauth/access_token',
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      if (token.idToken && token.idToken.split('.').length === 3) {
        const profile = decodeJwt(token.idToken);
        const user = {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          picture: {
            data: {
              url: profile.picture,
              height: 100,
              width: 100,
              is_silhouette: false,
            },
          },
        };
        const userMap = await options.mapProfileToUser?.({
          ...user,
          email_verified: false,
        });
        return {
          user: {
            ...user,
            emailVerified: false,
            ...userMap,
          },
          data: profile,
        };
      }
      const { data: profile, error } = await betterFetch(
        'https://graph.facebook.com/me?fields=' +
          ['id', 'name', 'email', 'picture', ...(options?.fields || [])].join(
            ','
          ),
        {
          auth: {
            type: 'Bearer',
            token: token.accessToken,
          },
        }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture.data.url,
          emailVerified: profile.email_verified,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/figma.mjs
var figma = (options) => {
  const tokenEndpoint = 'https://api.figma.com/v1/oauth/token';
  return {
    id: 'figma',
    name: 'Figma',
    async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      if (!options.clientId || !options.clientSecret) {
        logger.error(
          'Client Id and Client Secret are required for Figma. Make sure to provide them in the options.'
        );
        throw new BetterAuthError('CLIENT_ID_AND_SECRET_REQUIRED');
      }
      if (!codeVerifier)
        throw new BetterAuthError('codeVerifier is required for Figma');
      const _scopes = options.disableDefaultScope ? [] : ['current_user:read'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return await createAuthorizationURL({
        id: 'figma',
        options,
        authorizationEndpoint: 'https://www.figma.com/oauth',
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
        authentication: 'basic',
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
            authentication: 'basic',
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      try {
        const { data: profile } = await betterFetch(
          'https://api.figma.com/v1/me',
          { headers: { Authorization: `Bearer ${token.accessToken}` } }
        );
        if (!profile) {
          logger.error('Failed to fetch user from Figma');
          return null;
        }
        const userMap = await options.mapProfileToUser?.(profile);
        return {
          user: {
            id: profile.id,
            name: profile.handle,
            email: profile.email,
            image: profile.img_url,
            emailVerified: false,
            ...userMap,
          },
          data: profile,
        };
      } catch (error) {
        logger.error('Failed to fetch user info from Figma:', error);
        return null;
      }
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/github.mjs
var github = (options) => {
  const tokenEndpoint = 'https://github.com/login/oauth/access_token';
  return {
    id: 'github',
    name: 'GitHub',
    createAuthorizationURL({
      state,
      scopes,
      loginHint,
      codeVerifier,
      redirectURI,
    }) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['read:user', 'user:email'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'github',
        options,
        authorizationEndpoint: 'https://github.com/login/oauth/authorize',
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
        loginHint,
        prompt: options.prompt,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      const { body, headers: requestHeaders } = createAuthorizationCodeRequest({
        code,
        codeVerifier,
        redirectURI,
        options,
      });
      const { data, error } = await betterFetch(tokenEndpoint, {
        method: 'POST',
        body,
        headers: requestHeaders,
      });
      if (error) {
        logger.error('GitHub OAuth token exchange failed:', error);
        return null;
      }
      if ('error' in data) {
        logger.error('GitHub OAuth token exchange failed:', data);
        return null;
      }
      return getOAuth2Tokens(data);
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://api.github.com/user',
        {
          headers: {
            'User-Agent': 'better-auth',
            authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
      if (error) return null;
      const { data: emails } = await betterFetch(
        'https://api.github.com/user/emails',
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
            'User-Agent': 'better-auth',
          },
        }
      );
      if (!profile.email && emails)
        profile.email = (emails.find((e) => e.primary) ?? emails[0])?.email;
      const emailVerified =
        emails?.find((e) => e.email === profile.email)?.verified ?? false;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.id,
          name: profile.name || profile.login || '',
          email: profile.email,
          image: profile.avatar_url,
          emailVerified,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/gitlab.mjs
var cleanDoubleSlashes = (input = '') => {
  return input
    .split('://')
    .map((str) => str.replace(/\/{2,}/g, '/'))
    .join('://');
};
var issuerToEndpoints = (issuer) => {
  const baseUrl = issuer || 'https://gitlab.com';
  return {
    authorizationEndpoint: cleanDoubleSlashes(`${baseUrl}/oauth/authorize`),
    tokenEndpoint: cleanDoubleSlashes(`${baseUrl}/oauth/token`),
    userinfoEndpoint: cleanDoubleSlashes(`${baseUrl}/api/v4/user`),
  };
};
var gitlab = (options) => {
  const { authorizationEndpoint, tokenEndpoint, userinfoEndpoint } =
    issuerToEndpoints(options.issuer);
  const issuerId = 'gitlab';
  return {
    id: issuerId,
    name: 'Gitlab',
    createAuthorizationURL: async ({
      state,
      scopes,
      codeVerifier,
      loginHint,
      redirectURI,
    }) => {
      const _scopes = options.disableDefaultScope ? [] : ['read_user'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return await createAuthorizationURL({
        id: issuerId,
        options,
        authorizationEndpoint,
        scopes: _scopes,
        state,
        redirectURI,
        codeVerifier,
        loginHint,
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI, codeVerifier }) => {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        codeVerifier,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(userinfoEndpoint, {
        headers: { authorization: `Bearer ${token.accessToken}` },
      });
      if (error || profile.state !== 'active' || profile.locked) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.id,
          name: profile.name ?? profile.username ?? '',
          email: profile.email,
          image: profile.avatar_url,
          emailVerified: profile.email_verified ?? false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/google.mjs
var google = (options) => {
  return {
    id: 'google',
    name: 'Google',
    async createAuthorizationURL({
      state,
      scopes,
      codeVerifier,
      redirectURI,
      loginHint,
      display,
    }) {
      if (!options.clientId || !options.clientSecret) {
        logger.error(
          'Client Id and Client Secret is required for Google. Make sure to provide them in the options.'
        );
        throw new BetterAuthError('CLIENT_ID_AND_SECRET_REQUIRED');
      }
      if (!codeVerifier)
        throw new BetterAuthError('codeVerifier is required for Google');
      const _scopes = options.disableDefaultScope
        ? []
        : ['email', 'profile', 'openid'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return await createAuthorizationURL({
        id: 'google',
        options,
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
        prompt: options.prompt,
        accessType: options.accessType,
        display: display || options.display,
        loginHint,
        hd: options.hd,
        additionalParams: { include_granted_scopes: 'true' },
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint: 'https://oauth2.googleapis.com/token',
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint: 'https://oauth2.googleapis.com/token',
          });
        },
    async verifyIdToken(token, nonce) {
      if (options.disableIdTokenSignIn) return false;
      if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
      try {
        const { kid, alg: jwtAlg } = decodeProtectedHeader(token);
        if (!kid || !jwtAlg) return false;
        const { payload: jwtClaims } = await jwtVerify(
          token,
          await getGooglePublicKey(kid),
          {
            algorithms: [jwtAlg],
            issuer: ['https://accounts.google.com', 'accounts.google.com'],
            audience: options.clientId,
            maxTokenAge: '1h',
          }
        );
        if (nonce && jwtClaims.nonce !== nonce) return false;
        return true;
      } catch {
        return false;
      }
    },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      if (!token.idToken) return null;
      const user = decodeJwt(token.idToken);
      const userMap = await options.mapProfileToUser?.(user);
      return {
        user: {
          id: user.sub,
          name: user.name,
          email: user.email,
          image: user.picture,
          emailVerified: user.email_verified,
          ...userMap,
        },
        data: user,
      };
    },
    options,
  };
};
var getGooglePublicKey = async (kid) => {
  const { data } = await betterFetch(
    'https://www.googleapis.com/oauth2/v3/certs'
  );
  if (!data?.keys)
    throw new APIError('BAD_REQUEST', { message: 'Keys not found' });
  const jwk = data.keys.find((key) => key.kid === kid);
  if (!jwk) throw new Error(`JWK with kid ${kid} not found`);
  return await importJWK(jwk, jwk.alg);
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/huggingface.mjs
var huggingface = (options) => {
  const tokenEndpoint = 'https://huggingface.co/oauth/token';
  return {
    id: 'huggingface',
    name: 'Hugging Face',
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['openid', 'profile', 'email'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'huggingface',
        options,
        authorizationEndpoint: 'https://huggingface.co/oauth/authorize',
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://huggingface.co/oauth/userinfo',
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.sub,
          name: profile.name || profile.preferred_username || '',
          email: profile.email,
          image: profile.picture,
          emailVerified: profile.email_verified ?? false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/kakao.mjs
var kakao = (options) => {
  const tokenEndpoint = 'https://kauth.kakao.com/oauth/token';
  return {
    id: 'kakao',
    name: 'Kakao',
    createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['account_email', 'profile_image', 'profile_nickname'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'kakao',
        options,
        authorizationEndpoint: 'https://kauth.kakao.com/oauth/authorize',
        scopes: _scopes,
        state,
        redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://kapi.kakao.com/v2/user/me',
        { headers: { Authorization: `Bearer ${token.accessToken}` } }
      );
      if (error || !profile) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      const account = profile.kakao_account || {};
      const kakaoProfile = account.profile || {};
      return {
        user: {
          id: String(profile.id),
          name: kakaoProfile.nickname || account.name || '',
          email: account.email,
          image:
            kakaoProfile.profile_image_url || kakaoProfile.thumbnail_image_url,
          emailVerified:
            !!account.is_email_valid && !!account.is_email_verified,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/kick.mjs
var kick = (options) => {
  return {
    id: 'kick',
    name: 'Kick',
    createAuthorizationURL({ state, scopes, redirectURI, codeVerifier }) {
      const _scopes = options.disableDefaultScope ? [] : ['user:read'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'kick',
        redirectURI,
        options,
        authorizationEndpoint: 'https://id.kick.com/oauth/authorize',
        scopes: _scopes,
        codeVerifier,
        state,
      });
    },
    async validateAuthorizationCode({ code, redirectURI, codeVerifier }) {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint: 'https://id.kick.com/oauth/token',
        codeVerifier,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint: 'https://id.kick.com/oauth/token',
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data, error } = await betterFetch(
        'https://api.kick.com/public/v1/users',
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      );
      if (error) return null;
      const profile = data.data[0];
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.user_id,
          name: profile.name,
          email: profile.email,
          image: profile.profile_picture,
          emailVerified: false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/line.mjs
/**
 * LINE Login v2.1
 * - Authorization endpoint: https://access.line.me/oauth2/v2.1/authorize
 * - Token endpoint: https://api.line.me/oauth2/v2.1/token
 * - UserInfo endpoint: https://api.line.me/oauth2/v2.1/userinfo
 * - Verify ID token: https://api.line.me/oauth2/v2.1/verify
 *
 * Docs: https://developers.line.biz/en/reference/line-login/#issue-access-token
 */
var line = (options) => {
  const authorizationEndpoint = 'https://access.line.me/oauth2/v2.1/authorize';
  const tokenEndpoint = 'https://api.line.me/oauth2/v2.1/token';
  const userInfoEndpoint = 'https://api.line.me/oauth2/v2.1/userinfo';
  const verifyIdTokenEndpoint = 'https://api.line.me/oauth2/v2.1/verify';
  return {
    id: 'line',
    name: 'LINE',
    async createAuthorizationURL({
      state,
      scopes,
      codeVerifier,
      redirectURI,
      loginHint,
    }) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['openid', 'profile', 'email'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return await createAuthorizationURL({
        id: 'line',
        options,
        authorizationEndpoint,
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
        loginHint,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async verifyIdToken(token, nonce) {
      if (options.disableIdTokenSignIn) return false;
      if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
      const body = new URLSearchParams();
      body.set('id_token', token);
      body.set('client_id', options.clientId);
      if (nonce) body.set('nonce', nonce);
      const { data, error } = await betterFetch(verifyIdTokenEndpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (error || !data) return false;
      if (data.aud !== options.clientId) return false;
      if (data.nonce && data.nonce !== nonce) return false;
      return true;
    },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      let profile = null;
      if (token.idToken)
        try {
          profile = decodeJwt(token.idToken);
        } catch {}
      if (!profile) {
        const { data } = await betterFetch(userInfoEndpoint, {
          headers: { authorization: `Bearer ${token.accessToken}` },
        });
        profile = data || null;
      }
      if (!profile) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      const id = profile.sub || profile.userId;
      const name = profile.name || profile.displayName || '';
      const image = profile.picture || profile.pictureUrl || void 0;
      return {
        user: {
          id,
          name,
          email: profile.email,
          image,
          emailVerified: false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/linear.mjs
var linear = (options) => {
  const tokenEndpoint = 'https://api.linear.app/oauth/token';
  return {
    id: 'linear',
    name: 'Linear',
    createAuthorizationURL({ state, scopes, loginHint, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : ['read'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'linear',
        options,
        authorizationEndpoint: 'https://linear.app/oauth/authorize',
        scopes: _scopes,
        state,
        redirectURI,
        loginHint,
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://api.linear.app/graphql',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.accessToken}`,
          },
          body: JSON.stringify({
            query: `
							query {
								viewer {
									id
									name
									email
									avatarUrl
									active
									createdAt
									updatedAt
								}
							}
						`,
          }),
        }
      );
      if (error || !profile?.data?.viewer) return null;
      const userData = profile.data.viewer;
      const userMap = await options.mapProfileToUser?.(userData);
      return {
        user: {
          id: profile.data.viewer.id,
          name: profile.data.viewer.name,
          email: profile.data.viewer.email,
          image: profile.data.viewer.avatarUrl,
          emailVerified: false,
          ...userMap,
        },
        data: userData,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/linkedin.mjs
var linkedin = (options) => {
  const authorizationEndpoint =
    'https://www.linkedin.com/oauth/v2/authorization';
  const tokenEndpoint = 'https://www.linkedin.com/oauth/v2/accessToken';
  return {
    id: 'linkedin',
    name: 'Linkedin',
    createAuthorizationURL: async ({
      state,
      scopes,
      redirectURI,
      loginHint,
    }) => {
      const _scopes = options.disableDefaultScope
        ? []
        : ['profile', 'email', 'openid'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return await createAuthorizationURL({
        id: 'linkedin',
        options,
        authorizationEndpoint,
        scopes: _scopes,
        state,
        loginHint,
        redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return await validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://api.linkedin.com/v2/userinfo',
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          emailVerified: profile.email_verified || false,
          image: profile.picture,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/microsoft-entra-id.mjs
var microsoft = (options) => {
  const tenant = options.tenantId || 'common';
  const authority = options.authority || 'https://login.microsoftonline.com';
  const authorizationEndpoint = `${authority}/${tenant}/oauth2/v2.0/authorize`;
  const tokenEndpoint = `${authority}/${tenant}/oauth2/v2.0/token`;
  return {
    id: 'microsoft',
    name: 'Microsoft EntraID',
    createAuthorizationURL(data) {
      const scopes = options.disableDefaultScope
        ? []
        : ['openid', 'profile', 'email', 'User.Read', 'offline_access'];
      if (options.scope) scopes.push(...options.scope);
      if (data.scopes) scopes.push(...data.scopes);
      return createAuthorizationURL({
        id: 'microsoft',
        options,
        authorizationEndpoint,
        state: data.state,
        codeVerifier: data.codeVerifier,
        scopes,
        redirectURI: data.redirectURI,
        prompt: options.prompt,
        loginHint: data.loginHint,
      });
    },
    validateAuthorizationCode({ code, codeVerifier, redirectURI }) {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    async verifyIdToken(token, nonce) {
      if (options.disableIdTokenSignIn) return false;
      if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
      try {
        const { kid, alg: jwtAlg } = decodeProtectedHeader(token);
        if (!kid || !jwtAlg) return false;
        const publicKey = await getMicrosoftPublicKey(kid, tenant, authority);
        const verifyOptions = {
          algorithms: [jwtAlg],
          audience: options.clientId,
          maxTokenAge: '1h',
        };
        /**
         * Issuer varies per user's tenant for multi-tenant endpoints, so only validate for specific tenants.
         * @see https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols#endpoints
         */
        if (
          tenant !== 'common' &&
          tenant !== 'organizations' &&
          tenant !== 'consumers'
        )
          verifyOptions.issuer = `${authority}/${tenant}/v2.0`;
        const { payload: jwtClaims } = await jwtVerify(
          token,
          publicKey,
          verifyOptions
        );
        if (nonce && jwtClaims.nonce !== nonce) return false;
        return true;
      } catch (error) {
        logger.error('Failed to verify ID token:', error);
        return false;
      }
    },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      if (!token.idToken) return null;
      const user = decodeJwt(token.idToken);
      const profilePhotoSize = options.profilePhotoSize || 48;
      await betterFetch(
        `https://graph.microsoft.com/v1.0/me/photos/${profilePhotoSize}x${profilePhotoSize}/$value`,
        {
          headers: { Authorization: `Bearer ${token.accessToken}` },
          async onResponse(context) {
            if (options.disableProfilePhoto || !context.response.ok) return;
            try {
              const pictureBuffer = await context.response
                .clone()
                .arrayBuffer();
              user.picture = `data:image/jpeg;base64, ${base64.encode(pictureBuffer)}`;
            } catch (e) {
              logger.error(
                e && typeof e === 'object' && 'name' in e ? e.name : '',
                e
              );
            }
          },
        }
      );
      const userMap = await options.mapProfileToUser?.(user);
      const emailVerified =
        user.email_verified !== void 0
          ? user.email_verified
          : user.email &&
              (user.verified_primary_email?.includes(user.email) ||
                user.verified_secondary_email?.includes(user.email))
            ? true
            : false;
      return {
        user: {
          id: user.sub,
          name: user.name,
          email: user.email,
          image: user.picture,
          emailVerified,
          ...userMap,
        },
        data: user,
      };
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          const scopes = options.disableDefaultScope
            ? []
            : ['openid', 'profile', 'email', 'User.Read', 'offline_access'];
          if (options.scope) scopes.push(...options.scope);
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientSecret: options.clientSecret,
            },
            extraParams: { scope: scopes.join(' ') },
            tokenEndpoint,
          });
        },
    options,
  };
};
var getMicrosoftPublicKey = async (kid, tenant, authority) => {
  const { data } = await betterFetch(
    `${authority}/${tenant}/discovery/v2.0/keys`
  );
  if (!data?.keys)
    throw new APIError('BAD_REQUEST', { message: 'Keys not found' });
  const jwk = data.keys.find((key) => key.kid === kid);
  if (!jwk) throw new Error(`JWK with kid ${kid} not found`);
  return await importJWK(jwk, jwk.alg);
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/naver.mjs
var naver = (options) => {
  const tokenEndpoint = 'https://nid.naver.com/oauth2.0/token';
  return {
    id: 'naver',
    name: 'Naver',
    createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : ['profile', 'email'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'naver',
        options,
        authorizationEndpoint: 'https://nid.naver.com/oauth2.0/authorize',
        scopes: _scopes,
        state,
        redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://openapi.naver.com/v1/nid/me',
        { headers: { Authorization: `Bearer ${token.accessToken}` } }
      );
      if (error || !profile || profile.resultcode !== '00') return null;
      const userMap = await options.mapProfileToUser?.(profile);
      const res = profile.response || {};
      return {
        user: {
          id: res.id,
          name: res.name || res.nickname || '',
          email: res.email,
          image: res.profile_image,
          emailVerified: false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/notion.mjs
var notion = (options) => {
  const tokenEndpoint = 'https://api.notion.com/v1/oauth/token';
  return {
    id: 'notion',
    name: 'Notion',
    createAuthorizationURL({ state, scopes, loginHint, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : [];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'notion',
        options,
        authorizationEndpoint: 'https://api.notion.com/v1/oauth/authorize',
        scopes: _scopes,
        state,
        redirectURI,
        loginHint,
        additionalParams: { owner: 'user' },
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint,
        authentication: 'basic',
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://api.notion.com/v1/users/me',
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
            'Notion-Version': '2022-06-28',
          },
        }
      );
      if (error || !profile) return null;
      const userProfile = profile.bot?.owner?.user;
      if (!userProfile) return null;
      const userMap = await options.mapProfileToUser?.(userProfile);
      return {
        user: {
          id: userProfile.id,
          name: userProfile.name || '',
          email: userProfile.person?.email || null,
          image: userProfile.avatar_url,
          emailVerified: false,
          ...userMap,
        },
        data: userProfile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/paybin.mjs
var paybin = (options) => {
  const issuer = options.issuer || 'https://idp.paybin.io';
  const authorizationEndpoint = `${issuer}/oauth2/authorize`;
  const tokenEndpoint = `${issuer}/oauth2/token`;
  return {
    id: 'paybin',
    name: 'Paybin',
    async createAuthorizationURL({
      state,
      scopes,
      codeVerifier,
      redirectURI,
      loginHint,
    }) {
      if (!options.clientId || !options.clientSecret) {
        logger.error(
          'Client Id and Client Secret is required for Paybin. Make sure to provide them in the options.'
        );
        throw new BetterAuthError('CLIENT_ID_AND_SECRET_REQUIRED');
      }
      if (!codeVerifier)
        throw new BetterAuthError('codeVerifier is required for Paybin');
      const _scopes = options.disableDefaultScope
        ? []
        : ['openid', 'email', 'profile'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return await createAuthorizationURL({
        id: 'paybin',
        options,
        authorizationEndpoint,
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
        prompt: options.prompt,
        loginHint,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      if (!token.idToken) return null;
      const user = decodeJwt(token.idToken);
      const userMap = await options.mapProfileToUser?.(user);
      return {
        user: {
          id: user.sub,
          name: user.name || user.preferred_username || '',
          email: user.email,
          image: user.picture,
          emailVerified: user.email_verified || false,
          ...userMap,
        },
        data: user,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/paypal.mjs
var paypal = (options) => {
  const isSandbox = (options.environment || 'sandbox') === 'sandbox';
  const authorizationEndpoint = isSandbox
    ? 'https://www.sandbox.paypal.com/signin/authorize'
    : 'https://www.paypal.com/signin/authorize';
  const tokenEndpoint = isSandbox
    ? 'https://api-m.sandbox.paypal.com/v1/oauth2/token'
    : 'https://api-m.paypal.com/v1/oauth2/token';
  const userInfoEndpoint = isSandbox
    ? 'https://api-m.sandbox.paypal.com/v1/identity/oauth2/userinfo'
    : 'https://api-m.paypal.com/v1/identity/oauth2/userinfo';
  return {
    id: 'paypal',
    name: 'PayPal',
    async createAuthorizationURL({ state, codeVerifier, redirectURI }) {
      if (!options.clientId || !options.clientSecret) {
        logger.error(
          'Client Id and Client Secret is required for PayPal. Make sure to provide them in the options.'
        );
        throw new BetterAuthError('CLIENT_ID_AND_SECRET_REQUIRED');
      }
      return await createAuthorizationURL({
        id: 'paypal',
        options,
        authorizationEndpoint,
        scopes: [],
        state,
        codeVerifier,
        redirectURI,
        prompt: options.prompt,
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      /**
       * PayPal requires Basic Auth for token exchange
       **/
      const credentials = base64.encode(
        `${options.clientId}:${options.clientSecret}`
      );
      try {
        const response = await betterFetch(tokenEndpoint, {
          method: 'POST',
          headers: {
            Authorization: `Basic ${credentials}`,
            Accept: 'application/json',
            'Accept-Language': 'en_US',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectURI,
          }).toString(),
        });
        if (!response.data)
          throw new BetterAuthError('FAILED_TO_GET_ACCESS_TOKEN');
        const data = response.data;
        return {
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          accessTokenExpiresAt: data.expires_in
            ? new Date(Date.now() + data.expires_in * 1e3)
            : void 0,
          idToken: data.id_token,
        };
      } catch (error) {
        logger.error('PayPal token exchange failed:', error);
        throw new BetterAuthError('FAILED_TO_GET_ACCESS_TOKEN');
      }
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          const credentials = base64.encode(
            `${options.clientId}:${options.clientSecret}`
          );
          try {
            const response = await betterFetch(tokenEndpoint, {
              method: 'POST',
              headers: {
                Authorization: `Basic ${credentials}`,
                Accept: 'application/json',
                'Accept-Language': 'en_US',
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
              }).toString(),
            });
            if (!response.data)
              throw new BetterAuthError('FAILED_TO_REFRESH_ACCESS_TOKEN');
            const data = response.data;
            return {
              accessToken: data.access_token,
              refreshToken: data.refresh_token,
              accessTokenExpiresAt: data.expires_in
                ? new Date(Date.now() + data.expires_in * 1e3)
                : void 0,
            };
          } catch (error) {
            logger.error('PayPal token refresh failed:', error);
            throw new BetterAuthError('FAILED_TO_REFRESH_ACCESS_TOKEN');
          }
        },
    async verifyIdToken(token, nonce) {
      if (options.disableIdTokenSignIn) return false;
      if (options.verifyIdToken) return options.verifyIdToken(token, nonce);
      try {
        return !!decodeJwt(token).sub;
      } catch (error) {
        logger.error('Failed to verify PayPal ID token:', error);
        return false;
      }
    },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      if (!token.accessToken) {
        logger.error('Access token is required to fetch PayPal user info');
        return null;
      }
      try {
        const response = await betterFetch(
          `${userInfoEndpoint}?schema=paypalv1.1`,
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
              Accept: 'application/json',
            },
          }
        );
        if (!response.data) {
          logger.error('Failed to fetch user info from PayPal');
          return null;
        }
        const userInfo = response.data;
        const userMap = await options.mapProfileToUser?.(userInfo);
        return {
          user: {
            id: userInfo.user_id,
            name: userInfo.name,
            email: userInfo.email,
            image: userInfo.picture,
            emailVerified: userInfo.email_verified,
            ...userMap,
          },
          data: userInfo,
        };
      } catch (error) {
        logger.error('Failed to fetch user info from PayPal:', error);
        return null;
      }
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/polar.mjs
var polar = (options) => {
  const tokenEndpoint = 'https://api.polar.sh/v1/oauth2/token';
  return {
    id: 'polar',
    name: 'Polar',
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['openid', 'profile', 'email'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'polar',
        options,
        authorizationEndpoint: 'https://polar.sh/oauth2/authorize',
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
        prompt: options.prompt,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://api.polar.sh/v1/oauth2/userinfo',
        { headers: { Authorization: `Bearer ${token.accessToken}` } }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.id,
          name: profile.public_name || profile.username || '',
          email: profile.email,
          image: profile.avatar_url,
          emailVerified: profile.email_verified ?? false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/railway.mjs
var authorizationEndpoint = 'https://backboard.railway.com/oauth/auth';
var tokenEndpoint = 'https://backboard.railway.com/oauth/token';
var userinfoEndpoint = 'https://backboard.railway.com/oauth/me';
var railway = (options) => {
  return {
    id: 'railway',
    name: 'Railway',
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['openid', 'email', 'profile'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'railway',
        options,
        authorizationEndpoint,
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
        authentication: 'basic',
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
            authentication: 'basic',
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(userinfoEndpoint, {
        headers: { authorization: `Bearer ${token.accessToken}` },
      });
      if (error || !profile) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          emailVerified: false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/reddit.mjs
var reddit = (options) => {
  return {
    id: 'reddit',
    name: 'Reddit',
    createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : ['identity'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'reddit',
        options,
        authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize',
        scopes: _scopes,
        state,
        redirectURI,
        duration: options.duration,
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: options.redirectURI || redirectURI,
      });
      const { data, error } = await betterFetch(
        'https://www.reddit.com/api/v1/access_token',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            accept: 'text/plain',
            'user-agent': 'better-auth',
            Authorization: `Basic ${base64.encode(`${options.clientId}:${options.clientSecret}`)}`,
          },
          body: body.toString(),
        }
      );
      if (error) throw error;
      return getOAuth2Tokens(data);
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            authentication: 'basic',
            tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://oauth.reddit.com/api/v1/me',
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
            'User-Agent': 'better-auth',
          },
        }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.id,
          name: profile.name,
          email: profile.oauth_client_id,
          emailVerified: profile.has_verified_email,
          image: profile.icon_img?.split('?')[0],
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/roblox.mjs
var roblox = (options) => {
  const tokenEndpoint = 'https://apis.roblox.com/oauth/v1/token';
  return {
    id: 'roblox',
    name: 'Roblox',
    createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : ['openid', 'profile'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return new URL(
        `https://apis.roblox.com/oauth/v1/authorize?scope=${_scopes.join('+')}&response_type=code&client_id=${options.clientId}&redirect_uri=${encodeURIComponent(options.redirectURI || redirectURI)}&state=${state}&prompt=${options.prompt || 'select_account consent'}`
      );
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI: options.redirectURI || redirectURI,
        options,
        tokenEndpoint,
        authentication: 'post',
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://apis.roblox.com/oauth/v1/userinfo',
        { headers: { authorization: `Bearer ${token.accessToken}` } }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.sub,
          name: profile.nickname || profile.preferred_username || '',
          image: profile.picture,
          email: profile.preferred_username || null,
          emailVerified: false,
          ...userMap,
        },
        data: { ...profile },
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/salesforce.mjs
var salesforce = (options) => {
  const isSandbox = (options.environment ?? 'production') === 'sandbox';
  const authorizationEndpoint = options.loginUrl
    ? `https://${options.loginUrl}/services/oauth2/authorize`
    : isSandbox
      ? 'https://test.salesforce.com/services/oauth2/authorize'
      : 'https://login.salesforce.com/services/oauth2/authorize';
  const tokenEndpoint = options.loginUrl
    ? `https://${options.loginUrl}/services/oauth2/token`
    : isSandbox
      ? 'https://test.salesforce.com/services/oauth2/token'
      : 'https://login.salesforce.com/services/oauth2/token';
  const userInfoEndpoint = options.loginUrl
    ? `https://${options.loginUrl}/services/oauth2/userinfo`
    : isSandbox
      ? 'https://test.salesforce.com/services/oauth2/userinfo'
      : 'https://login.salesforce.com/services/oauth2/userinfo';
  return {
    id: 'salesforce',
    name: 'Salesforce',
    async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      if (!options.clientId || !options.clientSecret) {
        logger.error(
          'Client Id and Client Secret are required for Salesforce. Make sure to provide them in the options.'
        );
        throw new BetterAuthError('CLIENT_ID_AND_SECRET_REQUIRED');
      }
      if (!codeVerifier)
        throw new BetterAuthError('codeVerifier is required for Salesforce');
      const _scopes = options.disableDefaultScope
        ? []
        : ['openid', 'email', 'profile'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'salesforce',
        options,
        authorizationEndpoint,
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI: options.redirectURI || redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI: options.redirectURI || redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      try {
        const { data: user } = await betterFetch(userInfoEndpoint, {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        });
        if (!user) {
          logger.error('Failed to fetch user info from Salesforce');
          return null;
        }
        const userMap = await options.mapProfileToUser?.(user);
        return {
          user: {
            id: user.user_id,
            name: user.name,
            email: user.email,
            image: user.photos?.picture || user.photos?.thumbnail,
            emailVerified: user.email_verified ?? false,
            ...userMap,
          },
          data: user,
        };
      } catch (error) {
        logger.error('Failed to fetch user info from Salesforce:', error);
        return null;
      }
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/slack.mjs
var slack = (options) => {
  const tokenEndpoint = 'https://slack.com/api/openid.connect.token';
  return {
    id: 'slack',
    name: 'Slack',
    createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['openid', 'profile', 'email'];
      if (scopes) _scopes.push(...scopes);
      if (options.scope) _scopes.push(...options.scope);
      const url = new URL('https://slack.com/openid/connect/authorize');
      url.searchParams.set('scope', _scopes.join(' '));
      url.searchParams.set('response_type', 'code');
      url.searchParams.set('client_id', options.clientId);
      url.searchParams.set('redirect_uri', options.redirectURI || redirectURI);
      url.searchParams.set('state', state);
      return url;
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://slack.com/api/openid.connect.userInfo',
        { headers: { authorization: `Bearer ${token.accessToken}` } }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile['https://slack.com/user_id'],
          name: profile.name || '',
          email: profile.email,
          emailVerified: profile.email_verified,
          image: profile.picture || profile['https://slack.com/user_image_512'],
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/spotify.mjs
var spotify = (options) => {
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';
  return {
    id: 'spotify',
    name: 'Spotify',
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : ['user-read-email'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'spotify',
        options,
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://api.spotify.com/v1/me',
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.id,
          name: profile.display_name,
          email: profile.email,
          image: profile.images[0]?.url,
          emailVerified: false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/tiktok.mjs
var tiktok = (options) => {
  const tokenEndpoint = 'https://open.tiktokapis.com/v2/oauth/token/';
  return {
    id: 'tiktok',
    name: 'TikTok',
    createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : ['user.info.profile'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return new URL(
        `https://www.tiktok.com/v2/auth/authorize?scope=${_scopes.join(',')}&response_type=code&client_key=${options.clientKey}&redirect_uri=${encodeURIComponent(options.redirectURI || redirectURI)}&state=${state}`
      );
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI: options.redirectURI || redirectURI,
        options: {
          clientKey: options.clientKey,
          clientSecret: options.clientSecret,
        },
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: { clientSecret: options.clientSecret },
            tokenEndpoint,
            authentication: 'post',
            extraParams: { client_key: options.clientKey },
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        `https://open.tiktokapis.com/v2/user/info/?fields=${[
          'open_id',
          'avatar_large_url',
          'display_name',
          'username',
        ].join(',')}`,
        { headers: { authorization: `Bearer ${token.accessToken}` } }
      );
      if (error) return null;
      return {
        user: {
          email: profile.data.user.email || profile.data.user.username,
          id: profile.data.user.open_id,
          name:
            profile.data.user.display_name || profile.data.user.username || '',
          image: profile.data.user.avatar_large_url,
          emailVerified: false,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/twitch.mjs
var twitch = (options) => {
  const tokenEndpoint = 'https://id.twitch.tv/oauth2/token';
  return {
    id: 'twitch',
    name: 'Twitch',
    createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['user:read:email', 'openid'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'twitch',
        redirectURI,
        options,
        authorizationEndpoint: 'https://id.twitch.tv/oauth2/authorize',
        scopes: _scopes,
        state,
        claims: options.claims || [
          'email',
          'email_verified',
          'preferred_username',
          'picture',
        ],
      });
    },
    validateAuthorizationCode: async ({ code, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const idToken = token.idToken;
      if (!idToken) {
        logger.error('No idToken found in token');
        return null;
      }
      const profile = decodeJwt(idToken);
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.sub,
          name: profile.preferred_username,
          email: profile.email,
          image: profile.picture,
          emailVerified: profile.email_verified,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/twitter.mjs
var twitter = (options) => {
  const tokenEndpoint = 'https://api.x.com/2/oauth2/token';
  return {
    id: 'twitter',
    name: 'Twitter',
    createAuthorizationURL(data) {
      const _scopes = options.disableDefaultScope
        ? []
        : ['users.read', 'tweet.read', 'offline.access', 'users.email'];
      if (options.scope) _scopes.push(...options.scope);
      if (data.scopes) _scopes.push(...data.scopes);
      return createAuthorizationURL({
        id: 'twitter',
        options,
        authorizationEndpoint: 'https://x.com/i/oauth2/authorize',
        scopes: _scopes,
        state: data.state,
        codeVerifier: data.codeVerifier,
        redirectURI: data.redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        authentication: 'basic',
        redirectURI,
        options,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            authentication: 'basic',
            tokenEndpoint,
          });
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error: profileError } = await betterFetch(
        'https://api.x.com/2/users/me?user.fields=profile_image_url',
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      );
      if (profileError) return null;
      const { data: emailData, error: emailError } = await betterFetch(
        'https://api.x.com/2/users/me?user.fields=confirmed_email',
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      );
      let emailVerified = false;
      if (!emailError && emailData?.data?.confirmed_email) {
        profile.data.email = emailData.data.confirmed_email;
        emailVerified = true;
      }
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.data.id,
          name: profile.data.name,
          email: profile.data.email || profile.data.username || null,
          image: profile.data.profile_image_url,
          emailVerified,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/vercel.mjs
var vercel = (options) => {
  return {
    id: 'vercel',
    name: 'Vercel',
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      if (!codeVerifier)
        throw new BetterAuthError('codeVerifier is required for Vercel');
      let _scopes = void 0;
      if (options.scope !== void 0 || scopes !== void 0) {
        _scopes = [];
        if (options.scope) _scopes.push(...options.scope);
        if (scopes) _scopes.push(...scopes);
      }
      return createAuthorizationURL({
        id: 'vercel',
        options,
        authorizationEndpoint: 'https://vercel.com/oauth/authorize',
        scopes: _scopes,
        state,
        codeVerifier,
        redirectURI,
      });
    },
    validateAuthorizationCode: async ({ code, codeVerifier, redirectURI }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI,
        options,
        tokenEndpoint: 'https://api.vercel.com/login/oauth/token',
      });
    },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://api.vercel.com/login/oauth/userinfo',
        { headers: { Authorization: `Bearer ${token.accessToken}` } }
      );
      if (error || !profile) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.sub,
          name: profile.name ?? profile.preferred_username ?? '',
          email: profile.email,
          image: profile.picture,
          emailVerified: profile.email_verified ?? false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/vk.mjs
var vk = (options) => {
  const tokenEndpoint = 'https://id.vk.com/oauth2/auth';
  return {
    id: 'vk',
    name: 'VK',
    async createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : ['email', 'phone'];
      if (options.scope) _scopes.push(...options.scope);
      if (scopes) _scopes.push(...scopes);
      return createAuthorizationURL({
        id: 'vk',
        options,
        authorizationEndpoint: 'https://id.vk.com/authorize',
        scopes: _scopes,
        state,
        redirectURI,
        codeVerifier,
      });
    },
    validateAuthorizationCode: async ({
      code,
      codeVerifier,
      redirectURI,
      deviceId,
    }) => {
      return validateAuthorizationCode({
        code,
        codeVerifier,
        redirectURI: options.redirectURI || redirectURI,
        options,
        deviceId,
        tokenEndpoint,
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          return refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint,
          });
        },
    async getUserInfo(data) {
      if (options.getUserInfo) return options.getUserInfo(data);
      if (!data.accessToken) return null;
      const { data: profile, error } = await betterFetch(
        'https://id.vk.com/oauth2/user_info',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            access_token: data.accessToken,
            client_id: options.clientId,
          }).toString(),
        }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      if (!profile.user.email && !userMap?.email) return null;
      return {
        user: {
          id: profile.user.user_id,
          first_name: profile.user.first_name,
          last_name: profile.user.last_name,
          email: profile.user.email,
          image: profile.user.avatar,
          emailVerified: false,
          birthday: profile.user.birthday,
          sex: profile.user.sex,
          name: `${profile.user.first_name} ${profile.user.last_name}`,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/wechat.mjs
var wechat = (options) => {
  return {
    id: 'wechat',
    name: 'WeChat',
    createAuthorizationURL({ state, scopes, redirectURI }) {
      const _scopes = options.disableDefaultScope ? [] : ['snsapi_login'];
      options.scope && _scopes.push(...options.scope);
      scopes && _scopes.push(...scopes);
      const url = new URL('https://open.weixin.qq.com/connect/qrconnect');
      url.searchParams.set('scope', _scopes.join(','));
      url.searchParams.set('response_type', 'code');
      url.searchParams.set('appid', options.clientId);
      url.searchParams.set('redirect_uri', options.redirectURI || redirectURI);
      url.searchParams.set('state', state);
      url.searchParams.set('lang', options.lang || 'cn');
      url.hash = 'wechat_redirect';
      return url;
    },
    validateAuthorizationCode: async ({ code }) => {
      const { data: tokenData, error } = await betterFetch(
        'https://api.weixin.qq.com/sns/oauth2/access_token?' +
          new URLSearchParams({
            appid: options.clientId,
            secret: options.clientSecret,
            code,
            grant_type: 'authorization_code',
          }).toString(),
        { method: 'GET' }
      );
      if (error || !tokenData || tokenData.errcode)
        throw new Error(
          `Failed to validate authorization code: ${tokenData?.errmsg || error?.message || 'Unknown error'}`
        );
      return {
        tokenType: 'Bearer',
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token,
        accessTokenExpiresAt: new Date(Date.now() + tokenData.expires_in * 1e3),
        scopes: tokenData.scope.split(','),
        openid: tokenData.openid,
        unionid: tokenData.unionid,
      };
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) => {
          const { data: tokenData, error } = await betterFetch(
            'https://api.weixin.qq.com/sns/oauth2/refresh_token?' +
              new URLSearchParams({
                appid: options.clientId,
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
              }).toString(),
            { method: 'GET' }
          );
          if (error || !tokenData || tokenData.errcode)
            throw new Error(
              `Failed to refresh access token: ${tokenData?.errmsg || error?.message || 'Unknown error'}`
            );
          return {
            tokenType: 'Bearer',
            accessToken: tokenData.access_token,
            refreshToken: tokenData.refresh_token,
            accessTokenExpiresAt: new Date(
              Date.now() + tokenData.expires_in * 1e3
            ),
            scopes: tokenData.scope.split(','),
          };
        },
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const openid = token.openid;
      if (!openid) return null;
      const { data: profile, error } = await betterFetch(
        'https://api.weixin.qq.com/sns/userinfo?' +
          new URLSearchParams({
            access_token: token.accessToken || '',
            openid,
            lang: 'zh_CN',
          }).toString(),
        { method: 'GET' }
      );
      if (error || !profile || profile.errcode) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.unionid || profile.openid || openid,
          name: profile.nickname,
          email: profile.email || null,
          image: profile.headimgurl,
          emailVerified: false,
          ...userMap,
        },
        data: profile,
      };
    },
    options,
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/zoom.mjs
var zoom = (userOptions) => {
  const options = {
    pkce: true,
    ...userOptions,
  };
  return {
    id: 'zoom',
    name: 'Zoom',
    createAuthorizationURL: async ({ state, redirectURI, codeVerifier }) => {
      const params = new URLSearchParams({
        response_type: 'code',
        redirect_uri: options.redirectURI ? options.redirectURI : redirectURI,
        client_id: options.clientId,
        state,
      });
      if (options.pkce) {
        const codeChallenge = await generateCodeChallenge(codeVerifier);
        params.set('code_challenge_method', 'S256');
        params.set('code_challenge', codeChallenge);
      }
      const url = new URL('https://zoom.us/oauth/authorize');
      url.search = params.toString();
      return url;
    },
    validateAuthorizationCode: async ({ code, redirectURI, codeVerifier }) => {
      return validateAuthorizationCode({
        code,
        redirectURI: options.redirectURI || redirectURI,
        codeVerifier,
        options,
        tokenEndpoint: 'https://zoom.us/oauth/token',
        authentication: 'post',
      });
    },
    refreshAccessToken: options.refreshAccessToken
      ? options.refreshAccessToken
      : async (refreshToken) =>
          refreshAccessToken({
            refreshToken,
            options: {
              clientId: options.clientId,
              clientKey: options.clientKey,
              clientSecret: options.clientSecret,
            },
            tokenEndpoint: 'https://zoom.us/oauth/token',
          }),
    async getUserInfo(token) {
      if (options.getUserInfo) return options.getUserInfo(token);
      const { data: profile, error } = await betterFetch(
        'https://api.zoom.us/v2/users/me',
        { headers: { authorization: `Bearer ${token.accessToken}` } }
      );
      if (error) return null;
      const userMap = await options.mapProfileToUser?.(profile);
      return {
        user: {
          id: profile.id,
          name: profile.display_name,
          image: profile.pic_url,
          email: profile.email,
          emailVerified: Boolean(profile.verified),
          ...userMap,
        },
        data: { ...profile },
      };
    },
  };
};
//#endregion
//#region node_modules/.pnpm/@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-fetch+fetch@1.1.21_@openteleme_d40e1724e50d9afd583c2c1f90fe590f/node_modules/@better-auth/core/dist/social-providers/index.mjs
var socialProviders = {
  apple,
  atlassian,
  cognito,
  discord,
  facebook,
  figma,
  github,
  microsoft,
  google,
  huggingface,
  slack,
  spotify,
  twitch,
  twitter,
  dropbox,
  kick,
  linear,
  linkedin,
  gitlab,
  tiktok,
  reddit,
  roblox,
  salesforce,
  vk,
  zoom,
  notion,
  kakao,
  naver,
  line,
  paybin,
  paypal,
  polar,
  railway,
  vercel,
  wechat,
};
var socialProviderList = Object.keys(socialProviders);
var SocialProviderListEnum = z$1.enum(socialProviderList).or(z$1.string());
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/account.mjs
var listUserAccounts = createAuthEndpoint(
  '/list-accounts',
  {
    method: 'GET',
    use: [sessionMiddleware],
    metadata: {
      openapi: {
        operationId: 'listUserAccounts',
        description: 'List all accounts linked to the user',
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      providerId: { type: 'string' },
                      createdAt: {
                        type: 'string',
                        format: 'date-time',
                      },
                      updatedAt: {
                        type: 'string',
                        format: 'date-time',
                      },
                      accountId: { type: 'string' },
                      userId: { type: 'string' },
                      scopes: {
                        type: 'array',
                        items: { type: 'string' },
                      },
                    },
                    required: [
                      'id',
                      'providerId',
                      'createdAt',
                      'updatedAt',
                      'accountId',
                      'userId',
                      'scopes',
                    ],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  async (c) => {
    const session = c.context.session;
    const accounts = await c.context.internalAdapter.findAccounts(
      session.user.id
    );
    return c.json(
      accounts.map((a) => {
        const { scope, ...parsed } = parseAccountOutput(c.context.options, a);
        return {
          ...parsed,
          scopes: scope?.split(',') || [],
        };
      })
    );
  }
);
var linkSocialAccount = createAuthEndpoint(
  '/link-social',
  {
    method: 'POST',
    requireHeaders: true,
    body: z$1.object({
      callbackURL: z$1
        .string()
        .meta({
          description: 'The URL to redirect to after the user has signed in',
        })
        .optional(),
      provider: SocialProviderListEnum,
      idToken: z$1
        .object({
          token: z$1.string(),
          nonce: z$1.string().optional(),
          accessToken: z$1.string().optional(),
          refreshToken: z$1.string().optional(),
          scopes: z$1.array(z$1.string()).optional(),
        })
        .optional(),
      requestSignUp: z$1.boolean().optional(),
      scopes: z$1
        .array(z$1.string())
        .meta({ description: 'Additional scopes to request from the provider' })
        .optional(),
      errorCallbackURL: z$1
        .string()
        .meta({
          description:
            'The URL to redirect to if there is an error during the link process',
        })
        .optional(),
      disableRedirect: z$1
        .boolean()
        .meta({
          description:
            'Disable automatic redirection to the provider. Useful for handling the redirection yourself',
        })
        .optional(),
      additionalData: z$1.record(z$1.string(), z$1.any()).optional(),
    }),
    use: [sessionMiddleware],
    metadata: {
      openapi: {
        description: 'Link a social account to the user',
        operationId: 'linkSocialAccount',
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    url: {
                      type: 'string',
                      description:
                        'The authorization URL to redirect the user to',
                    },
                    redirect: {
                      type: 'boolean',
                      description:
                        'Indicates if the user should be redirected to the authorization URL',
                    },
                    status: { type: 'boolean' },
                  },
                  required: ['redirect'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (c) => {
    const session = c.context.session;
    const provider = await getAwaitableValue(c.context.socialProviders, {
      value: c.body.provider,
    });
    if (!provider) {
      c.context.logger.error(
        'Provider not found. Make sure to add the provider in your auth config',
        { provider: c.body.provider }
      );
      throw APIError.from('NOT_FOUND', BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
    }
    if (c.body.idToken) {
      if (!provider.verifyIdToken) {
        c.context.logger.error(
          'Provider does not support id token verification',
          { provider: c.body.provider }
        );
        throw APIError.from(
          'NOT_FOUND',
          BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED
        );
      }
      const { token, nonce } = c.body.idToken;
      if (!(await provider.verifyIdToken(token, nonce))) {
        c.context.logger.error('Invalid id token', {
          provider: c.body.provider,
        });
        throw APIError.from('UNAUTHORIZED', BASE_ERROR_CODES.INVALID_TOKEN);
      }
      const linkingUserInfo = await provider.getUserInfo({
        idToken: token,
        accessToken: c.body.idToken.accessToken,
        refreshToken: c.body.idToken.refreshToken,
      });
      if (!linkingUserInfo || !linkingUserInfo?.user) {
        c.context.logger.error('Failed to get user info', {
          provider: c.body.provider,
        });
        throw APIError.from(
          'UNAUTHORIZED',
          BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO
        );
      }
      const linkingUserId = String(linkingUserInfo.user.id);
      if (!linkingUserInfo.user.email) {
        c.context.logger.error('User email not found', {
          provider: c.body.provider,
        });
        throw APIError.from(
          'UNAUTHORIZED',
          BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND
        );
      }
      if (
        (await c.context.internalAdapter.findAccounts(session.user.id)).find(
          (a) => a.providerId === provider.id && a.accountId === linkingUserId
        )
      )
        return c.json({
          url: '',
          status: true,
          redirect: false,
        });
      if (
        (!c.context.trustedProviders.includes(provider.id) &&
          !linkingUserInfo.user.emailVerified) ||
        c.context.options.account?.accountLinking?.enabled === false
      )
        throw APIError.from('UNAUTHORIZED', {
          message: 'Account not linked - linking not allowed',
          code: 'LINKING_NOT_ALLOWED',
        });
      if (
        linkingUserInfo.user.email?.toLowerCase() !==
          session.user.email.toLowerCase() &&
        c.context.options.account?.accountLinking?.allowDifferentEmails !== true
      )
        throw APIError.from('UNAUTHORIZED', {
          message: 'Account not linked - different emails not allowed',
          code: 'LINKING_DIFFERENT_EMAILS_NOT_ALLOWED',
        });
      try {
        await c.context.internalAdapter.createAccount({
          userId: session.user.id,
          providerId: provider.id,
          accountId: linkingUserId,
          accessToken: c.body.idToken.accessToken,
          idToken: token,
          refreshToken: c.body.idToken.refreshToken,
          scope: c.body.idToken.scopes?.join(','),
        });
      } catch (_e) {
        throw APIError.from('EXPECTATION_FAILED', {
          message: 'Account not linked - unable to create account',
          code: 'LINKING_FAILED',
        });
      }
      if (
        c.context.options.account?.accountLinking?.updateUserInfoOnLink === true
      )
        try {
          await c.context.internalAdapter.updateUser(session.user.id, {
            name: linkingUserInfo.user?.name,
            image: linkingUserInfo.user?.image,
          });
        } catch (e) {
          console.warn('Could not update user - ' + e.toString());
        }
      return c.json({
        url: '',
        status: true,
        redirect: false,
      });
    }
    const state = await generateState(
      c,
      {
        userId: session.user.id,
        email: session.user.email,
      },
      c.body.additionalData
    );
    const url = await provider.createAuthorizationURL({
      state: state.state,
      codeVerifier: state.codeVerifier,
      redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
      scopes: c.body.scopes,
    });
    if (!c.body.disableRedirect) c.setHeader('Location', url.toString());
    return c.json({
      url: url.toString(),
      redirect: !c.body.disableRedirect,
    });
  }
);
var unlinkAccount = createAuthEndpoint(
  '/unlink-account',
  {
    method: 'POST',
    body: z$1.object({
      providerId: z$1.string(),
      accountId: z$1.string().optional(),
    }),
    use: [freshSessionMiddleware],
    metadata: {
      openapi: {
        description: 'Unlink an account',
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { status: { type: 'boolean' } },
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    const { providerId, accountId } = ctx.body;
    const accounts = await ctx.context.internalAdapter.findAccounts(
      ctx.context.session.user.id
    );
    if (
      accounts.length === 1 &&
      !ctx.context.options.account?.accountLinking?.allowUnlinkingAll
    )
      throw APIError.from(
        'BAD_REQUEST',
        BASE_ERROR_CODES.FAILED_TO_UNLINK_LAST_ACCOUNT
      );
    const accountExist = accounts.find((account) =>
      accountId
        ? account.accountId === accountId && account.providerId === providerId
        : account.providerId === providerId
    );
    if (!accountExist)
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
    await ctx.context.internalAdapter.deleteAccount(accountExist.id);
    return ctx.json({ status: true });
  }
);
var getAccessToken = createAuthEndpoint(
  '/get-access-token',
  {
    method: 'POST',
    body: z$1.object({
      providerId: z$1
        .string()
        .meta({ description: 'The provider ID for the OAuth provider' }),
      accountId: z$1
        .string()
        .meta({
          description: 'The account ID associated with the refresh token',
        })
        .optional(),
      userId: z$1
        .string()
        .meta({ description: 'The user ID associated with the account' })
        .optional(),
    }),
    metadata: {
      openapi: {
        description: 'Get a valid access token, doing a refresh if needed',
        responses: {
          200: {
            description: 'A Valid access token',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    tokenType: { type: 'string' },
                    idToken: { type: 'string' },
                    accessToken: { type: 'string' },
                    accessTokenExpiresAt: {
                      type: 'string',
                      format: 'date-time',
                    },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid refresh token or provider configuration',
          },
        },
      },
    },
  },
  async (ctx) => {
    const { providerId, accountId, userId } = ctx.body || {};
    const req = ctx.request;
    const session = await getSessionFromCtx(ctx);
    if (req && !session) throw ctx.error('UNAUTHORIZED');
    const resolvedUserId = session?.user?.id || userId;
    if (!resolvedUserId) throw ctx.error('UNAUTHORIZED');
    const provider = await getAwaitableValue(ctx.context.socialProviders, {
      value: providerId,
    });
    if (!provider)
      throw APIError.from('BAD_REQUEST', {
        message: `Provider ${providerId} is not supported.`,
        code: 'PROVIDER_NOT_SUPPORTED',
      });
    const accountData = await getAccountCookie(ctx);
    let account = void 0;
    if (
      accountData &&
      accountData.userId === resolvedUserId &&
      providerId === accountData.providerId &&
      (!accountId || accountData.accountId === accountId)
    )
      account = accountData;
    else
      account = (
        await ctx.context.internalAdapter.findAccounts(resolvedUserId)
      ).find((acc) =>
        accountId
          ? acc.accountId === accountId && acc.providerId === providerId
          : acc.providerId === providerId
      );
    if (!account)
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
    try {
      let newTokens = null;
      const accessTokenExpired =
        account.accessTokenExpiresAt &&
        new Date(account.accessTokenExpiresAt).getTime() - Date.now() < 5e3;
      if (
        account.refreshToken &&
        accessTokenExpired &&
        provider.refreshAccessToken
      ) {
        const refreshToken = await decryptOAuthToken(
          account.refreshToken,
          ctx.context
        );
        newTokens = await provider.refreshAccessToken(refreshToken);
        const updatedData = {
          accessToken: await setTokenUtil(newTokens?.accessToken, ctx.context),
          accessTokenExpiresAt: newTokens?.accessTokenExpiresAt,
          refreshToken: newTokens?.refreshToken
            ? await setTokenUtil(newTokens.refreshToken, ctx.context)
            : account.refreshToken,
          refreshTokenExpiresAt:
            newTokens?.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt,
          idToken: newTokens?.idToken || account.idToken,
        };
        let updatedAccount = null;
        if (account.id)
          updatedAccount = await ctx.context.internalAdapter.updateAccount(
            account.id,
            updatedData
          );
        if (ctx.context.options.account?.storeAccountCookie)
          await setAccountCookie(ctx, {
            ...account,
            ...(updatedAccount ?? updatedData),
          });
      }
      const accessTokenExpiresAt = (() => {
        if (newTokens?.accessTokenExpiresAt) {
          if (typeof newTokens.accessTokenExpiresAt === 'string')
            return new Date(newTokens.accessTokenExpiresAt);
          return newTokens.accessTokenExpiresAt;
        }
        if (account.accessTokenExpiresAt) {
          if (typeof account.accessTokenExpiresAt === 'string')
            return new Date(account.accessTokenExpiresAt);
          return account.accessTokenExpiresAt;
        }
      })();
      const tokens = {
        accessToken:
          newTokens?.accessToken ??
          (await decryptOAuthToken(account.accessToken ?? '', ctx.context)),
        accessTokenExpiresAt,
        scopes: account.scope?.split(',') ?? [],
        idToken: newTokens?.idToken ?? account.idToken ?? void 0,
      };
      return ctx.json(tokens);
    } catch (_error) {
      throw APIError.from('BAD_REQUEST', {
        message: 'Failed to get a valid access token',
        code: 'FAILED_TO_GET_ACCESS_TOKEN',
      });
    }
  }
);
var refreshToken = createAuthEndpoint(
  '/refresh-token',
  {
    method: 'POST',
    body: z$1.object({
      providerId: z$1
        .string()
        .meta({ description: 'The provider ID for the OAuth provider' }),
      accountId: z$1
        .string()
        .meta({
          description: 'The account ID associated with the refresh token',
        })
        .optional(),
      userId: z$1
        .string()
        .meta({ description: 'The user ID associated with the account' })
        .optional(),
    }),
    metadata: {
      openapi: {
        description: 'Refresh the access token using a refresh token',
        responses: {
          200: {
            description: 'Access token refreshed successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    tokenType: { type: 'string' },
                    idToken: { type: 'string' },
                    accessToken: { type: 'string' },
                    refreshToken: { type: 'string' },
                    accessTokenExpiresAt: {
                      type: 'string',
                      format: 'date-time',
                    },
                    refreshTokenExpiresAt: {
                      type: 'string',
                      format: 'date-time',
                    },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid refresh token or provider configuration',
          },
        },
      },
    },
  },
  async (ctx) => {
    const { providerId, accountId, userId } = ctx.body;
    const req = ctx.request;
    const session = await getSessionFromCtx(ctx);
    if (req && !session) throw ctx.error('UNAUTHORIZED');
    const resolvedUserId = session?.user?.id || userId;
    if (!resolvedUserId)
      throw APIError.from('BAD_REQUEST', {
        message: `Either userId or session is required`,
        code: 'USER_ID_OR_SESSION_REQUIRED',
      });
    const provider = await getAwaitableValue(ctx.context.socialProviders, {
      value: providerId,
    });
    if (!provider)
      throw APIError.from('BAD_REQUEST', {
        message: `Provider ${providerId} is not supported.`,
        code: 'PROVIDER_NOT_SUPPORTED',
      });
    if (!provider.refreshAccessToken)
      throw APIError.from('BAD_REQUEST', {
        message: `Provider ${providerId} does not support token refreshing.`,
        code: 'TOKEN_REFRESH_NOT_SUPPORTED',
      });
    let account = void 0;
    const accountData = await getAccountCookie(ctx);
    if (
      accountData &&
      accountData.userId === resolvedUserId &&
      (!providerId || providerId === accountData?.providerId)
    )
      account = accountData;
    else
      account = (
        await ctx.context.internalAdapter.findAccounts(resolvedUserId)
      ).find((acc) =>
        accountId
          ? acc.accountId === accountId && acc.providerId === providerId
          : acc.providerId === providerId
      );
    if (!account)
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
    let refreshToken = void 0;
    if (accountData && providerId === accountData.providerId)
      refreshToken = accountData.refreshToken ?? void 0;
    else refreshToken = account.refreshToken ?? void 0;
    if (!refreshToken)
      throw APIError.from('BAD_REQUEST', {
        message: 'Refresh token not found',
        code: 'REFRESH_TOKEN_NOT_FOUND',
      });
    try {
      const decryptedRefreshToken = await decryptOAuthToken(
        refreshToken,
        ctx.context
      );
      const tokens = await provider.refreshAccessToken(decryptedRefreshToken);
      const resolvedRefreshToken = tokens.refreshToken
        ? await setTokenUtil(tokens.refreshToken, ctx.context)
        : refreshToken;
      const resolvedRefreshTokenExpiresAt =
        tokens.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt;
      if (account.id) {
        const updateData = {
          ...(account || {}),
          accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
          refreshToken: resolvedRefreshToken,
          accessTokenExpiresAt: tokens.accessTokenExpiresAt,
          refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
          scope: tokens.scopes?.join(',') || account.scope,
          idToken: tokens.idToken || account.idToken,
        };
        await ctx.context.internalAdapter.updateAccount(account.id, updateData);
      }
      if (
        accountData &&
        providerId === accountData.providerId &&
        ctx.context.options.account?.storeAccountCookie
      )
        await setAccountCookie(ctx, {
          ...accountData,
          accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
          refreshToken: resolvedRefreshToken,
          accessTokenExpiresAt: tokens.accessTokenExpiresAt,
          refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
          scope: tokens.scopes?.join(',') || accountData.scope,
          idToken: tokens.idToken || accountData.idToken,
        });
      return ctx.json({
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken ?? decryptedRefreshToken,
        accessTokenExpiresAt: tokens.accessTokenExpiresAt,
        refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
        scope: tokens.scopes?.join(',') || account.scope,
        idToken: tokens.idToken || account.idToken,
        providerId: account.providerId,
        accountId: account.accountId,
      });
    } catch (_error) {
      throw APIError.from('BAD_REQUEST', {
        message: 'Failed to refresh access token',
        code: 'FAILED_TO_REFRESH_ACCESS_TOKEN',
      });
    }
  }
);
var accountInfoQuerySchema = z$1.optional(
  z$1.object({
    accountId: z$1
      .string()
      .meta({
        description:
          'The provider given account id for which to get the account info',
      })
      .optional(),
  })
);
var accountInfo = createAuthEndpoint(
  '/account-info',
  {
    method: 'GET',
    use: [sessionMiddleware],
    metadata: {
      openapi: {
        description: 'Get the account info provided by the provider',
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    user: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        email: { type: 'string' },
                        image: { type: 'string' },
                        emailVerified: { type: 'boolean' },
                      },
                      required: ['id', 'emailVerified'],
                    },
                    data: {
                      type: 'object',
                      properties: {},
                      additionalProperties: true,
                    },
                  },
                  required: ['user', 'data'],
                  additionalProperties: false,
                },
              },
            },
          },
        },
      },
    },
    query: accountInfoQuerySchema,
  },
  async (ctx) => {
    const providedAccountId = ctx.query?.accountId;
    let account = void 0;
    if (!providedAccountId) {
      if (ctx.context.options.account?.storeAccountCookie) {
        const accountData = await getAccountCookie(ctx);
        if (accountData) account = accountData;
      }
    } else {
      const accountData =
        await ctx.context.internalAdapter.findAccount(providedAccountId);
      if (accountData) account = accountData;
    }
    if (!account || account.userId !== ctx.context.session.user.id)
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
    const provider = await getAwaitableValue(ctx.context.socialProviders, {
      value: account.providerId,
    });
    if (!provider)
      throw APIError.from('INTERNAL_SERVER_ERROR', {
        message: `Provider account provider is ${account.providerId} but it is not configured`,
        code: 'PROVIDER_NOT_CONFIGURED',
      });
    const tokens = await getAccessToken({
      ...ctx,
      method: 'POST',
      body: {
        accountId: account.accountId,
        providerId: account.providerId,
      },
      returnHeaders: false,
      returnStatus: false,
    });
    if (!tokens.accessToken)
      throw APIError.from('BAD_REQUEST', {
        message: 'Access token not found',
        code: 'ACCESS_TOKEN_NOT_FOUND',
      });
    const info = await provider.getUserInfo({
      ...tokens,
      accessToken: tokens.accessToken,
    });
    return ctx.json(info);
  }
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/email-verification.mjs
async function createEmailVerificationToken(
  secret,
  email,
  updateTo,
  expiresIn = 3600,
  extraPayload
) {
  return await signJWT(
    {
      email: email.toLowerCase(),
      updateTo,
      ...extraPayload,
    },
    secret,
    expiresIn
  );
}
/**
 * A function to send a verification email to the user
 */
async function sendVerificationEmailFn(ctx, user) {
  if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
    ctx.context.logger.error("Verification email isn't enabled.");
    throw APIError.from(
      'BAD_REQUEST',
      BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED
    );
  }
  const token = await createEmailVerificationToken(
    ctx.context.secret,
    user.email,
    void 0,
    ctx.context.options.emailVerification?.expiresIn
  );
  const callbackURL = ctx.body.callbackURL
    ? encodeURIComponent(ctx.body.callbackURL)
    : encodeURIComponent('/');
  const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
  await ctx.context.runInBackgroundOrAwait(
    ctx.context.options.emailVerification.sendVerificationEmail(
      {
        user,
        url,
        token,
      },
      ctx.request
    )
  );
}
var sendVerificationEmail = createAuthEndpoint(
  '/send-verification-email',
  {
    method: 'POST',
    operationId: 'sendVerificationEmail',
    body: z$1.object({
      email: z$1
        .email()
        .meta({ description: 'The email to send the verification email to' }),
      callbackURL: z$1
        .string()
        .meta({ description: 'The URL to use for email verification callback' })
        .optional(),
    }),
    metadata: {
      openapi: {
        operationId: 'sendVerificationEmail',
        description: 'Send a verification email to the user',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    type: 'string',
                    description: 'The email to send the verification email to',
                    example: 'user@example.com',
                  },
                  callbackURL: {
                    type: 'string',
                    description:
                      'The URL to use for email verification callback',
                    example: 'https://example.com/callback',
                    nullable: true,
                  },
                },
                required: ['email'],
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'boolean',
                      description:
                        'Indicates if the email was sent successfully',
                      example: true,
                    },
                  },
                },
              },
            },
          },
          400: {
            description: 'Bad Request',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                      example: "Verification email isn't enabled",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
      ctx.context.logger.error("Verification email isn't enabled.");
      throw APIError.from(
        'BAD_REQUEST',
        BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED
      );
    }
    const { email } = ctx.body;
    const session = await getSessionFromCtx(ctx);
    if (!session) {
      const user = await ctx.context.internalAdapter.findUserByEmail(email);
      if (!user || user.user.emailVerified) {
        await createEmailVerificationToken(
          ctx.context.secret,
          email,
          void 0,
          ctx.context.options.emailVerification?.expiresIn
        );
        return ctx.json({ status: true });
      }
      await sendVerificationEmailFn(ctx, user.user);
      return ctx.json({ status: true });
    }
    if (session?.user.email !== email)
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.EMAIL_MISMATCH);
    if (session?.user.emailVerified)
      throw APIError.from(
        'BAD_REQUEST',
        BASE_ERROR_CODES.EMAIL_ALREADY_VERIFIED
      );
    await sendVerificationEmailFn(ctx, session.user);
    return ctx.json({ status: true });
  }
);
var verifyEmail = createAuthEndpoint(
  '/verify-email',
  {
    method: 'GET',
    operationId: 'verifyEmail',
    query: z$1.object({
      token: z$1
        .string()
        .meta({ description: 'The token to verify the email' }),
      callbackURL: z$1
        .string()
        .meta({
          description: 'The URL to redirect to after email verification',
        })
        .optional(),
    }),
    use: [originCheck((ctx) => ctx.query.callbackURL)],
    metadata: {
      openapi: {
        description: 'Verify the email of the user',
        parameters: [
          {
            name: 'token',
            in: 'query',
            description: 'The token to verify the email',
            required: true,
            schema: { type: 'string' },
          },
          {
            name: 'callbackURL',
            in: 'query',
            description: 'The URL to redirect to after email verification',
            required: false,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    user: {
                      type: 'object',
                      $ref: '#/components/schemas/User',
                    },
                    status: {
                      type: 'boolean',
                      description:
                        'Indicates if the email was verified successfully',
                    },
                  },
                  required: ['user', 'status'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    function redirectOnError(error) {
      if (ctx.query.callbackURL) {
        if (ctx.query.callbackURL.includes('?'))
          throw ctx.redirect(`${ctx.query.callbackURL}&error=${error.code}`);
        throw ctx.redirect(`${ctx.query.callbackURL}?error=${error.code}`);
      }
      throw APIError.from('UNAUTHORIZED', error);
    }
    const { token } = ctx.query;
    let jwt;
    try {
      jwt = await jwtVerify(
        token,
        new TextEncoder().encode(ctx.context.secret),
        { algorithms: ['HS256'] }
      );
    } catch (e) {
      if (e instanceof JWTExpired)
        return redirectOnError(BASE_ERROR_CODES.TOKEN_EXPIRED);
      return redirectOnError(BASE_ERROR_CODES.INVALID_TOKEN);
    }
    const parsed = z$1
      .object({
        email: z$1.email(),
        updateTo: z$1.string().optional(),
        requestType: z$1.string().optional(),
      })
      .parse(jwt.payload);
    const user = await ctx.context.internalAdapter.findUserByEmail(
      parsed.email
    );
    if (!user) return redirectOnError(BASE_ERROR_CODES.USER_NOT_FOUND);
    if (parsed.updateTo) {
      const session = await getSessionFromCtx(ctx);
      if (session && session.user.email !== parsed.email)
        return redirectOnError(BASE_ERROR_CODES.INVALID_USER);
      switch (parsed.requestType) {
        case 'change-email-confirmation': {
          const newToken = await createEmailVerificationToken(
            ctx.context.secret,
            parsed.email,
            parsed.updateTo,
            ctx.context.options.emailVerification?.expiresIn,
            { requestType: 'change-email-verification' }
          );
          const updateCallbackURL = ctx.query.callbackURL
            ? encodeURIComponent(ctx.query.callbackURL)
            : encodeURIComponent('/');
          const url = `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`;
          if (ctx.context.options.emailVerification?.sendVerificationEmail)
            await ctx.context.runInBackgroundOrAwait(
              ctx.context.options.emailVerification.sendVerificationEmail(
                {
                  user: {
                    ...user.user,
                    email: parsed.updateTo,
                  },
                  url,
                  token: newToken,
                },
                ctx.request
              )
            );
          if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
          return ctx.json({ status: true });
        }
        case 'change-email-verification': {
          let activeSession = session;
          if (!activeSession) {
            const newSession = await ctx.context.internalAdapter.createSession(
              user.user.id
            );
            if (!newSession)
              throw APIError.from(
                'INTERNAL_SERVER_ERROR',
                BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION
              );
            activeSession = {
              session: newSession,
              user: user.user,
            };
          }
          const updatedUser =
            await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
              email: parsed.updateTo,
              emailVerified: true,
            });
          if (ctx.context.options.emailVerification?.afterEmailVerification)
            await ctx.context.options.emailVerification.afterEmailVerification(
              updatedUser,
              ctx.request
            );
          await setSessionCookie(ctx, {
            session: activeSession.session,
            user: {
              ...activeSession.user,
              email: parsed.updateTo,
              emailVerified: true,
            },
          });
          if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
          return ctx.json({
            status: true,
            user: parseUserOutput(ctx.context.options, updatedUser),
          });
        }
        default: {
          let activeSession = session;
          if (!activeSession) {
            const newSession = await ctx.context.internalAdapter.createSession(
              user.user.id
            );
            if (!newSession)
              throw APIError.from(
                'INTERNAL_SERVER_ERROR',
                BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION
              );
            activeSession = {
              session: newSession,
              user: user.user,
            };
          }
          const updatedUser =
            await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
              email: parsed.updateTo,
              emailVerified: false,
            });
          const newToken = await createEmailVerificationToken(
            ctx.context.secret,
            parsed.updateTo
          );
          const updateCallbackURL = ctx.query.callbackURL
            ? encodeURIComponent(ctx.query.callbackURL)
            : encodeURIComponent('/');
          if (ctx.context.options.emailVerification?.sendVerificationEmail)
            await ctx.context.runInBackgroundOrAwait(
              ctx.context.options.emailVerification.sendVerificationEmail(
                {
                  user: updatedUser,
                  url: `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`,
                  token: newToken,
                },
                ctx.request
              )
            );
          await setSessionCookie(ctx, {
            session: activeSession.session,
            user: {
              ...activeSession.user,
              email: parsed.updateTo,
              emailVerified: false,
            },
          });
          if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
          return ctx.json({
            status: true,
            user: parseUserOutput(ctx.context.options, updatedUser),
          });
        }
      }
    }
    if (user.user.emailVerified) {
      if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
      return ctx.json({
        status: true,
        user: null,
      });
    }
    if (ctx.context.options.emailVerification?.beforeEmailVerification)
      await ctx.context.options.emailVerification.beforeEmailVerification(
        user.user,
        ctx.request
      );
    const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(
      parsed.email,
      { emailVerified: true }
    );
    if (ctx.context.options.emailVerification?.afterEmailVerification)
      await ctx.context.options.emailVerification.afterEmailVerification(
        updatedUser,
        ctx.request
      );
    if (ctx.context.options.emailVerification?.autoSignInAfterVerification) {
      const currentSession = await getSessionFromCtx(ctx);
      if (!currentSession || currentSession.user.email !== parsed.email) {
        const session = await ctx.context.internalAdapter.createSession(
          user.user.id
        );
        if (!session)
          throw APIError.from(
            'INTERNAL_SERVER_ERROR',
            BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION
          );
        await setSessionCookie(ctx, {
          session,
          user: {
            ...user.user,
            emailVerified: true,
          },
        });
      } else
        await setSessionCookie(ctx, {
          session: currentSession.session,
          user: {
            ...currentSession.user,
            emailVerified: true,
          },
        });
    }
    if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
    return ctx.json({
      status: true,
      user: null,
    });
  }
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/oauth2/link-account.mjs
async function handleOAuthUserInfo(c, opts) {
  const { userInfo, account, callbackURL, disableSignUp, overrideUserInfo } =
    opts;
  const dbUser = await c.context.internalAdapter
    .findOAuthUser(
      userInfo.email.toLowerCase(),
      account.accountId,
      account.providerId
    )
    .catch((e) => {
      logger.error(
        'Better auth was unable to query your database.\nError: ',
        e
      );
      const errorURL =
        c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
      throw c.redirect(`${errorURL}?error=internal_server_error`);
    });
  let user = dbUser?.user;
  const isRegister = !user;
  if (dbUser) {
    const linkedAccount =
      dbUser.linkedAccount ??
      dbUser.accounts.find(
        (acc) =>
          acc.providerId === account.providerId &&
          acc.accountId === account.accountId
      );
    if (!linkedAccount) {
      const accountLinking = c.context.options.account?.accountLinking;
      if (
        (!(
          opts.isTrustedProvider ||
          c.context.trustedProviders.includes(account.providerId)
        ) &&
          !userInfo.emailVerified) ||
        accountLinking?.enabled === false ||
        accountLinking?.disableImplicitLinking === true
      ) {
        if (isDevelopment())
          logger.warn(
            `User already exist but account isn't linked to ${account.providerId}. To read more about how account linking works in Better Auth see https://www.better-auth.com/docs/concepts/users-accounts#account-linking.`
          );
        return {
          error: 'account not linked',
          data: null,
        };
      }
      try {
        await c.context.internalAdapter.linkAccount({
          providerId: account.providerId,
          accountId: userInfo.id.toString(),
          userId: dbUser.user.id,
          accessToken: await setTokenUtil(account.accessToken, c.context),
          refreshToken: await setTokenUtil(account.refreshToken, c.context),
          idToken: account.idToken,
          accessTokenExpiresAt: account.accessTokenExpiresAt,
          refreshTokenExpiresAt: account.refreshTokenExpiresAt,
          scope: account.scope,
        });
      } catch (e) {
        logger.error('Unable to link account', e);
        return {
          error: 'unable to link account',
          data: null,
        };
      }
      if (
        userInfo.emailVerified &&
        !dbUser.user.emailVerified &&
        userInfo.email.toLowerCase() === dbUser.user.email
      )
        await c.context.internalAdapter.updateUser(dbUser.user.id, {
          emailVerified: true,
        });
    } else {
      const freshTokens =
        c.context.options.account?.updateAccountOnSignIn !== false
          ? Object.fromEntries(
              Object.entries({
                idToken: account.idToken,
                accessToken: await setTokenUtil(account.accessToken, c.context),
                refreshToken: await setTokenUtil(
                  account.refreshToken,
                  c.context
                ),
                accessTokenExpiresAt: account.accessTokenExpiresAt,
                refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                scope: account.scope,
              }).filter(([_, value]) => value !== void 0)
            )
          : {};
      if (c.context.options.account?.storeAccountCookie)
        await setAccountCookie(c, {
          ...linkedAccount,
          ...freshTokens,
        });
      if (Object.keys(freshTokens).length > 0)
        await c.context.internalAdapter.updateAccount(
          linkedAccount.id,
          freshTokens
        );
      if (
        userInfo.emailVerified &&
        !dbUser.user.emailVerified &&
        userInfo.email.toLowerCase() === dbUser.user.email
      )
        await c.context.internalAdapter.updateUser(dbUser.user.id, {
          emailVerified: true,
        });
    }
    if (overrideUserInfo) {
      const { id: _, ...restUserInfo } = userInfo;
      user = await c.context.internalAdapter.updateUser(dbUser.user.id, {
        ...restUserInfo,
        email: userInfo.email.toLowerCase(),
        emailVerified:
          userInfo.email.toLowerCase() === dbUser.user.email
            ? dbUser.user.emailVerified || userInfo.emailVerified
            : userInfo.emailVerified,
      });
    }
  } else {
    if (disableSignUp)
      return {
        error: 'signup disabled',
        data: null,
        isRegister: false,
      };
    try {
      const { id: _, ...restUserInfo } = userInfo;
      const accountData = {
        accessToken: await setTokenUtil(account.accessToken, c.context),
        refreshToken: await setTokenUtil(account.refreshToken, c.context),
        idToken: account.idToken,
        accessTokenExpiresAt: account.accessTokenExpiresAt,
        refreshTokenExpiresAt: account.refreshTokenExpiresAt,
        scope: account.scope,
        providerId: account.providerId,
        accountId: userInfo.id.toString(),
      };
      const { user: createdUser, account: createdAccount } =
        await c.context.internalAdapter.createOAuthUser(
          {
            ...restUserInfo,
            email: userInfo.email.toLowerCase(),
          },
          accountData
        );
      user = createdUser;
      if (c.context.options.account?.storeAccountCookie)
        await setAccountCookie(c, createdAccount);
      if (
        !userInfo.emailVerified &&
        user &&
        c.context.options.emailVerification?.sendOnSignUp &&
        c.context.options.emailVerification?.sendVerificationEmail
      ) {
        const token = await createEmailVerificationToken(
          c.context.secret,
          user.email,
          void 0,
          c.context.options.emailVerification?.expiresIn
        );
        const url = `${c.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
        await c.context.runInBackgroundOrAwait(
          c.context.options.emailVerification.sendVerificationEmail(
            {
              user,
              url,
              token,
            },
            c.request
          )
        );
      }
    } catch (e) {
      logger.error(e);
      if (isAPIError(e))
        return {
          error: e.message,
          data: null,
          isRegister: false,
        };
      return {
        error: 'unable to create user',
        data: null,
        isRegister: false,
      };
    }
  }
  if (!user)
    return {
      error: 'unable to create user',
      data: null,
      isRegister: false,
    };
  const session = await c.context.internalAdapter.createSession(user.id);
  if (!session)
    return {
      error: 'unable to create session',
      data: null,
      isRegister: false,
    };
  return {
    data: {
      session,
      user,
    },
    error: null,
    isRegister,
  };
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/callback.mjs
var schema = z$1.object({
  code: z$1.string().optional(),
  error: z$1.string().optional(),
  device_id: z$1.string().optional(),
  error_description: z$1.string().optional(),
  state: z$1.string().optional(),
  user: z$1.string().optional(),
});
var callbackOAuth = createAuthEndpoint(
  '/callback/:id',
  {
    method: ['GET', 'POST'],
    operationId: 'handleOAuthCallback',
    body: schema.optional(),
    query: schema.optional(),
    metadata: {
      ...HIDE_METADATA,
      allowedMediaTypes: [
        'application/x-www-form-urlencoded',
        'application/json',
      ],
    },
  },
  async (c) => {
    let queryOrBody;
    const defaultErrorURL =
      c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
    if (c.method === 'POST') {
      const postData = c.body ? schema.parse(c.body) : {};
      const queryData = c.query ? schema.parse(c.query) : {};
      const mergedData = schema.parse({
        ...postData,
        ...queryData,
      });
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(mergedData))
        if (value !== void 0 && value !== null) params.set(key, String(value));
      const redirectURL = `${c.context.baseURL}/callback/${c.params.id}?${params.toString()}`;
      throw c.redirect(redirectURL);
    }
    try {
      if (c.method === 'GET') queryOrBody = schema.parse(c.query);
      else if (c.method === 'POST') queryOrBody = schema.parse(c.body);
      else throw new Error('Unsupported method');
    } catch (e) {
      c.context.logger.error('INVALID_CALLBACK_REQUEST', e);
      throw c.redirect(`${defaultErrorURL}?error=invalid_callback_request`);
    }
    const {
      code,
      error,
      state,
      error_description,
      device_id,
      user: userData,
    } = queryOrBody;
    if (!state) {
      c.context.logger.error('State not found', error);
      const url = `${defaultErrorURL}${defaultErrorURL.includes('?') ? '&' : '?'}state=state_not_found`;
      throw c.redirect(url);
    }
    const {
      codeVerifier,
      callbackURL,
      link,
      errorURL,
      newUserURL,
      requestSignUp,
    } = await parseState(c);
    function redirectOnError(error, description) {
      const baseURL = errorURL ?? defaultErrorURL;
      const params = new URLSearchParams({ error });
      if (description) params.set('error_description', description);
      const url = `${baseURL}${baseURL.includes('?') ? '&' : '?'}${params.toString()}`;
      throw c.redirect(url);
    }
    if (error) redirectOnError(error, error_description);
    if (!code) {
      c.context.logger.error('Code not found');
      throw redirectOnError('no_code');
    }
    const provider = await getAwaitableValue(c.context.socialProviders, {
      value: c.params.id,
    });
    if (!provider) {
      c.context.logger.error(
        'Oauth provider with id',
        c.params.id,
        'not found'
      );
      throw redirectOnError('oauth_provider_not_found');
    }
    let tokens;
    try {
      tokens = await provider.validateAuthorizationCode({
        code,
        codeVerifier,
        deviceId: device_id,
        redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
      });
    } catch (e) {
      c.context.logger.error('', e);
      throw redirectOnError('invalid_code');
    }
    if (!tokens) throw redirectOnError('invalid_code');
    const parsedUserData = userData ? safeJSONParse(userData) : null;
    const userInfo = await provider
      .getUserInfo({
        ...tokens,
        user: parsedUserData ?? void 0,
      })
      .then((res) => res?.user);
    if (!userInfo) {
      c.context.logger.error('Unable to get user info');
      return redirectOnError('unable_to_get_user_info');
    }
    if (!callbackURL) {
      c.context.logger.error('No callback URL found');
      throw redirectOnError('no_callback_url');
    }
    if (link) {
      if (
        (!c.context.trustedProviders.includes(provider.id) &&
          !userInfo.emailVerified) ||
        c.context.options.account?.accountLinking?.enabled === false
      ) {
        c.context.logger.error('Unable to link account - untrusted provider');
        return redirectOnError('unable_to_link_account');
      }
      if (
        userInfo.email?.toLowerCase() !== link.email.toLowerCase() &&
        c.context.options.account?.accountLinking?.allowDifferentEmails !== true
      )
        return redirectOnError("email_doesn't_match");
      const existingAccount =
        await c.context.internalAdapter.findAccountByProviderId(
          String(userInfo.id),
          provider.id
        );
      if (existingAccount) {
        if (existingAccount.userId.toString() !== link.userId.toString())
          return redirectOnError('account_already_linked_to_different_user');
        const updateData = Object.fromEntries(
          Object.entries({
            accessToken: await setTokenUtil(tokens.accessToken, c.context),
            refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
            idToken: tokens.idToken,
            accessTokenExpiresAt: tokens.accessTokenExpiresAt,
            refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
            scope: tokens.scopes?.join(','),
          }).filter(([_, value]) => value !== void 0)
        );
        await c.context.internalAdapter.updateAccount(
          existingAccount.id,
          updateData
        );
      } else if (
        !(await c.context.internalAdapter.createAccount({
          userId: link.userId,
          providerId: provider.id,
          accountId: String(userInfo.id),
          ...tokens,
          accessToken: await setTokenUtil(tokens.accessToken, c.context),
          refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
          scope: tokens.scopes?.join(','),
        }))
      )
        return redirectOnError('unable_to_link_account');
      let toRedirectTo;
      try {
        toRedirectTo = callbackURL.toString();
      } catch {
        toRedirectTo = callbackURL;
      }
      throw c.redirect(toRedirectTo);
    }
    if (!userInfo.email) {
      c.context.logger.error(
        'Provider did not return email. This could be due to misconfiguration in the provider settings.'
      );
      return redirectOnError('email_not_found');
    }
    const accountData = {
      providerId: provider.id,
      accountId: String(userInfo.id),
      ...tokens,
      scope: tokens.scopes?.join(','),
    };
    const result = await handleOAuthUserInfo(c, {
      userInfo: {
        ...userInfo,
        id: String(userInfo.id),
        email: userInfo.email,
        name: userInfo.name || '',
      },
      account: accountData,
      callbackURL,
      disableSignUp:
        (provider.disableImplicitSignUp && !requestSignUp) ||
        provider.options?.disableSignUp,
      overrideUserInfo: provider.options?.overrideUserInfoOnSignIn,
    });
    if (result.error) {
      c.context.logger.error(result.error.split(' ').join('_'));
      return redirectOnError(result.error.split(' ').join('_'));
    }
    const { session, user } = result.data;
    await setSessionCookie(c, {
      session,
      user,
    });
    let toRedirectTo;
    try {
      toRedirectTo = (
        result.isRegister ? newUserURL || callbackURL : callbackURL
      ).toString();
    } catch {
      toRedirectTo = result.isRegister
        ? newUserURL || callbackURL
        : callbackURL;
    }
    throw c.redirect(toRedirectTo);
  }
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/error.mjs
function sanitize(input) {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/&(?!amp;|lt;|gt;|quot;|#39;|#x[0-9a-fA-F]+;|#[0-9]+;)/g, '&amp;');
}
var html = (options, code = 'Unknown', description = null) => {
  const custom = options.onAPIError?.customizeDefaultErrorPage;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Error</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: ${custom?.font?.defaultFamily || "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"};
        background: ${custom?.colors?.background || 'var(--background)'};
        color: var(--foreground);
        margin: 0;
      }
      :root,
      :host {
        --spacing: 0.25rem;
        --container-md: 28rem;
        --text-sm: ${custom?.size?.textSm || '0.875rem'};
        --text-sm--line-height: calc(1.25 / 0.875);
        --text-2xl: ${custom?.size?.text2xl || '1.5rem'};
        --text-2xl--line-height: calc(2 / 1.5);
        --text-4xl: ${custom?.size?.text4xl || '2.25rem'};
        --text-4xl--line-height: calc(2.5 / 2.25);
        --text-6xl: ${custom?.size?.text6xl || '3rem'};
        --text-6xl--line-height: 1;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        --default-transition-duration: 150ms;
        --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        --radius: ${custom?.size?.radiusSm || '0.625rem'};
        --default-mono-font-family: ${custom?.font?.monoFamily || 'var(--font-geist-mono)'};
        --primary: ${custom?.colors?.primary || 'black'};
        --primary-foreground: ${custom?.colors?.primaryForeground || 'white'};
        --background: ${custom?.colors?.background || 'white'};
        --foreground: ${custom?.colors?.foreground || 'oklch(0.271 0 0)'};
        --border: ${custom?.colors?.border || 'oklch(0.89 0 0)'};
        --destructive: ${custom?.colors?.destructive || 'oklch(0.55 0.15 25.723)'};
        --muted-foreground: ${custom?.colors?.mutedForeground || 'oklch(0.545 0 0)'};
        --corner-border: ${custom?.colors?.cornerBorder || '#404040'};
      }

      button, .btn {
        cursor: pointer;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        transition: all var(--default-transition-duration)
          var(--default-transition-timing-function);
      }
      button:hover, .btn:hover {
        opacity: 0.8;
      }

      @media (prefers-color-scheme: dark) {
        :root,
        :host {
          --primary: ${custom?.colors?.primary || 'white'};
          --primary-foreground: ${custom?.colors?.primaryForeground || 'black'};
          --background: ${custom?.colors?.background || 'oklch(0.15 0 0)'};
          --foreground: ${custom?.colors?.foreground || 'oklch(0.98 0 0)'};
          --border: ${custom?.colors?.border || 'oklch(0.27 0 0)'};
          --destructive: ${custom?.colors?.destructive || 'oklch(0.65 0.15 25.723)'};
          --muted-foreground: ${custom?.colors?.mutedForeground || 'oklch(0.65 0 0)'};
          --corner-border: ${custom?.colors?.cornerBorder || '#a0a0a0'};
        }
      }
      @media (max-width: 640px) {
        :root, :host {
          --text-6xl: 2.5rem;
          --text-2xl: 1.25rem;
          --text-sm: 0.8125rem;
        }
      }
      @media (max-width: 480px) {
        :root, :host {
          --text-6xl: 2rem;
          --text-2xl: 1.125rem;
        }
      }
    </style>
  </head>
  <body style="width: 100vw; min-height: 100vh; overflow-x: hidden; overflow-y: auto;">
    <div
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 1rem;
        "
        >
${
  custom?.disableBackgroundGrid
    ? ''
    : `
      <div
        style="
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, ${custom?.colors?.gridColor || 'var(--border)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${custom?.colors?.gridColor || 'var(--border)'} 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.6;
          pointer-events: none;
          width: 100vw;
          height: 100vh;
        "
      ></div>
      <div
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${custom?.colors?.background || 'var(--background)'};
          mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          -webkit-mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          pointer-events: none;
        "
      ></div>
`
}

<div
  style="
    position: relative;
    z-index: 10;
    border: 2px solid var(--border);
    background: ${custom?.colors?.cardBackground || 'var(--background)'};
    padding: 1.5rem;
    max-width: 42rem;
    width: 100%;
  "
>
    ${
      custom?.disableCornerDecorations
        ? ''
        : `
        <!-- Corner decorations -->
        <div
          style="
            position: absolute;
            top: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            top: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>
  
        <div
          style="
            position: absolute;
            bottom: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            bottom: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>`
    }

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="margin-bottom: 1.5rem;">
            <div
              style="
                display: inline-block;
                border: 2px solid ${custom?.disableTitleBorder ? 'transparent' : custom?.colors?.titleBorder || 'var(--destructive)'};
                padding: 0.375rem 1rem;
              "
            >
              <h1
                style="
                  font-size: var(--text-6xl);
                  font-weight: var(--font-weight-semibold);
                  color: ${custom?.colors?.titleColor || 'var(--foreground)'};
                  letter-spacing: -0.02em;
                  margin: 0;
                "
              >
                ERROR
              </h1>
            </div>
            <div
              style="
                height: 2px;
                background-color: var(--border);
                width: calc(100% + 3rem);
                margin-left: -1.5rem;
                margin-top: 1.5rem;
              "
            ></div>
          </div>

          <h2
            style="
              font-size: var(--text-2xl);
              font-weight: var(--font-weight-semibold);
              color: var(--foreground);
              margin: 0 0 1rem;
            "
          >
            Something went wrong
          </h2>

          <div
            style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                border: 2px solid var(--border);
                background-color: var(--muted);
                padding: 0.375rem 0.75rem;
                margin: 0 0 1rem;
                flex-wrap: wrap;
                justify-content: center;
            "
            >
            <span
                style="
                font-size: 0.75rem;
                color: var(--muted-foreground);
                font-weight: var(--font-weight-semibold);
                "
            >
                CODE:
            </span>
            <span
                style="
                font-size: var(--text-sm);
                font-family: var(--default-mono-font-family, monospace);
                color: var(--foreground);
                word-break: break-all;
                "
            >
                ${sanitize(code)}
            </span>
            </div>

          <p
            style="
              color: var(--muted-foreground);
              max-width: 28rem;
              margin: 0 auto;
              font-size: var(--text-sm);
              line-height: 1.5;
              text-wrap: pretty;
            "
          >
            ${!description ? `We encountered an unexpected error. Please try again or return to the home page. If you're a developer, you can find more information about the error <a href='https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}' target='_blank' rel="noopener noreferrer" style='color: var(--foreground); text-decoration: underline;'>here</a>.` : description}
          </p>
        </div>

        <div
          style="
            display: flex;
            gap: 0.75rem;
            margin-top: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          "
        >
          <a
            href="/"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: var(--primary);
                color: var(--primary-foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Go Home
            </div>
          </a>
          <a
            href="https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}?askai=${encodeURIComponent(`What does the error code ${code} mean?`)}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: transparent;
                color: var(--foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Ask AI
            </div>
          </a>
        </div>
      </div>
    </div>
  </body>
</html>`;
};
var error = createAuthEndpoint(
  '/error',
  {
    method: 'GET',
    metadata: {
      ...HIDE_METADATA,
      openapi: {
        description: 'Displays an error page',
        responses: {
          200: {
            description: 'Success',
            content: {
              'text/html': {
                schema: {
                  type: 'string',
                  description: 'The HTML content of the error page',
                },
              },
            },
          },
        },
      },
    },
  },
  async (c) => {
    const url = new URL(c.request?.url || '');
    const unsanitizedCode = url.searchParams.get('error') || 'UNKNOWN';
    const unsanitizedDescription =
      url.searchParams.get('error_description') || null;
    const safeCode = /^[\'A-Za-z0-9_-]+$/.test(unsanitizedCode || '')
      ? unsanitizedCode
      : 'UNKNOWN';
    const safeDescription = unsanitizedDescription
      ? sanitize(unsanitizedDescription)
      : null;
    const queryParams = new URLSearchParams();
    queryParams.set('error', safeCode);
    if (unsanitizedDescription)
      queryParams.set('error_description', unsanitizedDescription);
    const options = c.context.options;
    const errorURL = options.onAPIError?.errorURL;
    if (errorURL)
      return new Response(null, {
        status: 302,
        headers: {
          Location: `${errorURL}${errorURL.includes('?') ? '&' : '?'}${queryParams.toString()}`,
        },
      });
    if (isProduction && !options.onAPIError?.customizeDefaultErrorPage)
      return new Response(null, {
        status: 302,
        headers: { Location: `/?${queryParams.toString()}` },
      });
    return new Response(html(c.context.options, safeCode, safeDescription), {
      headers: { 'Content-Type': 'text/html' },
    });
  }
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/ok.mjs
var ok = createAuthEndpoint(
  '/ok',
  {
    method: 'GET',
    metadata: {
      ...HIDE_METADATA,
      openapi: {
        description: 'Check if the API is working',
        responses: {
          200: {
            description: 'API is working',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    ok: {
                      type: 'boolean',
                      description: 'Indicates if the API is working',
                    },
                  },
                  required: ['ok'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    return ctx.json({ ok: true });
  }
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/utils/password.mjs
async function validatePassword(ctx, data) {
  const credentialAccount = (
    await ctx.context.internalAdapter.findAccounts(data.userId)
  )?.find((account) => account.providerId === 'credential');
  const currentPassword = credentialAccount?.password;
  if (!credentialAccount || !currentPassword) return false;
  return await ctx.context.password.verify({
    hash: currentPassword,
    password: data.password,
  });
}
async function checkPassword(userId, c) {
  const credentialAccount = (
    await c.context.internalAdapter.findAccounts(userId)
  )?.find((account) => account.providerId === 'credential');
  const currentPassword = credentialAccount?.password;
  const password = c.body.password;
  if (!credentialAccount || !currentPassword || !password) {
    if (password) await c.context.password.hash(password);
    throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_PASSWORD);
  }
  if (
    !(await c.context.password.verify({
      hash: currentPassword,
      password,
    }))
  )
    throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_PASSWORD);
  return true;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/password.mjs
function redirectError(ctx, callbackURL, query) {
  const url = callbackURL
    ? new URL(callbackURL, ctx.baseURL)
    : new URL(`${ctx.baseURL}/error`);
  if (query)
    Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.href;
}
function redirectCallback(ctx, callbackURL, query) {
  const url = new URL(callbackURL, ctx.baseURL);
  if (query)
    Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.href;
}
var requestPasswordReset = createAuthEndpoint(
  '/request-password-reset',
  {
    method: 'POST',
    body: z$1.object({
      email: z$1
        .email()
        .meta({
          description:
            'The email address of the user to send a password reset email to',
        }),
      redirectTo: z$1
        .string()
        .meta({
          description:
            "The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN",
        })
        .optional(),
    }),
    metadata: {
      openapi: {
        operationId: 'requestPasswordReset',
        description: 'Send a password reset email to the user',
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'boolean' },
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
    use: [originCheck((ctx) => ctx.body.redirectTo)],
  },
  async (ctx) => {
    if (!ctx.context.options.emailAndPassword?.sendResetPassword) {
      ctx.context.logger.error(
        "Reset password isn't enabled.Please pass an emailAndPassword.sendResetPassword function in your auth config!"
      );
      throw APIError.from('BAD_REQUEST', {
        message: "Reset password isn't enabled",
        code: 'RESET_PASSWORD_DISABLED',
      });
    }
    const { email, redirectTo } = ctx.body;
    const user = await ctx.context.internalAdapter.findUserByEmail(email, {
      includeAccounts: true,
    });
    if (!user) {
      /**
       * We simulate the verification token generation and the database lookup
       * to mitigate timing attacks.
       */
      generateId$1(24);
      await ctx.context.internalAdapter.findVerificationValue(
        'dummy-verification-token'
      );
      ctx.context.logger.error('Reset Password: User not found', { email });
      return ctx.json({
        status: true,
        message:
          'If this email exists in our system, check your email for the reset link',
      });
    }
    const expiresAt = getDate(
      ctx.context.options.emailAndPassword.resetPasswordTokenExpiresIn ||
        3600 * 1,
      'sec'
    );
    const verificationToken = generateId$1(24);
    await ctx.context.internalAdapter.createVerificationValue({
      value: user.user.id,
      identifier: `reset-password:${verificationToken}`,
      expiresAt,
    });
    const callbackURL = redirectTo ? encodeURIComponent(redirectTo) : '';
    const url = `${ctx.context.baseURL}/reset-password/${verificationToken}?callbackURL=${callbackURL}`;
    await ctx.context.runInBackgroundOrAwait(
      ctx.context.options.emailAndPassword.sendResetPassword(
        {
          user: user.user,
          url,
          token: verificationToken,
        },
        ctx.request
      )
    );
    return ctx.json({
      status: true,
      message:
        'If this email exists in our system, check your email for the reset link',
    });
  }
);
var requestPasswordResetCallback = createAuthEndpoint(
  '/reset-password/:token',
  {
    method: 'GET',
    operationId: 'forgetPasswordCallback',
    query: z$1.object({
      callbackURL: z$1
        .string()
        .meta({
          description: 'The URL to redirect the user to reset their password',
        }),
    }),
    use: [originCheck((ctx) => ctx.query.callbackURL)],
    metadata: {
      openapi: {
        operationId: 'resetPasswordCallback',
        description: 'Redirects the user to the callback URL with the token',
        parameters: [
          {
            name: 'token',
            in: 'path',
            required: true,
            description: 'The token to reset the password',
            schema: { type: 'string' },
          },
          {
            name: 'callbackURL',
            in: 'query',
            required: true,
            description: 'The URL to redirect the user to reset their password',
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { token: { type: 'string' } },
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    const { token } = ctx.params;
    const { callbackURL } = ctx.query;
    if (!token || !callbackURL)
      throw ctx.redirect(
        redirectError(ctx.context, callbackURL, { error: 'INVALID_TOKEN' })
      );
    const verification =
      await ctx.context.internalAdapter.findVerificationValue(
        `reset-password:${token}`
      );
    if (!verification || verification.expiresAt < /* @__PURE__ */ new Date())
      throw ctx.redirect(
        redirectError(ctx.context, callbackURL, { error: 'INVALID_TOKEN' })
      );
    throw ctx.redirect(redirectCallback(ctx.context, callbackURL, { token }));
  }
);
var resetPassword = createAuthEndpoint(
  '/reset-password',
  {
    method: 'POST',
    operationId: 'resetPassword',
    query: z$1.object({ token: z$1.string().optional() }).optional(),
    body: z$1.object({
      newPassword: z$1
        .string()
        .meta({ description: 'The new password to set' }),
      token: z$1
        .string()
        .meta({ description: 'The token to reset the password' })
        .optional(),
    }),
    metadata: {
      openapi: {
        operationId: 'resetPassword',
        description: 'Reset the password for a user',
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { status: { type: 'boolean' } },
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    const token = ctx.body.token || ctx.query?.token;
    if (!token)
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_TOKEN);
    const { newPassword } = ctx.body;
    const minLength = ctx.context.password?.config.minPasswordLength;
    const maxLength = ctx.context.password?.config.maxPasswordLength;
    if (newPassword.length < minLength)
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
    if (newPassword.length > maxLength)
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.PASSWORD_TOO_LONG);
    const id = `reset-password:${token}`;
    const verification =
      await ctx.context.internalAdapter.findVerificationValue(id);
    if (!verification || verification.expiresAt < /* @__PURE__ */ new Date())
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_TOKEN);
    const userId = verification.value;
    const hashedPassword = await ctx.context.password.hash(newPassword);
    if (
      !(await ctx.context.internalAdapter.findAccounts(userId)).find(
        (ac) => ac.providerId === 'credential'
      )
    )
      await ctx.context.internalAdapter.createAccount({
        userId,
        providerId: 'credential',
        password: hashedPassword,
        accountId: userId,
      });
    else
      await ctx.context.internalAdapter.updatePassword(userId, hashedPassword);
    await ctx.context.internalAdapter.deleteVerificationByIdentifier(id);
    if (ctx.context.options.emailAndPassword?.onPasswordReset) {
      const user = await ctx.context.internalAdapter.findUserById(userId);
      if (user)
        await ctx.context.options.emailAndPassword.onPasswordReset(
          { user },
          ctx.request
        );
    }
    if (ctx.context.options.emailAndPassword?.revokeSessionsOnPasswordReset)
      await ctx.context.internalAdapter.deleteSessions(userId);
    return ctx.json({ status: true });
  }
);
var verifyPassword = createAuthEndpoint(
  '/verify-password',
  {
    method: 'POST',
    body: z$1.object({
      password: z$1.string().meta({ description: 'The password to verify' }),
    }),
    metadata: {
      scope: 'server',
      openapi: {
        operationId: 'verifyPassword',
        description: "Verify the current user's password",
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { status: { type: 'boolean' } },
                },
              },
            },
          },
        },
      },
    },
    use: [sensitiveSessionMiddleware],
  },
  async (ctx) => {
    const { password } = ctx.body;
    const session = ctx.context.session;
    if (
      !(await validatePassword(ctx, {
        password,
        userId: session.user.id,
      }))
    )
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_PASSWORD);
    return ctx.json({ status: true });
  }
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/sign-in.mjs
var socialSignInBodySchema = z$1.object({
  callbackURL: z$1
    .string()
    .meta({
      description: 'Callback URL to redirect to after the user has signed in',
    })
    .optional(),
  newUserCallbackURL: z$1.string().optional(),
  errorCallbackURL: z$1
    .string()
    .meta({ description: 'Callback URL to redirect to if an error happens' })
    .optional(),
  provider: SocialProviderListEnum,
  disableRedirect: z$1
    .boolean()
    .meta({
      description:
        'Disable automatic redirection to the provider. Useful for handling the redirection yourself',
    })
    .optional(),
  idToken: z$1.optional(
    z$1.object({
      token: z$1.string().meta({ description: 'ID token from the provider' }),
      nonce: z$1
        .string()
        .meta({ description: 'Nonce used to generate the token' })
        .optional(),
      accessToken: z$1
        .string()
        .meta({ description: 'Access token from the provider' })
        .optional(),
      refreshToken: z$1
        .string()
        .meta({ description: 'Refresh token from the provider' })
        .optional(),
      expiresAt: z$1
        .number()
        .meta({ description: 'Expiry date of the token' })
        .optional(),
      user: z$1
        .object({
          name: z$1
            .object({
              firstName: z$1.string().optional(),
              lastName: z$1.string().optional(),
            })
            .optional(),
          email: z$1.string().optional(),
        })
        .meta({
          description:
            'The user object from the provider. Only available for some providers like Apple.',
        })
        .optional(),
    })
  ),
  scopes: z$1
    .array(z$1.string())
    .meta({
      description:
        'Array of scopes to request from the provider. This will override the default scopes passed.',
    })
    .optional(),
  requestSignUp: z$1
    .boolean()
    .meta({
      description:
        'Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider',
    })
    .optional(),
  loginHint: z$1
    .string()
    .meta({
      description: 'The login hint to use for the authorization code request',
    })
    .optional(),
  additionalData: z$1
    .record(z$1.string(), z$1.any())
    .optional()
    .meta({
      description: 'Additional data to be passed through the OAuth flow',
    }),
});
var signInSocial = () =>
  createAuthEndpoint(
    '/sign-in/social',
    {
      method: 'POST',
      operationId: 'socialSignIn',
      body: socialSignInBodySchema,
      metadata: {
        $Infer: {
          body: {},
          returned: {},
        },
        openapi: {
          description: 'Sign in with a social provider',
          operationId: 'socialSignIn',
          responses: {
            200: {
              description:
                'Success - Returns either session details or redirect URL',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    description: 'Session response when idToken is provided',
                    properties: {
                      token: { type: 'string' },
                      user: {
                        type: 'object',
                        $ref: '#/components/schemas/User',
                      },
                      url: { type: 'string' },
                      redirect: {
                        type: 'boolean',
                        enum: [false],
                      },
                    },
                    required: ['redirect', 'token', 'user'],
                  },
                },
              },
            },
          },
        },
      },
    },
    async (c) => {
      const provider = await getAwaitableValue(c.context.socialProviders, {
        value: c.body.provider,
      });
      if (!provider) {
        c.context.logger.error(
          'Provider not found. Make sure to add the provider in your auth config',
          { provider: c.body.provider }
        );
        throw APIError.from('NOT_FOUND', BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
      }
      if (c.body.idToken) {
        if (!provider.verifyIdToken) {
          c.context.logger.error(
            'Provider does not support id token verification',
            { provider: c.body.provider }
          );
          throw APIError.from(
            'NOT_FOUND',
            BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED
          );
        }
        const { token, nonce } = c.body.idToken;
        if (!(await provider.verifyIdToken(token, nonce))) {
          c.context.logger.error('Invalid id token', {
            provider: c.body.provider,
          });
          throw APIError.from('UNAUTHORIZED', BASE_ERROR_CODES.INVALID_TOKEN);
        }
        const userInfo = await provider.getUserInfo({
          idToken: token,
          accessToken: c.body.idToken.accessToken,
          refreshToken: c.body.idToken.refreshToken,
          user: c.body.idToken.user,
        });
        if (!userInfo || !userInfo?.user) {
          c.context.logger.error('Failed to get user info', {
            provider: c.body.provider,
          });
          throw APIError.from(
            'UNAUTHORIZED',
            BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO
          );
        }
        if (!userInfo.user.email) {
          c.context.logger.error('User email not found', {
            provider: c.body.provider,
          });
          throw APIError.from(
            'UNAUTHORIZED',
            BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND
          );
        }
        const data = await handleOAuthUserInfo(c, {
          userInfo: {
            ...userInfo.user,
            email: userInfo.user.email,
            id: String(userInfo.user.id),
            name: userInfo.user.name || '',
            image: userInfo.user.image,
            emailVerified: userInfo.user.emailVerified || false,
          },
          account: {
            providerId: provider.id,
            accountId: String(userInfo.user.id),
            accessToken: c.body.idToken.accessToken,
          },
          callbackURL: c.body.callbackURL,
          disableSignUp:
            (provider.disableImplicitSignUp && !c.body.requestSignUp) ||
            provider.disableSignUp,
        });
        if (data.error)
          throw APIError.from('UNAUTHORIZED', {
            message: data.error,
            code: 'OAUTH_LINK_ERROR',
          });
        await setSessionCookie(c, data.data);
        return c.json({
          redirect: false,
          token: data.data.session.token,
          url: void 0,
          user: parseUserOutput(c.context.options, data.data.user),
        });
      }
      const { codeVerifier, state } = await generateState(
        c,
        void 0,
        c.body.additionalData
      );
      const url = await provider.createAuthorizationURL({
        state,
        codeVerifier,
        redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
        scopes: c.body.scopes,
        loginHint: c.body.loginHint,
      });
      if (!c.body.disableRedirect) c.setHeader('Location', url.toString());
      return c.json({
        url: url.toString(),
        redirect: !c.body.disableRedirect,
      });
    }
  );
var signInEmail = () =>
  createAuthEndpoint(
    '/sign-in/email',
    {
      method: 'POST',
      operationId: 'signInEmail',
      use: [formCsrfMiddleware],
      body: z$1.object({
        email: z$1.string().meta({ description: 'Email of the user' }),
        password: z$1.string().meta({ description: 'Password of the user' }),
        callbackURL: z$1
          .string()
          .meta({
            description:
              'Callback URL to use as a redirect for email verification',
          })
          .optional(),
        rememberMe: z$1
          .boolean()
          .meta({
            description:
              'If this is false, the session will not be remembered. Default is `true`.',
          })
          .default(true)
          .optional(),
      }),
      metadata: {
        allowedMediaTypes: [
          'application/x-www-form-urlencoded',
          'application/json',
        ],
        $Infer: {
          body: {},
          returned: {},
        },
        openapi: {
          operationId: 'signInEmail',
          description: 'Sign in with email and password',
          responses: {
            200: {
              description:
                'Success - Returns either session details or redirect URL',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    description: 'Session response when idToken is provided',
                    properties: {
                      redirect: {
                        type: 'boolean',
                        enum: [false],
                      },
                      token: {
                        type: 'string',
                        description: 'Session token',
                      },
                      url: {
                        type: 'string',
                        nullable: true,
                      },
                      user: {
                        type: 'object',
                        $ref: '#/components/schemas/User',
                      },
                    },
                    required: ['redirect', 'token', 'user'],
                  },
                },
              },
            },
          },
        },
      },
    },
    async (ctx) => {
      if (!ctx.context.options?.emailAndPassword?.enabled) {
        ctx.context.logger.error(
          'Email and password is not enabled. Make sure to enable it in the options on you `auth.ts` file. Check `https://better-auth.com/docs/authentication/email-password` for more!'
        );
        throw APIError.from('BAD_REQUEST', {
          code: 'EMAIL_PASSWORD_DISABLED',
          message: 'Email and password is not enabled',
        });
      }
      const { email, password } = ctx.body;
      if (!z$1.email().safeParse(email).success)
        throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_EMAIL);
      const user = await ctx.context.internalAdapter.findUserByEmail(email, {
        includeAccounts: true,
      });
      if (!user) {
        await ctx.context.password.hash(password);
        ctx.context.logger.error('User not found', { email });
        throw APIError.from(
          'UNAUTHORIZED',
          BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD
        );
      }
      const credentialAccount = user.accounts.find(
        (a) => a.providerId === 'credential'
      );
      if (!credentialAccount) {
        await ctx.context.password.hash(password);
        ctx.context.logger.error('Credential account not found', { email });
        throw APIError.from(
          'UNAUTHORIZED',
          BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD
        );
      }
      const currentPassword = credentialAccount?.password;
      if (!currentPassword) {
        await ctx.context.password.hash(password);
        ctx.context.logger.error('Password not found', { email });
        throw APIError.from(
          'UNAUTHORIZED',
          BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD
        );
      }
      if (
        !(await ctx.context.password.verify({
          hash: currentPassword,
          password,
        }))
      ) {
        ctx.context.logger.error('Invalid password');
        throw APIError.from(
          'UNAUTHORIZED',
          BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD
        );
      }
      if (
        ctx.context.options?.emailAndPassword?.requireEmailVerification &&
        !user.user.emailVerified
      ) {
        if (!ctx.context.options?.emailVerification?.sendVerificationEmail)
          throw APIError.from('FORBIDDEN', BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
        if (ctx.context.options?.emailVerification?.sendOnSignIn) {
          const token = await createEmailVerificationToken(
            ctx.context.secret,
            user.user.email,
            void 0,
            ctx.context.options.emailVerification?.expiresIn
          );
          const callbackURL = ctx.body.callbackURL
            ? encodeURIComponent(ctx.body.callbackURL)
            : encodeURIComponent('/');
          const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
          await ctx.context.runInBackgroundOrAwait(
            ctx.context.options.emailVerification.sendVerificationEmail(
              {
                user: user.user,
                url,
                token,
              },
              ctx.request
            )
          );
        }
        throw APIError.from('FORBIDDEN', BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
      }
      const session = await ctx.context.internalAdapter.createSession(
        user.user.id,
        ctx.body.rememberMe === false
      );
      if (!session) {
        ctx.context.logger.error('Failed to create session');
        throw APIError.from(
          'UNAUTHORIZED',
          BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION
        );
      }
      await setSessionCookie(
        ctx,
        {
          session,
          user: user.user,
        },
        ctx.body.rememberMe === false
      );
      if (ctx.body.callbackURL) ctx.setHeader('Location', ctx.body.callbackURL);
      return ctx.json({
        redirect: !!ctx.body.callbackURL,
        token: session.token,
        url: ctx.body.callbackURL,
        user: parseUserOutput(ctx.context.options, user.user),
      });
    }
  );
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/sign-out.mjs
var signOut = createAuthEndpoint(
  '/sign-out',
  {
    method: 'POST',
    operationId: 'signOut',
    requireHeaders: true,
    metadata: {
      openapi: {
        operationId: 'signOut',
        description: 'Sign out the current user',
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: { success: { type: 'boolean' } },
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    const sessionCookieToken = await ctx.getSignedCookie(
      ctx.context.authCookies.sessionToken.name,
      ctx.context.secret
    );
    if (sessionCookieToken)
      try {
        await ctx.context.internalAdapter.deleteSession(sessionCookieToken);
      } catch (e) {
        ctx.context.logger.error('Failed to delete session from database', e);
      }
    deleteSessionCookie(ctx);
    return ctx.json({ success: true });
  }
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/sign-up.mjs
var signUpEmailBodySchema = z$1
  .object({
    name: z$1.string(),
    email: z$1.email(),
    password: z$1.string().nonempty(),
    image: z$1.string().optional(),
    callbackURL: z$1.string().optional(),
    rememberMe: z$1.boolean().optional(),
  })
  .and(z$1.record(z$1.string(), z$1.any()));
var signUpEmail = () =>
  createAuthEndpoint(
    '/sign-up/email',
    {
      method: 'POST',
      operationId: 'signUpWithEmailAndPassword',
      use: [formCsrfMiddleware],
      body: signUpEmailBodySchema,
      metadata: {
        allowedMediaTypes: [
          'application/x-www-form-urlencoded',
          'application/json',
        ],
        $Infer: {
          body: {},
          returned: {},
        },
        openapi: {
          operationId: 'signUpWithEmailAndPassword',
          description: 'Sign up a user using email and password',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'The name of the user',
                    },
                    email: {
                      type: 'string',
                      description: 'The email of the user',
                    },
                    password: {
                      type: 'string',
                      description: 'The password of the user',
                    },
                    image: {
                      type: 'string',
                      description: 'The profile image URL of the user',
                    },
                    callbackURL: {
                      type: 'string',
                      description:
                        'The URL to use for email verification callback',
                    },
                    rememberMe: {
                      type: 'boolean',
                      description:
                        'If this is false, the session will not be remembered. Default is `true`.',
                    },
                  },
                  required: ['name', 'email', 'password'],
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Successfully created user',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      token: {
                        type: 'string',
                        nullable: true,
                        description: 'Authentication token for the session',
                      },
                      user: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'string',
                            description: 'The unique identifier of the user',
                          },
                          email: {
                            type: 'string',
                            format: 'email',
                            description: 'The email address of the user',
                          },
                          name: {
                            type: 'string',
                            description: 'The name of the user',
                          },
                          image: {
                            type: 'string',
                            format: 'uri',
                            nullable: true,
                            description: 'The profile image URL of the user',
                          },
                          emailVerified: {
                            type: 'boolean',
                            description: 'Whether the email has been verified',
                          },
                          createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'When the user was created',
                          },
                          updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'When the user was last updated',
                          },
                        },
                        required: [
                          'id',
                          'email',
                          'name',
                          'emailVerified',
                          'createdAt',
                          'updatedAt',
                        ],
                      },
                    },
                    required: ['user'],
                  },
                },
              },
            },
            422: {
              description:
                'Unprocessable Entity. User already exists or failed to create user.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: { message: { type: 'string' } },
                  },
                },
              },
            },
          },
        },
      },
    },
    async (ctx) => {
      return runWithTransaction(ctx.context.adapter, async () => {
        if (
          !ctx.context.options.emailAndPassword?.enabled ||
          ctx.context.options.emailAndPassword?.disableSignUp
        )
          throw APIError.from('BAD_REQUEST', {
            message: 'Email and password sign up is not enabled',
            code: 'EMAIL_PASSWORD_SIGN_UP_DISABLED',
          });
        const body = ctx.body;
        const {
          name,
          email,
          password,
          image,
          callbackURL: _callbackURL,
          rememberMe,
          ...rest
        } = body;
        if (!z$1.email().safeParse(email).success)
          throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_EMAIL);
        if (!password || typeof password !== 'string')
          throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_PASSWORD);
        const minPasswordLength = ctx.context.password.config.minPasswordLength;
        if (password.length < minPasswordLength) {
          ctx.context.logger.error('Password is too short');
          throw APIError.from(
            'BAD_REQUEST',
            BASE_ERROR_CODES.PASSWORD_TOO_SHORT
          );
        }
        const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
        if (password.length > maxPasswordLength) {
          ctx.context.logger.error('Password is too long');
          throw APIError.from(
            'BAD_REQUEST',
            BASE_ERROR_CODES.PASSWORD_TOO_LONG
          );
        }
        const shouldReturnGenericDuplicateResponse =
          ctx.context.options.emailAndPassword.requireEmailVerification;
        const shouldSkipAutoSignIn =
          ctx.context.options.emailAndPassword.autoSignIn === false ||
          shouldReturnGenericDuplicateResponse;
        const additionalUserFields = parseUserInput(
          ctx.context.options,
          rest,
          'create'
        );
        const normalizedEmail = email.toLowerCase();
        const dbUser =
          await ctx.context.internalAdapter.findUserByEmail(normalizedEmail);
        if (dbUser?.user) {
          ctx.context.logger.info(
            `Sign-up attempt for existing email: ${email}`
          );
          if (shouldReturnGenericDuplicateResponse) {
            /**
             * Hash the password to reduce timing differences
             * between existing and non-existing emails.
             */
            await ctx.context.password.hash(password);
            if (ctx.context.options.emailAndPassword?.onExistingUserSignUp)
              await ctx.context.runInBackgroundOrAwait(
                ctx.context.options.emailAndPassword.onExistingUserSignUp(
                  { user: dbUser.user },
                  ctx.request
                )
              );
            const now = /* @__PURE__ */ new Date();
            const generatedId =
              ctx.context.generateId({ model: 'user' }) || generateId$1();
            const coreFields = {
              name,
              email: normalizedEmail,
              emailVerified: false,
              image: image || null,
              createdAt: now,
              updatedAt: now,
            };
            const customSyntheticUser =
              ctx.context.options.emailAndPassword?.customSyntheticUser;
            let syntheticUser;
            if (customSyntheticUser) {
              const additionalFieldKeys = Object.keys(
                ctx.context.options.user?.additionalFields ?? {}
              );
              const additionalFields = {};
              for (const key of additionalFieldKeys)
                if (key in additionalUserFields)
                  additionalFields[key] = additionalUserFields[key];
              syntheticUser = customSyntheticUser({
                coreFields,
                additionalFields,
                id: generatedId,
              });
            } else
              syntheticUser = {
                ...coreFields,
                ...additionalUserFields,
                id: generatedId,
              };
            return ctx.json({
              token: null,
              user: parseUserOutput(ctx.context.options, syntheticUser),
            });
          }
          throw APIError.from(
            'UNPROCESSABLE_ENTITY',
            BASE_ERROR_CODES.USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL
          );
        }
        /**
         * Hash the password
         *
         * This is done prior to creating the user
         * to ensure that any plugin that
         * may break the hashing should break
         * before the user is created.
         */
        const hash = await ctx.context.password.hash(password);
        let createdUser;
        try {
          createdUser = await ctx.context.internalAdapter.createUser({
            email: normalizedEmail,
            name,
            image,
            ...additionalUserFields,
            emailVerified: false,
          });
          if (!createdUser)
            throw APIError.from(
              'BAD_REQUEST',
              BASE_ERROR_CODES.FAILED_TO_CREATE_USER
            );
        } catch (e) {
          if (isDevelopment())
            ctx.context.logger.error('Failed to create user', e);
          if (isAPIError(e)) throw e;
          ctx.context.logger?.error('Failed to create user', e);
          throw APIError.from(
            'UNPROCESSABLE_ENTITY',
            BASE_ERROR_CODES.FAILED_TO_CREATE_USER
          );
        }
        if (!createdUser)
          throw APIError.from(
            'UNPROCESSABLE_ENTITY',
            BASE_ERROR_CODES.FAILED_TO_CREATE_USER
          );
        await ctx.context.internalAdapter.linkAccount({
          userId: createdUser.id,
          providerId: 'credential',
          accountId: createdUser.id,
          password: hash,
        });
        if (
          ctx.context.options.emailVerification?.sendOnSignUp ??
          ctx.context.options.emailAndPassword.requireEmailVerification
        ) {
          const token = await createEmailVerificationToken(
            ctx.context.secret,
            createdUser.email,
            void 0,
            ctx.context.options.emailVerification?.expiresIn
          );
          const callbackURL = body.callbackURL
            ? encodeURIComponent(body.callbackURL)
            : encodeURIComponent('/');
          const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
          if (ctx.context.options.emailVerification?.sendVerificationEmail)
            await ctx.context.runInBackgroundOrAwait(
              ctx.context.options.emailVerification.sendVerificationEmail(
                {
                  user: createdUser,
                  url,
                  token,
                },
                ctx.request
              )
            );
        }
        if (shouldSkipAutoSignIn)
          return ctx.json({
            token: null,
            user: parseUserOutput(ctx.context.options, createdUser),
          });
        const session = await ctx.context.internalAdapter.createSession(
          createdUser.id,
          rememberMe === false
        );
        if (!session)
          throw APIError.from(
            'BAD_REQUEST',
            BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION
          );
        await setSessionCookie(
          ctx,
          {
            session,
            user: createdUser,
          },
          rememberMe === false
        );
        return ctx.json({
          token: session.token,
          user: parseUserOutput(ctx.context.options, createdUser),
        });
      });
    }
  );
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/update-session.mjs
var updateSessionBodySchema = z$1.record(
  z$1.string().meta({ description: 'Field name must be a string' }),
  z$1.any()
);
var updateSession = () =>
  createAuthEndpoint(
    '/update-session',
    {
      method: 'POST',
      operationId: 'updateSession',
      body: updateSessionBodySchema,
      use: [sessionMiddleware],
      metadata: {
        $Infer: { body: {} },
        openapi: {
          operationId: 'updateSession',
          description: 'Update the current session',
          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      session: {
                        type: 'object',
                        $ref: '#/components/schemas/Session',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    async (ctx) => {
      const body = ctx.body;
      if (typeof body !== 'object' || Array.isArray(body))
        throw APIError.from(
          'BAD_REQUEST',
          BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT
        );
      const session = ctx.context.session;
      const additionalFields = parseSessionInput(
        ctx.context.options,
        body,
        'update'
      );
      if (Object.keys(additionalFields).length === 0)
        throw APIError.fromStatus('BAD_REQUEST', {
          message: 'No fields to update',
        });
      const newSession = (await ctx.context.internalAdapter.updateSession(
        session.session.token,
        {
          ...additionalFields,
          updatedAt: /* @__PURE__ */ new Date(),
        }
      )) ?? {
        ...session.session,
        ...additionalFields,
        updatedAt: /* @__PURE__ */ new Date(),
      };
      await setSessionCookie(ctx, {
        session: newSession,
        user: session.user,
      });
      return ctx.json({
        session: parseSessionOutput(ctx.context.options, newSession),
      });
    }
  );
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/routes/update-user.mjs
var updateUserBodySchema = z$1.record(
  z$1.string().meta({ description: 'Field name must be a string' }),
  z$1.any()
);
var updateUser = () =>
  createAuthEndpoint(
    '/update-user',
    {
      method: 'POST',
      operationId: 'updateUser',
      body: updateUserBodySchema,
      use: [sessionMiddleware],
      metadata: {
        $Infer: { body: {} },
        openapi: {
          operationId: 'updateUser',
          description: 'Update the current user',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'The name of the user',
                    },
                    image: {
                      type: 'string',
                      description: 'The image of the user',
                      nullable: true,
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      user: {
                        type: 'object',
                        $ref: '#/components/schemas/User',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    async (ctx) => {
      const body = ctx.body;
      if (typeof body !== 'object' || Array.isArray(body))
        throw APIError.from(
          'BAD_REQUEST',
          BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT
        );
      if (body.email)
        throw APIError.from(
          'BAD_REQUEST',
          BASE_ERROR_CODES.EMAIL_CAN_NOT_BE_UPDATED
        );
      const { name, image, ...rest } = body;
      const session = ctx.context.session;
      const additionalFields = parseUserInput(
        ctx.context.options,
        rest,
        'update'
      );
      if (
        image === void 0 &&
        name === void 0 &&
        Object.keys(additionalFields).length === 0
      )
        throw APIError.fromStatus('BAD_REQUEST', {
          message: 'No fields to update',
        });
      const updatedUser = (await ctx.context.internalAdapter.updateUser(
        session.user.id,
        {
          name,
          image,
          ...additionalFields,
        }
      )) ?? {
        ...session.user,
        ...(name !== void 0 && { name }),
        ...(image !== void 0 && { image }),
        ...additionalFields,
      };
      /**
       * Update the session cookie with the new user data
       */
      await setSessionCookie(ctx, {
        session: session.session,
        user: updatedUser,
      });
      return ctx.json({ status: true });
    }
  );
var changePassword = createAuthEndpoint(
  '/change-password',
  {
    method: 'POST',
    operationId: 'changePassword',
    body: z$1.object({
      newPassword: z$1
        .string()
        .meta({ description: 'The new password to set' }),
      currentPassword: z$1
        .string()
        .meta({ description: 'The current password is required' }),
      revokeOtherSessions: z$1
        .boolean()
        .meta({ description: 'Must be a boolean value' })
        .optional(),
    }),
    use: [sensitiveSessionMiddleware],
    metadata: {
      openapi: {
        operationId: 'changePassword',
        description: 'Change the password of the user',
        responses: {
          200: {
            description: 'Password successfully changed',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    token: {
                      type: 'string',
                      nullable: true,
                      description:
                        'New session token if other sessions were revoked',
                    },
                    user: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          description: 'The unique identifier of the user',
                        },
                        email: {
                          type: 'string',
                          format: 'email',
                          description: 'The email address of the user',
                        },
                        name: {
                          type: 'string',
                          description: 'The name of the user',
                        },
                        image: {
                          type: 'string',
                          format: 'uri',
                          nullable: true,
                          description: 'The profile image URL of the user',
                        },
                        emailVerified: {
                          type: 'boolean',
                          description: 'Whether the email has been verified',
                        },
                        createdAt: {
                          type: 'string',
                          format: 'date-time',
                          description: 'When the user was created',
                        },
                        updatedAt: {
                          type: 'string',
                          format: 'date-time',
                          description: 'When the user was last updated',
                        },
                      },
                      required: [
                        'id',
                        'email',
                        'name',
                        'emailVerified',
                        'createdAt',
                        'updatedAt',
                      ],
                    },
                  },
                  required: ['user'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    const { newPassword, currentPassword, revokeOtherSessions } = ctx.body;
    const session = ctx.context.session;
    const minPasswordLength = ctx.context.password.config.minPasswordLength;
    if (newPassword.length < minPasswordLength) {
      ctx.context.logger.error('Password is too short');
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
    }
    const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
    if (newPassword.length > maxPasswordLength) {
      ctx.context.logger.error('Password is too long');
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.PASSWORD_TOO_LONG);
    }
    const account = (
      await ctx.context.internalAdapter.findAccounts(session.user.id)
    ).find(
      (account) => account.providerId === 'credential' && account.password
    );
    if (!account || !account.password)
      throw APIError.from(
        'BAD_REQUEST',
        BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND
      );
    const passwordHash = await ctx.context.password.hash(newPassword);
    if (
      !(await ctx.context.password.verify({
        hash: account.password,
        password: currentPassword,
      }))
    )
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_PASSWORD);
    await ctx.context.internalAdapter.updateAccount(account.id, {
      password: passwordHash,
    });
    let token = null;
    if (revokeOtherSessions) {
      await ctx.context.internalAdapter.deleteSessions(session.user.id);
      const newSession = await ctx.context.internalAdapter.createSession(
        session.user.id
      );
      if (!newSession)
        throw APIError.from(
          'INTERNAL_SERVER_ERROR',
          BASE_ERROR_CODES.FAILED_TO_GET_SESSION
        );
      await setSessionCookie(ctx, {
        session: newSession,
        user: session.user,
      });
      token = newSession.token;
    }
    return ctx.json({
      token,
      user: parseUserOutput(ctx.context.options, session.user),
    });
  }
);
var setPassword = createAuthEndpoint(
  {
    method: 'POST',
    body: z$1.object({
      newPassword: z$1
        .string()
        .meta({ description: 'The new password to set is required' }),
    }),
    use: [sensitiveSessionMiddleware],
  },
  async (ctx) => {
    const { newPassword } = ctx.body;
    const session = ctx.context.session;
    const minPasswordLength = ctx.context.password.config.minPasswordLength;
    if (newPassword.length < minPasswordLength) {
      ctx.context.logger.error('Password is too short');
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
    }
    const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
    if (newPassword.length > maxPasswordLength) {
      ctx.context.logger.error('Password is too long');
      throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.PASSWORD_TOO_LONG);
    }
    const account = (
      await ctx.context.internalAdapter.findAccounts(session.user.id)
    ).find(
      (account) => account.providerId === 'credential' && account.password
    );
    const passwordHash = await ctx.context.password.hash(newPassword);
    if (!account) {
      await ctx.context.internalAdapter.linkAccount({
        userId: session.user.id,
        providerId: 'credential',
        accountId: session.user.id,
        password: passwordHash,
      });
      return ctx.json({ status: true });
    }
    throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.PASSWORD_ALREADY_SET);
  }
);
var deleteUser = createAuthEndpoint(
  '/delete-user',
  {
    method: 'POST',
    use: [sensitiveSessionMiddleware],
    body: z$1.object({
      callbackURL: z$1
        .string()
        .meta({
          description:
            'The callback URL to redirect to after the user is deleted',
        })
        .optional(),
      password: z$1
        .string()
        .meta({
          description:
            'The password of the user is required to delete the user',
        })
        .optional(),
      token: z$1
        .string()
        .meta({ description: 'The token to delete the user is required' })
        .optional(),
    }),
    metadata: {
      openapi: {
        operationId: 'deleteUser',
        description: 'Delete the user',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  callbackURL: {
                    type: 'string',
                    description:
                      'The callback URL to redirect to after the user is deleted',
                  },
                  password: {
                    type: 'string',
                    description:
                      "The user's password. Required if session is not fresh",
                  },
                  token: {
                    type: 'string',
                    description: 'The deletion verification token',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'User deletion processed successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: {
                      type: 'boolean',
                      description: 'Indicates if the operation was successful',
                    },
                    message: {
                      type: 'string',
                      enum: ['User deleted', 'Verification email sent'],
                      description: 'Status message of the deletion process',
                    },
                  },
                  required: ['success', 'message'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    if (!ctx.context.options.user?.deleteUser?.enabled) {
      ctx.context.logger.error(
        'Delete user is disabled. Enable it in the options'
      );
      throw APIError.fromStatus('NOT_FOUND');
    }
    const session = ctx.context.session;
    if (ctx.body.password) {
      const account = (
        await ctx.context.internalAdapter.findAccounts(session.user.id)
      ).find(
        (account) => account.providerId === 'credential' && account.password
      );
      if (!account || !account.password)
        throw APIError.from(
          'BAD_REQUEST',
          BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND
        );
      if (
        !(await ctx.context.password.verify({
          hash: account.password,
          password: ctx.body.password,
        }))
      )
        throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.INVALID_PASSWORD);
    }
    if (ctx.body.token) {
      await deleteUserCallback({
        ...ctx,
        query: { token: ctx.body.token },
      });
      return ctx.json({
        success: true,
        message: 'User deleted',
      });
    }
    if (ctx.context.options.user.deleteUser?.sendDeleteAccountVerification) {
      const token = generateRandomString(32, '0-9', 'a-z');
      await ctx.context.internalAdapter.createVerificationValue({
        value: session.user.id,
        identifier: `delete-account-${token}`,
        expiresAt: new Date(
          Date.now() +
            (ctx.context.options.user.deleteUser?.deleteTokenExpiresIn ||
              3600 * 24) *
              1e3
        ),
      });
      const url = `${ctx.context.baseURL}/delete-user/callback?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || '/')}`;
      await ctx.context.runInBackgroundOrAwait(
        ctx.context.options.user.deleteUser.sendDeleteAccountVerification(
          {
            user: session.user,
            url,
            token,
          },
          ctx.request
        )
      );
      return ctx.json({
        success: true,
        message: 'Verification email sent',
      });
    }
    if (!ctx.body.password && ctx.context.sessionConfig.freshAge !== 0) {
      const createdAt = new Date(session.session.createdAt).getTime();
      const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
      if (Date.now() - createdAt >= freshAge)
        throw APIError.from('BAD_REQUEST', BASE_ERROR_CODES.SESSION_EXPIRED);
    }
    const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
    if (beforeDelete) await beforeDelete(session.user, ctx.request);
    await ctx.context.internalAdapter.deleteUser(session.user.id);
    await ctx.context.internalAdapter.deleteSessions(session.user.id);
    deleteSessionCookie(ctx);
    const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
    if (afterDelete) await afterDelete(session.user, ctx.request);
    return ctx.json({
      success: true,
      message: 'User deleted',
    });
  }
);
var deleteUserCallback = createAuthEndpoint(
  '/delete-user/callback',
  {
    method: 'GET',
    query: z$1.object({
      token: z$1
        .string()
        .meta({ description: 'The token to verify the deletion request' }),
      callbackURL: z$1
        .string()
        .meta({ description: 'The URL to redirect to after deletion' })
        .optional(),
    }),
    use: [originCheck((ctx) => ctx.query.callbackURL)],
    metadata: {
      openapi: {
        description:
          'Callback to complete user deletion with verification token',
        responses: {
          200: {
            description: 'User successfully deleted',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: {
                      type: 'boolean',
                      description: 'Indicates if the deletion was successful',
                    },
                    message: {
                      type: 'string',
                      enum: ['User deleted'],
                      description: 'Confirmation message',
                    },
                  },
                  required: ['success', 'message'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    if (!ctx.context.options.user?.deleteUser?.enabled) {
      ctx.context.logger.error(
        'Delete user is disabled. Enable it in the options'
      );
      throw APIError.from('NOT_FOUND', {
        message: 'Not found',
        code: 'NOT_FOUND',
      });
    }
    const session = await getSessionFromCtx(ctx);
    if (!session)
      throw APIError.from(
        'NOT_FOUND',
        BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO
      );
    const token = await ctx.context.internalAdapter.findVerificationValue(
      `delete-account-${ctx.query.token}`
    );
    if (!token || token.expiresAt < /* @__PURE__ */ new Date())
      throw APIError.from('NOT_FOUND', BASE_ERROR_CODES.INVALID_TOKEN);
    if (token.value !== session.user.id)
      throw APIError.from('NOT_FOUND', BASE_ERROR_CODES.INVALID_TOKEN);
    const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
    if (beforeDelete) await beforeDelete(session.user, ctx.request);
    await ctx.context.internalAdapter.deleteUser(session.user.id);
    await ctx.context.internalAdapter.deleteSessions(session.user.id);
    await ctx.context.internalAdapter.deleteAccounts(session.user.id);
    await ctx.context.internalAdapter.deleteVerificationByIdentifier(
      `delete-account-${ctx.query.token}`
    );
    deleteSessionCookie(ctx);
    const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
    if (afterDelete) await afterDelete(session.user, ctx.request);
    if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL || '/');
    return ctx.json({
      success: true,
      message: 'User deleted',
    });
  }
);
var changeEmail = createAuthEndpoint(
  '/change-email',
  {
    method: 'POST',
    body: z$1.object({
      newEmail: z$1
        .email()
        .meta({
          description:
            'The new email address to set must be a valid email address',
        }),
      callbackURL: z$1
        .string()
        .meta({
          description: 'The URL to redirect to after email verification',
        })
        .optional(),
    }),
    use: [sensitiveSessionMiddleware],
    metadata: {
      openapi: {
        operationId: 'changeEmail',
        responses: {
          200: {
            description: 'Email change request processed successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    user: {
                      type: 'object',
                      $ref: '#/components/schemas/User',
                    },
                    status: {
                      type: 'boolean',
                      description: 'Indicates if the request was successful',
                    },
                    message: {
                      type: 'string',
                      enum: ['Email updated', 'Verification email sent'],
                      description: 'Status message of the email change process',
                      nullable: true,
                    },
                  },
                  required: ['status'],
                },
              },
            },
          },
        },
      },
    },
  },
  async (ctx) => {
    if (!ctx.context.options.user?.changeEmail?.enabled) {
      ctx.context.logger.error('Change email is disabled.');
      throw APIError.fromStatus('BAD_REQUEST', {
        message: 'Change email is disabled',
      });
    }
    const newEmail = ctx.body.newEmail.toLowerCase();
    if (newEmail === ctx.context.session.user.email) {
      ctx.context.logger.error('Email is the same');
      throw APIError.fromStatus('BAD_REQUEST', {
        message: 'Email is the same',
      });
    }
    /**
     * Early config check: ensure at least one email-change flow is
     * available for the current session state. Without this, an
     * existing-email lookup would return 200 while a non-existing
     * email would later throw 400, leaking email existence.
     */
    const canUpdateWithoutVerification =
      ctx.context.session.user.emailVerified !== true &&
      ctx.context.options.user.changeEmail.updateEmailWithoutVerification;
    const canSendConfirmation =
      ctx.context.session.user.emailVerified &&
      ctx.context.options.user.changeEmail.sendChangeEmailConfirmation;
    const canSendVerification =
      ctx.context.options.emailVerification?.sendVerificationEmail;
    if (
      !canUpdateWithoutVerification &&
      !canSendConfirmation &&
      !canSendVerification
    ) {
      ctx.context.logger.error("Verification email isn't enabled.");
      throw APIError.fromStatus('BAD_REQUEST', {
        message: "Verification email isn't enabled",
      });
    }
    if (await ctx.context.internalAdapter.findUserByEmail(newEmail)) {
      await createEmailVerificationToken(
        ctx.context.secret,
        ctx.context.session.user.email,
        newEmail,
        ctx.context.options.emailVerification?.expiresIn
      );
      ctx.context.logger.info('Change email attempt for existing email');
      return ctx.json({ status: true });
    }
    /**
     * If the email is not verified, we can update the email if the option is enabled
     */
    if (canUpdateWithoutVerification) {
      await ctx.context.internalAdapter.updateUserByEmail(
        ctx.context.session.user.email,
        { email: newEmail }
      );
      await setSessionCookie(ctx, {
        session: ctx.context.session.session,
        user: {
          ...ctx.context.session.user,
          email: newEmail,
        },
      });
      if (canSendVerification) {
        const token = await createEmailVerificationToken(
          ctx.context.secret,
          newEmail,
          void 0,
          ctx.context.options.emailVerification?.expiresIn
        );
        const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || '/'}`;
        await ctx.context.runInBackgroundOrAwait(
          canSendVerification(
            {
              user: {
                ...ctx.context.session.user,
                email: newEmail,
              },
              url,
              token,
            },
            ctx.request
          )
        );
      }
      return ctx.json({ status: true });
    }
    /**
     * If the email is verified, we need to send a verification email
     */
    if (canSendConfirmation) {
      const token = await createEmailVerificationToken(
        ctx.context.secret,
        ctx.context.session.user.email,
        newEmail,
        ctx.context.options.emailVerification?.expiresIn,
        { requestType: 'change-email-confirmation' }
      );
      const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || '/'}`;
      await ctx.context.runInBackgroundOrAwait(
        canSendConfirmation(
          {
            user: ctx.context.session.user,
            newEmail,
            url,
            token,
          },
          ctx.request
        )
      );
      return ctx.json({ status: true });
    }
    if (!canSendVerification) {
      ctx.context.logger.error("Verification email isn't enabled.");
      throw APIError.fromStatus('BAD_REQUEST', {
        message: "Verification email isn't enabled",
      });
    }
    const token = await createEmailVerificationToken(
      ctx.context.secret,
      ctx.context.session.user.email,
      newEmail,
      ctx.context.options.emailVerification?.expiresIn,
      { requestType: 'change-email-verification' }
    );
    const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || '/'}`;
    await ctx.context.runInBackgroundOrAwait(
      canSendVerification(
        {
          user: {
            ...ctx.context.session.user,
            email: newEmail,
          },
          url,
          token,
        },
        ctx.request
      )
    );
    return ctx.json({ status: true });
  }
);
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/to-auth-endpoints.mjs
var defuReplaceArrays = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value)) {
    obj[key] = value;
    return true;
  }
});
var hooksSourceWeakMap = /* @__PURE__ */ new WeakMap();
function getOperationId(endpoint, key) {
  if (!endpoint?.options) return key;
  const opts = endpoint.options;
  return opts.operationId ?? opts.metadata?.openapi?.operationId ?? key;
}
function toAuthEndpoints(endpoints, ctx) {
  const api = {};
  for (const [key, endpoint] of Object.entries(endpoints)) {
    api[key] = async (context) => {
      const operationId = getOperationId(endpoint, key);
      const endpointMethod = endpoint?.options?.method;
      const defaultMethod = Array.isArray(endpointMethod)
        ? endpointMethod[0]
        : endpointMethod;
      const run = async () => {
        const authContext = await ctx;
        const methodName =
          context?.method ?? context?.request?.method ?? defaultMethod ?? '?';
        const route = endpoint.path ?? '/:virtual';
        let internalContext = {
          ...context,
          context: {
            ...authContext,
            returned: void 0,
            responseHeaders: void 0,
            session: null,
          },
          path: endpoint.path,
          headers: context?.headers ? new Headers(context?.headers) : void 0,
        };
        const hasRequest = context?.request instanceof Request;
        const shouldReturnResponse = context?.asResponse ?? hasRequest;
        return withSpan(
          `${methodName} ${route}`,
          {
            [ATTR_HTTP_ROUTE]: route,
            [ATTR_OPERATION_ID]: operationId,
          },
          async () =>
            runWithEndpointContext(internalContext, async () => {
              const { beforeHooks, afterHooks } = getHooks(authContext);
              const before = await runBeforeHooks(
                internalContext,
                beforeHooks,
                endpoint,
                operationId
              );
              /**
               * If `before.context` is returned, it should
               * get merged with the original context
               */
              if (
                'context' in before &&
                before.context &&
                typeof before.context === 'object'
              ) {
                const { headers, ...rest } = before.context;
                /**
                 * Headers should be merged differently
                 * so the hook doesn't override the whole
                 * header
                 */
                if (headers)
                  headers.forEach((value, key) => {
                    internalContext.headers.set(key, value);
                  });
                internalContext = defuReplaceArrays(rest, internalContext);
              } else if (before)
                return shouldReturnResponse
                  ? toResponse(before, { headers: context?.headers })
                  : context?.returnHeaders
                    ? {
                        headers: context?.headers,
                        response: before,
                      }
                    : before;
              internalContext.asResponse = false;
              internalContext.returnHeaders = true;
              internalContext.returnStatus = true;
              const result = await runWithEndpointContext(internalContext, () =>
                withSpan(
                  `handler ${route}`,
                  {
                    [ATTR_HTTP_ROUTE]: route,
                    [ATTR_OPERATION_ID]: operationId,
                  },
                  () => endpoint(internalContext)
                )
              ).catch((e) => {
                if (isAPIError(e))
                  /**
                   * API Errors from response are caught
                   * and returned to hooks
                   */
                  return {
                    response: e,
                    status: e.statusCode,
                    headers: e.headers ? new Headers(e.headers) : null,
                  };
                throw e;
              });
              if (result && result instanceof Response) return result;
              internalContext.context.returned = result.response;
              internalContext.context.responseHeaders = result.headers;
              const after = await runAfterHooks(
                internalContext,
                afterHooks,
                endpoint,
                operationId
              );
              if (after.response) result.response = after.response;
              if (
                isAPIError(result.response) &&
                shouldPublishLog(authContext.logger.level, 'debug')
              )
                result.response.stack = result.response.errorStack;
              if (isAPIError(result.response) && !shouldReturnResponse)
                throw result.response;
              return shouldReturnResponse
                ? toResponse(result.response, {
                    headers: result.headers,
                    status: result.status,
                  })
                : context?.returnHeaders
                  ? context?.returnStatus
                    ? {
                        headers: result.headers,
                        response: result.response,
                        status: result.status,
                      }
                    : {
                        headers: result.headers,
                        response: result.response,
                      }
                  : context?.returnStatus
                    ? {
                        response: result.response,
                        status: result.status,
                      }
                    : result.response;
            })
        );
      };
      if (await hasRequestState()) return run();
      else return runWithRequestState(/* @__PURE__ */ new WeakMap(), run);
    };
    api[key].path = endpoint.path;
    api[key].options = endpoint.options;
  }
  return api;
}
async function runBeforeHooks(context, hooks, endpoint, operationId) {
  let modifiedContext = {};
  for (const hook of hooks) {
    let matched = false;
    try {
      matched = hook.matcher(context);
    } catch (error) {
      const hookSource = hooksSourceWeakMap.get(hook.handler) ?? 'unknown';
      context.context.logger.error(
        `An error occurred during ${hookSource} hook matcher execution:`,
        error
      );
      throw new APIError('INTERNAL_SERVER_ERROR', {
        message: `An error occurred during hook matcher execution. Check the logs for more details.`,
      });
    }
    if (matched) {
      const hookSource = hooksSourceWeakMap.get(hook.handler) ?? 'unknown';
      const route = endpoint.path ?? '/:virtual';
      const result = await withSpan(
        `hook before ${route} ${hookSource}`,
        {
          [ATTR_HOOK_TYPE]: 'before',
          [ATTR_HTTP_ROUTE]: route,
          [ATTR_CONTEXT]: hookSource,
          [ATTR_OPERATION_ID]: operationId,
        },
        () =>
          hook.handler({
            ...context,
            returnHeaders: false,
          })
      ).catch((e) => {
        if (
          isAPIError(e) &&
          shouldPublishLog(context.context.logger.level, 'debug')
        )
          e.stack = e.errorStack;
        throw e;
      });
      if (result && typeof result === 'object') {
        if ('context' in result && typeof result.context === 'object') {
          const { headers, ...rest } = result.context;
          if (headers instanceof Headers)
            if (modifiedContext.headers)
              headers.forEach((value, key) => {
                modifiedContext.headers?.set(key, value);
              });
            else modifiedContext.headers = headers;
          modifiedContext = defuReplaceArrays(rest, modifiedContext);
          continue;
        }
        return result;
      }
    }
  }
  return { context: modifiedContext };
}
async function runAfterHooks(context, hooks, endpoint, operationId) {
  for (const hook of hooks)
    if (hook.matcher(context)) {
      const hookSource = hooksSourceWeakMap.get(hook.handler) ?? 'unknown';
      const route = endpoint.path ?? '/:virtual';
      const result = await withSpan(
        `hook after ${route} ${hookSource}`,
        {
          [ATTR_HOOK_TYPE]: 'after',
          [ATTR_HTTP_ROUTE]: route,
          [ATTR_CONTEXT]: hookSource,
          [ATTR_OPERATION_ID]: operationId,
        },
        () => hook.handler(context)
      ).catch((e) => {
        if (isAPIError(e)) {
          const headers = e[kAPIErrorHeaderSymbol];
          if (shouldPublishLog(context.context.logger.level, 'debug'))
            e.stack = e.errorStack;
          return {
            response: e,
            headers: headers
              ? headers
              : e.headers
                ? new Headers(e.headers)
                : null,
          };
        }
        throw e;
      });
      if (result.headers)
        result.headers.forEach((value, key) => {
          if (!context.context.responseHeaders)
            context.context.responseHeaders = new Headers({ [key]: value });
          else if (key.toLowerCase() === 'set-cookie')
            context.context.responseHeaders.append(key, value);
          else context.context.responseHeaders.set(key, value);
        });
      if (result.response) context.context.returned = result.response;
    }
  return {
    response: context.context.returned,
    headers: context.context.responseHeaders,
  };
}
function getHooks(authContext) {
  const plugins = authContext.options.plugins || [];
  const beforeHooks = [];
  const afterHooks = [];
  const beforeHookHandler = authContext.options.hooks?.before;
  if (beforeHookHandler) {
    hooksSourceWeakMap.set(beforeHookHandler, 'user');
    beforeHooks.push({
      matcher: () => true,
      handler: beforeHookHandler,
    });
  }
  const afterHookHandler = authContext.options.hooks?.after;
  if (afterHookHandler) {
    hooksSourceWeakMap.set(afterHookHandler, 'user');
    afterHooks.push({
      matcher: () => true,
      handler: afterHookHandler,
    });
  }
  const pluginBeforeHooks = plugins.flatMap((plugin) =>
    (plugin.hooks?.before ?? []).map((h) => {
      hooksSourceWeakMap.set(h.handler, `plugin:${plugin.id}`);
      return h;
    })
  );
  const pluginAfterHooks = plugins.flatMap((plugin) =>
    (plugin.hooks?.after ?? []).map((h) => {
      hooksSourceWeakMap.set(h.handler, `plugin:${plugin.id}`);
      return h;
    })
  );
  /**
   * Add plugin added hooks at last
   */
  if (pluginBeforeHooks.length) beforeHooks.push(...pluginBeforeHooks);
  if (pluginAfterHooks.length) afterHooks.push(...pluginAfterHooks);
  return {
    beforeHooks,
    afterHooks,
  };
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/api/index.mjs
function checkEndpointConflicts(options, logger) {
  const endpointRegistry = /* @__PURE__ */ new Map();
  options.plugins?.forEach((plugin) => {
    if (plugin.endpoints) {
      for (const [key, endpoint] of Object.entries(plugin.endpoints))
        if (
          endpoint &&
          'path' in endpoint &&
          typeof endpoint.path === 'string'
        ) {
          const path = endpoint.path;
          let methods = [];
          if (endpoint.options && 'method' in endpoint.options) {
            if (Array.isArray(endpoint.options.method))
              methods = endpoint.options.method;
            else if (typeof endpoint.options.method === 'string')
              methods = [endpoint.options.method];
          }
          if (methods.length === 0) methods = ['*'];
          if (!endpointRegistry.has(path)) endpointRegistry.set(path, []);
          endpointRegistry.get(path).push({
            pluginId: plugin.id,
            endpointKey: key,
            methods,
          });
        }
    }
  });
  const conflicts = [];
  for (const [path, entries] of endpointRegistry.entries())
    if (entries.length > 1) {
      const methodMap = /* @__PURE__ */ new Map();
      let hasConflict = false;
      for (const entry of entries)
        for (const method of entry.methods) {
          if (!methodMap.has(method)) methodMap.set(method, []);
          methodMap.get(method).push(entry.pluginId);
          if (methodMap.get(method).length > 1) hasConflict = true;
          if (method === '*' && entries.length > 1) hasConflict = true;
          else if (method !== '*' && methodMap.has('*')) hasConflict = true;
        }
      if (hasConflict) {
        const uniquePlugins = [...new Set(entries.map((e) => e.pluginId))];
        const conflictingMethods = [];
        for (const [method, plugins] of methodMap.entries())
          if (
            plugins.length > 1 ||
            (method === '*' && entries.length > 1) ||
            (method !== '*' && methodMap.has('*'))
          )
            conflictingMethods.push(method);
        conflicts.push({
          path,
          plugins: uniquePlugins,
          conflictingMethods,
        });
      }
    }
  if (conflicts.length > 0) {
    const conflictMessages = conflicts
      .map(
        (conflict) =>
          `  - "${conflict.path}" [${conflict.conflictingMethods.join(', ')}] used by plugins: ${conflict.plugins.join(', ')}`
      )
      .join('\n');
    logger.error(`Endpoint path conflicts detected! Multiple plugins are trying to use the same endpoint paths with conflicting HTTP methods:
${conflictMessages}

To resolve this, you can:
	1. Use only one of the conflicting plugins
	2. Configure the plugins to use different paths (if supported)
	3. Ensure plugins use different HTTP methods for the same path
`);
  }
}
function getEndpoints(ctx, options) {
  const pluginEndpoints =
    options.plugins?.reduce((acc, plugin) => {
      return {
        ...acc,
        ...plugin.endpoints,
      };
    }, {}) ?? {};
  const middlewares =
    options.plugins
      ?.map((plugin) =>
        plugin.middlewares?.map((m) => {
          const middleware = async (context) => {
            const authContext = await ctx;
            return withSpan(
              `middleware ${m.path} ${plugin.id}`,
              {
                ['better_auth.hook.type']: 'middleware',
                ['http.route']: m.path,
                ['better_auth.context']: `plugin:${plugin.id}`,
              },
              () =>
                m.middleware({
                  ...context,
                  context: {
                    ...authContext,
                    ...context.context,
                  },
                })
            );
          };
          middleware.options = m.middleware.options;
          return {
            path: m.path,
            middleware,
          };
        })
      )
      .filter((plugin) => plugin !== void 0)
      .flat() || [];
  return {
    api: toAuthEndpoints(
      {
        signInSocial: signInSocial(),
        callbackOAuth,
        getSession: getSession(),
        signOut,
        signUpEmail: signUpEmail(),
        signInEmail: signInEmail(),
        resetPassword,
        verifyPassword,
        verifyEmail,
        sendVerificationEmail,
        changeEmail,
        changePassword,
        setPassword,
        updateSession: updateSession(),
        updateUser: updateUser(),
        deleteUser,
        requestPasswordReset,
        requestPasswordResetCallback,
        listSessions: listSessions(),
        revokeSession,
        revokeSessions,
        revokeOtherSessions,
        linkSocialAccount,
        listUserAccounts,
        deleteUserCallback,
        unlinkAccount,
        refreshToken,
        getAccessToken,
        accountInfo,
        ...pluginEndpoints,
        ok,
        error,
      },
      ctx
    ),
    middlewares,
  };
}
var router = (ctx, options) => {
  const { api, middlewares } = getEndpoints(ctx, options);
  const basePath = new URL(ctx.baseURL).pathname;
  return createRouter$1(api, {
    routerContext: ctx,
    openapi: { disabled: true },
    basePath,
    routerMiddleware: [
      {
        path: '/**',
        middleware: originCheckMiddleware,
      },
      ...middlewares,
    ],
    allowedMediaTypes: ['application/json'],
    skipTrailingSlashes: options.advanced?.skipTrailingSlashes ?? false,
    async onRequest(req) {
      const disabledPaths = ctx.options.disabledPaths || [];
      const normalizedPath = normalizePathname(req.url, basePath);
      if (disabledPaths.includes(normalizedPath))
        return new Response('Not Found', { status: 404 });
      let currentRequest = req;
      for (const plugin of ctx.options.plugins || [])
        if (plugin.onRequest) {
          const response = await withSpan(
            `onRequest ${plugin.id}`,
            {
              [ATTR_HOOK_TYPE]: 'onRequest',
              [ATTR_CONTEXT]: `plugin:${plugin.id}`,
            },
            () => plugin.onRequest(currentRequest, ctx)
          );
          if (response && 'response' in response) return response.response;
          if (response && 'request' in response)
            currentRequest = response.request;
        }
      const rateLimitResponse = await onRequestRateLimit(currentRequest, ctx);
      if (rateLimitResponse) return rateLimitResponse;
      return currentRequest;
    },
    async onResponse(res, req) {
      await onResponseRateLimit(req, ctx);
      for (const plugin of ctx.options.plugins || [])
        if (plugin.onResponse) {
          const response = await withSpan(
            `onResponse ${plugin.id}`,
            {
              [ATTR_HOOK_TYPE]: 'onResponse',
              [ATTR_CONTEXT]: `plugin:${plugin.id}`,
              [ATTR_HTTP_RESPONSE_STATUS_CODE]: res.status,
            },
            () => plugin.onResponse(res, ctx)
          );
          if (response) return response.response;
        }
      return res;
    },
    onError(e) {
      if (isAPIError(e) && e.status === 'FOUND') return;
      if (options.onAPIError?.throw) throw e;
      if (options.onAPIError?.onError) {
        options.onAPIError.onError(e, ctx);
        return;
      }
      const optLogLevel = options.logger?.level;
      const log =
        optLogLevel === 'error' ||
        optLogLevel === 'warn' ||
        optLogLevel === 'debug'
          ? logger
          : void 0;
      if (options.logger?.disabled !== true) {
        if (
          e &&
          typeof e === 'object' &&
          'message' in e &&
          typeof e.message === 'string'
        ) {
          if (
            e.message.includes('no column') ||
            e.message.includes('column') ||
            e.message.includes('relation') ||
            e.message.includes('table') ||
            e.message.includes('does not exist')
          ) {
            ctx.logger?.error(e.message);
            return;
          }
        }
        if (isAPIError(e)) {
          if (e.status === 'INTERNAL_SERVER_ERROR')
            ctx.logger.error(e.status, e);
          log?.error(e.message);
        } else
          ctx.logger?.error(
            e && typeof e === 'object' && 'name' in e ? e.name : '',
            e
          );
      }
    },
  });
};
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/db/adapter-base.mjs
async function getBaseAdapter(options, handleDirectDatabase) {
  let adapter;
  if (!options.database) {
    const tables = getAuthTables(options);
    const memoryDB = Object.keys(tables).reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});
    const { memoryAdapter } = await import('./dist-KWFks_CH.js');
    adapter = memoryAdapter(memoryDB)(options);
  } else if (typeof options.database === 'function')
    adapter = options.database(options);
  else adapter = await handleDirectDatabase(options);
  if (!adapter.transaction) {
    logger.warn(
      'Adapter does not correctly implement transaction function, patching it automatically. Please update your adapter implementation.'
    );
    adapter.transaction = async (cb) => {
      return cb(adapter);
    };
  }
  return adapter;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/db/adapter-kysely.mjs
async function getAdapter(options) {
  return getBaseAdapter(options, async (opts) => {
    const { createKyselyAdapter } =
      await import('./kysely-adapter-D_j7pN5S.js');
    const { kysely, databaseType, transaction } =
      await createKyselyAdapter(opts);
    if (!kysely)
      throw new BetterAuthError('Failed to initialize database adapter');
    const { kyselyAdapter } = await import('./kysely-adapter-D_j7pN5S.js');
    return kyselyAdapter(kysely, {
      type: databaseType || 'sqlite',
      debugLogs:
        opts.database && 'debugLogs' in opts.database
          ? opts.database.debugLogs
          : false,
      transaction,
    })(opts);
  });
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/db/get-schema.mjs
function getSchema(config) {
  const tables = getAuthTables(config);
  const schema = {};
  for (const key in tables) {
    const table = tables[key];
    const fields = table.fields;
    const actualFields = {};
    Object.entries(fields).forEach(([key, field]) => {
      actualFields[field.fieldName || key] = field;
      if (field.references) {
        const refTable = tables[field.references.model];
        if (refTable)
          actualFields[field.fieldName || key].references = {
            ...field.references,
            model: refTable.modelName,
            field: field.references.field,
          };
      }
    });
    if (schema[table.modelName]) {
      schema[table.modelName].fields = {
        ...schema[table.modelName].fields,
        ...actualFields,
      };
      continue;
    }
    schema[table.modelName] = {
      fields: actualFields,
      order: table.order || Infinity,
    };
  }
  return schema;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/db/get-migration.mjs
var map = {
  postgres: {
    string: ['character varying', 'varchar', 'text', 'uuid'],
    number: [
      'int4',
      'integer',
      'bigint',
      'smallint',
      'numeric',
      'real',
      'double precision',
    ],
    boolean: ['bool', 'boolean'],
    date: ['timestamptz', 'timestamp', 'date'],
    json: ['json', 'jsonb'],
  },
  mysql: {
    string: ['varchar', 'text', 'uuid'],
    number: [
      'integer',
      'int',
      'bigint',
      'smallint',
      'decimal',
      'float',
      'double',
    ],
    boolean: ['boolean', 'tinyint'],
    date: ['timestamp', 'datetime', 'date'],
    json: ['json'],
  },
  sqlite: {
    string: ['TEXT'],
    number: ['INTEGER', 'REAL'],
    boolean: ['INTEGER', 'BOOLEAN'],
    date: ['DATE', 'INTEGER'],
    json: ['TEXT'],
  },
  mssql: {
    string: ['varchar', 'nvarchar', 'uniqueidentifier'],
    number: ['int', 'bigint', 'smallint', 'decimal', 'float', 'double'],
    boolean: ['bit', 'smallint'],
    date: ['datetime2', 'date', 'datetime'],
    json: ['varchar', 'nvarchar'],
  },
};
function matchType(columnDataType, fieldType, dbType) {
  function normalize(type) {
    return type.toLowerCase().split('(')[0].trim();
  }
  if (fieldType === 'string[]' || fieldType === 'number[]')
    return columnDataType.toLowerCase().includes('json');
  const types = map[dbType];
  return (
    Array.isArray(fieldType)
      ? types['string'].map((t) => t.toLowerCase())
      : types[fieldType].map((t) => t.toLowerCase())
  ).includes(normalize(columnDataType));
}
/**
 * Get the current PostgreSQL schema (search_path) for the database connection
 * Returns the first schema in the search_path, defaulting to 'public' if not found
 */
async function getPostgresSchema(db) {
  try {
    const result = await sql$1`SHOW search_path`.execute(db);
    const searchPath =
      result.rows[0]?.search_path ?? result.rows[0]?.searchPath;
    if (searchPath)
      return (
        searchPath
          .split(',')
          .map((s) => s.trim())
          .map((s) => s.replace(/^["']|["']$/g, ''))
          .filter((s) => !s.startsWith('$') && !s.startsWith('\\$'))[0] ||
        'public'
      );
  } catch {}
  return 'public';
}
async function getMigrations(config) {
  const betterAuthSchema = getSchema(config);
  const logger = createLogger(config.logger);
  let { kysely: db, databaseType: dbType } = await createKyselyAdapter(config);
  if (!dbType) {
    logger.warn(
      'Could not determine database type, defaulting to sqlite. Please provide a type in the database options to avoid this.'
    );
    dbType = 'sqlite';
  }
  if (!db) {
    logger.error(
      "Only kysely adapter is supported for migrations. You can use `generate` command to generate the schema, if you're using a different adapter."
    );
    process.exit(1);
  }
  let currentSchema = 'public';
  if (dbType === 'postgres') {
    currentSchema = await getPostgresSchema(db);
    logger.debug(
      `PostgreSQL migration: Using schema '${currentSchema}' (from search_path)`
    );
    try {
      const schemaCheck = await sql$1`
				SELECT schema_name
				FROM information_schema.schemata
				WHERE schema_name = ${currentSchema}
			`.execute(db);
      if (
        !(schemaCheck.rows[0]?.schema_name ?? schemaCheck.rows[0]?.schemaName)
      )
        logger.warn(
          `Schema '${currentSchema}' does not exist. Tables will be inspected from available schemas. Consider creating the schema first or checking your database configuration.`
        );
    } catch (error) {
      logger.debug(
        `Could not verify schema existence: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  const allTableMetadata = await db.introspection.getTables();
  let tableMetadata = allTableMetadata;
  if (dbType === 'postgres')
    try {
      const tablesInSchema = await sql$1`
				SELECT table_name
				FROM information_schema.tables
				WHERE table_schema = ${currentSchema}
				AND table_type = 'BASE TABLE'
			`.execute(db);
      const tableNamesInSchema = new Set(
        tablesInSchema.rows.map((row) => row.table_name ?? row.tableName)
      );
      tableMetadata = allTableMetadata.filter(
        (table) =>
          table.schema === currentSchema && tableNamesInSchema.has(table.name)
      );
      logger.debug(
        `Found ${tableMetadata.length} table(s) in schema '${currentSchema}': ${tableMetadata.map((t) => t.name).join(', ') || '(none)'}`
      );
    } catch (error) {
      logger.warn(
        `Could not filter tables by schema. Using all discovered tables. Error: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  const toBeCreated = [];
  const toBeAdded = [];
  for (const [key, value] of Object.entries(betterAuthSchema)) {
    const table = tableMetadata.find((t) => t.name === key);
    if (!table) {
      const tIndex = toBeCreated.findIndex((t) => t.table === key);
      const tableData = {
        table: key,
        fields: value.fields,
        order: value.order || Infinity,
      };
      const insertIndex = toBeCreated.findIndex(
        (t) => (t.order || Infinity) > tableData.order
      );
      if (insertIndex === -1)
        if (tIndex === -1) toBeCreated.push(tableData);
        else
          toBeCreated[tIndex].fields = {
            ...toBeCreated[tIndex].fields,
            ...value.fields,
          };
      else toBeCreated.splice(insertIndex, 0, tableData);
      continue;
    }
    const toBeAddedFields = {};
    for (const [fieldName, field] of Object.entries(value.fields)) {
      const column = table.columns.find((c) => c.name === fieldName);
      if (!column) {
        toBeAddedFields[fieldName] = field;
        continue;
      }
      if (matchType(column.dataType, field.type, dbType)) continue;
      else
        logger.warn(
          `Field ${fieldName} in table ${key} has a different type in the database. Expected ${field.type} but got ${column.dataType}.`
        );
    }
    if (Object.keys(toBeAddedFields).length > 0)
      toBeAdded.push({
        table: key,
        fields: toBeAddedFields,
        order: value.order || Infinity,
      });
  }
  const migrations = [];
  const useUUIDs = config.advanced?.database?.generateId === 'uuid';
  const useNumberId = config.advanced?.database?.generateId === 'serial';
  function getType(field, fieldName) {
    const type = field.type;
    const provider = dbType || 'sqlite';
    const typeMap = {
      string: {
        sqlite: 'text',
        postgres: 'text',
        mysql: field.unique
          ? 'varchar(255)'
          : field.references
            ? 'varchar(36)'
            : field.sortable
              ? 'varchar(255)'
              : field.index
                ? 'varchar(255)'
                : 'text',
        mssql:
          field.unique || field.sortable
            ? 'varchar(255)'
            : field.references
              ? 'varchar(36)'
              : 'varchar(8000)',
      },
      boolean: {
        sqlite: 'integer',
        postgres: 'boolean',
        mysql: 'boolean',
        mssql: 'smallint',
      },
      number: {
        sqlite: field.bigint ? 'bigint' : 'integer',
        postgres: field.bigint ? 'bigint' : 'integer',
        mysql: field.bigint ? 'bigint' : 'integer',
        mssql: field.bigint ? 'bigint' : 'integer',
      },
      date: {
        sqlite: 'date',
        postgres: 'timestamptz',
        mysql: 'timestamp(3)',
        mssql: sql$1`datetime2(3)`,
      },
      json: {
        sqlite: 'text',
        postgres: 'jsonb',
        mysql: 'json',
        mssql: 'varchar(8000)',
      },
      id: {
        postgres: useNumberId
          ? sql$1`integer GENERATED BY DEFAULT AS IDENTITY`
          : useUUIDs
            ? 'uuid'
            : 'text',
        mysql: useNumberId
          ? 'integer'
          : useUUIDs
            ? 'varchar(36)'
            : 'varchar(36)',
        mssql: useNumberId
          ? 'integer'
          : useUUIDs
            ? 'varchar(36)'
            : 'varchar(36)',
        sqlite: useNumberId ? 'integer' : 'text',
      },
      foreignKeyId: {
        postgres: useNumberId ? 'integer' : useUUIDs ? 'uuid' : 'text',
        mysql: useNumberId
          ? 'integer'
          : useUUIDs
            ? 'varchar(36)'
            : 'varchar(36)',
        mssql: useNumberId
          ? 'integer'
          : useUUIDs
            ? 'varchar(36)'
            : 'varchar(36)',
        sqlite: useNumberId ? 'integer' : 'text',
      },
      'string[]': {
        sqlite: 'text',
        postgres: 'jsonb',
        mysql: 'json',
        mssql: 'varchar(8000)',
      },
      'number[]': {
        sqlite: 'text',
        postgres: 'jsonb',
        mysql: 'json',
        mssql: 'varchar(8000)',
      },
    };
    if (fieldName === 'id' || field.references?.field === 'id') {
      if (fieldName === 'id') return typeMap.id[provider];
      return typeMap.foreignKeyId[provider];
    }
    if (Array.isArray(type)) return 'text';
    if (!(type in typeMap))
      throw new Error(
        `Unsupported field type '${String(type)}' for field '${fieldName}'. Allowed types are: string, number, boolean, date, string[], number[]. If you need to store structured data, store it as a JSON string (type: "string") or split it into primitive fields. See https://better-auth.com/docs/advanced/schema#additional-fields`
      );
    return typeMap[type][provider];
  }
  const getModelName = initGetModelName({
    schema: getAuthTables(config),
    usePlural: false,
  });
  const getFieldName = initGetFieldName({
    schema: getAuthTables(config),
    usePlural: false,
  });
  function getReferencePath(model, field) {
    try {
      return `${getModelName(model)}.${getFieldName({
        model,
        field,
      })}`;
    } catch {
      return `${model}.${field}`;
    }
  }
  if (toBeAdded.length)
    for (const table of toBeAdded)
      for (const [fieldName, field] of Object.entries(table.fields)) {
        const type = getType(field, fieldName);
        const builder = db.schema.alterTable(table.table);
        if (field.index) {
          const indexName = `${table.table}_${fieldName}_${field.unique ? 'uidx' : 'idx'}`;
          const indexBuilder = db.schema
            .createIndex(indexName)
            .on(table.table)
            .columns([fieldName]);
          migrations.push(field.unique ? indexBuilder.unique() : indexBuilder);
        }
        const built = builder.addColumn(fieldName, type, (col) => {
          col = field.required !== false ? col.notNull() : col;
          if (field.references)
            col = col
              .references(
                getReferencePath(field.references.model, field.references.field)
              )
              .onDelete(field.references.onDelete || 'cascade');
          if (field.unique) col = col.unique();
          if (
            field.type === 'date' &&
            typeof field.defaultValue === 'function' &&
            (dbType === 'postgres' || dbType === 'mysql' || dbType === 'mssql')
          )
            if (dbType === 'mysql')
              col = col.defaultTo(sql$1`CURRENT_TIMESTAMP(3)`);
            else col = col.defaultTo(sql$1`CURRENT_TIMESTAMP`);
          return col;
        });
        migrations.push(built);
      }
  const toBeIndexed = [];
  if (toBeCreated.length)
    for (const table of toBeCreated) {
      const idType = getType({ type: useNumberId ? 'number' : 'string' }, 'id');
      let dbT = db.schema
        .createTable(table.table)
        .addColumn('id', idType, (col) => {
          if (useNumberId) {
            if (dbType === 'postgres') return col.primaryKey().notNull();
            else if (dbType === 'sqlite') return col.primaryKey().notNull();
            else if (dbType === 'mssql')
              return col.identity().primaryKey().notNull();
            return col.autoIncrement().primaryKey().notNull();
          }
          if (useUUIDs) {
            if (dbType === 'postgres')
              return col
                .primaryKey()
                .defaultTo(sql$1`pg_catalog.gen_random_uuid()`)
                .notNull();
            return col.primaryKey().notNull();
          }
          return col.primaryKey().notNull();
        });
      for (const [fieldName, field] of Object.entries(table.fields)) {
        const type = getType(field, fieldName);
        dbT = dbT.addColumn(fieldName, type, (col) => {
          col = field.required !== false ? col.notNull() : col;
          if (field.references)
            col = col
              .references(
                getReferencePath(field.references.model, field.references.field)
              )
              .onDelete(field.references.onDelete || 'cascade');
          if (field.unique) col = col.unique();
          if (
            field.type === 'date' &&
            typeof field.defaultValue === 'function' &&
            (dbType === 'postgres' || dbType === 'mysql' || dbType === 'mssql')
          )
            if (dbType === 'mysql')
              col = col.defaultTo(sql$1`CURRENT_TIMESTAMP(3)`);
            else col = col.defaultTo(sql$1`CURRENT_TIMESTAMP`);
          return col;
        });
        if (field.index) {
          const builder = db.schema
            .createIndex(
              `${table.table}_${fieldName}_${field.unique ? 'uidx' : 'idx'}`
            )
            .on(table.table)
            .columns([fieldName]);
          toBeIndexed.push(field.unique ? builder.unique() : builder);
        }
      }
      migrations.push(dbT);
    }
  if (toBeIndexed.length)
    for (const index of toBeIndexed) migrations.push(index);
  async function runMigrations() {
    for (const migration of migrations) await migration.execute();
  }
  async function compileMigrations() {
    return migrations.map((m) => m.compile().sql).join(';\n\n') + ';';
  }
  return {
    toBeCreated,
    toBeAdded,
    runMigrations,
    compileMigrations,
  };
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/utils/constants.mjs
var DEFAULT_SECRET = 'better-auth-secret-12345678901234567890';
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/context/secret-utils.mjs
/**
 * Estimates the entropy of a string in bits.
 * This is a simple approximation that helps detect low-entropy secrets.
 */
function estimateEntropy$1(str) {
  const unique = new Set(str).size;
  if (unique === 0) return 0;
  return Math.log2(Math.pow(unique, str.length));
}
function parseSecretsEnv(envValue) {
  if (!envValue) return null;
  return envValue.split(',').map((entry) => {
    entry = entry.trim();
    const colonIdx = entry.indexOf(':');
    if (colonIdx === -1)
      throw new BetterAuthError(
        `Invalid BETTER_AUTH_SECRETS entry: "${entry}". Expected format: "<version>:<secret>"`
      );
    const version = parseInt(entry.slice(0, colonIdx), 10);
    if (!Number.isInteger(version) || version < 0)
      throw new BetterAuthError(
        `Invalid version in BETTER_AUTH_SECRETS: "${entry.slice(0, colonIdx)}". Version must be a non-negative integer.`
      );
    const value = entry.slice(colonIdx + 1).trim();
    if (!value)
      throw new BetterAuthError(
        `Empty secret value for version ${version} in BETTER_AUTH_SECRETS.`
      );
    return {
      version,
      value,
    };
  });
}
function validateSecretsArray(secrets, logger) {
  if (secrets.length === 0)
    throw new BetterAuthError(
      '`secrets` array must contain at least one entry.'
    );
  const seen = /* @__PURE__ */ new Set();
  for (const s of secrets) {
    const version = parseInt(String(s.version), 10);
    if (
      !Number.isInteger(version) ||
      version < 0 ||
      String(version) !== String(s.version).trim()
    )
      throw new BetterAuthError(
        `Invalid version ${s.version} in \`secrets\`. Version must be a non-negative integer.`
      );
    if (!s.value)
      throw new BetterAuthError(
        `Empty secret value for version ${version} in \`secrets\`.`
      );
    if (seen.has(version))
      throw new BetterAuthError(
        `Duplicate version ${version} in \`secrets\`. Each version must be unique.`
      );
    seen.add(version);
  }
  const current = secrets[0];
  if (current.value.length < 32)
    logger.warn(
      `[better-auth] Warning: the current secret (version ${current.version}) should be at least 32 characters long for adequate security.`
    );
  if (estimateEntropy$1(current.value) < 120)
    logger.warn(
      '[better-auth] Warning: the current secret appears low-entropy. Use a randomly generated secret for production.'
    );
}
function buildSecretConfig(secrets, legacySecret) {
  const keys = /* @__PURE__ */ new Map();
  for (const s of secrets) keys.set(parseInt(String(s.version), 10), s.value);
  return {
    keys,
    currentVersion: parseInt(String(secrets[0].version), 10),
    legacySecret:
      legacySecret && legacySecret !== 'better-auth-secret-12345678901234567890'
        ? legacySecret
        : void 0,
  };
}
//#endregion
//#region node_modules/.pnpm/@better-auth+telemetry@1.6.2_@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@better-f_3a57f2db3f7c1be848e15cfe2a5018b2/node_modules/@better-auth/telemetry/dist/node.mjs
async function getTelemetryAuthConfig(options, context) {
  return {
    database: context?.database,
    adapter: context?.adapter,
    emailVerification: {
      sendVerificationEmail: !!options.emailVerification?.sendVerificationEmail,
      sendOnSignUp: !!options.emailVerification?.sendOnSignUp,
      sendOnSignIn: !!options.emailVerification?.sendOnSignIn,
      autoSignInAfterVerification:
        !!options.emailVerification?.autoSignInAfterVerification,
      expiresIn: options.emailVerification?.expiresIn,
      beforeEmailVerification:
        !!options.emailVerification?.beforeEmailVerification,
      afterEmailVerification:
        !!options.emailVerification?.afterEmailVerification,
    },
    emailAndPassword: {
      enabled: !!options.emailAndPassword?.enabled,
      disableSignUp: !!options.emailAndPassword?.disableSignUp,
      requireEmailVerification:
        !!options.emailAndPassword?.requireEmailVerification,
      maxPasswordLength: options.emailAndPassword?.maxPasswordLength,
      minPasswordLength: options.emailAndPassword?.minPasswordLength,
      sendResetPassword: !!options.emailAndPassword?.sendResetPassword,
      resetPasswordTokenExpiresIn:
        options.emailAndPassword?.resetPasswordTokenExpiresIn,
      onPasswordReset: !!options.emailAndPassword?.onPasswordReset,
      password: {
        hash: !!options.emailAndPassword?.password?.hash,
        verify: !!options.emailAndPassword?.password?.verify,
      },
      autoSignIn: !!options.emailAndPassword?.autoSignIn,
      revokeSessionsOnPasswordReset:
        !!options.emailAndPassword?.revokeSessionsOnPasswordReset,
    },
    socialProviders: await Promise.all(
      Object.keys(options.socialProviders || {}).map(async (key) => {
        const p = options.socialProviders?.[key];
        if (!p) return {};
        const provider = typeof p === 'function' ? await p() : p;
        return {
          id: key,
          mapProfileToUser: !!provider.mapProfileToUser,
          disableDefaultScope: !!provider.disableDefaultScope,
          disableIdTokenSignIn: !!provider.disableIdTokenSignIn,
          disableImplicitSignUp: provider.disableImplicitSignUp,
          disableSignUp: provider.disableSignUp,
          getUserInfo: !!provider.getUserInfo,
          overrideUserInfoOnSignIn: !!provider.overrideUserInfoOnSignIn,
          prompt: provider.prompt,
          verifyIdToken: !!provider.verifyIdToken,
          scope: provider.scope,
          refreshAccessToken: !!provider.refreshAccessToken,
        };
      })
    ),
    plugins: options.plugins?.map((p) => p.id.toString()),
    user: {
      modelName: options.user?.modelName,
      fields: options.user?.fields,
      additionalFields: options.user?.additionalFields,
      changeEmail: {
        enabled: options.user?.changeEmail?.enabled,
        sendChangeEmailConfirmation:
          !!options.user?.changeEmail?.sendChangeEmailConfirmation,
      },
    },
    verification: {
      modelName: options.verification?.modelName,
      disableCleanup: options.verification?.disableCleanup,
      fields: options.verification?.fields,
    },
    session: {
      modelName: options.session?.modelName,
      additionalFields: options.session?.additionalFields,
      cookieCache: {
        enabled: options.session?.cookieCache?.enabled,
        maxAge: options.session?.cookieCache?.maxAge,
        strategy: options.session?.cookieCache?.strategy,
      },
      disableSessionRefresh: options.session?.disableSessionRefresh,
      expiresIn: options.session?.expiresIn,
      fields: options.session?.fields,
      freshAge: options.session?.freshAge,
      preserveSessionInDatabase: options.session?.preserveSessionInDatabase,
      storeSessionInDatabase: options.session?.storeSessionInDatabase,
      updateAge: options.session?.updateAge,
    },
    account: {
      modelName: options.account?.modelName,
      fields: options.account?.fields,
      encryptOAuthTokens: options.account?.encryptOAuthTokens,
      updateAccountOnSignIn: options.account?.updateAccountOnSignIn,
      accountLinking: {
        enabled: options.account?.accountLinking?.enabled,
        trustedProviders: options.account?.accountLinking?.trustedProviders,
        updateUserInfoOnLink:
          options.account?.accountLinking?.updateUserInfoOnLink,
        allowUnlinkingAll: options.account?.accountLinking?.allowUnlinkingAll,
      },
    },
    hooks: {
      after: !!options.hooks?.after,
      before: !!options.hooks?.before,
    },
    secondaryStorage: !!options.secondaryStorage,
    advanced: {
      cookiePrefix: !!options.advanced?.cookiePrefix,
      cookies: !!options.advanced?.cookies,
      crossSubDomainCookies: {
        domain: !!options.advanced?.crossSubDomainCookies?.domain,
        enabled: options.advanced?.crossSubDomainCookies?.enabled,
        additionalCookies:
          options.advanced?.crossSubDomainCookies?.additionalCookies,
      },
      database: {
        generateId: options.advanced?.database?.generateId,
        defaultFindManyLimit: options.advanced?.database?.defaultFindManyLimit,
      },
      useSecureCookies: options.advanced?.useSecureCookies,
      ipAddress: {
        disableIpTracking: options.advanced?.ipAddress?.disableIpTracking,
        ipAddressHeaders: options.advanced?.ipAddress?.ipAddressHeaders,
      },
      disableCSRFCheck: options.advanced?.disableCSRFCheck,
      cookieAttributes: {
        expires: options.advanced?.defaultCookieAttributes?.expires,
        secure: options.advanced?.defaultCookieAttributes?.secure,
        sameSite: options.advanced?.defaultCookieAttributes?.sameSite,
        domain: !!options.advanced?.defaultCookieAttributes?.domain,
        path: options.advanced?.defaultCookieAttributes?.path,
        httpOnly: options.advanced?.defaultCookieAttributes?.httpOnly,
      },
    },
    trustedOrigins: options.trustedOrigins?.length,
    rateLimit: {
      storage: options.rateLimit?.storage,
      modelName: options.rateLimit?.modelName,
      window: options.rateLimit?.window,
      customStorage: !!options.rateLimit?.customStorage,
      enabled: options.rateLimit?.enabled,
      max: options.rateLimit?.max,
    },
    onAPIError: {
      errorURL: options.onAPIError?.errorURL,
      onError: !!options.onAPIError?.onError,
      throw: options.onAPIError?.throw,
    },
    logger: {
      disabled: options.logger?.disabled,
      level: options.logger?.level,
      log: !!options.logger?.log,
    },
    databaseHooks: {
      user: {
        create: {
          after: !!options.databaseHooks?.user?.create?.after,
          before: !!options.databaseHooks?.user?.create?.before,
        },
        update: {
          after: !!options.databaseHooks?.user?.update?.after,
          before: !!options.databaseHooks?.user?.update?.before,
        },
      },
      session: {
        create: {
          after: !!options.databaseHooks?.session?.create?.after,
          before: !!options.databaseHooks?.session?.create?.before,
        },
        update: {
          after: !!options.databaseHooks?.session?.update?.after,
          before: !!options.databaseHooks?.session?.update?.before,
        },
      },
      account: {
        create: {
          after: !!options.databaseHooks?.account?.create?.after,
          before: !!options.databaseHooks?.account?.create?.before,
        },
        update: {
          after: !!options.databaseHooks?.account?.update?.after,
          before: !!options.databaseHooks?.account?.update?.before,
        },
      },
      verification: {
        create: {
          after: !!options.databaseHooks?.verification?.create?.after,
          before: !!options.databaseHooks?.verification?.create?.before,
        },
        update: {
          after: !!options.databaseHooks?.verification?.update?.after,
          before: !!options.databaseHooks?.verification?.update?.before,
        },
      },
    },
  };
}
function detectPackageManager() {
  const userAgent = env.npm_config_user_agent;
  if (!userAgent) return;
  const pmSpec = userAgent.split(' ')[0];
  const separatorPos = pmSpec.lastIndexOf('/');
  const name = pmSpec.substring(0, separatorPos);
  return {
    name: name === 'npminstall' ? 'cnpm' : name,
    version: pmSpec.substring(separatorPos + 1),
  };
}
function isCI() {
  return (
    env.CI !== 'false' &&
    ('BUILD_ID' in env ||
      'BUILD_NUMBER' in env ||
      'CI' in env ||
      'CI_APP_ID' in env ||
      'CI_BUILD_ID' in env ||
      'CI_BUILD_NUMBER' in env ||
      'CI_NAME' in env ||
      'CONTINUOUS_INTEGRATION' in env ||
      'RUN_ID' in env)
  );
}
function detectRuntime() {
  if (typeof Deno !== 'undefined')
    return {
      name: 'deno',
      version: Deno?.version?.deno ?? null,
    };
  if (typeof Bun !== 'undefined')
    return {
      name: 'bun',
      version: Bun?.version ?? null,
    };
  if (typeof process !== 'undefined' && process?.versions?.node)
    return {
      name: 'node',
      version: process.versions.node ?? null,
    };
  return {
    name: 'edge',
    version: null,
  };
}
function detectEnvironment() {
  return getEnvVar('NODE_ENV') === 'production'
    ? 'production'
    : isCI()
      ? 'ci'
      : isTest()
        ? 'test'
        : 'development';
}
async function hashToBase64(data) {
  const buffer = await createHash('SHA-256').digest(data);
  return base64.encode(buffer);
}
var generateId = (size) => {
  return createRandomStringGenerator('a-z', 'A-Z', '0-9')(size || 32);
};
var packageJSONCache;
async function readRootPackageJson() {
  if (packageJSONCache) return packageJSONCache;
  try {
    const cwd = process.cwd();
    if (!cwd) return void 0;
    const raw = await fsPromises.readFile(
      path.join(cwd, 'package.json'),
      'utf-8'
    );
    packageJSONCache = JSON.parse(raw);
    return packageJSONCache;
  } catch {}
}
async function getPackageVersion(pkg) {
  if (packageJSONCache)
    return (
      packageJSONCache.dependencies?.[pkg] ||
      packageJSONCache.devDependencies?.[pkg] ||
      packageJSONCache.peerDependencies?.[pkg]
    );
  try {
    const cwd = process.cwd();
    if (!cwd) throw new Error('no-cwd');
    const pkgJsonPath = path.join(cwd, 'node_modules', pkg, 'package.json');
    const raw = await fsPromises.readFile(pkgJsonPath, 'utf-8');
    return (
      JSON.parse(raw).version ||
      (await getVersionFromLocalPackageJson(pkg)) ||
      void 0
    );
  } catch {}
  return getVersionFromLocalPackageJson(pkg);
}
async function getVersionFromLocalPackageJson(pkg) {
  const json = await readRootPackageJson();
  if (!json) return void 0;
  return {
    ...json.dependencies,
    ...json.devDependencies,
    ...json.peerDependencies,
  }[pkg];
}
async function getNameFromLocalPackageJson() {
  return (await readRootPackageJson())?.name;
}
async function detectSystemInfo() {
  try {
    const cpus = os.cpus();
    return {
      deploymentVendor: getVendor(),
      systemPlatform: os.platform(),
      systemRelease: os.release(),
      systemArchitecture: os.arch(),
      cpuCount: cpus.length,
      cpuModel: cpus.length ? cpus[0].model : null,
      cpuSpeed: cpus.length ? cpus[0].speed : null,
      memory: os.totalmem(),
      isWSL: await isWsl(),
      isDocker: await isDocker(),
      isTTY: process.stdout ? process.stdout.isTTY : null,
    };
  } catch {
    return {
      systemPlatform: null,
      systemRelease: null,
      systemArchitecture: null,
      cpuCount: null,
      cpuModel: null,
      cpuSpeed: null,
      memory: null,
      isWSL: null,
      isDocker: null,
      isTTY: null,
    };
  }
}
function getVendor() {
  const env = process.env;
  const hasAny = (...keys) => keys.some((k) => Boolean(env[k]));
  if (
    hasAny('CF_PAGES', 'CF_PAGES_URL', 'CF_ACCOUNT_ID') ||
    (typeof navigator !== 'undefined' &&
      navigator.userAgent === 'Cloudflare-Workers')
  )
    return 'cloudflare';
  if (hasAny('VERCEL', 'VERCEL_URL', 'VERCEL_ENV')) return 'vercel';
  if (hasAny('NETLIFY', 'NETLIFY_URL')) return 'netlify';
  if (
    hasAny(
      'RENDER',
      'RENDER_URL',
      'RENDER_INTERNAL_HOSTNAME',
      'RENDER_SERVICE_ID'
    )
  )
    return 'render';
  if (
    hasAny('AWS_LAMBDA_FUNCTION_NAME', 'AWS_EXECUTION_ENV', 'LAMBDA_TASK_ROOT')
  )
    return 'aws';
  if (
    hasAny(
      'GOOGLE_CLOUD_FUNCTION_NAME',
      'GOOGLE_CLOUD_PROJECT',
      'GCP_PROJECT',
      'K_SERVICE'
    )
  )
    return 'gcp';
  if (
    hasAny(
      'AZURE_FUNCTION_NAME',
      'FUNCTIONS_WORKER_RUNTIME',
      'WEBSITE_INSTANCE_ID',
      'WEBSITE_SITE_NAME'
    )
  )
    return 'azure';
  if (hasAny('DENO_DEPLOYMENT_ID', 'DENO_REGION')) return 'deno-deploy';
  if (hasAny('FLY_APP_NAME', 'FLY_REGION', 'FLY_ALLOC_ID')) return 'fly-io';
  if (hasAny('RAILWAY_STATIC_URL', 'RAILWAY_ENVIRONMENT_NAME'))
    return 'railway';
  if (hasAny('DYNO', 'HEROKU_APP_NAME')) return 'heroku';
  if (hasAny('DO_DEPLOYMENT_ID', 'DO_APP_NAME', 'DIGITALOCEAN'))
    return 'digitalocean';
  if (hasAny('KOYEB', 'KOYEB_DEPLOYMENT_ID', 'KOYEB_APP_NAME')) return 'koyeb';
  return null;
}
var isDockerCached;
async function hasDockerEnv() {
  try {
    fs.statSync('/.dockerenv');
    return true;
  } catch {
    return false;
  }
}
async function hasDockerCGroup() {
  try {
    return fs.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
  } catch {
    return false;
  }
}
async function isDocker() {
  if (isDockerCached === void 0)
    isDockerCached = (await hasDockerEnv()) || (await hasDockerCGroup());
  return isDockerCached;
}
var isInsideContainerCached;
var hasContainerEnv = async () => {
  try {
    fs.statSync('/run/.containerenv');
    return true;
  } catch {
    return false;
  }
};
async function isInsideContainer() {
  if (isInsideContainerCached === void 0)
    isInsideContainerCached = (await hasContainerEnv()) || (await isDocker());
  return isInsideContainerCached;
}
async function isWsl() {
  try {
    if (process.platform !== 'linux') return false;
    if (os.release().toLowerCase().includes('microsoft')) {
      if (await isInsideContainer()) return false;
      return true;
    }
    return fs
      .readFileSync('/proc/version', 'utf8')
      .toLowerCase()
      .includes('microsoft')
      ? !(await isInsideContainer())
      : false;
  } catch {
    return false;
  }
}
var projectIdCached = null;
async function getProjectId(baseUrl) {
  if (projectIdCached) return projectIdCached;
  const projectName = await getNameFromLocalPackageJson();
  if (projectName) {
    projectIdCached = await hashToBase64(
      baseUrl ? baseUrl + projectName : projectName
    );
    return projectIdCached;
  }
  if (baseUrl) {
    projectIdCached = await hashToBase64(baseUrl);
    return projectIdCached;
  }
  projectIdCached = generateId(32);
  return projectIdCached;
}
async function detectDatabaseNode() {
  for (const [pkg, name] of Object.entries({
    pg: 'postgresql',
    mysql: 'mysql',
    mariadb: 'mariadb',
    sqlite3: 'sqlite',
    'better-sqlite3': 'sqlite',
    '@prisma/client': 'prisma',
    mongoose: 'mongodb',
    mongodb: 'mongodb',
    'drizzle-orm': 'drizzle',
  })) {
    const version = await getPackageVersion(pkg);
    if (version)
      return {
        name,
        version,
      };
  }
}
async function detectFrameworkNode() {
  for (const [pkg, name] of Object.entries({
    next: 'next',
    nuxt: 'nuxt',
    'react-router': 'react-router',
    astro: 'astro',
    '@sveltejs/kit': 'sveltekit',
    'solid-start': 'solid-start',
    'tanstack-start': 'tanstack-start',
    hono: 'hono',
    express: 'express',
    elysia: 'elysia',
    expo: 'expo',
  })) {
    const version = await getPackageVersion(pkg);
    if (version)
      return {
        name,
        version,
      };
  }
}
var noop = async function noop() {};
async function createTelemetry(options, context) {
  const debugEnabled =
    options.telemetry?.debug ||
    getBooleanEnvVar('BETTER_AUTH_TELEMETRY_DEBUG', false);
  const telemetryEndpoint = ENV.BETTER_AUTH_TELEMETRY_ENDPOINT;
  if (!telemetryEndpoint && !context?.customTrack) return { publish: noop };
  const track = async (event) => {
    if (context?.customTrack)
      await context.customTrack(event).catch(logger.error);
    else if (telemetryEndpoint)
      if (debugEnabled)
        logger.info('telemetry event', JSON.stringify(event, null, 2));
      else
        await betterFetch(telemetryEndpoint, {
          method: 'POST',
          body: event,
        }).catch(logger.error);
  };
  const isEnabled = async () => {
    const telemetryEnabled =
      options.telemetry?.enabled !== void 0 ? options.telemetry.enabled : false;
    return (
      (getBooleanEnvVar('BETTER_AUTH_TELEMETRY', false) || telemetryEnabled) &&
      (context?.skipTestCheck || !isTest())
    );
  };
  const enabled = await isEnabled();
  let anonymousId;
  if (enabled) {
    anonymousId = await getProjectId(
      typeof options.baseURL === 'string' ? options.baseURL : void 0
    );
    track({
      type: 'init',
      payload: {
        config: await getTelemetryAuthConfig(options, context),
        runtime: detectRuntime(),
        database: await detectDatabaseNode(),
        framework: await detectFrameworkNode(),
        environment: detectEnvironment(),
        systemInfo: await detectSystemInfo(),
        packageManager: detectPackageManager(),
      },
      anonymousId,
    });
  }
  return {
    publish: async (event) => {
      if (!enabled) return;
      if (!anonymousId)
        anonymousId = await getProjectId(
          typeof options.baseURL === 'string' ? options.baseURL : void 0
        );
      await track({
        type: event.type,
        payload: event.payload,
        anonymousId,
      });
    },
  };
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/context/create-context.mjs
/**
 * Estimates the entropy of a string in bits.
 * This is a simple approximation that helps detect low-entropy secrets.
 */
function estimateEntropy(str) {
  const unique = new Set(str).size;
  if (unique === 0) return 0;
  return Math.log2(Math.pow(unique, str.length));
}
/**
 * Validates that the secret meets minimum security requirements.
 * Throws BetterAuthError if the secret is invalid.
 * Skips validation for DEFAULT_SECRET in test environments only.
 * Only throws for DEFAULT_SECRET in production environment.
 */
function validateSecret(secret, logger) {
  const isDefaultSecret = secret === DEFAULT_SECRET;
  if (isTest()) return;
  if (isDefaultSecret && isProduction)
    throw new BetterAuthError(
      'You are using the default secret. Please set `BETTER_AUTH_SECRET` in your environment variables or pass `secret` in your auth config.'
    );
  if (!secret)
    throw new BetterAuthError(
      'BETTER_AUTH_SECRET is missing. Set it in your environment or pass `secret` to betterAuth({ secret }).'
    );
  if (secret.length < 32)
    logger.warn(
      `[better-auth] Warning: your BETTER_AUTH_SECRET should be at least 32 characters long for adequate security. Generate one with \`npx auth secret\` or \`openssl rand -base64 32\`.`
    );
  if (estimateEntropy(secret) < 120)
    logger.warn(
      '[better-auth] Warning: your BETTER_AUTH_SECRET appears low-entropy. Use a randomly generated secret for production.'
    );
}
async function createAuthContext(adapter, options, getDatabaseType) {
  if (!options.database)
    options = defu(options, {
      session: {
        cookieCache: {
          enabled: true,
          strategy: 'jwe',
          refreshCache: true,
          maxAge: options.session?.expiresIn || 3600 * 24 * 7,
        },
      },
      account: {
        storeStateStrategy: 'cookie',
        storeAccountCookie: true,
      },
    });
  const plugins = options.plugins || [];
  const internalPlugins = getInternalPlugins(options);
  const logger = createLogger(options.logger);
  const isDynamicConfig = isDynamicBaseURLConfig(options.baseURL);
  if (isDynamicBaseURLConfig(options.baseURL)) {
    const { allowedHosts } = options.baseURL;
    if (!allowedHosts || allowedHosts.length === 0)
      throw new BetterAuthError(
        'baseURL.allowedHosts cannot be empty. Provide at least one allowed host pattern (e.g., ["myapp.com", "*.vercel.app"]).'
      );
  }
  const baseURL = isDynamicConfig
    ? void 0
    : getBaseURL(
        typeof options.baseURL === 'string' ? options.baseURL : void 0,
        options.basePath
      );
  if (!baseURL && !isDynamicConfig)
    logger.warn(
      `[better-auth] Base URL could not be determined. Please set a valid base URL using the baseURL config option or the BETTER_AUTH_URL environment variable. Without this, callbacks and redirects may not work correctly.`
    );
  if (
    adapter.id === 'memory' &&
    options.advanced?.database?.generateId === false
  )
    logger.error(`[better-auth] Misconfiguration detected.
You are using the memory DB with generateId: false.
This will cause no id to be generated for any model.
Most of the features of Better Auth will not work correctly.`);
  const secretsArray =
    options.secrets ?? parseSecretsEnv(env.BETTER_AUTH_SECRETS);
  const legacySecret =
    options.secret || env.BETTER_AUTH_SECRET || env.AUTH_SECRET || '';
  let secret;
  let secretConfig;
  if (secretsArray) {
    validateSecretsArray(secretsArray, logger);
    secret = secretsArray[0].value;
    secretConfig = buildSecretConfig(secretsArray, legacySecret);
  } else {
    secret = legacySecret || 'better-auth-secret-12345678901234567890';
    validateSecret(secret, logger);
    secretConfig = secret;
  }
  options = {
    ...options,
    secret,
    baseURL: isDynamicConfig
      ? options.baseURL
      : baseURL
        ? new URL(baseURL).origin
        : '',
    basePath: options.basePath || '/api/auth',
    plugins: plugins.concat(internalPlugins),
  };
  checkEndpointConflicts(options, logger);
  const cookies = getCookies(options);
  const tables = getAuthTables(options);
  const providers = (
    await Promise.all(
      Object.entries(options.socialProviders || {}).map(
        async ([key, originalConfig]) => {
          const config =
            typeof originalConfig === 'function'
              ? await originalConfig()
              : originalConfig;
          if (config == null) return null;
          if (config.enabled === false) return null;
          if (!config.clientId)
            logger.warn(
              `Social provider ${key} is missing clientId or clientSecret`
            );
          const provider = socialProviders[key](config);
          provider.disableImplicitSignUp = config.disableImplicitSignUp;
          return provider;
        }
      )
    )
  ).filter((x) => x !== null);
  const generateIdFunc = ({ model, size }) => {
    if (typeof options.advanced?.generateId === 'function')
      return options.advanced.generateId({
        model,
        size,
      });
    const dbGenerateId = options?.advanced?.database?.generateId;
    if (typeof dbGenerateId === 'function')
      return dbGenerateId({
        model,
        size,
      });
    if (dbGenerateId === 'uuid') return crypto.randomUUID();
    if (dbGenerateId === 'serial' || dbGenerateId === false) return false;
    return generateId$1(size);
  };
  const { publish } = await createTelemetry(options, {
    adapter: adapter.id,
    database:
      typeof options.database === 'function'
        ? 'adapter'
        : getDatabaseType(options.database),
  });
  const pluginIds = new Set(options.plugins.map((p) => p.id));
  const getPluginFn = (id) => options.plugins.find((p) => p.id === id) ?? null;
  const hasPluginFn = (id) => pluginIds.has(id);
  const trustedOrigins = await getTrustedOrigins(options);
  const trustedProviders = await getTrustedProviders(options);
  const ctx = {
    appName: options.appName || 'Better Auth',
    baseURL: baseURL || '',
    version: getBetterAuthVersion(),
    socialProviders: providers,
    options,
    oauthConfig: {
      storeStateStrategy:
        options.account?.storeStateStrategy ||
        (options.database ? 'database' : 'cookie'),
      skipStateCookieCheck: !!options.account?.skipStateCookieCheck,
    },
    tables,
    trustedOrigins,
    trustedProviders,
    isTrustedOrigin(url, settings) {
      return this.trustedOrigins.some((origin) =>
        matchesOriginPattern(url, origin, settings)
      );
    },
    sessionConfig: {
      updateAge:
        options.session?.updateAge !== void 0
          ? options.session.updateAge
          : 1440 * 60,
      expiresIn: options.session?.expiresIn || 3600 * 24 * 7,
      freshAge:
        options.session?.freshAge === void 0
          ? 3600 * 24
          : options.session.freshAge,
      cookieRefreshCache: (() => {
        const refreshCache = options.session?.cookieCache?.refreshCache;
        const maxAge = options.session?.cookieCache?.maxAge || 300;
        if (
          (!!options.database || !!options.secondaryStorage) &&
          refreshCache
        ) {
          logger.warn(
            '[better-auth] `session.cookieCache.refreshCache` is enabled while `database` or `secondaryStorage` is configured. `refreshCache` is meant for stateless (DB-less) setups. Disabling `refreshCache` — remove it from your config to silence this warning.'
          );
          return false;
        }
        if (refreshCache === false || refreshCache === void 0) return false;
        if (refreshCache === true)
          return {
            enabled: true,
            updateAge: Math.floor(maxAge * 0.2),
          };
        return {
          enabled: true,
          updateAge:
            refreshCache.updateAge !== void 0
              ? refreshCache.updateAge
              : Math.floor(maxAge * 0.2),
        };
      })(),
    },
    secret,
    secretConfig,
    rateLimit: {
      ...options.rateLimit,
      enabled: options.rateLimit?.enabled ?? isProduction,
      window: options.rateLimit?.window || 10,
      max: options.rateLimit?.max || 100,
      storage:
        options.rateLimit?.storage ||
        (options.secondaryStorage ? 'secondary-storage' : 'memory'),
    },
    authCookies: cookies,
    logger,
    generateId: generateIdFunc,
    session: null,
    secondaryStorage: options.secondaryStorage,
    password: {
      hash: options.emailAndPassword?.password?.hash || hashPassword$1,
      verify: options.emailAndPassword?.password?.verify || verifyPassword$1,
      config: {
        minPasswordLength: options.emailAndPassword?.minPasswordLength || 8,
        maxPasswordLength: options.emailAndPassword?.maxPasswordLength || 128,
      },
      checkPassword,
    },
    setNewSession(session) {
      this.newSession = session;
    },
    newSession: null,
    adapter,
    internalAdapter: createInternalAdapter(adapter, {
      options,
      logger,
      hooks: options.databaseHooks
        ? [
            {
              source: 'user',
              hooks: options.databaseHooks,
            },
          ]
        : [],
      generateId: generateIdFunc,
    }),
    createAuthCookie: createCookieGetter(options),
    async runMigrations() {
      throw new BetterAuthError(
        'runMigrations will be set by the specific init implementation'
      );
    },
    publishTelemetry: publish,
    skipCSRFCheck: !!options.advanced?.disableCSRFCheck,
    skipOriginCheck:
      options.advanced?.disableOriginCheck !== void 0
        ? options.advanced.disableOriginCheck
        : isTest()
          ? true
          : false,
    runInBackground:
      options.advanced?.backgroundTasks?.handler ??
      ((p) => {
        p.catch(() => {});
      }),
    async runInBackgroundOrAwait(promise) {
      try {
        if (options.advanced?.backgroundTasks?.handler) {
          if (promise instanceof Promise)
            options.advanced.backgroundTasks.handler(
              promise.catch((e) => {
                logger.error('Failed to run background task:', e);
              })
            );
        } else await promise;
      } catch (e) {
        logger.error('Failed to run background task:', e);
      }
    },
    getPlugin: getPluginFn,
    hasPlugin: hasPluginFn,
  };
  const initOrPromise = runPluginInit(ctx);
  if (isPromise(initOrPromise)) await initOrPromise;
  return ctx;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/context/init.mjs
var init = async (options) => {
  const adapter = await getAdapter(options);
  const getDatabaseType = (database) =>
    getKyselyDatabaseType(database) || 'unknown';
  const ctx = await createAuthContext(adapter, options, getDatabaseType);
  ctx.runMigrations = async function () {
    if (!options.database || 'updateMany' in options.database)
      throw new BetterAuthError(
        "Database is not provided or it's an adapter. Migrations are only supported with a database instance."
      );
    const { runMigrations } = await getMigrations(options);
    await runMigrations();
  };
  return ctx;
};
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/auth/base.mjs
var createBetterAuth = (options, initFn) => {
  const authContext = initFn(options);
  const { api } = getEndpoints(authContext, options);
  return {
    handler: async (request) => {
      const ctx = await authContext;
      const basePath = ctx.options.basePath || '/api/auth';
      let handlerCtx;
      if (isDynamicBaseURLConfig(options.baseURL)) {
        handlerCtx = Object.create(
          Object.getPrototypeOf(ctx),
          Object.getOwnPropertyDescriptors(ctx)
        );
        const baseURL = resolveBaseURL(options.baseURL, basePath, request);
        if (baseURL) {
          handlerCtx.baseURL = baseURL;
          handlerCtx.options = {
            ...ctx.options,
            baseURL: getOrigin(baseURL) || void 0,
          };
        } else
          throw new BetterAuthError(
            'Could not resolve base URL from request. Check your allowedHosts config.'
          );
        const trustedOriginOptions = {
          ...handlerCtx.options,
          baseURL: options.baseURL,
        };
        handlerCtx.trustedOrigins = await getTrustedOrigins(
          trustedOriginOptions,
          request
        );
        if (options.advanced?.crossSubDomainCookies?.enabled) {
          handlerCtx.authCookies = getCookies(handlerCtx.options);
          handlerCtx.createAuthCookie = createCookieGetter(handlerCtx.options);
        }
      } else {
        handlerCtx = ctx;
        if (!ctx.options.baseURL) {
          const baseURL = getBaseURL(
            void 0,
            basePath,
            request,
            void 0,
            ctx.options.advanced?.trustedProxyHeaders
          );
          if (baseURL) {
            ctx.baseURL = baseURL;
            ctx.options.baseURL = getOrigin(ctx.baseURL) || void 0;
          } else
            throw new BetterAuthError(
              'Could not get base URL from request. Please provide a valid base URL.'
            );
        }
        handlerCtx.trustedOrigins = await getTrustedOrigins(
          ctx.options,
          request
        );
      }
      handlerCtx.trustedProviders = await getTrustedProviders(
        handlerCtx.options,
        request
      );
      const { handler } = router(handlerCtx, options);
      return runWithAdapter(handlerCtx.adapter, () => handler(request));
    },
    api,
    options,
    $context: authContext,
    $ERROR_CODES: {
      ...options.plugins?.reduce((acc, plugin) => {
        if (plugin.$ERROR_CODES)
          return {
            ...acc,
            ...plugin.$ERROR_CODES,
          };
        return acc;
      }, {}),
      ...BASE_ERROR_CODES,
    },
  };
};
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/auth/full.mjs
/**
 * Better Auth initializer for full mode (with Kysely)
 *
 * @example
 * ```ts
 * import { betterAuth } from "better-auth";
 *
 * const auth = betterAuth({
 * 	database: new PostgresDialect({ connection: process.env.DATABASE_URL }),
 * });
 * ```
 *
 * For minimal mode (without Kysely), import from `better-auth/minimal` instead
 * @example
 * ```ts
 * import { betterAuth } from "better-auth/minimal";
 *
 * const auth = betterAuth({
 *	  database: drizzleAdapter(db, { provider: "pg" }),
 * });
 */
var betterAuth = (options) => {
  return createBetterAuth(options, init);
};
//#endregion
//#region node_modules/.pnpm/@better-auth+drizzle-adapter@1.6.2_@better-auth+core@1.6.2_@better-auth+utils@0.4.0_@be_09003bcc635dfcb8e916e9742c22d393/node_modules/@better-auth/drizzle-adapter/dist/index.mjs
/**
 * Case-insensitive LIKE/ILIKE for pattern matching.
 * Uses ILIKE on PostgreSQL, LOWER()+LIKE on MySQL/SQLite.
 */
function insensitiveIlike(column, pattern, provider) {
  return provider === 'pg'
    ? ilike(column, pattern)
    : sql`LOWER(${column}) LIKE LOWER(${pattern})`;
}
/**
 * Case-insensitive IN for string arrays.
 */
function insensitiveInArray(column, values) {
  if (values.length === 0) return sql`false`;
  return sql`LOWER(${column}) IN (${sql.join(
    values.map((v) => sql`LOWER(${v})`),
    sql`, `
  )})`;
}
/**
 * Case-insensitive NOT IN for string arrays.
 */
function insensitiveNotInArray(column, values) {
  if (values.length === 0) return sql`true`;
  return sql`LOWER(${column}) NOT IN (${sql.join(
    values.map((v) => sql`LOWER(${v})`),
    sql`, `
  )})`;
}
/**
 * Case-insensitive equality for strings.
 */
function insensitiveEq(column, value) {
  return sql`LOWER(${column}) = LOWER(${value})`;
}
/**
 * Case-insensitive inequality for strings.
 */
function insensitiveNe(column, value) {
  return sql`LOWER(${column}) <> LOWER(${value})`;
}
var drizzleAdapter = (db, config) => {
  let lazyOptions = null;
  const createCustomAdapter =
    (db) =>
    ({ getFieldName, getDefaultFieldName, options }) => {
      function getSchema(model) {
        const schema = config.schema || db._.fullSchema;
        if (!schema)
          throw new BetterAuthError(
            'Drizzle adapter failed to initialize. Schema not found. Please provide a schema object in the adapter options object.'
          );
        const schemaModel = schema[model];
        if (!schemaModel)
          throw new BetterAuthError(
            `[# Drizzle Adapter]: The model "${model}" was not found in the schema object. Please pass the schema directly to the adapter options.`
          );
        return schemaModel;
      }
      const withReturning = async (model, builder, data, where) => {
        if (config.provider !== 'mysql') return (await builder.returning())[0];
        await builder.execute();
        const schemaModel = getSchema(model);
        const builderVal = builder.config?.values;
        if (where?.length) {
          const clause = convertWhereClause(
            where.map((w) => {
              if (data[w.field] !== void 0)
                return {
                  ...w,
                  value: data[w.field],
                };
              return w;
            }),
            model
          );
          return (
            await db
              .select()
              .from(schemaModel)
              .where(...clause)
          )[0];
        } else if (builderVal && builderVal[0]?.id?.value) {
          let tId = builderVal[0]?.id?.value;
          if (!tId)
            tId = (
              await db
                .select({ id: sql`LAST_INSERT_ID()` })
                .from(schemaModel)
                .orderBy(desc(schemaModel.id))
                .limit(1)
            )[0].id;
          return (
            await db
              .select()
              .from(schemaModel)
              .where(eq(schemaModel.id, tId))
              .limit(1)
              .execute()
          )[0];
        } else if (data.id)
          return (
            await db
              .select()
              .from(schemaModel)
              .where(eq(schemaModel.id, data.id))
              .limit(1)
              .execute()
          )[0];
        else {
          if (!('id' in schemaModel))
            throw new BetterAuthError(
              `The model "${model}" does not have an "id" field. Please use the "id" field as your primary key.`
            );
          return (
            await db
              .select()
              .from(schemaModel)
              .orderBy(desc(schemaModel.id))
              .limit(1)
              .execute()
          )[0];
        }
      };
      function convertWhereClause(where, model) {
        const schemaModel = getSchema(model);
        if (!where) return [];
        if (where.length === 1) {
          const w = where[0];
          if (!w) return [];
          const field = getFieldName({
            model,
            field: w.field,
          });
          if (!schemaModel[field])
            throw new BetterAuthError(
              `The field "${w.field}" does not exist in the schema for the model "${model}". Please update your schema.`
            );
          const isInsensitive =
            (w.mode ?? 'sensitive') === 'insensitive' &&
            (typeof w.value === 'string' ||
              (Array.isArray(w.value) &&
                w.value.every((v) => typeof v === 'string')));
          if (w.operator === 'in') {
            if (!Array.isArray(w.value))
              throw new BetterAuthError(
                `The value for the field "${w.field}" must be an array when using the "in" operator.`
              );
            if (isInsensitive)
              return [insensitiveInArray(schemaModel[field], w.value)];
            return [inArray(schemaModel[field], w.value)];
          }
          if (w.operator === 'not_in') {
            if (!Array.isArray(w.value))
              throw new BetterAuthError(
                `The value for the field "${w.field}" must be an array when using the "not_in" operator.`
              );
            if (isInsensitive)
              return [insensitiveNotInArray(schemaModel[field], w.value)];
            return [notInArray(schemaModel[field], w.value)];
          }
          if (w.operator === 'contains') {
            if (isInsensitive && typeof w.value === 'string')
              return [
                insensitiveIlike(
                  schemaModel[field],
                  `%${w.value}%`,
                  config.provider
                ),
              ];
            return [like(schemaModel[field], `%${w.value}%`)];
          }
          if (w.operator === 'starts_with') {
            if (isInsensitive && typeof w.value === 'string')
              return [
                insensitiveIlike(
                  schemaModel[field],
                  `${w.value}%`,
                  config.provider
                ),
              ];
            return [like(schemaModel[field], `${w.value}%`)];
          }
          if (w.operator === 'ends_with') {
            if (isInsensitive && typeof w.value === 'string')
              return [
                insensitiveIlike(
                  schemaModel[field],
                  `%${w.value}`,
                  config.provider
                ),
              ];
            return [like(schemaModel[field], `%${w.value}`)];
          }
          if (w.operator === 'lt') return [lt(schemaModel[field], w.value)];
          if (w.operator === 'lte') return [lte(schemaModel[field], w.value)];
          if (w.operator === 'ne') {
            if (w.value === null) return [isNotNull(schemaModel[field])];
            if (isInsensitive && typeof w.value === 'string')
              return [insensitiveNe(schemaModel[field], w.value)];
            return [ne(schemaModel[field], w.value)];
          }
          if (w.operator === 'gt') return [gt(schemaModel[field], w.value)];
          if (w.operator === 'gte') return [gte(schemaModel[field], w.value)];
          if (w.value === null) return [isNull(schemaModel[field])];
          if (isInsensitive && typeof w.value === 'string')
            return [insensitiveEq(schemaModel[field], w.value)];
          return [eq(schemaModel[field], w.value)];
        }
        const andGroup = where.filter(
          (w) => w.connector === 'AND' || !w.connector
        );
        const orGroup = where.filter((w) => w.connector === 'OR');
        const andClause = and(
          ...andGroup.map((w) => {
            const field = getFieldName({
              model,
              field: w.field,
            });
            const isInsensitive =
              (w.mode ?? 'sensitive') === 'insensitive' &&
              (typeof w.value === 'string' ||
                (Array.isArray(w.value) &&
                  w.value.every((v) => typeof v === 'string')));
            if (w.operator === 'in') {
              if (!Array.isArray(w.value))
                throw new BetterAuthError(
                  `The value for the field "${w.field}" must be an array when using the "in" operator.`
                );
              if (isInsensitive)
                return insensitiveInArray(schemaModel[field], w.value);
              return inArray(schemaModel[field], w.value);
            }
            if (w.operator === 'not_in') {
              if (!Array.isArray(w.value))
                throw new BetterAuthError(
                  `The value for the field "${w.field}" must be an array when using the "not_in" operator.`
                );
              if (isInsensitive)
                return insensitiveNotInArray(schemaModel[field], w.value);
              return notInArray(schemaModel[field], w.value);
            }
            if (w.operator === 'contains') {
              if (isInsensitive && typeof w.value === 'string')
                return insensitiveIlike(
                  schemaModel[field],
                  `%${w.value}%`,
                  config.provider
                );
              return like(schemaModel[field], `%${w.value}%`);
            }
            if (w.operator === 'starts_with') {
              if (isInsensitive && typeof w.value === 'string')
                return insensitiveIlike(
                  schemaModel[field],
                  `${w.value}%`,
                  config.provider
                );
              return like(schemaModel[field], `${w.value}%`);
            }
            if (w.operator === 'ends_with') {
              if (isInsensitive && typeof w.value === 'string')
                return insensitiveIlike(
                  schemaModel[field],
                  `%${w.value}`,
                  config.provider
                );
              return like(schemaModel[field], `%${w.value}`);
            }
            if (w.operator === 'lt') return lt(schemaModel[field], w.value);
            if (w.operator === 'lte') return lte(schemaModel[field], w.value);
            if (w.operator === 'gt') return gt(schemaModel[field], w.value);
            if (w.operator === 'gte') return gte(schemaModel[field], w.value);
            if (w.operator === 'ne') {
              if (w.value === null) return isNotNull(schemaModel[field]);
              if (isInsensitive && typeof w.value === 'string')
                return insensitiveNe(schemaModel[field], w.value);
              return ne(schemaModel[field], w.value);
            }
            if (w.value === null) return isNull(schemaModel[field]);
            if (isInsensitive && typeof w.value === 'string')
              return insensitiveEq(schemaModel[field], w.value);
            return eq(schemaModel[field], w.value);
          })
        );
        const orClause = or(
          ...orGroup.map((w) => {
            const field = getFieldName({
              model,
              field: w.field,
            });
            if (!schemaModel[field])
              throw new BetterAuthError(
                `The field "${w.field}" does not exist in the schema for the model "${model}". Please update your schema.`
              );
            const isInsensitive =
              (w.mode ?? 'sensitive') === 'insensitive' &&
              (typeof w.value === 'string' ||
                (Array.isArray(w.value) &&
                  w.value.every((v) => typeof v === 'string')));
            if (w.operator === 'in') {
              if (!Array.isArray(w.value))
                throw new BetterAuthError(
                  `The value for the field "${w.field}" must be an array when using the "in" operator.`
                );
              if (isInsensitive)
                return insensitiveInArray(schemaModel[field], w.value);
              return inArray(schemaModel[field], w.value);
            }
            if (w.operator === 'not_in') {
              if (!Array.isArray(w.value))
                throw new BetterAuthError(
                  `The value for the field "${w.field}" must be an array when using the "not_in" operator.`
                );
              if (isInsensitive)
                return insensitiveNotInArray(schemaModel[field], w.value);
              return notInArray(schemaModel[field], w.value);
            }
            if (w.operator === 'contains') {
              if (isInsensitive && typeof w.value === 'string')
                return insensitiveIlike(
                  schemaModel[field],
                  `%${w.value}%`,
                  config.provider
                );
              return like(schemaModel[field], `%${w.value}%`);
            }
            if (w.operator === 'starts_with') {
              if (isInsensitive && typeof w.value === 'string')
                return insensitiveIlike(
                  schemaModel[field],
                  `${w.value}%`,
                  config.provider
                );
              return like(schemaModel[field], `${w.value}%`);
            }
            if (w.operator === 'ends_with') {
              if (isInsensitive && typeof w.value === 'string')
                return insensitiveIlike(
                  schemaModel[field],
                  `%${w.value}`,
                  config.provider
                );
              return like(schemaModel[field], `%${w.value}`);
            }
            if (w.operator === 'lt') return lt(schemaModel[field], w.value);
            if (w.operator === 'lte') return lte(schemaModel[field], w.value);
            if (w.operator === 'gt') return gt(schemaModel[field], w.value);
            if (w.operator === 'gte') return gte(schemaModel[field], w.value);
            if (w.operator === 'ne') {
              if (w.value === null) return isNotNull(schemaModel[field]);
              if (isInsensitive && typeof w.value === 'string')
                return insensitiveNe(schemaModel[field], w.value);
              return ne(schemaModel[field], w.value);
            }
            if (w.value === null) return isNull(schemaModel[field]);
            if (isInsensitive && typeof w.value === 'string')
              return insensitiveEq(schemaModel[field], w.value);
            return eq(schemaModel[field], w.value);
          })
        );
        const clause = [];
        if (andGroup.length) clause.push(andClause);
        if (orGroup.length) clause.push(orClause);
        return clause;
      }
      function checkMissingFields(schema, model, values) {
        if (!schema)
          throw new BetterAuthError(
            'Drizzle adapter failed to initialize. Drizzle Schema not found. Please provide a schema object in the adapter options object.'
          );
        for (const key in values) {
          let fieldName;
          try {
            fieldName = getFieldName({
              model,
              field: key,
            });
          } catch {
            fieldName = key;
          }
          if (!schema[fieldName])
            throw new BetterAuthError(
              `The field "${key}" does not exist in the "${model}" Drizzle schema. Please update your drizzle schema or re-generate using "npx auth@latest generate".`
            );
        }
      }
      /**
       * Resolve the db.query key for a model.
       *
       * When `usePlural` is false (default), Better Auth uses singular model
       * names like "user", but Drizzle's db.query is keyed by the schema
       * export names (often plural like "users"). This function:
       *
       * 1. Tries the model name directly (works when schema keys match)
       * 2. If usePlural is set, tries appending "s"
       * 3. Falls back to scanning config.schema to find which db.query key
       *    corresponds to the same table object
       */
      function getQueryModel(model) {
        if (db.query[model]) return model;
        if (config.usePlural) {
          const plural = `${model}s`;
          if (db.query[plural]) return plural;
        }
        if (config.schema) {
          const targetTable = config.schema[model];
          if (targetTable) {
            const fullSchema = db._.fullSchema;
            if (fullSchema) {
              for (const key of Object.keys(db.query))
                if (fullSchema[key] === targetTable) return key;
            }
          }
        }
        return null;
      }
      return {
        async create({ model, data: values }) {
          const schemaModel = getSchema(model);
          checkMissingFields(schemaModel, model, values);
          return await withReturning(
            model,
            db.insert(schemaModel).values(values),
            values
          );
        },
        async findOne({ model, where, select, join }) {
          const schemaModel = getSchema(model);
          const clause = convertWhereClause(where, model);
          if (options.experimental?.joins) {
            const queryModel = getQueryModel(model);
            if (!db.query || !queryModel) {
              logger.error(
                `[# Drizzle Adapter]: The model "${model}" was not found in the query object. Please update your Drizzle schema to include relations or re-generate using "npx auth@latest generate".`
              );
              logger.info('Falling back to regular query');
            } else {
              let includes;
              const pluralJoinResults = [];
              if (join) {
                includes = {};
                const joinEntries = Object.entries(join);
                for (const [model, joinAttr] of joinEntries) {
                  const limit =
                    joinAttr.limit ??
                    options.advanced?.database?.defaultFindManyLimit ??
                    100;
                  const isUnique = joinAttr.relation === 'one-to-one';
                  const pluralSuffix = isUnique || config.usePlural ? '' : 's';
                  includes[`${model}${pluralSuffix}`] = isUnique
                    ? true
                    : { limit };
                  if (!isUnique)
                    pluralJoinResults.push(`${model}${pluralSuffix}`);
                }
              }
              const res = await db.query[queryModel].findFirst({
                where: clause[0],
                columns:
                  select?.length && select.length > 0
                    ? select.reduce((acc, field) => {
                        acc[
                          getFieldName({
                            model,
                            field,
                          })
                        ] = true;
                        return acc;
                      }, {})
                    : void 0,
                with: includes,
              });
              if (res)
                for (const pluralJoinResult of pluralJoinResults) {
                  const singularKey = !config.usePlural
                    ? pluralJoinResult.slice(0, -1)
                    : pluralJoinResult;
                  res[singularKey] = res[pluralJoinResult];
                  if (pluralJoinResult !== singularKey)
                    delete res[pluralJoinResult];
                }
              return res;
            }
          }
          const res = await db
            .select(
              select?.length && select.length > 0
                ? select.reduce((acc, field) => {
                    const fieldName = getFieldName({
                      model,
                      field,
                    });
                    return {
                      ...acc,
                      [fieldName]: schemaModel[fieldName],
                    };
                  }, {})
                : void 0
            )
            .from(schemaModel)
            .where(...clause);
          if (!res.length) return null;
          return res[0];
        },
        async findMany({ model, where, sortBy, limit, select, offset, join }) {
          const schemaModel = getSchema(model);
          const clause = where ? convertWhereClause(where, model) : [];
          const sortFn = sortBy?.direction === 'desc' ? desc : asc;
          if (options.experimental?.joins) {
            const queryModel = getQueryModel(model);
            if (!queryModel) {
              logger.error(
                `[# Drizzle Adapter]: The model "${model}" was not found in the query object. Please update your Drizzle schema to include relations or re-generate using "npx auth@latest generate".`
              );
              logger.info('Falling back to regular query');
            } else {
              let includes;
              const pluralJoinResults = [];
              if (join) {
                includes = {};
                const joinEntries = Object.entries(join);
                for (const [model, joinAttr] of joinEntries) {
                  const isUnique = joinAttr.relation === 'one-to-one';
                  const limit =
                    joinAttr.limit ??
                    options.advanced?.database?.defaultFindManyLimit ??
                    100;
                  const pluralSuffix = isUnique || config.usePlural ? '' : 's';
                  includes[`${model}${pluralSuffix}`] = isUnique
                    ? true
                    : { limit };
                  if (!isUnique)
                    pluralJoinResults.push(`${model}${pluralSuffix}`);
                }
              }
              let orderBy = void 0;
              if (sortBy?.field)
                orderBy = [
                  sortFn(
                    schemaModel[
                      getFieldName({
                        model,
                        field: sortBy?.field,
                      })
                    ]
                  ),
                ];
              const res = await db.query[queryModel].findMany({
                where: clause[0],
                with: includes,
                columns:
                  select?.length && select.length > 0
                    ? select.reduce((acc, field) => {
                        acc[
                          getFieldName({
                            model,
                            field,
                          })
                        ] = true;
                        return acc;
                      }, {})
                    : void 0,
                limit: limit ?? 100,
                offset: offset ?? 0,
                orderBy,
              });
              if (res)
                for (const item of res)
                  for (const pluralJoinResult of pluralJoinResults) {
                    const singularKey = !config.usePlural
                      ? pluralJoinResult.slice(0, -1)
                      : pluralJoinResult;
                    if (singularKey === pluralJoinResult) continue;
                    item[singularKey] = item[pluralJoinResult];
                    delete item[pluralJoinResult];
                  }
              return res;
            }
          }
          let builder = db
            .select(
              select?.length && select.length > 0
                ? select.reduce((acc, field) => {
                    const fieldName = getFieldName({
                      model,
                      field,
                    });
                    return {
                      ...acc,
                      [fieldName]: schemaModel[fieldName],
                    };
                  }, {})
                : void 0
            )
            .from(schemaModel);
          const effectiveLimit = limit;
          const effectiveOffset = offset;
          if (typeof effectiveLimit !== 'undefined')
            builder = builder.limit(effectiveLimit);
          if (typeof effectiveOffset !== 'undefined')
            builder = builder.offset(effectiveOffset);
          if (sortBy?.field)
            builder = builder.orderBy(
              sortFn(
                schemaModel[
                  getFieldName({
                    model,
                    field: sortBy?.field,
                  })
                ]
              )
            );
          return await builder.where(...clause);
        },
        async count({ model, where }) {
          const schemaModel = getSchema(model);
          const clause = where ? convertWhereClause(where, model) : [];
          return (
            await db
              .select({ count: count() })
              .from(schemaModel)
              .where(...clause)
          )[0].count;
        },
        async update({ model, where, update: values }) {
          const schemaModel = getSchema(model);
          const clause = convertWhereClause(where, model);
          return await withReturning(
            model,
            db
              .update(schemaModel)
              .set(values)
              .where(...clause),
            values,
            where
          );
        },
        async updateMany({ model, where, update: values }) {
          const schemaModel = getSchema(model);
          const clause = convertWhereClause(where, model);
          return await db
            .update(schemaModel)
            .set(values)
            .where(...clause);
        },
        async delete({ model, where }) {
          const schemaModel = getSchema(model);
          const clause = convertWhereClause(where, model);
          return await db.delete(schemaModel).where(...clause);
        },
        async deleteMany({ model, where }) {
          const schemaModel = getSchema(model);
          const clause = convertWhereClause(where, model);
          const res = await db.delete(schemaModel).where(...clause);
          let count = 0;
          if (res && 'rowCount' in res) count = res.rowCount;
          else if (Array.isArray(res)) count = res.length;
          else if (
            res &&
            ('affectedRows' in res || 'rowsAffected' in res || 'changes' in res)
          )
            count = res.affectedRows ?? res.rowsAffected ?? res.changes;
          if (typeof count !== 'number')
            logger.error(
              '[Drizzle Adapter] The result of the deleteMany operation is not a number. This is likely a bug in the adapter. Please report this issue to the Better Auth team.',
              {
                res,
                model,
                where,
              }
            );
          return count;
        },
        options: config,
      };
    };
  let adapterOptions = null;
  adapterOptions = {
    config: {
      adapterId: 'drizzle',
      adapterName: 'Drizzle Adapter',
      usePlural: config.usePlural ?? false,
      debugLogs: config.debugLogs ?? false,
      supportsUUIDs: config.provider === 'pg' ? true : false,
      supportsJSON: config.provider === 'pg' ? true : false,
      supportsArrays: config.provider === 'pg' ? true : false,
      customTransformOutput: ({ data, fieldAttributes }) => {
        if (fieldAttributes.type === 'date') {
          if (data === null || data === void 0) return data;
          return new Date(data);
        }
        return data;
      },
      transaction:
        (config.transaction ?? false)
          ? (cb) =>
              db.transaction((tx) => {
                return cb(
                  createAdapterFactory({
                    config: adapterOptions.config,
                    adapter: createCustomAdapter(tx),
                  })(lazyOptions)
                );
              })
          : false,
    },
    adapter: createCustomAdapter(db),
  };
  const adapter = createAdapterFactory(adapterOptions);
  return (options) => {
    lazyOptions = options;
    return adapter(options);
  };
};
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/utils/boolean.mjs
function toBoolean(value) {
  return value === 'true' || value === true;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.2_@opentelemetry+api@1.9.1_@tanstack+react-start@1.168.19_crossws@0.4.5_ce0f40b9903c90a7d5fe926e6d44461d/node_modules/better-auth/dist/plugins/one-tap/index.mjs
var oneTapCallbackBodySchema = z$1.object({
  idToken: z$1
    .string()
    .meta({
      description:
        'Google ID token, which the client obtains from the One Tap API',
    }),
});
var oneTap = (options) => ({
  id: 'one-tap',
  version: PACKAGE_VERSION,
  endpoints: {
    oneTapCallback: createAuthEndpoint(
      '/one-tap/callback',
      {
        method: 'POST',
        body: oneTapCallbackBodySchema,
        metadata: {
          openapi: {
            summary: 'One tap callback',
            description:
              'Use this endpoint to authenticate with Google One Tap',
            responses: {
              200: {
                description: 'Successful response',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        session: { $ref: '#/components/schemas/Session' },
                        user: { $ref: '#/components/schemas/User' },
                      },
                    },
                  },
                },
              },
              400: { description: 'Invalid token' },
            },
          },
        },
      },
      async (ctx) => {
        const { idToken } = ctx.body;
        let payload;
        try {
          const JWKS = createRemoteJWKSet(
            new URL('https://www.googleapis.com/oauth2/v3/certs')
          );
          const googleProvider =
            typeof ctx.context.options.socialProviders?.google === 'function'
              ? await ctx.context.options.socialProviders?.google()
              : ctx.context.options.socialProviders?.google;
          const { payload: verifiedPayload } = await jwtVerify(idToken, JWKS, {
            issuer: ['https://accounts.google.com', 'accounts.google.com'],
            audience: options?.clientId || googleProvider?.clientId,
          });
          payload = verifiedPayload;
        } catch {
          throw new APIError('BAD_REQUEST', { message: 'invalid id token' });
        }
        const { email, email_verified, name, picture, sub } = payload;
        if (!email) return ctx.json({ error: 'Email not available in token' });
        const user = await ctx.context.internalAdapter.findUserByEmail(email);
        if (!user) {
          if (options?.disableSignup)
            throw new APIError('BAD_GATEWAY', { message: 'User not found' });
          const newUser = await ctx.context.internalAdapter.createOAuthUser(
            {
              email,
              emailVerified:
                typeof email_verified === 'boolean'
                  ? email_verified
                  : toBoolean(email_verified),
              name,
              image: picture,
            },
            {
              providerId: 'google',
              accountId: sub,
            }
          );
          if (!newUser)
            throw new APIError('INTERNAL_SERVER_ERROR', {
              message: 'Could not create user',
            });
          const session = await ctx.context.internalAdapter.createSession(
            newUser.user.id
          );
          await setSessionCookie(ctx, {
            user: newUser.user,
            session,
          });
          return ctx.json({
            token: session.token,
            user: parseUserOutput(ctx.context.options, newUser.user),
          });
        }
        if (!(await ctx.context.internalAdapter.findAccount(sub)))
          if (
            ctx.context.options.account?.accountLinking?.enabled !== false &&
            (ctx.context.trustedProviders.includes('google') || email_verified)
          )
            await ctx.context.internalAdapter.linkAccount({
              userId: user.user.id,
              providerId: 'google',
              accountId: sub,
              scope: 'openid,profile,email',
              idToken,
            });
          else
            throw new APIError('UNAUTHORIZED', {
              message: "Google sub doesn't match",
            });
        const session = await ctx.context.internalAdapter.createSession(
          user.user.id
        );
        await setSessionCookie(ctx, {
          user: user.user,
          session,
        });
        return ctx.json({
          token: session.token,
          user: parseUserOutput(ctx.context.options, user.user),
        });
      }
    ),
  },
  options,
});
//#endregion
//#region src/core/email/cloudflare.ts
/**
 * Cloudflare Email Service provider implementation
 * Uses the REST API: POST /client/v4/accounts/{account_id}/email/sending/send
 */
var CloudflareEmailProvider = class {
  name = 'cloudflare';
  configs;
  constructor(configs) {
    this.configs = configs;
  }
  async sendEmail(email) {
    try {
      const from = email.from || this.configs.defaultFrom || '';
      const to = Array.isArray(email.to) ? email.to[0] : email.to;
      let html = email.html;
      if (email.react) html = await render(email.react);
      const body = {
        from,
        to,
        subject: email.subject,
      };
      if (html) body.html = html;
      if (email.text) body.text = email.text;
      if (!html && !email.text) body.text = '';
      const url = `https://api.cloudflare.com/client/v4/accounts/${this.configs.accountId}/email/sending/send`;
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.configs.apiToken}`,
        },
        body: JSON.stringify(body),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok || data.success === false)
        return {
          success: false,
          error:
            data?.errors?.[0]?.message ||
            data?.messages?.[0] ||
            `Request failed (${resp.status})`,
          provider: this.name,
        };
      return {
        success: true,
        messageId: data?.result?.delivered?.[0] || void 0,
        provider: this.name,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        provider: this.name,
      };
    }
  }
};
//#endregion
//#region src/core/email/resend.ts
/**
 * Resend email provider implementation
 * @website https://resend.com/
 */
var ResendProvider = class {
  name = 'resend';
  configs;
  client;
  constructor(configs) {
    this.configs = configs;
    this.client = new Resend(configs.apiKey);
  }
  async sendEmail(email) {
    try {
      const resendEmail = {
        from: email.from || this.configs.defaultFrom || '',
        to: Array.isArray(email.to) ? email.to : [email.to],
        subject: email.subject,
      };
      if (email.cc)
        resendEmail.cc = Array.isArray(email.cc) ? email.cc : [email.cc];
      if (email.bcc)
        resendEmail.bcc = Array.isArray(email.bcc) ? email.bcc : [email.bcc];
      if (email.text) resendEmail.text = email.text;
      if (email.html) resendEmail.html = email.html;
      if (email.replyTo) resendEmail.replyTo = email.replyTo;
      if (email.attachments)
        resendEmail.attachments = email.attachments.map((att) => ({
          filename: att.filename,
          content: att.content,
          content_type: att.contentType,
        }));
      if (email.tags)
        resendEmail.tags = email.tags.map((tag) => ({
          name: 'category',
          value: tag,
        }));
      if (email.headers) resendEmail.headers = email.headers;
      if (email.react) resendEmail.html = await render(email.react);
      const result = await this.client.emails.send(resendEmail);
      if (result.error)
        return {
          success: false,
          error: result.error.message,
          provider: this.name,
        };
      return {
        success: true,
        messageId: result.data?.id,
        provider: this.name,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        provider: this.name,
      };
    }
  }
};
//#endregion
//#region src/core/email/templates/verify-email.tsx
function VerifyEmail({ appName = 'our app', logoUrl, url }) {
  return /* @__PURE__ */ jsxs(Html, {
    children: [
      /* @__PURE__ */ jsx(Head, {}),
      /* @__PURE__ */ jsx(Preview, {
        children: `Verify your email for ${appName}`,
      }),
      /* @__PURE__ */ jsx(Body, {
        style: styles.body,
        children: /* @__PURE__ */ jsx(Container, {
          style: styles.container,
          children: /* @__PURE__ */ jsxs(Section, {
            style: styles.card,
            children: [
              /* @__PURE__ */ jsx(Section, { style: styles.accentBar }),
              (logoUrl || appName) &&
                /* @__PURE__ */ jsxs(Section, {
                  style: styles.brandRow,
                  children: [
                    logoUrl
                      ? /* @__PURE__ */ jsx(Img, {
                          src: logoUrl,
                          width: '40',
                          height: '40',
                          alt: appName,
                          style: styles.cardLogo,
                        })
                      : null,
                    /* @__PURE__ */ jsx(Text, {
                      style: styles.cardBrand,
                      children: appName,
                    }),
                  ],
                }),
              /* @__PURE__ */ jsx(Heading, {
                style: styles.h1,
                children: 'Verify your email',
              }),
              /* @__PURE__ */ jsxs(Text, {
                style: styles.p,
                children: [
                  'Click the button below to verify your email address and finish signing in to ',
                  /* @__PURE__ */ jsx('strong', { children: appName }),
                  '.',
                ],
              }),
              /* @__PURE__ */ jsx(Section, {
                style: styles.buttonWrap,
                children: /* @__PURE__ */ jsx(Button, {
                  href: url,
                  style: styles.button,
                  children: 'Verify email',
                }),
              }),
              /* @__PURE__ */ jsxs(Text, {
                style: styles.muted,
                children: [
                  'This link will expire in ',
                  /* @__PURE__ */ jsx('strong', { children: '24 hours' }),
                  '.',
                ],
              }),
              /* @__PURE__ */ jsx(Hr, { style: styles.hr }),
              /* @__PURE__ */ jsx(Text, {
                style: styles.small,
                children:
                  "If the button doesn't work, copy and paste this link into your browser:",
              }),
              /* @__PURE__ */ jsx(Link$2, {
                href: url,
                style: styles.link,
                children: url,
              }),
              /* @__PURE__ */ jsx(Text, {
                style: styles.footer,
                children:
                  "If you didn't request this email, you can safely ignore it.",
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#f6f9fc',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Helvetica,Arial,sans-serif',
    color: '#0f172a',
  },
  container: {
    maxWidth: 560,
    margin: '0 auto',
    padding: '32px 16px 40px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: '28px 24px',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    boxShadow:
      '0 20px 50px rgba(2, 6, 23, 0.10), 0 2px 8px rgba(2, 6, 23, 0.05)',
  },
  accentBar: {
    height: 6,
    borderRadius: 999,
    marginBottom: 18,
    background:
      'linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(236,72,153,1) 55%, rgba(14,165,233,1) 100%)',
  },
  h1: {
    margin: '0 0 10px',
    fontSize: 24,
    lineHeight: '30px',
    fontWeight: 700,
    letterSpacing: '-0.01em',
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  cardLogo: {
    borderRadius: 10,
    border: '1px solid rgba(15, 23, 42, 0.10)',
    backgroundColor: 'rgba(15, 23, 42, 0.03)',
  },
  cardBrand: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: '18px',
    fontWeight: 600,
    color: '#0f172a',
    letterSpacing: '-0.01em',
  },
  p: {
    margin: '0 0 18px',
    fontSize: 14,
    lineHeight: '22px',
    color: '#334155',
  },
  buttonWrap: {
    textAlign: 'center',
    margin: '18px 0 14px',
  },
  button: {
    backgroundColor: '#111827',
    borderRadius: 12,
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 600,
    textDecoration: 'none',
    padding: '12px 18px',
    display: 'inline-block',
  },
  muted: {
    margin: '0 0 10px',
    fontSize: 12,
    lineHeight: '18px',
    color: '#64748b',
    textAlign: 'center',
  },
  hr: {
    borderColor: 'rgba(15, 23, 42, 0.08)',
    margin: '18px 0',
  },
  small: {
    margin: '0 0 6px',
    fontSize: 12,
    lineHeight: '18px',
    color: '#64748b',
  },
  link: {
    fontSize: 12,
    lineHeight: '18px',
    color: '#2563eb',
    wordBreak: 'break-all',
  },
  footer: {
    margin: '18px 0 0',
    fontSize: 12,
    lineHeight: '18px',
    color: '#94a3b8',
  },
};
//#endregion
//#region src/core/auth/index.ts
function assertProductionAuthSecret() {
  const secret = envConfigs.auth_secret;
  if (!secret || secret === 'shipany-dev-secret-change-in-production')
    throw new Error(
      'AUTH_SECRET is missing or still set to the development placeholder. Generate one with `openssl rand -base64 32` and set it before serving traffic.'
    );
}
var recentVerificationEmailSentAt = /* @__PURE__ */ new Map();
var VERIFICATION_EMAIL_MIN_INTERVAL_MS = 6e4;
function getDatabaseProvider(provider) {
  switch (provider) {
    case 'sqlite':
    case 'turso':
    case 'd1':
      return 'sqlite';
    case 'postgresql':
    case 'postgres':
      return 'pg';
    case 'mysql':
      return 'mysql';
    default:
      throw new Error(`Unsupported database provider for auth: ${provider}`);
  }
}
var canCacheAuthInstance = !(
  ((typeof navigator !== 'undefined' &&
    navigator.userAgent === 'Cloudflare-Workers') ||
    (typeof globalThis !== 'undefined' && 'Cloudflare' in globalThis)) &&
  ['postgresql', 'postgres', 'mysql'].includes(envConfigs.database_provider)
);
var authInstance;
var socialConfigsSignature = '';
var emailEnabledLoaded = true;
var emailVerificationEnabledLoaded = false;
function getSocialProviders(configs) {
  const providers = {};
  if (configs.google_client_id && configs.google_client_secret)
    providers.google = {
      clientId: configs.google_client_id,
      clientSecret: configs.google_client_secret,
    };
  if (configs.github_client_id && configs.github_client_secret)
    providers.github = {
      clientId: configs.github_client_id,
      clientSecret: configs.github_client_secret,
    };
  return providers;
}
function getSocialSignature(configs) {
  return [
    configs.google_client_id || '',
    configs.google_client_secret || '',
    configs.github_client_id || '',
    configs.github_client_secret || '',
    configs.google_one_tap_enabled || '',
  ].join('|');
}
/**
 * Build the configured email provider from admin settings.
 * Returns null if the chosen provider is not fully configured.
 */
function getEmailProvider(configs) {
  if ((configs.email_provider || 'resend') === 'cloudflare') {
    const apiToken = configs.cloudflare_email_api_token;
    const accountId = configs.cloudflare_email_account_id;
    const from = configs.cloudflare_email_sender_email;
    if (!apiToken || !accountId || !from) return null;
    return {
      provider: new CloudflareEmailProvider({
        apiToken,
        accountId,
        defaultFrom: from,
      }),
      from,
    };
  }
  const apiKey = configs.resend_api_key;
  const from = configs.resend_sender_email;
  if (!apiKey || !from) return null;
  return {
    provider: new ResendProvider({
      apiKey,
      defaultFrom: from,
    }),
    from,
  };
}
/** Check whether email sending is available for the selected provider */
function isEmailConfigured(configs) {
  return getEmailProvider(configs) !== null;
}
function getAuthPlugins(configs) {
  if (!configs) return [];
  const plugins = [];
  if (configs.google_client_id && configs.google_one_tap_enabled === 'true')
    plugins.push(oneTap());
  return plugins;
}
function getAuth(configs) {
  assertProductionAuthSecret();
  if (configs) {
    const nextSignature = getSocialSignature(configs);
    if (nextSignature !== socialConfigsSignature) {
      authInstance = null;
      socialConfigsSignature = nextSignature;
    }
  }
  if (configs) {
    const nextEmailEnabled = configs.email_auth_enabled !== 'false';
    if (nextEmailEnabled !== emailEnabledLoaded) {
      authInstance = null;
      emailEnabledLoaded = nextEmailEnabled;
    }
  }
  if (configs) {
    const nextVerificationEnabled =
      configs.email_verification_enabled === 'true' &&
      isEmailConfigured(configs);
    if (nextVerificationEnabled !== emailVerificationEnabledLoaded) {
      authInstance = null;
      emailVerificationEnabledLoaded = nextVerificationEnabled;
    }
  }
  if (authInstance) return authInstance;
  const socialProviders = configs ? getSocialProviders(configs) : {};
  const emailAndPasswordEnabled = configs
    ? configs.email_auth_enabled !== 'false'
    : true;
  const emailVerificationEnabled = configs
    ? configs.email_verification_enabled === 'true' &&
      isEmailConfigured(configs)
    : false;
  const appName = configs?.app_name || envConfigs.app_name;
  const appUrl = configs?.app_url || envConfigs.app_url;
  const instance = betterAuth({
    appName,
    baseURL: configs?.auth_url || envConfigs.auth_url || appUrl,
    secret: envConfigs.auth_secret,
    trustedOrigins: (request) => {
      const origins = [];
      if (appUrl) origins.push(appUrl);
      try {
        const origin = request?.headers?.get?.('origin');
        if (origin && new URL(origin).hostname === 'localhost')
          origins.push(origin);
      } catch {}
      return origins;
    },
    database: drizzleAdapter(db(), {
      provider: getDatabaseProvider(envConfigs.database_provider),
      schema: schema_exports,
    }),
    socialProviders,
    plugins: getAuthPlugins(configs),
    user: {
      additionalFields: {
        utmSource: {
          type: 'string',
          input: false,
          required: false,
          defaultValue: '',
        },
        ip: {
          type: 'string',
          input: false,
          required: false,
          defaultValue: '',
        },
        locale: {
          type: 'string',
          input: false,
          required: false,
          defaultValue: '',
        },
      },
    },
    advanced: { database: { generateId: () => getUuid() } },
    emailAndPassword: {
      enabled: emailAndPasswordEnabled,
      requireEmailVerification: emailVerificationEnabled,
      autoSignIn: !emailVerificationEnabled,
      sendResetPassword: async ({ user, url }) => {
        const all = await getAllConfigs();
        const emailCtx = getEmailProvider(all);
        if (!emailCtx) {
          console.error(
            '[auth] sendResetPassword: No email provider configured'
          );
          return;
        }
        const appName = all.app_name || envConfigs.app_name;
        const greeting = user.name ? `Hi ${user.name},` : 'Hi,';
        const result = await emailCtx.provider.sendEmail({
          to: user.email,
          subject: `Reset your ${appName} password`,
          text: `${greeting}\n\nYou recently requested to reset your password for ${appName}. Use the link below to choose a new one:\n\n${url}\n\nThis link will expire in 1 hour. If you didn't request a password reset, you can safely ignore this email.`,
          html: `<p>${greeting}</p>
<p>You recently requested to reset your password for <strong>${appName}</strong>. Click the link below to choose a new one:</p>
<p><a href="${url}">Reset your password</a></p>
<p>This link will expire in 1 hour. If you didn't request a password reset, you can safely ignore this email.</p>`,
        });
        if (!result.success)
          console.error('[auth] sendResetPassword failed:', result.error);
      },
    },
    ...(emailVerificationEnabled
      ? {
          emailVerification: {
            sendOnSignUp: false,
            sendOnSignIn: false,
            autoSignInAfterVerification: true,
            expiresIn: 3600 * 24,
            sendVerificationEmail: async ({ user, url }) => {
              try {
                const key = String(user?.email || '').toLowerCase();
                const now = Date.now();
                const last = recentVerificationEmailSentAt.get(key) || 0;
                if (key && now - last < VERIFICATION_EMAIL_MIN_INTERVAL_MS)
                  return;
                if (key) recentVerificationEmailSentAt.set(key, now);
                const all = await getAllConfigs();
                const emailCtx = getEmailProvider(all);
                if (!emailCtx) {
                  console.error(
                    '[auth] sendVerificationEmail: No email provider configured'
                  );
                  return;
                }
                const appName = all.app_name || envConfigs.app_name;
                const rawLogo = all.app_logo || '';
                const logo = /\.svg(\?|#|$)/i.test(rawLogo) ? '' : rawLogo;
                const logoUrl = logo.startsWith('http')
                  ? logo
                  : logo
                    ? `${all.app_url || appUrl || ''}${logo.startsWith('/') ? '' : '/'}${logo}`
                    : void 0;
                const result = await emailCtx.provider.sendEmail({
                  to: user.email,
                  subject: `Verify your email - ${appName}`,
                  react: VerifyEmail({
                    appName,
                    logoUrl,
                    url,
                  }),
                });
                if (!result.success)
                  console.error(
                    '[auth] sendVerificationEmail failed:',
                    result.error
                  );
              } catch (e) {
                console.error('[auth] sendVerificationEmail error:', e);
              }
            },
          },
        }
      : {}),
    logger: { disabled: true },
  });
  if (canCacheAuthInstance) authInstance = instance;
  return instance;
}
//#endregion
//#region src/modules/tickets/service.ts
function parseAttachments(raw) {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((u) => typeof u === 'string')
      : [];
  } catch {
    return [];
  }
}
/**
 * Latest admin reply per ticket, for list previews. One query for the whole
 * page of tickets; newest-first scan keeps the first reply seen per ticket.
 */
async function getLatestAdminReplies(ticketIds) {
  if (!ticketIds.length) return {};
  const rows = await db()
    .select({
      ticketId: ticketMessage.ticketId,
      content: ticketMessage.content,
    })
    .from(ticketMessage)
    .where(
      and(
        inArray(ticketMessage.ticketId, ticketIds),
        eq(ticketMessage.role, 'admin')
      )
    )
    .orderBy(desc(ticketMessage.createdAt));
  const map = {};
  for (const r of rows) if (!(r.ticketId in map)) map[r.ticketId] = r.content;
  return map;
}
/**
 * Validate user-supplied attachment URLs: array of ≤9 strings, each ≤2048
 * chars, relative path or http(s) URL. Returns null when invalid.
 */
function sanitizeAttachments(input) {
  if (input === void 0 || input === null) return [];
  if (!Array.isArray(input)) return null;
  if (input.length > 9) return null;
  const urls = [];
  for (const item of input) {
    if (typeof item !== 'string' || !item.trim() || item.length > 2048)
      return null;
    const url = item.trim();
    if (!url.startsWith('/') && !/^https?:\/\//.test(url)) return null;
    urls.push(url);
  }
  return urls;
}
/**
 * Create a new ticket with its first message (atomic).
 */
async function createTicket(params) {
  return db().transaction(async (tx) => {
    const now = /* @__PURE__ */ new Date();
    const [row] = await tx
      .insert(ticket)
      .values({
        id: getUuid(),
        userId: params.userId,
        title: params.title,
        status: 'open',
        createdAt: now,
        updatedAt: now,
      })
      .returning();
    await tx.insert(ticketMessage).values({
      id: getUuid(),
      ticketId: row.id,
      userId: params.userId,
      role: 'user',
      content: params.content,
      attachments: JSON.stringify(params.attachments ?? []),
      createdAt: now,
    });
    return row;
  });
}
/**
 * List a user's own tickets, paginated, newest activity first.
 */
async function listUserTickets(params) {
  const page = Math.max(1, params.page ?? 1);
  const pageSize = Math.min(100, Math.max(1, params.pageSize ?? 20));
  const conditions = [eq(ticket.userId, params.userId)];
  if (params.status) conditions.push(eq(ticket.status, params.status));
  if (params.search) conditions.push(like(ticket.title, `%${params.search}%`));
  const where = and(...conditions);
  const [totalResult] = await db()
    .select({ count: count() })
    .from(ticket)
    .where(where);
  const rows = await db()
    .select()
    .from(ticket)
    .where(where)
    .orderBy(desc(ticket.updatedAt))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
  const replies = await getLatestAdminReplies(rows.map((r) => r.id));
  return {
    items: rows.map((r) => ({
      ...r,
      latestReply: replies[r.id] ?? null,
    })),
    total: totalResult.count,
  };
}
/**
 * Admin: list all tickets with submitter info, paginated.
 */
async function listAllTickets(params) {
  const page = Math.max(1, params.page ?? 1);
  const pageSize = Math.min(100, Math.max(1, params.pageSize ?? 20));
  const conditions = [];
  if (params.status) conditions.push(eq(ticket.status, params.status));
  if (params.search)
    conditions.push(
      or(
        like(ticket.title, `%${params.search}%`),
        like(user.email, `%${params.search}%`),
        like(user.name, `%${params.search}%`)
      )
    );
  const where = conditions.length > 0 ? and(...conditions) : void 0;
  const base = db()
    .select({ count: count() })
    .from(ticket)
    .leftJoin(user, eq(ticket.userId, user.id));
  const [totalResult] = await (where ? base.where(where) : base);
  const query = db()
    .select({
      id: ticket.id,
      userId: ticket.userId,
      title: ticket.title,
      status: ticket.status,
      createdAt: ticket.createdAt,
      updatedAt: ticket.updatedAt,
      userName: user.name,
      userEmail: user.email,
      userAvatar: user.image,
    })
    .from(ticket)
    .leftJoin(user, eq(ticket.userId, user.id));
  const rows = await (where ? query.where(where) : query)
    .orderBy(desc(ticket.updatedAt))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
  const replies = await getLatestAdminReplies(rows.map((r) => r.id));
  return {
    items: rows.map((r) => ({
      ...r,
      latestReply: replies[r.id] ?? null,
    })),
    total: totalResult.count,
  };
}
/**
 * Get a ticket by ID.
 */
async function getTicketById(id) {
  const [row] = await db()
    .select()
    .from(ticket)
    .where(eq(ticket.id, id))
    .limit(1);
  return row;
}
/**
 * Get a ticket's message thread (oldest first), with sender names.
 */
async function getTicketMessages(ticketId) {
  return (
    await db()
      .select({
        id: ticketMessage.id,
        ticketId: ticketMessage.ticketId,
        userId: ticketMessage.userId,
        role: ticketMessage.role,
        content: ticketMessage.content,
        attachments: ticketMessage.attachments,
        createdAt: ticketMessage.createdAt,
        userName: user.name,
        userAvatar: user.image,
      })
      .from(ticketMessage)
      .leftJoin(user, eq(ticketMessage.userId, user.id))
      .where(eq(ticketMessage.ticketId, ticketId))
      .orderBy(asc(ticketMessage.createdAt))
  ).map((r) => ({
    ...r,
    attachments: parseAttachments(r.attachments),
  }));
}
/**
 * Append a message to a ticket and update its status (atomic).
 *
 * A user reply re-opens the ticket (awaiting admin); an admin reply
 * marks it replied (awaiting user).
 */
async function addMessage(params) {
  return db().transaction(async (tx) => {
    const now = /* @__PURE__ */ new Date();
    const [row] = await tx
      .insert(ticketMessage)
      .values({
        id: getUuid(),
        ticketId: params.ticketId,
        userId: params.userId,
        role: params.role,
        content: params.content,
        attachments: JSON.stringify(params.attachments ?? []),
        createdAt: now,
      })
      .returning();
    await tx
      .update(ticket)
      .set({
        status: params.role === 'admin' ? 'replied' : 'open',
        updatedAt: now,
      })
      .where(eq(ticket.id, params.ticketId));
    return row;
  });
}
/**
 * Update a ticket's status (e.g. close / reopen).
 */
async function updateTicketStatus(id, status) {
  const [row] = await db()
    .update(ticket)
    .set({
      status,
      updatedAt: /* @__PURE__ */ new Date(),
    })
    .where(eq(ticket.id, id))
    .returning();
  return row;
}
//#endregion
//#region src/lib/rate-limit.ts
function getClientIpFromRequest(request) {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0]?.trim() || '';
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    ''
  );
}
function getStore() {
  if (!globalThis.__minIntervalRateLimitStore)
    globalThis.__minIntervalRateLimitStore = /* @__PURE__ */ new Map();
  return globalThis.__minIntervalRateLimitStore;
}
function buildKey(request, opts) {
  const url = new URL(request.url);
  const ip = getClientIpFromRequest(request);
  const cookie = request.headers.get('cookie') || '';
  const cookieHash = cookie ? md5(cookie) : 'no-cookie';
  const prefix = opts.keyPrefix || 'min-interval';
  const extra = opts.extraKey ? `|${opts.extraKey}` : '';
  return `${prefix}|${request.method}|${url.pathname}|${ip}|${cookieHash}${extra}`;
}
function enforceMinIntervalRateLimit(request, opts) {
  const intervalMs = Math.max(0, Number(opts.intervalMs) || 0);
  if (!intervalMs) return null;
  const now = Date.now();
  const store = getStore();
  const key = buildKey(request, opts);
  const last = store.get(key);
  if (typeof last === 'number') {
    const delta = now - last;
    if (delta >= 0 && delta < intervalMs) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((intervalMs - delta) / 1e3)
      );
      return Response.json(
        {
          error: 'too_many_requests',
          message: `Please retry after ${retryAfterSeconds}s.`,
        },
        {
          status: 429,
          headers: {
            'cache-control': 'no-store',
            'retry-after': String(retryAfterSeconds),
          },
        }
      );
    }
  }
  store.set(key, now);
  return null;
}
//#endregion
//#region src/lib/resp.ts
function respData(data, init) {
  return respJson(0, 'ok', data ?? [], init);
}
function respOk(init) {
  return respJson(0, 'ok', void 0, init);
}
function respErr(message, init) {
  return respJson(-1, message, void 0, init);
}
function respPage(items, total) {
  return respJson(0, 'ok', {
    items,
    total,
  });
}
function respJson(code, message, data, init) {
  let json = {
    code,
    message,
  };
  if (data !== void 0) json['data'] = data;
  return Response.json(json, init);
}
//#endregion
//#region src/routes/api/tickets.ts
var VALID_STATUSES$2 = ['open', 'replied', 'closed'];
async function GET$26({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '20'))
    );
    const status = searchParams.get('status');
    const search = searchParams.get('keyword') || void 0;
    const { items, total } = await listUserTickets({
      userId: session.user.id,
      page,
      pageSize,
      status: status && VALID_STATUSES$2.includes(status) ? status : void 0,
      search,
    });
    return respPage(items, total);
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST$19({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const limited = enforceMinIntervalRateLimit(request, {
      intervalMs: 3e4,
      keyPrefix: 'ticket-create',
      extraKey: session.user.id,
    });
    if (limited) return limited;
    const body = await request.json().catch(() => ({}));
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const content = typeof body.content === 'string' ? body.content.trim() : '';
    if (!title || !content) return respErr('Title and content are required');
    if (title.length > 200) return respErr('Title is too long');
    if (content.length > 5e3) return respErr('Content is too long');
    const attachments = sanitizeAttachments(body.attachments);
    if (attachments === null) return respErr('Invalid attachments');
    return respData(
      await createTicket({
        userId: session.user.id,
        title,
        content,
        attachments,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$57 = createFileRoute('/api/tickets')({
  server: {
    handlers: {
      GET: GET$26,
      POST: POST$19,
    },
  },
});
//#endregion
//#region src/modules/credits/service.ts
var CreditTransactionScene = /* @__PURE__ */ (function (
  CreditTransactionScene
) {
  CreditTransactionScene['PAYMENT'] = 'payment';
  CreditTransactionScene['SUBSCRIPTION'] = 'subscription';
  CreditTransactionScene['RENEWAL'] = 'renewal';
  CreditTransactionScene['GIFT'] = 'gift';
  CreditTransactionScene['REWARD'] = 'reward';
  return CreditTransactionScene;
})({});
function calculateCreditExpirationTime(params) {
  const { creditsValidDays, currentPeriodEnd } = params;
  if (!creditsValidDays || creditsValidDays <= 0) return null;
  if (currentPeriodEnd) return new Date(currentPeriodEnd.getTime());
  const expiresAt = /* @__PURE__ */ new Date();
  expiresAt.setDate(expiresAt.getDate() + creditsValidDays);
  return expiresAt;
}
function validCreditConditions(userId) {
  const now = /* @__PURE__ */ new Date();
  return and(
    eq(credit.userId, userId),
    eq(credit.transactionType, 'grant'),
    eq(credit.status, 'active'),
    gt(credit.remainingCredits, 0),
    or(isNull(credit.expiresAt), gt(credit.expiresAt, now))
  );
}
async function getBalance(userId) {
  const [result] = await db()
    .select({ total: sum(credit.remainingCredits) })
    .from(credit)
    .where(validCreditConditions(userId));
  return parseInt(result?.total || '0');
}
async function grant(params) {
  const newCredit = {
    id: getUuid(),
    userId: params.userId,
    userEmail: params.userEmail || '',
    transactionNo: getSnowId(),
    transactionType: 'grant',
    transactionScene: params.scene || 'gift',
    credits: params.credits,
    remainingCredits: params.credits,
    status: 'active',
    description: params.description || 'Grant credit',
    orderNo: params.orderNo || '',
    subscriptionNo: params.subscriptionNo || '',
    expiresAt: params.expiresAt !== void 0 ? params.expiresAt : null,
  };
  await db().insert(credit).values(newCredit);
  return newCredit;
}
async function consume(params) {
  const {
    userId,
    userEmail,
    credits: amount,
    scene,
    description,
    metadata,
    tx,
  } = params;
  const now = /* @__PURE__ */ new Date();
  const execute = async (tx) => {
    const [balance] = await tx
      .select({ total: sum(credit.remainingCredits) })
      .from(credit)
      .where(
        and(
          eq(credit.userId, userId),
          eq(credit.transactionType, 'grant'),
          eq(credit.status, 'active'),
          gt(credit.remainingCredits, 0),
          or(isNull(credit.expiresAt), gt(credit.expiresAt, now))
        )
      );
    if (!balance?.total || parseInt(balance.total) < amount)
      return { success: false };
    let remainingToConsume = amount;
    const batchSize = 1e3;
    const maxBatches = 10;
    let batchNo = 0;
    const consumedItems = [];
    while (remainingToConsume > 0 && batchNo < maxBatches) {
      const batchCredits = await tx
        .select()
        .from(credit)
        .where(
          and(
            eq(credit.userId, userId),
            eq(credit.transactionType, 'grant'),
            eq(credit.status, 'active'),
            gt(credit.remainingCredits, 0),
            or(isNull(credit.expiresAt), gt(credit.expiresAt, now))
          )
        )
        .orderBy(asc(credit.expiresAt))
        .limit(batchSize)
        .for('update');
      if (!batchCredits || batchCredits.length === 0) break;
      for (const item of batchCredits) {
        if (remainingToConsume <= 0) break;
        const toConsume = Math.min(remainingToConsume, item.remainingCredits);
        await tx
          .update(credit)
          .set({ remainingCredits: item.remainingCredits - toConsume })
          .where(eq(credit.id, item.id));
        consumedItems.push({
          creditId: item.id,
          transactionNo: item.transactionNo,
          creditsConsumed: toConsume,
          creditsBefore: item.remainingCredits,
          creditsAfter: item.remainingCredits - toConsume,
        });
        remainingToConsume -= toConsume;
      }
      batchNo++;
    }
    const consumedCredit = {
      id: getUuid(),
      userId,
      userEmail: userEmail || '',
      transactionNo: getSnowId(),
      transactionType: 'consume',
      transactionScene: scene || '',
      status: 'active',
      description: description || '',
      credits: -amount,
      remainingCredits: 0,
      consumedDetail: JSON.stringify(consumedItems),
      metadata: metadata || '',
    };
    await tx.insert(credit).values(consumedCredit);
    return {
      success: true,
      consumedCredit,
    };
  };
  if (tx) return execute(tx);
  return db().transaction(execute);
}
async function getHistory(userId, limit = 50) {
  return db()
    .select()
    .from(credit)
    .where(and(eq(credit.userId, userId), isNull(credit.deletedAt)))
    .orderBy(desc(credit.createdAt))
    .limit(limit);
}
//#endregion
//#region src/routes/api/credits.ts
async function GET$25({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const [balance, history] = await Promise.all([
      getBalance(session.user.id),
      getHistory(session.user.id),
    ]);
    return respData({
      balance,
      history,
    });
  } catch (error) {
    return respErr(error.message || 'Failed to get credits');
  }
}
var Route$56 = createFileRoute('/api/credits')({
  server: { handlers: { GET: GET$25 } },
});
//#endregion
//#region src/modules/apikeys/service.ts
var KEY_PREFIX = 'sk_';
var KEY_PREVIEW_LEN = 8;
function hashKey(key) {
  return crypto$1.createHash('sha256').update(key, 'utf8').digest('hex');
}
function generateKey() {
  const rand = crypto$1.randomBytes(32).toString('base64url');
  const key = `${KEY_PREFIX}${rand}`;
  return {
    key,
    keyHash: hashKey(key),
    keyPrefix: `${KEY_PREFIX}${rand.slice(0, KEY_PREVIEW_LEN)}`,
  };
}
/**
 * Create a new API key for a user. The plaintext `key` is returned ONCE here
 * — it is never persisted (only the sha256 hash is stored).
 */
async function create$1(params) {
  const { userId, title } = params;
  const { key, keyHash, keyPrefix } = generateKey();
  const [row] = await db()
    .insert(apikey)
    .values({
      id: getUuid(),
      userId,
      keyHash,
      keyPrefix,
      title,
      status: 'active',
    })
    .returning();
  return {
    id: row.id,
    key,
    title: row.title,
  };
}
/**
 * List active API keys for a user with pagination and optional search on title.
 * Only the prefix is returned — full keys are never readable after creation.
 */
async function list$1(userId, page = 1, pageSize = 10, search) {
  const conditions = [
    eq(apikey.userId, userId),
    eq(apikey.status, 'active'),
    isNull(apikey.deletedAt),
  ];
  if (search) conditions.push(like(apikey.title, `%${search}%`));
  const where = and(...conditions);
  const [totalResult] = await db()
    .select({ count: count() })
    .from(apikey)
    .where(where);
  return {
    items: await db()
      .select({
        id: apikey.id,
        keyPrefix: apikey.keyPrefix,
        title: apikey.title,
        status: apikey.status,
        createdAt: apikey.createdAt,
      })
      .from(apikey)
      .where(where)
      .limit(pageSize)
      .offset((page - 1) * pageSize),
    total: totalResult.count,
  };
}
/**
 * Delete (soft) an API key.
 */
async function remove$1(params) {
  const { userId, keyId } = params;
  await db()
    .update(apikey)
    .set({
      status: 'deleted',
      deletedAt: /* @__PURE__ */ new Date(),
    })
    .where(and(eq(apikey.id, keyId), eq(apikey.userId, userId)));
}
//#endregion
//#region src/routes/api/apikeys.ts
async function GET$24({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '10'))
    );
    const search = searchParams.get('search') || void 0;
    const { items, total } = await list$1(
      session.user.id,
      page,
      pageSize,
      search
    );
    return respPage(items, total);
  } catch (error) {
    return respErr(error.message || 'Failed to list API keys');
  }
}
async function POST$18({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const { title } = await request.json();
    if (!title) return respErr('Title is required');
    return respData(
      await create$1({
        userId: session.user.id,
        title,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Failed to create API key');
  }
}
async function DELETE$6({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const { searchParams } = new URL(request.url);
    const keyId = searchParams.get('id');
    if (!keyId) return respErr('Key ID is required');
    await remove$1({
      userId: session.user.id,
      keyId,
    });
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Failed to delete API key');
  }
}
var Route$55 = createFileRoute('/api/apikeys')({
  server: {
    handlers: {
      GET: GET$24,
      POST: POST$18,
      DELETE: DELETE$6,
    },
  },
});
//#endregion
//#region src/routes/admin/users.tsx
var $$splitComponentImporter$16 = () => import('./users-Tj8mM-1a.js');
var Route$54 = createFileRoute('/admin/users')({
  component: lazyRouteComponent($$splitComponentImporter$16, 'component'),
});
//#endregion
//#region src/routes/admin/tickets.tsx
var $$splitComponentImporter$15 = () => import('./tickets-fj2Nf4pg.js');
/** Extract uploaded URLs from uploader items; true while any upload is in flight. */
var Route$53 = createFileRoute('/admin/tickets')({
  component: lazyRouteComponent($$splitComponentImporter$15, 'component'),
});
//#endregion
//#region src/routes/admin/subscriptions.tsx
var $$splitComponentImporter$14 = () => import('./subscriptions-CReYJXuj.js');
var Route$52 = createFileRoute('/admin/subscriptions')({
  component: lazyRouteComponent($$splitComponentImporter$14, 'component'),
});
//#endregion
//#region src/routes/admin/settings.tsx
var $$splitComponentImporter$13 = () => import('./settings-yF03flDi.js');
var Route$51 = createFileRoute('/admin/settings')({
  component: lazyRouteComponent($$splitComponentImporter$13, 'component'),
});
//#endregion
//#region src/routes/admin/roles.tsx
var $$splitComponentImporter$12 = () => import('./roles--h28gpvK.js');
z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
});
var Route$50 = createFileRoute('/admin/roles')({
  component: lazyRouteComponent($$splitComponentImporter$12, 'component'),
});
//#endregion
//#region src/routes/admin/posts.tsx
var $$splitComponentImporter$11 = () => import('./posts-Cp9bDCK4.js');
z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
  content: z.string(),
  categories: z.string(),
  authorName: z.string(),
  status: z.string(),
});
var Route$49 = createFileRoute('/admin/posts')({
  component: lazyRouteComponent($$splitComponentImporter$11, 'component'),
});
//#endregion
//#region src/routes/admin/permissions.tsx
var $$splitComponentImporter$10 = () => import('./permissions-BF3MmVCT.js');
var Route$48 = createFileRoute('/admin/permissions')({
  component: lazyRouteComponent($$splitComponentImporter$10, 'component'),
});
//#endregion
//#region src/routes/admin/payments.tsx
var $$splitComponentImporter$9 = () => import('./payments-D61dlmoW.js');
var Route$47 = createFileRoute('/admin/payments')({
  component: lazyRouteComponent($$splitComponentImporter$9, 'component'),
});
//#endregion
//#region src/routes/admin/invite-codes.tsx
var $$splitComponentImporter$8 = () => import('./invite-codes-3Aw0AEQ1.js');
z.object({
  count: z.coerce.number().min(1),
  maxUses: z.coerce.number().min(1),
  trialDays: z.coerce.number().min(1),
  note: z.string(),
  expiresAt: z.string(),
});
var Route$46 = createFileRoute('/admin/invite-codes')({
  component: lazyRouteComponent($$splitComponentImporter$8, 'component'),
});
//#endregion
//#region src/routes/admin/credits.tsx
var $$splitComponentImporter$7 = () => import('./credits-B7Yt0Edn.js');
var Route$45 = createFileRoute('/admin/credits')({
  component: lazyRouteComponent($$splitComponentImporter$7, 'component'),
});
//#endregion
//#region src/routes/admin/categories.tsx
var $$splitComponentImporter$6 = () => import('./categories-C83ngi0d.js');
z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
});
var Route$44 = createFileRoute('/admin/categories')({
  component: lazyRouteComponent($$splitComponentImporter$6, 'component'),
});
//#endregion
//#region src/content/pages/privacy-policy.en.mdx
var privacy_policy_en_exports = /* @__PURE__ */ __exportAll({
  default: () => MDXContent$3,
  meta: () => meta$3,
});
var meta$3 = {
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your personal information.',
  updated_at: '2026-05-21',
};
function _createMdxContent$3(props) {
  const _components = {
    h2: 'h2',
    li: 'li',
    ol: 'ol',
    p: 'p',
    strong: 'strong',
    ul: 'ul',
    ...useMDXComponents(),
    ...props.components,
  };
  return jsxs(Fragment, {
    children: [
      jsx(_components.h2, { children: 'Introduction' }),
      '\n',
      jsx(_components.p, {
        children:
          'We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Information We Collect' }),
      '\n',
      jsx(_components.p, {
        children:
          'We collect the following types of information to provide and improve our service:',
      }),
      '\n',
      jsxs(_components.ol, {
        children: [
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Account Information' }),
              ' — Your name, email address, and other details you provide when creating an account.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Usage Data' }),
              ' — Information about how you interact with the service, including features accessed, frequency of use, and interaction patterns.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Device Information' }),
              ' — Device type, operating system, and browser type, used to optimize compatibility and performance.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Cookies' }),
              ' — Small data files stored on your device to remember preferences and improve your experience.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Payment Information' }),
              ' — Billing details handled by trusted third-party payment processors. We do not store full card numbers on our servers.',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: 'How We Use Your Information' }),
      '\n',
      jsx(_components.p, { children: 'We use the data we collect to:' }),
      '\n',
      jsxs(_components.ul, {
        children: [
          '\n',
          jsx(_components.li, {
            children: 'Provide, maintain, and improve the service.',
          }),
          '\n',
          jsx(_components.li, {
            children: 'Process transactions and send related confirmations.',
          }),
          '\n',
          jsx(_components.li, {
            children:
              'Send technical notices, security alerts, and support messages.',
          }),
          '\n',
          jsx(_components.li, {
            children:
              'Respond to your questions, feedback, and support requests.',
          }),
          '\n',
          jsx(_components.li, {
            children: 'Detect, prevent, and address fraud and abuse.',
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: 'Data Sharing' }),
      '\n',
      jsx(_components.p, {
        children:
          'We do not sell your personal information. We may share data only in these limited cases:',
      }),
      '\n',
      jsxs(_components.ul, {
        children: [
          '\n',
          jsx(_components.li, {
            children:
              'With service providers who help us operate the service, under confidentiality agreements.',
          }),
          '\n',
          jsx(_components.li, {
            children:
              'To comply with legal obligations or respond to lawful requests from public authorities.',
          }),
          '\n',
          jsx(_components.li, {
            children:
              'To protect our rights, property, or safety, or that of our users.',
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: 'Data Security' }),
      '\n',
      jsx(_components.p, {
        children:
          'We implement industry-standard security measures including encryption in transit, access controls, and regular reviews. No method of transmission over the Internet is 100% secure, but we work continuously to protect your information.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Your Rights' }),
      '\n',
      jsx(_components.p, {
        children:
          'You have the right to access, update, export, or delete your personal information. You can do this through your account settings or by contacting us at the email address below.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Changes to This Policy' }),
      '\n',
      jsx(_components.p, {
        children:
          'We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the date at the top of this page and, where appropriate, sending a notice through the service.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Contact Us' }),
      '\n',
      jsx(_components.p, {
        children:
          'If you have questions about this Privacy Policy, please contact us at the email address provided on our website.',
      }),
    ],
  });
}
function MDXContent$3(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components,
  };
  return MDXLayout
    ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent$3, { ...props }),
      })
    : _createMdxContent$3(props);
}
//#endregion
//#region src/content/pages/privacy-policy.zh.mdx
var privacy_policy_zh_exports = /* @__PURE__ */ __exportAll({
  default: () => MDXContent$2,
  meta: () => meta$2,
});
var meta$2 = {
  title: '隐私政策',
  description: '我们如何收集、使用和保护您的个人信息。',
  updated_at: '2026-05-21',
};
function _createMdxContent$2(props) {
  const _components = {
    h2: 'h2',
    li: 'li',
    ol: 'ol',
    p: 'p',
    strong: 'strong',
    ul: 'ul',
    ...useMDXComponents(),
    ...props.components,
  };
  return jsxs(Fragment, {
    children: [
      jsx(_components.h2, { children: '简介' }),
      '\n',
      jsx(_components.p, {
        children:
          '我们尊重您的隐私,并致力于保护您的个人数据。本《隐私政策》说明了在您使用我们的服务时,我们如何收集、使用和保护您的信息。',
      }),
      '\n',
      jsx(_components.h2, { children: '我们收集的信息' }),
      '\n',
      jsx(_components.p, {
        children: '为了提供和改进服务,我们会收集以下类型的信息:',
      }),
      '\n',
      jsxs(_components.ol, {
        children: [
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '账户信息' }),
              ' —— 您在创建账户时提供的姓名、电子邮箱及其他资料。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '使用数据' }),
              ' —— 您与服务交互的信息,包括使用的功能、使用频率和交互模式。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '设备信息' }),
              ' —— 设备类型、操作系统、浏览器类型,用于优化兼容性与性能。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Cookie' }),
              ' —— 存储在您设备上的小型数据文件,用于记住偏好并改善体验。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '支付信息' }),
              ' —— 由可信的第三方支付处理方负责处理。我们不会在服务器上存储完整的银行卡号。',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: '我们如何使用这些信息' }),
      '\n',
      jsx(_components.p, { children: '我们使用收集到的数据用于:' }),
      '\n',
      jsxs(_components.ul, {
        children: [
          '\n',
          jsx(_components.li, { children: '提供、维护并改进服务。' }),
          '\n',
          jsx(_components.li, { children: '处理交易并发送相关确认。' }),
          '\n',
          jsx(_components.li, {
            children: '发送技术通知、安全提醒和支持信息。',
          }),
          '\n',
          jsx(_components.li, {
            children: '回复您的问题、反馈和技术支持请求。',
          }),
          '\n',
          jsx(_components.li, { children: '检测、预防和处理欺诈与滥用行为。' }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: '信息共享' }),
      '\n',
      jsx(_components.p, {
        children:
          '我们不会出售您的个人信息。仅在以下有限情况下,我们才会共享数据:',
      }),
      '\n',
      jsxs(_components.ul, {
        children: [
          '\n',
          jsx(_components.li, {
            children: '与协助我们运营服务的供应商共享,并签署保密协议。',
          }),
          '\n',
          jsx(_components.li, {
            children: '为遵守法律义务或响应公共部门的合法请求。',
          }),
          '\n',
          jsx(_components.li, {
            children: '为保护我们或用户的权利、财产和安全。',
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: '数据安全' }),
      '\n',
      jsx(_components.p, {
        children:
          '我们采用业界标准的安全措施,包括传输加密、访问控制以及定期审查。互联网传输无法做到 100% 安全,但我们会持续努力保护您的信息。',
      }),
      '\n',
      jsx(_components.h2, { children: '您的权利' }),
      '\n',
      jsx(_components.p, {
        children:
          '您有权访问、更新、导出或删除您的个人信息。您可以通过账户设置进行操作,或通过本页底部提供的方式与我们联系。',
      }),
      '\n',
      jsx(_components.h2, { children: '政策变更' }),
      '\n',
      jsx(_components.p, {
        children:
          '我们可能会不时更新本《隐私政策》。如有重大变更,我们将更新页面顶部的日期,并在必要时通过服务通知您。',
      }),
      '\n',
      jsx(_components.h2, { children: '联系我们' }),
      '\n',
      jsx(_components.p, {
        children:
          '如果您对本《隐私政策》有任何疑问,请通过我们网站上提供的电子邮箱与我们联系。',
      }),
    ],
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components,
  };
  return MDXLayout
    ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent$2, { ...props }),
      })
    : _createMdxContent$2(props);
}
//#endregion
//#region src/content/pages/terms-of-service.en.mdx
var terms_of_service_en_exports = /* @__PURE__ */ __exportAll({
  default: () => MDXContent$1,
  meta: () => meta$1,
});
var meta$1 = {
  title: 'Terms of Service',
  description: 'The terms and conditions for using our service.',
  updated_at: '2026-05-21',
};
function _createMdxContent$1(props) {
  const _components = {
    h2: 'h2',
    li: 'li',
    p: 'p',
    ul: 'ul',
    ...useMDXComponents(),
    ...props.components,
  };
  return jsxs(Fragment, {
    children: [
      jsx(_components.h2, { children: 'Acceptance of Terms' }),
      '\n',
      jsx(_components.p, {
        children:
          'By accessing or using this service, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Description of Service' }),
      '\n',
      jsx(_components.p, {
        children:
          'We provide a software-as-a-service platform. We may modify, suspend, or discontinue any part of the service at any time, with reasonable notice where possible.',
      }),
      '\n',
      jsx(_components.h2, { children: 'User Accounts' }),
      '\n',
      jsx(_components.p, {
        children:
          'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use or security breach.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Acceptable Use' }),
      '\n',
      jsx(_components.p, { children: 'You agree not to:' }),
      '\n',
      jsxs(_components.ul, {
        children: [
          '\n',
          jsx(_components.li, {
            children: 'Violate any applicable laws or regulations.',
          }),
          '\n',
          jsx(_components.li, {
            children:
              'Infringe on the intellectual property or other rights of any party.',
          }),
          '\n',
          jsx(_components.li, {
            children:
              'Attempt to gain unauthorized access to our systems or data.',
          }),
          '\n',
          jsx(_components.li, {
            children:
              'Interfere with or disrupt the integrity or performance of the service.',
          }),
          '\n',
          jsx(_components.li, {
            children:
              'Use the service to send spam, malware, or other harmful content.',
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: 'Payment and Billing' }),
      '\n',
      jsx(_components.p, {
        children:
          'Paid features are billed in advance for the selected billing period. You are responsible for providing accurate billing information. Refunds are handled on a case-by-case basis in line with our refund policy.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Intellectual Property' }),
      '\n',
      jsx(_components.p, {
        children:
          'The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Termination' }),
      '\n',
      jsx(_components.p, {
        children:
          'We may suspend or terminate your access to the service at any time if you violate these terms. You may close your account at any time through your account settings.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Limitation of Liability' }),
      '\n',
      jsx(_components.p, {
        children:
          'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the service.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Changes to These Terms' }),
      '\n',
      jsx(_components.p, {
        children:
          'We may modify these Terms at any time. We will notify users of any material changes by updating the date at the top of this page and, where appropriate, sending a notice through the service.',
      }),
      '\n',
      jsx(_components.h2, { children: 'Contact' }),
      '\n',
      jsx(_components.p, {
        children:
          'If you have questions about these Terms, please contact us at the email address provided on our website.',
      }),
    ],
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components,
  };
  return MDXLayout
    ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent$1, { ...props }),
      })
    : _createMdxContent$1(props);
}
//#endregion
//#region src/content/pages/terms-of-service.zh.mdx
var terms_of_service_zh_exports = /* @__PURE__ */ __exportAll({
  default: () => MDXContent,
  meta: () => meta,
});
var meta = {
  title: '服务条款',
  description: '使用本服务的条款和条件。',
  updated_at: '2026-05-21',
};
function _createMdxContent(props) {
  const _components = {
    h2: 'h2',
    li: 'li',
    p: 'p',
    ul: 'ul',
    ...useMDXComponents(),
    ...props.components,
  };
  return jsxs(Fragment, {
    children: [
      jsx(_components.h2, { children: '接受条款' }),
      '\n',
      jsx(_components.p, {
        children:
          '访问或使用本服务即表示您同意受本《服务条款》约束。如不同意,请勿使用本服务。',
      }),
      '\n',
      jsx(_components.h2, { children: '服务说明' }),
      '\n',
      jsx(_components.p, {
        children:
          '我们提供软件即服务(SaaS)平台。我们可能随时修改、暂停或终止服务的任何部分,并在可能的情况下提前合理告知。',
      }),
      '\n',
      jsx(_components.h2, { children: '用户账户' }),
      '\n',
      jsx(_components.p, {
        children:
          '您有责任妥善保管账户凭据,并对账户下发生的所有活动负责。如发现未授权使用或安全漏洞,请立即通知我们。',
      }),
      '\n',
      jsx(_components.h2, { children: '可接受的使用' }),
      '\n',
      jsx(_components.p, { children: '您同意不会:' }),
      '\n',
      jsxs(_components.ul, {
        children: [
          '\n',
          jsx(_components.li, { children: '违反任何适用的法律或法规。' }),
          '\n',
          jsx(_components.li, { children: '侵犯任何方的知识产权或其他权利。' }),
          '\n',
          jsx(_components.li, {
            children: '试图未经授权访问我们的系统或数据。',
          }),
          '\n',
          jsx(_components.li, { children: '干扰或破坏服务的完整性或性能。' }),
          '\n',
          jsx(_components.li, {
            children: '通过本服务发送垃圾信息、恶意软件或其他有害内容。',
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: '支付与计费' }),
      '\n',
      jsx(_components.p, {
        children:
          '付费功能按所选计费周期预付。您有责任提供准确的计费信息。退款将根据我们的退款政策按具体情况处理。',
      }),
      '\n',
      jsx(_components.h2, { children: '知识产权' }),
      '\n',
      jsx(_components.p, {
        children:
          '本服务及其原创内容、功能和特性归我们所有,受国际版权、商标和其他知识产权法律保护。',
      }),
      '\n',
      jsx(_components.h2, { children: '账户终止' }),
      '\n',
      jsx(_components.p, {
        children:
          '如您违反本条款,我们可随时暂停或终止您对服务的访问。您也可以通过账户设置随时关闭账户。',
      }),
      '\n',
      jsx(_components.h2, { children: '责任限制' }),
      '\n',
      jsx(_components.p, {
        children:
          '在法律允许的最大范围内,我们对因您使用或无法使用本服务而引起的任何间接、附带、特殊、衍生或惩罚性损害不承担责任。',
      }),
      '\n',
      jsx(_components.h2, { children: '条款变更' }),
      '\n',
      jsx(_components.p, {
        children:
          '我们可能随时修改本《服务条款》。如有重大变更,我们将更新页面顶部的日期,并在必要时通过服务通知您。',
      }),
      '\n',
      jsx(_components.h2, { children: '联系我们' }),
      '\n',
      jsx(_components.p, {
        children:
          '如果您对本《服务条款》有任何疑问,请通过我们网站上提供的电子邮箱与我们联系。',
      }),
    ],
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components,
  };
  return MDXLayout
    ? jsx(MDXLayout, {
        ...props,
        children: jsx(_createMdxContent, { ...props }),
      })
    : _createMdxContent(props);
}
//#endregion
//#region src/routes/(pages)/-static-page.tsx
var pages = /* #__PURE__ */ Object.assign({
  '/src/content/pages/privacy-policy.en.mdx': privacy_policy_en_exports,
  '/src/content/pages/privacy-policy.zh.mdx': privacy_policy_zh_exports,
  '/src/content/pages/terms-of-service.en.mdx': terms_of_service_en_exports,
  '/src/content/pages/terms-of-service.zh.mdx': terms_of_service_zh_exports,
});
function loadPage(slug, locale) {
  return (
    pages[`/src/content/pages/${slug}.${locale}.mdx`] ??
    pages[`/src/content/pages/${slug}.en.mdx`] ??
    null
  );
}
function staticPageRouteOptions(slug) {
  return {
    loader: () => {
      const locale = getLocale();
      const page = loadPage(slug, locale);
      if (!page) throw notFound();
      return {
        meta: page.meta,
        slug,
        locale,
      };
    },
    head: ({ loaderData }) => {
      if (!loaderData) return {};
      const { meta, locale } = loaderData;
      const canonical = localizeUrl(`${envConfigs.app_url}/${slug}`, {
        locale,
      }).href;
      return {
        meta: [
          { title: meta.title },
          {
            name: 'description',
            content: meta.description,
          },
        ],
        links: [
          {
            rel: 'canonical',
            href: canonical,
          },
        ],
      };
    },
    component: StaticPage,
  };
}
function StaticPage() {
  const { meta, slug, locale } = useLoaderData({ strict: false });
  const Content = loadPage(slug, locale).default;
  return /* @__PURE__ */ jsxs('article', {
    children: [
      /* @__PURE__ */ jsxs('header', {
        className: 'border-border mb-6 border-b pb-5',
        children: [
          /* @__PURE__ */ jsx('h1', {
            className:
              'text-foreground text-3xl font-semibold tracking-tight md:text-4xl',
            children: meta.title,
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground mt-2 text-sm',
            children: meta.description,
          }),
          /* @__PURE__ */ jsxs('p', {
            className: 'text-muted-foreground mt-2 text-xs',
            children: [common_pages_last_updated(), ': ', meta.updated_at],
          }),
        ],
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'text-foreground/90 text-[15px] leading-7',
        children: /* @__PURE__ */ jsx(Content, {}),
      }),
    ],
  });
}
//#endregion
//#region src/routes/(pages)/terms-of-service.tsx
var Route$43 = createFileRoute('/(pages)/terms-of-service')(
  staticPageRouteOptions('terms-of-service')
);
//#endregion
//#region src/routes/(pages)/privacy-policy.tsx
var Route$42 = createFileRoute('/(pages)/privacy-policy')(
  staticPageRouteOptions('privacy-policy')
);
//#endregion
//#region src/routes/(auth)/verify-email.tsx
var $$splitComponentImporter$5 = () => import('./verify-email-IrVxKP4n.js');
var Route$41 = createFileRoute('/(auth)/verify-email')({
  component: lazyRouteComponent($$splitComponentImporter$5, 'component'),
});
//#endregion
//#region src/routes/(auth)/sign-up.tsx
var $$splitComponentImporter$4 = () => import('./sign-up-DaUi3NPR.js');
var Route$40 = createFileRoute('/(auth)/sign-up')({
  component: lazyRouteComponent($$splitComponentImporter$4, 'component'),
});
//#endregion
//#region src/routes/(auth)/sign-in.tsx
var $$splitComponentImporter$3 = () => import('./sign-in-DsyJ381w.js');
var Route$39 = createFileRoute('/(auth)/sign-in')({
  component: lazyRouteComponent($$splitComponentImporter$3, 'component'),
});
//#endregion
//#region src/routes/(auth)/reset-password.tsx
var $$splitComponentImporter$2 = () => import('./reset-password-BEmXQ-OS.js');
var Route$38 = createFileRoute('/(auth)/reset-password')({
  component: lazyRouteComponent($$splitComponentImporter$2, 'component'),
});
//#endregion
//#region src/routes/(auth)/redeem-invite.tsx
var $$splitComponentImporter$1 = () => import('./redeem-invite-CYwllTRQ.js');
var Route$37 = createFileRoute('/(auth)/redeem-invite')({
  component: lazyRouteComponent($$splitComponentImporter$1, 'component'),
});
//#endregion
//#region src/routes/(auth)/forgot-password.tsx
var $$splitComponentImporter = () => import('./forgot-password-CYQZ0bvM.js');
var Route$36 = createFileRoute('/(auth)/forgot-password')({
  component: lazyRouteComponent($$splitComponentImporter, 'component'),
});
//#endregion
//#region src/routes/api/user/profile.ts
async function PATCH$2({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const body = await request.json().catch(() => ({}));
    const name = typeof body.name === 'string' ? body.name.trim() : void 0;
    const image = typeof body.image === 'string' ? body.image.trim() : void 0;
    if (name !== void 0 && name.length === 0)
      return respErr('Name cannot be empty');
    if (name !== void 0 && name.length > 100) return respErr('Name too long');
    if (image !== void 0 && image.length > 0)
      if (/^data:image\/[a-zA-Z0-9.+-]+;base64,/.test(image)) {
        const maxBytes =
          (Number(envConfigs.inline_image_max_kb) || 2048) * 1024;
        if (
          Math.floor((image.length - image.indexOf(',') - 1) * 0.75) > maxBytes
        )
          return respErr('Image too large');
      } else
        try {
          const u = new URL(image);
          if (u.protocol !== 'http:' && u.protocol !== 'https:')
            return respErr('Invalid image URL');
        } catch {
          return respErr('Invalid image URL');
        }
    const updates = {};
    if (name !== void 0) updates.name = name;
    if (image !== void 0) updates.image = image.length > 0 ? image : null;
    if (Object.keys(updates).length === 0) return respErr('No changes');
    await db().update(user).set(updates).where(eq(user.id, session.user.id));
    const [updated] = await db()
      .select()
      .from(user)
      .where(eq(user.id, session.user.id))
      .limit(1);
    return respData({
      id: updated.id,
      name: updated.name,
      email: updated.email,
      image: updated.image,
    });
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$35 = createFileRoute('/api/user/profile')({
  server: { handlers: { PATCH: PATCH$2 } },
});
//#endregion
//#region src/core/auth/rbac.ts
function matchPermission(permissionCode, permissionCodes) {
  if (permissionCodes.includes(permissionCode)) return true;
  const parts = permissionCode.split('.');
  for (let i = parts.length - 1; i > 0; i--) {
    const wildcard = parts.slice(0, i).join('.') + '.*';
    if (permissionCodes.includes(wildcard)) return true;
  }
  if (permissionCodes.includes('*')) return true;
  return false;
}
//#endregion
//#region src/modules/rbac/service.ts
async function createRole(data) {
  const [result] = await db()
    .insert(role)
    .values({
      id: getUuid(),
      ...data,
      status: 'active',
    })
    .returning();
  return result;
}
async function createPermission(data) {
  const [result] = await db()
    .insert(permission)
    .values({
      id: getUuid(),
      ...data,
    })
    .returning();
  return result;
}
async function assignPermissionsToRole(roleId, permissionIds) {
  await db().delete(rolePermission).where(eq(rolePermission.roleId, roleId));
  if (permissionIds.length > 0)
    await db()
      .insert(rolePermission)
      .values(
        permissionIds.map((pid) => ({
          id: getUuid(),
          roleId,
          permissionId: pid,
        }))
      );
}
async function assignRoleToUser(userId, roleId, expiresAt) {
  const [result] = await db()
    .insert(userRole)
    .values({
      id: getUuid(),
      userId,
      roleId,
      expiresAt: expiresAt || null,
    })
    .returning();
  return result;
}
async function removeRoleFromUser(userId, roleId) {
  await db()
    .delete(userRole)
    .where(and(eq(userRole.userId, userId), eq(userRole.roleId, roleId)));
}
async function updateRole(id, data) {
  const [result] = await db()
    .update(role)
    .set(data)
    .where(eq(role.id, id))
    .returning();
  return result;
}
async function deleteRole(id) {
  await db().update(role).set({ status: 'inactive' }).where(eq(role.id, id));
}
async function updatePermission(id, data) {
  const [result] = await db()
    .update(permission)
    .set(data)
    .where(eq(permission.id, id))
    .returning();
  return result;
}
async function deletePermission(id) {
  await db().delete(permission).where(eq(permission.id, id));
}
async function getRolePermissions(roleId) {
  return db()
    .select({ permissionId: rolePermission.permissionId })
    .from(rolePermission)
    .where(eq(rolePermission.roleId, roleId));
}
async function getUserRoles(userId) {
  return db()
    .select({
      id: userRole.id,
      roleId: userRole.roleId,
      expiresAt: userRole.expiresAt,
      roleName: role.name,
      roleTitle: role.title,
    })
    .from(userRole)
    .innerJoin(role, eq(userRole.roleId, role.id))
    .where(eq(userRole.userId, userId));
}
async function getUserPermissionCodes(userId) {
  const now = /* @__PURE__ */ new Date();
  const roles = await db()
    .select({ roleId: userRole.roleId })
    .from(userRole)
    .where(
      and(
        eq(userRole.userId, userId),
        or(isNull(userRole.expiresAt), gt(userRole.expiresAt, now))
      )
    );
  if (roles.length === 0) return [];
  const roleIds = roles.map((r) => r.roleId);
  const perms = await db()
    .select({ code: permission.code })
    .from(rolePermission)
    .innerJoin(permission, eq(rolePermission.permissionId, permission.id))
    .where(inArray(rolePermission.roleId, roleIds));
  return [...new Set(perms.map((p) => p.code))];
}
async function hasPermission(userId, permissionCode) {
  return matchPermission(permissionCode, await getUserPermissionCodes(userId));
}
//#endregion
//#region src/routes/api/user/permissions.ts
async function GET$23({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    return respData({
      isAdmin: await hasPermission(session.user.id, 'admin.*'),
    });
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$34 = createFileRoute('/api/user/permissions')({
  server: { handlers: { GET: GET$23 } },
});
//#endregion
//#region src/routes/api/user/orders.ts
async function GET$22({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '20'))
    );
    const offset = (page - 1) * pageSize;
    const paymentType = searchParams.get('paymentType');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const conditions = [eq(order.userId, session.user.id)];
    if (paymentType) conditions.push(eq(order.paymentType, paymentType));
    if (status) conditions.push(eq(order.status, status));
    if (search)
      conditions.push(
        or(
          like(order.orderNo, `%${search}%`),
          like(order.productName, `%${search}%`),
          like(order.planName, `%${search}%`)
        )
      );
    const where = and(...conditions);
    const [totalResult] = await db()
      .select({ count: count() })
      .from(order)
      .where(where);
    return respPage(
      await db()
        .select({
          id: order.id,
          orderNo: order.orderNo,
          status: order.status,
          amount: order.amount,
          currency: order.currency,
          paymentProvider: order.paymentProvider,
          paymentType: order.paymentType,
          productName: order.productName,
          planName: order.planName,
          invoiceUrl: order.invoiceUrl,
          paidAt: order.paidAt,
          createdAt: order.createdAt,
        })
        .from(order)
        .where(where)
        .orderBy(desc(order.createdAt))
        .limit(pageSize)
        .offset(offset),
      totalResult.count
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$33 = createFileRoute('/api/user/orders')({
  server: { handlers: { GET: GET$22 } },
});
//#endregion
//#region src/routes/api/user/is-email-verified.ts
/**
 * POST /api/user/is-email-verified
 *
 * Authenticated-only. Returns whether the requesting user's own email has been
 * verified. Lookup is keyed by the SESSION user id, not the request body —
 * this prevents the endpoint from being used as a user-enumeration oracle.
 */
async function POST$17({ request }) {
  const limited = enforceMinIntervalRateLimit(request, {
    intervalMs: 1e3,
    keyPrefix: 'is-email-verified',
  });
  if (limited) return limited;
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const [row] = await db()
      .select({ emailVerified: user.emailVerified })
      .from(user)
      .where(eq(user.id, session.user.id))
      .limit(1);
    return respData({ emailVerified: !!row?.emailVerified });
  } catch (e) {
    console.log('check email verified failed:', e);
    return respErr('check email verified failed');
  }
}
var Route$32 = createFileRoute('/api/user/is-email-verified')({
  server: { handlers: { POST: POST$17 } },
});
//#endregion
//#region src/modules/invite-codes/service.ts
async function createInviteCode(params) {
  const id = getUuid();
  const code = params.code || generateCode();
  const [row] = await db()
    .insert(inviteCode)
    .values({
      id,
      code,
      maxUses: params.maxUses ?? 1,
      trialDays: params.trialDays ?? 15,
      note: params.note || '',
      createdBy: params.createdBy || null,
      expiresAt: params.expiresAt || null,
    })
    .returning();
  return row;
}
async function createInviteCodesBatch(params) {
  const codes = [];
  for (let i = 0; i < params.count; i++) {
    const row = await createInviteCode({
      maxUses: params.maxUses,
      trialDays: params.trialDays,
      note: params.note,
      createdBy: params.createdBy,
      expiresAt: params.expiresAt,
    });
    codes.push(row);
  }
  return codes;
}
async function deleteInviteCode(id) {
  await db().delete(inviteCode).where(eq(inviteCode.id, id));
}
async function validateInviteCode(code) {
  const [row] = await db()
    .select()
    .from(inviteCode)
    .where(eq(inviteCode.code, code))
    .limit(1);
  if (!row)
    return {
      valid: false,
      error: 'Invalid invite code',
    };
  if (row.expiresAt && row.expiresAt < /* @__PURE__ */ new Date())
    return {
      valid: false,
      error: 'Invite code has expired',
    };
  if (row.usedCount >= row.maxUses)
    return {
      valid: false,
      error: 'Invite code has been fully used',
    };
  return {
    valid: true,
    inviteCodeId: row.id,
    trialDays: row.trialDays,
  };
}
/**
 * Atomically redeem an invite code for a user.
 *
 * The row is locked inside a transaction so that concurrent requests can't
 * over-redeem (usedCount > maxUses). If the user has already redeemed any
 * code, returns the existing trialEndsAt unchanged.
 */
async function redeemInviteCode(params) {
  return db().transaction(async (tx) => {
    const [existing] = await tx
      .select()
      .from(userInvite)
      .where(eq(userInvite.userId, params.userId))
      .limit(1);
    if (existing)
      return {
        ok: true,
        trialEndsAt: existing.trialEndsAt,
      };
    const lockedQuery = tx
      .select()
      .from(inviteCode)
      .where(eq(inviteCode.code, params.code))
      .limit(1);
    const [row] = await (lockedQuery.for
      ? lockedQuery.for('update')
      : lockedQuery);
    if (!row)
      return {
        ok: false,
        error: 'Invalid invite code',
      };
    if (row.expiresAt && row.expiresAt < /* @__PURE__ */ new Date())
      return {
        ok: false,
        error: 'Invite code has expired',
      };
    if (row.usedCount >= row.maxUses)
      return {
        ok: false,
        error: 'Invite code has been fully used',
      };
    const id = getUuid();
    const now = /* @__PURE__ */ new Date();
    const trialEndsAt = new Date(
      now.getTime() + row.trialDays * 24 * 60 * 60 * 1e3
    );
    await tx.insert(userInvite).values({
      id,
      userId: params.userId,
      inviteCodeId: row.id,
      activatedAt: now,
      trialEndsAt,
    });
    await tx
      .update(inviteCode)
      .set({ usedCount: sql`${inviteCode.usedCount} + 1` })
      .where(eq(inviteCode.id, row.id));
    return {
      ok: true,
      trialEndsAt,
    };
  });
}
async function getUserPlan(userId) {
  const [activeSub] = await db()
    .select()
    .from(subscription)
    .where(
      and(eq(subscription.userId, userId), eq(subscription.status, 'active'))
    )
    .limit(1);
  if (activeSub) return { plan: 'member' };
  const [invite] = await db()
    .select()
    .from(userInvite)
    .where(eq(userInvite.userId, userId))
    .limit(1);
  if (!invite) return { plan: 'none' };
  const now = /* @__PURE__ */ new Date();
  if (invite.trialEndsAt > now)
    return {
      plan: 'trial',
      trialEndsAt: invite.trialEndsAt,
    };
  return {
    plan: 'expired',
    trialEndsAt: invite.trialEndsAt,
  };
}
function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const out = [];
  while (out.length < 12) {
    const buf = randomBytes$1(16);
    for (let i = 0; i < buf.length && out.length < 12; i++) {
      const b = buf[i];
      if (b < 256 - (256 % 32)) out.push(chars[b % 32]);
    }
  }
  return out.join('');
}
//#endregion
//#region src/routes/api/user/info.ts
async function GET$21({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const { plan, trialEndsAt } = await getUserPlan(session.user.id);
    const inviteRequired = (await getConfig('invite_code_required')) === 'true';
    const isAdmin = inviteRequired
      ? await hasPermission(session.user.id, 'admin.*')
      : false;
    const needsInvite = inviteRequired && plan === 'none' && !isAdmin;
    return respData({
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      plan,
      trialEndsAt: trialEndsAt?.toISOString() || null,
      authorized: plan === 'trial' || plan === 'member',
      needsInvite,
    });
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$31 = createFileRoute('/api/user/info')({
  server: { handlers: { GET: GET$21 } },
});
//#endregion
//#region src/routes/api/user/credits.ts
async function GET$20({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '20'))
    );
    const offset = (page - 1) * pageSize;
    const transactionType = searchParams.get('transactionType');
    const search = searchParams.get('search');
    const conditions = [
      eq(credit.userId, session.user.id),
      isNull(credit.deletedAt),
    ];
    if (transactionType)
      conditions.push(eq(credit.transactionType, transactionType));
    if (search)
      conditions.push(
        or(
          like(credit.transactionNo, `%${search}%`),
          like(credit.description, `%${search}%`)
        )
      );
    const where = and(...conditions);
    const [totalResult] = await db()
      .select({ count: count() })
      .from(credit)
      .where(where);
    return respPage(
      await db()
        .select({
          id: credit.id,
          transactionNo: credit.transactionNo,
          transactionType: credit.transactionType,
          transactionScene: credit.transactionScene,
          credits: credit.credits,
          remainingCredits: credit.remainingCredits,
          description: credit.description,
          status: credit.status,
          expiresAt: credit.expiresAt,
          createdAt: credit.createdAt,
        })
        .from(credit)
        .where(where)
        .orderBy(desc(credit.createdAt))
        .limit(pageSize)
        .offset(offset),
      totalResult.count
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$30 = createFileRoute('/api/user/credits')({
  server: { handlers: { GET: GET$20 } },
});
//#endregion
//#region src/routes/api/tickets/$id.ts
async function getOwnedTicket(request, id) {
  const session = await getAuth().api.getSession({ headers: request.headers });
  if (!session?.user) throw new Error('Unauthorized');
  const row = await getTicketById(id);
  if (!row || row.userId !== session.user.id)
    throw new Error('Ticket not found');
  return {
    session,
    ticket: row,
  };
}
async function GET$19({ request, params }) {
  try {
    const { id } = params;
    const { ticket } = await getOwnedTicket(request, id);
    return respData({
      ticket,
      messages: await getTicketMessages(id),
    });
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST$16({ request, params }) {
  try {
    const { id } = params;
    const { session, ticket } = await getOwnedTicket(request, id);
    if (ticket.status === 'closed') return respErr('Ticket is closed');
    const body = await request.json().catch(() => ({}));
    const content = typeof body.content === 'string' ? body.content.trim() : '';
    if (!content) return respErr('Content is required');
    if (content.length > 5e3) return respErr('Content is too long');
    const attachments = sanitizeAttachments(body.attachments);
    if (attachments === null) return respErr('Invalid attachments');
    return respData(
      await addMessage({
        ticketId: id,
        userId: session.user.id,
        role: 'user',
        content,
        attachments,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function PATCH$1({ request, params }) {
  try {
    const { id } = params;
    await getOwnedTicket(request, id);
    if ((await request.json().catch(() => ({}))).status !== 'closed')
      return respErr('Invalid status');
    await updateTicketStatus(id, 'closed');
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$29 = createFileRoute('/api/tickets/$id')({
  server: {
    handlers: {
      GET: GET$19,
      POST: POST$16,
      PATCH: PATCH$1,
    },
  },
});
//#endregion
//#region src/core/storage/r2.ts
/**
 * R2 storage provider implementation
 * @website https://www.cloudflare.com/products/r2/
 */
var R2Provider = class {
  name = 'r2';
  configs;
  constructor(configs) {
    this.configs = configs;
  }
  getUploadPath() {
    let uploadPath = this.configs.uploadPath || 'uploads';
    if (uploadPath.startsWith('/')) uploadPath = uploadPath.slice(1);
    if (uploadPath.endsWith('/')) uploadPath = uploadPath.slice(0, -1);
    return uploadPath;
  }
  getEndpoint() {
    return (
      this.configs.endpoint ||
      `https://${this.configs.accountId}.r2.cloudflarestorage.com`
    );
  }
  getPublicUrl = (options) => {
    const uploadBucket = options.bucket || this.configs.bucket;
    const uploadPath = this.getUploadPath();
    const url = `${this.getEndpoint()}/${uploadBucket}/${uploadPath}/${options.key}`;
    return this.configs.publicDomain
      ? `${this.configs.publicDomain}/${uploadPath}/${options.key}`
      : url;
  };
  exists = async (options) => {
    try {
      const uploadBucket = options.bucket || this.configs.bucket;
      if (!uploadBucket) return false;
      const uploadPath = this.getUploadPath();
      const url = `${this.getEndpoint()}/${uploadBucket}/${uploadPath}/${options.key}`;
      const { AwsClient } = await import('aws4fetch');
      return (
        await new AwsClient({
          accessKeyId: this.configs.accessKeyId,
          secretAccessKey: this.configs.secretAccessKey,
          region: this.configs.region || 'auto',
        }).fetch(new Request(url, { method: 'HEAD' }))
      ).ok;
    } catch {
      return false;
    }
  };
  async uploadFile(options) {
    try {
      const uploadBucket = options.bucket || this.configs.bucket;
      if (!uploadBucket)
        return {
          success: false,
          error: 'Bucket is required',
          provider: this.name,
        };
      const bodyArray =
        options.body instanceof Buffer
          ? new Uint8Array(options.body)
          : options.body;
      const uploadPath = this.getUploadPath();
      const url = `${this.getEndpoint()}/${uploadBucket}/${uploadPath}/${options.key}`;
      const { AwsClient } = await import('aws4fetch');
      const client = new AwsClient({
        accessKeyId: this.configs.accessKeyId,
        secretAccessKey: this.configs.secretAccessKey,
        region: this.configs.region || 'auto',
      });
      const headers = {
        'Content-Type': options.contentType || 'application/octet-stream',
        'Content-Disposition': options.disposition || 'inline',
        'Content-Length': bodyArray.length.toString(),
      };
      const request = new Request(url, {
        method: 'PUT',
        headers,
        body: bodyArray,
      });
      const response = await client.fetch(request);
      if (!response.ok)
        return {
          success: false,
          error: `Upload failed: ${response.statusText}`,
          provider: this.name,
        };
      const publicUrl =
        this.getPublicUrl({
          key: options.key,
          bucket: uploadBucket,
        }) || url;
      return {
        success: true,
        location: url,
        bucket: uploadBucket,
        uploadPath,
        key: options.key,
        filename: options.key.split('/').pop(),
        url: publicUrl,
        provider: this.name,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        provider: this.name,
      };
    }
  }
  async downloadAndUpload(options) {
    try {
      const response = await fetch(options.url);
      if (!response.ok)
        return {
          success: false,
          error: `HTTP error! status: ${response.status}`,
          provider: this.name,
        };
      if (!response.body)
        return {
          success: false,
          error: 'No body in response',
          provider: this.name,
        };
      const arrayBuffer = await response.arrayBuffer();
      const body = new Uint8Array(arrayBuffer);
      return this.uploadFile({
        body,
        key: options.key,
        bucket: options.bucket,
        contentType: options.contentType,
        disposition: options.disposition,
      });
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        provider: this.name,
      };
    }
  }
};
//#endregion
//#region src/core/storage/index.ts
/**
 * Storage manager to manage all storage providers
 */
var StorageManager = class {
  providers = [];
  defaultProvider;
  ensureDefaultProvider() {
    if (!this.defaultProvider && this.providers.length > 0)
      this.defaultProvider = this.providers[0];
    if (!this.defaultProvider)
      throw new Error('No storage provider configured');
    return this.defaultProvider;
  }
  addProvider(provider, isDefault = false) {
    this.providers.push(provider);
    if (isDefault) this.defaultProvider = provider;
  }
  getProvider(name) {
    return this.providers.find((p) => p.name === name);
  }
  async uploadFile(options) {
    return this.ensureDefaultProvider().uploadFile(options);
  }
  async uploadFileWithProvider(options, providerName) {
    const provider = this.getProvider(providerName);
    if (!provider)
      throw new Error(`Storage provider '${providerName}' not found`);
    return provider.uploadFile(options);
  }
  async downloadAndUpload(options) {
    return this.ensureDefaultProvider().downloadAndUpload(options);
  }
  async exists(options) {
    const provider = this.ensureDefaultProvider();
    if (!provider.exists) return false;
    return provider.exists(options);
  }
  getPublicUrl(options) {
    const provider = this.ensureDefaultProvider();
    if (!provider.getPublicUrl) return void 0;
    return provider.getPublicUrl(options);
  }
  async downloadAndUploadWithProvider(options, providerName) {
    const provider = this.getProvider(providerName);
    if (!provider)
      throw new Error(`Storage provider '${providerName}' not found`);
    return provider.downloadAndUpload(options);
  }
  getProviderNames() {
    return this.providers.map((p) => p.name);
  }
};
new StorageManager();
//#endregion
//#region src/modules/storage/service.ts
/**
 * Storage config is DB-driven (like auth/payment/email): values come from the
 * admin "Storage" settings, merged over env via getAllConfigs(). Keys mirror the
 * original ShipAny Two (`r2_*`).
 */
function isConfigured(configs) {
  return Boolean(
    configs.r2_access_key && configs.r2_secret_key && configs.r2_bucket_name
  );
}
function buildManager(configs) {
  const manager = new StorageManager();
  manager.addProvider(
    new R2Provider({
      accountId: configs.r2_account_id || '',
      accessKeyId: configs.r2_access_key,
      secretAccessKey: configs.r2_secret_key,
      bucket: configs.r2_bucket_name,
      uploadPath: configs.r2_upload_path,
      region: 'auto',
      endpoint: configs.r2_endpoint,
      publicDomain: configs.r2_domain,
    }),
    true
  );
  return manager;
}
/**
 * Returns a configured StorageManager, or null when storage is not configured
 * (caller should fall back to local/inline handling).
 */
async function getStorage() {
  const configs = await getAllConfigs();
  if (!isConfigured(configs)) return null;
  return buildManager(configs);
}
//#endregion
//#region src/routes/api/storage/upload-image.ts
var extFromMime = (mimeType) => {
  return (
    {
      'image/jpeg': 'jpg',
      'image/jpg': 'jpg',
      'image/png': 'png',
      'image/webp': 'webp',
      'image/gif': 'gif',
      'image/svg+xml': 'svg',
      'image/avif': 'avif',
      'image/heic': 'heic',
      'image/heif': 'heif',
    }[mimeType] || ''
  );
};
var INLINE_MAX_BYTES = (Number(envConfigs.inline_image_max_kb) || 10240) * 1024;
async function POST$15({ request }) {
  const limited = enforceMinIntervalRateLimit(request, {
    intervalMs: 1e3,
    keyPrefix: 'upload-image',
  });
  if (limited) return limited;
  try {
    if (!(await getAuth().api.getSession({ headers: request.headers }))?.user)
      return respErr('Unauthorized');
    const files = (await request.formData()).getAll('files');
    if (!files.length) return respErr('No files provided');
    const storage = await getStorage();
    const uploadResults = [];
    for (const file of files) {
      if (!file.type.startsWith('image/'))
        return respErr(`File ${file.name} is not an image`);
      const arrayBuffer = await file.arrayBuffer();
      const body = new Uint8Array(arrayBuffer);
      const objectKey = `${md5(body)}.${(extFromMime(file.type) || file.name.split('.').pop() || 'bin').replace(/[^a-zA-Z0-9]/g, '') || 'bin'}`;
      if (!storage) {
        if (body.length > INLINE_MAX_BYTES) {
          const limitKb = Math.round(INLINE_MAX_BYTES / 1024);
          return respErr(
            `Image too large (${(body.length / 1024).toFixed(0)}KB > ${limitKb}KB). Configure storage or use a smaller image.`
          );
        }
        const dir = path.join(process.cwd(), 'public', 'uploads');
        await mkdir(dir, { recursive: true });
        await writeFile(path.join(dir, objectKey), body);
        uploadResults.push({
          url: `/uploads/${objectKey}`,
          key: `uploads/${objectKey}`,
          filename: file.name,
          deduped: false,
        });
        continue;
      }
      if (await storage.exists({ key: objectKey })) {
        const publicUrl = storage.getPublicUrl({ key: objectKey });
        if (publicUrl) {
          uploadResults.push({
            url: publicUrl,
            key: objectKey,
            filename: file.name,
            deduped: true,
          });
          continue;
        }
      }
      const result = await storage.uploadFile({
        body,
        key: objectKey,
        contentType: file.type,
        disposition: 'inline',
      });
      if (!result.success || !result.url)
        return respErr(result.error || 'Upload failed');
      uploadResults.push({
        url: result.url,
        key: result.key || objectKey,
        filename: file.name,
        deduped: false,
      });
    }
    return respData({
      urls: uploadResults.map((r) => r.url),
      results: uploadResults,
    });
  } catch (e) {
    console.error('upload image failed:', e);
    return respErr(e?.message || 'upload image failed');
  }
}
var Route$28 = createFileRoute('/api/storage/upload-image')({
  server: { handlers: { POST: POST$15 } },
});
//#endregion
//#region src/core/payment/types.ts
var PaymentType = /* @__PURE__ */ (function (PaymentType) {
  PaymentType['ONE_TIME'] = 'one-time';
  PaymentType['SUBSCRIPTION'] = 'subscription';
  PaymentType['RENEW'] = 'renew';
  return PaymentType;
})({});
var PaymentInterval = /* @__PURE__ */ (function (PaymentInterval) {
  PaymentInterval['ONE_TIME'] = 'one-time';
  PaymentInterval['DAY'] = 'day';
  PaymentInterval['WEEK'] = 'week';
  PaymentInterval['MONTH'] = 'month';
  PaymentInterval['YEAR'] = 'year';
  return PaymentInterval;
})({});
var PaymentStatus = /* @__PURE__ */ (function (PaymentStatus) {
  PaymentStatus['PROCESSING'] = 'processing';
  PaymentStatus['SUCCESS'] = 'paid';
  PaymentStatus['FAILED'] = 'failed';
  PaymentStatus['CANCELED'] = 'canceled';
  return PaymentStatus;
})({});
var SubscriptionCycleType = /* @__PURE__ */ (function (SubscriptionCycleType) {
  SubscriptionCycleType['CREATE'] = 'create';
  SubscriptionCycleType['RENEWAL'] = 'renew';
  return SubscriptionCycleType;
})({});
var SubscriptionStatus$1 = /* @__PURE__ */ (function (SubscriptionStatus) {
  SubscriptionStatus['ACTIVE'] = 'active';
  SubscriptionStatus['PENDING_CANCEL'] = 'pending_cancel';
  SubscriptionStatus['CANCELED'] = 'canceled';
  SubscriptionStatus['TRIALING'] = 'trialing';
  SubscriptionStatus['EXPIRED'] = 'expired';
  SubscriptionStatus['PAUSED'] = 'paused';
  return SubscriptionStatus;
})({});
var PaymentEventType = /* @__PURE__ */ (function (PaymentEventType) {
  PaymentEventType['CHECKOUT_SUCCESS'] = 'checkout.success';
  PaymentEventType['PAYMENT_SUCCESS'] = 'payment.success';
  PaymentEventType['PAYMENT_FAILED'] = 'payment.failed';
  PaymentEventType['PAYMENT_REFUNDED'] = 'payment.refunded';
  PaymentEventType['SUBSCRIBE_UPDATED'] = 'subscribe.updated';
  PaymentEventType['SUBSCRIBE_CANCELED'] = 'subscribe.canceled';
  return PaymentEventType;
})({});
//#endregion
//#region src/config/pricing.ts
/**
 * Authoritative pricing catalog.
 *
 * The checkout API uses this as the SOURCE OF TRUTH for price/credits/duration.
 * Any price, credits, or plan info sent by the client is IGNORED — only the
 * product_id is honored, and everything else is looked up here.
 *
 * To change pricing, edit this file and redeploy. Admin UI cannot alter prices.
 */
/**
 * Default demo catalog. Replace with your real products when launching.
 * Keys MUST match what the pricing UI sends as product_id.
 */
var pricingCatalog = {
  starter_monthly: {
    productId: 'starter_monthly',
    productName: 'Starter',
    planName: 'Starter',
    description: 'Starter Monthly',
    type: PaymentType.SUBSCRIPTION,
    priceInCents: 900,
    currency: 'usd',
    credits: 5e3,
    plan: {
      name: 'Starter',
      interval: PaymentInterval.MONTH,
      intervalCount: 1,
    },
  },
  pro_monthly: {
    productId: 'pro_monthly',
    productName: 'Pro',
    planName: 'Pro',
    description: 'Pro Monthly',
    type: PaymentType.SUBSCRIPTION,
    priceInCents: 2900,
    currency: 'usd',
    credits: 5e4,
    plan: {
      name: 'Pro',
      interval: PaymentInterval.MONTH,
      intervalCount: 1,
    },
  },
  enterprise_monthly: {
    productId: 'enterprise_monthly',
    productName: 'Enterprise',
    planName: 'Enterprise',
    description: 'Enterprise Monthly',
    type: PaymentType.SUBSCRIPTION,
    priceInCents: 9900,
    currency: 'usd',
    credits: 5e5,
    plan: {
      name: 'Enterprise',
      interval: PaymentInterval.MONTH,
      intervalCount: 1,
    },
  },
  starter_yearly: {
    productId: 'starter_yearly',
    productName: 'Starter',
    planName: 'Starter',
    description: 'Starter Yearly',
    type: PaymentType.SUBSCRIPTION,
    priceInCents: 8600,
    currency: 'usd',
    credits: 6e4,
    plan: {
      name: 'Starter',
      interval: PaymentInterval.YEAR,
      intervalCount: 1,
    },
  },
  pro_yearly: {
    productId: 'pro_yearly',
    productName: 'Pro',
    planName: 'Pro',
    description: 'Pro Yearly',
    type: PaymentType.SUBSCRIPTION,
    priceInCents: 27800,
    currency: 'usd',
    credits: 6e5,
    plan: {
      name: 'Pro',
      interval: PaymentInterval.YEAR,
      intervalCount: 1,
    },
  },
  enterprise_yearly: {
    productId: 'enterprise_yearly',
    productName: 'Enterprise',
    planName: 'Enterprise',
    description: 'Enterprise Yearly',
    type: PaymentType.SUBSCRIPTION,
    priceInCents: 95e3,
    currency: 'usd',
    credits: 6e6,
    plan: {
      name: 'Enterprise',
      interval: PaymentInterval.YEAR,
      intervalCount: 1,
    },
  },
  starter_lifetime: {
    productId: 'starter_lifetime',
    productName: 'Starter',
    planName: 'Starter Lifetime',
    description: 'Starter Lifetime',
    type: PaymentType.ONE_TIME,
    priceInCents: 14900,
    currency: 'usd',
    credits: 1e5,
  },
  pro_lifetime: {
    productId: 'pro_lifetime',
    productName: 'Pro',
    planName: 'Pro Lifetime',
    description: 'Pro Lifetime',
    type: PaymentType.ONE_TIME,
    priceInCents: 49900,
    currency: 'usd',
    credits: 1e6,
  },
  enterprise_lifetime: {
    productId: 'enterprise_lifetime',
    productName: 'Enterprise',
    planName: 'Enterprise Lifetime',
    description: 'Enterprise Lifetime',
    type: PaymentType.ONE_TIME,
    priceInCents: 199900,
    currency: 'usd',
    credits: 1e7,
  },
};
function getPricingProduct(productId) {
  if (!productId) return null;
  return pricingCatalog[productId] ?? null;
}
//#endregion
//#region src/core/payment/stripe.ts
/**
 * Stripe payment provider implementation
 * @website https://stripe.com/
 */
var StripeProvider = class {
  name = 'stripe';
  configs;
  client;
  constructor(configs) {
    this.configs = configs;
    this.client = new Stripe(configs.secretKey, {
      httpClient: Stripe.createFetchHttpClient(),
    });
  }
  async createPayment({ order }) {
    try {
      if (!order.price) throw new Error('price is required');
      const priceData = {
        currency: order.price.currency,
        unit_amount: order.price.amount,
        product_data: { name: order.description || '' },
      };
      if (order.type === PaymentType.SUBSCRIPTION) {
        if (!order.plan) throw new Error('plan is required');
        priceData.recurring = { interval: order.plan.interval };
      }
      let customerId = '';
      if (order.customer?.email) {
        const customers = await this.client.customers.list({
          email: order.customer.email,
          limit: 1,
        });
        if (customers.data.length > 0) customerId = customers.data[0].id;
        else
          customerId = (
            await this.client.customers.create({
              email: order.customer.email,
              name: order.customer.name,
              metadata: order.customer.metadata,
            })
          ).id;
      }
      const sessionParams = {
        mode:
          order.type === PaymentType.SUBSCRIPTION ? 'subscription' : 'payment',
        line_items: [
          {
            price_data: priceData,
            quantity: 1,
          },
        ],
      };
      if (order.discount && order.discount.code)
        sessionParams.discounts = [{ promotion_code: order.discount.code }];
      if (this.configs.allowPromotionCodes && !sessionParams.discounts)
        sessionParams.allow_promotion_codes = true;
      if (
        order.price.currency.toLowerCase() === 'cny' &&
        order.type === PaymentType.ONE_TIME
      ) {
        sessionParams.payment_method_types = [];
        sessionParams.payment_method_options = {};
        const allowedPaymentMethods = this.configs.allowedPaymentMethods || [];
        if (allowedPaymentMethods.includes('card'))
          sessionParams.payment_method_types.push('card');
        if (allowedPaymentMethods.includes('wechat_pay')) {
          sessionParams.payment_method_types.push('wechat_pay');
          sessionParams.payment_method_options.wechat_pay = { client: 'web' };
        }
        if (allowedPaymentMethods.includes('alipay')) {
          sessionParams.payment_method_types.push('alipay');
          sessionParams.payment_method_options.alipay = {};
        }
        if (allowedPaymentMethods.length === 0)
          sessionParams.payment_method_types = ['card'];
      }
      if (order.type === PaymentType.ONE_TIME)
        sessionParams.invoice_creation = { enabled: true };
      if (customerId) sessionParams.customer = customerId;
      if (order.metadata) sessionParams.metadata = order.metadata;
      if (order.successUrl) sessionParams.success_url = order.successUrl;
      if (order.cancelUrl) sessionParams.cancel_url = order.cancelUrl;
      const session = await this.client.checkout.sessions.create(sessionParams);
      if (!session.id || !session.url) throw new Error('create payment failed');
      return {
        provider: this.name,
        checkoutParams: sessionParams,
        checkoutInfo: {
          sessionId: session.id,
          checkoutUrl: session.url,
        },
        checkoutResult: session,
        metadata: order.metadata || {},
      };
    } catch (error) {
      throw error;
    }
  }
  /**
   * Get payment session by session id
   */
  async getPaymentSession({ sessionId }) {
    try {
      if (!sessionId) throw new Error('sessionId is required');
      const session = await this.client.checkout.sessions.retrieve(sessionId);
      return await this.buildPaymentSessionFromCheckoutSession(session);
    } catch (error) {
      throw error;
    }
  }
  /**
   * Get payment event from webhook notification
   */
  async getPaymentEvent({ req }) {
    try {
      const rawBody = await req.text();
      const signature = req.headers.get('stripe-signature');
      if (!rawBody || !signature) throw new Error('Invalid webhook request');
      if (!this.configs.signingSecret)
        throw new Error('Signing Secret not configured');
      const event = this.client.webhooks.constructEvent(
        rawBody,
        signature,
        this.configs.signingSecret
      );
      let paymentSession = void 0;
      const eventType = this.mapStripeEventType(event.type);
      if (eventType === PaymentEventType.CHECKOUT_SUCCESS)
        paymentSession = await this.buildPaymentSessionFromCheckoutSession(
          event.data.object
        );
      else if (eventType === PaymentEventType.PAYMENT_SUCCESS)
        paymentSession = await this.buildPaymentSessionFromInvoice(
          event.data.object
        );
      else if (eventType === PaymentEventType.SUBSCRIBE_UPDATED)
        paymentSession = await this.buildPaymentSessionFromSubscription(
          event.data.object
        );
      else if (eventType === PaymentEventType.SUBSCRIBE_CANCELED)
        paymentSession = await this.buildPaymentSessionFromSubscription(
          event.data.object
        );
      if (!paymentSession) throw new Error('Invalid webhook event');
      return {
        eventType,
        eventResult: event,
        paymentSession,
      };
    } catch (error) {
      throw error;
    }
  }
  async getPaymentInvoice({ invoiceId }) {
    try {
      const invoice = await this.client.invoices.retrieve(invoiceId);
      if (!invoice.id) throw new Error('Invoice not found');
      return {
        invoiceId: invoice.id,
        invoiceUrl: invoice.hosted_invoice_url || void 0,
        amount: invoice.amount_paid,
        currency: invoice.currency,
      };
    } catch (error) {
      throw error;
    }
  }
  async getPaymentBilling({ customerId, returnUrl }) {
    try {
      const billing = await this.client.billingPortal.sessions.create({
        customer: customerId,
        return_url: returnUrl,
      });
      if (!billing.url) throw new Error('get billing url failed');
      return { billingUrl: billing.url };
    } catch (error) {
      throw error;
    }
  }
  async cancelSubscription({ subscriptionId }) {
    try {
      if (!subscriptionId) throw new Error('subscriptionId is required');
      const subscription =
        await this.client.subscriptions.cancel(subscriptionId);
      if (!subscription.canceled_at)
        throw new Error('Cancel subscription failed');
      return await this.buildPaymentSessionFromSubscription(subscription);
    } catch (error) {
      throw error;
    }
  }
  mapStripeEventType(eventType) {
    switch (eventType) {
      case 'checkout.session.completed':
        return PaymentEventType.CHECKOUT_SUCCESS;
      case 'invoice.payment_succeeded':
        return PaymentEventType.PAYMENT_SUCCESS;
      case 'invoice.payment_failed':
        return PaymentEventType.PAYMENT_FAILED;
      case 'customer.subscription.updated':
        return PaymentEventType.SUBSCRIBE_UPDATED;
      case 'customer.subscription.deleted':
        return PaymentEventType.SUBSCRIBE_CANCELED;
      default:
        throw new Error(`Unknown Stripe event type: ${eventType}`);
    }
  }
  mapStripeStatus(session) {
    switch (session.status) {
      case 'complete':
        switch (session.payment_status) {
          case 'paid':
            return PaymentStatus.SUCCESS;
          case 'unpaid':
            return PaymentStatus.PROCESSING;
          case 'no_payment_required':
            return PaymentStatus.SUCCESS;
          default:
            throw new Error(
              `Unknown Stripe payment status: ${session.payment_status}`
            );
        }
      case 'expired':
        return PaymentStatus.CANCELED;
      case 'open':
        return PaymentStatus.PROCESSING;
      default:
        throw new Error(`Unknown Stripe status: ${session.status}`);
    }
  }
  async buildPaymentSessionFromCheckoutSession(session) {
    let subscription = void 0;
    if (session.subscription)
      subscription = await this.client.subscriptions.retrieve(
        session.subscription
      );
    const result = {
      provider: this.name,
      paymentStatus: this.mapStripeStatus(session),
      paymentInfo: {
        transactionId: session.id,
        discountCode: session.discounts?.find(
          (discount) => discount.promotion_code
        )?.promotion_code,
        discountAmount: session.total_details?.amount_discount || 0,
        discountCurrency: session.currency || '',
        paymentAmount: session.amount_total || 0,
        paymentCurrency: session.currency || '',
        paymentEmail:
          session.customer_email || session.customer_details?.email || void 0,
        paymentUserName: session.customer_details?.name || '',
        paymentUserId: session.customer ? session.customer : void 0,
        paidAt: session.created
          ? /* @__PURE__ */ new Date(session.created * 1e3)
          : void 0,
        invoiceId: session.invoice ? session.invoice : void 0,
        invoiceUrl: '',
      },
      paymentResult: session,
      metadata: session.metadata,
    };
    if (subscription) {
      result.subscriptionId = subscription.id;
      result.subscriptionInfo = await this.buildSubscriptionInfo(subscription);
      result.subscriptionResult = subscription;
    }
    return result;
  }
  async buildPaymentSessionFromInvoice(invoice) {
    let subscription = void 0;
    if (invoice.lines.data.length > 0) {
      const data = invoice.lines.data[0];
      let subscriptionId = '';
      if (data.subscription) subscriptionId = data.subscription;
      else if (
        data.parent &&
        data.parent.subscription_item_details &&
        data.parent.subscription_item_details.subscription
      )
        subscriptionId = data.parent.subscription_item_details.subscription;
      if (subscriptionId)
        subscription = await this.client.subscriptions.retrieve(subscriptionId);
    }
    const result = {
      provider: this.name,
      paymentStatus: PaymentStatus.SUCCESS,
      paymentInfo: {
        transactionId: invoice.id,
        discountCode: '',
        discountAmount:
          invoice.total_discount_amounts &&
          invoice.total_discount_amounts.length > 0
            ? invoice.total_discount_amounts[0].amount
            : 0,
        discountCurrency: invoice.currency || '',
        paymentAmount: invoice.amount_paid,
        paymentCurrency: invoice.currency,
        paymentEmail: invoice.customer_email || '',
        paymentUserName: invoice.customer_name || '',
        paymentUserId: invoice.customer ? invoice.customer : void 0,
        paidAt: invoice.created
          ? /* @__PURE__ */ new Date(invoice.created * 1e3)
          : void 0,
        invoiceId: invoice.id,
        invoiceUrl: invoice.hosted_invoice_url || '',
        subscriptionCycleType:
          invoice.billing_reason === 'subscription_create'
            ? SubscriptionCycleType.CREATE
            : invoice.billing_reason === 'subscription_cycle'
              ? SubscriptionCycleType.RENEWAL
              : void 0,
      },
      paymentResult: invoice,
      metadata: invoice.metadata,
    };
    if (subscription) {
      result.subscriptionId = subscription.id;
      result.subscriptionInfo = await this.buildSubscriptionInfo(subscription);
      result.subscriptionResult = subscription;
    }
    return result;
  }
  async buildPaymentSessionFromSubscription(subscription) {
    const result = { provider: this.name };
    if (subscription) {
      result.subscriptionId = subscription.id;
      result.subscriptionInfo = await this.buildSubscriptionInfo(subscription);
      result.subscriptionResult = subscription;
    }
    return result;
  }
  async buildSubscriptionInfo(subscription) {
    const data = subscription.items.data[0];
    const subscriptionInfo = {
      subscriptionId: subscription.id,
      productId: data.price.product,
      planId: data.price.id,
      description: '',
      amount: data.price.unit_amount || 0,
      currency: data.price.currency,
      currentPeriodStart: /* @__PURE__ */ new Date(
        data.current_period_start * 1e3
      ),
      currentPeriodEnd: /* @__PURE__ */ new Date(data.current_period_end * 1e3),
      interval: data.plan.interval,
      intervalCount: data.plan.interval_count || 1,
      metadata: subscription.metadata,
    };
    if (subscription.status === 'active')
      if (subscription.cancel_at) {
        subscriptionInfo.status = SubscriptionStatus$1.PENDING_CANCEL;
        subscriptionInfo.canceledAt = /* @__PURE__ */ new Date(
          (subscription.canceled_at || 0) * 1e3
        );
        subscriptionInfo.canceledEndAt = /* @__PURE__ */ new Date(
          subscription.cancel_at * 1e3
        );
        subscriptionInfo.canceledReason =
          subscription.cancellation_details?.comment || '';
        subscriptionInfo.canceledReasonType =
          subscription.cancellation_details?.feedback || '';
      } else subscriptionInfo.status = SubscriptionStatus$1.ACTIVE;
    else if (subscription.status === 'canceled') {
      subscriptionInfo.status = SubscriptionStatus$1.CANCELED;
      subscriptionInfo.canceledAt = /* @__PURE__ */ new Date(
        (subscription.canceled_at || 0) * 1e3
      );
      subscriptionInfo.canceledReason =
        subscription.cancellation_details?.comment || '';
      subscriptionInfo.canceledReasonType =
        subscription.cancellation_details?.feedback || '';
    } else
      throw new Error(
        `Unknown Stripe subscription status: ${subscription.status}`
      );
    return subscriptionInfo;
  }
};
//#endregion
//#region src/core/payment/creem.ts
/**
 * Creem payment provider implementation
 * @website https://creem.io/
 */
var CreemProvider = class {
  name = 'creem';
  configs;
  baseUrl;
  constructor(configs) {
    this.configs = configs;
    this.baseUrl =
      configs.environment === 'production'
        ? 'https://api.creem.io'
        : 'https://test-api.creem.io';
  }
  async createPayment({ order }) {
    try {
      if (!order.productId) throw new Error('productId is required');
      const payload = {
        product_id: order.productId,
        request_id: order.requestId || void 0,
        units: 1,
        discount_code: order.discount ? { code: order.discount.code } : void 0,
        customer: order.customer
          ? {
              id: order.customer.id,
              email: order.customer.email,
            }
          : void 0,
        custom_fields: order.customFields
          ? order.customFields.map((customField) => ({
              type: customField.type,
              key: customField.name,
              label: customField.label,
              optional: !customField.isRequired,
              text: customField.metadata,
            }))
          : void 0,
        success_url: order.successUrl,
        metadata: order.metadata,
      };
      const result = await this.makeRequest('/v1/checkouts', 'POST', payload);
      if (result.error)
        throw new Error(result.error.message || 'create payment failed');
      return {
        provider: this.name,
        checkoutParams: payload,
        checkoutInfo: {
          sessionId: result.id,
          checkoutUrl: result.checkout_url,
        },
        checkoutResult: result,
        metadata: order.metadata || {},
      };
    } catch (error) {
      throw error;
    }
  }
  async getPaymentSession({ sessionId }) {
    try {
      const session = await this.makeRequest(
        `/v1/checkouts?checkout_id=${sessionId}`,
        'GET'
      );
      if (!session.id || !session.order)
        throw new Error(session.error || 'get payment failed');
      return await this.buildPaymentSessionFromCheckoutSession(session);
    } catch (error) {
      throw error;
    }
  }
  async getPaymentEvent({ req }) {
    try {
      const rawBody = await req.text();
      const signature = req.headers.get('creem-signature');
      if (!rawBody || !signature) throw new Error('Invalid webhook request');
      if (!this.configs.signingSecret)
        throw new Error('Signing Secret not configured');
      const computedSignature = await this.generateSignature(
        rawBody,
        this.configs.signingSecret
      );
      let sigOk = false;
      try {
        const expected = Buffer.from(computedSignature, 'hex');
        const provided = Buffer.from(signature, 'hex');
        sigOk =
          expected.length === provided.length &&
          timingSafeEqual(expected, provided);
      } catch {
        sigOk = false;
      }
      if (!sigOk) throw new Error('Invalid webhook signature');
      const event = JSON.parse(rawBody);
      if (!event || !event.eventType)
        throw new Error('Invalid webhook payload');
      let paymentSession = void 0;
      const eventType = this.mapCreemEventType(event.eventType);
      if (eventType === PaymentEventType.CHECKOUT_SUCCESS)
        paymentSession = await this.buildPaymentSessionFromCheckoutSession(
          event.object
        );
      else if (eventType === PaymentEventType.PAYMENT_SUCCESS)
        paymentSession = await this.buildPaymentSessionFromInvoice(
          event.object
        );
      else if (eventType === PaymentEventType.SUBSCRIBE_UPDATED)
        paymentSession = await this.buildPaymentSessionFromSubscription(
          event.object
        );
      else if (eventType === PaymentEventType.SUBSCRIBE_CANCELED)
        paymentSession = await this.buildPaymentSessionFromSubscription(
          event.object
        );
      if (!paymentSession) throw new Error('Invalid webhook event');
      return {
        eventType,
        eventResult: event,
        paymentSession,
      };
    } catch (error) {
      throw error;
    }
  }
  async getPaymentBilling({ customerId, returnUrl }) {
    try {
      const billing = await this.makeRequest('/v1/customers/billing', 'POST', {
        customer_id: customerId,
      });
      if (!billing.customer_portal_link)
        throw new Error('get billing url failed');
      return { billingUrl: billing.customer_portal_link };
    } catch (error) {
      throw error;
    }
  }
  async cancelSubscription({ subscriptionId }) {
    try {
      const result = await this.makeRequest(
        `/v1/subscriptions/${subscriptionId}/cancel`,
        'POST'
      );
      if (!result.canceled_at) throw new Error('cancel subscription failed');
      return await this.buildPaymentSessionFromSubscription(result);
    } catch (error) {
      throw error;
    }
  }
  async generateSignature(payload, secret) {
    try {
      const encoder = new TextEncoder();
      const keyData = encoder.encode(secret);
      const messageData = encoder.encode(payload);
      const key = await crypto.subtle.importKey(
        'raw',
        keyData,
        {
          name: 'HMAC',
          hash: 'SHA-256',
        },
        false,
        ['sign']
      );
      const signature = await crypto.subtle.sign('HMAC', key, messageData);
      const signatureArray = new Uint8Array(signature);
      return Array.from(signatureArray)
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
    } catch (error) {
      throw new Error(`Failed to generate signature: ${error.message}`);
    }
  }
  async makeRequest(endpoint, method, data) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      method,
      headers: {
        'x-api-key': this.configs.apiKey,
        'Content-Type': 'application/json',
      },
    };
    if (data) config.body = JSON.stringify(data);
    const response = await fetch(url, config);
    if (!response.ok)
      throw new Error(
        `request creem api failed with status: ${response.status}`
      );
    return await response.json();
  }
  mapCreemEventType(eventType) {
    switch (eventType) {
      case 'checkout.completed':
        return PaymentEventType.CHECKOUT_SUCCESS;
      case 'subscription.paid':
        return PaymentEventType.PAYMENT_SUCCESS;
      case 'subscription.update':
        return PaymentEventType.SUBSCRIBE_UPDATED;
      case 'subscription.paused':
        return PaymentEventType.SUBSCRIBE_UPDATED;
      case 'subscription.active':
        return PaymentEventType.SUBSCRIBE_UPDATED;
      case 'subscription.canceled':
        return PaymentEventType.SUBSCRIBE_CANCELED;
      default:
        throw new Error(`Not handle creem event type: ${eventType}`);
    }
  }
  mapCreemStatus(session) {
    const status = session.status;
    if ((session.order || session.last_transaction)?.status === 'paid')
      return PaymentStatus.SUCCESS;
    else throw new Error(`Unknown Creem session status: ${status}`);
  }
  async buildPaymentSessionFromCheckoutSession(session) {
    let subscription = void 0;
    if (session.subscription) subscription = session.subscription;
    const order = session.order;
    const result = {
      provider: this.name,
      paymentStatus: this.mapCreemStatus(session),
      paymentInfo: {
        transactionId: order?.transaction || order?.id,
        amount: order?.amount || 0,
        currency: order?.currency || '',
        discountCode: '',
        discountAmount: order?.discount_amount || 0,
        discountCurrency: order?.currency || '',
        paymentAmount: order?.amount_paid || 0,
        paymentCurrency: order?.currency || '',
        paymentEmail: session.customer?.email,
        paymentUserName: session.customer?.name,
        paymentUserId: session.customer?.id,
        paidAt: order?.created_at ? new Date(order.created_at) : void 0,
        invoiceId: '',
        invoiceUrl: '',
      },
      paymentResult: session,
      metadata: session.metadata,
    };
    if (subscription) {
      result.subscriptionId = subscription.id;
      result.subscriptionInfo = await this.buildSubscriptionInfo(
        subscription,
        session.product
      );
      result.subscriptionResult = subscription;
    }
    return result;
  }
  async buildPaymentSessionFromInvoice(invoice) {
    const order = invoice.order || invoice.last_transaction;
    const subscription = invoice.subscription || invoice;
    const subscriptionCreatedAt = new Date(subscription.created_at);
    const cycleType =
      new Date(subscription.current_period_start_date).getTime() -
        subscriptionCreatedAt.getTime() <
      5e3
        ? SubscriptionCycleType.CREATE
        : SubscriptionCycleType.RENEWAL;
    const result = {
      provider: this.name,
      paymentStatus: this.mapCreemStatus(invoice),
      paymentInfo: {
        description: order?.description,
        amount: order?.amount || 0,
        currency: order?.currency || '',
        transactionId: order?.transaction || order?.id,
        discountCode: '',
        discountAmount: order?.discount_amount || 0,
        discountCurrency: order?.currency || '',
        paymentAmount: order?.amount_paid || 0,
        paymentCurrency: order?.currency || '',
        paymentEmail: invoice.customer?.email,
        paymentUserName: invoice.customer?.name,
        paymentUserId: invoice.customer?.id,
        paidAt: order?.created_at ? new Date(order.created_at) : void 0,
        invoiceId: '',
        invoiceUrl: '',
        subscriptionCycleType: cycleType,
      },
      paymentResult: invoice,
      metadata: invoice.metadata,
    };
    if (subscription) {
      result.subscriptionId = subscription.id;
      result.subscriptionInfo = await this.buildSubscriptionInfo(
        subscription,
        subscription.product
      );
      result.subscriptionResult = subscription;
    }
    return result;
  }
  async buildPaymentSessionFromSubscription(subscription) {
    const result = { provider: this.name };
    if (subscription) {
      result.subscriptionId = subscription.id;
      result.subscriptionInfo = await this.buildSubscriptionInfo(
        subscription,
        subscription.product
      );
      result.subscriptionResult = subscription;
    }
    return result;
  }
  async buildSubscriptionInfo(subscription, product) {
    const { interval, count: intervalCount } = this.mapCreemInterval(product);
    const subscriptionInfo = {
      subscriptionId: subscription.id,
      productId: product?.id,
      planId: '',
      description: product?.description,
      amount: product?.price,
      currency: product?.currency,
      currentPeriodStart: new Date(subscription.current_period_start_date),
      currentPeriodEnd: new Date(subscription.current_period_end_date),
      interval,
      intervalCount,
      metadata: subscription.metadata,
    };
    if (subscription.status === 'active')
      if (subscription.cancel_at) {
        subscriptionInfo.status = SubscriptionStatus$1.PENDING_CANCEL;
        subscriptionInfo.canceledAt = new Date(subscription.canceled_at);
      } else subscriptionInfo.status = SubscriptionStatus$1.ACTIVE;
    else if (subscription.status === 'canceled') {
      subscriptionInfo.status = SubscriptionStatus$1.CANCELED;
      subscriptionInfo.canceledAt = new Date(subscription.canceled_at);
    } else if (subscription.status === 'trialing')
      subscriptionInfo.status = SubscriptionStatus$1.TRIALING;
    else if (subscription.status === 'paused')
      subscriptionInfo.status = SubscriptionStatus$1.PAUSED;
    else
      throw new Error(
        `Unknown Creem subscription status: ${subscription.status}`
      );
    return subscriptionInfo;
  }
  mapCreemInterval(product) {
    if (!product || !product.billing_period) throw new Error('Invalid product');
    switch (product.billing_period) {
      case 'every-month':
        return {
          interval: PaymentInterval.MONTH,
          count: 1,
        };
      case 'every-three-months':
        return {
          interval: PaymentInterval.MONTH,
          count: 3,
        };
      case 'every-six-months':
        return {
          interval: PaymentInterval.MONTH,
          count: 6,
        };
      case 'every-year':
        return {
          interval: PaymentInterval.YEAR,
          count: 1,
        };
      case 'once':
        return {
          interval: PaymentInterval.ONE_TIME,
          count: 1,
        };
      default:
        throw new Error(
          `Unknown Creem product billing period: ${product.billing_period}`
        );
    }
  }
};
//#endregion
//#region src/core/payment/paypal.ts
/**
 * PayPal payment provider implementation
 * @website https://www.paypal.com/
 */
var PayPalProvider = class {
  name = 'paypal';
  configs;
  baseUrl;
  accessToken;
  tokenExpiry;
  constructor(configs) {
    this.configs = configs;
    this.baseUrl =
      configs.environment === 'production'
        ? 'https://api-m.paypal.com'
        : 'https://api-m.sandbox.paypal.com';
  }
  /**
   * Create payment (one-time or subscription)
   */
  async createPayment({ order }) {
    try {
      await this.ensureAccessToken();
      if (!order.price) throw new Error('price is required');
      if (order.type === PaymentType.SUBSCRIPTION)
        return await this.createSubscriptionPayment(order);
      else return await this.createOneTimePayment(order);
    } catch (error) {
      throw error;
    }
  }
  /**
   * Create one-time payment
   */
  async createOneTimePayment(order) {
    const items = [
      {
        name: order.description || 'Payment',
        unit_amount: {
          currency_code: order.price.currency.toUpperCase(),
          value: (order.price.amount / 100).toFixed(2),
        },
        quantity: '1',
      },
    ];
    const totalAmount = items.reduce(
      (sum, item) => sum + parseFloat(item.unit_amount.value),
      0
    );
    const payload = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: order.orderNo,
          custom_id: order.metadata ? JSON.stringify(order.metadata) : void 0,
          items,
          amount: {
            currency_code: order.price.currency.toUpperCase(),
            value: totalAmount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: order.price.currency.toUpperCase(),
                value: totalAmount.toFixed(2),
              },
            },
          },
        },
      ],
      application_context: {
        return_url: order.successUrl,
        cancel_url: order.cancelUrl,
        user_action: 'PAY_NOW',
        brand_name: order.description,
      },
    };
    if (order.customer?.email)
      payload.payer = {
        email_address: order.customer.email,
        name: order.customer.name
          ? {
              given_name: order.customer.name.split(' ')[0],
              surname: order.customer.name.split(' ').slice(1).join(' ') || '',
            }
          : void 0,
      };
    const result = await this.makeRequest(
      '/v2/checkout/orders',
      'POST',
      payload
    );
    const approvalUrl = result.links?.find(
      (link) => link.rel === 'approve'
    )?.href;
    return {
      provider: this.name,
      checkoutParams: payload,
      checkoutInfo: {
        sessionId: result.id,
        checkoutUrl: approvalUrl,
      },
      checkoutResult: result,
      metadata: order.metadata || {},
    };
  }
  /**
   * Create subscription payment
   */
  async createSubscriptionPayment(order) {
    if (!order.plan) throw new Error('plan is required for subscription');
    const productPayload = {
      name: order.plan.name,
      description: order.plan.description || order.description,
      type: 'SERVICE',
      category: 'SOFTWARE',
    };
    const planPayload = {
      product_id: (
        await this.makeRequest('/v1/catalogs/products', 'POST', productPayload)
      ).id,
      name: order.plan.name,
      description: order.plan.description || order.description,
      billing_cycles: [
        {
          frequency: {
            interval_unit: this.mapIntervalToPayPal(order.plan.interval),
            interval_count: order.plan.intervalCount || 1,
          },
          tenure_type: 'REGULAR',
          sequence: 1,
          total_cycles: 0,
          pricing_scheme: {
            fixed_price: {
              value: (order.price.amount / 100).toFixed(2),
              currency_code: order.price.currency.toUpperCase(),
            },
          },
        },
      ],
      payment_preferences: {
        auto_bill_outstanding: true,
        setup_fee_failure_action: 'CONTINUE',
        payment_failure_threshold: 3,
      },
    };
    if (order.plan.trialPeriodDays && order.plan.trialPeriodDays > 0) {
      planPayload.billing_cycles.unshift({
        frequency: {
          interval_unit: 'DAY',
          interval_count: 1,
        },
        tenure_type: 'TRIAL',
        sequence: 0,
        total_cycles: order.plan.trialPeriodDays,
        pricing_scheme: {
          fixed_price: {
            value: '0.00',
            currency_code: order.price.currency.toUpperCase(),
          },
        },
      });
      planPayload.billing_cycles[1].sequence = 1;
    }
    const subscriptionPayload = {
      plan_id: (
        await this.makeRequest('/v1/billing/plans', 'POST', planPayload)
      ).id,
      custom_id: order.metadata ? JSON.stringify(order.metadata) : void 0,
      application_context: {
        brand_name: order.description || 'Subscription',
        locale: 'en-US',
        shipping_preference: 'NO_SHIPPING',
        user_action: 'SUBSCRIBE_NOW',
        payment_method: {
          payer_selected: 'PAYPAL',
          payee_preferred: 'IMMEDIATE_PAYMENT_REQUIRED',
        },
        return_url: order.successUrl,
        cancel_url: order.cancelUrl,
      },
    };
    if (order.customer?.email)
      subscriptionPayload.subscriber = {
        email_address: order.customer.email,
        name: order.customer.name
          ? {
              given_name: order.customer.name.split(' ')[0],
              surname: order.customer.name.split(' ').slice(1).join(' ') || '',
            }
          : void 0,
      };
    const subscriptionResponse = await this.makeRequest(
      '/v1/billing/subscriptions',
      'POST',
      subscriptionPayload
    );
    const approvalUrl = subscriptionResponse.links?.find(
      (link) => link.rel === 'approve'
    )?.href;
    return {
      provider: this.name,
      checkoutParams: subscriptionPayload,
      checkoutInfo: {
        sessionId: subscriptionResponse.id,
        checkoutUrl: approvalUrl,
      },
      checkoutResult: subscriptionResponse,
      metadata: order.metadata || {},
    };
  }
  /**
   * Get payment session by session id
   */
  async getPaymentSession({ sessionId }) {
    try {
      if (!sessionId) throw new Error('sessionId is required');
      await this.ensureAccessToken();
      try {
        let orderResult = await this.makeRequest(
          `/v2/checkout/orders/${sessionId}`,
          'GET'
        );
        if (orderResult.status === 'APPROVED') {
          console.log(
            'PayPal order is APPROVED, auto-capturing payment...',
            sessionId
          );
          orderResult = await this.makeRequest(
            `/v2/checkout/orders/${sessionId}/capture`,
            'POST'
          );
          console.log(
            'PayPal payment captured, new status:',
            orderResult.status
          );
        }
        return await this.buildPaymentSessionFromOrder(orderResult);
      } catch (orderError) {
        if (
          orderError.message?.includes('RESOURCE_NOT_FOUND') ||
          orderError.message?.includes('INVALID_RESOURCE_ID')
        ) {
          let subscriptionResult = await this.makeRequest(
            `/v1/billing/subscriptions/${sessionId}`,
            'GET'
          );
          if (subscriptionResult.status === 'APPROVED') {
            console.log(
              'PayPal subscription is APPROVED, waiting for activation...',
              sessionId
            );
            for (let i = 0; i < 5; i++) {
              await new Promise((resolve) => setTimeout(resolve, 2e3));
              subscriptionResult = await this.makeRequest(
                `/v1/billing/subscriptions/${sessionId}`,
                'GET'
              );
              console.log(
                `PayPal subscription poll ${i + 1}/5, status:`,
                subscriptionResult.status
              );
              if (subscriptionResult.status === 'ACTIVE') {
                console.log('PayPal subscription activated successfully');
                break;
              }
            }
            if (subscriptionResult.status === 'APPROVED')
              console.log(
                'PayPal subscription still APPROVED after polling, treating as success'
              );
          }
          return await this.buildPaymentSessionFromSubscription(
            subscriptionResult
          );
        }
        throw orderError;
      }
    } catch (error) {
      throw error;
    }
  }
  /**
   * Get payment event from webhook notification
   */
  async getPaymentEvent({ req }) {
    try {
      const rawBody = await req.text();
      if (!this.configs.webhookId) throw new Error('webhookId not configured');
      const event = JSON.parse(rawBody);
      if (!event || !event.event_type)
        throw new Error('Invalid webhook payload');
      await this.ensureAccessToken();
      const getHeader = (name) => {
        return (
          req.headers.get(name) ||
          req.headers.get(name.toLowerCase()) ||
          req.headers.get(name.toUpperCase()) ||
          ''
        );
      };
      const authAlgo = getHeader('paypal-auth-algo');
      const certUrl = getHeader('paypal-cert-url');
      const transmissionId = getHeader('paypal-transmission-id');
      const transmissionSig = getHeader('paypal-transmission-sig');
      const transmissionTime = getHeader('paypal-transmission-time');
      if (
        !!!(authAlgo && transmissionId && transmissionSig && transmissionTime)
      )
        throw new Error(
          'Missing PayPal webhook signature headers — rejecting event'
        );
      const verifyPayload = {
        auth_algo: authAlgo,
        cert_url: certUrl,
        transmission_id: transmissionId,
        transmission_sig: transmissionSig,
        transmission_time: transmissionTime,
        webhook_id: this.configs.webhookId,
        webhook_event: event,
      };
      const verifyResponse = await this.makeRequest(
        '/v1/notifications/verify-webhook-signature',
        'POST',
        verifyPayload
      );
      if (verifyResponse.verification_status !== 'SUCCESS')
        throw new Error(
          `Invalid PayPal webhook signature: ${verifyResponse.verification_status}`
        );
      const eventType = this.mapPayPalEventType(event.event_type);
      let paymentSession = void 0;
      if (eventType === PaymentEventType.CHECKOUT_SUCCESS)
        paymentSession = await this.buildPaymentSessionFromOrder(
          event.resource
        );
      else if (eventType === PaymentEventType.PAYMENT_SUCCESS)
        if (
          event.resource.billing_agreement_id ||
          event.resource.subscription_id
        ) {
          const subscriptionId =
            event.resource.billing_agreement_id ||
            event.resource.subscription_id;
          const subscription = await this.makeRequest(
            `/v1/billing/subscriptions/${subscriptionId}`,
            'GET'
          );
          paymentSession = await this.buildPaymentSessionFromSubscription(
            subscription,
            event.resource
          );
        } else
          paymentSession = await this.buildPaymentSessionFromCapture(
            event.resource
          );
      else if (
        eventType === PaymentEventType.SUBSCRIBE_UPDATED ||
        eventType === PaymentEventType.SUBSCRIBE_CANCELED
      )
        paymentSession = await this.buildPaymentSessionFromSubscription(
          event.resource
        );
      else if (eventType === PaymentEventType.PAYMENT_FAILED)
        paymentSession = {
          provider: this.name,
          paymentStatus: PaymentStatus.FAILED,
          paymentResult: event.resource,
        };
      return {
        eventType,
        eventResult: event,
        paymentSession,
      };
    } catch (error) {
      throw error;
    }
  }
  /**
   * Get payment invoice
   * Note: PayPal doesn't have a direct public invoice URL like Stripe.
   * The invoiceId we store is actually a capture_id or sale_id.
   * We return a link to PayPal's activity page where users can log in and view their transactions.
   */
  async getPaymentInvoice({ invoiceId }) {
    try {
      await this.ensureAccessToken();
      const activityUrl =
        this.configs.environment === 'production'
          ? 'https://www.paypal.com/myaccount/transactions'
          : 'https://www.sandbox.paypal.com/myaccount/transactions';
      try {
        const capture = await this.makeRequest(
          `/v2/payments/captures/${invoiceId}`,
          'GET'
        );
        return {
          invoiceId: capture.id,
          invoiceUrl: activityUrl,
          amount: capture.amount?.value
            ? parseFloat(capture.amount.value) * 100
            : void 0,
          currency: capture.amount?.currency_code,
        };
      } catch (captureError) {
        return {
          invoiceId,
          invoiceUrl: activityUrl,
        };
      }
    } catch (error) {
      throw error;
    }
  }
  /**
   * Get payment billing (subscription management URL)
   */
  async getPaymentBilling({ customerId: _customerId, returnUrl: _returnUrl }) {
    try {
      return {
        billingUrl:
          this.configs.environment === 'production'
            ? `https://www.paypal.com/myaccount/autopay`
            : `https://www.sandbox.paypal.com/myaccount/autopay`,
      };
    } catch (error) {
      throw error;
    }
  }
  /**
   * Cancel subscription
   */
  async cancelSubscription({ subscriptionId }) {
    try {
      if (!subscriptionId) throw new Error('subscriptionId is required');
      await this.ensureAccessToken();
      await this.makeRequest(
        `/v1/billing/subscriptions/${subscriptionId}/cancel`,
        'POST',
        { reason: 'Customer requested cancellation' }
      );
      const subscription = await this.makeRequest(
        `/v1/billing/subscriptions/${subscriptionId}`,
        'GET'
      );
      return await this.buildPaymentSessionFromSubscription(subscription);
    } catch (error) {
      throw error;
    }
  }
  /**
   * Capture an authorized payment
   */
  async capturePayment(orderId) {
    try {
      await this.ensureAccessToken();
      const result = await this.makeRequest(
        `/v2/checkout/orders/${orderId}/capture`,
        'POST'
      );
      return await this.buildPaymentSessionFromOrder(result);
    } catch (error) {
      throw error;
    }
  }
  async ensureAccessToken() {
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry)
      return;
    const credentials = Buffer.from(
      `${this.configs.clientId}:${this.configs.clientSecret}`
    ).toString('base64');
    const data = await (
      await fetch(`${this.baseUrl}/v1/oauth2/token`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      })
    ).json();
    if (data.error)
      throw new Error(
        `PayPal authentication failed: ${data.error_description}`
      );
    this.accessToken = data.access_token;
    this.tokenExpiry = Date.now() + data.expires_in * 1e3;
  }
  async makeRequest(endpoint, method, data) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
    };
    if (data) config.body = JSON.stringify(data);
    const response = await fetch(url, config);
    if (response.status === 204) return {};
    if (!response.ok) {
      const result = await response.json();
      let errorMessage = result.name || result.error || 'Unknown error';
      if (result.details)
        errorMessage += `: ${result.details.map((detail) => detail.issue || detail.description).join(', ')}`;
      if (result.message) errorMessage += `: ${result.message}`;
      throw new Error(`PayPal request failed: ${errorMessage}`);
    }
    return await response.json();
  }
  mapPayPalEventType(eventType) {
    switch (eventType) {
      case 'CHECKOUT.ORDER.APPROVED':
      case 'CHECKOUT.ORDER.COMPLETED':
        return PaymentEventType.CHECKOUT_SUCCESS;
      case 'PAYMENT.CAPTURE.COMPLETED':
      case 'PAYMENT.SALE.COMPLETED':
        return PaymentEventType.PAYMENT_SUCCESS;
      case 'PAYMENT.CAPTURE.DENIED':
      case 'PAYMENT.CAPTURE.DECLINED':
      case 'PAYMENT.SALE.DENIED':
        return PaymentEventType.PAYMENT_FAILED;
      case 'PAYMENT.CAPTURE.REFUNDED':
      case 'PAYMENT.SALE.REFUNDED':
        return PaymentEventType.PAYMENT_REFUNDED;
      case 'BILLING.SUBSCRIPTION.ACTIVATED':
      case 'BILLING.SUBSCRIPTION.UPDATED':
      case 'BILLING.SUBSCRIPTION.RE-ACTIVATED':
        return PaymentEventType.SUBSCRIBE_UPDATED;
      case 'BILLING.SUBSCRIPTION.CANCELLED':
      case 'BILLING.SUBSCRIPTION.SUSPENDED':
      case 'BILLING.SUBSCRIPTION.EXPIRED':
        return PaymentEventType.SUBSCRIBE_CANCELED;
      case 'PAYMENT.SALE.COMPLETED':
        return PaymentEventType.PAYMENT_SUCCESS;
      default:
        throw new Error(`Unknown PayPal event type: ${eventType}`);
    }
  }
  mapPayPalStatus(status) {
    switch (status) {
      case 'CREATED':
      case 'SAVED':
      case 'PAYER_ACTION_REQUIRED':
        return PaymentStatus.PROCESSING;
      case 'APPROVED':
        return PaymentStatus.PROCESSING;
      case 'COMPLETED':
      case 'CAPTURED':
      case 'ACTIVE':
        return PaymentStatus.SUCCESS;
      case 'VOIDED':
      case 'CANCELLED':
      case 'CANCELED':
      case 'EXPIRED':
        return PaymentStatus.CANCELED;
      case 'DENIED':
      case 'DECLINED':
      case 'FAILED':
      case 'SUSPENDED':
        return PaymentStatus.FAILED;
      default:
        return PaymentStatus.PROCESSING;
    }
  }
  mapPayPalSubscriptionStatus(status) {
    switch (status) {
      case 'ACTIVE':
        return SubscriptionStatus$1.ACTIVE;
      case 'APPROVAL_PENDING':
      case 'APPROVED':
        return SubscriptionStatus$1.ACTIVE;
      case 'CANCELLED':
        return SubscriptionStatus$1.CANCELED;
      case 'SUSPENDED':
        return SubscriptionStatus$1.PAUSED;
      case 'EXPIRED':
        return SubscriptionStatus$1.EXPIRED;
      default:
        return SubscriptionStatus$1.ACTIVE;
    }
  }
  mapIntervalToPayPal(interval) {
    switch (interval) {
      case PaymentInterval.DAY:
        return 'DAY';
      case PaymentInterval.WEEK:
        return 'WEEK';
      case PaymentInterval.MONTH:
        return 'MONTH';
      case PaymentInterval.YEAR:
        return 'YEAR';
      default:
        return 'MONTH';
    }
  }
  mapPayPalIntervalToInternal(interval) {
    switch (interval?.toUpperCase()) {
      case 'DAY':
        return PaymentInterval.DAY;
      case 'WEEK':
        return PaymentInterval.WEEK;
      case 'MONTH':
        return PaymentInterval.MONTH;
      case 'YEAR':
        return PaymentInterval.YEAR;
      default:
        return PaymentInterval.MONTH;
    }
  }
  async buildPaymentSessionFromOrder(order) {
    const purchaseUnit = order.purchase_units?.[0];
    const payer = order.payer;
    const capture = purchaseUnit?.payments?.captures?.[0];
    const breakdown = purchaseUnit?.amount?.breakdown;
    let metadata = {};
    if (purchaseUnit?.custom_id)
      try {
        metadata = JSON.parse(purchaseUnit.custom_id);
      } catch {
        metadata = { custom_id: purchaseUnit.custom_id };
      }
    const discountValue = breakdown?.discount?.value
      ? parseFloat(breakdown.discount.value)
      : 0;
    const discountCurrency =
      breakdown?.discount?.currency_code ||
      purchaseUnit?.amount?.currency_code ||
      capture?.amount?.currency_code ||
      '';
    let paymentValue = 0;
    let paymentCurrency = '';
    if (capture?.amount?.value) {
      paymentValue = parseFloat(capture.amount.value);
      paymentCurrency = capture.amount.currency_code || '';
    } else if (purchaseUnit?.amount?.value) {
      paymentValue = parseFloat(purchaseUnit.amount.value);
      paymentCurrency = purchaseUnit.amount.currency_code || '';
    }
    return {
      provider: this.name,
      paymentStatus: this.mapPayPalStatus(order.status),
      paymentInfo: {
        transactionId: order.id,
        discountCode: '',
        discountAmount: Math.round(discountValue * 100),
        discountCurrency: discountCurrency || paymentCurrency,
        paymentAmount: Math.round(paymentValue * 100),
        paymentCurrency,
        paymentEmail: payer?.email_address,
        paymentUserName: payer?.name
          ? `${payer.name.given_name || ''} ${payer.name.surname || ''}`.trim()
          : void 0,
        paymentUserId: payer?.payer_id,
        paidAt: capture?.create_time
          ? new Date(capture.create_time)
          : order.create_time
            ? new Date(order.create_time)
            : void 0,
        invoiceId: capture?.id,
      },
      paymentResult: order,
      metadata,
    };
  }
  async buildPaymentSessionFromCapture(capture) {
    const breakdown = capture.seller_receivable_breakdown;
    const discountValue = breakdown?.discount?.value
      ? parseFloat(breakdown.discount.value)
      : 0;
    const discountCurrency =
      breakdown?.discount?.currency_code || capture.amount?.currency_code || '';
    const paymentValue = capture.amount?.value
      ? parseFloat(capture.amount.value)
      : 0;
    const paymentCurrency = capture.amount?.currency_code || '';
    let metadata = {};
    if (capture.custom_id)
      try {
        metadata = JSON.parse(capture.custom_id);
      } catch {
        metadata = { custom_id: capture.custom_id };
      }
    const orderId = capture.supplementary_data?.related_ids?.order_id;
    if (orderId && !metadata.order_no)
      try {
        const purchaseUnit = (
          await this.makeRequest(`/v2/checkout/orders/${orderId}`, 'GET')
        ).purchase_units?.[0];
        if (purchaseUnit?.custom_id)
          try {
            metadata = JSON.parse(purchaseUnit.custom_id);
          } catch {
            metadata = { custom_id: purchaseUnit.custom_id };
          }
      } catch (e) {
        console.log('Failed to fetch order for metadata:', e);
      }
    return {
      provider: this.name,
      paymentStatus: this.mapPayPalStatus(capture.status),
      paymentInfo: {
        transactionId: capture.id,
        discountCode: '',
        discountAmount: Math.round(discountValue * 100),
        discountCurrency,
        paymentAmount: Math.round(paymentValue * 100),
        paymentCurrency,
        paidAt: capture.create_time ? new Date(capture.create_time) : void 0,
        invoiceId: capture.id,
      },
      paymentResult: capture,
      metadata,
    };
  }
  async buildPaymentSessionFromSubscription(subscription, saleEvent) {
    let metadata = {};
    if (subscription.custom_id)
      try {
        metadata = JSON.parse(subscription.custom_id);
      } catch {
        metadata = { custom_id: subscription.custom_id };
      }
    const billingInfo = subscription.billing_info;
    const lastPayment = billingInfo?.last_payment;
    const subscriber = subscription.subscriber;
    let paymentAmount = 0;
    let paymentCurrency = '';
    let discountAmount = 0;
    let discountCurrency = '';
    let paidAt;
    let transactionId = subscription.id;
    if (saleEvent) {
      const breakdown = saleEvent.seller_receivable_breakdown;
      discountAmount = breakdown?.discount?.value
        ? Math.round(parseFloat(breakdown.discount.value) * 100)
        : 0;
      discountCurrency =
        breakdown?.discount?.currency_code ||
        saleEvent.amount?.currency_code ||
        '';
      paymentAmount = saleEvent.amount?.value
        ? Math.round(parseFloat(saleEvent.amount.value) * 100)
        : 0;
      paymentCurrency = saleEvent.amount?.currency_code || '';
      paidAt = saleEvent.create_time ? new Date(saleEvent.create_time) : void 0;
      transactionId = saleEvent.id;
    } else if (lastPayment) {
      paymentAmount = lastPayment.amount?.value
        ? Math.round(parseFloat(lastPayment.amount.value) * 100)
        : 0;
      paymentCurrency = lastPayment.amount?.currency_code || '';
      paidAt = lastPayment.time ? new Date(lastPayment.time) : void 0;
    }
    const subscriptionPaymentStatus =
      subscription.status === 'APPROVED' || subscription.status === 'ACTIVE'
        ? PaymentStatus.SUCCESS
        : this.mapPayPalStatus(subscription.status);
    return {
      provider: this.name,
      paymentStatus: subscriptionPaymentStatus,
      paymentInfo: {
        transactionId,
        discountCode: '',
        discountAmount,
        discountCurrency: discountCurrency || paymentCurrency,
        paymentAmount,
        paymentCurrency,
        paymentEmail: subscriber?.email_address,
        paymentUserName: subscriber?.name
          ? `${subscriber.name.given_name || ''} ${subscriber.name.surname || ''}`.trim()
          : void 0,
        paymentUserId: subscriber?.payer_id,
        paidAt,
        invoiceId: saleEvent?.id || lastPayment?.id,
        subscriptionCycleType: saleEvent
          ? billingInfo?.cycle_executions?.[0]?.cycles_completed === 1
            ? SubscriptionCycleType.CREATE
            : SubscriptionCycleType.RENEWAL
          : void 0,
      },
      paymentResult: saleEvent || subscription,
      subscriptionId: subscription.id,
      subscriptionInfo: await this.buildSubscriptionInfo(subscription),
      subscriptionResult: subscription,
      metadata,
    };
  }
  async buildSubscriptionInfo(subscription) {
    const billingInfo = subscription.billing_info;
    let planDetails = null;
    if (subscription.plan_id)
      try {
        planDetails = await this.makeRequest(
          `/v1/billing/plans/${subscription.plan_id}`,
          'GET'
        );
      } catch {}
    const billingCycle = planDetails?.billing_cycles?.find(
      (cycle) => cycle.tenure_type === 'REGULAR'
    );
    const interval = billingCycle?.frequency?.interval_unit
      ? this.mapPayPalIntervalToInternal(billingCycle.frequency.interval_unit)
      : PaymentInterval.MONTH;
    const intervalCount = billingCycle?.frequency?.interval_count || 1;
    const currentPeriodStart = billingInfo?.last_payment?.time
      ? new Date(billingInfo.last_payment.time)
      : new Date(subscription.start_time || subscription.create_time);
    let currentPeriodEnd;
    if (billingInfo?.next_billing_time)
      currentPeriodEnd = new Date(billingInfo.next_billing_time);
    else {
      currentPeriodEnd = new Date(currentPeriodStart);
      switch (interval) {
        case PaymentInterval.DAY:
          currentPeriodEnd.setDate(currentPeriodEnd.getDate() + intervalCount);
          break;
        case PaymentInterval.WEEK:
          currentPeriodEnd.setDate(
            currentPeriodEnd.getDate() + intervalCount * 7
          );
          break;
        case PaymentInterval.MONTH:
          currentPeriodEnd.setMonth(
            currentPeriodEnd.getMonth() + intervalCount
          );
          break;
        case PaymentInterval.YEAR:
          currentPeriodEnd.setFullYear(
            currentPeriodEnd.getFullYear() + intervalCount
          );
          break;
        default:
          currentPeriodEnd.setMonth(currentPeriodEnd.getMonth() + 1);
      }
    }
    const subscriptionInfo = {
      subscriptionId: subscription.id,
      productId: planDetails?.product_id,
      planId: subscription.plan_id,
      description: planDetails?.name || subscription.plan_id,
      amount: billingCycle?.pricing_scheme?.fixed_price?.value
        ? parseFloat(billingCycle.pricing_scheme.fixed_price.value) * 100
        : billingInfo?.last_payment?.amount?.value
          ? parseFloat(billingInfo.last_payment.amount.value) * 100
          : 0,
      currency:
        billingCycle?.pricing_scheme?.fixed_price?.currency_code ||
        billingInfo?.last_payment?.amount?.currency_code ||
        'USD',
      interval,
      intervalCount,
      currentPeriodStart,
      currentPeriodEnd,
      metadata: subscription.custom_id
        ? (() => {
            try {
              return JSON.parse(subscription.custom_id);
            } catch {
              return { custom_id: subscription.custom_id };
            }
          })()
        : {},
      status: this.mapPayPalSubscriptionStatus(subscription.status),
    };
    if (
      subscription.status === 'CANCELLED' ||
      subscription.status === 'SUSPENDED'
    ) {
      subscriptionInfo.canceledAt = subscription.status_update_time
        ? new Date(subscription.status_update_time)
        : void 0;
      subscriptionInfo.canceledReason = subscription.status_change_note || '';
    }
    return subscriptionInfo;
  }
};
//#endregion
//#region src/core/payment/alipay.ts
/**
 * Alipay payment provider implementation
 * @docs https://opendocs.alipay.com/open/028r8t
 */
var AlipayProvider = class {
  name = 'alipay';
  configs;
  gateway;
  constructor(configs) {
    this.configs = configs;
    this.gateway = 'https://openapi.alipay.com/gateway.do';
  }
  /**
   * Create payment — generates Alipay PC payment page URL
   * Uses alipay.trade.page.pay for desktop or alipay.trade.wap.pay for mobile
   */
  async createPayment({ order }) {
    if (!order.price) throw new Error('Price is required for Alipay payment');
    const outTradeNo = order.orderNo || `ALI${Date.now()}`;
    const totalAmount = (order.price.amount / 100).toFixed(2);
    const bizContent = {
      out_trade_no: outTradeNo,
      total_amount: totalAmount,
      subject: order.description || 'Her Subscription',
      product_code: 'FAST_INSTANT_TRADE_PAY',
      passback_params: order.metadata
        ? encodeURIComponent(JSON.stringify(order.metadata))
        : void 0,
    };
    const params = this.buildRequestParams('alipay.trade.page.pay', bizContent);
    const baseReturnUrl = order.successUrl || this.configs.returnUrl || '';
    if (baseReturnUrl)
      params.return_url = `${baseReturnUrl}${baseReturnUrl.includes('?') ? '&' : '?'}order_no=${outTradeNo}`;
    if (this.configs.notifyUrl) params.notify_url = this.configs.notifyUrl;
    const signedParams = this.signParams(params);
    const checkoutUrl = `${this.gateway}?${new URLSearchParams(signedParams).toString()}`;
    return {
      provider: this.name,
      checkoutParams: signedParams,
      checkoutInfo: {
        sessionId: outTradeNo,
        checkoutUrl,
      },
      checkoutResult: {
        outTradeNo,
        totalAmount,
      },
      metadata: order.metadata || {},
    };
  }
  /**
   * Get payment session by querying Alipay trade status
   */
  async getPaymentSession({ sessionId }) {
    const bizContent = { out_trade_no: sessionId };
    const response = (await this.execute('alipay.trade.query', bizContent))
      .alipay_trade_query_response;
    if (!response || response.code !== '10000')
      throw new Error(
        response?.sub_msg || response?.msg || 'Query payment failed'
      );
    return {
      provider: this.name,
      paymentStatus: this.mapAlipayStatus(response.trade_status),
      paymentInfo: {
        transactionId: response.trade_no,
        amount: Math.round(parseFloat(response.total_amount) * 100),
        currency: 'cny',
        paymentAmount: Math.round(
          parseFloat(response.buyer_pay_amount || response.total_amount) * 100
        ),
        paymentCurrency: 'cny',
        paymentUserId: response.buyer_user_id,
        paymentEmail: response.buyer_logon_id,
        paidAt: response.send_pay_date
          ? new Date(response.send_pay_date)
          : void 0,
      },
      paymentResult: response,
      metadata: response.passback_params
        ? JSON.parse(decodeURIComponent(response.passback_params))
        : void 0,
    };
  }
  /**
   * Handle Alipay async notification (webhook)
   */
  async getPaymentEvent({ req }) {
    const body = await req.text();
    const params = Object.fromEntries(new URLSearchParams(body));
    if (!this.verifySignature(params))
      throw new Error('Invalid Alipay notification signature');
    const tradeStatus = params.trade_status;
    let eventType;
    switch (tradeStatus) {
      case 'TRADE_SUCCESS':
      case 'TRADE_FINISHED':
        eventType = PaymentEventType.PAYMENT_SUCCESS;
        break;
      case 'TRADE_CLOSED':
        eventType = PaymentEventType.PAYMENT_FAILED;
        break;
      default:
        throw new Error(`Unhandled Alipay trade status: ${tradeStatus}`);
    }
    const metadata = params.passback_params
      ? JSON.parse(decodeURIComponent(params.passback_params))
      : void 0;
    const paymentSession = {
      provider: this.name,
      paymentStatus:
        eventType === PaymentEventType.PAYMENT_SUCCESS
          ? PaymentStatus.SUCCESS
          : PaymentStatus.FAILED,
      paymentInfo: {
        transactionId: params.trade_no,
        amount: Math.round(parseFloat(params.total_amount) * 100),
        currency: 'cny',
        paymentAmount: Math.round(
          parseFloat(params.buyer_pay_amount || params.total_amount) * 100
        ),
        paymentCurrency: 'cny',
        paymentUserId: params.buyer_id,
        paymentEmail: params.buyer_logon_id,
        paidAt: params.gmt_payment ? new Date(params.gmt_payment) : void 0,
      },
      paymentResult: params,
      metadata,
    };
    return {
      eventType,
      eventResult: params,
      paymentSession,
    };
  }
  /**
   * Execute an Alipay API call
   */
  async execute(method, bizContent) {
    const params = this.buildRequestParams(method, bizContent);
    if (this.configs.notifyUrl) params.notify_url = this.configs.notifyUrl;
    const signedParams = this.signParams(params);
    return await (
      await fetch(this.gateway, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(signedParams).toString(),
      })
    ).json();
  }
  /**
   * Build common request parameters
   */
  buildRequestParams(method, bizContent) {
    return {
      app_id: this.configs.appId,
      method,
      format: 'JSON',
      charset: 'utf-8',
      sign_type: this.configs.signType || 'RSA2',
      timestamp: this.formatTimestamp(/* @__PURE__ */ new Date()),
      version: '1.0',
      biz_content: JSON.stringify(bizContent),
    };
  }
  /**
   * Sign parameters with RSA2
   */
  signParams(params) {
    const signStr = Object.keys(params)
      .sort()
      .filter((k) => params[k] !== void 0 && params[k] !== '')
      .map((k) => `${k}=${params[k]}`)
      .join('&');
    const algorithm =
      (this.configs.signType || 'RSA2') === 'RSA2'
        ? 'SHA256withRSA'
        : 'SHA1withRSA';
    const sign = crypto$1
      .createSign(algorithm === 'SHA256withRSA' ? 'RSA-SHA256' : 'RSA-SHA1')
      .update(signStr, 'utf-8')
      .sign(this.normalizePrivateKey(this.configs.privateKey), 'base64');
    return {
      ...params,
      sign,
    };
  }
  /**
   * Verify Alipay notification signature
   */
  verifySignature(params) {
    const sign = params.sign;
    const signType = params.sign_type || this.configs.signType || 'RSA2';
    if (!sign) return false;
    const signStr = Object.keys(params)
      .filter((k) => k !== 'sign' && k !== 'sign_type')
      .sort()
      .filter((k) => params[k] !== void 0 && params[k] !== '')
      .map((k) => `${k}=${params[k]}`)
      .join('&');
    const algorithm = signType === 'RSA2' ? 'RSA-SHA256' : 'RSA-SHA1';
    return crypto$1
      .createVerify(algorithm)
      .update(signStr, 'utf-8')
      .verify(
        this.normalizePublicKey(this.configs.alipayPublicKey),
        sign,
        'base64'
      );
  }
  mapAlipayStatus(status) {
    switch (status) {
      case 'TRADE_SUCCESS':
      case 'TRADE_FINISHED':
        return PaymentStatus.SUCCESS;
      case 'TRADE_CLOSED':
        return PaymentStatus.CANCELED;
      case 'WAIT_BUYER_PAY':
        return PaymentStatus.PROCESSING;
      default:
        return PaymentStatus.PROCESSING;
    }
  }
  formatTimestamp(date) {
    const pad = (n) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  }
  normalizePrivateKey(key) {
    if (key.includes('-----BEGIN')) return key;
    return `-----BEGIN RSA PRIVATE KEY-----\n${key}\n-----END RSA PRIVATE KEY-----`;
  }
  normalizePublicKey(key) {
    if (key.includes('-----BEGIN')) return key;
    return `-----BEGIN PUBLIC KEY-----\n${key}\n-----END PUBLIC KEY-----`;
  }
};
//#endregion
//#region src/core/payment/wechat.ts
/**
 * WeChat Pay (Native) provider — V3 API
 * Uses Native Pay (扫码支付) to generate a QR code URL.
 *
 * @docs https://pay.weixin.qq.com/doc/v3/merchant/4012791858
 */
var WechatPayProvider = class {
  name = 'wechat';
  configs;
  baseUrl = 'https://api.mch.weixin.qq.com';
  constructor(configs) {
    this.configs = configs;
  }
  /**
   * Create payment — Native Pay (returns a code_url for QR code)
   */
  async createPayment({ order }) {
    if (!order.price) throw new Error('Price is required for WeChat payment');
    const outTradeNo = order.orderNo || `WX${Date.now()}`;
    const payload = {
      appid: this.configs.appId,
      mchid: this.configs.mchId,
      description: order.description || 'Her Subscription',
      out_trade_no: outTradeNo,
      notify_url: this.configs.notifyUrl || '',
      amount: {
        total: order.price.amount,
        currency: 'CNY',
      },
      attach: order.metadata ? JSON.stringify(order.metadata) : void 0,
    };
    const result = await this.request(
      'POST',
      '/v3/pay/transactions/native',
      payload
    );
    if (!result.code_url)
      throw new Error(result.message || 'WeChat Pay create order failed');
    const qrPageUrl = `/payment/wechat-qr?code_url=${encodeURIComponent(result.code_url)}&order_no=${outTradeNo}&amount=${order.price.amount}`;
    return {
      provider: this.name,
      checkoutParams: payload,
      checkoutInfo: {
        sessionId: outTradeNo,
        checkoutUrl: qrPageUrl,
      },
      checkoutResult: result,
      metadata: order.metadata || {},
    };
  }
  /**
   * Query payment status
   */
  async getPaymentSession({ sessionId }) {
    const result = await this.request(
      'GET',
      `/v3/pay/transactions/out-trade-no/${sessionId}?mchid=${this.configs.mchId}`
    );
    if (!result.trade_state)
      throw new Error(result.message || 'Query payment failed');
    return {
      provider: this.name,
      paymentStatus: this.mapTradeState(result.trade_state),
      paymentInfo: {
        transactionId: result.transaction_id,
        amount: result.amount?.total,
        currency: 'cny',
        paymentAmount: result.amount?.payer_total || result.amount?.total,
        paymentCurrency: 'cny',
        paymentUserId: result.payer?.openid,
        paidAt: result.success_time ? new Date(result.success_time) : void 0,
      },
      paymentResult: result,
      metadata: result.attach ? JSON.parse(result.attach) : void 0,
    };
  }
  /**
   * Handle WeChat Pay V3 webhook notification
   */
  async getPaymentEvent({ req }) {
    const body = await req.text();
    const timestamp = req.headers.get('Wechatpay-Timestamp') || '';
    const nonce = req.headers.get('Wechatpay-Nonce') || '';
    const signature = req.headers.get('Wechatpay-Signature') || '';
    if (!timestamp || !nonce || !signature)
      throw new Error('Missing WeChat Pay webhook headers');
    if (!this.configs.platformCert)
      throw new Error(
        'WeChat platform certificate not configured — refusing webhook'
      );
    const tsNum = parseInt(timestamp, 10);
    const nowSec = Math.floor(Date.now() / 1e3);
    if (!Number.isFinite(tsNum) || Math.abs(nowSec - tsNum) > 300)
      throw new Error('WeChat webhook timestamp outside acceptable window');
    const signedPayload = `${timestamp}\n${nonce}\n${body}\n`;
    let sigOk = false;
    try {
      sigOk = crypto$1
        .createVerify('RSA-SHA256')
        .update(signedPayload)
        .verify(
          this.normalizePlatformCert(this.configs.platformCert),
          signature,
          'base64'
        );
    } catch (e) {
      sigOk = false;
    }
    if (!sigOk) throw new Error('Invalid WeChat webhook signature');
    const notification = JSON.parse(body);
    const resource = notification.resource;
    if (!resource) throw new Error('Invalid webhook payload');
    const decrypted = this.decryptResource(resource);
    const trade = JSON.parse(decrypted);
    return {
      eventType:
        notification.event_type === 'TRANSACTION.SUCCESS'
          ? PaymentEventType.PAYMENT_SUCCESS
          : PaymentEventType.PAYMENT_FAILED,
      eventResult: notification,
      paymentSession: {
        provider: this.name,
        paymentStatus: this.mapTradeState(trade.trade_state),
        paymentInfo: {
          transactionId: trade.transaction_id,
          amount: trade.amount?.total,
          currency: 'cny',
          paymentAmount: trade.amount?.payer_total || trade.amount?.total,
          paymentCurrency: 'cny',
          paymentUserId: trade.payer?.openid,
          paidAt: trade.success_time ? new Date(trade.success_time) : void 0,
        },
        paymentResult: trade,
        metadata: trade.attach ? JSON.parse(trade.attach) : void 0,
      },
    };
  }
  async request(method, path, body) {
    const timestamp = Math.floor(Date.now() / 1e3).toString();
    const nonce = crypto$1.randomBytes(16).toString('hex');
    const bodyStr = body ? JSON.stringify(body) : '';
    const signStr = `${method}\n${path}\n${timestamp}\n${nonce}\n${bodyStr}\n`;
    const sign = crypto$1
      .createSign('RSA-SHA256')
      .update(signStr)
      .sign(this.normalizePrivateKey(this.configs.privateKey), 'base64');
    const authorization = `WECHATPAY2-SHA256-RSA2048 mchid="${this.configs.mchId}",nonce_str="${nonce}",signature="${sign}",timestamp="${timestamp}",serial_no="${this.configs.serialNo}"`;
    const url = `${this.baseUrl}${path}`;
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: authorization,
      },
      body: body ? bodyStr : void 0,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `WeChat Pay API error: ${res.status}`);
    }
    if (res.status === 204) return {};
    return await res.json();
  }
  /**
   * Decrypt V3 notification resource using AES-256-GCM
   */
  decryptResource(resource) {
    const key = Buffer.from(this.configs.apiV3Key, 'utf-8');
    const iv = Buffer.from(resource.nonce, 'utf-8');
    const ciphertext = Buffer.from(resource.ciphertext, 'base64');
    const aad = resource.associated_data
      ? Buffer.from(resource.associated_data, 'utf-8')
      : Buffer.alloc(0);
    const authTag = ciphertext.subarray(ciphertext.length - 16);
    const data = ciphertext.subarray(0, ciphertext.length - 16);
    const decipher = crypto$1.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(authTag);
    if (aad.length > 0) decipher.setAAD(aad);
    return Buffer.concat([decipher.update(data), decipher.final()]).toString(
      'utf-8'
    );
  }
  mapTradeState(state) {
    switch (state) {
      case 'SUCCESS':
        return PaymentStatus.SUCCESS;
      case 'CLOSED':
      case 'REVOKED':
        return PaymentStatus.CANCELED;
      case 'PAYERROR':
        return PaymentStatus.FAILED;
      case 'NOTPAY':
      case 'USERPAYING':
        return PaymentStatus.PROCESSING;
      default:
        return PaymentStatus.PROCESSING;
    }
  }
  normalizePrivateKey(key) {
    if (key.includes('-----BEGIN')) return key;
    return `-----BEGIN PRIVATE KEY-----\n${key}\n-----END PRIVATE KEY-----`;
  }
  normalizePlatformCert(cert) {
    if (cert.includes('-----BEGIN')) return cert;
    return `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----`;
  }
};
//#endregion
//#region src/core/payment/index.ts
/**
 * Payment manager to manage all payment providers
 */
var PaymentManager = class {
  providers = [];
  defaultProvider;
  addProvider(provider, isDefault = false) {
    this.providers.push(provider);
    if (isDefault) this.defaultProvider = provider;
  }
  getProvider(name) {
    const provider = this.providers.find((p) => p.name === name);
    if (!provider && this.defaultProvider) return this.defaultProvider;
    return provider;
  }
  getProviderNames() {
    return this.providers.map((p) => p.name);
  }
  getDefaultProvider() {
    if (!this.defaultProvider && this.providers.length > 0)
      this.defaultProvider = this.providers[0];
    return this.defaultProvider;
  }
  async createPayment({ order, provider }) {
    if (provider) {
      const providerInstance = this.getProvider(provider);
      if (!providerInstance)
        throw new Error(`Payment provider '${provider}' not found`);
      return providerInstance.createPayment({ order });
    }
    const defaultProvider = this.getDefaultProvider();
    if (!defaultProvider) throw new Error('No payment provider configured');
    return defaultProvider.createPayment({ order });
  }
  async getPaymentSession({ sessionId, provider }) {
    if (provider) {
      const providerInstance = this.getProvider(provider);
      if (!providerInstance)
        throw new Error(`Payment provider '${provider}' not found`);
      return providerInstance.getPaymentSession({ sessionId });
    }
    const defaultProvider = this.getDefaultProvider();
    if (!defaultProvider) throw new Error('No payment provider configured');
    return defaultProvider.getPaymentSession({ sessionId });
  }
  async getPaymentEvent({ req, provider }) {
    if (provider) {
      const providerInstance = this.getProvider(provider);
      if (!providerInstance)
        throw new Error(`Payment provider '${provider}' not found`);
      return providerInstance.getPaymentEvent({ req });
    }
    const defaultProvider = this.getDefaultProvider();
    if (!defaultProvider) throw new Error('No payment provider configured');
    return defaultProvider.getPaymentEvent({ req });
  }
};
new PaymentManager();
//#endregion
//#region src/modules/subscriptions/service.ts
var SubscriptionStatus = /* @__PURE__ */ (function (SubscriptionStatus) {
  SubscriptionStatus['PENDING'] = 'pending';
  SubscriptionStatus['ACTIVE'] = 'active';
  SubscriptionStatus['CANCELED'] = 'canceled';
  SubscriptionStatus['PENDING_CANCEL'] = 'pending_cancel';
  SubscriptionStatus['TRIALING'] = 'trialing';
  SubscriptionStatus['EXPIRED'] = 'expired';
  SubscriptionStatus['PAUSED'] = 'paused';
  return SubscriptionStatus;
})({});
async function updateBySubscriptionNo(subscriptionNo, data) {
  const [result] = await db()
    .update(subscription)
    .set(data)
    .where(eq(subscription.subscriptionNo, subscriptionNo))
    .returning();
  return result;
}
async function findBySubscriptionNo(subscriptionNo) {
  const [result] = await db()
    .select()
    .from(subscription)
    .where(eq(subscription.subscriptionNo, subscriptionNo));
  return result;
}
async function findByProviderSubscriptionId(params) {
  const [result] = await db()
    .select()
    .from(subscription)
    .where(
      and(
        eq(subscription.paymentProvider, params.provider),
        eq(subscription.subscriptionId, params.subscriptionId)
      )
    );
  return result;
}
async function getCurrentSubscription(userId) {
  const [result] = await db()
    .select()
    .from(subscription)
    .where(
      and(
        eq(subscription.userId, userId),
        inArray(subscription.status, ['active', 'pending_cancel', 'trialing'])
      )
    )
    .orderBy(desc(subscription.createdAt))
    .limit(1);
  return result;
}
//#endregion
//#region src/modules/payment/service.ts
var manager = null;
var managerConfigHash = '';
async function getPaymentManager() {
  const configs = await getAllConfigs();
  const c = (key) => configs[key] || '';
  const hash = JSON.stringify([
    c('stripe_secret_key') || c('stripe_api_key'),
    c('creem_enabled'),
    c('creem_api_key'),
    c('alipay_app_id'),
    c('wechat_mch_id'),
    c('default_payment_provider'),
  ]);
  if (manager && hash === managerConfigHash) return manager;
  manager = new PaymentManager();
  managerConfigHash = hash;
  const stripeKey = c('stripe_secret_key') || c('stripe_api_key');
  if (stripeKey) {
    const isDefault =
      !c('default_payment_provider') ||
      c('default_payment_provider') === 'stripe';
    manager.addProvider(
      new StripeProvider({
        secretKey: stripeKey,
        publishableKey: c('stripe_publishable_key'),
        signingSecret:
          c('stripe_signing_secret') || c('stripe_webhook_secret') || void 0,
        allowPromotionCodes: true,
        allowedPaymentMethods: ['card', 'wechat_pay', 'alipay'],
      }),
      isDefault
    );
  }
  if (c('creem_enabled') === 'true' && c('creem_api_key')) {
    const isDefault = c('default_payment_provider') === 'creem';
    manager.addProvider(
      new CreemProvider({
        apiKey: c('creem_api_key'),
        signingSecret: c('creem_signing_secret') || void 0,
        environment:
          c('creem_environment') === 'production' ? 'production' : 'sandbox',
      }),
      isDefault
    );
  }
  if (c('alipay_app_id') && c('alipay_private_key')) {
    const isDefault = c('default_payment_provider') === 'alipay';
    manager.addProvider(
      new AlipayProvider({
        appId: c('alipay_app_id'),
        privateKey: c('alipay_private_key'),
        alipayPublicKey: c('alipay_public_key'),
        notifyUrl: c('alipay_notify_url') || void 0,
      }),
      isDefault
    );
  }
  if (c('wechat_mch_id') && c('wechat_private_key')) {
    const isDefault = c('default_payment_provider') === 'wechat';
    manager.addProvider(
      new WechatPayProvider({
        appId: c('wechat_app_id'),
        mchId: c('wechat_mch_id'),
        apiV3Key: c('wechat_api_v3_key'),
        privateKey: c('wechat_private_key'),
        serialNo: c('wechat_serial_no'),
        notifyUrl: c('wechat_notify_url') || void 0,
        platformCert: c('wechat_platform_cert') || void 0,
      }),
      isDefault
    );
  }
  return manager;
}
async function createCheckout(params) {
  const {
    userId,
    userEmail,
    paymentOrder,
    provider,
    productName,
    planName,
    credits,
    creditsValidDays,
  } = params;
  const pm = await getPaymentManager();
  const orderNo = getUniSeq('ORD');
  const configs = await getAllConfigs();
  const appUrl = configs.app_url || 'http://localhost:3000';
  const resolvedProvider = provider || pm.getDefaultProvider()?.name;
  let resolvedProductId = paymentOrder.productId;
  if (resolvedProvider === 'creem' && paymentOrder.productId) {
    const mapping = configs.creem_product_ids_mapping;
    if (mapping)
      try {
        const map = JSON.parse(mapping);
        if (map[paymentOrder.productId])
          resolvedProductId = map[paymentOrder.productId];
      } catch {}
  }
  const finalSuccessUrl =
    paymentOrder.successUrl || `${appUrl}/settings/billing?success=1`;
  const callbackSuccessUrl = `${appUrl}/api/payment/callback?order_no=${orderNo}&redirect=${encodeURIComponent(finalSuccessUrl)}`;
  const session = await pm.createPayment({
    order: {
      ...paymentOrder,
      productId: resolvedProductId,
      orderNo,
      successUrl: callbackSuccessUrl,
      cancelUrl:
        paymentOrder.cancelUrl || `${appUrl}/settings/billing?canceled=1`,
    },
    provider,
  });
  await db()
    .insert(order)
    .values({
      id: getUuid(),
      orderNo,
      userId,
      userEmail: userEmail || '',
      status: 'created',
      amount: paymentOrder.price?.amount || 0,
      currency: paymentOrder.price?.currency || 'usd',
      productId: paymentOrder.productId || '',
      productName: productName || null,
      planName: planName || null,
      creditsAmount: credits ?? null,
      creditsValidDays: creditsValidDays ?? null,
      paymentType: paymentOrder.type || 'one-time',
      paymentProvider: session.provider,
      paymentSessionId: session.checkoutInfo.sessionId,
      checkoutInfo: JSON.stringify(session.checkoutInfo),
      checkoutResult: JSON.stringify(session.checkoutResult),
      checkoutUrl: session.checkoutInfo.checkoutUrl,
      description: paymentOrder.description || '',
    });
  return session;
}
async function handlePaymentCallback(orderNo) {
  const [existingOrder] = await db()
    .select()
    .from(order)
    .where(eq(order.orderNo, orderNo))
    .limit(1);
  if (!existingOrder) return;
  if (existingOrder.status === 'paid') return;
  const provider = (await getPaymentManager()).getProvider(
    existingOrder.paymentProvider
  );
  if (!provider) return;
  await handleCheckoutSuccess(
    await provider.getPaymentSession({
      sessionId: existingOrder.paymentSessionId || existingOrder.orderNo,
    }),
    existingOrder.paymentProvider
  );
}
async function handleWebhook(params) {
  const event = await (
    await getPaymentManager()
  ).getPaymentEvent({
    req: params.req,
    provider: params.provider,
  });
  const session = event.paymentSession;
  if (!session) return event;
  const eventType = event.eventType;
  if (eventType === 'checkout.success' || eventType === 'payment.success')
    await handleCheckoutSuccess(session, params.provider);
  else if (eventType === 'subscribe.updated')
    await handleSubscriptionUpdated(session, params.provider);
  else if (eventType === 'subscribe.canceled')
    await handleSubscriptionCanceled(session, params.provider);
  return event;
}
async function handleCheckoutSuccess(session, provider) {
  const result = session.paymentResult || {};
  const sessionId =
    result.id ||
    result.object?.id ||
    result.out_trade_no ||
    result.outTradeNo ||
    '';
  if (!sessionId) return;
  const [existingOrder] = await db()
    .select()
    .from(order)
    .where(and(eq(order.paymentSessionId, sessionId), isNull(order.deletedAt)))
    .limit(1);
  if (!existingOrder) return;
  if (existingOrder.status === 'paid') return;
  if (existingOrder.status !== 'created' && existingOrder.status !== 'pending')
    return;
  const paymentInfo = session.paymentInfo;
  const subscriptionInfo = session.subscriptionInfo;
  if (session.paymentStatus === PaymentStatus.SUCCESS) {
    const orderUpdate = {
      status: 'paid',
      paymentResult: JSON.stringify(session.paymentResult),
      paymentAmount: paymentInfo?.paymentAmount || null,
      paymentCurrency: paymentInfo?.paymentCurrency || null,
      paymentEmail: paymentInfo?.paymentEmail || null,
      paidAt: paymentInfo?.paidAt || /* @__PURE__ */ new Date(),
      transactionId: paymentInfo?.transactionId || null,
      invoiceId: paymentInfo?.invoiceId || null,
      invoiceUrl: paymentInfo?.invoiceUrl || null,
      paymentUserName: paymentInfo?.paymentUserName || null,
      paymentUserId: paymentInfo?.paymentUserId || null,
      discountCode: paymentInfo?.discountCode || null,
      discountAmount: paymentInfo?.discountAmount || null,
    };
    await db().transaction(async (tx) => {
      if (subscriptionInfo && session.subscriptionId) {
        const subNo = getSnowId();
        const newSub = {
          id: getUuid(),
          subscriptionNo: subNo,
          userId: existingOrder.userId,
          userEmail:
            existingOrder.userEmail || existingOrder.paymentEmail || '',
          status: subscriptionInfo.status || SubscriptionStatus.ACTIVE,
          paymentProvider: provider,
          subscriptionId: session.subscriptionId,
          subscriptionResult: JSON.stringify(session.subscriptionResult),
          productId: existingOrder.productId,
          description: subscriptionInfo.description || 'Subscription Created',
          amount: subscriptionInfo.amount,
          currency: subscriptionInfo.currency,
          interval: subscriptionInfo.interval,
          intervalCount: subscriptionInfo.intervalCount,
          trialPeriodDays: subscriptionInfo.trialPeriodDays,
          currentPeriodStart: subscriptionInfo.currentPeriodStart,
          currentPeriodEnd: subscriptionInfo.currentPeriodEnd,
          billingUrl: subscriptionInfo.billingUrl,
          planName: existingOrder.planName || existingOrder.productName,
          productName: existingOrder.productName,
          creditsAmount: existingOrder.creditsAmount,
          creditsValidDays: existingOrder.creditsValidDays,
          paymentProductId: existingOrder.paymentProductId,
          paymentUserId: paymentInfo?.paymentUserId,
        };
        await tx.insert(subscription).values(newSub);
        orderUpdate.subscriptionNo = subNo;
        orderUpdate.subscriptionId = session.subscriptionId;
        orderUpdate.subscriptionResult = JSON.stringify(
          session.subscriptionResult
        );
      }
      if (existingOrder.creditsAmount && existingOrder.creditsAmount > 0) {
        const credits = existingOrder.creditsAmount;
        const expiresAt = calculateCreditExpirationTime({
          creditsValidDays: existingOrder.creditsValidDays || 0,
          currentPeriodEnd: subscriptionInfo?.currentPeriodEnd,
        });
        await tx.insert(credit).values({
          id: getUuid(),
          userId: existingOrder.userId,
          userEmail: existingOrder.userEmail || '',
          orderNo: existingOrder.orderNo,
          subscriptionNo: orderUpdate.subscriptionNo || '',
          transactionNo: getSnowId(),
          transactionType: 'grant',
          transactionScene:
            existingOrder.paymentType === 'subscription'
              ? 'subscription'
              : 'payment',
          credits,
          remainingCredits: credits,
          description: 'Grant credit',
          expiresAt,
          status: 'active',
        });
      }
      await tx
        .update(order)
        .set(orderUpdate)
        .where(eq(order.id, existingOrder.id));
    });
  } else if (
    session.paymentStatus === PaymentStatus.FAILED ||
    session.paymentStatus === PaymentStatus.CANCELED
  )
    await db()
      .update(order)
      .set({
        status: 'failed',
        paymentResult: JSON.stringify(session.paymentResult),
      })
      .where(eq(order.id, existingOrder.id));
}
async function handleSubscriptionUpdated(session, provider) {
  if (!session.subscriptionId || !session.subscriptionInfo) return;
  const existingSub = await findByProviderSubscriptionId({
    provider,
    subscriptionId: session.subscriptionId,
  });
  if (!existingSub) return;
  const info = session.subscriptionInfo;
  await updateBySubscriptionNo(existingSub.subscriptionNo, {
    status: info.status,
    currentPeriodStart: info.currentPeriodStart,
    currentPeriodEnd: info.currentPeriodEnd,
    canceledAt: info.canceledAt || null,
    canceledEndAt: info.canceledEndAt || null,
    canceledReason: info.canceledReason || '',
    canceledReasonType: info.canceledReasonType || '',
  });
}
async function handleSubscriptionCanceled(session, provider) {
  if (!session.subscriptionId || !session.subscriptionInfo) return;
  const existingSub = await findByProviderSubscriptionId({
    provider,
    subscriptionId: session.subscriptionId,
  });
  if (!existingSub) return;
  const info = session.subscriptionInfo;
  await updateBySubscriptionNo(existingSub.subscriptionNo, {
    status: SubscriptionStatus.CANCELED,
    canceledAt: info.canceledAt,
    canceledEndAt: info.canceledEndAt,
    canceledReason: info.canceledReason,
    canceledReasonType: info.canceledReasonType,
  });
}
async function cancelUserSubscription(params) {
  const { userId, subscriptionNo } = params;
  const sub = await findBySubscriptionNo(subscriptionNo);
  if (!sub) throw new Error('Subscription not found');
  if (sub.userId !== userId) throw new Error('Forbidden');
  if (
    sub.status === SubscriptionStatus.CANCELED ||
    sub.status === SubscriptionStatus.EXPIRED
  )
    return sub;
  const provider = (await getPaymentManager()).getProvider(sub.paymentProvider);
  if (!provider || !provider.cancelSubscription)
    throw new Error('Cancellation not supported for this provider');
  const info = (
    await provider.cancelSubscription({ subscriptionId: sub.subscriptionId })
  ).subscriptionInfo;
  return await updateBySubscriptionNo(subscriptionNo, {
    status: info?.status || SubscriptionStatus.CANCELED,
    canceledAt: info?.canceledAt || /* @__PURE__ */ new Date(),
    canceledEndAt: info?.canceledEndAt || null,
    canceledReason: info?.canceledReason || 'Canceled by user',
    canceledReasonType: info?.canceledReasonType || 'user_request',
  });
}
//#endregion
//#region src/routes/api/payment/checkout.ts
function safeSameOriginPath(input, fallbackPath, baseUrl) {
  if (!input) return fallbackPath;
  try {
    const appUrl = new URL(baseUrl);
    const candidate = new URL(input, appUrl);
    if (candidate.origin !== appUrl.origin) return fallbackPath;
    return candidate.pathname + candidate.search + candidate.hash;
  } catch {
    return fallbackPath;
  }
}
async function POST$14({ request }) {
  const limited = enforceMinIntervalRateLimit(request, {
    intervalMs: 1e3,
    keyPrefix: 'checkout',
  });
  if (limited) return limited;
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const { product_id, payment_provider, redirect } = await request
      .json()
      .catch(() => ({}));
    if (!product_id || typeof product_id !== 'string')
      return respErr('Missing product_id');
    const product = getPricingProduct(product_id);
    if (!product) return respErr('Unknown product');
    const configs = await getAllConfigs();
    const providerKey = payment_provider || configs.default_payment_provider;
    const testAmountRaw = providerKey
      ? configs[`${providerKey}_test_amount`]
      : void 0;
    const testAmount = testAmountRaw ? parseInt(testAmountRaw) : 0;
    const chargeAmount = testAmount > 0 ? testAmount : product.priceInCents;
    const baseUrl = configs.app_url || 'http://localhost:3000';
    const safeRedirectPath = safeSameOriginPath(
      redirect,
      '/settings/billing',
      baseUrl
    );
    const finalRedirect = redirect
      ? `${baseUrl}/auth-callback?redirect=${encodeURIComponent(`${baseUrl}${safeRedirectPath}`)}`
      : `${baseUrl}/settings/billing`;
    const successUrl = `${baseUrl}/api/payment/callback?redirect=${encodeURIComponent(finalRedirect)}`;
    const cancelUrl = `${baseUrl}/pricing`;
    return respData({
      checkout_url: (
        await createCheckout({
          userId: session.user.id,
          userEmail: session.user.email,
          productName: product.productName,
          planName: product.planName,
          credits: product.credits,
          creditsValidDays: product.creditsValidDays,
          paymentOrder: {
            productId: product.productId,
            price: {
              amount: chargeAmount,
              currency: product.currency,
            },
            type: product.type,
            description: product.description,
            successUrl,
            cancelUrl,
            customer: {
              email: session.user.email,
              name: session.user.name,
            },
            plan: product.plan
              ? {
                  name: product.plan.name,
                  interval: product.plan.interval,
                  intervalCount: product.plan.intervalCount,
                }
              : void 0,
          },
          provider: payment_provider,
        })
      ).checkoutInfo.checkoutUrl,
    });
  } catch (error) {
    console.error('checkout error:', error);
    return respErr(error.message || 'Checkout failed');
  }
}
var Route$27 = createFileRoute('/api/payment/checkout')({
  server: { handlers: { POST: POST$14 } },
});
//#endregion
//#region src/routes/api/payment/callback.ts
/**
 * GET /api/payment/callback?order_no=xxx&redirect=xxx
 *
 * After payment (e.g. Alipay return_url), this endpoint:
 * 1. Queries the payment provider for the latest order status
 * 2. Updates the order in DB if paid
 * 3. Redirects to the final destination (same-origin only)
 */
function resolveSameOriginRedirect(input, fallbackUrl, baseUrl) {
  if (!input) return fallbackUrl;
  try {
    const appUrl = new URL(baseUrl);
    const target = new URL(input, appUrl);
    if (target.origin !== appUrl.origin) return fallbackUrl;
    return target.toString();
  } catch {
    return fallbackUrl;
  }
}
async function GET$18({ request }) {
  const url = new URL(request.url);
  const orderNo = url.searchParams.get('order_no');
  const redirect = url.searchParams.get('redirect');
  const appUrl = (await getAllConfigs()).app_url || 'http://localhost:3000';
  const fallback = `${appUrl}/settings/billing`;
  try {
    if (orderNo) await handlePaymentCallback(orderNo);
  } catch (error) {
    console.error('payment callback error:', error);
  }
  return new Response(null, {
    status: 302,
    headers: {
      Location: resolveSameOriginRedirect(redirect, fallback, appUrl),
    },
  });
}
var Route$26 = createFileRoute('/api/payment/callback')({
  server: { handlers: { GET: GET$18 } },
});
//#endregion
//#region src/routes/api/invite-codes/validate.ts
async function POST$13({ request }) {
  const limited = enforceMinIntervalRateLimit(request, {
    intervalMs: 1e3,
    keyPrefix: 'invite-validate',
  });
  if (limited) return limited;
  try {
    const body = await request.json().catch(() => ({}));
    const code = String(body?.code || '').trim();
    if (!code) return respErr('Invite code is required');
    const result = await validateInviteCode(code);
    if (!result.valid) return respErr(result.error || 'Invalid invite code');
    return respData({
      valid: true,
      trialDays: result.trialDays,
    });
  } catch (e) {
    console.log('validate invite code failed:', e);
    return respErr(e?.message || 'Validation failed');
  }
}
var Route$25 = createFileRoute('/api/invite-codes/validate')({
  server: { handlers: { POST: POST$13 } },
});
//#endregion
//#region src/routes/api/invite-codes/redeem.ts
async function POST$12({ request }) {
  const limited = enforceMinIntervalRateLimit(request, {
    intervalMs: 1e3,
    keyPrefix: 'invite-redeem',
  });
  if (limited) return limited;
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const body = await request.json().catch(() => ({}));
    const code = String(body?.code || '').trim();
    if (!code) return respErr('Invite code is required');
    const result = await redeemInviteCode({
      userId: session.user.id,
      code,
    });
    if (!result.ok) return respErr(result.error || 'Invalid invite code');
    return respData({ trialEndsAt: result.trialEndsAt });
  } catch (e) {
    console.log('redeem invite code failed:', e);
    return respErr(e?.message || 'Redeem failed');
  }
}
var Route$24 = createFileRoute('/api/invite-codes/redeem')({
  server: { handlers: { POST: POST$12 } },
});
//#endregion
//#region src/routes/api/config/public.ts
var noStore$2 = {
  headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' },
};
var publicKeys = [
  'app_name',
  'app_description',
  'app_logo',
  'email_auth_enabled',
  'google_auth_enabled',
  'google_one_tap_enabled',
  'google_client_id',
  'github_auth_enabled',
  'invite_code_required',
  'select_payment_enabled',
  'default_payment_provider',
  'stripe_enabled',
  'creem_enabled',
  'paypal_enabled',
  'alipay_enabled',
  'wechat_enabled',
  'google_analytics_id',
  'plausible_domain',
  'plausible_src',
];
function isEmailSendingConfigured(configs) {
  if ((configs.email_provider || 'resend') === 'cloudflare')
    return (
      !!configs.cloudflare_email_api_token &&
      !!configs.cloudflare_email_account_id &&
      !!configs.cloudflare_email_sender_email
    );
  return !!configs.resend_api_key && !!configs.resend_sender_email;
}
async function GET$17({ request }) {
  const configs = await getAllConfigs();
  const result = filterPublicConfigs(configs, publicKeys);
  const emailConfigured = isEmailSendingConfigured(configs);
  result.password_reset_enabled =
    configs.email_auth_enabled !== 'false' && emailConfigured
      ? 'true'
      : 'false';
  result.email_verification_enabled =
    configs.email_verification_enabled === 'true' && emailConfigured
      ? 'true'
      : 'false';
  return respData(result, noStore$2);
}
var Route$23 = createFileRoute('/api/config/public')({
  server: { handlers: { GET: GET$17 } },
});
//#endregion
//#region src/routes/api/auth/token.ts
function parseCookies(header) {
  const out = {};
  if (!header) return out;
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const name = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (name) out[name] = decodeURIComponent(value);
  }
  return out;
}
/**
 * GET /api/auth/token
 *
 * Returns the current session token for the logged-in user.
 * Used by the auth-callback page to pass the token to the desktop client
 * via custom protocol URL (her://auth/callback?token=xxx).
 */
async function GET$16({ request }) {
  try {
    if (!(await getAuth().api.getSession({ headers: request.headers }))?.user)
      return respErr('Unauthorized');
    const cookies = parseCookies(request.headers.get('cookie'));
    const token =
      cookies['better-auth.session_token'] ||
      cookies['__Secure-better-auth.session_token'];
    if (!token) return respErr('No session token found');
    return respData({
      token,
      cookieName:
        '__Secure-better-auth.session_token' in cookies
          ? '__Secure-better-auth.session_token'
          : 'better-auth.session_token',
    });
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$22 = createFileRoute('/api/auth/token')({
  server: { handlers: { GET: GET$16 } },
});
//#endregion
//#region src/routes/api/auth/$.ts
async function handle(request) {
  return getAuth(await getDbConfigs()).handler(request);
}
var Route$21 = createFileRoute('/api/auth/$')({
  server: {
    handlers: {
      GET: ({ request }) => handle(request),
      POST: ({ request }) => handle(request),
    },
  },
});
//#endregion
//#region src/routes/api/admin/tickets.ts
var VALID_STATUSES$1 = ['open', 'replied', 'closed'];
async function checkAdmin$7(request) {
  const session = await getAuth().api.getSession({ headers: request.headers });
  if (!session?.user) throw new Error('Unauthorized');
  if (!(await hasPermission(session.user.id, 'admin.*')))
    throw new Error('Forbidden');
  return session;
}
async function GET$15({ request }) {
  try {
    await checkAdmin$7(request);
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '20'))
    );
    const status = searchParams.get('status');
    const search = searchParams.get('keyword') || void 0;
    const { items, total } = await listAllTickets({
      page,
      pageSize,
      status: status && VALID_STATUSES$1.includes(status) ? status : void 0,
      search,
    });
    return respPage(items, total);
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$20 = createFileRoute('/api/admin/tickets')({
  server: { handlers: { GET: GET$15 } },
});
//#endregion
//#region src/routes/api/admin/subscriptions.ts
async function GET$14({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.*')))
      return respErr('Forbidden');
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '10'))
    );
    const offset = (page - 1) * pageSize;
    const status = searchParams.get('status');
    const interval = searchParams.get('interval');
    const conditions = [];
    if (status) conditions.push(eq(subscription.status, status));
    if (interval) conditions.push(eq(subscription.interval, interval));
    const where = conditions.length > 0 ? and(...conditions) : void 0;
    const [totalResult] = await db()
      .select({ count: count() })
      .from(subscription)
      .where(where);
    const total = totalResult.count;
    return respPage(
      await db()
        .select({
          id: subscription.id,
          subscriptionNo: subscription.subscriptionNo,
          userId: subscription.userId,
          userEmail: subscription.userEmail,
          status: subscription.status,
          amount: subscription.amount,
          currency: subscription.currency,
          interval: subscription.interval,
          paymentProvider: subscription.paymentProvider,
          currentPeriodStart: subscription.currentPeriodStart,
          currentPeriodEnd: subscription.currentPeriodEnd,
          description: subscription.description,
          createdAt: subscription.createdAt,
        })
        .from(subscription)
        .where(where)
        .orderBy(desc(subscription.createdAt))
        .limit(pageSize)
        .offset(offset),
      total
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$19 = createFileRoute('/api/admin/subscriptions')({
  server: { handlers: { GET: GET$14 } },
});
//#endregion
//#region src/routes/api/admin/posts.ts
async function checkAdmin$6(request) {
  const session = await getAuth().api.getSession({ headers: request.headers });
  if (!session?.user) throw new Error('Unauthorized');
  if (!(await hasPermission(session.user.id, 'admin.*')))
    throw new Error('Forbidden');
  return session;
}
async function GET$13({ request }) {
  try {
    await checkAdmin$6(request);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (id) {
      const post = await getById(id);
      if (!post) return respErr('Post not found');
      return respData(post);
    }
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '10'))
    );
    const { items, total } = await list$2({
      search: searchParams.get('search') || void 0,
      status: searchParams.get('status') || void 0,
      page,
      pageSize,
    });
    return respPage(items, total);
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST$11({ request }) {
  try {
    const session = await checkAdmin$6(request);
    const {
      slug,
      title,
      description,
      image,
      content,
      categories,
      authorName,
      status,
    } = await request.json();
    if (!slug || !title) return respErr('slug and title are required');
    return respData(
      await create$2({
        userId: session.user.id,
        slug,
        title,
        description,
        image,
        content,
        categories,
        authorName,
        status,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function PUT$4({ request }) {
  try {
    await checkAdmin$6(request);
    const {
      id,
      slug,
      title,
      description,
      image,
      content,
      categories,
      authorName,
      status,
    } = await request.json();
    if (!id) return respErr('ID is required');
    return respData(
      await update$1(id, {
        slug,
        title,
        description,
        image,
        content,
        categories,
        authorName,
        status,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function DELETE$5({ request }) {
  try {
    await checkAdmin$6(request);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return respErr('ID is required');
    await remove$2(id);
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$18 = createFileRoute('/api/admin/posts')({
  server: {
    handlers: {
      GET: GET$13,
      POST: POST$11,
      PUT: PUT$4,
      DELETE: DELETE$5,
    },
  },
});
//#endregion
//#region src/routes/api/admin/permissions.ts
async function checkAdmin$5(request) {
  const session = await getAuth().api.getSession({ headers: request.headers });
  if (!session?.user) throw new Error('Unauthorized');
  if (!(await hasPermission(session.user.id, 'admin.*')))
    throw new Error('Forbidden');
  return session;
}
async function GET$12({ request }) {
  try {
    await checkAdmin$5(request);
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '10'))
    );
    const offset = (page - 1) * pageSize;
    const search = searchParams.get('search');
    const conditions = [];
    if (search)
      conditions.push(
        or(
          like(permission.code, `%${search}%`),
          like(permission.title, `%${search}%`)
        )
      );
    const where = conditions.length > 0 ? and(...conditions) : void 0;
    const [totalResult] = await db()
      .select({ count: count() })
      .from(permission)
      .where(where);
    const total = totalResult.count;
    return respPage(
      await db()
        .select()
        .from(permission)
        .where(where)
        .limit(pageSize)
        .offset(offset),
      total
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST$10({ request }) {
  try {
    await checkAdmin$5(request);
    const { code, resource, action, title } = await request.json();
    if (!code || !resource || !action || !title)
      return respErr('code, resource, action, and title are required');
    return respData(
      await createPermission({
        code,
        resource,
        action,
        title,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function PUT$3({ request }) {
  try {
    await checkAdmin$5(request);
    const { id, code, resource, action, title, description } =
      await request.json();
    if (!id) return respErr('ID is required');
    return respData(
      await updatePermission(id, {
        code,
        resource,
        action,
        title,
        description,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function DELETE$4({ request }) {
  try {
    await checkAdmin$5(request);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return respErr('ID is required');
    await deletePermission(id);
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$17 = createFileRoute('/api/admin/permissions')({
  server: {
    handlers: {
      GET: GET$12,
      POST: POST$10,
      PUT: PUT$3,
      DELETE: DELETE$4,
    },
  },
});
//#endregion
//#region src/routes/api/admin/orders.ts
async function GET$11({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.*')))
      return respErr('Forbidden');
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '10'))
    );
    const offset = (page - 1) * pageSize;
    const status = searchParams.get('status');
    const paymentType = searchParams.get('paymentType');
    const search = searchParams.get('search');
    const conditions = [];
    if (status) conditions.push(eq(order.status, status));
    if (paymentType) conditions.push(eq(order.paymentType, paymentType));
    if (search) conditions.push(like(order.orderNo, `%${search}%`));
    const where = conditions.length > 0 ? and(...conditions) : void 0;
    const [totalResult] = await db()
      .select({ count: count() })
      .from(order)
      .where(where);
    const total = totalResult.count;
    return respPage(
      await db()
        .select({
          id: order.id,
          orderNo: order.orderNo,
          userId: order.userId,
          userEmail: order.userEmail,
          status: order.status,
          amount: order.amount,
          currency: order.currency,
          paymentType: order.paymentType,
          paymentProvider: order.paymentProvider,
          productName: order.productName,
          description: order.description,
          createdAt: order.createdAt,
          paidAt: order.paidAt,
        })
        .from(order)
        .where(where)
        .orderBy(desc(order.createdAt))
        .limit(pageSize)
        .offset(offset),
      total
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$16 = createFileRoute('/api/admin/orders')({
  server: { handlers: { GET: GET$11 } },
});
//#endregion
//#region src/routes/api/admin/invite-codes.ts
async function checkAdmin$4(request) {
  const session = await getAuth().api.getSession({ headers: request.headers });
  if (!session?.user) throw new Error('Unauthorized');
  if (!(await hasPermission(session.user.id, 'admin.*')))
    throw new Error('Forbidden');
  return session;
}
async function GET$10({ request }) {
  try {
    await checkAdmin$4(request);
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '20'))
    );
    const offset = (page - 1) * pageSize;
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const conditions = [];
    if (search)
      conditions.push(
        or(
          like(inviteCode.code, `%${search}%`),
          like(inviteCode.note, `%${search}%`)
        )
      );
    if (status === 'available') {
      conditions.push(sql`${inviteCode.usedCount} < ${inviteCode.maxUses}`);
      conditions.push(
        or(
          sql`${inviteCode.expiresAt} IS NULL`,
          gte(inviteCode.expiresAt, /* @__PURE__ */ new Date())
        )
      );
    } else if (status === 'used')
      conditions.push(sql`${inviteCode.usedCount} >= ${inviteCode.maxUses}`);
    const where = conditions.length > 0 ? and(...conditions) : void 0;
    const [totalResult] = await db()
      .select({ count: count() })
      .from(inviteCode)
      .where(where);
    const total = totalResult.count;
    return respPage(
      await db()
        .select()
        .from(inviteCode)
        .where(where)
        .orderBy(desc(inviteCode.createdAt))
        .limit(pageSize)
        .offset(offset),
      total
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST$9({ request }) {
  try {
    const session = await checkAdmin$4(request);
    const {
      code,
      count: batchCount,
      maxUses,
      trialDays,
      note,
      expiresAt,
    } = await request.json().catch(() => ({}));
    const expires = expiresAt ? new Date(expiresAt) : null;
    const params = {
      maxUses: typeof maxUses === 'number' ? maxUses : void 0,
      trialDays: typeof trialDays === 'number' ? trialDays : void 0,
      note,
      createdBy: session.user.id,
      expiresAt: expires,
    };
    if (typeof batchCount === 'number' && batchCount > 1) {
      const limited = Math.min(100, Math.max(1, batchCount));
      return respData(
        await createInviteCodesBatch({
          ...params,
          count: limited,
        })
      );
    }
    return respData(
      await createInviteCode({
        code,
        ...params,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function DELETE$3({ request }) {
  try {
    await checkAdmin$4(request);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return respErr('ID is required');
    await deleteInviteCode(id);
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$15 = createFileRoute('/api/admin/invite-codes')({
  server: {
    handlers: {
      GET: GET$10,
      POST: POST$9,
      DELETE: DELETE$3,
    },
  },
});
//#endregion
//#region src/routes/api/admin/credits.ts
async function GET$9({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.*')))
      return respErr('Forbidden');
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '10'))
    );
    const offset = (page - 1) * pageSize;
    const transactionType = searchParams.get('transactionType');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const conditions = [];
    if (transactionType)
      conditions.push(eq(credit.transactionType, transactionType));
    if (status) conditions.push(eq(credit.status, status));
    else conditions.push(eq(credit.status, 'active'));
    if (search)
      conditions.push(
        or(
          like(credit.transactionNo, `%${search}%`),
          like(credit.userEmail, `%${search}%`)
        )
      );
    const where = conditions.length > 0 ? and(...conditions) : void 0;
    const [totalResult] = await db()
      .select({ count: count() })
      .from(credit)
      .where(where);
    const total = totalResult.count;
    return respPage(
      (
        await db()
          .select({
            id: credit.id,
            userId: credit.userId,
            userEmail: credit.userEmail,
            userTableEmail: user.email,
            transactionNo: credit.transactionNo,
            transactionType: credit.transactionType,
            transactionScene: credit.transactionScene,
            credits: credit.credits,
            remainingCredits: credit.remainingCredits,
            description: credit.description,
            expiresAt: credit.expiresAt,
            status: credit.status,
            createdAt: credit.createdAt,
          })
          .from(credit)
          .leftJoin(user, eq(user.id, credit.userId))
          .where(where)
          .orderBy(desc(credit.createdAt))
          .limit(pageSize)
          .offset(offset)
      ).map((r) => {
        const { userTableEmail, ...rest } = r;
        return {
          ...rest,
          userEmail: rest.userEmail || userTableEmail || null,
        };
      }),
      total
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$14 = createFileRoute('/api/admin/credits')({
  server: { handlers: { GET: GET$9 } },
});
//#endregion
//#region src/routes/api/admin/config.ts
var noStore$1 = {
  headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' },
};
async function GET$8({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.settings.read')))
      return respErr('Forbidden');
    return respData(await getAdminConfigs(), noStore$1);
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST$8({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.settings.write')))
      return respErr('Forbidden');
    const body = await request.json();
    if (!body || typeof body !== 'object') return respErr('Invalid body');
    await saveConfigs(body);
    return respOk(noStore$1);
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$13 = createFileRoute('/api/admin/config')({
  server: {
    handlers: {
      GET: GET$8,
      POST: POST$8,
    },
  },
});
//#endregion
//#region src/modules/taxonomy/service.ts
async function list(params) {
  const { type, status, search, page = 1, pageSize = 10 } = params;
  const offset = (page - 1) * pageSize;
  const conditions = [];
  if (type) conditions.push(eq(taxonomy.type, type));
  if (status) conditions.push(eq(taxonomy.status, status));
  else conditions.push(eq(taxonomy.status, 'published'));
  if (search)
    conditions.push(
      or(
        like(taxonomy.title, `%${search}%`),
        like(taxonomy.slug, `%${search}%`)
      )
    );
  const where = conditions.length > 0 ? and(...conditions) : void 0;
  const [totalResult] = await db()
    .select({ count: count() })
    .from(taxonomy)
    .where(where);
  const total = totalResult.count;
  return {
    items: await db()
      .select()
      .from(taxonomy)
      .where(where)
      .orderBy(desc(taxonomy.createdAt))
      .limit(pageSize)
      .offset(offset),
    total,
  };
}
async function getAll(type) {
  return db()
    .select({
      id: taxonomy.id,
      title: taxonomy.title,
      slug: taxonomy.slug,
    })
    .from(taxonomy)
    .where(and(eq(taxonomy.type, type), eq(taxonomy.status, 'published')))
    .orderBy(desc(taxonomy.createdAt));
}
async function create(data) {
  const newTaxonomy = {
    id: getUuid(),
    userId: data.userId,
    slug: data.slug.toLowerCase(),
    type: data.type,
    title: data.title,
    description: data.description || '',
    status: 'published',
  };
  const [result] = await db().insert(taxonomy).values(newTaxonomy).returning();
  return result;
}
async function update(id, data) {
  const updateData = { ...data };
  if (updateData.slug) updateData.slug = updateData.slug.toLowerCase();
  const [result] = await db()
    .update(taxonomy)
    .set(updateData)
    .where(eq(taxonomy.id, id))
    .returning();
  return result;
}
async function remove(id) {
  await db()
    .update(taxonomy)
    .set({ status: 'archived' })
    .where(eq(taxonomy.id, id));
}
//#endregion
//#region src/routes/api/admin/categories.ts
async function checkAdmin$3(request) {
  const session = await getAuth().api.getSession({ headers: request.headers });
  if (!session?.user) throw new Error('Unauthorized');
  if (!(await hasPermission(session.user.id, 'admin.*')))
    throw new Error('Forbidden');
  return session;
}
async function GET$7({ request }) {
  try {
    await checkAdmin$3(request);
    const { searchParams } = new URL(request.url);
    if (searchParams.get('all') === 'true')
      return respData(await getAll('category'));
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '10'))
    );
    const { items, total } = await list({
      type: 'category',
      search: searchParams.get('search') || void 0,
      page,
      pageSize,
    });
    return respPage(items, total);
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST$7({ request }) {
  try {
    const session = await checkAdmin$3(request);
    const { slug, title, description } = await request.json();
    if (!slug || !title) return respErr('slug and title are required');
    return respData(
      await create({
        userId: session.user.id,
        slug,
        type: 'category',
        title,
        description,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function PUT$2({ request }) {
  try {
    await checkAdmin$3(request);
    const { id, slug, title, description, status } = await request.json();
    if (!id) return respErr('ID is required');
    return respData(
      await update(id, {
        slug,
        title,
        description,
        status,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function DELETE$2({ request }) {
  try {
    await checkAdmin$3(request);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return respErr('ID is required');
    await remove(id);
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$12 = createFileRoute('/api/admin/categories')({
  server: {
    handlers: {
      GET: GET$7,
      POST: POST$7,
      PUT: PUT$2,
      DELETE: DELETE$2,
    },
  },
});
//#endregion
//#region src/routes/api/user/subscriptions/index.ts
async function GET$6({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '20'))
    );
    const offset = (page - 1) * pageSize;
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const conditions = [eq(subscription.userId, session.user.id)];
    if (status && status !== 'all')
      conditions.push(eq(subscription.status, status));
    if (search)
      conditions.push(
        or(
          like(subscription.subscriptionNo, `%${search}%`),
          like(subscription.planName, `%${search}%`),
          like(subscription.productName, `%${search}%`)
        )
      );
    const where = and(...conditions);
    const [totalResult] = await db()
      .select({ count: count() })
      .from(subscription)
      .where(where);
    return respPage(
      await db()
        .select()
        .from(subscription)
        .where(where)
        .orderBy(desc(subscription.createdAt))
        .limit(pageSize)
        .offset(offset),
      totalResult.count
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$11 = createFileRoute('/api/user/subscriptions/')({
  server: { handlers: { GET: GET$6 } },
});
//#endregion
//#region src/routes/api/admin/users/index.ts
async function GET$5({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.*')))
      return respErr('Forbidden');
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '10'))
    );
    const offset = (page - 1) * pageSize;
    const search = searchParams.get('search');
    const conditions = [];
    if (search)
      conditions.push(
        or(like(user.email, `%${search}%`), like(user.name, `%${search}%`))
      );
    const where = conditions.length > 0 ? and(...conditions) : void 0;
    const [totalResult] = await db()
      .select({ count: count() })
      .from(user)
      .where(where);
    const total = totalResult.count;
    const users = await db()
      .select({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        createdAt: user.createdAt,
      })
      .from(user)
      .where(where)
      .orderBy(desc(user.createdAt))
      .limit(pageSize)
      .offset(offset);
    return respPage(
      await Promise.all(
        users.map(async (u) => ({
          ...u,
          credits: await getBalance(u.id),
        }))
      ),
      total
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$10 = createFileRoute('/api/admin/users/')({
  server: { handlers: { GET: GET$5 } },
});
//#endregion
//#region src/routes/api/admin/roles/index.ts
async function checkAdmin$2(request) {
  const session = await getAuth().api.getSession({ headers: request.headers });
  if (!session?.user) throw new Error('Unauthorized');
  if (!(await hasPermission(session.user.id, 'admin.*')))
    throw new Error('Forbidden');
  return session;
}
async function GET$4({ request }) {
  try {
    await checkAdmin$2(request);
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    if (userId) return respData(await getUserRoles(userId));
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('pageSize') || '10'))
    );
    const offset = (page - 1) * pageSize;
    const search = searchParams.get('search');
    const conditions = [eq(role.status, 'active')];
    if (search)
      conditions.push(
        or(like(role.name, `%${search}%`), like(role.title, `%${search}%`))
      );
    const where = and(...conditions);
    const [totalResult] = await db()
      .select({ count: count() })
      .from(role)
      .where(where);
    const total = totalResult.count;
    return respPage(
      await db()
        .select()
        .from(role)
        .where(where)
        .orderBy(desc(role.createdAt))
        .limit(pageSize)
        .offset(offset),
      total
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST$6({ request }) {
  try {
    await checkAdmin$2(request);
    const { name, title, description } = await request.json();
    if (!name || !title) return respErr('Name and title are required');
    return respData(
      await createRole({
        name,
        title,
        description,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function PUT$1({ request }) {
  try {
    await checkAdmin$2(request);
    const { id, name, title, description } = await request.json();
    if (!id) return respErr('ID is required');
    return respData(
      await updateRole(id, {
        name,
        title,
        description,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function DELETE$1({ request }) {
  try {
    await checkAdmin$2(request);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return respErr('ID is required');
    await deleteRole(id);
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$9 = createFileRoute('/api/admin/roles/')({
  server: {
    handlers: {
      GET: GET$4,
      POST: POST$6,
      PUT: PUT$1,
      DELETE: DELETE$1,
    },
  },
});
//#endregion
//#region src/routes/api/user/subscriptions/current.ts
async function GET$3({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    return respData((await getCurrentSubscription(session.user.id)) || null);
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$8 = createFileRoute('/api/user/subscriptions/current')({
  server: { handlers: { GET: GET$3 } },
});
//#endregion
//#region src/routes/api/user/subscriptions/cancel.ts
async function POST$5({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    const subscriptionNo = (await request.json().catch(() => ({})))
      ?.subscriptionNo;
    if (!subscriptionNo || typeof subscriptionNo !== 'string')
      return respErr('subscriptionNo is required');
    return respData(
      await cancelUserSubscription({
        userId: session.user.id,
        subscriptionNo,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$7 = createFileRoute('/api/user/subscriptions/cancel')({
  server: { handlers: { POST: POST$5 } },
});
//#endregion
//#region src/routes/api/payment/notify/$provider.ts
var Route$6 = createFileRoute('/api/payment/notify/$provider')({
  server: {
    handlers: {
      POST: async ({ request, params }) => {
        const { provider } = params;
        try {
          const event = await handleWebhook({
            req: request,
            provider,
          });
          console.log(`Payment event [${provider}]: ${event.eventType}`);
          if (provider === 'alipay')
            return new Response('success', {
              status: 200,
              headers: { 'Content-Type': 'text/plain' },
            });
          if (provider === 'wechat')
            return Response.json({
              code: 'SUCCESS',
              message: 'OK',
            });
          return respOk();
        } catch (error) {
          console.error('webhook error:', error);
          if (provider === 'alipay')
            return new Response('fail', {
              status: 200,
              headers: { 'Content-Type': 'text/plain' },
            });
          return respErr(error.message || 'Webhook handling failed');
        }
      },
    },
  },
});
//#endregion
//#region src/routes/api/admin/users/credits.ts
async function POST$4({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.*')))
      return respErr('Forbidden');
    const { userId, action, credits, description } = await request
      .json()
      .catch(() => ({}));
    if (!userId) return respErr('Missing userId');
    if (action !== 'grant' && action !== 'deduct')
      return respErr('Invalid action');
    const amount = Number(credits);
    if (!Number.isFinite(amount) || amount <= 0)
      return respErr('Invalid credits');
    const [target] = await db()
      .select()
      .from(user)
      .where(eq(user.id, userId))
      .limit(1);
    if (!target) return respErr('User not found');
    if (action === 'grant')
      await grant({
        userId,
        userEmail: target.email,
        credits: amount,
        description: description || 'Admin grant',
        scene: CreditTransactionScene.GIFT,
      });
    else if (
      !(
        await consume({
          userId,
          userEmail: target.email,
          credits: amount,
          scene: 'admin_deduct',
          description: description || 'Admin deduct',
        })
      ).success
    )
      return respErr('Insufficient balance');
    return respData({ balance: await getBalance(userId) });
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$5 = createFileRoute('/api/admin/users/credits')({
  server: { handlers: { POST: POST$4 } },
});
//#endregion
//#region src/routes/api/admin/tickets/$id.ts
var VALID_STATUSES = ['open', 'replied', 'closed'];
async function checkAdmin$1(request) {
  const session = await getAuth().api.getSession({ headers: request.headers });
  if (!session?.user) throw new Error('Unauthorized');
  if (!(await hasPermission(session.user.id, 'admin.*')))
    throw new Error('Forbidden');
  return session;
}
async function GET$2({ request, params }) {
  try {
    await checkAdmin$1(request);
    const { id } = params;
    const ticket = await getTicketById(id);
    if (!ticket) return respErr('Ticket not found');
    return respData({
      ticket,
      messages: await getTicketMessages(id),
    });
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST$3({ request, params }) {
  try {
    const session = await checkAdmin$1(request);
    const { id } = params;
    if (!(await getTicketById(id))) return respErr('Ticket not found');
    const body = await request.json().catch(() => ({}));
    const content = typeof body.content === 'string' ? body.content.trim() : '';
    if (!content) return respErr('Content is required');
    if (content.length > 5e3) return respErr('Content is too long');
    const attachments = sanitizeAttachments(body.attachments);
    if (attachments === null) return respErr('Invalid attachments');
    return respData(
      await addMessage({
        ticketId: id,
        userId: session.user.id,
        role: 'admin',
        content,
        attachments,
      })
    );
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function PATCH({ request, params }) {
  try {
    await checkAdmin$1(request);
    const { id } = params;
    if (!(await getTicketById(id))) return respErr('Ticket not found');
    const status = (await request.json().catch(() => ({}))).status;
    if (!VALID_STATUSES.includes(status)) return respErr('Invalid status');
    await updateTicketStatus(id, status);
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$4 = createFileRoute('/api/admin/tickets/$id')({
  server: {
    handlers: {
      GET: GET$2,
      POST: POST$3,
      PATCH,
    },
  },
});
//#endregion
//#region src/core/ai/types.ts
/**
 * ai media type
 */
var AIMediaType = /* @__PURE__ */ (function (AIMediaType) {
  AIMediaType['MUSIC'] = 'music';
  AIMediaType['IMAGE'] = 'image';
  AIMediaType['VIDEO'] = 'video';
  AIMediaType['TEXT'] = 'text';
  AIMediaType['SPEECH'] = 'speech';
  return AIMediaType;
})({});
var AITaskStatus = /* @__PURE__ */ (function (AITaskStatus) {
  AITaskStatus['PENDING'] = 'pending';
  AITaskStatus['PROCESSING'] = 'processing';
  AITaskStatus['SUCCESS'] = 'success';
  AITaskStatus['FAILED'] = 'failed';
  AITaskStatus['CANCELED'] = 'canceled';
  return AITaskStatus;
})({});
//#endregion
//#region src/core/ai/fal.ts
var defaultUuid$1 = () => crypto.randomUUID();
/**
 * Fal provider
 * @docs https://fal.ai/
 */
var FalProvider = class {
  name = 'fal';
  configs;
  baseUrl = 'https://queue.fal.run';
  constructor(configs) {
    this.configs = configs;
  }
  getUuid() {
    return (this.configs.uuid || defaultUuid$1)();
  }
  async trySaveFiles(files) {
    if (!this.configs.saveFiles) return void 0;
    try {
      return await this.configs.saveFiles(files);
    } catch (error) {
      console.error('save files failed:', error);
      return;
    }
  }
  async generate({ params }) {
    const { mediaType, model, prompt, options, callbackUrl } = params;
    if (!mediaType) throw new Error('mediaType is required');
    if (!model) throw new Error('model is required');
    if (!prompt) throw new Error('prompt is required');
    const input = this.formatInput({
      mediaType,
      model,
      prompt,
      options,
    });
    let apiUrl = `${this.baseUrl}/${model}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Key ${this.configs.apiKey}`,
    };
    if (
      callbackUrl &&
      callbackUrl.startsWith('http') &&
      !callbackUrl.includes('localhost') &&
      !callbackUrl.includes('127.0.0.1')
    )
      apiUrl += `?fal_webhook=${callbackUrl}`;
    const resp = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(input),
    });
    if (!resp.ok) throw new Error(`request failed with status: ${resp.status}`);
    const data = await resp.json();
    if (!data || !data.request_id)
      throw new Error('generate failed: no request_id');
    return {
      taskStatus: AITaskStatus.PENDING,
      taskId: data.request_id,
      taskInfo: {},
      taskResult: data,
    };
  }
  async query({ taskId, model, mediaType }) {
    const queryModel = this.getQueryModel(model);
    const statusUrl = `${this.baseUrl}/${queryModel}/requests/${taskId}/status`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Key ${this.configs.apiKey}`,
    };
    const statusResp = await fetch(statusUrl, {
      method: 'GET',
      headers,
    });
    if (!statusResp.ok)
      throw new Error(`request failed with status: ${statusResp.status}`);
    const statusData = await statusResp.json();
    const taskStatus = this.mapStatus(statusData.status);
    if (taskStatus !== AITaskStatus.SUCCESS)
      return {
        taskId,
        taskStatus,
        taskInfo: {
          status: statusData.status,
          errorCode: '',
          errorMessage: '',
        },
        taskResult: statusData,
      };
    const resultUrl = `${this.baseUrl}/${queryModel}/requests/${taskId}`;
    const resultResp = await fetch(resultUrl, {
      method: 'GET',
      headers,
    });
    if (!resultResp.ok)
      throw new Error(`request failed with status: ${resultResp.status}`);
    const data = await resultResp.json();
    let images = void 0;
    let videos = void 0;
    if (mediaType === AIMediaType.VIDEO) {
      if (data.video && data.video.url)
        videos = [
          {
            id: '',
            createTime: /* @__PURE__ */ new Date(),
            videoUrl: data.video.url,
          },
        ];
      else if (data.videos && Array.isArray(data.videos))
        videos = data.videos.map((video) => ({
          id: '',
          createTime: /* @__PURE__ */ new Date(),
          videoUrl: video.url,
        }));
    } else if (data.images && Array.isArray(data.images))
      images = data.images.map((image) => ({
        id: '',
        createTime: /* @__PURE__ */ new Date(),
        imageUrl: image.url,
      }));
    if (taskStatus === AITaskStatus.SUCCESS && this.configs.customStorage) {
      if (images && images.length > 0) {
        const filesToSave = [];
        images.forEach((image, index) => {
          if (image.imageUrl)
            filesToSave.push({
              url: image.imageUrl,
              contentType: 'image/png',
              key: `fal/image/${this.getUuid()}.png`,
              index,
              type: 'image',
            });
        });
        if (filesToSave.length > 0) {
          const uploadedFiles = await this.trySaveFiles(filesToSave);
          if (uploadedFiles)
            uploadedFiles.forEach((file) => {
              if (file && file.url && images && file.index !== void 0) {
                const image = images[file.index];
                if (image) image.imageUrl = file.url;
              }
            });
        }
      }
      if (videos && videos.length > 0) {
        const filesToSave = [];
        videos.forEach((video, index) => {
          if (video.videoUrl)
            filesToSave.push({
              url: video.videoUrl,
              contentType: 'video/mp4',
              key: `fal/video/${this.getUuid()}.mp4`,
              index,
              type: 'video',
            });
        });
        if (filesToSave.length > 0) {
          const uploadedFiles = await this.trySaveFiles(filesToSave);
          if (uploadedFiles)
            uploadedFiles.forEach((file) => {
              if (file && file.url && videos && file.index !== void 0) {
                const video = videos[file.index];
                if (video) video.videoUrl = file.url;
              }
            });
        }
      }
    }
    return {
      taskId,
      taskStatus,
      taskInfo: {
        images,
        videos,
        status: statusData.status,
        errorCode: '',
        errorMessage: '',
        createTime: /* @__PURE__ */ new Date(),
      },
      taskResult: data,
    };
  }
  mapStatus(status) {
    switch (status) {
      case 'IN_QUEUE':
        return AITaskStatus.PENDING;
      case 'IN_PROGRESS':
        return AITaskStatus.PROCESSING;
      case 'COMPLETED':
        return AITaskStatus.SUCCESS;
      case 'FAILED':
        return AITaskStatus.FAILED;
      default:
        throw new Error(`unknown status: ${status}`);
    }
  }
  getQueryModel(model) {
    if (!model) return '';
    const parts = model.split('/');
    if (parts.length <= 2) return model;
    return `${parts[0]}/${parts[1]}`;
  }
  formatInput({ mediaType, model, prompt, options }) {
    let input = { prompt };
    if (!options) return input;
    input = {
      ...input,
      ...options,
    };
    if (options.image_input && Array.isArray(options.image_input)) {
      if (['fal-ai/kling-video/o1/video-to-video/edit'].includes(model))
        input.input_images = options.image_input;
      else input.image_url = options.image_input[0];
      delete input.image_input;
    }
    if (options.video_input && Array.isArray(options.video_input)) {
      input.video_url = options.video_input[0];
      delete input.video_input;
    }
    return input;
  }
};
//#endregion
//#region src/core/ai/replicate.ts
var defaultUuid = () => crypto.randomUUID();
/**
 * Replicate provider
 * @docs https://replicate.com/
 */
var ReplicateProvider = class {
  name = 'replicate';
  configs;
  client;
  constructor(configs) {
    this.configs = configs;
    this.client = new Replicate({ auth: this.configs.apiToken });
  }
  getUuid() {
    return (this.configs.uuid || defaultUuid)();
  }
  async trySaveFiles(files) {
    if (!this.configs.saveFiles) return void 0;
    try {
      return await this.configs.saveFiles(files);
    } catch (error) {
      console.error('save files failed:', error);
      return;
    }
  }
  async generate({ params }) {
    const {
      mediaType,
      model,
      prompt,
      options,
      async: isAsync,
      callbackUrl,
    } = params;
    if (!mediaType) throw new Error('mediaType is required');
    if (!model) throw new Error('model is required');
    if (!prompt) throw new Error('prompt is required');
    const input = this.formatInput({
      mediaType,
      model,
      prompt,
      options,
    });
    const isValidCallbackUrl =
      callbackUrl &&
      callbackUrl.startsWith('http') &&
      !callbackUrl.includes('localhost') &&
      !callbackUrl.includes('127.0.0.1');
    const output = await this.client.predictions.create({
      model,
      input,
      webhook: isValidCallbackUrl ? callbackUrl : void 0,
      webhook_events_filter: isValidCallbackUrl ? ['completed'] : void 0,
    });
    return {
      taskStatus: AITaskStatus.PENDING,
      taskId: output.id,
      taskInfo: {},
      taskResult: output,
    };
  }
  async query({ taskId, mediaType }) {
    const data = await this.client.predictions.get(taskId);
    let images = void 0;
    let videos = void 0;
    if (data.output) {
      if (mediaType === AIMediaType.VIDEO) {
        if (Array.isArray(data.output))
          videos = data.output.map((video) => ({
            id: '',
            createTime: new Date(data.created_at),
            videoUrl: video,
          }));
        else if (typeof data.output === 'string')
          videos = [
            {
              id: '',
              createTime: new Date(data.created_at),
              videoUrl: data.output,
            },
          ];
      } else if (Array.isArray(data.output))
        images = data.output.map((image) => ({
          id: '',
          createTime: new Date(data.created_at),
          imageUrl: image,
        }));
      else if (typeof data.output === 'string')
        images = [
          {
            id: '',
            createTime: new Date(data.created_at),
            imageUrl: data.output,
          },
        ];
    }
    const taskStatus = this.mapStatus(data.status);
    if (taskStatus === AITaskStatus.SUCCESS && this.configs.customStorage) {
      if (images && images.length > 0) {
        const filesToSave = [];
        images.forEach((image, index) => {
          if (image.imageUrl)
            filesToSave.push({
              url: image.imageUrl,
              contentType: 'image/png',
              key: `replicate/image/${this.getUuid()}.png`,
              index,
              type: 'image',
            });
        });
        if (filesToSave.length > 0) {
          const uploadedFiles = await this.trySaveFiles(filesToSave);
          if (uploadedFiles)
            uploadedFiles.forEach((file) => {
              if (file && file.url && images && file.index !== void 0) {
                const image = images[file.index];
                if (image) image.imageUrl = file.url;
              }
            });
        }
      }
      if (videos && videos.length > 0) {
        const filesToSave = [];
        videos.forEach((video, index) => {
          if (video.videoUrl)
            filesToSave.push({
              url: video.videoUrl,
              contentType: 'video/mp4',
              key: `replicate/video/${this.getUuid()}.mp4`,
              index,
              type: 'video',
            });
        });
        if (filesToSave.length > 0) {
          const uploadedFiles = await this.trySaveFiles(filesToSave);
          if (uploadedFiles)
            uploadedFiles.forEach((file) => {
              if (file && file.url && videos && file.index !== void 0) {
                const video = videos[file.index];
                if (video) video.videoUrl = file.url;
              }
            });
        }
      }
    }
    return {
      taskId,
      taskStatus,
      taskInfo: {
        images,
        videos,
        status: data.status,
        errorCode: '',
        errorMessage: data.error,
        createTime: new Date(data.created_at),
      },
      taskResult: data,
    };
  }
  mapStatus(status) {
    switch (status) {
      case 'starting':
        return AITaskStatus.PENDING;
      case 'processing':
        return AITaskStatus.PROCESSING;
      case 'succeeded':
        return AITaskStatus.SUCCESS;
      case 'failed':
        return AITaskStatus.FAILED;
      case 'canceled':
        return AITaskStatus.CANCELED;
      default:
        throw new Error(`unknown status: ${status}`);
    }
  }
  formatInput({ mediaType, model, prompt, options }) {
    let input = { prompt };
    if (!options) return input;
    input = {
      ...input,
      ...options,
    };
    if (options.image_input && Array.isArray(options.image_input)) {
      if (['black-forest-labs/flux-2-pro'].includes(model)) {
        input.input_images = options.image_input;
        delete input.image_input;
      } else if (['google/veo-3.1'].includes(model)) {
        input.reference_images = input.image_input;
        delete input.image_input;
      } else if (['openai/sora-2'].includes(model)) {
        input.input_reference = options.image_input[0];
        delete input.image_input;
      }
    }
    if (options.duration) {
      if (['openai/sora-2'].includes(model)) {
        input.seconds = Number(options.duration);
        delete input.duration;
      }
    }
    return input;
  }
};
//#endregion
//#region src/modules/config/settings-test.ts
/**
 * Server-side runner for settings tests.
 *
 * Safe side effects only: no orders are persisted, no webhooks fire —
 * just raw provider SDK calls to prove credentials work.
 *
 * Spec data lives in ./settings-test-specs so the client bundle can
 * import it without pulling provider SDKs.
 */
async function runTest(group, inputs, configs) {
  try {
    switch (group) {
      case 'resend':
        return await testResend(inputs, configs);
      case 'stripe':
        return await testStripe(inputs, configs);
      case 'creem':
        return await testCreem(inputs, configs);
      case 'paypal':
        return await testPaypal(inputs, configs);
      case 'alipay':
        return await testAlipay(inputs, configs);
      case 'wechat':
        return await testWechat(inputs, configs);
      case 'r2':
        return await testR2(inputs, configs);
      case 'openai':
        return await testOpenAI(inputs, configs);
      case 'anthropic':
        return await testAnthropic(inputs, configs);
      case 'replicate':
        return await testReplicate(inputs, configs);
      case 'fal':
        return await testFal(inputs, configs);
      default:
        return {
          success: false,
          message: `No test available for "${group}"`,
        };
    }
  } catch (error) {
    return {
      success: false,
      message: error?.message || 'Test failed with unknown error',
    };
  }
}
function need(configs, keys) {
  const missing = keys.filter((k) => !configs[k]);
  return missing.length ? `Missing config: ${missing.join(', ')}` : null;
}
function configuredAppName(configs) {
  return configs.app_name || envConfigs.app_name;
}
function configuredSuccessUrl(group, configs) {
  return `${configs.app_url || envConfigs.app_url || 'http://localhost:3000'}/admin/settings?test=${group}`;
}
async function testResend(inputs, configs) {
  const missing = need(configs, ['resend_api_key', 'resend_sender_email']);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const result = await new ResendProvider({
    apiKey: configs.resend_api_key,
    defaultFrom: configs.resend_sender_email,
  }).sendEmail({
    to: inputs.to,
    subject: `[${configuredAppName(configs)}] Test email`,
    text: `This is a test email from ${configuredAppName(configs)} admin settings. If you received it, Resend is configured correctly.`,
  });
  if (!result.success)
    return {
      success: false,
      message: result.error || 'Send failed',
    };
  return {
    success: true,
    message: 'Email sent successfully',
    details: result.messageId ? { 'Message ID': result.messageId } : void 0,
  };
}
async function testStripe(inputs, configs) {
  const key = configs.stripe_secret_key || configs.stripe_api_key;
  if (!key)
    return {
      success: false,
      message: 'Missing config: stripe_secret_key',
    };
  const provider = new StripeProvider({
    secretKey: key,
    publishableKey: configs.stripe_publishable_key || '',
    signingSecret:
      configs.stripe_signing_secret || configs.stripe_webhook_secret || void 0,
    allowedPaymentMethods: ['card'],
  });
  const order = {
    type: PaymentType.ONE_TIME,
    orderNo: getUniSeq('TEST'),
    price: {
      amount: Number(inputs.amount) || 100,
      currency: (inputs.currency || 'usd').toLowerCase(),
    },
    description: inputs.description || 'Test checkout',
    successUrl: configuredSuccessUrl('stripe', configs),
    cancelUrl: configuredSuccessUrl('stripe', configs),
  };
  const session = await provider.createPayment({ order });
  return {
    success: true,
    message: 'Checkout session created',
    details: {
      'Session ID': session.checkoutInfo.sessionId,
      'Checkout URL': session.checkoutInfo.checkoutUrl,
    },
  };
}
async function testCreem(inputs, configs) {
  const missing = need(configs, ['creem_api_key']);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const provider = new CreemProvider({
    apiKey: configs.creem_api_key,
    signingSecret: configs.creem_signing_secret || void 0,
    environment:
      configs.creem_environment === 'production' ? 'production' : 'sandbox',
  });
  const order = {
    type: PaymentType.ONE_TIME,
    orderNo: getUniSeq('TEST'),
    productId: inputs.productId,
    description: inputs.description || 'Test checkout',
    successUrl: configuredSuccessUrl('creem', configs),
    cancelUrl: configuredSuccessUrl('creem', configs),
  };
  const session = await provider.createPayment({ order });
  return {
    success: true,
    message: 'Checkout session created',
    details: {
      'Session ID': session.checkoutInfo.sessionId,
      'Checkout URL': session.checkoutInfo.checkoutUrl,
    },
  };
}
async function testPaypal(inputs, configs) {
  const missing = need(configs, ['paypal_client_id', 'paypal_client_secret']);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const provider = new PayPalProvider({
    clientId: configs.paypal_client_id,
    clientSecret: configs.paypal_client_secret,
    environment:
      configs.paypal_environment === 'live' ? 'production' : 'sandbox',
    webhookId: configs.paypal_webhook_id || void 0,
  });
  const order = {
    type: PaymentType.ONE_TIME,
    orderNo: getUniSeq('TEST'),
    price: {
      amount: Number(inputs.amount) || 100,
      currency: (inputs.currency || 'USD').toUpperCase(),
    },
    description: inputs.description || 'Test checkout',
    successUrl: configuredSuccessUrl('paypal', configs),
    cancelUrl: configuredSuccessUrl('paypal', configs),
  };
  const session = await provider.createPayment({ order });
  return {
    success: true,
    message: 'Checkout session created',
    details: {
      'Order ID': session.checkoutInfo.sessionId,
      'Approval URL': session.checkoutInfo.checkoutUrl,
    },
  };
}
async function testAlipay(inputs, configs) {
  const missing = need(configs, [
    'alipay_app_id',
    'alipay_private_key',
    'alipay_public_key',
  ]);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const provider = new AlipayProvider({
    appId: configs.alipay_app_id,
    privateKey: configs.alipay_private_key,
    alipayPublicKey: configs.alipay_public_key,
    notifyUrl: configs.alipay_notify_url || void 0,
  });
  const order = {
    type: PaymentType.ONE_TIME,
    orderNo: getUniSeq('TEST'),
    price: {
      amount: Number(inputs.amount) || 1,
      currency: 'CNY',
    },
    description: inputs.description || 'Test checkout',
    successUrl: configuredSuccessUrl('alipay', configs),
  };
  const session = await provider.createPayment({ order });
  return {
    success: true,
    message: 'Checkout created',
    details: {
      'Order No': session.checkoutInfo.sessionId,
      'Checkout URL': session.checkoutInfo.checkoutUrl,
    },
  };
}
async function testWechat(inputs, configs) {
  const missing = need(configs, [
    'wechat_app_id',
    'wechat_mch_id',
    'wechat_private_key',
    'wechat_api_v3_key',
    'wechat_serial_no',
  ]);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const provider = new WechatPayProvider({
    appId: configs.wechat_app_id,
    mchId: configs.wechat_mch_id,
    apiV3Key: configs.wechat_api_v3_key,
    privateKey: configs.wechat_private_key,
    serialNo: configs.wechat_serial_no,
    notifyUrl: configs.wechat_notify_url || void 0,
  });
  const order = {
    type: PaymentType.ONE_TIME,
    orderNo: getUniSeq('TEST'),
    price: {
      amount: Number(inputs.amount) || 1,
      currency: 'CNY',
    },
    description: inputs.description || 'Test checkout',
  };
  const session = await provider.createPayment({ order });
  return {
    success: true,
    message: 'Checkout created',
    details: {
      'Order No': session.checkoutInfo.sessionId,
      'Checkout URL': session.checkoutInfo.checkoutUrl,
    },
  };
}
async function testR2(inputs, configs) {
  const missing = need(configs, [
    'r2_access_key',
    'r2_secret_key',
    'r2_bucket_name',
  ]);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const provider = new R2Provider({
    accountId: configs.r2_account_id || '',
    accessKeyId: configs.r2_access_key,
    secretAccessKey: configs.r2_secret_key,
    bucket: configs.r2_bucket_name,
    uploadPath: configs.r2_upload_path,
    region: 'auto',
    endpoint: configs.r2_endpoint || void 0,
    publicDomain: configs.r2_domain || void 0,
  });
  const safeName = (inputs.filename || 'shipany-settings-test.txt').replace(
    /[^a-zA-Z0-9._-]/g,
    '_'
  );
  const key = `settings-test/${Date.now()}-${safeName}`;
  const body = Buffer.from(
    `ShipAny settings test\nTimestamp: ${/* @__PURE__ */ new Date().toISOString()}\n`,
    'utf-8'
  );
  const result = await provider.uploadFile({
    body,
    key,
    contentType: 'text/plain',
  });
  if (!result.success)
    return {
      success: false,
      message: result.error || 'Upload failed',
    };
  const details = { Key: key };
  if (result.url) details['URL'] = result.url;
  if (result.location) details['Location'] = result.location;
  return {
    success: true,
    message: 'Uploaded test object',
    details,
  };
}
async function testOpenAI(inputs, configs) {
  const missing = need(configs, ['openai_api_key']);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const baseUrl = (
    configs.openai_base_url || 'https://api.openai.com/v1'
  ).replace(/\/+$/, '');
  const resp = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${configs.openai_api_key}`,
    },
    body: JSON.stringify({
      model: inputs.model,
      messages: [
        {
          role: 'user',
          content: inputs.prompt,
        },
      ],
      max_tokens: 64,
    }),
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok)
    return {
      success: false,
      message: data?.error?.message || `Request failed (${resp.status})`,
    };
  const reply = String(data?.choices?.[0]?.message?.content ?? '').trim();
  return {
    success: true,
    message: 'OpenAI accepted the request',
    details: {
      Model: data?.model || inputs.model,
      Reply: reply.slice(0, 200) || '(empty)',
    },
  };
}
async function testAnthropic(inputs, configs) {
  const missing = need(configs, ['anthropic_api_key']);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const baseUrl = (
    configs.anthropic_base_url || 'https://api.anthropic.com'
  ).replace(/\/+$/, '');
  const resp = await fetch(`${baseUrl}/v1/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': configs.anthropic_api_key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: inputs.model,
      max_tokens: 64,
      messages: [
        {
          role: 'user',
          content: inputs.prompt,
        },
      ],
    }),
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok)
    return {
      success: false,
      message: data?.error?.message || `Request failed (${resp.status})`,
    };
  const reply = Array.isArray(data?.content)
    ? data.content
        .map((b) => b?.text || '')
        .join('')
        .trim()
    : '';
  return {
    success: true,
    message: 'Anthropic accepted the request',
    details: {
      Model: data?.model || inputs.model,
      Reply: reply.slice(0, 200) || '(empty)',
    },
  };
}
async function testReplicate(inputs, configs) {
  const missing = need(configs, ['replicate_api_token']);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const result = await new ReplicateProvider({
    apiToken: configs.replicate_api_token,
  }).generate({
    params: {
      mediaType: AIMediaType.IMAGE,
      model: inputs.model,
      prompt: inputs.prompt,
    },
  });
  return {
    success: true,
    message: 'Replicate accepted the request',
    details: {
      'Task ID': result.taskId,
      Status: result.taskStatus,
    },
  };
}
async function testFal(inputs, configs) {
  const missing = need(configs, ['fal_api_key']);
  if (missing)
    return {
      success: false,
      message: missing,
    };
  const result = await new FalProvider({
    apiKey: configs.fal_api_key,
  }).generate({
    params: {
      mediaType: AIMediaType.IMAGE,
      model: inputs.model,
      prompt: inputs.prompt,
    },
  });
  return {
    success: true,
    message: 'Fal accepted the request',
    details: {
      'Task ID': result.taskId,
      Status: result.taskStatus,
    },
  };
}
//#endregion
//#region src/routes/api/admin/settings/test.ts
async function POST$2({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.settings.write')))
      return respErr('Forbidden');
    const body = await request.json();
    const group = body?.group;
    const inputs = body?.inputs || {};
    const overrides = body?.configs || {};
    if (!group) return respErr('group is required');
    const spec = getTestSpec(group);
    if (!spec) return respErr(`No test available for "${group}"`);
    for (const field of spec.fields)
      if (field.required && !inputs[field.name])
        return respErr(`Missing required field: ${field.label}`);
    const configs = await getAllConfigs();
    for (const [key, value] of Object.entries(overrides))
      if (typeof value === 'string' && !isMaskedConfigValue(value))
        configs[key] = value;
    return respData(await runTest(group, inputs, configs));
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$3 = createFileRoute('/api/admin/settings/test')({
  server: { handlers: { POST: POST$2 } },
});
//#endregion
//#region src/routes/api/admin/roles/permissions.ts
async function checkAdmin(request) {
  const session = await getAuth().api.getSession({ headers: request.headers });
  if (!session?.user) throw new Error('Unauthorized');
  if (!(await hasPermission(session.user.id, 'admin.*')))
    throw new Error('Forbidden');
  return session;
}
async function GET$1({ request }) {
  try {
    await checkAdmin(request);
    const { searchParams } = new URL(request.url);
    const roleId = searchParams.get('roleId');
    if (!roleId) return respErr('roleId is required');
    return respData(await getRolePermissions(roleId));
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function PUT({ request }) {
  try {
    await checkAdmin(request);
    const { roleId, permissionIds } = await request.json();
    if (!roleId) return respErr('roleId is required');
    await assignPermissionsToRole(roleId, permissionIds || []);
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$2 = createFileRoute('/api/admin/roles/permissions')({
  server: {
    handlers: {
      GET: GET$1,
      PUT,
    },
  },
});
//#endregion
//#region src/routes/api/admin/roles/assign.ts
async function POST$1({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.*')))
      return respErr('Forbidden');
    const { userId, roleId } = await request.json();
    if (!userId || !roleId) return respErr('userId and roleId are required');
    await assignRoleToUser(userId, roleId);
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function DELETE({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.*')))
      return respErr('Forbidden');
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const roleId = searchParams.get('roleId');
    if (!userId || !roleId) return respErr('userId and roleId are required');
    await removeRoleFromUser(userId, roleId);
    return respOk();
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route$1 = createFileRoute('/api/admin/roles/assign')({
  server: {
    handlers: {
      POST: POST$1,
      DELETE,
    },
  },
});
//#endregion
//#region src/routes/api/admin/config/custom.ts
var noStore = {
  headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' },
};
async function GET({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.settings.read')))
      return respErr('Forbidden');
    return respData(await getCustomConfigs(), noStore);
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
async function POST({ request }) {
  try {
    const session = await getAuth().api.getSession({
      headers: request.headers,
    });
    if (!session?.user) return respErr('Unauthorized');
    if (!(await hasPermission(session.user.id, 'admin.settings.write')))
      return respErr('Forbidden');
    const body = await request.json();
    await replaceCustomConfigs(
      Array.isArray(body?.configs) ? body.configs : []
    );
    return respOk(noStore);
  } catch (error) {
    return respErr(error.message || 'Internal error');
  }
}
var Route = createFileRoute('/api/admin/config/custom')({
  server: {
    handlers: {
      GET,
      POST,
    },
  },
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$74.update({
  id: '/sitemap.xml',
  path: '/sitemap.xml',
  getParentRoute: () => Route$75,
});
var RobotsDottxtRoute = Route$73.update({
  id: '/robots.txt',
  path: '/robots.txt',
  getParentRoute: () => Route$75,
});
var PricingRoute = Route$72.update({
  id: '/pricing',
  path: '/pricing',
  getParentRoute: () => Route$75,
});
var LlmsDottxtRoute = Route$71.update({
  id: '/llms.txt',
  path: '/llms.txt',
  getParentRoute: () => Route$75,
});
var LlmsFullDottxtRoute = Route$70.update({
  id: '/llms-full.txt',
  path: '/llms-full.txt',
  getParentRoute: () => Route$75,
});
var SettingsRouteRoute = Route$69.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => Route$75,
});
var AdminRouteRoute = Route$68.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => Route$75,
});
var pagesRouteRoute = Route$67.update({
  id: '/(pages)',
  getParentRoute: () => Route$75,
});
var IndexRoute = Route$66.update({
  id: '/',
  path: '/',
  getParentRoute: () => Route$75,
});
var SettingsIndexRoute = Route$65.update({
  id: '/',
  path: '/',
  getParentRoute: () => SettingsRouteRoute,
});
var BlogIndexRoute = Route$76.update({
  id: '/blog/',
  path: '/blog/',
  getParentRoute: () => Route$75,
});
var AdminIndexRoute = Route$64.update({
  id: '/',
  path: '/',
  getParentRoute: () => AdminRouteRoute,
});
var SettingsTicketsRoute = Route$63.update({
  id: '/tickets',
  path: '/tickets',
  getParentRoute: () => SettingsRouteRoute,
});
var SettingsProfileRoute = Route$62.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => SettingsRouteRoute,
});
var SettingsPaymentsRoute = Route$61.update({
  id: '/payments',
  path: '/payments',
  getParentRoute: () => SettingsRouteRoute,
});
var SettingsCreditsRoute = Route$60.update({
  id: '/credits',
  path: '/credits',
  getParentRoute: () => SettingsRouteRoute,
});
var SettingsBillingRoute = Route$59.update({
  id: '/billing',
  path: '/billing',
  getParentRoute: () => SettingsRouteRoute,
});
var SettingsApikeysRoute = Route$58.update({
  id: '/apikeys',
  path: '/apikeys',
  getParentRoute: () => SettingsRouteRoute,
});
var BlogSlugRoute = Route$77.update({
  id: '/blog/$slug',
  path: '/blog/$slug',
  getParentRoute: () => Route$75,
});
var ApiTicketsRoute = Route$57.update({
  id: '/api/tickets',
  path: '/api/tickets',
  getParentRoute: () => Route$75,
});
var ApiCreditsRoute = Route$56.update({
  id: '/api/credits',
  path: '/api/credits',
  getParentRoute: () => Route$75,
});
var ApiApikeysRoute = Route$55.update({
  id: '/api/apikeys',
  path: '/api/apikeys',
  getParentRoute: () => Route$75,
});
var AdminUsersRoute = Route$54.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => AdminRouteRoute,
});
var AdminTicketsRoute = Route$53.update({
  id: '/tickets',
  path: '/tickets',
  getParentRoute: () => AdminRouteRoute,
});
var AdminSubscriptionsRoute = Route$52.update({
  id: '/subscriptions',
  path: '/subscriptions',
  getParentRoute: () => AdminRouteRoute,
});
var AdminSettingsRoute = Route$51.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => AdminRouteRoute,
});
var AdminRolesRoute = Route$50.update({
  id: '/roles',
  path: '/roles',
  getParentRoute: () => AdminRouteRoute,
});
var AdminPostsRoute = Route$49.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => AdminRouteRoute,
});
var AdminPermissionsRoute = Route$48.update({
  id: '/permissions',
  path: '/permissions',
  getParentRoute: () => AdminRouteRoute,
});
var AdminPaymentsRoute = Route$47.update({
  id: '/payments',
  path: '/payments',
  getParentRoute: () => AdminRouteRoute,
});
var AdminInviteCodesRoute = Route$46.update({
  id: '/invite-codes',
  path: '/invite-codes',
  getParentRoute: () => AdminRouteRoute,
});
var AdminCreditsRoute = Route$45.update({
  id: '/credits',
  path: '/credits',
  getParentRoute: () => AdminRouteRoute,
});
var AdminCategoriesRoute = Route$44.update({
  id: '/categories',
  path: '/categories',
  getParentRoute: () => AdminRouteRoute,
});
var pagesTermsOfServiceRoute = Route$43.update({
  id: '/terms-of-service',
  path: '/terms-of-service',
  getParentRoute: () => pagesRouteRoute,
});
var pagesPrivacyPolicyRoute = Route$42.update({
  id: '/privacy-policy',
  path: '/privacy-policy',
  getParentRoute: () => pagesRouteRoute,
});
var authVerifyEmailRoute = Route$41.update({
  id: '/(auth)/verify-email',
  path: '/verify-email',
  getParentRoute: () => Route$75,
});
var authSignUpRoute = Route$40.update({
  id: '/(auth)/sign-up',
  path: '/sign-up',
  getParentRoute: () => Route$75,
});
var authSignInRoute = Route$39.update({
  id: '/(auth)/sign-in',
  path: '/sign-in',
  getParentRoute: () => Route$75,
});
var authResetPasswordRoute = Route$38.update({
  id: '/(auth)/reset-password',
  path: '/reset-password',
  getParentRoute: () => Route$75,
});
var authRedeemInviteRoute = Route$37.update({
  id: '/(auth)/redeem-invite',
  path: '/redeem-invite',
  getParentRoute: () => Route$75,
});
var authForgotPasswordRoute = Route$36.update({
  id: '/(auth)/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => Route$75,
});
var ApiUserProfileRoute = Route$35.update({
  id: '/api/user/profile',
  path: '/api/user/profile',
  getParentRoute: () => Route$75,
});
var ApiUserPermissionsRoute = Route$34.update({
  id: '/api/user/permissions',
  path: '/api/user/permissions',
  getParentRoute: () => Route$75,
});
var ApiUserOrdersRoute = Route$33.update({
  id: '/api/user/orders',
  path: '/api/user/orders',
  getParentRoute: () => Route$75,
});
var ApiUserIsEmailVerifiedRoute = Route$32.update({
  id: '/api/user/is-email-verified',
  path: '/api/user/is-email-verified',
  getParentRoute: () => Route$75,
});
var ApiUserInfoRoute = Route$31.update({
  id: '/api/user/info',
  path: '/api/user/info',
  getParentRoute: () => Route$75,
});
var ApiUserCreditsRoute = Route$30.update({
  id: '/api/user/credits',
  path: '/api/user/credits',
  getParentRoute: () => Route$75,
});
var ApiTicketsIdRoute = Route$29.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => ApiTicketsRoute,
});
var ApiStorageUploadImageRoute = Route$28.update({
  id: '/api/storage/upload-image',
  path: '/api/storage/upload-image',
  getParentRoute: () => Route$75,
});
var ApiPaymentCheckoutRoute = Route$27.update({
  id: '/api/payment/checkout',
  path: '/api/payment/checkout',
  getParentRoute: () => Route$75,
});
var ApiPaymentCallbackRoute = Route$26.update({
  id: '/api/payment/callback',
  path: '/api/payment/callback',
  getParentRoute: () => Route$75,
});
var ApiInviteCodesValidateRoute = Route$25.update({
  id: '/api/invite-codes/validate',
  path: '/api/invite-codes/validate',
  getParentRoute: () => Route$75,
});
var ApiInviteCodesRedeemRoute = Route$24.update({
  id: '/api/invite-codes/redeem',
  path: '/api/invite-codes/redeem',
  getParentRoute: () => Route$75,
});
var ApiConfigPublicRoute = Route$23.update({
  id: '/api/config/public',
  path: '/api/config/public',
  getParentRoute: () => Route$75,
});
var ApiAuthTokenRoute = Route$22.update({
  id: '/api/auth/token',
  path: '/api/auth/token',
  getParentRoute: () => Route$75,
});
var ApiAuthSplatRoute = Route$21.update({
  id: '/api/auth/$',
  path: '/api/auth/$',
  getParentRoute: () => Route$75,
});
var ApiAdminTicketsRoute = Route$20.update({
  id: '/api/admin/tickets',
  path: '/api/admin/tickets',
  getParentRoute: () => Route$75,
});
var ApiAdminSubscriptionsRoute = Route$19.update({
  id: '/api/admin/subscriptions',
  path: '/api/admin/subscriptions',
  getParentRoute: () => Route$75,
});
var ApiAdminPostsRoute = Route$18.update({
  id: '/api/admin/posts',
  path: '/api/admin/posts',
  getParentRoute: () => Route$75,
});
var ApiAdminPermissionsRoute = Route$17.update({
  id: '/api/admin/permissions',
  path: '/api/admin/permissions',
  getParentRoute: () => Route$75,
});
var ApiAdminOrdersRoute = Route$16.update({
  id: '/api/admin/orders',
  path: '/api/admin/orders',
  getParentRoute: () => Route$75,
});
var ApiAdminInviteCodesRoute = Route$15.update({
  id: '/api/admin/invite-codes',
  path: '/api/admin/invite-codes',
  getParentRoute: () => Route$75,
});
var ApiAdminCreditsRoute = Route$14.update({
  id: '/api/admin/credits',
  path: '/api/admin/credits',
  getParentRoute: () => Route$75,
});
var ApiAdminConfigRoute = Route$13.update({
  id: '/api/admin/config',
  path: '/api/admin/config',
  getParentRoute: () => Route$75,
});
var ApiAdminCategoriesRoute = Route$12.update({
  id: '/api/admin/categories',
  path: '/api/admin/categories',
  getParentRoute: () => Route$75,
});
var ApiUserSubscriptionsIndexRoute = Route$11.update({
  id: '/api/user/subscriptions/',
  path: '/api/user/subscriptions/',
  getParentRoute: () => Route$75,
});
var ApiAdminUsersIndexRoute = Route$10.update({
  id: '/api/admin/users/',
  path: '/api/admin/users/',
  getParentRoute: () => Route$75,
});
var ApiAdminRolesIndexRoute = Route$9.update({
  id: '/api/admin/roles/',
  path: '/api/admin/roles/',
  getParentRoute: () => Route$75,
});
var ApiUserSubscriptionsCurrentRoute = Route$8.update({
  id: '/api/user/subscriptions/current',
  path: '/api/user/subscriptions/current',
  getParentRoute: () => Route$75,
});
var ApiUserSubscriptionsCancelRoute = Route$7.update({
  id: '/api/user/subscriptions/cancel',
  path: '/api/user/subscriptions/cancel',
  getParentRoute: () => Route$75,
});
var ApiPaymentNotifyProviderRoute = Route$6.update({
  id: '/api/payment/notify/$provider',
  path: '/api/payment/notify/$provider',
  getParentRoute: () => Route$75,
});
var ApiAdminUsersCreditsRoute = Route$5.update({
  id: '/api/admin/users/credits',
  path: '/api/admin/users/credits',
  getParentRoute: () => Route$75,
});
var ApiAdminTicketsIdRoute = Route$4.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => ApiAdminTicketsRoute,
});
var ApiAdminSettingsTestRoute = Route$3.update({
  id: '/api/admin/settings/test',
  path: '/api/admin/settings/test',
  getParentRoute: () => Route$75,
});
var ApiAdminRolesPermissionsRoute = Route$2.update({
  id: '/api/admin/roles/permissions',
  path: '/api/admin/roles/permissions',
  getParentRoute: () => Route$75,
});
var ApiAdminRolesAssignRoute = Route$1.update({
  id: '/api/admin/roles/assign',
  path: '/api/admin/roles/assign',
  getParentRoute: () => Route$75,
});
var ApiAdminConfigCustomRoute = Route.update({
  id: '/custom',
  path: '/custom',
  getParentRoute: () => ApiAdminConfigRoute,
});
var pagesRouteRouteChildren = {
  pagesPrivacyPolicyRoute,
  pagesTermsOfServiceRoute,
};
var pagesRouteRouteWithChildren = pagesRouteRoute._addFileChildren(
  pagesRouteRouteChildren
);
var AdminRouteRouteChildren = {
  AdminCategoriesRoute,
  AdminCreditsRoute,
  AdminInviteCodesRoute,
  AdminPaymentsRoute,
  AdminPermissionsRoute,
  AdminPostsRoute,
  AdminRolesRoute,
  AdminSettingsRoute,
  AdminSubscriptionsRoute,
  AdminTicketsRoute,
  AdminUsersRoute,
  AdminIndexRoute,
};
var AdminRouteRouteWithChildren = AdminRouteRoute._addFileChildren(
  AdminRouteRouteChildren
);
var SettingsRouteRouteChildren = {
  SettingsApikeysRoute,
  SettingsBillingRoute,
  SettingsCreditsRoute,
  SettingsPaymentsRoute,
  SettingsProfileRoute,
  SettingsTicketsRoute,
  SettingsIndexRoute,
};
var SettingsRouteRouteWithChildren = SettingsRouteRoute._addFileChildren(
  SettingsRouteRouteChildren
);
var ApiTicketsRouteChildren = { ApiTicketsIdRoute };
var ApiTicketsRouteWithChildren = ApiTicketsRoute._addFileChildren(
  ApiTicketsRouteChildren
);
var ApiAdminConfigRouteChildren = { ApiAdminConfigCustomRoute };
var ApiAdminConfigRouteWithChildren = ApiAdminConfigRoute._addFileChildren(
  ApiAdminConfigRouteChildren
);
var ApiAdminTicketsRouteChildren = { ApiAdminTicketsIdRoute };
var rootRouteChildren = {
  IndexRoute,
  pagesRouteRoute: pagesRouteRouteWithChildren,
  AdminRouteRoute: AdminRouteRouteWithChildren,
  SettingsRouteRoute: SettingsRouteRouteWithChildren,
  LlmsFullDottxtRoute,
  LlmsDottxtRoute,
  PricingRoute,
  RobotsDottxtRoute,
  SitemapDotxmlRoute,
  authForgotPasswordRoute,
  authRedeemInviteRoute,
  authResetPasswordRoute,
  authSignInRoute,
  authSignUpRoute,
  authVerifyEmailRoute,
  ApiApikeysRoute,
  ApiCreditsRoute,
  ApiTicketsRoute: ApiTicketsRouteWithChildren,
  BlogSlugRoute,
  BlogIndexRoute,
  ApiAdminCategoriesRoute,
  ApiAdminConfigRoute: ApiAdminConfigRouteWithChildren,
  ApiAdminCreditsRoute,
  ApiAdminInviteCodesRoute,
  ApiAdminOrdersRoute,
  ApiAdminPermissionsRoute,
  ApiAdminPostsRoute,
  ApiAdminSubscriptionsRoute,
  ApiAdminTicketsRoute: ApiAdminTicketsRoute._addFileChildren(
    ApiAdminTicketsRouteChildren
  ),
  ApiAuthSplatRoute,
  ApiAuthTokenRoute,
  ApiConfigPublicRoute,
  ApiInviteCodesRedeemRoute,
  ApiInviteCodesValidateRoute,
  ApiPaymentCallbackRoute,
  ApiPaymentCheckoutRoute,
  ApiStorageUploadImageRoute,
  ApiUserCreditsRoute,
  ApiUserInfoRoute,
  ApiUserIsEmailVerifiedRoute,
  ApiUserOrdersRoute,
  ApiUserPermissionsRoute,
  ApiUserProfileRoute,
  ApiAdminRolesAssignRoute,
  ApiAdminRolesPermissionsRoute,
  ApiAdminSettingsTestRoute,
  ApiAdminUsersCreditsRoute,
  ApiPaymentNotifyProviderRoute,
  ApiUserSubscriptionsCancelRoute,
  ApiUserSubscriptionsCurrentRoute,
  ApiAdminRolesIndexRoute,
  ApiAdminUsersIndexRoute,
  ApiUserSubscriptionsIndexRoute,
};
var routeTree = Route$75._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
    rewrite: {
      input: ({ url }) => deLocalizeUrl(url),
      output: ({ url }) => localizeUrl(url),
    },
  });
}
//#endregion
export { getRouter };
