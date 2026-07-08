import {
  a as G,
  D as H,
  r as K,
  E as oe,
  t as q,
  I as se,
  P as U,
  B as V,
  R as W,
} from './button-bN-wY-Ql.js';
import { o as Ce, n as Se, t as we, a as xe } from './card-DUh0Lb3Z.js';
import { t as d } from './circle-x-EAXrNSn_.js';
import {
  u as _e,
  t as ge,
  H as he,
} from './createBaseUIEventDetails-eqndMbrJ.js';
import {
  t as Ae,
  n as De,
  i as Ee,
  r as ke,
  o as Oe,
  a as Te,
} from './dialog-CfiOugxY.js';
import { i as be, U as ve, W as ye } from './DialogTitle-CswfcBHR.js';
import { t as X } from './dynamic-BogkA4sc.js';
import {
  Yl as _,
  nt as A,
  yt as ae,
  ct as b,
  gt as C,
  lt as D,
  it as E,
  Fa as ee,
  rt as F,
  Xl as g,
  St as h,
  st as I,
  wt as ie,
  nu as j,
  mu as k,
  ut as L,
  Jl as m,
  ot as M,
  pt as N,
  at as ne,
  mt as O,
  Ct as p,
  ql as P,
  vt as R,
  ft as re,
  eu as S,
  hu as T,
  Tt as te,
  _t as v,
  ht as w,
  dt as x,
  bt as y,
  xt as z,
} from './index-CNkADuMW.js';
import {
  a as ce,
  n as de,
  o as fe,
  c as le,
  s as me,
  r as pe,
  i as ue,
  t as Y,
} from './input-BzjUrduj.js';
import { t as J } from './label-BC74pi7G.js';
import { t as f } from './plus-Cj2WBfjX.js';
import { c as e, l as n, f as t } from './runtime-DPDP4QTt.js';
import {
  i as a,
  r as c,
  a as i,
  s as l,
  n as o,
  o as s,
  t as u,
} from './select-7fwjhBbT.js';
import { t as je } from './useAriaLabelledBy-Cko5dQFm.js';
import { t as r } from './useMutation-B1ymgNeO.js';
import { t as B } from './utils-DXalBF5w.js';

var Me = _(`flask-conical`, [
    [
      `path`,
      {
        d: `M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,
        key: `18mbvz`,
      },
    ],
    [`path`, { d: `M6.453 15h11.094`, key: `3shlmq` }],
    [`path`, { d: `M8.5 2h7`, key: `csnxdl` }],
  ]),
  Ne = _(`save`, [
    [
      `path`,
      {
        d: `M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,
        key: `1c8476`,
      },
    ],
    [`path`, { d: `M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`, key: `1ydtos` }],
    [`path`, { d: `M7 3v4a1 1 0 0 0 1 1h7`, key: `t51u73` }],
  ]),
  Z = t(n(), 1);
