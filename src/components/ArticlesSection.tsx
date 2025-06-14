
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface ArticlesSectionProps {
  title: string;
}

const ArticlesSection = ({ title }: ArticlesSectionProps) => {
  const articles = [
    {
      id: 1,
      title: "Revolutionary Techniques in Judy Chicago's Work",
      description: "The Battle of Talas, which took place in 751, is one of the key events in the history of Central Asia and world history as a whole. This clash between the Abbasid army and the Chinese Tang dynasty became the culmination...",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      liked: true
    },
    {
      id: 2,
      title: "Revolutionary Techniques in Judy Chicago's Work",
      description: "The Battle of Talas, which took place in 751, is one of the key events in the history of Central Asia and world history as a whole. This clash between the Abbasid army and the Chinese Tang dynasty became the culmination...",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      liked: false
    },
    {
      id: 3,
      title: "Revolutionary Techniques in Judy Chicago's Work",
      description: "The Battle of Talas, which took place in 751, is one of the key events in the history of Central Asia and world history as a whole. This clash between the Abbasid army and the Chinese Tang dynasty became the culmination...",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      liked: false
    },
    {
      id: 4,
      title: "Revolutionary Techniques in Judy Chicago's Work",
      description: "The Battle of Talas, which took place in 751, is one of the key events in the history of Central Asia and world history as a whole. This clash between the Abbasid army and the Chinese Tang dynasty became the culmination...",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      liked: false
    },
    {
      id: 5,
      title: "Revolutionary Techniques in Judy Chicago's Work",
      description: "The Battle of Talas, which took place in 751, is one of the key events in the history of Central Asia and world history as a whole. This clash between the Abbasid army and the Chinese Tang dynasty became the culmination...",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4,
      liked: false
    },
    {
      id: 6,
      title: "Revolutionary Techniques in Judy Chicago's Work",
      description: "The Battle of Talas, which took place in 751, is one of the key events in the history of Central Asia and world history as a whole. This clash between the Abbasid army and the Chinese Tang dynasty became the culmination...",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
      liked: false
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  if (title === "Olympic History") {
    return (
      <section 
        className="py-16 px-6 text-white relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Olympic History</h2>
            <p className="text-xl mb-8">
              Lorem ipsum dolor sit amet consectetur. Convallis in eros enim proin lacus<br />
              euismod. Cursus rhoncus turpis id aliquet massa at lobortis posuere enim.
            </p>
            <Button className="border border-white text-white bg-transparent hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full">
              All Articles
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8">
                BEST ARTICLES<br />
                ON HISTORY
              </h3>
              <Button className="border border-white text-white bg-transparent hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full">
                Learn More
              </Button>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                We regularly publish articles that will help you better understand 
                the key moments of Kyrgyzstan's history and world history. Our materials 
                cover a wide range of topics, from ancient civilizations to modern events.
              </p>
              
              <p className="text-lg leading-relaxed">
                All articles are written by experts and specially designed for 
                schoolchildren to make learning interesting and accessible.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-2xl font-bold mb-8">POPULAR ARTICLES</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article) => (
                <div key={article.id} className="bg-white text-gray-800 rounded-lg overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-2">Ghengis Khan</h5>
                    <p className="text-sm text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet consectetur.<br />
                      The Battle of Talas, which took place in 751, is one of the key events 
                      in the history of Central Asia and world history as a whole. 
                      This clash between the Abbasid army and the Chinese Tang dynasty became the culmination...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
                        Read
                      </Button>
                      <Heart className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-600 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">{title.toUpperCase()}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full">
                    Read
                  </Button>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(article.rating)}
                    </div>
                    <Heart className={`w-6 h-6 ${article.liked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
