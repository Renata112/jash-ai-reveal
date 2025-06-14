
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  onLogin: () => void;
}

const Navigation = ({ currentSection, onSectionChange, onLogin }: NavigationProps) => {
  const navItems = [
    { id: 'world-history', label: 'World History' },
    { id: 'kyrgyzstan-history', label: 'History of Kyrgyzstan' },
    { id: 'olympic-history', label: 'Olympic History' },
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
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">JS</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Jash Story</span>
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
        
        <Button
          onClick={onLogin}
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
