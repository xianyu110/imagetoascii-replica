import { t as __exportAll } from './chunk-D7D4PA-g.js';

import '../server.js';

import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useMDXComponents } from '@mdx-js/react';

//#region src/content/posts/blocks-vs-components.en.mdx
var blocks_vs_components_en_exports = /* @__PURE__ */ __exportAll({
  default: () => MDXContent$3,
  meta: () => meta$3,
});
var meta$3 = {
  title: 'Blocks vs Components: What Survives a Rebrand',
  description:
    'The core architectural split in ShipAny Next — disposable blocks read i18n and wire content, durable components render anything you feed them.',
  created_at: '2026-05-28',
  author_name: 'ShipAny Team',
  author_image: '/logo.png',
};
function _createMdxContent$3(props) {
  const _components = {
    blockquote: 'blockquote',
    code: 'code',
    h2: 'h2',
    li: 'li',
    ol: 'ol',
    p: 'p',
    pre: 'pre',
    strong: 'strong',
    ...useMDXComponents(),
    ...props.components,
  };
  return jsxs(Fragment, {
    children: [
      jsx(_components.p, {
        children:
          'Every template promises "easy customization," then makes you grep through twelve files to change a headline. ShipAny Next avoids that with one rule:',
      }),
      '\n',
      jsxs(_components.blockquote, {
        children: [
          '\n',
          jsxs(_components.p, {
            children: [
              'A file that reads translations is a ',
              jsx(_components.strong, { children: 'block' }),
              '. A file that takes all content via props is a ',
              jsx(_components.strong, { children: 'component' }),
              '.',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: 'Blocks are disposable' }),
      '\n',
      jsxs(_components.p, {
        children: [
          'Blocks live in ',
          jsx(_components.code, { children: 'src/blocks/' }),
          ' and are zero-config page sections — ',
          jsx(_components.code, { children: '<Hero />' }),
          ', ',
          jsx(_components.code, { children: '<Pricing />' }),
          ', ',
          jsx(_components.code, { children: '<Footer />' }),
          ". Each one reads i18n messages, builds a content config, and passes it to a component. They're the demo material: when you start a real project, you delete them and write your own.",
        ],
      }),
      '\n',
      jsx(_components.pre, {
        children: jsx(_components.code, {
          className: 'language-tsx',
          children:
            "// src/blocks/header.tsx — a block: reads i18n, wires a component\nexport async function Header() {\n  const t = await getTranslations('landing');\n  const navLinks = [{ href: '/#features', label: t('nav.features') }];\n  return <SiteHeader navLinks={navLinks} />;\n}\n",
        }),
      }),
      '\n',
      jsx(_components.h2, { children: 'Components are durable' }),
      '\n',
      jsxs(_components.p, {
        children: [
          'Components live in ',
          jsx(_components.code, { children: 'src/components/' }),
          ' and never read translations. ',
          jsx(_components.code, { children: 'SiteHeader' }),
          ', ',
          jsx(_components.code, { children: 'PricingTable' }),
          ', ',
          jsx(_components.code, { children: 'AppSidebar' }),
          " — all content arrives via props. They don't know your app's name, your copy, or your locale. That's exactly why they survive every rebrand.",
        ],
      }),
      '\n',
      jsx(_components.h2, { children: 'Why the split matters' }),
      '\n',
      jsx(_components.p, {
        children: 'When you rebrand or start a new project from the template:',
      }),
      '\n',
      jsxs(_components.ol, {
        children: [
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Keep' }),
              ' ',
              jsx(_components.code, { children: 'src/components/*' }),
              ' — the chassis.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Rewrite' }),
              ' ',
              jsx(_components.code, { children: 'src/blocks/*' }),
              ' — the content wiring.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Rewrite' }),
              ' the translation JSON files that feed the blocks.',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsxs(_components.p, {
        children: [
          'The page files themselves stay tiny — ',
          jsx(_components.code, { children: 'page.tsx' }),
          " is pure composition, a stack of blocks. Changing your entire landing page touches blocks and JSON, never the primitives. The split is not cosmetic; it's what makes customization a rewrite of intent instead of a fight with someone else's design decisions.",
        ],
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
//#region src/content/posts/blocks-vs-components.zh.mdx
var blocks_vs_components_zh_exports = /* @__PURE__ */ __exportAll({
  default: () => MDXContent$2,
  meta: () => meta$2,
});
var meta$2 = {
  title: 'Blocks 与 Components:改版后留下的是什么',
  description:
    'ShipAny Next 的核心架构切分——可抛弃的 block 读取文案并装配内容,耐用的 component 只渲染传入的 props。',
  created_at: '2026-05-28',
  author_name: 'ShipAny 团队',
  author_image: '/logo.png',
};
function _createMdxContent$2(props) {
  const _components = {
    blockquote: 'blockquote',
    code: 'code',
    h2: 'h2',
    li: 'li',
    ol: 'ol',
    p: 'p',
    pre: 'pre',
    strong: 'strong',
    ...useMDXComponents(),
    ...props.components,
  };
  return jsxs(Fragment, {
    children: [
      jsx(_components.p, {
        children:
          '每个模板都宣称"轻松定制",然后让你为了改一句标题翻遍十二个文件。ShipAny Next 用一条规则避免这种局面:',
      }),
      '\n',
      jsxs(_components.blockquote, {
        children: [
          '\n',
          jsxs(_components.p, {
            children: [
              '读取翻译文案的文件是 ',
              jsx(_components.strong, { children: 'block' }),
              ',所有内容都通过 props 传入的文件是 ',
              jsx(_components.strong, { children: 'component' }),
              '。',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: 'Block 是可抛弃的' }),
      '\n',
      jsxs(_components.p, {
        children: [
          'Block 放在 ',
          jsx(_components.code, { children: 'src/blocks/' }),
          ',是零配置的页面区块——',
          jsx(_components.code, { children: '<Hero />' }),
          '、',
          jsx(_components.code, { children: '<Pricing />' }),
          '、',
          jsx(_components.code, { children: '<Footer />' }),
          '。每个 block 读取 i18n 文案,组装内容配置,再传给 component。它们是演示素材:真正开始项目时,删掉它们,写你自己的。',
        ],
      }),
      '\n',
      jsx(_components.pre, {
        children: jsx(_components.code, {
          className: 'language-tsx',
          children:
            "// src/blocks/header.tsx — block:读 i18n,装配 component\nexport async function Header() {\n  const t = await getTranslations('landing');\n  const navLinks = [{ href: '/#features', label: t('nav.features') }];\n  return <SiteHeader navLinks={navLinks} />;\n}\n",
        }),
      }),
      '\n',
      jsx(_components.h2, { children: 'Component 是耐用的' }),
      '\n',
      jsxs(_components.p, {
        children: [
          'Component 放在 ',
          jsx(_components.code, { children: 'src/components/' }),
          ',永远不读翻译。',
          jsx(_components.code, { children: 'SiteHeader' }),
          '、',
          jsx(_components.code, { children: 'PricingTable' }),
          '、',
          jsx(_components.code, { children: 'AppSidebar' }),
          '——所有内容都来自 props。它们不知道你的应用叫什么、文案是什么、语言是什么,这正是它们能挺过每一次改版的原因。',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: '为什么这个切分重要' }),
      '\n',
      jsx(_components.p, { children: '当你改版或基于模板开新项目时:' }),
      '\n',
      jsxs(_components.ol, {
        children: [
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '保留' }),
              ' ',
              jsx(_components.code, { children: 'src/components/*' }),
              ' —— 底盘。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '重写' }),
              ' ',
              jsx(_components.code, { children: 'src/blocks/*' }),
              ' —— 内容装配层。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '重写' }),
              '喂给 block 的翻译 JSON 文件。',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsxs(_components.p, {
        children: [
          '页面文件本身始终很小——',
          jsx(_components.code, { children: 'page.tsx' }),
          ' 是纯组合,一摞 block 而已。重做整个落地页只需要动 block 和 JSON,永远不碰基础组件。这个切分不是表面功夫:它让定制变成"重写意图",而不是和别人的设计决策搏斗。',
        ],
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
//#region src/content/posts/what-is-shipany.en.mdx
var what_is_shipany_en_exports = /* @__PURE__ */ __exportAll({
  default: () => MDXContent$1,
  meta: () => meta$1,
});
var meta$1 = {
  title: 'What is ShipAny Next',
  description:
    'ShipAny Next is a headless SaaS engine — auth, payments, subscriptions, credits, RBAC, and i18n pre-wired so you can focus on your product.',
  created_at: '2026-05-20',
  author_name: 'ShipAny Team',
  author_image: '/logo.png',
};
function _createMdxContent$1(props) {
  const _components = {
    code: 'code',
    h2: 'h2',
    li: 'li',
    ol: 'ol',
    p: 'p',
    pre: 'pre',
    strong: 'strong',
    ul: 'ul',
    ...useMDXComponents(),
    ...props.components,
  };
  return jsxs(Fragment, {
    children: [
      jsxs(_components.p, {
        children: [
          'ShipAny Next is a ',
          jsx(_components.strong, { children: 'headless SaaS engine' }),
          ': pre-wired business logic with minimal UI. Instead of shipping yet another themed template, it gives you the machinery every SaaS needs — authentication, payments, subscriptions, a credit system, role-based access control, and internationalization — and stays out of the way of your product pages.',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: 'Why headless?' }),
      '\n',
      jsx(_components.p, {
        children:
          'Most SaaS boilerplates couple their business logic to a specific landing page design. The moment you rebrand, you fight the template. ShipAny Next splits the codebase along a different line:',
      }),
      '\n',
      jsxs(_components.ul, {
        children: [
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, {
                children: jsx(_components.code, {
                  children: 'src/components/',
                }),
              }),
              ' — durable primitives. Pricing tables, headers, sidebars, shadcn/ui. These survive a rebrand.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, {
                children: jsx(_components.code, { children: 'src/blocks/' }),
              }),
              ' — disposable page sections. They read your translations and wire content into the primitives. Rewrite them per project.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, {
                children: jsx(_components.code, { children: 'src/modules/' }),
              }),
              ' — pure business logic. Payments, credits, subscriptions, RBAC. Each module is a standalone service file you can delete without breaking the others.',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: "What's in the box" }),
      '\n',
      jsxs(_components.ol, {
        children: [
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Authentication' }),
              ' — email/password and OAuth via better-auth, with session management and account linking.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Payments' }),
              ' — Stripe, PayPal, and Creem providers behind a single ',
              jsx(_components.code, { children: 'PaymentManager' }),
              ' interface.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Credits' }),
              ' — FIFO consumption, expiration, auto-grant on signup, and revocation for usage-based billing.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'RBAC' }),
              ' — roles and permissions with wildcard matching, plus a full admin panel.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'Multi-database' }),
              ' — Drizzle ORM with PostgreSQL, MySQL, SQLite, Turso, and Cloudflare D1 support.',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: 'i18n' }),
              ' — English and Chinese built in, locale-aware routing via next-intl.',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: 'Getting started' }),
      '\n',
      jsx(_components.pre, {
        children: jsx(_components.code, {
          className: 'language-bash',
          children:
            'pnpm install\ncp .env.example .env.development\npnpm db:push\npnpm dev\n',
        }),
      }),
      '\n',
      jsx(_components.p, {
        children:
          "That's it — the engine runs on SQLite out of the box, and you can switch databases by changing one env var. Build your product on top, not the plumbing underneath.",
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
//#region src/content/posts/what-is-shipany.zh.mdx
var what_is_shipany_zh_exports = /* @__PURE__ */ __exportAll({
  default: () => MDXContent,
  meta: () => meta,
});
var meta = {
  title: '什么是 ShipAny Next',
  description:
    'ShipAny Next 是一个 Headless SaaS 引擎——认证、支付、订阅、积分、权限和国际化全部预置,让你专注于打造产品本身。',
  created_at: '2026-05-20',
  author_name: 'ShipAny 团队',
  author_image: '/logo.png',
};
function _createMdxContent(props) {
  const _components = {
    code: 'code',
    h2: 'h2',
    li: 'li',
    ol: 'ol',
    p: 'p',
    pre: 'pre',
    strong: 'strong',
    ul: 'ul',
    ...useMDXComponents(),
    ...props.components,
  };
  return jsxs(Fragment, {
    children: [
      jsxs(_components.p, {
        children: [
          'ShipAny Next 是一个 ',
          jsx(_components.strong, { children: 'Headless SaaS 引擎' }),
          ':预置完整业务逻辑,UI 保持最小化。它不是又一个绑定特定主题的模板,而是把每个 SaaS 都需要的底层机制——认证、支付、订阅、积分系统、基于角色的权限控制和国际化——全部装配好,把产品页面的设计自由留给你。',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: '为什么是 Headless?' }),
      '\n',
      jsx(_components.p, {
        children:
          '大多数 SaaS 模板把业务逻辑和特定的落地页设计耦合在一起,一旦改版就要和模板搏斗。ShipAny Next 按另一条线切分代码:',
      }),
      '\n',
      jsxs(_components.ul, {
        children: [
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, {
                children: jsx(_components.code, {
                  children: 'src/components/',
                }),
              }),
              ' — 耐用的基础组件。价格表、页头、侧边栏、shadcn/ui,改版换皮时它们保持不变。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, {
                children: jsx(_components.code, { children: 'src/blocks/' }),
              }),
              ' — 可抛弃的页面区块。读取翻译文案,把内容装配进基础组件,每个项目都应该重写。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, {
                children: jsx(_components.code, { children: 'src/modules/' }),
              }),
              ' — 纯业务逻辑。支付、积分、订阅、权限,每个模块都是独立的 service 文件,删掉任何一个都不影响其他模块。',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: '开箱即用的能力' }),
      '\n',
      jsxs(_components.ol, {
        children: [
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '认证' }),
              ' — 基于 better-auth 的邮箱密码和 OAuth 登录,带会话管理和账号关联。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '支付' }),
              ' — Stripe、PayPal、Creem 多 Provider,统一在 ',
              jsx(_components.code, { children: 'PaymentManager' }),
              ' 接口之后。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '积分' }),
              ' — FIFO 消耗、过期、注册自动发放、撤销,支持按量计费。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '权限' }),
              ' — 角色与权限通配符匹配,配套完整的管理后台。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '多数据库' }),
              ' — Drizzle ORM,支持 PostgreSQL、MySQL、SQLite、Turso 和 Cloudflare D1。',
            ],
          }),
          '\n',
          jsxs(_components.li, {
            children: [
              jsx(_components.strong, { children: '国际化' }),
              ' — 内置中英双语,基于 next-intl 的语言感知路由。',
            ],
          }),
          '\n',
        ],
      }),
      '\n',
      jsx(_components.h2, { children: '快速开始' }),
      '\n',
      jsx(_components.pre, {
        children: jsx(_components.code, {
          className: 'language-bash',
          children:
            'pnpm install\ncp .env.example .env.development\npnpm db:push\npnpm dev\n',
        }),
      }),
      '\n',
      jsx(_components.p, {
        children:
          '就这么简单——引擎默认跑在 SQLite 上,改一个环境变量即可切换数据库。把时间花在产品上,而不是底层管道上。',
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
//#region src/content/posts/index.ts
/**
 * Local blog posts written as MDX files in this directory.
 * File naming: `<slug>.<locale>.mdx` (falls back to the base locale).
 * Register every local post slug here — it drives loading and the sitemap.
 *
 * This module is isomorphic (safe in client bundles). Database posts are
 * fetched through the server functions in ./server.ts and merged with the
 * local posts via the pure helpers below.
 */
var BLOG_POST_SLUGS = ['what-is-shipany', 'blocks-vs-components'];
var postModules = /* #__PURE__ */ Object.assign({
  '/src/content/posts/blocks-vs-components.en.mdx':
    blocks_vs_components_en_exports,
  '/src/content/posts/blocks-vs-components.zh.mdx':
    blocks_vs_components_zh_exports,
  '/src/content/posts/what-is-shipany.en.mdx': what_is_shipany_en_exports,
  '/src/content/posts/what-is-shipany.zh.mdx': what_is_shipany_zh_exports,
});
function loadLocalPost(slug, locale) {
  if (!BLOG_POST_SLUGS.includes(slug)) return null;
  return (
    postModules[`/src/content/posts/${slug}.${locale}.mdx`] ??
    postModules[`/src/content/posts/${slug}.en.mdx`] ??
    null
  );
}
function localPostToItem(slug, meta) {
  return {
    slug,
    title: meta.title,
    description: meta.description,
    image: meta.image,
    createdAt: new Date(meta.created_at).toISOString(),
    authorName: meta.author_name,
    authorImage: meta.author_image,
    source: 'local',
  };
}
function getLocalPosts(locale) {
  return BLOG_POST_SLUGS.map((slug) => ({
    slug,
    mod: loadLocalPost(slug, locale),
  }))
    .filter((m) => m.mod !== null)
    .map(({ slug, mod }) => localPostToItem(slug, mod.meta));
}
/**
 * Merge database posts with local MDX posts, deduped by slug
 * (database wins), newest first.
 */
function mergePosts(dbPosts, localPosts, options = {}) {
  const dbSlugs = new Set(dbPosts.map((p) => p.slug));
  const merged = [
    ...dbPosts,
    ...localPosts.filter((p) => !dbSlugs.has(p.slug)),
  ].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return options.limit ? merged.slice(0, options.limit) : merged;
}
function formatPostDate(dateIso, locale) {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: locale === 'zh' ? 'long' : 'short',
    day: 'numeric',
  }).format(new Date(dateIso));
}
//#endregion
export {
  mergePosts as i,
  getLocalPosts as n,
  loadLocalPost as r,
  formatPostDate as t,
};
