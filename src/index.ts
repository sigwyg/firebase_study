import * as firebase from 'firebase/app';
import 'firebase/firestore';

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

// Initialize Firebase with a "default" Firebase project
//var defaultProject = firebase.initializeApp(firebaseConfig);

//firebase.analytics();
//const storage = firebase.storage();

const db = firebase.firestore();

// dataを追加
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
