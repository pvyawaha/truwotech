import { TECH_ICONS } from "./techIcons";

/** Seconds each icon owns the stage before the next one takes over. */
const SLOT_SECONDS = 1.1;

/**
 * Builds the keyframes from the icon count so the cycle stays seamless when
 * icons are added or removed. Every icon runs the same animation, offset by
 * its index, so exactly one icon is on stage at a time.
 */
function cycleKeyframes(count: number) {
  const cycle = count * SLOT_SECONDS;
  const at = (seconds: number) => `${((seconds / cycle) * 100).toFixed(3)}%`;
  const enterEnd = at(0.18);
  const holdEnd = at(SLOT_SECONDS - 0.2);
  const exitEnd = at(SLOT_SECONDS + 0.1);
  const drawEnd = at(0.62);
  return `
@keyframes tech-cycle {
  0% { opacity: 0; transform: scale(0.8) rotate(-8deg); filter: blur(8px); }
  ${enterEnd} { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0); }
  ${holdEnd} { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0); }
  ${exitEnd}, 100% { opacity: 0; transform: scale(1.16) rotate(4deg); filter: blur(10px); }
}
@keyframes tech-fade {
  0% { opacity: 0; }
  ${enterEnd}, ${holdEnd} { opacity: 1; }
  ${exitEnd}, 100% { opacity: 0; }
}
@keyframes tech-draw {
  0% { stroke-dashoffset: 1; }
  ${drawEnd}, 100% { stroke-dashoffset: 0; }
}
.tech-stage { --slot: ${SLOT_SECONDS}s; --cycle: ${cycle}s; }
@media (prefers-reduced-motion: reduce) {
  .tech-stage { --slot: 3s; --cycle: ${count * 3}s; }
}`;
}

export default function TechIconCycle() {
  return (
    <div className="tech-stage" role="img" aria-label="Technology icons: microchip, drone, AI, cloud, code, robot, electric power, IoT, satellite, global network, data and rocket">
      <style dangerouslySetInnerHTML={{ __html: cycleKeyframes(TECH_ICONS.length) }} />
      <div className="tech-glow" aria-hidden="true" />
      <svg className="tech-ring" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="49" className="tech-ring-track" />
        <circle cx="50" cy="50" r="49" className="tech-ring-ticks" pathLength={240} />
      </svg>
      <div className="tech-orbit" aria-hidden="true">
        <span className="tech-orbit-dot" />
      </div>
      {TECH_ICONS.map((icon, i) => (
        <svg
          key={icon.name}
          className="tech-icon"
          viewBox="-1 -1 26 26"
          stroke={`url(#tech-grad-${i})`}
          style={{ "--i": i } as React.CSSProperties}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`tech-grad-${i}`} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#8eccff" />
              <stop offset="0.55" stopColor="#3b8cff" />
              <stop offset="1" stopColor="#3bcd7e" />
            </linearGradient>
          </defs>
          <g transform={icon.transform}>
            {icon.paths.map((d, j) => (
              <path key={j} d={d} pathLength={1} />
            ))}
          </g>
        </svg>
      ))}
    </div>
  );
}
