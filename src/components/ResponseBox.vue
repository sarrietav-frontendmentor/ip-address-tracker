<template>
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
    <div class="flex flex-col justify-center space-y-1">
      <span class="text-center text-xs text-gray-500 font-bold uppercase">
        Ip Address
      </span>
      <span class="text-center text-2xl text-gray-800 font-bold">{{ ip }}</span>
    </div>
    <div class="flex flex-col justify-center space-y-1">
      <span class="text-center text-xs text-gray-500 font-bold uppercase">
        Location
      </span>
      <span class="text-center text-2xl text-gray-800 font-bold">
        {{ city }}, {{ region }} {{ postalCode }}
      </span>
    </div>
    <div class="flex flex-col justify-center space-y-1">
      <span class="text-center text-xs text-gray-500 font-bold uppercase">
        Timezone
      </span>
      <span class="text-center text-2xl text-gray-800 font-bold">
        UTC {{ timezone }}
      </span>
    </div>
    <div class="flex flex-col justify-center space-y-1">
      <span class="text-center text-xs text-gray-500 font-bold uppercase">
        Isp
      </span>
      <span class="text-center text-2xl text-gray-800 font-bold">
        {{ isp }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

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
