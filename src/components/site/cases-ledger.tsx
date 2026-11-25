import { agency, agencyReach, cases } from "@/content/speaker";

const vectors = [
  {
    title: "Ускорение процессов",
    description: "Сокращаем время от запроса до результата, автоматизируя повторяющиеся шаги.",
    measure: "Замеряем время выполнения",
  },
  {
    title: "Снижение затрат",
    description: "Уменьшаем объём ручной работы и стоимость выполнения операции.",
    measure: "Считаем затраты на операцию",
  },
  {
    title: "Повышение качества",
    description: "Проверяем результат по единым правилам и сокращаем число ошибок и доработок.",
    measure: "Считаем ошибки и доработки",
  },
] as const;

const examples = [
  {
    title: "Дашборд по продажам и финансам",
    description: "ИИ формирует сводку по данным о продажах и финансовых показателях. Руководитель видит итоги месяца в одном дашборде, а команда тратит меньше времени на ручной сбор данных.",
  },
  {
    title: "Подготовка публикаций для Telegram",
    description: "ИИ составляет контент-план по целям бизнеса, готовит черновики постов и подбирает изображения. После проверки командой согласованные материалы ставятся в расписание.",
  },
] as const;

export function CasesLedger() {
  return (
    <section className="cases-section section-pad" id="cases" aria-labelledby="cases-heading">
      <div className="section-shell">
        <div className="cases-intro">
          <div>
            <p className="section-kicker">AGI Agency</p>
            <h2 id="cases-heading">Как мы внедряем ИИ</h2>
          </div>
          <div className="cases-intro-copy">
            <p>
              Я основатель и генеральный директор AGI Agency. {agency.description} Для проектов
              по внедрению ИИ заранее определяем, какой показатель должен измениться.
            </p>
            <a className="agency-link" href={agency.website} target="_blank" rel="noreferrer">
              Сайт AGI Agency <span aria-hidden="true">↗</span>
            </a>
            <ul className="cases-scale" aria-label="Опыт AGI Agency в цифрах">
              {Object.values(agencyReach).map((fact) => (
                <li key={fact.label}>
                  <strong>
                    {"prefix" in fact && <span className="stat-prefix">{fact.prefix} </span>}
                    {fact.value}
                  </strong>
                  <span>{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="cases-vectors" aria-label="Три направления внедрения ИИ">
          {vectors.map(({ title, description, measure }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <small>{measure}</small>
            </li>
          ))}
        </ul>

        <section className="cases-examples" aria-labelledby="cases-examples-heading">
          <h3 className="cases-subheading" id="cases-examples-heading">Примеры применения</h3>
          <div className="cases-examples-grid">
            {examples.map(({ title, description }) => (
              <article key={title}>
                <h4>{title}</h4>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cases-results" aria-labelledby="cases-results-heading">
          <h3 className="cases-subheading" id="cases-results-heading">Результаты проектов</h3>
          <p className="cases-results-source">Показатели приведены по внутренним данным AGI Agency.</p>
          <div className="cases-ledger">
            {cases.map((item) => (
              <details key={item.sector}>
                <summary>
                  <span>{item.sector}</span>
                  <strong>{item.metric}</strong>
                  <span>{item.result}</span>
                  <span className="case-plus" aria-hidden="true">+</span>
                </summary>
                <div>
                  <strong>{item.second}</strong>
                  <p>{item.note}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
