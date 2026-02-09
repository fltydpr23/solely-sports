import { Container } from "./ui";

export function Pillars() {
  return (
    <section className="bg-black text-white">
      <Container className="py-16">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              We track what matters.
            </h2>
            <p className="mt-3 max-w-2xl text-white/75">
              Premium capture, clean analytics, and aggressive academy branding —
              built for boxing gyms and badminton academies in Chennai & Tamil Nadu.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              title="CAPTURE"
              body="Multi-angle 4K filming with GoPro + drone systems. Clean angles. Real intensity."
            />
            <Card
              title="ANALYZE"
              body="Work-rate, output consistency, session breakdowns. Coach-friendly insights."
            />
            <Card
              title="DOMINATE"
              body="Branded athlete edits and academy reels that elevate your reputation instantly."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10">
      <div className="text-xs font-semibold tracking-widest text-[rgb(var(--gold))]">
        {title}
      </div>
      <div className="mt-3 text-base font-semibold">{body}</div>
    </div>
  );
}
