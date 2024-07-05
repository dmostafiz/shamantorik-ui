<template>
  <v-card variant="elevated" class="mx-auto mb-5" text="" :title="post?.title">

    <template #prepend>
      <div class="mr-1">
        <UserCardPopup>
          <UAvatar class="cursor-pointer" size="sm" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
        </UserCardPopup>
      </div>
    </template>

    <template #subtitle>
      <div class="flex items-center gap-1 text-md  text-zinc-600">
        <!-- <NuxtLink to="/blogger/mostafiz">
          <span class=" text-blue-900">মোস্তাফিজ রহমান</span>
        </NuxtLink> -->

        <span class="text-xs">১৩ই জুন, ২০২২</span>


      </div>
    </template>

    <template #append>
      <div>
        <UBadge v-if="post?.part" color="gray" variant="solid">‌‌{{ post.part }} ‌পর্ব</UBadge>
      </div>
    </template>

    <template #text>
      <div class="flex flex-col lg:flex-row items-center gap-3">
        <div v-if="post?.image" class="hidden lg:block bg-zinc-100 h-[110px] w-[90px] overflow-hidden shadow-sm">
          <img class="opacity-70 h-full w-full object-cover" :src="post.image" />
        </div>

        <div class="flex-1">
          <div class="text-lg !text-zinc-600">
            {{ post?.description }}
            <NuxtLink to="/post/dfdf">
              <span class="text-blue-900">আরো পড়ুন</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-2 justify-between pt-5">
        <div class="flex gap-2 text-sm underline cursor-pointer text-sky-500">
          <span># ওনুগল্প</span>
          <span># রম্মগল্প</span>
        </div>
        <div class="flex gap-2 text-xs text-zinc-500">
          <span>৫১ বার দেখা</span>
          <span>.</span>
          <span>২০ টি লাইক </span>
          <span>.</span>
          <span>২৫ টি মন্তব্য</span>
        </div>

      </div>
    </template>


  </v-card>

</template>

<script setup>
defineProps(['post'])
</script>

<style></style>