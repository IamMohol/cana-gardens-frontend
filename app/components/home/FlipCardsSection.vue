<template>
  <section 
    ref="sectionRef"
    class="grounds-overview-section" 
    :class="{ 'is-revealed': isRevealed }"
    aria-labelledby="grounds-overview-title"
  >
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 id="grounds-overview-title" class="section-title">
          One Scenic Haven, Endless Occasions
        </h2>
        <p class="section-subtitle">
          From milestone vows to executive retreats, explore curated outdoor celebration spaces crafted for life's most memorable gatherings.
        </p>
      </div>

      <!-- Experience Cards Grid (Staggered Scroll Entrance with Authentic Photography) -->
      <div class="experience-grid">
        <!-- 1. Weddings & Receptions -->
        <article class="experience-card" style="--card-index: 0">
          <div class="card-media-wrapper">
            <img 
              src="/img/garden_view.png" 
              alt="Outdoor Wedding Ceremony Lawns at Cana Gardens" 
              class="card-img"
              loading="lazy"
            />
            <div class="card-media-scrim"></div>
            <span class="card-accent-pill">Milestone Nuptials</span>
            <div class="card-icon-badge" aria-hidden="true">
              <i class="fas fa-ring"></i>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">Weddings &amp; Receptions</h3>
            <p class="card-description">
              Enchanting garden vows and grand open-air banquets surrounded by manicured lawns and panoramic countryside views.
            </p>
            <div class="card-highlights">
              <span class="highlight-item"><i class="fas fa-check" aria-hidden="true"></i> Up to 700 banquet guests</span>
              <span class="highlight-item"><i class="fas fa-check" aria-hidden="true"></i> Dedicated ceremony lawns</span>
            </div>
          </div>
        </article>

        <!-- 2. Photography & Film -->
        <article class="experience-card" style="--card-index: 1">
          <div class="card-media-wrapper">
            <img 
              src="/img/custom/Image-61.JPG" 
              alt="Outdoor Photography & Creative Shoots at Cana Gardens" 
              class="card-img"
              loading="lazy"
            />
            <div class="card-media-scrim"></div>
            <span class="card-accent-pill">Creative Shoots</span>
            <div class="card-icon-badge" aria-hidden="true">
              <i class="fas fa-camera-retro"></i>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">Photography &amp; Film</h3>
            <p class="card-description">
              Golden-hour natural light, vibrant botanical greenery, and flowering tree arches for timeless creative captures.
            </p>
            <div class="card-highlights">
              <span class="highlight-item"><i class="fas fa-check" aria-hidden="true"></i> Flowering tree arches</span>
              <span class="highlight-item"><i class="fas fa-check" aria-hidden="true"></i> Half-day &amp; full-day passes</span>
            </div>
          </div>
        </article>

        <!-- 3. Corporate Retreats -->
        <article class="experience-card" style="--card-index: 2">
          <div class="card-media-wrapper">
            <img 
              src="/img/custom/Image-41.JPG" 
              alt="Corporate Retreats & Galas at Cana Gardens" 
              class="card-img"
              loading="lazy"
            />
            <div class="card-media-scrim"></div>
            <span class="card-accent-pill">Business &amp; Galas</span>
            <div class="card-icon-badge" aria-hidden="true">
              <i class="fas fa-briefcase"></i>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">Corporate Retreats</h3>
            <p class="card-description">
              Inspiring executive sessions, collaborative team building, and sunset gala dinners in refreshing open-air seclusion.
            </p>
            <div class="card-highlights">
              <span class="highlight-item"><i class="fas fa-check" aria-hidden="true"></i> Power backup &amp; PA setup</span>
              <span class="highlight-item"><i class="fas fa-check" aria-hidden="true"></i> High-speed WiFi &amp; breakout lawns</span>
            </div>
          </div>
        </article>

        <!-- 4. Private Celebrations -->
        <article class="experience-card" style="--card-index: 3">
          <div class="card-media-wrapper">
            <img 
              src="/img/custom/Image-23.JPG" 
              alt="Private Celebrations & Lawn Picnics at Cana Gardens" 
              class="card-img"
              loading="lazy"
            />
            <div class="card-media-scrim"></div>
            <span class="card-accent-pill">Leisure &amp; Picnics</span>
            <div class="card-icon-badge" aria-hidden="true">
              <i class="fas fa-glass-cheers"></i>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">Private Celebrations</h3>
            <p class="card-description">
              Relaxed garden picnics, milestone birthday gatherings, baby showers, and intimate anniversaries under shaded gazebos.
            </p>
            <div class="card-highlights">
              <span class="highlight-item"><i class="fas fa-check" aria-hidden="true"></i> Shaded picnic gazebos</span>
              <span class="highlight-item"><i class="fas fa-check" aria-hidden="true"></i> Flexible lawn layouts</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Single Unified Section Call to Action Dock -->
      <div class="unified-cta-dock">
        <div class="cta-content-wrapper">
          <div class="cta-message">
            <h4 class="cta-heading">Looking to hire the grounds for your date?</h4>
            <p class="cta-subtext">
              Browse our comprehensive grounds hire packages, venue inclusions, and seasonal event rates.
            </p>
          </div>
          <div class="cta-action">
            <NuxtLink to="/services" class="btn btn-primary cta-btn">
              <span>View Grounds Packages</span>
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const isRevealed = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isRevealed.value = true
            observer?.disconnect()
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    if (sectionRef.value) {
      observer.observe(sectionRef.value)
    }
  } else {
    isRevealed.value = true
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.grounds-overview-section {
  padding: 4.5rem 0 3.5rem;
  background-color: var(--color-bg-light);
  position: relative;
  z-index: 10;
  overflow: hidden;
}

/* Header with Scroll Reveal Motion */
.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3rem;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.is-revealed .section-header {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  color: var(--color-primary-900);
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* 4-Card Experience Grid */
.experience-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

/* Card Motion, Materiality, & Photographic Presentation */
.experience-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-card);
  border: 1px solid rgba(53, 105, 57, 0.12);
  box-shadow: 0 4px 18px rgba(26, 51, 28, 0.05);
  overflow: hidden;
  
  /* Initial Scroll Animation State */
  opacity: 0;
  transform: translateY(36px) scale(0.97);
  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow var(--transition-normal),
              border-color var(--transition-normal);
  will-change: opacity, transform;
}

