<template>
  <div class="h-screen flex flex-col">
    <main class="w-full bg-pattern flex flex-col p-5 space-y-5">
      <header>
        <h1 class="text-white text-center font-bold text-2xl">
          IP Address Tracker
        </h1>
      </header>
      <IpInput v-model="ipAddress" @submit="handleIpInputSubmit" />
      <div
        class="
          bg-white
          flex flex-col
          justify-center
          space-y-5
          py-5
          rounded-xl
          z-10
          h-72
        "
      >
        <div v-if="isLoading" class="flex justify-center items-center">
          <Spinner />
        </div>
        <ResponseBox
          v-else
          class="z-20"
          :ip="responseInfo?.ip"
          :city="responseInfo?.city"
          :region="responseInfo?.region"
          :postal-code="responseInfo?.postalCode"
          :timezone="responseInfo?.timezone"
          :isp="responseInfo?.isp"
        />
      </div>
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
import { ApiResponse } from '@/types/types';
import { mockApiCall } from '@/utils/mockApiCall';
import Spinner from './components/Spinner.vue';

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
