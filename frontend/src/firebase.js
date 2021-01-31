import firebase from 'firebase/app';
import  "firebase/firestore";
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
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});

const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default signInWithGoogle;