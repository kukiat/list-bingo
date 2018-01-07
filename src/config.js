import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDXayS3UfjEXlCwaTphYaC0uaSoj01Al6E",
  authDomain: "db-akbingo.firebaseapp.com",
  databaseURL: "https://db-akbingo.firebaseio.com",
  projectId: "db-akbingo",
  storageBucket: "db-akbingo.appspot.com",
  messagingSenderId: "838780762047"
};

export default firebase.initializeApp(config)
