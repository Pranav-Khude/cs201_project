import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"

// import "../node_modules/firebase/firebase.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdTS9wzl3IDjnVGRChp52GQbkrgnLTpa0",
  authDomain: "hypertext-assassins-fcee8.firebaseapp.com",
  databaseURL: "https://hypertext-assassins-fcee8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hypertext-assassins-fcee8",
  storageBucket: "hypertext-assassins-fcee8.appspot.com",
  messagingSenderId: "273832923977",
  appId: "1:273832923977:web:b6825d1bc015f5ef7c4098",
  measurementId: "G-5QWG5LSQD8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
var docRef = db.collection("User").doc("kedar");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


