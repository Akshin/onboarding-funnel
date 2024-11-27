<script setup lang="ts">
import { ref } from 'vue'
import OnboardingStep1 from './components/OnboardingStep1.vue'
import OnboardingStep2 from './components/OnboardingStep2.vue'
import OnboardingStep3 from './components/OnboardingStep3.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const step = ref<number>(0)

function changeStep(toStep: number): void {
  if (toStep === 3) {
    router.push({ name: 'home' })
    return
  }

  step.value = toStep
}
</script>

<template>
  <div class="onboarding-page-wrapper">
    <OnboardingStep1 v-show="step === 0" @next="changeStep(1)" />
    <OnboardingStep2 v-show="step === 1" @next="changeStep(2)" @prev="changeStep(0)" />
    <OnboardingStep3 v-show="step === 2" @next="changeStep(3)" @prev="changeStep(1)" />
  </div>
</template>

<style></style>
