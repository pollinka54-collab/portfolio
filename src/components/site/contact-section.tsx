import { useState, type FormEvent } from "react";
import { speaker } from "@/content/speaker";

type FormState = {
  name: string;
  organization: string;
  dateCity: string;
  format: string;
  audience: string;
  task: string;
  contact: string;
};

const initialForm: FormState = {
  name: "",
  organization: "",
  dateCity: "",
  format: "",
  audience: "",
  task: "",
  contact: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const required = [form.name, form.organization, form.dateCity, form.task, form.contact];
    if (required.some((value) => !value.trim())) {
      setError("Заполните имя, организацию, дату и город, задачу и контакт.");
      return;
    }
    setError("");
    const message = [
      "Здравствуйте, Полина! Хочу обсудить выступление.",
      `Имя: ${form.name}`,
      `Организация: ${form.organization}`,
      `Дата и город: ${form.dateCity}`,
      `Формат: ${form.format || "нужно подобрать"}`,
      `Аудитория: ${form.audience || "уточним"}`,
      `Задача: ${form.task}`,
      `Контакт: ${form.contact}`,
    ].join("\n");
    if (typeof window !== "undefined") {
      const contactUrl = `${speaker.contact}?text=${encodeURIComponent(message)}`;
      const opened = window.open(contactUrl, "_blank", "noopener,noreferrer");
      if (!opened) window.location.assign(contactUrl);
    }
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-shell contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">Пригласить Полину</p>
          <h2>Обсудим задачу вашего мероприятия.</h2>
          <p>Расскажите о событии. В Telegram откроется готовое сообщение, которое можно проверить перед отправкой.</p>
          <a href={speaker.contact} target="_blank" rel="noreferrer" className="direct-contact">
            Написать напрямую
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <form className="invite-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <label>
              <span>Имя</span>
              <input value={form.name} onChange={(e) => update("name", e.target.value)} required />
            </label>
            <label>
              <span>Организация</span>
              <input
                value={form.organization}
                onChange={(e) => update("organization", e.target.value)}
                required
              />
            </label>
          </div>
          <label>
            <span>Дата и город</span>
            <input
              value={form.dateCity}
              onChange={(e) => update("dateCity", e.target.value)}
              required
            />
          </label>
          <div className="form-row">
            <label>
              <span>Формат</span>
              <select value={form.format} onChange={(e) => update("format", e.target.value)}>
                <option value="">Подобрать вместе</option>
                <option>Лекция</option>
                <option>Мастер-класс</option>
                <option>Корпоративный интенсив</option>
                <option>Модерация</option>
              </select>
            </label>
            <label>
              <span>Размер аудитории</span>
              <input value={form.audience} onChange={(e) => update("audience", e.target.value)} />
            </label>
          </div>
          <label>
            <span>Тема или задача</span>
            <textarea
              rows={4}
              value={form.task}
              onChange={(e) => update("task", e.target.value)}
              required
            />
          </label>
          <label>
            <span>Ваш контакт</span>
            <input
              value={form.contact}
              onChange={(e) => update("contact", e.target.value)}
              required
            />
          </label>
          {error ? <p className="form-error" role="alert">{error}</p> : null}
          <button type="submit" className="form-submit">
            <span>Пригласить</span>
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
