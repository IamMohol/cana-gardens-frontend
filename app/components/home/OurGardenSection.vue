<template>
  <section 
    ref="sectionRef"
    class="estate-dossier-section"
    :class="{ 'is-revealed': isRevealed }"
    aria-labelledby="estate-dossier-title"
  >
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 id="estate-dossier-title" class="section-title">
          The Sanctuary &amp; Grounds
        </h2>
        <p class="section-subtitle">
          Set across a lush one-acre countryside estate off Kiambu Road, Cana Gardens combines tranquil botanical seclusion with dedicated event infrastructure.
        </p>
      </div>

      <!-- Asymmetric Bento Dossier Layout -->
      <div class="estate-bento-grid">
        <!-- 1. Left Feature Anchor: Garden Elevation Image Card -->
        <article class="estate-photo-card">
          <div class="photo-wrapper">
            <img 
              src="/img/custom/Image-521.JPG" 
              alt="Cana Gardens Countryside Landscape and Lawns" 
              class="estate-photo"
              loading="lazy"
            />
            <div class="photo-overlay-scrim"></div>
          </div>

          <!-- Top Location Pin Pill -->
          <div class="photo-badge-top">
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
            <span>Kiambu Road &bull; 10 km from Nairobi</span>
          </div>

          <!-- Bottom Heritage & Milestone Card -->
          <div class="photo-caption-dock">
            <div class="caption-metric-group">
              <span class="caption-metric">10+</span>
              <span class="caption-metric-label">Years of Celebrations</span>
            </div>
            <p class="caption-text">
              A cherished outdoor estate hosting milestone nuptials, corporate galas, and photography sessions beneath Kenya's open skies.
            </p>
          </div>
        </article>

        <!-- 2. Right Architectural Specs & Infrastructure Bento -->
        <div class="specs-cluster">
          <!-- Spec 1: Acreage & Natural Setting -->
          <article class="spec-tile" style="--tile-delay: 0.1s">
            <div class="spec-metric-wrap">
              <span class="spec-number">1.0</span>
              <span class="spec-unit">Acre</span>
            </div>
            <h3 class="spec-title">Manicured Countryside Lawns</h3>
            <p class="spec-description">
              Expansive, gentle-sloping green terraces framed by mature tree arches and secluded gazebos for a tranquil retreat feel.
            </p>
          </article>

          <!-- Spec 2: Controlled Secure Parking -->
          <article class="spec-tile" style="--tile-delay: 0.2s">
            <div class="spec-metric-wrap">
              <span class="spec-number">400+</span>
              <span class="spec-unit">Vehicles</span>
            </div>
            <h3 class="spec-title">Dedicated On-Site Parking</h3>
            <p class="spec-description">
              Spacious and safely enclosed parking perimeter overseen by professional traffic marshals for smooth guest arrivals.
            </p>
          </article>

          <!-- Spec 3: Dual-Zone Architecture -->
          <article class="spec-tile spec-tile-wide" style="--tile-delay: 0.3s">
            <div class="tile-tag">
              <i class="fas fa-layer-group" aria-hidden="true"></i>
              <span>Dual Lawn Architecture</span>
            </div>
            <h3 class="spec-title">Seamless Ceremony &amp; Banquet Flow</h3>
            <p class="spec-description">
              Two connected yet distinct lawn zones allow couples and hosts to seamlessly transition from vows or executive presentations to dinner receptions without venue turnaround delay.
            </p>
          </article>

          <!-- Spec 4: Site Viewing Days & Tour CTA -->
          <article class="spec-tile spec-tile-wide visit-highlight-tile" style="--tile-delay: 0.4s">
            <div class="visit-tile-inner">
              <div class="visit-content">
                <div class="tile-tag accent-tag">
                  <i class="fas fa-calendar-check" aria-hidden="true"></i>
                  <span>Physical Viewing Windows</span>
                </div>
                <h3 class="spec-title visit-heading">Weekly Site Visits</h3>
                <p class="visit-hours">
                  <strong>Tuesdays &amp; Thursdays</strong> &bull; 11:00 AM – 2:00 PM
                </p>
                <p class="spec-description visit-sub">
                  Karibu Cana Gardens to walk the grounds, explore natural light angles, and plan your layout in person.
                </p>
              </div>
              <div class="visit-action">
                <button 
                  type="button"
                  class="btn-visit-trigger"
                  @click="$emit('open-booking')"
                >
                  <span>Book Site Walkthrough</span>
                  <i class="fas fa-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits<{
  (e: 'open-booking'): void
}>()

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
.estate-dossier-section {
  padding: 5rem 0 4.5rem;
  background-color: var(--color-bg-card);
  position: relative;
  z-index: 5;
  overflow: hidden;
}

