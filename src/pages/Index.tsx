
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/AuthModal";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ResourcesSection from "@/components/ResourcesSection";
import ArticlesSection from "@/components/ArticlesSection";
import OlympiadHistorySection from "@/components/OlympiadHistorySection";
import TestsSection from "@/components/TestsSection";
import SavedSection from "@/components/SavedSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const [authModal, setAuthModal] = useState<'login' | 'register' | 'recovery' | null>(null);
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setAuthModal('login');
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setAuthModal(null);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'world-history':
        return <ArticlesSection title="World History" />;
      case 'kyrgyzstan-history':
        return <ArticlesSection title="History of Kyrgyzstan" />;
      case 'olympic-history':
        return <ArticlesSection title="Olympic History" />;
      case 'tests':
        return <TestsSection />;
      case 'saved':
        return <SavedSection isLoggedIn={isLoggedIn} onLogin={handleLogin} />;
      case 'about':
        return <AboutSection />;
      default:
        return (
          <>
            <HeroSection onLogin={handleLogin} />
            <ResourcesSection />
            <ArticlesSection title="Articles" />
            <OlympiadHistorySection onAllArticles={() => setCurrentSection('articles-all')} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        onLogin={handleLogin}
        isLoggedIn={isLoggedIn}
      />
      
      {renderCurrentSection()}

      <AuthModal
        type={authModal}
        isOpen={authModal !== null}
        onClose={() => setAuthModal(null)}
        onSwitchToLogin={() => setAuthModal('login')}
        onSwitchToRegister={() => setAuthModal('register')}
        onSwitchToRecovery={() => setAuthModal('recovery')}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
