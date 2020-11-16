<template>
  <nav>
    <v-app-bar
      flat
      app
      absolute
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon
        color="red"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase red--text">
        <span class="font-weight-bold">TOdo:</span>
        <span>Pradip</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn v-if="this.loggedin" text color="yellow">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>

      <v-btn v-if="!this.loggedin" text color="red">
        <span>Sign In</span>
        <v-icon right>login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app absolute  class="blue">
      <p>Test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      loggedin: false,
      drawer: false,
    };
  },
};
</script>

<style></style>
