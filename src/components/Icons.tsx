export function DroneIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.3" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      {/* Arms */}
      <line x1="32" y1="32" x2="14" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="32" x2="50" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="32" x2="14" y2="50" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="32" x2="50" y2="50" stroke="currentColor" strokeWidth="2" />
      {/* Rotors */}
      <ellipse cx="14" cy="14" rx="10" ry="3" fill="currentColor" opacity="0.4" />
      <ellipse cx="50" cy="14" rx="10" ry="3" fill="currentColor" opacity="0.4" />
      <ellipse cx="14" cy="50" rx="10" ry="3" fill="currentColor" opacity="0.4" />
      <ellipse cx="50" cy="50" rx="10" ry="3" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="14" r="3" fill="currentColor" />
      <circle cx="50" cy="14" r="3" fill="currentColor" />
      <circle cx="14" cy="50" r="3" fill="currentColor" />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}

export function EVIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Car body */}
      <path d="M8 38h48v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-8z" fill="currentColor" opacity="0.3" />
      <path d="M14 38l6-14h24l6 14" fill="currentColor" opacity="0.5" />
      {/* Windows */}
      <path d="M22 26l-4 10h12V26H22z" fill="currentColor" opacity="0.2" />
      <path d="M34 26v10h12l-4-10H34z" fill="currentColor" opacity="0.2" />
      {/* Wheels */}
      <circle cx="18" cy="46" r="5" fill="currentColor" />
      <circle cx="18" cy="46" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="46" cy="46" r="5" fill="currentColor" />
      <circle cx="46" cy="46" r="2" fill="currentColor" opacity="0.3" />
      {/* Lightning bolt */}
      <path d="M30 16l-2 6h5l-3 8 6-8h-5l3-6h-4z" fill="currentColor" />
    </svg>
  );
}

export function WaterSportsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Board */}
      <ellipse cx="32" cy="40" rx="24" ry="6" fill="currentColor" opacity="0.3" />
      <ellipse cx="32" cy="38" rx="22" ry="4" fill="currentColor" opacity="0.5" />
      {/* Rider silhouette */}
      <circle cx="32" cy="14" r="4" fill="currentColor" />
      <path d="M32 18v10M26 24l6 4 6-4M28 34l4-2 4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Waves */}
      <path d="M4 50c4-4 8 0 12-4s8 0 12-4 8 0 12-4 8 0 12-4 8 0 12-4" stroke="currentColor" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      <path d="M4 56c4-4 8 0 12-4s8 0 12-4 8 0 12-4 8 0 12-4 8 0 12-4" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
    </svg>
  );
}

export function EmbeddedIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Circuit board */}
      <rect x="12" y="12" width="40" height="40" rx="4" fill="currentColor" opacity="0.2" />
      {/* Chip */}
      <rect x="22" y="22" width="20" height="20" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="26" y="26" width="12" height="12" rx="1" fill="currentColor" />
      {/* Pins */}
      <line x1="22" y1="28" x2="14" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="22" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="2" />
      <line x1="22" y1="36" x2="14" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="42" y1="28" x2="50" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="42" y1="32" x2="50" y2="32" stroke="currentColor" strokeWidth="2" />
      <line x1="42" y1="36" x2="50" y2="36" stroke="currentColor" strokeWidth="2" />
      <line x1="28" y1="22" x2="28" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="22" x2="32" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="36" y1="22" x2="36" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="28" y1="42" x2="28" y2="50" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="42" x2="32" y2="50" stroke="currentColor" strokeWidth="2" />
      <line x1="36" y1="42" x2="36" y2="50" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IoTIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Central device */}
      <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.5" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      {/* Signal rings */}
      <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" />
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
      {/* Connected devices */}
      <circle cx="32" cy="8" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="56" cy="32" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="32" cy="56" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="32" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="49" cy="15" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="49" cy="49" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="15" cy="49" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="15" cy="15" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function AIEdgeIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Brain/network */}
      <circle cx="32" cy="20" r="4" fill="currentColor" />
      <circle cx="18" cy="28" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="46" cy="28" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="40" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="50" cy="40" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="24" cy="48" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="40" cy="48" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="32" cy="36" r="3.5" fill="currentColor" opacity="0.8" />
      {/* Connections */}
      <line x1="32" y1="20" x2="18" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="32" y1="20" x2="46" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="18" y1="28" x2="14" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="46" y1="28" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="18" y1="28" x2="32" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="46" y1="28" x2="32" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="14" y1="40" x2="24" y2="48" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="50" y1="40" x2="40" y2="48" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="32" y1="36" x2="24" y2="48" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="32" y1="36" x2="40" y2="48" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Edge glow */}
      <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
