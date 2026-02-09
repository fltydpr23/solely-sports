import { Button, Container } from "./ui";

const WHATSAPP_NUMBER = "919999999999"; // TODO: change
const msg = encodeURIComponent(
  "Hi Solely Sports — can you share pricing and available slots for a Performance Session / Monthly Partner plan?"
);

export function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <Container className="py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Pricing
              </h2>
              <p className="mt-3 max-w-2xl text-black/70">
                Built for mid and elite academies. Limited partnership slots each month.
              </p>
            </div>
            <Button href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}>
              Get Availability on WhatsApp
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PriceCard
              name="Performance Session"
              price="₹9,999"
              bullets={[
                "On-site capture",
                "Basic performance summary",
                "3 branded clips",
                "Delivery: 3–5 days",
              ]}
            />
            <PriceCard
              name="Monthly Partner"
              price="₹22,999"
              highlight
              bullets={[
                "2 sessions/month",
                "Performance report every session",
                "Content pack",
                "Priority scheduling",
              ]}
            />
            <PriceCard
              name="Elite Academy Partner"
              price="Custom"
              bullets={[
                "Monthly tracking",
                "Athlete portfolios",
                "Branding + media strategy",
                "Custom deliverables",
              ]}
            />
          </div>

          <p className="text-xs text-black/55">
            *Prices are starting points. Final quote depends on academy size, deliverables,
            and shoot complexity.
          </p>
        </div>
      </Container>
    </section>
  );
}

function PriceCard({
  name,
  price,
  bullets,
  highlight = false,
}: {
  name: string;
  price: string;
  bullets: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-8 shadow-sm",
        highlight
          ? "border-black bg-black text-white shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
          : "border-black/10 bg-white",
      ].join(" ")}
    >
      <div
        className={[
          "text-xs font-semibold tracking-widest",
          highlight ? "text-[rgb(var(--gold))]" : "text-[rgb(var(--gold))]",
        ].join(" ")}
      >
        PLAN
      </div>
      <div className="mt-2 text-xl font-extrabold">{name}</div>
      <div className="mt-3 text-3xl font-extrabold">{price}</div>
      <ul className={["mt-6 grid gap-2 text-sm", highlight ? "text-white/80" : "text-black/75"].join(" ")}>
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className={["mt-1 h-2 w-2 rounded-full", highlight ? "bg-white" : "bg-black"].join(" ")} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
