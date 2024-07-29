<template>
  <div>
    <slot />
    <Toast />

    <v-dialog v-model="systemStore.upload_photo_popup" width="auto">
      <v-card max-width="400" prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete." title="ছবি আপলোড করুন">
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="() => {
      systemStore.upload_photo_popup = false
      systemStore.update_bio_popup = true
    }"></v-btn>
        </template>
      </v-card>
    </v-dialog>

    <v-dialog v-model="systemStore.update_bio_popup" width="auto">
      <v-card max-width="400" prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete." title="বায়ো আপডেট করুন">
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="systemStore.update_bio_popup = false"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>

const systemStore = useSystemStore()

const dialog = ref(systemStore.upload_photo_popup)

const router = useRoute()
console.log('router: ', router?.query?.popup)


// watch(() => router.query.popup, async () => {
//   if (router?.query?.popup) {
//     if (router?.query?.popup == 'upload_photo') {
//       dialog.value = true
//     }
//   }
// })

</script>

<style></style>