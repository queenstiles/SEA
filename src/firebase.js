import firebase from "firebase";

// Initialize Firebase JS SDK
// https://firebase.google.com/docs/web/setup
try {
  firebase.initializeApp({
  apiKey: "AIzaSyBHdB7g2JCEr8cHhWZdQU0N-y1Sq2lHlI0",
  authDomain: "fastreliable-delivery.firebaseapp.com",
  projectId: "fastreliable-delivery",
  storageBucket: "fastreliable-delivery.appspot.com",
  messagingSenderId: "483715298528",
  appId: "1:483715298528:web:b0115551434d7afcf38c85"
  });

} catch (err) {
  // ignore app already initialized error in snack
}
export default  firebase.apps.length ? firebase.app().options : undefined;