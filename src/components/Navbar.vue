<template>
  <nav>
    <v-toolbar
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
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
    </v-toolbar>

    <v-naviagation-drawer v-model="drawer" app class="grey">
        <p>Test</p>
    </v-naviagation-drawer>

  </nav>

</template>

<script>
export default {
    data () {
        return {
            loggedin: false,
            drawer: true,

        }
    }
};
</script>

<style></style>
