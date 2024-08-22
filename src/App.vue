<script setup>
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from './map/settings'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[480px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
      ></MapboxMap>
    </div>
  </main>
</template>
