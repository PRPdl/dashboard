<template>
  <v-app>
    <navbar/>
    <v-main class="mx-4 mb-4">
    <router-view/>
    </v-main>
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
