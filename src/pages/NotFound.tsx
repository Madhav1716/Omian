import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, BookOpen } from "lucide-react";
import BackgroundShlokas from "@/components/BackgroundShlokas";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <BackgroundShlokas />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl lg:text-8xl font-garamond font-bold text-saffron mb-4">
              404
            </div>
            <h1 className="text-2xl lg:text-3xl font-garamond font-bold text-indigo-black dark:text-light-cream mb-4">
              Lost in the Battlefield of Knowledge?
            </h1>
            <p className="text-lg font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
              The path you seek does not exist in our sacred texts. Let us guide
              you back to the divine wisdom.
            </p>
          </div>

          <div className="bg-white dark:bg-indigo-black/50 p-8 rounded-2xl border border-saffron/20 mb-8">
            <blockquote className="text-lg font-garamond italic text-indigo-black dark:text-light-cream mb-4">
              "Whenever there is a decline in dharma, the divine manifests to
              restore order"
            </blockquote>
            <p className="text-sm font-inter text-gray-600 dark:text-gray-300">
              — Omian
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto bg-saffron hover:bg-saffron/90 text-white font-inter px-6 py-3">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
            <Link to="/chapter/1">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-saffron text-saffron hover:bg-saffron hover:text-white font-inter px-6 py-3">
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Chapters
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
