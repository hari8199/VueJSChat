import firebase from "firebase/app";
import firestore from 'firebase/firestore';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAJnqOzD8VaNAwun2ro6rG7yfc6ZBJ-VQ0",
    authDomain: "vuechatapp-84a80.firebaseapp.com",
    databaseURL: "https://vuechatapp-84a80.firebaseio.com",
    projectId: "vuechatapp-84a80",
    storageBucket: "vuechatapp-84a80.appspot.com",
    messagingSenderId: "331130873939"
  };
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();