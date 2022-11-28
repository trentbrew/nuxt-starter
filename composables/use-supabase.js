
import { useNuxtApp } from '#app'

export default function () {
  const { $supabase } = useNuxtApp()
  return $supabase
}
