<template>
  <div class="h-screen flex flex-col">
    <main class="w-full bg-pattern flex flex-col p-5 space-y-5 h-96">
      <header>
        <h1 class="text-white text-center font-bold text-2xl">
          IP Address Tracker
        </h1>
      </header>
      <IpInput v-model="ipAddress" @submit="handleIpInputSubmit" />
    </main>
    <div class="w-full px-5">
      <div class="relative flex justify-center items-center">
        <TheResponseBox
          class="absolute w-full shadow-2xl"
          :is-loading="isLoading"
          :ip="responseInfo?.ip"
          :city="responseInfo?.city"
          :region="responseInfo?.region"
          :postal-code="responseInfo?.postalCode"
          :timezone="responseInfo?.timezone"
          :isp="responseInfo?.isp"
        />
      </div>
    </div>
    <div class="w-full h-full relative">
      <div id="map" class="w-full h-full absolute z-0"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ref, onMounted } from 'vue';
import IpInput from './components/IpInput.vue';
import TheResponseBox from './components/TheResponseBox.vue';
import { createMap } from './hooks/createMap';
import { ApiResponse } from '@/types/types';
import { mockApiCall } from '@/utils/mockApiCall';

const map = ref<Leaflet.Map>();
const ipAddress = ref<string>();
const responseInfo = ref<ApiResponse>();
const isLoading = ref<boolean>();

onMounted(async () => {
  isLoading.value = true;
  const response = await mockApiCall();

  ipAddress.value = response.ip;

  const { lng, lat } = response;

  responseInfo.value = response;

  map.value = createMap({
    longitude: lng,
    latitude: lat,
  });
  isLoading.value = false;
});

const handleIpInputSubmit = async () => {
  isLoading.value = true;
  const response = await mockApiCall(ipAddress.value);

  ipAddress.value = response.ip;

  const { lng, lat } = response;

  responseInfo.value = response;

  map.value?.remove();
  map.value = createMap({
    longitude: lng,
    latitude: lat,
  });
  isLoading.value = false;
};
</script>
