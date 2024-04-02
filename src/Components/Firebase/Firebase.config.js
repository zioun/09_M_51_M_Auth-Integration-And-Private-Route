// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5mIRLQ5XnehEkw6eV4cedxqR8lImPuyo",
  authDomain: "auth-integration-and-private-r.firebaseapp.com",
  projectId: "auth-integration-and-private-r",
  storageBucket: "auth-integration-and-private-r.appspot.com",
  messagingSenderId: "840531358297",
  appId: "1:840531358297:web:a9aeab5fadf2ed6ef03748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;