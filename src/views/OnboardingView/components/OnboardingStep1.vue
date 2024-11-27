<script setup lang="ts">
import type { IOnboardingStepsEmits } from '@/types'

const emits = defineEmits<IOnboardingStepsEmits>()
</script>

<template>
  <div class="onboarding-step">
    <video playsinline autoplay muted loop preload="auto" class="background-video">
      <source src="@/assets/videos/step1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <h1 class="title">Welcome to Glam</h1>

    <div class="buttons">
      <button class="next-btn" @click="emits('next')">Next</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
