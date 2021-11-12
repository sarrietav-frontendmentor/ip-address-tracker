<template>
  <main class="w-full bg-pattern flex flex-col p-5">
    <header>
      <h1 class="text-white text-center font-bold text-2xl">IP Address Tracker</h1>
    </header>
    <IpInput />
  </main>
</template>

<script lang="ts" setup>
import IpInput from './components/IpInput.vue';
</script>
