// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP24Bufm97nNijSHEZ8TBVzX3CvTJsCJc",
  authDomain: "todo-app-75e3f.firebaseapp.com",
  databaseURL: "https://todo-app-75e3f-default-rtdb.firebaseio.com",
  projectId: "todo-app-75e3f",
  storageBucket: "todo-app-75e3f.appspot.com",
  messagingSenderId: "780871438943",
  appId: "1:780871438943:web:4fd9d1d3ee3f1b9b02c1ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);