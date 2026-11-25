import { AboutSection } from "@/components/site/about-section";
import { AwardsSection } from "@/components/site/awards-section";
import { CasesLedger } from "@/components/site/cases-ledger";
import { ContactSection } from "@/components/site/contact-section";
import { FormatsSelector } from "@/components/site/formats-selector";
import { InitiativesSection } from "@/components/site/initiatives-section";
import { MediaSection } from "@/components/site/media-section";
import { MethodOrbit } from "@/components/site/method-orbit";
import { MetricsStrip } from "@/components/site/metrics-strip";
import { OutcomesSection } from "@/components/site/outcomes-section";
import { PhotoGallery } from "@/components/site/photo-gallery";
import { ProgramsSection } from "@/components/site/programs-section";
import { PublicationsSection } from "@/components/site/publications-section";
import { SiteHeader } from "@/components/site/site-header";
import { SocialLinks } from "@/components/site/social-links";
import { SpeakingSection } from "@/components/site/speaking-section";
import { TopicsExplorer } from "@/components/site/topics-explorer";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { speaker } from "@/content/speaker";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export function Portfolio() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section aria-labelledby="speaker-name" className="intro-banner">
          <div className="intro-name">
            <span>Федеральный и международный спикер</span>
            <p className="intro-display-name" id="speaker-name">{speaker.name}</p>
          </div>
          <figure className="intro-portrait">
            <img
              src={speaker.openingPortrait.src}
              srcSet={speaker.openingPortrait.mobileSrc + " 540w, " + speaker.openingPortrait.src + " 900w"}
              sizes="(max-width: 52rem) min(calc(100vw - 2rem), 25rem), 28rem"
              alt={speaker.openingPortrait.alt}
              width={speaker.openingPortrait.width}
              height={speaker.openingPortrait.height}
              fetchPriority="high"
            />
            <figcaption>Конференция «Мозг для бизнеса» · Нижний Новгород</figcaption>
          </figure>
          <div className="intro-thesis">
            <p>{speaker.thesis}</p>
            <a href="#topics">Выбрать тему <span aria-hidden="true">↓</span></a>
            <SocialLinks />
          </div>
        </section>
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
        <MetricsStrip />
        <AboutSection />
        <AwardsSection />
        <TopicsExplorer />
        <OutcomesSection />
        <FormatsSelector />
        <InitiativesSection />
        <SpeakingSection />
        <CasesLedger />
        <MethodOrbit />
        <ProgramsSection />
        <MediaSection />
        <PublicationsSection />
        <PhotoGallery />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div>
          <strong>{speaker.name}</strong>
          <span>Искусственный интеллект в бизнесе и государственных организациях</span>
        </div>
        <a href="#top">Наверх ↑</a>
      </footer>
    </>
  );
}
