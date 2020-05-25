// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2SLmbnU_QpZX0sne9VCPK0CVJMFJhhT4",
  authDomain: "cogito-ergo-sum-a19a5.firebaseapp.com",
  databaseURL: "https://cogito-ergo-sum-a19a5.firebaseio.com",
  projectId: "cogito-ergo-sum-a19a5",
  storageBucket: "cogito-ergo-sum-a19a5.appspot.com",
  messagingSenderId: "260716465664",
  appId: "1:260716465664:web:9ad2d5f9c68b26e86752e5",
  measurementId: "G-MWX5THMCHB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//firebase.analytics();
