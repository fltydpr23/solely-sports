import { Container, Section, Button, GoldPill, Divider } from "./ui";
import { ArrowRight, Shield, Sparkles, TrendingUp } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // TODO
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi Solely Sports — I want to book a Performance Demo for my academy in Chennai/TN."
);

export function Hero() {
  return (
    <section className="relative overflow-hidden premium-bg">
      {/* Background layers (DO NOT WRAP CONTENT IN GRID) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 premium-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/70" />
        <div className="absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-[rgba(194,161,74,0.16)] blur-3xl" />
        <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <Section className="relative pt-10 md:pt-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            {/* LEFT */}
            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <GoldPill>Chennai • Tamil Nadu</GoldPill>
                <GoldPill>Boxing • Badminton</GoldPill>
                <GoldPill>Performance Media + Analytics</GoldPill>
              </div>

              <div className="mt-6 max-w-xl">
                <div className="text-xs font-semibold tracking-widest text-white/60">
                  BUILT FOR COMPETITIVE ACADEMIES
                </div>

                <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
                  Train harder.
                  <span className="block text-[rgb(var(--gold))]">Prove it.</span>
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                  Solely Sports turns training into measurable performance —
                  cinematic capture, coach-first breakdowns, and academy branding that
                  looks elite.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}>
                  Book a Performance Demo <ArrowRight size={16} />
                </Button>
                <Button href="#work" variant="secondary">
                  See Work Samples
                </Button>
              </div>

              <div className="mt-10">
                <Divider />
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <Stat icon={<Shield size={18} />} label="Coach-first reporting" />
                  <Stat icon={<TrendingUp size={18} />} label="Progress you can show" />
                  <Stat icon={<Sparkles size={18} />} label="Elite branding content" />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-5">
              <div className="glass lift rounded-3xl p-5 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
                <div className="relative overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
  <video
    className="h-[270px] w-full object-cover md:h-[370px]"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/hero-poster.jpg"
  >
    <source src="/hero.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

  <div className="absolute bottom-4 left-4 right-4">
    <div className="flex items-center justify-between">
      <div className="text-sm font-semibold">Performance Snapshot</div>
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
        Sample
      </span>
    </div>

    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
      <Metric label="Work rate" value="High" />
      <Metric label="Drop-off" value="Low" />
      <Metric label="Focus" value="Footwork" />
    </div>

    <div className="mt-3 text-[11px] text-white/55">
      Delivered as a clean report + branded clips.
    </div>
  </div>
</div>


                <div className="mt-4 grid gap-3">
                  <MiniCard
                    label="Delivery"
                    value="Reports + clips in 3–5 days"
                  />
                  <MiniCard
                    label="Availability"
                    value="Limited academy slots per month"
                  />
                </div>

                <div className="mt-5 text-xs text-white/55">
                  Built for competitive academies. Not recreational hobby classes.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
      <div className="text-[rgb(var(--gold))]">{icon}</div>
      <div className="text-sm font-semibold text-white/85">{label}</div>
    </div>
  );
}


function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="text-[10px] text-white/60">{label}</div>
      <div className="mt-0.5 text-sm font-bold">{value}</div>
    </div>
  );
}

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white/85">{value}</div>
    </div>
  );
}

