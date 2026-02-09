import { Container, Section } from "./ui";

export function Work() {
  // Replace these with real images later in /public/work/
  const items = [
    { title: "Boxing — Sparring Breakdown", tag: "Capture + Report" },
    { title: "Badminton — Rally & Footwork Review", tag: "Analytics + Clips" },
    { title: "Academy Brand Reel", tag: "Cinematic Edit" },
    { title: "Athlete Portfolio Cut", tag: "Social Pack" },
  ];

  return (
    <Section id="work" className="bg-[#050505]">
      <Container>
        <div className="flex flex-col gap-10">
          <div>
            <div className="text-xs font-semibold tracking-widest text-[rgb(var(--gold))]">
              WORK SAMPLES
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Proof beats claims.
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              This section becomes lethal once you add 6–10 clips. Even placeholders
              make the site feel premium right now.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {items.map((x) => (
              <div key={x.title} className="glass lift overflow-hidden rounded-3xl">
                <div className="h-56 bg-[radial-gradient(circle_at_20%_20%,rgba(194,161,74,0.25),transparent_50%),linear-gradient(to_bottom,#0b0b0b,#040404)]" />
                <div className="p-6">
                  <div className="text-xs font-semibold text-[rgb(var(--gold))]">
                    {x.tag}
                  </div>
                  <div className="mt-1 text-lg font-extrabold">{x.title}</div>
                  <div className="mt-2 text-sm text-white/65">
                    Replace this block with embedded video or a thumbnail grid.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
