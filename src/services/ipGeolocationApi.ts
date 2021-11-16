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
    `https://ipapi.co/${ipAddress ? ipAddress + '/' : ''}json/`
  );

  const {
    ip,
    city,
    org,
    latitude,
    longitude,
    postal,
    region_code,
    utc_offset,
  } = response.data;

  return {
    ip,
    city,
    region: region_code,
    lat: latitude,
    lng: longitude,
    postalCode: postal,
    timezone: utc_offset,
    isp: org,
  };
};