/* Staggered Scroll Entrance based on card index */
.is-revealed .experience-card {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition-delay: calc(var(--card-index, 0) * 0.12s + 0.1s);
}

/* Tactile Hover Physics */
.experience-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-accent-500);
  box-shadow: 0 16px 36px rgba(53, 105, 57, 0.14);
}

/* Card Media Header */
.card-media-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: var(--color-primary-950);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
}

.experience-card:hover .card-img {
  transform: scale(1.08);
}

.card-media-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 20, 11, 0.45) 0%,
    rgba(10, 20, 11, 0.05) 50%,
    rgba(10, 20, 11, 0.65) 100%
  );
  pointer-events: none;
}

/* Floating Pill over Image */
.card-accent-pill {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  background: rgba(10, 20, 11, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  transition: background var(--transition-normal), color var(--transition-normal);
}

.experience-card:hover .card-accent-pill {
  background: var(--color-accent-500);
  color: var(--color-primary-950);
  border-color: var(--color-accent-400);
}

/* Small floating icon badge */
.card-icon-badge {
  position: absolute;
  bottom: 0.85rem;
  right: 1rem;
  z-index: 2;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(17, 34, 19, 0.85);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(157, 194, 30, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-400);
  font-size: 0.95rem;
  transition: transform var(--transition-normal), background var(--transition-normal);
}

.experience-card:hover .card-icon-badge {
  transform: scale(1.1);
  background: var(--color-primary-800);
  color: #ffffff;
}

/* Card Body */
.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.6rem 1.4rem 1.75rem;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--color-primary-900);
  margin-bottom: 0.6rem;
  font-weight: 600;
  line-height: 1.3;
}

