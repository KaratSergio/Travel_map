<script setup>
import LogoutIcon from './LogoutIcon.vue'
import { logout } from '../api/user'
import { useMutation } from '@/composables/useMutation'
import { useRouter } from 'vue-router'

const { mutation: logoutUser, isLoading } = useMutation({
  mutationFn: () => logout(),
  onSuccess: () => {
    router.replace('/auth/login')
  }
})
</script>

<template>
  <button class="flex gap-2 items-center px-6 text-black" @click="logoutUser">
    <span v-if="isLoading">Loading...</span>
    <span v-else>Вихід</span>
    <LogoutIcon />
  </button>
</template>
