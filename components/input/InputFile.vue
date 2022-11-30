<script setup>
const supabase = useSupabase()

const emit = defineEmits(['uploading', 'error', 'success'])

const state = reactive({
  file: null,
  progress: 0,
  error: null,
  success: null,
})

async function upload(event) {
  console.log('event: ', event)
  supabase.uploadFile('test', event.target.files[0])
}
</script>

<template>
  <div>
    <input type="file" @change="upload" class="file-input file-input-bordered file-input-primary w-full max-w-xs rounded" />
  </div>
</template>
