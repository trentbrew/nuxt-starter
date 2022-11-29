
import { useNuxtApp } from '#app'

export default function () {
  const { $api } = useNuxtApp()
  return $api
}
