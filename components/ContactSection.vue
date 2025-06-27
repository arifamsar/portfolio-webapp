<template>
  <section ref="contactSection" id="contact" :class="['py-20 px-4 md:px-8 text-foreground', 'animate-on-scroll-hidden', { 'animate-on-scroll-visible': contactInView }, 'futuristic-gradient-background']">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
        {{ contactContent?.title }}
      </h2>
      <p class="text-base md:text-lg text-muted-foreground mb-8">
        {{ contactContent?.description }}
      </p>
      <div class="flex flex-col items-center space-y-4">
        <a
          :href="`mailto:${contactContent?.email}`"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium
                 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                 disabled:opacity-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700
                 h-10 px-4 py-2 shadow-lg animate-on-scroll-hidden"
          :class="{ 'animate-on-scroll-visible': contactInView }"
          :style="{ 'animation-delay': `0s` }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {{ contactContent?.email }}
        </a>
        <a
          :href="contactContent?.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium
                 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                 disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground
                 h-10 px-4 py-2 shadow-lg animate-on-scroll-hidden"
          :class="{ 'animate-on-scroll-visible': contactInView }"
          :style="{ 'animation-delay': `0.1s` }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
          </svg>
          LinkedIn
        </a>
        <a
          :href="contactContent?.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium
                 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                 disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground
                 h-10 px-4 py-2 shadow-lg animate-on-scroll-hidden"
          :class="{ 'animate-on-scroll-visible': contactInView }"
          :style="{ 'animation-delay': `0.2s` }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.677-.233.677-.517 0-.256-.009-1.04-.015-2.04c-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.338-2.22-.253-4.555-1.116-4.555-4.949 0-1.092.39-1.988 1.029-2.68a3.5 3.5 0 01.1-2.643s.83-.268 2.728 1.026c.78-.216 1.606-.324 2.429-.329.823.005 1.65.113 2.429.329 1.898-1.294 2.728-1.026 2.728-1.026.035.089.068.176.1.264a3.5 3.5 0 011.029 2.68c0 3.841-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .286.206.608.683.509C19.136 20.204 22 16.449 22 12.017 22 6.484 17.523 2 12 2z" clip-rule="evenodd" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useInView } from '@/lib/useInView'

interface ContactContent {
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
}

const props = defineProps<{ contactContent: ContactContent | null }>()

const contactSection = ref(null)
const { isInView: contactInView } = useInView(contactSection)
</script>

<style scoped>
/* Animations are defined in index.vue or global CSS */
</style>
