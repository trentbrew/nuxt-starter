<script setup>
  import { createClient } from '@supabase/supabase-js'

  const config = useRuntimeConfig()
  const supabaseUrl = config.public.apiUrl
  const supabaseKey = config.public.apiKey

  const supabase = createClient(supabaseUrl, supabaseKey)

  const state = reactive({
    email: '',
    password: '',
    loading: false,
  })

  async function handleLogin() {
    try {
      state.loading = true
      const { error } = await supabase.auth.signInWithOtp({
        email: state.email,
      })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      state.loading = false
    }
  }
</script>

<template>
  <main class="fullscreen">
    <form class="flex flex-col gap-6" @submit.prevent="handleLogin">
      <InputText v-model="state.email" placeholder="Email" />
      <InputText password v-model="state.password" placeholder="Password" />
      <button type="submit" class="btn btn-primary w-full">
        Create account
      </button>
    </form>
  </main>
</template>
