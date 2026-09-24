<template>
  <section class="flipcards-section">
    <div class="container">
      <div class="grid-4">
        <!-- 1. Wedding -->
        <div class="static-card">
          <div class="icon-circle">
            <i class="fas fa-ring"></i>
          </div>
          <h3>Wedding</h3>
          <p>Timeless garden vows &amp; luxury outdoor receptions across two lush lawns.</p>
          <NuxtLink to="/services" class="card-link">Explore Wedding Packages &rarr;</NuxtLink>
        </div>

        <!-- 2. Photoshoot -->
        <div class="static-card">
          <div class="icon-circle">
            <i class="fas fa-camera-retro"></i>
          </div>
          <h3>Photoshoot</h3>
          <p>Stunning botanical sceneries, water deck reflections &amp; sunset vistas.</p>
          <NuxtLink to="/services" class="card-link">View Photography Zones &rarr;</NuxtLink>
        </div>

        <!-- 3. Corporate Events -->
        <div class="static-card">
          <div class="icon-circle">
            <i class="fas fa-people-carry"></i>
          </div>
          <h3>Corporate Events</h3>
          <p>Team buildings, galas, product launches with 400-car secure parking.</p>
          <NuxtLink to="/services" class="card-link">Corporate Packages &rarr;</NuxtLink>
        </div>

        <!-- 4. Other Activities -->
        <div class="static-card">
          <div class="icon-circle">
            <i class="fas fa-camera"></i>
          </div>
          <h3>Other Activities</h3>
          <p>Photoshoots, events and showers, birthday picnics, and family day retreats.</p>
          <NuxtLink to="/services" class="card-link">Outdoor Leisure &rarr;</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Static feature cards section
</script>

<style scoped>
.flipcards-section {
  padding: 3.5rem 0 2rem;
  background: var(--color-bg-light);
  position: relative;
  z-index: 10;
}

.static-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary-900), var(--color-primary-800));
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  height: 100%;
}

.static-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: rgba(197, 155, 39, 0.4);
}

.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid var(--color-gold-400);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--color-gold-300);
  background: transparent;
  margin-bottom: 1.5rem;
  transition: all var(--transition-normal);
}

.static-card:hover .icon-circle {
  transform: scale(1.08);
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-gold-500);
}

.static-card h3 {
  font-size: 1.2rem;
  color: var(--color-gold-300);
  margin-bottom: 0.8rem;
}

.static-card p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  margin-bottom: 1.2rem;
  flex-grow: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-900);
  background: linear-gradient(135deg, var(--color-gold-400), var(--color-gold-500));
  padding: 0.6rem 1.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(197, 155, 39, 0.25);
  transition: all var(--transition-normal);
  margin-top: 0.5rem;
}

.card-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(197, 155, 39, 0.4);
  color: var(--color-primary-950);
}
</style>
