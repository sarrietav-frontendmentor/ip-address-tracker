<template>
  <div
    class="
      flex flex-col
      justify-center
      lg:justify-start lg:items-start
      space-y-2
      px-5
      lg:p-6
    "
  >
    <span
      class="
        text-center text-xs
        tracking-widest
        text-gray-500
        font-bold
        uppercase
      "
    >
      <slot name="header"></slot>
    </span>
    <span
      class="
        text-center
        lg:text-left
        text-2xl text-gray-800
        font-bold
        overflow-ellipsis
        whitespace-nowrap
        overflow-hidden
      "
    >
      <slot name="data"></slot>
    </span>
  </div>
</template>
