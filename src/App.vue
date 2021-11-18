<template>
  <main class="h-screen flex flex-col">
    <header
      class="
        w-full
        bg-pattern bg-cover
        flex flex-col
        p-5
        lg:px-[30rem]
        space-y-5
        pb-44
        lg:pb-32
      "
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
          :response-data="responseData"
        />
      </div>
    </div>
    <div class="w-full h-full relative">
      <div id="map" class="w-full h-full absolute z-0 cursor-move"></div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { Map } from 'leaflet';
import { ref, onMounted, reactive } from 'vue';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import 'leaflet/dist/leaflet.css';

import TheSearchBar from '@/components/TheSearchBar.vue';
import TheResponseBox from '@/components/TheResponseBox.vue';

import { ApiResponse } from '@/types/types';

import { useGeoApi } from '@/utils/useGeoApi';

const map = ref<Map>();
const ipAddress = ref<string>();
const responseData = ref<ApiResponse>();
const isLoading = ref<boolean>();

const state = reactive({ ipInput: '' });

const rules = {
  ipInput: {
    required,
    checkIp(ip: string) {
      return /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/.test(ip);
    },
  },
};

const $v = useVuelidate(rules, state);

onMounted(handleGeoApi);

const handleIpInputSubmit = async () => {
  map.value?.remove();
  await handleGeoApi();
};

async function handleGeoApi() {
  isLoading.value = true;

  const { leafletMap, response } = await useGeoApi(ipAddress.value);

  ipAddress.value = response.ip;
  responseData.value = response;
  map.value = leafletMap;

  isLoading.value = false;
}
</script>
