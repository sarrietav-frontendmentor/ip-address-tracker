<template>
  <div
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
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue';

import ResponseBoxData from './ResponseBoxData.vue';
import { ApiResponse } from '@/types/types';

const props = defineProps({
  responseData: Object as PropType<ApiResponse>,
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
