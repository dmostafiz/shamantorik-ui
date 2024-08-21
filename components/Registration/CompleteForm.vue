<template>
  <v-card class="mb-5 !w-full">
    <v-card-text>
      <h2 class="text-xl mb-5">
        রেজিস্ট্রেশন -ক্রেডেন্সিয়াল</h2>

      <Form @submit="onSubmit" :validation-schema="schema">
        <div class="mb-4">
          <UFormGroup label="ইউজারনেম (English)" class="mb-2">
            <UInput v-bind="userNameAttrs" v-model="username" placeholder="Ex: mostafiz12" />
            <div class="text-red text-xs" v-if="errors.username">{{ errors.username }}</div>
          </UFormGroup>

          <UFormGroup label="পাসওয়ার্ড" class="mb-2">
            <UInput v-bind="passwordAttrs" v-model="password" placeholder="নতুন পাসওয়ার্ড দিন" />
            <div class="text-red text-xs" v-if="errors.password">{{ errors.password }}</div>
          </UFormGroup>

          <UFormGroup label="পুনঃ পাসওয়ার্ড" class="mb-2">
            <UInput size='sm' placeholder="পাসওয়ার্ডটি নিশ্চিত করুন" v-model="confirm_password"
              v-bind="confirmPasswordAttrs" />
            <div class="text-red text-xs" v-if="errors.confirm_password">{{ errors.confirm_password }}</div>
          </UFormGroup>


        </div>

        <!-- <UButton block>Login Now</UButton> -->
        <div>
          <v-btn block :loading="registerStore.isSubmitting" :disabled="registerStore.isSubmitting" type="submit"
            class="text-none mb-3" color="blue-grey-darken-1" prepend-icon="mdi-check" rounded="md" variant="flat">
            রেজিস্ট্রেশন সম্পন্ন করুন
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

const toast = useToast()

const { $axios } = useNuxtApp()

const registerStore = useRegisterStore()
const systemStore = useSystemStore()


const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    username: yup.string()
      .required('ইউজারনেম ইংরেজিতে আবশ্যক')
      .test('checkUsername', 'ইউজারনেমটি ব্যবহার করা আছে।', async (value) => {
        const res = await $axios().post('/auth/verify_is_available', { type: 'username', value })
        console.log('email validating.. ', res?.data?.ok)
        return res?.data?.ok
      }),
    password: yup.string().required('পাসওয়ার্ড আবশ্যক'),
    confirm_password: yup.string().required('পাসওয়ার্ড নিশ্চিতকরণ আবশ্যক'),
  }),
});

const [username, userNameAttrs] = defineField('username');
const [password, passwordAttrs] = defineField('password');
const [confirm_password, confirmPasswordAttrs] = defineField('confirm_password');

const onSubmit = handleSubmit(async values => {

  registerStore.username = values.username
  registerStore.password = values.password

  const data = await registerStore.register()

  console.log('response from store: ', data)

  if (data?.ok == true) {
    toast.add({
      severity: 'success',
      summary: 'Success!',
      detail: data?.msg,
      life: 3000
    });

  } else {
    {
      toast.add({
        severity: 'error',
        summary: 'Ops!',
        detail: data?.msg,
        life: 3000
      });
    }
  }

});


</script>

<style></style>