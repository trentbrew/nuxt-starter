<script setup>
  const props = defineProps({
    value: {
      type: Number,
      default: 0,
    },
  })
</script>

<template>
  <div class="radial-progress bg-primary text-primary-content border-4 border-primary z-0 font-bold" :style="`--value:${props.value};`">
    {{ `${props.value}%` }}
  </div>
</template>
