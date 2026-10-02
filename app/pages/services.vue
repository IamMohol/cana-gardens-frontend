<template>
  <div class="page-container">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow"><i class="fas fa-sparkles"></i> Unmatched Experiences</span>
        <h1>Our Event Services</h1>
        <p>Tailored outdoor venue solutions for milestone weddings, photography, corporate galas &amp; family recreation.</p>
      </div>
    </section>

    <!-- Detailed Services List -->
    <section class="services-list-section">
      <div class="container">
        <!-- Service 1: Wedding -->
        <div class="service-row">
          <div class="service-media">
            <img 
              src="https://canagardens.co.ke/wp-content/uploads/elementor/thumbs/Paradise-Gardens-weddings-events-scaled-pjlia5mw353fr3ks278c0zxa7ce40gqk5pbnwpvzew.jpg" 
              alt="Wedding Ceremonies at Cana Gardens" 
            />
          </div>
          <div class="service-text">
            <div class="service-icon-tag"><i class="fas fa-ring"></i> Wedding Ceremonies &amp; Receptions</div>
            <h2>Say “I Do” in an Enchanting Countryside Haven</h2>
            <p>
              Your wedding day deserves an extraordinary venue. Cana Gardens offers spacious manicured grounds allowing your ceremony and celebration to be hosted within one tranquil countryside location.
            </p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Spacious manicured event grounds with scenic backdrop</li>
              <li><i class="fas fa-check"></i> Dedicated bridal suite and private staging areas</li>
              <li><i class="fas fa-check"></i> High-capacity secure parking for up to 400 cars</li>
              <li><i class="fas fa-check"></i> Flexible catering pavilions and vendor access</li>
            </ul>
            <button @click="openBooking" class="btn btn-gold">
              Inquire Wedding Package <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Service 2: Photoshoot -->
        <div class="service-row reverse">
          <div class="service-media">
            <img 
              src="https://canagardens.co.ke/wp-content/uploads/elementor/thumbs/Paradise-Gardens-Photo-shoot-events-pjliln7vm8tlniw0z606i3k3kvrm3acgekdb2gurd4.jpg" 
              alt="Photoshoots at Cana Gardens" 
            />
          </div>
          <div class="service-text">
            <div class="service-icon-tag"><i class="fas fa-camera-retro"></i> Professional Photography &amp; Film</div>
            <h2>Iconic Photography Zones &amp; Golden Hour Scenery</h2>
            <p>
              From pre-wedding bridal portraits and high-fashion editorials to music video productions, our 1-acre botanical sanctuary offers an abundance of creative backgrounds including our iconic garden deck and flowering tree arches.
            </p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Signature garden deck with panoramic sunset views</li>
              <li><i class="fas fa-check"></i> Lush green foliage and sunset views</li>
              <li><i class="fas fa-check"></i> Half-day and full-day photography passes</li>
              <li><i class="fas fa-check"></i> Dressing and makeup preparation rooms</li>
            </ul>
            <button @click="openBooking" class="btn btn-gold">
              Book Photoshoot Session <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Service 3: Corporate Events -->
        <div class="service-row">
          <div class="service-media">
            <img 
              src="https://canagardens.co.ke/wp-content/uploads/elementor/thumbs/Paradise-Gardens-corporate-events-scaled-pjli9mu4agdpawc33z3sn4o2bmyrqinxf49yb6nuvc.jpg" 
              alt="Corporate Events at Cana Gardens" 
            />
          </div>
          <div class="service-text">
            <div class="service-icon-tag"><i class="fas fa-building"></i> Corporate Events &amp; Team Building</div>
            <h2>Inspire Collaboration in an Open-Air Environment</h2>
            <p>
              Elevate corporate retreats, product launches, AGMs, and team building seminars. Cana Gardens combines spacious grounds with peace and privacy just minutes away from Nairobi's bustling commercial centers.
            </p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Expansive open spaces for team building activities &amp; games</li>
              <li><i class="fas fa-check"></i> Power backup and sound setup support</li>
              <li><i class="fas fa-check"></i> Ample parking accommodating up to 400 corporate vehicles</li>
              <li><i class="fas fa-check"></i> Customizable catering zones for cocktail &amp; buffet setups</li>
            </ul>
            <button @click="openBooking" class="btn btn-gold">
              Request Corporate Proposal <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Service 4: Other Activities -->
        <div class="service-row reverse">
          <div class="service-media">
            <img 
              src="/img/photo_shoots.png" 
              alt="Activities at Cana Gardens" 
            />
          </div>
          <div class="service-text">
            <div class="service-icon-tag"><i class="fas fa-camera"></i> Leisure &amp; Outdoor Recreation</div>
            <h2>Photoshoots, Lawn Picnics &amp; Events</h2>
            <p>
              Unwind with family and friends on weekends. Explore beautiful photoshoot sets, organize relaxed picnic lunches, or enjoy tranquil outdoor events and showers.
            </p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Professional photo shoot sessions in lush gardens</li>
              <li><i class="fas fa-check"></i> Birthday party lawn reservations with gazebo setups</li>
              <li><i class="fas fa-check"></i> Custom setups for birthdays and baby/bridal showers</li>
              <li><i class="fas fa-check"></i> Weekend family relaxation areas</li>
            </ul>
            <button @click="openBooking" class="btn btn-gold">
              Inquire Weekend Activity <i class="fas fa-arrow-right"></i>
            </button>
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
  title: 'Our Services | Weddings, Corporate Events, Photoshoots | Cana Gardens',
  description: 'Explore our services at Cana Gardens Kenya: Wedding ceremonies, photography sessions, corporate events, photoshoots, and picnics.',
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

.services-list-section {
  padding: 6rem 0;
  background-color: var(--color-bg-light);
}

.service-row {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
}

.service-row.reverse {
  grid-template-columns: 1.1fr 1fr;
}

.service-row.reverse .service-media {
  order: 2;
}

.service-media {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  aspect-ratio: 4 / 3;
}

.service-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.service-row:hover .service-media img {
  transform: scale(1.05);
}

.service-icon-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-accent-600);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.8rem;
}

.service-text h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  line-height: 1.25;
}

.service-text p {
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text-main);
}

.service-features i {
  color: var(--color-primary-800);
  font-size: 0.9rem;
}

/* Dark Mode Overrides */
html.dark .service-icon-tag {
  color: var(--color-accent-400);
}

html.dark .service-features i {
  color: var(--color-accent-400);
}

@media (max-width: 900px) {
  .service-row,
  .service-row.reverse {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 4rem;
  }
  .service-row.reverse .service-media {
    order: 0;
  }
}
</style>
