<script setup>
  const supabase = useSupabase()
  const data = await supabase.getData('test')

  function handleUploading(file) {}

  function handleError(error) {}

  function handleSuccess(data) {}
</script>

<template>
  <div class="flexy items-center">
    <section class="mt-[32px]">
      <h1>Table.vue</h1>
      <Table :data="data" />
    </section>
    <section>
      <h1>RadialProgress.vue</h1>
      <RadialProgress :value="75" />
    </section>
    <section>
      <h1>Uploader.vue</h1>
      <Uploader @uploading="handleUploading" @error="handleError" @success="handleSuccess" />
    </section>
  </div>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px;
  margin-bottom: 64px;
  min-height: 75vh;
  width: 75vw;
}
h1 {
  text-align: center;
  margin-bottom: 32px;
}
</style>
