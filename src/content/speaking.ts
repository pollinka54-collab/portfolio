export type SpeakingEvent = {
  name: string;
  format: string;
  place?: string;
  date: string;
  dateTime: string;
  topics: readonly string[];
  photo: string;
  photoAlt: string;
  photoPosition?: string;
  post: number;
  topicPost?: number;
  category?: "speaking" | "training";
};

export const featuredSpeakingEvent = {
  name: "«Мозг для бизнеса»",
  format: "Авторская конференция · модератор",
  place: "Нижний Новгород",
  date: "14 мая 2026",
  dateTime: "2026-05-14",
  topics: ["Нейросети в 2026: где реальные изменения, а где хайп?"],
  photo: "brain-for-business",
  photoAlt: "Полина с микрофоном на панельной дискуссии конференции «Мозг для бизнеса»",
  photoPosition: "30% 50%",
  post: 3292,
  topicPost: 3227,
} satisfies SpeakingEvent;

export const speakingEvents: readonly SpeakingEvent[] = [
  {
    name: "Корпоративный университет Правительства Нижегородской области",
    format: "Лекция",
    category: "training",
    place: "Нижний Новгород",
    date: "15 июля 2026",
    dateTime: "2026-07-15",
    topics: ["Цифровые инструменты для командной работы", "Как ИИ меняет рабочий день госслужащего"],
    photo: "kupno",
    photoAlt: "Полина ведёт лекцию в КУПНО",
    photoPosition: "58% 40%",
    post: 3708,
  },
  {
    name: "Форум «Фитнес Россия»",
    format: "Выступление",
    place: "Сколково, Москва",
    date: "18 апреля 2026",
    dateTime: "2026-04-18",
    topics: ["Кейсы внедрения ИИ в маркетинг фитнес-индустрии"],
    photo: "fitness-russia",
    photoAlt: "Полина с коллегами на форуме «Фитнес Россия»",
    photoPosition: "50% 40%",
    post: 3169,
  },
  {
    name: "Бизнес-завтрак радио «Серебряный дождь»",
    format: "Выступление",
    place: "Нижний Новгород",
    date: "8 апреля 2026",
    dateTime: "2026-04-08",
    topics: ["ИИ в кризис: оптимизация расходов команды и обход конкурентов"],
    photo: "silver-rain",
    photoAlt: "Полина с микрофоном на бизнес-завтраке радио «Серебряный дождь»",
    photoPosition: "50% 32%",
    post: 3136,
    topicPost: 3134,
  },
  {
    name: "XI Международный ИТ-форум",
    format: "Два доклада",
    place: "Омск",
    date: "Март 2026",
    dateTime: "2026-03",
    topics: ["Тренды ИИ в маркетинге на ближайшие 3–5 лет", "ИИ в бизнесе. Нынешняя ситуация рынка и кейсы внедрения"],
    photo: "omsk-it-forum",
    photoAlt: "Полина выступает на Международном ИТ-форуме в Омске",
    photoPosition: "50% 38%",
    post: 3092,
    topicPost: 3083,
  },
  {
    name: "Конференция «Нейростратегия»",
    format: "Доклад",
    place: "Владимир",
    date: "2 декабря 2025",
    dateTime: "2025-12-02",
    topics: ["Революция маркетинга: как ИИ меняет правила игры"],
    photo: "neurostrategy",
    photoAlt: "Полина с докладом на сцене конференции «Нейростратегия»",
    post: 2884,
  },
  {
    name: "Президентская академия, факультет экономики",
    format: "Лекция",
    category: "training",
    place: "Нижний Новгород",
    date: "Ноябрь 2025",
    dateTime: "2025-11",
    topics: ["AI как фактор роста или падения рынка"],
    photo: "presidential-academy",
    photoAlt: "Полина ведёт лекцию по цифровой экономике в Президентской академии",
    post: 2792,
  },
  {
    name: "III Межрегиональный форум семейных предпринимателей",
    format: "Выступление",
    place: "Нижний Новгород",
    date: "9 апреля 2025",
    dateTime: "2025-04-09",
    topics: ["Внедрение нейросетей в бизнес-процессы"],
    photo: "family-business-forum",
    photoAlt: "Панель с участием Полины на форуме семейных предпринимателей",
    post: 2349,
  },
  {
    name: "Встреча предпринимателей Бора",
    format: "Лекция",
    category: "training",
    place: "Бор",
    date: "Апрель 2025",
    dateTime: "2025-04",
    topics: ["Личный бренд"],
    photo: "personal-brand-bor",
    photoAlt: "Полина ведёт лекцию для предпринимателей Бора",
    post: 2320,
  },
  {
    name: "Конференция «Маркетинг на Волге»",
    format: "Выступление",
    place: "Нижний Новгород",
    date: "2 марта 2025",
    dateTime: "2025-03-02",
    topics: ["Нейросети в маркетинге: прикладные инструменты и кейсы"],
    photo: "marketing-on-volga",
    photoAlt: "Полина выступает на сцене конференции «Маркетинг на Волге»",
    photoPosition: "50% 60%",
    post: 2190,
    topicPost: 1895,
  },
  {
    name: "Открытый диалог «Медиа. Молодёжь. Будущее»",
    format: "Лекция",
    category: "training",
    place: "Университет Добролюбова, Нижний Новгород",
    date: "24 декабря 2024",
    dateTime: "2024-12-24",
    topics: ["Репутация в медиа-среде. Новые технологии развития медиа"],
    photo: "dobrolyubov-university",
    photoAlt: "Полина с микрофоном на открытом диалоге в Университете Добролюбова",
    post: 1763,
  },
];
