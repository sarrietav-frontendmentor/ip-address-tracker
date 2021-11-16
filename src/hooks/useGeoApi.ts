import { Map } from 'leaflet';
import { ApiResponse } from '@/types/types';
import { mockApiCall } from '@/utils/mockApiCall';
import { createMap } from './createMap';

export const useGeoApi = async (
  ipAddress?: string
): Promise<{ response: ApiResponse; leafletMap: Map }> => {
  const response = await mockApiCall(ipAddress);

  const { lng, lat } = response;

  const leafletMap = createMap({
    longitude: lng,
    latitude: lat,
  });

  return {
    response,
    leafletMap,
  };
};
