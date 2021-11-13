<template>
  <div class="h-screen flex flex-col">
    <main class="w-full bg-pattern flex flex-col p-5 space-y-5">
      <header>
        <h1 class="text-white text-center font-bold text-2xl">
          IP Address Tracker
        </h1>
      </header>
      <IpInput v-model="ipAddress" @submit="handleIpInputSubmit" />
      <ResponseBox
        class="z-20"
        :ip="responseInfo?.ip"
        :city="responseInfo?.city"
        :region="responseInfo?.region"
        :postal-code="responseInfo?.postalCode"
        :timezone="responseInfo?.timezone"
        :isp="responseInfo?.isp"
      />
    </main>
    <div class="w-full h-full relative -mt-48">
      <div id="map" class="w-full h-full absolute z-0"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ref, onMounted } from 'vue';
import IpInput from './components/IpInput.vue';
import ResponseBox from './components/ResponseBox.vue';
import { createMap } from './hooks/createMap';
import { callGeolocationApi } from './hooks/ipGeolocationApi';

const map = ref<Leaflet.Map>();
const ipAddress = ref<string>();
const responseInfo = ref<{
  ip: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  isp: string;
}>();

onMounted(async () => {
  const response = await callGeolocationApi();

  const { lng, lat } = response;

  responseInfo.value = response;

  map.value = createMap({
    longitude: lng,
    latitude: lat,
  });
});

const handleIpInputSubmit = async () => {
  const response = await callGeolocationApi(ipAddress.value);

  const { lng, lat } = response;

  responseInfo.value = response;

  map.value = createMap({
    longitude: lng,
    latitude: lat,
  });
};
</script>
