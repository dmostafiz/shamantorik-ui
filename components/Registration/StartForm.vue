<template>
  <v-card class="mb-5 !w-full">
    <v-card-text>
      <h2 class="text-xl mb-5">
        রেজিস্ট্রেশন</h2>

      <UButton block class="mb-2" label="গুগোল রেজিস্ট্রেশন" color="gray">
        <template #leading>
          <UAvatar src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
            size="2xs" />
        </template>
      </UButton>

      <UButton block class="mb-2" label="ফেসবুক রেজিস্ট্রেশন" color="gray">
        <template #leading>
          <UAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxOMUNq_G-2Tqqcm2l1UYB3WCjRHx6KI2xg&s"
            size="2xs" />
        </template>
      </UButton>

      <UDivider class="my-3">অথবা</UDivider>

      <Form @submit="onSubmit" :validation-schema="schema">
        <div class="mb-4">
          <UFormGroup label="ইমেইল" class="mb-2">
            <UInput v-bind="emailAttrs" v-model="email" placeholder="আপনার ইমেইল লিখুন" />
            <div class="text-red text-xs" v-if="errors.email">{{ errors.email }}</div>
          </UFormGroup>

        </div>

        <!-- <UButton block>Login Now</UButton> -->
        <div>
          <v-btn block type="submit" class="text-none mb-3" color="blue-grey-darken-1" prepend-icon="mdi-check"
            rounded="md" variant="flat">
            এগিয়ে যান
          </v-btn>

          <NuxtLink to="/auth/login">
            <p class="text-xs">একাউন্ট আছে? লগইন করুন!</p>
          </NuxtLink>

        </div>
      </Form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { $axios } = useNuxtApp()

const registerStore = useRegisterStore()

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string()
      .email('ভ্যালিড ইমেইল এড্রেস লিখুন')
      .required('আপনার ইমেইল লিখুন')
      .test('checkEmail', 'ইমেইলটি ব্যবহার করা আছে।', async (value) => {
        const res = await $axios().post('/auth/verify_is_available', { type: 'email', value })
        console.log('email validating.. ', res?.data?.ok)
        return res?.data?.ok
      }),
  }),
});

const [email, emailAttrs] = defineField('email');

const onSubmit = handleSubmit(async values => {

  registerStore.email = values.email
  navigateTo('/auth/registration?submit=profile')


});


const mockApiRequest = (value) => {

};

</script>

<style></style>