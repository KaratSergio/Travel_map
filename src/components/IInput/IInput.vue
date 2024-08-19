<script setup>
const props = defineProps({
  modalValue: String,
  label: String,
  placeholder: String,
  type: { default: 'text', type: String }
})

defineOptions({ inheritAttrs: false })

const emit = defineEmits(['update:modalValue'])
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <input
        @input="emit('update:modalValue', $event.target.value)"
        v-bind="{ ...$props, ...$attrs }"
        :value="modalValue"
        class="w-full text-sm rounded-[4px] border-[#eaeaea] border py-2 px-3 focus:outline-primary"
      />
    </label>
  </div>
</template>
