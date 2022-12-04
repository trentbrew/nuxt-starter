export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('peek', {
    mounted(el, binding) {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          const peeking = entry.isIntersecting
          binding.value({
            value: peeking,
            target: entry.target,
            id: entry.target.id,
          })
          if (peeking) observer.disconnect()
        })
      })
      io.observe(el)
    },
  })
})
