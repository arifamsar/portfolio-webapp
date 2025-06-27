<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Hero Section -->
    <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 hero-fancy-background"></div>
      <div class="relative z-10 text-center px-4 py-16 md:py-24 lg:py-32 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary drop-shadow-lg animate-fade-in-down leading-tight">
          Muhammad Arif
        </h1>
        <p class="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold animate-fade-in-up leading-snug">
          Crafting Intuitive Android Experiences
        </p>
        <p class="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
          Passionate Android Developer dedicated to building high-performance, user-centric mobile applications.
        </p>
        <div class="mt-10 animate-fade-in-up delay-400">
          <Button size="lg" class="transition-all duration-300 text-lg px-8 py-4 rounded-full" @click="scrollToProjects">
            View My Projects
          </Button>
        </div>
      </div>
    </section>

    <section ref="aboutSection" id="about" :class="['py-20 px-4 md:px-8 text-card-foreground', 'animate-on-scroll-hidden', { 'animate-on-scroll-visible': aboutInView }, 'futuristic-gradient-background']">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          About Me
        </h2>
        <ClientOnly>
          <div v-if="aboutContent" class="prose dark:prose-invert max-w-full lg:prose-lg xl:prose-xl mx-auto leading-relaxed text-lg" v-html="aboutContent.body"></div>
          <p v-else class="text-center text-muted-foreground mt-4">
            Loading about content...
          </p>
        </ClientOnly>
      </div>
    </section>
    

    <section ref="projectsSection" id="projects" :class="['py-20 px-4 md:px-8 text-foreground', 'animate-on-scroll-hidden', { 'animate-on-scroll-visible': projectsInView }, 'futuristic-gradient-background']">
      <ClientOnly>
        <div>
          <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
              Projects
            </h2>
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <ProjectCard
                v-for="(project, index) in projectsContent?.projects"
                :key="project.title"
                :project="project"
                                :class="['animate-on-scroll-hidden', { 'animate-on-scroll-visible': projectsInView }]"
                :style="{ 'animation-delay': `${index * 0.1}s` }"
              />
            </div>
          </div>
        </div>
      </ClientOnly>
    </section>

    <section ref="skillsSection" id="skills" :class="['py-20 px-4 md:px-8 text-card-foreground', 'animate-on-scroll-hidden', { 'animate-on-scroll-visible': skillsInView }, 'futuristic-gradient-background']">
      <SkillsSection :skillsContent="skillsContent" />
    </section>

    <section ref="contactSection" id="contact" :class="['py-20 px-4 md:px-8 text-foreground', 'animate-on-scroll-hidden', { 'animate-on-scroll-visible': contactInView }, 'futuristic-gradient-background']">
      <ContactSection :contactContent="contactContent" />
    </section>

    <!-- Simple Footer -->
    <footer class="py-10 text-center text-muted-foreground text-sm">
      &copy; {{ new Date().getFullYear() }} Muhammad Arif. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import { useInView } from '@/lib/useInView'


const { data: aboutContent } = await useFetch('/api/about')
const { data: projectsContent } = await useFetch('/api/projects')
const { data: skillsContent } = await useFetch('/api/skills')
const { data: contactContent } = await useFetch('/api/contact')

console.log('About Content:', aboutContent.value)
console.log('Projects Content:', projectsContent.value)
console.log('Skills Content:', skillsContent.value)
console.log('Contact Content:', contactContent.value)

const aboutSection = ref(null)
const projectsSection = ref(null)
const skillsSection = ref(null)
const contactSection = ref(null)

const { isInView: aboutInView } = useInView(aboutSection)
const { isInView: projectsInView } = useInView(projectsSection)
const { isInView: skillsInView } = useInView(skillsSection)
const { isInView: contactInView } = useInView(contactSection)

const scrollToProjects = () => {
  const projectsEl = document.getElementById('projects')
  if (projectsEl) {
    projectsEl.scrollIntoView({ behavior: 'smooth' })
  }
}



// Basic animations (can be expanded with a dedicated animation library like GSAP or VueUse)
// For now, using simple Tailwind CSS animations
</script>

<style scoped>
/* Tailwind CSS animations */
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
.animate-fade-in-up.delay-100 {
  animation-delay: 0.1s;
}
.animate-fade-in-up.delay-200 {
  animation-delay: 0.2s;
}
.animate-fade-in-up.delay-400 {
  animation-delay: 0.4s;
}

@keyframes fade-in-glitch {
  0% { opacity: 0; transform: translateY(20px) skewX(10deg); filter: blur(5px); }
  20% { opacity: 0.5; transform: translateY(-5px) skewX(-5deg); filter: blur(2px); }
  100% { opacity: 1; transform: translateY(0) skewX(0deg); filter: blur(0); }
}
.animate-fade-in {
  animation: fade-in-glitch 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes fade-in-left {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
}

@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}

.hero-fancy-background {
  background: 
    radial-gradient(circle at 15% 25%, oklch(0.7 0.28 290 / 0.7), transparent 40%),
    radial-gradient(circle at 85% 75%, oklch(0.8 0.2 190 / 0.7), transparent 40%),
    radial-gradient(circle at 30% 90%, oklch(0.8 0.2 190 / 0.5), transparent 50%),
    radial-gradient(circle at 70% 10%, oklch(0.9 0.02 290 / 0.5), transparent 50%),
    radial-gradient(circle at 50% 50%, oklch(0.1 0.07 290 / 0.8), transparent 70%); /* Central dark glow */
  background-size: 400% 400%;
  animation: fancy-background-pan 30s ease infinite alternate, hue-shift 25s linear infinite alternate;
  opacity: 1;
  filter: saturate(1.5) brightness(1.1);
}

@keyframes fancy-background-pan {
  0% {
    background-position: 0% 0%, 100% 100%, 0% 100%, 100% 0%, 50% 50%;
  }
  25% {
    background-position: 100% 0%, 0% 100%, 100% 0%, 0% 100%, 20% 80%;
  }
  50% {
    background-position: 100% 100%, 0% 0%, 100% 100%, 0% 0%, 80% 20%;
  }
  75% {
    background-position: 0% 100%, 100% 0%, 0% 0%, 100% 100%, 30% 30%;
  }
  100% {
    background-position: 0% 0%, 100% 100%, 0% 100%, 100% 0%, 50% 50%;
  }
}

@keyframes hue-shift {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

/* Adjust existing animations for better flow */
@keyframes fade-in-down {
  0% { opacity: 0; transform: translateY(-20px); clip-path: inset(0 0 100% 0); }
  100% { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0% 0); }
}
.animate-fade-in-down {
  animation: fade-in-down 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); clip-path: inset(100% 0 0 0); }
  100% { opacity: 1; transform: translateY(0); clip-path: inset(0% 0 0 0); }
}
.animate-fade-in-up {
  animation: fade-in-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}
</style>
