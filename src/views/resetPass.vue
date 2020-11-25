<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md6 lg4>
      <v-card class="text-center" max-width="">
        <v-card-title primary-title class="justify-center">
          Password Reset
        </v-card-title>
        <v-card-subtitle>
          or Just <a href="/login" class="text-decoration-none">Login</a>
        </v-card-subtitle>
        <v-form ref="loginForm" v-model="isValid">
          <v-card-subtitle v-show="emailError" ref="error" class="red--text pa-0">{{
            emailError
          }}</v-card-subtitle>

          <v-text-field
            class="px-16"
            name="email"
            ref="emailField"
            v-model="email"
            :rules="emailRules"
            label="Enter your Email"
            hint="Enter a registered email"
            prepend-icon="mdi-email"
          ></v-text-field>

          <v-btn
            color="primary"
            :disabled="!isValid"
            @click="reset"
            :loading="resetLoading"
            >Reset</v-btn
          >
        </v-form>
        <v-card-subtitle>
          Need new Account?
          <a href="/register" class="text-decoration-none">Register</a>
        </v-card-subtitle>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable no-unused-vars */
import fb from '../fb'
export default {
  data() {
    return {
      email:'',
      isValid: true,
      resetLoading: false,
      emailError: '',
      emailRules: [
          v => v && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
      reset() {
          fb.auth.sendPasswordResetEmail(this.email)
            .then(() => {
                this.$store.state.snackbar = true
                this.$router.push({name: 'login'})
            }).catch((error) => {
                this.emailError = 'The email entered doesn\'t exist'
                console.log(error.message)
            })
      }
  }
};
</script>

<style scoped>
.layout {
  height: 100vh;
}
</style>
