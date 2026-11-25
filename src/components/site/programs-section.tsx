import { products } from "@/content/speaker";
import { BookContents, BookPhotos } from "./book-media";

export function ProgramsSection() {
  const books = products.filter((product) => product.type === "Книга");
  const otherProducts = products.filter((product) => product.type !== "Книга");

  return (
    <section className="programs-section section-pad" id="books" aria-labelledby="books-title">
      <div className="section-shell">
        <div className="books-showcase">
          <div className="books-copy">
            <p className="books-label">Автор двух книг о маркетинге</p>
            <h2 id="books-title">Маркетинг, продажи и нейросети</h2>
            <p className="books-lead">
              Практические книги для предпринимателей, руководителей и специалистов,
              которые хотят превращать знания в работающую систему.
            </p>
            <div className="reader-stat">
              <strong>6 000+</strong>
              <span>читателей двух книг</span>
            </div>
          </div>

          <BookPhotos />
        </div>

        <ul className="book-editions">
          {books.map((book) => (
            <li key={book.title}>
              <h3>{book.title}</h3>
              <p>{book.text}</p>
            </li>
          ))}
        </ul>

        <BookContents />

        <div className="programs-support">
          <div className="programs-support-heading">
            <h3>Программы и практические форматы</h3>
            <p>Продолжение выступления в обучении, внедрении и профессиональном сообществе.</p>
          </div>
          <div className="programs-support-grid">
            {otherProducts.map((product) => {
              const content = (
                <>
                  <span className="program-type">{product.type}</span>
                  <h4>{product.title}</h4>
                  <p>{product.text}</p>
                  {"href" in product ? <span className="program-link">Открыть ↗</span> : null}
                </>
              );

              return "href" in product ? (
                <a href={product.href} target="_blank" rel="noreferrer" key={product.title}>
                  {content}
                </a>
              ) : (
                <article key={product.title}>{content}</article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
