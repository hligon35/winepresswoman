import Link from "next/link";
import Image from "next/image";

type AuthorIntroProps = {
  eyebrow?: string;
  heading: string;
  body: readonly string[];
  cta: { label: string; href: string };
  photoAlt: string;
  imageSrc?: string;
};

export function AuthorIntro({
  eyebrow,
  heading,
  body,
  cta,
  photoAlt,
  imageSrc,
}: AuthorIntroProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-[240px_1fr] md:items-start">
          <PhotoBlock photoAlt={photoAlt} imageSrc={imageSrc} />

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

            <div className="pt-2">
              <Link
                href={cta.href}
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-surface hover:opacity-90"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoBlock({
  photoAlt,
  imageSrc,
}: {
  photoAlt: string;
  imageSrc?: string;
}) {
  if (!imageSrc) {
    return (
      <div
        role="img"
        aria-label={photoAlt}
        className="aspect-square w-full rounded-2xl border border-border bg-surface"
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <Image
        src={imageSrc}
        alt={photoAlt}
        width={600}
        height={600}
        className="aspect-square h-auto w-full object-cover"
        priority
      />
    </div>
  );
}
