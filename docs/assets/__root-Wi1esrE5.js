import { c as createServerFn } from '../server.js';
import { t as createServerRpc } from './createServerRpc-BHjI5Bvh.js';

/* empty css                 */
//#region src/routes/__root.tsx?tss-serverfn-split
var getAnalyticsConfigs_createServerFn_handler = createServerRpc(
  {
    id: 'cbd81923ae1249d4c007f69579597cf1e79f1f7b8675cc608ba82e8926b5bb59',
    name: 'getAnalyticsConfigs',
    filename: 'src/routes/__root.tsx',
  },
  (opts) => getAnalyticsConfigs.__executeServer(opts)
);
var getAnalyticsConfigs = createServerFn().handler(
  getAnalyticsConfigs_createServerFn_handler,
  async () => {
    const { getAllConfigs } = await import('./service-DtfYmNeb.js').then(
      (n) => n.u
    );
    const configs = await getAllConfigs();
    return {
      gaId: configs.google_analytics_id?.trim() || '',
      plausibleDomain: configs.plausible_domain?.trim() || '',
      plausibleSrc: configs.plausible_src?.trim() || '',
      crispWebsiteId:
        configs.crisp_enabled === 'true'
          ? configs.crisp_website_id?.trim() || ''
          : '',
      tawkPropertyId:
        configs.tawk_enabled === 'true'
          ? configs.tawk_property_id?.trim() || ''
          : '',
      tawkWidgetId:
        configs.tawk_enabled === 'true'
          ? configs.tawk_widget_id?.trim() || ''
          : '',
    };
  }
);
//#endregion
export { getAnalyticsConfigs_createServerFn_handler };
