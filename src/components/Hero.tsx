import Link from "next/link";
import Image from "next/image";

type HeroProps = {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  logoSrc?: string;
  logoAlt?: string;
};

export function Hero({ headline, subheadline, primaryCta, secondaryCta, logoSrc, logoAlt }: HeroProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            {logoSrc ? (
              <>
                <span className="sr-only">{headline}</span>
                <Image
                  src={logoSrc}
                  alt={logoAlt ?? "Winepress Woman"}
                  width={520}
                  height={520}
                  className="h-auto w-full max-w-[360px] rounded-2xl border border-border bg-surface object-contain p-3 md:max-w-[420px]"
                  priority
                />
              </>
            ) : (
              headline
            )}
          </h1>
          <p className="text-base leading-7 text-muted md:text-lg">
            {subheadline}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
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
    </section>
  );
}
