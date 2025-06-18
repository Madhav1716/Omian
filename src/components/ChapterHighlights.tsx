import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ChapterHighlightsProps {
  chapter: {
    chapter: number;
    title: string;
    description: string;
    totalVerses: number;
  };
}

// Key themes for each chapter
const chapterThemes: Record<number, string[]> = {
  1: ["Duty", "Moral Dilemma", "War Ethics"],
  2: ["Knowledge", "Self-Realization", "Eternal Soul"],
  3: ["Action", "Duty", "Selfless Service"],
  4: ["Wisdom", "Renunciation", "Divine Knowledge"],
  5: ["Action", "Renunciation", "Self-Realization"],
  6: ["Meditation", "Self-Control", "Spiritual Practice"],
  7: ["Divine Knowledge", "Supreme Truth", "Devotion"],
  8: ["Eternal Soul", "Supreme Goal", "Divine Path"],
  9: ["Royal Knowledge", "Divine Secret", "Supreme Truth"],
  10: ["Divine Manifestations", "Supreme Power", "Cosmic Form"],
  11: ["Universal Form", "Divine Vision", "Cosmic Reality"],
  12: ["Devotion", "Love", "Surrender"],
  13: ["Field and Knower", "Body and Soul", "Material and Spiritual"],
  14: ["Three Gunas", "Material Nature", "Spiritual Evolution"],
  15: ["Supreme Person", "Eternal Truth", "Divine Tree"],
  16: ["Divine and Demoniac", "Virtues and Vices", "Spiritual Qualities"],
  17: ["Three Types of Faith", "Spiritual Disciplines", "Divine Worship"],
  18: ["Liberation", "Renunciation", "Supreme Goal"],
};

export const ChapterHighlights = ({ chapter }: ChapterHighlightsProps) => {
  const themes = chapterThemes[chapter.chapter] || [];

  return (
    <Card className="bg-white/60 dark:bg-indigo-black/40 border-2 border-saffron/30 rounded-2xl overflow-hidden">
      <CardContent className="p-6 md:p-8">
        {/* Chapter Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm md:text-base font-medium text-saffron">
              Chapter {chapter.chapter}
            </span>
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
              {chapter.totalVerses} Verses
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2">
            {chapter.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            {chapter.description}
          </p>
        </div>

        {/* Key Themes */}
        <div className="mb-6">
          <h3 className="text-sm md:text-base font-medium text-indigo-black dark:text-light-cream mb-3">
            Key Themes
          </h3>
          <div className="flex flex-wrap gap-2">
            {themes.map((theme, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-saffron/10 text-saffron rounded-full text-sm">
                {theme}
              </span>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex justify-end">
          <Link to={`/chapter/${chapter.chapter}`}>
            <Button className="bg-saffron hover:bg-saffron/90 text-white group">
              Explore Chapter
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