/* Header */
.section-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 3.5rem;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.is-revealed .section-header {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.2vw, 2.6rem);
  color: var(--color-primary-900);
  line-height: 1.25;
  margin-bottom: 0.85rem;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}

/* Asymmetric Bento Architecture: 5fr (Photo) / 7fr (Specs) */
.estate-bento-grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 2rem;
  align-items: stretch;
}

/* Left Photo Card */
.estate-photo-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(26, 51, 28, 0.08);
  border: 1px solid rgba(53, 105, 57, 0.14);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px;
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.is-revealed .estate-photo-card {
  opacity: 1;
  transform: translateY(0);
}

.photo-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.estate-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.estate-photo-card:hover .estate-photo {
  transform: scale(1.04);
}

.photo-overlay-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 20, 11, 0.28) 0%,
    rgba(10, 20, 11, 0.05) 40%,
    rgba(10, 20, 11, 0.88) 100%
  );
}

/* Top Location Badge */
.photo-badge-top {
  position: relative;
  z-index: 2;
  align-self: flex-start;
  margin: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  background: rgba(10, 20, 11, 0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.03em;
}

.photo-badge-top i {
  color: var(--color-accent-400);
  font-size: 0.85rem;
}

/* Bottom Glass Caption Dock */
.photo-caption-dock {
  position: relative;
  z-index: 2;
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background: rgba(17, 34, 19, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(157, 194, 30, 0.25);
  color: #ffffff;
}

.caption-metric-group {
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
  margin-bottom: 0.4rem;
}

.caption-metric {
  font-family: var(--font-serif);
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 1;
  color: var(--color-accent-400);
}

.caption-metric-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: rgba(240, 247, 241, 0.9);
}

.caption-text {
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgba(240, 247, 241, 0.8);
  margin: 0;
}

/* Right Bento Cluster (2x2 Grid) */
.specs-cluster {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

/* Standard Spec Tile */
.spec-tile {
  background-color: var(--color-bg-light);
  border: 1px solid rgba(53, 105, 57, 0.12);
  border-radius: var(--radius-md);
  padding: 1.75rem 1.6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(26, 51, 28, 0.03);
  transition: transform var(--transition-normal),
              box-shadow var(--transition-normal),
              border-color var(--transition-normal);
  opacity: 0;
  transform: translateY(28px);
  will-change: opacity, transform;
}

.is-revealed .spec-tile {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) var(--tile-delay, 0s),
              transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) var(--tile-delay, 0s),
              box-shadow var(--transition-normal),
              border-color var(--transition-normal);
}

.spec-tile:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent-500);
  box-shadow: 0 10px 24px rgba(53, 105, 57, 0.1);
}

.spec-tile-wide {
  grid-column: span 2;
}

/* Metric Display */
.spec-metric-wrap {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-bottom: 0.65rem;
}

.spec-number {
  font-family: var(--font-serif);
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1;
  color: var(--color-primary-800);
}

.spec-unit {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-accent-600);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.spec-title {
  font-size: 1.125rem;
  font-family: var(--font-serif);
  color: var(--color-primary-900);
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.35;
}

.spec-description {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  margin: 0;
}

/* Category Pill */
.tile-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-800);
  background-color: var(--color-primary-50);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.85rem;
  align-self: flex-start;
}

.tile-tag i {
  color: var(--color-accent-600);
  font-size: 0.75rem;
}

