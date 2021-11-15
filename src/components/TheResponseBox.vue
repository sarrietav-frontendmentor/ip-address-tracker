<template>
  <div
    class="bg-white flex flex-col justify-center space-y-5 py-5 rounded-xl z-10"
  >
    <div v-if="isLoading" class="flex justify-center items-center">
      <TheSpinner />
    </div>
    <div v-else class="lg:grid grid-cols-4 items-strech">
      <ResponseBoxData>
        <template #header>Ip</template>
        <template #data> {{ ip }} </template>
      </ResponseBoxData>
      <ResponseBoxData>
        <template #header>Location</template>
        <template #data> {{ city }}, {{ region }} {{ postalCode }} </template>
      </ResponseBoxData>
      <ResponseBoxData>
        <template #header>Timezone</template>
        <template #data> UTC {{ timezone }} </template>
      </ResponseBoxData>
      <ResponseBoxData>
        <template #header>Isp</template>
        <template #data> {{ isp }} </template>
      </ResponseBoxData>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import TheSpinner from '@/components/TheSpinner.vue';
import ResponseBoxData from './ResponseBoxData.vue';

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
