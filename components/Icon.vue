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
    class: {
      type: String,
      default: '',
    },
  })

  const iconRef = ref(null)

  onMounted(() => {
    if (iconRef.value) {
      iconRef.value.firstChild.setAttribute('width', props.size)
      iconRef.value.firstChild.setAttribute('height', props.size)
    }
  })

  const { data: icon } = await axios.get(`https://toybox.design/api/v1/icons/${props.name}`)
</script>

<template>
  <div ref="iconRef" :class="props.class" v-html="icon.svg"></div>
</template>
