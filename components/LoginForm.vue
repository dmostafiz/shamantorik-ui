<template>
  <v-card class="mb-5">
    <v-card-text>
      <h2 class="text-xl mb-5">
        লগইন</h2>

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

      <Form @submit="onSubmit" :validation-schema="schema">
        <div class="mb-4">
          <UFormGroup label="ইমেইল / উজারনেম" class="mb-2">
            <UInput v-bind="usernameAttrs" v-model="username" placeholder="আপনার ইমেইল / ইউজারনেম" />
            <div class="text-red text-xs" v-if="errors.username">{{ errors.username }}</div>
          </UFormGroup>

          <UFormGroup label="পাসওয়ার্ড">
            <UInput v-bind="passwordAttrs" v-model="password" placeholder="পাসওয়ার্ড লিখুন" />
            <div class="text-red text-xs" v-if="errors.password">{{ errors.password }}</div>
          </UFormGroup>
        </div>

        <!-- <UButton block>Login Now</UButton> -->
        <div>
          <v-btn type="submit" class="text-none mb-3" color="blue-grey-darken-1" prepend-icon="mdi-check" rounded="md"
            variant="flat">
            লগইন করুন
          </v-btn>

          <NuxtLink to="/auth/registration">
            <p class="text-xs">একাউন্ট নেই? রেজিস্ট্রেশন করুন!</p>
          </NuxtLink>

        </div>
      </Form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    username: yup.string().required('আপনার ইমেইল / ইউজারনেম লিখুন'),
    password: yup.string().required('আপনার পাসওয়ার্ড লিখুন'),
  }),
});

const [username, usernameAttrs] = defineField('username');
const [password, passwordAttrs] = defineField('password');

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});


</script>

<style></style>