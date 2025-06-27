<script setup lang="ts">
	import { useDark, useToggle } from "@vueuse/core";
	import Navbar from "./components/Navbar.vue";
	import MobileNav from "./components/MobileNav.vue";
	
	import { provide, watchEffect, onMounted } from "vue";

	const isDark = useDark();
	const toggleDark = useToggle(isDark);

	provide("isDark", isDark);
	provide("toggleDark", toggleDark);

	onMounted(() => {
		watchEffect(() => {
			if (isDark.value) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		});
	});
</script>

<template>
	<div class="relative min-h-screen">
    <Navbar />
			<MobileNav />
			<NuxtPage />
	</div>
</template>
