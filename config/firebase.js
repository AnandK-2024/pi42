import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkeQHd0XkT6Zwfrg1w9GhFHUwOInBOMX0",
    authDomain: "pi42-fbf9a.firebaseapp.com",
    projectId: "pi42-fbf9a",
    storageBucket: "pi42-fbf9a.appspot.com",
    messagingSenderId:"173387934278",
    appId:"1:173387934278:web:9494be8c31965206bab847",
};

initializeApp(firebaseConfig);

export {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};

