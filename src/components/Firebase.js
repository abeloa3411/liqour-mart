import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm06bISqzCywisZp07yRBePwV5P07eGro",
  authDomain: "liqour-mart.firebaseapp.com",
  projectId: "liqour-mart",
  storageBucket: "liqour-mart.appspot.com",
  messagingSenderId: "101796053447",
  appId: "1:101796053447:web:f9410cc13d8fd0bf49d9e2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
