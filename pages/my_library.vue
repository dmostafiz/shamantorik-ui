<template>
  <NuxtLayout name="home">
    <UCard class="mb-5">
      <template #header>আমার লাইব্রেরী </template>
    </UCard>

    <v-card density="compact" class="mb-2" title="বাসর" subtitle="অনামিকা রাই">
      <template #prepend>
        <div class="w-[60px] h-[90px] rounded-lg overflow-clip">
          <v-img
            class="w-full h-full object-cover opacity-50"
            src="https://www.banglabookshelf.com/Story%20Books/Humayun%20Ahmed/Aj%20Ami%20Kothao%20Jabo%20Na.jpg"
          ></v-img>
        </div>
      </template>

      <template #item>
        <div class="d-flex justify-space-between">
          <div class="d-flex align-center text-caption text-medium-emphasis">
            <v-icon icon="mdi-clock" start></v-icon>
            <div class="text-truncate">৭ম পৃষ্ঠা</div>
          </div>

          <v-btn rounded class="text-none" size="small" text="পড়ুন" border flat> </v-btn>
        </div>
      </template>
    </v-card>

    <v-card density="compact" class="mb-2" title="ডোপামিন ডিটক্স" subtitle="আরসাফ খান">
      <template #prepend>
        <div class="w-[60px] h-[90px] rounded-lg overflow-clip">
          <v-img
            class="w-full h-full object-cover opacity-50"
            src="https://bdebooks.com/wp-content/uploads/2023/02/Dopamine-Detox.jpg.jpg"
          ></v-img>
        </div>
      </template>

      <template #item>
        <div class="d-flex justify-space-between">
          <div class="d-flex align-center text-caption text-medium-emphasis">
            <v-icon icon="mdi-clock" start></v-icon>
            <div class="text-truncate">৭ম পৃষ্ঠা</div>
          </div>

          <v-btn rounded class="text-none" size="small" text="পড়ুন" border flat> </v-btn>
        </div>
      </template>
    </v-card>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style></style>
