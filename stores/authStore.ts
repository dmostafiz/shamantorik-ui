import { defineStore } from 'pinia'

export const useAuthStore = defineStore({

  id: 'authStore',

  state: () => ({
    _token: '',
    user: {
      id: '',
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      avatar: '',
      coverPhoto: '',
      role: '',
      isAdmin: false,
    }
  }),

  actions: {
    addUser(user: any) {
      this.user.id = user.id
      this.user.username = user.username
      this.user.email = user.email
      this.user.firstName = user.firstName
      this.user.lastName = user.lastName
      this.user.avatar = user.avatar
      this.user.coverPhoto = user.coverPhoto
      this.user.role = user.role
      this.user.isAdmin = user.isAdmin
      this.user.avatar = user.avatar
    },

    getUser() {
      return this.$state.user
    },

    removeUser() {
      this.user.id = ''
      this.user.username = ''
      this.user.email = ''
      this.user.firstName = ''
      this.user.lastName = ''
      this.user.avatar = ''
      this.user.role = 'user'
      this.user.isAdmin = false
      this.user.avatar = ''
    }
  },

  persist: true,
})
