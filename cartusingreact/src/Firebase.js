import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyD8XMYOIw3zurwAamyQLqXTM70ne-5qrGQ",
    authDomain: "cart-1c27e.firebaseapp.com",
    databaseURL: "https://cart-1c27e-default-rtdb.firebaseio.com",
    projectId: "cart-1c27e",
    storageBucket: "cart-1c27e.appspot.com",
    messagingSenderId: "885369601362",
    appId: "1:885369601362:web:8edbaeb111a64844278e8b"
  };
  
  // Initialize Firebase
var dataRef= firebase.initializeApp(firebaseConfig);
export default dataRef.database().ref();