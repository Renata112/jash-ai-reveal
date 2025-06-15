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

export const ARTICLES = [
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

Однако, несмотря на успехи Сулука, его смерть в 738 году стала началом нового этапа нестабильности в Тюргешском каганате. После его смерти началась борьба за власть между различными племенами, прежде всего между желтыми и черными тюргешами. Новый каган Тухварсен, сын Сулука, был пленен и казнен, а на престол взошел Кюль-чор, который продолжил борьбу с арабами. Однако его правление было недолгим, и он также был убит.
После смерти Кюль-чора междоусобная борьба продолжалась, что привело к постепенному распаду Тюргешского каганата. Воспользовавшись этим ослаблением, карлукские племена, которые ранее жили под властью тюргешей, создали свое собственное государство в Семиречье и на Тянь-Шане. В 766 году, они захватили все оставшиеся земли тюргешей, тем самым закончив их историю.

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
    title: "Второй Восточно-тюркский каганат",
    description: `682-744 год
VII-VIII века
История Азии (Эпоха тюркских государств)
Второй Тюркский Каганат (682–744 гг.) — государственное образование, возникшее в Центральной Азии после падения Великого Тюркского каганата в 603 году и разделения его на Западную и Восточную части. Восточная часть вскоре в 630 году пала от ударов китайской империи Тан и фактически стало ее провинцией, тюрки же, которые жили в это время стали подвергаться серьезным притеснениям. 
Десятилетиями тюрки терпели гнет со стороны китайцев, но в 679 году они под руководством Кутлуга решили восстать и вернуть себе независимость. В 682 году Кутлуг объявляет себя каганом и берет себе тронное имя Эльтериш-каган и создает Второй Востоно-тюркский каганат. С самого начало существования главной целью каганы ставили для себя восстановить величие и границы времен Великого Тюркского каганата, от чего они сразу же нашли себе множество врагов в их число входили китайцы, кыргызы, тибетцы и другие. 

Второй Восточно-тюркский каганат
Новым этапом развития каганата можно считать после воцарения на престол Капаган-кагана, который вел очень агрессивную политику расширения. В это время главным врагом тюрков выступали енисейские кыргызы во главе с каганом Барсбеком. Барсбек для разгрома тюрков создал целую антитюркскую коалицию в чей состав входили Китай, Тибет и тюргеши. Понимая нависавшую угрозу для своего государства Капаган решает действовать на опережение и решил разбить каждого из своих врагов по очереди, чтобы не дать им объединиться. На разгром кыргызов Капаган отправляет своего лучшего полководца тюрка, который получил воспитание и образование в Китае Тоньюкука. Он не смотря на зиму приказал своей армии переправиться сквозь заснеженные перевалы Саянских гор и в 711 году напал на спящий лагерь кыргызов, в битве в долине Сонга кыргызы были наголову разбиты, а их каган Барсбек пал в бою.
 
Барсбек каган
После 23 лет правления Капаган-каган умирает в 716 году. Его преемником становится его племянник Могилян, который провозглашает себя Бильге-каганом. Бильге-каган представляет собой сильного и решительного правителя, который принес мир своему государству, он покорил или же усмирил своих врагов, но, к сожалению, в 734 году его отравляют и новым каганом становится его сын Йоллыг-тегин. Однако уже через 5 лет правления он загадочным образом умирает и в каганате начинается смута из-за быстро сменяющих друг друга ханом. Видя слабость каганата внешние его враги снова начали действовать активно и в это время уйгурский вождь Пэйло провозглашает себя Кутлуг Бильге-каганом и его войска убивают Баймэй Кулун-бека, последнего правителя Второго Тюркского каганата, на его месте Бильге-каган основывает Уйгурский каганат со столицей в Ордо-Балыке.`,
    image: "/lovable-uploads/ce5dc84e-1529-4ffa-9347-700f8781a48b.png",
    rating: 5,
  },
  {
    id: 3,
    title: "Битва на реке Калке",
    description: `1223 год
XIII век
История Восточной Европы (России)
История Азии (Монгольской Империи)
В 1218 году, во время похода Чингисхана против государства Хорезмшахов, монголы направили всю свою мощь на Среднюю Азию. Шах Хорезма, Ала-ад-дин Мухаммед II, совершил стратегическую ошибку, выбрав неэффективную тактику противостояния монгольской угрозе. Вместо того чтобы встретить монголов в решительном сражении, при этом имея армию, которая в три раза превосходила численностью монгольскую, он решил распределить свои войска по городам, полагая, что монголы не смогут их взять. Однако монголы к тому времени уже овладели мастерством осады. После завоевания Китая, они переняли множество китайских технологий, в том числе осадные машины и катапульты, а также наняли китайских инженеров для их изготовления. Используя эти новейшие технологии, монголы начали с лёгкостью захватывать один хорезмшахский город за другим, несмотря на их укрепления. В ходе того похода Чингисхан приказал двум своим лучшим полководцам, Субудэю и Джэбэ, настигнуть и захватить самого Ала-ад-дина Мухаммеда II, который в тот момент скрывался в Персии. Возглавив три тумена (один тумен — 10 000 воинов), монгольские командиры устроили настоящую облаву и были всего в двух днях пути от шаха. Однако Мухаммед успел скрыться на острове Ашур-Ада, где вскоре и скончался. Не остановившись на этом, монголы продолжили свой поход на Запад, проводя разведку боем. Они прошли через Кавказ, разбив грузинскую армию, разграбили Дербент и, уничтожив сопротивление, двинулись дальше, в степи, населённые половцами и аланами.

Субудей, портрет китайских авторов
Аланы в союзе с половцами дали два сражения монголов, но победителя в них не было, тогда монголы прибегли к хитрости. Они с богатыми дарами направили к половцам своих послов и те начали убеждать их что аланы не друзья им, и что, наоборот, у монголов с половцами больше общего и т.д. Половецкие ханы поверили словам монголов и покинули алан, которых сразу же разбили монголов, но после этого они сразу же напали на половцев предав тем самым их. Половцы терпели одно поражения за другим, и чтобы спастись один из половецких ханов Котян Сутоевич решается обратиться к своему зятю галицкому князю Мстиславу Мстиславовичу Удатному и к другим русским князьям, прося у них помощи против монголов и говоря, что как только монголы расправятся с половцами, то они тут же нападут на Русь. Свою просьбу половецкий хан также подкрепил богатыми дарами и после этого южнорусские князья собрались в Киеве на совет, где решили выступить против монголов не на своей земле, а на землях половцев и так они отправились в поход.

Древнерусские княжества в 13 веке
После того как русско-половецкое войско, объединившись, двинулось в поход, к ним прибыли монгольские послы с предложением мира. Они уверяли, что не нападали на русские земли и не имеют намерений враждовать, утверждая, что не существует причин для конфликта. Однако, поддавшись уговором половцев, русские князья решили казнить всех послов. В ответ монголы начали наступление, и русские силы, решив противостоять врагу, в разрозненном порядке пошли в наступление, разбив передовой отряд монголов и начав их преследование. Основной слабостью русских войск была их разобщенность. Множество лет внутренних распрей и взаимного недоверия между князьями привели к тому, что каждый князь вел свою дружину отдельно, не подчиняясь общему командованию. Эта разрозненность сыграла решающую роль в их поражении. Когда объединённое войско подошло к реке Калке, между князьями разгорелся спор о тактике: одни предложили разбить лагерь и ждать врага, другие настаивали на переправе через реку и решающем сражении. В итоге единого решения не было принято, и каждый князь действовал по-своему. Утром 31 мая 1223 года половцы и часть русских войск начали переправу через реку, а другая часть оставалась на месте, строя лагерь. В это время передовые отряды русских и половцев встретили монголов и атаковали их, одержав первичные успехи — монголы отступили. Однако половцы, вместо того чтобы дождаться подкреплений, увлеклись преследованием, и это стало фатальной ошибкой. В этот момент монгольские полководцы Субудэй и Джэбэ отдали приказ основным силам армии начать решительное наступление. Монголы, более организованные и дисциплинированные, быстро перегруппировались и начали координированные атаки, что привело к панике среди половцев и русских. Вскоре разрозненные ряды союзников были смяты, и началась настоящая давка на реке. В результате русско-половецкое войско было разгромлено и стало массово отступать. Киевский князь остался со своей дружиной в лагере, но и его позиции вскоре оказались осаждены монголами. Несмотря на то, что его войско продолжало сопротивляться, боевой дух был сломлен, а сказывалась нехватка продовольствия и воды. Субудэй, чтобы усилить давление на осажденных, привел к лагерю бродника по имени Плоскыня, который клялся на кресте, что, если русские сдадутся, монголы пощадят их и отпустят за выкуп. Киевский князь и другие русские командиры поверили обещаниям, и в результате, после трех дней осады, лагерь сдался. Личность посла считалась у монголов священной и за его убийство надо было мстить кровной местью, и как только последние защитники покинули свои позиции, монголы нарушили свои обещания и устроили жестокую резню в отместку за своих послов. Князей захватили в плен, привязали и выложили на земле, а на их телах монгольские военачальники устроили пир, усевшись на доски, которые были положены поверх тел побежденных.

Монгольские военачальники пируют на досках, под которыми лежат русские князья
После победы на реке Калке монголы продолжили преследование бегущих русских и половцев, гнав их до самой реки Днепр. Однако, узнав о подходе подкреплений с Северо-Восточной Руси, монгольские полководцы приняли решение отступить, не рискуя столкнуться с новой, более сильной армией. На пути домой монголы прошли через земли Волжской Булгарии, где местные жители устроили им жестокие засады. В ходе этих боёв погиб Джэбэ, а многие из его воинов были уничтожены. В живых остались лишь четыре тысячи монгольских всадников и сам Субудэй, который, понеся серьёзные потери, поспешил вернуться домой в Монголию.`,
    image: "/lovable-uploads/d170a14e-a3d4-4a86-9447-793558c69e7e.png",
    rating: 5,
  },
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
