import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)
let isInitialized = false

export const useTheme = () => {
  const updateTheme = () => {
    if (typeof document !== 'undefined') {
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const toggleTheme = (event?: MouseEvent) => {
    const isReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const doc = (typeof document !== 'undefined' ? document : null) as any

    // If View Transitions API not supported or reduced motion requested, apply standard switch
    if (!doc || !doc.startViewTransition || isReducedMotion) {
      isDarkMode.value = !isDarkMode.value
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
      }
      updateTheme()
      return
    }

    // Determine circular wave origin coordinates (defaults to button coordinates or viewport center)
    let x = event?.clientX
    let y = event?.clientY
    if (x === undefined || y === undefined || (x === 0 && y === 0)) {
      const btn = doc.querySelector('.theme-toggle')
      if (btn) {
        const rect = btn.getBoundingClientRect()
        x = rect.left + rect.width / 2
        y = rect.top + rect.height / 2
      } else {
        x = window.innerWidth / 2
        y = window.innerHeight / 2
      }
    }

    // Calculate maximum radius to fully cover the furthest viewport corner
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = doc.startViewTransition(() => {
      isDarkMode.value = !isDarkMode.value
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
      }
      updateTheme()
    })

    transition.ready.then(() => {
      doc.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      )
    })
  }

  onMounted(() => {
    if (!isInitialized) {
      isInitialized = true
      try {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
          isDarkMode.value = savedTheme === 'dark'
        } else if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
          isDarkMode.value = true
        } else if (typeof window !== 'undefined') {
          isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        }
      } catch {
        isDarkMode.value = false
      }
      updateTheme()
    }
  })

  return {
    isDarkMode,
    toggleTheme
  }
}
