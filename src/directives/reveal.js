// v-reveal: fades an element in the first time it scrolls into view.
// Usage: <div v-reveal> or <div v-reveal="120"> (delay in ms)
let observer = null

const getObserver = () => {
  if (observer || typeof window === 'undefined' || !('IntersectionObserver' in window)) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0 }
  )
  return observer
}

export const vReveal = {
  mounted(el, binding) {
    const io = getObserver()
    if (!io) return // no IntersectionObserver: leave content visible
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    el.classList.add('reveal')
    io.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
