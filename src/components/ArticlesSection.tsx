
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import React, { useState, useEffect } from "react";

interface ArticlesSectionProps {
  title: string;
  onArticleClick?: (articleId: number) => void;
  language: "en" | "ru" | "ky";
  onToggleSave?: (article: any) => void;
  savedArticles?: number[];
}

const LABELS = {
  en: {
    olympicHistory: "Olympic History",
    bestArticles: "BEST ARTICLES ON HISTORY",
    learnMore: "Learn More",
    popularArticles: "POPULAR ARTICLES",
    articles: "ARTICLES",
    read: "Read",
  },
  ru: {
    olympicHistory: "Олимпийская история",
    bestArticles: "ЛУЧШИЕ СТАТЬИ ПО ИСТОРИИ",
    learnMore: "Узнать больше",
    popularArticles: "ПОПУЛЯРНЫЕ СТАТЬИ",
    articles: "СТАТЬИ",
    read: "Читать",
  },
  ky: {
    olympicHistory: "Олимпиада тарыхы",
    bestArticles: "ТАРЫХ БОЮНЧА ЭҢ МЫКТЫ МАКАЛАЛАР",
    learnMore: "Көбүрөөк билүү",
    popularArticles: "ПОПУЛЯРДУУ МАКАЛАЛАР",
    articles: "МАКАЛАЛАР",
    read: "Окуу",
  },
};

