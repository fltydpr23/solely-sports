
const WHATSAPP_NUMBER = "+919840313000"; // TODO: replace
const WA_TEXT_DEMO = encodeURIComponent(
  "Hi Solely Sports — I want to book a Performance Demo for my academy in Chennai/TN."
);
const WA_TEXT_PRICING = encodeURIComponent(
  "Hi Solely Sports — can you share pricing + available slots for a demo?"
);

const GOLD = "#C2A14A";
const BG = "#0B0D10";

export default function Home() {
  return (
    <main className="min-h-screen text-white" style={{ background: BG }}>
      <Background />
      <SiteNav />
      <Hero />
      <ProofStrip />
      <Work />
      <Services />
      <HowItWorks />
      <Packages />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-18 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* soft grid */}
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />

      {/* glows */}
      <div
        className="absolute -top-64 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(194,161,74,0.18), transparent 60%)",
        }}
      />
      <div className="absolute -right-64 top-[-140px] h-[520px] w-[520px] rounded-full bg-white/[0.06] blur-3xl" />
      <div
        className="absolute -left-64 bottom-[-260px] h-[680px] w-[680px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(194,161,74,0.12), transparent 62%)",
        }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
         <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
  <img
    src="/logo.png"
    alt="Solely Sports logo"
    className="h-7 w-7 object-contain"
  />
</div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-wide">SOLELY SPORTS</div>
            <div className="text-[11px] text-white/60">
              Performance • Media • Analytics
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#services">
            Services
          </a>
          <a className="hover:text-white" href="#work">
            Work
          </a>
          <a className="hover:text-white" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden rounded-xl px-3 py-2 text-sm font-semibold text-white/70 hover:bg-white/5 md:inline-flex"
          >
            View Pricing
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT_DEMO}`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-black shadow-[0_18px_60px_rgba(255,255,255,0.12)] hover:bg-white/5"
          >
            Book Demo
          </a>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-10 md:pt-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Chennai • Tamil Nadu</Pill>
              <Pill>Boxing • Badminton</Pill>
              <Pill>Performance Intelligence</Pill>
            </div>

            <div className="mt-7 max-w-xl">
              <div className="text-xs font-semibold tracking-widest text-white/60">
                HIGH‑PERFORMANCE CAPTURE + COACH‑FIRST BREAKDOWNS
              </div>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
                Performance, documented.
                <span className="block" style={{ color: GOLD }}>
                  Built for serious academies.
                </span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                Solely Sports turns training into measurable performance — cinematic capture,
                coach‑friendly reporting, and content that makes your academy look elite.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT_DEMO}`}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-black shadow-[0_22px_70px_rgba(255,255,255,0.13)] hover:bg-white/8"
              >
                Book a Performance Demo
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/8"
              >
                See Work Samples
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <MiniStat title="Coach-first reporting" desc="Clear, actionable breakdowns." />
              <MiniStat title="Progress you can show" desc="Parents & athletes see proof." />
              <MiniStat title="Elite brand presence" desc="Content that sells your gym." />
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl bg-white/[0.04] p-4 ring-1 ring-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
              <div className="relative overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Performance Snapshot</div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold">
                      Sample
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <Metric label="Work rate" value="High" />
                    <Metric label="Drop-off" value="Low" />
                    <Metric label="Focus" value="Footwork" />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <InfoRow label="Delivery" value="Reports + clips in 3–5 days" />
                <InfoRow label="Availability" value="Limited academy slots per month" />
              </div>

              <div className="mt-4 text-xs text-white/60">
                Built for competitive academies. Not recreational hobby classes.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="mt-14 border-y border-white/10 bg-white/[0.03] py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-white/60">
          <span className="inline-flex items-center gap-2">
            <Dot /> Chennai → Tamil Nadu
          </span>
          <span className="inline-flex items-center gap-2">
            <Dot /> 4K multi-angle capture
          </span>
          <span className="inline-flex items-center gap-2">
            <Dot /> Coach-first reporting
          </span>
          <span className="inline-flex items-center gap-2">
            <Dot /> Content packs
          </span>
          <span className="inline-flex items-center gap-2">
            <Dot /> Limited monthly slots
          </span>
        </div>
      </Container>
    </section>
  );
}

