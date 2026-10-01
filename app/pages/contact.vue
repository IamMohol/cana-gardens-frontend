<template>
  <div class="page-container">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow"><i class="fas fa-map-marker-alt"></i> Get in Touch</span>
        <h1>Contact Cana Gardens</h1>
        <p>We invite you to visit our lush countryside grounds off Kiambu Road or reach out to our team.</p>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Contact Details Cards -->
          <div class="contact-details">
            <span class="cursive-accent">Karibu Cana Gardens</span>
            <h2>We’d Love to Host You</h2>
            <p class="lead-desc">
              Whether you are planning a romantic wedding, a high-profile corporate retreat, or simply wishing to explore our grounds, our venue managers are on standby to give you a personal tour.
            </p>

            <div class="contact-card-list">
              <div class="info-card">
                <div class="card-icon"><i class="fas fa-phone-alt"></i></div>
                <div class="card-body">
                  <h4>Call Us Directly</h4>
                  <p>
                    <a :href="`tel:${appConfig.contact.phoneLink}`">{{ appConfig.contact.phone }}</a><br />
                    <a :href="`tel:${appConfig.contact.secondaryPhoneLink}`">{{ appConfig.contact.secondaryPhone }}</a>
                  </p>
                </div>
              </div>

              <div class="info-card">
                <div class="card-icon"><i class="fas fa-envelope"></i></div>
                <div class="card-body">
                  <h4>Email Inquiries</h4>
                  <p><a :href="`mailto:${appConfig.contact.email}`">{{ appConfig.contact.email }}</a></p>
                </div>
              </div>

              <div class="info-card">
                <div class="card-icon"><i class="fas fa-map-pin"></i></div>
                <div class="card-body">
                  <h4>Location</h4>
                  <p>{{ appConfig.contact.address }}</p>
                </div>
              </div>

              <div class="info-card">
                <div class="card-icon"><i class="far fa-clock"></i></div>
                <div class="card-body">
                  <h4>Visiting &amp; Viewing Hours</h4>
                  <p>
                    Grounds Open Daily: <strong>{{ appConfig.contact.openingHours }}</strong><br />
                    Viewing &amp; Site Visits: <strong>{{ appConfig.contact.viewingHours }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="contact-form-card">
            <div class="form-header">
              <span class="form-badge"><i class="fas fa-envelope-open-text"></i> Quick Inquiry</span>
              <h3>Send an Event Inquiry</h3>
              <p>Fill out the form below and we will confirm date availability and tailored pricing packages.</p>
            </div>

            <!-- Success Banner -->
            <transition name="fade">
              <div v-if="isSuccess" class="form-success-banner">
                <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                <div class="success-content">
                  <h4>Thank You, {{ submittedName }}!</h4>
                  <p>{{ successMessage }}</p>
                  <p v-if="referenceCode" class="ref-badge">
                    Inquiry Reference: <strong>{{ referenceCode }}</strong>
                  </p>
                  <div class="success-actions">
                    <button type="button" @click="resetForm" class="btn btn-primary btn-sm">
                      <i class="fas fa-redo"></i> Send Another Inquiry
                    </button>
                    <a
                      :href="`https://wa.me/${appConfig.contact.whatsapp}?text=Hi%20Cana%20Gardens,%20I%20just%20submitted%20an%20inquiry%20(Ref:%20${referenceCode})`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-gold btn-sm"
                    >
                      <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </transition>

            <!-- Form -->
            <form v-if="!isSuccess" @submit.prevent="handleSubmit" class="contact-form" novalidate>
              <!-- Global Error Banner -->
              <div v-if="globalError" class="form-error-banner" role="alert">
                <i class="fas fa-exclamation-triangle"></i>
                <span>{{ globalError }}</span>
              </div>

              <!-- Anti-Spam Honeypot Field (Hidden for real users) -->
              <div class="honeypot-field" aria-hidden="true">
                <label for="contact-website">Website (leave blank)</label>
                <input
                  id="contact-website"
                  v-model="form.website"
                  type="text"
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>

              <!-- Full Name -->
              <div class="form-group" :class="{ 'has-error': fieldErrors.name }">
                <label for="contact-name">Full Name <span class="required">*</span></label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  placeholder="e.g. Sarah Mwangi"
                  required
                  :aria-invalid="!!fieldErrors.name"
                />
                <span v-if="fieldErrors.name" class="field-error-msg">{{ fieldErrors.name[0] }}</span>
              </div>

              <!-- Phone and Email -->
              <div class="form-row">
                <div class="form-group" :class="{ 'has-error': fieldErrors.phone }">
                  <label for="contact-phone">Phone Number <span class="required">*</span></label>
                  <input
                    id="contact-phone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="e.g. +254 712 345 678"
                    required
                    :aria-invalid="!!fieldErrors.phone"
                  />
                  <span v-if="fieldErrors.phone" class="field-error-msg">{{ fieldErrors.phone[0] }}</span>
                </div>

                <div class="form-group" :class="{ 'has-error': fieldErrors.email }">
                  <label for="contact-email">Email Address <span class="required">*</span></label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    placeholder="e.g. sarah@example.com"
                    required
                    :aria-invalid="!!fieldErrors.email"
                  />
                  <span v-if="fieldErrors.email" class="field-error-msg">{{ fieldErrors.email[0] }}</span>
                </div>
              </div>

              <!-- Event Type & Estimated Guests -->
              <div class="form-row">
                <div class="form-group" :class="{ 'has-error': fieldErrors.event_type }">
                  <label for="contact-event">Event Type</label>
                  <select id="contact-event" v-model="form.event_type">
                    <option value="wedding">Wedding Ceremony &amp; Reception</option>
                    <option value="photoshoot">Photography / Video Shoot</option>
                    <option value="corporate">Corporate Gala / Team Building</option>
                    <option value="party">Birthday / Picnic / Private Party</option>
                    <option value="anniversary">Anniversary / Shower</option>
                    <option value="church">Church Gathering / Retreat</option>
                    <option value="other">Other Activity</option>
                  </select>
                  <span v-if="fieldErrors.event_type" class="field-error-msg">{{ fieldErrors.event_type[0] }}</span>
                </div>

                <div class="form-group" :class="{ 'has-error': fieldErrors.estimated_guests }">
                  <label for="contact-guests">Estimated Guests</label>
                  <input
                    id="contact-guests"
                    v-model.number="form.estimated_guests"
                    type="number"
                    min="10"
                    max="3000"
                    placeholder="e.g. 300"
                  />
                  <span v-if="fieldErrors.estimated_guests" class="field-error-msg">{{ fieldErrors.estimated_guests[0] }}</span>
                </div>
              </div>

              <!-- Preferred Date -->
              <div class="form-group" :class="{ 'has-error': fieldErrors.event_date }">
                <label for="contact-date">Preferred Event Date</label>
                <input
                  id="contact-date"
                  v-model="form.event_date"
                  type="date"
                />
                <span v-if="fieldErrors.event_date" class="field-error-msg">{{ fieldErrors.event_date[0] }}</span>
              </div>

              <!-- Message -->
              <div class="form-group" :class="{ 'has-error': fieldErrors.message }">
                <label for="contact-message">Your Requirements &amp; Questions <span class="required">*</span></label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  rows="4"
                  placeholder="Tell us about your event vision, setup preferences, catering questions, or specific ground requirements..."
                  required
                  :aria-invalid="!!fieldErrors.message"
                ></textarea>
                <span v-if="fieldErrors.message" class="field-error-msg">{{ fieldErrors.message[0] }}</span>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn btn-gold submit-btn"
              >
                <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                <span v-else><i class="fas fa-paper-plane"></i> Submit Event Inquiry</span>
              </button>

              <p class="privacy-note">
                <i class="fas fa-lock"></i> Your contact details will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const config = useRuntimeConfig()
const appConfig = useAppConfig()

interface FormState {
  name: string
  phone: string
  email: string
  event_type: string
  event_date: string
  estimated_guests: number | null
  message: string
  website: string // honeypot
}

const form = reactive<FormState>({
  name: '',
  phone: '',
  email: '',
  event_type: 'wedding',
  event_date: '',
  estimated_guests: null,
  message: '',
  website: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const submittedName = ref('')
const referenceCode = ref('')
const successMessage = ref('')
const globalError = ref('')
const fieldErrors = ref<Record<string, string[]>>({})

const resetForm = () => {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.event_type = 'wedding'
  form.event_date = ''
  form.estimated_guests = null
  form.message = ''
  form.website = ''
  fieldErrors.value = {}
  globalError.value = ''
  isSuccess.value = false
}

const handleSubmit = async () => {
  fieldErrors.value = {}
  globalError.value = ''

  // Client-side quick check
  if (!form.name.trim()) {
    fieldErrors.value.name = ['Please provide your full name.']
    return
  }
  if (!form.phone.trim()) {
    fieldErrors.value.phone = ['Please provide your phone number.']
    return
  }
  if (!form.email.trim() || !form.email.includes('@')) {
    fieldErrors.value.email = ['Please provide a valid email address.']
    return
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    fieldErrors.value.message = ['Please enter a message of at least 10 characters.']
    return
  }

  isSubmitting.value = true

  try {
    const apiBase = config.public.apiBase || 'https://api.canagardens.co.ke/api'
    const endpoint = `${apiBase.replace(/\/+$/, '')}/contact`

    const response = await $fetch<{
      success: boolean
      message: string
      data?: { reference?: string }
    }>(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        event_type: form.event_type,
        event_date: form.event_date || null,
        guest_count: form.estimated_guests,
        estimated_guests: form.estimated_guests,
        message: form.message.trim(),
        website: form.website || null,
      },
    })

    if (response && response.success) {
      submittedName.value = form.name
      referenceCode.value = response.data?.reference || ''
      successMessage.value =
        response.message || 'We have received your message and our team will get in touch shortly.'
      isSuccess.value = true
    } else {
      globalError.value = response.message || 'Something went wrong. Please try again.'
    }
  } catch (err: any) {
    console.error('Contact submission error:', err)

    if (err?.data?.errors) {
      fieldErrors.value = err.data.errors
      globalError.value = err.data.message || 'Please correct the highlighted fields below.'
    } else if (err?.statusCode === 429) {
      globalError.value = 'Too many requests. Please wait a moment before submitting again.'
    } else {
      globalError.value =
        'Unable to send your inquiry at this moment. Please call us directly at ' +
        appConfig.contact.phone +
        ' or reach us via WhatsApp.'
    }
  } finally {
    isSubmitting.value = false
  }
}

useSeoMeta({
  title: 'Contact Us | Location, Phone & Viewing Hours | Cana Gardens',
  description: `Get in touch with Cana Gardens off Kiambu Road, Nairobi. Call ${appConfig.contact.phone} or visit us on Tuesdays and Thursdays from 11:00 AM - 2:00 PM.`,
  ogTitle: 'Contact Cana Gardens Nairobi | Inquire Venue & Viewing',
  ogDescription: 'Reach out to Cana Gardens for wedding packages, grounds viewing, and event reservations.',
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
  font-family: var(--font-serif);
}

.page-hero p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.15rem;
  max-width: 650px;
  margin: 0 auto;
}

.contact-section {
  padding: 5.5rem 0 7rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 4rem;
  align-items: flex-start;
}

.cursive-accent {
  font-family: var(--font-cursive);
  font-size: 2.2rem;
  color: var(--color-gold-500);
  display: block;
}

.contact-details h2 {
  font-family: var(--font-serif);
  font-size: 2.3rem;
  color: var(--color-primary-950);
  margin-bottom: 0.5rem;
}

.lead-desc {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin: 1rem 0 2rem;
}

.contact-card-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.info-card {
  display: flex;
  gap: 1.2rem;
  padding: 1.4rem;
  border-radius: var(--radius-md);
  background: var(--color-bg-sand);
  border: 1px solid rgba(53, 105, 57, 0.08);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary-800);
  color: var(--color-gold-400);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.card-body h4 {
  font-size: 1.05rem;
  color: var(--color-primary-950);
  margin-bottom: 0.25rem;
  font-family: var(--font-serif);
}

.card-body p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.card-body a {
  color: var(--color-primary-800);
  font-weight: 600;
  text-decoration: none;
}

.card-body a:hover {
  color: var(--color-gold-600);
  text-decoration: underline;
}

.contact-form-card {
  background: var(--color-bg-card);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
}

.form-header {
  margin-bottom: 2rem;
}

.form-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-primary-800);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.35rem;
}

