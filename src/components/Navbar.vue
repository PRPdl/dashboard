<template>
  <nav>
    <v-app-bar
      flat
      app
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
    <v-navigation-drawer
      v-model="drawer"
      app
      hide-overlay
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-list>
        <v-list-item :key="link.text" v-for="link in links" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      loggedin: false,
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Project", route: "/project" },
        { icon: "person", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>

<style scoped>
.v-list {
  margin-left: 20px;
  margin-top: 20px;
}
</style>
