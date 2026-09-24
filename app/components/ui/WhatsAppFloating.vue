<template>
  <div class="floating-whatsapp-container">
    <!-- Expandable Chat Popup -->
    <transition name="pop">
      <div v-if="isOpen" class="whatsapp-popup">
        <div class="popup-header">
          <div class="brand-avatar">
            <i class="fas fa-tree"></i>
          </div>
          <div class="popup-title-wrap">
            <h4>Cana Gardens</h4>
            <span>Typically replies within minutes</span>
          </div>
          <button @click="isOpen = false" class="close-popup-btn" aria-label="Close Chat">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="popup-body">
          <div class="message-bubble">
            <p>
              Karibu! How can we assist you with your upcoming wedding, corporate event, or garden picnic?
            </p>
            <span class="message-time">{{ currentTime }}</span>
          </div>
        </div>

        <div class="popup-footer">
          <input 
            v-model="customMessage" 
            type="text" 
            placeholder="Type a message..." 
            @keyup.enter="sendWhatsApp"
          />
          <button @click="sendWhatsApp" class="send-btn" aria-label="Send WhatsApp message">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </transition>

    <!-- Floating Circular Button -->
    <button 
      @click="isOpen = !isOpen" 
      class="whatsapp-circle-btn"
      aria-label="Open WhatsApp Chat"
    >
      <i class="fab fa-whatsapp"></i>
      <span class="floating-tooltip">Need Help? Chat with us!</span>
      <span class="online-indicator"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const appConfig = useAppConfig()
const isOpen = ref(false)
const customMessage = ref('Hi Cana Gardens! I need more information about booking the venue.')

const currentTime = computed(() => {
  const d = new Date()
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
})

const sendWhatsApp = () => {
  const phone = appConfig.contact.phoneLink
  const text = encodeURIComponent(customMessage.value || 'Hi Cana Gardens! I would like to inquire about your venue.')
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
}
</script>

<style scoped>
.floating-whatsapp-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
}

.whatsapp-circle-btn {
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #25d366;
  color: #ffffff;
  border: none;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.whatsapp-circle-btn:hover {
  transform: scale(1.08) rotate(6deg);
  box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
}

.online-indicator {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  background: #4ade80;
  border: 2px solid #ffffff;
  border-radius: 50%;
}

.floating-tooltip {
  position: absolute;
  right: 76px;
  top: 50%;
  transform: translateY(-50%);
  background: #111827;
  color: #ffffff;
  font-size: 0.825rem;
  font-weight: 500;
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-fast);
  box-shadow: var(--shadow-md);
}

.whatsapp-circle-btn:hover .floating-tooltip {
  opacity: 1;
}

/* Popup */
.whatsapp-popup {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 320px;
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.popup-header {
  background: var(--color-primary-900);
  color: #ffffff;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.brand-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-gold-500);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.popup-title-wrap h4 {
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 0.1rem;
}

.popup-title-wrap span {
  font-size: 0.725rem;
  color: var(--color-gold-300);
}

.close-popup-btn {
  margin-left: auto;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-size: 1.1rem;
}

.popup-body {
  padding: 1.2rem;
  background: #f4f7f6;
  min-height: 120px;
}

.message-bubble {
  background: var(--color-bg-card);
  padding: 0.8rem 1rem;
  border-radius: 0 12px 12px 12px;
  box-shadow: var(--shadow-sm);
  font-size: 0.875rem;
  color: var(--color-text-main);
  line-height: 1.45;
}

.message-time {
  display: block;
  text-align: right;
  font-size: 0.7rem;
  color: var(--color-text-light);
  margin-top: 0.3rem;
}

.popup-footer {
  display: flex;
  padding: 0.75rem 1rem;
  background: var(--color-bg-card);
  border-top: 1px solid var(--color-border);
  gap: 0.5rem;
}

.popup-footer input {
  flex-grow: 1;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  outline: none;
}

.popup-footer input:focus {
  border-color: var(--color-primary-600);
}

.send-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #25d366;
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

.pop-enter-active,
.pop-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.85) translateY(15px);
}
</style>
