import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  getDoc,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "./firebase";
import { GitaVerse, GitaChapter } from "../data/gitaData";

// Collection names in Firestore
const VERSES_COLLECTION = "verses";
const CHAPTERS_COLLECTION = "chapters";

/**
 * Fetch all verses from Firebase
 */
export const fetchAllVerses = async (): Promise<GitaVerse[]> => {
  try {
    const versesRef = collection(db, VERSES_COLLECTION);
    const q = query(versesRef, orderBy("chapter"), orderBy("verse"));
    const querySnapshot = await getDocs(q);

    const verses: GitaVerse[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      verses.push({
        chapter: data.chapter,
        verse: data.verse,
        sanskrit: data.sanskrit,
        english: data.english,
        hindi: data.hindi,
        commentary: data.commentary,
      });
    });

    return verses;
  } catch (error) {
    console.error("Error fetching all verses:", error);
    throw error;
  }
};

/**
 * Fetch verses by chapter number
 */
export const fetchVersesByChapter = async (
  chapterNumber: number
): Promise<GitaVerse[]> => {
  try {
    const versesRef = collection(db, VERSES_COLLECTION);
    const q = query(
      versesRef,
      where("chapter", "==", chapterNumber),
      orderBy("verse")
    );
    const querySnapshot = await getDocs(q);

    const verses: GitaVerse[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      verses.push({
        chapter: data.chapter,
        verse: data.verse,
        sanskrit: data.sanskrit,
        english: data.english,
        hindi: data.hindi,
        commentary: data.commentary,
      });
    });

    return verses;
  } catch (error) {
    console.error(`Error fetching verses for chapter ${chapterNumber}:`, error);
    throw error;
  }
};

/**
 * Fetch a specific verse by chapter and verse number
 */
export const fetchVerse = async (
  chapterNumber: number,
  verseNumber: number
): Promise<GitaVerse | null> => {
  try {
    const versesRef = collection(db, VERSES_COLLECTION);
    const q = query(
      versesRef,
      where("chapter", "==", chapterNumber),
      where("verse", "==", verseNumber)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data();

    return {
      chapter: data.chapter,
      verse: data.verse,
      sanskrit: data.sanskrit,
      english: data.english,
      hindi: data.hindi,
      commentary: data.commentary,
    };
  } catch (error) {
    console.error(
      `Error fetching verse ${chapterNumber}.${verseNumber}:`,
      error
    );
    throw error;
  }
};

/**
 * Fetch all chapters from Firebase
 */
export const fetchAllChapters = async (): Promise<GitaChapter[]> => {
  try {
    const chaptersRef = collection(db, CHAPTERS_COLLECTION);
    const q = query(chaptersRef, orderBy("chapter"));
    const querySnapshot = await getDocs(q);

    const chapters: GitaChapter[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      chapters.push({
        chapter: data.chapter,
        title: data.title,
        description: data.description,
        totalVerses: data.totalVerses,
      });
    });

    return chapters;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
};

/**
 * Fetch a specific chapter by chapter number
 */
export const fetchChapter = async (
  chapterNumber: number
): Promise<GitaChapter | null> => {
  try {
    const chaptersRef = collection(db, CHAPTERS_COLLECTION);
    const q = query(chaptersRef, where("chapter", "==", chapterNumber));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data();

    return {
      chapter: data.chapter,
      title: data.title,
      description: data.description,
      totalVerses: data.totalVerses,
    };
  } catch (error) {
    console.error(`Error fetching chapter ${chapterNumber}:`, error);
    throw error;
  }
};

/**
 * Search verses by text in any language
 */
export const searchVerses = async (
  searchQuery: string
): Promise<GitaVerse[]> => {
  try {
    const versesRef = collection(db, VERSES_COLLECTION);
    const querySnapshot = await getDocs(versesRef);

    const verses: GitaVerse[] = [];
    const lowerQuery = searchQuery.toLowerCase();

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const verse: GitaVerse = {
        chapter: data.chapter,
        verse: data.verse,
        sanskrit: data.sanskrit,
        english: data.english,
        hindi: data.hindi,
        commentary: data.commentary,
      };

      // Search in all text fields
      if (
        verse.sanskrit.toLowerCase().includes(lowerQuery) ||
        verse.english.toLowerCase().includes(lowerQuery) ||
        verse.hindi.toLowerCase().includes(lowerQuery) ||
        verse.commentary.toLowerCase().includes(lowerQuery)
      ) {
        verses.push(verse);
      }
    });

    return verses;
  } catch (error) {
    console.error("Error searching verses:", error);
    throw error;
  }
};

/**
 * Fetch verses with pagination
 */
export const fetchVersesWithPagination = async (
  pageSize: number = 20,
  lastDoc?: QueryDocumentSnapshot<DocumentData>
): Promise<{
  verses: GitaVerse[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
}> => {
  try {
    const versesRef = collection(db, VERSES_COLLECTION);
    let q = query(
      versesRef,
      orderBy("chapter"),
      orderBy("verse"),
      limit(pageSize)
    );

    if (lastDoc) {
      q = query(
        versesRef,
        orderBy("chapter"),
        orderBy("verse"),
        startAfter(lastDoc),
        limit(pageSize)
      );
    }

    const querySnapshot = await getDocs(q);

    const verses: GitaVerse[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      verses.push({
        chapter: data.chapter,
        verse: data.verse,
        sanskrit: data.sanskrit,
        english: data.english,
        hindi: data.hindi,
        commentary: data.commentary,
      });
    });

    const lastVisible =
      querySnapshot.docs[querySnapshot.docs.length - 1] || null;

    return { verses, lastDoc: lastVisible };
  } catch (error) {
    console.error("Error fetching verses with pagination:", error);
    throw error;
  }
};
