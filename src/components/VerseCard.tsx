import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Share2, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";

interface VerseCardProps {
  verse: {
    verse: number;
    text: string;
    transliteration: string;
    translation: string;
    commentary?: string;
  };
  showChapterInfo?: boolean;
}

export const VerseCard = ({
  verse,
  showChapterInfo = true,
}: VerseCardProps) => {
  const [showCommentary, setShowCommentary] = useState(false);

  const handleCopy = async () => {
    const text = `${verse.text}\n\n${verse.transliteration}\n\n${verse.translation}`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Verse copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy verse");
    }
  };

  const handleShare = async () => {
    const websiteUrl = window.location.origin;
    const verseText = `${verse.text}\n\n${verse.transliteration}\n\n${verse.translation}`;

    // Beautiful spiritual messages to choose from
    const spiritualMessages = [
      "[Om] Discover timeless wisdom from the Bhagavad Gita. This sacred verse has guided seekers for centuries. May it bring light to your path.",
      "[Om] Ancient wisdom for modern life. This verse from the Bhagavad Gita offers profound insights for spiritual growth and inner peace.",
      "[Om] Sacred teachings that transcend time. This verse from the Bhagavad Gita reminds us of our true nature and purpose.",
      "[Om] Divine wisdom that illuminates the soul. This verse from the Bhagavad Gita speaks to the eternal truths of existence.",
      "[Om] A moment of spiritual reflection. This verse from the Bhagavad Gita carries the essence of dharma and divine guidance.",
      "[Om] Timeless teachings for the journey within. This verse from the Bhagavad Gita offers clarity and spiritual direction.",
      "[Om] Sacred knowledge that transforms lives. This verse from the Bhagavad Gita embodies the wisdom of the ages.",
      "[Om] Divine light in every word. This verse from the Bhagavad Gita connects us to the eternal source of wisdom.",
    ];

    // Select a random spiritual message
    const randomMessage =
      spiritualMessages[Math.floor(Math.random() * spiritualMessages.length)];

    const shareText = `${randomMessage}\n\n${verseText}\n\nExplore more sacred wisdom at: ${websiteUrl}`;

    // Debug: Log what we're trying to share
    console.log("Sharing text:", shareText);

    // Try native sharing first (mobile devices)
    if (navigator.share && navigator.canShare) {
      try {
        await navigator.share({
          title: `Sacred Verse ${verse.verse} - Omian`,
          text: shareText,
          url: websiteUrl,
        });
        return; // Exit if sharing was successful
      } catch (error) {
        console.log("Native sharing failed, falling back to clipboard");
      }
    }

    // Fallback to clipboard copy
    try {
      await navigator.clipboard.writeText(shareText);
      toast.success(
        "Beautiful verse shared! Copied to clipboard with spiritual message ✨"
      );
    } catch (clipboardError) {
      console.error("Clipboard copy failed:", clipboardError);
      toast.error("Failed to share verse");
    }
  };

  return (
    <Card className="bg-white dark:bg-indigo-black border border-saffron/10 hover:border-saffron/20 transition-colors">
      <CardContent className="p-3 sm:p-4 md:p-6">
        {/* Verse Header */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs sm:text-sm md:text-base font-medium text-saffron whitespace-nowrap">
                Verse {verse.verse}
              </span>
              {showChapterInfo && (
                <span className="text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  Chapter {Math.ceil(verse.verse / 78)}
                </span>
              )}
            </div>
            <p className="text-sm sm:text-base md:text-lg font-garamond text-indigo-black dark:text-light-cream break-words leading-relaxed">
              {verse.text}
            </p>
          </div>
          <div className="flex gap-1 ml-3 sm:ml-4 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className="h-7 w-7 sm:h-8 sm:w-8 text-gray-600 dark:text-gray-300 hover:text-saffron hover:bg-saffron/10"
              aria-label="Copy verse">
              <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="h-7 w-7 sm:h-8 sm:w-8 text-gray-600 dark:text-gray-300 hover:text-saffron hover:bg-saffron/10"
              aria-label="Share verse">
              <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        {/* Transliteration and Translation */}
        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
          <p className="text-gray-600 dark:text-gray-300 italic break-words leading-relaxed">
            {verse.transliteration}
          </p>
          <p className="text-indigo-black dark:text-light-cream break-words leading-relaxed">
            {verse.translation}
          </p>
        </div>

        {/* Commentary Toggle */}
        {verse.commentary && (
          <div className="mt-3 sm:mt-4">
            <Button
              variant="ghost"
              onClick={() => setShowCommentary(!showCommentary)}
              className="w-full flex items-center justify-between text-xs sm:text-sm md:text-base text-saffron hover:text-saffron/90 hover:bg-saffron/5 py-2 sm:py-2.5">
              <span>Commentary</span>
              {showCommentary ? (
                <ChevronUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              )}
            </Button>
            {showCommentary && (
              <div className="mt-2 sm:mt-3 p-2.5 sm:p-3 md:p-4 bg-saffron/5 rounded-lg text-xs sm:text-sm md:text-base text-indigo-black dark:text-light-cream break-words leading-relaxed">
                {verse.commentary}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
