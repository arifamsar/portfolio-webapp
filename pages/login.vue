<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <div class="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-center text-primary">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-muted-foreground">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-primary focus:border-primary bg-input text-foreground"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-muted-foreground">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-primary focus:border-primary bg-input text-foreground"
          />
        </div>
        <Button type="submit" class="w-full">
          Login
        </Button>
      </form>
      <p class="text-center text-muted-foreground">
        Don't have an account? <NuxtLink to="/register" class="text-primary hover:underline">Register</NuxtLink>
      </p>
      <p v-if="error" class="text-destructive text-center mt-4">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const email = ref('')
const password = ref('')
const error = ref<string | null>(null)
const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})

const handleLogin = async () => {
  try {
    error.value = null
    const { error: authError } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (authError) throw authError
  } catch (e: any) {
    error.value = e.message
  }
}
</script>