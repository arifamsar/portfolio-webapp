<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <div class="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-center text-primary">Register</h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
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
          Register
        </Button>
      </form>
      <p v-if="error" class="text-destructive text-center mt-4">{{ error }}</p>
      <p class="text-center text-muted-foreground">
        Already have an account? <NuxtLink to="/login" class="text-primary hover:underline">Login</NuxtLink>
      </p>
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

const handleRegister = async () => {
  try {
    error.value = null
    const { error: authError } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    })
    if (authError) throw authError
    alert('Registration successful! Please check your email to confirm your account.')
  } catch (e: any) {
    error.value = e.message
  }
}
</script>