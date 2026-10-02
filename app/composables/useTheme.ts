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

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    }
    updateTheme()
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
        // Fallback if localStorage or matchMedia is restricted
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
