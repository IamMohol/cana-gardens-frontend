<template>
  <section class="video-section">
    <div class="container">
      <div class="video-wrapper">
        <div class="video-container" :class="{ 'is-playing': isPlaying }">
          <video 
            ref="videoRef"
            :src="videoUrl"
            :poster="posterUrl"
            playsinline
            controls
            loop
            preload="none"
            class="main-video"
            @play="isPlaying = true"
            @pause="isPlaying = false"
          ></video>

          <div v-if="!isPlaying" class="video-overlay" @click="playVideo">
            <div class="play-btn-circle">
              <i class="fas fa-play"></i>
            </div>
            <div class="overlay-text">
              <span class="overlay-title">Experience Cana Gardens</span>
              <span class="overlay-sub">Take a virtual walking tour of our lush grounds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    videoUrl?: string
    posterUrl?: string
  }>(),
  {
    videoUrl: '/video/cana-video.mp4',
    posterUrl: '/img/custom/Image-100.JPG',
  }
)

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)

const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play()
    isPlaying.value = true
  }
}
</script>

<style scoped>
.video-section {
  padding: 3rem 0 4.5rem;
}

.video-wrapper {
  width: 100%;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(27, 67, 50, 0.1);
}

:global(html.dark) .video-wrapper {
  border-color: var(--color-border);
}

.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 21 / 9;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 20, 12, 0.52);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: background var(--transition-normal);
}

.video-overlay:hover {
  background: rgba(10, 20, 12, 0.38);
}

.play-btn-circle {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  color: var(--color-primary-800);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding-left: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.4);
  transition: all var(--transition-normal);
  animation: pulseGlow 2.5s infinite;
}

.video-overlay:hover .play-btn-circle {
  transform: scale(1.12);
  background: var(--color-gold-400);
  color: #ffffff;
}

.overlay-text {
  margin-top: 1.5rem;
  text-align: center;
  color: #ffffff;
}

.overlay-title {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.6rem;
  letter-spacing: 0.03em;
}

.overlay-sub {
  font-size: 0.9rem;
  color: var(--color-gold-300);
}

@media (max-width: 768px) {
  .video-container {
    aspect-ratio: 16 / 9;
  }
  .play-btn-circle {
    width: 64px;
    height: 64px;
    font-size: 1.4rem;
  }
}
</style>
