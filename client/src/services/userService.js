import http from "./httpService";
import firebase from "firebase";
import {auth,firestore} from "../firebaseconfig"
const apiEndPoint = "/users";
export function register(user) {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode)
        console.error(errorMessage);
        // ...
      });

}
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
/*const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
  event.preventDefault();
  try{
    const {user} = await auth.createUserWithEmailAndPassword(email, password);
    generateUserDocument(user, {displayName});
  }
  catch(error){
    setError('Error Signing up with email and password');
  }

  setEmail("");
  setPassword("");
  setDisplayName("");
};*/