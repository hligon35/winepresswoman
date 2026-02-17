import { AuthorIntro } from "@/components/AuthorIntro";
import { EmailOptIn } from "@/components/EmailOptIn";
import { Hero } from "@/components/Hero";
import { PurchaseOptions } from "@/components/PurchaseOptions";
import { Section } from "@/components/Section";
import { TestimonialRail } from "@/components/TestimonialRail";
import { bookContent } from "@/lib/siteContent";

export default function KingdomKonfidencePage() {
  return (
    <div className="bg-background">
      <Hero {...bookContent.hero} />
      <Section {...bookContent.overview} />
      <Section {...bookContent.insideTheBook} />

      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted">
              {bookContent.outcomes.eyebrow}
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {bookContent.outcomes.heading}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              {bookContent.outcomes.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section {...bookContent.whoItsFor} />

      <AuthorIntro {...bookContent.author} />

      <TestimonialRail heading={bookContent.endorsements.heading} items={bookContent.endorsements.quotes} />

      <PurchaseOptions {...bookContent.purchase} />

      <EmailOptIn
        eyebrow={bookContent.optIn.eyebrow}
        heading={bookContent.optIn.heading}
        body={bookContent.optIn.body}
        submitLabel={bookContent.optIn.submitLabel}
      />
    </div>
  );
}
