<template>
  <main class="h-screen flex flex-col">
    <header
      class="w-full bg-pattern bg-cover flex flex-col p-5 lg:px-[30rem] space-y-5 pb-36"
    >
      <h1
        class="
          text-white text-center
          font-bold
          lg:font-medium
          text-2xl
          lg:text-3xl
        "
      >
        IP Address Tracker
      </h1>
      <TheSearchBar v-model="ipAddress" @submit="handleIpInputSubmit" />
    </header>
    <div class="w-full px-5 lg:px-40">
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
  </main>
</template>

<script lang="ts" setup>
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ref, onMounted } from 'vue';
import TheSearchBar from './components/TheSearchBar.vue';
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
