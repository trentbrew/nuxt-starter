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
    getData: (table, column) => select(table, column ?? '*').then(res => res.data),
    addData: (table, data) => supabase.from(table).insert(data).then(res => res.data),
    updateData: (table, id, data) => supabase.from(table).update(data).match({ id }).then(res => res.data),
    deleteData: (table, id) => supabase.from(table).delete().match({ id }).then(res => res.data),

    // storage
    createBucket: (name, isPublic) => supabase.storage.createBucket(name, { public: isPublic ?? false }).then(res => res.data),
    uploadFile: (bucket, file) => supabase.storage.from(bucket).upload(`public/${file.name}`, file).then(res => res.data),
    downloadFile: (bucket, file) => supabase.storage.from(bucket).download(file).then(res => res.data),
    deleteFile: (bucket, file) => supabase.storage.from(bucket).remove([file]).then(res => res.data),
    getUrl: (bucket, file) => supabase.storage.from(bucket).getPublicUrl(file).then(res => res.data),

    // auth
    signUp: (email, password) => supabase.auth.signUp({ email, password }).then(res => res.data),
    signIn: (email, password) => supabase.auth.signIn({ email, password }).then(res => res.data),
    signOut: () => supabase.auth.signOut().then(res => res.data),

    // user
    getUser: () => supabase.auth.getUser().then(res => res.data),

  }

  return {
    provide: {
      api
    },
  }
})
