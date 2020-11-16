<template>
  <v-main>
      
  </v-main>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
name: "login",
  data: () => ({
    username: '',
    password: '',
    error: false
  }),
  methods: {
    login() {
      this.$store.dispatch("LOGIN", {
        username: this.username,
        password: this.password
      })
      .then(success => {
        this.$router.push("/")
      })
      .catch(error => {
        this.error = true;
      })
    }
  }
};

</script>

<style>

</style>