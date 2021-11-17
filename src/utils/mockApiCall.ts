import { ApiResponse } from '@/types/types';

export const mockApiCall = (ipAddress?: string): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          city: 'New yorkkkkkk',
          ip: ipAddress ?? '255.255.255.255',
          isp: 'SpaceX Amazonwebservice Starlinkkkkkk',
          lat: 40.7166638,
          lng: -74.0,
          postalCode: '10001',
          region: 'NY',
          timezone: '-05:00',
        }),
      200
    );
  });
};
