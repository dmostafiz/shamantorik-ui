<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="flex flex-col gap-5 items-center w-full lg:w-[350px] px-5">
      <LogoMain />
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>