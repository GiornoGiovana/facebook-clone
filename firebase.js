import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCHJSxlU_2uqKnFZTk_kZBCYVjpJm4UGE",
  authDomain: "facebook-clone-f4f96.firebaseapp.com",
  projectId: "facebook-clone-f4f96",
  storageBucket: "facebook-clone-f4f96.appspot.com",
  messagingSenderId: "1082002593829",
  appId: "1:1082002593829:web:fa89bcfa8e65dc01b3c7cc",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
