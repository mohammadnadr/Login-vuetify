// Utilities
import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => ({
    //
    rtl:true,
    locale:'fa',
    theme:'light'

  }),
  actions: {
    isRTL(payload : boolean) {
      this.rtl = payload;  // تغییر مقدار rtl به true یا false
    },
    setLocale(payload: string){
      this.locale = payload;
      localStorage.setItem('locale',payload)
    },
    changeTheme(payload: string){
      this.theme = payload
      localStorage.setItem('theme',payload)
    }


  },
})
