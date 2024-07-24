<template>
  <div>
    <h2 class="font-semibold mb-5">প্রোফাইল আপডেট করুন</h2>

    <form>
      <div class="mb-2">
        <v-text-field class="!-mb-5" label="নামের প্রথম অংশ (বাংলায়)" placeholder="আপনার নামের প্রথম অংশ বাংলায় লিখুন"
          variant="outlined" density="compact">
          <template #prepend-inner>
            <!-- <ph-user class="text-teal-700" size="20" /> -->
          </template>
        </v-text-field>
        <!-- <span class="text-red-500">{{ errors.first_name }}</span> -->
      </div>
      <div class="mb-2">
        <v-text-field class="!-mb-5" label="নামের দ্বিতীয় অংশ (বাংলায়)" placeholder="নামের দ্বিতীয় অংশ বাংলায় লিখুন"
          variant="outlined"  density="compact">
          <template #prepend-inner>
            <!-- <ph-user class="text-teal-700" size="20" /> -->
          </template>
        </v-text-field>
        <!-- <span class="text-red-500">{{ errors.last_name }}</span> -->
      </div>
      <div class="mb-2">
        <v-text-field class="!-mb-5" label="ইউজারনেম (ইংরেজিতে)" placeholder="ইউজার নাম লিখুন" variant="outlined"  density="compact">
          <template #prepend-inner>
            <!-- <ph-user class="text-teal-700" size="20" /> -->
          </template>
        </v-text-field>
        <!-- <span class="text-red-500">{{ errors.display_name }}</span> -->
      </div>
      <div class="mb-5">
        <v-text-field class="!-mb-5" label="ইমেইল" placeholder="আপনার ইমেইল লিখুন" variant="outlined"  density="compact">
          <template #prepend-inner>
            <!-- <ph-user class="text-teal-700" size="20" /> -->
          </template>
        </v-text-field>
        <!-- <span class="text-red-500">{{ errors.display_name }}</span> -->
      </div>
      <div class="mb-5">
        <v-btn color="green-lighten-2">প্রোফাইল হালনাগাদ করুন</v-btn>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
