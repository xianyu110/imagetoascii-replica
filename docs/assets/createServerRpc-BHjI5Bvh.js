import { l as TSS_SERVER_FUNCTION } from '../server.js';

//#region node_modules/.pnpm/@tanstack+start-server-core@1.169.9_crossws@0.4.5_srvx@0.11.16_/node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = '/_serverFn/' + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true,
  });
};
//#endregion
export { createServerRpc as t };
