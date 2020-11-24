<template>
  <nav>
    <v-snackbar v-model="snackbar" color="success" timeout="4000" top>
      {{ snackMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="purple" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
        <span> {{ loggedInUser.split(" ")[0] }}</span>
      </v-toolbar-title>
      <v-spacer />

      <div class="text-center">
        <v-menu offset-y transition="scale-transition">
          <template v-slot:activator="{ on }">
            <v-btn text color="gery" class="red--text" v-on="on">
              <v-icon left>expand_more</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>

          <v-list class="ml-0">
            <v-list-item
              color="primary"
              :key="link.id"
              v-for="link in links"
              router
              :to="link.route"
            >
              <v-list-item-title class="primary--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn v-if="this.loggedin" text color="red" @click="logout">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      hide-overlay
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar @click="profile" size="100">
            <img src="/avatar1.png" />
          </v-avatar>
          <p class="white--text subheading mt-1">{{ loggedInUser }}</p>
        </v-flex>
        <v-flex mt-4 mb-3>
          <popup @projectAdded="(snackbar = true), (drawer = false)" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          :key="link.text"
          v-for="link in links"
          router
          :to="link.route"
        >
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
/* eslint-disable no-unused-vars */

import Popup from "./Popup.vue";
import store from "../store";
import fb from "../fb";

export default {
  components: {
    Popup,
  },
  data() {
    return {
      loggedInUser: store.state.userProfile.name,
      loggedin: store.state.userProfile,
      drawer: false,
      snackbar: false,
      snackMessage: "New Project added.",
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "folder", text: "My Project", route: "/project" },
        { icon: "person", text: "Team", route: "/team" },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    profile() {
      
    },
  },
};
</script>

<style scoped>
.v-list {
  margin-left: 20px;
  margin-top: 20px;
}
</style>
