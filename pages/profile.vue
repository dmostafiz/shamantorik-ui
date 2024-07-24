<template>
  <NuxtLayout name="home" :rightSidebar='true'>
    <v-card :disabled="loading" :loading="loading" class="mb-2">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
      </template>

      <div class="relative bg-zinc-300">
        <v-img class="!relative" height="350" src="/cover.jpg" cover></v-img>

        <div class="!absolute w-full -bottom-0 p-3 pt-10 bg-gradient-to-t from-white via-white/80">
          <div class="flex gap-2">
            <UAvatar chip-color="primary" chip-text="" chip-position="top-right" size="3xl"
              src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
            <div>
              <div>
                <h2 class="font-bold text-2xl -mb-2">মোস্তাফিজ রহমান</h2>
                <span>
                  <span class="me-1 text-xs">লেখক, সফটওয়ার ইঞ্জিনিয়ার</span>
                  <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                  <v-row align="center" class="mx-0 my-2">
                    <v-rating :model-value="4.5" color="amber" density="compact" size="small" half-increments
                      readonly></v-rating>
                    <div class="text-grey ms-4">
                      4.5 (413)
                    </div>
                  </v-row>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <v-card-item>
        <div class="flex gap-2">
          <UAvatar chip-color="primary" chip-text="" chip-position="top-right" size="3xl"
            src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
          <div>
            <v-card-title>মোস্তাফিজ রহমান</v-card-title>
            <v-card-subtitle>
              <span class="me-1">লেখক, সফটওয়ার ইঞ্জিনিয়ার</span>
              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
              <v-row align="center" class="mx-0 my-2">
                <v-rating :model-value="4.5" color="amber" density="compact" size="small" half-increments
                  readonly></v-rating>

                <div class="text-grey ms-4">
                  4.5 (413)
                </div>
              </v-row>
            </v-card-subtitle>
          </div>
        </div>
      </v-card-item> -->

      <v-card-text>
        <div>নিতান্তই সখের বসে বাড়ির আঙিনার পেছন দিকে আড়ালে একটি গাঁজা বৃক্ষ রোপন করেছিলো প্রনন্দ সেন।
          তার স্ত্রী সরলা, ঠিক যেন নামের মতই সহজ আর সরল।
          স্বামীর নিয়ে আসা এই বৃক্ষটির পরিচয় সরলা জানে না। তাই সে প্রনন্দ সেনের কাছে গিয়ে আদুরে কণ্ঠে শুধালো, এটি কি
          গাছ গো
        </div>
      </v-card-text>

      <v-tabs v-model="tab" bg-color="white">
        <v-tab value="one">ব্লগ পোস্ট</v-tab>
        <v-tab value="two">প্রকাশিত বই</v-tab>
        <v-tab value="settings">সেটিংস</v-tab>
      </v-tabs>
    </v-card>

    <div>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <!-- <EmptyBox title="ব্লগপোস্ট পাওয়া যায়নি" /> -->
          <AccountBlogPosts />
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <EmptyBox title="প্রকাশিত বই পাওয়া যায়নি" />
        </v-tabs-window-item>

        <v-tabs-window-item value="settings">
          <AccountTab />
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>

const tab = ref(null)
const loading = ref(false)
const selection = 1

function reserve() {
  loading.value = true

  setTimeout(() => (loading.value = false), 2000)
}
</script>

<style></style>