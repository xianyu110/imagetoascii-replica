import { r as getLocale } from '../server.js';
import { t as __exportAll } from './chunk-D7D4PA-g.js';

//#region src/paraglide/messages/common_metadata_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Metadata_TitleInputs */
var en_common_metadata_title = () => {
  return `My App`;
};
var zh_common_metadata_title = () => {
  return `我的应用`;
};
/**
 * | output |
 * | --- |
 * | "My App" |
 *
 * @param {Common_Metadata_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_metadata_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_metadata_title(inputs);
  return zh_common_metadata_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_metadata_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Metadata_DescriptionInputs */
var en_common_metadata_description = () => {
  return `Ship your SaaS faster`;
};
var zh_common_metadata_description = () => {
  return `快速构建你的 SaaS`;
};
/**
 * | output |
 * | --- |
 * | "Ship your SaaS faster" |
 *
 * @param {Common_Metadata_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_metadata_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_metadata_description(inputs);
  return zh_common_metadata_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_sign_in_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_In_TitleInputs */
var en_common_sign_sign_in_title = () => {
  return `Sign In`;
};
var zh_common_sign_sign_in_title = () => {
  return `登录`;
};
/**
 * | output |
 * | --- |
 * | "Sign In" |
 *
 * @param {Common_Sign_Sign_In_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_sign_in_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_sign_in_title(inputs);
  return zh_common_sign_sign_in_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_sign_in_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_In_DescriptionInputs */
var en_common_sign_sign_in_description = () => {
  return `Welcome back`;
};
var zh_common_sign_sign_in_description = () => {
  return `欢迎回来`;
};
/**
 * | output |
 * | --- |
 * | "Welcome back" |
 *
 * @param {Common_Sign_Sign_In_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_sign_in_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_sign_in_description(inputs);
  return zh_common_sign_sign_in_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_sign_up_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_Up_TitleInputs */
var en_common_sign_sign_up_title = () => {
  return `Sign Up`;
};
var zh_common_sign_sign_up_title = () => {
  return `注册`;
};
/**
 * | output |
 * | --- |
 * | "Sign Up" |
 *
 * @param {Common_Sign_Sign_Up_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_sign_up_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_sign_up_title(inputs);
  return zh_common_sign_sign_up_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_sign_up_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_Up_DescriptionInputs */
var en_common_sign_sign_up_description = () => {
  return `Get started for free`;
};
var zh_common_sign_sign_up_description = () => {
  return `免费开始使用`;
};
/**
 * | output |
 * | --- |
 * | "Get started for free" |
 *
 * @param {Common_Sign_Sign_Up_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_sign_up_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_sign_up_description(inputs);
  return zh_common_sign_sign_up_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_email_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Email_TitleInputs */
var en_common_sign_email_title = () => {
  return `Email`;
};
var zh_common_sign_email_title = () => {
  return `邮箱`;
};
/**
 * | output |
 * | --- |
 * | "Email" |
 *
 * @param {Common_Sign_Email_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_email_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_email_title(inputs);
  return zh_common_sign_email_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_email_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Email_PlaceholderInputs */
var en_common_sign_email_placeholder = () => {
  return `Enter your email`;
};
var zh_common_sign_email_placeholder = () => {
  return `输入邮箱地址`;
};
/**
 * | output |
 * | --- |
 * | "Enter your email" |
 *
 * @param {Common_Sign_Email_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_email_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_email_placeholder(inputs);
  return zh_common_sign_email_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_password_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_TitleInputs */
var en_common_sign_password_title = () => {
  return `Password`;
};
var zh_common_sign_password_title = () => {
  return `密码`;
};
/**
 * | output |
 * | --- |
 * | "Password" |
 *
 * @param {Common_Sign_Password_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_password_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_password_title(inputs);
  return zh_common_sign_password_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_password_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_PlaceholderInputs */
var en_common_sign_password_placeholder = () => {
  return `Enter your password`;
};
var zh_common_sign_password_placeholder = () => {
  return `输入密码`;
};
/**
 * | output |
 * | --- |
 * | "Enter your password" |
 *
 * @param {Common_Sign_Password_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_password_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_password_placeholder(inputs);
  return zh_common_sign_password_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_confirm_password_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Confirm_Password_TitleInputs */
var en_common_sign_confirm_password_title = () => {
  return `Confirm Password`;
};
var zh_common_sign_confirm_password_title = () => {
  return `确认密码`;
};
/**
 * | output |
 * | --- |
 * | "Confirm Password" |
 *
 * @param {Common_Sign_Confirm_Password_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_confirm_password_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_confirm_password_title(inputs);
  return zh_common_sign_confirm_password_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_confirm_password_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Confirm_Password_PlaceholderInputs */
var en_common_sign_confirm_password_placeholder = () => {
  return `Re-enter your password`;
};
var zh_common_sign_confirm_password_placeholder = () => {
  return `再次输入密码`;
};
/**
 * | output |
 * | --- |
 * | "Re-enter your password" |
 *
 * @param {Common_Sign_Confirm_Password_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_confirm_password_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_confirm_password_placeholder(inputs);
  return zh_common_sign_confirm_password_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_password_mismatch.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_MismatchInputs */
var en_common_sign_password_mismatch = () => {
  return `Passwords do not match`;
};
var zh_common_sign_password_mismatch = () => {
  return `两次输入的密码不一致`;
};
/**
 * | output |
 * | --- |
 * | "Passwords do not match" |
 *
 * @param {Common_Sign_Password_MismatchInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_password_mismatch = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_password_mismatch(inputs);
  return zh_common_sign_password_mismatch(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_name_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Name_TitleInputs */
var en_common_sign_name_title = () => {
  return `Name`;
};
var zh_common_sign_name_title = () => {
  return `姓名`;
};
/**
 * | output |
 * | --- |
 * | "Name" |
 *
 * @param {Common_Sign_Name_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_name_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_name_title(inputs);
  return zh_common_sign_name_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_name_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Name_PlaceholderInputs */
var en_common_sign_name_placeholder = () => {
  return `Enter your name`;
};
var zh_common_sign_name_placeholder = () => {
  return `输入姓名`;
};
/**
 * | output |
 * | --- |
 * | "Enter your name" |
 *
 * @param {Common_Sign_Name_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_name_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_name_placeholder(inputs);
  return zh_common_sign_name_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_no_account.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_No_AccountInputs */
var en_common_sign_no_account = () => {
  return `Don't have an account?`;
};
var zh_common_sign_no_account = () => {
  return `还没有账号？`;
};
/**
 * | output |
 * | --- |
 * | "Don't have an account?" |
 *
 * @param {Common_Sign_No_AccountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_no_account = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_no_account(inputs);
  return zh_common_sign_no_account(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_already_have_account.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Already_Have_AccountInputs */
var en_common_sign_already_have_account = () => {
  return `Already have an account?`;
};
var zh_common_sign_already_have_account = () => {
  return `已有账号？`;
};
/**
 * | output |
 * | --- |
 * | "Already have an account?" |
 *
 * @param {Common_Sign_Already_Have_AccountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_already_have_account = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_already_have_account(inputs);
  return zh_common_sign_already_have_account(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_or.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_OrInputs */
var en_common_sign_or = () => {
  return `Or continue with`;
};
var zh_common_sign_or = () => {
  return `或者继续使用`;
};
/**
 * | output |
 * | --- |
 * | "Or continue with" |
 *
 * @param {Common_Sign_OrInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_or = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_or(inputs);
  return zh_common_sign_or(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_sign_out_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_Out_TitleInputs */
var en_common_sign_sign_out_title = () => {
  return `Sign Out`;
};
var zh_common_sign_sign_out_title = () => {
  return `退出登录`;
};
/**
 * | output |
 * | --- |
 * | "Sign Out" |
 *
 * @param {Common_Sign_Sign_Out_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_sign_out_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_sign_out_title(inputs);
  return zh_common_sign_sign_out_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_google_sign_in.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Google_Sign_InInputs */
var en_common_sign_google_sign_in = () => {
  return `Sign in with Google`;
};
var zh_common_sign_google_sign_in = () => {
  return `使用 Google 登录`;
};
/**
 * | output |
 * | --- |
 * | "Sign in with Google" |
 *
 * @param {Common_Sign_Google_Sign_InInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_google_sign_in = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_google_sign_in(inputs);
  return zh_common_sign_google_sign_in(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_github_sign_in.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Github_Sign_InInputs */
var en_common_sign_github_sign_in = () => {
  return `Sign in with GitHub`;
};
var zh_common_sign_github_sign_in = () => {
  return `使用 GitHub 登录`;
};
/**
 * | output |
 * | --- |
 * | "Sign in with GitHub" |
 *
 * @param {Common_Sign_Github_Sign_InInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_github_sign_in = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_github_sign_in(inputs);
  return zh_common_sign_github_sign_in(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_no_methods_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_No_Methods_TitleInputs */
var en_common_sign_no_methods_title = () => {
  return `No sign-in methods available`;
};
var zh_common_sign_no_methods_title = () => {
  return `暂无可用的登录方式`;
};
/**
 * | output |
 * | --- |
 * | "No sign-in methods available" |
 *
 * @param {Common_Sign_No_Methods_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_no_methods_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_no_methods_title(inputs);
  return zh_common_sign_no_methods_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_no_methods_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_No_Methods_DescriptionInputs */
var en_common_sign_no_methods_description = () => {
  return `The administrator hasn't enabled any sign-in methods yet. Please check back later.`;
};
var zh_common_sign_no_methods_description = () => {
  return `管理员尚未启用任何登录方式，请稍后再试。`;
};
/**
 * | output |
 * | --- |
 * | "The administrator hasn't enabled any sign-in methods yet. Please check back later." |
 *
 * @param {Common_Sign_No_Methods_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_no_methods_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_no_methods_description(inputs);
  return zh_common_sign_no_methods_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_forgot_password.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Forgot_PasswordInputs */
var en_common_sign_forgot_password = () => {
  return `Forgot your password?`;
};
var zh_common_sign_forgot_password = () => {
  return `忘记密码？`;
};
/**
 * | output |
 * | --- |
 * | "Forgot your password?" |
 *
 * @param {Common_Sign_Forgot_PasswordInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_forgot_password = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_forgot_password(inputs);
  return zh_common_sign_forgot_password(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_forgot_password_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Forgot_Password_TitleInputs */
var en_common_sign_forgot_password_title = () => {
  return `Forgot password`;
};
var zh_common_sign_forgot_password_title = () => {
  return `找回密码`;
};
/**
 * | output |
 * | --- |
 * | "Forgot password" |
 *
 * @param {Common_Sign_Forgot_Password_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_forgot_password_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_forgot_password_title(inputs);
  return zh_common_sign_forgot_password_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_forgot_password_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Forgot_Password_DescriptionInputs */
var en_common_sign_forgot_password_description = () => {
  return `Enter your email and we'll send you a link to reset your password.`;
};
var zh_common_sign_forgot_password_description = () => {
  return `输入你的邮箱，我们将发送密码重置链接。`;
};
/**
 * | output |
 * | --- |
 * | "Enter your email and we'll send you a link to reset your password." |
 *
 * @param {Common_Sign_Forgot_Password_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_forgot_password_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_forgot_password_description(inputs);
  return zh_common_sign_forgot_password_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_send_reset_link.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Send_Reset_LinkInputs */
var en_common_sign_send_reset_link = () => {
  return `Send reset link`;
};
var zh_common_sign_send_reset_link = () => {
  return `发送重置链接`;
};
/**
 * | output |
 * | --- |
 * | "Send reset link" |
 *
 * @param {Common_Sign_Send_Reset_LinkInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_send_reset_link = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_send_reset_link(inputs);
  return zh_common_sign_send_reset_link(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_reset_link_sent_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Link_Sent_TitleInputs */
var en_common_sign_reset_link_sent_title = () => {
  return `Check your email`;
};
var zh_common_sign_reset_link_sent_title = () => {
  return `请查收邮件`;
};
/**
 * | output |
 * | --- |
 * | "Check your email" |
 *
 * @param {Common_Sign_Reset_Link_Sent_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_reset_link_sent_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_reset_link_sent_title(inputs);
  return zh_common_sign_reset_link_sent_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_reset_link_sent_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ email: NonNullable<unknown> }} Common_Sign_Reset_Link_Sent_DescriptionInputs */
var en_common_sign_reset_link_sent_description = (i) => {
  return `If an account exists for ${i?.email}, we've sent a link to reset your password. The link will expire in 1 hour.`;
};
var zh_common_sign_reset_link_sent_description = (i) => {
  return `如果 ${i?.email} 已注册账号，我们已发送密码重置链接，请在 1 小时内完成重置。`;
};
/**
 * | output |
 * | --- |
 * | "If an account exists for {email}, we've sent a link to reset your password. The link will expire in 1 hour." |
 *
 * @param {Common_Sign_Reset_Link_Sent_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_reset_link_sent_description = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_reset_link_sent_description(inputs);
  return zh_common_sign_reset_link_sent_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_back_to_sign_in.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Back_To_Sign_InInputs */
var en_common_sign_back_to_sign_in = () => {
  return `Back to sign in`;
};
var zh_common_sign_back_to_sign_in = () => {
  return `返回登录`;
};
/**
 * | output |
 * | --- |
 * | "Back to sign in" |
 *
 * @param {Common_Sign_Back_To_Sign_InInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_back_to_sign_in = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_back_to_sign_in(inputs);
  return zh_common_sign_back_to_sign_in(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_reset_password_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_TitleInputs */
var en_common_sign_reset_password_title = () => {
  return `Reset password`;
};
var zh_common_sign_reset_password_title = () => {
  return `重置密码`;
};
/**
 * | output |
 * | --- |
 * | "Reset password" |
 *
 * @param {Common_Sign_Reset_Password_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_reset_password_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_reset_password_title(inputs);
  return zh_common_sign_reset_password_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_reset_password_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_DescriptionInputs */
var en_common_sign_reset_password_description = () => {
  return `Choose a new password for your account.`;
};
var zh_common_sign_reset_password_description = () => {
  return `为你的账号设置新密码。`;
};
/**
 * | output |
 * | --- |
 * | "Choose a new password for your account." |
 *
 * @param {Common_Sign_Reset_Password_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_reset_password_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_reset_password_description(inputs);
  return zh_common_sign_reset_password_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_new_password_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_New_Password_TitleInputs */
var en_common_sign_new_password_title = () => {
  return `New password`;
};
var zh_common_sign_new_password_title = () => {
  return `新密码`;
};
/**
 * | output |
 * | --- |
 * | "New password" |
 *
 * @param {Common_Sign_New_Password_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_new_password_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_new_password_title(inputs);
  return zh_common_sign_new_password_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_new_password_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_New_Password_PlaceholderInputs */
var en_common_sign_new_password_placeholder = () => {
  return `Enter your new password`;
};
var zh_common_sign_new_password_placeholder = () => {
  return `输入新密码`;
};
/**
 * | output |
 * | --- |
 * | "Enter your new password" |
 *
 * @param {Common_Sign_New_Password_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_new_password_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_new_password_placeholder(inputs);
  return zh_common_sign_new_password_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_confirm_new_password_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Confirm_New_Password_PlaceholderInputs */
var en_common_sign_confirm_new_password_placeholder = () => {
  return `Re-enter your new password`;
};
var zh_common_sign_confirm_new_password_placeholder = () => {
  return `再次输入新密码`;
};
/**
 * | output |
 * | --- |
 * | "Re-enter your new password" |
 *
 * @param {Common_Sign_Confirm_New_Password_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_confirm_new_password_placeholder = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_confirm_new_password_placeholder(inputs);
  return zh_common_sign_confirm_new_password_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_reset_password_submit.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_SubmitInputs */
var en_common_sign_reset_password_submit = () => {
  return `Reset password`;
};
var zh_common_sign_reset_password_submit = () => {
  return `重置密码`;
};
/**
 * | output |
 * | --- |
 * | "Reset password" |
 *
 * @param {Common_Sign_Reset_Password_SubmitInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_reset_password_submit = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_reset_password_submit(inputs);
  return zh_common_sign_reset_password_submit(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_reset_password_success.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_SuccessInputs */
var en_common_sign_reset_password_success = () => {
  return `Your password has been reset. You can now sign in.`;
};
var zh_common_sign_reset_password_success = () => {
  return `密码已重置，请使用新密码登录。`;
};
/**
 * | output |
 * | --- |
 * | "Your password has been reset. You can now sign in." |
 *
 * @param {Common_Sign_Reset_Password_SuccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_reset_password_success = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_reset_password_success(inputs);
  return zh_common_sign_reset_password_success(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_reset_password_invalid_token.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_Invalid_TokenInputs */
var en_common_sign_reset_password_invalid_token = () => {
  return `This reset link is invalid or has expired. Please request a new one.`;
};
var zh_common_sign_reset_password_invalid_token = () => {
  return `重置链接无效或已过期，请重新申请。`;
};
/**
 * | output |
 * | --- |
 * | "This reset link is invalid or has expired. Please request a new one." |
 *
 * @param {Common_Sign_Reset_Password_Invalid_TokenInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_reset_password_invalid_token = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_reset_password_invalid_token(inputs);
  return zh_common_sign_reset_password_invalid_token(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_reset_password_missing_token.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_Missing_TokenInputs */
var en_common_sign_reset_password_missing_token = () => {
  return `Missing reset token. Please open the link from your email.`;
};
var zh_common_sign_reset_password_missing_token = () => {
  return `缺少重置令牌，请从邮件中打开链接。`;
};
/**
 * | output |
 * | --- |
 * | "Missing reset token. Please open the link from your email." |
 *
 * @param {Common_Sign_Reset_Password_Missing_TokenInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_reset_password_missing_token = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_reset_password_missing_token(inputs);
  return zh_common_sign_reset_password_missing_token(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_password_reset_unavailable_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_Reset_Unavailable_TitleInputs */
var en_common_sign_password_reset_unavailable_title = () => {
  return `Password reset is not available`;
};
var zh_common_sign_password_reset_unavailable_title = () => {
  return `暂无法找回密码`;
};
/**
 * | output |
 * | --- |
 * | "Password reset is not available" |
 *
 * @param {Common_Sign_Password_Reset_Unavailable_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_password_reset_unavailable_title = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_password_reset_unavailable_title(inputs);
  return zh_common_sign_password_reset_unavailable_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_password_reset_unavailable_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_Reset_Unavailable_DescriptionInputs */
var en_common_sign_password_reset_unavailable_description = () => {
  return `The administrator hasn't configured an email service yet, so reset links can't be sent. Please contact support.`;
};
var zh_common_sign_password_reset_unavailable_description = () => {
  return `管理员尚未配置邮件服务，无法发送重置链接，请联系客服。`;
};
/**
 * | output |
 * | --- |
 * | "The administrator hasn't configured an email service yet, so reset links can't be sent. Please contact support." |
 *
 * @param {Common_Sign_Password_Reset_Unavailable_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_password_reset_unavailable_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_password_reset_unavailable_description(inputs);
  return zh_common_sign_password_reset_unavailable_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_verify_email_page_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Page_TitleInputs */
var en_common_sign_verify_email_page_title = () => {
  return `Check your email`;
};
var zh_common_sign_verify_email_page_title = () => {
  return `请查收邮件`;
};
/**
 * | output |
 * | --- |
 * | "Check your email" |
 *
 * @param {Common_Sign_Verify_Email_Page_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_verify_email_page_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_verify_email_page_title(inputs);
  return zh_common_sign_verify_email_page_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_verify_email_page_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Page_DescriptionInputs */
var en_common_sign_verify_email_page_description = () => {
  return `To continue, click the link sent to`;
};
var zh_common_sign_verify_email_page_description = () => {
  return `继续操作前，请点击发送到以下邮箱的验证链接：`;
};
/**
 * | output |
 * | --- |
 * | "To continue, click the link sent to" |
 *
 * @param {Common_Sign_Verify_Email_Page_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_verify_email_page_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_verify_email_page_description(inputs);
  return zh_common_sign_verify_email_page_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_verify_email_continue.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_ContinueInputs */
var en_common_sign_verify_email_continue = () => {
  return `Continue`;
};
var zh_common_sign_verify_email_continue = () => {
  return `继续`;
};
/**
 * | output |
 * | --- |
 * | "Continue" |
 *
 * @param {Common_Sign_Verify_Email_ContinueInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_verify_email_continue = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_verify_email_continue(inputs);
  return zh_common_sign_verify_email_continue(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_verify_email_tip.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_TipInputs */
var en_common_sign_verify_email_tip = () => {
  return `After verifying, click "Continue".`;
};
var zh_common_sign_verify_email_tip = () => {
  return `完成验证后，请点击「继续」按钮。`;
};
/**
 * | output |
 * | --- |
 * | "After verifying, click \"Continue\"." |
 *
 * @param {Common_Sign_Verify_Email_TipInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_verify_email_tip = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_verify_email_tip(inputs);
  return zh_common_sign_verify_email_tip(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_verify_email_not_verified_yet.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Not_Verified_YetInputs */
var en_common_sign_verify_email_not_verified_yet = () => {
  return `Not verified yet. Please click the link in your email first.`;
};
var zh_common_sign_verify_email_not_verified_yet = () => {
  return `尚未完成验证，请先前往邮箱点击验证链接。`;
};
/**
 * | output |
 * | --- |
 * | "Not verified yet. Please click the link in your email first." |
 *
 * @param {Common_Sign_Verify_Email_Not_Verified_YetInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_verify_email_not_verified_yet = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_verify_email_not_verified_yet(inputs);
  return zh_common_sign_verify_email_not_verified_yet(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_verify_email_send_failed.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Send_FailedInputs */
var en_common_sign_verify_email_send_failed = () => {
  return `Failed to send verification email`;
};
var zh_common_sign_verify_email_send_failed = () => {
  return `发送验证邮件失败`;
};
/**
 * | output |
 * | --- |
 * | "Failed to send verification email" |
 *
 * @param {Common_Sign_Verify_Email_Send_FailedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_verify_email_send_failed = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_verify_email_send_failed(inputs);
  return zh_common_sign_verify_email_send_failed(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_verify_email_email_required.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Email_RequiredInputs */
var en_common_sign_verify_email_email_required = () => {
  return `Email is required`;
};
var zh_common_sign_verify_email_email_required = () => {
  return `邮箱不能为空`;
};
/**
 * | output |
 * | --- |
 * | "Email is required" |
 *
 * @param {Common_Sign_Verify_Email_Email_RequiredInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_verify_email_email_required = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_verify_email_email_required(inputs);
  return zh_common_sign_verify_email_email_required(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_resend_verification.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Resend_VerificationInputs */
var en_common_sign_resend_verification = () => {
  return `Resend verification email`;
};
var zh_common_sign_resend_verification = () => {
  return `重新发送验证邮件`;
};
/**
 * | output |
 * | --- |
 * | "Resend verification email" |
 *
 * @param {Common_Sign_Resend_VerificationInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_resend_verification = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_resend_verification(inputs);
  return zh_common_sign_resend_verification(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_resend_verification_countdown.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ seconds: NonNullable<unknown> }} Common_Sign_Resend_Verification_CountdownInputs */
var en_common_sign_resend_verification_countdown = (i) => {
  return `Resend in ${i?.seconds}s`;
};
var zh_common_sign_resend_verification_countdown = (i) => {
  return `${i?.seconds} 秒后可重新发送`;
};
/**
 * | output |
 * | --- |
 * | "Resend in {seconds}s" |
 *
 * @param {Common_Sign_Resend_Verification_CountdownInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_resend_verification_countdown = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_resend_verification_countdown(inputs);
  return zh_common_sign_resend_verification_countdown(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_invite_code_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Invite_Code_TitleInputs */
var en_common_sign_invite_code_title = () => {
  return `Invite code`;
};
var zh_common_sign_invite_code_title = () => {
  return `邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Invite code" |
 *
 * @param {Common_Sign_Invite_Code_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_invite_code_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_invite_code_title(inputs);
  return zh_common_sign_invite_code_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_invite_code_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Invite_Code_PlaceholderInputs */
var en_common_sign_invite_code_placeholder = () => {
  return `Enter your invite code`;
};
var zh_common_sign_invite_code_placeholder = () => {
  return `请输入邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Enter your invite code" |
 *
 * @param {Common_Sign_Invite_Code_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_invite_code_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_invite_code_placeholder(inputs);
  return zh_common_sign_invite_code_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_invite_code_required.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Invite_Code_RequiredInputs */
var en_common_sign_invite_code_required = () => {
  return `Invite code is required`;
};
var zh_common_sign_invite_code_required = () => {
  return `请输入邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Invite code is required" |
 *
 * @param {Common_Sign_Invite_Code_RequiredInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_invite_code_required = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_invite_code_required(inputs);
  return zh_common_sign_invite_code_required(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_invite_code_invalid.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Invite_Code_InvalidInputs */
var en_common_sign_invite_code_invalid = () => {
  return `Invalid invite code`;
};
var zh_common_sign_invite_code_invalid = () => {
  return `邀请码无效`;
};
/**
 * | output |
 * | --- |
 * | "Invalid invite code" |
 *
 * @param {Common_Sign_Invite_Code_InvalidInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_invite_code_invalid = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_invite_code_invalid(inputs);
  return zh_common_sign_invite_code_invalid(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_redeem_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Redeem_TitleInputs */
var en_common_sign_redeem_title = () => {
  return `Enter your invite code`;
};
var zh_common_sign_redeem_title = () => {
  return `输入邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Enter your invite code" |
 *
 * @param {Common_Sign_Redeem_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_redeem_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_redeem_title(inputs);
  return zh_common_sign_redeem_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_redeem_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Redeem_DescriptionInputs */
var en_common_sign_redeem_description = () => {
  return `This app is invite-only. Enter a valid invite code to continue.`;
};
var zh_common_sign_redeem_description = () => {
  return `本应用为邀请制,请输入有效的邀请码以继续。`;
};
/**
 * | output |
 * | --- |
 * | "This app is invite-only. Enter a valid invite code to continue." |
 *
 * @param {Common_Sign_Redeem_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_redeem_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_redeem_description(inputs);
  return zh_common_sign_redeem_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_sign_redeem_submit.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Redeem_SubmitInputs */
var en_common_sign_redeem_submit = () => {
  return `Continue`;
};
var zh_common_sign_redeem_submit = () => {
  return `继续`;
};
/**
 * | output |
 * | --- |
 * | "Continue" |
 *
 * @param {Common_Sign_Redeem_SubmitInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_sign_redeem_submit = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_sign_redeem_submit(inputs);
  return zh_common_sign_redeem_submit(inputs);
};
//#endregion
//#region src/paraglide/messages/common_not_found_message.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Not_Found_MessageInputs */
var en_common_not_found_message = () => {
  return `Page not found`;
};
var zh_common_not_found_message = () => {
  return `页面不存在`;
};
/**
 * | output |
 * | --- |
 * | "Page not found" |
 *
 * @param {Common_Not_Found_MessageInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_not_found_message = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_not_found_message(inputs);
  return zh_common_not_found_message(inputs);
};
//#endregion
//#region src/paraglide/messages/common_not_found_back_home.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Not_Found_Back_HomeInputs */
var en_common_not_found_back_home = () => {
  return `Back to home`;
};
var zh_common_not_found_back_home = () => {
  return `返回首页`;
};
/**
 * | output |
 * | --- |
 * | "Back to home" |
 *
 * @param {Common_Not_Found_Back_HomeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_not_found_back_home = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_not_found_back_home(inputs);
  return zh_common_not_found_back_home(inputs);
};
//#endregion
//#region src/paraglide/messages/common_error_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Error_TitleInputs */
var en_common_error_title = () => {
  return `Oops`;
};
var zh_common_error_title = () => {
  return `出错了`;
};
/**
 * | output |
 * | --- |
 * | "Oops" |
 *
 * @param {Common_Error_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_error_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_error_title(inputs);
  return zh_common_error_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_error_message.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Error_MessageInputs */
var en_common_error_message = () => {
  return `Something went wrong. Please try again.`;
};
var zh_common_error_message = () => {
  return `页面出现了一些问题，请重试。`;
};
/**
 * | output |
 * | --- |
 * | "Something went wrong. Please try again." |
 *
 * @param {Common_Error_MessageInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_error_message = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_error_message(inputs);
  return zh_common_error_message(inputs);
};
//#endregion
//#region src/paraglide/messages/common_error_retry.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Error_RetryInputs */
var en_common_error_retry = () => {
  return `Try again`;
};
var zh_common_error_retry = () => {
  return `重试`;
};
/**
 * | output |
 * | --- |
 * | "Try again" |
 *
 * @param {Common_Error_RetryInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_error_retry = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_error_retry(inputs);
  return zh_common_error_retry(inputs);
};
//#endregion
//#region src/paraglide/messages/common_pricing_get_started.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pricing_Get_StartedInputs */
var en_common_pricing_get_started = () => {
  return `Get Started`;
};
var zh_common_pricing_get_started = () => {
  return `立即开始`;
};
/**
 * | output |
 * | --- |
 * | "Get Started" |
 *
 * @param {Common_Pricing_Get_StartedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_pricing_get_started = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_pricing_get_started(inputs);
  return zh_common_pricing_get_started(inputs);
};
//#endregion
//#region src/paraglide/messages/common_pricing_processing.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pricing_ProcessingInputs */
var en_common_pricing_processing = () => {
  return `Processing...`;
};
var zh_common_pricing_processing = () => {
  return `处理中...`;
};
/**
 * | output |
 * | --- |
 * | "Processing..." |
 *
 * @param {Common_Pricing_ProcessingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_pricing_processing = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_pricing_processing(inputs);
  return zh_common_pricing_processing(inputs);
};
//#endregion
//#region src/paraglide/messages/common_pricing_choose_payment.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pricing_Choose_PaymentInputs */
var en_common_pricing_choose_payment = () => {
  return `Choose payment method`;
};
var zh_common_pricing_choose_payment = () => {
  return `选择支付方式`;
};
/**
 * | output |
 * | --- |
 * | "Choose payment method" |
 *
 * @param {Common_Pricing_Choose_PaymentInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_pricing_choose_payment = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_pricing_choose_payment(inputs);
  return zh_common_pricing_choose_payment(inputs);
};
//#endregion
//#region src/paraglide/messages/common_pricing_choose_payment_desc.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pricing_Choose_Payment_DescInputs */
var en_common_pricing_choose_payment_desc = () => {
  return `Pick how you'd like to pay.`;
};
var zh_common_pricing_choose_payment_desc = () => {
  return `选择你想使用的支付渠道。`;
};
/**
 * | output |
 * | --- |
 * | "Pick how you'd like to pay." |
 *
 * @param {Common_Pricing_Choose_Payment_DescInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_pricing_choose_payment_desc = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_pricing_choose_payment_desc(inputs);
  return zh_common_pricing_choose_payment_desc(inputs);
};
//#endregion
//#region src/paraglide/messages/common_pricing_payment_for.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ plan: NonNullable<unknown>, price: NonNullable<unknown> }} Common_Pricing_Payment_ForInputs */
var en_common_pricing_payment_for = (i) => {
  return `${i?.plan} — ${i?.price}`;
};
var zh_common_pricing_payment_for = (i) => {
  return `${i?.plan} — ${i?.price}`;
};
/**
 * | output |
 * | --- |
 * | "{plan} — {price}" |
 *
 * @param {Common_Pricing_Payment_ForInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_pricing_payment_for = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_pricing_payment_for(inputs);
  return zh_common_pricing_payment_for(inputs);
};
//#endregion
//#region src/paraglide/messages/common_pricing_payment_for_plan.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ plan: NonNullable<unknown> }} Common_Pricing_Payment_For_PlanInputs */
var en_common_pricing_payment_for_plan = (i) => {
  return `${i?.plan}`;
};
var zh_common_pricing_payment_for_plan = (i) => {
  return `${i?.plan}`;
};
/**
 * | output |
 * | --- |
 * | "{plan}" |
 *
 * @param {Common_Pricing_Payment_For_PlanInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_pricing_payment_for_plan = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_pricing_payment_for_plan(inputs);
  return zh_common_pricing_payment_for_plan(inputs);
};
//#endregion
//#region src/paraglide/messages/common_systems_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Systems_LabelInputs */
var en_common_systems_label = () => {
  return `Switch System`;
};
var zh_common_systems_label = () => {
  return `切换系统`;
};
/**
 * | output |
 * | --- |
 * | "Switch System" |
 *
 * @param {Common_Systems_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_systems_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_systems_label(inputs);
  return zh_common_systems_label(inputs);
};
//#endregion
//#region src/paraglide/messages/common_systems_admin.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Systems_AdminInputs */
var en_common_systems_admin = () => {
  return `Admin`;
};
var zh_common_systems_admin = () => {
  return `管理后台`;
};
/**
 * | output |
 * | --- |
 * | "Admin" |
 *
 * @param {Common_Systems_AdminInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_systems_admin = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_systems_admin(inputs);
  return zh_common_systems_admin(inputs);
};
//#endregion
//#region src/paraglide/messages/common_systems_settings.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Systems_SettingsInputs */
var en_common_systems_settings = () => {
  return `Settings`;
};
var zh_common_systems_settings = () => {
  return `设置`;
};
/**
 * | output |
 * | --- |
 * | "Settings" |
 *
 * @param {Common_Systems_SettingsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_systems_settings = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_systems_settings(inputs);
  return zh_common_systems_settings(inputs);
};
//#endregion
//#region src/paraglide/messages/common_systems_home.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Systems_HomeInputs */
var en_common_systems_home = () => {
  return `Home`;
};
var zh_common_systems_home = () => {
  return `首页`;
};
/**
 * | output |
 * | --- |
 * | "Home" |
 *
 * @param {Common_Systems_HomeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_systems_home = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_systems_home(inputs);
  return zh_common_systems_home(inputs);
};
//#endregion
//#region src/paraglide/messages/common_search_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Search_PlaceholderInputs */
var en_common_search_placeholder = () => {
  return `Search...`;
};
var zh_common_search_placeholder = () => {
  return `搜索...`;
};
/**
 * | output |
 * | --- |
 * | "Search..." |
 *
 * @param {Common_Search_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_search_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_search_placeholder(inputs);
  return zh_common_search_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_table_no_data.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Table_No_DataInputs */
var en_common_table_no_data = () => {
  return `No data`;
};
var zh_common_table_no_data = () => {
  return `暂无数据`;
};
/**
 * | output |
 * | --- |
 * | "No data" |
 *
 * @param {Common_Table_No_DataInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_table_no_data = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_table_no_data(inputs);
  return zh_common_table_no_data(inputs);
};
//#endregion
//#region src/paraglide/messages/common_table_total.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Common_Table_TotalInputs */
var en_common_table_total = (i) => {
  return `${i?.count} records`;
};
var zh_common_table_total = (i) => {
  return `共 ${i?.count} 条记录`;
};
/**
 * | output |
 * | --- |
 * | "{count} records" |
 *
 * @param {Common_Table_TotalInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_table_total = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_table_total(inputs);
  return zh_common_table_total(inputs);
};
//#endregion
//#region src/paraglide/messages/common_table_page_info.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ current: NonNullable<unknown>, total: NonNullable<unknown> }} Common_Table_Page_InfoInputs */
var en_common_table_page_info = (i) => {
  return `Page ${i?.current} of ${i?.total}`;
};
var zh_common_table_page_info = (i) => {
  return `第 ${i?.current} 页，共 ${i?.total} 页`;
};
/**
 * | output |
 * | --- |
 * | "Page {current} of {total}" |
 *
 * @param {Common_Table_Page_InfoInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_table_page_info = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_table_page_info(inputs);
  return zh_common_table_page_info(inputs);
};
//#endregion
//#region src/paraglide/messages/common_table_previous.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Table_PreviousInputs */
var en_common_table_previous = () => {
  return `Previous`;
};
var zh_common_table_previous = () => {
  return `上一页`;
};
/**
 * | output |
 * | --- |
 * | "Previous" |
 *
 * @param {Common_Table_PreviousInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_table_previous = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_table_previous(inputs);
  return zh_common_table_previous(inputs);
};
//#endregion
//#region src/paraglide/messages/common_table_next.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Table_NextInputs */
var en_common_table_next = () => {
  return `Next`;
};
var zh_common_table_next = () => {
  return `下一页`;
};
/**
 * | output |
 * | --- |
 * | "Next" |
 *
 * @param {Common_Table_NextInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_table_next = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_table_next(inputs);
  return zh_common_table_next(inputs);
};
//#endregion
//#region src/paraglide/messages/common_table_refresh.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Table_RefreshInputs */
var en_common_table_refresh = () => {
  return `Refresh`;
};
var zh_common_table_refresh = () => {
  return `刷新`;
};
/**
 * | output |
 * | --- |
 * | "Refresh" |
 *
 * @param {Common_Table_RefreshInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_table_refresh = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_table_refresh(inputs);
  return zh_common_table_refresh(inputs);
};
//#endregion
//#region src/paraglide/messages/common_nav_settings.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_SettingsInputs */
var en_common_nav_settings = () => {
  return `Settings`;
};
var zh_common_nav_settings = () => {
  return `设置`;
};
/**
 * | output |
 * | --- |
 * | "Settings" |
 *
 * @param {Common_Nav_SettingsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_nav_settings = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_nav_settings(inputs);
  return zh_common_nav_settings(inputs);
};
//#endregion
//#region src/paraglide/messages/common_nav_billing.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_BillingInputs */
var en_common_nav_billing = () => {
  return `Billing`;
};
var zh_common_nav_billing = () => {
  return `账单`;
};
/**
 * | output |
 * | --- |
 * | "Billing" |
 *
 * @param {Common_Nav_BillingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_nav_billing = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_nav_billing(inputs);
  return zh_common_nav_billing(inputs);
};
//#endregion
//#region src/paraglide/messages/common_nav_apikeys.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_ApikeysInputs */
var en_common_nav_apikeys = () => {
  return `API Keys`;
};
var zh_common_nav_apikeys = () => {
  return `API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "API Keys" |
 *
 * @param {Common_Nav_ApikeysInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_nav_apikeys = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_nav_apikeys(inputs);
  return zh_common_nav_apikeys(inputs);
};
//#endregion
//#region src/paraglide/messages/common_nav_profile.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_ProfileInputs */
var en_common_nav_profile = () => {
  return `Profile`;
};
var zh_common_nav_profile = () => {
  return `个人资料`;
};
/**
 * | output |
 * | --- |
 * | "Profile" |
 *
 * @param {Common_Nav_ProfileInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_nav_profile = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_nav_profile(inputs);
  return zh_common_nav_profile(inputs);
};
//#endregion
//#region src/paraglide/messages/common_nav_sign_in.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Sign_InInputs */
var en_common_nav_sign_in = () => {
  return `Sign In`;
};
var zh_common_nav_sign_in = () => {
  return `登录`;
};
/**
 * | output |
 * | --- |
 * | "Sign In" |
 *
 * @param {Common_Nav_Sign_InInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_nav_sign_in = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_nav_sign_in(inputs);
  return zh_common_nav_sign_in(inputs);
};
//#endregion
//#region src/paraglide/messages/common_nav_get_started.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Get_StartedInputs */
var en_common_nav_get_started = () => {
  return `Get Started`;
};
var zh_common_nav_get_started = () => {
  return `开始使用`;
};
/**
 * | output |
 * | --- |
 * | "Get Started" |
 *
 * @param {Common_Nav_Get_StartedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_nav_get_started = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_nav_get_started(inputs);
  return zh_common_nav_get_started(inputs);
};
//#endregion
//#region src/paraglide/messages/common_nav_theme_light.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Theme_LightInputs */
var en_common_nav_theme_light = () => {
  return `Light`;
};
var zh_common_nav_theme_light = () => {
  return `浅色模式`;
};
/**
 * | output |
 * | --- |
 * | "Light" |
 *
 * @param {Common_Nav_Theme_LightInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_nav_theme_light = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_nav_theme_light(inputs);
  return zh_common_nav_theme_light(inputs);
};
//#endregion
//#region src/paraglide/messages/common_nav_theme_dark.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Theme_DarkInputs */
var en_common_nav_theme_dark = () => {
  return `Dark`;
};
var zh_common_nav_theme_dark = () => {
  return `深色模式`;
};
/**
 * | output |
 * | --- |
 * | "Dark" |
 *
 * @param {Common_Nav_Theme_DarkInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_nav_theme_dark = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_nav_theme_dark(inputs);
  return zh_common_nav_theme_dark(inputs);
};
//#endregion
//#region src/paraglide/messages/common_nav_theme_system.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Theme_SystemInputs */
var en_common_nav_theme_system = () => {
  return `System`;
};
var zh_common_nav_theme_system = () => {
  return `跟随系统`;
};
/**
 * | output |
 * | --- |
 * | "System" |
 *
 * @param {Common_Nav_Theme_SystemInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_nav_theme_system = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_nav_theme_system(inputs);
  return zh_common_nav_theme_system(inputs);
};
//#endregion
//#region src/paraglide/messages/common_pages_back_to_home.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pages_Back_To_HomeInputs */
var en_common_pages_back_to_home = () => {
  return `Back to home`;
};
var zh_common_pages_back_to_home = () => {
  return `返回首页`;
};
/**
 * | output |
 * | --- |
 * | "Back to home" |
 *
 * @param {Common_Pages_Back_To_HomeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_pages_back_to_home = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_pages_back_to_home(inputs);
  return zh_common_pages_back_to_home(inputs);
};
//#endregion
//#region src/paraglide/messages/common_pages_last_updated.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pages_Last_UpdatedInputs */
var en_common_pages_last_updated = () => {
  return `Last updated`;
};
var zh_common_pages_last_updated = () => {
  return `最近更新`;
};
/**
 * | output |
 * | --- |
 * | "Last updated" |
 *
 * @param {Common_Pages_Last_UpdatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_pages_last_updated = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_pages_last_updated(inputs);
  return zh_common_pages_last_updated(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_open_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Open_LabelInputs */
var en_common_support_open_label = () => {
  return `Contact support`;
};
var zh_common_support_open_label = () => {
  return `联系客服`;
};
/**
 * | output |
 * | --- |
 * | "Contact support" |
 *
 * @param {Common_Support_Open_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_open_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_open_label(inputs);
  return zh_common_support_open_label(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_TitleInputs */
var en_common_support_title = () => {
  return `Contact Support`;
};
var zh_common_support_title = () => {
  return `联系客服`;
};
/**
 * | output |
 * | --- |
 * | "Contact Support" |
 *
 * @param {Common_Support_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_title(inputs);
  return zh_common_support_title(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_DescriptionInputs */
var en_common_support_description = () => {
  return `Submit a ticket and our team will get back to you`;
};
var zh_common_support_description = () => {
  return `提交工单反馈问题,我们会尽快回复你`;
};
/**
 * | output |
 * | --- |
 * | "Submit a ticket and our team will get back to you" |
 *
 * @param {Common_Support_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_description(inputs);
  return zh_common_support_description(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_sign_in_notice.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Sign_In_NoticeInputs */
var en_common_support_sign_in_notice = () => {
  return `Please sign in to submit a support ticket.`;
};
var zh_common_support_sign_in_notice = () => {
  return `请先登录后再提交工单。`;
};
/**
 * | output |
 * | --- |
 * | "Please sign in to submit a support ticket." |
 *
 * @param {Common_Support_Sign_In_NoticeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_sign_in_notice = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_sign_in_notice(inputs);
  return zh_common_support_sign_in_notice(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_sign_in.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Sign_InInputs */
var en_common_support_sign_in = () => {
  return `Sign In`;
};
var zh_common_support_sign_in = () => {
  return `去登录`;
};
/**
 * | output |
 * | --- |
 * | "Sign In" |
 *
 * @param {Common_Support_Sign_InInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_sign_in = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_sign_in(inputs);
  return zh_common_support_sign_in(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_title_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Title_LabelInputs */
var en_common_support_title_label = () => {
  return `Subject`;
};
var zh_common_support_title_label = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Subject" |
 *
 * @param {Common_Support_Title_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_title_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_title_label(inputs);
  return zh_common_support_title_label(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_title_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Title_PlaceholderInputs */
var en_common_support_title_placeholder = () => {
  return `Brief summary of your issue`;
};
var zh_common_support_title_placeholder = () => {
  return `简要描述你的问题`;
};
/**
 * | output |
 * | --- |
 * | "Brief summary of your issue" |
 *
 * @param {Common_Support_Title_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_title_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_title_placeholder(inputs);
  return zh_common_support_title_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_content_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Content_LabelInputs */
var en_common_support_content_label = () => {
  return `Description`;
};
var zh_common_support_content_label = () => {
  return `问题描述`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Common_Support_Content_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_content_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_content_label(inputs);
  return zh_common_support_content_label(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_content_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Content_PlaceholderInputs */
var en_common_support_content_placeholder = () => {
  return `Describe your issue in detail...`;
};
var zh_common_support_content_placeholder = () => {
  return `详细描述你遇到的问题…`;
};
/**
 * | output |
 * | --- |
 * | "Describe your issue in detail..." |
 *
 * @param {Common_Support_Content_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_content_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_content_placeholder(inputs);
  return zh_common_support_content_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_track_hint_prefix.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Track_Hint_PrefixInputs */
var en_common_support_track_hint_prefix = () => {
  return `You can track replies in`;
};
var zh_common_support_track_hint_prefix = () => {
  return `提交后可前往`;
};
/**
 * | output |
 * | --- |
 * | "You can track replies in" |
 *
 * @param {Common_Support_Track_Hint_PrefixInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_track_hint_prefix = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_track_hint_prefix(inputs);
  return zh_common_support_track_hint_prefix(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_track_hint_link.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Track_Hint_LinkInputs */
var en_common_support_track_hint_link = () => {
  return `Support Tickets`;
};
var zh_common_support_track_hint_link = () => {
  return `工单支持页面查看回复`;
};
/**
 * | output |
 * | --- |
 * | "Support Tickets" |
 *
 * @param {Common_Support_Track_Hint_LinkInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_track_hint_link = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_track_hint_link(inputs);
  return zh_common_support_track_hint_link(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_required.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_RequiredInputs */
var en_common_support_required = () => {
  return `Subject and description are required`;
};
var zh_common_support_required = () => {
  return `请填写标题和问题描述`;
};
/**
 * | output |
 * | --- |
 * | "Subject and description are required" |
 *
 * @param {Common_Support_RequiredInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_required = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_required(inputs);
  return zh_common_support_required(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_success.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_SuccessInputs */
var en_common_support_success = () => {
  return `Ticket submitted — we'll get back to you soon`;
};
var zh_common_support_success = () => {
  return `工单已提交,我们会尽快回复`;
};
/**
 * | output |
 * | --- |
 * | "Ticket submitted — we'll get back to you soon" |
 *
 * @param {Common_Support_SuccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_success = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_success(inputs);
  return zh_common_support_success(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_CancelInputs */
var en_common_support_cancel = () => {
  return `Cancel`;
};
var zh_common_support_cancel = () => {
  return `取消`;
};
/**
 * | output |
 * | --- |
 * | "Cancel" |
 *
 * @param {Common_Support_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_cancel(inputs);
  return zh_common_support_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_submit.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_SubmitInputs */
var en_common_support_submit = () => {
  return `Submit`;
};
var zh_common_support_submit = () => {
  return `提交`;
};
/**
 * | output |
 * | --- |
 * | "Submit" |
 *
 * @param {Common_Support_SubmitInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_submit = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_submit(inputs);
  return zh_common_support_submit(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_submitting.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_SubmittingInputs */
var en_common_support_submitting = () => {
  return `Submitting...`;
};
var zh_common_support_submitting = () => {
  return `提交中…`;
};
/**
 * | output |
 * | --- |
 * | "Submitting..." |
 *
 * @param {Common_Support_SubmittingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_submitting = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_submitting(inputs);
  return zh_common_support_submitting(inputs);
};
//#endregion
//#region src/paraglide/messages/common_support_attachments_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Attachments_LabelInputs */
var en_common_support_attachments_label = () => {
  return `Images (optional)`;
};
var zh_common_support_attachments_label = () => {
  return `图片附件(可选)`;
};
/**
 * | output |
 * | --- |
 * | "Images (optional)" |
 *
 * @param {Common_Support_Attachments_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var common_support_attachments_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_common_support_attachments_label(inputs);
  return zh_common_support_attachments_label(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_TitleInputs */
var en_settings_title = () => {
  return `Settings`;
};
var zh_settings_title = () => {
  return `设置`;
};
/**
 * | output |
 * | --- |
 * | "Settings" |
 *
 * @param {Settings_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_title(inputs);
  return zh_settings_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_welcome.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ name: NonNullable<unknown> }} Settings_WelcomeInputs */
var en_settings_welcome = (i) => {
  return `Welcome back, ${i?.name}`;
};
var zh_settings_welcome = (i) => {
  return `欢迎回来，${i?.name}`;
};
/**
 * | output |
 * | --- |
 * | "Welcome back, {name}" |
 *
 * @param {Settings_WelcomeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_welcome = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_welcome(inputs);
  return zh_settings_welcome(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_PlaceholderInputs */
var en_settings_placeholder = () => {
  return `Your app content goes here.`;
};
var zh_settings_placeholder = () => {
  return `你的应用内容在这里。`;
};
/**
 * | output |
 * | --- |
 * | "Your app content goes here." |
 *
 * @param {Settings_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_placeholder(inputs);
  return zh_settings_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_nav_overview.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_OverviewInputs */
var en_settings_nav_overview = () => {
  return `Overview`;
};
var zh_settings_nav_overview = () => {
  return `概览`;
};
/**
 * | output |
 * | --- |
 * | "Overview" |
 *
 * @param {Settings_Nav_OverviewInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_nav_overview = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_nav_overview(inputs);
  return zh_settings_nav_overview(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_nav_profile.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_ProfileInputs */
var en_settings_nav_profile = () => {
  return `Profile`;
};
var zh_settings_nav_profile = () => {
  return `个人资料`;
};
/**
 * | output |
 * | --- |
 * | "Profile" |
 *
 * @param {Settings_Nav_ProfileInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_nav_profile = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_nav_profile(inputs);
  return zh_settings_nav_profile(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_nav_billing.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_BillingInputs */
var en_settings_nav_billing = () => {
  return `Billing`;
};
var zh_settings_nav_billing = () => {
  return `账单`;
};
/**
 * | output |
 * | --- |
 * | "Billing" |
 *
 * @param {Settings_Nav_BillingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_nav_billing = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_nav_billing(inputs);
  return zh_settings_nav_billing(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_nav_payments.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_PaymentsInputs */
var en_settings_nav_payments = () => {
  return `Payments`;
};
var zh_settings_nav_payments = () => {
  return `付款记录`;
};
/**
 * | output |
 * | --- |
 * | "Payments" |
 *
 * @param {Settings_Nav_PaymentsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_nav_payments = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_nav_payments(inputs);
  return zh_settings_nav_payments(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_nav_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_CreditsInputs */
var en_settings_nav_credits = () => {
  return `Credits`;
};
var zh_settings_nav_credits = () => {
  return `额度明细`;
};
/**
 * | output |
 * | --- |
 * | "Credits" |
 *
 * @param {Settings_Nav_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_nav_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_nav_credits(inputs);
  return zh_settings_nav_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_nav_apikeys.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_ApikeysInputs */
var en_settings_nav_apikeys = () => {
  return `API Keys`;
};
var zh_settings_nav_apikeys = () => {
  return `API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "API Keys" |
 *
 * @param {Settings_Nav_ApikeysInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_nav_apikeys = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_nav_apikeys(inputs);
  return zh_settings_nav_apikeys(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_nav_tickets.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_TicketsInputs */
var en_settings_nav_tickets = () => {
  return `Support Tickets`;
};
var zh_settings_nav_tickets = () => {
  return `工单支持`;
};
/**
 * | output |
 * | --- |
 * | "Support Tickets" |
 *
 * @param {Settings_Nav_TicketsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_nav_tickets = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_nav_tickets(inputs);
  return zh_settings_nav_tickets(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_overview_plan.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_PlanInputs */
var en_settings_overview_plan = () => {
  return `Plan`;
};
var zh_settings_overview_plan = () => {
  return `套餐`;
};
/**
 * | output |
 * | --- |
 * | "Plan" |
 *
 * @param {Settings_Overview_PlanInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_overview_plan = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_overview_plan(inputs);
  return zh_settings_overview_plan(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_overview_plan_free.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Plan_FreeInputs */
var en_settings_overview_plan_free = () => {
  return `Free`;
};
var zh_settings_overview_plan_free = () => {
  return `免费版`;
};
/**
 * | output |
 * | --- |
 * | "Free" |
 *
 * @param {Settings_Overview_Plan_FreeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_overview_plan_free = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_overview_plan_free(inputs);
  return zh_settings_overview_plan_free(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_overview_plan_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Plan_DescriptionInputs */
var en_settings_overview_plan_description = () => {
  return `Current subscription`;
};
var zh_settings_overview_plan_description = () => {
  return `当前订阅`;
};
/**
 * | output |
 * | --- |
 * | "Current subscription" |
 *
 * @param {Settings_Overview_Plan_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_overview_plan_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_overview_plan_description(inputs);
  return zh_settings_overview_plan_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_overview_usage.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_UsageInputs */
var en_settings_overview_usage = () => {
  return `Usage`;
};
var zh_settings_overview_usage = () => {
  return `用量`;
};
/**
 * | output |
 * | --- |
 * | "Usage" |
 *
 * @param {Settings_Overview_UsageInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_overview_usage = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_overview_usage(inputs);
  return zh_settings_overview_usage(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_overview_usage_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Usage_DescriptionInputs */
var en_settings_overview_usage_description = () => {
  return `API calls this month`;
};
var zh_settings_overview_usage_description = () => {
  return `本月 API 调用次数`;
};
/**
 * | output |
 * | --- |
 * | "API calls this month" |
 *
 * @param {Settings_Overview_Usage_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_overview_usage_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_overview_usage_description(inputs);
  return zh_settings_overview_usage_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_overview_apikeys_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Apikeys_DescriptionInputs */
var en_settings_overview_apikeys_description = () => {
  return `Active keys`;
};
var zh_settings_overview_apikeys_description = () => {
  return `活跃密钥`;
};
/**
 * | output |
 * | --- |
 * | "Active keys" |
 *
 * @param {Settings_Overview_Apikeys_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_overview_apikeys_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_overview_apikeys_description(inputs);
  return zh_settings_overview_apikeys_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_overview_getting_started.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Getting_StartedInputs */
var en_settings_overview_getting_started = () => {
  return `Getting Started`;
};
var zh_settings_overview_getting_started = () => {
  return `开始使用`;
};
/**
 * | output |
 * | --- |
 * | "Getting Started" |
 *
 * @param {Settings_Overview_Getting_StartedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_overview_getting_started = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_overview_getting_started(inputs);
  return zh_settings_overview_getting_started(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_overview_getting_started_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Getting_Started_DescriptionInputs */
var en_settings_overview_getting_started_description = () => {
  return `Build your product on top of this engine`;
};
var zh_settings_overview_getting_started_description = () => {
  return `在这个引擎之上构建你的产品`;
};
/**
 * | output |
 * | --- |
 * | "Build your product on top of this engine" |
 *
 * @param {Settings_Overview_Getting_Started_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_overview_getting_started_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_overview_getting_started_description(inputs);
  return zh_settings_overview_getting_started_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_TitleInputs */
var en_settings_profile_title = () => {
  return `Profile`;
};
var zh_settings_profile_title = () => {
  return `个人资料`;
};
/**
 * | output |
 * | --- |
 * | "Profile" |
 *
 * @param {Settings_Profile_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_title(inputs);
  return zh_settings_profile_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_DescriptionInputs */
var en_settings_profile_description = () => {
  return `Manage your account`;
};
var zh_settings_profile_description = () => {
  return `管理你的账户`;
};
/**
 * | output |
 * | --- |
 * | "Manage your account" |
 *
 * @param {Settings_Profile_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_description(inputs);
  return zh_settings_profile_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_profile.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_ProfileInputs */
var en_settings_profile_profile = () => {
  return `Profile`;
};
var zh_settings_profile_profile = () => {
  return `个人资料`;
};
/**
 * | output |
 * | --- |
 * | "Profile" |
 *
 * @param {Settings_Profile_ProfileInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_profile = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_profile(inputs);
  return zh_settings_profile_profile(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_name.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_NameInputs */
var en_settings_profile_name = () => {
  return `Name`;
};
var zh_settings_profile_name = () => {
  return `姓名`;
};
/**
 * | output |
 * | --- |
 * | "Name" |
 *
 * @param {Settings_Profile_NameInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_name = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_name(inputs);
  return zh_settings_profile_name(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_email.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_EmailInputs */
var en_settings_profile_email = () => {
  return `Email`;
};
var zh_settings_profile_email = () => {
  return `邮箱`;
};
/**
 * | output |
 * | --- |
 * | "Email" |
 *
 * @param {Settings_Profile_EmailInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_email = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_email(inputs);
  return zh_settings_profile_email(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_avatar.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_AvatarInputs */
var en_settings_profile_avatar = () => {
  return `Avatar`;
};
var zh_settings_profile_avatar = () => {
  return `头像`;
};
/**
 * | output |
 * | --- |
 * | "Avatar" |
 *
 * @param {Settings_Profile_AvatarInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_avatar = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_avatar(inputs);
  return zh_settings_profile_avatar(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_avatar_hint.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_Avatar_HintInputs */
var en_settings_profile_avatar_hint = () => {
  return `Drop an image, click to upload, or paste from clipboard`;
};
var zh_settings_profile_avatar_hint = () => {
  return `拖拽图片、点击上传，或从剪贴板粘贴`;
};
/**
 * | output |
 * | --- |
 * | "Drop an image, click to upload, or paste from clipboard" |
 *
 * @param {Settings_Profile_Avatar_HintInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_avatar_hint = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_avatar_hint(inputs);
  return zh_settings_profile_avatar_hint(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_save.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_SaveInputs */
var en_settings_profile_save = () => {
  return `Save`;
};
var zh_settings_profile_save = () => {
  return `保存`;
};
/**
 * | output |
 * | --- |
 * | "Save" |
 *
 * @param {Settings_Profile_SaveInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_save = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_save(inputs);
  return zh_settings_profile_save(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_saving.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_SavingInputs */
var en_settings_profile_saving = () => {
  return `Saving...`;
};
var zh_settings_profile_saving = () => {
  return `保存中...`;
};
/**
 * | output |
 * | --- |
 * | "Saving..." |
 *
 * @param {Settings_Profile_SavingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_saving = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_saving(inputs);
  return zh_settings_profile_saving(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_saved.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_SavedInputs */
var en_settings_profile_saved = () => {
  return `Settings saved`;
};
var zh_settings_profile_saved = () => {
  return `设置已保存`;
};
/**
 * | output |
 * | --- |
 * | "Settings saved" |
 *
 * @param {Settings_Profile_SavedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_saved = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_saved(inputs);
  return zh_settings_profile_saved(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_save_failed.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_Save_FailedInputs */
var en_settings_profile_save_failed = () => {
  return `Failed to save`;
};
var zh_settings_profile_save_failed = () => {
  return `保存失败`;
};
/**
 * | output |
 * | --- |
 * | "Failed to save" |
 *
 * @param {Settings_Profile_Save_FailedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_save_failed = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_save_failed(inputs);
  return zh_settings_profile_save_failed(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_profile_loading.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_LoadingInputs */
var en_settings_profile_loading = () => {
  return `Loading...`;
};
var zh_settings_profile_loading = () => {
  return `加载中...`;
};
/**
 * | output |
 * | --- |
 * | "Loading..." |
 *
 * @param {Settings_Profile_LoadingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_profile_loading = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_profile_loading(inputs);
  return zh_settings_profile_loading(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_TitleInputs */
var en_settings_billing_title = () => {
  return `Billing`;
};
var zh_settings_billing_title = () => {
  return `账单`;
};
/**
 * | output |
 * | --- |
 * | "Billing" |
 *
 * @param {Settings_Billing_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_title(inputs);
  return zh_settings_billing_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_DescriptionInputs */
var en_settings_billing_description = () => {
  return `Manage your subscriptions`;
};
var zh_settings_billing_description = () => {
  return `管理你的订阅`;
};
/**
 * | output |
 * | --- |
 * | "Manage your subscriptions" |
 *
 * @param {Settings_Billing_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_description(inputs);
  return zh_settings_billing_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_CreditsInputs */
var en_settings_billing_credits = () => {
  return `Credits`;
};
var zh_settings_billing_credits = () => {
  return `额度`;
};
/**
 * | output |
 * | --- |
 * | "Credits" |
 *
 * @param {Settings_Billing_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_credits(inputs);
  return zh_settings_billing_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_credits_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Credits_DescriptionInputs */
var en_settings_billing_credits_description = () => {
  return `Your available credit balance`;
};
var zh_settings_billing_credits_description = () => {
  return `你的可用额度余额`;
};
/**
 * | output |
 * | --- |
 * | "Your available credit balance" |
 *
 * @param {Settings_Billing_Credits_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_credits_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_credits_description(inputs);
  return zh_settings_billing_credits_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_subscription.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_SubscriptionInputs */
var en_settings_billing_subscription = () => {
  return `Current Subscription`;
};
var zh_settings_billing_subscription = () => {
  return `当前订阅`;
};
/**
 * | output |
 * | --- |
 * | "Current Subscription" |
 *
 * @param {Settings_Billing_SubscriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_subscription = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_subscription(inputs);
  return zh_settings_billing_subscription(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_subscriptions.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_SubscriptionsInputs */
var en_settings_billing_subscriptions = () => {
  return `Subscriptions`;
};
var zh_settings_billing_subscriptions = () => {
  return `订阅列表`;
};
/**
 * | output |
 * | --- |
 * | "Subscriptions" |
 *
 * @param {Settings_Billing_SubscriptionsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_subscriptions = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_subscriptions(inputs);
  return zh_settings_billing_subscriptions(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_subscription_details.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Subscription_DetailsInputs */
var en_settings_billing_subscription_details = () => {
  return `Subscription Details`;
};
var zh_settings_billing_subscription_details = () => {
  return `订阅详情`;
};
/**
 * | output |
 * | --- |
 * | "Subscription Details" |
 *
 * @param {Settings_Billing_Subscription_DetailsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_subscription_details = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_subscription_details(inputs);
  return zh_settings_billing_subscription_details(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_no_subscription.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_No_SubscriptionInputs */
var en_settings_billing_no_subscription = () => {
  return `No active subscription`;
};
var zh_settings_billing_no_subscription = () => {
  return `暂无活跃订阅`;
};
/**
 * | output |
 * | --- |
 * | "No active subscription" |
 *
 * @param {Settings_Billing_No_SubscriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_no_subscription = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_no_subscription(inputs);
  return zh_settings_billing_no_subscription(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_subscribe.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_SubscribeInputs */
var en_settings_billing_subscribe = () => {
  return `Subscribe`;
};
var zh_settings_billing_subscribe = () => {
  return `立即订阅`;
};
/**
 * | output |
 * | --- |
 * | "Subscribe" |
 *
 * @param {Settings_Billing_SubscribeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_subscribe = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_subscribe(inputs);
  return zh_settings_billing_subscribe(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_adjust.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_AdjustInputs */
var en_settings_billing_adjust = () => {
  return `Change plan`;
};
var zh_settings_billing_adjust = () => {
  return `调整套餐`;
};
/**
 * | output |
 * | --- |
 * | "Change plan" |
 *
 * @param {Settings_Billing_AdjustInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_adjust = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_adjust(inputs);
  return zh_settings_billing_adjust(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_plan.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_PlanInputs */
var en_settings_billing_plan = () => {
  return `Plan`;
};
var zh_settings_billing_plan = () => {
  return `套餐`;
};
/**
 * | output |
 * | --- |
 * | "Plan" |
 *
 * @param {Settings_Billing_PlanInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_plan = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_plan(inputs);
  return zh_settings_billing_plan(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_status.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_StatusInputs */
var en_settings_billing_status = () => {
  return `Status`;
};
var zh_settings_billing_status = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Settings_Billing_StatusInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_status = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_status(inputs);
  return zh_settings_billing_status(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_interval.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_IntervalInputs */
var en_settings_billing_interval = () => {
  return `Interval`;
};
var zh_settings_billing_interval = () => {
  return `周期`;
};
/**
 * | output |
 * | --- |
 * | "Interval" |
 *
 * @param {Settings_Billing_IntervalInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_interval = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_interval(inputs);
  return zh_settings_billing_interval(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_subscription_no.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Subscription_NoInputs */
var en_settings_billing_subscription_no = () => {
  return `No.`;
};
var zh_settings_billing_subscription_no = () => {
  return `订阅号`;
};
/**
 * | output |
 * | --- |
 * | "No." |
 *
 * @param {Settings_Billing_Subscription_NoInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_subscription_no = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_subscription_no(inputs);
  return zh_settings_billing_subscription_no(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_current_period.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Current_PeriodInputs */
var en_settings_billing_current_period = () => {
  return `Current period`;
};
var zh_settings_billing_current_period = () => {
  return `当前周期`;
};
/**
 * | output |
 * | --- |
 * | "Current period" |
 *
 * @param {Settings_Billing_Current_PeriodInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_current_period = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_current_period(inputs);
  return zh_settings_billing_current_period(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_end_time.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_End_TimeInputs */
var en_settings_billing_end_time = () => {
  return `Ends at`;
};
var zh_settings_billing_end_time = () => {
  return `结束时间`;
};
/**
 * | output |
 * | --- |
 * | "Ends at" |
 *
 * @param {Settings_Billing_End_TimeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_end_time = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_end_time(inputs);
  return zh_settings_billing_end_time(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_renews_on.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ date: NonNullable<unknown> }} Settings_Billing_Renews_OnInputs */
var en_settings_billing_renews_on = (i) => {
  return `Renews on ${i?.date}`;
};
var zh_settings_billing_renews_on = (i) => {
  return `${i?.date} 续订`;
};
/**
 * | output |
 * | --- |
 * | "Renews on {date}" |
 *
 * @param {Settings_Billing_Renews_OnInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_renews_on = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_renews_on(inputs);
  return zh_settings_billing_renews_on(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_ends_on.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ date: NonNullable<unknown> }} Settings_Billing_Ends_OnInputs */
var en_settings_billing_ends_on = (i) => {
  return `Ends on ${i?.date}`;
};
var zh_settings_billing_ends_on = (i) => {
  return `${i?.date} 到期`;
};
/**
 * | output |
 * | --- |
 * | "Ends on {date}" |
 *
 * @param {Settings_Billing_Ends_OnInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_ends_on = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_ends_on(inputs);
  return zh_settings_billing_ends_on(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_period_start.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Period_StartInputs */
var en_settings_billing_period_start = () => {
  return `Period start`;
};
var zh_settings_billing_period_start = () => {
  return `本期开始`;
};
/**
 * | output |
 * | --- |
 * | "Period start" |
 *
 * @param {Settings_Billing_Period_StartInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_period_start = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_period_start(inputs);
  return zh_settings_billing_period_start(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_period_end.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Period_EndInputs */
var en_settings_billing_period_end = () => {
  return `Period end`;
};
var zh_settings_billing_period_end = () => {
  return `本期结束`;
};
/**
 * | output |
 * | --- |
 * | "Period end" |
 *
 * @param {Settings_Billing_Period_EndInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_period_end = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_period_end(inputs);
  return zh_settings_billing_period_end(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_canceled_at.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Canceled_AtInputs */
var en_settings_billing_canceled_at = () => {
  return `Canceled at`;
};
var zh_settings_billing_canceled_at = () => {
  return `取消时间`;
};
/**
 * | output |
 * | --- |
 * | "Canceled at" |
 *
 * @param {Settings_Billing_Canceled_AtInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_canceled_at = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_canceled_at(inputs);
  return zh_settings_billing_canceled_at(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_canceled_end_at.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Canceled_End_AtInputs */
var en_settings_billing_canceled_end_at = () => {
  return `Ends at`;
};
var zh_settings_billing_canceled_end_at = () => {
  return `结束时间`;
};
/**
 * | output |
 * | --- |
 * | "Ends at" |
 *
 * @param {Settings_Billing_Canceled_End_AtInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_canceled_end_at = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_canceled_end_at(inputs);
  return zh_settings_billing_canceled_end_at(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_canceled_reason.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Canceled_ReasonInputs */
var en_settings_billing_canceled_reason = () => {
  return `Reason`;
};
var zh_settings_billing_canceled_reason = () => {
  return `取消原因`;
};
/**
 * | output |
 * | --- |
 * | "Reason" |
 *
 * @param {Settings_Billing_Canceled_ReasonInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_canceled_reason = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_canceled_reason(inputs);
  return zh_settings_billing_canceled_reason(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_view.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_ViewInputs */
var en_settings_billing_view = () => {
  return `View`;
};
var zh_settings_billing_view = () => {
  return `查看订阅`;
};
/**
 * | output |
 * | --- |
 * | "View" |
 *
 * @param {Settings_Billing_ViewInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_view = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_view(inputs);
  return zh_settings_billing_view(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_CancelInputs */
var en_settings_billing_cancel = () => {
  return `Cancel subscription`;
};
var zh_settings_billing_cancel = () => {
  return `取消订阅`;
};
/**
 * | output |
 * | --- |
 * | "Cancel subscription" |
 *
 * @param {Settings_Billing_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_cancel(inputs);
  return zh_settings_billing_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_cancel_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_TitleInputs */
var en_settings_billing_cancel_title = () => {
  return `Cancel subscription`;
};
var zh_settings_billing_cancel_title = () => {
  return `取消订阅`;
};
/**
 * | output |
 * | --- |
 * | "Cancel subscription" |
 *
 * @param {Settings_Billing_Cancel_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_cancel_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_cancel_title(inputs);
  return zh_settings_billing_cancel_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_cancel_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ plan: NonNullable<unknown> }} Settings_Billing_Cancel_DescriptionInputs */
var en_settings_billing_cancel_description = (i) => {
  return `Are you sure you want to cancel your ${i?.plan} subscription? You'll keep access until the end of the current billing period.`;
};
var zh_settings_billing_cancel_description = (i) => {
  return `确定要取消「${i?.plan}」订阅吗？你可以使用到当前计费周期结束。`;
};
/**
 * | output |
 * | --- |
 * | "Are you sure you want to cancel your {plan} subscription? You'll keep access until the end of the current billing period." |
 *
 * @param {Settings_Billing_Cancel_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_cancel_description = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_cancel_description(inputs);
  return zh_settings_billing_cancel_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_cancel_confirm.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_ConfirmInputs */
var en_settings_billing_cancel_confirm = () => {
  return `Cancel subscription`;
};
var zh_settings_billing_cancel_confirm = () => {
  return `确认取消`;
};
/**
 * | output |
 * | --- |
 * | "Cancel subscription" |
 *
 * @param {Settings_Billing_Cancel_ConfirmInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_cancel_confirm = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_cancel_confirm(inputs);
  return zh_settings_billing_cancel_confirm(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_cancel_back.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_BackInputs */
var en_settings_billing_cancel_back = () => {
  return `Keep subscription`;
};
var zh_settings_billing_cancel_back = () => {
  return `保留订阅`;
};
/**
 * | output |
 * | --- |
 * | "Keep subscription" |
 *
 * @param {Settings_Billing_Cancel_BackInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_cancel_back = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_cancel_back(inputs);
  return zh_settings_billing_cancel_back(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_canceling.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_CancelingInputs */
var en_settings_billing_canceling = () => {
  return `Canceling...`;
};
var zh_settings_billing_canceling = () => {
  return `取消中...`;
};
/**
 * | output |
 * | --- |
 * | "Canceling..." |
 *
 * @param {Settings_Billing_CancelingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_canceling = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_canceling(inputs);
  return zh_settings_billing_canceling(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_cancel_success.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_SuccessInputs */
var en_settings_billing_cancel_success = () => {
  return `Subscription canceled`;
};
var zh_settings_billing_cancel_success = () => {
  return `订阅已取消`;
};
/**
 * | output |
 * | --- |
 * | "Subscription canceled" |
 *
 * @param {Settings_Billing_Cancel_SuccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_cancel_success = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_cancel_success(inputs);
  return zh_settings_billing_cancel_success(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_cancel_failed.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_FailedInputs */
var en_settings_billing_cancel_failed = () => {
  return `Failed to cancel subscription`;
};
var zh_settings_billing_cancel_failed = () => {
  return `取消订阅失败`;
};
/**
 * | output |
 * | --- |
 * | "Failed to cancel subscription" |
 *
 * @param {Settings_Billing_Cancel_FailedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_cancel_failed = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_cancel_failed(inputs);
  return zh_settings_billing_cancel_failed(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_close.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_CloseInputs */
var en_settings_billing_close = () => {
  return `Close`;
};
var zh_settings_billing_close = () => {
  return `关闭`;
};
/**
 * | output |
 * | --- |
 * | "Close" |
 *
 * @param {Settings_Billing_CloseInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_close = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_close(inputs);
  return zh_settings_billing_close(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Actions_ColInputs */
var en_settings_billing_actions_col = () => {
  return `Actions`;
};
var zh_settings_billing_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Settings_Billing_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_actions_col(inputs);
  return zh_settings_billing_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_tab_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_AllInputs */
var en_settings_billing_tab_all = () => {
  return `All`;
};
var zh_settings_billing_tab_all = () => {
  return `全部`;
};
/**
 * | output |
 * | --- |
 * | "All" |
 *
 * @param {Settings_Billing_Tab_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_tab_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_tab_all(inputs);
  return zh_settings_billing_tab_all(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_tab_active.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_ActiveInputs */
var en_settings_billing_tab_active = () => {
  return `Active`;
};
var zh_settings_billing_tab_active = () => {
  return `活跃`;
};
/**
 * | output |
 * | --- |
 * | "Active" |
 *
 * @param {Settings_Billing_Tab_ActiveInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_tab_active = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_tab_active(inputs);
  return zh_settings_billing_tab_active(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_tab_trialing.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_TrialingInputs */
var en_settings_billing_tab_trialing = () => {
  return `Trialing`;
};
var zh_settings_billing_tab_trialing = () => {
  return `试用中`;
};
/**
 * | output |
 * | --- |
 * | "Trialing" |
 *
 * @param {Settings_Billing_Tab_TrialingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_tab_trialing = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_tab_trialing(inputs);
  return zh_settings_billing_tab_trialing(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_tab_paused.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_PausedInputs */
var en_settings_billing_tab_paused = () => {
  return `Paused`;
};
var zh_settings_billing_tab_paused = () => {
  return `已暂停`;
};
/**
 * | output |
 * | --- |
 * | "Paused" |
 *
 * @param {Settings_Billing_Tab_PausedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_tab_paused = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_tab_paused(inputs);
  return zh_settings_billing_tab_paused(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_tab_expired.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_ExpiredInputs */
var en_settings_billing_tab_expired = () => {
  return `Expired`;
};
var zh_settings_billing_tab_expired = () => {
  return `已过期`;
};
/**
 * | output |
 * | --- |
 * | "Expired" |
 *
 * @param {Settings_Billing_Tab_ExpiredInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_tab_expired = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_tab_expired(inputs);
  return zh_settings_billing_tab_expired(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_tab_pending_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_Pending_CancelInputs */
var en_settings_billing_tab_pending_cancel = () => {
  return `Pending Cancel`;
};
var zh_settings_billing_tab_pending_cancel = () => {
  return `待取消`;
};
/**
 * | output |
 * | --- |
 * | "Pending Cancel" |
 *
 * @param {Settings_Billing_Tab_Pending_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_tab_pending_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_tab_pending_cancel(inputs);
  return zh_settings_billing_tab_pending_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_tab_canceled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_CanceledInputs */
var en_settings_billing_tab_canceled = () => {
  return `Canceled`;
};
var zh_settings_billing_tab_canceled = () => {
  return `已取消`;
};
/**
 * | output |
 * | --- |
 * | "Canceled" |
 *
 * @param {Settings_Billing_Tab_CanceledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_tab_canceled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_tab_canceled(inputs);
  return zh_settings_billing_tab_canceled(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_payments.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_PaymentsInputs */
var en_settings_billing_payments = () => {
  return `Payments`;
};
var zh_settings_billing_payments = () => {
  return `付款记录`;
};
/**
 * | output |
 * | --- |
 * | "Payments" |
 *
 * @param {Settings_Billing_PaymentsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_payments = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_payments(inputs);
  return zh_settings_billing_payments(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_no_payments.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_No_PaymentsInputs */
var en_settings_billing_no_payments = () => {
  return `No payments yet`;
};
var zh_settings_billing_no_payments = () => {
  return `暂无付款记录`;
};
/**
 * | output |
 * | --- |
 * | "No payments yet" |
 *
 * @param {Settings_Billing_No_PaymentsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_no_payments = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_no_payments(inputs);
  return zh_settings_billing_no_payments(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_order_no.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Order_NoInputs */
var en_settings_billing_order_no = () => {
  return `Order`;
};
var zh_settings_billing_order_no = () => {
  return `订单号`;
};
/**
 * | output |
 * | --- |
 * | "Order" |
 *
 * @param {Settings_Billing_Order_NoInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_order_no = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_order_no(inputs);
  return zh_settings_billing_order_no(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_AmountInputs */
var en_settings_billing_amount = () => {
  return `Amount`;
};
var zh_settings_billing_amount = () => {
  return `金额`;
};
/**
 * | output |
 * | --- |
 * | "Amount" |
 *
 * @param {Settings_Billing_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_amount(inputs);
  return zh_settings_billing_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_provider.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_ProviderInputs */
var en_settings_billing_provider = () => {
  return `Provider`;
};
var zh_settings_billing_provider = () => {
  return `支付方式`;
};
/**
 * | output |
 * | --- |
 * | "Provider" |
 *
 * @param {Settings_Billing_ProviderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_provider = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_provider(inputs);
  return zh_settings_billing_provider(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_billing_date.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_DateInputs */
var en_settings_billing_date = () => {
  return `Date`;
};
var zh_settings_billing_date = () => {
  return `日期`;
};
/**
 * | output |
 * | --- |
 * | "Date" |
 *
 * @param {Settings_Billing_DateInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_billing_date = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_billing_date(inputs);
  return zh_settings_billing_date(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_TitleInputs */
var en_settings_payments_title = () => {
  return `Payments`;
};
var zh_settings_payments_title = () => {
  return `付款记录`;
};
/**
 * | output |
 * | --- |
 * | "Payments" |
 *
 * @param {Settings_Payments_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_title(inputs);
  return zh_settings_payments_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_DescriptionInputs */
var en_settings_payments_description = () => {
  return `Your payment history`;
};
var zh_settings_payments_description = () => {
  return `你的付款历史`;
};
/**
 * | output |
 * | --- |
 * | "Your payment history" |
 *
 * @param {Settings_Payments_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_description(inputs);
  return zh_settings_payments_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_tab_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Tab_AllInputs */
var en_settings_payments_tab_all = () => {
  return `All`;
};
var zh_settings_payments_tab_all = () => {
  return `全部`;
};
/**
 * | output |
 * | --- |
 * | "All" |
 *
 * @param {Settings_Payments_Tab_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_tab_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_tab_all(inputs);
  return zh_settings_payments_tab_all(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_tab_one_time.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Tab_One_TimeInputs */
var en_settings_payments_tab_one_time = () => {
  return `One-time`;
};
var zh_settings_payments_tab_one_time = () => {
  return `单次购买`;
};
/**
 * | output |
 * | --- |
 * | "One-time" |
 *
 * @param {Settings_Payments_Tab_One_TimeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_tab_one_time = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_tab_one_time(inputs);
  return zh_settings_payments_tab_one_time(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_tab_subscription.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Tab_SubscriptionInputs */
var en_settings_payments_tab_subscription = () => {
  return `Subscription`;
};
var zh_settings_payments_tab_subscription = () => {
  return `订阅`;
};
/**
 * | output |
 * | --- |
 * | "Subscription" |
 *
 * @param {Settings_Payments_Tab_SubscriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_tab_subscription = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_tab_subscription(inputs);
  return zh_settings_payments_tab_subscription(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_tab_renew.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Tab_RenewInputs */
var en_settings_payments_tab_renew = () => {
  return `Renewal`;
};
var zh_settings_payments_tab_renew = () => {
  return `续订`;
};
/**
 * | output |
 * | --- |
 * | "Renewal" |
 *
 * @param {Settings_Payments_Tab_RenewInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_tab_renew = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_tab_renew(inputs);
  return zh_settings_payments_tab_renew(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_no_payments.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_No_PaymentsInputs */
var en_settings_payments_no_payments = () => {
  return `No payments yet`;
};
var zh_settings_payments_no_payments = () => {
  return `暂无付款记录`;
};
/**
 * | output |
 * | --- |
 * | "No payments yet" |
 *
 * @param {Settings_Payments_No_PaymentsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_no_payments = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_no_payments(inputs);
  return zh_settings_payments_no_payments(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_order_no.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Order_NoInputs */
var en_settings_payments_order_no = () => {
  return `Order`;
};
var zh_settings_payments_order_no = () => {
  return `订单号`;
};
/**
 * | output |
 * | --- |
 * | "Order" |
 *
 * @param {Settings_Payments_Order_NoInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_order_no = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_order_no(inputs);
  return zh_settings_payments_order_no(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_product.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_ProductInputs */
var en_settings_payments_product = () => {
  return `Product`;
};
var zh_settings_payments_product = () => {
  return `商品`;
};
/**
 * | output |
 * | --- |
 * | "Product" |
 *
 * @param {Settings_Payments_ProductInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_product = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_product(inputs);
  return zh_settings_payments_product(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_AmountInputs */
var en_settings_payments_amount = () => {
  return `Amount`;
};
var zh_settings_payments_amount = () => {
  return `金额`;
};
/**
 * | output |
 * | --- |
 * | "Amount" |
 *
 * @param {Settings_Payments_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_amount(inputs);
  return zh_settings_payments_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_status.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_StatusInputs */
var en_settings_payments_status = () => {
  return `Status`;
};
var zh_settings_payments_status = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Settings_Payments_StatusInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_status = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_status(inputs);
  return zh_settings_payments_status(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_type.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_TypeInputs */
var en_settings_payments_type = () => {
  return `Type`;
};
var zh_settings_payments_type = () => {
  return `类型`;
};
/**
 * | output |
 * | --- |
 * | "Type" |
 *
 * @param {Settings_Payments_TypeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_type = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_type(inputs);
  return zh_settings_payments_type(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_provider.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_ProviderInputs */
var en_settings_payments_provider = () => {
  return `Provider`;
};
var zh_settings_payments_provider = () => {
  return `支付方式`;
};
/**
 * | output |
 * | --- |
 * | "Provider" |
 *
 * @param {Settings_Payments_ProviderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_provider = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_provider(inputs);
  return zh_settings_payments_provider(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_date.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_DateInputs */
var en_settings_payments_date = () => {
  return `Date`;
};
var zh_settings_payments_date = () => {
  return `日期`;
};
/**
 * | output |
 * | --- |
 * | "Date" |
 *
 * @param {Settings_Payments_DateInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_date = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_date(inputs);
  return zh_settings_payments_date(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_payments_invoice.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_InvoiceInputs */
var en_settings_payments_invoice = () => {
  return `Invoice`;
};
var zh_settings_payments_invoice = () => {
  return `发票`;
};
/**
 * | output |
 * | --- |
 * | "Invoice" |
 *
 * @param {Settings_Payments_InvoiceInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_payments_invoice = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_payments_invoice(inputs);
  return zh_settings_payments_invoice(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_TitleInputs */
var en_settings_credits_title = () => {
  return `Credits`;
};
var zh_settings_credits_title = () => {
  return `额度明细`;
};
/**
 * | output |
 * | --- |
 * | "Credits" |
 *
 * @param {Settings_Credits_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_title(inputs);
  return zh_settings_credits_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_DescriptionInputs */
var en_settings_credits_description = () => {
  return `Your credits balance and history`;
};
var zh_settings_credits_description = () => {
  return `你的额度余额和变动记录`;
};
/**
 * | output |
 * | --- |
 * | "Your credits balance and history" |
 *
 * @param {Settings_Credits_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_description(inputs);
  return zh_settings_credits_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_balance.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_BalanceInputs */
var en_settings_credits_balance = () => {
  return `Balance`;
};
var zh_settings_credits_balance = () => {
  return `余额`;
};
/**
 * | output |
 * | --- |
 * | "Balance" |
 *
 * @param {Settings_Credits_BalanceInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_balance = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_balance(inputs);
  return zh_settings_credits_balance(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_purchase.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_PurchaseInputs */
var en_settings_credits_purchase = () => {
  return `Purchase Credits`;
};
var zh_settings_credits_purchase = () => {
  return `购买额度`;
};
/**
 * | output |
 * | --- |
 * | "Purchase Credits" |
 *
 * @param {Settings_Credits_PurchaseInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_purchase = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_purchase(inputs);
  return zh_settings_credits_purchase(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_tab_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Tab_AllInputs */
var en_settings_credits_tab_all = () => {
  return `All`;
};
var zh_settings_credits_tab_all = () => {
  return `全部`;
};
/**
 * | output |
 * | --- |
 * | "All" |
 *
 * @param {Settings_Credits_Tab_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_tab_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_tab_all(inputs);
  return zh_settings_credits_tab_all(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_tab_grant.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Tab_GrantInputs */
var en_settings_credits_tab_grant = () => {
  return `Grant`;
};
var zh_settings_credits_tab_grant = () => {
  return `获得`;
};
/**
 * | output |
 * | --- |
 * | "Grant" |
 *
 * @param {Settings_Credits_Tab_GrantInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_tab_grant = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_tab_grant(inputs);
  return zh_settings_credits_tab_grant(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_tab_consume.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Tab_ConsumeInputs */
var en_settings_credits_tab_consume = () => {
  return `Consume`;
};
var zh_settings_credits_tab_consume = () => {
  return `消耗`;
};
/**
 * | output |
 * | --- |
 * | "Consume" |
 *
 * @param {Settings_Credits_Tab_ConsumeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_tab_consume = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_tab_consume(inputs);
  return zh_settings_credits_tab_consume(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_no_records.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_No_RecordsInputs */
var en_settings_credits_no_records = () => {
  return `No credit records yet`;
};
var zh_settings_credits_no_records = () => {
  return `暂无额度记录`;
};
/**
 * | output |
 * | --- |
 * | "No credit records yet" |
 *
 * @param {Settings_Credits_No_RecordsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_no_records = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_no_records(inputs);
  return zh_settings_credits_no_records(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_transaction_no.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Transaction_NoInputs */
var en_settings_credits_transaction_no = () => {
  return `Transaction`;
};
var zh_settings_credits_transaction_no = () => {
  return `流水号`;
};
/**
 * | output |
 * | --- |
 * | "Transaction" |
 *
 * @param {Settings_Credits_Transaction_NoInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_transaction_no = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_transaction_no(inputs);
  return zh_settings_credits_transaction_no(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_type.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_TypeInputs */
var en_settings_credits_type = () => {
  return `Type`;
};
var zh_settings_credits_type = () => {
  return `类型`;
};
/**
 * | output |
 * | --- |
 * | "Type" |
 *
 * @param {Settings_Credits_TypeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_type = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_type(inputs);
  return zh_settings_credits_type(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_scene.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_SceneInputs */
var en_settings_credits_scene = () => {
  return `Scene`;
};
var zh_settings_credits_scene = () => {
  return `场景`;
};
/**
 * | output |
 * | --- |
 * | "Scene" |
 *
 * @param {Settings_Credits_SceneInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_scene = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_scene(inputs);
  return zh_settings_credits_scene(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_CreditsInputs */
var en_settings_credits_credits = () => {
  return `Credits`;
};
var zh_settings_credits_credits = () => {
  return `额度`;
};
/**
 * | output |
 * | --- |
 * | "Credits" |
 *
 * @param {Settings_Credits_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_credits(inputs);
  return zh_settings_credits_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_remaining.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_RemainingInputs */
var en_settings_credits_remaining = () => {
  return `Remaining`;
};
var zh_settings_credits_remaining = () => {
  return `剩余`;
};
/**
 * | output |
 * | --- |
 * | "Remaining" |
 *
 * @param {Settings_Credits_RemainingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_remaining = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_remaining(inputs);
  return zh_settings_credits_remaining(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_description_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Description_ColInputs */
var en_settings_credits_description_col = () => {
  return `Description`;
};
var zh_settings_credits_description_col = () => {
  return `说明`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Settings_Credits_Description_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_description_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_description_col(inputs);
  return zh_settings_credits_description_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_expires_at.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Expires_AtInputs */
var en_settings_credits_expires_at = () => {
  return `Expires`;
};
var zh_settings_credits_expires_at = () => {
  return `过期时间`;
};
/**
 * | output |
 * | --- |
 * | "Expires" |
 *
 * @param {Settings_Credits_Expires_AtInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_expires_at = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_expires_at(inputs);
  return zh_settings_credits_expires_at(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_credits_date.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_DateInputs */
var en_settings_credits_date = () => {
  return `Date`;
};
var zh_settings_credits_date = () => {
  return `日期`;
};
/**
 * | output |
 * | --- |
 * | "Date" |
 *
 * @param {Settings_Credits_DateInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_credits_date = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_credits_date(inputs);
  return zh_settings_credits_date(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_TitleInputs */
var en_settings_apikeys_title = () => {
  return `API Keys`;
};
var zh_settings_apikeys_title = () => {
  return `API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "API Keys" |
 *
 * @param {Settings_Apikeys_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_title(inputs);
  return zh_settings_apikeys_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_DescriptionInputs */
var en_settings_apikeys_description = () => {
  return `Manage your API keys for programmatic access`;
};
var zh_settings_apikeys_description = () => {
  return `管理你的 API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "Manage your API keys for programmatic access" |
 *
 * @param {Settings_Apikeys_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_description(inputs);
  return zh_settings_apikeys_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_your_keys.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Your_KeysInputs */
var en_settings_apikeys_your_keys = () => {
  return `Your Keys`;
};
var zh_settings_apikeys_your_keys = () => {
  return `你的密钥`;
};
/**
 * | output |
 * | --- |
 * | "Your Keys" |
 *
 * @param {Settings_Apikeys_Your_KeysInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_your_keys = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_your_keys(inputs);
  return zh_settings_apikeys_your_keys(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_your_keys_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Your_Keys_DescriptionInputs */
var en_settings_apikeys_your_keys_description = () => {
  return `Use these keys to authenticate API requests`;
};
var zh_settings_apikeys_your_keys_description = () => {
  return `使用这些密钥来认证 API 请求`;
};
/**
 * | output |
 * | --- |
 * | "Use these keys to authenticate API requests" |
 *
 * @param {Settings_Apikeys_Your_Keys_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_your_keys_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_your_keys_description(inputs);
  return zh_settings_apikeys_your_keys_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_create_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Create_KeyInputs */
var en_settings_apikeys_create_key = () => {
  return `Create Key`;
};
var zh_settings_apikeys_create_key = () => {
  return `创建密钥`;
};
/**
 * | output |
 * | --- |
 * | "Create Key" |
 *
 * @param {Settings_Apikeys_Create_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_create_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_create_key(inputs);
  return zh_settings_apikeys_create_key(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_create_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Create_TitleInputs */
var en_settings_apikeys_create_title = () => {
  return `Create API Key`;
};
var zh_settings_apikeys_create_title = () => {
  return `创建 API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "Create API Key" |
 *
 * @param {Settings_Apikeys_Create_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_create_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_create_title(inputs);
  return zh_settings_apikeys_create_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_create_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Create_DescriptionInputs */
var en_settings_apikeys_create_description = () => {
  return `Give your key a name to identify it later`;
};
var zh_settings_apikeys_create_description = () => {
  return `给密钥起个名字以便识别`;
};
/**
 * | output |
 * | --- |
 * | "Give your key a name to identify it later" |
 *
 * @param {Settings_Apikeys_Create_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_create_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_create_description(inputs);
  return zh_settings_apikeys_create_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_key_name.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Key_NameInputs */
var en_settings_apikeys_key_name = () => {
  return `Key Name`;
};
var zh_settings_apikeys_key_name = () => {
  return `密钥名称`;
};
/**
 * | output |
 * | --- |
 * | "Key Name" |
 *
 * @param {Settings_Apikeys_Key_NameInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_key_name = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_key_name(inputs);
  return zh_settings_apikeys_key_name(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_key_name_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Key_Name_PlaceholderInputs */
var en_settings_apikeys_key_name_placeholder = () => {
  return `e.g. Production, Development`;
};
var zh_settings_apikeys_key_name_placeholder = () => {
  return `例如：生产环境、开发环境`;
};
/**
 * | output |
 * | --- |
 * | "e.g. Production, Development" |
 *
 * @param {Settings_Apikeys_Key_Name_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_key_name_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_key_name_placeholder(inputs);
  return zh_settings_apikeys_key_name_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CancelInputs */
var en_settings_apikeys_cancel = () => {
  return `Cancel`;
};
var zh_settings_apikeys_cancel = () => {
  return `取消`;
};
/**
 * | output |
 * | --- |
 * | "Cancel" |
 *
 * @param {Settings_Apikeys_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_cancel(inputs);
  return zh_settings_apikeys_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_create.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CreateInputs */
var en_settings_apikeys_create = () => {
  return `Create`;
};
var zh_settings_apikeys_create = () => {
  return `创建`;
};
/**
 * | output |
 * | --- |
 * | "Create" |
 *
 * @param {Settings_Apikeys_CreateInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_create = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_create(inputs);
  return zh_settings_apikeys_create(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_creating.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CreatingInputs */
var en_settings_apikeys_creating = () => {
  return `Creating...`;
};
var zh_settings_apikeys_creating = () => {
  return `创建中...`;
};
/**
 * | output |
 * | --- |
 * | "Creating..." |
 *
 * @param {Settings_Apikeys_CreatingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_creating = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_creating(inputs);
  return zh_settings_apikeys_creating(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_created.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CreatedInputs */
var en_settings_apikeys_created = () => {
  return `API key created`;
};
var zh_settings_apikeys_created = () => {
  return `API 密钥已创建`;
};
/**
 * | output |
 * | --- |
 * | "API key created" |
 *
 * @param {Settings_Apikeys_CreatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_created = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_created(inputs);
  return zh_settings_apikeys_created(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_copied.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CopiedInputs */
var en_settings_apikeys_copied = () => {
  return `Copied to clipboard`;
};
var zh_settings_apikeys_copied = () => {
  return `已复制到剪贴板`;
};
/**
 * | output |
 * | --- |
 * | "Copied to clipboard" |
 *
 * @param {Settings_Apikeys_CopiedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_copied = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_copied(inputs);
  return zh_settings_apikeys_copied(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_key_copied.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Key_CopiedInputs */
var en_settings_apikeys_key_copied = () => {
  return `Key copied to clipboard`;
};
var zh_settings_apikeys_key_copied = () => {
  return `密钥已复制到剪贴板`;
};
/**
 * | output |
 * | --- |
 * | "Key copied to clipboard" |
 *
 * @param {Settings_Apikeys_Key_CopiedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_key_copied = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_key_copied(inputs);
  return zh_settings_apikeys_key_copied(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_deleted.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_DeletedInputs */
var en_settings_apikeys_deleted = () => {
  return `Key deleted`;
};
var zh_settings_apikeys_deleted = () => {
  return `密钥已删除`;
};
/**
 * | output |
 * | --- |
 * | "Key deleted" |
 *
 * @param {Settings_Apikeys_DeletedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_deleted = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_deleted(inputs);
  return zh_settings_apikeys_deleted(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_failed.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_FailedInputs */
var en_settings_apikeys_failed = () => {
  return `Failed to create key`;
};
var zh_settings_apikeys_failed = () => {
  return `创建密钥失败`;
};
/**
 * | output |
 * | --- |
 * | "Failed to create key" |
 *
 * @param {Settings_Apikeys_FailedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_failed = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_failed(inputs);
  return zh_settings_apikeys_failed(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_no_keys.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_No_KeysInputs */
var en_settings_apikeys_no_keys = () => {
  return `No API keys yet. Create one to get started.`;
};
var zh_settings_apikeys_no_keys = () => {
  return `还没有 API 密钥，创建一个开始使用。`;
};
/**
 * | output |
 * | --- |
 * | "No API keys yet. Create one to get started." |
 *
 * @param {Settings_Apikeys_No_KeysInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_no_keys = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_no_keys(inputs);
  return zh_settings_apikeys_no_keys(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_name_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Name_ColInputs */
var en_settings_apikeys_name_col = () => {
  return `Name`;
};
var zh_settings_apikeys_name_col = () => {
  return `名称`;
};
/**
 * | output |
 * | --- |
 * | "Name" |
 *
 * @param {Settings_Apikeys_Name_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_name_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_name_col(inputs);
  return zh_settings_apikeys_name_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_key_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Key_ColInputs */
var en_settings_apikeys_key_col = () => {
  return `Key`;
};
var zh_settings_apikeys_key_col = () => {
  return `密钥`;
};
/**
 * | output |
 * | --- |
 * | "Key" |
 *
 * @param {Settings_Apikeys_Key_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_key_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_key_col(inputs);
  return zh_settings_apikeys_key_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_apikeys_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Actions_ColInputs */
var en_settings_apikeys_actions_col = () => {
  return `Actions`;
};
var zh_settings_apikeys_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Settings_Apikeys_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_apikeys_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_apikeys_actions_col(inputs);
  return zh_settings_apikeys_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_TitleInputs */
var en_settings_tickets_title = () => {
  return `Support Tickets`;
};
var zh_settings_tickets_title = () => {
  return `工单支持`;
};
/**
 * | output |
 * | --- |
 * | "Support Tickets" |
 *
 * @param {Settings_Tickets_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_title(inputs);
  return zh_settings_tickets_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_DescriptionInputs */
var en_settings_tickets_description = () => {
  return `Submit a ticket and our team will get back to you`;
};
var zh_settings_tickets_description = () => {
  return `提交工单反馈问题,我们会尽快回复你`;
};
/**
 * | output |
 * | --- |
 * | "Submit a ticket and our team will get back to you" |
 *
 * @param {Settings_Tickets_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_description(inputs);
  return zh_settings_tickets_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_create_button.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_ButtonInputs */
var en_settings_tickets_create_button = () => {
  return `New Ticket`;
};
var zh_settings_tickets_create_button = () => {
  return `提交工单`;
};
/**
 * | output |
 * | --- |
 * | "New Ticket" |
 *
 * @param {Settings_Tickets_Create_ButtonInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_create_button = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_create_button(inputs);
  return zh_settings_tickets_create_button(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_create_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_TitleInputs */
var en_settings_tickets_create_title = () => {
  return `Submit a Ticket`;
};
var zh_settings_tickets_create_title = () => {
  return `提交工单`;
};
/**
 * | output |
 * | --- |
 * | "Submit a Ticket" |
 *
 * @param {Settings_Tickets_Create_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_create_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_create_title(inputs);
  return zh_settings_tickets_create_title(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_create_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_DescriptionInputs */
var en_settings_tickets_create_description = () => {
  return `Describe your issue and we'll respond as soon as possible`;
};
var zh_settings_tickets_create_description = () => {
  return `描述你遇到的问题,我们会尽快回复`;
};
/**
 * | output |
 * | --- |
 * | "Describe your issue and we'll respond as soon as possible" |
 *
 * @param {Settings_Tickets_Create_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_create_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_create_description(inputs);
  return zh_settings_tickets_create_description(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_title_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Title_LabelInputs */
var en_settings_tickets_title_label = () => {
  return `Subject`;
};
var zh_settings_tickets_title_label = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Subject" |
 *
 * @param {Settings_Tickets_Title_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_title_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_title_label(inputs);
  return zh_settings_tickets_title_label(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_title_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Title_PlaceholderInputs */
var en_settings_tickets_title_placeholder = () => {
  return `Brief summary of your issue`;
};
var zh_settings_tickets_title_placeholder = () => {
  return `简要描述你的问题`;
};
/**
 * | output |
 * | --- |
 * | "Brief summary of your issue" |
 *
 * @param {Settings_Tickets_Title_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_title_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_title_placeholder(inputs);
  return zh_settings_tickets_title_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_content_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Content_LabelInputs */
var en_settings_tickets_content_label = () => {
  return `Description`;
};
var zh_settings_tickets_content_label = () => {
  return `问题描述`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Settings_Tickets_Content_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_content_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_content_label(inputs);
  return zh_settings_tickets_content_label(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_content_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Content_PlaceholderInputs */
var en_settings_tickets_content_placeholder = () => {
  return `Describe your issue in detail...`;
};
var zh_settings_tickets_content_placeholder = () => {
  return `详细描述你遇到的问题…`;
};
/**
 * | output |
 * | --- |
 * | "Describe your issue in detail..." |
 *
 * @param {Settings_Tickets_Content_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_content_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_content_placeholder(inputs);
  return zh_settings_tickets_content_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_title_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Title_ColInputs */
var en_settings_tickets_title_col = () => {
  return `Subject`;
};
var zh_settings_tickets_title_col = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Subject" |
 *
 * @param {Settings_Tickets_Title_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_title_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_title_col(inputs);
  return zh_settings_tickets_title_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_status_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Status_ColInputs */
var en_settings_tickets_status_col = () => {
  return `Status`;
};
var zh_settings_tickets_status_col = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Settings_Tickets_Status_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_status_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_status_col(inputs);
  return zh_settings_tickets_status_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_updated_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Updated_ColInputs */
var en_settings_tickets_updated_col = () => {
  return `Last Updated`;
};
var zh_settings_tickets_updated_col = () => {
  return `更新时间`;
};
/**
 * | output |
 * | --- |
 * | "Last Updated" |
 *
 * @param {Settings_Tickets_Updated_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_updated_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_updated_col(inputs);
  return zh_settings_tickets_updated_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Actions_ColInputs */
var en_settings_tickets_actions_col = () => {
  return `Actions`;
};
var zh_settings_tickets_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Settings_Tickets_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_actions_col(inputs);
  return zh_settings_tickets_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_status_open.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Status_OpenInputs */
var en_settings_tickets_status_open = () => {
  return `Open`;
};
var zh_settings_tickets_status_open = () => {
  return `待处理`;
};
/**
 * | output |
 * | --- |
 * | "Open" |
 *
 * @param {Settings_Tickets_Status_OpenInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_status_open = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_status_open(inputs);
  return zh_settings_tickets_status_open(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_status_replied.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Status_RepliedInputs */
var en_settings_tickets_status_replied = () => {
  return `In Progress`;
};
var zh_settings_tickets_status_replied = () => {
  return `处理中`;
};
/**
 * | output |
 * | --- |
 * | "In Progress" |
 *
 * @param {Settings_Tickets_Status_RepliedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_status_replied = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_status_replied(inputs);
  return zh_settings_tickets_status_replied(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_status_closed.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Status_ClosedInputs */
var en_settings_tickets_status_closed = () => {
  return `Closed`;
};
var zh_settings_tickets_status_closed = () => {
  return `已关闭`;
};
/**
 * | output |
 * | --- |
 * | "Closed" |
 *
 * @param {Settings_Tickets_Status_ClosedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_status_closed = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_status_closed(inputs);
  return zh_settings_tickets_status_closed(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_empty.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_EmptyInputs */
var en_settings_tickets_empty = () => {
  return `No tickets yet`;
};
var zh_settings_tickets_empty = () => {
  return `暂无工单`;
};
/**
 * | output |
 * | --- |
 * | "No tickets yet" |
 *
 * @param {Settings_Tickets_EmptyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_empty = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_empty(inputs);
  return zh_settings_tickets_empty(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_required.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_RequiredInputs */
var en_settings_tickets_required = () => {
  return `Subject and description are required`;
};
var zh_settings_tickets_required = () => {
  return `请填写标题和问题描述`;
};
/**
 * | output |
 * | --- |
 * | "Subject and description are required" |
 *
 * @param {Settings_Tickets_RequiredInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_required = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_required(inputs);
  return zh_settings_tickets_required(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_create_success.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_SuccessInputs */
var en_settings_tickets_create_success = () => {
  return `Ticket submitted`;
};
var zh_settings_tickets_create_success = () => {
  return `工单已提交`;
};
/**
 * | output |
 * | --- |
 * | "Ticket submitted" |
 *
 * @param {Settings_Tickets_Create_SuccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_create_success = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_create_success(inputs);
  return zh_settings_tickets_create_success(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_close_success.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Close_SuccessInputs */
var en_settings_tickets_close_success = () => {
  return `Ticket closed`;
};
var zh_settings_tickets_close_success = () => {
  return `工单已关闭`;
};
/**
 * | output |
 * | --- |
 * | "Ticket closed" |
 *
 * @param {Settings_Tickets_Close_SuccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_close_success = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_close_success(inputs);
  return zh_settings_tickets_close_success(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_close_ticket.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Close_TicketInputs */
var en_settings_tickets_close_ticket = () => {
  return `Close Ticket`;
};
var zh_settings_tickets_close_ticket = () => {
  return `关闭工单`;
};
/**
 * | output |
 * | --- |
 * | "Close Ticket" |
 *
 * @param {Settings_Tickets_Close_TicketInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_close_ticket = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_close_ticket(inputs);
  return zh_settings_tickets_close_ticket(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_closed_notice.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Closed_NoticeInputs */
var en_settings_tickets_closed_notice = () => {
  return `This ticket is closed. Create a new ticket if you need further help.`;
};
var zh_settings_tickets_closed_notice = () => {
  return `该工单已关闭,如需进一步帮助请提交新工单。`;
};
/**
 * | output |
 * | --- |
 * | "This ticket is closed. Create a new ticket if you need further help." |
 *
 * @param {Settings_Tickets_Closed_NoticeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_closed_notice = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_closed_notice(inputs);
  return zh_settings_tickets_closed_notice(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_reply_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Reply_PlaceholderInputs */
var en_settings_tickets_reply_placeholder = () => {
  return `Write a reply...`;
};
var zh_settings_tickets_reply_placeholder = () => {
  return `输入回复内容…`;
};
/**
 * | output |
 * | --- |
 * | "Write a reply..." |
 *
 * @param {Settings_Tickets_Reply_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_reply_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_reply_placeholder(inputs);
  return zh_settings_tickets_reply_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_reply_submit.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Reply_SubmitInputs */
var en_settings_tickets_reply_submit = () => {
  return `Send Reply`;
};
var zh_settings_tickets_reply_submit = () => {
  return `发送回复`;
};
/**
 * | output |
 * | --- |
 * | "Send Reply" |
 *
 * @param {Settings_Tickets_Reply_SubmitInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_reply_submit = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_reply_submit(inputs);
  return zh_settings_tickets_reply_submit(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_replying.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_ReplyingInputs */
var en_settings_tickets_replying = () => {
  return `Sending...`;
};
var zh_settings_tickets_replying = () => {
  return `发送中…`;
};
/**
 * | output |
 * | --- |
 * | "Sending..." |
 *
 * @param {Settings_Tickets_ReplyingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_replying = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_replying(inputs);
  return zh_settings_tickets_replying(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_support_team.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Support_TeamInputs */
var en_settings_tickets_support_team = () => {
  return `Support Team`;
};
var zh_settings_tickets_support_team = () => {
  return `客服团队`;
};
/**
 * | output |
 * | --- |
 * | "Support Team" |
 *
 * @param {Settings_Tickets_Support_TeamInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_support_team = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_support_team(inputs);
  return zh_settings_tickets_support_team(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_you.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_YouInputs */
var en_settings_tickets_you = () => {
  return `You`;
};
var zh_settings_tickets_you = () => {
  return `我`;
};
/**
 * | output |
 * | --- |
 * | "You" |
 *
 * @param {Settings_Tickets_YouInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_you = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_you(inputs);
  return zh_settings_tickets_you(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_CancelInputs */
var en_settings_tickets_cancel = () => {
  return `Cancel`;
};
var zh_settings_tickets_cancel = () => {
  return `取消`;
};
/**
 * | output |
 * | --- |
 * | "Cancel" |
 *
 * @param {Settings_Tickets_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_cancel(inputs);
  return zh_settings_tickets_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_create_submit.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_SubmitInputs */
var en_settings_tickets_create_submit = () => {
  return `Submit`;
};
var zh_settings_tickets_create_submit = () => {
  return `提交`;
};
/**
 * | output |
 * | --- |
 * | "Submit" |
 *
 * @param {Settings_Tickets_Create_SubmitInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_create_submit = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_create_submit(inputs);
  return zh_settings_tickets_create_submit(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_creating.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_CreatingInputs */
var en_settings_tickets_creating = () => {
  return `Submitting...`;
};
var zh_settings_tickets_creating = () => {
  return `提交中…`;
};
/**
 * | output |
 * | --- |
 * | "Submitting..." |
 *
 * @param {Settings_Tickets_CreatingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_creating = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_creating(inputs);
  return zh_settings_tickets_creating(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_attachments_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Attachments_LabelInputs */
var en_settings_tickets_attachments_label = () => {
  return `Images (optional)`;
};
var zh_settings_tickets_attachments_label = () => {
  return `图片附件(可选)`;
};
/**
 * | output |
 * | --- |
 * | "Images (optional)" |
 *
 * @param {Settings_Tickets_Attachments_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_attachments_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_attachments_label(inputs);
  return zh_settings_tickets_attachments_label(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_latest_reply_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Latest_Reply_ColInputs */
var en_settings_tickets_latest_reply_col = () => {
  return `Latest Reply`;
};
var zh_settings_tickets_latest_reply_col = () => {
  return `最新回复`;
};
/**
 * | output |
 * | --- |
 * | "Latest Reply" |
 *
 * @param {Settings_Tickets_Latest_Reply_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_latest_reply_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_latest_reply_col(inputs);
  return zh_settings_tickets_latest_reply_col(inputs);
};
//#endregion
//#region src/paraglide/messages/settings_tickets_created_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Created_ColInputs */
var en_settings_tickets_created_col = () => {
  return `Created At`;
};
var zh_settings_tickets_created_col = () => {
  return `创建时间`;
};
/**
 * | output |
 * | --- |
 * | "Created At" |
 *
 * @param {Settings_Tickets_Created_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var settings_tickets_created_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_settings_tickets_created_col(inputs);
  return zh_settings_tickets_created_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_TitleInputs */
var en_admin_title = () => {
  return `Admin`;
};
var zh_admin_title = () => {
  return `管理后台`;
};
/**
 * | output |
 * | --- |
 * | "Admin" |
 *
 * @param {Admin_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en') return en_admin_title(inputs);
  return zh_admin_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_DescriptionInputs */
var en_admin_description = () => {
  return `System overview`;
};
var zh_admin_description = () => {
  return `系统概览`;
};
/**
 * | output |
 * | --- |
 * | "System overview" |
 *
 * @param {Admin_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_description(inputs);
  return zh_admin_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_loading.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_LoadingInputs */
var en_admin_loading = () => {
  return `Loading...`;
};
var zh_admin_loading = () => {
  return `加载中...`;
};
/**
 * | output |
 * | --- |
 * | "Loading..." |
 *
 * @param {Admin_LoadingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_loading = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en') return en_admin_loading(inputs);
  return zh_admin_loading(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_back_to_dashboard.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Back_To_DashboardInputs */
var en_admin_back_to_dashboard = () => {
  return `Dashboard`;
};
var zh_admin_back_to_dashboard = () => {
  return `控制台`;
};
/**
 * | output |
 * | --- |
 * | "Dashboard" |
 *
 * @param {Admin_Back_To_DashboardInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_back_to_dashboard = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_back_to_dashboard(inputs);
  return zh_admin_back_to_dashboard(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_overview.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_OverviewInputs */
var en_admin_nav_overview = () => {
  return `Overview`;
};
var zh_admin_nav_overview = () => {
  return `概览`;
};
/**
 * | output |
 * | --- |
 * | "Overview" |
 *
 * @param {Admin_Nav_OverviewInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_overview = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_overview(inputs);
  return zh_admin_nav_overview(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_settings.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_SettingsInputs */
var en_admin_nav_settings = () => {
  return `Settings`;
};
var zh_admin_nav_settings = () => {
  return `设置`;
};
/**
 * | output |
 * | --- |
 * | "Settings" |
 *
 * @param {Admin_Nav_SettingsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_settings = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_settings(inputs);
  return zh_admin_nav_settings(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_rbac.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_RbacInputs */
var en_admin_nav_rbac = () => {
  return `RBAC`;
};
var zh_admin_nav_rbac = () => {
  return `权限管理`;
};
/**
 * | output |
 * | --- |
 * | "RBAC" |
 *
 * @param {Admin_Nav_RbacInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_rbac = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_rbac(inputs);
  return zh_admin_nav_rbac(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_users.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_UsersInputs */
var en_admin_nav_users = () => {
  return `Users`;
};
var zh_admin_nav_users = () => {
  return `用户`;
};
/**
 * | output |
 * | --- |
 * | "Users" |
 *
 * @param {Admin_Nav_UsersInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_users = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_users(inputs);
  return zh_admin_nav_users(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_roles.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_RolesInputs */
var en_admin_nav_roles = () => {
  return `Roles`;
};
var zh_admin_nav_roles = () => {
  return `角色`;
};
/**
 * | output |
 * | --- |
 * | "Roles" |
 *
 * @param {Admin_Nav_RolesInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_roles = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_roles(inputs);
  return zh_admin_nav_roles(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_permissions.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_PermissionsInputs */
var en_admin_nav_permissions = () => {
  return `Permissions`;
};
var zh_admin_nav_permissions = () => {
  return `权限`;
};
/**
 * | output |
 * | --- |
 * | "Permissions" |
 *
 * @param {Admin_Nav_PermissionsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_permissions = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_permissions(inputs);
  return zh_admin_nav_permissions(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_content.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_ContentInputs */
var en_admin_nav_content = () => {
  return `Content`;
};
var zh_admin_nav_content = () => {
  return `内容管理`;
};
/**
 * | output |
 * | --- |
 * | "Content" |
 *
 * @param {Admin_Nav_ContentInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_content = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_content(inputs);
  return zh_admin_nav_content(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_categories.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_CategoriesInputs */
var en_admin_nav_categories = () => {
  return `Categories`;
};
var zh_admin_nav_categories = () => {
  return `分类`;
};
/**
 * | output |
 * | --- |
 * | "Categories" |
 *
 * @param {Admin_Nav_CategoriesInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_categories = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_categories(inputs);
  return zh_admin_nav_categories(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_posts.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_PostsInputs */
var en_admin_nav_posts = () => {
  return `Posts`;
};
var zh_admin_nav_posts = () => {
  return `文章`;
};
/**
 * | output |
 * | --- |
 * | "Posts" |
 *
 * @param {Admin_Nav_PostsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_posts = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_posts(inputs);
  return zh_admin_nav_posts(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_billing.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_BillingInputs */
var en_admin_nav_billing = () => {
  return `Payments & Credits`;
};
var zh_admin_nav_billing = () => {
  return `支付与积分`;
};
/**
 * | output |
 * | --- |
 * | "Payments & Credits" |
 *
 * @param {Admin_Nav_BillingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_billing = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_billing(inputs);
  return zh_admin_nav_billing(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_payments.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_PaymentsInputs */
var en_admin_nav_payments = () => {
  return `Payments`;
};
var zh_admin_nav_payments = () => {
  return `支付`;
};
/**
 * | output |
 * | --- |
 * | "Payments" |
 *
 * @param {Admin_Nav_PaymentsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_payments = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_payments(inputs);
  return zh_admin_nav_payments(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_subscriptions.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_SubscriptionsInputs */
var en_admin_nav_subscriptions = () => {
  return `Subscriptions`;
};
var zh_admin_nav_subscriptions = () => {
  return `订阅`;
};
/**
 * | output |
 * | --- |
 * | "Subscriptions" |
 *
 * @param {Admin_Nav_SubscriptionsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_subscriptions = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_subscriptions(inputs);
  return zh_admin_nav_subscriptions(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_CreditsInputs */
var en_admin_nav_credits = () => {
  return `Credits`;
};
var zh_admin_nav_credits = () => {
  return `积分`;
};
/**
 * | output |
 * | --- |
 * | "Credits" |
 *
 * @param {Admin_Nav_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_credits(inputs);
  return zh_admin_nav_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_invite_codes.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_Invite_CodesInputs */
var en_admin_nav_invite_codes = () => {
  return `Invite Codes`;
};
var zh_admin_nav_invite_codes = () => {
  return `邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Invite Codes" |
 *
 * @param {Admin_Nav_Invite_CodesInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_invite_codes = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_invite_codes(inputs);
  return zh_admin_nav_invite_codes(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_tickets.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_TicketsInputs */
var en_admin_nav_tickets = () => {
  return `Tickets`;
};
var zh_admin_nav_tickets = () => {
  return `工单管理`;
};
/**
 * | output |
 * | --- |
 * | "Tickets" |
 *
 * @param {Admin_Nav_TicketsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_tickets = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_tickets(inputs);
  return zh_admin_nav_tickets(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_nav_support.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_SupportInputs */
var en_admin_nav_support = () => {
  return `Support`;
};
var zh_admin_nav_support = () => {
  return `客户支持`;
};
/**
 * | output |
 * | --- |
 * | "Support" |
 *
 * @param {Admin_Nav_SupportInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_nav_support = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_nav_support(inputs);
  return zh_admin_nav_support(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_stats_total_users.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Stats_Total_UsersInputs */
var en_admin_stats_total_users = () => {
  return `Total Users`;
};
var zh_admin_stats_total_users = () => {
  return `总用户数`;
};
/**
 * | output |
 * | --- |
 * | "Total Users" |
 *
 * @param {Admin_Stats_Total_UsersInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_stats_total_users = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_stats_total_users(inputs);
  return zh_admin_stats_total_users(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_stats_roles.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Stats_RolesInputs */
var en_admin_stats_roles = () => {
  return `Roles`;
};
var zh_admin_stats_roles = () => {
  return `角色数`;
};
/**
 * | output |
 * | --- |
 * | "Roles" |
 *
 * @param {Admin_Stats_RolesInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_stats_roles = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_stats_roles(inputs);
  return zh_admin_stats_roles(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_TitleInputs */
var en_admin_users_title = () => {
  return `Users`;
};
var zh_admin_users_title = () => {
  return `用户管理`;
};
/**
 * | output |
 * | --- |
 * | "Users" |
 *
 * @param {Admin_Users_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_title(inputs);
  return zh_admin_users_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_DescriptionInputs */
var en_admin_users_description = () => {
  return `Manage all registered users`;
};
var zh_admin_users_description = () => {
  return `管理所有注册用户`;
};
/**
 * | output |
 * | --- |
 * | "Manage all registered users" |
 *
 * @param {Admin_Users_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_description(inputs);
  return zh_admin_users_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_all_users.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_All_UsersInputs */
var en_admin_users_all_users = () => {
  return `All Users`;
};
var zh_admin_users_all_users = () => {
  return `所有用户`;
};
/**
 * | output |
 * | --- |
 * | "All Users" |
 *
 * @param {Admin_Users_All_UsersInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_all_users = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_all_users(inputs);
  return zh_admin_users_all_users(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_count.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Users_CountInputs */
var en_admin_users_count = (i) => {
  return `${i?.count} users registered`;
};
var zh_admin_users_count = (i) => {
  return `共 ${i?.count} 个注册用户`;
};
/**
 * | output |
 * | --- |
 * | "{count} users registered" |
 *
 * @param {Admin_Users_CountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_count = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_count(inputs);
  return zh_admin_users_count(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_no_users.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_No_UsersInputs */
var en_admin_users_no_users = () => {
  return `No users yet`;
};
var zh_admin_users_no_users = () => {
  return `暂无用户`;
};
/**
 * | output |
 * | --- |
 * | "No users yet" |
 *
 * @param {Admin_Users_No_UsersInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_no_users = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_no_users(inputs);
  return zh_admin_users_no_users(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_user_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_User_ColInputs */
var en_admin_users_user_col = () => {
  return `User`;
};
var zh_admin_users_user_col = () => {
  return `用户`;
};
/**
 * | output |
 * | --- |
 * | "User" |
 *
 * @param {Admin_Users_User_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_user_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_user_col(inputs);
  return zh_admin_users_user_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_email_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Email_ColInputs */
var en_admin_users_email_col = () => {
  return `Email`;
};
var zh_admin_users_email_col = () => {
  return `邮箱`;
};
/**
 * | output |
 * | --- |
 * | "Email" |
 *
 * @param {Admin_Users_Email_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_email_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_email_col(inputs);
  return zh_admin_users_email_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_ColInputs */
var en_admin_users_credits_col = () => {
  return `Credits`;
};
var zh_admin_users_credits_col = () => {
  return `积分`;
};
/**
 * | output |
 * | --- |
 * | "Credits" |
 *
 * @param {Admin_Users_Credits_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_col(inputs);
  return zh_admin_users_credits_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_joined_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Joined_ColInputs */
var en_admin_users_joined_col = () => {
  return `Joined`;
};
var zh_admin_users_joined_col = () => {
  return `注册时间`;
};
/**
 * | output |
 * | --- |
 * | "Joined" |
 *
 * @param {Admin_Users_Joined_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_joined_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_joined_col(inputs);
  return zh_admin_users_joined_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Actions_ColInputs */
var en_admin_users_actions_col = () => {
  return `Actions`;
};
var zh_admin_users_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Admin_Users_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_actions_col(inputs);
  return zh_admin_users_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_manage_roles.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Manage_RolesInputs */
var en_admin_users_manage_roles = () => {
  return `Manage Roles`;
};
var zh_admin_users_manage_roles = () => {
  return `管理角色`;
};
/**
 * | output |
 * | --- |
 * | "Manage Roles" |
 *
 * @param {Admin_Users_Manage_RolesInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_manage_roles = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_manage_roles(inputs);
  return zh_admin_users_manage_roles(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_manage_roles_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Manage_Roles_TitleInputs */
var en_admin_users_manage_roles_title = () => {
  return `Manage User Roles`;
};
var zh_admin_users_manage_roles_title = () => {
  return `管理用户角色`;
};
/**
 * | output |
 * | --- |
 * | "Manage User Roles" |
 *
 * @param {Admin_Users_Manage_Roles_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_manage_roles_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_manage_roles_title(inputs);
  return zh_admin_users_manage_roles_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_manage_roles_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Manage_Roles_DescriptionInputs */
var en_admin_users_manage_roles_description = () => {
  return `Assign or remove roles for this user`;
};
var zh_admin_users_manage_roles_description = () => {
  return `为此用户分配或移除角色`;
};
/**
 * | output |
 * | --- |
 * | "Assign or remove roles for this user" |
 *
 * @param {Admin_Users_Manage_Roles_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_manage_roles_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_manage_roles_description(inputs);
  return zh_admin_users_manage_roles_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_role_assigned.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Role_AssignedInputs */
var en_admin_users_role_assigned = () => {
  return `Role assigned`;
};
var zh_admin_users_role_assigned = () => {
  return `角色已分配`;
};
/**
 * | output |
 * | --- |
 * | "Role assigned" |
 *
 * @param {Admin_Users_Role_AssignedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_role_assigned = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_role_assigned(inputs);
  return zh_admin_users_role_assigned(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_role_removed.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Role_RemovedInputs */
var en_admin_users_role_removed = () => {
  return `Role removed`;
};
var zh_admin_users_role_removed = () => {
  return `角色已移除`;
};
/**
 * | output |
 * | --- |
 * | "Role removed" |
 *
 * @param {Admin_Users_Role_RemovedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_role_removed = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_role_removed(inputs);
  return zh_admin_users_role_removed(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_manage_credits_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Manage_Credits_TitleInputs */
var en_admin_users_manage_credits_title = () => {
  return `Manage Credits`;
};
var zh_admin_users_manage_credits_title = () => {
  return `管理积分`;
};
/**
 * | output |
 * | --- |
 * | "Manage Credits" |
 *
 * @param {Admin_Users_Manage_Credits_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_manage_credits_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_manage_credits_title(inputs);
  return zh_admin_users_manage_credits_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_manage_credits_for.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ name: NonNullable<unknown>, balance: NonNullable<unknown> }} Admin_Users_Manage_Credits_ForInputs */
var en_admin_users_manage_credits_for = (i) => {
  return `${i?.name} — current balance: ${i?.balance}`;
};
var zh_admin_users_manage_credits_for = (i) => {
  return `${i?.name} — 当前余额：${i?.balance}`;
};
/**
 * | output |
 * | --- |
 * | "{name} — current balance: {balance}" |
 *
 * @param {Admin_Users_Manage_Credits_ForInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_manage_credits_for = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_manage_credits_for(inputs);
  return zh_admin_users_manage_credits_for(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_action_grant.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Action_GrantInputs */
var en_admin_users_credits_action_grant = () => {
  return `Grant`;
};
var zh_admin_users_credits_action_grant = () => {
  return `授予`;
};
/**
 * | output |
 * | --- |
 * | "Grant" |
 *
 * @param {Admin_Users_Credits_Action_GrantInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_action_grant = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_action_grant(inputs);
  return zh_admin_users_credits_action_grant(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_action_deduct.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Action_DeductInputs */
var en_admin_users_credits_action_deduct = () => {
  return `Deduct`;
};
var zh_admin_users_credits_action_deduct = () => {
  return `扣除`;
};
/**
 * | output |
 * | --- |
 * | "Deduct" |
 *
 * @param {Admin_Users_Credits_Action_DeductInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_action_deduct = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_action_deduct(inputs);
  return zh_admin_users_credits_action_deduct(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_amount_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Amount_LabelInputs */
var en_admin_users_credits_amount_label = () => {
  return `Amount`;
};
var zh_admin_users_credits_amount_label = () => {
  return `数量`;
};
/**
 * | output |
 * | --- |
 * | "Amount" |
 *
 * @param {Admin_Users_Credits_Amount_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_amount_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_amount_label(inputs);
  return zh_admin_users_credits_amount_label(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_desc_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Desc_LabelInputs */
var en_admin_users_credits_desc_label = () => {
  return `Description`;
};
var zh_admin_users_credits_desc_label = () => {
  return `备注`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Admin_Users_Credits_Desc_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_desc_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_desc_label(inputs);
  return zh_admin_users_credits_desc_label(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_desc_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Desc_PlaceholderInputs */
var en_admin_users_credits_desc_placeholder = () => {
  return `Optional reason`;
};
var zh_admin_users_credits_desc_placeholder = () => {
  return `操作原因（可选）`;
};
/**
 * | output |
 * | --- |
 * | "Optional reason" |
 *
 * @param {Admin_Users_Credits_Desc_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_desc_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_desc_placeholder(inputs);
  return zh_admin_users_credits_desc_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_submit.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_SubmitInputs */
var en_admin_users_credits_submit = () => {
  return `Confirm`;
};
var zh_admin_users_credits_submit = () => {
  return `确认`;
};
/**
 * | output |
 * | --- |
 * | "Confirm" |
 *
 * @param {Admin_Users_Credits_SubmitInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_submit = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_submit(inputs);
  return zh_admin_users_credits_submit(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_submitting.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_SubmittingInputs */
var en_admin_users_credits_submitting = () => {
  return `Submitting...`;
};
var zh_admin_users_credits_submitting = () => {
  return `提交中...`;
};
/**
 * | output |
 * | --- |
 * | "Submitting..." |
 *
 * @param {Admin_Users_Credits_SubmittingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_submitting = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_submitting(inputs);
  return zh_admin_users_credits_submitting(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_invalid_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Invalid_AmountInputs */
var en_admin_users_credits_invalid_amount = () => {
  return `Enter a positive amount`;
};
var zh_admin_users_credits_invalid_amount = () => {
  return `请输入正数`;
};
/**
 * | output |
 * | --- |
 * | "Enter a positive amount" |
 *
 * @param {Admin_Users_Credits_Invalid_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_invalid_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_invalid_amount(inputs);
  return zh_admin_users_credits_invalid_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_granted.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_GrantedInputs */
var en_admin_users_credits_granted = () => {
  return `Credits granted`;
};
var zh_admin_users_credits_granted = () => {
  return `积分已授予`;
};
/**
 * | output |
 * | --- |
 * | "Credits granted" |
 *
 * @param {Admin_Users_Credits_GrantedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_granted = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_granted(inputs);
  return zh_admin_users_credits_granted(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_users_credits_deducted.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_DeductedInputs */
var en_admin_users_credits_deducted = () => {
  return `Credits deducted`;
};
var zh_admin_users_credits_deducted = () => {
  return `积分已扣除`;
};
/**
 * | output |
 * | --- |
 * | "Credits deducted" |
 *
 * @param {Admin_Users_Credits_DeductedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_users_credits_deducted = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_users_credits_deducted(inputs);
  return zh_admin_users_credits_deducted(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_TitleInputs */
var en_admin_roles_title = () => {
  return `Roles`;
};
var zh_admin_roles_title = () => {
  return `角色管理`;
};
/**
 * | output |
 * | --- |
 * | "Roles" |
 *
 * @param {Admin_Roles_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_title(inputs);
  return zh_admin_roles_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_DescriptionInputs */
var en_admin_roles_description = () => {
  return `Manage system roles and permissions`;
};
var zh_admin_roles_description = () => {
  return `管理系统角色和权限`;
};
/**
 * | output |
 * | --- |
 * | "Manage system roles and permissions" |
 *
 * @param {Admin_Roles_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_description(inputs);
  return zh_admin_roles_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_all_roles.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_All_RolesInputs */
var en_admin_roles_all_roles = () => {
  return `All Roles`;
};
var zh_admin_roles_all_roles = () => {
  return `所有角色`;
};
/**
 * | output |
 * | --- |
 * | "All Roles" |
 *
 * @param {Admin_Roles_All_RolesInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_all_roles = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_all_roles(inputs);
  return zh_admin_roles_all_roles(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_count.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Roles_CountInputs */
var en_admin_roles_count = (i) => {
  return `${i?.count} roles defined`;
};
var zh_admin_roles_count = (i) => {
  return `共 ${i?.count} 个角色`;
};
/**
 * | output |
 * | --- |
 * | "{count} roles defined" |
 *
 * @param {Admin_Roles_CountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_count = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_count(inputs);
  return zh_admin_roles_count(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_no_roles.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_No_RolesInputs */
var en_admin_roles_no_roles = () => {
  return `No roles defined yet`;
};
var zh_admin_roles_no_roles = () => {
  return `暂未定义角色`;
};
/**
 * | output |
 * | --- |
 * | "No roles defined yet" |
 *
 * @param {Admin_Roles_No_RolesInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_no_roles = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_no_roles(inputs);
  return zh_admin_roles_no_roles(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_name_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Name_ColInputs */
var en_admin_roles_name_col = () => {
  return `Name`;
};
var zh_admin_roles_name_col = () => {
  return `名称`;
};
/**
 * | output |
 * | --- |
 * | "Name" |
 *
 * @param {Admin_Roles_Name_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_name_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_name_col(inputs);
  return zh_admin_roles_name_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_title_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Title_ColInputs */
var en_admin_roles_title_col = () => {
  return `Title`;
};
var zh_admin_roles_title_col = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Title" |
 *
 * @param {Admin_Roles_Title_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_title_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_title_col(inputs);
  return zh_admin_roles_title_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_status_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Status_ColInputs */
var en_admin_roles_status_col = () => {
  return `Status`;
};
var zh_admin_roles_status_col = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Admin_Roles_Status_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_status_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_status_col(inputs);
  return zh_admin_roles_status_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_description_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Description_ColInputs */
var en_admin_roles_description_col = () => {
  return `Description`;
};
var zh_admin_roles_description_col = () => {
  return `描述`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Admin_Roles_Description_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_description_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_description_col(inputs);
  return zh_admin_roles_description_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Actions_ColInputs */
var en_admin_roles_actions_col = () => {
  return `Actions`;
};
var zh_admin_roles_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Admin_Roles_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_actions_col(inputs);
  return zh_admin_roles_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_create_role.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Create_RoleInputs */
var en_admin_roles_create_role = () => {
  return `Create Role`;
};
var zh_admin_roles_create_role = () => {
  return `创建角色`;
};
/**
 * | output |
 * | --- |
 * | "Create Role" |
 *
 * @param {Admin_Roles_Create_RoleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_create_role = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_create_role(inputs);
  return zh_admin_roles_create_role(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_create_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Create_TitleInputs */
var en_admin_roles_create_title = () => {
  return `Create New Role`;
};
var zh_admin_roles_create_title = () => {
  return `创建新角色`;
};
/**
 * | output |
 * | --- |
 * | "Create New Role" |
 *
 * @param {Admin_Roles_Create_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_create_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_create_title(inputs);
  return zh_admin_roles_create_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_create_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Create_DescriptionInputs */
var en_admin_roles_create_description = () => {
  return `Define a new system role`;
};
var zh_admin_roles_create_description = () => {
  return `定义一个新的系统角色`;
};
/**
 * | output |
 * | --- |
 * | "Define a new system role" |
 *
 * @param {Admin_Roles_Create_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_create_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_create_description(inputs);
  return zh_admin_roles_create_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_edit_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Edit_TitleInputs */
var en_admin_roles_edit_title = () => {
  return `Edit Role`;
};
var zh_admin_roles_edit_title = () => {
  return `编辑角色`;
};
/**
 * | output |
 * | --- |
 * | "Edit Role" |
 *
 * @param {Admin_Roles_Edit_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_edit_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_edit_title(inputs);
  return zh_admin_roles_edit_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_edit_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Edit_DescriptionInputs */
var en_admin_roles_edit_description = () => {
  return `Update role details`;
};
var zh_admin_roles_edit_description = () => {
  return `更新角色信息`;
};
/**
 * | output |
 * | --- |
 * | "Update role details" |
 *
 * @param {Admin_Roles_Edit_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_edit_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_edit_description(inputs);
  return zh_admin_roles_edit_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_delete_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Delete_TitleInputs */
var en_admin_roles_delete_title = () => {
  return `Delete Role`;
};
var zh_admin_roles_delete_title = () => {
  return `删除角色`;
};
/**
 * | output |
 * | --- |
 * | "Delete Role" |
 *
 * @param {Admin_Roles_Delete_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_delete_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_delete_title(inputs);
  return zh_admin_roles_delete_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_delete_confirm.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Delete_ConfirmInputs */
var en_admin_roles_delete_confirm = () => {
  return `Are you sure you want to delete this role? This will deactivate it.`;
};
var zh_admin_roles_delete_confirm = () => {
  return `确定要删除此角色吗？该角色将被停用。`;
};
/**
 * | output |
 * | --- |
 * | "Are you sure you want to delete this role? This will deactivate it." |
 *
 * @param {Admin_Roles_Delete_ConfirmInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_delete_confirm = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_delete_confirm(inputs);
  return zh_admin_roles_delete_confirm(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_name_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Name_FieldInputs */
var en_admin_roles_name_field = () => {
  return `Name`;
};
var zh_admin_roles_name_field = () => {
  return `名称`;
};
/**
 * | output |
 * | --- |
 * | "Name" |
 *
 * @param {Admin_Roles_Name_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_name_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_name_field(inputs);
  return zh_admin_roles_name_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_name_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Name_PlaceholderInputs */
var en_admin_roles_name_placeholder = () => {
  return `e.g. editor`;
};
var zh_admin_roles_name_placeholder = () => {
  return `例如 editor`;
};
/**
 * | output |
 * | --- |
 * | "e.g. editor" |
 *
 * @param {Admin_Roles_Name_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_name_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_name_placeholder(inputs);
  return zh_admin_roles_name_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_title_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Title_FieldInputs */
var en_admin_roles_title_field = () => {
  return `Title`;
};
var zh_admin_roles_title_field = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Title" |
 *
 * @param {Admin_Roles_Title_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_title_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_title_field(inputs);
  return zh_admin_roles_title_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_title_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Title_PlaceholderInputs */
var en_admin_roles_title_placeholder = () => {
  return `e.g. Content Editor`;
};
var zh_admin_roles_title_placeholder = () => {
  return `例如 内容编辑`;
};
/**
 * | output |
 * | --- |
 * | "e.g. Content Editor" |
 *
 * @param {Admin_Roles_Title_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_title_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_title_placeholder(inputs);
  return zh_admin_roles_title_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_description_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Description_FieldInputs */
var en_admin_roles_description_field = () => {
  return `Description`;
};
var zh_admin_roles_description_field = () => {
  return `描述`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Admin_Roles_Description_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_description_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_description_field(inputs);
  return zh_admin_roles_description_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_description_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Description_PlaceholderInputs */
var en_admin_roles_description_placeholder = () => {
  return `Optional description`;
};
var zh_admin_roles_description_placeholder = () => {
  return `可选描述`;
};
/**
 * | output |
 * | --- |
 * | "Optional description" |
 *
 * @param {Admin_Roles_Description_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_description_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_description_placeholder(inputs);
  return zh_admin_roles_description_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_save.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_SaveInputs */
var en_admin_roles_save = () => {
  return `Save`;
};
var zh_admin_roles_save = () => {
  return `保存`;
};
/**
 * | output |
 * | --- |
 * | "Save" |
 *
 * @param {Admin_Roles_SaveInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_save = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_save(inputs);
  return zh_admin_roles_save(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_CancelInputs */
var en_admin_roles_cancel = () => {
  return `Cancel`;
};
var zh_admin_roles_cancel = () => {
  return `取消`;
};
/**
 * | output |
 * | --- |
 * | "Cancel" |
 *
 * @param {Admin_Roles_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_cancel(inputs);
  return zh_admin_roles_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_confirm_delete.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Confirm_DeleteInputs */
var en_admin_roles_confirm_delete = () => {
  return `Delete`;
};
var zh_admin_roles_confirm_delete = () => {
  return `删除`;
};
/**
 * | output |
 * | --- |
 * | "Delete" |
 *
 * @param {Admin_Roles_Confirm_DeleteInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_confirm_delete = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_confirm_delete(inputs);
  return zh_admin_roles_confirm_delete(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_created.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_CreatedInputs */
var en_admin_roles_created = () => {
  return `Role created`;
};
var zh_admin_roles_created = () => {
  return `角色已创建`;
};
/**
 * | output |
 * | --- |
 * | "Role created" |
 *
 * @param {Admin_Roles_CreatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_created = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_created(inputs);
  return zh_admin_roles_created(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_updated.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_UpdatedInputs */
var en_admin_roles_updated = () => {
  return `Role updated`;
};
var zh_admin_roles_updated = () => {
  return `角色已更新`;
};
/**
 * | output |
 * | --- |
 * | "Role updated" |
 *
 * @param {Admin_Roles_UpdatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_updated = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_updated(inputs);
  return zh_admin_roles_updated(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_deleted.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_DeletedInputs */
var en_admin_roles_deleted = () => {
  return `Role deleted`;
};
var zh_admin_roles_deleted = () => {
  return `角色已删除`;
};
/**
 * | output |
 * | --- |
 * | "Role deleted" |
 *
 * @param {Admin_Roles_DeletedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_deleted = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_deleted(inputs);
  return zh_admin_roles_deleted(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_manage_permissions.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Manage_PermissionsInputs */
var en_admin_roles_manage_permissions = () => {
  return `Permissions`;
};
var zh_admin_roles_manage_permissions = () => {
  return `权限`;
};
/**
 * | output |
 * | --- |
 * | "Permissions" |
 *
 * @param {Admin_Roles_Manage_PermissionsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_manage_permissions = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_manage_permissions(inputs);
  return zh_admin_roles_manage_permissions(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_manage_permissions_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Manage_Permissions_TitleInputs */
var en_admin_roles_manage_permissions_title = () => {
  return `Manage Role Permissions`;
};
var zh_admin_roles_manage_permissions_title = () => {
  return `管理角色权限`;
};
/**
 * | output |
 * | --- |
 * | "Manage Role Permissions" |
 *
 * @param {Admin_Roles_Manage_Permissions_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_manage_permissions_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_manage_permissions_title(inputs);
  return zh_admin_roles_manage_permissions_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_manage_permissions_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Manage_Permissions_DescriptionInputs */
var en_admin_roles_manage_permissions_description = () => {
  return `Select permissions for this role`;
};
var zh_admin_roles_manage_permissions_description = () => {
  return `选择此角色的权限`;
};
/**
 * | output |
 * | --- |
 * | "Select permissions for this role" |
 *
 * @param {Admin_Roles_Manage_Permissions_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_manage_permissions_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_manage_permissions_description(inputs);
  return zh_admin_roles_manage_permissions_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_roles_permissions_saved.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Permissions_SavedInputs */
var en_admin_roles_permissions_saved = () => {
  return `Permissions updated`;
};
var zh_admin_roles_permissions_saved = () => {
  return `权限已更新`;
};
/**
 * | output |
 * | --- |
 * | "Permissions updated" |
 *
 * @param {Admin_Roles_Permissions_SavedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_roles_permissions_saved = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_roles_permissions_saved(inputs);
  return zh_admin_roles_permissions_saved(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_TitleInputs */
var en_admin_permissions_title = () => {
  return `Permissions`;
};
var zh_admin_permissions_title = () => {
  return `权限管理`;
};
/**
 * | output |
 * | --- |
 * | "Permissions" |
 *
 * @param {Admin_Permissions_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_title(inputs);
  return zh_admin_permissions_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_DescriptionInputs */
var en_admin_permissions_description = () => {
  return `Manage system permissions`;
};
var zh_admin_permissions_description = () => {
  return `管理系统权限`;
};
/**
 * | output |
 * | --- |
 * | "Manage system permissions" |
 *
 * @param {Admin_Permissions_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_description(inputs);
  return zh_admin_permissions_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_all_permissions.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_All_PermissionsInputs */
var en_admin_permissions_all_permissions = () => {
  return `All Permissions`;
};
var zh_admin_permissions_all_permissions = () => {
  return `所有权限`;
};
/**
 * | output |
 * | --- |
 * | "All Permissions" |
 *
 * @param {Admin_Permissions_All_PermissionsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_all_permissions = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_all_permissions(inputs);
  return zh_admin_permissions_all_permissions(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_count.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Permissions_CountInputs */
var en_admin_permissions_count = (i) => {
  return `${i?.count} permissions defined`;
};
var zh_admin_permissions_count = (i) => {
  return `共 ${i?.count} 个权限`;
};
/**
 * | output |
 * | --- |
 * | "{count} permissions defined" |
 *
 * @param {Admin_Permissions_CountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_count = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_count(inputs);
  return zh_admin_permissions_count(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_no_permissions.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_No_PermissionsInputs */
var en_admin_permissions_no_permissions = () => {
  return `No permissions defined yet`;
};
var zh_admin_permissions_no_permissions = () => {
  return `暂未定义权限`;
};
/**
 * | output |
 * | --- |
 * | "No permissions defined yet" |
 *
 * @param {Admin_Permissions_No_PermissionsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_no_permissions = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_no_permissions(inputs);
  return zh_admin_permissions_no_permissions(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_code_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Code_ColInputs */
var en_admin_permissions_code_col = () => {
  return `Code`;
};
var zh_admin_permissions_code_col = () => {
  return `权限代码`;
};
/**
 * | output |
 * | --- |
 * | "Code" |
 *
 * @param {Admin_Permissions_Code_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_code_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_code_col(inputs);
  return zh_admin_permissions_code_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_resource_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Resource_ColInputs */
var en_admin_permissions_resource_col = () => {
  return `Resource`;
};
var zh_admin_permissions_resource_col = () => {
  return `资源`;
};
/**
 * | output |
 * | --- |
 * | "Resource" |
 *
 * @param {Admin_Permissions_Resource_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_resource_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_resource_col(inputs);
  return zh_admin_permissions_resource_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_action_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Action_ColInputs */
var en_admin_permissions_action_col = () => {
  return `Action`;
};
var zh_admin_permissions_action_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Action" |
 *
 * @param {Admin_Permissions_Action_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_action_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_action_col(inputs);
  return zh_admin_permissions_action_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_title_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Title_ColInputs */
var en_admin_permissions_title_col = () => {
  return `Title`;
};
var zh_admin_permissions_title_col = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Title" |
 *
 * @param {Admin_Permissions_Title_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_title_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_title_col(inputs);
  return zh_admin_permissions_title_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Actions_ColInputs */
var en_admin_permissions_actions_col = () => {
  return `Actions`;
};
var zh_admin_permissions_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Admin_Permissions_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_actions_col(inputs);
  return zh_admin_permissions_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_create_permission.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Create_PermissionInputs */
var en_admin_permissions_create_permission = () => {
  return `Create Permission`;
};
var zh_admin_permissions_create_permission = () => {
  return `创建权限`;
};
/**
 * | output |
 * | --- |
 * | "Create Permission" |
 *
 * @param {Admin_Permissions_Create_PermissionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_create_permission = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_create_permission(inputs);
  return zh_admin_permissions_create_permission(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_create_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Create_TitleInputs */
var en_admin_permissions_create_title = () => {
  return `Create New Permission`;
};
var zh_admin_permissions_create_title = () => {
  return `创建新权限`;
};
/**
 * | output |
 * | --- |
 * | "Create New Permission" |
 *
 * @param {Admin_Permissions_Create_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_create_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_create_title(inputs);
  return zh_admin_permissions_create_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_create_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Create_DescriptionInputs */
var en_admin_permissions_create_description = () => {
  return `Define a new system permission`;
};
var zh_admin_permissions_create_description = () => {
  return `定义一个新的系统权限`;
};
/**
 * | output |
 * | --- |
 * | "Define a new system permission" |
 *
 * @param {Admin_Permissions_Create_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_create_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_create_description(inputs);
  return zh_admin_permissions_create_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_edit_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Edit_TitleInputs */
var en_admin_permissions_edit_title = () => {
  return `Edit Permission`;
};
var zh_admin_permissions_edit_title = () => {
  return `编辑权限`;
};
/**
 * | output |
 * | --- |
 * | "Edit Permission" |
 *
 * @param {Admin_Permissions_Edit_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_edit_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_edit_title(inputs);
  return zh_admin_permissions_edit_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_edit_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Edit_DescriptionInputs */
var en_admin_permissions_edit_description = () => {
  return `Update permission details`;
};
var zh_admin_permissions_edit_description = () => {
  return `更新权限信息`;
};
/**
 * | output |
 * | --- |
 * | "Update permission details" |
 *
 * @param {Admin_Permissions_Edit_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_edit_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_edit_description(inputs);
  return zh_admin_permissions_edit_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_delete_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Delete_TitleInputs */
var en_admin_permissions_delete_title = () => {
  return `Delete Permission`;
};
var zh_admin_permissions_delete_title = () => {
  return `删除权限`;
};
/**
 * | output |
 * | --- |
 * | "Delete Permission" |
 *
 * @param {Admin_Permissions_Delete_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_delete_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_delete_title(inputs);
  return zh_admin_permissions_delete_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_delete_confirm.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Delete_ConfirmInputs */
var en_admin_permissions_delete_confirm = () => {
  return `Are you sure you want to delete this permission? It will be removed from all roles.`;
};
var zh_admin_permissions_delete_confirm = () => {
  return `确定要删除此权限吗？它将从所有角色中移除。`;
};
/**
 * | output |
 * | --- |
 * | "Are you sure you want to delete this permission? It will be removed from all roles." |
 *
 * @param {Admin_Permissions_Delete_ConfirmInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_delete_confirm = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_delete_confirm(inputs);
  return zh_admin_permissions_delete_confirm(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_code_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Code_FieldInputs */
var en_admin_permissions_code_field = () => {
  return `Code`;
};
var zh_admin_permissions_code_field = () => {
  return `权限代码`;
};
/**
 * | output |
 * | --- |
 * | "Code" |
 *
 * @param {Admin_Permissions_Code_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_code_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_code_field(inputs);
  return zh_admin_permissions_code_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_code_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Code_PlaceholderInputs */
var en_admin_permissions_code_placeholder = () => {
  return `e.g. posts.create`;
};
var zh_admin_permissions_code_placeholder = () => {
  return `例如 posts.create`;
};
/**
 * | output |
 * | --- |
 * | "e.g. posts.create" |
 *
 * @param {Admin_Permissions_Code_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_code_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_code_placeholder(inputs);
  return zh_admin_permissions_code_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_resource_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Resource_FieldInputs */
var en_admin_permissions_resource_field = () => {
  return `Resource`;
};
var zh_admin_permissions_resource_field = () => {
  return `资源`;
};
/**
 * | output |
 * | --- |
 * | "Resource" |
 *
 * @param {Admin_Permissions_Resource_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_resource_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_resource_field(inputs);
  return zh_admin_permissions_resource_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_resource_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Resource_PlaceholderInputs */
var en_admin_permissions_resource_placeholder = () => {
  return `e.g. posts`;
};
var zh_admin_permissions_resource_placeholder = () => {
  return `例如 posts`;
};
/**
 * | output |
 * | --- |
 * | "e.g. posts" |
 *
 * @param {Admin_Permissions_Resource_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_resource_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_resource_placeholder(inputs);
  return zh_admin_permissions_resource_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_action_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Action_FieldInputs */
var en_admin_permissions_action_field = () => {
  return `Action`;
};
var zh_admin_permissions_action_field = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Action" |
 *
 * @param {Admin_Permissions_Action_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_action_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_action_field(inputs);
  return zh_admin_permissions_action_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_action_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Action_PlaceholderInputs */
var en_admin_permissions_action_placeholder = () => {
  return `e.g. create`;
};
var zh_admin_permissions_action_placeholder = () => {
  return `例如 create`;
};
/**
 * | output |
 * | --- |
 * | "e.g. create" |
 *
 * @param {Admin_Permissions_Action_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_action_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_action_placeholder(inputs);
  return zh_admin_permissions_action_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_title_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Title_FieldInputs */
var en_admin_permissions_title_field = () => {
  return `Title`;
};
var zh_admin_permissions_title_field = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Title" |
 *
 * @param {Admin_Permissions_Title_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_title_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_title_field(inputs);
  return zh_admin_permissions_title_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_title_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Title_PlaceholderInputs */
var en_admin_permissions_title_placeholder = () => {
  return `e.g. Create Posts`;
};
var zh_admin_permissions_title_placeholder = () => {
  return `例如 创建文章`;
};
/**
 * | output |
 * | --- |
 * | "e.g. Create Posts" |
 *
 * @param {Admin_Permissions_Title_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_title_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_title_placeholder(inputs);
  return zh_admin_permissions_title_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_save.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_SaveInputs */
var en_admin_permissions_save = () => {
  return `Save`;
};
var zh_admin_permissions_save = () => {
  return `保存`;
};
/**
 * | output |
 * | --- |
 * | "Save" |
 *
 * @param {Admin_Permissions_SaveInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_save = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_save(inputs);
  return zh_admin_permissions_save(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_CancelInputs */
var en_admin_permissions_cancel = () => {
  return `Cancel`;
};
var zh_admin_permissions_cancel = () => {
  return `取消`;
};
/**
 * | output |
 * | --- |
 * | "Cancel" |
 *
 * @param {Admin_Permissions_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_cancel(inputs);
  return zh_admin_permissions_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_confirm_delete.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Confirm_DeleteInputs */
var en_admin_permissions_confirm_delete = () => {
  return `Delete`;
};
var zh_admin_permissions_confirm_delete = () => {
  return `删除`;
};
/**
 * | output |
 * | --- |
 * | "Delete" |
 *
 * @param {Admin_Permissions_Confirm_DeleteInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_confirm_delete = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_confirm_delete(inputs);
  return zh_admin_permissions_confirm_delete(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_created.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_CreatedInputs */
var en_admin_permissions_created = () => {
  return `Permission created`;
};
var zh_admin_permissions_created = () => {
  return `权限已创建`;
};
/**
 * | output |
 * | --- |
 * | "Permission created" |
 *
 * @param {Admin_Permissions_CreatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_created = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_created(inputs);
  return zh_admin_permissions_created(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_updated.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_UpdatedInputs */
var en_admin_permissions_updated = () => {
  return `Permission updated`;
};
var zh_admin_permissions_updated = () => {
  return `权限已更新`;
};
/**
 * | output |
 * | --- |
 * | "Permission updated" |
 *
 * @param {Admin_Permissions_UpdatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_updated = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_updated(inputs);
  return zh_admin_permissions_updated(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_permissions_deleted.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_DeletedInputs */
var en_admin_permissions_deleted = () => {
  return `Permission deleted`;
};
var zh_admin_permissions_deleted = () => {
  return `权限已删除`;
};
/**
 * | output |
 * | --- |
 * | "Permission deleted" |
 *
 * @param {Admin_Permissions_DeletedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_permissions_deleted = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_permissions_deleted(inputs);
  return zh_admin_permissions_deleted(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_TitleInputs */
var en_admin_categories_title = () => {
  return `Categories`;
};
var zh_admin_categories_title = () => {
  return `分类管理`;
};
/**
 * | output |
 * | --- |
 * | "Categories" |
 *
 * @param {Admin_Categories_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_title(inputs);
  return zh_admin_categories_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_DescriptionInputs */
var en_admin_categories_description = () => {
  return `Manage content categories`;
};
var zh_admin_categories_description = () => {
  return `管理内容分类`;
};
/**
 * | output |
 * | --- |
 * | "Manage content categories" |
 *
 * @param {Admin_Categories_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_description(inputs);
  return zh_admin_categories_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_AllInputs */
var en_admin_categories_all = () => {
  return `All Categories`;
};
var zh_admin_categories_all = () => {
  return `所有分类`;
};
/**
 * | output |
 * | --- |
 * | "All Categories" |
 *
 * @param {Admin_Categories_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_all(inputs);
  return zh_admin_categories_all(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_count.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Categories_CountInputs */
var en_admin_categories_count = (i) => {
  return `${i?.count} categories`;
};
var zh_admin_categories_count = (i) => {
  return `共 ${i?.count} 个分类`;
};
/**
 * | output |
 * | --- |
 * | "{count} categories" |
 *
 * @param {Admin_Categories_CountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_count = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_count(inputs);
  return zh_admin_categories_count(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_no_data.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_No_DataInputs */
var en_admin_categories_no_data = () => {
  return `No categories yet`;
};
var zh_admin_categories_no_data = () => {
  return `暂无分类`;
};
/**
 * | output |
 * | --- |
 * | "No categories yet" |
 *
 * @param {Admin_Categories_No_DataInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_no_data = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_no_data(inputs);
  return zh_admin_categories_no_data(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_slug_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Slug_ColInputs */
var en_admin_categories_slug_col = () => {
  return `Slug`;
};
var zh_admin_categories_slug_col = () => {
  return `标识`;
};
/**
 * | output |
 * | --- |
 * | "Slug" |
 *
 * @param {Admin_Categories_Slug_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_slug_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_slug_col(inputs);
  return zh_admin_categories_slug_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_title_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Title_ColInputs */
var en_admin_categories_title_col = () => {
  return `Title`;
};
var zh_admin_categories_title_col = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Title" |
 *
 * @param {Admin_Categories_Title_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_title_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_title_col(inputs);
  return zh_admin_categories_title_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_description_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Description_ColInputs */
var en_admin_categories_description_col = () => {
  return `Description`;
};
var zh_admin_categories_description_col = () => {
  return `描述`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Admin_Categories_Description_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_description_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_description_col(inputs);
  return zh_admin_categories_description_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_status_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Status_ColInputs */
var en_admin_categories_status_col = () => {
  return `Status`;
};
var zh_admin_categories_status_col = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Admin_Categories_Status_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_status_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_status_col(inputs);
  return zh_admin_categories_status_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_created_at.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Created_AtInputs */
var en_admin_categories_created_at = () => {
  return `Created At`;
};
var zh_admin_categories_created_at = () => {
  return `创建时间`;
};
/**
 * | output |
 * | --- |
 * | "Created At" |
 *
 * @param {Admin_Categories_Created_AtInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_created_at = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_created_at(inputs);
  return zh_admin_categories_created_at(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Actions_ColInputs */
var en_admin_categories_actions_col = () => {
  return `Actions`;
};
var zh_admin_categories_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Admin_Categories_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_actions_col(inputs);
  return zh_admin_categories_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_create.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_CreateInputs */
var en_admin_categories_create = () => {
  return `Create Category`;
};
var zh_admin_categories_create = () => {
  return `创建分类`;
};
/**
 * | output |
 * | --- |
 * | "Create Category" |
 *
 * @param {Admin_Categories_CreateInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_create = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_create(inputs);
  return zh_admin_categories_create(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_create_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Create_TitleInputs */
var en_admin_categories_create_title = () => {
  return `Create New Category`;
};
var zh_admin_categories_create_title = () => {
  return `创建新分类`;
};
/**
 * | output |
 * | --- |
 * | "Create New Category" |
 *
 * @param {Admin_Categories_Create_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_create_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_create_title(inputs);
  return zh_admin_categories_create_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_create_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Create_DescriptionInputs */
var en_admin_categories_create_description = () => {
  return `Add a new content category`;
};
var zh_admin_categories_create_description = () => {
  return `添加一个新的内容分类`;
};
/**
 * | output |
 * | --- |
 * | "Add a new content category" |
 *
 * @param {Admin_Categories_Create_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_create_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_create_description(inputs);
  return zh_admin_categories_create_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_edit_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Edit_TitleInputs */
var en_admin_categories_edit_title = () => {
  return `Edit Category`;
};
var zh_admin_categories_edit_title = () => {
  return `编辑分类`;
};
/**
 * | output |
 * | --- |
 * | "Edit Category" |
 *
 * @param {Admin_Categories_Edit_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_edit_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_edit_title(inputs);
  return zh_admin_categories_edit_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_edit_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Edit_DescriptionInputs */
var en_admin_categories_edit_description = () => {
  return `Update category details`;
};
var zh_admin_categories_edit_description = () => {
  return `更新分类信息`;
};
/**
 * | output |
 * | --- |
 * | "Update category details" |
 *
 * @param {Admin_Categories_Edit_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_edit_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_edit_description(inputs);
  return zh_admin_categories_edit_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_delete_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Delete_TitleInputs */
var en_admin_categories_delete_title = () => {
  return `Delete Category`;
};
var zh_admin_categories_delete_title = () => {
  return `删除分类`;
};
/**
 * | output |
 * | --- |
 * | "Delete Category" |
 *
 * @param {Admin_Categories_Delete_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_delete_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_delete_title(inputs);
  return zh_admin_categories_delete_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_delete_confirm.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Delete_ConfirmInputs */
var en_admin_categories_delete_confirm = () => {
  return `Are you sure you want to delete this category?`;
};
var zh_admin_categories_delete_confirm = () => {
  return `确定要删除此分类吗？`;
};
/**
 * | output |
 * | --- |
 * | "Are you sure you want to delete this category?" |
 *
 * @param {Admin_Categories_Delete_ConfirmInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_delete_confirm = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_delete_confirm(inputs);
  return zh_admin_categories_delete_confirm(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_slug_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Slug_FieldInputs */
var en_admin_categories_slug_field = () => {
  return `Slug`;
};
var zh_admin_categories_slug_field = () => {
  return `标识`;
};
/**
 * | output |
 * | --- |
 * | "Slug" |
 *
 * @param {Admin_Categories_Slug_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_slug_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_slug_field(inputs);
  return zh_admin_categories_slug_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_slug_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Slug_PlaceholderInputs */
var en_admin_categories_slug_placeholder = () => {
  return `e.g. tutorials`;
};
var zh_admin_categories_slug_placeholder = () => {
  return `例如 tutorials`;
};
/**
 * | output |
 * | --- |
 * | "e.g. tutorials" |
 *
 * @param {Admin_Categories_Slug_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_slug_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_slug_placeholder(inputs);
  return zh_admin_categories_slug_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_title_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Title_FieldInputs */
var en_admin_categories_title_field = () => {
  return `Title`;
};
var zh_admin_categories_title_field = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Title" |
 *
 * @param {Admin_Categories_Title_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_title_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_title_field(inputs);
  return zh_admin_categories_title_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_title_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Title_PlaceholderInputs */
var en_admin_categories_title_placeholder = () => {
  return `e.g. Tutorials`;
};
var zh_admin_categories_title_placeholder = () => {
  return `例如 教程`;
};
/**
 * | output |
 * | --- |
 * | "e.g. Tutorials" |
 *
 * @param {Admin_Categories_Title_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_title_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_title_placeholder(inputs);
  return zh_admin_categories_title_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_description_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Description_FieldInputs */
var en_admin_categories_description_field = () => {
  return `Description`;
};
var zh_admin_categories_description_field = () => {
  return `描述`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Admin_Categories_Description_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_description_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_description_field(inputs);
  return zh_admin_categories_description_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_description_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Description_PlaceholderInputs */
var en_admin_categories_description_placeholder = () => {
  return `Optional description`;
};
var zh_admin_categories_description_placeholder = () => {
  return `可选描述`;
};
/**
 * | output |
 * | --- |
 * | "Optional description" |
 *
 * @param {Admin_Categories_Description_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_description_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_description_placeholder(inputs);
  return zh_admin_categories_description_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_save.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_SaveInputs */
var en_admin_categories_save = () => {
  return `Save`;
};
var zh_admin_categories_save = () => {
  return `保存`;
};
/**
 * | output |
 * | --- |
 * | "Save" |
 *
 * @param {Admin_Categories_SaveInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_save = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_save(inputs);
  return zh_admin_categories_save(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_CancelInputs */
var en_admin_categories_cancel = () => {
  return `Cancel`;
};
var zh_admin_categories_cancel = () => {
  return `取消`;
};
/**
 * | output |
 * | --- |
 * | "Cancel" |
 *
 * @param {Admin_Categories_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_cancel(inputs);
  return zh_admin_categories_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_confirm_delete.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Confirm_DeleteInputs */
var en_admin_categories_confirm_delete = () => {
  return `Delete`;
};
var zh_admin_categories_confirm_delete = () => {
  return `删除`;
};
/**
 * | output |
 * | --- |
 * | "Delete" |
 *
 * @param {Admin_Categories_Confirm_DeleteInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_confirm_delete = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_confirm_delete(inputs);
  return zh_admin_categories_confirm_delete(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_created.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_CreatedInputs */
var en_admin_categories_created = () => {
  return `Category created`;
};
var zh_admin_categories_created = () => {
  return `分类已创建`;
};
/**
 * | output |
 * | --- |
 * | "Category created" |
 *
 * @param {Admin_Categories_CreatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_created = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_created(inputs);
  return zh_admin_categories_created(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_updated.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_UpdatedInputs */
var en_admin_categories_updated = () => {
  return `Category updated`;
};
var zh_admin_categories_updated = () => {
  return `分类已更新`;
};
/**
 * | output |
 * | --- |
 * | "Category updated" |
 *
 * @param {Admin_Categories_UpdatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_updated = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_updated(inputs);
  return zh_admin_categories_updated(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_categories_deleted.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_DeletedInputs */
var en_admin_categories_deleted = () => {
  return `Category deleted`;
};
var zh_admin_categories_deleted = () => {
  return `分类已删除`;
};
/**
 * | output |
 * | --- |
 * | "Category deleted" |
 *
 * @param {Admin_Categories_DeletedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_categories_deleted = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_categories_deleted(inputs);
  return zh_admin_categories_deleted(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_TitleInputs */
var en_admin_posts_title = () => {
  return `Posts`;
};
var zh_admin_posts_title = () => {
  return `文章管理`;
};
/**
 * | output |
 * | --- |
 * | "Posts" |
 *
 * @param {Admin_Posts_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_title(inputs);
  return zh_admin_posts_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_DescriptionInputs */
var en_admin_posts_description = () => {
  return `Manage blog posts and articles`;
};
var zh_admin_posts_description = () => {
  return `管理博客文章`;
};
/**
 * | output |
 * | --- |
 * | "Manage blog posts and articles" |
 *
 * @param {Admin_Posts_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_description(inputs);
  return zh_admin_posts_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_AllInputs */
var en_admin_posts_all = () => {
  return `All Posts`;
};
var zh_admin_posts_all = () => {
  return `所有文章`;
};
/**
 * | output |
 * | --- |
 * | "All Posts" |
 *
 * @param {Admin_Posts_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_all(inputs);
  return zh_admin_posts_all(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_count.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Posts_CountInputs */
var en_admin_posts_count = (i) => {
  return `${i?.count} posts`;
};
var zh_admin_posts_count = (i) => {
  return `共 ${i?.count} 篇`;
};
/**
 * | output |
 * | --- |
 * | "{count} posts" |
 *
 * @param {Admin_Posts_CountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_count = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_count(inputs);
  return zh_admin_posts_count(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_no_data.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_No_DataInputs */
var en_admin_posts_no_data = () => {
  return `No posts yet`;
};
var zh_admin_posts_no_data = () => {
  return `暂无文章`;
};
/**
 * | output |
 * | --- |
 * | "No posts yet" |
 *
 * @param {Admin_Posts_No_DataInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_no_data = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_no_data(inputs);
  return zh_admin_posts_no_data(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_title_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Title_ColInputs */
var en_admin_posts_title_col = () => {
  return `Title`;
};
var zh_admin_posts_title_col = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Title" |
 *
 * @param {Admin_Posts_Title_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_title_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_title_col(inputs);
  return zh_admin_posts_title_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_slug_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Slug_ColInputs */
var en_admin_posts_slug_col = () => {
  return `Slug`;
};
var zh_admin_posts_slug_col = () => {
  return `标识`;
};
/**
 * | output |
 * | --- |
 * | "Slug" |
 *
 * @param {Admin_Posts_Slug_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_slug_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_slug_col(inputs);
  return zh_admin_posts_slug_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_author_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Author_ColInputs */
var en_admin_posts_author_col = () => {
  return `Author`;
};
var zh_admin_posts_author_col = () => {
  return `作者`;
};
/**
 * | output |
 * | --- |
 * | "Author" |
 *
 * @param {Admin_Posts_Author_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_author_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_author_col(inputs);
  return zh_admin_posts_author_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_status_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Status_ColInputs */
var en_admin_posts_status_col = () => {
  return `Status`;
};
var zh_admin_posts_status_col = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Admin_Posts_Status_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_status_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_status_col(inputs);
  return zh_admin_posts_status_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_created_at.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Created_AtInputs */
var en_admin_posts_created_at = () => {
  return `Created At`;
};
var zh_admin_posts_created_at = () => {
  return `创建时间`;
};
/**
 * | output |
 * | --- |
 * | "Created At" |
 *
 * @param {Admin_Posts_Created_AtInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_created_at = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_created_at(inputs);
  return zh_admin_posts_created_at(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Actions_ColInputs */
var en_admin_posts_actions_col = () => {
  return `Actions`;
};
var zh_admin_posts_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Admin_Posts_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_actions_col(inputs);
  return zh_admin_posts_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_create.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_CreateInputs */
var en_admin_posts_create = () => {
  return `Create Post`;
};
var zh_admin_posts_create = () => {
  return `创建文章`;
};
/**
 * | output |
 * | --- |
 * | "Create Post" |
 *
 * @param {Admin_Posts_CreateInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_create = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_create(inputs);
  return zh_admin_posts_create(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_create_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Create_TitleInputs */
var en_admin_posts_create_title = () => {
  return `Create New Post`;
};
var zh_admin_posts_create_title = () => {
  return `创建新文章`;
};
/**
 * | output |
 * | --- |
 * | "Create New Post" |
 *
 * @param {Admin_Posts_Create_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_create_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_create_title(inputs);
  return zh_admin_posts_create_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_create_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Create_DescriptionInputs */
var en_admin_posts_create_description = () => {
  return `Create a new blog post`;
};
var zh_admin_posts_create_description = () => {
  return `创建一篇新的博客文章`;
};
/**
 * | output |
 * | --- |
 * | "Create a new blog post" |
 *
 * @param {Admin_Posts_Create_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_create_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_create_description(inputs);
  return zh_admin_posts_create_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_edit_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Edit_TitleInputs */
var en_admin_posts_edit_title = () => {
  return `Edit Post`;
};
var zh_admin_posts_edit_title = () => {
  return `编辑文章`;
};
/**
 * | output |
 * | --- |
 * | "Edit Post" |
 *
 * @param {Admin_Posts_Edit_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_edit_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_edit_title(inputs);
  return zh_admin_posts_edit_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_edit_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Edit_DescriptionInputs */
var en_admin_posts_edit_description = () => {
  return `Update post details`;
};
var zh_admin_posts_edit_description = () => {
  return `更新文章信息`;
};
/**
 * | output |
 * | --- |
 * | "Update post details" |
 *
 * @param {Admin_Posts_Edit_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_edit_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_edit_description(inputs);
  return zh_admin_posts_edit_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_delete_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Delete_TitleInputs */
var en_admin_posts_delete_title = () => {
  return `Delete Post`;
};
var zh_admin_posts_delete_title = () => {
  return `删除文章`;
};
/**
 * | output |
 * | --- |
 * | "Delete Post" |
 *
 * @param {Admin_Posts_Delete_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_delete_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_delete_title(inputs);
  return zh_admin_posts_delete_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_delete_confirm.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Delete_ConfirmInputs */
var en_admin_posts_delete_confirm = () => {
  return `Are you sure you want to delete this post?`;
};
var zh_admin_posts_delete_confirm = () => {
  return `确定要删除此文章吗？`;
};
/**
 * | output |
 * | --- |
 * | "Are you sure you want to delete this post?" |
 *
 * @param {Admin_Posts_Delete_ConfirmInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_delete_confirm = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_delete_confirm(inputs);
  return zh_admin_posts_delete_confirm(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_slug_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Slug_FieldInputs */
var en_admin_posts_slug_field = () => {
  return `Slug`;
};
var zh_admin_posts_slug_field = () => {
  return `标识`;
};
/**
 * | output |
 * | --- |
 * | "Slug" |
 *
 * @param {Admin_Posts_Slug_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_slug_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_slug_field(inputs);
  return zh_admin_posts_slug_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_slug_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Slug_PlaceholderInputs */
var en_admin_posts_slug_placeholder = () => {
  return `e.g. my-first-post`;
};
var zh_admin_posts_slug_placeholder = () => {
  return `例如 my-first-post`;
};
/**
 * | output |
 * | --- |
 * | "e.g. my-first-post" |
 *
 * @param {Admin_Posts_Slug_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_slug_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_slug_placeholder(inputs);
  return zh_admin_posts_slug_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_title_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Title_FieldInputs */
var en_admin_posts_title_field = () => {
  return `Title`;
};
var zh_admin_posts_title_field = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Title" |
 *
 * @param {Admin_Posts_Title_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_title_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_title_field(inputs);
  return zh_admin_posts_title_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_title_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Title_PlaceholderInputs */
var en_admin_posts_title_placeholder = () => {
  return `Post title`;
};
var zh_admin_posts_title_placeholder = () => {
  return `文章标题`;
};
/**
 * | output |
 * | --- |
 * | "Post title" |
 *
 * @param {Admin_Posts_Title_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_title_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_title_placeholder(inputs);
  return zh_admin_posts_title_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_description_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Description_FieldInputs */
var en_admin_posts_description_field = () => {
  return `Description`;
};
var zh_admin_posts_description_field = () => {
  return `描述`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Admin_Posts_Description_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_description_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_description_field(inputs);
  return zh_admin_posts_description_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_description_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Description_PlaceholderInputs */
var en_admin_posts_description_placeholder = () => {
  return `Brief description`;
};
var zh_admin_posts_description_placeholder = () => {
  return `简短描述`;
};
/**
 * | output |
 * | --- |
 * | "Brief description" |
 *
 * @param {Admin_Posts_Description_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_description_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_description_placeholder(inputs);
  return zh_admin_posts_description_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_author_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Author_FieldInputs */
var en_admin_posts_author_field = () => {
  return `Author`;
};
var zh_admin_posts_author_field = () => {
  return `作者`;
};
/**
 * | output |
 * | --- |
 * | "Author" |
 *
 * @param {Admin_Posts_Author_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_author_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_author_field(inputs);
  return zh_admin_posts_author_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_author_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Author_PlaceholderInputs */
var en_admin_posts_author_placeholder = () => {
  return `Author name`;
};
var zh_admin_posts_author_placeholder = () => {
  return `作者名称`;
};
/**
 * | output |
 * | --- |
 * | "Author name" |
 *
 * @param {Admin_Posts_Author_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_author_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_author_placeholder(inputs);
  return zh_admin_posts_author_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_content_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Content_FieldInputs */
var en_admin_posts_content_field = () => {
  return `Content`;
};
var zh_admin_posts_content_field = () => {
  return `正文`;
};
/**
 * | output |
 * | --- |
 * | "Content" |
 *
 * @param {Admin_Posts_Content_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_content_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_content_field(inputs);
  return zh_admin_posts_content_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_content_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Content_PlaceholderInputs */
var en_admin_posts_content_placeholder = () => {
  return `Write your post…`;
};
var zh_admin_posts_content_placeholder = () => {
  return `开始撰写文章…`;
};
/**
 * | output |
 * | --- |
 * | "Write your post…" |
 *
 * @param {Admin_Posts_Content_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_content_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_content_placeholder(inputs);
  return zh_admin_posts_content_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_category_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Category_FieldInputs */
var en_admin_posts_category_field = () => {
  return `Category`;
};
var zh_admin_posts_category_field = () => {
  return `分类`;
};
/**
 * | output |
 * | --- |
 * | "Category" |
 *
 * @param {Admin_Posts_Category_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_category_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_category_field(inputs);
  return zh_admin_posts_category_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_category_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Category_PlaceholderInputs */
var en_admin_posts_category_placeholder = () => {
  return `Select category`;
};
var zh_admin_posts_category_placeholder = () => {
  return `选择分类`;
};
/**
 * | output |
 * | --- |
 * | "Select category" |
 *
 * @param {Admin_Posts_Category_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_category_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_category_placeholder(inputs);
  return zh_admin_posts_category_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_status_field.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Status_FieldInputs */
var en_admin_posts_status_field = () => {
  return `Status`;
};
var zh_admin_posts_status_field = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Admin_Posts_Status_FieldInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_status_field = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_status_field(inputs);
  return zh_admin_posts_status_field(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_status_draft.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Status_DraftInputs */
var en_admin_posts_status_draft = () => {
  return `Draft`;
};
var zh_admin_posts_status_draft = () => {
  return `草稿`;
};
/**
 * | output |
 * | --- |
 * | "Draft" |
 *
 * @param {Admin_Posts_Status_DraftInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_status_draft = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_status_draft(inputs);
  return zh_admin_posts_status_draft(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_status_published.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Status_PublishedInputs */
var en_admin_posts_status_published = () => {
  return `Published`;
};
var zh_admin_posts_status_published = () => {
  return `已发布`;
};
/**
 * | output |
 * | --- |
 * | "Published" |
 *
 * @param {Admin_Posts_Status_PublishedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_status_published = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_status_published(inputs);
  return zh_admin_posts_status_published(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_save.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_SaveInputs */
var en_admin_posts_save = () => {
  return `Save`;
};
var zh_admin_posts_save = () => {
  return `保存`;
};
/**
 * | output |
 * | --- |
 * | "Save" |
 *
 * @param {Admin_Posts_SaveInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_save = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_save(inputs);
  return zh_admin_posts_save(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_CancelInputs */
var en_admin_posts_cancel = () => {
  return `Cancel`;
};
var zh_admin_posts_cancel = () => {
  return `取消`;
};
/**
 * | output |
 * | --- |
 * | "Cancel" |
 *
 * @param {Admin_Posts_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_cancel(inputs);
  return zh_admin_posts_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_confirm_delete.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Confirm_DeleteInputs */
var en_admin_posts_confirm_delete = () => {
  return `Delete`;
};
var zh_admin_posts_confirm_delete = () => {
  return `删除`;
};
/**
 * | output |
 * | --- |
 * | "Delete" |
 *
 * @param {Admin_Posts_Confirm_DeleteInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_confirm_delete = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_confirm_delete(inputs);
  return zh_admin_posts_confirm_delete(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_created.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_CreatedInputs */
var en_admin_posts_created = () => {
  return `Post created`;
};
var zh_admin_posts_created = () => {
  return `文章已创建`;
};
/**
 * | output |
 * | --- |
 * | "Post created" |
 *
 * @param {Admin_Posts_CreatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_created = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_created(inputs);
  return zh_admin_posts_created(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_updated.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_UpdatedInputs */
var en_admin_posts_updated = () => {
  return `Post updated`;
};
var zh_admin_posts_updated = () => {
  return `文章已更新`;
};
/**
 * | output |
 * | --- |
 * | "Post updated" |
 *
 * @param {Admin_Posts_UpdatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_updated = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_updated(inputs);
  return zh_admin_posts_updated(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_deleted.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_DeletedInputs */
var en_admin_posts_deleted = () => {
  return `Post deleted`;
};
var zh_admin_posts_deleted = () => {
  return `文章已删除`;
};
/**
 * | output |
 * | --- |
 * | "Post deleted" |
 *
 * @param {Admin_Posts_DeletedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_deleted = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_deleted(inputs);
  return zh_admin_posts_deleted(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_tab_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Tab_AllInputs */
var en_admin_posts_tab_all = () => {
  return `All`;
};
var zh_admin_posts_tab_all = () => {
  return `全部`;
};
/**
 * | output |
 * | --- |
 * | "All" |
 *
 * @param {Admin_Posts_Tab_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_tab_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_tab_all(inputs);
  return zh_admin_posts_tab_all(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_tab_published.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Tab_PublishedInputs */
var en_admin_posts_tab_published = () => {
  return `Published`;
};
var zh_admin_posts_tab_published = () => {
  return `已发布`;
};
/**
 * | output |
 * | --- |
 * | "Published" |
 *
 * @param {Admin_Posts_Tab_PublishedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_tab_published = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_tab_published(inputs);
  return zh_admin_posts_tab_published(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_posts_tab_draft.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Tab_DraftInputs */
var en_admin_posts_tab_draft = () => {
  return `Draft`;
};
var zh_admin_posts_tab_draft = () => {
  return `草稿`;
};
/**
 * | output |
 * | --- |
 * | "Draft" |
 *
 * @param {Admin_Posts_Tab_DraftInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_posts_tab_draft = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_posts_tab_draft(inputs);
  return zh_admin_posts_tab_draft(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_TitleInputs */
var en_admin_payments_title = () => {
  return `Payments`;
};
var zh_admin_payments_title = () => {
  return `支付管理`;
};
/**
 * | output |
 * | --- |
 * | "Payments" |
 *
 * @param {Admin_Payments_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_title(inputs);
  return zh_admin_payments_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_DescriptionInputs */
var en_admin_payments_description = () => {
  return `View all payment orders`;
};
var zh_admin_payments_description = () => {
  return `查看所有支付订单`;
};
/**
 * | output |
 * | --- |
 * | "View all payment orders" |
 *
 * @param {Admin_Payments_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_description(inputs);
  return zh_admin_payments_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_all_payments.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_All_PaymentsInputs */
var en_admin_payments_all_payments = () => {
  return `All Payments`;
};
var zh_admin_payments_all_payments = () => {
  return `所有支付`;
};
/**
 * | output |
 * | --- |
 * | "All Payments" |
 *
 * @param {Admin_Payments_All_PaymentsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_all_payments = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_all_payments(inputs);
  return zh_admin_payments_all_payments(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_count.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Payments_CountInputs */
var en_admin_payments_count = (i) => {
  return `${i?.count} payments`;
};
var zh_admin_payments_count = (i) => {
  return `共 ${i?.count} 条`;
};
/**
 * | output |
 * | --- |
 * | "{count} payments" |
 *
 * @param {Admin_Payments_CountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_count = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_count(inputs);
  return zh_admin_payments_count(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_no_payments.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_No_PaymentsInputs */
var en_admin_payments_no_payments = () => {
  return `No payments yet`;
};
var zh_admin_payments_no_payments = () => {
  return `暂无支付记录`;
};
/**
 * | output |
 * | --- |
 * | "No payments yet" |
 *
 * @param {Admin_Payments_No_PaymentsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_no_payments = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_no_payments(inputs);
  return zh_admin_payments_no_payments(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_order_no.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Order_NoInputs */
var en_admin_payments_order_no = () => {
  return `Order No`;
};
var zh_admin_payments_order_no = () => {
  return `订单号`;
};
/**
 * | output |
 * | --- |
 * | "Order No" |
 *
 * @param {Admin_Payments_Order_NoInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_order_no = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_order_no(inputs);
  return zh_admin_payments_order_no(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_user.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_UserInputs */
var en_admin_payments_user = () => {
  return `User`;
};
var zh_admin_payments_user = () => {
  return `用户`;
};
/**
 * | output |
 * | --- |
 * | "User" |
 *
 * @param {Admin_Payments_UserInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_user = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_user(inputs);
  return zh_admin_payments_user(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_AmountInputs */
var en_admin_payments_amount = () => {
  return `Amount`;
};
var zh_admin_payments_amount = () => {
  return `金额`;
};
/**
 * | output |
 * | --- |
 * | "Amount" |
 *
 * @param {Admin_Payments_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_amount(inputs);
  return zh_admin_payments_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_status.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_StatusInputs */
var en_admin_payments_status = () => {
  return `Status`;
};
var zh_admin_payments_status = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Admin_Payments_StatusInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_status = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_status(inputs);
  return zh_admin_payments_status(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_type.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_TypeInputs */
var en_admin_payments_type = () => {
  return `Type`;
};
var zh_admin_payments_type = () => {
  return `类型`;
};
/**
 * | output |
 * | --- |
 * | "Type" |
 *
 * @param {Admin_Payments_TypeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_type = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_type(inputs);
  return zh_admin_payments_type(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_provider.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_ProviderInputs */
var en_admin_payments_provider = () => {
  return `Provider`;
};
var zh_admin_payments_provider = () => {
  return `支付方式`;
};
/**
 * | output |
 * | --- |
 * | "Provider" |
 *
 * @param {Admin_Payments_ProviderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_provider = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_provider(inputs);
  return zh_admin_payments_provider(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_created_at.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Created_AtInputs */
var en_admin_payments_created_at = () => {
  return `Created At`;
};
var zh_admin_payments_created_at = () => {
  return `创建时间`;
};
/**
 * | output |
 * | --- |
 * | "Created At" |
 *
 * @param {Admin_Payments_Created_AtInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_created_at = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_created_at(inputs);
  return zh_admin_payments_created_at(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_tab_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Tab_AllInputs */
var en_admin_payments_tab_all = () => {
  return `All`;
};
var zh_admin_payments_tab_all = () => {
  return `全部`;
};
/**
 * | output |
 * | --- |
 * | "All" |
 *
 * @param {Admin_Payments_Tab_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_tab_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_tab_all(inputs);
  return zh_admin_payments_tab_all(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_tab_subscription.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Tab_SubscriptionInputs */
var en_admin_payments_tab_subscription = () => {
  return `Subscription`;
};
var zh_admin_payments_tab_subscription = () => {
  return `订阅`;
};
/**
 * | output |
 * | --- |
 * | "Subscription" |
 *
 * @param {Admin_Payments_Tab_SubscriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_tab_subscription = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_tab_subscription(inputs);
  return zh_admin_payments_tab_subscription(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_payments_tab_one_time.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Tab_One_TimeInputs */
var en_admin_payments_tab_one_time = () => {
  return `One-Time`;
};
var zh_admin_payments_tab_one_time = () => {
  return `一次性`;
};
/**
 * | output |
 * | --- |
 * | "One-Time" |
 *
 * @param {Admin_Payments_Tab_One_TimeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_payments_tab_one_time = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_payments_tab_one_time(inputs);
  return zh_admin_payments_tab_one_time(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_TitleInputs */
var en_admin_subscriptions_title = () => {
  return `Subscriptions`;
};
var zh_admin_subscriptions_title = () => {
  return `订阅管理`;
};
/**
 * | output |
 * | --- |
 * | "Subscriptions" |
 *
 * @param {Admin_Subscriptions_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_title(inputs);
  return zh_admin_subscriptions_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_DescriptionInputs */
var en_admin_subscriptions_description = () => {
  return `View all subscriptions`;
};
var zh_admin_subscriptions_description = () => {
  return `查看所有订阅`;
};
/**
 * | output |
 * | --- |
 * | "View all subscriptions" |
 *
 * @param {Admin_Subscriptions_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_description(inputs);
  return zh_admin_subscriptions_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_all_subscriptions.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_All_SubscriptionsInputs */
var en_admin_subscriptions_all_subscriptions = () => {
  return `All Subscriptions`;
};
var zh_admin_subscriptions_all_subscriptions = () => {
  return `所有订阅`;
};
/**
 * | output |
 * | --- |
 * | "All Subscriptions" |
 *
 * @param {Admin_Subscriptions_All_SubscriptionsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_all_subscriptions = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_all_subscriptions(inputs);
  return zh_admin_subscriptions_all_subscriptions(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_count.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Subscriptions_CountInputs */
var en_admin_subscriptions_count = (i) => {
  return `${i?.count} subscriptions`;
};
var zh_admin_subscriptions_count = (i) => {
  return `共 ${i?.count} 条`;
};
/**
 * | output |
 * | --- |
 * | "{count} subscriptions" |
 *
 * @param {Admin_Subscriptions_CountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_count = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_count(inputs);
  return zh_admin_subscriptions_count(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_no_subscriptions.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_No_SubscriptionsInputs */
var en_admin_subscriptions_no_subscriptions = () => {
  return `No subscriptions yet`;
};
var zh_admin_subscriptions_no_subscriptions = () => {
  return `暂无订阅记录`;
};
/**
 * | output |
 * | --- |
 * | "No subscriptions yet" |
 *
 * @param {Admin_Subscriptions_No_SubscriptionsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_no_subscriptions = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_no_subscriptions(inputs);
  return zh_admin_subscriptions_no_subscriptions(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_subscription_no.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Subscription_NoInputs */
var en_admin_subscriptions_subscription_no = () => {
  return `Subscription No`;
};
var zh_admin_subscriptions_subscription_no = () => {
  return `订阅号`;
};
/**
 * | output |
 * | --- |
 * | "Subscription No" |
 *
 * @param {Admin_Subscriptions_Subscription_NoInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_subscription_no = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_subscription_no(inputs);
  return zh_admin_subscriptions_subscription_no(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_user.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_UserInputs */
var en_admin_subscriptions_user = () => {
  return `User`;
};
var zh_admin_subscriptions_user = () => {
  return `用户`;
};
/**
 * | output |
 * | --- |
 * | "User" |
 *
 * @param {Admin_Subscriptions_UserInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_user = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_user(inputs);
  return zh_admin_subscriptions_user(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_AmountInputs */
var en_admin_subscriptions_amount = () => {
  return `Amount`;
};
var zh_admin_subscriptions_amount = () => {
  return `金额`;
};
/**
 * | output |
 * | --- |
 * | "Amount" |
 *
 * @param {Admin_Subscriptions_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_amount(inputs);
  return zh_admin_subscriptions_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_interval.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_IntervalInputs */
var en_admin_subscriptions_interval = () => {
  return `Interval`;
};
var zh_admin_subscriptions_interval = () => {
  return `周期`;
};
/**
 * | output |
 * | --- |
 * | "Interval" |
 *
 * @param {Admin_Subscriptions_IntervalInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_interval = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_interval(inputs);
  return zh_admin_subscriptions_interval(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_status.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_StatusInputs */
var en_admin_subscriptions_status = () => {
  return `Status`;
};
var zh_admin_subscriptions_status = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Admin_Subscriptions_StatusInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_status = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_status(inputs);
  return zh_admin_subscriptions_status(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_provider.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_ProviderInputs */
var en_admin_subscriptions_provider = () => {
  return `Provider`;
};
var zh_admin_subscriptions_provider = () => {
  return `支付方式`;
};
/**
 * | output |
 * | --- |
 * | "Provider" |
 *
 * @param {Admin_Subscriptions_ProviderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_provider = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_provider(inputs);
  return zh_admin_subscriptions_provider(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_period.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_PeriodInputs */
var en_admin_subscriptions_period = () => {
  return `Period`;
};
var zh_admin_subscriptions_period = () => {
  return `当前周期`;
};
/**
 * | output |
 * | --- |
 * | "Period" |
 *
 * @param {Admin_Subscriptions_PeriodInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_period = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_period(inputs);
  return zh_admin_subscriptions_period(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_created_at.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Created_AtInputs */
var en_admin_subscriptions_created_at = () => {
  return `Created At`;
};
var zh_admin_subscriptions_created_at = () => {
  return `创建时间`;
};
/**
 * | output |
 * | --- |
 * | "Created At" |
 *
 * @param {Admin_Subscriptions_Created_AtInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_created_at = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_created_at(inputs);
  return zh_admin_subscriptions_created_at(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_tab_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Tab_AllInputs */
var en_admin_subscriptions_tab_all = () => {
  return `All`;
};
var zh_admin_subscriptions_tab_all = () => {
  return `全部`;
};
/**
 * | output |
 * | --- |
 * | "All" |
 *
 * @param {Admin_Subscriptions_Tab_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_tab_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_tab_all(inputs);
  return zh_admin_subscriptions_tab_all(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_tab_month.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Tab_MonthInputs */
var en_admin_subscriptions_tab_month = () => {
  return `Monthly`;
};
var zh_admin_subscriptions_tab_month = () => {
  return `月付`;
};
/**
 * | output |
 * | --- |
 * | "Monthly" |
 *
 * @param {Admin_Subscriptions_Tab_MonthInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_tab_month = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_tab_month(inputs);
  return zh_admin_subscriptions_tab_month(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_subscriptions_tab_year.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Tab_YearInputs */
var en_admin_subscriptions_tab_year = () => {
  return `Yearly`;
};
var zh_admin_subscriptions_tab_year = () => {
  return `年付`;
};
/**
 * | output |
 * | --- |
 * | "Yearly" |
 *
 * @param {Admin_Subscriptions_Tab_YearInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_subscriptions_tab_year = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_subscriptions_tab_year(inputs);
  return zh_admin_subscriptions_tab_year(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_TitleInputs */
var en_admin_credits_title = () => {
  return `Credits`;
};
var zh_admin_credits_title = () => {
  return `积分管理`;
};
/**
 * | output |
 * | --- |
 * | "Credits" |
 *
 * @param {Admin_Credits_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_title(inputs);
  return zh_admin_credits_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_DescriptionInputs */
var en_admin_credits_description = () => {
  return `Description`;
};
var zh_admin_credits_description = () => {
  return `描述`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Admin_Credits_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_description(inputs);
  return zh_admin_credits_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_all_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_All_CreditsInputs */
var en_admin_credits_all_credits = () => {
  return `All Credits`;
};
var zh_admin_credits_all_credits = () => {
  return `所有积分`;
};
/**
 * | output |
 * | --- |
 * | "All Credits" |
 *
 * @param {Admin_Credits_All_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_all_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_all_credits(inputs);
  return zh_admin_credits_all_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_count.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Credits_CountInputs */
var en_admin_credits_count = (i) => {
  return `${i?.count} records`;
};
var zh_admin_credits_count = (i) => {
  return `共 ${i?.count} 条`;
};
/**
 * | output |
 * | --- |
 * | "{count} records" |
 *
 * @param {Admin_Credits_CountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_count = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_count(inputs);
  return zh_admin_credits_count(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_no_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_No_CreditsInputs */
var en_admin_credits_no_credits = () => {
  return `No credit records yet`;
};
var zh_admin_credits_no_credits = () => {
  return `暂无积分记录`;
};
/**
 * | output |
 * | --- |
 * | "No credit records yet" |
 *
 * @param {Admin_Credits_No_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_no_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_no_credits(inputs);
  return zh_admin_credits_no_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_transaction_no.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Transaction_NoInputs */
var en_admin_credits_transaction_no = () => {
  return `Transaction No`;
};
var zh_admin_credits_transaction_no = () => {
  return `交易单号`;
};
/**
 * | output |
 * | --- |
 * | "Transaction No" |
 *
 * @param {Admin_Credits_Transaction_NoInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_transaction_no = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_transaction_no(inputs);
  return zh_admin_credits_transaction_no(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_user.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_UserInputs */
var en_admin_credits_user = () => {
  return `User`;
};
var zh_admin_credits_user = () => {
  return `用户`;
};
/**
 * | output |
 * | --- |
 * | "User" |
 *
 * @param {Admin_Credits_UserInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_user = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_user(inputs);
  return zh_admin_credits_user(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_AmountInputs */
var en_admin_credits_amount = () => {
  return `Amount`;
};
var zh_admin_credits_amount = () => {
  return `数量`;
};
/**
 * | output |
 * | --- |
 * | "Amount" |
 *
 * @param {Admin_Credits_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_amount(inputs);
  return zh_admin_credits_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_remaining.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_RemainingInputs */
var en_admin_credits_remaining = () => {
  return `Remaining`;
};
var zh_admin_credits_remaining = () => {
  return `剩余`;
};
/**
 * | output |
 * | --- |
 * | "Remaining" |
 *
 * @param {Admin_Credits_RemainingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_remaining = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_remaining(inputs);
  return zh_admin_credits_remaining(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_type.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_TypeInputs */
var en_admin_credits_type = () => {
  return `Type`;
};
var zh_admin_credits_type = () => {
  return `类型`;
};
/**
 * | output |
 * | --- |
 * | "Type" |
 *
 * @param {Admin_Credits_TypeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_type = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_type(inputs);
  return zh_admin_credits_type(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_scene.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_SceneInputs */
var en_admin_credits_scene = () => {
  return `Scene`;
};
var zh_admin_credits_scene = () => {
  return `场景`;
};
/**
 * | output |
 * | --- |
 * | "Scene" |
 *
 * @param {Admin_Credits_SceneInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_scene = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_scene(inputs);
  return zh_admin_credits_scene(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_expires_at.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Expires_AtInputs */
var en_admin_credits_expires_at = () => {
  return `Expires At`;
};
var zh_admin_credits_expires_at = () => {
  return `过期时间`;
};
/**
 * | output |
 * | --- |
 * | "Expires At" |
 *
 * @param {Admin_Credits_Expires_AtInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_expires_at = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_expires_at(inputs);
  return zh_admin_credits_expires_at(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_created_at.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Created_AtInputs */
var en_admin_credits_created_at = () => {
  return `Created At`;
};
var zh_admin_credits_created_at = () => {
  return `创建时间`;
};
/**
 * | output |
 * | --- |
 * | "Created At" |
 *
 * @param {Admin_Credits_Created_AtInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_created_at = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_created_at(inputs);
  return zh_admin_credits_created_at(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_tab_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Tab_AllInputs */
var en_admin_credits_tab_all = () => {
  return `All`;
};
var zh_admin_credits_tab_all = () => {
  return `全部`;
};
/**
 * | output |
 * | --- |
 * | "All" |
 *
 * @param {Admin_Credits_Tab_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_tab_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_tab_all(inputs);
  return zh_admin_credits_tab_all(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_tab_grant.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Tab_GrantInputs */
var en_admin_credits_tab_grant = () => {
  return `Grant`;
};
var zh_admin_credits_tab_grant = () => {
  return `授予`;
};
/**
 * | output |
 * | --- |
 * | "Grant" |
 *
 * @param {Admin_Credits_Tab_GrantInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_tab_grant = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_tab_grant(inputs);
  return zh_admin_credits_tab_grant(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_credits_tab_consume.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Tab_ConsumeInputs */
var en_admin_credits_tab_consume = () => {
  return `Consume`;
};
var zh_admin_credits_tab_consume = () => {
  return `消费`;
};
/**
 * | output |
 * | --- |
 * | "Consume" |
 *
 * @param {Admin_Credits_Tab_ConsumeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_credits_tab_consume = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_credits_tab_consume(inputs);
  return zh_admin_credits_tab_consume(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_TitleInputs */
var en_admin_invite_codes_title = () => {
  return `Invite Codes`;
};
var zh_admin_invite_codes_title = () => {
  return `邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Invite Codes" |
 *
 * @param {Admin_Invite_Codes_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_title(inputs);
  return zh_admin_invite_codes_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_DescriptionInputs */
var en_admin_invite_codes_description = () => {
  return `Manage invite codes for sign-up`;
};
var zh_admin_invite_codes_description = () => {
  return `管理用于注册的邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Manage invite codes for sign-up" |
 *
 * @param {Admin_Invite_Codes_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_description(inputs);
  return zh_admin_invite_codes_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_create_button.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_ButtonInputs */
var en_admin_invite_codes_create_button = () => {
  return `New Invite Code`;
};
var zh_admin_invite_codes_create_button = () => {
  return `新建邀请码`;
};
/**
 * | output |
 * | --- |
 * | "New Invite Code" |
 *
 * @param {Admin_Invite_Codes_Create_ButtonInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_create_button = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_create_button(inputs);
  return zh_admin_invite_codes_create_button(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_create_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_TitleInputs */
var en_admin_invite_codes_create_title = () => {
  return `Create Invite Codes`;
};
var zh_admin_invite_codes_create_title = () => {
  return `创建邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Create Invite Codes" |
 *
 * @param {Admin_Invite_Codes_Create_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_create_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_create_title(inputs);
  return zh_admin_invite_codes_create_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_create_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_DescriptionInputs */
var en_admin_invite_codes_create_description = () => {
  return `Generate one or more invite codes. Random codes are produced automatically.`;
};
var zh_admin_invite_codes_create_description = () => {
  return `可一次生成一个或多个,系统会自动生成随机码。`;
};
/**
 * | output |
 * | --- |
 * | "Generate one or more invite codes. Random codes are produced automatically." |
 *
 * @param {Admin_Invite_Codes_Create_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_create_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_create_description(inputs);
  return zh_admin_invite_codes_create_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_create_submit.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_SubmitInputs */
var en_admin_invite_codes_create_submit = () => {
  return `Create`;
};
var zh_admin_invite_codes_create_submit = () => {
  return `创建`;
};
/**
 * | output |
 * | --- |
 * | "Create" |
 *
 * @param {Admin_Invite_Codes_Create_SubmitInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_create_submit = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_create_submit(inputs);
  return zh_admin_invite_codes_create_submit(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_creating.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_CreatingInputs */
var en_admin_invite_codes_creating = () => {
  return `Creating...`;
};
var zh_admin_invite_codes_creating = () => {
  return `创建中...`;
};
/**
 * | output |
 * | --- |
 * | "Creating..." |
 *
 * @param {Admin_Invite_Codes_CreatingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_creating = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_creating(inputs);
  return zh_admin_invite_codes_creating(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_create_success.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_SuccessInputs */
var en_admin_invite_codes_create_success = () => {
  return `Invite code(s) created`;
};
var zh_admin_invite_codes_create_success = () => {
  return `邀请码创建成功`;
};
/**
 * | output |
 * | --- |
 * | "Invite code(s) created" |
 *
 * @param {Admin_Invite_Codes_Create_SuccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_create_success = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_create_success(inputs);
  return zh_admin_invite_codes_create_success(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_cancel.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_CancelInputs */
var en_admin_invite_codes_cancel = () => {
  return `Cancel`;
};
var zh_admin_invite_codes_cancel = () => {
  return `取消`;
};
/**
 * | output |
 * | --- |
 * | "Cancel" |
 *
 * @param {Admin_Invite_Codes_CancelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_cancel = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_cancel(inputs);
  return zh_admin_invite_codes_cancel(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_count_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Count_LabelInputs */
var en_admin_invite_codes_count_label = () => {
  return `How many`;
};
var zh_admin_invite_codes_count_label = () => {
  return `数量`;
};
/**
 * | output |
 * | --- |
 * | "How many" |
 *
 * @param {Admin_Invite_Codes_Count_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_count_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_count_label(inputs);
  return zh_admin_invite_codes_count_label(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_max_uses_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Max_Uses_LabelInputs */
var en_admin_invite_codes_max_uses_label = () => {
  return `Max uses (per code)`;
};
var zh_admin_invite_codes_max_uses_label = () => {
  return `最大使用次数(每个码)`;
};
/**
 * | output |
 * | --- |
 * | "Max uses (per code)" |
 *
 * @param {Admin_Invite_Codes_Max_Uses_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_max_uses_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_max_uses_label(inputs);
  return zh_admin_invite_codes_max_uses_label(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_trial_days_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Trial_Days_LabelInputs */
var en_admin_invite_codes_trial_days_label = () => {
  return `Trial days`;
};
var zh_admin_invite_codes_trial_days_label = () => {
  return `试用天数`;
};
/**
 * | output |
 * | --- |
 * | "Trial days" |
 *
 * @param {Admin_Invite_Codes_Trial_Days_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_trial_days_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_trial_days_label(inputs);
  return zh_admin_invite_codes_trial_days_label(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_expires_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Expires_LabelInputs */
var en_admin_invite_codes_expires_label = () => {
  return `Expires at (optional)`;
};
var zh_admin_invite_codes_expires_label = () => {
  return `过期时间(可选)`;
};
/**
 * | output |
 * | --- |
 * | "Expires at (optional)" |
 *
 * @param {Admin_Invite_Codes_Expires_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_expires_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_expires_label(inputs);
  return zh_admin_invite_codes_expires_label(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_note_label.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Note_LabelInputs */
var en_admin_invite_codes_note_label = () => {
  return `Note`;
};
var zh_admin_invite_codes_note_label = () => {
  return `备注`;
};
/**
 * | output |
 * | --- |
 * | "Note" |
 *
 * @param {Admin_Invite_Codes_Note_LabelInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_note_label = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_note_label(inputs);
  return zh_admin_invite_codes_note_label(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_note_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Note_PlaceholderInputs */
var en_admin_invite_codes_note_placeholder = () => {
  return `Optional note for internal reference`;
};
var zh_admin_invite_codes_note_placeholder = () => {
  return `用于内部参考的备注信息`;
};
/**
 * | output |
 * | --- |
 * | "Optional note for internal reference" |
 *
 * @param {Admin_Invite_Codes_Note_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_note_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_note_placeholder(inputs);
  return zh_admin_invite_codes_note_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_invalid_input.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Invalid_InputInputs */
var en_admin_invite_codes_invalid_input = () => {
  return `Please check your input`;
};
var zh_admin_invite_codes_invalid_input = () => {
  return `请检查输入`;
};
/**
 * | output |
 * | --- |
 * | "Please check your input" |
 *
 * @param {Admin_Invite_Codes_Invalid_InputInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_invalid_input = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_invalid_input(inputs);
  return zh_admin_invite_codes_invalid_input(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_code_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Code_ColInputs */
var en_admin_invite_codes_code_col = () => {
  return `Code`;
};
var zh_admin_invite_codes_code_col = () => {
  return `邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Code" |
 *
 * @param {Admin_Invite_Codes_Code_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_code_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_code_col(inputs);
  return zh_admin_invite_codes_code_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_usage_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Usage_ColInputs */
var en_admin_invite_codes_usage_col = () => {
  return `Usage`;
};
var zh_admin_invite_codes_usage_col = () => {
  return `已用`;
};
/**
 * | output |
 * | --- |
 * | "Usage" |
 *
 * @param {Admin_Invite_Codes_Usage_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_usage_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_usage_col(inputs);
  return zh_admin_invite_codes_usage_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_trial_days_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Trial_Days_ColInputs */
var en_admin_invite_codes_trial_days_col = () => {
  return `Trial`;
};
var zh_admin_invite_codes_trial_days_col = () => {
  return `试用`;
};
/**
 * | output |
 * | --- |
 * | "Trial" |
 *
 * @param {Admin_Invite_Codes_Trial_Days_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_trial_days_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_trial_days_col(inputs);
  return zh_admin_invite_codes_trial_days_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_note_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Note_ColInputs */
var en_admin_invite_codes_note_col = () => {
  return `Note`;
};
var zh_admin_invite_codes_note_col = () => {
  return `备注`;
};
/**
 * | output |
 * | --- |
 * | "Note" |
 *
 * @param {Admin_Invite_Codes_Note_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_note_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_note_col(inputs);
  return zh_admin_invite_codes_note_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_expires_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Expires_ColInputs */
var en_admin_invite_codes_expires_col = () => {
  return `Expires`;
};
var zh_admin_invite_codes_expires_col = () => {
  return `过期`;
};
/**
 * | output |
 * | --- |
 * | "Expires" |
 *
 * @param {Admin_Invite_Codes_Expires_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_expires_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_expires_col(inputs);
  return zh_admin_invite_codes_expires_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_created_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Created_ColInputs */
var en_admin_invite_codes_created_col = () => {
  return `Created`;
};
var zh_admin_invite_codes_created_col = () => {
  return `创建于`;
};
/**
 * | output |
 * | --- |
 * | "Created" |
 *
 * @param {Admin_Invite_Codes_Created_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_created_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_created_col(inputs);
  return zh_admin_invite_codes_created_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Actions_ColInputs */
var en_admin_invite_codes_actions_col = () => {
  return `Actions`;
};
var zh_admin_invite_codes_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Admin_Invite_Codes_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_actions_col(inputs);
  return zh_admin_invite_codes_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_empty.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_EmptyInputs */
var en_admin_invite_codes_empty = () => {
  return `No invite codes yet`;
};
var zh_admin_invite_codes_empty = () => {
  return `暂无邀请码`;
};
/**
 * | output |
 * | --- |
 * | "No invite codes yet" |
 *
 * @param {Admin_Invite_Codes_EmptyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_empty = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_empty(inputs);
  return zh_admin_invite_codes_empty(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_copied.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_CopiedInputs */
var en_admin_invite_codes_copied = () => {
  return `Copied to clipboard`;
};
var zh_admin_invite_codes_copied = () => {
  return `已复制`;
};
/**
 * | output |
 * | --- |
 * | "Copied to clipboard" |
 *
 * @param {Admin_Invite_Codes_CopiedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_copied = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_copied(inputs);
  return zh_admin_invite_codes_copied(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_delete_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Delete_TitleInputs */
var en_admin_invite_codes_delete_title = () => {
  return `Delete invite code?`;
};
var zh_admin_invite_codes_delete_title = () => {
  return `确认删除邀请码?`;
};
/**
 * | output |
 * | --- |
 * | "Delete invite code?" |
 *
 * @param {Admin_Invite_Codes_Delete_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_delete_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_delete_title(inputs);
  return zh_admin_invite_codes_delete_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_delete_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Delete_DescriptionInputs */
var en_admin_invite_codes_delete_description = () => {
  return `This action cannot be undone.`;
};
var zh_admin_invite_codes_delete_description = () => {
  return `此操作不可撤销。`;
};
/**
 * | output |
 * | --- |
 * | "This action cannot be undone." |
 *
 * @param {Admin_Invite_Codes_Delete_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_delete_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_delete_description(inputs);
  return zh_admin_invite_codes_delete_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_delete_confirm.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Delete_ConfirmInputs */
var en_admin_invite_codes_delete_confirm = () => {
  return `Delete`;
};
var zh_admin_invite_codes_delete_confirm = () => {
  return `删除`;
};
/**
 * | output |
 * | --- |
 * | "Delete" |
 *
 * @param {Admin_Invite_Codes_Delete_ConfirmInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_delete_confirm = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_delete_confirm(inputs);
  return zh_admin_invite_codes_delete_confirm(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_delete_success.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Delete_SuccessInputs */
var en_admin_invite_codes_delete_success = () => {
  return `Invite code deleted`;
};
var zh_admin_invite_codes_delete_success = () => {
  return `邀请码已删除`;
};
/**
 * | output |
 * | --- |
 * | "Invite code deleted" |
 *
 * @param {Admin_Invite_Codes_Delete_SuccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_delete_success = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_delete_success(inputs);
  return zh_admin_invite_codes_delete_success(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_tab_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Tab_AllInputs */
var en_admin_invite_codes_tab_all = () => {
  return `All`;
};
var zh_admin_invite_codes_tab_all = () => {
  return `全部`;
};
/**
 * | output |
 * | --- |
 * | "All" |
 *
 * @param {Admin_Invite_Codes_Tab_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_tab_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_tab_all(inputs);
  return zh_admin_invite_codes_tab_all(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_tab_available.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Tab_AvailableInputs */
var en_admin_invite_codes_tab_available = () => {
  return `Available`;
};
var zh_admin_invite_codes_tab_available = () => {
  return `可用`;
};
/**
 * | output |
 * | --- |
 * | "Available" |
 *
 * @param {Admin_Invite_Codes_Tab_AvailableInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_tab_available = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_tab_available(inputs);
  return zh_admin_invite_codes_tab_available(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_invite_codes_tab_used.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Tab_UsedInputs */
var en_admin_invite_codes_tab_used = () => {
  return `Used`;
};
var zh_admin_invite_codes_tab_used = () => {
  return `已使用`;
};
/**
 * | output |
 * | --- |
 * | "Used" |
 *
 * @param {Admin_Invite_Codes_Tab_UsedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_invite_codes_tab_used = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_invite_codes_tab_used(inputs);
  return zh_admin_invite_codes_tab_used(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_TitleInputs */
var en_admin_settings_title = () => {
  return `System Settings`;
};
var zh_admin_settings_title = () => {
  return `系统设置`;
};
/**
 * | output |
 * | --- |
 * | "System Settings" |
 *
 * @param {Admin_Settings_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_title(inputs);
  return zh_admin_settings_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_DescriptionInputs */
var en_admin_settings_description = () => {
  return `Configure system-wide settings`;
};
var zh_admin_settings_description = () => {
  return `配置系统级设置`;
};
/**
 * | output |
 * | --- |
 * | "Configure system-wide settings" |
 *
 * @param {Admin_Settings_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_description(inputs);
  return zh_admin_settings_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_save.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_SaveInputs */
var en_admin_settings_save = () => {
  return `Save`;
};
var zh_admin_settings_save = () => {
  return `保存`;
};
/**
 * | output |
 * | --- |
 * | "Save" |
 *
 * @param {Admin_Settings_SaveInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_save = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_save(inputs);
  return zh_admin_settings_save(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_saving.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_SavingInputs */
var en_admin_settings_saving = () => {
  return `Saving...`;
};
var zh_admin_settings_saving = () => {
  return `保存中...`;
};
/**
 * | output |
 * | --- |
 * | "Saving..." |
 *
 * @param {Admin_Settings_SavingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_saving = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_saving(inputs);
  return zh_admin_settings_saving(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_save_success.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Save_SuccessInputs */
var en_admin_settings_save_success = () => {
  return `Settings saved`;
};
var zh_admin_settings_save_success = () => {
  return `设置已保存`;
};
/**
 * | output |
 * | --- |
 * | "Settings saved" |
 *
 * @param {Admin_Settings_Save_SuccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_save_success = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_save_success(inputs);
  return zh_admin_settings_save_success(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_save_error.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Save_ErrorInputs */
var en_admin_settings_save_error = () => {
  return `Failed to save`;
};
var zh_admin_settings_save_error = () => {
  return `保存失败`;
};
/**
 * | output |
 * | --- |
 * | "Failed to save" |
 *
 * @param {Admin_Settings_Save_ErrorInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_save_error = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_save_error(inputs);
  return zh_admin_settings_save_error(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_test_button.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_ButtonInputs */
var en_admin_settings_test_button = () => {
  return `Test`;
};
var zh_admin_settings_test_button = () => {
  return `测试`;
};
/**
 * | output |
 * | --- |
 * | "Test" |
 *
 * @param {Admin_Settings_Test_ButtonInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_test_button = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_test_button(inputs);
  return zh_admin_settings_test_button(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_test_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ group: NonNullable<unknown> }} Admin_Settings_Test_TitleInputs */
var en_admin_settings_test_title = (i) => {
  return `Test ${i?.group}`;
};
var zh_admin_settings_test_title = (i) => {
  return `测试 ${i?.group}`;
};
/**
 * | output |
 * | --- |
 * | "Test {group}" |
 *
 * @param {Admin_Settings_Test_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_test_title = (inputs, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_test_title(inputs);
  return zh_admin_settings_test_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_test_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_DescriptionInputs */
var en_admin_settings_test_description = () => {
  return `Run a live request with your current saved config. No orders or data are persisted.`;
};
var zh_admin_settings_test_description = () => {
  return `使用当前已保存的配置发起一次真实请求，不会生成订单或写入数据。`;
};
/**
 * | output |
 * | --- |
 * | "Run a live request with your current saved config. No orders or data are persisted." |
 *
 * @param {Admin_Settings_Test_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_test_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_test_description(inputs);
  return zh_admin_settings_test_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_test_run.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_RunInputs */
var en_admin_settings_test_run = () => {
  return `Run Test`;
};
var zh_admin_settings_test_run = () => {
  return `开始测试`;
};
/**
 * | output |
 * | --- |
 * | "Run Test" |
 *
 * @param {Admin_Settings_Test_RunInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_test_run = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_test_run(inputs);
  return zh_admin_settings_test_run(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_test_running.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_RunningInputs */
var en_admin_settings_test_running = () => {
  return `Running...`;
};
var zh_admin_settings_test_running = () => {
  return `测试中...`;
};
/**
 * | output |
 * | --- |
 * | "Running..." |
 *
 * @param {Admin_Settings_Test_RunningInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_test_running = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_test_running(inputs);
  return zh_admin_settings_test_running(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_test_close.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_CloseInputs */
var en_admin_settings_test_close = () => {
  return `Close`;
};
var zh_admin_settings_test_close = () => {
  return `关闭`;
};
/**
 * | output |
 * | --- |
 * | "Close" |
 *
 * @param {Admin_Settings_Test_CloseInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_test_close = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_test_close(inputs);
  return zh_admin_settings_test_close(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_test_error.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_ErrorInputs */
var en_admin_settings_test_error = () => {
  return `Test failed`;
};
var zh_admin_settings_test_error = () => {
  return `测试失败`;
};
/**
 * | output |
 * | --- |
 * | "Test failed" |
 *
 * @param {Admin_Settings_Test_ErrorInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_test_error = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_test_error(inputs);
  return zh_admin_settings_test_error(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_tabs_general.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_GeneralInputs */
var en_admin_settings_tabs_general = () => {
  return `General`;
};
var zh_admin_settings_tabs_general = () => {
  return `常规`;
};
/**
 * | output |
 * | --- |
 * | "General" |
 *
 * @param {Admin_Settings_Tabs_GeneralInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_tabs_general = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_tabs_general(inputs);
  return zh_admin_settings_tabs_general(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_tabs_auth.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_AuthInputs */
var en_admin_settings_tabs_auth = () => {
  return `Auth`;
};
var zh_admin_settings_tabs_auth = () => {
  return `认证`;
};
/**
 * | output |
 * | --- |
 * | "Auth" |
 *
 * @param {Admin_Settings_Tabs_AuthInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_tabs_auth = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_tabs_auth(inputs);
  return zh_admin_settings_tabs_auth(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_tabs_payment.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_PaymentInputs */
var en_admin_settings_tabs_payment = () => {
  return `Payment`;
};
var zh_admin_settings_tabs_payment = () => {
  return `支付`;
};
/**
 * | output |
 * | --- |
 * | "Payment" |
 *
 * @param {Admin_Settings_Tabs_PaymentInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_tabs_payment = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_tabs_payment(inputs);
  return zh_admin_settings_tabs_payment(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_tabs_email.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_EmailInputs */
var en_admin_settings_tabs_email = () => {
  return `Email`;
};
var zh_admin_settings_tabs_email = () => {
  return `邮件`;
};
/**
 * | output |
 * | --- |
 * | "Email" |
 *
 * @param {Admin_Settings_Tabs_EmailInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_tabs_email = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_tabs_email(inputs);
  return zh_admin_settings_tabs_email(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_tabs_storage.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_StorageInputs */
var en_admin_settings_tabs_storage = () => {
  return `Storage`;
};
var zh_admin_settings_tabs_storage = () => {
  return `存储`;
};
/**
 * | output |
 * | --- |
 * | "Storage" |
 *
 * @param {Admin_Settings_Tabs_StorageInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_tabs_storage = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_tabs_storage(inputs);
  return zh_admin_settings_tabs_storage(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_tabs_ai.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_AiInputs */
var en_admin_settings_tabs_ai = () => {
  return `AI`;
};
var zh_admin_settings_tabs_ai = () => {
  return `AI`;
};
/**
 * | output |
 * | --- |
 * | "AI" |
 *
 * @param {Admin_Settings_Tabs_AiInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_tabs_ai = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_tabs_ai(inputs);
  return zh_admin_settings_tabs_ai(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_tabs_analytics.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_AnalyticsInputs */
var en_admin_settings_tabs_analytics = () => {
  return `Analytics`;
};
var zh_admin_settings_tabs_analytics = () => {
  return `统计`;
};
/**
 * | output |
 * | --- |
 * | "Analytics" |
 *
 * @param {Admin_Settings_Tabs_AnalyticsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_tabs_analytics = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_tabs_analytics(inputs);
  return zh_admin_settings_tabs_analytics(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_tabs_customer_service.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_Customer_ServiceInputs */
var en_admin_settings_tabs_customer_service = () => {
  return `Customer Service`;
};
var zh_admin_settings_tabs_customer_service = () => {
  return `客服`;
};
/**
 * | output |
 * | --- |
 * | "Customer Service" |
 *
 * @param {Admin_Settings_Tabs_Customer_ServiceInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_tabs_customer_service = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_tabs_customer_service(inputs);
  return zh_admin_settings_tabs_customer_service(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_tabs_custom.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_CustomInputs */
var en_admin_settings_tabs_custom = () => {
  return `Custom`;
};
var zh_admin_settings_tabs_custom = () => {
  return `自定义`;
};
/**
 * | output |
 * | --- |
 * | "Custom" |
 *
 * @param {Admin_Settings_Tabs_CustomInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_tabs_custom = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_tabs_custom(inputs);
  return zh_admin_settings_tabs_custom(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_custom_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_TitleInputs */
var en_admin_settings_custom_title = () => {
  return `Custom Configs`;
};
var zh_admin_settings_custom_title = () => {
  return `自定义配置`;
};
/**
 * | output |
 * | --- |
 * | "Custom Configs" |
 *
 * @param {Admin_Settings_Custom_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_custom_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_custom_title(inputs);
  return zh_admin_settings_custom_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_custom_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_DescriptionInputs */
var en_admin_settings_custom_description = () => {
  return `Add your own key/value configs. Keys must be unique and not collide with built-in settings.`;
};
var zh_admin_settings_custom_description = () => {
  return `添加自定义的 key/value 配置。Key 必须唯一，且不能与内置配置项重名。`;
};
/**
 * | output |
 * | --- |
 * | "Add your own key/value configs. Keys must be unique and not collide with built-in settings." |
 *
 * @param {Admin_Settings_Custom_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_custom_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_custom_description(inputs);
  return zh_admin_settings_custom_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_custom_empty.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_EmptyInputs */
var en_admin_settings_custom_empty = () => {
  return `No custom configs yet. Click "Add" to create one.`;
};
var zh_admin_settings_custom_empty = () => {
  return `暂无自定义配置，点击「添加」新建一条。`;
};
/**
 * | output |
 * | --- |
 * | "No custom configs yet. Click \"Add\" to create one." |
 *
 * @param {Admin_Settings_Custom_EmptyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_custom_empty = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_custom_empty(inputs);
  return zh_admin_settings_custom_empty(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_custom_key_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_Key_PlaceholderInputs */
var en_admin_settings_custom_key_placeholder = () => {
  return `config_key`;
};
var zh_admin_settings_custom_key_placeholder = () => {
  return `config_key`;
};
/**
 * | output |
 * | --- |
 * | "config_key" |
 *
 * @param {Admin_Settings_Custom_Key_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_custom_key_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_custom_key_placeholder(inputs);
  return zh_admin_settings_custom_key_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_custom_value_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_Value_PlaceholderInputs */
var en_admin_settings_custom_value_placeholder = () => {
  return `value`;
};
var zh_admin_settings_custom_value_placeholder = () => {
  return `配置值`;
};
/**
 * | output |
 * | --- |
 * | "value" |
 *
 * @param {Admin_Settings_Custom_Value_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_custom_value_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_custom_value_placeholder(inputs);
  return zh_admin_settings_custom_value_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_custom_add.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_AddInputs */
var en_admin_settings_custom_add = () => {
  return `Add`;
};
var zh_admin_settings_custom_add = () => {
  return `添加`;
};
/**
 * | output |
 * | --- |
 * | "Add" |
 *
 * @param {Admin_Settings_Custom_AddInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_custom_add = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_custom_add(inputs);
  return zh_admin_settings_custom_add(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_custom_remove.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_RemoveInputs */
var en_admin_settings_custom_remove = () => {
  return `Remove`;
};
var zh_admin_settings_custom_remove = () => {
  return `删除`;
};
/**
 * | output |
 * | --- |
 * | "Remove" |
 *
 * @param {Admin_Settings_Custom_RemoveInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_custom_remove = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_custom_remove(inputs);
  return zh_admin_settings_custom_remove(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_appinfo_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Appinfo_TitleInputs */
var en_admin_settings_groups_appinfo_title = () => {
  return `App Info`;
};
var zh_admin_settings_groups_appinfo_title = () => {
  return `应用信息`;
};
/**
 * | output |
 * | --- |
 * | "App Info" |
 *
 * @param {Admin_Settings_Groups_Appinfo_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_appinfo_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_appinfo_title(inputs);
  return zh_admin_settings_groups_appinfo_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_appinfo_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Appinfo_DescriptionInputs */
var en_admin_settings_groups_appinfo_description = () => {
  return `Basic application settings`;
};
var zh_admin_settings_groups_appinfo_description = () => {
  return `基本应用设置`;
};
/**
 * | output |
 * | --- |
 * | "Basic application settings" |
 *
 * @param {Admin_Settings_Groups_Appinfo_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_appinfo_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_appinfo_description(inputs);
  return zh_admin_settings_groups_appinfo_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_user_role_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_User_Role_TitleInputs */
var en_admin_settings_groups_user_role_title = () => {
  return `User Roles`;
};
var zh_admin_settings_groups_user_role_title = () => {
  return `用户角色`;
};
/**
 * | output |
 * | --- |
 * | "User Roles" |
 *
 * @param {Admin_Settings_Groups_User_Role_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_user_role_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_user_role_title(inputs);
  return zh_admin_settings_groups_user_role_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_user_role_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_User_Role_DescriptionInputs */
var en_admin_settings_groups_user_role_description = () => {
  return `Default role for new users`;
};
var zh_admin_settings_groups_user_role_description = () => {
  return `新用户默认角色`;
};
/**
 * | output |
 * | --- |
 * | "Default role for new users" |
 *
 * @param {Admin_Settings_Groups_User_Role_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_user_role_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_user_role_description(inputs);
  return zh_admin_settings_groups_user_role_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_credit_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Credit_TitleInputs */
var en_admin_settings_groups_credit_title = () => {
  return `Credits`;
};
var zh_admin_settings_groups_credit_title = () => {
  return `积分`;
};
/**
 * | output |
 * | --- |
 * | "Credits" |
 *
 * @param {Admin_Settings_Groups_Credit_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_credit_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_credit_title(inputs);
  return zh_admin_settings_groups_credit_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_credit_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Credit_DescriptionInputs */
var en_admin_settings_groups_credit_description = () => {
  return `Initial credits for new users`;
};
var zh_admin_settings_groups_credit_description = () => {
  return `新用户初始积分`;
};
/**
 * | output |
 * | --- |
 * | "Initial credits for new users" |
 *
 * @param {Admin_Settings_Groups_Credit_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_credit_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_credit_description(inputs);
  return zh_admin_settings_groups_credit_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_email_auth_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Email_Auth_TitleInputs */
var en_admin_settings_groups_email_auth_title = () => {
  return `Email Auth`;
};
var zh_admin_settings_groups_email_auth_title = () => {
  return `邮箱认证`;
};
/**
 * | output |
 * | --- |
 * | "Email Auth" |
 *
 * @param {Admin_Settings_Groups_Email_Auth_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_email_auth_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_email_auth_title(inputs);
  return zh_admin_settings_groups_email_auth_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_email_auth_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Email_Auth_DescriptionInputs */
var en_admin_settings_groups_email_auth_description = () => {
  return `Email/password authentication`;
};
var zh_admin_settings_groups_email_auth_description = () => {
  return `邮箱/密码登录`;
};
/**
 * | output |
 * | --- |
 * | "Email/password authentication" |
 *
 * @param {Admin_Settings_Groups_Email_Auth_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_email_auth_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_email_auth_description(inputs);
  return zh_admin_settings_groups_email_auth_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_google_auth_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Google_Auth_TitleInputs */
var en_admin_settings_groups_google_auth_title = () => {
  return `Google Auth`;
};
var zh_admin_settings_groups_google_auth_title = () => {
  return `Google 认证`;
};
/**
 * | output |
 * | --- |
 * | "Google Auth" |
 *
 * @param {Admin_Settings_Groups_Google_Auth_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_google_auth_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_google_auth_title(inputs);
  return zh_admin_settings_groups_google_auth_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_google_auth_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Google_Auth_DescriptionInputs */
var en_admin_settings_groups_google_auth_description = () => {
  return `Google OAuth login`;
};
var zh_admin_settings_groups_google_auth_description = () => {
  return `Google OAuth 登录`;
};
/**
 * | output |
 * | --- |
 * | "Google OAuth login" |
 *
 * @param {Admin_Settings_Groups_Google_Auth_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_google_auth_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_google_auth_description(inputs);
  return zh_admin_settings_groups_google_auth_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_github_auth_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Github_Auth_TitleInputs */
var en_admin_settings_groups_github_auth_title = () => {
  return `GitHub Auth`;
};
var zh_admin_settings_groups_github_auth_title = () => {
  return `GitHub 认证`;
};
/**
 * | output |
 * | --- |
 * | "GitHub Auth" |
 *
 * @param {Admin_Settings_Groups_Github_Auth_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_github_auth_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_github_auth_title(inputs);
  return zh_admin_settings_groups_github_auth_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_github_auth_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Github_Auth_DescriptionInputs */
var en_admin_settings_groups_github_auth_description = () => {
  return `GitHub OAuth login`;
};
var zh_admin_settings_groups_github_auth_description = () => {
  return `GitHub OAuth 登录`;
};
/**
 * | output |
 * | --- |
 * | "GitHub OAuth login" |
 *
 * @param {Admin_Settings_Groups_Github_Auth_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_github_auth_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_github_auth_description(inputs);
  return zh_admin_settings_groups_github_auth_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_basic_payment_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Basic_Payment_TitleInputs */
var en_admin_settings_groups_basic_payment_title = () => {
  return `Basic`;
};
var zh_admin_settings_groups_basic_payment_title = () => {
  return `基础设置`;
};
/**
 * | output |
 * | --- |
 * | "Basic" |
 *
 * @param {Admin_Settings_Groups_Basic_Payment_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_basic_payment_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_basic_payment_title(inputs);
  return zh_admin_settings_groups_basic_payment_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_basic_payment_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Basic_Payment_DescriptionInputs */
var en_admin_settings_groups_basic_payment_description = () => {
  return `Payment general settings`;
};
var zh_admin_settings_groups_basic_payment_description = () => {
  return `支付通用设置`;
};
/**
 * | output |
 * | --- |
 * | "Payment general settings" |
 *
 * @param {Admin_Settings_Groups_Basic_Payment_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_basic_payment_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_basic_payment_description(inputs);
  return zh_admin_settings_groups_basic_payment_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_stripe_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Stripe_TitleInputs */
var en_admin_settings_groups_stripe_title = () => {
  return `Stripe`;
};
var zh_admin_settings_groups_stripe_title = () => {
  return `Stripe`;
};
/**
 * | output |
 * | --- |
 * | "Stripe" |
 *
 * @param {Admin_Settings_Groups_Stripe_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_stripe_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_stripe_title(inputs);
  return zh_admin_settings_groups_stripe_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_stripe_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Stripe_DescriptionInputs */
var en_admin_settings_groups_stripe_description = () => {
  return `Stripe payment gateway`;
};
var zh_admin_settings_groups_stripe_description = () => {
  return `Stripe 支付网关`;
};
/**
 * | output |
 * | --- |
 * | "Stripe payment gateway" |
 *
 * @param {Admin_Settings_Groups_Stripe_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_stripe_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_stripe_description(inputs);
  return zh_admin_settings_groups_stripe_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_creem_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Creem_TitleInputs */
var en_admin_settings_groups_creem_title = () => {
  return `Creem`;
};
var zh_admin_settings_groups_creem_title = () => {
  return `Creem`;
};
/**
 * | output |
 * | --- |
 * | "Creem" |
 *
 * @param {Admin_Settings_Groups_Creem_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_creem_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_creem_title(inputs);
  return zh_admin_settings_groups_creem_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_creem_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Creem_DescriptionInputs */
var en_admin_settings_groups_creem_description = () => {
  return `Creem payment gateway`;
};
var zh_admin_settings_groups_creem_description = () => {
  return `Creem 支付网关`;
};
/**
 * | output |
 * | --- |
 * | "Creem payment gateway" |
 *
 * @param {Admin_Settings_Groups_Creem_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_creem_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_creem_description(inputs);
  return zh_admin_settings_groups_creem_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_paypal_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Paypal_TitleInputs */
var en_admin_settings_groups_paypal_title = () => {
  return `PayPal`;
};
var zh_admin_settings_groups_paypal_title = () => {
  return `PayPal`;
};
/**
 * | output |
 * | --- |
 * | "PayPal" |
 *
 * @param {Admin_Settings_Groups_Paypal_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_paypal_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_paypal_title(inputs);
  return zh_admin_settings_groups_paypal_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_paypal_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Paypal_DescriptionInputs */
var en_admin_settings_groups_paypal_description = () => {
  return `PayPal payment gateway`;
};
var zh_admin_settings_groups_paypal_description = () => {
  return `PayPal 支付网关`;
};
/**
 * | output |
 * | --- |
 * | "PayPal payment gateway" |
 *
 * @param {Admin_Settings_Groups_Paypal_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_paypal_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_paypal_description(inputs);
  return zh_admin_settings_groups_paypal_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_alipay_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Alipay_TitleInputs */
var en_admin_settings_groups_alipay_title = () => {
  return `Alipay`;
};
var zh_admin_settings_groups_alipay_title = () => {
  return `支付宝`;
};
/**
 * | output |
 * | --- |
 * | "Alipay" |
 *
 * @param {Admin_Settings_Groups_Alipay_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_alipay_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_alipay_title(inputs);
  return zh_admin_settings_groups_alipay_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_alipay_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Alipay_DescriptionInputs */
var en_admin_settings_groups_alipay_description = () => {
  return `Alipay payment gateway (native)`;
};
var zh_admin_settings_groups_alipay_description = () => {
  return `支付宝支付（原生）`;
};
/**
 * | output |
 * | --- |
 * | "Alipay payment gateway (native)" |
 *
 * @param {Admin_Settings_Groups_Alipay_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_alipay_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_alipay_description(inputs);
  return zh_admin_settings_groups_alipay_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_wechat_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Wechat_TitleInputs */
var en_admin_settings_groups_wechat_title = () => {
  return `WeChat Pay`;
};
var zh_admin_settings_groups_wechat_title = () => {
  return `微信支付`;
};
/**
 * | output |
 * | --- |
 * | "WeChat Pay" |
 *
 * @param {Admin_Settings_Groups_Wechat_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_wechat_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_wechat_title(inputs);
  return zh_admin_settings_groups_wechat_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_wechat_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Wechat_DescriptionInputs */
var en_admin_settings_groups_wechat_description = () => {
  return `WeChat Pay gateway (native)`;
};
var zh_admin_settings_groups_wechat_description = () => {
  return `微信支付网关（原生）`;
};
/**
 * | output |
 * | --- |
 * | "WeChat Pay gateway (native)" |
 *
 * @param {Admin_Settings_Groups_Wechat_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_wechat_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_wechat_description(inputs);
  return zh_admin_settings_groups_wechat_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_email_general_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Email_General_TitleInputs */
var en_admin_settings_groups_email_general_title = () => {
  return `General`;
};
var zh_admin_settings_groups_email_general_title = () => {
  return `通用`;
};
/**
 * | output |
 * | --- |
 * | "General" |
 *
 * @param {Admin_Settings_Groups_Email_General_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_email_general_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_email_general_title(inputs);
  return zh_admin_settings_groups_email_general_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_email_general_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Email_General_DescriptionInputs */
var en_admin_settings_groups_email_general_description = () => {
  return `Email provider selection`;
};
var zh_admin_settings_groups_email_general_description = () => {
  return `邮件服务商选择`;
};
/**
 * | output |
 * | --- |
 * | "Email provider selection" |
 *
 * @param {Admin_Settings_Groups_Email_General_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_email_general_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_email_general_description(inputs);
  return zh_admin_settings_groups_email_general_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_resend_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Resend_TitleInputs */
var en_admin_settings_groups_resend_title = () => {
  return `Resend`;
};
var zh_admin_settings_groups_resend_title = () => {
  return `Resend`;
};
/**
 * | output |
 * | --- |
 * | "Resend" |
 *
 * @param {Admin_Settings_Groups_Resend_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_resend_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_resend_title(inputs);
  return zh_admin_settings_groups_resend_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_resend_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Resend_DescriptionInputs */
var en_admin_settings_groups_resend_description = () => {
  return `Resend email service`;
};
var zh_admin_settings_groups_resend_description = () => {
  return `Resend 邮件服务`;
};
/**
 * | output |
 * | --- |
 * | "Resend email service" |
 *
 * @param {Admin_Settings_Groups_Resend_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_resend_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_resend_description(inputs);
  return zh_admin_settings_groups_resend_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_cloudflare_email_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Cloudflare_Email_TitleInputs */
var en_admin_settings_groups_cloudflare_email_title = () => {
  return `Cloudflare Email`;
};
var zh_admin_settings_groups_cloudflare_email_title = () => {
  return `Cloudflare Email`;
};
/**
 * | output |
 * | --- |
 * | "Cloudflare Email" |
 *
 * @param {Admin_Settings_Groups_Cloudflare_Email_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_cloudflare_email_title = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_cloudflare_email_title(inputs);
  return zh_admin_settings_groups_cloudflare_email_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_cloudflare_email_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Cloudflare_Email_DescriptionInputs */
var en_admin_settings_groups_cloudflare_email_description = () => {
  return `Cloudflare Email Service`;
};
var zh_admin_settings_groups_cloudflare_email_description = () => {
  return `Cloudflare 邮件服务`;
};
/**
 * | output |
 * | --- |
 * | "Cloudflare Email Service" |
 *
 * @param {Admin_Settings_Groups_Cloudflare_Email_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_cloudflare_email_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_cloudflare_email_description(inputs);
  return zh_admin_settings_groups_cloudflare_email_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_r2_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_R2_TitleInputs */
var en_admin_settings_groups_r2_title = () => {
  return `Cloudflare R2 / S3`;
};
var zh_admin_settings_groups_r2_title = () => {
  return `Cloudflare R2 / S3`;
};
/**
 * | output |
 * | --- |
 * | "Cloudflare R2 / S3" |
 *
 * @param {Admin_Settings_Groups_R2_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_r2_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_r2_title(inputs);
  return zh_admin_settings_groups_r2_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_r2_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_R2_DescriptionInputs */
var en_admin_settings_groups_r2_description = () => {
  return `Object storage settings`;
};
var zh_admin_settings_groups_r2_description = () => {
  return `对象存储设置`;
};
/**
 * | output |
 * | --- |
 * | "Object storage settings" |
 *
 * @param {Admin_Settings_Groups_R2_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_r2_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_r2_description(inputs);
  return zh_admin_settings_groups_r2_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_openai_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Openai_TitleInputs */
var en_admin_settings_groups_openai_title = () => {
  return `OpenAI`;
};
var zh_admin_settings_groups_openai_title = () => {
  return `OpenAI`;
};
/**
 * | output |
 * | --- |
 * | "OpenAI" |
 *
 * @param {Admin_Settings_Groups_Openai_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_openai_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_openai_title(inputs);
  return zh_admin_settings_groups_openai_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_openai_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Openai_DescriptionInputs */
var en_admin_settings_groups_openai_description = () => {
  return `OpenAI (or compatible) API`;
};
var zh_admin_settings_groups_openai_description = () => {
  return `OpenAI（或兼容）API`;
};
/**
 * | output |
 * | --- |
 * | "OpenAI (or compatible) API" |
 *
 * @param {Admin_Settings_Groups_Openai_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_openai_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_openai_description(inputs);
  return zh_admin_settings_groups_openai_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_anthropic_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Anthropic_TitleInputs */
var en_admin_settings_groups_anthropic_title = () => {
  return `Anthropic`;
};
var zh_admin_settings_groups_anthropic_title = () => {
  return `Anthropic`;
};
/**
 * | output |
 * | --- |
 * | "Anthropic" |
 *
 * @param {Admin_Settings_Groups_Anthropic_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_anthropic_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_anthropic_title(inputs);
  return zh_admin_settings_groups_anthropic_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_anthropic_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Anthropic_DescriptionInputs */
var en_admin_settings_groups_anthropic_description = () => {
  return `Anthropic Claude API`;
};
var zh_admin_settings_groups_anthropic_description = () => {
  return `Anthropic Claude API`;
};
/**
 * | output |
 * | --- |
 * | "Anthropic Claude API" |
 *
 * @param {Admin_Settings_Groups_Anthropic_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_anthropic_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_anthropic_description(inputs);
  return zh_admin_settings_groups_anthropic_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_replicate_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Replicate_TitleInputs */
var en_admin_settings_groups_replicate_title = () => {
  return `Replicate`;
};
var zh_admin_settings_groups_replicate_title = () => {
  return `Replicate`;
};
/**
 * | output |
 * | --- |
 * | "Replicate" |
 *
 * @param {Admin_Settings_Groups_Replicate_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_replicate_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_replicate_title(inputs);
  return zh_admin_settings_groups_replicate_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_replicate_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Replicate_DescriptionInputs */
var en_admin_settings_groups_replicate_description = () => {
  return `Replicate AI API`;
};
var zh_admin_settings_groups_replicate_description = () => {
  return `Replicate AI API`;
};
/**
 * | output |
 * | --- |
 * | "Replicate AI API" |
 *
 * @param {Admin_Settings_Groups_Replicate_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_replicate_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_replicate_description(inputs);
  return zh_admin_settings_groups_replicate_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_fal_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Fal_TitleInputs */
var en_admin_settings_groups_fal_title = () => {
  return `Fal`;
};
var zh_admin_settings_groups_fal_title = () => {
  return `Fal`;
};
/**
 * | output |
 * | --- |
 * | "Fal" |
 *
 * @param {Admin_Settings_Groups_Fal_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_fal_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_fal_title(inputs);
  return zh_admin_settings_groups_fal_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_fal_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Fal_DescriptionInputs */
var en_admin_settings_groups_fal_description = () => {
  return `Fal AI API`;
};
var zh_admin_settings_groups_fal_description = () => {
  return `Fal AI API`;
};
/**
 * | output |
 * | --- |
 * | "Fal AI API" |
 *
 * @param {Admin_Settings_Groups_Fal_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_fal_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_fal_description(inputs);
  return zh_admin_settings_groups_fal_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_google_analytics_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Google_Analytics_TitleInputs */
var en_admin_settings_groups_google_analytics_title = () => {
  return `Google Analytics`;
};
var zh_admin_settings_groups_google_analytics_title = () => {
  return `Google Analytics`;
};
/**
 * | output |
 * | --- |
 * | "Google Analytics" |
 *
 * @param {Admin_Settings_Groups_Google_Analytics_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_google_analytics_title = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_google_analytics_title(inputs);
  return zh_admin_settings_groups_google_analytics_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_google_analytics_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Google_Analytics_DescriptionInputs */
var en_admin_settings_groups_google_analytics_description = () => {
  return `Inject gtag.js with the configured Measurement ID`;
};
var zh_admin_settings_groups_google_analytics_description = () => {
  return `按配置的 Measurement ID 注入 gtag.js`;
};
/**
 * | output |
 * | --- |
 * | "Inject gtag.js with the configured Measurement ID" |
 *
 * @param {Admin_Settings_Groups_Google_Analytics_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_google_analytics_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_google_analytics_description(inputs);
  return zh_admin_settings_groups_google_analytics_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_plausible_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Plausible_TitleInputs */
var en_admin_settings_groups_plausible_title = () => {
  return `Plausible`;
};
var zh_admin_settings_groups_plausible_title = () => {
  return `Plausible`;
};
/**
 * | output |
 * | --- |
 * | "Plausible" |
 *
 * @param {Admin_Settings_Groups_Plausible_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_plausible_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_plausible_title(inputs);
  return zh_admin_settings_groups_plausible_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_plausible_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Plausible_DescriptionInputs */
var en_admin_settings_groups_plausible_description = () => {
  return `Inject plausible.js for self-hosted or cloud Plausible`;
};
var zh_admin_settings_groups_plausible_description = () => {
  return `注入 plausible.js（云版或自托管）`;
};
/**
 * | output |
 * | --- |
 * | "Inject plausible.js for self-hosted or cloud Plausible" |
 *
 * @param {Admin_Settings_Groups_Plausible_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_plausible_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_plausible_description(inputs);
  return zh_admin_settings_groups_plausible_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_crisp_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Crisp_TitleInputs */
var en_admin_settings_groups_crisp_title = () => {
  return `Crisp`;
};
var zh_admin_settings_groups_crisp_title = () => {
  return `Crisp`;
};
/**
 * | output |
 * | --- |
 * | "Crisp" |
 *
 * @param {Admin_Settings_Groups_Crisp_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_crisp_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_crisp_title(inputs);
  return zh_admin_settings_groups_crisp_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_crisp_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Crisp_DescriptionInputs */
var en_admin_settings_groups_crisp_description = () => {
  return `Crisp live chat widget`;
};
var zh_admin_settings_groups_crisp_description = () => {
  return `Crisp 客服聊天组件`;
};
/**
 * | output |
 * | --- |
 * | "Crisp live chat widget" |
 *
 * @param {Admin_Settings_Groups_Crisp_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_crisp_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_crisp_description(inputs);
  return zh_admin_settings_groups_crisp_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_tawk_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Tawk_TitleInputs */
var en_admin_settings_groups_tawk_title = () => {
  return `Tawk.to`;
};
var zh_admin_settings_groups_tawk_title = () => {
  return `Tawk.to`;
};
/**
 * | output |
 * | --- |
 * | "Tawk.to" |
 *
 * @param {Admin_Settings_Groups_Tawk_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_tawk_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_tawk_title(inputs);
  return zh_admin_settings_groups_tawk_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_groups_tawk_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Tawk_DescriptionInputs */
var en_admin_settings_groups_tawk_description = () => {
  return `Tawk.to live chat widget`;
};
var zh_admin_settings_groups_tawk_description = () => {
  return `Tawk.to 客服聊天组件`;
};
/**
 * | output |
 * | --- |
 * | "Tawk.to live chat widget" |
 *
 * @param {Admin_Settings_Groups_Tawk_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_groups_tawk_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_groups_tawk_description(inputs);
  return zh_admin_settings_groups_tawk_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_app_name.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_App_NameInputs */
var en_admin_settings_fields_app_name = () => {
  return `App Name`;
};
var zh_admin_settings_fields_app_name = () => {
  return `应用名称`;
};
/**
 * | output |
 * | --- |
 * | "App Name" |
 *
 * @param {Admin_Settings_Fields_App_NameInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_app_name = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_app_name(inputs);
  return zh_admin_settings_fields_app_name(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_app_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_App_DescriptionInputs */
var en_admin_settings_fields_app_description = () => {
  return `App Description`;
};
var zh_admin_settings_fields_app_description = () => {
  return `应用描述`;
};
/**
 * | output |
 * | --- |
 * | "App Description" |
 *
 * @param {Admin_Settings_Fields_App_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_app_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_app_description(inputs);
  return zh_admin_settings_fields_app_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_app_url.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_App_UrlInputs */
var en_admin_settings_fields_app_url = () => {
  return `App URL`;
};
var zh_admin_settings_fields_app_url = () => {
  return `应用地址`;
};
/**
 * | output |
 * | --- |
 * | "App URL" |
 *
 * @param {Admin_Settings_Fields_App_UrlInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_app_url = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_app_url(inputs);
  return zh_admin_settings_fields_app_url(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_initial_role_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Role_EnabledInputs */
var en_admin_settings_fields_initial_role_enabled = () => {
  return `Auto-assign role for new users`;
};
var zh_admin_settings_fields_initial_role_enabled = () => {
  return `新用户自动分配角色`;
};
/**
 * | output |
 * | --- |
 * | "Auto-assign role for new users" |
 *
 * @param {Admin_Settings_Fields_Initial_Role_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_initial_role_enabled = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_initial_role_enabled(inputs);
  return zh_admin_settings_fields_initial_role_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_initial_role_name.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Role_NameInputs */
var en_admin_settings_fields_initial_role_name = () => {
  return `Default role name`;
};
var zh_admin_settings_fields_initial_role_name = () => {
  return `默认角色名称`;
};
/**
 * | output |
 * | --- |
 * | "Default role name" |
 *
 * @param {Admin_Settings_Fields_Initial_Role_NameInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_initial_role_name = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_initial_role_name(inputs);
  return zh_admin_settings_fields_initial_role_name(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_initial_credits_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Credits_EnabledInputs */
var en_admin_settings_fields_initial_credits_enabled = () => {
  return `Grant credits on signup`;
};
var zh_admin_settings_fields_initial_credits_enabled = () => {
  return `注册赠送积分`;
};
/**
 * | output |
 * | --- |
 * | "Grant credits on signup" |
 *
 * @param {Admin_Settings_Fields_Initial_Credits_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_initial_credits_enabled = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_initial_credits_enabled(inputs);
  return zh_admin_settings_fields_initial_credits_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_initial_credits_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Credits_AmountInputs */
var en_admin_settings_fields_initial_credits_amount = () => {
  return `Credits amount`;
};
var zh_admin_settings_fields_initial_credits_amount = () => {
  return `积分数量`;
};
/**
 * | output |
 * | --- |
 * | "Credits amount" |
 *
 * @param {Admin_Settings_Fields_Initial_Credits_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_initial_credits_amount = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_initial_credits_amount(inputs);
  return zh_admin_settings_fields_initial_credits_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_initial_credits_valid_days.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Credits_Valid_DaysInputs */
var en_admin_settings_fields_initial_credits_valid_days = () => {
  return `Valid days`;
};
var zh_admin_settings_fields_initial_credits_valid_days = () => {
  return `有效天数`;
};
/**
 * | output |
 * | --- |
 * | "Valid days" |
 *
 * @param {Admin_Settings_Fields_Initial_Credits_Valid_DaysInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_initial_credits_valid_days = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_initial_credits_valid_days(inputs);
  return zh_admin_settings_fields_initial_credits_valid_days(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_initial_credits_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Credits_DescriptionInputs */
var en_admin_settings_fields_initial_credits_description = () => {
  return `Description`;
};
var zh_admin_settings_fields_initial_credits_description = () => {
  return `描述`;
};
/**
 * | output |
 * | --- |
 * | "Description" |
 *
 * @param {Admin_Settings_Fields_Initial_Credits_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_initial_credits_description = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_initial_credits_description(inputs);
  return zh_admin_settings_fields_initial_credits_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_email_auth_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Email_Auth_EnabledInputs */
var en_admin_settings_fields_email_auth_enabled = () => {
  return `Enable email auth`;
};
var zh_admin_settings_fields_email_auth_enabled = () => {
  return `启用邮箱认证`;
};
/**
 * | output |
 * | --- |
 * | "Enable email auth" |
 *
 * @param {Admin_Settings_Fields_Email_Auth_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_email_auth_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_email_auth_enabled(inputs);
  return zh_admin_settings_fields_email_auth_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_email_verification_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Email_Verification_EnabledInputs */
var en_admin_settings_fields_email_verification_enabled = () => {
  return `Require email verification on sign up`;
};
var zh_admin_settings_fields_email_verification_enabled = () => {
  return `注册时需要邮箱验证`;
};
/**
 * | output |
 * | --- |
 * | "Require email verification on sign up" |
 *
 * @param {Admin_Settings_Fields_Email_Verification_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_email_verification_enabled = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_email_verification_enabled(inputs);
  return zh_admin_settings_fields_email_verification_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_google_auth_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_Auth_EnabledInputs */
var en_admin_settings_fields_google_auth_enabled = () => {
  return `Enable Google auth`;
};
var zh_admin_settings_fields_google_auth_enabled = () => {
  return `启用 Google 认证`;
};
/**
 * | output |
 * | --- |
 * | "Enable Google auth" |
 *
 * @param {Admin_Settings_Fields_Google_Auth_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_google_auth_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_google_auth_enabled(inputs);
  return zh_admin_settings_fields_google_auth_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_google_one_tap_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_One_Tap_EnabledInputs */
var en_admin_settings_fields_google_one_tap_enabled = () => {
  return `Enable Google One Tap`;
};
var zh_admin_settings_fields_google_one_tap_enabled = () => {
  return `启用 Google One Tap`;
};
/**
 * | output |
 * | --- |
 * | "Enable Google One Tap" |
 *
 * @param {Admin_Settings_Fields_Google_One_Tap_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_google_one_tap_enabled = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_google_one_tap_enabled(inputs);
  return zh_admin_settings_fields_google_one_tap_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_google_client_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_Client_IdInputs */
var en_admin_settings_fields_google_client_id = () => {
  return `Client ID`;
};
var zh_admin_settings_fields_google_client_id = () => {
  return `客户端 ID`;
};
/**
 * | output |
 * | --- |
 * | "Client ID" |
 *
 * @param {Admin_Settings_Fields_Google_Client_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_google_client_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_google_client_id(inputs);
  return zh_admin_settings_fields_google_client_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_google_client_secret.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_Client_SecretInputs */
var en_admin_settings_fields_google_client_secret = () => {
  return `Client Secret`;
};
var zh_admin_settings_fields_google_client_secret = () => {
  return `客户端密钥`;
};
/**
 * | output |
 * | --- |
 * | "Client Secret" |
 *
 * @param {Admin_Settings_Fields_Google_Client_SecretInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_google_client_secret = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_google_client_secret(inputs);
  return zh_admin_settings_fields_google_client_secret(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_github_auth_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Github_Auth_EnabledInputs */
var en_admin_settings_fields_github_auth_enabled = () => {
  return `Enable GitHub auth`;
};
var zh_admin_settings_fields_github_auth_enabled = () => {
  return `启用 GitHub 认证`;
};
/**
 * | output |
 * | --- |
 * | "Enable GitHub auth" |
 *
 * @param {Admin_Settings_Fields_Github_Auth_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_github_auth_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_github_auth_enabled(inputs);
  return zh_admin_settings_fields_github_auth_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_github_client_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Github_Client_IdInputs */
var en_admin_settings_fields_github_client_id = () => {
  return `Client ID`;
};
var zh_admin_settings_fields_github_client_id = () => {
  return `客户端 ID`;
};
/**
 * | output |
 * | --- |
 * | "Client ID" |
 *
 * @param {Admin_Settings_Fields_Github_Client_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_github_client_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_github_client_id(inputs);
  return zh_admin_settings_fields_github_client_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_github_client_secret.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Github_Client_SecretInputs */
var en_admin_settings_fields_github_client_secret = () => {
  return `Client Secret`;
};
var zh_admin_settings_fields_github_client_secret = () => {
  return `客户端密钥`;
};
/**
 * | output |
 * | --- |
 * | "Client Secret" |
 *
 * @param {Admin_Settings_Fields_Github_Client_SecretInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_github_client_secret = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_github_client_secret(inputs);
  return zh_admin_settings_fields_github_client_secret(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_invite_code_required.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Invite_Code_RequiredInputs */
var en_admin_settings_fields_invite_code_required = () => {
  return `Require invite code on sign up`;
};
var zh_admin_settings_fields_invite_code_required = () => {
  return `注册时需要邀请码`;
};
/**
 * | output |
 * | --- |
 * | "Require invite code on sign up" |
 *
 * @param {Admin_Settings_Fields_Invite_Code_RequiredInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_invite_code_required = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_invite_code_required(inputs);
  return zh_admin_settings_fields_invite_code_required(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_select_payment_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Select_Payment_EnabledInputs */
var en_admin_settings_fields_select_payment_enabled = () => {
  return `Show payment method selector`;
};
var zh_admin_settings_fields_select_payment_enabled = () => {
  return `显示支付方式选择器`;
};
/**
 * | output |
 * | --- |
 * | "Show payment method selector" |
 *
 * @param {Admin_Settings_Fields_Select_Payment_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_select_payment_enabled = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_select_payment_enabled(inputs);
  return zh_admin_settings_fields_select_payment_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_default_payment_provider.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Default_Payment_ProviderInputs */
var en_admin_settings_fields_default_payment_provider = () => {
  return `Default provider`;
};
var zh_admin_settings_fields_default_payment_provider = () => {
  return `默认支付方式`;
};
/**
 * | output |
 * | --- |
 * | "Default provider" |
 *
 * @param {Admin_Settings_Fields_Default_Payment_ProviderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_default_payment_provider = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_default_payment_provider(inputs);
  return zh_admin_settings_fields_default_payment_provider(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_stripe_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Stripe_EnabledInputs */
var en_admin_settings_fields_stripe_enabled = () => {
  return `Enable Stripe`;
};
var zh_admin_settings_fields_stripe_enabled = () => {
  return `启用 Stripe`;
};
/**
 * | output |
 * | --- |
 * | "Enable Stripe" |
 *
 * @param {Admin_Settings_Fields_Stripe_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_stripe_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_stripe_enabled(inputs);
  return zh_admin_settings_fields_stripe_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_stripe_secret_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Stripe_Secret_KeyInputs */
var en_admin_settings_fields_stripe_secret_key = () => {
  return `Secret Key`;
};
var zh_admin_settings_fields_stripe_secret_key = () => {
  return `密钥`;
};
/**
 * | output |
 * | --- |
 * | "Secret Key" |
 *
 * @param {Admin_Settings_Fields_Stripe_Secret_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_stripe_secret_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_stripe_secret_key(inputs);
  return zh_admin_settings_fields_stripe_secret_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_stripe_publishable_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Stripe_Publishable_KeyInputs */
var en_admin_settings_fields_stripe_publishable_key = () => {
  return `Publishable Key`;
};
var zh_admin_settings_fields_stripe_publishable_key = () => {
  return `公钥`;
};
/**
 * | output |
 * | --- |
 * | "Publishable Key" |
 *
 * @param {Admin_Settings_Fields_Stripe_Publishable_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_stripe_publishable_key = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_stripe_publishable_key(inputs);
  return zh_admin_settings_fields_stripe_publishable_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_stripe_signing_secret.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Stripe_Signing_SecretInputs */
var en_admin_settings_fields_stripe_signing_secret = () => {
  return `Webhook Signing Secret`;
};
var zh_admin_settings_fields_stripe_signing_secret = () => {
  return `Webhook 签名密钥`;
};
/**
 * | output |
 * | --- |
 * | "Webhook Signing Secret" |
 *
 * @param {Admin_Settings_Fields_Stripe_Signing_SecretInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_stripe_signing_secret = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_stripe_signing_secret(inputs);
  return zh_admin_settings_fields_stripe_signing_secret(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_creem_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_EnabledInputs */
var en_admin_settings_fields_creem_enabled = () => {
  return `Enable Creem`;
};
var zh_admin_settings_fields_creem_enabled = () => {
  return `启用 Creem`;
};
/**
 * | output |
 * | --- |
 * | "Enable Creem" |
 *
 * @param {Admin_Settings_Fields_Creem_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_creem_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_creem_enabled(inputs);
  return zh_admin_settings_fields_creem_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_creem_environment.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_EnvironmentInputs */
var en_admin_settings_fields_creem_environment = () => {
  return `Environment`;
};
var zh_admin_settings_fields_creem_environment = () => {
  return `环境`;
};
/**
 * | output |
 * | --- |
 * | "Environment" |
 *
 * @param {Admin_Settings_Fields_Creem_EnvironmentInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_creem_environment = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_creem_environment(inputs);
  return zh_admin_settings_fields_creem_environment(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_creem_api_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_Api_KeyInputs */
var en_admin_settings_fields_creem_api_key = () => {
  return `API Key`;
};
var zh_admin_settings_fields_creem_api_key = () => {
  return `API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "API Key" |
 *
 * @param {Admin_Settings_Fields_Creem_Api_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_creem_api_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_creem_api_key(inputs);
  return zh_admin_settings_fields_creem_api_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_creem_signing_secret.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_Signing_SecretInputs */
var en_admin_settings_fields_creem_signing_secret = () => {
  return `Signing Secret`;
};
var zh_admin_settings_fields_creem_signing_secret = () => {
  return `Signing Secret`;
};
/**
 * | output |
 * | --- |
 * | "Signing Secret" |
 *
 * @param {Admin_Settings_Fields_Creem_Signing_SecretInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_creem_signing_secret = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_creem_signing_secret(inputs);
  return zh_admin_settings_fields_creem_signing_secret(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_creem_product_ids_mapping.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_Product_Ids_MappingInputs */
var en_admin_settings_fields_creem_product_ids_mapping = () => {
  return `Product IDs Mapping`;
};
var zh_admin_settings_fields_creem_product_ids_mapping = () => {
  return `产品 ID 映射`;
};
/**
 * | output |
 * | --- |
 * | "Product IDs Mapping" |
 *
 * @param {Admin_Settings_Fields_Creem_Product_Ids_MappingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_creem_product_ids_mapping = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_creem_product_ids_mapping(inputs);
  return zh_admin_settings_fields_creem_product_ids_mapping(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_creem_test_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_Test_AmountInputs */
var en_admin_settings_fields_creem_test_amount = () => {
  return `Test amount (cents)`;
};
var zh_admin_settings_fields_creem_test_amount = () => {
  return `测试金额（分）`;
};
/**
 * | output |
 * | --- |
 * | "Test amount (cents)" |
 *
 * @param {Admin_Settings_Fields_Creem_Test_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_creem_test_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_creem_test_amount(inputs);
  return zh_admin_settings_fields_creem_test_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_paypal_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_EnabledInputs */
var en_admin_settings_fields_paypal_enabled = () => {
  return `Enable PayPal`;
};
var zh_admin_settings_fields_paypal_enabled = () => {
  return `启用 PayPal`;
};
/**
 * | output |
 * | --- |
 * | "Enable PayPal" |
 *
 * @param {Admin_Settings_Fields_Paypal_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_paypal_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_paypal_enabled(inputs);
  return zh_admin_settings_fields_paypal_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_paypal_client_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_Client_IdInputs */
var en_admin_settings_fields_paypal_client_id = () => {
  return `Client ID`;
};
var zh_admin_settings_fields_paypal_client_id = () => {
  return `客户端 ID`;
};
/**
 * | output |
 * | --- |
 * | "Client ID" |
 *
 * @param {Admin_Settings_Fields_Paypal_Client_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_paypal_client_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_paypal_client_id(inputs);
  return zh_admin_settings_fields_paypal_client_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_paypal_client_secret.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_Client_SecretInputs */
var en_admin_settings_fields_paypal_client_secret = () => {
  return `Client Secret`;
};
var zh_admin_settings_fields_paypal_client_secret = () => {
  return `客户端密钥`;
};
/**
 * | output |
 * | --- |
 * | "Client Secret" |
 *
 * @param {Admin_Settings_Fields_Paypal_Client_SecretInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_paypal_client_secret = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_paypal_client_secret(inputs);
  return zh_admin_settings_fields_paypal_client_secret(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_paypal_webhook_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_Webhook_IdInputs */
var en_admin_settings_fields_paypal_webhook_id = () => {
  return `Webhook ID`;
};
var zh_admin_settings_fields_paypal_webhook_id = () => {
  return `Webhook ID`;
};
/**
 * | output |
 * | --- |
 * | "Webhook ID" |
 *
 * @param {Admin_Settings_Fields_Paypal_Webhook_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_paypal_webhook_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_paypal_webhook_id(inputs);
  return zh_admin_settings_fields_paypal_webhook_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_paypal_environment.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_EnvironmentInputs */
var en_admin_settings_fields_paypal_environment = () => {
  return `Environment`;
};
var zh_admin_settings_fields_paypal_environment = () => {
  return `环境`;
};
/**
 * | output |
 * | --- |
 * | "Environment" |
 *
 * @param {Admin_Settings_Fields_Paypal_EnvironmentInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_paypal_environment = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_paypal_environment(inputs);
  return zh_admin_settings_fields_paypal_environment(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_paypal_test_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_Test_AmountInputs */
var en_admin_settings_fields_paypal_test_amount = () => {
  return `Test amount (cents)`;
};
var zh_admin_settings_fields_paypal_test_amount = () => {
  return `测试金额（分）`;
};
/**
 * | output |
 * | --- |
 * | "Test amount (cents)" |
 *
 * @param {Admin_Settings_Fields_Paypal_Test_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_paypal_test_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_paypal_test_amount(inputs);
  return zh_admin_settings_fields_paypal_test_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_alipay_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_EnabledInputs */
var en_admin_settings_fields_alipay_enabled = () => {
  return `Enable Alipay`;
};
var zh_admin_settings_fields_alipay_enabled = () => {
  return `启用支付宝`;
};
/**
 * | output |
 * | --- |
 * | "Enable Alipay" |
 *
 * @param {Admin_Settings_Fields_Alipay_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_alipay_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_alipay_enabled(inputs);
  return zh_admin_settings_fields_alipay_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_alipay_app_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_App_IdInputs */
var en_admin_settings_fields_alipay_app_id = () => {
  return `App ID`;
};
var zh_admin_settings_fields_alipay_app_id = () => {
  return `应用 ID`;
};
/**
 * | output |
 * | --- |
 * | "App ID" |
 *
 * @param {Admin_Settings_Fields_Alipay_App_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_alipay_app_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_alipay_app_id(inputs);
  return zh_admin_settings_fields_alipay_app_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_alipay_private_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_Private_KeyInputs */
var en_admin_settings_fields_alipay_private_key = () => {
  return `Private Key (RSA2)`;
};
var zh_admin_settings_fields_alipay_private_key = () => {
  return `应用私钥（RSA2）`;
};
/**
 * | output |
 * | --- |
 * | "Private Key (RSA2)" |
 *
 * @param {Admin_Settings_Fields_Alipay_Private_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_alipay_private_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_alipay_private_key(inputs);
  return zh_admin_settings_fields_alipay_private_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_alipay_public_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_Public_KeyInputs */
var en_admin_settings_fields_alipay_public_key = () => {
  return `Alipay Public Key`;
};
var zh_admin_settings_fields_alipay_public_key = () => {
  return `支付宝公钥`;
};
/**
 * | output |
 * | --- |
 * | "Alipay Public Key" |
 *
 * @param {Admin_Settings_Fields_Alipay_Public_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_alipay_public_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_alipay_public_key(inputs);
  return zh_admin_settings_fields_alipay_public_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_alipay_notify_url.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_Notify_UrlInputs */
var en_admin_settings_fields_alipay_notify_url = () => {
  return `Notify URL (Webhook)`;
};
var zh_admin_settings_fields_alipay_notify_url = () => {
  return `回调地址（Webhook）`;
};
/**
 * | output |
 * | --- |
 * | "Notify URL (Webhook)" |
 *
 * @param {Admin_Settings_Fields_Alipay_Notify_UrlInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_alipay_notify_url = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_alipay_notify_url(inputs);
  return zh_admin_settings_fields_alipay_notify_url(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_alipay_test_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_Test_AmountInputs */
var en_admin_settings_fields_alipay_test_amount = () => {
  return `Test amount (cents)`;
};
var zh_admin_settings_fields_alipay_test_amount = () => {
  return `测试金额（分）`;
};
/**
 * | output |
 * | --- |
 * | "Test amount (cents)" |
 *
 * @param {Admin_Settings_Fields_Alipay_Test_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_alipay_test_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_alipay_test_amount(inputs);
  return zh_admin_settings_fields_alipay_test_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_wechat_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_EnabledInputs */
var en_admin_settings_fields_wechat_enabled = () => {
  return `Enable WeChat Pay`;
};
var zh_admin_settings_fields_wechat_enabled = () => {
  return `启用微信支付`;
};
/**
 * | output |
 * | --- |
 * | "Enable WeChat Pay" |
 *
 * @param {Admin_Settings_Fields_Wechat_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_wechat_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_wechat_enabled(inputs);
  return zh_admin_settings_fields_wechat_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_wechat_app_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_App_IdInputs */
var en_admin_settings_fields_wechat_app_id = () => {
  return `AppID`;
};
var zh_admin_settings_fields_wechat_app_id = () => {
  return `AppID`;
};
/**
 * | output |
 * | --- |
 * | "AppID" |
 *
 * @param {Admin_Settings_Fields_Wechat_App_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_wechat_app_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_wechat_app_id(inputs);
  return zh_admin_settings_fields_wechat_app_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_wechat_mch_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Mch_IdInputs */
var en_admin_settings_fields_wechat_mch_id = () => {
  return `Merchant ID`;
};
var zh_admin_settings_fields_wechat_mch_id = () => {
  return `商户号`;
};
/**
 * | output |
 * | --- |
 * | "Merchant ID" |
 *
 * @param {Admin_Settings_Fields_Wechat_Mch_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_wechat_mch_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_wechat_mch_id(inputs);
  return zh_admin_settings_fields_wechat_mch_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_wechat_api_v3_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Api_V3_KeyInputs */
var en_admin_settings_fields_wechat_api_v3_key = () => {
  return `APIv3 Key`;
};
var zh_admin_settings_fields_wechat_api_v3_key = () => {
  return `APIv3 密钥`;
};
/**
 * | output |
 * | --- |
 * | "APIv3 Key" |
 *
 * @param {Admin_Settings_Fields_Wechat_Api_V3_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_wechat_api_v3_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_wechat_api_v3_key(inputs);
  return zh_admin_settings_fields_wechat_api_v3_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_wechat_private_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Private_KeyInputs */
var en_admin_settings_fields_wechat_private_key = () => {
  return `Merchant Private Key (PEM)`;
};
var zh_admin_settings_fields_wechat_private_key = () => {
  return `商户私钥（PEM）`;
};
/**
 * | output |
 * | --- |
 * | "Merchant Private Key (PEM)" |
 *
 * @param {Admin_Settings_Fields_Wechat_Private_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_wechat_private_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_wechat_private_key(inputs);
  return zh_admin_settings_fields_wechat_private_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_wechat_serial_no.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Serial_NoInputs */
var en_admin_settings_fields_wechat_serial_no = () => {
  return `Certificate Serial No`;
};
var zh_admin_settings_fields_wechat_serial_no = () => {
  return `证书序列号`;
};
/**
 * | output |
 * | --- |
 * | "Certificate Serial No" |
 *
 * @param {Admin_Settings_Fields_Wechat_Serial_NoInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_wechat_serial_no = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_wechat_serial_no(inputs);
  return zh_admin_settings_fields_wechat_serial_no(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_wechat_notify_url.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Notify_UrlInputs */
var en_admin_settings_fields_wechat_notify_url = () => {
  return `Notify URL (Webhook)`;
};
var zh_admin_settings_fields_wechat_notify_url = () => {
  return `回调地址（Webhook）`;
};
/**
 * | output |
 * | --- |
 * | "Notify URL (Webhook)" |
 *
 * @param {Admin_Settings_Fields_Wechat_Notify_UrlInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_wechat_notify_url = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_wechat_notify_url(inputs);
  return zh_admin_settings_fields_wechat_notify_url(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_wechat_test_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Test_AmountInputs */
var en_admin_settings_fields_wechat_test_amount = () => {
  return `Test amount (cents)`;
};
var zh_admin_settings_fields_wechat_test_amount = () => {
  return `测试金额（分）`;
};
/**
 * | output |
 * | --- |
 * | "Test amount (cents)" |
 *
 * @param {Admin_Settings_Fields_Wechat_Test_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_wechat_test_amount = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_wechat_test_amount(inputs);
  return zh_admin_settings_fields_wechat_test_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_email_provider.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Email_ProviderInputs */
var en_admin_settings_fields_email_provider = () => {
  return `Email Provider`;
};
var zh_admin_settings_fields_email_provider = () => {
  return `邮件服务商`;
};
/**
 * | output |
 * | --- |
 * | "Email Provider" |
 *
 * @param {Admin_Settings_Fields_Email_ProviderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_email_provider = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_email_provider(inputs);
  return zh_admin_settings_fields_email_provider(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_resend_api_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Resend_Api_KeyInputs */
var en_admin_settings_fields_resend_api_key = () => {
  return `API Key`;
};
var zh_admin_settings_fields_resend_api_key = () => {
  return `API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "API Key" |
 *
 * @param {Admin_Settings_Fields_Resend_Api_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_resend_api_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_resend_api_key(inputs);
  return zh_admin_settings_fields_resend_api_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_resend_sender_email.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Resend_Sender_EmailInputs */
var en_admin_settings_fields_resend_sender_email = () => {
  return `Sender Email`;
};
var zh_admin_settings_fields_resend_sender_email = () => {
  return `发件地址`;
};
/**
 * | output |
 * | --- |
 * | "Sender Email" |
 *
 * @param {Admin_Settings_Fields_Resend_Sender_EmailInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_resend_sender_email = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_resend_sender_email(inputs);
  return zh_admin_settings_fields_resend_sender_email(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_cloudflare_email_api_token.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Cloudflare_Email_Api_TokenInputs */
var en_admin_settings_fields_cloudflare_email_api_token = () => {
  return `API Token`;
};
var zh_admin_settings_fields_cloudflare_email_api_token = () => {
  return `API Token`;
};
/**
 * | output |
 * | --- |
 * | "API Token" |
 *
 * @param {Admin_Settings_Fields_Cloudflare_Email_Api_TokenInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_cloudflare_email_api_token = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_cloudflare_email_api_token(inputs);
  return zh_admin_settings_fields_cloudflare_email_api_token(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_cloudflare_email_account_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Cloudflare_Email_Account_IdInputs */
var en_admin_settings_fields_cloudflare_email_account_id = () => {
  return `Account ID`;
};
var zh_admin_settings_fields_cloudflare_email_account_id = () => {
  return `Account ID`;
};
/**
 * | output |
 * | --- |
 * | "Account ID" |
 *
 * @param {Admin_Settings_Fields_Cloudflare_Email_Account_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_cloudflare_email_account_id = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_cloudflare_email_account_id(inputs);
  return zh_admin_settings_fields_cloudflare_email_account_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_cloudflare_email_sender_email.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Cloudflare_Email_Sender_EmailInputs */
var en_admin_settings_fields_cloudflare_email_sender_email = () => {
  return `Sender Email`;
};
var zh_admin_settings_fields_cloudflare_email_sender_email = () => {
  return `发件地址`;
};
/**
 * | output |
 * | --- |
 * | "Sender Email" |
 *
 * @param {Admin_Settings_Fields_Cloudflare_Email_Sender_EmailInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_cloudflare_email_sender_email = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_cloudflare_email_sender_email(inputs);
  return zh_admin_settings_fields_cloudflare_email_sender_email(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_r2_access_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_Access_KeyInputs */
var en_admin_settings_fields_r2_access_key = () => {
  return `Cloudflare Access Key`;
};
var zh_admin_settings_fields_r2_access_key = () => {
  return `Cloudflare 访问密钥`;
};
/**
 * | output |
 * | --- |
 * | "Cloudflare Access Key" |
 *
 * @param {Admin_Settings_Fields_R2_Access_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_r2_access_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_r2_access_key(inputs);
  return zh_admin_settings_fields_r2_access_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_r2_secret_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_Secret_KeyInputs */
var en_admin_settings_fields_r2_secret_key = () => {
  return `Cloudflare Secret Key`;
};
var zh_admin_settings_fields_r2_secret_key = () => {
  return `Cloudflare 私有密钥`;
};
/**
 * | output |
 * | --- |
 * | "Cloudflare Secret Key" |
 *
 * @param {Admin_Settings_Fields_R2_Secret_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_r2_secret_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_r2_secret_key(inputs);
  return zh_admin_settings_fields_r2_secret_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_r2_bucket_name.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_Bucket_NameInputs */
var en_admin_settings_fields_r2_bucket_name = () => {
  return `Bucket Name`;
};
var zh_admin_settings_fields_r2_bucket_name = () => {
  return `存储桶名称`;
};
/**
 * | output |
 * | --- |
 * | "Bucket Name" |
 *
 * @param {Admin_Settings_Fields_R2_Bucket_NameInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_r2_bucket_name = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_r2_bucket_name(inputs);
  return zh_admin_settings_fields_r2_bucket_name(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_r2_upload_path.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_Upload_PathInputs */
var en_admin_settings_fields_r2_upload_path = () => {
  return `Upload Path`;
};
var zh_admin_settings_fields_r2_upload_path = () => {
  return `上传路径`;
};
/**
 * | output |
 * | --- |
 * | "Upload Path" |
 *
 * @param {Admin_Settings_Fields_R2_Upload_PathInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_r2_upload_path = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_r2_upload_path(inputs);
  return zh_admin_settings_fields_r2_upload_path(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_r2_endpoint.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_EndpointInputs */
var en_admin_settings_fields_r2_endpoint = () => {
  return `Endpoint`;
};
var zh_admin_settings_fields_r2_endpoint = () => {
  return `端点`;
};
/**
 * | output |
 * | --- |
 * | "Endpoint" |
 *
 * @param {Admin_Settings_Fields_R2_EndpointInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_r2_endpoint = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_r2_endpoint(inputs);
  return zh_admin_settings_fields_r2_endpoint(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_r2_domain.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_DomainInputs */
var en_admin_settings_fields_r2_domain = () => {
  return `Domain`;
};
var zh_admin_settings_fields_r2_domain = () => {
  return `公共域名`;
};
/**
 * | output |
 * | --- |
 * | "Domain" |
 *
 * @param {Admin_Settings_Fields_R2_DomainInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_r2_domain = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_r2_domain(inputs);
  return zh_admin_settings_fields_r2_domain(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_openai_base_url.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Openai_Base_UrlInputs */
var en_admin_settings_fields_openai_base_url = () => {
  return `Base URL`;
};
var zh_admin_settings_fields_openai_base_url = () => {
  return `Base URL`;
};
/**
 * | output |
 * | --- |
 * | "Base URL" |
 *
 * @param {Admin_Settings_Fields_Openai_Base_UrlInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_openai_base_url = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_openai_base_url(inputs);
  return zh_admin_settings_fields_openai_base_url(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_openai_api_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Openai_Api_KeyInputs */
var en_admin_settings_fields_openai_api_key = () => {
  return `API Key`;
};
var zh_admin_settings_fields_openai_api_key = () => {
  return `API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "API Key" |
 *
 * @param {Admin_Settings_Fields_Openai_Api_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_openai_api_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_openai_api_key(inputs);
  return zh_admin_settings_fields_openai_api_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_anthropic_base_url.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Anthropic_Base_UrlInputs */
var en_admin_settings_fields_anthropic_base_url = () => {
  return `Base URL`;
};
var zh_admin_settings_fields_anthropic_base_url = () => {
  return `Base URL`;
};
/**
 * | output |
 * | --- |
 * | "Base URL" |
 *
 * @param {Admin_Settings_Fields_Anthropic_Base_UrlInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_anthropic_base_url = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_anthropic_base_url(inputs);
  return zh_admin_settings_fields_anthropic_base_url(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_anthropic_api_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Anthropic_Api_KeyInputs */
var en_admin_settings_fields_anthropic_api_key = () => {
  return `API Key`;
};
var zh_admin_settings_fields_anthropic_api_key = () => {
  return `API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "API Key" |
 *
 * @param {Admin_Settings_Fields_Anthropic_Api_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_anthropic_api_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_anthropic_api_key(inputs);
  return zh_admin_settings_fields_anthropic_api_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_replicate_api_token.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Replicate_Api_TokenInputs */
var en_admin_settings_fields_replicate_api_token = () => {
  return `API Token`;
};
var zh_admin_settings_fields_replicate_api_token = () => {
  return `API Token`;
};
/**
 * | output |
 * | --- |
 * | "API Token" |
 *
 * @param {Admin_Settings_Fields_Replicate_Api_TokenInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_replicate_api_token = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_replicate_api_token(inputs);
  return zh_admin_settings_fields_replicate_api_token(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_fal_api_key.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Fal_Api_KeyInputs */
var en_admin_settings_fields_fal_api_key = () => {
  return `API Key`;
};
var zh_admin_settings_fields_fal_api_key = () => {
  return `API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "API Key" |
 *
 * @param {Admin_Settings_Fields_Fal_Api_KeyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_fal_api_key = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_fal_api_key(inputs);
  return zh_admin_settings_fields_fal_api_key(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_google_analytics_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_Analytics_IdInputs */
var en_admin_settings_fields_google_analytics_id = () => {
  return `Measurement ID`;
};
var zh_admin_settings_fields_google_analytics_id = () => {
  return `Measurement ID`;
};
/**
 * | output |
 * | --- |
 * | "Measurement ID" |
 *
 * @param {Admin_Settings_Fields_Google_Analytics_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_google_analytics_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_google_analytics_id(inputs);
  return zh_admin_settings_fields_google_analytics_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_plausible_domain.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Plausible_DomainInputs */
var en_admin_settings_fields_plausible_domain = () => {
  return `Domain`;
};
var zh_admin_settings_fields_plausible_domain = () => {
  return `域名`;
};
/**
 * | output |
 * | --- |
 * | "Domain" |
 *
 * @param {Admin_Settings_Fields_Plausible_DomainInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_plausible_domain = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_plausible_domain(inputs);
  return zh_admin_settings_fields_plausible_domain(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_plausible_src.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Plausible_SrcInputs */
var en_admin_settings_fields_plausible_src = () => {
  return `Script Src`;
};
var zh_admin_settings_fields_plausible_src = () => {
  return `脚本地址`;
};
/**
 * | output |
 * | --- |
 * | "Script Src" |
 *
 * @param {Admin_Settings_Fields_Plausible_SrcInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_plausible_src = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_plausible_src(inputs);
  return zh_admin_settings_fields_plausible_src(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_crisp_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Crisp_EnabledInputs */
var en_admin_settings_fields_crisp_enabled = () => {
  return `Enable Crisp`;
};
var zh_admin_settings_fields_crisp_enabled = () => {
  return `启用 Crisp`;
};
/**
 * | output |
 * | --- |
 * | "Enable Crisp" |
 *
 * @param {Admin_Settings_Fields_Crisp_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_crisp_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_crisp_enabled(inputs);
  return zh_admin_settings_fields_crisp_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_crisp_website_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Crisp_Website_IdInputs */
var en_admin_settings_fields_crisp_website_id = () => {
  return `Website ID`;
};
var zh_admin_settings_fields_crisp_website_id = () => {
  return `网站 ID`;
};
/**
 * | output |
 * | --- |
 * | "Website ID" |
 *
 * @param {Admin_Settings_Fields_Crisp_Website_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_crisp_website_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_crisp_website_id(inputs);
  return zh_admin_settings_fields_crisp_website_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_tawk_enabled.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Tawk_EnabledInputs */
var en_admin_settings_fields_tawk_enabled = () => {
  return `Enable Tawk.to`;
};
var zh_admin_settings_fields_tawk_enabled = () => {
  return `启用 Tawk.to`;
};
/**
 * | output |
 * | --- |
 * | "Enable Tawk.to" |
 *
 * @param {Admin_Settings_Fields_Tawk_EnabledInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_tawk_enabled = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_tawk_enabled(inputs);
  return zh_admin_settings_fields_tawk_enabled(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_tawk_property_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Tawk_Property_IdInputs */
var en_admin_settings_fields_tawk_property_id = () => {
  return `Property ID`;
};
var zh_admin_settings_fields_tawk_property_id = () => {
  return `Property ID`;
};
/**
 * | output |
 * | --- |
 * | "Property ID" |
 *
 * @param {Admin_Settings_Fields_Tawk_Property_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_tawk_property_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_tawk_property_id(inputs);
  return zh_admin_settings_fields_tawk_property_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_fields_tawk_widget_id.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Tawk_Widget_IdInputs */
var en_admin_settings_fields_tawk_widget_id = () => {
  return `Widget ID`;
};
var zh_admin_settings_fields_tawk_widget_id = () => {
  return `Widget ID`;
};
/**
 * | output |
 * | --- |
 * | "Widget ID" |
 *
 * @param {Admin_Settings_Fields_Tawk_Widget_IdInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_fields_tawk_widget_id = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_fields_tawk_widget_id(inputs);
  return zh_admin_settings_fields_tawk_widget_id(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_placeholders_creem_product_ids_mapping.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ "\"starter_monthly\": \"prod_xxx\"": NonNullable<unknown> }} Admin_Settings_Placeholders_Creem_Product_Ids_MappingInputs */
var en_admin_settings_placeholders_creem_product_ids_mapping = (i) => {
  return `${i?.['"starter_monthly": "prod_xxx"']}`;
};
var zh_admin_settings_placeholders_creem_product_ids_mapping = (i) => {
  return `${i?.['"starter_monthly": "prod_xxx"']}`;
};
/**
 * | output |
 * | --- |
 * | "{\"starter_monthly\": \"prod_xxx\"}" |
 *
 * @param {Admin_Settings_Placeholders_Creem_Product_Ids_MappingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_placeholders_creem_product_ids_mapping = (
  inputs,
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_placeholders_creem_product_ids_mapping(inputs);
  return zh_admin_settings_placeholders_creem_product_ids_mapping(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_placeholders_creem_test_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Placeholders_Creem_Test_AmountInputs */
var en_admin_settings_placeholders_creem_test_amount = () => {
  return `Leave empty to use real amount, 1 = $0.01`;
};
var zh_admin_settings_placeholders_creem_test_amount = () => {
  return `留空使用实际金额，填 1 则支付 $0.01`;
};
/**
 * | output |
 * | --- |
 * | "Leave empty to use real amount, 1 = $0.01" |
 *
 * @param {Admin_Settings_Placeholders_Creem_Test_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_placeholders_creem_test_amount = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_placeholders_creem_test_amount(inputs);
  return zh_admin_settings_placeholders_creem_test_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_placeholders_paypal_test_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Placeholders_Paypal_Test_AmountInputs */
var en_admin_settings_placeholders_paypal_test_amount = () => {
  return `Leave empty to use real amount, 1 = $0.01`;
};
var zh_admin_settings_placeholders_paypal_test_amount = () => {
  return `留空使用实际金额，填 1 则支付 $0.01`;
};
/**
 * | output |
 * | --- |
 * | "Leave empty to use real amount, 1 = $0.01" |
 *
 * @param {Admin_Settings_Placeholders_Paypal_Test_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_placeholders_paypal_test_amount = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_placeholders_paypal_test_amount(inputs);
  return zh_admin_settings_placeholders_paypal_test_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_placeholders_alipay_test_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Placeholders_Alipay_Test_AmountInputs */
var en_admin_settings_placeholders_alipay_test_amount = () => {
  return `Leave empty to use real amount, 1 = ¥0.01`;
};
var zh_admin_settings_placeholders_alipay_test_amount = () => {
  return `留空使用实际金额，填 1 则支付 ¥0.01`;
};
/**
 * | output |
 * | --- |
 * | "Leave empty to use real amount, 1 = ¥0.01" |
 *
 * @param {Admin_Settings_Placeholders_Alipay_Test_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_placeholders_alipay_test_amount = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_placeholders_alipay_test_amount(inputs);
  return zh_admin_settings_placeholders_alipay_test_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_settings_placeholders_wechat_test_amount.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Placeholders_Wechat_Test_AmountInputs */
var en_admin_settings_placeholders_wechat_test_amount = () => {
  return `Leave empty to use real amount, 1 = ¥0.01`;
};
var zh_admin_settings_placeholders_wechat_test_amount = () => {
  return `留空使用实际金额，填 1 则支付 ¥0.01`;
};
/**
 * | output |
 * | --- |
 * | "Leave empty to use real amount, 1 = ¥0.01" |
 *
 * @param {Admin_Settings_Placeholders_Wechat_Test_AmountInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_settings_placeholders_wechat_test_amount = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_settings_placeholders_wechat_test_amount(inputs);
  return zh_admin_settings_placeholders_wechat_test_amount(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_TitleInputs */
var en_admin_tickets_title = () => {
  return `Support Tickets`;
};
var zh_admin_tickets_title = () => {
  return `工单管理`;
};
/**
 * | output |
 * | --- |
 * | "Support Tickets" |
 *
 * @param {Admin_Tickets_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_title(inputs);
  return zh_admin_tickets_title(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_DescriptionInputs */
var en_admin_tickets_description = () => {
  return `View and reply to user tickets`;
};
var zh_admin_tickets_description = () => {
  return `查看并回复用户提交的工单`;
};
/**
 * | output |
 * | --- |
 * | "View and reply to user tickets" |
 *
 * @param {Admin_Tickets_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_description(inputs);
  return zh_admin_tickets_description(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_title_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Title_ColInputs */
var en_admin_tickets_title_col = () => {
  return `Subject`;
};
var zh_admin_tickets_title_col = () => {
  return `标题`;
};
/**
 * | output |
 * | --- |
 * | "Subject" |
 *
 * @param {Admin_Tickets_Title_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_title_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_title_col(inputs);
  return zh_admin_tickets_title_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_user_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_User_ColInputs */
var en_admin_tickets_user_col = () => {
  return `User`;
};
var zh_admin_tickets_user_col = () => {
  return `用户`;
};
/**
 * | output |
 * | --- |
 * | "User" |
 *
 * @param {Admin_Tickets_User_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_user_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_user_col(inputs);
  return zh_admin_tickets_user_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_status_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_ColInputs */
var en_admin_tickets_status_col = () => {
  return `Status`;
};
var zh_admin_tickets_status_col = () => {
  return `状态`;
};
/**
 * | output |
 * | --- |
 * | "Status" |
 *
 * @param {Admin_Tickets_Status_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_status_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_status_col(inputs);
  return zh_admin_tickets_status_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_updated_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Updated_ColInputs */
var en_admin_tickets_updated_col = () => {
  return `Last Updated`;
};
var zh_admin_tickets_updated_col = () => {
  return `更新时间`;
};
/**
 * | output |
 * | --- |
 * | "Last Updated" |
 *
 * @param {Admin_Tickets_Updated_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_updated_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_updated_col(inputs);
  return zh_admin_tickets_updated_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_actions_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Actions_ColInputs */
var en_admin_tickets_actions_col = () => {
  return `Actions`;
};
var zh_admin_tickets_actions_col = () => {
  return `操作`;
};
/**
 * | output |
 * | --- |
 * | "Actions" |
 *
 * @param {Admin_Tickets_Actions_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_actions_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_actions_col(inputs);
  return zh_admin_tickets_actions_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_tab_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Tab_AllInputs */
var en_admin_tickets_tab_all = () => {
  return `All`;
};
var zh_admin_tickets_tab_all = () => {
  return `全部`;
};
/**
 * | output |
 * | --- |
 * | "All" |
 *
 * @param {Admin_Tickets_Tab_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_tab_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_tab_all(inputs);
  return zh_admin_tickets_tab_all(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_tab_open.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Tab_OpenInputs */
var en_admin_tickets_tab_open = () => {
  return `Open`;
};
var zh_admin_tickets_tab_open = () => {
  return `待处理`;
};
/**
 * | output |
 * | --- |
 * | "Open" |
 *
 * @param {Admin_Tickets_Tab_OpenInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_tab_open = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_tab_open(inputs);
  return zh_admin_tickets_tab_open(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_tab_replied.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Tab_RepliedInputs */
var en_admin_tickets_tab_replied = () => {
  return `In Progress`;
};
var zh_admin_tickets_tab_replied = () => {
  return `处理中`;
};
/**
 * | output |
 * | --- |
 * | "In Progress" |
 *
 * @param {Admin_Tickets_Tab_RepliedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_tab_replied = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_tab_replied(inputs);
  return zh_admin_tickets_tab_replied(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_tab_closed.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Tab_ClosedInputs */
var en_admin_tickets_tab_closed = () => {
  return `Closed`;
};
var zh_admin_tickets_tab_closed = () => {
  return `已关闭`;
};
/**
 * | output |
 * | --- |
 * | "Closed" |
 *
 * @param {Admin_Tickets_Tab_ClosedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_tab_closed = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_tab_closed(inputs);
  return zh_admin_tickets_tab_closed(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_status_open.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_OpenInputs */
var en_admin_tickets_status_open = () => {
  return `Open`;
};
var zh_admin_tickets_status_open = () => {
  return `待处理`;
};
/**
 * | output |
 * | --- |
 * | "Open" |
 *
 * @param {Admin_Tickets_Status_OpenInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_status_open = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_status_open(inputs);
  return zh_admin_tickets_status_open(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_status_replied.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_RepliedInputs */
var en_admin_tickets_status_replied = () => {
  return `In Progress`;
};
var zh_admin_tickets_status_replied = () => {
  return `处理中`;
};
/**
 * | output |
 * | --- |
 * | "In Progress" |
 *
 * @param {Admin_Tickets_Status_RepliedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_status_replied = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_status_replied(inputs);
  return zh_admin_tickets_status_replied(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_status_closed.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_ClosedInputs */
var en_admin_tickets_status_closed = () => {
  return `Closed`;
};
var zh_admin_tickets_status_closed = () => {
  return `已关闭`;
};
/**
 * | output |
 * | --- |
 * | "Closed" |
 *
 * @param {Admin_Tickets_Status_ClosedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_status_closed = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_status_closed(inputs);
  return zh_admin_tickets_status_closed(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_empty.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_EmptyInputs */
var en_admin_tickets_empty = () => {
  return `No tickets`;
};
var zh_admin_tickets_empty = () => {
  return `暂无工单`;
};
/**
 * | output |
 * | --- |
 * | "No tickets" |
 *
 * @param {Admin_Tickets_EmptyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_empty = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_empty(inputs);
  return zh_admin_tickets_empty(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_reply_placeholder.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Reply_PlaceholderInputs */
var en_admin_tickets_reply_placeholder = () => {
  return `Write a reply...`;
};
var zh_admin_tickets_reply_placeholder = () => {
  return `输入回复内容…`;
};
/**
 * | output |
 * | --- |
 * | "Write a reply..." |
 *
 * @param {Admin_Tickets_Reply_PlaceholderInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_reply_placeholder = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_reply_placeholder(inputs);
  return zh_admin_tickets_reply_placeholder(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_reply_submit.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Reply_SubmitInputs */
var en_admin_tickets_reply_submit = () => {
  return `Send Reply`;
};
var zh_admin_tickets_reply_submit = () => {
  return `发送回复`;
};
/**
 * | output |
 * | --- |
 * | "Send Reply" |
 *
 * @param {Admin_Tickets_Reply_SubmitInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_reply_submit = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_reply_submit(inputs);
  return zh_admin_tickets_reply_submit(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_replying.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_ReplyingInputs */
var en_admin_tickets_replying = () => {
  return `Sending...`;
};
var zh_admin_tickets_replying = () => {
  return `发送中…`;
};
/**
 * | output |
 * | --- |
 * | "Sending..." |
 *
 * @param {Admin_Tickets_ReplyingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_replying = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_replying(inputs);
  return zh_admin_tickets_replying(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_reply_success.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Reply_SuccessInputs */
var en_admin_tickets_reply_success = () => {
  return `Reply sent`;
};
var zh_admin_tickets_reply_success = () => {
  return `回复已发送`;
};
/**
 * | output |
 * | --- |
 * | "Reply sent" |
 *
 * @param {Admin_Tickets_Reply_SuccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_reply_success = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_reply_success(inputs);
  return zh_admin_tickets_reply_success(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_status_updated.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_UpdatedInputs */
var en_admin_tickets_status_updated = () => {
  return `Status updated`;
};
var zh_admin_tickets_status_updated = () => {
  return `状态已更新`;
};
/**
 * | output |
 * | --- |
 * | "Status updated" |
 *
 * @param {Admin_Tickets_Status_UpdatedInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_status_updated = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_status_updated(inputs);
  return zh_admin_tickets_status_updated(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_close_ticket.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Close_TicketInputs */
var en_admin_tickets_close_ticket = () => {
  return `Close Ticket`;
};
var zh_admin_tickets_close_ticket = () => {
  return `关闭工单`;
};
/**
 * | output |
 * | --- |
 * | "Close Ticket" |
 *
 * @param {Admin_Tickets_Close_TicketInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_close_ticket = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_close_ticket(inputs);
  return zh_admin_tickets_close_ticket(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_reopen_ticket.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Reopen_TicketInputs */
var en_admin_tickets_reopen_ticket = () => {
  return `Reopen Ticket`;
};
var zh_admin_tickets_reopen_ticket = () => {
  return `重新打开`;
};
/**
 * | output |
 * | --- |
 * | "Reopen Ticket" |
 *
 * @param {Admin_Tickets_Reopen_TicketInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_reopen_ticket = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_reopen_ticket(inputs);
  return zh_admin_tickets_reopen_ticket(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_admin.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_AdminInputs */
var en_admin_tickets_admin = () => {
  return `Admin`;
};
var zh_admin_tickets_admin = () => {
  return `管理员`;
};
/**
 * | output |
 * | --- |
 * | "Admin" |
 *
 * @param {Admin_Tickets_AdminInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_admin = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_admin(inputs);
  return zh_admin_tickets_admin(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_latest_reply_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Latest_Reply_ColInputs */
var en_admin_tickets_latest_reply_col = () => {
  return `Latest Reply`;
};
var zh_admin_tickets_latest_reply_col = () => {
  return `最新回复`;
};
/**
 * | output |
 * | --- |
 * | "Latest Reply" |
 *
 * @param {Admin_Tickets_Latest_Reply_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_latest_reply_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_latest_reply_col(inputs);
  return zh_admin_tickets_latest_reply_col(inputs);
};
//#endregion
//#region src/paraglide/messages/admin_tickets_created_col.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Created_ColInputs */
var en_admin_tickets_created_col = () => {
  return `Created At`;
};
var zh_admin_tickets_created_col = () => {
  return `创建时间`;
};
/**
 * | output |
 * | --- |
 * | "Created At" |
 *
 * @param {Admin_Tickets_Created_ColInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var admin_tickets_created_col = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_admin_tickets_created_col(inputs);
  return zh_admin_tickets_created_col(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_nav_features.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Nav_FeaturesInputs */
var en_landing_nav_features = () => {
  return `Features`;
};
var zh_landing_nav_features = () => {
  return `功能`;
};
/**
 * | output |
 * | --- |
 * | "Features" |
 *
 * @param {Landing_Nav_FeaturesInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_nav_features = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_nav_features(inputs);
  return zh_landing_nav_features(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_nav_pricing.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Nav_PricingInputs */
var en_landing_nav_pricing = () => {
  return `Pricing`;
};
var zh_landing_nav_pricing = () => {
  return `价格`;
};
/**
 * | output |
 * | --- |
 * | "Pricing" |
 *
 * @param {Landing_Nav_PricingInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_nav_pricing = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_nav_pricing(inputs);
  return zh_landing_nav_pricing(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_hero_headline.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Hero_HeadlineInputs */
var en_landing_hero_headline = () => {
  return `The headless engine for your next SaaS.`;
};
var zh_landing_hero_headline = () => {
  return `一小时上线你的 AI 产品`;
};
/**
 * | output |
 * | --- |
 * | "The headless engine for your next SaaS." |
 *
 * @param {Landing_Hero_HeadlineInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_hero_headline = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_hero_headline(inputs);
  return zh_landing_hero_headline(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_hero_subheadline.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Hero_SubheadlineInputs */
var en_landing_hero_subheadline = () => {
  return `Auth, payments, subscriptions, credits, RBAC, CMS, and i18n — all pre-wired. Just build your product on top.`;
};
var zh_landing_hero_subheadline = () => {
  return `认证、支付、订阅、积分、权限、内容管理和国际化 — 全部预置就绪，直接在上面构建你的产品。`;
};
/**
 * | output |
 * | --- |
 * | "Auth, payments, subscriptions, credits, RBAC, CMS, and i18n — all pre-wired. Just build your product on top." |
 *
 * @param {Landing_Hero_SubheadlineInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_hero_subheadline = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_hero_subheadline(inputs);
  return zh_landing_hero_subheadline(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_hero_cta.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Hero_CtaInputs */
var en_landing_hero_cta = () => {
  return `Get Started`;
};
var zh_landing_hero_cta = () => {
  return `立即开始`;
};
/**
 * | output |
 * | --- |
 * | "Get Started" |
 *
 * @param {Landing_Hero_CtaInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_hero_cta = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_hero_cta(inputs);
  return zh_landing_hero_cta(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_hero_secondary.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Hero_SecondaryInputs */
var en_landing_hero_secondary = () => {
  return `Dashboard`;
};
var zh_landing_hero_secondary = () => {
  return `控制台`;
};
/**
 * | output |
 * | --- |
 * | "Dashboard" |
 *
 * @param {Landing_Hero_SecondaryInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_hero_secondary = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_hero_secondary(inputs);
  return zh_landing_hero_secondary(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_chips_auth.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_AuthInputs */
var en_landing_chips_auth = () => {
  return `Authentication`;
};
var zh_landing_chips_auth = () => {
  return `身份认证`;
};
/**
 * | output |
 * | --- |
 * | "Authentication" |
 *
 * @param {Landing_Chips_AuthInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_chips_auth = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_chips_auth(inputs);
  return zh_landing_chips_auth(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_chips_payment.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_PaymentInputs */
var en_landing_chips_payment = () => {
  return `Payments`;
};
var zh_landing_chips_payment = () => {
  return `支付系统`;
};
/**
 * | output |
 * | --- |
 * | "Payments" |
 *
 * @param {Landing_Chips_PaymentInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_chips_payment = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_chips_payment(inputs);
  return zh_landing_chips_payment(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_chips_subscription.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_SubscriptionInputs */
var en_landing_chips_subscription = () => {
  return `Subscriptions`;
};
var zh_landing_chips_subscription = () => {
  return `订阅管理`;
};
/**
 * | output |
 * | --- |
 * | "Subscriptions" |
 *
 * @param {Landing_Chips_SubscriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_chips_subscription = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_chips_subscription(inputs);
  return zh_landing_chips_subscription(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_chips_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_CreditsInputs */
var en_landing_chips_credits = () => {
  return `Credits`;
};
var zh_landing_chips_credits = () => {
  return `积分系统`;
};
/**
 * | output |
 * | --- |
 * | "Credits" |
 *
 * @param {Landing_Chips_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_chips_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_chips_credits(inputs);
  return zh_landing_chips_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_chips_rbac.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_RbacInputs */
var en_landing_chips_rbac = () => {
  return `RBAC`;
};
var zh_landing_chips_rbac = () => {
  return `权限管理`;
};
/**
 * | output |
 * | --- |
 * | "RBAC" |
 *
 * @param {Landing_Chips_RbacInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_chips_rbac = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_chips_rbac(inputs);
  return zh_landing_chips_rbac(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_chips_i18n.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_I18nInputs */
var en_landing_chips_i18n = () => {
  return `i18n`;
};
var zh_landing_chips_i18n = () => {
  return `国际化`;
};
/**
 * | output |
 * | --- |
 * | "i18n" |
 *
 * @param {Landing_Chips_I18nInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_chips_i18n = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_chips_i18n(inputs);
  return zh_landing_chips_i18n(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_chips_cms.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_CmsInputs */
var en_landing_chips_cms = () => {
  return `CMS`;
};
var zh_landing_chips_cms = () => {
  return `内容管理`;
};
/**
 * | output |
 * | --- |
 * | "CMS" |
 *
 * @param {Landing_Chips_CmsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_chips_cms = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_chips_cms(inputs);
  return zh_landing_chips_cms(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_chips_apikeys.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_ApikeysInputs */
var en_landing_chips_apikeys = () => {
  return `API Keys`;
};
var zh_landing_chips_apikeys = () => {
  return `API 密钥`;
};
/**
 * | output |
 * | --- |
 * | "API Keys" |
 *
 * @param {Landing_Chips_ApikeysInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_chips_apikeys = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_chips_apikeys(inputs);
  return zh_landing_chips_apikeys(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_TitleInputs */
var en_landing_features_title = () => {
  return `Everything you need to ship`;
};
var zh_landing_features_title = () => {
  return `开箱即用的完整功能`;
};
/**
 * | output |
 * | --- |
 * | "Everything you need to ship" |
 *
 * @param {Landing_Features_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_title(inputs);
  return zh_landing_features_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_DescriptionInputs */
var en_landing_features_description = () => {
  return `Pre-wired business logic so you can focus on building your product.`;
};
var zh_landing_features_description = () => {
  return `预置的业务逻辑，让你专注于产品本身。`;
};
/**
 * | output |
 * | --- |
 * | "Pre-wired business logic so you can focus on building your product." |
 *
 * @param {Landing_Features_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_description(inputs);
  return zh_landing_features_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_auth_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Auth_TitleInputs */
var en_landing_features_auth_title = () => {
  return `Authentication`;
};
var zh_landing_features_auth_title = () => {
  return `身份认证`;
};
/**
 * | output |
 * | --- |
 * | "Authentication" |
 *
 * @param {Landing_Features_Auth_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_auth_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_auth_title(inputs);
  return zh_landing_features_auth_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_auth_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Auth_DescriptionInputs */
var en_landing_features_auth_description = () => {
  return `Email/password, Google, and GitHub OAuth — ready out of the box with session management and account linking.`;
};
var zh_landing_features_auth_description = () => {
  return `邮箱密码、Google、GitHub OAuth 登录，开箱即用，自带会话管理和账号关联。`;
};
/**
 * | output |
 * | --- |
 * | "Email/password, Google, and GitHub OAuth — ready out of the box with session management and account linking." |
 *
 * @param {Landing_Features_Auth_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_auth_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_auth_description(inputs);
  return zh_landing_features_auth_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_payment_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Payment_TitleInputs */
var en_landing_features_payment_title = () => {
  return `Payments`;
};
var zh_landing_features_payment_title = () => {
  return `支付系统`;
};
/**
 * | output |
 * | --- |
 * | "Payments" |
 *
 * @param {Landing_Features_Payment_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_payment_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_payment_title(inputs);
  return zh_landing_features_payment_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_payment_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Payment_DescriptionInputs */
var en_landing_features_payment_description = () => {
  return `Stripe, PayPal, Alipay, WeChat Pay — checkout, subscriptions, webhooks, and order management.`;
};
var zh_landing_features_payment_description = () => {
  return `Stripe、PayPal、支付宝、微信支付 — 结账、订阅、Webhook 和订单管理。`;
};
/**
 * | output |
 * | --- |
 * | "Stripe, PayPal, Alipay, WeChat Pay — checkout, subscriptions, webhooks, and order management." |
 *
 * @param {Landing_Features_Payment_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_payment_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_payment_description(inputs);
  return zh_landing_features_payment_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_rbac_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Rbac_TitleInputs */
var en_landing_features_rbac_title = () => {
  return `Roles & Permissions`;
};
var zh_landing_features_rbac_title = () => {
  return `角色与权限`;
};
/**
 * | output |
 * | --- |
 * | "Roles & Permissions" |
 *
 * @param {Landing_Features_Rbac_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_rbac_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_rbac_title(inputs);
  return zh_landing_features_rbac_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_rbac_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Rbac_DescriptionInputs */
var en_landing_features_rbac_description = () => {
  return `Fine-grained RBAC with wildcard matching. Full admin panel for managing users, roles, and permissions.`;
};
var zh_landing_features_rbac_description = () => {
  return `细粒度的 RBAC 权限控制，支持通配符匹配。完整的管理后台管理用户、角色和权限。`;
};
/**
 * | output |
 * | --- |
 * | "Fine-grained RBAC with wildcard matching. Full admin panel for managing users, roles, and permissions." |
 *
 * @param {Landing_Features_Rbac_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_rbac_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_rbac_description(inputs);
  return zh_landing_features_rbac_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_i18n_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_I18n_TitleInputs */
var en_landing_features_i18n_title = () => {
  return `Internationalization`;
};
var zh_landing_features_i18n_title = () => {
  return `国际化`;
};
/**
 * | output |
 * | --- |
 * | "Internationalization" |
 *
 * @param {Landing_Features_I18n_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_i18n_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_i18n_title(inputs);
  return zh_landing_features_i18n_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_i18n_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_I18n_DescriptionInputs */
var en_landing_features_i18n_description = () => {
  return `English and Chinese built-in with locale-aware routing. Easy to extend with additional languages.`;
};
var zh_landing_features_i18n_description = () => {
  return `内置中英文支持，路由感知语言切换，轻松扩展更多语言。`;
};
/**
 * | output |
 * | --- |
 * | "English and Chinese built-in with locale-aware routing. Easy to extend with additional languages." |
 *
 * @param {Landing_Features_I18n_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_i18n_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_i18n_description(inputs);
  return zh_landing_features_i18n_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_cms_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Cms_TitleInputs */
var en_landing_features_cms_title = () => {
  return `Content Management`;
};
var zh_landing_features_cms_title = () => {
  return `内容管理`;
};
/**
 * | output |
 * | --- |
 * | "Content Management" |
 *
 * @param {Landing_Features_Cms_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_cms_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_cms_title(inputs);
  return zh_landing_features_cms_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_cms_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Cms_DescriptionInputs */
var en_landing_features_cms_description = () => {
  return `Categories and posts with full CRUD, status management, and admin panel — build your blog or docs.`;
};
var zh_landing_features_cms_description = () => {
  return `分类和文章的完整 CRUD，支持状态管理和管理后台 — 快速搭建博客或文档。`;
};
/**
 * | output |
 * | --- |
 * | "Categories and posts with full CRUD, status management, and admin panel — build your blog or docs." |
 *
 * @param {Landing_Features_Cms_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_cms_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_cms_description(inputs);
  return zh_landing_features_cms_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_credits_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Credits_TitleInputs */
var en_landing_features_credits_title = () => {
  return `Credit System`;
};
var zh_landing_features_credits_title = () => {
  return `积分系统`;
};
/**
 * | output |
 * | --- |
 * | "Credit System" |
 *
 * @param {Landing_Features_Credits_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_credits_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_credits_title(inputs);
  return zh_landing_features_credits_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_features_credits_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Credits_DescriptionInputs */
var en_landing_features_credits_description = () => {
  return `FIFO consumption, expiration, auto-grant on signup, and revocation — ready for usage-based billing.`;
};
var zh_landing_features_credits_description = () => {
  return `FIFO 消费、过期控制、注册自动发放和撤销 — 为按量计费做好准备。`;
};
/**
 * | output |
 * | --- |
 * | "FIFO consumption, expiration, auto-grant on signup, and revocation — ready for usage-based billing." |
 *
 * @param {Landing_Features_Credits_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_features_credits_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_features_credits_description(inputs);
  return zh_landing_features_credits_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_TitleInputs */
var en_landing_pricing_title = () => {
  return `Pricing`;
};
var zh_landing_pricing_title = () => {
  return `价格`;
};
/**
 * | output |
 * | --- |
 * | "Pricing" |
 *
 * @param {Landing_Pricing_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_title(inputs);
  return zh_landing_pricing_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_DescriptionInputs */
var en_landing_pricing_description = () => {
  return `Choose the plan that works for you.`;
};
var zh_landing_pricing_description = () => {
  return `选择适合你的方案。`;
};
/**
 * | output |
 * | --- |
 * | "Choose the plan that works for you." |
 *
 * @param {Landing_Pricing_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_description(inputs);
  return zh_landing_pricing_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_monthly.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_MonthlyInputs */
var en_landing_pricing_monthly = () => {
  return `Monthly`;
};
var zh_landing_pricing_monthly = () => {
  return `月付`;
};
/**
 * | output |
 * | --- |
 * | "Monthly" |
 *
 * @param {Landing_Pricing_MonthlyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_monthly = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_monthly(inputs);
  return zh_landing_pricing_monthly(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_yearly.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_YearlyInputs */
var en_landing_pricing_yearly = () => {
  return `Yearly`;
};
var zh_landing_pricing_yearly = () => {
  return `年付`;
};
/**
 * | output |
 * | --- |
 * | "Yearly" |
 *
 * @param {Landing_Pricing_YearlyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_yearly = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_yearly(inputs);
  return zh_landing_pricing_yearly(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_lifetime.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_LifetimeInputs */
var en_landing_pricing_lifetime = () => {
  return `Lifetime`;
};
var zh_landing_pricing_lifetime = () => {
  return `买断`;
};
/**
 * | output |
 * | --- |
 * | "Lifetime" |
 *
 * @param {Landing_Pricing_LifetimeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_lifetime = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_lifetime(inputs);
  return zh_landing_pricing_lifetime(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_popular.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_PopularInputs */
var en_landing_pricing_popular = () => {
  return `Popular`;
};
var zh_landing_pricing_popular = () => {
  return `热门`;
};
/**
 * | output |
 * | --- |
 * | "Popular" |
 *
 * @param {Landing_Pricing_PopularInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_popular = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_popular(inputs);
  return zh_landing_pricing_popular(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_best_value.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Best_ValueInputs */
var en_landing_pricing_best_value = () => {
  return `Best value`;
};
var zh_landing_pricing_best_value = () => {
  return `超值`;
};
/**
 * | output |
 * | --- |
 * | "Best value" |
 *
 * @param {Landing_Pricing_Best_ValueInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_best_value = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_best_value(inputs);
  return zh_landing_pricing_best_value(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_buy_lifetime.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Buy_LifetimeInputs */
var en_landing_pricing_buy_lifetime = () => {
  return `Buy once`;
};
var zh_landing_pricing_buy_lifetime = () => {
  return `一次买断`;
};
/**
 * | output |
 * | --- |
 * | "Buy once" |
 *
 * @param {Landing_Pricing_Buy_LifetimeInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_buy_lifetime = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_buy_lifetime(inputs);
  return zh_landing_pricing_buy_lifetime(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_starter.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_StarterInputs */
var en_landing_pricing_starter = () => {
  return `Starter`;
};
var zh_landing_pricing_starter = () => {
  return `入门版`;
};
/**
 * | output |
 * | --- |
 * | "Starter" |
 *
 * @param {Landing_Pricing_StarterInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_starter = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_starter(inputs);
  return zh_landing_pricing_starter(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_starter_desc.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Starter_DescInputs */
var en_landing_pricing_starter_desc = () => {
  return `For individuals`;
};
var zh_landing_pricing_starter_desc = () => {
  return `适合个人用户`;
};
/**
 * | output |
 * | --- |
 * | "For individuals" |
 *
 * @param {Landing_Pricing_Starter_DescInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_starter_desc = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_starter_desc(inputs);
  return zh_landing_pricing_starter_desc(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_pro.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_ProInputs */
var en_landing_pricing_pro = () => {
  return `Pro`;
};
var zh_landing_pricing_pro = () => {
  return `专业版`;
};
/**
 * | output |
 * | --- |
 * | "Pro" |
 *
 * @param {Landing_Pricing_ProInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_pro = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_pro(inputs);
  return zh_landing_pricing_pro(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_pro_desc.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Pro_DescInputs */
var en_landing_pricing_pro_desc = () => {
  return `For growing teams`;
};
var zh_landing_pricing_pro_desc = () => {
  return `适合成长型团队`;
};
/**
 * | output |
 * | --- |
 * | "For growing teams" |
 *
 * @param {Landing_Pricing_Pro_DescInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_pro_desc = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_pro_desc(inputs);
  return zh_landing_pricing_pro_desc(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_enterprise.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_EnterpriseInputs */
var en_landing_pricing_enterprise = () => {
  return `Enterprise`;
};
var zh_landing_pricing_enterprise = () => {
  return `企业版`;
};
/**
 * | output |
 * | --- |
 * | "Enterprise" |
 *
 * @param {Landing_Pricing_EnterpriseInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_enterprise = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_enterprise(inputs);
  return zh_landing_pricing_enterprise(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_enterprise_desc.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Enterprise_DescInputs */
var en_landing_pricing_enterprise_desc = () => {
  return `For large organizations`;
};
var zh_landing_pricing_enterprise_desc = () => {
  return `适合大型组织`;
};
/**
 * | output |
 * | --- |
 * | "For large organizations" |
 *
 * @param {Landing_Pricing_Enterprise_DescInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_enterprise_desc = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_enterprise_desc(inputs);
  return zh_landing_pricing_enterprise_desc(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_1_project.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_1_ProjectInputs */
var en_landing_pricing_feature_1_project = () => {
  return `1 project`;
};
var zh_landing_pricing_feature_1_project = () => {
  return `1 个项目`;
};
/**
 * | output |
 * | --- |
 * | "1 project" |
 *
 * @param {Landing_Pricing_Feature_1_ProjectInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_1_project = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_1_project(inputs);
  return zh_landing_pricing_feature_1_project(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_5k_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_5k_CreditsInputs */
var en_landing_pricing_feature_5k_credits = () => {
  return `5,000 credits`;
};
var zh_landing_pricing_feature_5k_credits = () => {
  return `5,000 积分`;
};
/**
 * | output |
 * | --- |
 * | "5,000 credits" |
 *
 * @param {Landing_Pricing_Feature_5k_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_5k_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_5k_credits(inputs);
  return zh_landing_pricing_feature_5k_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_email_support.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Email_SupportInputs */
var en_landing_pricing_feature_email_support = () => {
  return `Email support`;
};
var zh_landing_pricing_feature_email_support = () => {
  return `邮件支持`;
};
/**
 * | output |
 * | --- |
 * | "Email support" |
 *
 * @param {Landing_Pricing_Feature_Email_SupportInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_email_support = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_email_support(inputs);
  return zh_landing_pricing_feature_email_support(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_unlimited_projects.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Unlimited_ProjectsInputs */
var en_landing_pricing_feature_unlimited_projects = () => {
  return `Unlimited projects`;
};
var zh_landing_pricing_feature_unlimited_projects = () => {
  return `无限项目`;
};
/**
 * | output |
 * | --- |
 * | "Unlimited projects" |
 *
 * @param {Landing_Pricing_Feature_Unlimited_ProjectsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_unlimited_projects = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_unlimited_projects(inputs);
  return zh_landing_pricing_feature_unlimited_projects(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_50k_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_50k_CreditsInputs */
var en_landing_pricing_feature_50k_credits = () => {
  return `50,000 credits`;
};
var zh_landing_pricing_feature_50k_credits = () => {
  return `50,000 积分`;
};
/**
 * | output |
 * | --- |
 * | "50,000 credits" |
 *
 * @param {Landing_Pricing_Feature_50k_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_50k_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_50k_credits(inputs);
  return zh_landing_pricing_feature_50k_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_priority_support.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Priority_SupportInputs */
var en_landing_pricing_feature_priority_support = () => {
  return `Priority support`;
};
var zh_landing_pricing_feature_priority_support = () => {
  return `优先支持`;
};
/**
 * | output |
 * | --- |
 * | "Priority support" |
 *
 * @param {Landing_Pricing_Feature_Priority_SupportInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_priority_support = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_priority_support(inputs);
  return zh_landing_pricing_feature_priority_support(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_api_access.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Api_AccessInputs */
var en_landing_pricing_feature_api_access = () => {
  return `API access`;
};
var zh_landing_pricing_feature_api_access = () => {
  return `API 访问`;
};
/**
 * | output |
 * | --- |
 * | "API access" |
 *
 * @param {Landing_Pricing_Feature_Api_AccessInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_api_access = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_api_access(inputs);
  return zh_landing_pricing_feature_api_access(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_everything_pro.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Everything_ProInputs */
var en_landing_pricing_feature_everything_pro = () => {
  return `Everything in Pro`;
};
var zh_landing_pricing_feature_everything_pro = () => {
  return `包含专业版全部功能`;
};
/**
 * | output |
 * | --- |
 * | "Everything in Pro" |
 *
 * @param {Landing_Pricing_Feature_Everything_ProInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_everything_pro = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_everything_pro(inputs);
  return zh_landing_pricing_feature_everything_pro(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_unlimited_credits.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Unlimited_CreditsInputs */
var en_landing_pricing_feature_unlimited_credits = () => {
  return `Unlimited credits`;
};
var zh_landing_pricing_feature_unlimited_credits = () => {
  return `无限积分`;
};
/**
 * | output |
 * | --- |
 * | "Unlimited credits" |
 *
 * @param {Landing_Pricing_Feature_Unlimited_CreditsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_unlimited_credits = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_unlimited_credits(inputs);
  return zh_landing_pricing_feature_unlimited_credits(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_dedicated_support.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Dedicated_SupportInputs */
var en_landing_pricing_feature_dedicated_support = () => {
  return `Dedicated support`;
};
var zh_landing_pricing_feature_dedicated_support = () => {
  return `专属支持`;
};
/**
 * | output |
 * | --- |
 * | "Dedicated support" |
 *
 * @param {Landing_Pricing_Feature_Dedicated_SupportInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_dedicated_support = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_dedicated_support(inputs);
  return zh_landing_pricing_feature_dedicated_support(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_pricing_feature_custom_integrations.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Custom_IntegrationsInputs */
var en_landing_pricing_feature_custom_integrations = () => {
  return `Custom integrations`;
};
var zh_landing_pricing_feature_custom_integrations = () => {
  return `定制集成`;
};
/**
 * | output |
 * | --- |
 * | "Custom integrations" |
 *
 * @param {Landing_Pricing_Feature_Custom_IntegrationsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_pricing_feature_custom_integrations = (
  inputs = {},
  options = {}
) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_pricing_feature_custom_integrations(inputs);
  return zh_landing_pricing_feature_custom_integrations(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_TitleInputs */
var en_landing_faq_title = () => {
  return `Frequently asked questions`;
};
var zh_landing_faq_title = () => {
  return `常见问题`;
};
/**
 * | output |
 * | --- |
 * | "Frequently asked questions" |
 *
 * @param {Landing_Faq_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_title(inputs);
  return zh_landing_faq_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_DescriptionInputs */
var en_landing_faq_description = () => {
  return `Everything you need to know before getting started.`;
};
var zh_landing_faq_description = () => {
  return `开始之前你可能想了解的一切。`;
};
/**
 * | output |
 * | --- |
 * | "Everything you need to know before getting started." |
 *
 * @param {Landing_Faq_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_description(inputs);
  return zh_landing_faq_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_stack_question.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Stack_QuestionInputs */
var en_landing_faq_stack_question = () => {
  return `What's the tech stack?`;
};
var zh_landing_faq_stack_question = () => {
  return `用的是什么技术栈？`;
};
/**
 * | output |
 * | --- |
 * | "What's the tech stack?" |
 *
 * @param {Landing_Faq_Stack_QuestionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_stack_question = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_stack_question(inputs);
  return zh_landing_faq_stack_question(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_stack_answer.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Stack_AnswerInputs */
var en_landing_faq_stack_answer = () => {
  return `Next.js 16 with the App Router, React 19, TypeScript strict mode, Tailwind CSS 4, shadcn/ui, Drizzle ORM, and better-auth. Every piece of business logic is inlined — no external packages for payment, email, storage, or AI.`;
};
var zh_landing_faq_stack_answer = () => {
  return `Next.js 16（App Router）、React 19、TypeScript 严格模式、Tailwind CSS 4、shadcn/ui、Drizzle ORM 和 better-auth。所有业务逻辑都内置在代码里——支付、邮件、存储、AI 都不依赖外部包。`;
};
/**
 * | output |
 * | --- |
 * | "Next.js 16 with the App Router, React 19, TypeScript strict mode, Tailwind CSS 4, shadcn/ui, Drizzle ORM, and better-auth. Every piece of business logic is i..." |
 *
 * @param {Landing_Faq_Stack_AnswerInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_stack_answer = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_stack_answer(inputs);
  return zh_landing_faq_stack_answer(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_payment_question.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Payment_QuestionInputs */
var en_landing_faq_payment_question = () => {
  return `Which payment providers are supported?`;
};
var zh_landing_faq_payment_question = () => {
  return `支持哪些支付方式？`;
};
/**
 * | output |
 * | --- |
 * | "Which payment providers are supported?" |
 *
 * @param {Landing_Faq_Payment_QuestionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_payment_question = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_payment_question(inputs);
  return zh_landing_faq_payment_question(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_payment_answer.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Payment_AnswerInputs */
var en_landing_faq_payment_answer = () => {
  return `Stripe, PayPal, Creem, Alipay, and WeChat Pay out of the box. The PaymentManager abstraction makes it straightforward to add more providers by implementing a single interface.`;
};
var zh_landing_faq_payment_answer = () => {
  return `开箱即用支持 Stripe、PayPal、Creem、支付宝和微信支付。通过 PaymentManager 抽象层，只需实现一个接口就能接入新的支付渠道。`;
};
/**
 * | output |
 * | --- |
 * | "Stripe, PayPal, Creem, Alipay, and WeChat Pay out of the box. The PaymentManager abstraction makes it straightforward to add more providers by implementing a..." |
 *
 * @param {Landing_Faq_Payment_AnswerInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_payment_answer = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_payment_answer(inputs);
  return zh_landing_faq_payment_answer(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_database_question.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Database_QuestionInputs */
var en_landing_faq_database_question = () => {
  return `Which databases can I use?`;
};
var zh_landing_faq_database_question = () => {
  return `支持哪些数据库？`;
};
/**
 * | output |
 * | --- |
 * | "Which databases can I use?" |
 *
 * @param {Landing_Faq_Database_QuestionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_database_question = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_database_question(inputs);
  return zh_landing_faq_database_question(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_database_answer.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Database_AnswerInputs */
var en_landing_faq_database_answer = () => {
  return `Drizzle ORM handles PostgreSQL, MySQL, SQLite, Turso, and Cloudflare D1. Switch providers by editing DATABASE_PROVIDER in your .env — the schema templates and drizzle config adapt automatically.`;
};
var zh_landing_faq_database_answer = () => {
  return `Drizzle ORM 支持 PostgreSQL、MySQL、SQLite、Turso 和 Cloudflare D1。只需修改 .env 中的 DATABASE_PROVIDER——schema 模板和 drizzle 配置会自动适配。`;
};
/**
 * | output |
 * | --- |
 * | "Drizzle ORM handles PostgreSQL, MySQL, SQLite, Turso, and Cloudflare D1. Switch providers by editing DATABASE_PROVIDER in your .env — the schema templates an..." |
 *
 * @param {Landing_Faq_Database_AnswerInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_database_answer = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_database_answer(inputs);
  return zh_landing_faq_database_answer(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_customize_question.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Customize_QuestionInputs */
var en_landing_faq_customize_question = () => {
  return `How customizable is the landing page?`;
};
var zh_landing_faq_customize_question = () => {
  return `落地页可以自定义到什么程度？`;
};
/**
 * | output |
 * | --- |
 * | "How customizable is the landing page?" |
 *
 * @param {Landing_Faq_Customize_QuestionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_customize_question = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_customize_question(inputs);
  return zh_landing_faq_customize_question(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_customize_answer.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Customize_AnswerInputs */
var en_landing_faq_customize_answer = () => {
  return `The src/blocks/ directory ships with demo sections — they're designed to be rewritten per project. The durable primitives live in src/components/, so your rebrand touches blocks and translations, not the chassis.`;
};
var zh_landing_faq_customize_answer = () => {
  return `src/blocks/ 下的 section 都是示例内容，本来就是要每个项目自己重写的。src/components/ 里才是长期沉淀的基础组件——换品牌只动 blocks 和翻译，底层架构不变。`;
};
/**
 * | output |
 * | --- |
 * | "The src/blocks/ directory ships with demo sections — they're designed to be rewritten per project. The durable primitives live in src/components/, so your re..." |
 *
 * @param {Landing_Faq_Customize_AnswerInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_customize_answer = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_customize_answer(inputs);
  return zh_landing_faq_customize_answer(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_license_question.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_License_QuestionInputs */
var en_landing_faq_license_question = () => {
  return `Can I use this for commercial projects?`;
};
var zh_landing_faq_license_question = () => {
  return `可以用于商业项目吗？`;
};
/**
 * | output |
 * | --- |
 * | "Can I use this for commercial projects?" |
 *
 * @param {Landing_Faq_License_QuestionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_license_question = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_license_question(inputs);
  return zh_landing_faq_license_question(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_faq_license_answer.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_License_AnswerInputs */
var en_landing_faq_license_answer = () => {
  return `Yes. ShipAny Next is built for shipping production SaaS products. You own the code after cloning — no per-seat fees, no runtime dependencies on our infrastructure.`;
};
var zh_landing_faq_license_answer = () => {
  return `可以。ShipAny Next 就是为生产级 SaaS 打造的。克隆之后代码归你——没有按用户数收费，也不依赖我们的任何基础设施。`;
};
/**
 * | output |
 * | --- |
 * | "Yes. ShipAny Next is built for shipping production SaaS products. You own the code after cloning — no per-seat fees, no runtime dependencies on our infrastru..." |
 *
 * @param {Landing_Faq_License_AnswerInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_faq_license_answer = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_faq_license_answer(inputs);
  return zh_landing_faq_license_answer(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_cta_headline.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Cta_HeadlineInputs */
var en_landing_cta_headline = () => {
  return `Ready to ship your SaaS?`;
};
var zh_landing_cta_headline = () => {
  return `准备好构建你的 SaaS 了吗？`;
};
/**
 * | output |
 * | --- |
 * | "Ready to ship your SaaS?" |
 *
 * @param {Landing_Cta_HeadlineInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_cta_headline = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_cta_headline(inputs);
  return zh_landing_cta_headline(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_cta_subheadline.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Cta_SubheadlineInputs */
var en_landing_cta_subheadline = () => {
  return `Stop wiring auth, payments, and RBAC from scratch. Start with ShipAny Next and build what actually makes your product unique.`;
};
var zh_landing_cta_subheadline = () => {
  return `别再从零搭建认证、支付和权限系统了。用 ShipAny Next 起步，专注打造真正让产品与众不同的东西。`;
};
/**
 * | output |
 * | --- |
 * | "Stop wiring auth, payments, and RBAC from scratch. Start with ShipAny Next and build what actually makes your product unique." |
 *
 * @param {Landing_Cta_SubheadlineInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_cta_subheadline = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_cta_subheadline(inputs);
  return zh_landing_cta_subheadline(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_cta_button.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Cta_ButtonInputs */
var en_landing_cta_button = () => {
  return `Get started for free`;
};
var zh_landing_cta_button = () => {
  return `免费开始使用`;
};
/**
 * | output |
 * | --- |
 * | "Get started for free" |
 *
 * @param {Landing_Cta_ButtonInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_cta_button = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_cta_button(inputs);
  return zh_landing_cta_button(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_tagline.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_TaglineInputs */
var en_landing_footer_tagline = () => {
  return `Ship faster, iterate smarter.`;
};
var zh_landing_footer_tagline = () => {
  return `极速发布你的 AI 产品`;
};
/**
 * | output |
 * | --- |
 * | "Ship faster, iterate smarter." |
 *
 * @param {Landing_Footer_TaglineInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_tagline = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_tagline(inputs);
  return zh_landing_footer_tagline(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_feature.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_FeatureInputs */
var en_landing_footer_feature = () => {
  return `Feature`;
};
var zh_landing_footer_feature = () => {
  return `功能`;
};
/**
 * | output |
 * | --- |
 * | "Feature" |
 *
 * @param {Landing_Footer_FeatureInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_feature = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_feature(inputs);
  return zh_landing_footer_feature(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_product.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_ProductInputs */
var en_landing_footer_product = () => {
  return `Product`;
};
var zh_landing_footer_product = () => {
  return `产品`;
};
/**
 * | output |
 * | --- |
 * | "Product" |
 *
 * @param {Landing_Footer_ProductInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_product = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_product(inputs);
  return zh_landing_footer_product(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_resources.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_ResourcesInputs */
var en_landing_footer_resources = () => {
  return `Resources`;
};
var zh_landing_footer_resources = () => {
  return `资源`;
};
/**
 * | output |
 * | --- |
 * | "Resources" |
 *
 * @param {Landing_Footer_ResourcesInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_resources = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_resources(inputs);
  return zh_landing_footer_resources(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_legal.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_LegalInputs */
var en_landing_footer_legal = () => {
  return `Legal`;
};
var zh_landing_footer_legal = () => {
  return `法律信息`;
};
/**
 * | output |
 * | --- |
 * | "Legal" |
 *
 * @param {Landing_Footer_LegalInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_legal = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_legal(inputs);
  return zh_landing_footer_legal(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_privacy.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_PrivacyInputs */
var en_landing_footer_privacy = () => {
  return `Privacy Policy`;
};
var zh_landing_footer_privacy = () => {
  return `隐私政策`;
};
/**
 * | output |
 * | --- |
 * | "Privacy Policy" |
 *
 * @param {Landing_Footer_PrivacyInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_privacy = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_privacy(inputs);
  return zh_landing_footer_privacy(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_terms.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_TermsInputs */
var en_landing_footer_terms = () => {
  return `Terms of Service`;
};
var zh_landing_footer_terms = () => {
  return `服务条款`;
};
/**
 * | output |
 * | --- |
 * | "Terms of Service" |
 *
 * @param {Landing_Footer_TermsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_terms = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_terms(inputs);
  return zh_landing_footer_terms(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_settings.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_SettingsInputs */
var en_landing_footer_settings = () => {
  return `Settings`;
};
var zh_landing_footer_settings = () => {
  return `设置`;
};
/**
 * | output |
 * | --- |
 * | "Settings" |
 *
 * @param {Landing_Footer_SettingsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_settings = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_settings(inputs);
  return zh_landing_footer_settings(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_admin.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_AdminInputs */
var en_landing_footer_admin = () => {
  return `Admin Panel`;
};
var zh_landing_footer_admin = () => {
  return `管理后台`;
};
/**
 * | output |
 * | --- |
 * | "Admin Panel" |
 *
 * @param {Landing_Footer_AdminInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_admin = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_admin(inputs);
  return zh_landing_footer_admin(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_docs.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_DocsInputs */
var en_landing_footer_docs = () => {
  return `Documentation`;
};
var zh_landing_footer_docs = () => {
  return `文档`;
};
/**
 * | output |
 * | --- |
 * | "Documentation" |
 *
 * @param {Landing_Footer_DocsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_docs = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_docs(inputs);
  return zh_landing_footer_docs(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_github.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_GithubInputs */
var en_landing_footer_github = () => {
  return `GitHub`;
};
var zh_landing_footer_github = () => {
  return `GitHub`;
};
/**
 * | output |
 * | --- |
 * | "GitHub" |
 *
 * @param {Landing_Footer_GithubInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_github = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_github(inputs);
  return zh_landing_footer_github(inputs);
};
//#endregion
//#region src/paraglide/messages/blog_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_TitleInputs */
var en_blog_title = () => {
  return `Blog`;
};
var zh_blog_title = () => {
  return `博客`;
};
/**
 * | output |
 * | --- |
 * | "Blog" |
 *
 * @param {Blog_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var blog_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en') return en_blog_title(inputs);
  return zh_blog_title(inputs);
};
//#endregion
//#region src/paraglide/messages/blog_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_DescriptionInputs */
var en_blog_description = () => {
  return `Product updates, guides, and engineering notes from the team.`;
};
var zh_blog_description = () => {
  return `来自团队的产品动态、使用指南与工程笔记。`;
};
/**
 * | output |
 * | --- |
 * | "Product updates, guides, and engineering notes from the team." |
 *
 * @param {Blog_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var blog_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_blog_description(inputs);
  return zh_blog_description(inputs);
};
//#endregion
//#region src/paraglide/messages/blog_no_posts.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_No_PostsInputs */
var en_blog_no_posts = () => {
  return `No posts yet — check back soon.`;
};
var zh_blog_no_posts = () => {
  return `暂无文章,敬请期待。`;
};
/**
 * | output |
 * | --- |
 * | "No posts yet — check back soon." |
 *
 * @param {Blog_No_PostsInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var blog_no_posts = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en') return en_blog_no_posts(inputs);
  return zh_blog_no_posts(inputs);
};
//#endregion
//#region src/paraglide/messages/blog_back_to_blog.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_Back_To_BlogInputs */
var en_blog_back_to_blog = () => {
  return `Back to blog`;
};
var zh_blog_back_to_blog = () => {
  return `返回博客`;
};
/**
 * | output |
 * | --- |
 * | "Back to blog" |
 *
 * @param {Blog_Back_To_BlogInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var blog_back_to_blog = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_blog_back_to_blog(inputs);
  return zh_blog_back_to_blog(inputs);
};
//#endregion
//#region src/paraglide/messages/blog_read_more.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_Read_MoreInputs */
var en_blog_read_more = () => {
  return `Read more`;
};
var zh_blog_read_more = () => {
  return `阅读全文`;
};
/**
 * | output |
 * | --- |
 * | "Read more" |
 *
 * @param {Blog_Read_MoreInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var blog_read_more = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_blog_read_more(inputs);
  return zh_blog_read_more(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_nav_blog.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Nav_BlogInputs */
var en_landing_nav_blog = () => {
  return `Blog`;
};
var zh_landing_nav_blog = () => {
  return `博客`;
};
/**
 * | output |
 * | --- |
 * | "Blog" |
 *
 * @param {Landing_Nav_BlogInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_nav_blog = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_nav_blog(inputs);
  return zh_landing_nav_blog(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_blog_title.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Blog_TitleInputs */
var en_landing_blog_title = () => {
  return `From the blog`;
};
var zh_landing_blog_title = () => {
  return `最新博客`;
};
/**
 * | output |
 * | --- |
 * | "From the blog" |
 *
 * @param {Landing_Blog_TitleInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_blog_title = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_blog_title(inputs);
  return zh_landing_blog_title(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_blog_description.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Blog_DescriptionInputs */
var en_landing_blog_description = () => {
  return `Product updates, guides, and engineering notes from the team.`;
};
var zh_landing_blog_description = () => {
  return `来自团队的产品动态、使用指南与工程笔记。`;
};
/**
 * | output |
 * | --- |
 * | "Product updates, guides, and engineering notes from the team." |
 *
 * @param {Landing_Blog_DescriptionInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_blog_description = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_blog_description(inputs);
  return zh_landing_blog_description(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_blog_view_all.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Blog_View_AllInputs */
var en_landing_blog_view_all = () => {
  return `View all posts`;
};
var zh_landing_blog_view_all = () => {
  return `查看全部文章`;
};
/**
 * | output |
 * | --- |
 * | "View all posts" |
 *
 * @param {Landing_Blog_View_AllInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_blog_view_all = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_blog_view_all(inputs);
  return zh_landing_blog_view_all(inputs);
};
//#endregion
//#region src/paraglide/messages/landing_footer_blog.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_BlogInputs */
var en_landing_footer_blog = () => {
  return `Blog`;
};
var zh_landing_footer_blog = () => {
  return `博客`;
};
/**
 * | output |
 * | --- |
 * | "Blog" |
 *
 * @param {Landing_Footer_BlogInputs} inputs
 * @param {{ locale?: "en" | "zh" }} options
 * @returns {LocalizedString}
 */
var landing_footer_blog = (inputs = {}, options = {}) => {
  if ((options.locale ?? getLocale()) === 'en')
    return en_landing_footer_blog(inputs);
  return zh_landing_footer_blog(inputs);
};
//#endregion
//#region src/paraglide/messages/_index.js
var _index_exports = /* @__PURE__ */ __exportAll({
  'admin.back_to_dashboard': () => admin_back_to_dashboard,
  'admin.categories.actions_col': () => admin_categories_actions_col,
  'admin.categories.all': () => admin_categories_all,
  'admin.categories.cancel': () => admin_categories_cancel,
  'admin.categories.confirm_delete': () => admin_categories_confirm_delete,
  'admin.categories.count': () => admin_categories_count,
  'admin.categories.create': () => admin_categories_create,
  'admin.categories.create_description': () =>
    admin_categories_create_description,
  'admin.categories.create_title': () => admin_categories_create_title,
  'admin.categories.created': () => admin_categories_created,
  'admin.categories.created_at': () => admin_categories_created_at,
  'admin.categories.delete_confirm': () => admin_categories_delete_confirm,
  'admin.categories.delete_title': () => admin_categories_delete_title,
  'admin.categories.deleted': () => admin_categories_deleted,
  'admin.categories.description': () => admin_categories_description,
  'admin.categories.description_col': () => admin_categories_description_col,
  'admin.categories.description_field': () =>
    admin_categories_description_field,
  'admin.categories.description_placeholder': () =>
    admin_categories_description_placeholder,
  'admin.categories.edit_description': () => admin_categories_edit_description,
  'admin.categories.edit_title': () => admin_categories_edit_title,
  'admin.categories.no_data': () => admin_categories_no_data,
  'admin.categories.save': () => admin_categories_save,
  'admin.categories.slug_col': () => admin_categories_slug_col,
  'admin.categories.slug_field': () => admin_categories_slug_field,
  'admin.categories.slug_placeholder': () => admin_categories_slug_placeholder,
  'admin.categories.status_col': () => admin_categories_status_col,
  'admin.categories.title': () => admin_categories_title,
  'admin.categories.title_col': () => admin_categories_title_col,
  'admin.categories.title_field': () => admin_categories_title_field,
  'admin.categories.title_placeholder': () =>
    admin_categories_title_placeholder,
  'admin.categories.updated': () => admin_categories_updated,
  'admin.credits.all_credits': () => admin_credits_all_credits,
  'admin.credits.amount': () => admin_credits_amount,
  'admin.credits.count': () => admin_credits_count,
  'admin.credits.created_at': () => admin_credits_created_at,
  'admin.credits.description': () => admin_credits_description,
  'admin.credits.expires_at': () => admin_credits_expires_at,
  'admin.credits.no_credits': () => admin_credits_no_credits,
  'admin.credits.remaining': () => admin_credits_remaining,
  'admin.credits.scene': () => admin_credits_scene,
  'admin.credits.tab_all': () => admin_credits_tab_all,
  'admin.credits.tab_consume': () => admin_credits_tab_consume,
  'admin.credits.tab_grant': () => admin_credits_tab_grant,
  'admin.credits.title': () => admin_credits_title,
  'admin.credits.transaction_no': () => admin_credits_transaction_no,
  'admin.credits.type': () => admin_credits_type,
  'admin.credits.user': () => admin_credits_user,
  'admin.description': () => admin_description,
  'admin.invite_codes.actions_col': () => admin_invite_codes_actions_col,
  'admin.invite_codes.cancel': () => admin_invite_codes_cancel,
  'admin.invite_codes.code_col': () => admin_invite_codes_code_col,
  'admin.invite_codes.copied': () => admin_invite_codes_copied,
  'admin.invite_codes.count_label': () => admin_invite_codes_count_label,
  'admin.invite_codes.create_button': () => admin_invite_codes_create_button,
  'admin.invite_codes.create_description': () =>
    admin_invite_codes_create_description,
  'admin.invite_codes.create_submit': () => admin_invite_codes_create_submit,
  'admin.invite_codes.create_success': () => admin_invite_codes_create_success,
  'admin.invite_codes.create_title': () => admin_invite_codes_create_title,
  'admin.invite_codes.created_col': () => admin_invite_codes_created_col,
  'admin.invite_codes.creating': () => admin_invite_codes_creating,
  'admin.invite_codes.delete_confirm': () => admin_invite_codes_delete_confirm,
  'admin.invite_codes.delete_description': () =>
    admin_invite_codes_delete_description,
  'admin.invite_codes.delete_success': () => admin_invite_codes_delete_success,
  'admin.invite_codes.delete_title': () => admin_invite_codes_delete_title,
  'admin.invite_codes.description': () => admin_invite_codes_description,
  'admin.invite_codes.empty': () => admin_invite_codes_empty,
  'admin.invite_codes.expires_col': () => admin_invite_codes_expires_col,
  'admin.invite_codes.expires_label': () => admin_invite_codes_expires_label,
  'admin.invite_codes.invalid_input': () => admin_invite_codes_invalid_input,
  'admin.invite_codes.max_uses_label': () => admin_invite_codes_max_uses_label,
  'admin.invite_codes.note_col': () => admin_invite_codes_note_col,
  'admin.invite_codes.note_label': () => admin_invite_codes_note_label,
  'admin.invite_codes.note_placeholder': () =>
    admin_invite_codes_note_placeholder,
  'admin.invite_codes.tab_all': () => admin_invite_codes_tab_all,
  'admin.invite_codes.tab_available': () => admin_invite_codes_tab_available,
  'admin.invite_codes.tab_used': () => admin_invite_codes_tab_used,
  'admin.invite_codes.title': () => admin_invite_codes_title,
  'admin.invite_codes.trial_days_col': () => admin_invite_codes_trial_days_col,
  'admin.invite_codes.trial_days_label': () =>
    admin_invite_codes_trial_days_label,
  'admin.invite_codes.usage_col': () => admin_invite_codes_usage_col,
  'admin.loading': () => admin_loading,
  'admin.nav.billing': () => admin_nav_billing,
  'admin.nav.categories': () => admin_nav_categories,
  'admin.nav.content': () => admin_nav_content,
  'admin.nav.credits': () => admin_nav_credits,
  'admin.nav.invite_codes': () => admin_nav_invite_codes,
  'admin.nav.overview': () => admin_nav_overview,
  'admin.nav.payments': () => admin_nav_payments,
  'admin.nav.permissions': () => admin_nav_permissions,
  'admin.nav.posts': () => admin_nav_posts,
  'admin.nav.rbac': () => admin_nav_rbac,
  'admin.nav.roles': () => admin_nav_roles,
  'admin.nav.settings': () => admin_nav_settings,
  'admin.nav.subscriptions': () => admin_nav_subscriptions,
  'admin.nav.support': () => admin_nav_support,
  'admin.nav.tickets': () => admin_nav_tickets,
  'admin.nav.users': () => admin_nav_users,
  'admin.payments.all_payments': () => admin_payments_all_payments,
  'admin.payments.amount': () => admin_payments_amount,
  'admin.payments.count': () => admin_payments_count,
  'admin.payments.created_at': () => admin_payments_created_at,
  'admin.payments.description': () => admin_payments_description,
  'admin.payments.no_payments': () => admin_payments_no_payments,
  'admin.payments.order_no': () => admin_payments_order_no,
  'admin.payments.provider': () => admin_payments_provider,
  'admin.payments.status': () => admin_payments_status,
  'admin.payments.tab_all': () => admin_payments_tab_all,
  'admin.payments.tab_one_time': () => admin_payments_tab_one_time,
  'admin.payments.tab_subscription': () => admin_payments_tab_subscription,
  'admin.payments.title': () => admin_payments_title,
  'admin.payments.type': () => admin_payments_type,
  'admin.payments.user': () => admin_payments_user,
  'admin.permissions.action_col': () => admin_permissions_action_col,
  'admin.permissions.action_field': () => admin_permissions_action_field,
  'admin.permissions.action_placeholder': () =>
    admin_permissions_action_placeholder,
  'admin.permissions.actions_col': () => admin_permissions_actions_col,
  'admin.permissions.all_permissions': () => admin_permissions_all_permissions,
  'admin.permissions.cancel': () => admin_permissions_cancel,
  'admin.permissions.code_col': () => admin_permissions_code_col,
  'admin.permissions.code_field': () => admin_permissions_code_field,
  'admin.permissions.code_placeholder': () =>
    admin_permissions_code_placeholder,
  'admin.permissions.confirm_delete': () => admin_permissions_confirm_delete,
  'admin.permissions.count': () => admin_permissions_count,
  'admin.permissions.create_description': () =>
    admin_permissions_create_description,
  'admin.permissions.create_permission': () =>
    admin_permissions_create_permission,
  'admin.permissions.create_title': () => admin_permissions_create_title,
  'admin.permissions.created': () => admin_permissions_created,
  'admin.permissions.delete_confirm': () => admin_permissions_delete_confirm,
  'admin.permissions.delete_title': () => admin_permissions_delete_title,
  'admin.permissions.deleted': () => admin_permissions_deleted,
  'admin.permissions.description': () => admin_permissions_description,
  'admin.permissions.edit_description': () =>
    admin_permissions_edit_description,
  'admin.permissions.edit_title': () => admin_permissions_edit_title,
  'admin.permissions.no_permissions': () => admin_permissions_no_permissions,
  'admin.permissions.resource_col': () => admin_permissions_resource_col,
  'admin.permissions.resource_field': () => admin_permissions_resource_field,
  'admin.permissions.resource_placeholder': () =>
    admin_permissions_resource_placeholder,
  'admin.permissions.save': () => admin_permissions_save,
  'admin.permissions.title': () => admin_permissions_title,
  'admin.permissions.title_col': () => admin_permissions_title_col,
  'admin.permissions.title_field': () => admin_permissions_title_field,
  'admin.permissions.title_placeholder': () =>
    admin_permissions_title_placeholder,
  'admin.permissions.updated': () => admin_permissions_updated,
  'admin.posts.actions_col': () => admin_posts_actions_col,
  'admin.posts.all': () => admin_posts_all,
  'admin.posts.author_col': () => admin_posts_author_col,
  'admin.posts.author_field': () => admin_posts_author_field,
  'admin.posts.author_placeholder': () => admin_posts_author_placeholder,
  'admin.posts.cancel': () => admin_posts_cancel,
  'admin.posts.category_field': () => admin_posts_category_field,
  'admin.posts.category_placeholder': () => admin_posts_category_placeholder,
  'admin.posts.confirm_delete': () => admin_posts_confirm_delete,
  'admin.posts.content_field': () => admin_posts_content_field,
  'admin.posts.content_placeholder': () => admin_posts_content_placeholder,
  'admin.posts.count': () => admin_posts_count,
  'admin.posts.create': () => admin_posts_create,
  'admin.posts.create_description': () => admin_posts_create_description,
  'admin.posts.create_title': () => admin_posts_create_title,
  'admin.posts.created': () => admin_posts_created,
  'admin.posts.created_at': () => admin_posts_created_at,
  'admin.posts.delete_confirm': () => admin_posts_delete_confirm,
  'admin.posts.delete_title': () => admin_posts_delete_title,
  'admin.posts.deleted': () => admin_posts_deleted,
  'admin.posts.description': () => admin_posts_description,
  'admin.posts.description_field': () => admin_posts_description_field,
  'admin.posts.description_placeholder': () =>
    admin_posts_description_placeholder,
  'admin.posts.edit_description': () => admin_posts_edit_description,
  'admin.posts.edit_title': () => admin_posts_edit_title,
  'admin.posts.no_data': () => admin_posts_no_data,
  'admin.posts.save': () => admin_posts_save,
  'admin.posts.slug_col': () => admin_posts_slug_col,
  'admin.posts.slug_field': () => admin_posts_slug_field,
  'admin.posts.slug_placeholder': () => admin_posts_slug_placeholder,
  'admin.posts.status_col': () => admin_posts_status_col,
  'admin.posts.status_draft': () => admin_posts_status_draft,
  'admin.posts.status_field': () => admin_posts_status_field,
  'admin.posts.status_published': () => admin_posts_status_published,
  'admin.posts.tab_all': () => admin_posts_tab_all,
  'admin.posts.tab_draft': () => admin_posts_tab_draft,
  'admin.posts.tab_published': () => admin_posts_tab_published,
  'admin.posts.title': () => admin_posts_title,
  'admin.posts.title_col': () => admin_posts_title_col,
  'admin.posts.title_field': () => admin_posts_title_field,
  'admin.posts.title_placeholder': () => admin_posts_title_placeholder,
  'admin.posts.updated': () => admin_posts_updated,
  'admin.roles.actions_col': () => admin_roles_actions_col,
  'admin.roles.all_roles': () => admin_roles_all_roles,
  'admin.roles.cancel': () => admin_roles_cancel,
  'admin.roles.confirm_delete': () => admin_roles_confirm_delete,
  'admin.roles.count': () => admin_roles_count,
  'admin.roles.create_description': () => admin_roles_create_description,
  'admin.roles.create_role': () => admin_roles_create_role,
  'admin.roles.create_title': () => admin_roles_create_title,
  'admin.roles.created': () => admin_roles_created,
  'admin.roles.delete_confirm': () => admin_roles_delete_confirm,
  'admin.roles.delete_title': () => admin_roles_delete_title,
  'admin.roles.deleted': () => admin_roles_deleted,
  'admin.roles.description': () => admin_roles_description,
  'admin.roles.description_col': () => admin_roles_description_col,
  'admin.roles.description_field': () => admin_roles_description_field,
  'admin.roles.description_placeholder': () =>
    admin_roles_description_placeholder,
  'admin.roles.edit_description': () => admin_roles_edit_description,
  'admin.roles.edit_title': () => admin_roles_edit_title,
  'admin.roles.manage_permissions': () => admin_roles_manage_permissions,
  'admin.roles.manage_permissions_description': () =>
    admin_roles_manage_permissions_description,
  'admin.roles.manage_permissions_title': () =>
    admin_roles_manage_permissions_title,
  'admin.roles.name_col': () => admin_roles_name_col,
  'admin.roles.name_field': () => admin_roles_name_field,
  'admin.roles.name_placeholder': () => admin_roles_name_placeholder,
  'admin.roles.no_roles': () => admin_roles_no_roles,
  'admin.roles.permissions_saved': () => admin_roles_permissions_saved,
  'admin.roles.save': () => admin_roles_save,
  'admin.roles.status_col': () => admin_roles_status_col,
  'admin.roles.title': () => admin_roles_title,
  'admin.roles.title_col': () => admin_roles_title_col,
  'admin.roles.title_field': () => admin_roles_title_field,
  'admin.roles.title_placeholder': () => admin_roles_title_placeholder,
  'admin.roles.updated': () => admin_roles_updated,
  'admin.settings.custom.add': () => admin_settings_custom_add,
  'admin.settings.custom.description': () => admin_settings_custom_description,
  'admin.settings.custom.empty': () => admin_settings_custom_empty,
  'admin.settings.custom.key_placeholder': () =>
    admin_settings_custom_key_placeholder,
  'admin.settings.custom.remove': () => admin_settings_custom_remove,
  'admin.settings.custom.title': () => admin_settings_custom_title,
  'admin.settings.custom.value_placeholder': () =>
    admin_settings_custom_value_placeholder,
  'admin.settings.description': () => admin_settings_description,
  'admin.settings.fields.alipay_app_id': () =>
    admin_settings_fields_alipay_app_id,
  'admin.settings.fields.alipay_enabled': () =>
    admin_settings_fields_alipay_enabled,
  'admin.settings.fields.alipay_notify_url': () =>
    admin_settings_fields_alipay_notify_url,
  'admin.settings.fields.alipay_private_key': () =>
    admin_settings_fields_alipay_private_key,
  'admin.settings.fields.alipay_public_key': () =>
    admin_settings_fields_alipay_public_key,
  'admin.settings.fields.alipay_test_amount': () =>
    admin_settings_fields_alipay_test_amount,
  'admin.settings.fields.anthropic_api_key': () =>
    admin_settings_fields_anthropic_api_key,
  'admin.settings.fields.anthropic_base_url': () =>
    admin_settings_fields_anthropic_base_url,
  'admin.settings.fields.app_description': () =>
    admin_settings_fields_app_description,
  'admin.settings.fields.app_name': () => admin_settings_fields_app_name,
  'admin.settings.fields.app_url': () => admin_settings_fields_app_url,
  'admin.settings.fields.cloudflare_email_account_id': () =>
    admin_settings_fields_cloudflare_email_account_id,
  'admin.settings.fields.cloudflare_email_api_token': () =>
    admin_settings_fields_cloudflare_email_api_token,
  'admin.settings.fields.cloudflare_email_sender_email': () =>
    admin_settings_fields_cloudflare_email_sender_email,
  'admin.settings.fields.creem_api_key': () =>
    admin_settings_fields_creem_api_key,
  'admin.settings.fields.creem_enabled': () =>
    admin_settings_fields_creem_enabled,
  'admin.settings.fields.creem_environment': () =>
    admin_settings_fields_creem_environment,
  'admin.settings.fields.creem_product_ids_mapping': () =>
    admin_settings_fields_creem_product_ids_mapping,
  'admin.settings.fields.creem_signing_secret': () =>
    admin_settings_fields_creem_signing_secret,
  'admin.settings.fields.creem_test_amount': () =>
    admin_settings_fields_creem_test_amount,
  'admin.settings.fields.crisp_enabled': () =>
    admin_settings_fields_crisp_enabled,
  'admin.settings.fields.crisp_website_id': () =>
    admin_settings_fields_crisp_website_id,
  'admin.settings.fields.default_payment_provider': () =>
    admin_settings_fields_default_payment_provider,
  'admin.settings.fields.email_auth_enabled': () =>
    admin_settings_fields_email_auth_enabled,
  'admin.settings.fields.email_provider': () =>
    admin_settings_fields_email_provider,
  'admin.settings.fields.email_verification_enabled': () =>
    admin_settings_fields_email_verification_enabled,
  'admin.settings.fields.fal_api_key': () => admin_settings_fields_fal_api_key,
  'admin.settings.fields.github_auth_enabled': () =>
    admin_settings_fields_github_auth_enabled,
  'admin.settings.fields.github_client_id': () =>
    admin_settings_fields_github_client_id,
  'admin.settings.fields.github_client_secret': () =>
    admin_settings_fields_github_client_secret,
  'admin.settings.fields.google_analytics_id': () =>
    admin_settings_fields_google_analytics_id,
  'admin.settings.fields.google_auth_enabled': () =>
    admin_settings_fields_google_auth_enabled,
  'admin.settings.fields.google_client_id': () =>
    admin_settings_fields_google_client_id,
  'admin.settings.fields.google_client_secret': () =>
    admin_settings_fields_google_client_secret,
  'admin.settings.fields.google_one_tap_enabled': () =>
    admin_settings_fields_google_one_tap_enabled,
  'admin.settings.fields.initial_credits_amount': () =>
    admin_settings_fields_initial_credits_amount,
  'admin.settings.fields.initial_credits_description': () =>
    admin_settings_fields_initial_credits_description,
  'admin.settings.fields.initial_credits_enabled': () =>
    admin_settings_fields_initial_credits_enabled,
  'admin.settings.fields.initial_credits_valid_days': () =>
    admin_settings_fields_initial_credits_valid_days,
  'admin.settings.fields.initial_role_enabled': () =>
    admin_settings_fields_initial_role_enabled,
  'admin.settings.fields.initial_role_name': () =>
    admin_settings_fields_initial_role_name,
  'admin.settings.fields.invite_code_required': () =>
    admin_settings_fields_invite_code_required,
  'admin.settings.fields.openai_api_key': () =>
    admin_settings_fields_openai_api_key,
  'admin.settings.fields.openai_base_url': () =>
    admin_settings_fields_openai_base_url,
  'admin.settings.fields.paypal_client_id': () =>
    admin_settings_fields_paypal_client_id,
  'admin.settings.fields.paypal_client_secret': () =>
    admin_settings_fields_paypal_client_secret,
  'admin.settings.fields.paypal_enabled': () =>
    admin_settings_fields_paypal_enabled,
  'admin.settings.fields.paypal_environment': () =>
    admin_settings_fields_paypal_environment,
  'admin.settings.fields.paypal_test_amount': () =>
    admin_settings_fields_paypal_test_amount,
  'admin.settings.fields.paypal_webhook_id': () =>
    admin_settings_fields_paypal_webhook_id,
  'admin.settings.fields.plausible_domain': () =>
    admin_settings_fields_plausible_domain,
  'admin.settings.fields.plausible_src': () =>
    admin_settings_fields_plausible_src,
  'admin.settings.fields.r2_access_key': () =>
    admin_settings_fields_r2_access_key,
  'admin.settings.fields.r2_bucket_name': () =>
    admin_settings_fields_r2_bucket_name,
  'admin.settings.fields.r2_domain': () => admin_settings_fields_r2_domain,
  'admin.settings.fields.r2_endpoint': () => admin_settings_fields_r2_endpoint,
  'admin.settings.fields.r2_secret_key': () =>
    admin_settings_fields_r2_secret_key,
  'admin.settings.fields.r2_upload_path': () =>
    admin_settings_fields_r2_upload_path,
  'admin.settings.fields.replicate_api_token': () =>
    admin_settings_fields_replicate_api_token,
  'admin.settings.fields.resend_api_key': () =>
    admin_settings_fields_resend_api_key,
  'admin.settings.fields.resend_sender_email': () =>
    admin_settings_fields_resend_sender_email,
  'admin.settings.fields.select_payment_enabled': () =>
    admin_settings_fields_select_payment_enabled,
  'admin.settings.fields.stripe_enabled': () =>
    admin_settings_fields_stripe_enabled,
  'admin.settings.fields.stripe_publishable_key': () =>
    admin_settings_fields_stripe_publishable_key,
  'admin.settings.fields.stripe_secret_key': () =>
    admin_settings_fields_stripe_secret_key,
  'admin.settings.fields.stripe_signing_secret': () =>
    admin_settings_fields_stripe_signing_secret,
  'admin.settings.fields.tawk_enabled': () =>
    admin_settings_fields_tawk_enabled,
  'admin.settings.fields.tawk_property_id': () =>
    admin_settings_fields_tawk_property_id,
  'admin.settings.fields.tawk_widget_id': () =>
    admin_settings_fields_tawk_widget_id,
  'admin.settings.fields.wechat_api_v3_key': () =>
    admin_settings_fields_wechat_api_v3_key,
  'admin.settings.fields.wechat_app_id': () =>
    admin_settings_fields_wechat_app_id,
  'admin.settings.fields.wechat_enabled': () =>
    admin_settings_fields_wechat_enabled,
  'admin.settings.fields.wechat_mch_id': () =>
    admin_settings_fields_wechat_mch_id,
  'admin.settings.fields.wechat_notify_url': () =>
    admin_settings_fields_wechat_notify_url,
  'admin.settings.fields.wechat_private_key': () =>
    admin_settings_fields_wechat_private_key,
  'admin.settings.fields.wechat_serial_no': () =>
    admin_settings_fields_wechat_serial_no,
  'admin.settings.fields.wechat_test_amount': () =>
    admin_settings_fields_wechat_test_amount,
  'admin.settings.groups.alipay.description': () =>
    admin_settings_groups_alipay_description,
  'admin.settings.groups.alipay.title': () =>
    admin_settings_groups_alipay_title,
  'admin.settings.groups.anthropic.description': () =>
    admin_settings_groups_anthropic_description,
  'admin.settings.groups.anthropic.title': () =>
    admin_settings_groups_anthropic_title,
  'admin.settings.groups.appinfo.description': () =>
    admin_settings_groups_appinfo_description,
  'admin.settings.groups.appinfo.title': () =>
    admin_settings_groups_appinfo_title,
  'admin.settings.groups.basic_payment.description': () =>
    admin_settings_groups_basic_payment_description,
  'admin.settings.groups.basic_payment.title': () =>
    admin_settings_groups_basic_payment_title,
  'admin.settings.groups.cloudflare_email.description': () =>
    admin_settings_groups_cloudflare_email_description,
  'admin.settings.groups.cloudflare_email.title': () =>
    admin_settings_groups_cloudflare_email_title,
  'admin.settings.groups.credit.description': () =>
    admin_settings_groups_credit_description,
  'admin.settings.groups.credit.title': () =>
    admin_settings_groups_credit_title,
  'admin.settings.groups.creem.description': () =>
    admin_settings_groups_creem_description,
  'admin.settings.groups.creem.title': () => admin_settings_groups_creem_title,
  'admin.settings.groups.crisp.description': () =>
    admin_settings_groups_crisp_description,
  'admin.settings.groups.crisp.title': () => admin_settings_groups_crisp_title,
  'admin.settings.groups.email_auth.description': () =>
    admin_settings_groups_email_auth_description,
  'admin.settings.groups.email_auth.title': () =>
    admin_settings_groups_email_auth_title,
  'admin.settings.groups.email_general.description': () =>
    admin_settings_groups_email_general_description,
  'admin.settings.groups.email_general.title': () =>
    admin_settings_groups_email_general_title,
  'admin.settings.groups.fal.description': () =>
    admin_settings_groups_fal_description,
  'admin.settings.groups.fal.title': () => admin_settings_groups_fal_title,
  'admin.settings.groups.github_auth.description': () =>
    admin_settings_groups_github_auth_description,
  'admin.settings.groups.github_auth.title': () =>
    admin_settings_groups_github_auth_title,
  'admin.settings.groups.google_analytics.description': () =>
    admin_settings_groups_google_analytics_description,
  'admin.settings.groups.google_analytics.title': () =>
    admin_settings_groups_google_analytics_title,
  'admin.settings.groups.google_auth.description': () =>
    admin_settings_groups_google_auth_description,
  'admin.settings.groups.google_auth.title': () =>
    admin_settings_groups_google_auth_title,
  'admin.settings.groups.openai.description': () =>
    admin_settings_groups_openai_description,
  'admin.settings.groups.openai.title': () =>
    admin_settings_groups_openai_title,
  'admin.settings.groups.paypal.description': () =>
    admin_settings_groups_paypal_description,
  'admin.settings.groups.paypal.title': () =>
    admin_settings_groups_paypal_title,
  'admin.settings.groups.plausible.description': () =>
    admin_settings_groups_plausible_description,
  'admin.settings.groups.plausible.title': () =>
    admin_settings_groups_plausible_title,
  'admin.settings.groups.r2.description': () =>
    admin_settings_groups_r2_description,
  'admin.settings.groups.r2.title': () => admin_settings_groups_r2_title,
  'admin.settings.groups.replicate.description': () =>
    admin_settings_groups_replicate_description,
  'admin.settings.groups.replicate.title': () =>
    admin_settings_groups_replicate_title,
  'admin.settings.groups.resend.description': () =>
    admin_settings_groups_resend_description,
  'admin.settings.groups.resend.title': () =>
    admin_settings_groups_resend_title,
  'admin.settings.groups.stripe.description': () =>
    admin_settings_groups_stripe_description,
  'admin.settings.groups.stripe.title': () =>
    admin_settings_groups_stripe_title,
  'admin.settings.groups.tawk.description': () =>
    admin_settings_groups_tawk_description,
  'admin.settings.groups.tawk.title': () => admin_settings_groups_tawk_title,
  'admin.settings.groups.user_role.description': () =>
    admin_settings_groups_user_role_description,
  'admin.settings.groups.user_role.title': () =>
    admin_settings_groups_user_role_title,
  'admin.settings.groups.wechat.description': () =>
    admin_settings_groups_wechat_description,
  'admin.settings.groups.wechat.title': () =>
    admin_settings_groups_wechat_title,
  'admin.settings.placeholders.alipay_test_amount': () =>
    admin_settings_placeholders_alipay_test_amount,
  'admin.settings.placeholders.creem_product_ids_mapping': () =>
    admin_settings_placeholders_creem_product_ids_mapping,
  'admin.settings.placeholders.creem_test_amount': () =>
    admin_settings_placeholders_creem_test_amount,
  'admin.settings.placeholders.paypal_test_amount': () =>
    admin_settings_placeholders_paypal_test_amount,
  'admin.settings.placeholders.wechat_test_amount': () =>
    admin_settings_placeholders_wechat_test_amount,
  'admin.settings.save': () => admin_settings_save,
  'admin.settings.save_error': () => admin_settings_save_error,
  'admin.settings.save_success': () => admin_settings_save_success,
  'admin.settings.saving': () => admin_settings_saving,
  'admin.settings.tabs.ai': () => admin_settings_tabs_ai,
  'admin.settings.tabs.analytics': () => admin_settings_tabs_analytics,
  'admin.settings.tabs.auth': () => admin_settings_tabs_auth,
  'admin.settings.tabs.custom': () => admin_settings_tabs_custom,
  'admin.settings.tabs.customer_service': () =>
    admin_settings_tabs_customer_service,
  'admin.settings.tabs.email': () => admin_settings_tabs_email,
  'admin.settings.tabs.general': () => admin_settings_tabs_general,
  'admin.settings.tabs.payment': () => admin_settings_tabs_payment,
  'admin.settings.tabs.storage': () => admin_settings_tabs_storage,
  'admin.settings.test.button': () => admin_settings_test_button,
  'admin.settings.test.close': () => admin_settings_test_close,
  'admin.settings.test.description': () => admin_settings_test_description,
  'admin.settings.test.error': () => admin_settings_test_error,
  'admin.settings.test.run': () => admin_settings_test_run,
  'admin.settings.test.running': () => admin_settings_test_running,
  'admin.settings.test.title': () => admin_settings_test_title,
  'admin.settings.title': () => admin_settings_title,
  'admin.stats.roles': () => admin_stats_roles,
  'admin.stats.total_users': () => admin_stats_total_users,
  'admin.subscriptions.all_subscriptions': () =>
    admin_subscriptions_all_subscriptions,
  'admin.subscriptions.amount': () => admin_subscriptions_amount,
  'admin.subscriptions.count': () => admin_subscriptions_count,
  'admin.subscriptions.created_at': () => admin_subscriptions_created_at,
  'admin.subscriptions.description': () => admin_subscriptions_description,
  'admin.subscriptions.interval': () => admin_subscriptions_interval,
  'admin.subscriptions.no_subscriptions': () =>
    admin_subscriptions_no_subscriptions,
  'admin.subscriptions.period': () => admin_subscriptions_period,
  'admin.subscriptions.provider': () => admin_subscriptions_provider,
  'admin.subscriptions.status': () => admin_subscriptions_status,
  'admin.subscriptions.subscription_no': () =>
    admin_subscriptions_subscription_no,
  'admin.subscriptions.tab_all': () => admin_subscriptions_tab_all,
  'admin.subscriptions.tab_month': () => admin_subscriptions_tab_month,
  'admin.subscriptions.tab_year': () => admin_subscriptions_tab_year,
  'admin.subscriptions.title': () => admin_subscriptions_title,
  'admin.subscriptions.user': () => admin_subscriptions_user,
  'admin.tickets.actions_col': () => admin_tickets_actions_col,
  'admin.tickets.admin': () => admin_tickets_admin,
  'admin.tickets.close_ticket': () => admin_tickets_close_ticket,
  'admin.tickets.created_col': () => admin_tickets_created_col,
  'admin.tickets.description': () => admin_tickets_description,
  'admin.tickets.empty': () => admin_tickets_empty,
  'admin.tickets.latest_reply_col': () => admin_tickets_latest_reply_col,
  'admin.tickets.reopen_ticket': () => admin_tickets_reopen_ticket,
  'admin.tickets.reply_placeholder': () => admin_tickets_reply_placeholder,
  'admin.tickets.reply_submit': () => admin_tickets_reply_submit,
  'admin.tickets.reply_success': () => admin_tickets_reply_success,
  'admin.tickets.replying': () => admin_tickets_replying,
  'admin.tickets.status_closed': () => admin_tickets_status_closed,
  'admin.tickets.status_col': () => admin_tickets_status_col,
  'admin.tickets.status_open': () => admin_tickets_status_open,
  'admin.tickets.status_replied': () => admin_tickets_status_replied,
  'admin.tickets.status_updated': () => admin_tickets_status_updated,
  'admin.tickets.tab_all': () => admin_tickets_tab_all,
  'admin.tickets.tab_closed': () => admin_tickets_tab_closed,
  'admin.tickets.tab_open': () => admin_tickets_tab_open,
  'admin.tickets.tab_replied': () => admin_tickets_tab_replied,
  'admin.tickets.title': () => admin_tickets_title,
  'admin.tickets.title_col': () => admin_tickets_title_col,
  'admin.tickets.updated_col': () => admin_tickets_updated_col,
  'admin.tickets.user_col': () => admin_tickets_user_col,
  'admin.title': () => admin_title,
  'admin.users.actions_col': () => admin_users_actions_col,
  'admin.users.all_users': () => admin_users_all_users,
  'admin.users.count': () => admin_users_count,
  'admin.users.credits_action_deduct': () => admin_users_credits_action_deduct,
  'admin.users.credits_action_grant': () => admin_users_credits_action_grant,
  'admin.users.credits_amount_label': () => admin_users_credits_amount_label,
  'admin.users.credits_col': () => admin_users_credits_col,
  'admin.users.credits_deducted': () => admin_users_credits_deducted,
  'admin.users.credits_desc_label': () => admin_users_credits_desc_label,
  'admin.users.credits_desc_placeholder': () =>
    admin_users_credits_desc_placeholder,
  'admin.users.credits_granted': () => admin_users_credits_granted,
  'admin.users.credits_invalid_amount': () =>
    admin_users_credits_invalid_amount,
  'admin.users.credits_submit': () => admin_users_credits_submit,
  'admin.users.credits_submitting': () => admin_users_credits_submitting,
  'admin.users.description': () => admin_users_description,
  'admin.users.email_col': () => admin_users_email_col,
  'admin.users.joined_col': () => admin_users_joined_col,
  'admin.users.manage_credits_for': () => admin_users_manage_credits_for,
  'admin.users.manage_credits_title': () => admin_users_manage_credits_title,
  'admin.users.manage_roles': () => admin_users_manage_roles,
  'admin.users.manage_roles_description': () =>
    admin_users_manage_roles_description,
  'admin.users.manage_roles_title': () => admin_users_manage_roles_title,
  'admin.users.no_users': () => admin_users_no_users,
  'admin.users.role_assigned': () => admin_users_role_assigned,
  'admin.users.role_removed': () => admin_users_role_removed,
  'admin.users.title': () => admin_users_title,
  'admin.users.user_col': () => admin_users_user_col,
  'blog.back_to_blog': () => blog_back_to_blog,
  'blog.description': () => blog_description,
  'blog.no_posts': () => blog_no_posts,
  'blog.read_more': () => blog_read_more,
  'blog.title': () => blog_title,
  'common.error.message': () => common_error_message,
  'common.error.retry': () => common_error_retry,
  'common.error.title': () => common_error_title,
  'common.metadata.description': () => common_metadata_description,
  'common.metadata.title': () => common_metadata_title,
  'common.nav.apikeys': () => common_nav_apikeys,
  'common.nav.billing': () => common_nav_billing,
  'common.nav.get_started': () => common_nav_get_started,
  'common.nav.profile': () => common_nav_profile,
  'common.nav.settings': () => common_nav_settings,
  'common.nav.sign_in': () => common_nav_sign_in,
  'common.nav.theme_dark': () => common_nav_theme_dark,
  'common.nav.theme_light': () => common_nav_theme_light,
  'common.nav.theme_system': () => common_nav_theme_system,
  'common.not_found.back_home': () => common_not_found_back_home,
  'common.not_found.message': () => common_not_found_message,
  'common.pages.back_to_home': () => common_pages_back_to_home,
  'common.pages.last_updated': () => common_pages_last_updated,
  'common.pricing.choose_payment': () => common_pricing_choose_payment,
  'common.pricing.choose_payment_desc': () =>
    common_pricing_choose_payment_desc,
  'common.pricing.get_started': () => common_pricing_get_started,
  'common.pricing.payment_for': () => common_pricing_payment_for,
  'common.pricing.payment_for_plan': () => common_pricing_payment_for_plan,
  'common.pricing.processing': () => common_pricing_processing,
  'common.search.placeholder': () => common_search_placeholder,
  'common.sign.already_have_account': () => common_sign_already_have_account,
  'common.sign.back_to_sign_in': () => common_sign_back_to_sign_in,
  'common.sign.confirm_new_password_placeholder': () =>
    common_sign_confirm_new_password_placeholder,
  'common.sign.confirm_password_placeholder': () =>
    common_sign_confirm_password_placeholder,
  'common.sign.confirm_password_title': () =>
    common_sign_confirm_password_title,
  'common.sign.email_placeholder': () => common_sign_email_placeholder,
  'common.sign.email_title': () => common_sign_email_title,
  'common.sign.forgot_password': () => common_sign_forgot_password,
  'common.sign.forgot_password_description': () =>
    common_sign_forgot_password_description,
  'common.sign.forgot_password_title': () => common_sign_forgot_password_title,
  'common.sign.github_sign_in': () => common_sign_github_sign_in,
  'common.sign.google_sign_in': () => common_sign_google_sign_in,
  'common.sign.invite_code_invalid': () => common_sign_invite_code_invalid,
  'common.sign.invite_code_placeholder': () =>
    common_sign_invite_code_placeholder,
  'common.sign.invite_code_required': () => common_sign_invite_code_required,
  'common.sign.invite_code_title': () => common_sign_invite_code_title,
  'common.sign.name_placeholder': () => common_sign_name_placeholder,
  'common.sign.name_title': () => common_sign_name_title,
  'common.sign.new_password_placeholder': () =>
    common_sign_new_password_placeholder,
  'common.sign.new_password_title': () => common_sign_new_password_title,
  'common.sign.no_account': () => common_sign_no_account,
  'common.sign.no_methods_description': () =>
    common_sign_no_methods_description,
  'common.sign.no_methods_title': () => common_sign_no_methods_title,
  'common.sign.or': () => common_sign_or,
  'common.sign.password_mismatch': () => common_sign_password_mismatch,
  'common.sign.password_placeholder': () => common_sign_password_placeholder,
  'common.sign.password_reset_unavailable_description': () =>
    common_sign_password_reset_unavailable_description,
  'common.sign.password_reset_unavailable_title': () =>
    common_sign_password_reset_unavailable_title,
  'common.sign.password_title': () => common_sign_password_title,
  'common.sign.redeem_description': () => common_sign_redeem_description,
  'common.sign.redeem_submit': () => common_sign_redeem_submit,
  'common.sign.redeem_title': () => common_sign_redeem_title,
  'common.sign.resend_verification': () => common_sign_resend_verification,
  'common.sign.resend_verification_countdown': () =>
    common_sign_resend_verification_countdown,
  'common.sign.reset_link_sent_description': () =>
    common_sign_reset_link_sent_description,
  'common.sign.reset_link_sent_title': () => common_sign_reset_link_sent_title,
  'common.sign.reset_password_description': () =>
    common_sign_reset_password_description,
  'common.sign.reset_password_invalid_token': () =>
    common_sign_reset_password_invalid_token,
  'common.sign.reset_password_missing_token': () =>
    common_sign_reset_password_missing_token,
  'common.sign.reset_password_submit': () => common_sign_reset_password_submit,
  'common.sign.reset_password_success': () =>
    common_sign_reset_password_success,
  'common.sign.reset_password_title': () => common_sign_reset_password_title,
  'common.sign.send_reset_link': () => common_sign_send_reset_link,
  'common.sign.sign_in_description': () => common_sign_sign_in_description,
  'common.sign.sign_in_title': () => common_sign_sign_in_title,
  'common.sign.sign_out_title': () => common_sign_sign_out_title,
  'common.sign.sign_up_description': () => common_sign_sign_up_description,
  'common.sign.sign_up_title': () => common_sign_sign_up_title,
  'common.sign.verify_email_continue': () => common_sign_verify_email_continue,
  'common.sign.verify_email_email_required': () =>
    common_sign_verify_email_email_required,
  'common.sign.verify_email_not_verified_yet': () =>
    common_sign_verify_email_not_verified_yet,
  'common.sign.verify_email_page_description': () =>
    common_sign_verify_email_page_description,
  'common.sign.verify_email_page_title': () =>
    common_sign_verify_email_page_title,
  'common.sign.verify_email_send_failed': () =>
    common_sign_verify_email_send_failed,
  'common.sign.verify_email_tip': () => common_sign_verify_email_tip,
  'common.support.attachments_label': () => common_support_attachments_label,
  'common.support.cancel': () => common_support_cancel,
  'common.support.content_label': () => common_support_content_label,
  'common.support.content_placeholder': () =>
    common_support_content_placeholder,
  'common.support.description': () => common_support_description,
  'common.support.open_label': () => common_support_open_label,
  'common.support.required': () => common_support_required,
  'common.support.sign_in': () => common_support_sign_in,
  'common.support.sign_in_notice': () => common_support_sign_in_notice,
  'common.support.submit': () => common_support_submit,
  'common.support.submitting': () => common_support_submitting,
  'common.support.success': () => common_support_success,
  'common.support.title': () => common_support_title,
  'common.support.title_label': () => common_support_title_label,
  'common.support.title_placeholder': () => common_support_title_placeholder,
  'common.support.track_hint_link': () => common_support_track_hint_link,
  'common.support.track_hint_prefix': () => common_support_track_hint_prefix,
  'common.systems.admin': () => common_systems_admin,
  'common.systems.home': () => common_systems_home,
  'common.systems.label': () => common_systems_label,
  'common.systems.settings': () => common_systems_settings,
  'common.table.next': () => common_table_next,
  'common.table.no_data': () => common_table_no_data,
  'common.table.page_info': () => common_table_page_info,
  'common.table.previous': () => common_table_previous,
  'common.table.refresh': () => common_table_refresh,
  'common.table.total': () => common_table_total,
  'landing.blog.description': () => landing_blog_description,
  'landing.blog.title': () => landing_blog_title,
  'landing.blog.view_all': () => landing_blog_view_all,
  'landing.chips.apikeys': () => landing_chips_apikeys,
  'landing.chips.auth': () => landing_chips_auth,
  'landing.chips.cms': () => landing_chips_cms,
  'landing.chips.credits': () => landing_chips_credits,
  'landing.chips.i18n': () => landing_chips_i18n,
  'landing.chips.payment': () => landing_chips_payment,
  'landing.chips.rbac': () => landing_chips_rbac,
  'landing.chips.subscription': () => landing_chips_subscription,
  'landing.cta.button': () => landing_cta_button,
  'landing.cta.headline': () => landing_cta_headline,
  'landing.cta.subheadline': () => landing_cta_subheadline,
  'landing.faq.customize.answer': () => landing_faq_customize_answer,
  'landing.faq.customize.question': () => landing_faq_customize_question,
  'landing.faq.database.answer': () => landing_faq_database_answer,
  'landing.faq.database.question': () => landing_faq_database_question,
  'landing.faq.description': () => landing_faq_description,
  'landing.faq.license.answer': () => landing_faq_license_answer,
  'landing.faq.license.question': () => landing_faq_license_question,
  'landing.faq.payment.answer': () => landing_faq_payment_answer,
  'landing.faq.payment.question': () => landing_faq_payment_question,
  'landing.faq.stack.answer': () => landing_faq_stack_answer,
  'landing.faq.stack.question': () => landing_faq_stack_question,
  'landing.faq.title': () => landing_faq_title,
  'landing.features.auth.description': () => landing_features_auth_description,
  'landing.features.auth.title': () => landing_features_auth_title,
  'landing.features.cms.description': () => landing_features_cms_description,
  'landing.features.cms.title': () => landing_features_cms_title,
  'landing.features.credits.description': () =>
    landing_features_credits_description,
  'landing.features.credits.title': () => landing_features_credits_title,
  'landing.features.description': () => landing_features_description,
  'landing.features.i18n.description': () => landing_features_i18n_description,
  'landing.features.i18n.title': () => landing_features_i18n_title,
  'landing.features.payment.description': () =>
    landing_features_payment_description,
  'landing.features.payment.title': () => landing_features_payment_title,
  'landing.features.rbac.description': () => landing_features_rbac_description,
  'landing.features.rbac.title': () => landing_features_rbac_title,
  'landing.features.title': () => landing_features_title,
  'landing.footer.admin': () => landing_footer_admin,
  'landing.footer.blog': () => landing_footer_blog,
  'landing.footer.docs': () => landing_footer_docs,
  'landing.footer.feature': () => landing_footer_feature,
  'landing.footer.github': () => landing_footer_github,
  'landing.footer.legal': () => landing_footer_legal,
  'landing.footer.privacy': () => landing_footer_privacy,
  'landing.footer.product': () => landing_footer_product,
  'landing.footer.resources': () => landing_footer_resources,
  'landing.footer.settings': () => landing_footer_settings,
  'landing.footer.tagline': () => landing_footer_tagline,
  'landing.footer.terms': () => landing_footer_terms,
  'landing.hero.cta': () => landing_hero_cta,
  'landing.hero.headline': () => landing_hero_headline,
  'landing.hero.secondary': () => landing_hero_secondary,
  'landing.hero.subheadline': () => landing_hero_subheadline,
  'landing.nav.blog': () => landing_nav_blog,
  'landing.nav.features': () => landing_nav_features,
  'landing.nav.pricing': () => landing_nav_pricing,
  'landing.pricing.best_value': () => landing_pricing_best_value,
  'landing.pricing.buy_lifetime': () => landing_pricing_buy_lifetime,
  'landing.pricing.description': () => landing_pricing_description,
  'landing.pricing.enterprise': () => landing_pricing_enterprise,
  'landing.pricing.enterprise_desc': () => landing_pricing_enterprise_desc,
  'landing.pricing.feature_1_project': () => landing_pricing_feature_1_project,
  'landing.pricing.feature_50k_credits': () =>
    landing_pricing_feature_50k_credits,
  'landing.pricing.feature_5k_credits': () =>
    landing_pricing_feature_5k_credits,
  'landing.pricing.feature_api_access': () =>
    landing_pricing_feature_api_access,
  'landing.pricing.feature_custom_integrations': () =>
    landing_pricing_feature_custom_integrations,
  'landing.pricing.feature_dedicated_support': () =>
    landing_pricing_feature_dedicated_support,
  'landing.pricing.feature_email_support': () =>
    landing_pricing_feature_email_support,
  'landing.pricing.feature_everything_pro': () =>
    landing_pricing_feature_everything_pro,
  'landing.pricing.feature_priority_support': () =>
    landing_pricing_feature_priority_support,
  'landing.pricing.feature_unlimited_credits': () =>
    landing_pricing_feature_unlimited_credits,
  'landing.pricing.feature_unlimited_projects': () =>
    landing_pricing_feature_unlimited_projects,
  'landing.pricing.lifetime': () => landing_pricing_lifetime,
  'landing.pricing.monthly': () => landing_pricing_monthly,
  'landing.pricing.popular': () => landing_pricing_popular,
  'landing.pricing.pro': () => landing_pricing_pro,
  'landing.pricing.pro_desc': () => landing_pricing_pro_desc,
  'landing.pricing.starter': () => landing_pricing_starter,
  'landing.pricing.starter_desc': () => landing_pricing_starter_desc,
  'landing.pricing.title': () => landing_pricing_title,
  'landing.pricing.yearly': () => landing_pricing_yearly,
  'settings.apikeys.actions_col': () => settings_apikeys_actions_col,
  'settings.apikeys.cancel': () => settings_apikeys_cancel,
  'settings.apikeys.copied': () => settings_apikeys_copied,
  'settings.apikeys.create': () => settings_apikeys_create,
  'settings.apikeys.create_description': () =>
    settings_apikeys_create_description,
  'settings.apikeys.create_key': () => settings_apikeys_create_key,
  'settings.apikeys.create_title': () => settings_apikeys_create_title,
  'settings.apikeys.created': () => settings_apikeys_created,
  'settings.apikeys.creating': () => settings_apikeys_creating,
  'settings.apikeys.deleted': () => settings_apikeys_deleted,
  'settings.apikeys.description': () => settings_apikeys_description,
  'settings.apikeys.failed': () => settings_apikeys_failed,
  'settings.apikeys.key_col': () => settings_apikeys_key_col,
  'settings.apikeys.key_copied': () => settings_apikeys_key_copied,
  'settings.apikeys.key_name': () => settings_apikeys_key_name,
  'settings.apikeys.key_name_placeholder': () =>
    settings_apikeys_key_name_placeholder,
  'settings.apikeys.name_col': () => settings_apikeys_name_col,
  'settings.apikeys.no_keys': () => settings_apikeys_no_keys,
  'settings.apikeys.title': () => settings_apikeys_title,
  'settings.apikeys.your_keys': () => settings_apikeys_your_keys,
  'settings.apikeys.your_keys_description': () =>
    settings_apikeys_your_keys_description,
  'settings.billing.actions_col': () => settings_billing_actions_col,
  'settings.billing.adjust': () => settings_billing_adjust,
  'settings.billing.amount': () => settings_billing_amount,
  'settings.billing.cancel': () => settings_billing_cancel,
  'settings.billing.cancel_back': () => settings_billing_cancel_back,
  'settings.billing.cancel_confirm': () => settings_billing_cancel_confirm,
  'settings.billing.cancel_description': () =>
    settings_billing_cancel_description,
  'settings.billing.cancel_failed': () => settings_billing_cancel_failed,
  'settings.billing.cancel_success': () => settings_billing_cancel_success,
  'settings.billing.cancel_title': () => settings_billing_cancel_title,
  'settings.billing.canceled_at': () => settings_billing_canceled_at,
  'settings.billing.canceled_end_at': () => settings_billing_canceled_end_at,
  'settings.billing.canceled_reason': () => settings_billing_canceled_reason,
  'settings.billing.canceling': () => settings_billing_canceling,
  'settings.billing.close': () => settings_billing_close,
  'settings.billing.credits': () => settings_billing_credits,
  'settings.billing.credits_description': () =>
    settings_billing_credits_description,
  'settings.billing.current_period': () => settings_billing_current_period,
  'settings.billing.date': () => settings_billing_date,
  'settings.billing.description': () => settings_billing_description,
  'settings.billing.end_time': () => settings_billing_end_time,
  'settings.billing.ends_on': () => settings_billing_ends_on,
  'settings.billing.interval': () => settings_billing_interval,
  'settings.billing.no_payments': () => settings_billing_no_payments,
  'settings.billing.no_subscription': () => settings_billing_no_subscription,
  'settings.billing.order_no': () => settings_billing_order_no,
  'settings.billing.payments': () => settings_billing_payments,
  'settings.billing.period_end': () => settings_billing_period_end,
  'settings.billing.period_start': () => settings_billing_period_start,
  'settings.billing.plan': () => settings_billing_plan,
  'settings.billing.provider': () => settings_billing_provider,
  'settings.billing.renews_on': () => settings_billing_renews_on,
  'settings.billing.status': () => settings_billing_status,
  'settings.billing.subscribe': () => settings_billing_subscribe,
  'settings.billing.subscription': () => settings_billing_subscription,
  'settings.billing.subscription_details': () =>
    settings_billing_subscription_details,
  'settings.billing.subscription_no': () => settings_billing_subscription_no,
  'settings.billing.subscriptions': () => settings_billing_subscriptions,
  'settings.billing.tab_active': () => settings_billing_tab_active,
  'settings.billing.tab_all': () => settings_billing_tab_all,
  'settings.billing.tab_canceled': () => settings_billing_tab_canceled,
  'settings.billing.tab_expired': () => settings_billing_tab_expired,
  'settings.billing.tab_paused': () => settings_billing_tab_paused,
  'settings.billing.tab_pending_cancel': () =>
    settings_billing_tab_pending_cancel,
  'settings.billing.tab_trialing': () => settings_billing_tab_trialing,
  'settings.billing.title': () => settings_billing_title,
  'settings.billing.view': () => settings_billing_view,
  'settings.credits.balance': () => settings_credits_balance,
  'settings.credits.credits': () => settings_credits_credits,
  'settings.credits.date': () => settings_credits_date,
  'settings.credits.description': () => settings_credits_description,
  'settings.credits.description_col': () => settings_credits_description_col,
  'settings.credits.expires_at': () => settings_credits_expires_at,
  'settings.credits.no_records': () => settings_credits_no_records,
  'settings.credits.purchase': () => settings_credits_purchase,
  'settings.credits.remaining': () => settings_credits_remaining,
  'settings.credits.scene': () => settings_credits_scene,
  'settings.credits.tab_all': () => settings_credits_tab_all,
  'settings.credits.tab_consume': () => settings_credits_tab_consume,
  'settings.credits.tab_grant': () => settings_credits_tab_grant,
  'settings.credits.title': () => settings_credits_title,
  'settings.credits.transaction_no': () => settings_credits_transaction_no,
  'settings.credits.type': () => settings_credits_type,
  'settings.nav.apikeys': () => settings_nav_apikeys,
  'settings.nav.billing': () => settings_nav_billing,
  'settings.nav.credits': () => settings_nav_credits,
  'settings.nav.overview': () => settings_nav_overview,
  'settings.nav.payments': () => settings_nav_payments,
  'settings.nav.profile': () => settings_nav_profile,
  'settings.nav.tickets': () => settings_nav_tickets,
  'settings.overview.apikeys_description': () =>
    settings_overview_apikeys_description,
  'settings.overview.getting_started': () => settings_overview_getting_started,
  'settings.overview.getting_started_description': () =>
    settings_overview_getting_started_description,
  'settings.overview.plan': () => settings_overview_plan,
  'settings.overview.plan_description': () =>
    settings_overview_plan_description,
  'settings.overview.plan_free': () => settings_overview_plan_free,
  'settings.overview.usage': () => settings_overview_usage,
  'settings.overview.usage_description': () =>
    settings_overview_usage_description,
  'settings.payments.amount': () => settings_payments_amount,
  'settings.payments.date': () => settings_payments_date,
  'settings.payments.description': () => settings_payments_description,
  'settings.payments.invoice': () => settings_payments_invoice,
  'settings.payments.no_payments': () => settings_payments_no_payments,
  'settings.payments.order_no': () => settings_payments_order_no,
  'settings.payments.product': () => settings_payments_product,
  'settings.payments.provider': () => settings_payments_provider,
  'settings.payments.status': () => settings_payments_status,
  'settings.payments.tab_all': () => settings_payments_tab_all,
  'settings.payments.tab_one_time': () => settings_payments_tab_one_time,
  'settings.payments.tab_renew': () => settings_payments_tab_renew,
  'settings.payments.tab_subscription': () =>
    settings_payments_tab_subscription,
  'settings.payments.title': () => settings_payments_title,
  'settings.payments.type': () => settings_payments_type,
  'settings.placeholder': () => settings_placeholder,
  'settings.profile.avatar': () => settings_profile_avatar,
  'settings.profile.avatar_hint': () => settings_profile_avatar_hint,
  'settings.profile.description': () => settings_profile_description,
  'settings.profile.email': () => settings_profile_email,
  'settings.profile.loading': () => settings_profile_loading,
  'settings.profile.name': () => settings_profile_name,
  'settings.profile.profile': () => settings_profile_profile,
  'settings.profile.save': () => settings_profile_save,
  'settings.profile.save_failed': () => settings_profile_save_failed,
  'settings.profile.saved': () => settings_profile_saved,
  'settings.profile.saving': () => settings_profile_saving,
  'settings.profile.title': () => settings_profile_title,
  'settings.tickets.actions_col': () => settings_tickets_actions_col,
  'settings.tickets.attachments_label': () =>
    settings_tickets_attachments_label,
  'settings.tickets.cancel': () => settings_tickets_cancel,
  'settings.tickets.close_success': () => settings_tickets_close_success,
  'settings.tickets.close_ticket': () => settings_tickets_close_ticket,
  'settings.tickets.closed_notice': () => settings_tickets_closed_notice,
  'settings.tickets.content_label': () => settings_tickets_content_label,
  'settings.tickets.content_placeholder': () =>
    settings_tickets_content_placeholder,
  'settings.tickets.create_button': () => settings_tickets_create_button,
  'settings.tickets.create_description': () =>
    settings_tickets_create_description,
  'settings.tickets.create_submit': () => settings_tickets_create_submit,
  'settings.tickets.create_success': () => settings_tickets_create_success,
  'settings.tickets.create_title': () => settings_tickets_create_title,
  'settings.tickets.created_col': () => settings_tickets_created_col,
  'settings.tickets.creating': () => settings_tickets_creating,
  'settings.tickets.description': () => settings_tickets_description,
  'settings.tickets.empty': () => settings_tickets_empty,
  'settings.tickets.latest_reply_col': () => settings_tickets_latest_reply_col,
  'settings.tickets.reply_placeholder': () =>
    settings_tickets_reply_placeholder,
  'settings.tickets.reply_submit': () => settings_tickets_reply_submit,
  'settings.tickets.replying': () => settings_tickets_replying,
  'settings.tickets.required': () => settings_tickets_required,
  'settings.tickets.status_closed': () => settings_tickets_status_closed,
  'settings.tickets.status_col': () => settings_tickets_status_col,
  'settings.tickets.status_open': () => settings_tickets_status_open,
  'settings.tickets.status_replied': () => settings_tickets_status_replied,
  'settings.tickets.support_team': () => settings_tickets_support_team,
  'settings.tickets.title': () => settings_tickets_title,
  'settings.tickets.title_col': () => settings_tickets_title_col,
  'settings.tickets.title_label': () => settings_tickets_title_label,
  'settings.tickets.title_placeholder': () =>
    settings_tickets_title_placeholder,
  'settings.tickets.updated_col': () => settings_tickets_updated_col,
  'settings.tickets.you': () => settings_tickets_you,
  'settings.title': () => settings_title,
  'settings.welcome': () => settings_welcome,
});
//#endregion
export {
  admin_settings_custom_remove as $,
  settings_tickets_content_label as $a,
  common_sign_verify_email_not_verified_yet as $c,
  admin_users_role_removed as $i,
  admin_posts_create as $n,
  settings_billing_cancel_failed as $o,
  admin_permissions_edit_description as $r,
  settings_nav_profile as $s,
  admin_credits_amount as $t,
  landing_pricing_title as A,
  admin_title as Aa,
  common_table_total as Ac,
  admin_roles_edit_title as Ai,
  common_sign_name_placeholder as Al,
  admin_posts_cancel as An,
  settings_credits_type as Ao,
  admin_categories_status_col as Ar,
  settings_profile_saved as As,
  admin_invite_codes_usage_col as At,
  admin_tickets_reply_placeholder as B,
  settings_tickets_reply_submit as Ba,
  common_pricing_processing as Bc,
  admin_roles_title as Bi,
  common_sign_sign_in_title as Bl,
  admin_posts_author_field as Bn,
  settings_payments_type as Bo,
  admin_permissions_confirm_delete as Br,
  settings_overview_getting_started_description as Bs,
  admin_invite_codes_create_success as Bt,
  landing_pricing_buy_lifetime as C,
  admin_nav_roles as Ca,
  common_nav_theme_system as Cc,
  admin_roles_title_placeholder as Ci,
  common_sign_no_methods_title as Cl,
  admin_payments_no_payments as Cn,
  settings_apikeys_title as Co,
  admin_categories_edit_description as Cr,
  settings_billing_no_subscription as Cs,
  admin_invite_codes_copied as Ct,
  landing_pricing_yearly as D,
  admin_nav_overview as Da,
  common_table_refresh as Dc,
  admin_roles_delete_confirm as Di,
  common_sign_or as Dl,
  admin_posts_updated as Dn,
  settings_credits_remaining as Do,
  admin_categories_create as Dr,
  settings_billing_title as Ds,
  admin_invite_codes_expires_col as Dt,
  landing_pricing_lifetime as E,
  admin_nav_settings as Ea,
  common_nav_profile as Ec,
  admin_roles_name_field as Ei,
  common_sign_sign_out_title as El,
  admin_posts_deleted as En,
  settings_credits_description_col as Eo,
  admin_categories_create_title as Er,
  settings_billing_description as Es,
  admin_invite_codes_created_col as Et,
  admin_tickets_close_ticket as F,
  settings_tickets_create_submit as Fa,
  common_systems_admin as Fc,
  admin_roles_description_col as Fi,
  common_sign_password_placeholder as Fl,
  admin_posts_category_placeholder as Fn,
  settings_credits_description as Fo,
  admin_categories_description as Fr,
  settings_profile_email as Fs,
  admin_invite_codes_expires_label as Ft,
  admin_tickets_user_col as G,
  settings_tickets_create_success as Ga,
  common_sign_invite_code_invalid as Gc,
  admin_users_credits_submit as Gi,
  admin_posts_slug_placeholder as Gn,
  settings_payments_no_payments as Go,
  admin_permissions_action_placeholder as Gr,
  settings_overview_plan_description as Gs,
  admin_invite_codes_create_button as Gt,
  admin_tickets_actions_col as H,
  settings_tickets_closed_notice as Ha,
  common_sign_redeem_submit as Hc,
  admin_users_credits_granted as Hi,
  admin_posts_description_field as Hn,
  settings_payments_amount as Ho,
  admin_permissions_save as Hr,
  settings_overview_apikeys_description as Hs,
  admin_invite_codes_create_submit as Ht,
  admin_tickets_status_updated as I,
  settings_tickets_cancel as Ia,
  common_pricing_payment_for_plan as Ic,
  admin_roles_title_col as Ii,
  common_sign_password_title as Il,
  admin_posts_category_field as In,
  settings_credits_title as Io,
  admin_categories_title as Ir,
  settings_profile_name as Is,
  admin_invite_codes_trial_days_label as It,
  admin_tickets_title as J,
  settings_tickets_actions_col as Ja,
  common_sign_invite_code_title as Jc,
  admin_users_credits_amount_label as Ji,
  admin_posts_delete_title as Jn,
  settings_billing_date as Jo,
  admin_permissions_resource_field as Jr,
  settings_nav_tickets as Js,
  admin_credits_created_at as Jt,
  admin_tickets_title_col as K,
  settings_tickets_required as Ka,
  common_sign_invite_code_required as Kc,
  admin_users_credits_desc_placeholder as Ki,
  admin_posts_slug_field as Kn,
  settings_payments_description as Ko,
  admin_permissions_action_field as Kr,
  settings_overview_plan_free as Ks,
  admin_invite_codes_description as Kt,
  admin_tickets_reply_success as L,
  settings_tickets_you as La,
  common_pricing_payment_for as Lc,
  admin_roles_name_col as Li,
  common_sign_email_placeholder as Ll,
  admin_posts_content_placeholder as Ln,
  settings_payments_invoice as Lo,
  admin_permissions_deleted as Lr,
  settings_profile_profile as Ls,
  admin_invite_codes_max_uses_label as Lt,
  admin_tickets_latest_reply_col as M,
  settings_tickets_latest_reply_col as Ma,
  common_search_placeholder as Mc,
  admin_roles_create_title as Mi,
  common_sign_password_mismatch as Ml,
  admin_posts_status_published as Mn,
  settings_credits_no_records as Mo,
  admin_categories_title_col as Mr,
  settings_profile_save as Ms,
  admin_invite_codes_invalid_input as Mt,
  admin_tickets_admin as N,
  settings_tickets_attachments_label as Na,
  common_systems_home as Nc,
  admin_roles_create_role as Ni,
  common_sign_confirm_password_placeholder as Nl,
  admin_posts_status_draft as Nn,
  settings_credits_purchase as No,
  admin_categories_slug_col as Nr,
  settings_profile_avatar_hint as Ns,
  admin_invite_codes_note_placeholder as Nt,
  landing_pricing_monthly as O,
  admin_loading as Oa,
  common_table_next as Oc,
  admin_roles_delete_title as Oi,
  common_sign_already_have_account as Ol,
  admin_posts_created as On,
  settings_credits_credits as Oo,
  admin_categories_actions_col as Or,
  settings_profile_loading as Os,
  admin_invite_codes_note_col as Ot,
  admin_tickets_reopen_ticket as P,
  settings_tickets_creating as Pa,
  common_systems_settings as Pc,
  admin_roles_actions_col as Pi,
  common_sign_confirm_password_title as Pl,
  admin_posts_status_field as Pn,
  settings_credits_balance as Po,
  admin_categories_no_data as Pr,
  settings_profile_avatar as Ps,
  admin_invite_codes_note_label as Pt,
  admin_settings_placeholders_creem_test_amount as Q,
  settings_tickets_content_placeholder as Qa,
  common_sign_verify_email_send_failed as Qc,
  admin_users_manage_credits_title as Qi,
  admin_posts_create_title as Qn,
  settings_billing_close as Qo,
  admin_permissions_delete_title as Qr,
  settings_nav_billing as Qs,
  admin_credits_remaining as Qt,
  admin_tickets_replying as R,
  settings_tickets_support_team as Ra,
  common_pricing_choose_payment_desc as Rc,
  admin_roles_no_roles as Ri,
  common_sign_email_title as Rl,
  admin_posts_content_field as Rn,
  settings_payments_date as Ro,
  admin_permissions_updated as Rr,
  settings_profile_description as Rs,
  admin_invite_codes_count_label as Rt,
  landing_pricing_starter as S,
  admin_nav_permissions as Sa,
  common_pages_back_to_home as Sc,
  admin_roles_description_field as Si,
  common_sign_no_methods_description as Sl,
  admin_payments_order_no as Sn,
  settings_apikeys_description as So,
  admin_categories_delete_title as Sr,
  settings_billing_subscribe as Ss,
  admin_invite_codes_delete_title as St,
  landing_pricing_popular as T,
  admin_nav_rbac as Ta,
  common_nav_theme_light as Tc,
  admin_roles_name_placeholder as Ti,
  common_sign_google_sign_in as Tl,
  admin_payments_title as Tn,
  settings_credits_expires_at as To,
  admin_categories_create_description as Tr,
  settings_billing_subscription as Ts,
  admin_invite_codes_actions_col as Tt,
  admin_tickets_updated_col as U,
  settings_tickets_close_ticket as Ua,
  common_sign_redeem_description as Uc,
  admin_users_credits_invalid_amount as Ui,
  admin_posts_title_placeholder as Un,
  settings_payments_product as Uo,
  admin_permissions_title_placeholder as Ur,
  settings_overview_usage_description as Us,
  admin_invite_codes_create_description as Ut,
  admin_tickets_empty as V,
  settings_tickets_reply_placeholder as Va,
  common_pricing_get_started as Vc,
  admin_users_credits_deducted as Vi,
  admin_posts_description_placeholder as Vn,
  settings_payments_status as Vo,
  admin_permissions_cancel as Vr,
  settings_overview_getting_started as Vs,
  admin_invite_codes_creating as Vt,
  admin_tickets_status_col as W,
  settings_tickets_close_success as Wa,
  common_sign_redeem_title as Wc,
  admin_users_credits_submitting as Wi,
  admin_posts_title_field as Wn,
  settings_payments_order_no as Wo,
  admin_permissions_title_field as Wr,
  settings_overview_usage as Ws,
  admin_invite_codes_create_title as Wt,
  admin_settings_placeholders_alipay_test_amount as X,
  settings_tickets_status_col as Xa,
  common_sign_resend_verification as Xc,
  admin_users_credits_action_grant as Xi,
  admin_posts_edit_title as Xn,
  settings_billing_amount as Xo,
  admin_permissions_code_field as Xr,
  settings_nav_credits as Xs,
  admin_credits_scene as Xt,
  admin_settings_placeholders_wechat_test_amount as Y,
  settings_tickets_updated_col as Ya,
  common_sign_resend_verification_countdown as Yc,
  admin_users_credits_action_deduct as Yi,
  admin_posts_edit_description as Yn,
  settings_billing_provider as Yo,
  admin_permissions_code_placeholder as Yr,
  settings_nav_apikeys as Ys,
  admin_credits_expires_at as Yt,
  admin_settings_placeholders_paypal_test_amount as Z,
  settings_tickets_title_col as Za,
  common_sign_verify_email_email_required as Zc,
  admin_users_manage_credits_for as Zi,
  admin_posts_create_description as Zn,
  settings_billing_actions_col as Zo,
  admin_permissions_delete_confirm as Zr,
  settings_nav_payments as Zs,
  admin_credits_type as Zt,
  landing_pricing_enterprise_desc as _,
  admin_nav_payments as _a,
  common_support_sign_in_notice as _c,
  admin_roles_created as _i,
  common_sign_reset_link_sent_title as _l,
  admin_payments_provider as _n,
  settings_apikeys_key_name_placeholder as _o,
  admin_categories_title_placeholder as _r,
  settings_billing_subscription_no as _s,
  admin_settings_description as _t,
  blog_title as a,
  admin_users_credits_col as aa,
  common_support_submitting as ac,
  admin_permissions_title_col as ai,
  common_sign_password_reset_unavailable_title as al,
  admin_subscriptions_created_at as an,
  settings_tickets_description as ao,
  admin_posts_title_col as ar,
  settings_billing_cancel_title as as,
  admin_settings_custom_title as at,
  landing_pricing_pro as b,
  admin_nav_categories as ba,
  common_support_open_label as bc,
  admin_roles_save as bi,
  common_sign_forgot_password_title as bl,
  admin_payments_amount as bn,
  settings_apikeys_create_title as bo,
  admin_categories_slug_field as br,
  settings_billing_plan as bs,
  admin_invite_codes_delete_confirm as bt,
  landing_pricing_feature_unlimited_credits as c,
  admin_users_no_users as ca,
  common_support_success as cc,
  admin_permissions_code_col as ci,
  common_sign_reset_password_success as cl,
  admin_subscriptions_status as cn,
  settings_apikeys_key_col as co,
  admin_posts_title as cr,
  settings_billing_canceled_reason as cs,
  admin_settings_test_running as ct,
  landing_pricing_feature_priority_support as d,
  admin_stats_roles as da,
  common_support_track_hint_prefix as dc,
  admin_permissions_title as di,
  common_sign_new_password_placeholder as dl,
  admin_subscriptions_user as dn,
  settings_apikeys_deleted as do,
  admin_categories_created as dr,
  settings_billing_period_end as ds,
  admin_settings_test_title as dt,
  admin_users_role_assigned as ea,
  settings_nav_overview as ec,
  admin_permissions_edit_title as ei,
  common_sign_verify_email_tip as el,
  admin_credits_user as en,
  settings_tickets_title_placeholder as eo,
  admin_posts_actions_col as er,
  settings_billing_cancel_success as es,
  admin_settings_custom_add as et,
  landing_pricing_feature_50k_credits as f,
  admin_stats_total_users as fa,
  common_support_content_placeholder as fc,
  admin_roles_permissions_saved as fi,
  common_sign_new_password_title as fl,
  admin_subscriptions_subscription_no as fn,
  settings_apikeys_key_copied as fo,
  admin_categories_confirm_delete as fr,
  settings_billing_period_start as fs,
  admin_settings_test_button as ft,
  landing_pricing_feature_1_project as g,
  admin_nav_subscriptions as ga,
  common_support_sign_in as gc,
  admin_roles_updated as gi,
  common_sign_reset_link_sent_description as gl,
  admin_payments_created_at as gn,
  settings_apikeys_cancel as go,
  admin_categories_description_field as gr,
  settings_billing_current_period as gs,
  admin_settings_save as gt,
  landing_pricing_feature_5k_credits as h,
  admin_nav_credits as ha,
  common_support_title_label as hc,
  admin_roles_deleted as hi,
  common_sign_back_to_sign_in as hl,
  admin_subscriptions_title as hn,
  settings_apikeys_create as ho,
  admin_categories_description_placeholder as hr,
  settings_billing_end_time as hs,
  admin_settings_saving as ht,
  blog_description as i,
  admin_users_joined_col as ia,
  common_support_attachments_label as ic,
  admin_permissions_actions_col as ii,
  common_sign_password_reset_unavailable_description as il,
  admin_credits_title as in,
  settings_tickets_create_button as io,
  admin_posts_slug_col as ir,
  settings_billing_cancel_description as is,
  admin_settings_custom_description as it,
  admin_tickets_created_col as j,
  settings_tickets_created_col as ja,
  common_table_no_data as jc,
  admin_roles_create_description as ji,
  common_sign_name_title as jl,
  admin_posts_save as jn,
  settings_credits_transaction_no as jo,
  admin_categories_description_col as jr,
  settings_profile_saving as js,
  admin_invite_codes_code_col as jt,
  landing_pricing_description as k,
  admin_description as ka,
  common_table_previous as kc,
  admin_roles_edit_description as ki,
  common_sign_no_account as kl,
  admin_posts_confirm_delete as kn,
  settings_credits_scene as ko,
  admin_categories_created_at as kr,
  settings_profile_save_failed as ks,
  admin_invite_codes_trial_days_col as kt,
  landing_pricing_feature_everything_pro as l,
  admin_users_description as la,
  common_support_required as lc,
  admin_permissions_no_permissions as li,
  common_sign_reset_password_submit as ll,
  admin_subscriptions_interval as ln,
  settings_apikeys_name_col as lo,
  admin_categories_deleted as lr,
  settings_billing_canceled_end_at as ls,
  admin_settings_test_run as lt,
  landing_pricing_feature_email_support as m,
  admin_nav_invite_codes as ma,
  common_support_title_placeholder as mc,
  admin_roles_manage_permissions_title as mi,
  common_sign_reset_password_title as ml,
  admin_subscriptions_description as mn,
  settings_apikeys_creating as mo,
  admin_categories_save as mr,
  settings_billing_renews_on as ms,
  admin_settings_save_success as mt,
  blog_back_to_blog as n,
  admin_users_manage_roles_title as na,
  settings_welcome as nc,
  admin_permissions_create_title as ni,
  common_sign_verify_email_page_description as nl,
  admin_credits_no_credits as nn,
  settings_tickets_create_description as no,
  admin_posts_status_col as nr,
  settings_billing_cancel_back as ns,
  admin_settings_custom_key_placeholder as nt,
  landing_pricing_feature_custom_integrations as o,
  admin_users_email_col as oa,
  common_support_submit as oc,
  admin_permissions_action_col as oi,
  common_sign_reset_password_missing_token as ol,
  admin_subscriptions_period as on,
  settings_tickets_title as oo,
  admin_posts_no_data as or,
  settings_billing_cancel as os,
  admin_settings_test_error as ot,
  landing_pricing_feature_unlimited_projects as p,
  admin_nav_tickets as pa,
  common_support_content_label as pc,
  admin_roles_manage_permissions_description as pi,
  common_sign_reset_password_description as pl,
  admin_subscriptions_no_subscriptions as pn,
  settings_apikeys_created as po,
  admin_categories_cancel as pr,
  settings_billing_ends_on as ps,
  admin_settings_save_error as pt,
  admin_tickets_description as q,
  settings_tickets_empty as qa,
  common_sign_invite_code_placeholder as qc,
  admin_users_credits_desc_label as qi,
  admin_posts_delete_confirm as qn,
  settings_payments_title as qo,
  admin_permissions_resource_placeholder as qr,
  settings_overview_plan as qs,
  admin_invite_codes_title as qt,
  blog_no_posts as r,
  admin_users_actions_col as ra,
  settings_title as rc,
  admin_permissions_create_permission as ri,
  common_sign_verify_email_page_title as rl,
  admin_credits_description as rn,
  settings_tickets_create_title as ro,
  admin_posts_author_col as rr,
  settings_billing_cancel_confirm as rs,
  admin_settings_custom_empty as rt,
  landing_pricing_feature_dedicated_support as s,
  admin_users_user_col as sa,
  common_support_cancel as sc,
  admin_permissions_resource_col as si,
  common_sign_reset_password_invalid_token as sl,
  admin_subscriptions_provider as sn,
  settings_apikeys_actions_col as so,
  admin_posts_description as sr,
  settings_billing_view as ss,
  admin_settings_test_close as st,
  _index_exports as t,
  admin_users_manage_roles_description as ta,
  settings_placeholder as tc,
  admin_permissions_create_description as ti,
  common_sign_verify_email_continue as tl,
  admin_credits_transaction_no as tn,
  settings_tickets_title_label as to,
  admin_posts_created_at as tr,
  settings_billing_canceling as ts,
  admin_settings_custom_value_placeholder as tt,
  landing_pricing_feature_api_access as u,
  admin_users_title as ua,
  common_support_track_hint_link as uc,
  admin_permissions_description as ui,
  common_sign_confirm_new_password_placeholder as ul,
  admin_subscriptions_amount as un,
  settings_apikeys_no_keys as uo,
  admin_categories_updated as ur,
  settings_billing_canceled_at as us,
  admin_settings_test_description as ut,
  landing_pricing_enterprise as v,
  admin_nav_billing as va,
  common_support_description as vc,
  admin_roles_confirm_delete as vi,
  common_sign_send_reset_link as vl,
  admin_payments_type as vn,
  settings_apikeys_key_name as vo,
  admin_categories_title_field as vr,
  settings_billing_interval as vs,
  admin_settings_title as vt,
  landing_pricing_best_value as w,
  admin_nav_users as wa,
  common_nav_theme_dark as wc,
  admin_roles_title_field as wi,
  common_sign_github_sign_in as wl,
  admin_payments_description as wn,
  settings_credits_date as wo,
  admin_categories_edit_title as wr,
  settings_billing_subscription_details as ws,
  admin_invite_codes_empty as wt,
  landing_pricing_starter_desc as x,
  admin_nav_content as xa,
  common_pages_last_updated as xc,
  admin_roles_description_placeholder as xi,
  common_sign_forgot_password as xl,
  admin_payments_user as xn,
  settings_apikeys_create_key as xo,
  admin_categories_delete_confirm as xr,
  settings_billing_adjust as xs,
  admin_invite_codes_delete_description as xt,
  landing_pricing_pro_desc as y,
  admin_nav_posts as ya,
  common_support_title as yc,
  admin_roles_cancel as yi,
  common_sign_forgot_password_description as yl,
  admin_payments_status as yn,
  settings_apikeys_create_description as yo,
  admin_categories_slug_placeholder as yr,
  settings_billing_status as ys,
  admin_invite_codes_delete_success as yt,
  admin_tickets_reply_submit as z,
  settings_tickets_replying as za,
  common_pricing_choose_payment as zc,
  admin_roles_description as zi,
  common_sign_sign_up_title as zl,
  admin_posts_author_placeholder as zn,
  settings_payments_provider as zo,
  admin_permissions_created as zr,
  settings_profile_title as zs,
  admin_invite_codes_cancel as zt,
};
