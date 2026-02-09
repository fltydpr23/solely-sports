import Link from "next/link";

export function Container({
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

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/25";

  const primary =
    "bg-white text-black hover:bg-white/90 shadow-[0_18px_50px_rgba(255,255,255,0.12)]";
  const secondary =
    "bg-transparent text-white border border-white/15 hover:border-white/30 hover:bg-white/5";

  return (
    <Link
      href={href}
      className={`${base} ${variant === "primary" ? primary : secondary} ${className}`}
    >
      {children}
    </Link>
  );
}

export function GoldPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[rgb(var(--gold))]" />
      {children}
    </span>
  );
}

export function Divider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  );
}
