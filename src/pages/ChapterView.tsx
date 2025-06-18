import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ChapterSidebar } from "@/components/ChapterSidebar";
import { VerseCard } from "@/components/VerseCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { chapters, getVersesByChapter } from "@/data/gitaData";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BackgroundShlokas from "@/components/BackgroundShlokas";

const ChapterView = () => {
  const { chapterId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentChapter = chapters.find(
    (chapter) => chapter.chapter === parseInt(chapterId || "1")
  );
  const currentChapterIndex = chapters.findIndex(
    (chapter) => chapter.chapter === parseInt(chapterId || "1")
  );
  const verses = currentChapter
    ? getVersesByChapter(currentChapter.chapter)
    : [];

  if (!currentChapter) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-garamond text-indigo-black dark:text-light-cream mb-4">
              Chapter not found
            </h1>
            <Link to="/">
              <Button className="bg-saffron hover:bg-saffron/90 text-white">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <BackgroundShlokas />
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8 lg:py-12 max-w-full overflow-x-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-4 sm:mb-6 bg-white/80 dark:bg-indigo-black/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-saffron/20">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-saffron hover:bg-saffron/10 p-2 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="Open chapter menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[260px] sm:w-[300px] p-0 bg-white/95 dark:bg-indigo-black/95 backdrop-blur-md border-r-2 border-saffron/20">
              <div className="h-full flex flex-col">
                <div className="p-3 sm:p-4 border-b border-saffron/20 bg-saffron/5">
                  <h2 className="text-base sm:text-lg font-garamond font-semibold text-indigo-black dark:text-light-cream flex items-center gap-2">
                    <span className="text-lg sm:text-xl">📖</span>
                    Chapters
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                    Navigate through the Bhagavad Gita
                  </p>
                </div>
                <div className="flex-1 overflow-hidden">
                  <ChapterSidebar />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex-1 text-center px-2">
            <h1 className="text-lg sm:text-xl font-garamond font-semibold text-indigo-black dark:text-light-cream">
              Chapter {currentChapter.chapter}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate max-w-[180px] sm:max-w-[220px] mx-auto">
              {currentChapter.title}
            </p>
          </div>
          <div className="w-10 sm:w-12" /> {/* Spacer for alignment */}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
            <div className="bg-white/80 dark:bg-indigo-black/80 backdrop-blur-sm rounded-xl shadow-md border-2 border-saffron/20 max-h-[calc(100vh-200px)] overflow-y-auto sticky top-24">
              <ChapterSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Chapter Header */}
            <div className="mb-4 sm:mb-6 md:mb-8 flex-shrink-0">
              <h1 className="hidden lg:block text-2xl md:text-3xl lg:text-4xl font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 break-words">
                Chapter {currentChapter.chapter}: {currentChapter.title}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-inter max-w-full leading-relaxed break-words">
                {currentChapter.description}
              </p>
            </div>

            {/* Verses List */}
            <div className="flex-1 overflow-y-auto pr-2 sm:pr-4 min-h-0 max-h-[calc(100vh-400px)] sm:max-h-[calc(100vh-450px)] md:max-h-[calc(100vh-500px)]">
              <div className="space-y-3 sm:space-y-4 md:space-y-6 pb-4 w-full">
                {verses.map((verse) => (
                  <VerseCard
                    key={verse.verse}
                    verse={{
                      verse: verse.verse,
                      text: verse.sanskrit,
                      transliteration: verse.english,
                      translation: verse.hindi,
                      commentary: verse.commentary,
                    }}
                    showChapterInfo={false}
                  />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-4 sm:mt-6 md:mt-8 pt-3 sm:pt-4 border-t border-saffron/10 flex-shrink-0 w-full">
              {currentChapterIndex > 0 && (
                <Link
                  to={`/chapter/${chapters[currentChapterIndex - 1].chapter}`}>
                  <Button className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 bg-saffron/10 hover:bg-saffron/20 text-saffron border border-saffron/20 hover:border-saffron/30 transition-colors rounded-lg">
                    <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Previous Chapter</span>
                    <span className="sm:hidden">Prev</span>
                  </Button>
                </Link>
              )}
              {currentChapterIndex < chapters.length - 1 && (
                <Link
                  to={`/chapter/${chapters[currentChapterIndex + 1].chapter}`}>
                  <Button className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 bg-saffron/10 hover:bg-saffron/20 text-saffron border border-saffron/20 hover:border-saffron/30 transition-colors rounded-lg">
                    <span className="hidden sm:inline">Next Chapter</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChapterView;
