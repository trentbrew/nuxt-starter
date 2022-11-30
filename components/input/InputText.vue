<script setup>
  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    class: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: null,
    },
    prefix: {
      type: String,
      default: null,
    },
    suffix: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  })
</script>

<template>
  <label
    v-if="props.icon || props.prefix || props.suffix"
    class="input-group w-auto"
  >
    <span v-if="props.prefix && !props.icon">{{ props.prefix }}</span>
    <span><Icon v-if="props.icon" :name="props.icon" /></span>
    <input
      @input="$emit('update:modelValue')"
      type="text"
      class="input input-bordered"
      :class="props.class"
      :placeholder="placeholder"
    />
    <span v-if="props.suffix">{{ props.suffix }}</span>
  </label>
  <input
    v-else
    @input="$emit('update:modelValue')"
    type="text"
    class="input input-bordered"
    :class="props.class"
    :placeholder="placeholder"
  />
</template>
