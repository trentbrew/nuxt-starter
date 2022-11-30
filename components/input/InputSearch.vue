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
  <div class="form-control">
    <div class="input-group">
      <input type="text" placeholder="Search" class="input input-bordered" />
      <button class="btn btn-square">
        <Icon name="profile" />
      </button>
    </div>
  </div>
</template>
