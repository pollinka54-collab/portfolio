import { speaker } from "@/content/speaker";

const links = [
  { href: "#about", label: "О Полине" },
  { href: "#topics", label: "Темы" },
  { href: "#experience", label: "Выступления" },
  { href: "#media", label: "Медиа" },
  { href: "#gallery", label: "Фото" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-monogram" href="#top" aria-label="Наверх">
        <span>П</span><span>З</span>
      </a>
      <nav className="site-nav" aria-label="Основная навигация">
        {links.map((link, index) => (
          <a href={link.href} key={link.href}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-invite" href={speaker.contact} target="_blank" rel="noreferrer">
        Пригласить
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
