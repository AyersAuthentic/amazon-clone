import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPBNRbYYfTWSPJKTDIsqR5gHo2uiHAM_Y",
  authDomain: "clone-8b4e5.firebaseapp.com",
  projectId: "clone-8b4e5",
  storageBucket: "clone-8b4e5.appspot.com",
  messagingSenderId: "765937735813",
  appId: "1:765937735813:web:98d9ebdfee1f0aa33d71ec",
  measurementId: "G-KK8XE4YSEZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // real-time db in firebase
const auth = firebase.auth(); // gives a variable we can use all the signing in, etc

export { db, auth };
