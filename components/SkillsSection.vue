<template>
  <section ref="skillsSection" id="skills" :class="['py-20 px-4 md:px-8 text-card-foreground', 'animate-on-scroll-hidden', { 'animate-on-scroll-visible': skillsInView }, 'futuristic-gradient-background']">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
        {{ skillsContent?.title }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in skillsContent?.skills"
          :key="index"
          class="bg-background rounded-lg shadow-md p-6 animate-on-scroll-hidden"
          :class="{ 'animate-on-scroll-visible': skillsInView }"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <h3 class="text-xl font-semibold text-primary mb-4">{{ category.name }}</h3>
          <ul class="space-y-2 text-base text-muted-foreground">
            <li v-for="(skill, skillIndex) in category.items" :key="skillIndex" class="flex items-center animate-on-scroll-hidden"
              :class="{ 'animate-on-scroll-visible': skillsInView }"
              :style="{ 'animation-delay': `${(index * 0.1) + (skillIndex * 0.05)}s` }"
            >
              <span :class="skill.icon" class="mr-2 text-xl text-accent"></span>
              {{ skill.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useInView } from '@/lib/useInView'

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  items: Skill[];
}

interface SkillsContent {
  title: string;
  description: string;
  skills: SkillCategory[];
}

const props = defineProps<{ skillsContent: SkillsContent | null }>()

const skillsSection = ref(null)
const { isInView: skillsInView } = useInView(skillsSection)
</script>

<style scoped>
/* Animations are defined in index.vue or global CSS */
</style>
