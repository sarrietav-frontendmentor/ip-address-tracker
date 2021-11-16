import { ApiResponse } from '@/types/types';
import axios from 'axios';

interface IpapiResponse {
  ip: '208.67.222.222';
  city: 'San Francisco';
  region: 'California';
  region_code: 'CA';
  country: 'US';
  country_name: 'United States';
  continent_code: 'NA';
  in_eu: false;
  postal: '94107';
  latitude: 37.7697;
  longitude: -122.3933;
  timezone: 'America/Los_Angeles';
  utc_offset: '-0800';
  country_calling_code: '+1';
  currency: 'USD';
  languages: 'en-US,es-US,haw,fr';
  asn: 'AS36692';
  org: 'OpenDNS, LLC';
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
