<template>
  <NuxtLayout name="home" :rightSidebar="false">
    <v-card>
      <v-toolbar color="white">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>সামান্তরিক লাইব্রেরী</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>

        <template v-slot:extension>
          <div class="px-2">
            <v-tabs v-model="tab" align-tabs="start" fixed-tabs>
              <v-tab v-for="item in items" :key="item" :text="item" :value="item"></v-tab>
            </v-tabs>
          </div>
        </template>
      </v-toolbar>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="item in items" :key="item" :value="item">
          <div class="p-5">
            <!-- <v-card-text v-text="text"></v-card-text> -->

            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-10">
              <div v-for="item, index in books" :key="index" class="flex flex-col items-center gap-1 w-full mr-3">
                <div class="relative w-full h-[250px] bg-zinc-100  overflow-hidden shadow-sm rounded-md border-b">
                  <img :src="item.image" class="absolute opacity-95 w-full h-full object-cover" draggable="false">
                  <div class="relative top-0 w-full h-full bg-gradient-to-t from-white from-10% to-white/20">
                    <div class="absolute bottom-0 w-full px-5 pb-3 flex flex-col gap-1 items-center justify-center">
                      <span class=" line-clamp-1 font-semibold text-md">{{ item.name }}</span>
                      <span class=" line-clamp-1 text-xs text-zinc-500">মহিউদ্দিন খান</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>

  </NuxtLayout>
</template>

<script setup>
const tab = ref(null)
const items = ref([
  'সকল বই', 'উপন্যাস', 'কবিতা', 'দর্শন', 'বিজ্ঞান', 'জীবনী', 'ডকুমেন্টারি',
])
const text = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

const books = [
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