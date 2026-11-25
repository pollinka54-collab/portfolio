import { caseExamples, type CaseExample } from "@/content/case-examples";

const featuredCount = 6;
const featuredExamples = caseExamples.slice(0, featuredCount);
const moreExamples = caseExamples.slice(featuredCount);

function ExampleGrid({ examples }: { examples: readonly CaseExample[] }) {
  return (
    <div className="cases-examples-grid">
      {examples.map(({ area, title, process, output }) => (
        <article key={title}>
          <span className="case-example-area">{area}</span>
          <h4>{title}</h4>
          <p>{process}</p>
          <p className="case-example-output"><strong>На выходе</strong> {output}</p>
        </article>
      ))}
    </div>
  );
}

export function CaseExamples() {
  return (
    <section className="cases-examples" id="case-examples" aria-labelledby="cases-examples-heading">
      <h3 className="cases-subheading" id="cases-examples-heading">Примеры применения</h3>
      <ExampleGrid examples={featuredExamples} />
      <details className="case-examples-more">
        <summary>
          <span className="case-examples-show-label">Показать ещё {moreExamples.length} кейсов</span>
          <span className="case-examples-hide-label">Свернуть дополнительные кейсы</span>
          <span className="case-examples-more-icon" aria-hidden="true" />
        </summary>
        <ExampleGrid examples={moreExamples} />
      </details>
    </section>
  );
}
