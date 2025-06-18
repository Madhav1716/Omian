import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  fetchAllVerses,
  fetchVersesByChapter,
  fetchVerse,
  fetchAllChapters,
  fetchChapter,
  searchVerses,
  fetchVersesWithPagination,
} from "../services/verseService";
import { GitaVerse, GitaChapter } from "../data/gitaData";

// Query keys for React Query
export const verseKeys = {
  all: ["verses"] as const,
  lists: () => [...verseKeys.all, "list"] as const,
  list: (filters: string) => [...verseKeys.lists(), { filters }] as const,
  details: () => [...verseKeys.all, "detail"] as const,
  detail: (chapter: number, verse: number) =>
    [...verseKeys.details(), chapter, verse] as const,
  byChapter: (chapter: number) =>
    [...verseKeys.all, "chapter", chapter] as const,
  chapters: ["chapters"] as const,
  chapter: (chapter: number) => [...verseKeys.chapters, chapter] as const,
  search: (query: string) => [...verseKeys.all, "search", query] as const,
};

/**
 * Hook to fetch all verses
 */
export const useAllVerses = () => {
  return useQuery({
    queryKey: verseKeys.lists(),
    queryFn: fetchAllVerses,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to fetch verses by chapter
 */
export const useVersesByChapter = (chapterNumber: number) => {
  return useQuery({
    queryKey: verseKeys.byChapter(chapterNumber),
    queryFn: () => fetchVersesByChapter(chapterNumber),
    enabled: !!chapterNumber,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to fetch a specific verse
 */
export const useVerse = (chapterNumber: number, verseNumber: number) => {
  return useQuery({
    queryKey: verseKeys.detail(chapterNumber, verseNumber),
    queryFn: () => fetchVerse(chapterNumber, verseNumber),
    enabled: !!chapterNumber && !!verseNumber,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to fetch all chapters
 */
export const useAllChapters = () => {
  return useQuery({
    queryKey: verseKeys.chapters,
    queryFn: fetchAllChapters,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

/**
 * Hook to fetch a specific chapter
 */
export const useChapter = (chapterNumber: number) => {
  return useQuery({
    queryKey: verseKeys.chapter(chapterNumber),
    queryFn: () => fetchChapter(chapterNumber),
    enabled: !!chapterNumber,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
};

/**
 * Hook to search verses
 */
export const useSearchVerses = (searchQuery: string) => {
  return useQuery({
    queryKey: verseKeys.search(searchQuery),
    queryFn: () => searchVerses(searchQuery),
    enabled: searchQuery.length > 0,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook to fetch verses with pagination
 */
export const useVersesWithPagination = (pageSize: number = 20) => {
  return useInfiniteQuery({
    queryKey: [...verseKeys.lists(), "paginated"],
    queryFn: ({ pageParam }) => fetchVersesWithPagination(pageSize, pageParam),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.lastDoc,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to get verses for a specific chapter with pagination
 */
export const useChapterVersesWithPagination = (
  chapterNumber: number,
  pageSize: number = 20
) => {
  return useInfiniteQuery({
    queryKey: [...verseKeys.byChapter(chapterNumber), "paginated"],
    queryFn: async ({ pageParam }) => {
      // For chapter-specific pagination, we need to implement a different approach
      // since Firestore doesn't support offset pagination with where clauses efficiently
      const allVerses = await fetchVersesByChapter(chapterNumber);
      const startIndex = pageParam || 0;
      const endIndex = startIndex + pageSize;
      const verses = allVerses.slice(startIndex, endIndex);

      return {
        verses,
        lastDoc: endIndex < allVerses.length ? endIndex : null,
        hasMore: endIndex < allVerses.length,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.lastDoc,
    enabled: !!chapterNumber,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
