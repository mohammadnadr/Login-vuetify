<template>
  <v-locale-provider :rtl="store.rtl">
    <v-app >
      <router-view />
    </v-app>
  </v-locale-provider>
</template>

<script lang="ts" setup>
  import {useAppStore} from "@/stores/app";

  const store = useAppStore();
</script>
