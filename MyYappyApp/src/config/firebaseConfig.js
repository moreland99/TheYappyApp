// src/config/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByxN9IuAnYD-Xc13oPfh87DkQLJEpCQMs",
  authDomain: "yappy-6abd7.firebaseapp.com",
  projectId: "yappy-6abd7",
  storageBucket: "yappy-6abd7.appspot.com",
  messagingSenderId: "896998870837",
  appId: "1:896998870837:web:7cbe77ca5b79b27f2e067c",
  measurementId: "G-DQP2PM239S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
