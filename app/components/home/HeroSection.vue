<template>
  <section
    class="hero-section"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- SVG Definitions -->
    <svg
      width="0"
      height="0"
      style="position: absolute; width: 0; height: 0; overflow: hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Removed SVG filters for clouds to prevent browser rendering bugs; using CSS blur instead -->

        <!-- Reusable Detailed Leaf with Texture/Veins -->
        <g id="detailed-leaf">
          <!-- Leaf Base Shape -->
          <path
            d="M 0 0 C 20 -30, 55 -30, 70 0 C 55 30, 20 30, 0 0 Z"
            fill="currentColor"
            opacity="0.95"
          />

          <!-- Leaf Vein Texture -->
          <g
            fill="none"
            stroke="#eef5f1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <!-- Central Main Vein -->
            <path d="M 2 0 C 25 -4, 45 -4, 60 0" stroke-width="2.5" />

            <!-- Secondary Branching Veins (Top Side) -->
            <path d="M 15 -1 Q 22 -10 32 -15" stroke-width="1.5" />
            <path d="M 30 -2 Q 38 -8 48 -12" stroke-width="1.25" />
            <path d="M 45 -3 Q 50 -6 56 -8" stroke-width="1" />

            <!-- Secondary Branching Veins (Bottom Side) -->
            <path d="M 12 -1 Q 18 8 28 14" stroke-width="1.5" />
            <path d="M 28 -2 Q 35 6 44 11" stroke-width="1.25" />
            <path d="M 42 -3 Q 48 3 55 6" stroke-width="1" />
          </g>
        </g>

        <g id="vine-art">
          <!-- Main C-Shaped Branch Stem (Inspired by the 'C' in the logo) -->
          <path
            d="M 400 20 C 100 80, 50 420, 400 480"
            fill="none"
            stroke="currentColor"
            stroke-width="4.5"
            stroke-linecap="round"
          />

          <!-- Outer Leaves (Outside the C curve) -->
          <use
            href="#detailed-leaf"
            transform="translate(380, 25) rotate(140) scale(0.9)"
          />
          <use
            href="#detailed-leaf"
            transform="translate(220, 85) rotate(170) scale(1.2)"
          />
          <use
            href="#detailed-leaf"
            transform="translate(110, 240) rotate(160) scale(1.4)"
          />
          <use
            href="#detailed-leaf"
            transform="translate(190, 420) rotate(80) scale(1.2)"
          />
          <use
            href="#detailed-leaf"
            transform="translate(380, 480) rotate(20) scale(0.9)"
          />

          <!-- Inner Leaves (Inside the C curve) -->
          <use
            href="#detailed-leaf"
            transform="translate(260, 60) rotate(-25) scale(1.1)"
          />
          <use
            href="#detailed-leaf"
            transform="translate(125, 195) rotate(5) scale(1.3)"
          />
          <use
            href="#detailed-leaf"
            transform="translate(150, 385) rotate(-60) scale(1.2)"
          />
          <use
            href="#detailed-leaf"
            transform="translate(330, 475) rotate(-130) scale(0.9)"
          />
        </g>

        <!-- 3D Puffy Cloud for Carousel Corners -->
        <g id="puffy-cloud">
          <!-- Back layer (slight shadow/depth) -->
          <circle cx="60" cy="70" r="35" fill="#e8edf2" />
          <circle cx="105" cy="45" r="45" fill="#e8edf2" />
          <circle cx="160" cy="55" r="40" fill="#e8edf2" />
          <circle cx="195" cy="75" r="25" fill="#e8edf2" />
          <rect x="60" y="70" width="135" height="40" rx="10" fill="#e8edf2" />

          <!-- Front layer (pure white) -->
          <circle cx="55" cy="65" r="35" fill="#ffffff" />
          <circle cx="100" cy="40" r="45" fill="#ffffff" />
          <circle cx="155" cy="50" r="40" fill="#ffffff" />
          <circle cx="190" cy="70" r="25" fill="#ffffff" />
          <rect x="55" y="65" width="135" height="40" rx="10" fill="#ffffff" />
        </g>
      </defs>
    </svg>

    <!-- Cloud Parallax Layer -->
    <div class="parallax-layer layer-cloud" :style="parallaxStyle(-8)">
      <svg class="cloud-corner top-left-cloud" viewBox="0 0 500 500">
        <path
          d="M 120 180 A 60 60 0 0 1 200 120 A 80 80 0 0 1 320 150 A 50 50 0 0 1 380 180 A 60 60 0 0 1 350 280 L 150 280 A 50 50 0 0 1 120 180 Z"
          fill="var(--color-bg-card)"
          opacity="0.9"
        />
        <path
          d="M 250 140 A 50 50 0 0 1 320 90 A 60 60 0 0 1 400 140 A 40 40 0 0 1 420 200 A 40 40 0 0 1 380 230 L 250 230 A 40 40 0 0 1 210 180 A 40 40 0 0 1 250 140 Z"
          fill="var(--color-bg-card)"
          opacity="0.8"
        />
        <path
          d="M 60 220 A 40 40 0 0 1 130 170 A 50 50 0 0 1 200 210 A 30 30 0 0 1 180 270 L 80 270 A 30 30 0 0 1 60 220 Z"
          fill="var(--color-bg-card)"
          opacity="0.7"
        />
      </svg>
      <svg class="cloud-corner top-right-cloud" viewBox="0 0 500 500">
        <path
          d="M 120 180 A 60 60 0 0 1 200 120 A 80 80 0 0 1 320 150 A 50 50 0 0 1 380 180 A 60 60 0 0 1 350 280 L 150 280 A 50 50 0 0 1 120 180 Z"
          fill="var(--color-bg-card)"
          opacity="0.9"
        />
        <path
          d="M 250 140 A 50 50 0 0 1 320 90 A 60 60 0 0 1 400 140 A 40 40 0 0 1 420 200 A 40 40 0 0 1 380 230 L 250 230 A 40 40 0 0 1 210 180 A 40 40 0 0 1 250 140 Z"
          fill="var(--color-bg-card)"
          opacity="0.8"
        />
        <path
          d="M 60 220 A 40 40 0 0 1 130 170 A 50 50 0 0 1 200 210 A 30 30 0 0 1 180 270 L 80 270 A 30 30 0 0 1 60 220 Z"
          fill="var(--color-bg-card)"
          opacity="0.7"
        />
      </svg>
    </div>

    <!-- Far Background Parallax Layer -->
    <div class="parallax-layer layer-bg" :style="parallaxStyle(-20)">
      <svg class="vine-corner top-left vine-bg" viewBox="-80 -80 680 680">
        <use href="#vine-art" />
      </svg>
      <svg class="vine-corner bottom-right vine-bg" viewBox="-80 -80 680 680">
        <use href="#vine-art" />
      </svg>
    </div>

    <!-- Mid Background Parallax Layer -->
    <div class="parallax-layer layer-mid" :style="parallaxStyle(30)">
      <svg class="vine-corner top-right vine-mid" viewBox="-80 -80 680 680">
        <use href="#vine-art" />
      </svg>
      <svg class="vine-corner bottom-left vine-mid" viewBox="-80 -80 680 680">
        <use href="#vine-art" />
      </svg>
    </div>

    <div class="container hero-container">
      <!-- Left Content Column -->
      <div class="hero-text-col">
        <div class="hero-badge">
          <i class="fas fa-certificate"></i> Your Miracle Begins Here!
        </div>

        <h1 class="hero-title">Welcome to</h1>

        <div class="hero-divider">
          <span class="hero-divider-line"></span>
          <span class="hero-divider-cursive">Cana Gardens</span>
        </div>

        <p class="hero-description">
          The stunning countryside wedding venue you thought you would never
          find. Located only 10KM from Nairobi, the views are breathtaking and
          offer the perfect setting for you to tie the knot and celebrate all in
          one location!
        </p>

        <div class="hero-actions">
          <NuxtLink to="/about" class="btn btn-primary">
            About Us <i class="fas fa-arrow-right"></i>
          </NuxtLink>
          <button @click="$emit('open-booking')" class="btn btn-gold">
            <i class="fas fa-calendar-alt"></i> Reserve a Date
          </button>
        </div>

        <div class="hero-stats">
          <div class="stat-box">
            <strong>10 KM</strong>
            <span>From Nairobi CBD</span>
          </div>
          <div class="stat-box">
            <strong>400+</strong>
            <span>Secure Car Parking</span>
          </div>
          <div class="stat-box">
            <strong>700+ Guests</strong>
            <span>Ceremony &amp; Reception</span>
          </div>
        </div>
      </div>

      <!-- Right Carousel Column -->
      <div class="hero-carousel-col">
        <!-- 3D Puffy Cloud Overlays -->
        <!-- <svg class="carousel-cloud cloud-tl" viewBox="0 0 240 130">
          <use href="#puffy-cloud" />
        </svg> -->
        <svg class="carousel-cloud cloud-tr" viewBox="0 0 240 130">
          <use href="#puffy-cloud" />
        </svg>

        <div class="carousel-card">
          <div class="carousel-track">
            <div
              v-for="(slide, index) in slides"
              :key="slide.id || index"
              class="carousel-slide"
              :class="{ active: activeIndex === index }"
            >
              <img
                :src="slide.image_url"
                :alt="slide.title || 'Cana Gardens Venue'"
                loading="eager"
              />
              <div class="slide-caption">
                <span>{{ slide.title || "Cana Gardens Nairobi" }}</span>
              </div>
            </div>
          </div>

          <!-- Carousel Controls -->
          <div class="carousel-controls">
            <button
              @click="prevSlide"
              class="carousel-btn prev"
              aria-label="Previous Slide"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="carousel-dots">
              <span
                v-for="(_, idx) in slides"
                :key="idx"
                class="dot"
                :class="{ active: activeIndex === idx }"
                @click="activeIndex = idx"
              ></span>
            </div>
            <button
              @click="nextSlide"
              class="carousel-btn next"
              aria-label="Next Slide"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Asymmetrical Bottom Wave Divider -->
    <!-- <div class="shape-divider-bottom" data-negative="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          class="shape-fill"
          d="M615.2,96.7C240.2,97.8,0,18.9,0,0v100h1000V0C1000,19.2,989.8,96,615.2,96.7z"
        />
      </svg>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  slides?: Array<{ id?: number; title?: string; image_url: string }>;
}>();

