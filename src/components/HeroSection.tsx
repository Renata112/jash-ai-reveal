
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onLogin: () => void;
}

const HeroSection = ({ onLogin }: HeroSectionProps) => {
  return (
    <div 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          {/* Using the logo from your prototype */}
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
            alt="Jash Story Logo" 
            className="w-16 h-16 rounded-xl mr-4 shadow-2xl object-cover"
          />
          <h1 className="text-5xl md:text-6xl font-bold">Jash Story</h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          A nation that does not know its history<br />
          deprives itself of its roots
        </p>
        
        <div className="flex items-center justify-center space-x-6">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg"
          >
            View catalog
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full text-lg"
          >
            Learn more
          </Button>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover the richness of history<br />
            through our comprehensive resources
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
