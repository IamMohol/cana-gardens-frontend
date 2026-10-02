<template>
  <div class="page-container">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow"><i class="fas fa-images"></i> Visual Showcase</span>
        <h1>Photo &amp; Video Gallery</h1>
        <p>Explore breathtaking moments, wedding setups, lawn views, and joyful celebrations captured at Cana Gardens.</p>
      </div>
    </section>

    <!-- Filter & Gallery Grid -->
    <section class="gallery-section">
      <div class="container">
        <!-- Filter Tabs -->
        <div class="gallery-filters">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            :class="['filter-tab', { 'active': activeCategory === cat.id }]"
            @click="activeCategory = cat.id"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Grid of Photos -->
        <div class="gallery-grid">
          <div 
            v-for="(item, idx) in filteredItems" 
            :key="item.id || idx"
            class="gallery-card"
            @click="openLightbox(idx)"
          >
            <img :src="item.image_url" :alt="item.title" loading="lazy" />
            <div class="gallery-hover-overlay">
              <div class="zoom-icon"><i class="fas fa-search-plus"></i></div>
              <h4 class="item-title">{{ item.title }}</h4>
              <span class="item-cat">{{ item.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div v-if="selectedIdx !== null" class="lightbox-modal" @click.self="selectedIdx = null">
        <button class="lightbox-close" @click="selectedIdx = null" aria-label="Close Lightbox">
          <i class="fas fa-times"></i>
        </button>
        <button class="lightbox-arrow prev" @click="prevItem" aria-label="Previous Image">
          <i class="fas fa-chevron-left"></i>
        </button>

        <div class="lightbox-content">
          <img :src="filteredItems[selectedIdx]?.image_url" :alt="filteredItems[selectedIdx]?.title" />
          <div class="lightbox-caption">
            <h3>{{ filteredItems[selectedIdx]?.title }}</h3>
            <p>{{ filteredItems[selectedIdx]?.caption }}</p>
          </div>
        </div>

        <button class="lightbox-arrow next" @click="nextItem" aria-label="Next Image">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const config = useRuntimeConfig()

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate Events' },
  { id: 'picnics', label: 'Picnics & Parties' },
  { id: 'photoshoot', label: 'Photoshoots' },
  { id: 'gardens', label: 'Gardens & Scenery' },
]

const activeCategory = ref('all')
const selectedIdx = ref<number | null>(null)

const { data: apiGallery } = await useFetch<any[]>(`${config.public.apiBase}/gallery/`, {
  default: () => [],
})

const defaultItems = [
  { id: 1, title: 'Cana Gardens Panorama', category: 'gardens', image_url: 'https://canagardens.co.ke/wp-content/uploads/2022/01/Paradise-Gardens-view.jpeg', caption: 'Lush 1-acre manicured sanctuary' },
  { id: 2, title: 'Wedding Ceremonies & Mandap', category: 'weddings', image_url: 'https://canagardens.co.ke/wp-content/uploads/elementor/thumbs/Paradise-Gardens-weddings-events-scaled-pjlia5mw353fr3ks278c0zxa7ce40gqk5pbnwpvzew.jpg', caption: 'Enchanting floral and arch setups' },
  { id: 3, title: 'Garden Corporate Pavilion', category: 'corporate', image_url: 'https://canagardens.co.ke/wp-content/uploads/elementor/thumbs/Paradise-Gardens-corporate-events-scaled-pjli9mu4agdpawc33z3sn4o2bmyrqinxf49yb6nuvc.jpg', caption: 'Inspiring outdoor setting for teams' },
  { id: 4, title: 'Bridal Photoshoot on Lawn', category: 'photoshoot', image_url: 'https://canagardens.co.ke/wp-content/uploads/elementor/thumbs/Paradise-Gardens-Photo-shoot-events-pjliln7vm8tlniw0z606i3k3kvrm3acgekdb2gurd4.jpg', caption: 'Romantic sunset vistas' },
  { id: 5, title: 'Family Lawn Picnic', category: 'picnics', image_url: 'https://canagardens.co.ke/wp-content/uploads/elementor/thumbs/Paradise-Gardens-picnic-events1-pjli9zzuy4vptfsyz4skm1cin15wqa464xer124cg8.jpeg', caption: 'Relaxing outdoor leisure' },
  { id: 6, title: 'Photoshoot Locations', category: 'gardens', image_url: '/img/photo_shoots.png', caption: 'Beautiful lush backgrounds' },
  { id: 7, title: 'Evening Reception Glow', category: 'weddings', image_url: 'https://canagardens.co.ke/wp-content/uploads/elementor/thumbs/Paradise-Gardens-weddings-events1-scaled-pjliaf19zhgaz774jbalpxjw573s5frvizuiphi1oo.jpeg', caption: 'Fairytale ambiance after sunset' },
  { id: 8, title: 'Garden Event Deck', category: 'gardens', image_url: '/img/events_showers.png', caption: 'Beautiful outdoor setups for events' },
]

const galleryItems = computed(() => {
  if (apiGallery.value && apiGallery.value.length > 0) {
    return apiGallery.value
  }
  return defaultItems
})

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryItems.value
  }
  return galleryItems.value.filter(item => item.category === activeCategory.value)
})

