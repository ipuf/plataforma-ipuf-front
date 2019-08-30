import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCg4JtF1S8OLKvgQYos9BhoP1QUkz7-a-0",
  authDomain: "form-eiv.firebaseapp.com",
  databaseURL: "https://form-eiv.firebaseio.com",
  projectId: "form-eiv",
  storageBucket: "form-eiv.appspot.com",
  messagingSenderId: "563795085227",
  appId: "1:563795085227:web:c136892f9d2942b2"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const db = firebase.firestore()
