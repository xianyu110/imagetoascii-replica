//#region src/lib/api-client.ts
var ApiError = class extends Error {
  code;
  data;
  constructor(code, message, data) {
    super(message);
    this.code = code;
    this.data = data;
    this.name = 'ApiError';
  }
};
async function request(url, init) {
  const res = await fetch(url, {
    ...init,
    headers: {
      ...(init?.body ? { 'Content-Type': 'application/json' } : {}),
      ...init?.headers,
    },
  });
  const json = await res.json().catch(() => ({
    code: -1,
    message: res.statusText || 'Request failed',
  }));
  if (json.code !== 0)
    throw new ApiError(
      json.code ?? -1,
      json.message || 'Request failed',
      json.data
    );
  return json.data;
}
var apiGet = (url, init) => request(url, init);
var apiPost = (url, body) =>
  request(url, {
    method: 'POST',
    body: body == null ? void 0 : JSON.stringify(body),
  });
var apiPut = (url, body) =>
  request(url, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
var apiPatch = (url, body) =>
  request(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
var apiDelete = (url) => request(url, { method: 'DELETE' });
function pageQuery(base, p) {
  const params = new URLSearchParams({
    page: String(p.page),
    pageSize: String(p.pageSize),
  });
  if (p.search) params.set('search', p.search);
  return `${base}?${params}`;
}
//#endregion
export {
  apiPost as a,
  apiPatch as i,
  apiDelete as n,
  apiPut as o,
  apiGet as r,
  pageQuery as s,
  ApiError as t,
};
