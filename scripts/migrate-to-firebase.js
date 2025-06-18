import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  writeBatch,
  doc,
} from "firebase/firestore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Firebase configuration - using your actual config
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

// Read the JSON data
const versesPath = path.join(__dirname, "../src/data/gita.json");
const gitaDataPath = path.join(__dirname, "../src/data/gitaData.ts");

async function migrateData() {
  try {
    console.log("Starting data migration to Firebase...");

    // Read verses data
    const versesData = JSON.parse(fs.readFileSync(versesPath, "utf8"));
    console.log(`Found ${versesData.length} verses to migrate`);

    // Read chapters data from the TypeScript file
    const gitaDataContent = fs.readFileSync(gitaDataPath, "utf8");

    // Extract chapters array using regex (simple approach)
    const chaptersMatch = gitaDataContent.match(
      /export const chapters: GitaChapter\[\] = (\[[\s\S]*?\];)/
    );
    if (!chaptersMatch) {
      throw new Error("Could not extract chapters data from gitaData.ts");
    }

    // Evaluate the chapters array (in a real scenario, you might want to use a proper parser)
    const chaptersCode = chaptersMatch[1].replace(/GitaChapter\[\]/, "");
    const chapters = eval(chaptersCode);
    console.log(`Found ${chapters.length} chapters to migrate`);

    // Use batch writes for better performance
    const batch = writeBatch(db);

    // Migrate chapters
    console.log("Migrating chapters...");
    for (const chapter of chapters) {
      const chapterRef = doc(collection(db, "chapters"));
      batch.set(chapterRef, chapter);
    }

    // Migrate verses
    console.log("Migrating verses...");
    for (const verse of versesData) {
      const verseRef = doc(collection(db, "verses"));
      batch.set(verseRef, verse);
    }

    // Commit the batch
    await batch.commit();
    console.log("Migration completed successfully!");
    console.log(
      `Migrated ${chapters.length} chapters and ${versesData.length} verses`
    );
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

// Alternative approach using individual writes (if batch is too large)
async function migrateDataIndividual() {
  try {
    console.log("Starting individual data migration to Firebase...");

    // Read verses data
    const versesData = JSON.parse(fs.readFileSync(versesPath, "utf8"));
    console.log(`Found ${versesData.length} verses to migrate`);

    // Read chapters data
    const gitaDataContent = fs.readFileSync(gitaDataPath, "utf8");
    const chaptersMatch = gitaDataContent.match(
      /export const chapters: GitaChapter\[\] = (\[[\s\S]*?\];)/
    );
    if (!chaptersMatch) {
      throw new Error("Could not extract chapters data from gitaData.ts");
    }

    const chaptersCode = chaptersMatch[1].replace(/GitaChapter\[\]/, "");
    const chapters = eval(chaptersCode);
    console.log(`Found ${chapters.length} chapters to migrate`);

    // Migrate chapters
    console.log("Migrating chapters...");
    for (const chapter of chapters) {
      await addDoc(collection(db, "chapters"), chapter);
      console.log(`Migrated chapter ${chapter.chapter}: ${chapter.title}`);
    }

    // Migrate verses
    console.log("Migrating verses...");
    for (let i = 0; i < versesData.length; i++) {
      const verse = versesData[i];
      await addDoc(collection(db, "verses"), verse);

      if ((i + 1) % 50 === 0) {
        console.log(`Migrated ${i + 1}/${versesData.length} verses`);
      }
    }

    console.log("Migration completed successfully!");
    console.log(
      `Migrated ${chapters.length} chapters and ${versesData.length} verses`
    );
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

// Check if we should use individual writes
const useIndividual = process.argv.includes("--individual");

if (useIndividual) {
  migrateDataIndividual();
} else {
  migrateData();
}
