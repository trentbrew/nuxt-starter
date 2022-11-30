import { defineNuxtPlugin } from '#app'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const supabaseUrl = config.public.apiUrl
  const supabaseKey = config.public.apiKey

  const supabase = createClient(supabaseUrl, supabaseKey)

  const api = {
    getData: async (table, column) => {
      const { data: res, error } = await supabase
        .from(table)
        .select(column ?? '*')
      if (error) console.log(error)
      return res
    },

    addData: async (table, data) => {
      const { data: res, error } = await supabase.from(table).insert(data)
      if (error) console.log(error)
      return res
    },

    updateData: async (table, id, data) => {
      const { data: res, error } = await supabase
        .from(table)
        .update(data)
        .match({ id })
      if (error) console.log(error)
      return res
    },

    deleteData: async (table, id) => {
      const { data: res, error } = await supabase
        .from(table)
        .delete()
        .match({ id })
      if (error) console.log(error)
      return res
    },

    // storage

    createBucket: async (name, isPublic) => {
      const { data: res, error } = await supabase.storage.createBucket(name, {
        public: isPublic ?? false,
      })
      if (error) console.log(error)
      return res
    },

    uploadFile: async (bucket, file) => {
      const { data: res, error } = supabase.storage
        .from(bucket)
        .upload(`public/${file.name}`, file)
      if (error) console.log(error)
      return res
    },

    downloadFile: async (bucket, file) => {
      const { data: res, error } = await supabase.storage
        .from(bucket)
        .download(file)
      if (error) console.log(error)
      return res
    },

    deleteFile: async (bucket, file) => {
      const { data: res, error } = await supabase.storage
        .from(bucket)
        .remove([file])
      if (error) console.log(error)
      return res
    },

    getUrl: async (bucket, file) => {
      const { data: res, error } = await supabase.storage
        .from(bucket)
        .getPublicUrl(file)
      if (error) console.log(error)
      return res
    },

    // auth

    signUp: async (email, password) => {
      const { data: res, error } = await supabase.auth.signUp({
        email,
        password,
      })
      if (error) console.log(error)
      return res
    },

    signInWithMagicLink: async email => {
      await supabase.auth
        .signInWithOtp({
          email: email.value,
        })
        .catch(error => {
          console.log(error)
        })
    },

    signIn: async (email, password) => {
      const { data: res, error } = await supabase.auth.signIn({
        email,
        password,
      })
      if (error) console.log(error)
      else alert('Check your email for the login link!')
      return res
    },

    signOut: async () => {
      const { data: res, error } = await supabase.auth.signOut()
      if (error) console.log(error)
      else alert('Successfully signed out')
      return res
    },
  }

  return {
    provide: {
      api,
    },
  }
})
