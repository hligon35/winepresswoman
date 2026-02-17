import Link from "next/link";

import { links, navLinks } from "@/lib/siteContent";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-2">
        <div className="space-y-3">
          <div className="font-semibold tracking-tight text-foreground">Winepress Woman</div>
          <p className="max-w-prose text-sm text-muted">
            A faith-based women’s empowerment movement for spiritual growth,
            purposeful living, and unwavering confidence in God.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={links.amazonBook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline underline-offset-4"
            >
              Get the Book – Kingdom Konfidence
            </a>
            <Link
              href="/community#join"
              className="text-sm font-medium text-foreground underline underline-offset-4"
            >
              Join the Community
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-foreground">Explore</div>
            <nav aria-label="Footer" className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold text-foreground">Social</div>
            <div className="grid gap-1 text-sm text-muted">
              <a
                href="https://www.instagram.com/winepress_woman/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/groups/1048718107403892"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Facebook Group
              </a>
              <span>LinkedIn (placeholder)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-xs text-muted">
          <span>© {new Date().getFullYear()} Winepress Woman</span>
          <span>Built for Kingdom impact</span>
        </div>
      </div>
    </footer>
  );
}
