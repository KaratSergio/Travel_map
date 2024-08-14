<script setup>
import HomepageView from './views/HomepageView.vue'

const isDesktop = window.innerWidth > 1024
const isTablet = window.innerWidth <= 1024 && window.innerWidth > 748
</script>

<template>
  <template v-if="isDesktop">
    <HomepageView v-if="isDesktop" />
  </template>
  <template v-else-if="isTablet">
    <div>this is tablet</div>
  </template>
  <template v-else>
    <div>this is mobile</div>
  </template>
</template>
