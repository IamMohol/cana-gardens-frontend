<template>
  <section class="quick-cta-section">
    <div class="container">
      <div class="quick-cta-card">
        <div class="cta-text">
          <span class="cta-tag"><i class="fas fa-sparkles"></i> Karibu Cana Gardens</span>
          <h2>Looking for a garden to host your events?</h2>
          <p class="cta-phones">
            Please Call: 
            <a :href="`tel:${appConfig.contact.phoneLink}`">{{ appConfig.contact.phone }}</a> 
            <span class="divider-pipe">|</span> 
            <a :href="`tel:${appConfig.contact.secondaryPhoneLink}`">{{ appConfig.contact.secondaryPhone }}</a>
          </p>
        </div>

        <div class="cta-buttons">
          <a :href="`tel:${appConfig.contact.phoneLink}`" class="btn btn-gold">
            <i class="fas fa-phone-alt"></i> Call Us Now
          </a>
          <button @click="$emit('open-booking')" class="btn btn-outline-white">
            <i class="fas fa-envelope"></i> Send Online Inquiry
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
defineEmits(['open-booking'])
</script>

<style scoped>
.quick-cta-section {
  padding: 3rem 0 1rem;
}

.quick-cta-card {
  background: linear-gradient(135deg, var(--color-primary-950) 0%, var(--color-primary-800) 100%);
  border-radius: var(--radius-lg);
  padding: 3.5rem 3rem;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(197, 155, 39, 0.3);
}

.cta-tag {
  display: inline-block;
  color: var(--color-gold-400);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.6rem;
}

.cta-text h2 {
  color: #ffffff;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin-bottom: 0.8rem;
}

.cta-phones {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
}

.cta-phones a {
  color: var(--color-gold-300);
  font-weight: 700;
  margin: 0 0.3rem;
}

.cta-phones a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.divider-pipe {
  color: rgba(255, 255, 255, 0.4);
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.btn-outline-white {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.btn-outline-white:hover {
  background: var(--color-bg-card);
  color: var(--color-primary-900);
}

@media (max-width: 900px) {
  .quick-cta-card {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2.5rem 1.8rem;
  }
  .cta-buttons {
    justify-content: center;
  }
}
</style>
