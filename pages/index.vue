<script setup>
import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()
const supabaseUrl = config.public.apiBase
const supabaseKey = config.public.apiKey

const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase.from('test_data').select()
</script>

<template>
  <div class="flexy fullscreen">
    <h1 class="text-center">Welcome 👋🏾</h1>
    <p class="mb-3">Here is some sample data fetched from Supabase:</p><br>
    <ul class="flexy rounded-md">
      <li v-for="(item, index) in data" :key="index" class="flex gap-3 mb-3">
        <p>{{ item.name }}</p>
        <p class="opacity-50">{{ item.age }}</p>
      </li>
    </ul>
  </div>
</template>
