import * as firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJ87_Jmh9dUiHjm79muptN-qQX5N2wkrM",
    authDomain: "wily-app-4c9e7.firebaseapp.com",
    databaseURL: "https://wily-app-4c9e7.firebaseio.com",
    projectId: "wily-app-4c9e7",
    storageBucket: "wily-app-4c9e7.appspot.com",
    messagingSenderId: "435856505946",
    appId: "1:435856505946:web:d3d1ea5d1afb92560d2c63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
