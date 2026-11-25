import { metrics } from "@/content/speaker";

export function MetricsStrip() {
  return (
    <section className="metrics-strip" aria-label="Опыт в цифрах">
      <div className="section-shell">
        <p className="rail-note">Данные профессионального портфолио, актуальны на 2026 год</p>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <article
              className={"metric-item" + ("tone" in metric && metric.tone === "books" ? " metric-item--books" : "")}
              key={metric.label}
            >
              <span className="metric-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>
                {"prefix" in metric && <span className="stat-prefix">{metric.prefix} </span>}
                {metric.value}
              </strong>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
