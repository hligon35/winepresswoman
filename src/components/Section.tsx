type SectionProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  body: readonly string[];
};

export function Section({ id, eyebrow, heading, body }: SectionProps) {
  return (
    <section id={id} className="bg-background">
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
          <div className="space-y-4 text-base leading-7 text-muted">
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
