<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal-card">
        <!-- Header -->
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="modal-badge"><i class="fas fa-calendar-alt"></i> Reservations &amp; Inquiries</span>
            <h3>Book Cana Gardens</h3>
            <p>Fill in your event details and our events coordinator will reach out promptly.</p>
          </div>
          <button @click="$emit('close')" class="modal-close-btn" aria-label="Close Modal">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Success State -->
        <div v-if="isSuccess" class="modal-success">
          <div class="success-icon-circle">
            <i class="fas fa-check"></i>
          </div>
          <h4>Inquiry Sent Successfully!</h4>
          <p>Thank you, {{ form.name }}. Our team has received your request and will call you at <strong>{{ form.phone }}</strong> shortly.</p>
          
          <div class="success-actions">
            <a 
              :href="`https://wa.me/${$appConfig.contact.phoneLink}?text=${encodeURIComponent($appConfig.contact.whatsappMessage + ' ' + form.event_type + ' on ' + form.event_date + ' (Name: ' + form.name + ')')}`"
              target="_blank" 
              class="btn btn-gold"
            >
              <i class="fab fa-whatsapp"></i> Chat on WhatsApp Now
            </a>
            <button @click="resetAndClose" class="btn btn-outline">Close Window</button>
          </div>
        </div>

        <!-- Form Body -->
        <form v-else @submit.prevent="handleSubmit" class="modal-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="name">Your Full Name *</label>
              <input 
                id="name" 
                v-model="form.name" 
                type="text" 
                placeholder="e.g. Jane Wanjiku" 
                required 
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number *</label>
              <input 
                id="phone" 
                v-model="form.phone" 
                type="tel" 
                placeholder="e.g. +254 700 000 000" 
                required 
              />
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input 
                id="email" 
                v-model="form.email" 
                type="email" 
                placeholder="e.g. jane@example.com" 
              />
            </div>

            <div class="form-group">
              <label for="event_type">Event Type *</label>
              <select id="event_type" v-model="form.event_type" required>
                <option value="wedding">Wedding Ceremony &amp; Reception</option>
                <option value="photoshoot">Photo Shoot</option>
                <option value="corporate">Corporate Event / Team Building</option>
                <option value="party">Birthday / Picnic / Private Party</option>
                <option value="photo_shoots">Photoshoots</option>
                <option value="events_showers">Events & Showers</option>
                <option value="other">Other Activities</option>
              </select>
            </div>

            <div class="form-group">
              <label for="event_date">Preferred Date</label>
              <input 
                id="event_date" 
                v-model="form.event_date" 
                type="date" 
              />
            </div>

            <div class="form-group">
              <label for="estimated_guests">Estimated Guest Count</label>
              <input 
                id="estimated_guests" 
                v-model.number="form.estimated_guests" 
                type="number" 
                placeholder="e.g. 250" 
                min="1" 
              />
            </div>
            <div class="form-group" style="display: none;" aria-hidden="true">
              <label for="modal-website">Website</label>
              <input id="modal-website" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
            </div>
          </div>

          <div class="form-group full-width">
            <label for="message">Your Message or Requirements *</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="3" 
              placeholder="Tell us about catering needs, setup requirements, decor plans, etc."
              required
            ></textarea>
          </div>

          <div v-if="errorMessage" class="error-banner">
            <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
          </div>

          <div class="form-actions">
            <button type="button" @click="$emit('close')" class="btn btn-outline btn-sm">
              Cancel
            </button>
            <button type="submit" :disabled="isSubmitting" class="btn btn-gold">
              <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
              <span v-else><i class="fas fa-paper-plane"></i> Submit Inquiry</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])
const config = useRuntimeConfig()
const appConfig = useAppConfig()

