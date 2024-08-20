<script setup>
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
import FormContainer from '../FormContainer.vue'
import { reactive } from 'vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <FormContainer
    @submit.prevent="emit('submit', userData)"
    class="max-w-[500px] bg-white p-10 rounded-2xl"
  >
    <IInput class="mb-4" label="Повне ім'я" v-model="userData.name" />
    <IInput
      type="textarea"
      class="mb-4"
      label="Електронна пошта"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput label="Пароль" type="password" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Створити аккаунт</IButton>
  </FormContainer>
</template>
