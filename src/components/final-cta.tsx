import { Button, Container } from "./ui";

const WHATSAPP_NUMBER = "919999999999"; // TODO: change
const msg = encodeURIComponent(
  "Hi Solely Sports — I want to book a Performance Demo. Academy: _____. Sport: _____. Location: _____."
);

export function FinalCTA() {
  return (
    <section className="bg-black text-white">
      <Container className="py-16">
        <div className="rounded-3xl bg-white/10 p-10 ring-1 ring-white/10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Ready to raise the standard?
          </h2>
          <p className="mt-3 max-w-2xl text-white/75">
            If you’re building serious athletes, let’s make your academy look and perform
            like it.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
              className="w-full sm:w-auto"
            >
              Book Your Performance Demo
            </Button>
            <Button href="#pricing" variant="secondary" className="w-full sm:w-auto">
              View Pricing
            </Button>
          </div>
          <div className="mt-6 text-xs text-white/60">
            Limited partnership slots each month • Chennai first, then Tamil Nadu
          </div>
        </div>
      </Container>
    </section>
  );
}