defineEmits(["open-booking"]);

const defaultSlides = [
  {
    id: 1,
    title: "Lush Manicured Lawns",
    image_url: "/img/custom/Oaks_Academy_Field_1.JPG",
  },
  // { id: 2, title: 'Countryside View & Floating Deck', image_url: '/img/garden_poster.png' },
  {
    id: 3,
    title: "Wedding Ceremonies & Receptions",
    image_url: "/img/custom/Image-27.JPG",
  },
  {
    id: 4,
    title: "Corporate Events & Team Building",
    image_url: "/img/custom/Oaks_Academy_Event_1.JPG",
  },
];

const slides = computed(() =>
  props.slides && props.slides.length > 0 ? props.slides : defaultSlides,
);

const activeIndex = ref(0);
let timer: any = null;

// Parallax state
const mouseX = ref(0);
const mouseY = ref(0);
const targetX = ref(0);
const targetY = ref(0);
let rafId: number | null = null;

// Smooth easing for the parallax
const updateParallax = () => {
  mouseX.value += (targetX.value - mouseX.value) * 0.1;
  mouseY.value += (targetY.value - mouseY.value) * 0.1;
  rafId = requestAnimationFrame(updateParallax);
};

const handleMouseMove = (e: MouseEvent) => {
  if (typeof window === "undefined") return;
  targetX.value = (e.clientX / window.innerWidth - 0.5) * 2;
  targetY.value = (e.clientY / window.innerHeight - 0.5) * 2;
};

