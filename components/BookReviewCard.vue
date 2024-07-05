<template>

  <v-card variant="elevated" class="mx-auto mb-5" text="" :title="item?.title">

    <template #prepend>
      <div class="mr-1">
        <UserCardPopup>
          <UAvatar class="cursor-pointer" size="sm" src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar" />
        </UserCardPopup>
      </div>
    </template>


    <template #subtitle>
      <div class="flex items-center gap-1 text-md  text-zinc-600">
        <!-- <NuxtLink to="/blogger/mostafiz">
          <span class=" text-blue-900">মোস্তাফিজ রহমান</span>
        </NuxtLink> -->

        <span class="text-sm">১৩ই জুন, ২০২২</span>


      </div>
    </template>

    <template #text>
      <div class="flex flex-col lg:flex-row  items-center gap-3">

        <div class="relative w-[120px] h-[145px] bg-zinc-100  overflow-hidden shadow-sm rounded-md">
          <img :src="item.image" class="absolute opacity-95 w-full h-full object-cover" draggable="false">
          <div class="relative top-0 w-full h-full bg-gradient-to-t from-white from-10% to-white/20">
            <div class="absolute bottom-0 w-full px-5 pb-3 flex flex-col items-center justify-center">
              <span class=" line-clamp-1 font-semibold text-center">{{ item?.book?.name }}</span>
              <span class=" line-clamp-1 text-[10px]">মহিউদ্দিন খান</span>
            </div>
          </div>
        </div>


        <div class="flex-1">

          <div class="text-lg px-2 !text-slate-400">
            <div class="mb-2">
              <NuxtRating ratingSize="22px" :read-only="true" :ratingValue="item?.rating || 3.5" />
            </div>
            {{ item?.description }}
          </div>
        </div>
      </div>
    </template>

  </v-card>

</template>

<script setup>
defineProps(['item'])
const value = ref(null);
</script>

<style></style>