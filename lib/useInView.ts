import { ref, onMounted, onUnmounted } from 'vue'

export function useInView(
  target: Ref<Element | null>,
  options: IntersectionObserverInit = { threshold: 0.1 },
) {
  const isInView = ref(false)
  let observer: IntersectionObserver | null = null

  const startObserver = () => {
    if (target.value && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          isInView.value = true
          // Optional: stop observing after it's in view
          if (observer) {
            observer.unobserve(target.value as Element)
            observer.disconnect()
          }
        }
      }, options)
      observer.observe(target.value)
    }
    else {
      // Fallback for SSR or older browsers
      isInView.value = true
    }
  }

  const stopObserver = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(startObserver)
  onUnmounted(stopObserver)

  return {
    isInView,
  }
}