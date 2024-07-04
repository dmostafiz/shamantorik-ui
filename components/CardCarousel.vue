<template>
  <div>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-1/2 lg:basis-1/6' }" indicators arrows
      class="overflow-hidden">
      <div class="flex flex-col items-center gap-1 w-full mr-3">
        <NuxtLink to="/book/sunset-of-thousand-flying-fox" class="w-full">
          <div class="relative w-full h-[190px] bg-zinc-100  overflow-hidden shadow-sm rounded-md">
            <img :src="item.image" class="absolute saturate-50  opacity-95 w-full h-full object-cover" draggable="false">
            <div class="relative top-0 w-full h-full bg-gradient-to-t from-white from-10% to-white/20">
              <div class="absolute bottom-0 w-full px-5 pb-3 flex flex-col gap-1 items-center justify-center">
                <span class=" line-clamp-1 font-semibold text-center">{{ item.name }}</span>
                <span class=" line-clamp-1 text-xs">মহিউদ্দিন খান</span>
              </div>
            </div>
          </div>
        </NuxtLink>
        <!-- <span class=" line-clamp-1">{{ item.name }}</span> -->
      </div>
    </UCarousel>
  </div>

</template>

<script lang="ts" setup>
const items = [
  { name: 'ডোপামিন ডিটক্স', image: 'https://www.banglabookshelf.com/Story%20Books/Humayun%20Ahmed/Aj%20Ami%20Kothao%20Jabo%20Na.jpg' },
  { name: 'মিসির আলি', image: 'https://www.upoharbd.com/images/uploads/Books/bashor.jpg' },
  { name: 'কবিতা সামগ্রী', image: 'https://static1.eboighar.com/thumbimages/Books/book_27072022-01-30_1643524055.jpg' },
  { name: 'পারাডক্সিকাল সাজিদ', image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1686381715i/18284391._UX160_.jpg' },
  { name: 'হিমালয়', image: 'https://bdebooks.com/wp-content/uploads/2023/02/Dopamine-Detox.jpg.jpg' },
  { name: 'আসমান জমিনের ফারাক', image: 'https://www.upoharbd.com/images/uploads/Books/tomake.jpg' },
  { name: 'অদম্য', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgg-wU8N097s0B4O3t6CvmQFEJFIKXGhFujrgjmDimlOInAc39_j3nL3WQ2L476u8ik_I&usqp=CAU' },
  { name: 'অতি সত্তর', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiOGE3cLSR90Uf-h6qBBKU8-iKJySNaQk2b6iXzwRPlUhaOveU2LTSLrG9QDgrRzWbzM&usqp=CAU' },
  { name: 'মেঘ বর্ণ', image: 'https://rukminim2.flixcart.com/image/850/1000/kt39jm80/regionalbooks/t/b/n/sadhak-jiban-samagra-a-collection-of-three-famous-novels-by-original-imag6gehgkrp9d4h.jpeg?q=20&crop=false' },
  { name: 'সীমান্তু', image: 'https://rukminim2.flixcart.com/image/750/900/l4n2oi80/regionalbooks/z/h/m/simantahin-simanar-desh-travel-literature-fiction-original-imagfhqewygkepgf.jpeg?q=20&crop=false' },
  { name: 'অপলক ইশারা', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LxRjXgkc89VXWbdMv56Dyfbd8TXmtqnwCi5WF3a31nG7tmUS1H3log3NABo4LdSh1tI&usqp=CAU' },
  { name: 'কবিতা', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHH882_azdudcSsuzLKtVaceTpXV5fD_HpOe4zkQ-hmD9-0vpT3k0O0yzkuuslTaFUGt4&usqp=CAU' },
]
</script>

<style></style>