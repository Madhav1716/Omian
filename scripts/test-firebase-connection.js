import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "YOUR_FIREBASE_API_KEY_HERE",
  authDomain: "omian-e3681.firebaseapp.com",
  projectId: "omian-e3681",
  storageBucket: "omian-e3681.firebasestorage.app",
  messagingSenderId: "154334045333",
  appId: "1:154334045333:web:b4c316e15729c37e3fe79c",
  measurementId: "G-KY26ZCR3ZG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testConnection() {
  try {
    console.log("Testing Firebase connection...");
    console.log("Project ID:", firebaseConfig.projectId);

    // Try to read from the verses collection
    const versesRef = collection(db, "verses");
    const querySnapshot = await getDocs(versesRef);

    console.log("✅ Firebase connection successful!");
    console.log(`Found ${querySnapshot.size} documents in 'verses' collection`);

    // Try to read from the chapters collection
    const chaptersRef = collection(db, "chapters");
    const chaptersSnapshot = await getDocs(chaptersRef);

    console.log(
      `Found ${chaptersSnapshot.size} documents in 'chapters' collection`
    );

    if (querySnapshot.size === 0 && chaptersSnapshot.size === 0) {
      console.log(
        "⚠️  Collections are empty. You may need to run the migration script."
      );
      console.log("Run: npm run migrate:firebase");
    } else {
      console.log("✅ Data is available in Firebase!");
    }
  } catch (error) {
    console.error("❌ Firebase connection failed:", error);
    console.log("Please check your Firebase configuration and security rules.");
  }
}

testConnection();
