import { Container } from "./ui";

export function Packages() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Performance packages
            </h2>
            <p className="mt-3 max-w-2xl text-black/70">
              Start with a session. Upgrade into a monthly partner model when you want
              consistent tracking, athlete portfolios, and content output.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <PackageCard
              title="Boxing Performance Intelligence"
              bullets={[
                "Full sparring capture",
                "Punch count per round",
                "Work-rate breakdown + drop-off notes",
                "Performance summary report",
                "3 branded social clips",
              ]}
              kicker="Built for fighters, not hobbyists."
            />
            <PackageCard
              title="Badminton Performance Intelligence"
              bullets={[
                "Rally duration tracking",
                "Smash attempts + intensity notes",
                "Court movement review",
                "Performance summary report",
                "3 branded social clips",
              ]}
              kicker="Details win matches."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PackageCard({
  title,
  bullets,
  kicker,
}: {
  title: string;
  bullets: string[];
  kicker: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
      <div className="text-xs font-semibold tracking-widest text-[rgb(var(--gold))]">
        PACKAGE
      </div>
      <h3 className="mt-2 text-xl font-extrabold">{title}</h3>
      <ul className="mt-5 grid gap-2 text-sm text-black/75">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-black" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-2xl bg-black/5 px-4 py-3 text-sm font-semibold">
        {kicker}
      </div>
    </div>
  );
}
