<template>
  <div class="page-container">
    <!-- Hero Header -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow"><i class="fas fa-question-circle"></i> Helpful Information</span>
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about planning your celebration or photoshoot at Cana Gardens.</p>
      </div>
    </section>

    <!-- FAQ Accordion Section -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-layout">
          <!-- Left: Quick Navigation / Assistance -->
          <div class="faq-sidebar">
            <div class="help-box">
              <span class="cursive-accent">Have Questions?</span>
              <h3>We’re Here to Help</h3>
              <p>
                Can’t find the answer you’re looking for? Reach out to our event planning desk directly for custom package pricing.
              </p>
              <div class="help-actions">
                <NuxtLink to="/contact" class="btn btn-gold btn-sm">
                  <i class="fas fa-envelope"></i> Send an Inquiry
                </NuxtLink>
                <a
                  :href="`https://wa.me/${appConfig.contact.whatsapp}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline btn-sm"
                >
                  <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <!-- Right: Accordion Items -->
          <div class="faq-accordion-list">
            <div
              v-for="(item, index) in faqs"
              :key="index"
              class="faq-card"
              :class="{ 'is-open': openIndex === index }"
            >
              <button
                class="faq-question"
                @click="toggleFaq(index)"
                :aria-expanded="openIndex === index"
              >
                <span class="question-text">{{ item.question }}</span>
                <span class="toggle-icon">
                  <i :class="openIndex === index ? 'fas fa-minus' : 'fas fa-plus'"></i>
                </span>
              </button>
              <transition name="expand">
                <div v-if="openIndex === index" class="faq-answer">
                  <p>{{ item.answer }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Bar -->
    <section class="faq-bottom-cta">
      <div class="container text-center">
        <h2>Experience the Gardens in Person</h2>
        <p>Viewing and site visits are available on Tuesdays and Thursdays from 11:00 AM to 2:00 PM.</p>
        <button @click="openBooking" class="btn btn-gold">
          <i class="fas fa-calendar-check"></i> Schedule a Viewing Tour
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'

const appConfig = useAppConfig()
const openBooking = inject('openBookingModal', () => {})

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Where is Cana Gardens located and how accessible is it?',
    answer:
      'Cana Gardens is conveniently located just 10KM from Nairobi CBD off Kiambu Road, Kenya. Our venue is situated along a well-paved, quiet corridor that provides a peaceful countryside escape without the long travel distance.',
  },
  {
    question: 'What is the guest capacity for weddings and receptions?',
    answer:
      'Our 1-acre manicured grounds are capable of hosting from intimate gatherings of 50 to grand wedding receptions of over 700 to 1,000 guests, allowing both church ceremony and evening banquet on the same property.',
  },
  {
    question: 'How many vehicles can park on the grounds?',
    answer:
      'We offer an expansive, gated on-site parking area accommodating more than 400 vehicles, complete with dedicated security personnel and controlled access points.',
  },
  {
    question: 'Can we bring our own caterers, decor vendors, and DJ?',
    answer:
      'Yes! We provide complete flexibility. You are welcome to engage your preferred caterers, decorators, entertainment teams, and sound engineers. We provide dedicated catering prep pavilions, reliable power hookups, and vendor access gates.',
  },
  {
    question: 'What is the photoshoot policy on the garden deck?',
    answer:
      'Our iconic garden deck and botanical greenery provide a signature backdrop for bridal portraits, fashion shoots, and commercial filming. Half-day and full-day photography permits are available by reservation.',
  },
  {
    question: 'What are the viewing and site visit hours?',
    answer:
      'Our grounds are open for viewing and site visits on Tuesdays and Thursdays from 11:00 AM to 2:00 PM. We recommend booking in advance so an events manager can guide you.',
  },
  {
    question: 'How do I secure my desired event date?',
    answer:
      'Dates are reserved on a first-confirmed basis upon submission of a booking inquiry and payment of the reservation deposit. Contact our sales desk or fill out the contact form to verify date availability.',
  },
]

useSeoMeta({
  title: 'Frequently Asked Questions | Cana Gardens Venue Nairobi',
  description:
    'Answers to common questions regarding wedding capacities, parking, catering policies, photoshoot permits, and booking procedures at Cana Gardens.',
  ogTitle: 'FAQs - Cana Gardens Venue Nairobi',
  ogDescription:
    'Discover venue capacities, booking policies, location directions, and amenities at Cana Gardens.',
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
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-family: var(--font-serif);
  margin-bottom: 0.8rem;
}

.page-hero p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.faq-section {
  padding: 5rem 0 6rem;
  background-color: var(--color-bg-light);
}

.faq-layout {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 3.5rem;
  align-items: flex-start;
}

.faq-sidebar .help-box {
  background: var(--color-bg-sand);
  border: 1px solid rgba(53, 105, 57, 0.1);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 6rem;
}

.cursive-accent {
  font-family: var(--font-cursive);
  font-size: 2.2rem;
  color: var(--color-gold-500);
  display: block;
}

.help-box h3 {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  color: var(--color-heading);
  margin-bottom: 0.75rem;
}

.help-box p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.8rem;
}

.help-actions {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.faq-accordion-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.faq-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all var(--transition-fast);
}

.faq-card.is-open {
  border-color: var(--color-primary-700);
  box-shadow: var(--shadow-md);
}

.faq-question {
  width: 100%;
  padding: 1.4rem 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
}

.question-text {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  color: var(--color-heading);
  font-weight: 600;
}

.toggle-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-primary-50);
  color: var(--color-primary-800);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.faq-card.is-open .toggle-icon {
  background: var(--color-primary-800);
  color: #ffffff;
}

.faq-answer {
  padding: 0 1.8rem 1.6rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

.faq-bottom-cta {
  background-color: var(--color-surface-dark);
  color: #ffffff;
  padding: 4.5rem 0;
  text-align: center;
  border-top: 1px solid var(--color-surface-dark-border);
}

.faq-bottom-cta h2 {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.faq-bottom-cta p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
  margin-bottom: 1.8rem;
}

/* Dark Mode Overrides */
:global(html.dark) .faq-sidebar .help-box {
  background: var(--color-bg-card);
  border-color: var(--color-border);
}

:global(html.dark) .faq-card {
  background: var(--color-bg-card);
  border-color: var(--color-border);
}

:global(html.dark) .faq-card.is-open {
  border-color: var(--color-accent-500);
}

:global(html.dark) .toggle-icon {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-accent-400);
}

:global(html.dark) .faq-card.is-open .toggle-icon {
  background: var(--color-accent-500);
  color: #0d1c0f;
}

:global(html.dark) .faq-bottom-cta {
  background-color: #0f1a10;
  border-color: var(--color-border);
}

@media (max-width: 900px) {
  .faq-layout {
    grid-template-columns: 1fr;
  }
  .faq-sidebar .help-box {
    position: static;
  }
}
</style>
