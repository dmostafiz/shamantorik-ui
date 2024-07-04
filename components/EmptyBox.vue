<template>
  <v-empty-state :title="title" :image="image"></v-empty-state>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'কিছু পাওয়া যায়নি'
  },

  image: {
    type: String,
    default: '/empty.jpg'
  },
})
</script>

<style></style>