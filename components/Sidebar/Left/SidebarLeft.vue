<template>
  <v-card class="mb-5">
    <v-card-text>
      <h2 class="text-xl mb-5">
        লগইন করুন</h2>

      <UButton block class="mb-2" label="গুগোল লগইন" color="gray">
        <template #leading>
          <UAvatar src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
            size="2xs" />
        </template>
      </UButton>

      <UButton block class="mb-2" label="ফেসবুক লগইন" color="gray">
        <template #leading>
          <UAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxOMUNq_G-2Tqqcm2l1UYB3WCjRHx6KI2xg&s"
            size="2xs" />
        </template>
      </UButton>

      <UDivider class="my-3">অথবা</UDivider>

      <div class="mb-4">
        <UFormGroup label="ইমেইল / উজারনেম" name="username" class="mb-2">
          <UInput placeholder="Enter your email or username" />
        </UFormGroup>
        <UFormGroup label="পাসওয়ার্ড" name="password">
          <UInput placeholder="Enter your password" />
        </UFormGroup>
      </div>

      <!-- <UButton block>Login Now</UButton> -->
      <v-btn class="text-none" color="blue-grey-darken-1" prepend-icon="mdi-check" rounded="md" variant="flat">
        লগইন করুন
      </v-btn>
    </v-card-text>
  </v-card>

  <div class="hidden lg:block">
    <v-card>
      <v-card-text>
        <UVerticalNavigation :links="links" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
const links = [
  [
    {
      label: 'মোস্তাফিজ রহমান',
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
    label: 'পাঠ তালিকা',
    icon: 'i-heroicons-command-line',
    to: '/currently_reading',
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