export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg viewBox="0 0 600 500" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,140,255,0.06)" strokeWidth="1" />
          </pattern>
          <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b8cff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#17b363" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b8cff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1a6af5" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="600" height="500" fill="url(#grid)" />

        {/* Central tech sphere */}
        <circle cx="300" cy="250" r="120" fill="url(#heroGrad1)" opacity="0.15" />
        <circle cx="300" cy="250" r="80" fill="url(#heroGrad1)" opacity="0.2" />
        <circle cx="300" cy="250" r="40" fill="url(#heroGrad2)" opacity="0.4" />

        {/* Orbit rings */}
        <ellipse cx="300" cy="250" rx="160" ry="60" stroke="#3b8cff" strokeWidth="1" opacity="0.2" strokeDasharray="8 6" className="animate-[spin_30s_linear_infinite]" style={{ transformOrigin: "300px 250px" }} />
        <ellipse cx="300" cy="250" rx="140" ry="100" stroke="#17b363" strokeWidth="1" opacity="0.15" strokeDasharray="6 8" className="animate-[spin_25s_linear_infinite_reverse]" style={{ transformOrigin: "300px 250px" }} />

        {/* Drone node */}
        <g filter="url(#glow)" className="animate-float" style={{ animationDelay: "0s" }}>
          <circle cx="160" cy="140" r="28" fill="#1a1b2e" stroke="#3b8cff" strokeWidth="1.5" />
          <path d="M152 140l4-8h8l4 8-4 8h-8z" fill="#3b8cff" opacity="0.6" />
          <line x1="150" y1="134" x2="142" y2="128" stroke="#3b8cff" strokeWidth="1" opacity="0.4" />
          <line x1="170" y1="134" x2="178" y2="128" stroke="#3b8cff" strokeWidth="1" opacity="0.4" />
          <line x1="150" y1="146" x2="142" y2="152" stroke="#3b8cff" strokeWidth="1" opacity="0.4" />
          <line x1="170" y1="146" x2="178" y2="152" stroke="#3b8cff" strokeWidth="1" opacity="0.4" />
          <circle cx="142" cy="128" r="3" fill="#3b8cff" opacity="0.5" />
          <circle cx="178" cy="128" r="3" fill="#3b8cff" opacity="0.5" />
          <circle cx="142" cy="152" r="3" fill="#3b8cff" opacity="0.5" />
          <circle cx="178" cy="152" r="3" fill="#3b8cff" opacity="0.5" />
        </g>

        {/* EV node */}
        <g filter="url(#glow)" className="animate-float" style={{ animationDelay: "1s" }}>
          <circle cx="460" cy="160" r="28" fill="#1a1b2e" stroke="#17b363" strokeWidth="1.5" />
          <path d="M450 164h20a2 2 0 002-2v-4l-4-8h-12l-4 8v4a2 2 0 002 2z" fill="#17b363" opacity="0.5" />
          <path d="M458 150l-1 4h4l-2 6 4-6h-3l2-4z" fill="#17b363" />
        </g>

        {/* IoT node */}
        <g filter="url(#glow)" className="animate-float" style={{ animationDelay: "2s" }}>
          <circle cx="140" cy="340" r="28" fill="#1a1b2e" stroke="#3b8cff" strokeWidth="1.5" />
          <circle cx="140" cy="340" r="8" fill="#3b8cff" opacity="0.6" />
          <circle cx="140" cy="340" r="14" stroke="#3b8cff" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
          <circle cx="140" cy="340" r="20" stroke="#3b8cff" strokeWidth="1" opacity="0.15" strokeDasharray="3 3" />
        </g>

        {/* AI node */}
        <g filter="url(#glow)" className="animate-float" style={{ animationDelay: "3s" }}>
          <circle cx="440" cy="360" r="28" fill="#1a1b2e" stroke="#17b363" strokeWidth="1.5" />
          <circle cx="432" cy="352" r="3" fill="#17b363" opacity="0.7" />
          <circle cx="448" cy="352" r="3" fill="#17b363" opacity="0.7" />
          <circle cx="440" cy="365" r="3" fill="#17b363" opacity="0.7" />
          <line x1="432" y1="352" x2="448" y2="352" stroke="#17b363" strokeWidth="1" opacity="0.4" />
          <line x1="432" y1="352" x2="440" y2="365" stroke="#17b363" strokeWidth="1" opacity="0.4" />
          <line x1="448" y1="352" x2="440" y2="365" stroke="#17b363" strokeWidth="1" opacity="0.4" />
        </g>

        {/* Embedded node */}
        <g filter="url(#glow)" className="animate-float" style={{ animationDelay: "1.5s" }}>
          <circle cx="300" cy="100" r="24" fill="#1a1b2e" stroke="#3b8cff" strokeWidth="1.5" />
          <rect x="290" y="90" width="20" height="20" rx="2" fill="#3b8cff" opacity="0.4" />
          <rect x="294" y="94" width="12" height="12" rx="1" fill="#3b8cff" opacity="0.7" />
        </g>

        {/* Water sports node */}
        <g filter="url(#glow)" className="animate-float" style={{ animationDelay: "2.5s" }}>
          <circle cx="300" cy="410" r="24" fill="#1a1b2e" stroke="#17b363" strokeWidth="1.5" />
          <path d="M285 415c3-3 6 0 9-3s6 0 9-3 6 0 9-3 6 0 9-3" stroke="#17b363" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
          <path d="M296 400l4 8 4-8" stroke="#17b363" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Connection lines */}
        <line x1="188" y1="140" x2="276" y2="120" stroke="#3b8cff" strokeWidth="0.5" opacity="0.3" />
        <line x1="432" y1="160" x2="324" y2="120" stroke="#17b363" strokeWidth="0.5" opacity="0.3" />
        <line x1="168" y1="340" x2="260" y2="270" stroke="#3b8cff" strokeWidth="0.5" opacity="0.3" />
        <line x1="412" y1="360" x2="340" y2="270" stroke="#17b363" strokeWidth="0.5" opacity="0.3" />
        <line x1="300" y1="124" x2="300" y2="210" stroke="#3b8cff" strokeWidth="0.5" opacity="0.3" />
        <line x1="300" y1="386" x2="300" y2="290" stroke="#17b363" strokeWidth="0.5" opacity="0.3" />

        {/* Floating particles */}
        <circle cx="200" cy="200" r="2" fill="#3b8cff" opacity="0.4" className="animate-pulse-slow" />
        <circle cx="400" cy="220" r="2" fill="#17b363" opacity="0.4" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <circle cx="250" cy="300" r="1.5" fill="#3b8cff" opacity="0.3" className="animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <circle cx="370" cy="300" r="1.5" fill="#17b363" opacity="0.3" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <circle cx="220" cy="400" r="2" fill="#3b8cff" opacity="0.3" className="animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <circle cx="380" cy="130" r="2" fill="#17b363" opacity="0.3" className="animate-pulse-slow" style={{ animationDelay: "2.5s" }} />
      </svg>
    </div>
  );
}
