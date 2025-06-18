# Firebase Setup Guide

## ✅ Firebase Configuration Complete!

Your Firebase configuration has been set up with your project details:

- **Project ID**: `omian-e3681`
- **Project Name**: Omian
- **Analytics**: Enabled

## 🚀 Quick Start

1. **Test Firebase Connection:**

   ```bash
   npm run test:firebase
   ```

2. **Migrate Your Data:**

   ```bash
   # Run the migration script
   npm run migrate:firebase

   # Or use individual writes if batch is too large
   npm run migrate:firebase:individual
   ```

3. **Test the Integration:**
   ```bash
   npm run dev
   # Visit: http://localhost:5173/firebase-test
   ```

## 🔧 Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **omian-e3681**
3. Enable Firestore Database if not already enabled
4. Set up security rules for Firestore

## 📋 Firestore Security Rules

Set up appropriate security rules for your Firestore database:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to verses and chapters
    match /verses/{document} {
      allow read: if true;
      allow write: if false; // Only allow reads for now
    }

    match /chapters/{document} {
      allow read: if true;
      allow write: if false; // Only allow reads for now
    }
  }
}
```

## 📊 Data Migration

### Option 1: Automated Migration (Recommended)

The migration script will automatically upload your existing data:

```bash
npm run migrate:firebase
```

### Option 2: Manual Upload via Firebase Console

1. Go to Firestore Database in Firebase Console
2. Create two collections: `verses` and `chapters`
3. Upload your verse data to the `verses` collection
4. Upload your chapter data to the `chapters` collection

## 🎯 Usage in Components

Now you can use the Firebase hooks in your components:

```tsx
import { useVersesByChapter, useAllChapters } from "../hooks/useVerses";

function ChapterView({ chapterNumber }: { chapterNumber: number }) {
  const { data: verses, isLoading, error } = useVersesByChapter(chapterNumber);
  const { data: chapters } = useAllChapters();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {verses?.map((verse) => (
        <div key={`${verse.chapter}.${verse.verse}`}>
          <h3>Verse {verse.verse}</h3>
          <p>{verse.sanskrit}</p>
          <p>{verse.english}</p>
          <p>{verse.hindi}</p>
        </div>
      ))}
    </div>
  );
}
```

## 🔍 Available Hooks

- `useAllVerses()` - Fetch all verses
- `useVersesByChapter(chapterNumber)` - Fetch verses for a specific chapter
- `useVerse(chapterNumber, verseNumber)` - Fetch a specific verse
- `useAllChapters()` - Fetch all chapters
- `useChapter(chapterNumber)` - Fetch a specific chapter
- `useSearchVerses(query)` - Search verses by text
- `useVersesWithPagination(pageSize)` - Fetch verses with pagination
- `useChapterVersesWithPagination(chapterNumber, pageSize)` - Fetch chapter verses with pagination

## 🛠️ Error Handling

The hooks include built-in error handling and loading states. Make sure to handle these in your components:

```tsx
const { data, isLoading, error, isError } = useVersesByChapter(1);

if (isLoading) return <div>Loading verses...</div>;
if (isError) return <div>Error loading verses: {error.message}</div>;
```

## 📈 Analytics

Firebase Analytics is also configured and will automatically track page views and user interactions.

## 🔄 Migration Status

To check if your data has been migrated successfully:

```bash
npm run test:firebase
```

This will show you how many documents are in each collection.
