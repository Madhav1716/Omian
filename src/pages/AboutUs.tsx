import { Heart, BookOpen, Star, Users, Target, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import BackgroundShlokas from "@/components/BackgroundShlokas";

const AboutUs = () => {
  return (
    <Layout>
      <BackgroundShlokas />
      <div className="min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl">
                <img
                  src="/om.png"
                  alt="Om"
                  className="inline w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 align-middle"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-garamond font-bold text-indigo-black dark:text-light-cream">
                About Omian
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl">
                <img
                  src="/om.png"
                  alt="Om"
                  className="inline w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 align-middle"
                />
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed mb-2 sm:mb-3 lg:mb-4 px-2">
              Guardian of Sacred Wisdom, spreading divine knowledge and
              spiritual enlightenment through the timeless teachings of the
              Bhagavad Gita.
            </p>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-saffron font-garamond italic px-2">
              "Omian" - Om + Guardian: The Sacred Guardian of Divine Wisdom
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <Card className="bg-white/80 dark:bg-indigo-black/80 backdrop-blur-sm border-2 border-saffron/20 lotus-border p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-garamond font-bold text-indigo-black dark:text-light-cream mb-2 sm:mb-3 lg:mb-4">
                  Our Mission
                </h2>
                <div className="w-12 sm:w-16 lg:w-24 h-1 bg-saffron mx-auto rounded-full"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                    At Omian, we believe that the ancient wisdom of the Bhagavad
                    Gita holds the key to modern spiritual fulfillment. Our
                    mission is to make these sacred teachings accessible to
                    everyone, regardless of their background or spiritual
                    journey.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                    Through our AI-powered spiritual guide and comprehensive
                    study resources, we help seekers discover the path to inner
                    peace, self-realization, and divine wisdom.
                  </p>
                </div>
                <div className="text-center mt-4 lg:mt-0 flex flex-col items-center justify-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 lg:mb-4">
                    <img
                      src="/om.png"
                      alt="Om"
                      className="inline w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 align-middle"
                    />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-saffron font-garamond italic px-2 max-w-sm">
                    "Yoga is the journey of the self, through the self, to the
                    self."
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">
                    - Bhagavad Gita
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-garamond font-bold text-indigo-black dark:text-light-cream mb-2 sm:mb-3 lg:mb-4">
                Our Core Values
              </h2>
              <div className="w-12 sm:w-16 lg:w-24 h-1 bg-saffron mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20 hover:border-saffron/40 transition-colors flex flex-col justify-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-saffron" />
                </div>
                <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl">
                  Compassion
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                  We approach every seeker with love, understanding, and
                  unconditional support on their spiritual journey.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20 hover:border-saffron/40 transition-colors flex flex-col justify-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-saffron" />
                </div>
                <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl">
                  Authenticity
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                  We preserve the purity and authenticity of ancient wisdom
                  while making it relevant for modern seekers.
                </p>
              </Card>

              <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20 hover:border-saffron/40 transition-colors sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-saffron" />
                </div>
                <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl">
                  Enlightenment
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                  We guide seekers toward spiritual awakening and the
                  realization of their true divine nature.
                </p>
              </Card>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-garamond font-bold text-indigo-black dark:text-light-cream mb-2 sm:mb-3 lg:mb-4">
                What We Offer
              </h2>
              <div className="w-12 sm:w-16 lg:w-24 h-1 bg-saffron mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20 hover:border-saffron/40 transition-colors flex flex-col justify-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-saffron" />
                </div>
                <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 text-sm sm:text-base lg:text-lg">
                  AI Spiritual Guide
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                  Personalized spiritual guidance through our intelligent
                  chatbot
                </p>
              </Card>

              <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20 hover:border-saffron/40 transition-colors flex flex-col justify-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-saffron" />
                </div>
                <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 text-sm sm:text-base lg:text-lg">
                  Sacred Texts
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                  Complete Bhagavad Gita with translations and commentaries
                </p>
              </Card>

              <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20 hover:border-saffron/40 transition-colors flex flex-col justify-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-saffron" />
                </div>
                <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 text-sm sm:text-base lg:text-lg">
                  Practical Wisdom
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                  Daily spiritual practices and life applications
                </p>
              </Card>

              <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20 hover:border-saffron/40 transition-colors sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-saffron" />
                </div>
                <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 text-sm sm:text-base lg:text-lg">
                  Community
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                  Connect with fellow spiritual seekers worldwide
                </p>
              </Card>
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <Card className="bg-white/80 dark:bg-indigo-black/80 backdrop-blur-sm border-2 border-saffron/20 lotus-border p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-garamond font-bold text-indigo-black dark:text-light-cream mb-2 sm:mb-3 lg:mb-4">
                  Our Story
                </h2>
                <div className="w-12 sm:w-16 lg:w-24 h-1 bg-saffron mx-auto rounded-full"></div>
              </div>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  Omian was born from a deep reverence for the timeless wisdom
                  of the Bhagavad Gita and a vision to make these sacred
                  teachings accessible to the modern world. In an age of digital
                  transformation, we recognized the need to bridge ancient
                  wisdom with contemporary technology.
                </p>

                <p className="text-sm sm:text-base lg:text-lg">
                  Our journey began with a simple question: How can we help
                  people find inner peace and spiritual fulfillment in today's
                  fast-paced world? The answer lay in the profound teachings of
                  Lord Krishna to Arjuna - teachings that transcend time,
                  culture, and circumstance.
                </p>

                <p className="text-sm sm:text-base lg:text-lg">
                  Today, Omian serves as a digital sanctuary where seekers from
                  all walks of life can explore the depths of spiritual wisdom,
                  guided by our AI companion and comprehensive study resources.
                  We believe that everyone deserves access to the transformative
                  power of divine knowledge.
                </p>
              </div>
            </Card>
          </div>

          {/* Sanskrit Quote */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Card className="bg-gradient-to-r from-saffron/10 to-saffron/5 border-2 border-saffron/20 p-4 sm:p-6 lg:p-8">
              <div className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 lg:mb-4">
                <img
                  src="/om.png"
                  alt="Om"
                  className="inline w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 align-middle"
                />
              </div>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-indigo-black dark:text-light-cream font-garamond mb-1 sm:mb-2 leading-relaxed">
                सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः।
              </p>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-indigo-black dark:text-light-cream font-garamond mb-2 sm:mb-3 lg:mb-4 leading-relaxed">
                सर्वे भद्राणि पश्यन्तु, मा कश्चिद् दुःखभाग्भवेत्॥
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 font-inter leading-relaxed px-2">
                "May all beings be happy, may all beings be free from illness.
                May no one suffer."
              </p>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <Card className="bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20 p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-garamond font-bold text-indigo-black dark:text-light-cream mb-2 sm:mb-3 lg:mb-4">
                Begin Your Spiritual Journey
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 font-inter mb-3 sm:mb-4 lg:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
                Join thousands of seekers who have found peace, wisdom, and
                spiritual growth through Omian. Start your journey today with
                our AI spiritual guide.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 lg:gap-4">
                <a
                  href="/chatbot"
                  className="bg-saffron hover:bg-saffron/80 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-inter transition-colors divine-glow text-xs sm:text-sm lg:text-base">
                  Chat with Omian
                </a>
                <a
                  href="/chapter/1"
                  className="border-2 border-saffron/20 text-saffron hover:bg-saffron/10 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-inter transition-colors text-xs sm:text-sm lg:text-base">
                  Explore Chapters
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
