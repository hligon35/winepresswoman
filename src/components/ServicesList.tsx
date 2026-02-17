import Link from "next/link";

type Service = {
  title: string;
  description: string;
  ctas: ReadonlyArray<{ label: string; href: string }>;
};

export function ServicesList({ services }: { services: ReadonlyArray<Service> }) {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {service.description}
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {service.ctas.map((cta) => (
                  <Link
                    key={`${service.title}:${cta.href}:${cta.label}`}
                    href={cta.href}
                    className="text-sm font-medium text-foreground underline underline-offset-4"
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
