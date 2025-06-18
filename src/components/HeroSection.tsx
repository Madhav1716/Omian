import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Share2 } from "lucide-react";
import { toast } from "sonner";

export const HeroSection = () => {
  const handleShareWebsite = async () => {
    const websiteUrl = window.location.origin;

    // Beautiful spiritual messages for sharing the website
    const websiteMessages = [
      "🕉 Discover the timeless wisdom of the Bhagavad Gita at Omian - your gateway to sacred knowledge and spiritual growth.",
      "🌟 Embark on a spiritual journey with Omian, where ancient wisdom meets modern understanding. Explore the Bhagavad Gita's profound teachings.",
      "🙏 Find inner peace and divine guidance at Omian. The Bhagavad Gita's sacred verses await your discovery.",
      "✨ Connect with the eternal wisdom of the Bhagavad Gita through Omian. A sanctuary for spiritual seekers.",
      "🕉 Omian brings the sacred teachings of the Bhagavad Gita to life. Begin your spiritual transformation today.",
      "🌟 Experience the divine wisdom of the Bhagavad Gita at Omian. Where every verse carries the power to transform lives.",
      "🙏 Omian - your companion on the spiritual path. Explore the Bhagavad Gita's timeless teachings and find your dharma.",
      "✨ Discover the sacred knowledge that has guided humanity for millennia. Omian makes the Bhagavad Gita accessible to all.",
    ];

    // Select a random message
    const randomMessage =
      websiteMessages[Math.floor(Math.random() * websiteMessages.length)];

    const shareText = `${randomMessage}\n\nVisit: ${websiteUrl}`;

    // Try native sharing first (mobile devices)
    if (navigator.share && navigator.canShare) {
      try {
        await navigator.share({
          title: "Omian - Guardian of Sacred Wisdom",
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
        "Website shared! Copied to clipboard with spiritual message ✨"
      );
    } catch (clipboardError) {
      console.error("Clipboard copy failed:", clipboardError);
      toast.error("Failed to share website");
    }
  };

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden mandala-pattern">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl text-saffron rotate-12">
          <img src="/om.png" alt="Om" className="h-16 w-16" />
        </div>
        <div className="absolute top-20 right-20 text-4xl text-saffron -rotate-12">
          <img src="/om.png" alt="Om" className="h-12 w-12" />
        </div>
        <div className="absolute bottom-20 left-20 text-5xl text-saffron rotate-45">
          <img src="/om.png" alt="Om" className="h-20 w-20" />
        </div>
        <div className="absolute bottom-10 right-10 text-4xl text-saffron -rotate-45">
          <img src="/om.png" alt="Om" className="h-12 w-12" />
        </div>
      </div>

      {/* Traditional Border */}
      <div className="absolute top-0 left-0 right-0 h-1 lotus-border"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 lotus-border"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 sacred-geometry"></div>

      <div className="relative max-w-4xl mx-auto text-center px-4">
        {/* Main Heading with Om Symbol */}
        <div className="mb-4 md:mb-6 animate-slide-up will-change-transform">
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <div className="text-4xl md:text-6xl text-saffron animate-pulse will-change-transform">
              <img src="/om.png" alt="Om" className="h-16 w-16" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-garamond font-bold text-indigo-black dark:text-light-cream mb-2 md:mb-3 traditional-ornament">
            Omian
            <span className="block text-2xl md:text-3xl lg:text-4xl text-saffron mt-1">
              Guardian of Sacred Wisdom
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl font-inter text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Discover the divine wisdom of Lord Krishna in the sacred battlefield
            of Kurukshetra. Journey through 700 sacred verses that illuminate
            the eternal path of dharma.
          </p>
        </div>

        {/* Sacred Quote with Traditional Styling */}
        <div className="mb-6 md:mb-8 animate-fade-in divine-glow will-change-transform">
          <div className="bg-white/60 dark:bg-indigo-black/40 p-4 md:p-8 rounded-2xl border-2 border-saffron/30 relative">
            {/* Decorative corners */}
            <div className="absolute top-2 left-2 text-saffron text-xl md:text-2xl">
              <img src="/om.png" alt="Om" className="h-8 w-8" />
            </div>
            <div className="absolute top-2 right-2 text-saffron text-xl md:text-2xl">
              <img src="/om.png" alt="Om" className="h-8 w-8" />
            </div>
            <div className="absolute bottom-2 left-2 text-saffron text-xl md:text-2xl">
              <img src="/om.png" alt="Om" className="h-8 w-8" />
            </div>
            <div className="absolute bottom-2 right-2 text-saffron text-xl md:text-2xl">
              <img src="/om.png" alt="Om" className="h-8 w-8" />
            </div>

            <blockquote className="text-base md:text-lg lg:text-xl font-garamond italic text-indigo-black dark:text-light-cream">
              <div className="text-base font-inter not-italic text-gray-600 dark:text-gray-300 mb-2">
                You have the right to perform your actions, but you are not
                entitled to the fruits of the actions.
              </div>
              <footer className="text-sm font-inter not-italic text-saffron">
                — Bhagavad Gita, Chapter 2, Verse 47
              </footer>
            </blockquote>
          </div>
        </div>

        {/* CTA Buttons with Indian styling */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in will-change-transform">
          <Link to="/chapter/1" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full bg-saffron hover:bg-saffron/90 text-white font-inter px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group divine-glow">
              Begin Sacred Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link to="/search" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-2 border-saffron text-saffron hover:bg-saffron hover:text-white font-inter px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300">
              Explore Wisdom
            </Button>
          </Link>
        </div>

        {/* Share Website Button */}
        <div className="mt-4 md:mt-6 flex justify-center animate-fade-in will-change-transform">
          <Button
            variant="ghost"
            size="lg"
            onClick={handleShareWebsite}
            className="text-saffron hover:text-saffron/90 hover:bg-saffron/10 transition-colors border border-saffron/20 hover:border-saffron/30">
            <Share2 className="h-5 w-5 mr-2" />
            Share Omian
          </Button>
        </div>

        {/* Stats with Traditional Elements */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 animate-fade-in will-change-transform">
          <div className="text-center p-4 rounded-lg bg-white/30 dark:bg-indigo-black/30 border border-saffron/20">
            <div className="text-2xl md:text-3xl lg:text-4xl font-garamond font-bold text-saffron mb-2">
              18
            </div>
            <div className="text-xs md:text-sm font-inter text-gray-600 dark:text-gray-300 uppercase tracking-wide">
              Chapters
            </div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/30 dark:bg-indigo-black/30 border border-saffron/20">
            <div className="text-2xl md:text-3xl lg:text-4xl font-garamond font-bold text-saffron mb-2">
              700
            </div>
            <div className="text-xs md:text-sm font-inter text-gray-600 dark:text-gray-300 uppercase tracking-wide">
              Sacred Verses
            </div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/30 dark:bg-indigo-black/30 border border-saffron/20">
            <div className="text-2xl md:text-3xl lg:text-4xl font-garamond font-bold text-saffron mb-2">
              50+
            </div>
            <div className="text-xs md:text-sm font-inter text-gray-600 dark:text-gray-300 uppercase tracking-wide">
              Languages
            </div>
          </div>
        </div>

        {/* Cultural Context */}
        <div className="mt-6 md:mt-8 text-center animate-fade-in will-change-transform">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-inter italic">
            "Whenever dharma declines, this eternal wisdom guides us back to
            truth"
          </p>
        </div>
      </div>
    </section>
  );
};
