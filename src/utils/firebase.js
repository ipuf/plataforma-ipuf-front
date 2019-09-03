import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyArFK7rFTbf6rtSCXoKhPMLIFw_u9ArWRw',
  authDomain: 'form-eiv-41e86.firebaseapp.com',
  databaseURL: 'https://form-eiv-41e86.firebaseio.com',
  projectId: 'form-eiv-41e86',
  storageBucket: 'form-eiv-41e86.appspot.com',
  messagingSenderId: '394015392086',
  appId: '1:394015392086:web:8dec8d1546d192fb'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const db = firebase.firestore()
