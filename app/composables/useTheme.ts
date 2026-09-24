import { ref, onMounted } from 'vue'

export const useTheme = () => {
  const isDarkMode = ref(false)

  const updateTheme = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    updateTheme()
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark'
    } else {
      isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateTheme()
  })

  return {
    isDarkMode,
    toggleTheme
  }
}
