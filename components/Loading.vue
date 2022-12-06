<template>
  <Icon name="loading" class="loading" />
</template>

<style scoped>
  .loading {
    animation: loading 1s steps(8, end) infinite;
  }
  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
