import Link from "next/link";

type PurchaseOptionsProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  body: readonly string[];
  buttons: ReadonlyArray<{ label: string; href: string }>;
};

export function PurchaseOptions({ id, eyebrow, heading, body, buttons }: PurchaseOptionsProps) {
  return (
    <section id={id} className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="max-w-3xl space-y-4">
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

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              {buttons.map((b) => (
                b.href.startsWith("http") ? (
                  <a
                    key={`${b.label}:${b.href}`}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-surface hover:opacity-90"
                  >
                    {b.label}
                  </a>
                ) : (
                  <Link
                    key={`${b.label}:${b.href}`}
                    href={b.href}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-surface hover:opacity-90"
                  >
                    {b.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
