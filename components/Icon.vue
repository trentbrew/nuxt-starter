<script setup>
  import api from '@/hooks/api'

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

  const icon = ref(null)

  onMounted(() => {
    icon.value.firstChild.setAttribute('width', props.size)
    icon.value.firstChild.setAttribute('height', props.size)
  })

  const { data: svg } = api.icons.get(props.name)
</script>

<template>
  <div ref="icon" :class="props.class" v-html="svg"></div>
</template>
