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
  const [language, setLanguage] = useState<"en" | "ru" | "ky">("en");

  // Liked (saved) articles implementation
  const [savedArticles, setSavedArticles] = useState<number[]>([]);

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

  // Add or remove article from saved
  const handleToggleSaveArticle = (article: { id: number }) => {
    setSavedArticles(prev =>
      prev.includes(article.id) ? prev.filter(id => id !== article.id) : [...prev, article.id]
    );
  };

  // Forward navigation from HeroSection for "catalog" or "learn more"
  const handleCatalog = () => setCurrentSection('world-history');
  const handleLearnMore = () => setCurrentSection('about');

  const renderCurrentSection = () => {
    if (currentSection === 'article' && (currentArticleId === 1 || currentArticleId === 2 || currentArticleId === 4 || currentArticleId === 3 || currentArticleId === 5 || currentArticleId === 6)) {
      return <ArticlePage onBack={handleBackFromArticle} articleId={currentArticleId!} language={language} />;
    }

    switch (currentSection) {
      case 'world-history':
        return (
          <ArticlesSection
            title="World History"
            onArticleClick={handleArticleClick}
            language={language}
            onToggleSave={handleToggleSaveArticle}
            savedArticles={savedArticles}
          />
        );
      case 'kyrgyzstan-history':
        return (
          <ArticlesSection
            title="History of Kyrgyzstan"
            onArticleClick={handleArticleClick}
            language={language}
            onToggleSave={handleToggleSaveArticle}
            savedArticles={savedArticles}
          />
        );
      case 'olympic-history':
        return (
          <ArticlesSection
            title="Olympic History"
            onArticleClick={handleArticleClick}
            language={language}
            onToggleSave={handleToggleSaveArticle}
            savedArticles={savedArticles}
          />
        );
      case 'tests':
        return <TestsSection />;
      case 'saved':
        return <SavedSection isLoggedIn={isLoggedIn} onLogin={handleLogin} language={language} savedArticles={savedArticles}/>;
      case 'about':
        return <AboutSection language={language} />;
      default:
        return (
          <>
            <HeroSection
              onLogin={handleLogin}
              language={language}
              onCatalog={handleCatalog}
              onLearnMore={handleLearnMore}
            />
            <ResourcesSection />
            <ArticlesSection
              title="Articles"
              onArticleClick={handleArticleClick}
              language={language}
              onToggleSave={handleToggleSaveArticle}
              savedArticles={savedArticles}
            />
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
        language={language}
        onLanguageChange={setLanguage}
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
