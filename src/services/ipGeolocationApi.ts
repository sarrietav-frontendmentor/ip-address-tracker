import { ApiResponse } from '@/types/types';
import axios from 'axios';

interface IpapiResponse {
  ip: '8.8.8.8';
  city: 'Mountain View';
  region_code: 'CA';
  postal: '94035';
  latitude: 37.386;
  longitude: -122.0838;
  utc_offset: '-0800';
  org: 'Google LLC';
}

export const callGeolocationApi = async (
  ipAddress?: string
): Promise<ApiResponse> => {
  const response = await axios.get<IpapiResponse>(
    'https://geo.ipify.org/api/v2/country,city',
    {
      params: ipAddress
        ? { apiKey: process.env.VUE_APP_IPIFY_API_KEY, ipAddress }
        : { apiKey: process.env.VUE_APP_IPIFY_API_KEY },
    }
  );

  const {
    ip,
    location: { city, region, lat, lng, postalCode, timezone },
    isp,
  } = response.data;

  return {
    ip,
    city,
    region,
    lat,
    lng,
    postalCode,
    timezone,
    isp,
  };
};
