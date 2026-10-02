<template>
  <footer class="site-footer">
    <!-- Serene Pre-Footer Invitation Banner -->
    <div class="footer-invitation-band">
      <div class="container invitation-container">
        <div class="invitation-text">
          <span class="invitation-eyebrow">A Pocket of Serenity</span>
          <h3 class="invitation-title">Experience the Beauty of Cana Gardens</h3>
          <p class="invitation-desc">
            Schedule a private walkthrough across our manicured grounds and scenic terraces.
          </p>
        </div>
        <div class="invitation-action">
          <button
            @click="$emit('open-booking')"
            class="btn btn-invitation"
            aria-label="Book a private tour"
          >
            <i class="fas fa-calendar-check"></i>
            <span>Book a Tour</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Footer Body -->
    <div class="container footer-main">
      <div class="footer-grid">
        <!-- Col 1: Brand & Philosophy -->
        <div class="footer-col brand-col">
          <NuxtLink to="/" class="footer-brand" aria-label="Cana Gardens Home">
            <img
              src="/logos/main-logo-transparent-v2.png"
              alt="Cana Gardens Nairobi"
              class="footer-logo-img"
              width="180"
              height="60"
            />
          </NuxtLink>

          <p class="footer-bio">
            An intimate countryside sanctuary located 10KM from Nairobi off Kiambu Road.
            Lush rolling grounds, tranquil breezes, and timeless celebrations.
          </p>

          <div class="footer-tagline">
            <span class="tagline-text">"Your miracle begins here"</span>
          </div>

          <div class="brand-badge-pill">
            <i class="fas fa-leaf"></i>
            <span>Countryside Weddings &amp; Events</span>
          </div>
        </div>

        <!-- Col 2: Navigation Links -->
        <div class="footer-col nav-col">
          <h4 class="col-heading">Explore</h4>
          <ul class="footer-nav-list">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/services">Event Services</NuxtLink></li>
            <li><NuxtLink to="/gallery">Photo Gallery</NuxtLink></li>
            <li><NuxtLink to="/faq">Frequently Asked Questions</NuxtLink></li>
            <li><NuxtLink to="/blog">Latest Stories</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact &amp; Directions</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: Hours & Viewing -->
        <div class="footer-col hours-col">
          <h4 class="col-heading">Hours &amp; Visiting</h4>
          
          <div class="info-card">
            <div class="info-row">
              <div class="info-icon">
                <i class="far fa-clock"></i>
              </div>
              <div class="info-meta">
                <span class="info-label">Office &amp; Grounds</span>
                <span class="info-value">{{ appConfig.contact.daysOpen }}</span>
                <span class="info-subvalue">{{ appConfig.contact.openingHours }}</span>
              </div>
            </div>

            <div class="viewing-highlight">
              <span class="viewing-tag">
                <i class="far fa-calendar-alt"></i> Public Viewing
              </span>
              <p class="viewing-text">Tuesday &amp; Thursday: 11:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <!-- Col 4: Estate Concierge & Contact -->
        <div class="footer-col contact-col">
          <h4 class="col-heading">Concierge</h4>

          <div class="contact-details">
            <div class="contact-item">
              <div class="info-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="info-meta">
                <span class="info-label">Location</span>
                <span class="info-value">{{ appConfig.contact.address }}</span>
              </div>
            </div>

            <div class="contact-item">
              <div class="info-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="info-meta">
                <span class="info-label">Direct Lines</span>
                <div class="phone-links">
                  <a :href="`tel:${appConfig.contact.phoneLink}`">
                    {{ appConfig.contact.phone }}
                  </a>
                  <a :href="`tel:${appConfig.contact.secondaryPhoneLink}`">
                    {{ appConfig.contact.secondaryPhone }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="social-block">
            <span class="social-label">Follow our journey</span>
            <div class="social-links-row">
              <a
                :href="appConfig.contact.facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Cana Gardens on Facebook"
                class="social-btn"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                :href="appConfig.contact.instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Cana Gardens on Instagram"
                class="social-btn"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                :href="`https://wa.me/${appConfig.contact.whatsapp}`"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Cana Gardens on WhatsApp"
                class="social-btn"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom Legal Bar -->
      <div class="footer-bottom-bar">
        <p class="copyright-text">
          &copy; {{ new Date().getFullYear() }} Cana Gardens. All rights reserved.
        </p>
        <p class="botanical-signoff">
          Intimate events and serene garden memories
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
  margin-top: 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

html.dark .site-footer {
  background: var(--color-bg-light);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

/* Serene Invitation Pre-Footer Band */
.footer-invitation-band {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3rem 0;
  background: rgba(255, 255, 255, 0.02);
}

.invitation-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.invitation-text {
  max-width: 620px;
}

.invitation-eyebrow {
  display: inline-block;
  font-size: 0.775rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent-400);
  margin-bottom: 0.4rem;
}

.invitation-title {
  font-family: var(--font-serif);
  font-size: 1.85rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.25;
  margin-bottom: 0.4rem;
}

.invitation-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.6;
}

