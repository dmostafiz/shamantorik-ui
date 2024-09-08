<template>
  <NuxtLayout name="home" :topCarousel="true">


    <div class="relative">

      <v-card variant="flat" class="mb-5">

        <v-tabs v-model="tab" align-tabs="start" stacked>
          <v-tab @click="() => navigateTo('/')" value="posts">
            <Icon size="30" name="hugeicons:rss" />
            সাম্প্রতিক পোস্ট
          </v-tab>

          <!-- <v-tab @click="() => navigateTo('/book_review')" value="review">
            <Icon size="30" name="solar:notebook-bookmark-outline" />
            বই রিভিউ
          </v-tab> -->

          <v-tab @click="() => navigateTo('/archive')" value="archive">
            <Icon size="30" name="solar:archive-minimalistic-linear" />
            ব্লগ আর্কাইভ
          </v-tab>
        </v-tabs>

      </v-card>

      <!-- <div class="z-50 absolute flex items-center">
        <NuxtLink to="/">
          <div :class="router.path == '/' && 'border-t-4 border-l border-r rounded-t-xl bg-slate-50'" class="px-3 py-2">
            <span :class="router.path == '/' && 'font-medium'">সাম্প্রতিক ব্লগ পোস্ট</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/book_review">
          <div :class="router.path == '/book_review' && 'border-t-4 border-l border-r rounded-t-xl bg-slate-50'"
            class="px-3 py-2">
            <span :class="router.path == '/book_review' && 'font-medium'">সাম্প্রতিক বই রিভিউ</span>
          </div>
        </NuxtLink>
      </div> -->

      <!-- <Button label="Check" icon="pi pi-check" /> -->

      <div class="">
        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const router = useRoute()

const tab = ref(null)


// watch(tab, (newTab, oldTab) => {
//   if (newTab == 'posts') {
//     navigateTo('/')
//   } else if (newTab == 'review') {
//     navigateTo('/book_review')
//   } else if (newTab == 'archive') {
//     navigateTo('/archive')
//   }
// })

</script>

<style></style>