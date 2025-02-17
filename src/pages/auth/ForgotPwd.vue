<script setup lang="ts">
import AuthForgotPwd from '@/components/authForms/AuthForgotPwd.vue';
</script>

<template>
  <v-row
    class="bg-containerBg position-relative"
    no-gutters
  >

    <!---Forgot pwd Part-->
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
              lg="12"
            >
               <v-card
                elevation="12"
                class="loginBox"
              >
                <v-card elevation="24">
                  <v-card-text class="pa-sm-10 pa-4">
                    <AuthForgotPwd />
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
