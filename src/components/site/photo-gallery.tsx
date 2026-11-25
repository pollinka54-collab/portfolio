import { siteAsset } from "@/site-asset";
import "./photo-gallery.css";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const albums = [
  {
    id: "speaking",
    label: "Выступления",
    photoAlt: "Фото с выступлений Полины Заяц (Астаховой)",
    files: Array.from({ length: 68 }, (_, index) => index + 1)
      .filter((number) => number !== 10 && number !== 14)
      .map((number) => "conf_" + number),
  },
  {
    id: "conferences",
    label: "Конференции AGI",
    photoAlt: "Фото с конференции AGI Agency по нейросетям",
    files: Array.from({ length: 12 }, (_, index) => "event_" + (index + 1)),
  },
  {
    id: "community",
    label: "«Время первых»",
    photoAlt: "Фото со встречи сообщества «Время первых»",
    files: Array.from({ length: 8 }, (_, index) => "vp_" + (index + 1)),
  },
];

const photoPath = siteAsset("assets/photo-gallery/");
const carouselOptions = { align: "start", slidesToScroll: "auto" } as const;

type Album = (typeof albums)[number];

function PhotoCarousel({ album }: { album: Album }) {
  const [viewportRef, carousel] = useEmblaCarousel(carouselOptions);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);
  const [openPhoto, setOpenPhoto] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const currentFile = openPhoto === null ? undefined : album.files[openPhoto];

  useEffect(() => {
    if (!carousel) return;

    function updateControls() {
      if (!carousel) return;
      setCanScrollBack(carousel.canScrollPrev());
      setCanScrollForward(carousel.canScrollNext());
    }

    updateControls();
    carousel.on("select", updateControls).on("reInit", updateControls);
    return () => {
      carousel.off("select", updateControls).off("reInit", updateControls);
    };
  }, [carousel]);

  function scrollCarousel(direction: -1 | 1) {
    if (!carousel) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (direction === -1) carousel.scrollPrev(reducedMotion);
    else carousel.scrollNext(reducedMotion);
  }

  function scrollWithKeys(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    scrollCarousel(event.key === "ArrowLeft" ? -1 : 1);
  }

  function showPhoto(index: number) {
    dialog.current?.showModal();
    setOpenPhoto(index);
  }

  function stepPhoto(direction: -1 | 1) {
    setOpenPhoto((index) => {
      if (index === null) return null;
      return Math.min(album.files.length - 1, Math.max(0, index + direction));
    });
  }

  function stepWithKeys(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    stepPhoto(event.key === "ArrowLeft" ? -1 : 1);
  }

  return (
    <>
      <div
        className="photo-carousel"
        role="region"
        aria-label={album.label}
        aria-roledescription="карусель"
        onKeyDown={scrollWithKeys}
      >
        <div className="photo-carousel-controls">
          <span>{album.files.length} фото</span>
          <div className="photo-gallery-arrows">
            <button
              type="button"
              aria-label="Предыдущие фотографии"
              aria-disabled={!canScrollBack}
              onClick={() => scrollCarousel(-1)}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Следующие фотографии"
              aria-disabled={!canScrollForward}
              onClick={() => scrollCarousel(1)}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="photo-carousel-viewport" ref={viewportRef}>
          <ul className="photo-carousel-track">
            {album.files.map((file, index) => (
              <li key={file} className="photo-carousel-slide">
                <button
                  type="button"
                  className="photo-carousel-frame"
                  aria-haspopup="dialog"
                  aria-label={"Открыть фото " + (index + 1) + " из " + album.files.length}
                  onClick={() => showPhoto(index)}
                >
                  <img
                    src={photoPath + file + "-thumb.webp"}
                    alt={album.photoAlt}
                    width={640}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <span className="photo-carousel-enlarge" aria-hidden="true">
                    <Maximize2 />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label={album.label + " — просмотр фотографий"}
        onClose={() => setOpenPhoto(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={stepWithKeys}
      >
        <div className="photo-dialog-panel">
          <header className="photo-dialog-header">
            <p>{album.label}</p>
            <button type="button" aria-label="Закрыть фото" onClick={() => dialog.current?.close()}>
              <X aria-hidden="true" />
            </button>
          </header>
          <div className="photo-dialog-image">
            {currentFile && <img src={photoPath + currentFile + ".webp"} alt={album.photoAlt} />}
          </div>
          <footer className="photo-dialog-footer">
            <button
              type="button"
              aria-label="Предыдущее фото"
              aria-disabled={openPhoto === null || openPhoto === 0}
              onClick={() => stepPhoto(-1)}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <span aria-live="polite" aria-atomic="true">
              {openPhoto !== null && (openPhoto + 1) + " из " + album.files.length}
            </span>
            <button
              type="button"
              aria-label="Следующее фото"
              aria-disabled={openPhoto === null || openPhoto === album.files.length - 1}
              onClick={() => stepPhoto(1)}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </footer>
        </div>
      </dialog>
    </>
  );
}

export function PhotoGallery() {
  const [activeAlbum, setActiveAlbum] = useState(0);
  const tabs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function selectLinkedAlbum() {
      const index = albums.findIndex(({ id }) => window.location.hash === "#photos-tab-" + id);
      if (index !== -1) setActiveAlbum(index);
    }

    selectLinkedAlbum();
    window.addEventListener("hashchange", selectLinkedAlbum);
    return () => window.removeEventListener("hashchange", selectLinkedAlbum);
  }, []);

  function selectAlbum(index: number) {
    setActiveAlbum(index);
    if (window.location.hash.startsWith("#photos-tab-")) {
      window.history.replaceState(window.history.state, "", "#photos-tab-" + albums[index].id);
    }
  }

  function selectWithKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = albums.length - 1;
    let next = index;
    switch (event.key) {
      case "ArrowRight": next = index === last ? 0 : index + 1; break;
      case "ArrowLeft": next = index === 0 ? last : index - 1; break;
      case "Home": next = 0; break;
      case "End": next = last; break;
      default: return;
    }
    event.preventDefault();
    selectAlbum(next);
    tabs.current?.querySelectorAll("button")[next]?.focus();
  }

  return (
    <section className="photo-gallery section-pad" id="gallery" aria-labelledby="photo-gallery-title">
      <div className="section-shell">
        <div className="section-heading photo-gallery-heading">
          <h2 id="photo-gallery-title">Фото с мероприятий</h2>
        </div>
        <div className="photo-gallery-albums" role="tablist" aria-label="Фотоподборки" ref={tabs}>
          {albums.map((album, index) => (
            <button
              type="button"
              role="tab"
              id={"photos-tab-" + album.id}
              aria-controls={"photos-panel-" + album.id}
              aria-selected={activeAlbum === index}
              tabIndex={activeAlbum === index ? 0 : -1}
              key={album.id}
              onClick={() => selectAlbum(index)}
              onKeyDown={(event) => selectWithKeys(event, index)}
            >
              {album.label}
            </button>
          ))}
        </div>
        {albums.map((album, index) => (
          <div
            role="tabpanel"
            id={"photos-panel-" + album.id}
            aria-labelledby={"photos-tab-" + album.id}
            key={album.id}
            hidden={activeAlbum !== index}
          >
            {activeAlbum === index && <PhotoCarousel album={album} />}
          </div>
        ))}
      </div>
    </section>
  );
}
