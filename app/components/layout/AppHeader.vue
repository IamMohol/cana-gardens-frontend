<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-info">
          <span class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            {{ appConfig.contact.shortAddress }}
          </span>
          <span class="info-item">
            <i class="fas fa-clock"></i> {{ appConfig.contact.headerOpenHours }}
          </span>
        </div>
        <div class="top-contacts">
          <a :href="`tel:${appConfig.contact.phoneLink}`" class="phone-link">
            <i class="fas fa-phone-alt"></i> {{ appConfig.contact.phone }}
          </a>
          <div class="social-links">
            <a
              :href="appConfig.contact.facebook"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              :href="appConfig.contact.instagram"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="main-navigation">
      <div class="container nav-container">
        <!-- Logo -->
        <NuxtLink to="/" class="logo-link">
          <img
            src="/logos/main-logo-2.png"
            alt="Cana Gardens Logo"
            class="brand-logo-img"
          />
        </NuxtLink>

        <!-- Desktop Navigation Menu -->
        <nav class="desktop-menu" aria-label="Main Navigation">
          <ul class="nav-list">
            <li><NuxtLink to="/" active-class="active">Home</NuxtLink></li>
            <li>
              <NuxtLink to="/about" active-class="active">About Us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" active-class="active"
                >Our Services</NuxtLink
              >
            </li>
            <li><NuxtLink to="/gallery" active-class="active">Gallery</NuxtLink></li>
            <li><NuxtLink to="/faq" active-class="active">FAQs</NuxtLink></li>
            <li><NuxtLink to="/blog" active-class="active">Blog</NuxtLink></li>
            <li>
              <NuxtLink to="/contact" active-class="active"
                >Contact Us</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <button
            @click="toggleTheme"
            class="theme-toggle"
            :aria-label="
              isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
            "
          >
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
          <button @click="$emit('open-booking')" class="btn btn-gold btn-sm">
            <i class="fas fa-calendar-check"></i> Book a Tour
          </button>

          <button
            class="mobile-toggle"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle Navigation Menu"
          >
            <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div class="mobile-drawer" :class="{ open: isMobileMenuOpen }">
      <ul class="mobile-nav-list">
        <li>
          <NuxtLink to="/" @click="isMobileMenuOpen = false">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" @click="isMobileMenuOpen = false"
            >About Us</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/services" @click="isMobileMenuOpen = false"
            >Our Services</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/gallery" @click="isMobileMenuOpen = false"
            >Gallery</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/faq" @click="isMobileMenuOpen = false">FAQs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" @click="isMobileMenuOpen = false">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" @click="isMobileMenuOpen = false"
            >Contact Us</NuxtLink
          >
        </li>
      </ul>
      <div class="mobile-drawer-footer">
        <a
          :href="`tel:${appConfig.contact.phoneLink}`"
          class="btn btn-outline"
          style="width: 100%; margin-bottom: 0.8rem"
        >
          <i class="fas fa-phone-alt"></i> Call {{ appConfig.contact.phone }}
        </a>
        <button
          @click="
            isMobileMenuOpen = false;
            $emit('open-booking');
          "
          class="btn btn-gold"
          style="width: 100%"
        >
          <i class="fas fa-calendar-check"></i> Book a Tour
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const appConfig = useAppConfig();
defineEmits(["open-booking"]);

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const { isDarkMode, toggleTheme } = useTheme();

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.left = "0";
    sentinel.style.width = "100%";
    sentinel.style.height = "24px";
    sentinel.style.pointerEvents = "none";
    sentinel.style.opacity = "0";
    document.body.prepend(sentinel);

    observer = new IntersectionObserver(
      ([entry]) => {
        isScrolled.value = !entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(sentinel);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

html.dark .site-header {
  background: rgba(17, 34, 19, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.site-header.scrolled {
  box-shadow: var(--shadow-md);
}

.top-bar {
  background: var(--color-primary-950);
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.8rem;
  padding: 0.35rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: max-height var(--transition-normal), opacity var(--transition-normal);
}

html.dark .top-bar {
  background: var(--color-bg-base);
  border-bottom: 1px solid var(--color-border);
}

.top-bar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-info {
  display: flex;
  gap: 1.5rem;
}

.info-item i {
  color: var(--color-accent-400);
  margin-right: 0.35rem;
}

.top-contacts {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.phone-link {
  color: var(--color-accent-300);
  font-weight: 600;
}

.phone-link:hover {
  color: #ffffff;
}

.social-links {
  display: flex;
  gap: 0.6rem;
}

.social-links a {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #ffffff;
  transition: all var(--transition-fast);
}

.social-links a:hover {
  background: var(--color-accent-500);
  transform: translateY(-1px);
}

.social-links a:active {
  transform: translateY(0) scale(0.95);
}

.main-navigation {
  padding: 0.6rem 0;
  transition: padding var(--transition-normal);
}

.site-header.scrolled .main-navigation {
  padding: 0.4rem 0;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.brand-logo-img {
  height: 48px;
  width: auto;
  max-width: none;
  object-fit: contain;
  display: block;
  transition: height var(--transition-normal), transform var(--transition-fast);
}

.site-header.scrolled .brand-logo-img {
  height: 42px;
}

.brand-logo-img:hover {
  transform: scale(1.02);
}

.desktop-menu {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 1.75rem;
  align-items: center;
}

.nav-list a {
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--color-primary-900);
  position: relative;
  padding: 0.35rem 0;
  transition: color var(--transition-fast);
}

html.dark .nav-list a {
  color: #f0f7f1;
}

.nav-list a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--color-accent-500);
  transition: width var(--transition-fast);
  border-radius: 2px;
}

.nav-list a:hover::after,
.nav-list a.active::after {
  width: 100%;
}

.nav-list a.active {
  color: var(--color-primary-800);
  font-weight: 600;
}

html.dark .nav-list a.active {
  color: var(--color-accent-400);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.header-actions .btn:active {
  transform: translateY(1px) scale(0.98);
}

.theme-toggle {
  background: transparent;
  border: 1px solid var(--color-border);
  font-size: 1rem;
  color: var(--color-primary-900);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all var(--transition-fast);
}

html.dark .theme-toggle {
  color: #f0f7f1;
  border-color: rgba(255, 255, 255, 0.15);
}

.theme-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
  transform: scale(1.05);
}

html.dark .theme-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.mobile-toggle {
  display: none;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: var(--color-primary-900);
  cursor: pointer;
}

.mobile-drawer {
  display: none;
  background: var(--color-bg-card);
  padding: 1.5rem;
  border-top: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 900px) {
  .top-info {
    display: none;
  }
  .desktop-menu {
    display: none;
  }
  .mobile-toggle {
    display: block;
  }

  .mobile-drawer {
    display: block;
    max-height: 0;
    overflow: hidden;
    padding: 0 1.5rem;
    transition: all var(--transition-normal);
  }

  .mobile-drawer.open {
    max-height: 450px;
    padding: 1.5rem;
  }

  .mobile-nav-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .mobile-nav-list a {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--color-primary-900);
  }
}
</style>
