<script setup>
  const global = useGlobalStore()
</script>

<template>
  <div class="flexy fullscreen">
    <h1 class="text-center">{{ global.greet }}</h1>
  </div>
</template>
