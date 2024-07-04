<template>
  <NuxtLink :to="to">
    <div class="flex items-center gap-2 text-blue-950 text-xs">
      <Icon :name="icon" />
      <span variant='link'>{{label}}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    require: true
  },
  icon: {
    type: String,
    default: 'solar:bookmark-broken'
  },
  label: {
    type: String,
    require: true
  }
})
</script>

<style></style>