.form-header h3 {
  font-size: 1.8rem;
  color: var(--color-primary-950);
  font-family: var(--font-serif);
  margin-bottom: 0.35rem;
}

.form-header p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.honeypot-field {
  display: none !important;
  visibility: hidden;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary-900);
}

.required {
  color: #dc2626;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-text-main);
  background: var(--color-bg-light);
  outline: none;
  transition: border-color var(--transition-fast), background-color var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--color-primary-800);
  background: #ffffff;
}

.form-group.has-error input,
.form-group.has-error select,
.form-group.has-error textarea {
  border-color: #dc2626;
  background: #fef2f2;
}

.field-error-msg {
  font-size: 0.78rem;
  color: #dc2626;
  font-weight: 500;
}

.form-error-banner {
  background: #fee2e2;
  color: #991b1b;
  padding: 0.9rem 1.2rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.submit-btn {
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  cursor: pointer;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.privacy-note {
  font-size: 0.775rem;
  color: var(--color-text-muted);
  text-align: center;
  margin-top: 0.5rem;
}

/* Success Banner */
.form-success-banner {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: 2rem;
  border-radius: var(--radius-md);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.success-icon {
  font-size: 2.2rem;
  color: #15803d;
  flex-shrink: 0;
}

.success-content h4 {
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
  color: #14532d;
  font-family: var(--font-serif);
}

.success-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #166534;
}

.ref-badge {
  margin-top: 0.5rem;
  background: #dcfce7;
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
}

.success-actions {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
