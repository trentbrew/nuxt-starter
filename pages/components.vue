<script setup>
  const supabase = useSupabase()
  const data = await supabase.getData('test')

  const state = reactive({
    progress: 75,
    toggle: false,
    text: '',
    search: '',
  })

  function handleUploading(file) {
    console.log('uploading...')
  }

  function handleError(error) {
    console.log('something went wrong: ', error)
  }

  function handleSuccess(data) {
    console.log('file upload success: ', data)
  }

  watchEffect(() => {
    console.log('state: ', state)
  })
</script>

<template>
  <div class="flexy">
    <section class="mt-[32px]">
      <h1>Table.vue</h1>
      <Table :data="data" />
    </section>

    <section>
      <h1>RadialProgress.vue</h1>
      <RadialProgress :value="state.progress" />
    </section>

    <section>
      <h1>InputFile.vue</h1>
      <InputFile
        @uploading="handleUploading"
        @error="handleError"
        @success="handleSuccess"
      />
    </section>

    <section>
      <h1>Text.vue</h1>
      <InputText
        v-model="state.text"
        placeholder="Join newsletter"
        icon="mail"
      />
    </section>

    <section>
      <h1>Search.vue</h1>
      <InputSearch v-model="state.search" />
    </section>

    <section>
      <h1>Toggle.vue</h1>
      <InputToggle v-model="state.toggle" />
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
