const petals = ['#b9472a', '#d79b36', '#5c6b2e'];

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <path key={i} d="M0,-30 C7,-38 7,-48 0,-57 C-7,-48 -7,-38 0,-30Z" fill={petals[i % 3]} transform={`rotate(${i * 30})`} />
      ))}
      <clipPath id="nv-sun">
        <circle r="23" />
      </clipPath>
      <circle r="23" fill="#b9472a" />
      <path d="M-26,12 Q0,2 20,-18 L34,34 L-34,34Z" fill="#d79b36" stroke="#fffaf5" strokeWidth="2.5" clipPath="url(#nv-sun)" />
    </svg>
  );
}

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-word">NutraVie</span>
    </span>
  );
}
