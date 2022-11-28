<script setup>
  const supabase = useSupabase()
  console.log('supabase composable: ', supabase)
  const data = await supabase.getData('test')
  console.log('data fetched from supabase: ', data)
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
  </div>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff11;
  padding: 64px;
  margin-bottom: 64px;
  border-radius: 6px;
  height: 75vh;
  width: 75vw;
}
h1 {
  text-align: center;
  margin-bottom: 32px;
}
</style>
