<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from "vue";
	import { inject } from "vue";
	import { Button } from "@/components/ui/button";

	const navbar = ref<HTMLElement | null>(null);

	const handleScroll = () => {
		if (navbar.value) {
			if (window.scrollY > 50) {
				// Adjust scroll threshold as needed
				navbar.value.setAttribute("data-scrolled", "true");
			} else {
				navbar.value.removeAttribute("data-scrolled");
			}
		}
	};

	onMounted(() => {
		window.addEventListener("scroll", handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener("scroll", handleScroll);
	});

	const isDark = inject("isDark");
	const toggleDark = inject("toggleDark");
</script>

<template>
	<nav
		ref="navbar"
		class="hidden md:flex items-center justify-center px-8 py-4 fixed w-full z-50 bg-background/80 backdrop-blur-sm top-0 transition-all duration-300 ease-in-out"
	>
		<div class="flex items-center justify-between w-full max-w-screen-xl">
			<div class="text-lg font-bold text-primary">My Portfolio</div>
			<div class="space-x-4 flex items-center">
				<Button
					variant="ghost"
					as="a"
					href="#hero"
					>Home</Button
				>
				<Button
					variant="ghost"
					as="a"
					href="#about"
					>About</Button
				>
				<Button
					variant="ghost"
					as="a"
					href="#projects"
					>Projects</Button
				>
				<Button
					variant="ghost"
					as="a"
					href="#skills"
					>Skills</Button
				>
				<Button
					variant="ghost"
					as="a"
					href="#contact"
					>Contact</Button
				>
				<ClientOnly>
					<Button
						variant="ghost"
						size="icon"
						@click="typeof toggleDark === 'function' && toggleDark()"
					>
						<svg
							v-if="isDark"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-sun"
						>
							<circle
								cx="12"
								cy="12"
								r="4"
							/>
							<path d="M12 2v2" />
							<path d="M12 20v2" />
							<path d="M4.93 4.93l1.41 1.41" />
							<path d="M17.66 17.66l1.41 1.41" />
							<path d="M2 12h2" />
							<path d="M20 12h2" />
							<path d="M6.34 17.66l-1.41 1.41" />
							<path d="M19.07 4.93l-1.41 1.41" />
						</svg>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-moon"
						>
							<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
						</svg>
					</Button>
				</ClientOnly>
			</div>
		</div>
	</nav>
</template>
