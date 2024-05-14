import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAe1_ax64Upt9HevgVB7MQEz5q3oDM9sOo",
  authDomain: "stylesavvy-6663b.firebaseapp.com",
  projectId: "stylesavvy-6663b",
  storageBucket: "stylesavvy-6663b.appspot.com",
  messagingSenderId: "1098218291908",
  appId: "1:1098218291908:web:e86e2567b0c1b980bb3f91",
  measurementId: "G-NKL1458C4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);