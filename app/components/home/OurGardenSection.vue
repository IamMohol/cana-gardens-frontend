<template>
  <section class="our-garden-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-heading-wrapper">
        <h2>Our Garden</h2>
        <div class="section-subheading-decorative">
          <span class="decorative-line"></span>
          <span class="decorative-text">natural elegance &amp; tranquility</span>
          <span class="decorative-line"></span>
        </div>
        <p class="garden-intro">
          Cana Gardens, off Kiambu road, is a multiple award-winning events venue known for its lush gardens, garden deck, ample parking space, and captivating views. As one of Kenya’s most popular event spaces, we offer a variety of packages to suit our client’s needs.
        </p>
      </div>

      <!-- Feature Highlight 3-Column Layout -->
      <div class="garden-features-grid">
        <!-- Left Column -->
        <div class="feature-col left-col">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-city"></i>
            </div>
            <div class="feature-info">
              <h4>Convenient Location</h4>
              <p>
                Esteemed as one of the leading wedding venues in Kenya, there is no doubt that our most distinctive feature is our gardens. Set across 1 acre, enjoy a strong country feel while only 10 minutes from the City Center.
              </p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-car"></i>
            </div>
            <div class="feature-info">
              <h4>Ample Parking</h4>
              <p>
                No need to worry about where your guests should park their vehicles. The grounds parking area can easily and safely accommodate up to 400 cars.
              </p>
            </div>
          </div>
        </div>

        <!-- Center Image Banner -->
        <div class="feature-col center-image-col">
          <div class="center-image-card">
            <img 
              src="/img/custom/Image-521.JPG" 
              alt="Cana Gardens Scenic View" 
            />
            <div class="center-badge">
              <span class="badge-number">10+</span>
              <span class="badge-label">Years of Celebrations</span>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="feature-col right-col">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-layer-group"></i>
            </div>
            <div class="feature-info">
              <h4>Best of Both Worlds</h4>
              <p>
                Cana Gardens features expansive, well-manicured lawns making it convenient for couples to easily host both the church ceremony as well as the reception party all in the same venue.
              </p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-calendar-check"></i>
            </div>
            <div class="feature-info">
              <h4>Site Visits &amp; Viewing</h4>
              <p>
                The grounds are open for physical viewing and site visits on Tuesdays and Thursdays from 11:00 AM to 2:00 PM. Karibu Cana Gardens to tour your dream setting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Our Garden section
</script>

<style scoped>
.our-garden-section {
  padding: 5.5rem 0;
  background: var(--color-bg-card);
  position: relative;
}

.garden-intro {
  max-width: 820px;
  margin: 1.5rem auto 0;
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.8;
}

.garden-features-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1.1fr;
  gap: 2.5rem;
  align-items: center;
  margin-top: 3.5rem;
}

.feature-col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature-card {
  display: flex;
  gap: 1.4rem;
  padding: 1.6rem;
  border-radius: var(--radius-md);
  background: var(--color-bg-light);
  border: 1px solid rgba(27, 67, 50, 0.06);
  transition: all var(--transition-normal);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  background: var(--color-bg-card);
  border-color: var(--color-gold-400);
}

.feature-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--color-primary-800);
  color: var(--color-gold-400);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.feature-info h4 {
  font-size: 1.15rem;
  color: var(--color-primary-900);
  margin-bottom: 0.5rem;
}

.feature-info p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Center Image */
.center-image-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  aspect-ratio: 4 / 5;
}

.center-image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.center-image-card:hover img {
  transform: scale(1.05);
}

.center-badge {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 28, 21, 0.9);
  backdrop-filter: blur(10px);
  padding: 0.8rem 1.6rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-gold-400);
  text-align: center;
  white-space: nowrap;
}

.badge-number {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.4rem;
  color: var(--color-gold-300);
  font-weight: 700;
  line-height: 1;
}

.badge-label {
  font-size: 0.725rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 1024px) {
  .garden-features-grid {
    grid-template-columns: 1fr;
  }
  .center-image-col {
    order: -1;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
