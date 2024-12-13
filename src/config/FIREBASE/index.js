
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBiIG-oCZI2oQQQ1TgnXAEnXynwhqOu77I",
    authDomain: "noteapp-abed3.firebaseapp.com",
    projectId: "noteapp-abed3",
    storageBucket: "noteapp-abed3.firebasestorage.app",
    messagingSenderId: "392235217512",
    appId: "1:392235217512:web:81d3ca66e47ecaf9bf41dd"
});

const FIREBASE = firebase;

export default FIREBASE;

