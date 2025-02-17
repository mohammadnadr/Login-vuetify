<script setup lang="ts">
import AuthCodeVerification from '@/components/authForms/AuthCodeVerification.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // دسترسی به تابع t برای ترجمه
</script>

<template>
  <v-row no-gutters>
    <!---Code verification Part-->
    <v-col
      cols="12"
      class="d-flex align-center"
    >
      <v-container>
        <div
          class="d-flex align-center justify-center"
          style="min-height: calc(100vh - 148px)"
        >
          <v-row justify="center">
            <v-col
              cols="12"
              lg="10"
              xl="6"
              md="7"
            >
              <v-card
                elevation="0"
                class="loginBox"
              >
                <v-card elevation="24">
                  <v-card-text class="pa-sm-9 pa-6">
                    <h3 class="text-h3 mb-2">
                      {{ t('enterVerificationCode') }}
                    </h3>
                    <p class="text-h6 text-lightText">
                      {{ t('verificationCodeMessage') }}
                    </p>

                    <!---Code verification Form-->
                    <AuthCodeVerification />
                    <!---Code verification Form-->
                  </v-card-text>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}
</style>
