import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServicesList } from "@/components/ServicesList";
import { experiencesContent } from "@/lib/siteContent";

export default function ExperiencesPage() {
  return (
    <div className="bg-background">
      <Hero {...experiencesContent.hero} />
      <Section {...experiencesContent.overview} />
      <ServicesList services={experiencesContent.services} />
    </div>
  );
}
