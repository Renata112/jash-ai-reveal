
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
import ArticlePage from "@/components/ArticlePage";

const Index = () => {
  const [authModal, setAuthModal] = useState<'login' | 'register' | 'recovery' | null>(null);
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentArticleId, setCurrentArticleId] = useState<number | null>(null);

  const handleLogin = () => {
    setAuthModal('login');
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setAuthModal(null);
  };

  const handleArticleClick = (articleId: number) => {
    setCurrentArticleId(articleId);
    setCurrentSection('article');
  };

  const handleBackFromArticle = () => {
    setCurrentArticleId(null);
    setCurrentSection('home');
  };

  const renderCurrentSection = () => {
    if (currentSection === 'article' && currentArticleId === 1) {
      return <ArticlePage onBack={handleBackFromArticle} />;
    }

    switch (currentSection) {
      case 'world-history':
        return <ArticlesSection title="World History" onArticleClick={handleArticleClick} />;
      case 'kyrgyzstan-history':
        return <ArticlesSection title="History of Kyrgyzstan" onArticleClick={handleArticleClick} />;
      case 'olympic-history':
        return <ArticlesSection title="Olympic History" onArticleClick={handleArticleClick} />;
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
            <ArticlesSection title="Articles" onArticleClick={handleArticleClick} />
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
