<script setup>
import HomepageView from './views/HomepageView.vue'

const fruits = ['kiwi', 'banana', 'orange']

const fruitsMap = {
  kiwi: 'Super Kiwi',
  banana: 'Super Banana',
  orange: 'Super Orange'
}
</script>

<template>
  <div :key="fruit" v-for="(fruit, index) in fruits">{{ index }}: {{ fruit }}</div>

  <div :key="fruit" v-for="(fruit, key) in fruitsMap">{{ key }}: {{ fruit }}</div>

  <template v-if="555">
    <div :key="val" v-for="val in 5">{{ val }}</div>
  </template>

  <div :key="char" v-for="char in 'hello'">{{ char }}</div>

  <HomepageView />
</template>
