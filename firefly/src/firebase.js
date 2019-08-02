import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    //Don't worry about the "apiKey" being public, it gives you no power
    apiKey: "AIzaSyACMmtTos8CBls03uYsnOxUfP3jYFqSML0",
    authDomain: "firefly-firebase-test.firebaseapp.com",
    databaseURL: "https://firefly-firebase-test.firebaseio.com",
    projectId: "firefly-firebase-test",
    storageBucket: "firefly-firebase-test.appspot.com",
    messagingSenderId: "881673137177",
    appId: "1:881673137177:web:361a0bbeb3336d54",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;