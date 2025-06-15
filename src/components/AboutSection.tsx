
const aboutTexts = {
  en: {
    title: "ABOUT THE PROJECT",
    paragraphs: [
      "Jash Story is an educational project that combines the study of the history of Kyrgyzstan and world history. We organize school Olympiads, create training materials and provide access to useful books. Our site will become a platform where everyone can find in-depth information and learning resources.",
      "We regularly publish articles that will help you better understand the key moments of Kyrgyzstan's history and world history. Our materials cover a wide range of topics, from ancient civilizations to modern events.",
      "All articles are written by experts and specially designed for schoolchildren to make learning interesting and accessible.",
      "Jash Story offers unique materials and resources for preparation for school Olympiads in history. We carefully select books, articles and textbooks that will help participants to study deeply the history of Kyrgyzstan and world history. Our materials are designed according to the level of preparation of schoolchildren and are oriented to Olympic standards.",
      "Our website presents exclusive resources that not only help in preparation, but also inspire the study of history. We strive to make learning simple and engaging, providing all the necessary tools to achieve success.",
    ],
  },
  ru: {
    title: "О ПРОЕКТЕ",
    paragraphs: [
      "Jash Story — образовательный проект, объединяющий изучение истории Кыргызстана и всемирной истории. Мы проводим школьные олимпиады, создаём учебные материалы и предоставляем доступ к полезным книгам. Наш сайт станет платформой, где каждый найдёт углублённую информацию и учебные ресурсы.",
      "Мы регулярно публикуем статьи, которые помогут лучше понять ключевые моменты истории Кыргызстана и мировой истории. Наши материалы охватывают широкий круг тем — от древних цивилизаций до современных событий.",
      "Все статьи написаны экспертами и специально подготовлены для школьников, чтобы сделать обучение интересным и доступным.",
      "Jash Story предлагает уникальные материалы и ресурсы для подготовки к школьным олимпиадам по истории. Мы тщательно отбираем книги, статьи и учебники, которые помогут участникам глубоко изучить историю Кыргызстана и всемирную историю. Наши материалы ориентированы на уровень подготовки школьников и соответствуют олимпиадным стандартам.",
      "На нашем сайте представлены эксклюзивные ресурсы, которые не только помогают подготовиться, но и вдохновляют на изучение истории. Мы стремимся сделать обучение простым и увлекательным, предоставляя все необходимые инструменты для достижения успеха."
    ],
  },
  ky: {
    title: "ДОЛБООРУ ЖӨНҮНДӨ",
    paragraphs: [
      "Jash Story — бул Кыргызстан тарыхын жана дүйнө тарыхын окууну айкалыштырган билим берүүчү долбоор. Биз мектеп олимпиадаларын уюштурабыз, окуу материалдарын түзөбүз жана пайдалуу китептерге мүмкүнчүлүк беребиз. Биздин сайт ар кимге терең маалымат жана окуу ресурстарын табууга аянтча болот.",
      "Биз Кыргызстандын тарыхы жана дүйнө тарыхынын маанилүү учурларын жакшыраак түшүнүүгө жардам бере турган макалаларды үзгүлтүксүз жарыялап турабыз. Биздин материалдар байыркы цивилизациядан тартып заманбап окуяларга чейин ар кандай темаларды камтыйт.",
      "Бардык макалалар адистер тарабынан жазылган жана өзгөчө мектеп окуучуларына ылайыкталган, билим алууну кызыктуу жана жеткиликтүү кылып берет.",
      "Jash Story мектеп олимпиадаларына даярдык үчүн уникалдуу материалдарды жана ресурстарды сунуштайт. Биз Кыргызстандын жана дүйнө тарыхын терең изилдөөгө жардам бере турган китептерди, макалаларды жана окуу куралдарын кылдат тандайбыз. Биздин материалдар окуучулардын деңгээлине ылайыкташтырылган жана олимпиадалык стандарттарга жооп берет.",
      "Биздин сайтта өзгөчө ресурстар сунушталат, алар даярдыка гана жардам бербестен, тарыхты окууга шыктандырат. Биз окууну жөнөкөй жана кызыктуу кылууга умтулабыз жана ийгиликке жетүү үчүн бардык керектүү куралдарды сунуштайбыз."
    ],
  }
};

const AboutSection = ({ language }: { language: "en" | "ru" | "ky" }) => {
  const t = aboutTexts[language];
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-12">{t.title}</h1>
        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
          {t.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
