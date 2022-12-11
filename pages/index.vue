<script setup>
  const global = useGlobalStore()
</script>

<template>
  <main class="flex justify-center items-center">
    <h1 class="mt-[300px] text-center">{{ global.greet }}</h1>
  </main>
</template>
