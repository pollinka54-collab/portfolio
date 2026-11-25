import { speaker } from "@/content/speaker";

export function SocialLinks() {
  return (
    <div className="social-links" role="group" aria-label="Социальные сети">
      {speaker.socials.map(({ label, href }) => (
        <a href={href} target="_blank" rel="noreferrer" key={label}>{label}</a>
      ))}
    </div>
  );
}
