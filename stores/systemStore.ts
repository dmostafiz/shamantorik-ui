import { defineStore } from 'pinia'

export const useSystemStore = defineStore({
  id: 'systemStore',
  state: () => ({ 
    upload_photo_popup: false,
    update_bio_popup: false
  }),
  actions: {}
})
