import { defineNuxtPlugin } from '#app'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.apiBase
  const supabaseKey = config.public.apiKey

  const supabase = createClient(supabaseUrl, supabaseKey)

  const addData = async (table, data) => {
    const { data: res, error } = await supabase.from(table).insert(data)
    if (error) console.log(error)
    return res
  }

  const getData = async (table, column) => {
    const { data: res, error } = await supabase.from(table).select(column ?? '*')
    if (error) console.log(error)
    return res
  }

  const getForeignData = async (table, relation, column) => {
    const { data: res, error } = await supabase.from(table).select(`${table}, ${relation} (${column ?? ''})`)
    if (error) console.log(error)
    return res
  }

  const updateData = async (table, id, data) => {
    const { data: res, error } = await supabase.from(table).update(data).match({ id })
    if (error) console.log(error)
    return res

  }

  const deleteData = async (table, id) => {
    const { data: res, error } = await supabase.from(table).delete().match({ id })
    if (error) console.log(error)
    return res
  }

  return {
    provide: {
      supabase: {
        addData,
        getData,
        getForeignData,
        updateData,
        deleteData,
      }
    },
  }
})
