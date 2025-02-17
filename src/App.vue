<template>
  <v-locale-provider :rtl="store.rtl">
    <v-app>
      <router-view />
    </v-app>
  </v-locale-provider>
</template>

<script lang="ts" setup>
import {useAppStore} from "@/stores/app";

const store = useAppStore();
const locale = localStorage.getItem('locale')
store.setLocale(locale)
if (locale === 'en') store.isRTL(false)
else store.isRTL(true)

</script>
