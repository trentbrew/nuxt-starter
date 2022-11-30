<script setup>
  const supabase = useSupabase()

  const state = reactive({
    signUp: {
      email: '',
      password: '',
    },
  })

  async function signUp() {
    console.log('creating user with email: ', state.signUp.email)
    const data = await supabase.signUp(
      state.signUp.email,
      state.signUp.password
    )
    console.log('email signup response: ', data)
  }
</script>

<template>
  <div class="flexy fullscreen">
    <form class="flexy gap-6">
      <input
        v-model="state.signUp.username"
        type="text"
        name="email"
        class="input input-bordered"
        placeholder="Email"
      />
      <input
        autocomplete="new-password"
        v-model="state.signUp.password"
        type="password"
        name="password"
        class="input input-bordered"
        placeholder="Password"
      />
      <button @click="signUp" class="btn btn-primary">Create Account</button>
    </form>
  </div>
</template>
