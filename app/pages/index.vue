<template>
  <div>
    <!-- Hero Section -->
    <HeroSection 
      :slides="homeData?.hero_slides" 
      @open-booking="openBooking" 
    />

    <!-- Grounds Experiences & Packages Overview -->
    <FlipCardsSection />

    <!-- Video Experience Showcase -->
    <VideoShowcase 
      :video-url="homeData?.site_setting?.video_url"
      :poster-url="homeData?.site_setting?.video_poster"
    />

    <!-- Grounds Architecture & Estate Dossier -->
    <OurGardenSection @open-booking="openBooking" />

    <!-- Latest Blog Posts -->
    <LatestBlogSection :posts="homeData?.latest_posts" />

    <!-- Quick Call to Action Bar -->
    <QuickCallToAction @open-booking="openBooking" />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import HeroSection from '~/components/home/HeroSection.vue'
import FlipCardsSection from '~/components/home/FlipCardsSection.vue'
import VideoShowcase from '~/components/home/VideoShowcase.vue'
import OurGardenSection from '~/components/home/OurGardenSection.vue'
import LatestBlogSection from '~/components/home/LatestBlogSection.vue'
import QuickCallToAction from '~/components/home/QuickCallToAction.vue'

const config = useRuntimeConfig()
const appConfig = useAppConfig()
const openBooking = inject('openBookingModal', () => {})

// Fetch home data from Django backend with SSR support
const { data: homeData } = await useFetch<any>(`${config.public.apiBase}/home-data/`, {
  lazy: false,
  default: () => null,
})

// Rich SEO Meta Tags matching the original site's RankMath SEO + Schema.org
useSeoMeta({
  title: 'Welcome To Cana Gardens | Countryside Weddings & Events off Kiambu Rd',
  description: 'Cana Gardens is a stunning countryside wedding venue located only 10KM from Nairobi. Lush gardens, garden deck, 400-car parking, and panoramic scenic views.',
  ogTitle: 'Welcome To Cana Gardens | Countryside Weddings & Events off Kiambu Rd',
  ogDescription: 'The stunning country side wedding venue you thought you would never find. Located only 10KM from Nairobi, the views are breathtaking.',
  ogImage: 'https://canagardens.co.ke/img/custom/Image-521.JPG',
  ogUrl: 'https://canagardens.co.ke/',
  twitterCard: 'summary_large_image',
})

// Schema.org JSON-LD Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['GardenStore', 'Organization'],
            '@id': 'https://canagardens.co.ke/#organization',
            'name': 'Cana Gardens',
            'url': 'https://canagardens.co.ke',
            'telephone': appConfig.contact.phoneLink,
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': appConfig.contact.shortAddress,
              'addressLocality': 'Nairobi',
              'addressCountry': 'KE',
            },
            'openingHours': ['Mo-Su 08:00-19:00'],
          },
          {
            '@type': 'WebSite',
            '@id': 'https://canagardens.co.ke/#website',
            'url': 'https://canagardens.co.ke',
            'name': 'Cana Gardens',
          },
        ],
      }),
    },
  ],
})
</script>
