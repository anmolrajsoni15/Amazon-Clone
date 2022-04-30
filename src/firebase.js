import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGudYDsHpoF9Ke7_pNOI4L2dgMtn3ZAA4",
    authDomain: "clone-3461d.firebaseapp.com",
    projectId: "clone-3461d",
    storageBucket: "clone-3461d.appspot.com",
    messagingSenderId: "26444474509",
    appId: "1:26444474509:web:ba84d04deb2ed343071ac4",
    measurementId: "G-VJL7X8JXDX"
});

const auth = getAuth(firebaseApp);

export {auth};
