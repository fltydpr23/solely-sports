import { Container, Button } from "./ui";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // TODO
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi Solely Sports — I want to book a Performance Demo for my academy in Chennai/TN."
);

export function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/70 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Replace with your logo image later */}
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/10" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wide">SOLELY SPORTS</div>
              <div className="text-[11px] text-white/60">
                Performance • Media • Branding
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <Button href="#pricing" variant="secondary" className="hidden md:inline-flex">
              View Pricing
            </Button>
            <Button href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}>
              Book Demo <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
