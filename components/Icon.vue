<script setup>
  import axios from 'axios'

  const props = defineProps({
    name: {
      type: String,
      default: '',
      requred: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
  })

  const { data: icon } = await axios.get(`https://toybox.design/api/v1/icons/${props.name}?size=${props.size}`)
  console.log(icon.svg)
</script>

<template>
  <div v-html="icon.svg"></div>
</template>
