import { ref, onMounted, onBeforeUnmount } from 'vue'

// Tracks which section is on screen, the reading progress and whether the page is scrolled.
export const useScrollSpy = (ids) => {
  const active = ref(ids[0])
  const progress = ref(0)
  const scrolled = ref(false)
  let frame = 0

  const update = () => {
    frame = 0
    const doc = document.documentElement
    const y = window.scrollY
    const vh = window.innerHeight
    const max = doc.scrollHeight - vh

    scrolled.value = y > 8
    progress.value = max > 0 ? Math.min(1, y / max) : 0

    let current = ids[0]
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= vh * 0.35) current = id
    }
    if (y + vh >= doc.scrollHeight - 4) current = ids[ids.length - 1]
    active.value = current
  }

  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    if (frame) cancelAnimationFrame(frame)
  })

  return { active, progress, scrolled }
}
