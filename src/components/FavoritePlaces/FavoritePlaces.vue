<script setup>
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import { ref } from 'vue'

const buttonVariant = ref('gradient')

const changeButtonVariant = () => {
  buttonVariant.value = buttonVariant.value === 'gradient' ? 'outlined' : 'gradient'
}
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4" @click.stop="() => console.log('click2')">Додані маркери</div>
    <div class="py-5">
      <IInput label="Some label" />
      <a href="/" class="text-black" @click.prevent="() => console.log('prevented')">Click me</a>
    </div>

    <slot name="label"></slot>

    <slot name="list">
      <FavoritePlace v-for="n in 4" :key="n" />
    </slot>

    <slot></slot>
    <IButton class="w-full mt-10" :variant="buttonVariant" @click="changeButtonVariant"
      >Додати маркер</IButton
    >
  </div>
</template>
