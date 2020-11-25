<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md6 lg4>
      <v-card class="text-center" max-width="">
        <v-card-title primary-title class="justify-center">
          Register A New Account
        </v-card-title>
        <v-card-subtitle>
         Already Have an Account?  <a href="/login" class="text-decoration-none">Login</a>
        </v-card-subtitle>
        <v-form ref="loginForm" v-model="isValid">
          <v-card-subtitle v-show="loginError" ref="error" class="red--text">{{loginError}}</v-card-subtitle>

          <v-text-field
           name="name"
           label="Name"
           id="name"
           :rules="nameRules"
           v-model="name"
           class="px-16"
           prepend-icon="mdi-account-circle"
         ></v-text-field>

           <v-text-field
           name="email"
           label="Email"
           id="email"
           autocomplete="new-email"
           :rules="emailRules"
           v-model="email"
           class="px-16"
           prepend-icon="email"
         ></v-text-field>

          <v-text-field
            class="px-16"
            name="password"
            ref="passwordField"
            type="password"
            autocomplete="new-password"
            v-model="password"
            :rules="passwordRules"
            label="Enter your new password"
            hint="At least 8 characters"
            min="8"
            prepend-icon="mdi-lock"
          ></v-text-field>

          <v-text-field
            class="px-16"
            name="password"
            ref="passwordField"
            type="password"
            autocomplete="new-password"
            v-model="passwordConfirm"
            :rules="passwordConfirmRules"
            label="Confirm your password"
            hint="At least 8 characters"
            min="8"
            prepend-icon="mdi-lock"
          ></v-text-field>
          <v-btn
            color="primary"
            type="submit"
            :disabled="!isValid"
            @click="register"
            :loading="resetLoading"
            >Register</v-btn
          >
        </v-form>
        <v-card-subtitle>
         Need to contact Us? 
          <a href="/register" class="text-decoration-none">Contact</a>
        </v-card-subtitle>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      passwordConfirm: "",
      isValid: false,
      loginError: '',
      email: '',
      resetLoading: false,
      nameRules: [
          v => (!!v && v.length >= 3 ) || 'Mimimum 3 characters',
      ],
      passwordRules: [
         (value) => !!value || 'Please type password.',
        (value) => (!!value && value.length >= 8) || 'Minimum 8 characters',
      ],

      passwordConfirmRules: [
          (value) => !!value || 'Type confirm password',
        (value) =>
          value === this.password || 'The password confirmation does not match.'
      ],

      emailRules: [
         v => (!!v && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) )|| 'E-mail must be valid',

      ]
    };
  },
  methods: {
      register(e) {
          e.preventDefault()
          this.$store.dispatch('register', {
              name: this.name,
              email: this.email,
              password: this.password
          }).catch((error)=>{
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
