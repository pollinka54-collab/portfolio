import { audienceOutcomes } from "@/content/speaker";

export function OutcomesSection() {
  return (
    <section className="outcomes-section section-pad">
      <div className="section-shell outcomes-layout">
        <div>
          <h2>Знание превращается в действие.</h2>
        </div>
        <ol>
          {audienceOutcomes.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
