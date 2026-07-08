import { useQuery } from '@tanstack/react-query';

import { r as apiGet } from './api-client-ddg0Kx1A.js';

//#region src/hooks/use-public-config.ts
function usePublicConfig() {
  return useQuery({
    queryKey: ['public-config'],
    queryFn: () => apiGet('/api/config/public', { cache: 'no-store' }),
    staleTime: 0,
  });
}
//#endregion
export { usePublicConfig as t };
