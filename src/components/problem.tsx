import { Container } from "./ui";

export function Problem() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Hard work means nothing if it isn’t measured.
            </h2>
            <p className="mt-4 text-black/70">
              Most academies train hard. Few can prove progress. Solely Sports
              gives you the evidence — and the presence — that serious athletes
              and parents respect.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Athletes improve, but there’s no measurable proof.",
                "Parents want visible progress they can trust.",
                "Content looks average — and academies blend in.",
                "No structured reporting for coaches or sponsors.",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <div className="text-sm font-semibold">Problem</div>
                  <p className="mt-2 text-sm text-black/70">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
