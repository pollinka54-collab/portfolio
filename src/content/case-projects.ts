export type CaseScreenshot = {
  file: string;
  alt: string;
  width: number;
  height: number;
};

type CaseProject = {
  title: string;
  description: string;
  screenshot: CaseScreenshot;
  additionalScreenshot?: CaseScreenshot & { label: string };
  screenNote?: string;
  website?: string;
};

type CaseProjectGroup = {
  id: string;
  title: string;
  projects: readonly CaseProject[];
};

const demoNote = "Демонстрационные данные";

export const caseProjectGroups: readonly CaseProjectGroup[] = [
  {
    id: "platforms",
    title: "Платформы",
    projects: [
      {
        title: "AGI Clinic",
        description: "Платформа управления клиникой и мотивации врачей. Показывает начисления за оплаченные приёмы, бонусы за подтверждённые направления и результаты команды.",
        screenshot: {
          file: "doctors-motivation-platform",
          alt: "Экран мотивации врачей в AGI Clinic с начислениями и бонусами за направления",
          width: 1800,
          height: 854,
        },
        additionalScreenshot: {
          label: "Результаты врачей",
          file: "doctors-performance-platform",
          alt: "Экран результатов врачей в AGI Clinic с количеством приёмов по специалистам",
          width: 1800,
          height: 854,
        },
        screenNote: demoNote,
      },
      {
        title: "OilDigest Тендеры",
        description: "Прототип сервиса мониторинга закупок нефтепродуктов с поиском, фильтрами и оценкой соответствия тендеров. Для сбора процедур разработали коннектор к API ТЭК-Торг.",
        screenshot: {
          file: "tender-oildigest-registry",
          alt: "Реестр OilDigest Тендеры с фильтрами, бюджетами, сроками и оценкой соответствия",
          width: 1440,
          height: 900,
        },
        screenNote: demoNote,
      },
      {
        title: "Дашборд финансовой аналитики",
        description: "Выручка, валовая прибыль, рентабельность и факторы изменения результатов на одном экране. Показатели можно сравнивать по месяцам.",
        screenshot: {
          file: "finance-dashboard-demo",
          alt: "Дашборд финансовой аналитики с динамикой продаж и валовой прибыли по месяцам",
          width: 1440,
          height: 836,
        },
        screenNote: demoNote,
      },
    ],
  },
  {
    id: "websites",
    title: "Сайты",
    projects: [
      {
        title: "«Академоптика»",
        description: "Концепция редизайна сайта центра коррекции зрения. Пациент может найти нужную услугу, посмотреть цены и специалистов и перейти к записи.",
        screenshot: {
          file: "website-akademoptika",
          alt: "Первый экран концепции сайта «Академоптика» с навигацией по услугам и кнопкой записи",
          width: 1440,
          height: 900,
        },
        website: "https://pollinka54-collab.github.io/akademoptika-website/",
      },
      {
        title: "BOUQUET",
        description: "Демоверсия сайта цветочного ателье. В ней есть каталог, корзина и подбор букета по поводу, оттенкам и бюджету.",
        screenshot: {
          file: "website-bouquet",
          alt: "Первый экран сайта ателье BOUQUET с переходами в каталог и подбор букета",
          width: 1440,
          height: 900,
        },
        website: "https://pollinka54-collab.github.io/bouquet-msk-site/",
      },
    ],
  },
];