const form = reactive({
  name: '',
  phone: '',
  email: '',
  event_type: 'wedding',
  event_date: '',
  estimated_guests: null as number | null,
  message: '',
  website: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')
const referenceCode = ref('')

const handleSubmit = async () => {
  if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
    errorMessage.value = 'Please fill out your name, phone number, and a brief message.'
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const apiBase = config.public.apiBase || 'https://api.canagardens.co.ke/api'
    const endpoint = `${apiBase.replace(/\/+$/, '')}/contact`

    const res = await $fetch<{
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
        email: form.email.trim() || `${form.phone.replace(/[^0-9]/g, '')}@canagardens.co.ke`,
        event_type: form.event_type,
        event_date: form.event_date || null,
        guest_count: form.estimated_guests,
        estimated_guests: form.estimated_guests,
        message: form.message.trim(),
        website: form.website || null,
      },
    })

    if (res && res.success) {
      referenceCode.value = res.data?.reference || ''
      isSuccess.value = true
    } else {
      errorMessage.value = res.message || 'Unable to submit your inquiry. Please try again.'
    }
  } catch (err: any) {
    if (err?.data?.message) {
      errorMessage.value = err.data.message
    } else if (err?.statusCode === 429) {
      errorMessage.value = 'Too many attempts. Please wait a moment before trying again.'
    } else {
      errorMessage.value = 'Could not connect to the booking service. Please call ' + (appConfig?.contact?.phone || '+254 706 948 574')
    }
  } finally {
    isSubmitting.value = false
  }
}

const resetAndClose = () => {
  isSuccess.value = false
  form.name = ''
  form.phone = ''
  form.email = ''
  form.message = ''
  form.event_date = ''
  form.estimated_guests = null
  form.website = ''
  errorMessage.value = ''
  emit('close')
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 28, 21, 0.75);
  backdrop-filter: blur(6px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-card {
  background: var(--color-bg-card);
  width: 100%;
  max-width: 680px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
  border: 1px solid var(--color-border);
  animation: modalPop 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-header {
  background-color: var(--color-surface-dark);
  color: #ffffff;
  padding: 1.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid var(--color-surface-dark-border);
}

.modal-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-gold-400);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.3rem;
}

.modal-title-group h3 {
  color: #ffffff;
  font-size: 1.6rem;
  margin-bottom: 0.25rem;
}

.modal-title-group p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.85rem;
}

.modal-close-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  transition: all var(--transition-fast);
}

.modal-close-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.modal-form {
  padding: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group.full-width {
  margin-top: 1.2rem;
}

.form-group label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--color-primary-900);
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
  transition: border-color var(--transition-fast);
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--color-accent-500);
  background: var(--color-bg-card);
}

.error-banner {
  background: #fee2e2;
  color: #991b1b;
  padding: 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  margin-top: 1rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.8rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--color-border);
}

/* Dark Mode Overrides */
html.dark .modal-card {
  background-color: var(--color-bg-card);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
}

html.dark .modal-header {
  background-color: #0f1a10;
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

html.dark .form-group label {
  color: var(--color-heading);
}

html.dark .form-group input,
html.dark .form-group select,
html.dark .form-group textarea {
  background: var(--color-bg-light);
  border-color: rgba(255, 255, 255, 0.12);
  color: #f0f7f1;
}

html.dark .form-group input:focus,
html.dark .form-group select:focus,
html.dark .form-group textarea:focus {
  border-color: var(--color-accent-500);
  background: var(--color-bg-card);
}

html.dark .error-banner {
  background: rgba(220, 38, 38, 0.15);
  color: #fca5a5;
  border: 1px solid rgba(220, 38, 38, 0.3);
}

html.dark .success-icon-circle {
  background: rgba(157, 194, 30, 0.15);
  color: var(--color-accent-400);
}

/* Success State */
.modal-success {
  padding: 3rem 2rem;
  text-align: center;
}

.success-icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #dcfce7;
  color: #15803d;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.modal-success h4 {
  font-size: 1.5rem;
  color: var(--color-primary-950);
  margin-bottom: 0.8rem;
}

.modal-success p {
  color: var(--color-text-muted);
  max-width: 480px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.success-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@keyframes modalPop {
  from { opacity: 0; transform: scale(0.92) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
