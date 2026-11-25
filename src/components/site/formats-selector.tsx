import { useState, type KeyboardEvent } from "react";
import { formats } from "@/content/speaker";

type FormatKey = (typeof formats)[number]["key"];

export function FormatsSelector() {
  const [active, setActive] = useState<FormatKey>(formats[0].key);
  const selected = formats.find((format) => format.key === active) ?? formats[0];

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % formats.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + formats.length) % formats.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = formats.length - 1;
    if (next === index && !["Home", "End"].includes(event.key)) return;
    event.preventDefault();
    setActive(formats[next].key);
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [next]?.focus();
  }


  return (
    <section className="formats-section section-pad" id="formats">
      <div className="section-shell">
        <div className="section-heading formats-heading">
          <h2>От одного человека до команды и большого зала.</h2>
          <div className="formats-proof">
            <strong>3 000+</strong>
            <p>участников собственных конференций об искусственном интеллекте за последние два года</p>
          </div>
        </div>
        <div className="formats-layout">
          <div className="format-tabs" role="tablist" aria-label="Форматы работы">
            {formats.map((format, index) => (
              <button
                role="tab"
                aria-selected={active === format.key}
                aria-controls="format-details"
                id={`format-${format.key}`}
                type="button"
                key={format.key}
                onClick={() => setActive(format.key)}
                onKeyDown={(event) => moveTab(event, index)}
                tabIndex={active === format.key ? 0 : -1}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {format.title}
              </button>
            ))}
          </div>
          <div
            className="format-panel"
            id="format-details"
            role="tabpanel"
            aria-labelledby={`format-${selected.key}`}
          >
            <span className="format-orbit" aria-hidden="true" />
            <p className="format-duration">{selected.duration}</p>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <div className="format-audience">
              <span>Для кого</span>
              <strong>{selected.audience}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
