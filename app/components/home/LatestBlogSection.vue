<template>
  <section class="blog-section">
    <div class="container">
      <div class="section-heading-wrapper">
        <h2>Latest</h2>
        <div class="section-subheading-decorative">
          <span class="decorative-line"></span>
          <span class="decorative-text">from the blog</span>
          <span class="decorative-line"></span>
        </div>
      </div>

      <div class="grid-3">
        <article
          v-for="post in posts"
          :key="post.id || post.slug"
          class="blog-card"
        >
          <NuxtLink :to="`/blog/${post.slug}`" class="blog-thumb-link">
            <div class="blog-thumb">
              <img :src="post.cover_image" :alt="post.title" loading="lazy" />
              <span class="blog-badge">{{ post.category || "Events" }}</span>
            </div>
          </NuxtLink>

          <div class="blog-body">
            <div class="blog-meta">
              <span class="meta-date">
                <i class="far fa-calendar-alt"></i>
                {{ formatDate(post.published_at) }}
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
              Read More &raquo;
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="blog-footer-cta">
        <NuxtLink to="/blog" class="btn btn-outline">
          View All Blog Posts <i class="fas fa-newspaper"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  posts?: Array<{
    id?: number;
    title: string;
    slug: string;
    cover_image: string;
    excerpt: string;
    category?: string;
    published_at: string;
    read_time?: string;
  }>;
}>();

const defaultPosts = [
  {
    id: 1,
    title: "Mother’s Day Celebration at Cana Gardens Nairobi",
    slug: "mothers-day-celebration-at-paradise-gardens-nairobi",
    cover_image: "/img/custom/Image-112.JPG",
    excerpt:
      "Mother’s Day is a time to slow down and appreciate the women who give so much to our families. Celebrate in lush botanical serenity.",
    category: "Celebrations",
    published_at: "2026-05-10",
    read_time: "2 min read",
  },
  {
    id: 2,
    title: "Party Events at Cana Gardens",
    slug: "party-events-at-paradise-gardens",
    cover_image: "/img/custom/Oaks_Academy_Party_Event_2.JPG",
    excerpt:
      "Planning a party in Nairobi starts with one key decision: the venue. Discover why open lawns and ambient lighting create unmatched vibes.",
    category: "Parties",
    published_at: "2026-04-09",
    read_time: "3 min read",
  },
  {
    id: 3,
    title:
      "Old School & Vibe Brunch: A Successful Easter Event at Cana Gardens",
    slug: "old-school-vibe-brunch-nairobi-a-successful-easter-event-at-paradise-gardens",
    cover_image: "/img/custom/Image-399.JPG",
    excerpt:
      "A review of the Old School & Vibe Brunch Event Easter brought great energy to Nairobi, and Cana Gardens was the destination of choice.",
    category: "Music & Brunch",
    published_at: "2026-04-08",
    read_time: "4 min read",
  },
];

const posts = computed(() =>
  props.posts && props.posts.length > 0 ? props.posts : defaultPosts,
);

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch (e) {
    return dateStr;
  }
};
</script>

<style scoped>
.blog-section {
  padding: 5.5rem 0;
  background: var(--color-bg-card);
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

.blog-thumb-link {
  display: block;
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
  letter-spacing: 0.05em;
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
  display: inline-flex;
  align-items: center;
}

.read-more-link:hover {
  color: var(--color-accent-500);
  transform: translateX(3px);
}

.blog-footer-cta {
  text-align: center;
  margin-top: 3.5rem;
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

html.dark .read-more-link:hover {
  color: var(--color-accent-300);
}
</style>
