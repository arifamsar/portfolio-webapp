<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { inject } from 'vue'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const isOpen = ref(false)
const mobileNavbar = ref<HTMLElement | null>(null)

const handleScroll = () => {
  if (mobileNavbar.value) {
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
      mobileNavbar.value.setAttribute('data-scrolled', 'true')
    } else {
      mobileNavbar.value.removeAttribute('data-scrolled')
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isDark = inject('isDark')
const toggleDark = inject('toggleDark')

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isOpen.value = false; // Close the mobile nav after clicking a link
  }
};
</script>

<template>
  <div ref="mobileNavbar" class="md:hidden flex items-center justify-between p-4 fixed w-full z-50 bg-background/80 backdrop-blur-sm top-0 transition-all duration-300 ease-in-out">
    <div class="text-lg font-bold text-primary">My Portfolio</div>
    <Sheet v-model:open="isOpen">
      <SheetTrigger as-child>
        <Button variant="ghost" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav class="flex flex-col space-y-4 mt-4">
          <Button variant="ghost" as="a" href="#hero" @click="isOpen = false">Home</Button>
          <Button variant="ghost" as="a" href="#about" @click="isOpen = false">About</Button>
          <Button variant="ghost" as="a" href="#projects" @click="isOpen = false">Projects</Button>
          <Button variant="ghost" as="a" href="#skills" @click="isOpen = false">Skills</Button>
          <Button variant="ghost" as="a" href="#contact" @click="isOpen = false">Contact</Button>
          <ClientOnly>
            <Button variant="ghost" size="icon" @click="typeof toggleDark === 'function' && toggleDark()">
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            </Button>
          </ClientOnly>
        </nav>
      </SheetContent>
    </Sheet>
  </div>
</template>
