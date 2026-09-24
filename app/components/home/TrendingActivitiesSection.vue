<template>
  <section class="trending-section">
    <div class="container">
      <div class="trending-grid">
        <!-- Left Side: Editorial Story -->
        <div class="trending-text-col">
          <div class="section-heading-wrapper text-left">
            <span class="eyebrow-tag">New Experiences</span>
            <h2>Oh so lovely</h2>
            <div class="section-subheading-decorative align-left">
              <span class="decorative-line"></span>
              <span class="decorative-text">our new services are on trend</span>
            </div>
          </div>

          <p class="trending-description">
            Capture beautiful moments with our scenic photoshoot sessions. Families and individuals get to explore our lush botanical amenities while creating timeless memories. Our well-maintained grounds offer the perfect backdrop for any occasion.
          </p>

          <p class="trending-sub-description">
            Whether you are arranging a family weekend picnic on the manicured lawn, a scenic birthday celebration, or peaceful events and showers by the water body, we ensure every moment is memorable.
          </p>

          <div class="trending-actions">
            <NuxtLink to="/services" class="btn btn-primary">
              Discover All Services <i class="fas fa-arrow-right"></i>
            </NuxtLink>
            <button @click="$emit('open-booking')" class="btn btn-outline">
              Inquire Activity
            </button>
          </div>
        </div>

        <!-- Right Side: 2x2 Image CTA Grid with Zoom & Hover Effects -->
        <div class="trending-gallery-col">
          <div class="cta-grid">
            <!-- 1. Photoshoots -->
            <div class="cta-card">
              <div 
                class="cta-bg"
                style="background-image: url('/img/custom/Image-61.JPG');"
              ></div>
              <div class="cta-overlay"></div>
              <div class="cta-content">
                <div class="cta-icon"><i class="fas fa-camera"></i></div>
                <h3 class="cta-title">Photoshoots</h3>
                <span class="cta-link">Explore Trail &rarr;</span>
              </div>
            </div>

            <!-- 2. Birthday -->
            <div class="cta-card">
              <div 
                class="cta-bg"
                style="background-image: url('/img/custom/Image-353.JPG');"
              ></div>
              <div class="cta-overlay"></div>
              <div class="cta-content">
                <div class="cta-icon"><i class="fas fa-birthday-cake"></i></div>
                <h3 class="cta-title">Birthday Parties</h3>
                <span class="cta-link">View Packages &rarr;</span>
              </div>
            </div>

            <!-- 3. Picnic -->
            <div class="cta-card">
              <div 
                class="cta-bg"
                style="background-image: url('/img/custom/Image-23.JPG');"
              ></div>
              <div class="cta-overlay"></div>
              <div class="cta-content">
                <div class="cta-icon"><i class="fas fa-glass-cheers"></i></div>
                <h3 class="cta-title">Lawn Picnics</h3>
                <span class="cta-link">Book a Spot &rarr;</span>
              </div>
            </div>

            <!-- 4. Fishing -->
            <div class="cta-card">
              <div 
                class="cta-bg"
                style="background-image: url('/img/custom/Image-41.JPG');"
              ></div>
              <div class="cta-overlay"></div>
              <div class="cta-content">
                <div class="cta-icon"><i class="fas fa-fish"></i></div>
                <h3 class="cta-title">Events & Showers</h3>
                <span class="cta-link">Learn More &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['open-booking'])
</script>

<style scoped>
.trending-section {
  padding: 5.5rem 0;
  background: var(--color-bg-sand);
}

.trending-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
}

.eyebrow-tag {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-gold-600);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 0.5rem;
}

.trending-description {
  font-size: 1.05rem;
  color: var(--color-text-main);
  line-height: 1.8;
  margin-bottom: 1.2rem;
}

.trending-sub-description {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.trending-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* 2x2 Grid */
.cta-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.cta-card {
  position: relative;
  height: 240px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  cursor: pointer;
}

.cta-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-card:hover .cta-bg {
  transform: scale(1.12);
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(10, 28, 21, 0.2) 0%, rgba(10, 28, 21, 0.85) 100%);
  transition: background var(--transition-fast);
}

.cta-card:hover .cta-overlay {
  background: linear-gradient(180deg, rgba(10, 28, 21, 0.1) 0%, rgba(10, 28, 21, 0.7) 100%);
}

.cta-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  color: #ffffff;
  z-index: 5;
  transition: transform var(--transition-fast);
}

.cta-icon {
  font-size: 1.5rem;
  color: var(--color-gold-400);
  margin-bottom: 0.4rem;
}

.cta-title {
  color: #ffffff;
  font-size: 1.35rem;
  margin-bottom: 0.3rem;
  line-height: 1.2;
}

.cta-link {
  font-size: 0.8rem;
  color: var(--color-gold-300);
  font-weight: 600;
  opacity: 0.9;
}

@media (max-width: 960px) {
  .trending-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 500px) {
  .cta-grid {
    grid-template-columns: 1fr;
  }
}
</style>
