import { Map } from 'leaflet';
import { ApiResponse } from '@/types/types';
import { createMap } from './createMap';
import { callGeolocationApi } from '@/services/ipGeolocationApi';

export const useGeoApi = async (
  ipAddress?: string
): Promise<{ response: ApiResponse; leafletMap: Map }> => {
  const response = await callGeolocationApi(ipAddress);

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
