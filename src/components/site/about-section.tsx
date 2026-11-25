import { agency, credentials, speaker } from "@/content/speaker";
import { CopyBioButton } from "./copy-bio-button";

export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="section-shell about-layout">
        <div className="about-heading">
          <p className="section-kicker">О спикере</p>
          <h2>Сложное становится ясным, когда есть система.</h2>
          <CopyBioButton />
        </div>
        <div className="about-copy">
          <figure className="about-portrait">
            <img
              src={speaker.portrait.src}
              alt={speaker.portrait.alt}
              width={speaker.portrait.width}
              height={speaker.portrait.height}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <p className="about-lead">{speaker.summary}</p>
        </div>
      </div>

      <div className="section-shell credentials-mosaic" aria-label="Экспертиза и достижения">
        {credentials.map((item) => (
          <article className={"credential-card credential-card--" + item.tone} key={item.key}>
            {"image" in item ? (
              <img
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                loading="lazy"
                decoding="async"
              />
            ) : null}
            <div className="credential-copy">
              <strong className="credential-mark">{item.mark}</strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.key === "books" && (
                <div className="credential-links">
                  <a className="agency-link" href="#books">
                    Книги и оглавление <span aria-hidden="true">↓</span>
                  </a>
                </div>
              )}
              {item.key === "stage" && (
                <div className="credential-links">
                  <a className="agency-link" href="#conferences">
                    О моих конференциях <span aria-hidden="true">↓</span>
                  </a>
                </div>
              )}
              {item.key === "agency" && (
                <div className="credential-links">
                  <a className="agency-link" href={agency.website} target="_blank" rel="noreferrer">
                    Сайт AGI Agency <span aria-hidden="true">↗</span>
                  </a>
                  <a className="agency-link" href="#cases">
                    Кейсы AGI Agency <span aria-hidden="true">↓</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
