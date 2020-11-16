<template>
  <v-app>
    <navbar/>
    <router-view/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
  name: 'app',

  data: () => ({
    
  }),
};
</script>
