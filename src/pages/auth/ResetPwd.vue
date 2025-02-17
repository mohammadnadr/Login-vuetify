<script setup lang="ts">
import AuthResetPwd from '@/components/authForms/AuthResetPwd.vue';
</script>

<template>
  <v-row
    class="bg-containerBg position-relative"
    no-gutters
  >

    <!---Reset pwd Part-->
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
            <v-col cols="12">
              <v-card
                elevation="0"
                class="loginBox"
              >
                <v-card elevation="24">
                  <v-card-text class="pa-sm-10 pa-6">
                    <h3 class="text-h3 mb-2">
                      Reset Password
                    </h3>
                    <p class="text-h6 text-lightText">
                      Please choose your new password
                    </p>

                    <!---Reset pwd Form-->
                    <AuthResetPwd />
                    <!---Reset pwd Form-->
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
