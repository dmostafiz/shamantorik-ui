<template>
  <div class="lg:mb-2 py-5">
    <UContainer>
      <div class="flex items-center justify-between">
        <div class="">
          <NuxtLink to="/">
            <div>
              <!-- Logo  -->
              <h1 class="text-3xl font-black text-slate-700 uppercase">সামান্তরিক</h1>
            </div>
          </NuxtLink>
        </div>


        <div class="flex items-center gap-5">
          <div class="hidden lg:block w-[250px]">
            <TopbarMenus />
          </div>
          <!-- Right  -->
          <!-- <UButton label="Write your thoughts" /> -->
          <v-btn @click="navigateTo('/write/435346546')" class="text-none" prepend-icon="mdi-pencil" variant="flat"
            border rounded color="">
            সামান্তরিকে লিখুন
          </v-btn>

        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>