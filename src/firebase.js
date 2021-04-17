import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAm8N1oJLW-e7IdBSC8BXQ4sMlHnClfzr4",
    authDomain: "chatto-6d9a8.firebaseapp.com",
    projectId: "chatto-6d9a8",
    storageBucket: "chatto-6d9a8.appspot.com",
    messagingSenderId: "1097226774272",
    appId: "1:1097226774272:web:c787d3a427e8edd0c1b5e5",
    measurementId: "G-8RTQE3X01D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db , auth, provider} 