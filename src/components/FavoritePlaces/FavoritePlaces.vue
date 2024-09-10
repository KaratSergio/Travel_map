<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'
import IButton from '../IButton/IButton.vue'
import { useModal } from '@/composables/useModal'
import { ref, computed } from 'vue'
import { useMutation } from '@/composables/useMutation'
import { updateFavoritePlace } from '../api/favorite-places'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array
  },
  activeId: {
    required: true,
    type: [String, null]
  }
})

const emit = defineEmits(['place-clicked', 'create', 'updated'])

const { isOpen: isEditModal, openModal: openEditModal, closeModal: closeEditModal } = useModal()
const { mutation: updatePlace, isLOading } = useMutation({
  mutationFn: (formData) => updateFavoritePlace(formData),
  onSuccess: () => {
    closeEditModal()
    emit('updated')
  }
})
const selectedId = ref(null)
const selectItem = computed(() => props.items.find((place) => place.id === selectedId.value))

const handleEditPlace = (id) => {
  selectedId.value = id
  openEditModal()
}

const handleSubmit = (formData) => updatePlace(formData)
</script>

<template>
  <div class="px-6 text-black">
    <div class="text-gray mb-4">Додані маркери</div>

    <slot name="label"></slot>
    <slot name="list">
      <div v-if="favoritePlaces.length === 0">Список порожній</div>
      <FavoritePlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :is-active="place.id === props.activeId"
        @click="emit('place-clicked', place.id)"
        @edit="handleEditPlace(place.id)"
      />

      <EditPlaceModal
        :is-open="isEditModal"
        :place="selectItem"
        :is-loading="isLoading"
        @close="closeEditModal"
        @submit="handleSubmit"
      />

      <ConfirmationModal :is-open="true" title="Ви дійсно хочете видалити улюблене місце?" />
    </slot>

    <slot></slot>
    <IButton class="w-full mt-10" variant="gradient" @click="emit('create')">
      Додати маркер
    </IButton>
  </div>
</template>
