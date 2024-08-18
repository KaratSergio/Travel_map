<script setup>
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
import { reactive } from 'vue'

const emit = defineEmits(['submit'])
const usserData = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', usserData)" class="max-w-[500px] bg-white p-10 rounded-2xl">
    <IInput class="mb-4" label="Повне ім'я" v-modal="usserData.name" />
    <IInput
      class="mb-4"
      label="Електронна пошта"
      placeholder="email@gmail.com"
      v-modal="usserData.email"
    />
    <IInput label="Пароль" type="password" v-modal="usserData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Створити аккаунт</IButton>
  </form>
</template>
