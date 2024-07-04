<template>
  <NuxtLayout name="home" :rightSidebar="false">
    <UCard>

    <div class="flex items-center gap-10">
      <div class="w-[50%]">
        <img src="https://bdebooks.com/wp-content/uploads/2023/02/Dopamine-Detox.jpg.jpg" />
      </div>
      <div class="w-[50%]">
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
            <UButton icon="ph:file-pdf-duotone" color="green">পড়তে আরম্ভ করুন </UButton>
          </div>

        </div>
      </div>
    </div>
    </UCard>
  </NuxtLayout>
</template>

<script lang="ts" setup>


</script>

<style></style>