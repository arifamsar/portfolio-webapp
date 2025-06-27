<template>
  <section ref="aboutSection" id="about" :class="['py-16 px-4 md:px-8 text-card-foreground', 'animate-on-scroll-hidden', { 'animate-on-scroll-visible': aboutInView }, 'futuristic-gradient-background']">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-5xl font-bold text-center text-primary mb-12">
        About Me
      </h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div :class="['animate-on-scroll-hidden', { 'animate-on-scroll-visible': aboutInView }]" :style="{ 'animation-delay': `0.1s` }">
          <p class="text-lg leading-relaxed mb-4">
            My journey into Android development began with a deep curiosity for how mobile technology 
            can solve everyday problems and enhance lives. I thrive on transforming complex ideas 
            into elegant, functional, and delightful user experiences.
          </p>
          <p class="text-lg leading-relaxed mb-4">
            I specialize in building robust and scalable Android applications using modern practices, 
            including Kotlin, Jetpack Compose, and clean architecture principles. I am constantly 
            exploring new tools and frameworks to stay at the forefront of mobile innovation.
          </p>
          <p class="text-lg leading-relaxed">
            Beyond coding, I am a strong advocate for continuous learning and collaborative environments. 
            I enjoy contributing to open-source projects and sharing knowledge within the developer community.
          </p>
        </div>
        <div class="flex justify-center animate-on-scroll-hidden" :class="{ 'animate-on-scroll-visible': aboutInView }" :style="{ 'animation-delay': `0.2s` }">
          <!-- Placeholder for an image or illustration -->
          <div class="w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
            Your Photo Here
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useInView } from '@/lib/useInView'

const aboutSection = ref(null)
const { isInView: aboutInView } = useInView(aboutSection)
</script>

<style scoped>
/* Animations are defined in index.vue or global CSS */
</style>
