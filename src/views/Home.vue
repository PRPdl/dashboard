<template>
  <div class="home">
       <navbar/>
       <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar},
data: () => ({
      dialog: false,
    }),

    methods: {
      
    },
  }

</script>

<style>

</style>