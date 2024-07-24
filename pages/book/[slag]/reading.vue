<template>
  <NuxtLayout name="home" :rightSidebar="false">
    <div class="flex flex-col lg:flex-row items-center lg:items-start">
      <div class="lg:w-[30%]">
          <img src="https://bdebooks.com/wp-content/uploads/2023/02/Dopamine-Detox.jpg.jpg" />
      </div>
      <div class="flex-1">
        <ClientOnly>
          <PdfReader />
        </ClientOnly>
      </div>
   
    </div>

  </NuxtLayout>
</template>

<script lang="ts" setup>

</script>

<style></style>