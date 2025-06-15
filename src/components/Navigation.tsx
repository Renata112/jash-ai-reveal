
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  onLogin: () => void;
  isLoggedIn?: boolean;
  language: "en" | "ru" | "ky";
  onLanguageChange: (language: "en" | "ru" | "ky") => void;
}

const NAV_LABELS: Record<
  "en" | "ru" | "ky",
  {
    home: string;
    worldHistory: string;
    kyrgyzstanHistory: string;
    olympicHistory: string;
    tests: string;
    saved: string;
    about: string;
    brand: string;
    login: string;
  }
> = {
  en: {
    home: "Home",
    worldHistory: "World History",
    kyrgyzstanHistory: "History of Kyrgyzstan",
    olympicHistory: "Olympic History",
    tests: "Tests",
    saved: "Saved",
    about: "About Us",
    brand: "Jash Story",
    login: "Login",
  },
  ru: {
    home: "Главная",
    worldHistory: "Всемирная история",
    kyrgyzstanHistory: "История Кыргызстана",
    olympicHistory: "Олимпийская история",
    tests: "Тесты",
    saved: "Сохранённые",
    about: "О нас",
    brand: "Жаш Стори",
    login: "Войти",
  },
  ky: {
    home: "Башкы бет",
    worldHistory: "Дүйнө тарыхы",
    kyrgyzstanHistory: "Кыргызстандын тарыхы",
    olympicHistory: "Олимпиада тарыхы",
    tests: "Тесттер",
    saved: "Сакталган",
    about: "Биз жөнүндө",
    brand: "Жаш Стори",
    login: "Кирүү",
  },
};

const Navigation = ({
  currentSection,
  onSectionChange,
  onLogin,
  isLoggedIn = false,
  language,
  onLanguageChange,
}: NavigationProps) => {
  const navItems = [
    { id: "world-history", label: NAV_LABELS[language].worldHistory },
    { id: "kyrgyzstan-history", label: NAV_LABELS[language].kyrgyzstanHistory },
    { id: "olympic-history", label: NAV_LABELS[language].olympicHistory },
    { id: "tests", label: NAV_LABELS[language].tests },
    { id: "saved", label: NAV_LABELS[language].saved },
    { id: "about", label: NAV_LABELS[language].about },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onSectionChange("home")}
          >
            <span
              className="text-gray-800"
              style={{
                fontFamily:
                  "Helvetica Neue LT Std, Helvetica, Arial, sans-serif",
                fontWeight: 750,
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {NAV_LABELS[language].brand}
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`text-gray-600 hover:text-gray-800 transition-colors ${
                  currentSection === item.id ? "text-blue-600 font-medium" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <select
            className="text-sm border border-gray-300 rounded px-2 py-1 bg-white"
            value={language}
            onChange={(e) => {
              const value = e.target.value as "en" | "ru" | "ky";
              onLanguageChange(value);
            }}
          >
            <option value="en">ENG</option>
            <option value="ru">РУС</option>
            <option value="ky">КЫР</option>
          </select>
          {isLoggedIn ? (
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium">
              U
            </div>
          ) : (
            <Button
              onClick={onLogin}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
            >
              {NAV_LABELS[language].login}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

