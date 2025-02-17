<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const valid = ref(false);
const logform = ref();
const email = ref('');
// Email validation rules
const emailRules = ref([
  (v: string) => !!v.trim() || 'E-mail is required',
  (v: string) => {
    const trimmedEmail = v.trim();
    return !/\s/.test(trimmedEmail) || 'E-mail must not contain spaces';
  },
  (v: string) => /.+@.+\..+/.test(v.trim()) || 'E-mail must be valid'
]);

const router = useRouter();

function validate() {
  if (logform.value && logform.value.validate()) {
    router.push({name:'Code Verification'});
  }
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h5 text-center mb-0">
      Forgot Password
    </h3>
    <router-link
      :to="{name:'Login'}"
      class="text-primary text-decoration-none"
    >
      Back to Login
    </router-link>
  </div>

  <v-form
    ref="logform"
    v-model="valid"
    lazy-validation
    action="/starter"
    class="mt-7 loginForm"
    @submit.prevent="validate"
  >
    <v-label>Email address</v-label>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      placeholder="Enter email address"
      class="mt-2 mb-6"
      required
      hide-details="auto"
      variant="outlined"
      color="primary"
    />

    <h6 class="text-caption">
      Do not forgot to check SPAM box.
    </h6>
    <v-btn
      color="primary"
      block
      class="mt-2"
      variant="flat"
      size="large"
      :disabled="!valid"
      type="submit"
    >
      Send Password
      Reset Email
    </v-btn>
  </v-form>
</template>
