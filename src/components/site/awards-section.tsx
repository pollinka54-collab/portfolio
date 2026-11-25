import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import "./photo-gallery.css";
import "./awards-section.css";

const photoPath = import.meta.env.BASE_URL + "assets/awards/";

const awardEntries = [
  {
    year: "2024",
    title: "Лучший молодой предприниматель Нижегородской области",
    distinction: "Номинация «Медиа»",
    photos: [
      { file: "award-2024-ceremony", alt: "Полина Заец с наградой на церемонии 2024 года", width: 960, height: 1280 },
      { file: "award-2024-portrait", alt: "Полина Заец с призом «Лучший молодой предприниматель»", width: 1280, height: 960 },
      { file: "award-2024-trophy", alt: "Приз «Лучший молодой предприниматель Нижегородской области» в номинации «Медиа»", width: 960, height: 1280 },
    ],
  },
  {
    year: "2021",
    title: "Предприниматель года",
    distinction: "I место в номинации «Лучший проект самозанятых»",
    detail: "Правительство Нижегородской области наградило Полину в 2021 году по итогам конкурса за 2020 год.",
    source: "https://nnov.tpprf.ru/ru/news/416265/",
    photos: [
      { file: "award-2021-portrait", alt: "Полина Заец с дипломом и призом «Предприниматель года»", width: 960, height: 1280 },
      { file: "award-2021-diploma", alt: "Диплом Правительства Нижегородской области за I место в номинации «Лучший проект самозанятых»", width: 960, height: 1280 },
      { file: "award-2021-trophy", alt: "Приз за I место и диплом конкурса «Предприниматель года»", width: 960, height: 1280 },
      { file: "award-2021-celebration", alt: "Праздничный торт с надписью «Предприниматель года» рядом с дипломом", width: 960, height: 1280 },
    ],
  },
] as const;

type Award = (typeof awardEntries)[number];

function AwardCard({ award }: { award: Award }) {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const currentPhoto = photoIndex === null ? undefined : award.photos[photoIndex];

  function stepPhoto(direction: -1 | 1) {
    setPhotoIndex((index) => {
      if (index === null) return null;
      return Math.max(0, Math.min(award.photos.length - 1, index + direction));
    });
  }

  function handleArrowKeys(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    stepPhoto(event.key === "ArrowLeft" ? -1 : 1);
  }

  return (
    <article className="award-card" aria-labelledby={"award-title-" + award.year}>
      <div className="award-card-heading">
        <span className="award-card-year">{award.year}</span>
        <h3 id={"award-title-" + award.year}>{award.title}</h3>
        <p className="award-card-distinction">{award.distinction}</p>
        {"detail" in award && <p className="award-card-detail">{award.detail}</p>}
        {"source" in award && (
          <a className="award-card-source" href={award.source} target="_blank" rel="noreferrer">
            Итоги конкурса <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      <ul className={"award-photo-grid award-photo-grid--" + award.photos.length} aria-label="Фотографии награды">
        {award.photos.map((photo, index) => (
          <li key={photo.file}>
            <a
              className="award-photo-link"
              href={photoPath + photo.file + ".webp"}
              aria-label={"Увеличить фото. " + photo.alt}
              aria-haspopup="dialog"
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                if (!dialog.current?.showModal) return;
                event.preventDefault();
                dialog.current.showModal();
                setPhotoIndex(index);
              }}
            >
              <img
                src={photoPath + photo.file + "-preview.webp"}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
              />
              <span className="photo-carousel-enlarge" aria-hidden="true"><Maximize2 /></span>
            </a>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialog}
        className="photo-dialog award-photo-dialog"
        aria-label={"Фотографии награды " + award.year + " года"}
        onClose={() => setPhotoIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onKeyDown={handleArrowKeys}
      >
        <div className="photo-dialog-panel">
          <header className="photo-dialog-header">
            <p>{award.year} · {award.title}</p>
            <button type="button" aria-label="Закрыть фото" onClick={() => dialog.current?.close()}>
              <X aria-hidden="true" />
            </button>
          </header>
          <div className="photo-dialog-image">
            {currentPhoto && <img src={photoPath + currentPhoto.file + ".webp"} alt={currentPhoto.alt} />}
          </div>
          <footer className="photo-dialog-footer">
            <button type="button" aria-label="Предыдущее фото" aria-disabled={photoIndex === null || photoIndex === 0} onClick={() => stepPhoto(-1)}>
              <ChevronLeft aria-hidden="true" />
            </button>
            <span aria-live="polite" aria-atomic="true">
              {photoIndex !== null && (photoIndex + 1) + " из " + award.photos.length}
            </span>
            <button type="button" aria-label="Следующее фото" aria-disabled={photoIndex === null || photoIndex === award.photos.length - 1} onClick={() => stepPhoto(1)}>
              <ChevronRight aria-hidden="true" />
            </button>
          </footer>
        </div>
      </dialog>
    </article>
  );
}

export function AwardsSection() {
  return (
    <section className="awards-section section-pad" id="awards" aria-labelledby="awards-title">
      <div className="section-shell">
        <div className="section-heading awards-heading">
          <h2 id="awards-title">Награды</h2>
        </div>
        <div className="awards-grid">
          {awardEntries.map((award) => <AwardCard key={award.year} award={award} />)}
        </div>
      </div>
    </section>
  );
}
