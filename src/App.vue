<template>
  <v-app class="grey lighten-4">
    <navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar,
  },
  data: () => ({}),
};
</script>
