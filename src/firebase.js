import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC0k9Fh0OZwIpn9VoYJsJMU4KKUxBJoZ-Q",
  authDomain: "discord-clone-c5499.firebaseapp.com",
  projectId: "discord-clone-c5499",
  storageBucket: "discord-clone-c5499.appspot.com",
  messagingSenderId: "449607684741",
  appId: "1:449607684741:web:c7d5e19a808d2d95564fec",
  measurementId: "G-2D5W405X3T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
