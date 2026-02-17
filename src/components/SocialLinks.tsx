export function SocialLinks() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Social media (placeholders)
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Connect for encouragement, announcements, and community moments.
          </p>
          <div className="mt-4 grid gap-1 text-sm text-muted">
            <a
              href="https://www.instagram.com/winepress_woman/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Instagram: https://www.instagram.com/winepress_woman/
            </a>
            <a
              href="https://www.facebook.com/groups/1048718107403892"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Facebook Group: https://www.facebook.com/groups/1048718107403892
            </a>
            <span>LinkedIn: [SOCIAL_LINKEDIN_URL]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
