import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB4LrZs0eTfnhLshFrDcOnoDodREWEgvhs',
  authDomain: 'warriors-84004.firebaseapp.com',
  databaseURL: 'https://warriors-84004.firebaseio.com',
  projectId: 'warriors-84004',
  storageBucket: 'warriors-84004.appspot.com'
  // messagingSenderId: "sender-id",
  // appId: "app-id",
  // measurementId: "G-measurement-id"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
