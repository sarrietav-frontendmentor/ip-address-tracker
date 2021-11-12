<template>
  <main class="w-full bg-pattern flex flex-col p-5">
    <header>
      <h1 class="text-white text-center font-bold text-2xl">IP Address Tracker</h1>
    </header>
    <IpInput />
    <ResponseBox />
  </main>
</template>

<script lang="ts" setup>
import IpInput from './components/IpInput.vue';
import ResponseBox from './components/ResponseBox.vue';
</script>
