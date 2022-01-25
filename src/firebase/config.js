import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAobqZCIhFymofoxEuHZHyXa_TBn8p9jo8",
    authDomain: "music-playlist-f2619.firebaseapp.com",
    projectId: "music-playlist-f2619",
    storageBucket: "music-playlist-f2619.appspot.com",
    messagingSenderId: "812115542767",
    appId: "1:812115542767:web:b397fbed3ca6017b5ed11a"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }