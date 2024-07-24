<template>
  <div>
    <h2 class="font-semibold mb-5">পাসওয়ার্ড পরিবর্তন করুন</h2>
  </div>

  <form>

    <div class="mb-2">
      <v-text-field class="!-mb-5" label="পূর্বের পাসওয়ার্ড" placeholder="পূর্বের পাসওয়ার্ডটি এখানে লিখুন"
        variant="outlined" density="compact">
        <template #prepend-inner>
          <!-- <ph-user class="text-teal-700" size="20" /> -->
        </template>
      </v-text-field>
      <!-- <span class="text-red-500">{{ errors.last_name }}</span> -->
    </div>
    <div class="mb-2">
      <v-text-field class="!-mb-5" label="নতুন পাসওয়ার্ড" placeholder="এখানে নতুন পাসওয়ার্ডটি লিখুন" variant="outlined"
        density="compact">
        <template #prepend-inner>
          <!-- <ph-user class="text-teal-700" size="20" /> -->
        </template>
      </v-text-field>
      <!-- <span class="text-red-500">{{ errors.display_name }}</span> -->
    </div>
    <div class="mb-5">
      <v-text-field class="!-mb-5" label="নতুন পাসওয়ার্ড নিশ্চিত করুন" placeholder="নতুন পাসওয়ার্ডটি এখানে পুনরায় লিখুন" variant="outlined" density="compact">
        <template #prepend-inner>
          <!-- <ph-user class="text-teal-700" size="20" /> -->
        </template>
      </v-text-field>
      <!-- <span class="text-red-500">{{ errors.display_name }}</span> -->
    </div>
    <div class="mb-5">
      <v-btn color="green-lighten-2">পাসওয়ার্ড হালনাগাদ করুন</v-btn>
    </div>
  </form>
</template>

<script lang="ts" setup>

</script>

<style></style>