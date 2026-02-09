import { Container } from "./ui";

export function FAQ() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-tight">FAQ</h2>
            <p className="mt-3 text-black/70">
              Clear answers. No fluff.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="grid gap-4">
              <Item
                q="Is this AI SaaS?"
                a="Not yet. We’re a premium performance partner: capture + clean analytics + elite branding. As we grow, the tracking becomes deeper and more automated."
              />
              <Item
                q="How do you deliver analytics?"
                a="A simple, coach-friendly report + key clips. We prioritize clarity and action — not complicated dashboards."
              />
              <Item
                q="Do you cover outside Chennai?"
                a="Yes — we start in Chennai and scale across Tamil Nadu based on scheduling and partner plans."
              />
              <Item
                q="What do you need from the academy?"
                a="Space access, training schedule, and a point-of-contact. We handle setup and shooting."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="text-sm font-bold">{q}</div>
      <div className="mt-2 text-sm text-black/70">{a}</div>
    </div>
  );
}
