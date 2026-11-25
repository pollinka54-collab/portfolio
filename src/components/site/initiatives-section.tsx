import { siteAsset } from "@/site-asset";
import "./initiatives-section.css";

const initiatives = [
  {
    id: "conferences",
    heading: "Мои конференции по искусственному интеллекту",
    text: "Я организую эти конференции. Начали в Нижнем Новгороде и продолжаем проводить их в разных регионах.",
    stats: [
      { value: "3", label: "крупные конференции в Нижнем Новгороде" },
      { value: "350–400", label: "участников на каждой" },
    ],
    photos: [
      { file: "event_4", alt: "Зал конференции AGI Agency по нейросетям с участниками" },
      { file: "event_9", alt: "Выступление перед аудиторией конференции по нейросетям" },
      { file: "event_7", alt: "Групповая фотография участников конференции" },
    ],
    galleryLabel: "Все фото конференций",
  },
  {
    id: "community",
    heading: "Сообщество «Время первых»",
    text: "Я создала «Время первых» для предпринимателей и топ-менеджеров. Вместе учимся внедрять искусственный интеллект в бизнес-процессы своих компаний.",
    stats: [{ value: "150+", label: "участников сообщества" }],
    photos: [
      { file: "vp_1", alt: "Участники сообщества «Время первых» на общей фотографии" },
      { file: "vp_3", alt: "Общение участников на встрече «Времени первых»" },
      { file: "vp_8", alt: "Встреча сообщества с презентацией на большом экране" },
    ],
    galleryLabel: "Все фото сообщества",
  },
] as const;

export function InitiativesSection() {
  return (
    <>
      {initiatives.map(({ id, heading, text, stats, photos, galleryLabel }) => (
        <section
          className={"initiative-section initiative-section--" + id + " section-pad"}
          id={id}
          aria-labelledby={id + "-title"}
          key={id}
        >
          <div className="section-shell initiative-layout">
            <div className="initiative-copy">
              <h2 id={id + "-title"}>{heading}</h2>
              <p>{text}</p>
              <ul className="initiative-stats">
                {stats.map(({ value, label }) => (
                  <li key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="initiative-media">
              <div className="initiative-photos">
                {photos.map(({ file, alt }) => (
                  <img
                    src={siteAsset("assets/photo-gallery/") + file + "-thumb.webp"}
                    alt={alt}
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    key={file}
                  />
                ))}
              </div>
              <a className="initiative-gallery-link" href={"#photos-tab-" + id}>
                {galleryLabel} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
