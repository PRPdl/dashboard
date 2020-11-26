<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md6 lg4>
     
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
