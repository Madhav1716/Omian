import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  BookOpen,
  Home,
  Menu,
  X,
  MessageCircle,
  Info,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Debug: Log what we're trying to share
    console.log("Sharing website:", shareText);

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
    <div className="min-h-screen bg-light-cream dark:bg-indigo-black transition-colors duration-300">
      {/* Navigation Header with Indian styling */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-indigo-black/90 backdrop-blur-sm border-b-2 border-saffron/20 lotus-border">
        {/* Traditional top border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-saffron to-transparent"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Om symbol */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/om.png" alt="Om" className="h-8 w-8" />
              <div>
                <div className="text-base sm:text-lg font-garamond font-semibold text-indigo-black dark:text-light-cream">
                  Omian
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 hidden sm:block">
                  Guardian of Sacred Wisdom
                </div>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors relative ${
                  location.pathname === "/"
                    ? "bg-saffron/10 text-saffron divine-glow"
                    : "text-indigo-black dark:text-light-cream hover:bg-saffron/5"
                }`}>
                <Home className="h-4 w-4" />
                <span className="font-inter">Home</span>
              </Link>
              <Link
                to="/chapter/1"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors relative ${
                  location.pathname.startsWith("/chapter")
                    ? "bg-saffron/10 text-saffron divine-glow"
                    : "text-indigo-black dark:text-light-cream hover:bg-saffron/5"
                }`}>
                <BookOpen className="h-4 w-4" />
                <span className="font-inter">Chapters</span>
              </Link>
              <Link
                to="/chatbot"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors relative ${
                  location.pathname === "/chatbot"
                    ? "bg-saffron/10 text-saffron divine-glow"
                    : "text-indigo-black dark:text-light-cream hover:bg-saffron/5"
                }`}>
                <MessageCircle className="h-4 w-4" />
                <span className="font-inter">Chatbot</span>
              </Link>
              <Link
                to="/about"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors relative ${
                  location.pathname === "/about"
                    ? "bg-saffron/10 text-saffron divine-glow"
                    : "text-indigo-black dark:text-light-cream hover:bg-saffron/5"
                }`}>
                <Info className="h-4 w-4" />
                <span className="font-inter">About</span>
              </Link>
            </nav>

            {/* Search Bar with traditional styling */}
            <div className="hidden lg:flex items-center gap-2 bg-white dark:bg-indigo-black/50 rounded-xl border-2 border-saffron/20 px-3 py-2 w-64 divine-glow">
              <Search className="h-4 w-4 text-saffron" />
              <Input
                placeholder="Search verses..."
                className="border-0 bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-600 dark:text-gray-300 h-8"
              />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-saffron hover:bg-saffron/10 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden mt-3 pt-3 border-t border-saffron/20 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "opacity-100 max-h-[400px]"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
                  location.pathname === "/"
                    ? "bg-saffron/10 text-saffron divine-glow"
                    : "text-indigo-black dark:text-light-cream hover:bg-saffron/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}>
                <Home className="h-5 w-5" />
                <span className="font-inter text-base">Home</span>
              </Link>
              <Link
                to="/chapter/1"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
                  location.pathname.startsWith("/chapter")
                    ? "bg-saffron/10 text-saffron divine-glow"
                    : "text-indigo-black dark:text-light-cream hover:bg-saffron/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}>
                <BookOpen className="h-5 w-5" />
                <span className="font-inter text-base">Chapters</span>
              </Link>
              <Link
                to="/chatbot"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
                  location.pathname === "/chatbot"
                    ? "bg-saffron/10 text-saffron divine-glow"
                    : "text-indigo-black dark:text-light-cream hover:bg-saffron/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}>
                <MessageCircle className="h-5 w-5" />
                <span className="font-inter text-base">Chatbot</span>
              </Link>
              <Link
                to="/about"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
                  location.pathname === "/about"
                    ? "bg-saffron/10 text-saffron divine-glow"
                    : "text-indigo-black dark:text-light-cream hover:bg-saffron/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}>
                <Info className="h-5 w-5" />
                <span className="font-inter text-base">About</span>
              </Link>
            </nav>
            {/* Mobile Search */}
            <div className="mt-4 flex items-center gap-2 bg-white dark:bg-indigo-black/50 rounded-xl border-2 border-saffron/20 px-3 py-2 divine-glow">
              <Search className="h-4 w-4 text-saffron" />
              <Input
                placeholder="Search verses..."
                className="border-0 bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-600 dark:text-gray-300 h-8"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

      {/* Footer with traditional elements */}
      <footer className="border-t-2 border-saffron/20 bg-white/50 dark:bg-indigo-black/50 mt-16 lotus-border">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            {/* Decorative elements */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src="/om.png" alt="Om" className="h-8 w-8" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-inter text-sm mb-2">
              सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः।
            </p>
            <p className="text-gray-600 dark:text-gray-300 font-inter text-sm mb-2">
              सर्वे भद्राणि पश्यन्तु, मा कश्चिद् दुःखभाग्भवेत्॥
            </p>

            <p className="text-gray-600 dark:text-gray-300 font-inter text-sm mb-2">
              May all beings be happy, may all beings be free from illness
            </p>

            <div className="border-t border-saffron/20 pt-4">
              <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                <p>© 2025 Omian</p>
                <p className="mt-1">Spreading divine wisdom | Dharma</p>

                {/* Share Website Button */}
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShareWebsite}
                    className="text-saffron hover:text-saffron/90 hover:bg-saffron/10 transition-colors">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Omian
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
