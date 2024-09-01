<script setup>
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import { loginUser } from '@/components/api/user'
import { useRouter } from 'vue-router'

const isLoading = ref(false)
const router = useRouter

const hendleLogin = async (userData) => {
  isLoading.value = true
  try {
    await loginUser(userData)
    router.replace('./map')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <LoginForm @submit="hendleLogin" :is-loading="isLoading" />
</template>