function Pe() {
  return [
    { name: `general`, title: `General` },
    { name: `auth`, title: `Auth` },
    { name: `payment`, title: `Payment` },
    { name: `email`, title: `Email` },
    { name: `storage`, title: `Storage` },
    { name: `ai`, title: `AI` },
    { name: `analytics`, title: `Analytics` },
    { name: `customer_service`, title: `Customer Service` },
    { name: `custom`, title: `Custom` },
  ];
}
function Fe() {
  return [
    {
      name: `appinfo`,
      title: `App Info`,
      description: `Basic application settings`,
      tab: `general`,
    },
    {
      name: `user_role`,
      title: `User Roles`,
      description: `Default role for new users`,
      tab: `general`,
    },
    {
      name: `credit`,
      title: `Credits`,
      description: `Initial credits for new users`,
      tab: `general`,
    },
    {
      name: `email_auth`,
      title: `Email Auth`,
      description: `Email/password authentication`,
      tab: `auth`,
    },
    {
      name: `google_auth`,
      title: `Google Auth`,
      description: `Google OAuth login`,
      tab: `auth`,
    },
    {
      name: `github_auth`,
      title: `GitHub Auth`,
      description: `GitHub OAuth login`,
      tab: `auth`,
    },
    {
      name: `basic_payment`,
      title: `Basic`,
      description: `Payment general settings`,
      tab: `payment`,
    },
    {
      name: `stripe`,
      title: `Stripe`,
      description: `Stripe payment gateway`,
      tab: `payment`,
    },
    {
      name: `creem`,
      title: `Creem`,
      description: `Creem payment gateway`,
      tab: `payment`,
    },
    {
      name: `paypal`,
      title: `PayPal`,
      description: `PayPal payment gateway`,
      tab: `payment`,
    },
    {
      name: `alipay`,
      title: `Alipay`,
      description: `Alipay payment gateway (native)`,
      tab: `payment`,
    },
    {
      name: `wechat`,
      title: `WeChat Pay`,
      description: `WeChat Pay gateway (native)`,
      tab: `payment`,
    },
    {
      name: `email_general`,
      title: `General`,
      description: `Email provider selection`,
      tab: `email`,
    },
    {
      name: `resend`,
      title: `Resend`,
      description: `Resend email service`,
      tab: `email`,
    },
    {
      name: `cloudflare_email`,
      title: `Cloudflare Email`,
      description: `Cloudflare Email Service`,
      tab: `email`,
    },
    {
      name: `r2`,
      title: `Cloudflare R2 / S3`,
      description: `Object storage settings`,
      tab: `storage`,
    },
    {
      name: `openai`,
      title: `OpenAI`,
      description: `OpenAI (or compatible) API`,
      tab: `ai`,
    },
    {
      name: `anthropic`,
      title: `Anthropic`,
      description: `Anthropic Claude API`,
      tab: `ai`,
    },
    {
      name: `replicate`,
      title: `Replicate`,
      description: `Replicate AI API`,
      tab: `ai`,
    },
    { name: `fal`, title: `Fal`, description: `Fal AI API`, tab: `ai` },
    {
      name: `google_analytics`,
      title: `Google Analytics`,
      description: `Inject gtag.js with the configured Measurement ID`,
      tab: `analytics`,
    },
    {
      name: `plausible`,
      title: `Plausible`,
      description: `Inject plausible.js for self-hosted or cloud Plausible`,
      tab: `analytics`,
    },
    {
      name: `crisp`,
      title: `Crisp`,
      description: `Crisp live chat widget`,
      tab: `customer_service`,
    },
    {
      name: `tawk`,
      title: `Tawk.to`,
      description: `Tawk.to live chat widget`,
      tab: `customer_service`,
    },
  ];
}
function Ie() {
  return [
    {
      name: `app_name`,
      title: `App Name`,
      type: `text`,
      placeholder: `My App`,
      group: `appinfo`,
      tab: `general`,
    },
    {
      name: `app_description`,
      title: `App Description`,
      type: `textarea`,
      placeholder: `Ship your SaaS faster`,
      group: `appinfo`,
      tab: `general`,
    },
    {
      name: `app_url`,
      title: `App URL`,
      type: `text`,
      placeholder: `https://example.com`,
      group: `appinfo`,
      tab: `general`,
    },
    {
      name: `initial_role_enabled`,
      title: `Auto-assign role for new users`,
      type: `switch`,
      group: `user_role`,
      tab: `general`,
    },
    {
      name: `initial_role_name`,
      title: `Default role name`,
      type: `text`,
      placeholder: `viewer`,
      group: `user_role`,
      tab: `general`,
    },
    {
      name: `initial_credits_enabled`,
      title: `Grant credits on signup`,
      type: `switch`,
      group: `credit`,
      tab: `general`,
    },
    {
      name: `initial_credits_amount`,
      title: `Credits amount`,
      type: `number`,
      placeholder: `100`,
      group: `credit`,
      tab: `general`,
    },
    {
      name: `initial_credits_valid_days`,
      title: `Valid days`,
      type: `number`,
      placeholder: `365`,
      group: `credit`,
      tab: `general`,
    },
    {
      name: `initial_credits_description`,
      title: `Description`,
      type: `text`,
      placeholder: `Welcome bonus`,
      group: `credit`,
      tab: `general`,
    },
    {
      name: `email_auth_enabled`,
      title: `Enable email auth`,
      type: `switch`,
      group: `email_auth`,
      tab: `auth`,
      defaultValue: `true`,
    },
    {
      name: `email_verification_enabled`,
      title: `Require email verification on sign up`,
      type: `switch`,
      group: `email_auth`,
      tab: `auth`,
      defaultValue: `false`,
    },
    {
      name: `invite_code_required`,
      title: `Require invite code on sign up`,
      type: `switch`,
      group: `email_auth`,
      tab: `auth`,
      defaultValue: `false`,
    },
    {
      name: `google_auth_enabled`,
      title: `Enable Google auth`,
      type: `switch`,
      group: `google_auth`,
      tab: `auth`,
    },
    {
      name: `google_one_tap_enabled`,
      title: `Enable Google One Tap`,
      type: `switch`,
      group: `google_auth`,
      tab: `auth`,
      tip: `Show the Google One Tap prompt to signed-out visitors. Requires Client ID.`,
    },
    {
      name: `google_client_id`,
      title: `Client ID`,
      type: `text`,
      placeholder: `xxx.apps.googleusercontent.com`,
      group: `google_auth`,
      tab: `auth`,
    },
    {
      name: `google_client_secret`,
      title: `Client Secret`,
      type: `password`,
      placeholder: `GOCSPX-xxx`,
      group: `google_auth`,
      tab: `auth`,
    },
    {
      name: `github_auth_enabled`,
      title: `Enable GitHub auth`,
      type: `switch`,
      group: `github_auth`,
      tab: `auth`,
    },
    {
      name: `github_client_id`,
      title: `Client ID`,
      type: `text`,
      placeholder: `Ov23xxx`,
      group: `github_auth`,
      tab: `auth`,
    },
    {
      name: `github_client_secret`,
      title: `Client Secret`,
      type: `password`,
      placeholder: `xxx`,
      group: `github_auth`,
      tab: `auth`,
    },
    {
      name: `select_payment_enabled`,
      title: `Show payment method selector`,
      type: `switch`,
      group: `basic_payment`,
      tab: `payment`,
    },
    {
      name: `default_payment_provider`,
      title: `Default provider`,
      type: `select`,
      options: [
        { label: `Stripe`, value: `stripe` },
        { label: `Creem`, value: `creem` },
        { label: `PayPal`, value: `paypal` },
        { label: `Alipay`, value: `alipay` },
        { label: `WeChat Pay`, value: `wechat` },
      ],
      group: `basic_payment`,
      tab: `payment`,
    },
    {
      name: `stripe_enabled`,
      title: `Enable Stripe`,
      type: `switch`,
      group: `stripe`,
      tab: `payment`,
    },
    {
      name: `stripe_publishable_key`,
      title: `Publishable Key`,
      type: `text`,
      placeholder: `pk_xxx`,
      group: `stripe`,
      tab: `payment`,
    },
    {
      name: `stripe_secret_key`,
      title: `Secret Key`,
      type: `password`,
      placeholder: `sk_xxx`,
      group: `stripe`,
      tab: `payment`,
    },
    {
      name: `stripe_signing_secret`,
      title: `Webhook Signing Secret`,
      type: `password`,
      placeholder: `whsec_xxx`,
      group: `stripe`,
      tab: `payment`,
    },
    {
      name: `creem_enabled`,
      title: `Enable Creem`,
      type: `switch`,
      group: `creem`,
      tab: `payment`,
    },
    {
      name: `creem_environment`,
      title: `Environment`,
      type: `select`,
      options: [
        { label: `Sandbox`, value: `sandbox` },
        { label: `Production`, value: `production` },
      ],
      group: `creem`,
      tab: `payment`,
      defaultValue: `sandbox`,
    },
    {
      name: `creem_api_key`,
      title: `API Key`,
      type: `password`,
      placeholder: `creem_xxx`,
      group: `creem`,
      tab: `payment`,
    },
    {
      name: `creem_signing_secret`,
      title: `Signing Secret`,
      type: `password`,
      placeholder: `whsec_xxx`,
      group: `creem`,
      tab: `payment`,
    },
    {
      name: `creem_product_ids_mapping`,
      title: `Product IDs Mapping`,
      type: `textarea`,
      placeholder: `{"starter_monthly": "prod_xxx"}`,
      tip: `Map the product_id in pricing catalog to the product ID created in Creem. Must be a valid JSON object.`,
      group: `creem`,
      tab: `payment`,
    },
    {
      name: `creem_test_amount`,
      title: `Test amount (cents)`,
      type: `number`,
      placeholder: `留空使用实际金额，填 1 则支付 $0.01`,
      group: `creem`,
      tab: `payment`,
    },
    {
      name: `paypal_enabled`,
      title: `Enable PayPal`,
      type: `switch`,
      group: `paypal`,
      tab: `payment`,
    },
    {
      name: `paypal_client_id`,
      title: `Client ID`,
      type: `text`,
      placeholder: `xxx`,
      group: `paypal`,
      tab: `payment`,
    },
    {
      name: `paypal_client_secret`,
      title: `Client Secret`,
      type: `password`,
      placeholder: `xxx`,
      group: `paypal`,
      tab: `payment`,
    },
    {
      name: `paypal_webhook_id`,
      title: `Webhook ID`,
      type: `text`,
      placeholder: `xxx`,
      group: `paypal`,
      tab: `payment`,
    },
    {
      name: `paypal_environment`,
      title: `Environment`,
      type: `select`,
      options: [
        { label: `Sandbox`, value: `sandbox` },
        { label: `Live`, value: `live` },
      ],
      group: `paypal`,
      tab: `payment`,
    },
    {
      name: `paypal_test_amount`,
      title: `Test amount (cents)`,
      type: `number`,
      placeholder: `留空使用实际金额，填 1 则支付 $0.01`,
      group: `paypal`,
      tab: `payment`,
    },
    {
      name: `alipay_enabled`,
      title: `Enable Alipay`,
      type: `switch`,
      group: `alipay`,
      tab: `payment`,
    },
    {
      name: `alipay_app_id`,
      title: `App ID`,
      type: `text`,
      placeholder: `2021xxx`,
      group: `alipay`,
      tab: `payment`,
    },
    {
      name: `alipay_private_key`,
      title: `Private Key (RSA2)`,
      type: `textarea`,
      placeholder: `MIIEvQIBADANBgkq...`,
      group: `alipay`,
      tab: `payment`,
    },
    {
      name: `alipay_public_key`,
      title: `Alipay Public Key`,
      type: `textarea`,
      placeholder: `MIIBIjANBgkq...`,
      group: `alipay`,
      tab: `payment`,
    },
    {
      name: `alipay_notify_url`,
      title: `Notify URL (Webhook)`,
      type: `text`,
      placeholder: `https://hersoul.cn/api/payment/notify/alipay`,
      group: `alipay`,
      tab: `payment`,
    },
    {
      name: `alipay_test_amount`,
      title: `Test amount (分)`,
      type: `number`,
      placeholder: `留空使用实际金额，填 1 则支付 ¥0.01`,
      group: `alipay`,
      tab: `payment`,
    },
    {
      name: `wechat_enabled`,
      title: `Enable WeChat Pay`,
      type: `switch`,
      group: `wechat`,
      tab: `payment`,
    },
    {
      name: `wechat_app_id`,
      title: `AppID`,
      type: `text`,
      placeholder: `wx1234567890`,
      group: `wechat`,
      tab: `payment`,
    },
    {
      name: `wechat_mch_id`,
      title: `Merchant ID (商户号)`,
      type: `text`,
      placeholder: `1900000001`,
      group: `wechat`,
      tab: `payment`,
    },
    {
      name: `wechat_api_v3_key`,
      title: `APIv3 Key (32位密钥)`,
      type: `password`,
      placeholder: `32 chars`,
      group: `wechat`,
      tab: `payment`,
    },
    {
      name: `wechat_private_key`,
      title: `Merchant Private Key (PEM)`,
      type: `textarea`,
      placeholder: `MIIEvgIBADANBgkq...`,
      group: `wechat`,
      tab: `payment`,
    },
    {
      name: `wechat_serial_no`,
      title: `Certificate Serial No`,
      type: `text`,
      placeholder: `xxx`,
      group: `wechat`,
      tab: `payment`,
    },
    {
      name: `wechat_notify_url`,
      title: `Notify URL (Webhook)`,
      type: `text`,
      placeholder: `https://hersoul.cn/api/payment/notify/wechat`,
      group: `wechat`,
      tab: `payment`,
    },
    {
      name: `wechat_test_amount`,
      title: `Test amount (分)`,
      type: `number`,
      placeholder: `留空使用实际金额，填 1 则支付 ¥0.01`,
      group: `wechat`,
      tab: `payment`,
    },
    {
      name: `email_provider`,
      title: `Email Provider`,
      type: `select`,
      options: [
        { label: `Resend`, value: `resend` },
        { label: `Cloudflare Email`, value: `cloudflare` },
      ],
      group: `email_general`,
      tab: `email`,
      defaultValue: `resend`,
    },
    {
      name: `resend_api_key`,
      title: `API Key`,
      type: `password`,
      placeholder: `re_xxx`,
      group: `resend`,
      tab: `email`,
    },
    {
      name: `resend_sender_email`,
      title: `Sender Email`,
      type: `text`,
      placeholder: `hello@example.com`,
      group: `resend`,
      tab: `email`,
    },
    {
      name: `cloudflare_email_api_token`,
      title: `API Token`,
      type: `password`,
      placeholder: `Bearer token with Email Send permission`,
      group: `cloudflare_email`,
      tab: `email`,
    },
    {
      name: `cloudflare_email_account_id`,
      title: `Account ID`,
      type: `text`,
      placeholder: `Cloudflare account ID`,
      group: `cloudflare_email`,
      tab: `email`,
    },
    {
      name: `cloudflare_email_sender_email`,
      title: `Sender Email`,
      type: `text`,
      placeholder: `hello@yourdomain.com`,
      group: `cloudflare_email`,
      tab: `email`,
    },
    {
      name: `r2_access_key`,
      title: `Cloudflare Access Key`,
      type: `text`,
      placeholder: ``,
      group: `r2`,
      tab: `storage`,
    },
    {
      name: `r2_secret_key`,
      title: `Cloudflare Secret Key`,
      type: `password`,
      placeholder: ``,
      group: `r2`,
      tab: `storage`,
    },
    {
      name: `r2_bucket_name`,
      title: `Bucket Name`,
      type: `text`,
      placeholder: ``,
      group: `r2`,
      tab: `storage`,
    },
    {
      name: `r2_upload_path`,
      title: `Upload Path`,
      type: `text`,
      placeholder: `uploads`,
      tip: `Path to upload files to; leave empty to use the default. Example: uploads/foo/bar`,
      group: `r2`,
      tab: `storage`,
    },
    {
      name: `r2_endpoint`,
      title: `Endpoint`,
      type: `text`,
      placeholder: `https://<account-id>.r2.cloudflarestorage.com`,
      tip: `Leave empty to use the default R2 endpoint`,
      group: `r2`,
      tab: `storage`,
    },
    {
      name: `r2_domain`,
      title: `Domain`,
      type: `text`,
      placeholder: `https://cdn.example.com`,
      group: `r2`,
      tab: `storage`,
    },
    {
      name: `openai_base_url`,
      title: `Base URL`,
      type: `text`,
      placeholder: `https://api.openai.com/v1`,
      group: `openai`,
      tab: `ai`,
    },
    {
      name: `openai_api_key`,
      title: `API Key`,
      type: `password`,
      placeholder: `sk-xxx`,
      group: `openai`,
      tab: `ai`,
    },
    {
      name: `anthropic_base_url`,
      title: `Base URL`,
      type: `text`,
      placeholder: `https://api.anthropic.com`,
      group: `anthropic`,
      tab: `ai`,
    },
    {
      name: `anthropic_api_key`,
      title: `API Key`,
      type: `password`,
      placeholder: `sk-ant-xxx`,
      group: `anthropic`,
      tab: `ai`,
    },
    {
      name: `replicate_api_token`,
      title: `API Token`,
      type: `password`,
      placeholder: `r8_xxx`,
      group: `replicate`,
      tab: `ai`,
    },
    {
      name: `fal_api_key`,
      title: `API Key`,
      type: `password`,
      placeholder: `xxx`,
      group: `fal`,
      tab: `ai`,
    },
    {
      name: `google_analytics_id`,
      title: `Measurement ID`,
      type: `text`,
      placeholder: `G-XXXXXXXXXX`,
      group: `google_analytics`,
      tab: `analytics`,
    },
    {
      name: `plausible_domain`,
      title: `Domain`,
      type: `text`,
      placeholder: `example.com`,
      tip: `The domain registered in your Plausible dashboard`,
      group: `plausible`,
      tab: `analytics`,
    },
    {
      name: `plausible_src`,
      title: `Script Src`,
      type: `text`,
      placeholder: `https://plausible.io/js/script.js`,
      tip: `Use https://plausible.io/js/script.js for cloud, or your self-hosted URL`,
      group: `plausible`,
      tab: `analytics`,
    },
    {
      name: `crisp_enabled`,
      title: `Enable Crisp`,
      type: `switch`,
      group: `crisp`,
      tab: `customer_service`,
    },
    {
      name: `crisp_website_id`,
      title: `Website ID`,
      type: `text`,
      placeholder: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`,
      group: `crisp`,
      tab: `customer_service`,
    },
    {
      name: `tawk_enabled`,
      title: `Enable Tawk.to`,
      type: `switch`,
      group: `tawk`,
      tab: `customer_service`,
    },
    {
      name: `tawk_property_id`,
      title: `Property ID`,
      type: `text`,
      placeholder: `xxxxxxxxxxxxxxxxxxxxxxxx`,
      group: `tawk`,
      tab: `customer_service`,
    },
    {
      name: `tawk_widget_id`,
      title: `Widget ID`,
      type: `text`,
      placeholder: `1xxxxx/default`,
      group: `tawk`,
      tab: `customer_service`,
    },
  ];
}
var Le = {
  resend: {
    group: `resend`,
    fields: [
      {
        name: `to`,
        label: `Recipient email`,
        type: `email`,
        placeholder: `you@example.com`,
        required: !0,
      },
    ],
  },
  stripe: {
    group: `stripe`,
    fields: [
      {
        name: `amount`,
        label: `Amount (cents)`,
        type: `number`,
        defaultValue: `100`,
        required: !0,
      },
      {
        name: `currency`,
        label: `Currency`,
        type: `text`,
        defaultValue: `usd`,
        required: !0,
      },
      {
        name: `description`,
        label: `Description`,
        type: `text`,
        defaultValue: `Test checkout`,
      },
    ],
  },
  creem: {
    group: `creem`,
    fields: [
      {
        name: `productId`,
        label: `Creem product ID`,
        type: `text`,
        placeholder: `prod_xxx`,
        required: !0,
      },
      {
        name: `description`,
        label: `Description`,
        type: `text`,
        defaultValue: `Test checkout`,
      },
    ],
  },
  paypal: {
    group: `paypal`,
    fields: [
      {
        name: `amount`,
        label: `Amount (cents)`,
        type: `number`,
        defaultValue: `100`,
        required: !0,
      },
      {
        name: `currency`,
        label: `Currency`,
        type: `text`,
        defaultValue: `USD`,
        required: !0,
      },
      {
        name: `description`,
        label: `Description`,
        type: `text`,
        defaultValue: `Test checkout`,
      },
    ],
  },
  alipay: {
    group: `alipay`,
    fields: [
      {
        name: `amount`,
        label: `Amount (分)`,
        type: `number`,
        defaultValue: `1`,
        required: !0,
      },
      {
        name: `description`,
        label: `Description`,
        type: `text`,
        defaultValue: `Test checkout`,
      },
    ],
  },
  wechat: {
    group: `wechat`,
    fields: [
      {
        name: `amount`,
        label: `Amount (分)`,
        type: `number`,
        defaultValue: `1`,
        required: !0,
      },
      {
        name: `description`,
        label: `Description`,
        type: `text`,
        defaultValue: `Test checkout`,
      },
    ],
  },
  r2: {
    group: `r2`,
    fields: [
      {
        name: `filename`,
        label: `Test filename`,
        type: `text`,
        defaultValue: `shipany-settings-test.txt`,
      },
    ],
  },
  openai: {
    group: `openai`,
    fields: [
      {
        name: `model`,
        label: `Model`,
        type: `text`,
        defaultValue: `gpt-4o-mini`,
        required: !0,
      },
      {
        name: `prompt`,
        label: `Prompt`,
        type: `textarea`,
        defaultValue: `Reply with a short greeting.`,
        required: !0,
      },
    ],
  },
  anthropic: {
    group: `anthropic`,
    fields: [
      {
        name: `model`,
        label: `Model`,
        type: `text`,
        defaultValue: `claude-haiku-4-5`,
        required: !0,
      },
      {
        name: `prompt`,
        label: `Prompt`,
        type: `textarea`,
        defaultValue: `Reply with a short greeting.`,
        required: !0,
      },
    ],
  },
  replicate: {
    group: `replicate`,
    fields: [
      {
        name: `model`,
        label: `Model`,
        type: `text`,
        defaultValue: `black-forest-labs/flux-schnell`,
        required: !0,
      },
      {
        name: `prompt`,
        label: `Prompt`,
        type: `textarea`,
        defaultValue: `a small red cube, product photography`,
        required: !0,
      },
    ],
  },
  fal: {
    group: `fal`,
    fields: [
      {
        name: `model`,
        label: `Model`,
        type: `text`,
        defaultValue: `fal-ai/flux/schnell`,
        required: !0,
      },
      {
        name: `prompt`,
        label: `Prompt`,
        type: `textarea`,
        defaultValue: `a small red cube, product photography`,
        required: !0,
      },
    ],
  },
};
function Q(e) {
  return Le[e];
}
var $ = e();
function Re({
  open: e,
  onOpenChange: t,
  group: n,
  spec: i,
  groupTitle: a,
  configOverrides: o,
}) {
  let [s, c] = (0, Z.useState)({}),
    [l, u] = (0, Z.useState)(null),
    d = r({
      mutationFn: () =>
        j(`/api/admin/settings/test`, {
          group: n,
          inputs: s,
          configs: o ?? {},
        }),
      onSuccess: (e) => {
        u(e);
      },
      onError: (e) => {
        u({ success: !1, message: e?.message || N() });
      },
    }),
    f = d.isPending;
  (0, Z.useEffect)(() => {
    if (!e) return;
    let t = {};
    for (let e of i.fields) e.defaultValue && (t[e.name] = e.defaultValue);
    (c(t), u(null), d.reset());
  }, [e, n, i]);
  let p = (0, Z.useMemo)(
    () => i.fields.every((e) => !e.required || !!s[e.name]?.trim()),
    [i.fields, s]
  );
  function ee() {
    (u(null), d.mutate());
  }
  return (0, $.jsx)(Ae, {
    open: e,
    onOpenChange: t,
    children: (0, $.jsxs)(De, {
      className: `sm:max-w-lg`,
      children: [
        (0, $.jsxs)(Te, {
          children: [
            (0, $.jsx)(Oe, { children: R({ group: a }) }),
            (0, $.jsx)(ke, { children: v() }),
          ],
        }),
        (0, $.jsx)(`div`, {
          className: `space-y-3`,
          children: i.fields.map((e) =>
            (0, $.jsx)(
              ze,
              {
                field: e,
                value: s[e.name] ?? ``,
                onChange: (t) => c((n) => ({ ...n, [e.name]: t })),
              },
              e.name
            )
          ),
        }),
        l && (0, $.jsx)(Be, { result: l }),
        (0, $.jsxs)(Ee, {
          children: [
            (0, $.jsx)(q, {
              variant: `outline`,
              onClick: () => t(!1),
              disabled: f,
              children: O(),
            }),
            (0, $.jsxs)(q, {
              onClick: ee,
              disabled: f || !p,
              children: [
                f && (0, $.jsx)(P, { className: `size-4 animate-spin` }),
                f ? w() : C(),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function ze({ field: e, value: t, onChange: n }) {
  return (0, $.jsxs)(`div`, {
    className: `space-y-2`,
    children: [
      (0, $.jsxs)(J, {
        htmlFor: e.name,
        children: [
          e.label,
          e.required &&
            (0, $.jsx)(`span`, {
              className: `text-destructive ml-1`,
              children: `*`,
            }),
        ],
      }),
      e.type === `textarea`
        ? (0, $.jsx)(`textarea`, {
            id: e.name,
            value: t,
            onChange: (e) => n(e.target.value),
            placeholder: e.placeholder,
            rows: 3,
            className: `border-input placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:ring-1 focus-visible:outline-none`,
          })
        : (0, $.jsx)(Y, {
            id: e.name,
            type:
              e.type === `number`
                ? `number`
                : e.type === `email`
                  ? `email`
                  : `text`,
            value: t,
            onChange: (e) => n(e.target.value),
            placeholder: e.placeholder,
          }),
    ],
  });
}
function Be({ result: e }) {
  return (0, $.jsxs)(`div`, {
    className: `rounded-lg border p-3 text-sm ${e.success ? `border-emerald-500/30 bg-emerald-500/5` : `border-destructive/30 bg-destructive/5`}`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex items-start gap-2 font-medium`,
        children: [
          e.success
            ? (0, $.jsx)(m, {
                className: `mt-0.5 size-4 shrink-0 text-emerald-600`,
              })
            : (0, $.jsx)(d, {
                className: `text-destructive mt-0.5 size-4 shrink-0`,
              }),
          (0, $.jsx)(`span`, {
            className: e.success ? `` : `text-destructive`,
            children: e.message,
          }),
        ],
      }),
      e.details &&
        Object.keys(e.details).length > 0 &&
        (0, $.jsx)(`dl`, {
          className: `mt-3 space-y-1.5 text-xs`,
          children: Object.entries(e.details).map(([e, t]) =>
            (0, $.jsxs)(
              `div`,
              {
                className: `grid grid-cols-[auto_1fr] gap-2`,
                children: [
                  (0, $.jsxs)(`dt`, {
                    className: `text-muted-foreground whitespace-nowrap`,
                    children: [e, `:`],
                  }),
                  (0, $.jsx)(`dd`, {
                    className: `break-all`,
                    children: t?.startsWith(`http`)
                      ? (0, $.jsx)(`a`, {
                          href: t,
                          target: `_blank`,
                          rel: `noreferrer`,
                          className: `text-primary underline underline-offset-2`,
                          children: t,
                        })
                      : (0, $.jsx)(`span`, {
                          className: `font-mono`,
                          children: t,
                        }),
                  }),
                ],
              },
              e
            )
          ),
        }),
    ],
  });
}
var Ve = Z.createContext(void 0);
function He() {
  let e = Z.useContext(Ve);
  if (e === void 0) throw Error(V(63));
  return e;
}
var Ue = (function (e) {
    return (
      (e.checked = `data-checked`),
      (e.unchecked = `data-unchecked`),
      (e.disabled = `data-disabled`),
      (e.readonly = `data-readonly`),
      (e.required = `data-required`),
      (e.valid = `data-valid`),
      (e.invalid = `data-invalid`),
      (e.touched = `data-touched`),
      (e.dirty = `data-dirty`),
      (e.filled = `data-filled`),
      (e.focused = `data-focused`),
      e
    );
  })({}),
  We = {
    ...le,
    checked(e) {
      return e ? { [Ue.checked]: `` } : { [Ue.unchecked]: `` };
    },
  },
  Ge = Z.forwardRef(function (e, t) {
    let {
        checked: n,
        className: r,
        defaultChecked: i,
        'aria-labelledby': a,
        id: o,
        inputRef: s,
        name: c,
        nativeButton: l = !1,
        onCheckedChange: u,
        readOnly: d = !1,
        required: f = !1,
        disabled: p = !1,
        render: ee,
        uncheckedValue: m,
        value: h,
        ...te
      } = e,
      { clearErrors: g } = fe(),
      {
        state: _,
        setTouched: v,
        setDirty: ne,
        validityData: y,
        setFilled: b,
        setFocused: x,
        shouldValidateOnChange: S,
        validationMode: re,
        disabled: C,
        name: w,
        validation: T,
      } = me(),
      { labelId: E } = ce(),
      D = C || p,
      O = w ?? c,
      k = oe(u),
      A = Z.useRef(null),
      j = W(A, s, T.inputRef),
      M = Z.useRef(null),
      N = he(),
      P = pe({ id: o, implicit: !1, controlRef: M }),
      F = l ? void 0 : P,
      [I, L] = ue({
        controlled: n,
        default: !!i,
        name: `Switch`,
        state: `checked`,
      });
    (de({
      id: N,
      commit: T.commit,
      value: I,
      controlRef: M,
      name: O,
      getValue: () => I,
    }),
      G(() => {
        A.current && b(A.current.checked);
      }, [A, b]),
      be(I, () => {
        (g(O),
          ne(I !== y.initialValue),
          b(I),
          S() ? T.commit(I) : T.commit(I, !0));
      }));
    let { getButtonProps: R, buttonRef: ie } = K({ disabled: D, native: l }),
      z = je(a, E, A, !l, F),
      ae = {
        id: l ? P : N,
        role: `switch`,
        'aria-checked': I,
        'aria-readonly': d || void 0,
        'aria-required': f || void 0,
        'aria-labelledby': z,
        onFocus() {
          D || x(!0);
        },
        onBlur() {
          let e = A.current;
          !e || D || (v(!0), x(!1), re === `onBlur` && T.commit(e.checked));
        },
        onClick(e) {
          d ||
            D ||
            (e.preventDefault(),
            A.current?.dispatchEvent(
              new PointerEvent(`click`, {
                bubbles: !0,
                shiftKey: e.shiftKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey,
                metaKey: e.metaKey,
              })
            ));
        },
      },
      B = Z.useMemo(
        () =>
          se(
            {
              checked: I,
              disabled: D,
              id: F,
              name: O,
              required: f,
              style: O ? ye : ve,
              tabIndex: -1,
              type: `checkbox`,
              'aria-hidden': !0,
              ref: j,
              onChange(e) {
                if (e.nativeEvent.defaultPrevented) return;
                let t = e.target.checked,
                  n = ge(_e, e.nativeEvent);
                (k?.(t, n), !n.isCanceled && L(t));
              },
              onFocus() {
                M.current?.focus();
              },
            },
            T.getInputValidationProps,
            h === void 0 ? U : { value: h }
          ),
        [I, D, j, F, O, k, f, L, T, h]
      ),
      V = Z.useMemo(
        () => ({ ..._, checked: I, disabled: D, readOnly: d, required: f }),
        [_, I, D, d, f]
      ),
      q = H(`span`, e, {
        state: V,
        ref: [t, M, ie],
        props: [ae, T.getValidationProps, te, R],
        stateAttributesMapping: We,
      });
    return (0, $.jsxs)(Ve.Provider, {
      value: V,
      children: [
        q,
        !I &&
          O &&
          m !== void 0 &&
          (0, $.jsx)(`input`, { type: `hidden`, name: O, value: m }),
        (0, $.jsx)(`input`, { ...B }),
      ],
    });
  }),
  Ke = Z.forwardRef(function (e, t) {
    let { render: n, className: r, ...i } = e,
      { state: a } = me(),
      o = He();
    return H(`span`, e, {
      state: { ...a, ...o },
      ref: t,
      stateAttributesMapping: We,
      props: i,
    });
  });
