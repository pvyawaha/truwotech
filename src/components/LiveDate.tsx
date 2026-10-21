"use client";

import { useEffect, useState } from "react";

/**
 * Today's date in the visitor's own time zone and locale. It renders after
 * mount (a statically built page would otherwise show the build date) and
 * refreshes every minute so it rolls over at midnight.
 */
export default function LiveDate() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(timer);
  }, []);

  const label = now
    ? new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(now)
    : "";
  const iso = now
    ? `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
    : undefined;

  return (
    <p className={`landing-date${now ? " is-ready" : ""}`}>
      <span className="landing-date-dot" aria-hidden="true" />
      <time dateTime={iso}>{label || " "}</time>
    </p>
  );
}
