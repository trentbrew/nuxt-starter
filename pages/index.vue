<script setup>
const state = reactive({
  firstName: 'Trent',
  lastName: 'Brew',
})
</script>

<template>
  <div class="bg-red">
    <h1 class="text-xl">Welcome</h1>
    <p>{{ `${state.firstName} ${state.lastName}` }}</p>
  </div>
</template>
