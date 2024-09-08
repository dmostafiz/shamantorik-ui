<template>

  <div class="bg-zinc-100">
    <Topbar />
  </div>

  <div class="lg:hidden border-b">
    <TopbarMenus />
  </div>

  <UContainer>
    <div class="flex flex-col lg:flex-row gap-8">

      <div class="w-full lg:w-[250px]">
        <slot name="leftSidebar">
          <SidebarLeft />
        </slot>

      </div>

      <div class="flex-1">

        <!-- <div v-if="props.topCarousel" class="mb-5">
          <LandingTopCarousel />
        </div> -->

        <div class="w-full flex-col flex  lg:flex-row gap-8 ">

          <div class="w-full flex-1">
            <slot />
          </div>

          <div v-if="props.rightSidebar != false" class="w-full lg:w-[300px]">
            <slot name="rightSidebar">
              <SidebarRight />
            </slot>
          </div>
        </div>

      </div>

    </div>

  </UContainer>
</template>

<script setup>
const props = defineProps({
  rightSidebar: {
    type: Boolean,
    default: true
  },
  topCarousel: {
    type: Boolean,
    default: false
  }
})


const items = [
  // { type: 'subheader', title: 'Today' },
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'মোস্তাফিজ রহমান',
    subtitle: `কতোবার পোড়া মনকে বুঝাই সে আমার কিছু নয় সব মরীচিকা আলেয়ার মতো তবু শংকা; তবু ভয়৷ তৃষ্ণার জলে`,
    append: '২ দিন আগে',
  },
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'মিথিলা চক্রবর্তী',
    subtitle: `লেখাটা অনেক আগের। ২০০৪ এর। পানির নিচের ছবি তোলার জন্য ১ মাসের মতন ছিলাম ছেরা দ্বীপ এ। সংরক্ষণের জন্যও রেখে দিলাম। এর মধ্যে অনেক পরিবর্তন হয়েছে। হামিদ ভাই, যার ক্যামেরা.`,
  },
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'রাজেস খান্না',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'বিপুল রায়',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  {
    // prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'ওম্রেস কুমার',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]
</script>

<style></style>