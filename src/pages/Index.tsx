
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/AuthModal";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ResourcesSection from "@/components/ResourcesSection";
import ArticlesSection from "@/components/ArticlesSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const [authModal, setAuthModal] = useState<'login' | 'register' | 'recovery' | null>(null);
  const [currentSection, setCurrentSection] = useState('home');

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'kyrgyzstan-history':
        return <ArticlesSection title="History of Kyrgyzstan" />;
      case 'olympic-history':
        return <ArticlesSection title="Olympic History" />;
      case 'about':
        return <AboutSection />;
      default:
        return (
          <>
            <HeroSection onLogin={() => setAuthModal('login')} />
            <ResourcesSection />
            <ArticlesSection title="Articles" />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        onLogin={() => setAuthModal('login')}
      />
      
      {renderCurrentSection()}

      <AuthModal
        type={authModal}
        isOpen={authModal !== null}
        onClose={() => setAuthModal(null)}
        onSwitchToLogin={() => setAuthModal('login')}
        onSwitchToRegister={() => setAuthModal('register')}
        onSwitchToRecovery={() => setAuthModal('recovery')}
      />
    </div>
  );
};

export default Index;
