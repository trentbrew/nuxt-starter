<script setup>
import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()
const supabaseUrl = config.public.apiBase
const supabaseKey = config.public.apiKey

const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase.from('test_data').select()
</script>

<template>
  <ul class="text-center">
    <li v-for="(item, index) in data" :key="index" class="flex gap-3 mb-3">
      <p>{{ item.name }}</p>
      <p class="opacity-50">{{ item.age }}</p>
    </li>
  </ul>
</template>
