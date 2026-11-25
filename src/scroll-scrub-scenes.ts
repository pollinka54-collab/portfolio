import { siteAsset } from "@/site-asset";
/**
 * Four semantic legs cut from one continuity-locked generated film.
 * Every poster is the exact first frame of the encoded clip beside it.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

import { agencyReach } from "@/content/speaker";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#70591F",
  background: "#F0E8DA",
  ink: "#2D1B1F",
  muted: "#655659",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    align: "left",
    body:
      "Полина показывает, где ИИ решает рабочую задачу, а где создаёт лишний шум.",
    clip: siteAsset("assets/world/01-clarity.mp4"),
    id: "clarity",
    kicker: "01 / Ясность",
    label: "Ясность",
    linger: 0.2,
    mobileClip: siteAsset("assets/world/01-clarity-mobile.mp4"),
    mobilePoster: siteAsset("assets/world/01-clarity-mobile-poster.png"),
    poster: siteAsset("assets/world/01-clarity-poster.png"),
    scroll: 1.45,
    tags: ["90+ выступлений", "Федеральный спикер"],
    title: "Сложное становится ясным",
  },
  {
    align: "right",
    body:
      "Аудитория видит конкретный путь от проблемы к сценарию, владельцу и метрике.",
    clip: siteAsset("assets/world/02-scenario.mp4"),
    id: "scenario",
    kicker: "02 / Сценарий",
    label: "Сценарий",
    linger: 0.18,
    mobileClip: siteAsset("assets/world/02-scenario-mobile.mp4"),
    mobilePoster: siteAsset("assets/world/02-scenario-mobile-poster.png"),
    poster: siteAsset("assets/world/02-scenario-poster.png"),
    scroll: 1.5,
    tags: [`${agencyReach.niches.prefix} ${agencyReach.niches.value} ниш`, "AI-проекты с 2018"],
    title: "От вопроса к первому пилоту",
  },
  {
    align: "left",
    body:
      "Решение получает владельца, инструкцию, измерение и обученную команду.",
    clip: siteAsset("assets/world/03-system.mp4"),
    id: "system",
    kicker: "03 / Система",
    label: "Система",
    linger: 0.2,
    mobileClip: siteAsset("assets/world/03-system-mobile.mp4"),
    mobilePoster: siteAsset("assets/world/03-system-mobile-poster.png"),
    poster: siteAsset("assets/world/03-system-poster.png"),
    scroll: 1.55,
    tags: [`${agencyReach.implementations.value} кейсов внедрения ИИ`, "Бизнес + госсектор"],
    title: "От пилота к системе",
  },
  {
    align: "right",
    body:
      "После выступления участники понимают, что можно проверить уже на следующей неделе.",
    clip: siteAsset("assets/world/04-action.mp4"),
    id: "action",
    kicker: "04 / Действие",
    label: "Действие",
    linger: 0.16,
    mobileClip: siteAsset("assets/world/04-action-mobile.mp4"),
    mobilePoster: siteAsset("assets/world/04-action-mobile-poster.png"),
    poster: siteAsset("assets/world/04-action-poster.png"),
    scroll: 1.45,
    tags: ["6 000+ читателей", "Практический маршрут"],
    title: "Знание превращается в действие",
  },
];
