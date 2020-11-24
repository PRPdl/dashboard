<template>
 <v-layout align-center justify-center>
   <v-flex xs12 sm12 md6 lg4>
     <v-card class="text-center" max-width="">
       <v-card-title primary-title class="justify-center">
         Login
       </v-card-title>
       <v-card-subtitle>
         Get a <a href="#" class="text-decoration-none">New Account</a>
       </v-card-subtitle>
       <v-form ref="loginForm">
          <v-card-subtitle v-show="loginError" ref="error" class="red--text">{{ loginError }}</v-card-subtitle>

         <v-text-field
           name="email"
           label="Email"
           id="email"
           :rules="emailRules"
           v-model="email"
           class="px-16"
           prepend-icon="mdi-account-circle"
         >
         </v-text-field>
         <v-text-field
          class="px-16"
           name="password"
           ref="passwordField"
           v-model="password"
           :rules="passwordRules"
           :type="showPassword ? 'text' : 'password'"
           label="Enter your password"
           hint="At least 8 characters"
           min="8"
           prepend-icon="mdi-lock"
           :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' "
           @click:append="showPassword = !showPassword"
         ></v-text-field>
         <v-btn color="primary" @click="login" :loading="loginLoading">Login</v-btn>
       </v-form>
       <v-card-subtitle>
         Reset Password <a href="#" class="text-decoration-none">here</a>
       </v-card-subtitle>
     </v-card>
   </v-flex>
  
 </v-layout>
</template>

<script>
/* eslint-disable no-unused-vars */
import fb from '@/fb'
import store from '../store'
import router from '@/router'
export default {
name: "login",
  data: () => ({
    email: '',
    password: '',
    loginLoading: false,
    loginError: '',
    showPassword: false,
    passwordRules: [
      v => v && v.length >=8 || "Minimum 8 characters required.",
    ],
    emailRules: [
              v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
    ],
    
    
  }),
  methods: {
    login() {
      this.loginLoading = true
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      }).catch((error) => {
          console.log(error.code + error.message)
          this.loginError = error.message
          this.loginLoading = false
        })
   //  this.$refs.passwordField.reset();
        
    },
},


}

</script>

<style scoped>
.layout {
  height: 100vh;
}
</style> 