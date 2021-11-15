<template>
  <div
    class="bg-white flex flex-col justify-center space-y-5 py-5 rounded-xl z-10"
  >
    <div v-if="isLoading" class="flex justify-center items-center">
      <TheSpinner />
    </div>
    <div v-else>
      <TheResponseBoxData>
        <template #header>Ip</template>
        <template #data> {{ ip }} </template>
      </TheResponseBoxData>
      <div class="flex flex-col justify-center space-y-1">
        <TheResponseBoxData>
          <template #header>Location</template>
          <template #data> {{ city }}, {{ region }} {{ postalCode }} </template>
        </TheResponseBoxData>
      </div>
      <div class="flex flex-col justify-center space-y-1">
        <TheResponseBoxData>
          <template #header>Timezone</template>
          <template #data> UTC {{ timezone }} </template>
        </TheResponseBoxData>
      </div>
      <div class="flex flex-col justify-center space-y-1">
        <TheResponseBoxData>
          <template #header>Isp</template>
          <template #data> {{ isp }} </template>
        </TheResponseBoxData>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import TheSpinner from '@/components/TheSpinner.vue';
import TheResponseBoxData from './TheResponseBoxData.vue';

defineProps({
  ip: String,
  city: String,
  timezone: String,
  isp: String,
  postalCode: String,
  region: String,
  isLoading: Boolean,
});
</script>
