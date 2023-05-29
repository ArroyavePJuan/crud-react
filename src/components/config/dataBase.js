// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe1ubofTuIq8iuCtlZOwIMcKGCFBdI7qM",
  authDomain: "crudreact-88873.firebaseapp.com",
  projectId: "crudreact-88873",
  storageBucket: "crudreact-88873.appspot.com",
  messagingSenderId: "509284429761",
  appId: "1:509284429761:web:2e2742e9b42ef0d685c940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)

// export default dataBase