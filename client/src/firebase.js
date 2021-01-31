import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyDfK_gRqMrsM6AW1urI9XenWz4b3UfZBS8",
  authDomain: "kynect-job-search-cf702.firebaseapp.com",
  projectId: "kynect-job-search-cf702",
  storageBucket: "kynect-job-search-cf702.appspot.com",
  messagingSenderId: "836058014464",
  appId: "1:836058014464:web:53b0f4e130003320a049e5",
  measurementId: "G-L1RMQX84QJ"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
/** To sign up using google
* Link for developer documentation (https://firebase.google.com/docs/auth/web/google-signin)
*/

if (!firebase.apps.length) {
  firebase.initializeApp({});
} else {
  firebase.app(); // if already initialized, use that one
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});



const signInWithGoogle = () => auth.signInWithPopup(provider).then((result) => {
  /** @type {firebase.auth.OAuthCredential} */
  var credential = result.credential;
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  window.location.replace("/resume");
  // ...
}).catch((error) => {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

export default signInWithGoogle;