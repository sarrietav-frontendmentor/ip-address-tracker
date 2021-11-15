<template>
  <form class="flex items-stretch" @submit.prevent="$emit('submit')">
    <input
      type="text"
      :value="modelValue"
      @input="onInput"
      placeholder="Search for any IP address or domain"
      class="
        rounded-tl-xl rounded-bl-xl
        flex-grow
        pl-6
        font-rubik
        text-lg text-gray-800
      "
    />
    <button
      type="submit"
      class="
        inline
        bg-black
        hover:bg-gray-800
        active:bg-gray-900
        p-5
        rounded-tr-xl rounded-br-xl
      "
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
        <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
      </svg>
    </button>
  </form>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue', 'submit']);

const onInput = (event: Event): void => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<style scoped>
input[type='text'][placeholder] {
  text-overflow: ellipsis;
}
</style>
