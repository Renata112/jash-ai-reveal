
const ResourcesSection = () => {
  return (
    <section className="bg-gray-600 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              COMPLETE RESOURCES<br />
              FOR <span className="text-purple-400">VICTORY</span><br />
              IN OLYMPIADS
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Jash Story offers unique materials and resources for preparation 
              for school Olympiads in history. We carefully select books, 
              articles and textbooks that will help participants to study deeply 
              the history of Kyrgyzstan and world history. Our materials 
              are designed according to the level of preparation of schoolchildren 
              and are oriented to Olympic standards.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our website presents exclusive resources that 
              not only help in preparation, but also inspire the study of history. 
              We strive to make learning simple and engaging, 
              providing all the necessary tools to achieve success.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-700 rounded-lg p-6 h-64">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80" 
              alt="Resource 1" 
              className="w-full h-full rounded object-cover"
            />
          </div>
          <div className="grid gap-4">
            <div className="bg-gray-700 rounded-lg p-4 h-28">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=100&q=80" 
                alt="Resource 2" 
                className="w-full h-full rounded object-cover"
              />
            </div>
            <div className="bg-gray-700 rounded-lg p-4 h-28">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=100&q=80" 
                alt="Resource 3" 
                className="w-full h-full rounded object-cover"
              />
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 h-64">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80" 
              alt="Resource 4" 
              className="w-full h-full rounded object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