const handleMouseLeave = () => {
  targetX.value = 0;
  targetY.value = 0;
};

const parallaxStyle = (depth: number) => ({
  transform: `translate3d(${mouseX.value * depth}px, ${mouseY.value * depth}px, 0)`,
});

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  activeIndex.value =
    (activeIndex.value - 1 + slides.value.length) % slides.value.length;
};

onMounted(() => {
  timer = setInterval(nextSlide, 4500);
  if (typeof window !== "undefined") {
    rafId = requestAnimationFrame(updateParallax);
  }
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<style scoped>
.hero-section {
  position: relative;
  background-color: var(--color-bg-light);
  padding: 4.5rem 0 7rem;
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3.5rem;
  align-items: center;
  position: relative;
  z-index: 5;
}

/* Parallax Layers */
.parallax-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  will-change: transform;
}

.vine-corner {
  position: absolute;
  color: var(--color-primary-900);
}

.vine-bg {
  width: clamp(300px, 45vw, 650px);
  height: clamp(300px, 45vw, 650px);
  opacity: 0.25;
  /* Removed blur to keep leaves crisp and visible */
}

.vine-mid {
  width: clamp(200px, 30vw, 420px);
  height: clamp(200px, 30vw, 420px);
  opacity: 0.45;
}

.cloud-corner {
  position: absolute;
  width: clamp(500px, 70vw, 1100px);
  height: clamp(500px, 70vw, 1100px);
  color: #ffffff;
  pointer-events: none;
  opacity: 0.8;
  filter: blur(35px);
}

.top-left-cloud {
  top: -10%;
  left: -10%;
  animation: floatCloudLeft 20s ease-in-out infinite;
}

.top-right-cloud {
  top: -5%;
  right: -10%;
  animation: floatCloudRight 25s ease-in-out infinite;
}

@keyframes floatCloudLeft {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(30px, 15px);
  }
}

@keyframes floatCloudRight {
  0%,
  100% {
    transform: scaleX(-1) translate(0, 0);
  }
  50% {
    transform: scaleX(-1) translate(30px, -15px);
  }
}

.top-left {
  top: -4%;
  left: -4%;
}

.top-right {
  top: -4%;
  right: -4%;
  transform: scaleX(-1);
}

.bottom-left {
  bottom: -4%;
  left: -4%;
  transform: scaleY(-1);
}

