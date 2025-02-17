// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    rtl:true,

  }),
  actions: {
    isRTL(payload : boolean) {
      this.rtl = payload;  // تغییر مقدار rtl به true یا false
    },


  },
})