function qe({ className: e, size: t = `default`, ...n }) {
  return (0, $.jsx)(Ge, {
    'data-slot': `switch`,
    'data-size': t,
    className: B(
      `peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50`,
      e
    ),
    ...n,
    children: (0, $.jsx)(Ke, {
      'data-slot': `switch-thumb`,
      className: `pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground`,
    }),
  });
}
function Je() {
  let e = {
      creem_test_amount: ne(),
      paypal_test_amount: E(),
      alipay_test_amount: F(),
      wechat_test_amount: A(),
    },
    t = T(),
    [n, i] = (0, Z.useState)({}),
    [a, o] = (0, Z.useState)(`general`),
    [c, u] = (0, Z.useState)(new Set()),
    [d, m] = (0, Z.useState)(null),
    [_, v] = (0, Z.useState)([]);
  function C(e) {
    u((t) => {
      let n = new Set(t);
      return (n.has(e) ? n.delete(e) : n.add(e), n);
    });
  }
  let w = Pe(),
    O = Fe(),
    N = Ie(),
    { data: P, isLoading: R } = k({
      queryKey: [`admin-config`],
      queryFn: () => S(`/api/admin/config`),
    });
  (0, Z.useEffect)(() => {
    P && i(P);
  }, [P]);
  let { data: V } = k({
    queryKey: [`admin-config-custom`],
    queryFn: () => S(`/api/admin/config/custom`),
  });
  (0, Z.useEffect)(() => {
    V && v(V);
  }, [V]);
  function H(e, t) {
    i((n) => ({ ...n, [e]: t }));
  }
  function oe() {
    v((e) => [...e, { key: ``, value: `` }]);
  }
  function se(e) {
    v((t) => t.filter((t, n) => n !== e));
  }
  function U(e, t, n) {
    v((r) => r.map((r, i) => (i === e ? { ...r, [t]: n } : r)));
  }
  let W = r({
      mutationFn: (e) => j(`/api/admin/config`, e),
      onSuccess: () => {
        (g.success(z()),
          t.invalidateQueries({ queryKey: [`admin-config`] }),
          t.invalidateQueries({ queryKey: [`public-config`] }));
      },
      onError: (e) => {
        g.error(e?.message || y());
      },
    }),
    G = r({
      mutationFn: (e) => j(`/api/admin/config/custom`, { configs: e }),
      onSuccess: () => {
        (g.success(z()),
          t.invalidateQueries({ queryKey: [`admin-config-custom`] }),
          t.invalidateQueries({ queryKey: [`public-config`] }));
      },
      onError: (e) => {
        g.error(e?.message || y());
      },
    }),
    K = W.isPending || G.isPending;
  function J() {
    if (a === `custom`) {
      let e = _.map((e) => ({ key: e.key.trim(), value: e.value })).filter(
        (e) => e.key
      );
      G.mutate(e);
      return;
    }
    let e = N.filter((e) => e.tab === a),
      t = {};
    for (let r of e) n[r.name] !== void 0 && (t[r.name] = n[r.name]);
    W.mutate(t);
  }
  let ce = O.filter((e) => e.tab === a),
    le = N.filter((e) => e.tab === a);
  return (0, $.jsxs)(`div`, {
    className: `space-y-6 p-6 md:max-w-3xl`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, $.jsxs)(`div`, {
            children: [
              (0, $.jsx)(`h1`, {
                className: `text-2xl font-bold`,
                children: te(),
              }),
              (0, $.jsx)(`p`, {
                className: `text-muted-foreground`,
                children: ie(),
              }),
            ],
          }),
          (0, $.jsxs)(q, {
            onClick: J,
            disabled: K,
            className: `gap-2`,
            children: [(0, $.jsx)(Ne, { className: `size-4` }), K ? h() : p()],
          }),
        ],
      }),
      (0, $.jsx)(`div`, {
        className: `border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b`,
        children: w.map((e) =>
          (0, $.jsx)(
            `button`,
            {
              onClick: () => o(e.name),
              className: B(
                `-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors`,
                a === e.name
                  ? `border-primary text-foreground`
                  : `text-muted-foreground hover:text-foreground border-transparent`
              ),
              children: X(`admin.settings.tabs.${e.name}`),
            },
            e.name
          )
        ),
      }),
      R
        ? (0, $.jsx)(`div`, {
            className: `text-muted-foreground`,
            children: ee(),
          })
        : a === `custom`
          ? (0, $.jsxs)(we, {
              children: [
                (0, $.jsxs)(xe, {
                  children: [
                    (0, $.jsx)(Ce, { children: re() }),
                    (0, $.jsx)(`p`, {
                      className: `text-muted-foreground text-sm`,
                      children: x(),
                    }),
                  ],
                }),
                (0, $.jsxs)(Se, {
                  className: `space-y-4`,
                  children: [
                    _.length === 0 &&
                      (0, $.jsx)(`p`, {
                        className: `text-muted-foreground text-sm`,
                        children: L(),
                      }),
                    _.map((e, t) =>
                      (0, $.jsxs)(
                        `div`,
                        {
                          className: `flex items-start gap-2`,
                          children: [
                            (0, $.jsx)(Y, {
                              value: e.key,
                              onChange: (e) => U(t, `key`, e.target.value),
                              placeholder: D(),
                              className: `w-1/3 shrink-0 font-mono`,
                            }),
                            (0, $.jsx)(`textarea`, {
                              value: e.value,
                              onChange: (e) => U(t, `value`, e.target.value),
                              placeholder: b(),
                              rows: 1,
                              className: `border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex h-8 max-h-48 min-h-8 flex-1 resize-y rounded-lg border bg-transparent px-2.5 py-1 text-base leading-6 transition-colors outline-none focus-visible:ring-3 md:text-sm`,
                            }),
                            (0, $.jsx)(q, {
                              variant: `outline`,
                              size: `icon`,
                              className: `shrink-0`,
                              onClick: () => se(t),
                              'aria-label': M(),
                              children: (0, $.jsx)(s, { className: `size-4` }),
                            }),
                          ],
                        },
                        t
                      )
                    ),
                    (0, $.jsxs)(q, {
                      variant: `outline`,
                      onClick: oe,
                      className: `gap-1.5`,
                      children: [(0, $.jsx)(f, { className: `size-4` }), I()],
                    }),
                  ],
                }),
              ],
            })
          : ce.map((t) => {
              let r = le.filter((e) => e.group === t.name);
              if (r.length === 0) return null;
              let i = Q(t.name);
              return (0, $.jsxs)(
                we,
                {
                  children: [
                    (0, $.jsx)(xe, {
                      className: `cursor-pointer select-none`,
                      onClick: () => C(t.name),
                      children: (0, $.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [
                          (0, $.jsx)(Ce, {
                            children: X(
                              `admin.settings.groups.${t.name}.title`
                            ),
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              i &&
                                (0, $.jsxs)(q, {
                                  variant: `outline`,
                                  size: `sm`,
                                  className: `gap-1.5`,
                                  onClick: (e) => {
                                    (e.stopPropagation(), m(t.name));
                                  },
                                  children: [
                                    (0, $.jsx)(Me, { className: `size-3.5` }),
                                    ae(),
                                  ],
                                }),
                              (0, $.jsx)(l, {
                                className: `text-muted-foreground size-5 transition-transform ${c.has(t.name) ? `-rotate-90` : ``}`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    !c.has(t.name) &&
                      (0, $.jsx)(Se, {
                        className: `space-y-4`,
                        children: r.map((t) =>
                          (0, $.jsx)(
                            Ye,
                            {
                              setting: t,
                              label: X(`admin.settings.fields.${t.name}`),
                              placeholder: e[t.name] ?? t.placeholder,
                              value: n[t.name] ?? t.defaultValue ?? ``,
                              onChange: (e) => H(t.name, e),
                            },
                            t.name
                          )
                        ),
                      }),
                  ],
                },
                t.name
              );
            }),
      d &&
        Q(d) &&
        (0, $.jsx)(Re, {
          open: !!d,
          onOpenChange: (e) => !e && m(null),
          group: d,
          spec: Q(d),
          groupTitle: X(`admin.settings.groups.${d}.title`),
          configOverrides: Object.fromEntries(
            N.filter((e) => e.group === d && n[e.name] !== void 0).map((e) => [
              e.name,
              n[e.name],
            ])
          ),
        }),
    ],
  });
}
function Ye({ setting: e, label: t, placeholder: n, value: r, onChange: s }) {
  return e.type === `switch`
    ? (0, $.jsxs)(`div`, {
        className: `space-y-2`,
        children: [
          (0, $.jsx)(J, { htmlFor: e.name, children: t }),
          (0, $.jsx)(`div`, {
            children: (0, $.jsx)(qe, {
              id: e.name,
              checked: r === `true`,
              onCheckedChange: (e) => s(e ? `true` : `false`),
            }),
          }),
        ],
      })
    : e.type === `select` && e.options
      ? (0, $.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, $.jsx)(J, { htmlFor: e.name, children: t }),
            (0, $.jsxs)(u, {
              value: r,
              onValueChange: (e) => s(e || ``),
              children: [
                (0, $.jsx)(a, {
                  children: (0, $.jsx)(i, { placeholder: n || `Select...` }),
                }),
                (0, $.jsx)(o, {
                  children: e.options.map((e) =>
                    (0, $.jsx)(
                      c,
                      { value: e.value, children: e.label },
                      e.value
                    )
                  ),
                }),
              ],
            }),
          ],
        })
      : e.type === `textarea`
        ? (0, $.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, $.jsx)(J, { htmlFor: e.name, children: t }),
              (0, $.jsx)(`textarea`, {
                id: e.name,
                value: r,
                onChange: (e) => s(e.target.value),
                placeholder: n,
                rows: 3,
                className: `border-input placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:ring-1 focus-visible:outline-none`,
              }),
            ],
          })
        : (0, $.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, $.jsx)(J, { htmlFor: e.name, children: t }),
              (0, $.jsx)(Y, {
                id: e.name,
                type:
                  e.type === `password`
                    ? `password`
                    : e.type === `number`
                      ? `number`
                      : `text`,
                value: r,
                onChange: (e) => s(e.target.value),
                placeholder: n,
              }),
            ],
          });
}
export { Je as component };