.invitation-action {
  flex-shrink: 0;
}

.btn-invitation {
  background: var(--color-accent-500);
  color: #0d1c0f;
  font-weight: 600;
  padding: 0.75rem 1.6rem;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 16px rgba(157, 194, 30, 0.25);
  transition: all var(--transition-normal);
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border: none;
  cursor: pointer;
}

.btn-invitation:hover {
  background: var(--color-accent-400);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(157, 194, 30, 0.35);
}

.btn-invitation:active {
  transform: translateY(1px) scale(0.98);
}

/* Main Footer */
.footer-main {
  padding-top: 4rem;
  padding-bottom: 2.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.85fr 1.05fr 1.15fr;
  gap: 3rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Col 1: Brand */
.footer-brand {
  display: inline-block;
  margin-bottom: 1.25rem;
  transition: opacity var(--transition-fast);
}

.footer-brand:hover {
  opacity: 0.9;
}

.footer-logo-img {
  height: 56px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

.footer-bio {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.footer-tagline {
  margin-bottom: 1.25rem;
}

.tagline-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.25rem;
  color: var(--color-accent-400);
  display: block;
}

.brand-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.8rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-full);
  font-size: 0.775rem;
  color: rgba(255, 255, 255, 0.85);
}

.brand-badge-pill i {
  color: var(--color-accent-400);
}

/* Common Headings */
.col-heading {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.4rem;
  position: relative;
  letter-spacing: 0.02em;
}

.col-heading::after {
  content: "";
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-accent-500);
  margin-top: 0.45rem;
  border-radius: 2px;
}

/* Col 2: Navigation Links */
.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav-list a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color var(--transition-fast), padding-left var(--transition-fast);
  display: inline-block;
}

.footer-nav-list a:hover {
  color: var(--color-accent-400);
  padding-left: 6px;
}

/* Col 3: Hours & Visiting Card */
.info-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 1.25rem;
}

.info-row {
  display: flex;
  gap: 0.9rem;
  margin-bottom: 1.25rem;
}

.info-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(157, 194, 30, 0.15);
  color: var(--color-accent-400);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.info-meta {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.2rem;
}

.info-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
}

.info-subvalue {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.82);
}

.viewing-highlight {
  background: rgba(157, 194, 30, 0.1);
  border-left: 3px solid var(--color-accent-500);
  padding: 0.7rem 0.9rem;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.viewing-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.725rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-accent-400);
  margin-bottom: 0.25rem;
}

.viewing-text {
  font-size: 0.825rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  margin: 0;
}

/* Col 4: Concierge & Contact */
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
}

.phone-links {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.phone-links a {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.phone-links a:hover {
  color: var(--color-accent-400);
}

.social-block {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.social-label {
  display: block;
  font-size: 0.775rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.65rem;
}

.social-links-row {
  display: flex;
  gap: 0.65rem;
}

.social-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  transition: all var(--transition-fast);
  text-decoration: none;
}

.social-btn:hover {
  background: var(--color-accent-500);
  border-color: var(--color-accent-500);
  color: var(--color-primary-950);
  transform: translateY(-2px);
}

.social-btn:active {
  transform: translateY(0) scale(0.95);
}

/* Bottom Legal Bar */
.footer-bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
}

.copyright-text {
  margin: 0;
}

.botanical-signoff {
  margin: 0;
  font-style: italic;
  font-family: var(--font-serif);
  color: rgba(255, 255, 255, 0.65);
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .invitation-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .invitation-action {
    width: 100%;
  }

  .btn-invitation {
    width: 100%;
    justify-content: center;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer-bottom-bar {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
}
</style>
