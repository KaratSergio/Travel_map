<script setup>
// import HomepageView from './views/HomepageView.vue'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>

<template>
  <!-- <HomepageView /> -->
  <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces>
      <div>This is super slot</div>

      <template v-slot:label>
        <div>this is label</div>
      </template>

      <template #list>
        <div>this is list</div>
      </template>
    </FavoritePlaces>
  </div>
</template>
