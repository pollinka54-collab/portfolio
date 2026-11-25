import { siteAsset } from "@/site-asset";
import "./book-media.css";

type BookImage = {
  file: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

const authorPhoto = {
  file: "author-with-books",
  width: 851,
  height: 1280,
  alt: "Полина Заец (Астахова) с печатными книгами",
  caption: "Фото с книгами",
};

const cover = {
  file: "marketing-sales-neural-networks",
  width: 900,
  height: 1280,
  alt: "Обложка книги Полины Заец «Маркетинг, продажи и нейросети»",
  caption: "Обложка книги",
};

const contents = [
  { file: "contents-1", width: 900, height: 1280, alt: "Оглавление книги, главы 1–5", caption: "Страница 1" },
  { file: "contents-2", width: 895, height: 1280, alt: "Оглавление книги, главы 6–11", caption: "Страница 2" },
  { file: "contents-3", width: 899, height: 1280, alt: "Оглавление книги, главы 12–14", caption: "Страница 3" },
];

function BookImageLink({ file, width, height, alt, caption }: BookImage) {
  const path = siteAsset("assets/books/") + file;

  return (
    <a
      className="book-media-item"
      href={path + ".jpg"}
      target="_blank"
      rel="noreferrer"
      aria-label={alt + ". Открыть в полном размере"}
    >
      <img
        src={path + "-preview.webp"}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
      <span className="book-media-caption">
        {caption} <span aria-hidden="true">↗</span>
      </span>
    </a>
  );
}

export function BookPhotos() {
  return (
    <div className="book-photos">
      <BookImageLink {...authorPhoto} />
      <BookImageLink {...cover} />
    </div>
  );
}

export function BookContents() {
  return (
    <section className="book-contents" aria-labelledby="book-contents-title">
      <div className="book-contents-heading">
        <h3 id="book-contents-title">Оглавление книги</h3>
        <p>Нажмите на страницу, чтобы открыть её в полном размере.</p>
      </div>
      <div className="book-contents-pages">
        {contents.map((page) => <BookImageLink {...page} key={page.file} />)}
      </div>
    </section>
  );
}
