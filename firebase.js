// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz0SqKcLlaaBsIZYswufopVHceqixXXpI",
  authDomain: "wp-clone-3c23b.firebaseapp.com",
  projectId: "wp-clone-3c23b",
  storageBucket: "wp-clone-3c23b.appspot.com",
  messagingSenderId: "44491996502",
  appId: "1:44491996502:web:73cec039fa14f504682af7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = initializeFirestore(app,{
    experimentalForceLongPolling: true,
})

export function signIn ( email, password ) {
    return signInWithEmailAndPassword( auth, email, password)
}

export function signUp( email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}