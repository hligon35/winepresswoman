type ResourceHubProps = {
  eyebrow?: string;
  heading: string;
  blogIntro: string;
  downloadsIntro: string;
  blogItems: readonly string[];
  downloadItems: readonly string[];
};

export function ResourceHub({
  eyebrow,
  heading,
  blogIntro,
  downloadsIntro,
  blogItems,
  downloadItems,
}: ResourceHubProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <div className="text-xs font-semibold uppercase tracking-widest text-muted">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {heading}
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">Articles</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{blogIntro}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {blogItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">Downloads</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              {downloadsIntro}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
              {downloadItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
