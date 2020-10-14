import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDo50NUIXYYmMhruPjqez0ZlbDIXQFhZg8",
  authDomain: "firealarm-aa64a.firebaseapp.com",
  databaseURL: "https://firealarm-aa64a.firebaseio.com",
  projectId: "firealarm-aa64a",
  storageBucket: "firealarm-aa64a.appspot.com",
  messagingSenderId: "492640753013",
  appId: "1:492640753013:web:d01b52d5599a39a436af3c",
  measurementId: "G-EW38ZXPFYV"
};

export default firebase.initializeApp(firebaseConfig);