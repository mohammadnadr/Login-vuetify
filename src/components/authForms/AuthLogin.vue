<script setup lang="ts">
import {ref} from 'vue';
import {Form} from 'vee-validate';
import axios from "axios";


const checkbox = ref(false);
const valid = ref(false);
const show = ref(false);
const password = ref('admin123');
const username = ref('info@codedthemes.com');
// Password validation rules
const passwordRules = ref([
  (v: string) => !!v || $t('passwordRequired'),
  (v: string) => v === v.trim() || t('passwordSpaces'),
  (v: string) => v.length <= 10 || t('passwordLength')
]);
// Email validation rules
const emailRules = ref([
  (v: string) => !!v.trim() || t('emailRequired'),
  (v: string) => {
    const trimmedEmail = v.trim();
    return !/\s/.test(trimmedEmail) || t('emailSpaces');
  },
  (v: string) => /.+@.+\..+/.test(v.trim()) || t('emailValid')
]);

/* eslint-disable @typescript-eslint/no-explicit-any */
function validate(values: any, {setErrors}: any) {
  // Trim the username before validation
  const trimmedUsername = username.value.trim();

  // Update the username with trimmed value
  username.value = trimmedUsername;
  return login(trimmedUsername, password.value).catch((error) => setErrors({apiError: error}));
}

async function login(username: string, password: string) {

  const user = {username, password}
  const {data} = await axios.get('')
  console.log(data);
  // update pinia state
  // this.user = user;
  // store user details and jwt in local storage to keep user logged in between page refreshes
  localStorage.setItem('user', JSON.stringify(user));
  // redirect to previous url or default to home page
  // router.push(this.returnUrl || '/starter');
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">
      {{ $t('login') }}
    </h3>
    <router-link
      :to="{name:'Register'}"
      class="text-primary text-decoration-none"
    >
      {{ $t('dontHaveAccount') }}
    </router-link>
  </div>
  <Form
    v-slot="{ errors, isSubmitting }"
    class="mt-7 loginForm"
    @submit="validate"
  >
    <div class="mb-6">
      <v-label>{{ $t('emailAddress') }}</v-label>
      <v-text-field
        v-model="username"
        aria-label="email"
        :rules="emailRules"
        class="mt-2"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
      />
    </div>
    <div>
      <v-label>{{ $t('password') }}</v-label>
      <v-text-field
        v-model="password"
        aria-label="password"
        :rules="passwordRules"
        required
        variant="outlined"
        color="primary"
        hide-details="auto"
        :type="show ? 'text' : 'password'"
        class="mt-2"
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

    <div class="d-flex align-center mt-4 mb-7 mb-sm-0">
      <v-checkbox
        v-model="checkbox"
        :rules="[(v: any) => !!v || 'You must agree to continue!']"
        :label="$t('keepMeSignedIn')"
        required
        color="primary"
        class="ms-n2"
        hide-details
      />
      <div class="ms-auto">
        <router-link
          :to="{name:'Forgot Password'}"
          class="text-darkText link-hover"
        >
          {{ $t('forgotPassword') }}
        </router-link>
      </div>
    </div>
    <v-btn
      color="primary"
      :loading="isSubmitting"
      block
      class="mt-5"
      variant="flat"
      size="large"
      :disabled="valid"
      type="submit"
    >
      {{ $t('login') }}
    </v-btn>
    <div
      v-if="errors.apiError"
      class="mt-2"
    >
      <v-alert color="error">
        {{ errors.apiError }}
      </v-alert>
    </div>
  </Form>
</template>
<style lang="scss">
.loginForm {
  .v-text-field .v-field--active input {
    font-weight: 500;
  }

  .v-field--appended {
    padding-inline-end: 0;
  }
}
</style>
