import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtoOWWK2lQfImkppLBdNDcWK5yjC1zw-M",
  authDomain: "istagram-clone-6c1ca.firebaseapp.com",
  databaseURL: "https://istagram-clone-6c1ca.firebaseio.com",
  projectId: "istagram-clone-6c1ca",
  storageBucket: "istagram-clone-6c1ca.appspot.com",
  messagingSenderId: "500657785573",
  appId: "1:500657785573:web:ae9ebbd459380c8256620c",
  measurementId: "G-XSMTBBTZDR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
