<template>
  
  <LoginForm v-if="!authStore.user.id" />

  <div v-if="authStore.user.id" class="hidden lg:block">
    <v-card>
      <v-card-text>
        <UVerticalNavigation :links="links" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
const authStore = useAuthStore()
const links = [
  [
    {
      label: `${authStore?.user?.firstName} ${authStore?.user?.lastName}`,
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4'
      },
      to: '/profile'
    }
  ],
  [{
    label: 'প্রথম পাতা',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'আমার লাইব্রেরী',
    icon: 'i-heroicons-command-line',
    to: '/my_library',
    badge: 2

  },
  {
    label: 'সংরক্ষিত বই সমূহ',
    icon: 'i-heroicons-command-line',
    to: '/saved_books',
    badge: 4

  },
  {
    label: 'সংরক্ষিত ব্লগ পোস্ট ',
    icon: 'i-heroicons-command-line',
    to: '/saved_blog_posts',
    badge: 1
  },

  ],
  [{
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle',
    to: '/help'
  }]
]
</script>

<style></style>