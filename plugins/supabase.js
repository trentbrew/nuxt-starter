import { defineNuxtPlugin } from '#app'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.apiBase
  const supabaseKey = config.public.apiKey
  const supabase = createClient(supabaseUrl, supabaseKey)

  const select = (table, column) => supabase.from(table).select(column ?? '')

  const api = {
    getData: async (table, column) => {
      const { data: res, error } = await select(table, column)
      if (error) console.log(error)
      return res
    },
    addData: async (table, data) => {
      const { data: res, error } = await supabase.from(table).insert(data)
      if (error) console.log(error)
      return res
    },
    updateData: async (table, id, data) => {
      const { data: res, error } = await supabase.from(table).update(data).match({ id })
      if (error) console.log(error)
      return res
    },
    deleteData: async (table, id) => {
      const { data: res, error } = await supabase.from(table).delete().match({ id })
      if (error) console.log(error)
      return res
    },
    createBucket: async (name) => {
      const { data: res, error } = await supabase.storage.createBucket(name)
      if (error) console.log(error)
      return res
    },
    uploadFile: async (bucket, file) => {
      const { data: res, error } = await supabase.storage.from(bucket).upload(file.name, file)
      if (error) console.log(error)
      return res
    },
    downloadFile: async (bucket, file) => {
      const { data: res, error } = await supabase.storage.from(bucket).download(file)
      if (error) console.log(error)
      return res
    },
    deleteFile: async (bucket, file) => {
      const { data: res, error } = await supabase.storage.from(bucket).remove([file])
      if (error) console.log(error)
      return res
    },
    getUrl: async (bucket, file) => {
      const { data: res, error } = await supabase.storage.from(bucket).getPublicUrl(file)
      if (error) console.log(error)
      return res
    }
  }

  return {
    provide: {
      api
    },
  }
})
