import { EmailOptIn } from "@/components/EmailOptIn";
import { Hero } from "@/components/Hero";
import { ResourceHub } from "@/components/ResourceHub";
import { Section } from "@/components/Section";
import { communityContent } from "@/lib/siteContent";

export default function CommunityPage() {
  return (
    <div className="bg-background">
      <Hero {...communityContent.hero} />
      <Section {...communityContent.community} />
      <ResourceHub {...communityContent.resources} />
      <EmailOptIn {...communityContent.join} />
    </div>
  );
}
