import Link from "next/link";
import Image from "next/image";

type BookSpotlightProps = {
  eyebrow?: string;
  heading: string;
  body: readonly string[];
  bullets: readonly string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
};

export function BookSpotlight({
  eyebrow,
  heading,
  body,
  bullets,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
}: BookSpotlightProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
          {imageSrc ? (
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={imageSrc}
                alt={imageAlt ?? "Kingdom Konfidence book cover"}
                width={720}
                height={960}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="aspect-[3/4] w-full rounded-2xl border border-border bg-surface"
            />
          )}

          <div className="max-w-3xl space-y-4">
            {eyebrow ? (
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                {eyebrow}
              </div>
            ) : null}
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {heading}
            </h2>
            <div className="space-y-4 text-base leading-7 text-muted">
              {body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-surface hover:opacity-90"
              >
                {primaryCta.label}
              </Link>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-surface px-5 text-sm font-medium text-foreground hover:bg-background"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
