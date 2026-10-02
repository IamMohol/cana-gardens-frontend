<template>
  <div class="page-container">
    <div class="container article-container">
      <NuxtLink to="/blog" class="back-link">
        <i class="fas fa-arrow-left"></i> Back to Blog
      </NuxtLink>

      <article v-if="post" class="article-main">
        <div class="article-header">
          <span class="category-pill">{{ post.category }}</span>
          <h1 class="article-title">{{ post.title }}</h1>
          <div class="article-meta-row">
            <span><i class="far fa-user"></i> By {{ post.author || 'Cana Gardens' }}</span>
            <span><i class="far fa-calendar-alt"></i> {{ formatDate(post.published_at) }}</span>
            <span v-if="post.read_time"><i class="far fa-clock"></i> {{ post.read_time }}</span>
          </div>
        </div>

        <div class="article-cover">
          <img :src="post.cover_image" :alt="post.title" />
        </div>

        <div class="article-body">
          <p class="lead-text">{{ post.excerpt }}</p>
          <div class="article-prose">
            <p>{{ post.content }}</p>
            <p>
              Looking to host your next party, wedding celebration, or milestone event in an atmosphere of tranquility and natural beauty? Cana Gardens provides complete event grounds, parking for 400 cars, and personalized viewing and site visits on Tuesdays and Thursdays from 11:00 AM to 2:00 PM.
            </p>
          </div>
        </div>

        <div class="article-share-cta">
          <div class="share-box">
            <span>Share this article:</span>
            <a :href="`https://wa.me/?text=${encodeURIComponent(post.title + ' - https://canagardens.co.ke/blog/' + post.slug)}`" target="_blank" class="share-btn whatsapp">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://canagardens.co.ke/blog/${post.slug}`" target="_blank" class="share-btn facebook">
              <i class="fab fa-facebook-f"></i> Facebook
            </a>
          </div>

          <div class="cta-inquiry-box">
            <h3>Plan Your Event at Cana Gardens</h3>
            <p>Ready to reserve your date? Speak with our events team today.</p>
            <button @click="openBooking" class="btn btn-gold">
              <i class="fas fa-calendar-check"></i> Book a Physical Tour
            </button>
          </div>
        </div>
      </article>

      <div v-else class="not-found-box">
        <h2>Article Not Found</h2>
        <p>The post you are looking for might have been moved or removed.</p>
        <NuxtLink to="/blog" class="btn btn-primary" style="margin-top: 1rem;">
          Return to Blog
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const route = useRoute()
const config = useRuntimeConfig()
const openBooking = inject('openBookingModal', () => {})

const slug = computed(() => route.params.slug as string)

const fallbackPosts: Record<string, any> = {
  'mothers-day-celebration-at-paradise-gardens-nairobi': {
    title: 'Mother’s Day Celebration at Cana Gardens Nairobi',
    slug: 'mothers-day-celebration-at-paradise-gardens-nairobi',
    cover_image: '/img/blog_mothers_day.png',
    excerpt: 'Mother’s Day is a time to slow down and appreciate the women who give so much to our families. Celebrate in serene garden luxury.',
    content: 'Mother’s Day Celebration at Cana Gardens is designed to create unforgettable moments. Set against lush green landscapes, refreshing countryside breezes, and elegant garden seating, we offer tailor-made dining and picnic packages to honor mothers and matriarchs in an atmosphere of refined peace.',
    category: 'Celebrations',
    author: 'Cana Gardens',
    published_at: '2026-05-10',
    read_time: '2 min read',
  },
  'party-events-at-paradise-gardens': {
    title: 'Party Events at Cana Gardens',
    slug: 'party-events-at-paradise-gardens',
    cover_image: '/img/blog_party_event.png',
    excerpt: 'Planning a party in Nairobi starts with one key decision: the venue. Discover why open lawns and ambient lighting create unmatched vibes.',
    content: 'From milestone anniversaries and lavish birthdays to graduation celebrations, hosting your party at Cana Gardens provides unmatched freedom. With ample 400-car secure parking, versatile catering zones, and sunset views, your guests will talk about the experience for years.',
    category: 'Parties',
    author: 'Cana Gardens',
    published_at: '2026-04-09',
    read_time: '3 min read',
  },
  'old-school-vibe-brunch-nairobi-a-successful-easter-event-at-paradise-gardens': {
    title: 'Old School & Vibe Brunch: A Successful Easter Event at Cana Gardens',
    slug: 'old-school-vibe-brunch-nairobi-a-successful-easter-event-at-paradise-gardens',
    cover_image: '/img/blog_brunch.png',
    excerpt: 'A review of the Old School & Vibe Brunch Event. Easter brought great energy to Nairobi, and Cana Gardens was the destination of choice.',
    content: 'Our Easter Sunday Old School & Vibe Brunch welcomed hundreds of music lovers, families, and brunch enthusiasts. Guests enjoyed live DJ sets, handcrafted barbecues, cocktail lounges, and serene garden chillout zones across our manicured lawns.',
    category: 'Music & Brunch',
    author: 'Cana Gardens',
    published_at: '2026-04-08',
    read_time: '4 min read',
  },
}

const { data: apiPost } = await useFetch<any>(`${config.public.apiBase}/blog/${slug.value}/`, {
  default: () => null,
})

const post = computed(() => {
  if (apiPost.value) return apiPost.value
  return fallbackPosts[slug.value] || null
})

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  } catch (e) {
    return dateStr
  }
}

useSeoMeta({
  title: () => `${post.value?.title || 'Article'} | Cana Gardens`,
  description: () => post.value?.excerpt || 'Cana Gardens event blog',
  ogImage: () => post.value?.cover_image || '',
})
</script>

<style scoped>
.article-container {
  max-width: 860px;
  padding: 3rem 1.5rem 6rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary-800);
  margin-bottom: 2rem;
}

.back-link:hover {
  color: var(--color-gold-600);
}

.category-pill {
  display: inline-block;
  background: var(--color-gold-50);
  color: var(--color-gold-600);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.8rem;
}

.article-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
}

.article-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2rem;
}

.article-meta-row i {
  color: var(--color-gold-500);
  margin-right: 0.35rem;
}

.article-cover {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: 2.5rem;
}

.article-cover img {
  width: 100%;
  max-height: 520px;
  object-fit: cover;
}

.lead-text {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-primary-900);
  line-height: 1.7;
  margin-bottom: 1.8rem;
}

.article-prose p {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--color-text-main);
  margin-bottom: 1.5rem;
}

.article-share-cta {
  margin-top: 3.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.share-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 600;
  color: #ffffff;
}

.share-btn.whatsapp { background: #25d366; }
.share-btn.facebook { background: #1877f2; }

.cta-inquiry-box {
  background: var(--color-bg-sand);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid rgba(197, 155, 39, 0.2);
}

.cta-inquiry-box h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.cta-inquiry-box p {
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

/* Dark Mode Overrides */
html.dark .back-link {
  color: var(--color-accent-400);
}

html.dark .category-pill {
  background: rgba(157, 194, 30, 0.15);
  color: var(--color-accent-400);
  border: 1px solid rgba(157, 194, 30, 0.25);
}

html.dark .lead-text {
  color: var(--color-heading);
}

html.dark .cta-inquiry-box {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
}
</style>
