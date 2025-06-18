import React, { useState } from "react";
import {
  useVersesByChapter,
  useAllChapters,
  useSearchVerses,
} from "../hooks/useVerses";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Loader2, Search } from "lucide-react";

export const FirebaseVerseExample: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch chapters and verses using Firebase hooks
  const { data: chapters, isLoading: chaptersLoading } = useAllChapters();
  const {
    data: verses,
    isLoading: versesLoading,
    error: versesError,
  } = useVersesByChapter(selectedChapter);
  const { data: searchResults, isLoading: searchLoading } =
    useSearchVerses(searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is triggered automatically by the hook when searchQuery changes
  };

  if (chaptersLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading chapters...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">
          Bhagavad Gita - Firebase Integration
        </h1>
        <p className="text-muted-foreground">
          Fetching verses from Firebase Firestore
        </p>
      </div>

      {/* Chapter Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Chapter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {chapters?.map((chapter) => (
              <Button
                key={chapter.chapter}
                variant={
                  selectedChapter === chapter.chapter ? "default" : "outline"
                }
                onClick={() => setSelectedChapter(chapter.chapter)}
                className="text-sm">
                {chapter.chapter}. {chapter.title}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Verses</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              placeholder="Search in Sanskrit, English, Hindi, or commentary..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={searchLoading}>
              {searchLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Search Results */}
      {searchQuery && (
        <Card>
          <CardHeader>
            <CardTitle>
              Search Results for "{searchQuery}"
              {searchResults && (
                <Badge variant="secondary" className="ml-2">
                  {searchResults.length} results
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {searchLoading ? (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span className="ml-2">Searching...</span>
              </div>
            ) : searchResults && searchResults.length > 0 ? (
              <div className="space-y-4">
                {searchResults.slice(0, 5).map((verse) => (
                  <Card key={`${verse.chapter}.${verse.verse}`} className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">
                        Chapter {verse.chapter}, Verse {verse.verse}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Sanskrit:</p>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {verse.sanskrit}
                      </p>
                      <p className="text-sm font-medium">English:</p>
                      <p className="text-sm text-muted-foreground">
                        {verse.english}
                      </p>
                    </div>
                  </Card>
                ))}
                {searchResults.length > 5 && (
                  <p className="text-sm text-muted-foreground text-center">
                    Showing first 5 results. Total: {searchResults.length}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                No results found
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Chapter Verses */}
      <Card>
        <CardHeader>
          <CardTitle>
            Chapter {selectedChapter} Verses
            {verses && (
              <Badge variant="secondary" className="ml-2">
                {verses.length} verses
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {versesLoading ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2">Loading verses...</span>
            </div>
          ) : versesError ? (
            <div className="text-center text-red-500 p-4">
              Error loading verses: {versesError.message}
            </div>
          ) : verses && verses.length > 0 ? (
            <div className="space-y-4">
              {verses.slice(0, 3).map((verse) => (
                <Card key={`${verse.chapter}.${verse.verse}`} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">Verse {verse.verse}</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Sanskrit:</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {verse.sanskrit}
                    </p>
                    <p className="text-sm font-medium">English:</p>
                    <p className="text-sm text-muted-foreground">
                      {verse.english}
                    </p>
                    <p className="text-sm font-medium">Hindi:</p>
                    <p className="text-sm text-muted-foreground">
                      {verse.hindi}
                    </p>
                    <p className="text-sm font-medium">Commentary:</p>
                    <p className="text-sm text-muted-foreground">
                      {verse.commentary}
                    </p>
                  </div>
                </Card>
              ))}
              {verses.length > 3 && (
                <p className="text-sm text-muted-foreground text-center">
                  Showing first 3 verses. Total: {verses.length}
                </p>
              )}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No verses found for this chapter
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
