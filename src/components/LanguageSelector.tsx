import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown, X, Settings } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import {
  SUPPORTED_LANGUAGES,
  getStoredApiKey,
  setStoredApiKey,
  removeStoredApiKey,
} from "@/services/translateService";
import { useToast } from "@/hooks/use-toast";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "te", name: "Telugu" },
  { code: "ta", name: "Tamil" },
  { code: "mr", name: "Marathi" },
  { code: "gu", name: "Gujarati" },
  { code: "kn", name: "Kannada" },
  { code: "ml", name: "Malayalam" },
  { code: "pa", name: "Punjabi" },
];

interface LanguageSelectorProps {
  selectedLanguages: string[];
  onLanguageChange: (languages: string[]) => void;
  onApiKeyChange: (apiKey: string) => void;
}

export const LanguageSelector = ({
  selectedLanguages,
  onLanguageChange,
  onApiKeyChange,
}: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState(getStoredApiKey() || "");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const { toast } = useToast();

  const handleLanguageSelect = (languageCode: string) => {
    if (selectedLanguages.includes(languageCode)) {
      onLanguageChange(
        selectedLanguages.filter((code) => code !== languageCode)
      );
    } else {
      onLanguageChange([...selectedLanguages, languageCode]);
    }
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      setStoredApiKey(apiKey.trim());
      onApiKeyChange(apiKey.trim());
      toast({
        title: "API Key Saved",
        description:
          "Your Google Translate API key has been saved successfully.",
      });
    } else {
      removeStoredApiKey();
      onApiKeyChange("");
      toast({
        title: "API Key Removed",
        description: "Your Google Translate API key has been removed.",
      });
    }
    setIsSettingsOpen(false);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full sm:w-[200px] justify-between border-saffron/20 text-indigo-black dark:text-light-cream hover:bg-saffron/5 hover:text-saffron">
            Select Languages
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full sm:w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search language..." className="h-9" />
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup className="max-h-[200px] overflow-auto">
              {languages.map((language) => (
                <CommandItem
                  key={language.code}
                  value={language.name}
                  onSelect={() => handleLanguageSelect(language.code)}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedLanguages.includes(language.code)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {language.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Selected Languages */}
      <div className="flex flex-wrap gap-2">
        {selectedLanguages.map((code) => {
          const language = languages.find((lang) => lang.code === code);
          return (
            <div
              key={code}
              className="flex items-center gap-1 px-2 py-1 bg-saffron/10 rounded-full text-xs text-saffron">
              <span>{language?.name}</span>
              <button
                onClick={() => handleLanguageSelect(code)}
                className="hover:text-saffron/80"
                aria-label={`Remove ${language?.name} language`}>
                <X className="h-3 w-3" />
              </button>
            </div>
          );
        })}
      </div>

      {/* API Key Input */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <Input
          type="password"
          placeholder="Enter Google API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full sm:w-[200px] border-saffron/20 focus:border-saffron focus:ring-2 focus:ring-saffron/20"
        />
        <Button
          onClick={handleApiKeySubmit}
          className="bg-saffron hover:bg-saffron/90 text-white">
          Save Key
        </Button>
      </div>

      {/* Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-saffron/20 hover:bg-saffron/5 hover:text-saffron"
            aria-label="Open settings">
            <Settings className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Translation Settings</DialogTitle>
            <DialogDescription>
              Configure your Google Translate API key for additional language
              translations.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Google Translate API Key
              </label>
              <div className="flex gap-2">
                <Input
                  type={showApiKey ? "text" : "password"}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your API key"
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowApiKey(!showApiKey)}
                  aria-label={showApiKey ? "Hide API key" : "Show API key"}>
                  {showApiKey ? "Hide" : "Show"}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleApiKeySubmit}
              className="bg-saffron hover:bg-saffron/90">
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
