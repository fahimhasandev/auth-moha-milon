// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Qjz0DagAdeDtwyLf17Vf9_9ajUP2xD8",
  authDomain: "auth-mola-milon-a3255.firebaseapp.com",
  projectId: "auth-mola-milon-a3255",
  storageBucket: "auth-mola-milon-a3255.firebasestorage.app",
  messagingSenderId: "375580013312",
  appId: "1:375580013312:web:f9d2d3a7047527ac5db9e5"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export default auth
