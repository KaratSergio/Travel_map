<script setup>
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import { authService } from '@/components/api/authService'
import { useMutation } from '@/composables/useMutation'
import { useRouter } from 'vue-router'

const router = useRouter()
const {
  isLoading,
  error,
  mutation: handleLogin
} = useMutation({
  mutationFn: (data) => authService.loginUser(data),
  onSuccess: () => router.replace('./map')
})
</script>

<template>
  <LoginForm @submit="handleLogin" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
