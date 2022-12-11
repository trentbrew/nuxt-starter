<script setup>
  const global = useGlobalStore()
</script>

<template>
  <main class="fullscreen">
    <h1 class="text-center">{{ global.greet }}</h1>
  </main>
</template>
