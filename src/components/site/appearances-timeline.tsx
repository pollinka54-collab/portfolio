import { appearances } from "@/content/speaker";

export function AppearancesTimeline() {
  return (
    <details className="speaking-archive">
      <summary>Хронология выступлений <span aria-hidden="true">+</span></summary>
      <div className="timeline">
        {appearances.map((appearance, index) => (
          <a
            className="timeline-item"
            href={appearance.href}
            target="_blank"
            rel="noreferrer"
            key={appearance.event}
          >
            <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="timeline-date">{appearance.date}</span>
            <span className="timeline-main">
              <strong>{appearance.event}</strong>
              <small>{appearance.city}</small>
            </span>
            <span className="timeline-role">{appearance.role}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </details>
  );
}
