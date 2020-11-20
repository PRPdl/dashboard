<template>
  <v-dialog
    v-model="dialog"
    persistent
    :overlay="false"
    max-width="500px"
    transition="dialog-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="#00897B"
        class="white--text"
        v-bind="attrs"
        v-on="on"
        @click="dialog = true"
        >Add New Project</v-btn
      >
    </template>

    <v-card>
      <v-card-title primary-title>
        New Project
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="projectForm">
          <v-text-field
            name="name"
            label="Title"
            id="title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            name="information"
            textarea
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="formattedDate"
                label="Pick a due date."
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="inputRules"
              >
              </v-text-field>
            </template>
            <v-date-picker
              v-model="due"
              no-title
              :min="today"
              @input="menu = false"
            >
           
            </v-date-picker>
          </v-menu>
          <v-btn text color="primary" :loading="updateLoader" @click="submit"
            >Submit</v-btn
          >
          <v-btn text color="primary" @click="cancle">Cancle</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import db from '@/fb'
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      menu: false,
      due: new Date().toISOString().substr(0,10),
      today: new Date().toISOString().substr(0, 10),
      updateLoader: false,
      inputRules: [
          v => v && v.length >=5 || "Minimum of 5 characters required."
      ]
    };
  },
  methods: {
    submit(e) {
        if(this.$refs.projectForm.validate()){
            this.updateLoader = true
     const project = {
         title: this.title,
         content: this.content,
         due: this.due,
         person: 'Pradip Raj Poudel',
         status: 'ongoing'
     }

     db.collection('projects').add(project)
        .then(()=> {
            this.updateLoader=false
            this.dialog = false
            this.$emit('projectAdded')
        })

      this.$refs.projectForm.reset()
        }
        this.updateLoader=false
      e.preventDefault()
    },
    cancle(e) {
      this.dialog = false
      this.$refs.projectForm.reset()
      e.preventDefault()
    },
  },

  computed: {
    formattedDate() {
      return this.due ? new Date(this.due).toUTCString().substring(5, 16) : "";
    },
  },
};
</script>

<style></style>
