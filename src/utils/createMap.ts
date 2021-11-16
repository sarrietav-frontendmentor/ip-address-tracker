import Leaflet from 'leaflet';

const svgIcon = Leaflet.divIcon({
  html: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="56"
        
      >
        <path
          fill-rule="evenodd"
          d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"
        />
      </svg>`,
  className: 'svg-icon',
  iconSize: [46, 56],
  iconAnchor: [12, 40],
});

export const createMap = ({
  latitude,
  longitude,
}: {
  longitude: number;
  latitude: number;
}): Leaflet.Map => {
  const map = Leaflet.map('map', {
    zoomControl: false,
  }).setView([latitude, longitude], 15);

  Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  Leaflet.marker([latitude, longitude], { icon: svgIcon }).addTo(map);

  return map;
};
