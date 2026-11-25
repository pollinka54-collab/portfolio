import { interview } from "@/content/speaker";
import { SocialLinks } from "./social-links";

export function MediaSection() {
  return (
    <section className="media-section section-pad" id="media">
      <div className="section-shell media-layout">
        <div className="media-copy">
          <h2>Разговор о бизнесе через искусственный интеллект.</h2>
          <p>
            Интервью о том, как AI меняет управление, маркетинг и скорость принятия решений.
          </p>
          <a className="watch-link" href={interview.href} target="_blank" rel="noreferrer">
            Смотреть интервью
            <span aria-hidden="true">↗</span>
          </a>
          <SocialLinks />
        </div>
        <div className="video-frame">
          <iframe
            src={interview.embed}
            title={interview.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="video-caption">
            <span>{interview.date}</span>
            <strong>{interview.title}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
