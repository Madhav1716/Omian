import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ChapterHighlights } from "@/components/ChapterHighlights";
import { Button } from "@/components/ui/button";
import { BookOpen, Search } from "lucide-react";
import { chapters } from "@/data/gitaData";
import BackgroundShlokas from "../components/BackgroundShlokas";

const Home = () => {
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);

  // Rotate through chapters every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChapter((prev) => {
        const currentIndex = chapters.findIndex(
          (c) => c.chapter === prev.chapter
        );
        const nextIndex = (currentIndex + 1) % chapters.length;
        return chapters[nextIndex];
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <BackgroundShlokas />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Chapter Highlights */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <ChapterHighlights chapter={currentChapter} />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <Link to="/chapter/1" className="w-full">
            <div className="bg-white/60 dark:bg-indigo-black/40 p-4 sm:p-6 rounded-xl border-2 border-saffron/30 hover:border-saffron/50 transition-colors group h-full">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-saffron/10 rounded-lg group-hover:bg-saffron/20 transition-colors flex-shrink-0">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-saffron" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-garamond font-semibold text-indigo-black dark:text-light-cream mb-1 truncate">
                    Explore Chapters
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    Dive into the 18 chapters of the Bhagavad Gita
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/search" className="w-full">
            <div className="bg-white/60 dark:bg-indigo-black/40 p-4 sm:p-6 rounded-xl border-2 border-saffron/30 hover:border-saffron/50 transition-colors group h-full">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-saffron/10 rounded-lg group-hover:bg-saffron/20 transition-colors flex-shrink-0">
                  <Search className="h-5 w-5 sm:h-6 sm:w-6 text-saffron" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-garamond font-semibold text-indigo-black dark:text-light-cream mb-1 truncate">
                    Search Verses
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    Find specific verses and teachings
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-garamond font-semibold text-indigo-black dark:text-light-cream mb-3 sm:mb-4">
            Begin Your Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Discover the timeless wisdom of the Bhagavad Gita. Each chapter
            offers profound insights into life, duty, and spiritual growth.
          </p>
          <Link to="/chapter/1" className="inline-block">
            <Button className="bg-saffron hover:bg-saffron/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
              Start Reading
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
