import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBXZSXHtJAQePctXsJtc_OLwjuNpG5vFiw",
    authDomain: "contributing-c1d55.firebaseapp.com",
    databaseURL: "https://contributing-c1d55-default-rtdb.firebaseio.com",
    projectId: "contributing-c1d55",
    storageBucket: "contributing-c1d55.appspot.com",
    messagingSenderId: "1028046922487",
    appId: "1:1028046922487:web:4f78c1ddde89faa23f29f2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();