const ARTICLES = [
  {
    id: 1,
    title: "Битва за независимость",
    description: "Битва на реке Талас, состоявшаяся в 751 году, является одним из ключевых событий в истории Центральной Азии и мировой истории в целом. Это столкновение между армией Аббасидов и китайской династией Тан стало кульминацией...",
    image: "/lovable-uploads/abbdf890-e3a4-424b-9aac-9c88b068a5ad.png",
    rating: 5,
  },
  {
    id: 2,
    title: "Ангорская битва",
    description: "В начале XIV века Османская империя активно расширяла свои территории на Балканах и в Малой Азии. Баязид I, известный как 'Молниеносный', стремился закрепить контроль над этими землями и продолжить экспансию на восток...",
    image: "/lovable-uploads/783e3481-e8ce-4813-9952-8b528718cade.png",
    rating: 4,
  },
  {
    id: 3,
    title: "Великий Тюркский каганат",
    description: `552-603 год
VI-VII века
История Азии (Эпоха тюркских государств)
До возникновения Тюркского каганата на территории Центральной Азии существовали различные кочевые союзы и государства, включая хуннов, аланов и другие. В V-VI веках гегемоном был Жужанский каганат.
Основание Великого Тюркского каганата стало возможным благодаря усилиям Бумына вождя тюрков. В то время тюрки находились под властью тюрков, но к тому моменту они уже набрали силу и Бумын ища повода для войны потребовал в жены дочь кагана (правителя) жужанов Анахуана. Анахуан был оскорблен этим требованием и указал Бумыну на его место, в тот момент он все еще считался подданым Анахуана, Бумын счел это как личное оскорбление и в 552 году н.э. объявил войну Жужанскому каганату. В течении пару месяцев Бумыну и его войску удалось разгромить жужан и завладеть их столицей, а Анахуан от безвыходности совершил самоубийство.
После разгрома жужан Бумын принял титул кагана (верховного правителя), и тем самым создал Великий Тюркский каганат.

Бюст Бумын кагана расположенный в Турции
После установления власти в 552 году Бумын умирает, его политику по расширению государства продолжает его младший брат Истеми-каган. Он активно двигался на запад и в 561 году тюрки заключили военный союз с Империей Сасанидов против государство эфталитов и в 565 и 567 году нанесли поражения эфталитам, от которых они не смогли оправиться, и территория их государства была поделена между персами и тюрками. По итогам этой войны тюркам достался регион Согдиана.
Тюрки и согдийцы, которые находились под их властью, были заинтересованы в прямых торговых связях с Византийской империей, но Сасаниды этому препятствовали, ведь они были смертоносными врагами еще со времен Рима. В связи с этим в 568 году Истеми-каган направил посольство во главе с согдийским купцом Маниахом в Константинополь. По итогам переговоров с византийским императором Юстином II были подписаны торговое соглашение и военный договор против Сасанидов. После заключения византийско-тюркского союза Иран обязался выплачивать каганату дань в размере 40 тысяч золотых динаров ежегодно и не препятствовать торговле.

В 575 году Иран и Византия объединились против тюрков. В ответ на это в 576 году тюркские войска разгромили вассала Византии — Боспор Киммерийский, предприняли победоносные походы в Крым и Западный Кавказ. Благодаря этим завоеваниям каганат стал контролировать все важные участки Великого Шёлкового пути, что обеспечивало тюркской знати огромные прибыли от караванной торговли.

Тюркский каганат на момент наивысшего могущества
Ключевую роль в успехе Великого Тюркского каганата играла его армия, которая была одной из самых боеспособных в мире того времени. Она состояла в основном из конных лучников и тяжёлой кавалерии, что обеспечивало её мобильность и эффективность в сражениях. Организация войска позволяла быстро реагировать на угрозы и обеспечивать контроль над обширными территориями.
Социальная структура каганата также способствовала его стабильности и процветанию. Хотя власть кагана была абсолютной, она опиралась на поддержку вождей племён и старейшин. Это позволило создать систему, в которой местные правители сохраняли определённую автономию, но при этом действовали в рамках общей политики кагана.
В 581 году произошли два важнейших события. Китай, после долгих веков междоусобиц, наконец объединился под властью династии Суй, которая начала процесс полной централизации и консолидации власти в государстве. В том же году скончался каган тюрков Тобо-каган, что вызвало междоусобицу внутри Тюркского каганата.

Династия Суй
В результате этого кризиса в каганате возникли две противоположные партии: протюркская и прокитайская. Один из каганов, настроенный прокитайски, даже признал свою зависимость от династии Суй, надеясь получить поддержку от Китая.
Продолжавшаяся нестабильность привела к распаду Тюркского каганата в 603 году на два отдельных государства — Западно-Тюркский и Восточно-Тюркский каганаты. Однако, уже под давлением династии Тан, в 630 году пал Восточно-Тюркский каганат, а в 658 году — Западно-Тюркский. В итоге тюрки оказались подданными китайской империи на долгие годы.`,
    image: "/lovable-uploads/8fc63626-80b7-4829-8f46-94e6dd761d1d.png",
    rating: 5,
  },
  {
    id: 4,
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
    rating: 5,
  },
  {
    id: 5,
    title: "Петр Первый - великий реформатор",
    description: "История правления Петра I и его реформ, которые кардинально изменили Российскую империю. Военные походы, создание флота и модернизация государства...",
    image: "/lovable-uploads/adf4d2d2-1c63-45fe-8a8f-b7d3f04f880a.png",
    rating: 4,
  },
  {
    id: 6,
    title: "Ормон хан - герой Кыргызстана",
    description: "История жизни и деятельности Ормон хана (1792-1854), выдающегося кыргызского правителя и военачальника, который сыграл важную роль в истории Кыргызстана...",
    image: "/lovable-uploads/488266c1-7c51-4f1f-bccd-9baa31c72f3b.png",
    rating: 5,
  }
];

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  title,
  onArticleClick,
  language,
  onToggleSave,
  savedArticles = [],
}) => {
  const [liked, setLiked] = useState<number[]>(savedArticles);

  useEffect(() => {
    setLiked(savedArticles);
  }, [savedArticles]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const handleReadClick = (articleId: number) => {
    if (onArticleClick) {
      onArticleClick(articleId);
    }
  };

  const handleHeartClick = (article: any) => {
    if (liked.includes(article.id)) {
      setLiked((prev) => prev.filter((id) => id !== article.id));
    } else {
      setLiked((prev) => [...prev, article.id]);
    }
    if (onToggleSave) {
      onToggleSave(article);
    }
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
            <h2 className="text-5xl font-bold mb-6">{LABELS[language].olympicHistory}</h2>
            <p className="text-xl mb-8">
              {/* Here you can add more translation logic for descriptions */}
              Lorem ipsum dolor sit amet consectetur. Convallis in eros enim proin lacus<br />
              euismod. Cursus rhoncus turpis id aliquet масса at lobortis posuere enim.
            </p>
            <Button className="border border-white text-white bg-transparent hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full">
              {LABELS[language].articles}
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8">
                {LABELS[language].bestArticles}
              </h3>
              <Button className="border border-white text-white bg-transparent hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full">
                {LABELS[language].learnMore}
              </Button>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                {/* Translate as needed */}
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
            <h4 className="text-2xl font-bold mb-8">{LABELS[language].popularArticles}</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {ARTICLES.slice(0, 3).map((article) => (
                <div key={article.id} className="bg-white text-gray-800 rounded-lg overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-2">Чингисхан</h5>
                    <p className="text-sm text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet consectetur.<br />
                      Битва на реке Талас, состоявшаяся в 751 году, является одним из ключевых событий 
                      в истории Центральной Азии и мировой истории в целом. 
                      Это столкновение между армией Аббасидов и китайской династией Тан стало кульминацией...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button 
                        onClick={() => handleReadClick(article.id)}
                        className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full"
                      >
                        {LABELS[language].read}
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
          {ARTICLES.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3" style={article.id === 4 ? { whiteSpace: 'pre-line', minHeight: 125 } : {}}>
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <Button 
                    onClick={() => handleReadClick(article.id)}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full"
                  >
                    {LABELS[language].read}
                  </Button>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(article.rating)}
                    </div>
                    <button
                      aria-label="Сохранить в избранное"
                      onClick={() => handleHeartClick(article)}
                      className="focus:outline-none"
                    >
                      <Heart className={`w-6 h-6 transition-colors ${liked.includes(article.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                    </button>
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

