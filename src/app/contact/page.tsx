import { ContactForms } from "@/components/ContactForms";
import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { contactContent } from "@/lib/siteContent";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <Hero {...contactContent.hero} />
      <ContactForms />
      <SocialLinks />
    </div>
  );
}
