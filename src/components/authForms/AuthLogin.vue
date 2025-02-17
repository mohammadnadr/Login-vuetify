<script setup lang="ts">
import {ref} from 'vue';
import {Form} from 'vee-validate';

const checkbox = ref(false);
const valid = ref(false);
const show = ref(false);
const password = ref('admin123');
const username = ref('info@codedthemes.com');
// Password validation rules
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => v === v.trim() || 'Password cannot start or end with spaces',
  (v: string) => v.length <= 10 || 'Password must be less than 10 characters'
]);
// Email validation rules
const emailRules = ref([
  (v: string) => !!v.trim() || 'E-mail is required',
  (v: string) => {
    const trimmedEmail = v.trim();
    return !/\s/.test(trimmedEmail) || 'E-mail must not contain spaces';
  },
  (v: string) => /.+@.+\..+/.test(v.trim()) || 'E-mail must be valid'
]);

/* eslint-disable @typescript-eslint/no-explicit-any */
function validate(values: any, {setErrors}: any) {
  // Trim the username before validation
  const trimmedUsername = username.value.trim();

  // Update the username with trimmed value
  username.value = trimmedUsername;

  const authStore = useAuthStore();
  return authStore.login(trimmedUsername, password.value).catch((error) => setErrors({apiError: error}));
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">
      Login
    </h3>
    <router-link
      to="/register1"
      class="text-primary text-decoration-none"
    >
      Don't Have an account?
    </router-link>
  </div>
  <Form
    v-slot="{ errors, isSubmitting }"
    class="mt-7 loginForm"
    @submit="validate"
  >
    <div class="mb-6">
      <v-label>Email Address</v-label>
      <v-text-field
        v-model="username"
        aria-label="email address"
        :rules="emailRules"
        class="mt-2"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
        @input="username"
      />
    </div>
    <div>
      <v-label>Password</v-label>
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
        @input="password"
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
        label="Keep me sign in"
        required
        color="primary"
        class="ms-n2"
        hide-details
      />
      <div class="ms-auto">
        <router-link
          to="/forgot-pwd1"
          class="text-darkText link-hover"
        >
          Forgot Password?
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
      Login
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
