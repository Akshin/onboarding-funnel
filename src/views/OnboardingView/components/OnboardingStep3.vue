<script setup lang="ts">
import type { IOnboardingStepsEmits } from '@/types'

const emits = defineEmits<IOnboardingStepsEmits>()
</script>

<template>
  <div class="onboarding-step">
    <video autoplay muted loop class="background-video">
      <source src="@/assets/videos/step3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h1 class="title">Explore 100+ Styles</h1>
    <div class="buttons">
      <button class="prev-btn" @click="emits('prev')">Back</button>
      <button class="next-btn" @click="emits('next')" disabled>Next</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
