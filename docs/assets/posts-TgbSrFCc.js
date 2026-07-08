import { Yl as n, n as r } from './index-CNkADuMW.js';
import { c as e, d as t } from './runtime-DPDP4QTt.js';

var i = n(`calendar`, [
    [`path`, { d: `M8 2v4`, key: `1cmpym` }],
    [`path`, { d: `M16 2v4`, key: `4m81vk` }],
    [
      `rect`,
      { width: `18`, height: `18`, x: `3`, y: `4`, rx: `2`, key: `1hopcy` },
    ],
    [`path`, { d: `M3 10h18`, key: `8toen8` }],
  ]),
  a = t({ default: () => l, meta: () => s }),
  o = e(),
  s = {
    title: `Blocks vs Components: What Survives a Rebrand`,
    description: `The core architectural split in ShipAny Next — disposable blocks read i18n and wire content, durable components render anything you feed them.`,
    created_at: `2026-05-28`,
    author_name: `ShipAny Team`,
    author_image: `/logo.png`,
  };
function c(e) {
  let t = {
    blockquote: `blockquote`,
    code: `code`,
    h2: `h2`,
    li: `li`,
    ol: `ol`,
    p: `p`,
    pre: `pre`,
    strong: `strong`,
    ...r(),
    ...e.components,
  };
  return (0, o.jsxs)(o.Fragment, {
    children: [
      (0, o.jsx)(t.p, {
        children: `Every template promises "easy customization," then makes you grep through twelve files to change a headline. ShipAny Next avoids that with one rule:`,
      }),
      `
`,
      (0, o.jsxs)(t.blockquote, {
        children: [
          `
`,
          (0, o.jsxs)(t.p, {
            children: [
              `A file that reads translations is a `,
              (0, o.jsx)(t.strong, { children: `block` }),
              `. A file that takes all content via props is a `,
              (0, o.jsx)(t.strong, { children: `component` }),
              `.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `Blocks are disposable` }),
      `
`,
      (0, o.jsxs)(t.p, {
        children: [
          `Blocks live in `,
          (0, o.jsx)(t.code, { children: `src/blocks/` }),
          ` and are zero-config page sections — `,
          (0, o.jsx)(t.code, { children: `<Hero />` }),
          `, `,
          (0, o.jsx)(t.code, { children: `<Pricing />` }),
          `, `,
          (0, o.jsx)(t.code, { children: `<Footer />` }),
          `. Each one reads i18n messages, builds a content config, and passes it to a component. They're the demo material: when you start a real project, you delete them and write your own.`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.pre, {
        children: (0, o.jsx)(t.code, {
          className: `language-tsx`,
          children: `// src/blocks/header.tsx — a block: reads i18n, wires a component
export async function Header() {
  const t = await getTranslations('landing');
  const navLinks = [{ href: '/#features', label: t('nav.features') }];
  return <SiteHeader navLinks={navLinks} />;
}
`,
        }),
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `Components are durable` }),
      `
`,
      (0, o.jsxs)(t.p, {
        children: [
          `Components live in `,
          (0, o.jsx)(t.code, { children: `src/components/` }),
          ` and never read translations. `,
          (0, o.jsx)(t.code, { children: `SiteHeader` }),
          `, `,
          (0, o.jsx)(t.code, { children: `PricingTable` }),
          `, `,
          (0, o.jsx)(t.code, { children: `AppSidebar` }),
          ` — all content arrives via props. They don't know your app's name, your copy, or your locale. That's exactly why they survive every rebrand.`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `Why the split matters` }),
      `
`,
      (0, o.jsx)(t.p, {
        children: `When you rebrand or start a new project from the template:`,
      }),
      `
`,
      (0, o.jsxs)(t.ol, {
        children: [
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `Keep` }),
              ` `,
              (0, o.jsx)(t.code, { children: `src/components/*` }),
              ` — the chassis.`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `Rewrite` }),
              ` `,
              (0, o.jsx)(t.code, { children: `src/blocks/*` }),
              ` — the content wiring.`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `Rewrite` }),
              ` the translation JSON files that feed the blocks.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, o.jsxs)(t.p, {
        children: [
          `The page files themselves stay tiny — `,
          (0, o.jsx)(t.code, { children: `page.tsx` }),
          ` is pure composition, a stack of blocks. Changing your entire landing page touches blocks and JSON, never the primitives. The split is not cosmetic; it's what makes customization a rewrite of intent instead of a fight with someone else's design decisions.`,
        ],
      }),
    ],
  });
}
function l(e = {}) {
  let { wrapper: t } = { ...r(), ...e.components };
  return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e);
}
var u = t({ default: () => p, meta: () => d }),
  d = {
    title: `Blocks 与 Components:改版后留下的是什么`,
    description: `ShipAny Next 的核心架构切分——可抛弃的 block 读取文案并装配内容,耐用的 component 只渲染传入的 props。`,
    created_at: `2026-05-28`,
    author_name: `ShipAny 团队`,
    author_image: `/logo.png`,
  };
function f(e) {
  let t = {
    blockquote: `blockquote`,
    code: `code`,
    h2: `h2`,
    li: `li`,
    ol: `ol`,
    p: `p`,
    pre: `pre`,
    strong: `strong`,
    ...r(),
    ...e.components,
  };
  return (0, o.jsxs)(o.Fragment, {
    children: [
      (0, o.jsx)(t.p, {
        children: `每个模板都宣称"轻松定制",然后让你为了改一句标题翻遍十二个文件。ShipAny Next 用一条规则避免这种局面:`,
      }),
      `
`,
      (0, o.jsxs)(t.blockquote, {
        children: [
          `
`,
          (0, o.jsxs)(t.p, {
            children: [
              `读取翻译文案的文件是 `,
              (0, o.jsx)(t.strong, { children: `block` }),
              `,所有内容都通过 props 传入的文件是 `,
              (0, o.jsx)(t.strong, { children: `component` }),
              `。`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `Block 是可抛弃的` }),
      `
`,
      (0, o.jsxs)(t.p, {
        children: [
          `Block 放在 `,
          (0, o.jsx)(t.code, { children: `src/blocks/` }),
          `,是零配置的页面区块——`,
          (0, o.jsx)(t.code, { children: `<Hero />` }),
          `、`,
          (0, o.jsx)(t.code, { children: `<Pricing />` }),
          `、`,
          (0, o.jsx)(t.code, { children: `<Footer />` }),
          `。每个 block 读取 i18n 文案,组装内容配置,再传给 component。它们是演示素材:真正开始项目时,删掉它们,写你自己的。`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.pre, {
        children: (0, o.jsx)(t.code, {
          className: `language-tsx`,
          children: `// src/blocks/header.tsx — block:读 i18n,装配 component
export async function Header() {
  const t = await getTranslations('landing');
  const navLinks = [{ href: '/#features', label: t('nav.features') }];
  return <SiteHeader navLinks={navLinks} />;
}
`,
        }),
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `Component 是耐用的` }),
      `
`,
      (0, o.jsxs)(t.p, {
        children: [
          `Component 放在 `,
          (0, o.jsx)(t.code, { children: `src/components/` }),
          `,永远不读翻译。`,
          (0, o.jsx)(t.code, { children: `SiteHeader` }),
          `、`,
          (0, o.jsx)(t.code, { children: `PricingTable` }),
          `、`,
          (0, o.jsx)(t.code, { children: `AppSidebar` }),
          `——所有内容都来自 props。它们不知道你的应用叫什么、文案是什么、语言是什么,这正是它们能挺过每一次改版的原因。`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `为什么这个切分重要` }),
      `
`,
      (0, o.jsx)(t.p, { children: `当你改版或基于模板开新项目时:` }),
      `
`,
      (0, o.jsxs)(t.ol, {
        children: [
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `保留` }),
              ` `,
              (0, o.jsx)(t.code, { children: `src/components/*` }),
              ` —— 底盘。`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `重写` }),
              ` `,
              (0, o.jsx)(t.code, { children: `src/blocks/*` }),
              ` —— 内容装配层。`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `重写` }),
              `喂给 block 的翻译 JSON 文件。`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, o.jsxs)(t.p, {
        children: [
          `页面文件本身始终很小——`,
          (0, o.jsx)(t.code, { children: `page.tsx` }),
          ` 是纯组合,一摞 block 而已。重做整个落地页只需要动 block 和 JSON,永远不碰基础组件。这个切分不是表面功夫:它让定制变成"重写意图",而不是和别人的设计决策搏斗。`,
        ],
      }),
    ],
  });
}
function p(e = {}) {
  let { wrapper: t } = { ...r(), ...e.components };
  return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(f, { ...e }) }) : f(e);
}
var m = t({ default: () => _, meta: () => h }),
  h = {
    title: `What is ShipAny Next`,
    description: `ShipAny Next is a headless SaaS engine — auth, payments, subscriptions, credits, RBAC, and i18n pre-wired so you can focus on your product.`,
    created_at: `2026-05-20`,
    author_name: `ShipAny Team`,
    author_image: `/logo.png`,
  };
function g(e) {
  let t = {
    code: `code`,
    h2: `h2`,
    li: `li`,
    ol: `ol`,
    p: `p`,
    pre: `pre`,
    strong: `strong`,
    ul: `ul`,
    ...r(),
    ...e.components,
  };
  return (0, o.jsxs)(o.Fragment, {
    children: [
      (0, o.jsxs)(t.p, {
        children: [
          `ShipAny Next is a `,
          (0, o.jsx)(t.strong, { children: `headless SaaS engine` }),
          `: pre-wired business logic with minimal UI. Instead of shipping yet another themed template, it gives you the machinery every SaaS needs — authentication, payments, subscriptions, a credit system, role-based access control, and internationalization — and stays out of the way of your product pages.`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `Why headless?` }),
      `
`,
      (0, o.jsx)(t.p, {
        children: `Most SaaS boilerplates couple their business logic to a specific landing page design. The moment you rebrand, you fight the template. ShipAny Next splits the codebase along a different line:`,
      }),
      `
`,
      (0, o.jsxs)(t.ul, {
        children: [
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, {
                children: (0, o.jsx)(t.code, { children: `src/components/` }),
              }),
              ` — durable primitives. Pricing tables, headers, sidebars, shadcn/ui. These survive a rebrand.`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, {
                children: (0, o.jsx)(t.code, { children: `src/blocks/` }),
              }),
              ` — disposable page sections. They read your translations and wire content into the primitives. Rewrite them per project.`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, {
                children: (0, o.jsx)(t.code, { children: `src/modules/` }),
              }),
              ` — pure business logic. Payments, credits, subscriptions, RBAC. Each module is a standalone service file you can delete without breaking the others.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `What's in the box` }),
      `
`,
      (0, o.jsxs)(t.ol, {
        children: [
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `Authentication` }),
              ` — email/password and OAuth via better-auth, with session management and account linking.`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `Payments` }),
              ` — Stripe, PayPal, and Creem providers behind a single `,
              (0, o.jsx)(t.code, { children: `PaymentManager` }),
              ` interface.`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `Credits` }),
              ` — FIFO consumption, expiration, auto-grant on signup, and revocation for usage-based billing.`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `RBAC` }),
              ` — roles and permissions with wildcard matching, plus a full admin panel.`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `Multi-database` }),
              ` — Drizzle ORM with PostgreSQL, MySQL, SQLite, Turso, and Cloudflare D1 support.`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `i18n` }),
              ` — English and Chinese built in, locale-aware routing via next-intl.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `Getting started` }),
      `
`,
      (0, o.jsx)(t.pre, {
        children: (0, o.jsx)(t.code, {
          className: `language-bash`,
          children: `pnpm install
cp .env.example .env.development
pnpm db:push
pnpm dev
`,
        }),
      }),
      `
`,
      (0, o.jsx)(t.p, {
        children: `That's it — the engine runs on SQLite out of the box, and you can switch databases by changing one env var. Build your product on top, not the plumbing underneath.`,
      }),
    ],
  });
}
function _(e = {}) {
  let { wrapper: t } = { ...r(), ...e.components };
  return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(g, { ...e }) }) : g(e);
}
var v = t({ default: () => x, meta: () => y }),
  y = {
    title: `什么是 ShipAny Next`,
    description: `ShipAny Next 是一个 Headless SaaS 引擎——认证、支付、订阅、积分、权限和国际化全部预置,让你专注于打造产品本身。`,
    created_at: `2026-05-20`,
    author_name: `ShipAny 团队`,
    author_image: `/logo.png`,
  };
function b(e) {
  let t = {
    code: `code`,
    h2: `h2`,
    li: `li`,
    ol: `ol`,
    p: `p`,
    pre: `pre`,
    strong: `strong`,
    ul: `ul`,
    ...r(),
    ...e.components,
  };
  return (0, o.jsxs)(o.Fragment, {
    children: [
      (0, o.jsxs)(t.p, {
        children: [
          `ShipAny Next 是一个 `,
          (0, o.jsx)(t.strong, { children: `Headless SaaS 引擎` }),
          `:预置完整业务逻辑,UI 保持最小化。它不是又一个绑定特定主题的模板,而是把每个 SaaS 都需要的底层机制——认证、支付、订阅、积分系统、基于角色的权限控制和国际化——全部装配好,把产品页面的设计自由留给你。`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `为什么是 Headless?` }),
      `
`,
      (0, o.jsx)(t.p, {
        children: `大多数 SaaS 模板把业务逻辑和特定的落地页设计耦合在一起,一旦改版就要和模板搏斗。ShipAny Next 按另一条线切分代码:`,
      }),
      `
`,
      (0, o.jsxs)(t.ul, {
        children: [
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, {
                children: (0, o.jsx)(t.code, { children: `src/components/` }),
              }),
              ` — 耐用的基础组件。价格表、页头、侧边栏、shadcn/ui,改版换皮时它们保持不变。`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, {
                children: (0, o.jsx)(t.code, { children: `src/blocks/` }),
              }),
              ` — 可抛弃的页面区块。读取翻译文案,把内容装配进基础组件,每个项目都应该重写。`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, {
                children: (0, o.jsx)(t.code, { children: `src/modules/` }),
              }),
              ` — 纯业务逻辑。支付、积分、订阅、权限,每个模块都是独立的 service 文件,删掉任何一个都不影响其他模块。`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `开箱即用的能力` }),
      `
`,
      (0, o.jsxs)(t.ol, {
        children: [
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `认证` }),
              ` — 基于 better-auth 的邮箱密码和 OAuth 登录,带会话管理和账号关联。`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `支付` }),
              ` — Stripe、PayPal、Creem 多 Provider,统一在 `,
              (0, o.jsx)(t.code, { children: `PaymentManager` }),
              ` 接口之后。`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `积分` }),
              ` — FIFO 消耗、过期、注册自动发放、撤销,支持按量计费。`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `权限` }),
              ` — 角色与权限通配符匹配,配套完整的管理后台。`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `多数据库` }),
              ` — Drizzle ORM,支持 PostgreSQL、MySQL、SQLite、Turso 和 Cloudflare D1。`,
            ],
          }),
          `
`,
          (0, o.jsxs)(t.li, {
            children: [
              (0, o.jsx)(t.strong, { children: `国际化` }),
              ` — 内置中英双语,基于 next-intl 的语言感知路由。`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      (0, o.jsx)(t.h2, { children: `快速开始` }),
      `
`,
      (0, o.jsx)(t.pre, {
        children: (0, o.jsx)(t.code, {
          className: `language-bash`,
          children: `pnpm install
cp .env.example .env.development
pnpm db:push
pnpm dev
`,
        }),
      }),
      `
`,
      (0, o.jsx)(t.p, {
        children: `就这么简单——引擎默认跑在 SQLite 上,改一个环境变量即可切换数据库。把时间花在产品上,而不是底层管道上。`,
      }),
    ],
  });
}
function x(e = {}) {
  let { wrapper: t } = { ...r(), ...e.components };
  return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(b, { ...e }) }) : b(e);
}
var S = [`what-is-shipany`, `blocks-vs-components`],
  C = Object.assign({
    '/src/content/posts/blocks-vs-components.en.mdx': a,
    '/src/content/posts/blocks-vs-components.zh.mdx': u,
    '/src/content/posts/what-is-shipany.en.mdx': m,
    '/src/content/posts/what-is-shipany.zh.mdx': v,
  });
function w(e, t) {
  return S.includes(e)
    ? (C[`/src/content/posts/${e}.${t}.mdx`] ??
        C[`/src/content/posts/${e}.en.mdx`] ??
        null)
    : null;
}
function T(e, t) {
  return new Intl.DateTimeFormat(t === `zh` ? `zh-CN` : `en-US`, {
    year: `numeric`,
    month: t === `zh` ? `long` : `short`,
    day: `numeric`,
  }).format(new Date(e));
}
export { w as n, i as r, T as t };
