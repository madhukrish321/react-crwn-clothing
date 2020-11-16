// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDKQ3jVjZ3SdUXPXaGfJVGEQdyFyKIpkwk",
  authDomain: "crwn-clothing-db-fd5d1.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-fd5d1.firebaseio.com",
  projectId: "crwn-clothing-db-fd5d1",
  storageBucket: "crwn-clothing-db-fd5d1.appspot.com",
  messagingSenderId: "636050948958",
  appId: "1:636050948958:web:af451860f7c4c76fd1c5cf",
  measurementId: "G-VX8KKXRN0D"
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error(`Error occurred while saving user information in database: ${error.message}`)
    }
  }
  return userRef
}

export default firebase

