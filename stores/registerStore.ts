import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useRegisterStore = defineStore({
  id: 'registerStore',
  state: () => ({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '/avatar.png',
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

      const authStore = useAuthStore()
      const systemStore = useSystemStore()

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

        authStore.addUser(res?.data?.user)
        authStore._token = res?.data?.token?.token
        systemStore.upload_photo_popup = true
        navigateTo('/')

        this.clearAll()

        return res.data

      } else {
        this.$state.isError = true
        this.$state.errorMessage = res?.data?.msg

        console.log('Reg error: ', res?.data?.msg)

        return res.data
      }

    },

    clearAll() {
      this.$state.username = ''
      this.$state.email = ''
      this.$state.first_name = ''
      this.$state.last_name = ''
      this.$state.avatar = '/avatar.png'
      this.$state.dob = null
      this.$state.password = null
      this.$state.isSubmitting = false
    }

  },

  persist: {
    paths: ['username', 'email', 'first_name', 'last_name', 'dob', 'avatar', 'password'],
  },

})
