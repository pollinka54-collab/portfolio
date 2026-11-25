import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";
import { caseProjectGroups, type CaseScreenshot } from "@/content/case-projects";
import "./photo-gallery.css";
import "./case-showcase.css";

const screenshotsPath = import.meta.env.BASE_URL + "assets/case-projects/";

function fullScreenshot(screenshot: CaseScreenshot) {
  return screenshotsPath + screenshot.file + ".webp";
}

function previewScreenshot(screenshot: CaseScreenshot) {
  return screenshotsPath + screenshot.file + "-preview.webp";
}

export function CaseShowcase() {
  const [activeScreenshot, setActiveScreenshot] = useState<{ title: string; screenshot: CaseScreenshot } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  function showScreenshot(event: MouseEvent<HTMLAnchorElement>, title: string, screenshot: CaseScreenshot) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!dialog.current?.showModal) return;
    event.preventDefault();
    dialog.current.showModal();
    setActiveScreenshot({ title, screenshot });
  }

  return (
    <section className="case-showcase" id="case-projects" aria-labelledby="case-showcase-title">
      <h3 className="cases-subheading" id="case-showcase-title">Платформы и сайты</h3>
      {caseProjectGroups.map((group) => (
        <section className="case-project-group" aria-labelledby={"case-group-" + group.id} key={group.id}>
          <h4 className="case-project-group-title" id={"case-group-" + group.id}>{group.title}</h4>
          <div className={"case-project-grid case-project-grid--" + group.id}>
            {group.projects.map(({ title, description, screenshot, additionalScreenshot, screenNote, website }) => (
              <article className="case-project-card" key={screenshot.file}>
                <a
                  className="case-project-shot"
                  href={fullScreenshot(screenshot)}
                  target="_blank"
                  rel="noreferrer"
                  aria-haspopup="dialog"
                  aria-label={"Увеличить скриншот. " + title}
                  onClick={(event) => showScreenshot(event, title, screenshot)}
                >
                  <img
                    src={previewScreenshot(screenshot)}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="photo-carousel-enlarge" aria-hidden="true"><Maximize2 /></span>
                </a>
                <div className="case-project-copy">
                  <h5>{title}</h5>
                  <p>{description}</p>
                  {screenNote && <p className="case-project-note">{screenNote}</p>}
                  {additionalScreenshot && (
                    <a
                      className="case-project-demo case-project-secondary"
                      href={fullScreenshot(additionalScreenshot)}
                      target="_blank"
                      rel="noreferrer"
                      aria-haspopup="dialog"
                      onClick={(event) => showScreenshot(event, additionalScreenshot.label, additionalScreenshot)}
                    >
                      <img
                        src={previewScreenshot(additionalScreenshot)}
                        alt=""
                        width={additionalScreenshot.width}
                        height={additionalScreenshot.height}
                        loading="lazy"
                        decoding="async"
                      />
                      {additionalScreenshot.label} <Maximize2 aria-hidden="true" />
                    </a>
                  )}
                  {website && (
                    <a
                      className="case-project-demo"
                      href={website}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={"Открыть демоверсию. " + title}
                    >
                      Открыть демоверсию <ArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <dialog
        ref={dialog}
        className="photo-dialog case-project-dialog"
        aria-label="Просмотр скриншота проекта"
        onClose={() => setActiveScreenshot(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="photo-dialog-panel">
          <header className="photo-dialog-header">
            <p>{activeScreenshot?.title}</p>
            <button type="button" aria-label="Закрыть скриншот" onClick={() => dialog.current?.close()}>
              <X aria-hidden="true" />
            </button>
          </header>
          <div className="photo-dialog-image">
            {activeScreenshot && (
              <img src={fullScreenshot(activeScreenshot.screenshot)} alt={activeScreenshot.screenshot.alt} />
            )}
          </div>
          {activeScreenshot && (
            <a className="case-project-demo case-project-original" href={fullScreenshot(activeScreenshot.screenshot)} target="_blank" rel="noreferrer">
              Открыть в полном размере <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </dialog>
    </section>
  );
}
