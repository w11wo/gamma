import firebase from 'firebase'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCP59WMhJHUcX7knTcPr5sc_XBX6KSGIRs",
    authDomain: "gamma-bf0b7.firebaseapp.com",
    databaseURL: "https://gamma-bf0b7.firebaseio.com",
    projectId: "gamma-bf0b7",
    storageBucket: "gamma-bf0b7.appspot.com",
    messagingSenderId: "121515646444",
    appId: "1:121515646444:web:25195c7815113bb0"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const storage = firebase.storage()

export { db , storage}