// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { enableIndexedDbPersistence } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASYwnBBinN7qjB_C1Yzqkd3woEUX4cj_4",
  authDomain: "mssn-b11fd.firebaseapp.com",
  projectId: "mssn-b11fd",
  storageBucket: "mssn-b11fd.appspot.com",
  messagingSenderId: "312813572987",
  appId: "1:312813572987:web:801d9ccc979aa54e2163de",
  measurementId: "G-RL9G8W4FYQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
    alert("multiple tabs open");
  } else if (err.code == "unimplemented") {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
    alert("Will not work with browser");
  }
});

export { db, analytics, auth, storage };
