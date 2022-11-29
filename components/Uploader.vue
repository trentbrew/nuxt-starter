<script setup>
function uploadFile() {
  console.log('uploading file...')
}
</script>

<template>
  <div>
    <input type="file" @change="uploadFile" />
  </div>
</template>
