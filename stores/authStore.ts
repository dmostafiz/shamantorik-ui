import { defineStore } from 'pinia'

export const useAuthStore = defineStore({

  id: 'authStore',

  state: () => ({
    id: '',
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    cover_photo: '',
    role: '',
    is_admin: false,
    avatar: '',
  }),

  actions: {
    addUser(user: any) {
      this.id = user.id
      this.username = user.username
      this.email = user.email
      this.first_name = user.first_name
      this.last_name = user.last_name
      this.avatar = user.avatar
      this.cover_photo = user.cover_photo
      this.role = user.role
      this.is_admin = user.is_admin
      this.avatar = user.avatar
    },

    getUser() {
      return this.$state
    },

    removeUser() {
      this.id = ''
      this.username = ''
      this.email = ''
      this.first_name = ''
      this.last_name = ''
      this.avatar = ''
      this.role = 'user'
      this.is_admin = false
      this.avatar = ''
    }
  },

  persist: true,
})
