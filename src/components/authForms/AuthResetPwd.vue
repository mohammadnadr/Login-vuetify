<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {useI18n} from "vue-i18n";

const { t } = useI18n(); // دسترسی به تابع t برای ترجمه

const valid = ref(false);
const logform = ref();
const password = ref('');
const conpassword = ref('');
const show = ref(false);
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const confirmpasswordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);

const router = useRouter();

function validate() {
  // logform.value.validate();
  if (logform.value && logform.value.validate()) {
    router.push('/starter');
  }
}
</script>

<template>
  <v-form
    ref="logform"
    v-model="valid"
    lazy-validation
    action="/starter"
    class="mt-7 loginForm"
    @submit.prevent="validate"
  >
    <div class="mb-6">
      <v-label>{{ t('password') }}</v-label>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        required
        placeholder="Enter password"
        variant="outlined"
        color="primary"
        hide-details="auto"
        :type="show ? 'text' : 'password'"
        class="mt-2 mb-4"
      >
        <template #append-inner>
          <v-btn
            color="secondary"
            icon
            rounded
            variant="text"
          >
            <v-icon
              v-if="show == false"
              icon="mdi-eye"
              :style="{ color: 'rgb(var(--v-theme-secondary))' }"
              @click="show = !show"
            />
            <v-icon
              v-if="show == true"
              icon="mdi-eye-closed"
              :style="{ color: 'rgb(var(--v-theme-secondary))' }"
              @click="show = !show"
            />
          </v-btn>
        </template>
      </v-text-field>
    </div>
    <div class="mb-6">
      <v-label>Confirm Password</v-label>
      <v-text-field
        v-model="conpassword"
        :rules="confirmpasswordRules"
        placeholder="Enter confirm password"
        required
        variant="outlined"
        color="primary"
        hide-details="auto"
        class="mt-2"
      />
    </div>
    <v-btn
      color="primary"
      block
      class="mt-5"
      variant="flat"
      size="large"
      :disabled="!valid"
      type="submit"
    >
      Reset Password
    </v-btn>
  </v-form>
</template>
<style lang="scss">
.loginForm {
  .v-field--appended {
    padding-inline-end: 0;
  }
}
</style>
