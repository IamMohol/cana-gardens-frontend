<template>
  <div class="page-container">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow"><i class="fas fa-feather-alt"></i> Stories &amp; Event Inspiration</span>
        <h1>Cana Gardens Blog</h1>
        <p>Stay updated with our latest event reviews, decor inspirations, and wedding planning tips.</p>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="blog-list-section">
      <div class="container">
        <div class="grid-3">
          <article 
            v-for="post in posts" 
            :key="post.id || post.slug"
            class="blog-card"
          >
            <NuxtLink :to="`/blog/${post.slug}`" class="blog-thumb-link">
              <div class="blog-thumb">
                <img :src="post.cover_image" :alt="post.title" loading="lazy" />
                <span class="blog-badge">{{ post.category || 'Events' }}</span>
              </div>
            </NuxtLink>

            <div class="blog-body">
              <div class="blog-meta">
                <span class="meta-date">
                  <i class="far fa-calendar-alt"></i> {{ formatDate(post.published_at) }}
                </span>
                <span v-if="post.read_time" class="meta-read">
                  <i class="far fa-clock"></i> {{ post.read_time }}
                </span>
              </div>

              <h3 class="blog-title">
                <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
              </h3>

              <p class="blog-excerpt">
                {{ post.excerpt }}
              </p>

              <NuxtLink :to="`/blog/${post.slug}`" class="read-more-link">
                Read Article &raquo;
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const { data: apiPosts } = await useFetch<any[]>(`${config.public.apiBase}/blog/`, {
  default: () => [],
})

const defaultPosts = [
  {
    id: 1,
    title: 'Mother’s Day Celebration at Cana Gardens Nairobi',
    slug: 'mothers-day-celebration-at-paradise-gardens-nairobi',
    cover_image: '/img/blog_mothers_day.png',
    excerpt: 'Mother’s Day is a time to slow down and appreciate the women who give so much to our families. Celebrate in lush botanical serenity.',
    category: 'Celebrations',
    published_at: '2026-05-10',
    read_time: '2 min read',
  },
  {
    id: 2,
    title: 'Party Events at Cana Gardens',
    slug: 'party-events-at-paradise-gardens',
    cover_image: '/img/blog_party_event.png',
    excerpt: 'Planning a party in Nairobi starts with one key decision: the venue. Discover why open lawns and ambient lighting create unmatched vibes.',
    category: 'Parties',
    published_at: '2026-04-09',
    read_time: '3 min read',
  },
  {
    id: 3,
    title: 'Old School & Vibe Brunch: A Successful Easter Event at Cana Gardens',
    slug: 'old-school-vibe-brunch-nairobi-a-successful-easter-event-at-paradise-gardens',
    cover_image: '/img/blog_brunch.png',
    excerpt: 'A review of the Old School & Vibe Brunch Event Easter brought great energy to Nairobi, and Cana Gardens was the destination of choice.',
    category: 'Music & Brunch',
    published_at: '2026-04-08',
    read_time: '4 min read',
  },
]

const posts = computed(() => {
  if (apiPosts.value && apiPosts.value.length > 0) {
    return apiPosts.value
  }
  return defaultPosts
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
  title: 'Blog & Articles | Cana Gardens Kenya',
  description: 'Articles, event photos, and wedding tips from Cana Gardens off Kiambu Road.',
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
  font-size: clamp(2.4rem, 4.5vw, 3.5rem);
  margin-bottom: 0.8rem;
}

.page-hero p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.15rem;
  max-width: 650px;
  margin: 0 auto;
}

.blog-list-section {
  padding: 5rem 0 7rem;
  background-color: var(--color-bg-light);
}

.blog-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent-500);
}

.blog-thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #e2e8f0;
}

.blog-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.blog-card:hover .blog-thumb img {
  transform: scale(1.08);
}

.blog-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--color-primary-900);
  color: var(--color-gold-300);
  font-size: 0.725rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  text-transform: uppercase;
}

.blog-body {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--color-text-light);
  margin-bottom: 0.8rem;
}

.blog-meta i {
  color: var(--color-gold-500);
}

.blog-title {
  font-size: 1.25rem;
  margin-bottom: 0.8rem;
  line-height: 1.35;
}

.blog-title a:hover {
  color: var(--color-accent-500);
}

.blog-excerpt {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1.4rem;
  flex-grow: 1;
}

.read-more-link {
  color: var(--color-primary-800);
  font-weight: 600;
  font-size: 0.875rem;
}

.read-more-link:hover {
  color: var(--color-accent-500);
}

/* Dark Mode Overrides */
html.dark .blog-card {
  background: var(--color-bg-card);
  border-color: var(--color-border);
}

html.dark .blog-badge {
  background: #0f1a10;
  color: var(--color-accent-400);
  border: 1px solid rgba(157, 194, 30, 0.25);
}

html.dark .read-more-link {
  color: var(--color-accent-400);
}
</style>
