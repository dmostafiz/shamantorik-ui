import { defineStore } from 'pinia'

export const useRegisterStore = defineStore({
  id: 'registerStore',
  state: () => ({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    dob: null,
    password: null,
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  }),
  actions: {

    async register() {

      console.log('register from store')

      // const toast = useToast()

      const { $axios } = useNuxtApp()

      this.$state.isSubmitting = true

      const data = {
        username: this.$state.username,
        email: this.$state.email,
        first_name: this.$state.first_name,
        last_name: this.$state.last_name,
        avatar: this.$state.avatar,
        dob: this.$state.dob,
        password: this.$state.password
      }

      const res = await $axios().post('/auth/register', data)

      console.log('registration res: ', res)

      if (res?.data?.ok) {
        // toast.add({
        //   severity: 'success',
        //   summary: 'Success!',
        //   detail: res?.data?.msg,
        //   life: 3000
        // });
        console.log('Reg success: ', res?.data?.msg)

        this.clearAll()

        return res.data

      } else {
        this.$state.isError = true
        this.$state.errorMessage = res?.data?.msg

        console.log('Reg error: ', res?.data?.msg)

        return res.data
        // toast.add({
        //   severity: 'error',
        //   summary: 'Ops!',
        //   detail: res?.data?.msg,
        //   life: 3000
        // });
      }


      this.$state.isSubmitting = false

      setTimeout(() => {
        this.$state.isError = false
        this.$state.errorMessage = ''
      }, 5000)
    },

    clearAll() {
      this.$state.username = ''
      this.$state.email = ''
      this.$state.first_name = ''
      this.$state.last_name = ''
      this.$state.avatar = ''
      this.$state.dob = null
      this.$state.password = null
      this.$state.isSubmitting = false
    }

  },

  persist: {
    paths: ['username', 'email', 'first_name', 'last_name', 'dob', 'avatar', 'password'],
  },

})
