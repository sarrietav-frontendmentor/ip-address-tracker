<template>
  <div
    class="
      flex flex-col
      justify-center
      lg:justify-start lg:items-start
      space-y-1
      lg:p-6
    "
  >
    <span class="text-center text-xs text-gray-500 font-bold uppercase">
      <slot name="header"></slot>
    </span>
    <span class="text-center lg:text-left text-2xl text-gray-800 font-bold">
      <slot name="data"></slot>
    </span>
  </div>
</template>
