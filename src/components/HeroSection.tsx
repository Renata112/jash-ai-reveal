
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onLogin: () => void;
  language: "en" | "ru" | "ky";
}

const TEXTS = {
  en: {
    line1: "A nation that does not know",
    line2: "its history deprives itself of its roots",
    catalog: "View catalog",
    learnMore: "Learn more",
  },
  ru: {
    line1: "Нация, не знающая",
    line2: "своей истории, лишает себя корней",
    catalog: "Каталог",
    learnMore: "Узнать больше",
  },
  ky: {
    line1: "Тарыхын билбеген эл",
    line2: "өз түп тамырынан ажыратылат",
    catalog: "Каталогду көрүү",
    learnMore: "Көбүрөөк билүү",
  },
};

const HeroSection = ({ onLogin, language }: HeroSectionProps) => {
  const t = TEXTS[language];

  return (
    <div 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/lovable-uploads/77e34d25-b02d-413c-88d3-857f31657dcc.png")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-[52px] font-medium leading-tight mb-2">
            {t.line1}
          </h1>
          <h1 className="text-[52px] font-medium leading-tight">
            {t.line2}
          </h1>
        </div>
        
        <div className="flex items-center justify-center space-x-6">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg"
          >
            {t.catalog}
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full text-lg"
          >
            {t.learnMore}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
