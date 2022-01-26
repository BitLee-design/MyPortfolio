// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-4YdTx_DKntbb7gYsKgSZtl-NeRbKBBg",
  authDomain: "myportfolio-2a77c.firebaseapp.com",
  projectId: "myportfolio-2a77c",
  storageBucket: "myportfolio-2a77c.appspot.com",
  messagingSenderId: "637348777405",
  appId: "1:637348777405:web:6aa01d788d969d591a96d4",
  measurementId: "G-4KRD8LFFD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
