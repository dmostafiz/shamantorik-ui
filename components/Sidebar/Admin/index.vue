<template>

  <v-list v-model:opened="open" nav>

    <NuxtLink href="/admin/home">
      <v-list-item ripple class="!text-teal-50 hover:bg-white/10 !font-semibold" prepend-icon="mdi-home">
        <template v-slot:prepend>
          <ph-house class="mr-4 text-teal-50" :size="25" />
        </template>
        <p>হোম</p>
      </v-list-item>
    </NuxtLink>

    <NuxtLink href="/admin/users">
      <v-list-item class="!text-teal-50 hover:bg-white/10 !font-semibold" prepend-icon="mdi-message-outline" title="">
        <template v-slot:prepend>
          <ph-chat-circle-dots class="mr-4 text-teal-50" :size="25" />
        </template>
        <p class="">ইউজারস</p>
        <template v-slot:append>

        </template>
      </v-list-item>
    </NuxtLink>

    <NuxtLink href="/admin/library">
      <v-list-item class="!text-teal-50 hover:bg-white/10 !font-semibold" prepend-icon="mdi-playlist-edit" title="">
        <template v-slot:prepend>
          <ph-code class="mr-4 text-teal-50" :size="25" />
        </template>
        <p class="">লাইব্রেরী</p>
      </v-list-item>
    </NuxtLink>

    <NuxtLink href="/admin/blog-posts">
      <v-list-item class="!text-teal-50 hover:bg-white/10 !font-semibold" prepend-icon="mdi-menu" title="">
        <template v-slot:prepend>
          <ph-kanban class="mr-4 text-teal-50" :size="25" />
        </template>
        <div>
          <p class="">ব্লগ পোস্টস</p>
          <!-- <p class="text-[10px] text-slate-400">project workflow</p> -->
        </div>
      </v-list-item>
    </NuxtLink>

    <NuxtLink href="/admin/book-reviews">
      <v-list-item class="!text-teal-50 hover:bg-white/10 !font-semibold" title="">
        <template v-slot:prepend>
          <ph-user-rectangle class="mr-4 text-teal-50" :size="25" />
        </template>
        <p class="">বই রিভিউ</p>
      </v-list-item>
    </NuxtLink>

  </v-list>
</template>

<script setup>
const open = ref([]);
</script>

<style></style>
