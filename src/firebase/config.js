import firebase from 'firebase' ;
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAU5fUK0kEBRbjxO_1NDw7S4vwveqqllBw",
    authDomain: "fir-d552b.firebaseapp.com",
    projectId: "fir-d552b",
    storageBucket: "fir-d552b.appspot.com",
    messagingSenderId: "332649754544",
    appId: "1:332649754544:web:0eb8b42fd2d2523f72f075",
    measurementId: "G-HZ8V80VLYW"
  };

export  default firebase.initializeApp(firebaseConfig)