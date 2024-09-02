<script setup>
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '@/components/api/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const {
  isLoading,
  error,
  mutation: handleRegisterUser
} = useMutation({
  mutationFn: registerUser,
  onSuccess: () => router.replace('./map')
})
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
