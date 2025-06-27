<template>
  <div class="star-background">
    <div class="comet"></div>
    <div class="comet comet-delay-1"></div>
    <div class="comet comet-delay-2"></div>
    <div class="comet comet-delay-3"></div>
    <div class="comet comet-delay-4"></div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this component
</script>

<style scoped>
.star-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Ensure it stays behind content */
  pointer-events: none; /* Ensure it doesn't interfere with interactions */
}

.comet {
  position: absolute;
  top: -100px; /* Start above the screen */
  width: 2px; /* Size of the comet head */
  height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.8), /* Head glow */
              0 0 10px 5px rgba(255, 255, 255, 0.5), /* Tail start */
              0 0 20px 10px rgba(255, 255, 255, 0.3), /* Tail middle */
              0 0 30px 15px rgba(255, 255, 255, 0.1); /* Tail end */
  animation: fall 10s linear infinite; /* Slower animation */
}

/* Randomize starting positions */
.comet:nth-child(1) { left: 10%; animation-delay: 0s; }
.comet:nth-child(2) { left: 30%; animation-delay: 2s; }
.comet:nth-child(3) { left: 50%; animation-delay: 4s; }
.comet:nth-child(4) { left: 70%; animation-delay: 6s; }
.comet:nth-child(5) { left: 90%; animation-delay: 8s; }

/* More specific delays for better distribution */
.comet-delay-1 { animation-delay: 1.5s; left: 20%; }
.comet-delay-2 { animation-delay: 3.5s; left: 40%; }
.comet-delay-3 { animation-delay: 5.5s; left: 60%; }
.comet-delay-4 { animation-delay: 7.5s; left: 80%; }

@keyframes fall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(50vw) rotate(45deg); /* Fall diagonally */
    opacity: 0;
  }
}
</style>