<script setup lang="ts">
import {shallowRef} from 'vue';
import {useAppStore} from "@/stores/app";

const store = useAppStore();
const languageDD = shallowRef([
  {title: 'English', subtext: 'UK', value: 'en'},
  {title: 'Persian', subtext: 'فارسی', value: 'fa'},
  {title: 'arabic', subtext: 'عربی', value: 'ar'}
]);
function changeLocale(item) {

  if (item.value === 'en') store.isRTL(false)
  else store.isRTL(true)

}

</script>

<template>
  <v-app-bar :elevation="1" class="px-5">
    <!--    <v-app-bar-title>-->
    <!--      LOGO-->
    <!--    </v-app-bar-title>-->
    <template #prepend>
      <v-img
        src="/logoLms.svg"
        width="64"
      />
    </template>

    <template #append>
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

            v-bind="props"
          >
            <v-icon icon="mdi-translate" />
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
              :value="index"
              class="d-flex align-center"
              @click="()=>{
                $i18n.locale = item.value
                changeLocale(item)
              }"
            >
              <v-list-item-title class="text-subtitle-1 font-weight-regular">
                {{ item.title }}
                <span class="text-lightText text-caption pl-2">({{ item.subtext }})</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">

</style>
