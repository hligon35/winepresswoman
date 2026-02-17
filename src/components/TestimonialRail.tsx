import Image from "next/image";

type TestimonialItem = {
  quote: string;
  name: string;
  title?: string;
  avatarSrc?: string;
  avatarAlt?: string;
};

type TestimonialRailProps = {
  heading: string;
  items: readonly TestimonialItem[];
};

function getInitials(name: string) {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
}

export function TestimonialRail({ heading, items }: TestimonialRailProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {heading}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <figure
                key={`${item.name}-${item.quote}`}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
              >
                <blockquote className="flex-1 text-sm leading-6 text-muted">
                  {item.quote}
                </blockquote>


                <figcaption className="mt-auto flex items-center gap-3 pt-4">
                  {item.avatarSrc ? (
                    <Image
                      src={item.avatarSrc}
                      alt={item.avatarAlt ?? `${item.name} avatar`}
                      width={36}
                      height={36}
                      className="h-9 w-9 shrink-0 rounded-full border border-border object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground"
                      aria-hidden="true"
                    >
                      {getInitials(item.name)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="truncate text-xs font-semibold text-foreground">
                      {item.name}
                    </div>
                    {item.title ? (
                      <div className="truncate text-xs text-muted">
                        {item.title}
                      </div>
                    ) : null}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