function Work() {
  const items = [
    { tag: "Capture + Report", title: "Boxing — Sparring Breakdown" },
    { tag: "Analytics + Clips", title: "Badminton — Rally Review" },
    { tag: "Cinematic Edit", title: "Academy Brand Reel" },
    { tag: "Social Pack", title: "Athlete Portfolio Cut" },
    { tag: "Progress Proof", title: "Monthly Athlete Tracking" },
    { tag: "Recruitment", title: "Student Athlete Portfolio" },
  ];

  return (
    <Section id="work" className="pt-16 md:pt-20">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="text-xs font-semibold tracking-widest" style={{ color: GOLD }}>
                WORK
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Proof beats claims.
              </h2>
              <p className="mt-4 max-w-2xl text-white/70">
                This section is your conversion engine. Replace placeholders with 6–10 real
                clips and thumbnails.
              </p>
            </div>
            <div className="md:col-span-5 md:flex md:justify-end">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT_DEMO}`}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/8 md:w-auto"
              >
                Request a sample report
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {items.map((x) => (
              <div
                key={x.title}
                className="group overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 shadow-[0_18px_70px_rgba(0,0,0,0.45)]"
              >
                <div className="relative h-48 bg-[radial-gradient(circle_at_20%_20%,rgba(194,161,74,0.20),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.10),transparent_55%),linear-gradient(to_bottom,#0f1217,#0b0d10)]">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.65))]" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-white/60">{x.tag}</div>
                  <div className="mt-1 text-lg font-extrabold">{x.title}</div>
                  <div className="mt-2 text-sm text-white/70">
                    Replace with a thumbnail grid or embedded video.
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

function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs font-semibold tracking-widest" style={{ color: GOLD }}>
              WHAT WE DO
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Performance. Measured. Marketed.
            </h2>
            <p className="mt-4 text-white/70">
              A premium partner for boxing gyms and badminton academies — built to increase
              credibility, retention, and reputation.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4">
              <FeatureCard
                title="Capture"
                desc="Multi‑angle sessions with GoPro + drone. Clean angles. Real intensity."
              />
              <FeatureCard
                title="Analyze"
                desc="Coach‑first breakdowns: work‑rate, consistency, key focus points."
              />
              <FeatureCard
                title="Amplify"
                desc="Brand‑level edits + content packs that elevate your academy instantly."
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl bg-white/[0.04] p-8 ring-1 ring-white/10 shadow-[0_18px_70px_rgba(0,0,0,0.45)] md:p-10">
          <div className="text-xs font-semibold tracking-widest" style={{ color: GOLD }}>
            HOW IT WORKS
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            A simple system. Ruthless consistency.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step n="01" title="Shoot" desc="We capture training or match sessions on-site." />
            <Step
              n="02"
              title="Breakdown"
              desc="You get a coach-friendly report + key clips."
            />
            <Step
              n="03"
              title="Repeat"
              desc="Track progress monthly. Build athlete portfolios."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Packages() {
  return (
    <Section id="pricing">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold tracking-widest" style={{ color: GOLD }}>
                PRICING
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Choose your intensity.
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Start with a session. Upgrade into monthly tracking when you want consistent
                progress proof + content output.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT_PRICING}`}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-black shadow-[0_22px_70px_rgba(255,255,255,0.13)] hover:bg-white/90"
            >
              Get availability on WhatsApp
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <PriceCard
              name="Performance Session"
              price="₹9,999"
              bullets={[
                "On-site capture",
                "Performance snapshot",
                "3 branded clips",
                "Delivery: 3–5 days",
              ]}
            />
            <PriceCard
              featured
              name="Monthly Partner"
              price="₹22,999"
              bullets={[
                "2 sessions/month",
                "Report every session",
                "Content pack",
                "Priority scheduling",
              ]}
            />
            <PriceCard
              name="Elite Academy"
              price="Custom"
              bullets={[
                "Monthly tracking",
                "Athlete portfolios",
                "Brand + media integration",
                "Custom deliverables",
              ]}
            />
          </div>

          <div className="text-xs text-white/55">
            Prices are starting points. Final quote depends on academy size and deliverables.
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-xs font-semibold tracking-widest" style={{ color: GOLD }}>
              SOCIAL PROOF
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Coaches buy proof.
            </h2>
            <p className="mt-4 text-white/70">
              Replace these with real Chennai academy testimonials as you run pilots.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Quote
                name="Head Coach"
                org="Boxing Gym, Chennai"
                text="The breakdowns made training more intentional. Parents loved the progress proof."
              />
              <Quote
                name="Academy Owner"
                org="Badminton Academy"
                text="The content quality instantly elevated our brand. Enquiries went up."
              />
              <Quote
                name="Athlete"
                org="State-level"
                text="Seeing sessions on video with notes helped me fix mistakes fast."
              />
              <Quote
                name="Coach"
                org="Competitive Program"
                text="Clear, simple reporting. Not complicated dashboards. Exactly what we needed."
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FAQ() {
  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-xs font-semibold tracking-widest" style={{ color: GOLD }}>
              FAQ
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Clear answers.
            </h2>
            <p className="mt-4 text-white/70">No buzzwords. Just outcomes.</p>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-4">
              <FAQItem
                q="Is this a SaaS product?"
                a="Not yet. We’re a premium partner: capture + clean analytics + elite branding. Automation comes later."
              />
              <FAQItem
                q="How do you deliver analytics?"
                a="A coach‑friendly report + key clips. Simple, actionable, and fast."
              />
              <FAQItem
                q="Do you cover outside Chennai?"
                a="Yes. We start in Chennai and scale across Tamil Nadu based on scheduling."
              />
              <FAQItem
                q="What do you need from the academy?"
                a="Access to training schedule + a point of contact. We handle setup and capture."
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="rounded-3xl px-8 py-10 text-green shadow-[0_40px_140px_rgba(255,255,255,0.08)] md:px-12">
          <div className="text-xs font-semibold tracking-widest text-black/60">
            LIMITED PARTNER SLOTS
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Ready to raise the standard?
          </h2>
          <p className="mt-4 max-w-2xl text-black/70">
            If you’re building serious athletes, let’s make your academy look and perform
            like it.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT_DEMO}`}
              className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
            >
              Book your demo
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-2xl bg-black/5 px-5 py-3 text-sm font-semibold text-black ring-1 ring-black/10 hover:bg-black/10"
            >
              View pricing
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <Container className="py-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-extrabold">Solely Sports</div>
          <div className="text-xs text-white/60">
            Chennai • Tamil Nadu • Boxing • Badminton
          </div>
        </div>
        <div className="mt-4 text-xs text-white/50">
          © {new Date().getFullYear()} Solely Sports. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 ring-1 ring-white/10">
      <span
        className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: GOLD }}
      />
      {children}
    </span>
  );
}

function MiniStat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      <div className="text-sm font-semibold text-white/90">{title}</div>
      <div className="mt-1 text-xs text-white/60">{desc}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/10">
      <div className="text-[10px] text-white/70">{label}</div>
      <div className="mt-0.5 text-sm font-bold">{value}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
      <div className="text-xs font-semibold text-white/60">{label}</div>
      <div className="text-sm font-semibold text-white/85">{value}</div>
    </div>
  );
}

function Dot() {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ background: GOLD }}
    />
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 shadow-[0_18px_70px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between">
        <div className="text-lg font-extrabold">{title}</div>
        <div className="h-9 w-9 rounded-2xl bg-white/5 ring-1 ring-white/10" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl bg-black/30 p-6 ring-1 ring-white/10">
      <div className="text-xs font-extrabold" style={{ color: GOLD }}>
        {n}
      </div>
      <div className="mt-2 text-lg font-extrabold">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function PriceCard({
  name,
  price,
  bullets,
  featured,
}: {
  name: string;
  price: string;
  bullets: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "rounded-3xl bg-white p-7 text-black shadow-[0_40px_160px_rgba(255,255,255,0.08)]"
          : "rounded-3xl bg-white/[0.04] p-7 text-white ring-1 ring-white/10 shadow-[0_18px_70px_rgba(0,0,0,0.45)]"
      }
    >
      <div
        className={
          featured
            ? "text-xs font-semibold tracking-widest text-black/60"
            : "text-xs font-semibold tracking-widest text-white/60"
        }
      >
        PLAN
      </div>
      <div className="mt-2 text-lg font-extrabold">{name}</div>
      <div
        className={
          featured
            ? "mt-3 text-3xl font-extrabold"
            : "mt-3 text-3xl font-extrabold"
        }
        style={featured ? { color: "#0b0d10" } : { color: GOLD }}
      >
        {price}
      </div>
      <ul
        className={
          featured
            ? "mt-5 grid gap-2 text-sm text-black/70"
            : "mt-5 grid gap-2 text-sm text-white/70"
        }
      >
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span
              className="mt-2 h-1.5 w-1.5 rounded-full"
              style={{ background: featured ? "#0b0d10" : "#ffffff" }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Quote({ name, org, text }: { name: string; org: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 shadow-[0_18px_70px_rgba(0,0,0,0.45)]">
      <div className="text-sm font-semibold">“{text}”</div>
      <div className="mt-4 text-xs font-semibold text-white/60">
        {name} • {org}
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10">
      <div className="text-sm font-extrabold">{q}</div>
      <div className="mt-2 text-sm text-white/70">{a}</div>
    </div>
  );
}
