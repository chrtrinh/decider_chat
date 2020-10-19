import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA357c55zvoAPV1_2CnhFOG2YVvxOUL4M8",
  authDomain: "decider-chat.firebaseapp.com",
  databaseURL: "https://decider-chat.firebaseio.com",
  projectId: "decider-chat",
  storageBucket: "decider-chat.appspot.com",
  messagingSenderId: "619056383663",
  appId: "1:619056383663:web:f02abefa59d94777ce765a",
  measurementId: "G-X09C9DK2W0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
