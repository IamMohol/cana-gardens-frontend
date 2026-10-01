<template>
  <div class="page-container">
    <!-- Page Header Banner -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow"><i class="fas fa-leaf"></i> Our Story &amp; Grounds</span>
        <h1>About Cana Gardens</h1>
        <p>A tranquil 1-acre haven off Kiambu Road where nature meets celebration.</p>
      </div>
    </section>

    <!-- Main Story -->
    <section class="story-section">
      <div class="container">
        <div class="grid-2 align-center">
          <div class="story-image-wrap">
            <img 
              src="/img/garden_view.png" 
              alt="Cana Gardens Countryside Grounds"
              class="rounded-image" 
            />
          </div>

          <div class="story-content">
            <span class="cursive-accent">Welcome to peace &amp; splendour</span>
            <h2>The Countryside Sanctuary You Thought You’d Never Find</h2>
            <p>
              Located just 10 kilometers from Nairobi's central business district along the scenic Kiambu Road corridor, Cana Gardens was created to provide a serene sanctuary where unforgettable memories unfold.
            </p>
            <p>
              Set across lush, manicured grounds and anchored by an enchanting garden deck, our venue combines authentic countryside tranquility with urban accessibility.
            </p>

            <div class="highlight-boxes">
              <div class="hl-box">
                <i class="fas fa-check-circle"></i>
                <div>
                  <strong>Common Event Grounds</strong>
                  <span>Walkthroughs welcome to view space and amenities</span>
                </div>
              </div>
              <div class="hl-box">
                <i class="fas fa-check-circle"></i>
                <div>
                  <strong>400+ Vehicle Capacity</strong>
                  <span>Gated, secured grounds parking</span>
                </div>
              </div>
              <div class="hl-box">
                <i class="fas fa-check-circle"></i>
                <div>
                  <strong>Signature Event Deck</strong>
                  <span>Iconic vantage point for photography</span>
                </div>
              </div>
            </div>

            <button @click="openBooking" class="btn btn-gold" style="margin-top: 2rem;">
              <i class="fas fa-calendar-check"></i> Book a Physical Tour
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Numbers / Metrics -->
    <section class="metrics-section">
      <div class="container">
        <div class="metrics-grid">
          <div class="metric-item">
            <h3>10+</h3>
            <span>Years of Excellence</span>
          </div>
          <div class="metric-item">
            <h3>500+</h3>
            <span>Weddings &amp; Events Hosted</span>
          </div>
          <div class="metric-item">
            <h3>400</h3>
            <span>Secure Parking Slots</span>
          </div>
          <div class="metric-item">
            <h3>100%</h3>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const openBooking = inject('openBookingModal', () => {})

useSeoMeta({
  title: 'About Us | Cana Gardens Kenya',
  description: 'Learn about Cana Gardens, Nairobi’s premier countryside wedding and events venue off Kiambu Road.',
})
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-primary-950), var(--color-primary-900));
  color: #ffffff;
  padding: 5rem 0 4rem;
  text-align: center;
}

.page-hero .eyebrow {
  color: var(--color-gold-400);
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
  max-width: 600px;
  margin: 0 auto;
}

.story-section {
  padding: 5.5rem 0;
}

.rounded-image {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.story-content h2 {
  font-size: 2.2rem;
  margin: 0.5rem 0 1.2rem;
}

.story-content p {
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.highlight-boxes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.hl-box {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: var(--color-bg-sand);
  padding: 0.9rem 1.2rem;
  border-radius: var(--radius-md);
}

.hl-box i {
  color: var(--color-primary-700);
  font-size: 1.2rem;
}

.hl-box strong {
  display: block;
  color: var(--color-primary-950);
  font-size: 0.95rem;
}

.hl-box span {
  font-size: 0.825rem;
  color: var(--color-text-muted);
}

.metrics-section {
  background: var(--color-primary-950);
  color: #ffffff;
  padding: 4rem 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.metric-item h3 {
  font-family: var(--font-serif);
  font-size: 3rem;
  color: var(--color-gold-400);
  margin-bottom: 0.3rem;
}

.metric-item span {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