/* Highlight Visit Tile */
.visit-highlight-tile {
  background: linear-gradient(135deg, rgba(53, 105, 57, 0.07), rgba(157, 194, 30, 0.12));
  border: 1px solid rgba(157, 194, 30, 0.35);
}

.visit-tile-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.visit-content {
  flex: 1;
}

.accent-tag {
  background-color: rgba(157, 194, 30, 0.22);
  color: var(--color-primary-950);
}

.visit-heading {
  margin-bottom: 0.25rem;
}

.visit-hours {
  font-size: 0.95rem;
  color: var(--color-primary-900);
  margin-bottom: 0.4rem;
}

.visit-hours strong {
  color: var(--color-primary-950);
  font-weight: 600;
}

.visit-sub {
  font-size: 0.85rem;
}

/* Site Visit Trigger Button */
.btn-visit-trigger {
  white-space: nowrap;
  padding: 0.8rem 1.6rem;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-sans);
  background: linear-gradient(135deg, var(--color-primary-800), var(--color-primary-900));
  color: #ffffff;
  border: 1px solid rgba(157, 194, 30, 0.3);
  border-radius: var(--radius-full);
  box-shadow: 0 4px 14px rgba(53, 105, 57, 0.2);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  transition: transform var(--transition-normal),
              box-shadow var(--transition-normal),
              background var(--transition-normal);
}

.btn-visit-trigger i {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  color: var(--color-accent-400);
}

.btn-visit-trigger:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, var(--color-primary-900), var(--color-primary-950));
  box-shadow: 0 8px 20px rgba(53, 105, 57, 0.3);
}

.btn-visit-trigger:hover i {
  transform: translateX(4px);
}

.btn-visit-trigger:active {
  transform: scale(0.98);
}

/* Dark Mode Tokens */
:global(html.dark) .estate-dossier-section {
  background-color: var(--color-bg-card);
}

:global(html.dark) .spec-tile {
  background-color: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

:global(html.dark) .spec-tile:hover {
  border-color: var(--color-accent-500);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.6);
}

:global(html.dark) .spec-number {
  color: var(--color-accent-400);
}

:global(html.dark) .spec-title {
  color: #f0f7f1;
}

:global(html.dark) .spec-description {
  color: rgba(240, 247, 241, 0.72);
}

:global(html.dark) .tile-tag {
  background-color: rgba(157, 194, 30, 0.12);
  color: var(--color-accent-400);
}

:global(html.dark) .visit-highlight-tile {
  background: linear-gradient(135deg, rgba(53, 105, 57, 0.2), rgba(157, 194, 30, 0.1));
  border-color: rgba(157, 194, 30, 0.3);
}

:global(html.dark) .visit-hours {
  color: #f0f7f1;
}

:global(html.dark) .visit-hours strong {
  color: var(--color-accent-400);
}

:global(html.dark) .btn-visit-trigger {
  background: linear-gradient(135deg, var(--color-accent-500), var(--color-accent-400));
  color: var(--color-primary-950);
  border: none;
  box-shadow: 0 4px 14px rgba(157, 194, 30, 0.25);
}

:global(html.dark) .btn-visit-trigger i {
  color: var(--color-primary-950);
}

:global(html.dark) .btn-visit-trigger:hover {
  background: linear-gradient(135deg, var(--color-accent-400), var(--color-accent-300));
  box-shadow: 0 8px 22px rgba(157, 194, 30, 0.4);
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .estate-bento-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .estate-photo-card {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  .estate-dossier-section {
    padding: 3.5rem 0 3rem;
  }

  .specs-cluster {
    grid-template-columns: 1fr;
  }

  .spec-tile-wide {
    grid-column: span 1;
  }

  .visit-tile-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .visit-action,
  .btn-visit-trigger {
    width: 100%;
    justify-content: center;
  }
}

/* Accessibility: Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .section-header,
  .estate-photo-card,
  .spec-tile,
  .estate-photo,
  .btn-visit-trigger,
  .btn-visit-trigger i {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
