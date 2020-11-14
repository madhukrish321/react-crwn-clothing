// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJD8coyVKXx79Stu0xPP3cJOsTdY_e6z8",
  authDomain: "crown-db-df122.firebaseapp.com",
  databaseURL: "https://crown-db-df122.firebaseio.com",
  projectId: "crown-db-df122",
  storageBucket: "crown-db-df122.appspot.com",
  messagingSenderId: "307237370999",
  appId: "1:307237370999:web:1ed19da447a6ab60415a72",
  measurementId: "G-5JVZPR4C9X"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

