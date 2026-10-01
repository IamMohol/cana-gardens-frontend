<template>
  <footer class="site-footer">
    <!-- Asymmetrical Wave Top Divider -->
    <div class="footer-divider-top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="footer-shape-fill"
          d="M0,0c0,0,0,6,0,6.7c0,18,240.2,93.6,615.2,92.6C989.8,98.5,1000,25,1000,6.7c0-0.7,0-6.7,0-6.7H0z"
        />
      </svg>
    </div>

    <div class="container footer-content">
      <div class="footer-grid">
        <!-- Col 1: Brand & Bio -->
        <div class="footer-col brand-col">
          <div class="footer-brand">
            <img
              src="/logos/main-logo-transparent-v2.png"
              alt="Cana Gardens Nairobi"
              class="footer-logo-img"
            />
          </div>
          <p class="footer-bio">
            A multiple award-winning countryside events venue located only 10KM from Nairobi
            off Kiambu Road. Known for lush rolling lawns, breathtaking scenery, and
            timeless memories.
          </p>
          <div class="footer-tagline">
            <span class="cursive-slogan">"Your miracle begins here"</span>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="footer-col">
          <h4 class="col-title">Quick Links</h4>
          <ul class="footer-links-list">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/services">Event Services</NuxtLink></li>
            <li><NuxtLink to="/gallery">Photo Gallery</NuxtLink></li>
            <li><NuxtLink to="/faq">Frequently Asked Questions</NuxtLink></li>
            <li><NuxtLink to="/blog">Latest Stories</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact &amp; Directions</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: Opening Hours & Contact -->
        <div class="footer-col">
          <div class="footer-info-block">
            <div class="icon-wrap"><i class="far fa-clock"></i></div>
            <div>
              <h4 class="col-title">Opening Hours</h4>
              <p class="col-text">
                {{ appConfig.contact.daysOpen }}<br /><strong>{{
                  appConfig.contact.openingHours
                }}</strong>
              </p>
              <span class="sub-badge">Viewing: Tues &amp; Thu 11:00 AM - 2:00 PM</span>
            </div>
          </div>

          <div class="footer-info-block" style="margin-top: 1.5rem">
            <div class="icon-wrap"><i class="fas fa-phone-alt"></i></div>
            <div>
              <h4 class="col-title">Direct Inquiries</h4>
              <p class="col-text">
                <a :href="`tel:${appConfig.contact.phoneLink}`">{{
                  appConfig.contact.phone
                }}</a><br />
                <a :href="`tel:${appConfig.contact.secondaryPhoneLink}`">{{
                  appConfig.contact.secondaryPhone
                }}</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Col 4: Location & Social -->
        <div class="footer-col social-col">
          <div class="footer-info-block">
            <div class="icon-wrap"><i class="fas fa-map-marker-alt"></i></div>
            <div>
              <h4 class="col-title">Our Location</h4>
              <p class="col-text">
                {{ appConfig.contact.address }}
              </p>
            </div>
          </div>

          <h4 class="col-title" style="margin-top: 1.5rem">Follow Us</h4>
          <div class="social-icon-row">
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
            <a
              :href="`https://wa.me/${appConfig.contact.whatsapp}`"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
          <button
            @click="$emit('open-booking')"
            class="btn btn-gold btn-sm"
            style="margin-top: 1.2rem; width: 100%"
          >
            <i class="fas fa-calendar-check"></i> Book a Tour
          </button>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          © {{ new Date().getFullYear() }} Cana Gardens. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
defineEmits(["open-booking"]);
</script>

<style scoped>
.site-footer {
  position: relative;
  background: var(--color-primary-950);
  color: #ffffff;
  padding-top: 5rem;
  padding-bottom: 2rem;
  margin-top: 4rem;
}

html.dark .site-footer {
  background: var(--color-bg-card);
}

.footer-divider-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.footer-divider-top svg {
  position: relative;
  display: block;
  width: 100%;
  height: 50px;
}

.footer-shape-fill {
  fill: var(--color-bg-light);
}

html.dark .footer-shape-fill {
  fill: var(--color-bg-base);
}

.footer-content {
  position: relative;
  z-index: 5;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr 1.1fr 1fr;
  gap: 2.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  margin-bottom: 1rem;
}

.footer-logo-img {
  height: 65px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

.footer-bio {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.875rem;
  line-height: 1.6;
}

.footer-tagline {
  margin-top: 0.75rem;
}

.cursive-slogan {
  font-family: var(--font-cursive);
  font-size: 1.6rem;
  color: var(--color-gold-400);
}

.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-links-list a {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color var(--transition-fast), padding-left var(--transition-fast);
  display: inline-block;
}

.footer-links-list a:hover {
  color: var(--color-gold-400);
  padding-left: 4px;
}

.footer-info-block {
  display: flex;
  gap: 0.9rem;
}

.icon-wrap {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(197, 155, 39, 0.15);
  color: var(--color-gold-400);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.col-title {
  color: var(--color-gold-300);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.col-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.col-text a:hover {
  color: var(--color-gold-300);
}

.sub-badge {
  display: inline-block;
  margin-top: 0.4rem;
  font-size: 0.725rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
  color: var(--color-gold-400);
}

.social-icon-row {
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem;
}

.social-icon-row a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.social-icon-row a:hover {
  background: var(--color-gold-500);
  transform: translateY(-2px);
}

.footer-bottom {
  padding-top: 1.8rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.825rem;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
