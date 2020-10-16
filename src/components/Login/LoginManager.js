import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializedFramework = () => {
    if(firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig)
    }
}


export const signInWithGoogle = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(result => {
        const userInfo = {
            email: result.user.email,
            name: result.user.displayName
        }
        return userInfo;
    })
    .catch(error => {
        return error.message;
    })
}