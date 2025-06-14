
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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-2xl">
            <div className="w-10 h-10 border-3 border-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">Jash Story</h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          After registration, we will create your<br />
          unified MMCO-ID account for participation<br />
          in future MMCO events
        </p>
        
        <div className="flex items-center justify-center space-x-6">
          <Button 
            onClick={onLogin}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full text-lg"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A people who do not know their history<br />
            deprives themselves of their roots
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
