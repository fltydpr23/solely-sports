import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="py-8">
        <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <div className="font-semibold">Solely Sports</div>
          <div className="text-black/60">
            Performance Intelligence • Media • Branding • Chennai, Tamil Nadu
          </div>
        </div>
        <div className="mt-4 text-xs text-black/50">
          © {new Date().getFullYear()} Solely Sports. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
