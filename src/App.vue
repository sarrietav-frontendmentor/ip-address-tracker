<template>
  <main class="w-full bg-pattern flex flex-col p-5">
    <header>
      <h1 class="text-white text-center font-bold text-2xl">IP Address Tracker</h1>
    </header>
    <form class="flex items-stretch">
      <input type="text" class="rounded-tl-xl rounded-bl-xl flex-grow" />
      <button type="submit" class="inline bg-black p-5 rounded-tr-xl rounded-br-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </form>
  </main>
</template>
