import { useMemo, useState } from "react";
import { topicFilters, topics, type TopicAudience } from "@/content/speaker";

type FilterKey = "all" | TopicAudience;

export function TopicsExplorer() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const visibleTopics = useMemo(
    () => (filter === "all" ? topics : topics.filter((topic) => topic.audiences.includes(filter))),
    [filter],
  );

  return (
    <section className="topics-section section-pad" id="topics">
      <div className="section-shell">
        <div className="section-heading offset-heading">
          <p className="section-kicker">Темы выступлений</p>
          <h2>Не обзор инструментов. Сценарии, которые меняют работу.</h2>
          <p className="topic-custom-note">
            <strong>Тему выступления подбираю индивидуально</strong>{" "}
            под ваш запрос в области маркетинга, продаж или искусственного интеллекта.
          </p>
        </div>
        <div className="topic-filters" role="group" aria-label="Фильтр тем">
          {topicFilters.map((item) => (
            <button
              type="button"
              key={item.key}
              aria-pressed={filter === item.key}
              onClick={() => setFilter(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="topics-list">
          {visibleTopics.map((topic, index) => (
            <details className="topic-row" key={topic.title}>
              <summary>
                <span className="topic-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="topic-title">{topic.title}</span>
                <span className="topic-summary">{topic.summary}</span>
                <span className="topic-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="topic-detail">
                <span>Результат для аудитории</span>
                <p>{topic.outcome}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
