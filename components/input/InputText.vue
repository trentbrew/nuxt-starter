<script setup>
  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <input
    @input="$emit('update:modelValue')"
    type="text"
    class="input input-bordered"
    :placeholder="placeholder"
  />
</template>
