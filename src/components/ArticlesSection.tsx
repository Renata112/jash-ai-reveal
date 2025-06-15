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
    id: 6,
    title: "Тюргешский Каганат",
    description: `699-766 год
VII-VIII века
История Азии (Центральная Азия)

После того как западнотюркский каганат ослаб и перестал быть влиятельной силой в Центральной Азии, тюргеши стали лидерами среди тюркских племен. В 699 году Уч-элиг, вождь тюргешей, выступил против последних западнотюркских каганов, которые утратили свою силу, став ставленниками китайского двора. Уч-элиг вытеснил китайского претендента на власть, установив свое правление на территории Западнотюркского каганата, и тем самым стал основателем династии тюргешей.
Уч-элиг был известен как мудрый правитель и искусный дипломат, привлекший на свою сторону многие кочевые племена, зависимые от предыдущих западнотюркских каганов. Он разделил страну на 20 уделов, каждый из которых выставлял войско численностью 7 тысяч человек. Это позволило ему создать сильное государство, которое вынудило его противников считаться с его властью. В ответ на угрозу со стороны китайцев Уч-элиг также использовал дипломатию, привлекая к себе соседние тюркские племена.

Территория Тюргешского каганат

Однако, несмотря на успешные действия против китайцев, Тюргешский каганат вскоре столкнулся с внутренними проблемами. После смерти Уч-элига в 706 году его сын Сакал стал каганом. На его правление пришлись первые волнения среди племенной аристократии, поддерживаемые танскими войсками. Однако, несмотря на внутренние потрясения, Сакал одержал важную победу в 708 году, разгромив восставших и отряд китайского наместника в Куче (Аньси).
Тем не менее, в 711 году началась новая угроза для Тюргешского каганата. Внутренние раздоры между братьями Сакалом и Чжену, а также поддержка, оказанная последнему Восточнотюркским каганатом под руководством Капагана, привели к военной интервенции. В 711 году восточнотюркское войско разгромило армию Сакала на реке Болучу в Джунгарии, и оба брата были казнены по приказу Капагана.
Этот инцидент привел к упадку Тюргешского каганата, и на время его существование прекратилось. Остатки тюргешских войск были вынуждены отступить за Сыр-Дарью и укрыться в Тохаристане. Однако, благодаря поддержке черных тюргешей, Тюргешский каганат был восстановлен.
В 716 году, после нескольких лет политической нестабильности, Сулук, вождь черных тюргешей, стал новым тюргеш-каганом. Он провел успешные реформы, укрепил власть и установил контроль над Семиречьем. Сулук был известен своей справедливостью и щедростью, а также искусной дипломатией. Он вступил в союз с несколькими влиятельными правителями, в том числе с дочерью Бильге-кагана, который сменил Капагана на троне второго Восточнотюркского каганата, а также с дочерью тибетского царя.
Сулук также осуществил успешные военные кампании против арабов, которые начали свою экспансию в Центральную Азию. В 720-738 годах тюргеши успешно сражались с арабами и сопротивлялись их попыткам расширить влияние в Согде. Арабы называли Сулука «Абу Музахим» (буквально «ударяющий» или «бодающийся») и видели в нем главную угрозу своей власти в регионе.

Тюргешские воины

Однако, несмотря на успехи Сулука, его смерть в 738 году стала началом нового этапа нестабильности в Тюргешском каганате. После его гибели началась борьба за власть между различными племенами, прежде всего между желтыми и черными тюргешами. Новый каган Тухварсен, сын Сулука, был пленен и казнен, а на престол взошел Кюль-чор, который продолжил борьбу с арабами. Однако его правление было недолгим, и он также был убит.
После смерти Кюль-чора междоусобная борьба продолжалась, что привело к постепенному распаду Тюргешского каганата. Воспользовавшись этим ослаблением, карлукские племена, которые ранее жили под властью тюргешей, создали свое собственное государство в Семиречье и на Тянь-Шане, которые в 766 году захватили все оставшиеся земли тюргешей, тем самым закончив их историю.

Turgesh Khaganate (699–766 AD)
7th–8th Centuries
History of Asia (Central Asia)

After the weakening and decline of the Western Turkic Khaganate, which had ceased to be an influential force in Central Asia, the Turgesh became the leaders among the Turkic tribes. In 699, Uchelig, the leader of the Turgesh, rose against the last Western Turkic khagans who had lost their power and become vassals of the Chinese court. Uchelig ousted the Chinese-appointed ruler, establishing his own rule over the territory of the Western Turkic Khaganate, thus founding the Turgesh dynasty.
Uchelig was known as a wise ruler and skilled diplomat, who won the support of many nomadic tribes previously dependent on the Western Turkic khagans. He divided the country into 20 provinces, each providing an army of 7,000 men. This allowed him to create a strong state that forced his opponents to reckon with his authority. In response to the threat from the Chinese, Uchelig also used diplomacy, attracting neighboring Turkic tribes to his side.

Territory of the Turgesh Khaganate

Despite the successful actions against the Chinese, the Turgesh Khaganate soon faced internal problems. After Uchelig's death in 706, his son Sakal became the khagan. His reign saw the first uprisings among the tribal aristocracy, supported by Tang troops. However, despite the internal turmoil, Sakal achieved an important victory in 708 by defeating the rebels and a Chinese detachment in Kucha (Anxi).
Nevertheless, a new threat emerged for the Turgesh Khaganate in 711. Internal conflicts between the brothers Sakal and Zhenyu, along with the support given to Zhenyu by the Eastern Turkic Khaganate under Kapagan, led to military intervention. In 711, the Eastern Turkic army defeated Sakal's forces on the Boluchu River in Dzungaria, and both brothers were executed by Kapagan's order.
This incident led to the decline of the Turgesh Khaganate, and for a time, its existence came to an end. The remnants of the Turgesh army were forced to retreat behind the Syr Darya and seek refuge in Tokharistan. However, thanks to the support of the Black Turgesh, the Turgesh Khaganate was restored.
In 716, after several years of political instability, Suluk, the leader of the Black Turgesh, became the new Turgesh khagan. He implemented successful reforms, strengthened his power, and established control over Semirechye. Suluk was known for his fairness and generosity, as well as his diplomatic skills. He formed alliances with several influential rulers, including the daughter of Bilge Khagan, who succeeded Kapagan on the throne of the Second Eastern Turkic Khaganate, as well as with the daughter of the Tibetan king.
Suluk also led successful military campaigns against the Arabs, who began their expansion into Central Asia. Between 720 and 738, the Turgesh successfully fought against the Arabs, resisting their attempts to expand their influence in Sogdiana. The Arabs referred to Suluk as "Abu Muzahim" (literally "striking" or "butting") and saw him as the main threat to their power in the region.

Turgesh Warriors

However, despite Suluk's successes, his death in 738 marked the beginning of a new phase of instability for the Turgesh Khaganate. After his death, a struggle for power broke out between various tribes, primarily between the Yellow and Black Turgesh. The new khagan, Tukhwarsen, Suluk's son, was captured and executed, and Kül-chor ascended to the throne. He continued the fight against the Arabs, but his reign was short-lived, and he was also killed.
After Kül-chor's death, the internecine struggle continued, leading to the gradual disintegration of the Turgesh Khaganate. Taking advantage of this weakening, the Karluk tribes, who had previously lived under the rule of the Turgesh, established their own state in Semirechye and the Tien Shan. In 766, they captured all the remaining lands of the Turgesh, thus bringing an end to their history.
`,
    image: "/lovable-uploads/92b7ee82-0ec2-41ca-9896-c09d0c949731.png",
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
