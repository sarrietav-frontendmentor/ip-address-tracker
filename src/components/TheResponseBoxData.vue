<template>
  <div class="flex flex-col justify-center space-y-1">
    <span class="text-center text-xs text-gray-500 font-bold uppercase">
      <slot name="header"></slot>
    </span>
    <span class="text-center text-2xl text-gray-800 font-bold">
      <slot name="data"></slot>
    </span>
  </div>
</template>
