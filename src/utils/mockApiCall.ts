import { ApiResponse } from '@/types/types';

export const mockApiCall = (ipAddress?: string): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          city: 'Cartagena',
          ip: ipAddress ?? '186.99.11.183',
          isp: 'SpaceX Starlink',
          lat: 10.39972,
          lng: -75.51444,
          postalCode: '10001',
          region: 'Bolivar',
          timezone: '+1:00',
        }),
      1000
    );
  });
};
