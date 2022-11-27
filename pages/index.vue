<script setup>
const state = reactive({
  msg: '👋🏾'
})
</script>

<template>
  <div class="w-full h-screen flex flex-col justify-center align-center text-center">
    <h1 class="text-3xl font-bold">Welcome</h1>
    <p>{{ state.msg }}</p>
  </div>
</template>
