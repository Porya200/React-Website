import firebase from 'firebase/app'
import firebaseStorage from 'firebase/storage'

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATbrwW7j2X5odEzLPHXansEQkVbfIQUrE",
  authDomain: "react-api-test-168e7.firebaseapp.com",
  databaseURL: "https://react-api-test-168e7.firebaseio.com",
  projectId: "react-api-test-168e7",
  storageBucket: "react-api-test-168e7.appspot.com",
  messagingSenderId: "869000809526",
  appId: "1:869000809526:web:af2814c44cd367e417dc97"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export { firebaseStorage , firebase as default }