import { siteAsset } from "@/site-asset";
import "./speaking-section.css";

import { useState } from "react";

import { AppearancesTimeline } from "@/components/site/appearances-timeline";
import { additionalSpeakingEvents } from "@/content/speaking-additions";
import { featuredSpeakingEvent, speakingEvents, type SpeakingEvent } from "@/content/speaking";

const channel = "https://t.me/polina_astakhova07";
const events = [...speakingEvents, ...additionalSpeakingEvents].sort((a, b) =>
  b.dateTime.localeCompare(a.dateTime)
);

const filters = [
  { key: "all", label: "Все" },
  { key: "training", label: "Обучение" },
  { key: "speaking", label: "Выступления" },
] as const;
type Filter = (typeof filters)[number]["key"];

function SpeakingCard({ event, featured = false }: { event: SpeakingEvent; featured?: boolean }) {
  return (
    <article className={featured ? "speaking-card speaking-card--featured" : "speaking-card"}>
      <div className="speaking-photo">
        <img
          src={siteAsset(`assets/speaking/${event.photo}.webp`)}
          alt={event.photoAlt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: event.photoPosition }}
        />
      </div>
      <div className="speaking-card-copy">
        <span className="speaking-format">{event.format}</span>
        <h3>{event.name}</h3>
        <p className="speaking-place">
          {event.place && <>{event.place} <span aria-hidden="true">·</span></>}
          <time dateTime={event.dateTime}>{event.date}</time>
        </p>
        <dl className="speaking-topics">
          <dt>{event.topics.length === 1 ? "Тема" : "Темы"}</dt>
          <dd>
            <ul>
              {event.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
          </dd>
        </dl>
        <div className="speaking-links">
          <a href={`${channel}/${event.post}`} target="_blank" rel="noreferrer" aria-label={`Публикация в Telegram: ${event.name}`}>
            Публикация в Telegram <span aria-hidden="true">↗</span>
          </a>
          {event.topicPost && (
            <a href={`${channel}/${event.topicPost}`} target="_blank" rel="noreferrer" aria-label={`Подробнее о событии: ${event.name}`}>
              Подробнее <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function SpeakingSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleEvents = filter === "all"
    ? events
    : events.filter((event) => (event.category ?? "speaking") === filter);
  const showFeatured = filter !== "training";

  return (
    <section className="speaking-section section-pad" id="experience" aria-labelledby="speaking-heading">
      <div className="section-shell">
        <div className="section-heading speaking-heading">
          <h2 id="speaking-heading">Выступления и обучение</h2>
        </div>
        <div className="speaking-filters" role="group" aria-label="Форматы мероприятий">
          {filters.map(({ key, label }) => (
            <button
              type="button"
              key={key}
              aria-controls="speaking-results"
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div id="speaking-results">
          {showFeatured && <SpeakingCard event={featuredSpeakingEvent} featured />}
          <div className={showFeatured ? "speaking-grid" : "speaking-grid speaking-grid--filtered"}>
            {visibleEvents.map((event) => <SpeakingCard event={event} key={event.post} />)}
          </div>
        </div>
        {showFeatured && <AppearancesTimeline />}
      </div>
    </section>
  );
}
