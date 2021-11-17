<template>
  <div
    class="bg-white flex flex-col justify-center space-y-5 py-5 rounded-xl z-10"
  >
    <div v-if="isLoading" class="flex justify-center items-center">
      <TheSpinner />
    </div>
    <div
      v-else
      class="
        lg:grid
        grid-cols-4
        items-strech
        divide-x-2 divide
        space-y-3
        lg:space-y-0
      "
    >
      <ResponseBoxData>
        <template #header>Ip</template>
        <template #data> {{ responseData?.ip }} </template>
      </ResponseBoxData>
      <ResponseBoxData>
        <template #header>Location</template>
        <template #data>
          {{ responseData?.city }}, {{ responseData?.region }}
          {{ responseData?.postalCode }}
        </template>
      </ResponseBoxData>
      <ResponseBoxData>
        <template #header>Timezone</template>
        <template #data> UTC {{ timezoneWithColon }} </template>
      </ResponseBoxData>
      <ResponseBoxData>
        <template #header>Isp</template>
        <template #data> {{ responseData?.isp }} </template>
      </ResponseBoxData>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';
import TheSpinner from '@/components/TheSpinner.vue';
import ResponseBoxData from './ResponseBoxData.vue';
import { ApiResponse } from '@/types/types';

const props = defineProps({
  responseData: Object as PropType<ApiResponse>,
  isLoading: Boolean,
});

const timezoneWithColon = computed(() => {
  const timezone = props.responseData?.timezone;

  return [
    timezone?.slice(0, timezone.length - 2),
    ':',
    timezone?.slice(timezone.length - 2),
  ].join('');
});
</script>
