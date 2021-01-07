import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdbu3P-eAZ0AjGe2kfS991OPn0Q24pW4c",
  authDomain: "smilingpen-b8950.firebaseapp.com",
  projectId: "smilingpen-b8950",
  storageBucket: "smilingpen-b8950.appspot.com",
  messagingSenderId: "322624356209",
  appId: "1:322624356209:web:a9b21581c064557cf500d0",
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage };
