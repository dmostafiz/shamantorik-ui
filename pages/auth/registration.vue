<template>
  <NuxtLayout name="auth">


    <RegistrationStartForm  v-if="!router?.query?.submit"/>

    <RegistrationProfileForm  v-if="router?.query?.submit == 'profile'"/>

    <RegistrationCompleteForm  v-if="router?.query?.submit == 'complete'"/>


  </NuxtLayout>
</template>

<script  setup>
const router = useRoute()
console.log('router: ', router)

</script>

<style></style>