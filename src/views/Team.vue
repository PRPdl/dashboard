<template>
  <div class="team">
    <h1 class="subheading grey--text">Teams</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 :key="person.id" v-for="person in team">
          <v-card elevation="0" class="text-center ma-3">
            <v-responsive class="pt-4">
                <v-avatar
                    size="111"
                    color="grey"
                >
                    <img :src="person.avatar">
                </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
              <v-card-actions>
                  <v-btn text color="grey">
                      <v-icon left>message</v-icon>
                      <span>Message</span>
                  </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      team: [
        { name: "Pradip Raj Poudel", role: "Web developer",avatar:"https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-1.png" },
        { name: "Arjun Paudel", role: "Team Lead",avatar:"https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-2.png" },
        { name: "Alfanso Cruz", role: "Sales Guru",avatar:"https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-3.png" },
        { name: "Jewish Guy", role: "Finance Manager",avatar:"https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-5.png" },
        { name: "Arabic Dude", role: "Security Guard",avatar:"https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-4.png" },
      ],
    };
  },
};
</script>

<style scoped></style>
