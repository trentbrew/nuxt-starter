<script setup>
  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">{{ text }}</span>
      <input type="checkbox" class="toggle toggle-primary" />
    </label>
  </div>
</template>
