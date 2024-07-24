<template>
  <div class="p-2 bg-gray-100 mb-5">
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-[25%] bg-gray-200">
        <v-tabs direction="vertical" v-model="tab" bg-color="ornage-lighten-5">
          <v-tab value="profile">প্রোফাইল</v-tab>
          <v-tab value="image">ছবি</v-tab>
          <v-tab value="notifications">নোটিফিকেশন</v-tab>
          <v-tab value="password">পাসওয়ার্ড</v-tab>
        </v-tabs>
      </div>
      <div class="w-[1px] h-full bg-gray-500"></div>
      <div class="flex-1 p-3">
        <v-tabs-window :transition="false" v-model="tab">
          <v-tabs-window-item value="profile">
            <AccountSettingsProfileInfo />
          </v-tabs-window-item>

          <v-tabs-window-item value="image">
            <AccountSettingsPictures />
          </v-tabs-window-item>

          <v-tabs-window-item value="notifications">
            <AccountSettingsNotifications />
          </v-tabs-window-item>

          <v-tabs-window-item value="password">
            <AccountSettingsPassword />
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </div>
  </div>
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