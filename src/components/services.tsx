import { Container, Section, Divider } from "./ui";
import { Camera, ChartNoAxesCombined, Trophy } from "lucide-react";

export function Services() {
  return (
    <Section id="services" className="bg-[#070707]">
      <Container>
        <div className="flex flex-col gap-10">
          <div>
            <div className="text-xs font-semibold tracking-widest text-[rgb(var(--gold))]">
              WHAT WE DO
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Performance. Measured. Marketed.
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Premium performance media + analytics for boxing and badminton — built to
              increase credibility, retention, and reputation.
            </p>
          </div>

          <Divider />

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              icon={<Camera size={18} />}
              title="Capture"
              body="Multi-angle 4K sessions with GoPro + drone. Clean angles. Real intensity."
            />
            <Card
              icon={<ChartNoAxesCombined size={18} />}
              title="Analyze"
              body="Coach-first breakdowns: work-rate, consistency, key focus points."
            />
            <Card
              icon={<Trophy size={18} />}
              title="Amplify"
              body="Brand-level edits + content packs that make your academy look elite."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Card({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="glass lift rounded-3xl p-7 shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-[rgb(var(--gold))]">
          {icon}
        </div>
        <div className="text-lg font-extrabold">{title}</div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/70">{body}</p>
    </div>
  );
}
