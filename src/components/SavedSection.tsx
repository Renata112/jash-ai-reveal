
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, FileText } from "lucide-react";

interface SavedSectionProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

const SavedSection = ({ isLoggedIn, onLogin }: SavedSectionProps) => {
  const savedItems = [
    {
      id: 1,
      type: 'article',
      title: 'The Battle of Talas: A Turning Point in Central Asian History',
      description: 'An in-depth analysis of one of the most significant battles in Central Asian history...',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      savedDate: '2024-01-15'
    },
    {
      id: 2,
      type: 'test',
      title: 'Ancient Civilizations Quiz',
      description: 'Test your knowledge of ancient civilizations and their contributions to history.',
      score: '8/10',
      completedDate: '2024-01-14'
    },
    {
      id: 3,
      type: 'article',
      title: 'Kyrgyz Traditional Culture and Customs',
      description: 'Explore the rich cultural heritage and traditions of the Kyrgyz people...',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      savedDate: '2024-01-13'
    }
  ];

  if (!isLoggedIn) {
    return (
      <section className="bg-gray-50 py-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg p-12 shadow-lg">
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Please Log In</h2>
            <p className="text-xl text-gray-600 mb-8">
              You need to be logged in to view your saved articles and test results.
            </p>
            <Button 
              onClick={onLogin}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            >
              Log In to View Saved Items
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Saved Items</h2>
          <p className="text-xl text-gray-600">
            Articles you've bookmarked and tests you've completed.
          </p>
        </div>

        <div className="grid gap-6">
          {savedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                {item.type === 'article' && item.image && (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                )}
                
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-2">
                    {item.type === 'article' ? (
                      <FileText className="w-5 h-5 text-purple-600" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-green-600" />
                    )}
                    <span className="text-sm font-medium text-gray-500 uppercase">
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {item.type === 'article' ? (
                        <span>Saved on {item.savedDate}</span>
                      ) : (
                        <span>Completed on {item.completedDate} • Score: {item.score}</span>
                      )}
                    </div>
                    
                    <div className="space-x-3">
                      <Button 
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        {item.type === 'article' ? 'Read' : 'Retake'}
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        className="text-red-600 border-red-600 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {savedItems.length === 0 && (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">No Saved Items Yet</h3>
            <p className="text-gray-600">
              Start exploring articles and taking tests to save your favorites here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedSection;
