import { defineNuxtPlugin } from '#app'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.apiBase
  const supabaseKey = config.public.apiKey
  const supabase = createClient(supabaseUrl, supabaseKey)

  const select = (table, column) => supabase.from(table).select(column ?? '*')

  const api = {

    // data

    getData: async (table, column) => {
      const { data: res, error } = await select(table, column ?? '*')
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

    // storage

    createBucket: async (name, isPublic) => {
      const { data: res, error } = await supabase.storage.createBucket(name, { public: isPublic ?? false })
      if (error) console.log(error)
      return res
    },

    uploadFile: async (bucket, file) => {
      console.log('uploading file...')
      console.log(`bucket: ${bucket}, file: ${file}`)

      supabase.storage.from(bucket).upload(`public/${file.name}`, file).then(res => {
        console.log('resolved promise from file upload: ', res)
      }).catch(error => {
        console.log('something went wrong: ', error)
      })

      // if (error) console.log(error)
      // return res
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
