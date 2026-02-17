import Image from "next/image";

type EmailOptInProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  body: readonly string[];
  submitLabel: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function EmailOptIn({
  id,
  eyebrow,
  heading,
  body,
  submitLabel,
  imageSrc,
  imageAlt,
}: EmailOptInProps) {
  return (
    <section id={id} className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              {eyebrow ? (
                <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {eyebrow}
                </div>
              ) : null}
              <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {heading}
              </h2>
              <div className="space-y-4 text-sm leading-6 text-muted">
                {body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <form className="grid gap-3" aria-label="Email signup form">
              {imageSrc ? (
                <div className="overflow-hidden rounded-2xl border border-border bg-background">
                  <Image
                    src={imageSrc}
                    alt={imageAlt ?? "Winepress Woman community"}
                    width={1200}
                    height={675}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ) : null}

              <label className="grid gap-1 text-sm">
                <span className="font-medium text-foreground">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none focus:border-foreground"
                  autoComplete="email"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-surface hover:opacity-90"
              >
                {submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
