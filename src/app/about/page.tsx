import { AuthorIntro } from "@/components/AuthorIntro";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { aboutContent } from "@/lib/siteContent";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <Hero {...aboutContent.hero} />
      <Section {...aboutContent.missionVision} />
      <Section {...aboutContent.story} />
      <Section {...aboutContent.transformation} />
      <Section {...aboutContent.impact} />
      <AuthorIntro {...aboutContent.authorIntro} />
    </div>
  );
}
