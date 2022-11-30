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
  <label v-if="props.icon || props.prefix || props.suffix" class="input-group">
    <span v-if="props.prefix && !props.icon">{{ props.prefix }}</span>
    <span
      v-if="props.icon && !props.prefix"
      :class="`h-12 w-12 bg-[url('./assets/icons/${props.icon}.svg')] bg-[50%] bg-no-repeat`"
    ></span>
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
