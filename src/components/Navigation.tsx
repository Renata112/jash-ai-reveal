import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  onLogin: () => void;
  isLoggedIn?: boolean;
}

const Navigation = ({ currentSection, onSectionChange, onLogin, isLoggedIn = false }: NavigationProps) => {
  const navItems = [
    { id: 'world-history', label: 'World History' },
    { id: 'kyrgyzstan-history', label: 'History of Kyrgyzstan' },
    { id: 'olympic-history', label: 'Olympic History' },
    { id: 'tests', label: 'Tests' },
    { id: 'saved', label: 'Saved' },
    { id: 'about', label: 'About Us' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onSectionChange('home')}
          >
            <span 
              className="text-gray-800"
              style={{
                fontFamily: 'Helvetica Neue LT Std, Helvetica, Arial, sans-serif',
                fontWeight: 750,
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Jash Story
            </span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`text-gray-600 hover:text-gray-800 transition-colors ${
                  currentSection === item.id ? 'text-blue-600 font-medium' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
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
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
