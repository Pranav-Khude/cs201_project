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
var a=document.getElementsByClassName("table");
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
var query = db.collection('User').orderBy("student_id");
var count=1
query.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      a[0].innerHTML+='<tr><th scope="row">'+count+'</th><td>'+doc.data().student_id+'</td><td>'+doc.data().name+'</td><td>'+doc.data().phone_number+'</td></tr>';
      count++;
    });
});