import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "omian-e3681.firebaseapp.com",
  projectId: "omian-e3681",
  storageBucket: "omian-e3681.firebasestorage.app",
  messagingSenderId: "154334045333",
  appId: "1:154334045333:web:b4c316e15729c37e3fe79c",
  measurementId: "G-KY26ZCR3ZG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
