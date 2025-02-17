<template>
  <v-locale-provider :rtl="store.rtl">
    <v-app style="direction: rtl">
      <router-view />
    </v-app>
  </v-locale-provider>
</template>

<script lang="ts" setup>
  import {useAppStore} from "@/stores/app";

  const store = useAppStore();
</script>
