import { Container } from "./ui";

export function WhyItMatters() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="rounded-3xl border border-black/10 bg-white p-10 shadow-sm">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Serious academies separate themselves.
              </h2>
              <p className="mt-4 text-black/70">
                This isn’t “just footage.” It’s proof, presence, and positioning —
                the three things that drive retention and reputation.
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="grid gap-3">
                {[
                  "Build parent confidence with measurable progress",
                  "Increase athlete retention through clear tracking",
                  "Attract competitive talent with elite visuals",
                  "Stand out instantly in Chennai’s crowded market",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl bg-black px-5 py-4 text-sm font-semibold text-white"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
