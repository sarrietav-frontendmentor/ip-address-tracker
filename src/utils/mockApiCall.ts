import { ApiResponse } from '@/types/types';

export const mockApiCall = (ipAddress?: string): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          city: 'New york',
          ip: ipAddress ?? '127.0.0.1',
          isp: 'SpaceX Starlink',
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
