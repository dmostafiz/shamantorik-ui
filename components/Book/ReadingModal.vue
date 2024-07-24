<template>
  <UButton @click="modal = true" icon="ph:file-pdf-duotone" color="green">পড়তে আরম্ভ করুন </UButton>

  <v-dialog no-click-animation class="!p-0 !m-0 bg-black" v-model="modal" :transition="true">

    <v-card class="lg:overflow-y-hidden w-full">
      <v-card-header>
        <v-toolbar elevation="">
          <v-toolbar-title class="!font-semibold">
            <div class="flex items-center gap-2">
              <!-- <ph-code size="32" /> -->
              <img class="!w-[40px] object-cover"
                src="https://bdebooks.com/wp-content/uploads/2023/02/Dopamine-Detox.jpg.jpg" />

              <div>
                <h1 class="-mb-2">ডোপামিন ডিটক্স</h1>
                <span class="text-xs text-gray-500">মাসুদ রানা</span>
              </div>
            </div>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="modal = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

      </v-card-header>

      <div class="flex gap-10 flex-col lg:flex-row">

        <div class="flex-1 overflow-x-auto">
          <ClientOnly>
            <PdfReader />
          </ClientOnly>
        </div>

        <div class="lg:w-[40%] p-5 lg:p-20">


          <div class="mb-5">
            <h1 class="font-semibold text-3xl mb-5">ডোপামিন ডিটক্স</h1>

            <div class="mb-5">
              <table>
                <tbody>
                  <tr>
                    <td class=" min-w-[100px] py-1">লেখক</td>
                    <td class=" min-w-[100px] py-1">থিবো মেরিস</td>
                  </tr>
                  <tr>
                    <td class=" min-w-[100px] py-1">প্রকাশিত </td>
                    <td class=" min-w-[100px] py-1">১৯৮০, জুন ২</td>
                  </tr>
                  <tr>
                    <td class=" min-w-[100px] py-1">প্রকাশনী </td>
                    <td class=" min-w-[100px] py-1">বই প্রকাশনী</td>
                  </tr>
                  <tr>
                    <td class=" min-w-[100px] py-1">অনুবাদক</td>
                    <td class=" min-w-[100px] py-1">__</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mb-10">
              <h2 class="font-semibold">রিভিউ</h2>
              <div class="mb-2">
                <NuxtRating ratingSize="22px" :read-only="true" :ratingValue="4.5" />
                <span>( ৪.৫ / ১৫ জন )
                  <span class="text-blue-800 cursor-pointer">
                    রিভিউ দেখুন
                  </span>
                </span>
              </div>
            </div>

            <div class="flex gap-3">
              <UButton icon="ic:outline-discount">সংরক্ষণ করুন </UButton>
           
            </div>

          </div>
        </div>


      </div>

    </v-card>
  </v-dialog>
</template>

<script setup>
// import { storeToRefs } from 'pinia';
// const organizationStore = useOrganizationStore()
// const { modal } = storeToRefs(organizationStore)
const modal = ref(false)

const description = ref(null)

watch(() => description.value, () => {
  console.log(description.value)
})

</script>



<style></style>