const openLightbox = (idx: number) => {
  selectedIdx.value = idx
}

const prevItem = () => {
  if (selectedIdx.value !== null) {
    selectedIdx.value = (selectedIdx.value - 1 + filteredItems.value.length) % filteredItems.value.length
  }
}

const nextItem = () => {
  if (selectedIdx.value !== null) {
    selectedIdx.value = (selectedIdx.value + 1) % filteredItems.value.length
  }
}

useSeoMeta({
  title: 'Gallery | Photos & Video of Cana Gardens Kenya',
  description: 'View photos of weddings, picnics, photoshoots, and corporate celebrations at Cana Gardens Nairobi.',
})
</script>

<style scoped>
.page-hero {
  background-color: var(--color-surface-dark);
  color: #ffffff;
  padding: 5rem 0 4rem;
  text-align: center;
  border-bottom: 1px solid var(--color-surface-dark-border);
}

.page-hero .eyebrow {
  color: var(--color-accent-400);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.page-hero h1 {
  color: #ffffff;
  font-size: clamp(2.4rem, 4.5vw, 3.5rem);
  margin-bottom: 0.8rem;
}

.page-hero p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.15rem;
  max-width: 650px;
  margin: 0 auto;
}

.gallery-section {
  padding: 4.5rem 0 6rem;
  background-color: var(--color-bg-light);
}

.gallery-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 3.5rem;
}

.filter-tab {
  padding: 0.65rem 1.4rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
  color: var(--color-primary-900);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-tab:hover,
.filter-tab.active {
  background: var(--color-primary-800);
  color: #ffffff;
  border-color: var(--color-primary-800);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
}

.gallery-card {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  aspect-ratio: 4 / 3;
  cursor: pointer;
  background: #e2e8f0;
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 20, 12, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-fast);
  padding: 1.5rem;
  text-align: center;
}

.gallery-card:hover .gallery-hover-overlay {
  opacity: 1;
}

.gallery-card:hover img {
  transform: scale(1.08);
}

.zoom-icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--color-accent-500);
  color: #0d1c0f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}

.item-title {
  color: #ffffff;
  font-size: 1.2rem;
}

.item-cat {
  color: var(--color-accent-300);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Dark Mode Overrides */
:global(html.dark) .filter-tab {
  background: var(--color-bg-card);
  color: #f0f7f1;
  border-color: var(--color-border);
}

:global(html.dark) .filter-tab:hover,
:global(html.dark) .filter-tab.active {
  background: var(--color-accent-500);
  color: #0d1c0f;
  border-color: var(--color-accent-500);
}

:global(html.dark) .gallery-card {
  background: #112013;
  border: 1px solid var(--color-border);
}

/* Lightbox Modal */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.92);
  z-index: 20000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-content {
  max-width: 900px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 70vh;
  border-radius: var(--radius-sm);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
}

.lightbox-caption {
  color: #ffffff;
  text-align: center;
  margin-top: 1rem;
}

.lightbox-caption h3 {
  color: var(--color-gold-400);
  font-size: 1.4rem;
}

.lightbox-caption p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.3rem;
}

.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-arrow.prev { left: 1.5rem; }
.lightbox-arrow.next { right: 1.5rem; }

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
