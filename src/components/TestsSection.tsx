
import { useState } from "react";
import { Button } from "@/components/ui/button";

const TestsSection = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const testCategories = [
    {
      id: 'ancient',
      title: 'Ancient History',
      description: 'Test your knowledge of ancient civilizations',
      questions: [
        {
          question: 'Which empire was known for its road system and engineering?',
          options: ['Greek Empire', 'Roman Empire', 'Persian Empire', 'Egyptian Empire'],
          correct: 1,
          explanation: 'The Roman Empire was famous for its extensive road network and engineering achievements.'
        },
        {
          question: 'Who was the first emperor of China?',
          options: ['Confucius', 'Qin Shi Huang', 'Sun Tzu', 'Lao Tzu'],
          correct: 1,
          explanation: 'Qin Shi Huang unified China and became its first emperor in 221 BCE.'
        }
      ]
    },
    {
      id: 'kyrgyz',
      title: 'Kyrgyz History',
      description: 'Learn about the rich history of Kyrgyzstan',
      questions: [
        {
          question: 'When did Kyrgyzstan gain independence?',
          options: ['1990', '1991', '1992', '1993'],
          correct: 1,
          explanation: 'Kyrgyzstan declared independence from the Soviet Union on August 31, 1991.'
        },
        {
          question: 'What is the traditional Kyrgyz dwelling called?',
          options: ['Yurt', 'Tent', 'Hut', 'Cabin'],
          correct: 0,
          explanation: 'A yurt is the traditional portable dwelling used by nomadic Kyrgyz people.'
        }
      ]
    },
    {
      id: 'world-wars',
      title: 'World Wars',
      description: 'Test your knowledge of the World Wars',
      questions: [
        {
          question: 'When did World War I begin?',
          options: ['1914', '1915', '1916', '1917'],
          correct: 0,
          explanation: 'World War I began on July 28, 1914, following the assassination of Archduke Franz Ferdinand.'
        }
      ]
    }
  ];

  const currentTest = testCategories.find(test => test.id === selectedTest);
  const currentQuestionData = currentTest?.questions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === currentQuestionData?.correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentTest && currentQuestion < currentTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setSelectedTest(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  if (showResult && currentTest) {
    return (
      <section className="bg-gray-50 py-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Test Complete!</h2>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{currentTest.title}</h3>
            <p className="text-6xl font-bold text-purple-600 mb-4">
              {score}/{currentTest.questions.length}
            </p>
            <p className="text-xl text-gray-600 mb-8">
              You scored {Math.round((score / currentTest.questions.length) * 100)}%
            </p>
            <div className="space-x-4">
              <Button 
                onClick={resetTest}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
              >
                Take Another Test
              </Button>
              <Button 
                onClick={() => setShowResult(false)}
                variant="outline"
                className="px-8 py-3"
              >
                Review Answers
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (selectedTest && currentTest && currentQuestionData) {
    return (
      <section className="bg-gray-50 py-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <button 
              onClick={resetTest}
              className="text-purple-600 hover:text-purple-700 mb-4"
            >
              ← Back to Tests
            </button>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">{currentTest.title}</h2>
              <span className="text-gray-600">
                Question {currentQuestion + 1} of {currentTest.questions.length}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">{currentQuestionData.question}</h3>
            
            <div className="space-y-4">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showExplanation && handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    showExplanation
                      ? index === currentQuestionData.correct
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : selectedAnswer === index
                        ? 'bg-red-100 border-red-500 text-red-800'
                        : 'bg-gray-100 border-gray-300'
                      : selectedAnswer === index
                      ? 'bg-purple-100 border-purple-500'
                      : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
                <p className="text-blue-700">{currentQuestionData.explanation}</p>
                <Button 
                  onClick={handleNextQuestion}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {currentQuestion < currentTest.questions.length - 1 ? 'Next Question' : 'See Results'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">History Tests</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your knowledge with our interactive quizzes. Each test provides immediate feedback 
            and explanations to help you learn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                {category.questions.length} Questions
              </p>
              <Button 
                onClick={() => setSelectedTest(category.id)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Start Test
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestsSection;
