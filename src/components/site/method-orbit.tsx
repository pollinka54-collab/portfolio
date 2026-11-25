import { method } from "@/content/speaker";

export function MethodOrbit() {
  return (
    <section className="method-section section-pad">
      <div className="section-shell">
        <div className="method-center">
          <h2>Сначала процесс и измеримая задача. Затем технология.</h2>
        </div>
        <ol className="method-orbit">
          {method.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
