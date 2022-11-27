<script setup>
const state = reactive({
  text: 'This is the about page'
})
</script>

<template>
  <p>{{ state.text }}</p>
</template>
