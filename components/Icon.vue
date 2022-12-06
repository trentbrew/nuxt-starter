<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: '',
      requred: true,
    },
    color: {
      type: String,
      default: '',
    },
  })

  const { data: icon } = useFetch(`https://iconicui.vercel.app/api/icons/${props.name}`)

  console.log(icon)
</script>

<template>
  <div v-html="icon" :style="`${props.color ? `color: ${props.color}` : ''}`"></div>
</template>
