import { Link, useParams } from "react-router-dom";
import { chapters } from "@/data/gitaData";
import { Card } from "@/components/ui/card";
import { BookOpen, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface Language {
  code: string;
  name: string;
}

const availableLanguages: Language[] = [
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "te", name: "Telugu" },
  { code: "ta", name: "Tamil" },
  { code: "mr", name: "Marathi" },
];

export const ChapterSidebar = () => {
  const { chapterId } = useParams();
  const currentChapter = chapterId ? parseInt(chapterId) : 1;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const filteredChapters = chapters.filter(
    (chapter) =>
      chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLanguageToggle = (langCode: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(langCode)
        ? prev.filter((code) => code !== langCode)
        : [...prev, langCode]
    );
  };

  return (
    <div className="w-full h-full bg-transparent p-2 sm:p-3 md:p-4 lg:p-6 overflow-x-hidden">
      <div className="flex flex-col gap-3 sm:gap-4 h-full w-full">
        {/* Search Bar */}
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search chapters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-7 sm:pl-8 md:pl-9 pr-2 sm:pr-3 py-2 sm:py-2.5 md:py-3 bg-white dark:bg-indigo-black/80 border-2 border-saffron/20 rounded-lg focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all duration-200 text-xs sm:text-sm shadow-sm"
          />
          <Search className="absolute left-2 sm:left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-saffron" />
        </div>

        {/* Chapter List */}
        <div className="flex-1 space-y-1 sm:space-y-1.5 md:space-y-2 overflow-y-auto custom-scrollbar w-full">
          {filteredChapters.map((chapter) => (
            <Link
              key={chapter.chapter}
              to={`/chapter/${chapter.chapter}`}
              className={`block p-1.5 sm:p-2 md:p-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] w-full ${
                currentChapter === chapter.chapter
                  ? "bg-saffron/15 border-2 border-saffron/40 shadow-md"
                  : "hover:bg-saffron/8 border-2 border-transparent hover:border-saffron/20"
              }`}>
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 w-full">
                <div
                  className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    currentChapter === chapter.chapter
                      ? "bg-saffron text-white shadow-lg"
                      : "bg-saffron/15 text-saffron"
                  }`}>
                  <span className="font-semibold text-xs">
                    {chapter.chapter}
                  </span>
                </div>
                <div className="flex-1 min-w-0 max-w-full">
                  <h3 className="text-xs sm:text-sm font-medium text-indigo-black dark:text-light-cream truncate leading-tight">
                    {chapter.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate leading-tight mt-0.5">
                    {chapter.description}
                  </p>
                </div>
                {currentChapter === chapter.chapter && (
                  <div className="flex-shrink-0 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-saffron rounded-full animate-pulse"></div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Language Selector */}
        <div className="border-t-2 border-saffron/20 pt-2 sm:pt-3 md:pt-4 bg-white/50 dark:bg-indigo-black/50 rounded-lg p-2 sm:p-3 md:p-4 w-full">
          <h3 className="text-xs sm:text-sm font-medium text-indigo-black dark:text-light-cream mb-2 flex items-center gap-1.5 md:gap-2">
            Additional Languages
          </h3>
          <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
            {availableLanguages.map((lang) => (
              <label
                key={lang.code}
                className="flex items-center gap-2 cursor-pointer group p-1 sm:p-1.5 md:p-2 rounded-lg hover:bg-saffron/5 transition-colors duration-200">
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(lang.code)}
                  onChange={() => handleLanguageToggle(lang.code)}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded border-2 border-saffron/30 checked:bg-saffron checked:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all duration-200"
                />
                <span className="text-xs sm:text-sm text-indigo-black dark:text-light-cream group-hover:text-saffron transition-colors duration-200">
                  {lang.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
