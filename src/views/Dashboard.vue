<template>
  <div class="home">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{on}">
          <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          </template>
          <span>By Project Name</span>
        </v-tooltip>


        <v-tooltip top>
          <template v-slot:activator="{on}">
        <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
          <v-icon small left>person</v-icon>
          <span class="caption text-lowercase">By person name</span>
        </v-btn>
        </template>
        <span>By Person Name</span>
        </v-tooltip>
      </v-layout>

      <v-card elevation="1" :key="project.id" v-for="project in projects">
        <v-layout row :class="`project ${project.status} mt-2`">
          <v-flex xs12 md6>
            <v-card-title class="grey--text body-2">
              Title
            </v-card-title>
            <v-card-subtitle>
              {{ project.title }}
            </v-card-subtitle>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <v-card-title class="grey--text body-2">
              Assigned To
            </v-card-title>
            <v-card-subtitle>
              {{ project.person }}
            </v-card-subtitle>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <v-card-title class="grey--text body-2">
              Due By
            </v-card-title>
            <v-card-subtitle>
              {{ project.due }}
            </v-card-subtitle>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <v-card-subtitle class="d-sm-flex justify-end mr-5">
              <v-chip
                id="chipContainer"
                small
                :class="`${project.status} white--text caption my-2`"
              >
                {{ project.status }}
              </v-chip>
            </v-card-subtitle>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Mr Pradip Raj Pdl",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Mr Arjun Pdl",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Mr Prashanta Pdl",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Mr SB Pdl",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    project_status(status) {
      if (status === "complete") return "rgb(42, 112, 218)";
      else if (status === "ongoing") return "orange";
      else return "rgb(238, 41, 6)";
    },
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid rgb(42, 112, 218);
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid rgb(238, 41, 6);
}
.v-chip.complete {
  background: rgb(84, 131, 201) !important;
}

.v-chip.ongoing {
  background-color: orange !important;
}

.v-chip.overdue {
  background: rgb(238, 41, 6) !important;
}
</style>
