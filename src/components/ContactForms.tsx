export function ContactForms() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div id="contact" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              General contact
            </h2>
            <p className="text-sm leading-6 text-muted">
              Have a question or want to partner with Winepress Woman? Send a
              message and we’ll respond as soon as possible.
            </p>

            <form className="grid gap-3" aria-label="General contact form">
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-foreground">Name</span>
                <input
                  name="name"
                  className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-foreground outline-none focus:border-foreground"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-foreground">Email</span>
                <input
                  type="email"
                  name="email"
                  className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-foreground outline-none focus:border-foreground"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-foreground">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-foreground"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-surface hover:opacity-90"
              >
                Send Message
              </button>
              <p className="text-xs text-muted">
                Placeholder form. Connect to your form provider or API route in
                production.
              </p>
            </form>
          </div>

          <div id="speaking" className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Speaking request
            </h2>
            <p className="text-sm leading-6 text-muted">
              Invite Dr. Chassity HD to speak at your church, conference,
              leadership event, or women’s empowerment gathering.
            </p>

            <form className="grid gap-3" aria-label="Speaking request form">
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-foreground">Organization</span>
                <input
                  name="organization"
                  className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-foreground outline-none focus:border-foreground"
                  required
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-foreground">Contact Name</span>
                <input
                  name="contactName"
                  className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-foreground outline-none focus:border-foreground"
                  required
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-foreground">Email</span>
                <input
                  type="email"
                  name="contactEmail"
                  className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-foreground outline-none focus:border-foreground"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-foreground">Event Date</span>
                <input
                  type="date"
                  name="eventDate"
                  className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-foreground outline-none focus:border-foreground"
                  required
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-foreground">Theme / Goals</span>
                <textarea
                  name="goals"
                  rows={5}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-foreground"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-surface hover:opacity-90"
              >
                Submit Speaking Request
              </button>
              <p className="text-xs text-muted">
                Placeholder form. Connect to your form provider or API route in
                production.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
