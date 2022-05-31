import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDqRvse1UQkzfSgvSlfCNNCtb2TqIaqhFY",
    authDomain: "project71-75e46.firebaseapp.com",
    databaseURL: "https://project71-75e46-default-rtdb.firebaseio.com",
    projectId: "project71-75e46",
    storageBucket: "project71-75e46.appspot.com",
    messagingSenderId: "997802006474",
    appId: "1:997802006474:web:11cc8d1ece0e08051f6133"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
