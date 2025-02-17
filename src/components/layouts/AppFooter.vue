<template>
  <v-footer
    height="40"
    app
  >
    <v-menu
      :close-on-content-click="false"
      location="bottom"
      offset="6, 80"
    >
      <template #activator="{ props }">
        <v-btn
          icon
          class="ms-sm-2 ms-1"
          color="darkText"
          rounded="sm"
          size="small"
          v-bind="props"
        >
          <v-icon icon="mdi-translate"></v-icon>
        </v-btn>
      </template>
      <v-sheet
        rounded="md"
        width="200"
      >
        <v-list
          class="py-0"
          aria-label="language list"
          aria-busy="true"
        >
          <v-list-item
            v-for="(item, index) in languageDD"
            :key="index"
            color="primary"
            :active="$i18n.locale == item.value"
            class="d-flex align-center"
            @click="() => ($i18n.locale = item.value)"
          >
            <v-list-item-title class="text-subtitle-1 font-weight-regular">
              {{ item.title }}
              <span class="text-lightText text-caption pl-2">({{ item.subtext }})</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-menu>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; 2016-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Vuetify, LLC</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://vuetifyjs.com/about/licensing/"
        rel="noopener noreferrer"
        target="_blank"
      >
        MIT License
      </a>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import {shallowRef} from 'vue';

const languageDD = shallowRef([
  {title: 'English', subtext: 'UK', value: 'en'},
  {title: 'Persian', subtext: 'فارسی', value: 'fa'},
  {title: 'arabic', subtext: 'عربی', value: 'ar'}
]);
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
