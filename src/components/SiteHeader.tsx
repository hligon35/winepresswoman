"use client";

import Link from "next/link";
import Image from "next/image";
import { useId, useState } from "react";

import { links, navLinks } from "@/lib/siteContent";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-foreground">
          <Image
            src="/WineWoman.jpg"
            alt="Winepress Woman logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-border object-cover"
            priority
          />
          <span>Winepress Woman</span>
        </Link>

        <nav aria-label="Primary" className="hidden flex-1 items-center justify-evenly md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 py-1 text-center text-sm leading-tight text-muted hover:text-foreground"
            >
              {link.label.split(" ").length > 1 ? (
                (() => {
                  const parts = link.label.split(" ");
                  const firstLine = parts.slice(0, -1).join(" ");
                  const secondLine = parts[parts.length - 1];
                  return (
                    <>
                      <span className="block">{firstLine}</span>
                      <span className="block">{secondLine}</span>
                    </>
                  );
                })()
              ) : (
                link.label
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.amazonBook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-brand px-4 text-sm font-medium text-surface hover:opacity-90"
          >
            Get the Book
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="grid gap-1">
              <span className="h-0.5 w-5 rounded bg-foreground" />
              <span className="h-0.5 w-5 rounded bg-foreground" />
              <span className="h-0.5 w-5 rounded bg-foreground" />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-border bg-surface md:hidden">
          <nav
            id={menuId}
            aria-label="Primary"
            className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-2 px-6 py-3 text-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full rounded-xl px-3 py-2 text-sm text-muted hover:bg-background hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
