import { ApiResponse } from '@/types/types';
import axios from 'axios';

interface IpapiResponse {
  ip: string;
  city: string;
  region_code: string;
  postal: string;
  latitude: number;
  longitude: number;
  utc_offset: string;
  org: string;
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
