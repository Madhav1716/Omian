import { useState, useCallback, useEffect } from "react";
import {
  TranslationService,
  getStoredApiKey,
} from "@/services/translateService";
import { GitaVerse } from "@/data/gitaData";
import { useToast } from "@/hooks/use-toast";

interface TranslatedVerse extends GitaVerse {
  translations: Record<
    string,
    {
      english: string;
      hindi: string;
      commentary: string;
    }
  >;
}

export const useTranslation = () => {
  const [translationService, setTranslationService] =
    useState<TranslationService | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedVerses, setTranslatedVerses] = useState<
    Map<string, TranslatedVerse>
  >(new Map());
  const { toast } = useToast();

  const initializeTranslationService = useCallback((apiKey: string | null) => {
    if (apiKey) {
      setTranslationService(new TranslationService(apiKey));
    } else {
      setTranslationService(null);
    }
  }, []);

  const translateVerse = useCallback(
    async (
      verse: GitaVerse,
      targetLanguages: string[]
    ): Promise<TranslatedVerse> => {
      if (!translationService) {
        throw new Error("Translation service not initialized");
      }

      const verseKey = `${verse.chapter}-${verse.verse}`;
      const existingTranslation = translatedVerses.get(verseKey);

      if (existingTranslation) {
        // Check if we need to translate to new languages
        const newLanguages = targetLanguages.filter(
          (lang) => !existingTranslation.translations[lang]
        );
        if (newLanguages.length === 0) {
          return existingTranslation;
        }
      }

      setIsTranslating(true);

      try {
        const translations: Record<
          string,
          { english: string; hindi: string; commentary: string }
        > = existingTranslation?.translations || {};

        for (const lang of targetLanguages) {
          if (!translations[lang]) {
            console.log(`Translating verse ${verseKey} to ${lang}`);

            const [translatedEnglish, translatedHindi, translatedCommentary] =
              await translationService.translateMultiple(
                [verse.english, verse.hindi, verse.commentary],
                lang,
                "en"
              );

            translations[lang] = {
              english: translatedEnglish,
              hindi: translatedHindi,
              commentary: translatedCommentary,
            };
          }
        }

        const translatedVerse: TranslatedVerse = {
          ...verse,
          translations,
        };

        setTranslatedVerses(
          (prev) => new Map(prev.set(verseKey, translatedVerse))
        );
        return translatedVerse;
      } catch (error) {
        console.error("Translation failed:", error);
        toast({
          title: "Translation Failed",
          description:
            error instanceof Error
              ? error.message
              : "Failed to translate verse",
          variant: "destructive",
        });
        throw error;
      } finally {
        setIsTranslating(false);
      }
    },
    [translationService, translatedVerses, toast]
  );

  const getTranslatedVerse = useCallback(
    (verse: GitaVerse): TranslatedVerse | null => {
      const verseKey = `${verse.chapter}-${verse.verse}`;
      return translatedVerses.get(verseKey) || null;
    },
    [translatedVerses]
  );

  // Initialize with stored API key
  useEffect(() => {
    const storedApiKey = getStoredApiKey();
    if (storedApiKey) {
      initializeTranslationService(storedApiKey);
    }
  }, [initializeTranslationService]);

  return {
    translateVerse,
    getTranslatedVerse,
    initializeTranslationService,
    isTranslating,
    hasTranslationService: !!translationService,
  };
};
