import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_Ony9N2ToPZfp0nN_sjJMvrFlaMsk2xo",
  authDomain: "jco-web.firebaseapp.com",
  databaseURL: "https://jco-web.firebaseio.com",
  projectId: "jco-web",
  storageBucket: "jco-web.appspot.com",
  messagingSenderId: "1024775045161",
  appId: "1:1024775045161:web:17fa2b50347036edbedc38"
};
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();