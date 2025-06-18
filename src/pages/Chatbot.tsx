import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Sparkles,
  BookOpen,
  Heart,
  Star,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Layout } from "@/components/Layout";
import BackgroundShlokas from "@/components/BackgroundShlokas";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

async function fetchOpenAIResponse(
  userInput: string,
  messages: Message[]
): Promise<string> {
  const apiUrl = "/api/openai-chat";
  // Prepare the conversation history for the backend
  const openAIMessages = [
    {
      role: "system",
      content:
        "You are Omian, a spiritual guide and expert on the Bhagavad Gita. Answer questions with wisdom, referencing the Gita and spiritual concepts. Be concise, clear, and compassionate. When answering, cite relevant Bhagavad Gita verses in the format [Chapter:Verse], e.g., [2:47].",
    },
    ...messages.map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    })),
    { role: "user", content: userInput },
  ];

  const body = {
    messages: openAIMessages,
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch response from Omian backend");
  }

  const data = await response.json();
  return (
    data.choices?.[0]?.message?.content?.trim() ||
    "Sorry, I couldn't find an answer."
  );
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Namaste! I am Omian, your spiritual guide, ready to help you explore the wisdom of the Bhagavad Gita. Ask me anything about the teachings, verses, or spiritual concepts.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const botText = await fetchOpenAIResponse(inputValue, [
        ...messages,
        userMessage,
      ]);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          text: "Sorry, there was an error connecting to the wisdom source. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateBotResponse = (userInput: string): string => {
    const responses = [
      "The Bhagavad Gita teaches us that true wisdom comes from understanding our dharma (duty) and performing it with devotion. As Krishna says, 'Yoga is the journey of the self, through the self, to the self.'",
      "In the Gita, Lord Krishna emphasizes the importance of karma yoga - performing our duties without attachment to results. This is the path to inner peace and spiritual growth.",
      "The concept of 'Atman' (soul) and 'Brahman' (supreme consciousness) is central to the Gita's teachings. Understanding this relationship helps us transcend the material world.",
      "Meditation and self-discipline are key practices mentioned in the Gita. Through regular practice, we can control our mind and achieve spiritual enlightenment.",
      "The Gita teaches us about the three gunas (qualities) - sattva (goodness), rajas (passion), and tamas (ignorance). Striving for sattva leads to spiritual progress.",
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Layout>
      <BackgroundShlokas />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl">
              <img
                src="/om.png"
                alt="Om"
                className="inline w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 align-middle"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-garamond font-bold text-indigo-black dark:text-light-cream">
              Omian the Spiritual Guide
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl">
              <img
                src="/om.png"
                alt="Om"
                className="inline w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 align-middle"
              />
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 font-inter max-w-2xl mx-auto leading-relaxed">
            Ask questions about the Bhagavad Gita, spiritual wisdom, and divine
            teachings
          </p>
        </div>

        {/* Chat Container */}
        <Card className="bg-white/90 dark:bg-indigo-black/90 backdrop-blur-sm border-2 border-saffron/20 lotus-border shadow-xl">
          <div className="h-[500px] sm:h-[550px] md:h-[600px] flex flex-col">
            {/* Messages Area */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}>
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                      message.sender === "user"
                        ? "bg-saffron text-white rounded-br-md"
                        : "bg-white/80 dark:bg-indigo-black/80 text-gray-800 dark:text-gray-200 rounded-bl-md border border-gray-200/50 dark:border-gray-700/50"
                    }`}>
                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/80 dark:bg-indigo-black/80 text-gray-800 dark:text-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-200/50 dark:border-gray-700/50 max-w-[85%] sm:max-w-[75%]">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-saffron rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-saffron rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}></div>
                        <div
                          className="w-2 h-2 bg-saffron rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Omian is thinking...
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-saffron/20 p-3 sm:p-4">
              <div className="flex gap-2 sm:gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about spiritual wisdom, Bhagavad Gita teachings..."
                  className="flex-1 border-2 border-saffron/20 focus:border-saffron/40 bg-white/60 dark:bg-indigo-black/60 text-indigo-black dark:text-light-cream placeholder:text-gray-600 dark:text-gray-300 text-sm sm:text-base"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-saffron hover:bg-saffron/80 text-white border-2 border-saffron/20 divine-glow px-3 sm:px-4 py-2 sm:py-2">
                  <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>

              {/* Quick Suggestions */}
              <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
                {[
                  "What is karma yoga?",
                  "Explain dharma",
                  "Teach me meditation",
                  "What are the gunas?",
                ].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue(suggestion)}
                    disabled={isLoading}
                    className="text-xs sm:text-sm border-saffron/30 text-saffron hover:bg-saffron/10 hover:border-saffron/50 bg-white/40 dark:bg-indigo-black/40 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex-shrink-0">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-saffron flex-shrink-0" />
                    <span className="hidden sm:inline">{suggestion}</span>
                    <span className="sm:hidden text-xs">
                      {suggestion.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Features */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20">
            <div className="flex justify-center mb-2 sm:mb-3">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-saffron" />
            </div>
            <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 text-sm sm:text-base">
              Sacred Knowledge
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              Access wisdom from the Bhagavad Gita and ancient spiritual texts
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20">
            <div className="flex justify-center mb-2 sm:mb-3">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-saffron" />
            </div>
            <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 text-sm sm:text-base">
              Spiritual Guidance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              Get personalized guidance for your spiritual journey
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center bg-white/60 dark:bg-indigo-black/60 border-2 border-saffron/20 sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center mb-2 sm:mb-3">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-saffron" />
            </div>
            <h3 className="font-garamond font-semibold text-indigo-black dark:text-light-cream mb-2 text-sm sm:text-base">
              Divine Wisdom
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              Understand deep spiritual concepts and their practical
              applications
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;
