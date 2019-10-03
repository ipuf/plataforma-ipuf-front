import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyArFK7rFTbf6rtSCXoKhPMLIFw_u9ArWRw',
  authDomain: 'form-eiv-41e86.firebaseapp.com',
  databaseURL: 'https://form-eiv-41e86.firebaseio.com',
  projectId: 'form-eiv-41e86',
  storageBucket: 'form-eiv-41e86.appspot.com',
  messagingSenderId: '394015392086',
  appId: '1:394015392086:web:8dec8d1546d192fb'
})

const db = firebase.firestore(app)
const auth = firebase.auth(app)
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { db, auth, googleProvider }
