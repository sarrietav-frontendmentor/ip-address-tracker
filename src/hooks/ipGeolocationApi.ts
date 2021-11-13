import axios from 'axios';

interface IpifyResponse {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}

export const callGeolocationApi = async (
  ipAddress?: string
): Promise<{
  ip: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  isp: string;
}> => {
  const response = await axios.get<IpifyResponse>(
    'https://geo.ipify.org/api/v2/country,city',
    {
      params: ipAddress
        ? { ipKey: process.env.VUE_APP_IPIFY_API_KEY, ipAddress }
        : { ipKey: process.env.VUE_APP_IPIFY_API_KEY },
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
