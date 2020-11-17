<template>
  <div class="about">
    <h1 class="subheading grey--text">Project</h1>
      <v-container>
        <v-expansion-panels class="mt-2" :key="project.id" v-for="project in myProjects">
        <v-expansion-panel>
          <v-expansion-panel-header>
            {{project.title}}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">{{project.due}}</div>
               <div> {{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
         </v-expansion-panels>
      </v-container>
  </div>
</template>

<script>
 /* eslint-disable */ 
export default {
  data () {
    return {
      projects: [
        { title: 'Design a new website', person: 'Pradip Raj Poudel', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Pradip Raj Poudel', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]


    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project =>{
        return project.person === 'Pradip Raj Poudel'
      })
    }
  }
}
</script>

<style>

</style>