<template>
  <v-menu v-model="menu" location="top start" origin="top start" transition="scale-transition">
    <template v-slot:activator="{ props }">
      <div v-bind="props">


        <slot>
          <Chip class="cursor-pointer" label="মোস্তাফিজ রহমান" image="https://cdn.vuetifyjs.com/images/john.png" />
        </slot>
      </div>
    </template>

    <v-card width="300">

      <div class="relative bg-zinc-300">
        <v-img class="!relative opacity-70" height="200" src="/cover.jpg" cover></v-img>

        <div class="!absolute w-full -bottom-0 p-3 pt-5 bg-white">
          <div class="flex gap-5">
            <UAvatar chip-color="primary" chip-text="" chip-position="top-right" size="lg"
              src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
            <div>
              <div>
                <h2 class="font-bold text-md">মোস্তাফিজ রহমান</h2>
                <p class="me-1 text-[12px] mb-2">২৩০ জন ফলোয়ার</p>

                <NuxtLink to="/blogger/fgjsddgddf-dfdf-dfdf">
                  <p class="text-blue-500 text-sm">প্রোফাইল দেখুন</p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
const menu = ref(false);
</script>

<style></style>
