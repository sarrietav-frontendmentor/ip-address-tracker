import { LatLng, Map } from 'leaflet';
import { ApiResponse } from '@/types/types';
import { createMap } from './createMap';
import { callGeolocationApi } from '@/services/ipGeolocationApi';

export const useGeoApi = async (
  ipAddress?: string,
  leafletMap?: Map
): Promise<{ response: ApiResponse; leafletMap: Map }> => {
  const response = await callGeolocationApi(ipAddress);

  const { lng, lat } = response;

  if (leafletMap) {
    leafletMap.setView(new LatLng(lat, lng), 15);
  } else {
    leafletMap = createMap({
      longitude: lng,
      latitude: lat,
    });
  }

  return {
    response,
    leafletMap,
  };
};