.bottom-right {
  bottom: -4%;
  right: -4%;
  transform: scale(-1, -1);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(157, 194, 30, 0.12); /* Brand Accent Leaf Green */
  color: var(--color-gold-600);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.9rem;
  border-radius: var(--radius-full);
  margin-bottom: 1.2rem;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.6rem, 5vw, 4.2rem);
  color: var(--color-heading-hero);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.3rem 0 1.5rem;
}

.hero-divider-line {
  height: 2px;
  width: 60px;
  background: var(--color-accent-500);
}

.hero-divider-cursive {
  font-family: var(--font-cursive);
  font-size: 3.2rem;
  color: var(--color-gold-500);
  line-height: 1;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 540px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  padding-top: 1.8rem;
  border-top: 1px solid rgba(53, 105, 57, 0.12); /* Brand Deep Green */
}

.stat-box {
  display: flex;
  flex-direction: column;
}

.stat-box strong {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  color: var(--color-heading);
}

.stat-box span {
  font-size: 0.775rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Carousel Column & Clouds */
.hero-carousel-col {
  position: relative;
  z-index: 10;
}

.carousel-cloud {
  position: absolute;
  width: clamp(170px, 20vw, 280px);
  height: clamp(100px, 12vw, 160px);
  z-index: 20; /* Float above the carousel */
  opacity: 0.85;
  filter: blur(9px) drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
  pointer-events: none;
  overflow: visible;
}

.cloud-tl {
  top: -8%;
  left: -12%;
  animation: floatCloudTL 20s ease-in-out infinite alternate;
}

.cloud-tr {
  top: -5%;
  right: -15%;
  animation: floatCloudTR 20s ease-in-out infinite alternate;
  animation-delay: -3s;
}

@keyframes floatCloudTL {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(10px, -15px) scale(1.05);
  }
}

@keyframes floatCloudTR {
  0% {
    transform: scaleX(-1) translate(0, 0) scale(1);
  }
  100% {
    transform: scaleX(-1) translate(-10px, -15px) scale(1.05);
  }
}

/* Carousel - Modern Display */
.carousel-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  /* Soft, layered darker box-shadow for a visible cloud-like effect */
  box-shadow:
    0 0 25px 10px rgba(53, 105, 57, 0.12),
    /* Soft brand green inner cloud */ 0 0 60px 30px rgba(0, 0, 0, 0.08),
    /* Diffuse outer shadow */ 0 20px 40px rgba(0, 0, 0, 0.12); /* Depth shadow */
  background: var(--color-bg-card);
  aspect-ratio: 4 / 4.5;
  border: none;
  transform: translateY(0);
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.carousel-card:hover {
  transform: translateY(-8px);
  /* Intensify the darker cloud effect on hover */
  box-shadow:
    0 0 35px 15px rgba(53, 105, 57, 0.2),
    0 0 80px 40px rgba(0, 0, 0, 0.12),
    0 30px 60px rgba(0, 0, 0, 0.18);
}

.carousel-track {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1); /* Slower, more elegant fade */
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease; /* Subtle zoom effect */
}

.carousel-slide.active img {
  transform: scale(1.05);
}

.slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5rem 1.5rem 4rem; /* Extra padding for scrim and controls */
  background: linear-gradient(
    to top,
    rgba(13, 22, 14, 0.92) 0%,
    rgba(13, 22, 14, 0.35) 60%,
    transparent 100%
  );
  color: #ffffff;
  font-size: 1.15rem;
  font-family: var(--font-serif); /* Use serif for elegant caption */
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.carousel-controls {
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  z-index: 10;
}

.carousel-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  color: var(--color-primary-900);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all var(--transition-fast);
}

.carousel-btn:hover {
  background: var(--color-bg-card);
  transform: scale(1.1);
}

.carousel-dots {
  display: flex;
  gap: 0.4rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.dot.active {
  width: 22px;
  border-radius: 4px;
  background: var(--color-accent-500);
}

/* Dark Mode Overrides */
html.dark .cloud-corner,
html.dark .carousel-cloud {
  display: none !important;
  opacity: 0 !important;
}

html.dark .vine-corner {
  color: var(--color-primary-700);
  opacity: 0.2;
}

html.dark .hero-badge {
  background: rgba(157, 194, 30, 0.15);
  color: var(--color-accent-400);
  border: 1px solid rgba(157, 194, 30, 0.25);
}

html.dark .hero-stats {
  border-top-color: var(--color-border);
}

html.dark .carousel-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);
}

html.dark .carousel-card:hover {
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.7);
}

html.dark .carousel-btn {
  background: rgba(19, 34, 21, 0.9);
  color: var(--color-text-main);
  border: 1px solid var(--color-border);
}

html.dark .carousel-btn:hover {
  background: var(--color-accent-500);
  color: #0d1c0f;
}

@media (max-width: 960px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .parallax-layer {
    display: none;
  }
}
</style>
