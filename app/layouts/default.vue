<template>
  <div class="site-layout">
    <AppHeader @open-booking="isBookingModalOpen = true" />
    
    <main id="main-content">
      <slot :open-booking="() => isBookingModalOpen = true" />
    </main>

    <AppFooter @open-booking="isBookingModalOpen = true" />

    <!-- Interactive Global Widgets -->
    <WhatsAppFloating />
    <BookingModal 
      :is-open="isBookingModalOpen" 
      @close="isBookingModalOpen = false" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import WhatsAppFloating from '~/components/ui/WhatsAppFloating.vue'
import BookingModal from '~/components/ui/BookingModal.vue'

const isBookingModalOpen = ref(false)

const openBookingModal = () => {
  isBookingModalOpen.value = true
}

provide('openBookingModal', openBookingModal)
</script>

<style scoped>
.site-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#main-content {
  flex-grow: 1;
}
</style>
