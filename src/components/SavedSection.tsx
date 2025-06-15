import { Button } from "@/components/ui/button";
import { Heart, BookOpen, FileText } from "lucide-react";

interface SavedSectionProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  language: "en" | "ru" | "ky";
  savedArticles?: number[];
}

// Article definitions extracted for re-use and kept in sync with ArticlesSection
const ALL_ARTICLES = [
  {
    id: 1,
    type: 'article',
    title: 'Битва за независимость',
    description: 'Битва на реке Талас, состоявшаяся в 751 году, является одним из ключевых событий в истории Центральной Азии и мировой истории в целом. Это столкновение между армией Аббасидов и китайской династией Тан стало кульминацией...',
    image: '/lovable-uploads/abbdf890-e3a4-424b-9aac-9c88b068a5ad.png',
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
    title: 'Выдающиеся личности истории',
    description: 'Портреты великих исторических деятелей, которые оставили неизгладимый след в истории человечества. Их достижения и вклад в развитие общества...',
    image: '/lovable-uploads/c3be34f9-9c87-4999-95f4-bc341851d995.png',
    savedDate: '2024-01-13'
  },
  {
    id: 4,
    type: 'article',
    title: "Разграбление Рима готами и вандалами",
    description: `410 год и 455 год
V век
История Западной Европы (Римская Империя)
Падение Рима, как символа античной цивилизации, стало одним из самых трагичных и символичных событий в истории Европы. Одними из наиболее знаковых эпизодов в истории Римской империи стали разграбления Рима варварами — готами в 410 году и вандалами в 455 году.
Аларих, возглавивший в 395 году готские племена, был сначала признан римскими властями в качестве союзника, но со временем отношения между Римом и готами ухудшились. После серии неудачных переговоров и попыток найти компромисс, Аларих решил взять Рим штурмом. В августе 410 года, после нескольких месяцев осады, готы вошли в город. Разграбление Рима продолжалось три дня. Хотя Аларих и не разрешил своим войскам полностью разрушить город, в частности, христианские церкви, поскольку сам был христианином, он позволил готам ограбить храмы, дворцы, богатства римской элиты. События 410 года стали одним из самых трагичных моментов в истории Рима. Это был первый случай за почти 800 лет, когда Рим был захвачен варварами. Это также показало, что варварские королевства способны на равных бороться с Римом и что он уже не обладает былой мощью.

Король готов Аларих
Не успел Рим в должной мере восстановиться как уже через 45 лет, в 455 году, Рим пережил ещё одно разграбление, на этот раз руками вандалов, возглавляемых королём Гейзерихом. 
Вандалы, племя германского происхождения, которое с конца IV века оседало в североафриканских территориях, после нескольких нападений на римские владения в Средиземноморье, в 455 году они вступили в Италию. В это время Западная Римская империя уже находилась в состоянии глубокого упадка: император Валентиниан III был убит в результате дворцового переворота, и власть переходила из рук в руки.
Вандалы, совершившие набег на Рим, безжалостно разграбили город. В отличие от готов, которые не разрушали город в буквальном смысле, вандалы занимались массовым уничтожением и грабежом. Во время разграбления, которое продолжалось несколько недель, были украдены огромные богатства, а также произведения искусства и ценные реликвии. Вандалы вывезли из Рима множество драгоценностей, в том числе знаменитую Золотую святыню, а также захватили ряд символов римской власти и религиозные объекты. Одним из самых известных объектов, похищенных вандалами, был "Золотой крест" святого Петра, который был украден и увезен в Карфаген.

Разграбление Рима вандалами
Вандальское разграбление Рима стало завершающим ударом по империи, и после него Рим уже не смог восстановиться и через 21 год прекратил свое существование после того, как варвар по происхождению Одоакр сверг императора Ромула Августа и отправил знаки величия в Константинополь. Важность этого события заключается в том, что оно символизировало окончательное разрушение западной части Римской империи, а сам термин «вандализм» в исторической науке и культуре остался как обозначение разрушительного, бесчеловечного разрушения культурных ценностей.`,
    image: "/lovable-uploads/218620e8-d0b4-40ec-9d21-9af4b0a16593.png",
    savedDate: "2024-06-15"
  }
  // ...other articles...
];

const LABELS = {
  en: {
    pleaseLogin: "Please Log In",
    needLogin: "You need to be logged in to view your saved articles and test results.",
    loginButton: "Log In to View Saved Items",
    yourSaved: "Your Saved Items",
    articlesTests: "Articles you've bookmarked and tests you've completed.",
    noSaved: "No Saved Items Yet",
    startExploring: "Start exploring articles and taking tests to save your favorites here.",
    read: "Read",
    retake: "Retake",
    remove: "Remove",
    savedOn: "Saved on",
    completedOn: "Completed on",
    score: "Score"
  },
  ru: {
    pleaseLogin: "Пожалуйста, войдите",
    needLogin: "Вам нужно войти, чтобы просмотреть сохранённые статьи и результаты тестов.",
    loginButton: "Войти, чтобы посмотреть сохранённое",
    yourSaved: "Ваши сохранённые элементы",
    articlesTests: "Статьи, которые вы отметили, и завершённые тесты.",
    noSaved: "Пока нет сохранённых элементов",
    startExploring: "Начните изучать статьи и проходить тесты, чтобы сохранить избранное здесь.",
    read: "Читать",
    retake: "Пройти ещё раз",
    remove: "Удалить",
    savedOn: "Сохранено",
    completedOn: "Завершено",
    score: "Результат"
  },
  ky: {
    pleaseLogin: "Кирүүңүздү суранабыз",
    needLogin: "Сакталган макалаларды жана тест жыйынтыктарын көрүү үчүн кирүү керек.",
    loginButton: "Сакталганды көрүү үчүн кирүү",
    yourSaved: "Сиздин сакталган нерселериңиз",
    articlesTests: "Белгилеген макалаларыңыз жана тапшырган тесттериңиз.",
    noSaved: "Азырынча сакталган эч нерсе жок",
    startExploring: "Макалаларды көрүп, тест тапшырып, бул жерге сактаңыз.",
    read: "Окуу",
    retake: "Кайра тапшыруу",
    remove: "Өчүрүү",
    savedOn: "Сакталган датасы",
    completedOn: "Аягына чыккан датасы",
    score: "Балл"
  },
};

const SavedSection = ({ isLoggedIn, onLogin, language, savedArticles = [] }: SavedSectionProps) => {
  const t = LABELS[language];

  const filtered = ALL_ARTICLES.filter(
    a => a.type === 'article' && savedArticles.includes(a.id)
  );

  if (!isLoggedIn) {
    return (
      <section className="bg-gray-50 py-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg p-12 shadow-lg">
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.pleaseLogin}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {t.needLogin}
            </p>
            <Button
              onClick={onLogin}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            >
              {t.loginButton}
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.yourSaved}</h2>
          <p className="text-xl text-gray-600">
            {t.articlesTests}
          </p>
        </div>
        <div className="grid gap-6">
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t.noSaved}</h3>
              <p className="text-gray-600">
                {t.startExploring}
              </p>
            </div>
          )}
          {filtered.map(item => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                )}
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-500 uppercase">{item.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4" style={{whiteSpace: 'pre-line'}}>{item.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span>{t.savedOn} {item.savedDate || '--'}</span>
                    </div>
                    <div className="space-x-3">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                        {t.read}
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        {t.remove}
                      </Button>
                    </div>
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

export default SavedSection;