.card-description {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

.card-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding-top: 1rem;
  border-top: 1px dashed rgba(53, 105, 57, 0.12);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--color-text-main);
  font-weight: 500;
}

.highlight-item i {
  color: var(--color-accent-600);
  font-size: 0.75rem;
}

/* Single Unified Section Call to Action Dock */
.unified-cta-dock {
  margin-top: 2.75rem;
  background: linear-gradient(135deg, var(--color-primary-950), var(--color-primary-900));
  border: 1px solid rgba(157, 194, 30, 0.25);
  border-radius: var(--radius-lg);
  padding: 2rem 2.5rem;
  box-shadow: 0 16px 36px rgba(26, 51, 28, 0.18);
  position: relative;
  overflow: hidden;
  
  /* Initial Scroll State */
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.is-revealed .unified-cta-dock {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.45s;
}

/* Ambient Botanical Glow Animation */
.unified-cta-dock::before {
  content: "";
  position: absolute;
  top: -40px;
  right: -40px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(157, 194, 30, 0.22) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.5;
  transition: opacity 1s ease;
}

@keyframes ctaAmbientBreathe {
  0%, 100% {
    transform: scale(1) translate(0, 0);
    opacity: 0.35;
  }
  50% {
    transform: scale(1.15) translate(-8px, 8px);
    opacity: 0.65;
  }
}

.is-revealed .unified-cta-dock::before {
  animation: ctaAmbientBreathe 7s ease-in-out infinite;
}

.cta-content-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta-message {
  max-width: 620px;
}

.cta-heading {
  font-family: var(--font-serif);
  font-size: clamp(1.2rem, 2.2vw, 1.45rem);
  color: #ffffff;
  margin-bottom: 0.35rem;
  font-weight: 600;
}

.cta-subtext {
  font-size: 0.9rem;
  color: rgba(240, 247, 241, 0.82);
  line-height: 1.5;
  margin: 0;
}

.cta-btn {
  white-space: nowrap;
  padding: 0.85rem 1.85rem;
  font-size: 0.95rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--color-accent-500), var(--color-accent-400));
  color: var(--color-primary-950);
  border: none;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 14px rgba(157, 194, 30, 0.35);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
}

.cta-btn i {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(157, 194, 30, 0.5);
  color: var(--color-primary-950);
}

.cta-btn:hover i {
  transform: translateX(4px);
}

.cta-btn:active {
  transform: scale(0.98);
}

/* Dark Mode Tokens */
:global(html.dark) .grounds-overview-section {
  background-color: var(--color-bg-light);
}

:global(html.dark) .experience-card {
  background-color: var(--color-bg-card);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

:global(html.dark) .experience-card:hover {
  border-color: var(--color-accent-500);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
}

:global(html.dark) .card-title {
  color: #f0f7f1;
}

:global(html.dark) .card-description {
  color: rgba(240, 247, 241, 0.75);
}

:global(html.dark) .card-highlights {
  border-top-color: rgba(255, 255, 255, 0.08);
}

:global(html.dark) .highlight-item {
  color: #dff2e1;
}

:global(html.dark) .unified-cta-dock {
  background: linear-gradient(135deg, #0d1a0e, #142a17);
  border-color: rgba(157, 194, 30, 0.3);
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .experience-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .grounds-overview-section {
    padding: 3.5rem 0 2.5rem;
  }

  .cta-content-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .cta-action {
    width: 100%;
  }

  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .experience-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .unified-cta-dock {
    padding: 1.75rem 1.25rem;
  }
}

/* Accessibility: Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .section-header,
  .experience-card,
  .card-img,
  .card-icon-badge,
  .unified-cta-dock,
  .cta-btn,
  .cta-btn i {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
    animation: none !important;
  }
  .unified-cta-dock::before {
    animation: none !important;
  }
}
</style>
