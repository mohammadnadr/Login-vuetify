<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
const password = ref('');
const email = ref('');
const Regform = ref();
const firstname = ref('');
const lastname = ref('');
// Password validation rules
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => v === v.trim() || 'Password cannot start or end with spaces',
  (v: string) => v.length <= 10 || 'Password must be less than 10 characters'
]);
const firstRules = ref([(v: string) => !!v || 'First Name is required']);
const lastRules = ref([(v: string) => !!v || 'Last Name is required']);
// Email validation rules
const emailRules = ref([
  (v: string) => !!v.trim() || 'E-mail is required',
  (v: string) => {
    const trimmedEmail = v.trim();
    return !/\s/.test(trimmedEmail) || 'E-mail must not contain spaces';
  },
  (v: string) => /.+@.+\..+/.test(v.trim()) || 'E-mail must be valid'
]);

function validate() {
  const valid = Regform.value.validate();
  console.log(valid);
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">
      Sign up
    </h3>
    <router-link
      :to="{name:'Login'}"
      class="text-primary text-decoration-none"
    >
      Already have an account?
    </router-link>
  </div>
  <v-form
    ref="Regform"
    lazy-validation
    class="mt-7 loginForm"
  >
    <v-row class="my-0">
      <v-col
        cols="12"
        sm="6"
        class="py-0"
      >
        <div class="mb-6">
          <v-label>First Name*</v-label>
          <v-text-field
            v-model="firstname"
            :rules="firstRules"
            hide-details="auto"
            required
            variant="outlined"
            class="mt-2"
            color="primary"
            placeholder="John"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="py-0"
      >
        <div class="mb-6">
          <v-label>Last Name*</v-label>
          <v-text-field
            v-model="lastname"
            :rules="lastRules"
            hide-details="auto"
            required
            variant="outlined"
            class="mt-2"
            color="primary"
            placeholder="Doe"
          />
        </div>
      </v-col>
    </v-row>
    <div class="mb-6">
      <v-label>Company</v-label>
      <v-text-field
        hide-details="auto"
        variant="outlined"
        class="mt-2"
        color="primary"
        placeholder="Demo Inc."
      />
    </div>
    <div class="mb-6">
      <v-label>Email Address*</v-label>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        placeholder="demo@company.com"
        class="mt-2"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
        @input="email"
      />
    </div>
    <div class="mb-6">
      <v-label>Password</v-label>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        placeholder="*****"
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

    <v-btn
      color="primary"
      block
      class="mt-4"
      variant="flat"
      size="large"
      @click="validate()"
    >
      Create Account
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
