<template>
  <div>
    <!-- <UTextarea color="primary" class="mb-5" variant="outline" placeholder="Share your thoughts here..." /> -->

    <div>
      <!-- <h2 class="font-bold mb-5">Latest Posts</h2> -->

      <div v-for="post, index in posts" :key="index" class="mb-5">
        <PostCard :post="post" class="mb-5" />
      </div>


    </div>
  </div>
</template>

<script lang="ts" setup>
const posts = ref([

  {
    title: 'তুমি আমার সুর ( কবিতাটির রচিয়তা কে?)',
    image: '',
    description: 'কতোবার পোড়া মনকে বুঝাই সে আমার কিছু নয় সব মরীচিকা আলেয়ার মতো তবু শংকা; তবু ভয়৷ তৃষ্ণার জলের মতো তাকে অনুভব করি তটস্থ হয়ে আমি এফোঁড় ওফোঁড় পড়ে থাকি সময়ে অসময়ে৷ তার কাছে হেরে...',
  },
  {
    title: 'বাংলাদেশে ‘Hierarchy’ এর অবস্থান: সামাজিক ন্যায়বিচারের সন্ধানে',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgg-wU8N097s0B4O3t6CvmQFEJFIKXGhFujrgjmDimlOInAc39_j3nL3WQ2L476u8ik_I&usqp=CAU',
    description: 'বাস যখন ধীরে ধীরে এগিয়ে যেতে শুরু করেছে তখনি আরাফ ব্যাগ কাঁধে দৌড়াতে দৌড়াতে লাফ দিয়ে বাসের দরজায় উঠে পড়ে। কাঁধে দৌড়াতে দৌড়াতে লাফ দিয়ে আরেকটু হলেই মিস হয়ে যেত বাসটা। অনলাইনে আগে থেকে...',
    part: convertNumberToWord(1),

  },
  {
    title: 'গ্রাম - আমাদের বাংলার প্রাণ!',
    image: 'https://bdebooks.com/wp-content/uploads/2023/02/Dopamine-Detox.jpg.jpg',
    description: 'শহীদ কাপুর (Shahid Kapoor) এর আধুনিক কাল্ট ক্লাসিক সিনেমা নিয়ে দ্বিতীয় পর্ব। আশা করি প্রথম পর্ব আপনাদের ভালো লেগেছে। দ্বিতীয় পর্বে শহীদ কাপুরের বর্তমান সময় পর্যন্ত কাজ অনুযায়ী আমি...',
  },
  {
    title: 'বৈধ আয়ের উপর কর বৃদ্ধি',
    image: '',
    description: 'লেখাটা অনেক আগের। ২০০৪ এর। পানির নিচের ছবি তোলার জন্য ১ মাসের মতন ছিলাম ছেরা দ্বীপ এ। সংরক্ষণের জন্যও রেখে দিলাম। এর মধ্যে অনেক পরিবর্তন হয়েছে। হামিদ ভাই, যার ক্যামেরা...',
  },
  {
    title: 'শাইয়্যানও হয়তো একদিন দেশ ছেড়ে চলে যাবে',
    image: '',
    description: 'ছোটখাটো ইস্যু হলেই ক\'দিন পরপরই বাংলাদেশের সীমান্তে নির্বিচারে মানুষকে গুলি করছে ভারতের সীমান্তরক্ষী বাহিনী বি.এস.এফ.। এই বিষয়গুলো বারবার ঘটার পরেও সরকার প্রয়োজনীয় কার্যকরী পদক্ষেপ কেন নিচ্ছে না তা আমার বোধগম্য..',
  }
])
</script>

<style></style>