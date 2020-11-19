<template>
  <div class="about">
    <h1 class="subheading grey--text">Project</h1>
    <v-container>
      <v-expansion-panels
        class="mt-2"
        :key="project.id"
        v-for="project in myProjects"
      >
        <v-expansion-panel>
          <v-expansion-panel-header v-ripple="{ class: `primary--text` }">
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <v-card elevation="0">
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">{{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>

            <div class="d-flex">
              <v-radio-group v-model="project.status" row v-on:change="radioChange(project)">
                <v-radio label="ongoing" value="ongoing"></v-radio>
                <v-radio label="complete" value="complete"></v-radio>
                <v-radio label="overdue" value="overdue"></v-radio>
              </v-radio-group>
              <v-spacer></v-spacer>
            <v-btn text color="warning" class="mt-4" @click="deleteProject(project.id)">
              <v-icon >delete</v-icon>
            </v-btn>
            </div>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */

import db from "@/fb";
export default {
  data() {
    return {
      projects: [],
      status: "",
      
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Pradip Raj Poudel";
      });
    },
  },
  created() {
    db.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
  methods: {
    deleteProject(docId){
      db.collection('projects').doc(docId).delete()
        .then(()=>{
          this.projects= this.projects.filter((project) => {
            return project.id !== docId
          })
          console.log('Deleted: ' + docId)
        }).catch((error => {
          console.log('Error: ' + error)
        }))
    },
    radioChange(project) {
      db.collection('projects').doc(project.id).update({
        status : project.status
      }).then(()=>{
        console.log(project.id + "Changed")
      })
    }
  }
};
</script>

<style></style>
