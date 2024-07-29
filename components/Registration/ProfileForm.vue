<template>
  <v-card class="mb-5 !w-full">
    <v-card-text>
      <h2 class="text-xl mb-5">
        রেজিস্ট্রেশন - প্রোফাইল</h2>

      <Form @submit="onSubmit" :validation-schema="schema">
        <div class="mb-4">
          <UFormGroup label="নামের প্রথম অংশ (বাংলায়)" class="mb-2">
            <UInput v-bind="firstNameAttrs" v-model="first_name" placeholder="আপনার নামের প্রথম অংশ বাংলায় লিখুন" />
            <div class="text-red text-xs" v-if="errors.first_name">{{ errors.first_name }}</div>
          </UFormGroup>

          <UFormGroup label="নামের শেষ অংশ (বাংলায়)" class="mb-2">
            <UInput v-bind="lastNameAttrs" v-model="last_name" placeholder="আপনার নামের শেষ অংশ বাংলায় লিখুন" />
            <div class="text-red text-xs" v-if="errors.last_name">{{ errors.last_name }}</div>
          </UFormGroup>

          <UFormGroup label="জন্ম তারিখ" class="mb-2">
            <DatePicker size='sm' placeholder="আপনার জন্ম তারিখ" v-model="dob" v-bind="dobAttrs" is-required />
            <div class="text-red text-xs" v-if="errors.dob">{{ errors.dob }}</div>
          </UFormGroup>
        </div>

        <!-- <UButton block>Login Now</UButton> -->
        <div>
          <v-btn block type="submit" class="text-none mb-3" color="blue-grey-darken-1" prepend-icon="mdi-check" rounded="md"
            variant="flat">
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

import { format } from 'date-fns'

const date = ref(new Date())

const { $axios } = useNuxtApp()

const registerStore = useRegisterStore()

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    first_name: yup.string().required('নামের প্রথম অংশ আবশ্যক'),
    last_name: yup.string().required('নামের শেষ অংশ আবশ্যক'),
    dob: yup.string().required('জন্ম তারিখ আবশ্যক'),
  }),
});

const [first_name, firstNameAttrs] = defineField('first_name');
const [last_name, lastNameAttrs] = defineField('last_name');
const [dob, dobAttrs] = defineField('dob');

const onSubmit = handleSubmit(async values => {

    registerStore.first_name = values.first_name
    registerStore.last_name = values.last_name
    registerStore.dob = values.dob
    navigateTo('/auth/registration?submit=complete')
    
});


</script>

<style></style>