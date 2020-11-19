import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAZ2-N_NHFlrBSpm24zt7miCeyT08Iy6pc",
    authDomain: "todo-pradip.firebaseapp.com",
    databaseURL: "https://todo-pradip.firebaseio.com",
    projectId: "todo-pradip",
    storageBucket: "todo-pradip.appspot.com",
    messagingSenderId: "1007719990363",
    appId: "1:1007719990363:web:ddf49fac4d5dc0d8516b7e",
    measurementId: "G-H0K3P8WB90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true})

  export default db;
