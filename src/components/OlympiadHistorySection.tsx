
import { Button } from "@/components/ui/button";

interface OlympiadHistorySectionProps {
  onAllArticles: () => void;
}

const OlympiadHistorySection = ({ onAllArticles }: OlympiadHistorySectionProps) => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Olympiad History</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Here you will find fascinating tests on world and national history, advanced level articles and many other useful
          materials for successful preparation for Olympiads and various tests, as well as for in-depth study of historical events.
        </p>
        <Button 
          onClick={onAllArticles}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg"
        >
          All articles
        </Button>
      </div>
    </section>
  );
};

export default OlympiadHistorySection;
