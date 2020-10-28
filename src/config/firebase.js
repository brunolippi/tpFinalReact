import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAENJo4e9vxpNprojNmZGdzJFZypKyMnbY",
    authDomain: "react-utn-62ba7.firebaseapp.com",
    databaseURL: "https://react-utn-62ba7.firebaseio.com",
    projectId: "react-utn-62ba7",
    storageBucket: "react-utn-62ba7.appspot.com",
    messagingSenderId: "651822119677",
    appId: "1:651822119677:web:9717f2d0e0d61333709c94",
    measurementId: "G-Z8VXWPJ44Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({
      timestampsInSnapshots: true
  })
  firebase.db = db;
  firebase.auth = firebase.auth()
  firebase.analytics();

  export default firebase