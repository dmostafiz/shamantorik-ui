<template>
  <div>
    <!-- <div class="mb-8">
      <h1 class=" text-slate-600 text-lg">বর্তমানে পড়ছেন</h1>

      <v-text>
        <v-card density="compact" class="mb-2" title="বাসর" subtitle="অনামিকা রাই">

          <template #prepend>
            <div class="w-[60px] h-[90px] rounded-lg overflow-clip">
              <v-img class="w-full h-full object-cover opacity-50"
                src="https://www.banglabookshelf.com/Story%20Books/Humayun%20Ahmed/Aj%20Ami%20Kothao%20Jabo%20Na.jpg"></v-img>
            </div>
          </template>

          <template #item>
            <div class="d-flex justify-space-between">
              <div class="d-flex align-center text-caption text-medium-emphasis">
                <v-icon icon="mdi-clock" start></v-icon>
                <div class="text-truncate">৭ম পৃষ্ঠা</div>
              </div>

              <v-btn rounded class="text-none" size="small" text="পড়ুন" border flat>
              </v-btn>
            </div>
          </template>
        </v-card>

        <v-card density="compact" class="mb-2" title="ডোপামিন ডিটক্স" subtitle="আরসাফ খান">

          <template #prepend>
            <div class="w-[60px] h-[90px] rounded-lg overflow-clip">
              <v-img class="w-full h-full object-cover opacity-50"
                src="https://bdebooks.com/wp-content/uploads/2023/02/Dopamine-Detox.jpg.jpg"></v-img>
            </div>
          </template>

          <template #item>
            <div class="d-flex justify-space-between">
              <div class="d-flex align-center text-caption text-medium-emphasis">
                <v-icon icon="mdi-clock" start></v-icon>
                <div class="text-truncate">৭ম পৃষ্ঠা</div>
              </div>

              <v-btn rounded class="text-none" size="small" text="পড়ুন" border flat>
              </v-btn>
            </div>
          </template>
        </v-card>
        <CustomLink to="/currently_reading" label="পাঠ্য তালিকা দেখুন" />
      </v-text>
    </div> -->

    <div class="mb-8">
      <div class="">
        <h1 class=" text-slate-600 text-lg">সাম্প্রতিক মন্তব্য</h1>
      </div>

      <v-text>

        <v-card class="mb-2">
          <v-card-text>
            <p class="text-xs leading-[16px]">
              <span class="font-semibold"><span class="text-blue-700">লিওনার্দ </span> মন্তব্য করেছেন <span
                  class="text-[10px] text-zinc-500"> (২ ঘণ্টা আগে)</span></span>
            </p>
            <p class="text-xs leading-[16px]">
              কতোবার পোড়া মনকে বুঝাই সে
              আমার কিছু নয় সব আমার কিছু নয় সব কতোবার পোড়া মনকে বুঝাই সে..
            </p>
          </v-card-text>
        </v-card>


        <v-card class="mb-2">
          <v-card-text>
            <span class="font-semibold"><span class="text-blue-700">লিওনার্দ </span> মন্তব্য করেছেন <span
                class="text-[10px] text-zinc-500"> (জুলাই ২১, ২০২৪)</span></span>
            <p class="text-xs leading-[16px]">
              কতোবার পোড়া মনকে বুঝাই সে
              আমার কিছু নয় সব আমার কিছু নয় সব কতোবার পোড়া মনকে বুঝাই সে..
            </p>
          </v-card-text>
        </v-card>


        <v-card class="mb-2">
          <v-card-text>
            <div class="mb-1">
              <span class="font-semibold"><span class="text-blue-700">মোস্তাফিজ </span> মন্তব্য করেছেন <span
                  class="text-[10px] text-zinc-500"> (জুলাই ২১, ২০২৪)</span> </span>
            </div>
            <div class="px-1">
              <p class="text-xs leading-[16px]">
                কতোবার পোড়া মনকে বুঝাই সে
                আমার কিছু নয় সব আমার কিছু নয় সব কতোবার পোড়া মনকে বুঝাই সে..
              </p>
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mb-2">
          <v-card-text>
            <div class="mb-1">
              <span class="font-semibold"><span class="text-blue-700">মোস্তাফিজ </span> মন্তব্য করেছেন <span
                  class="text-[10px] text-zinc-500"> (জুলাই ২১, ২০২৪)</span> </span>
            </div>
            <div class="px-1">
              <p class="text-xs leading-[16px]">
                হুম
              </p>
            </div>
          </v-card-text>
        </v-card>

      </v-text>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>