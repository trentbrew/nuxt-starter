<script setup>
const state = reactive({
  msg: '👋🏾'
})
</script>

<template>
  <h1 class="text-3xl font-bold">Welcome</h1>
  <p>{{ state.msg }}</p>
</template>
