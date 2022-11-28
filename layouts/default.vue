<template>
  <div>
    <nav class="absolute flex justify-center items-center gap-4 w-full border-[#ffffff22] border-b-2 list-none h-[80px]">
      <nuxt-link class="hover:opacity-50" to="/"><li>Home</li></nuxt-link>
      <nuxt-link class="hover:opacity-50" to="/about"><li>About</li></nuxt-link>
    </nav>
    <div class="w-full h-screen flex flex-col justify-center items-center">
      <NuxtPage />
    </div>
  </div>
</template>
