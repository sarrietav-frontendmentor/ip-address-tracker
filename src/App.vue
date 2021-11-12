<template>
  <div class="h-screen flex flex-col">
    <main class="w-full bg-pattern flex flex-col p-5 space-y-5">
      <header>
        <h1 class="text-white text-center font-bold text-2xl">IP Address Tracker</h1>
      </header>
      <IpInput />
      <ResponseBox class="z-20" />
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

const map = ref();

onMounted(() => {
  map.value = Leaflet.map('map', { zoomControl: false }).setView([10.39972, -75.51444], 15);
  Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value);
});
</script>
