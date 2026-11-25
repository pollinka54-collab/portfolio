import "./publications-section.css";

import { publications } from "@/content/publications";

export function PublicationsSection() {
  return (
    <section className="publications-section section-pad" id="publications" aria-labelledby="publications-title">
      <div className="section-shell">
        <div className="publications-heading">
          <h2 id="publications-title">Публикации и упоминания</h2>
        </div>

        <ul className="publications-grid">
          {publications.map(({ source, type, title, description, href }) => (
            <li key={href}>
              <a className="publication-card" href={href} target="_blank" rel="noreferrer">
                <span className="publication-source">{source}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="publication-type">
                  {type}
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
