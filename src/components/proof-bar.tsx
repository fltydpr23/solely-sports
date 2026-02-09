import { Container } from "./ui";

export function ProofBar() {
  return (
    <section className="border-y border-black/10 bg-white">
      <Container className="py-6">
        <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <div className="font-semibold">Built for serious academies.</div>
          <div className="flex flex-wrap gap-2 text-xs text-black/65">
            <span className="rounded-full bg-black/5 px-3 py-1">Drone + GoPro setup</span>
            <span className="rounded-full bg-black/5 px-3 py-1">Coach-first reporting</span>
            <span className="rounded-full bg-black/5 px-3 py-1">Brand-level edits</span>
            <span className="rounded-full bg-black/5 px-3 py-1">Chennai & TN coverage</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
