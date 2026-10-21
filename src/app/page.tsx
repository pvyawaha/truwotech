import TechIconCycle from "@/components/TechIconCycle";
import LiveDate from "@/components/LiveDate";

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-brand">
        <span className="landing-logo" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.8" />
            <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span>
          Truwo<span className="landing-brand-accent">Tech</span>
        </span>
      </div>

      <section className="landing-center">
        <TechIconCycle />
        <h1 className="landing-title">Great things are being built.</h1>
        <LiveDate />
      </section>
    </main>
  );
}
