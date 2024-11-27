<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="landing-page">
    <header class="landing-header">
      <h1 class="landing-title">Discover Your Glam</h1>
      <p class="landing-subtitle">
        Join Glam to explore styles, match your aesthetic, and transform your look effortlessly.
      </p>
      <button class="landing-get-started-btn" @click="router.push({ name: 'onboarding' })">
        Get Started
      </button>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background: linear-gradient(to bottom, #fdfbfb, #f3f9fc);
  font-family: 'Poppins', sans-serif;
  color: #333;
  text-align: center;
  padding: 0 20px;

  .landing-header {
    margin-top: 50px;

    .landing-title {
      font-size: 3rem;
      font-weight: bold;
      color: #222;
      margin-bottom: 20px;
    }

    .landing-subtitle {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 40px;
      max-width: 600px;
      line-height: 1.6;
    }

    .landing-get-started-btn {
      background: #ff7eb3;
      border: none;
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
      padding: 12px 30px;
      border-radius: 8px;
      cursor: pointer;
      transition:
        background 0.3s ease,
        transform 0.2s ease;
      position: absolute;
      bottom: 200px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 200px;

      &:hover {
        background: #ff5e72;
        transform: scale(1.05);
      }

      &:focus {
        outline: none;
      }
    }
  }

  .landing-image-container {
    width: 100%;
    max-width: 1200px;
    overflow: hidden;
    margin-top: 20px;

    .landing-image {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }
}
</style>
