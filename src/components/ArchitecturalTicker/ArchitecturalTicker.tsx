import './ArchitecturalTicker.css';

interface ArchitecturalTickerProps {
  items?: string[];
  theme?: 'light' | 'dark';
  speed?: 'normal' | 'slow';
}

const DEFAULT_ITEMS = [
  'MATERIALITY & HONESTY',
  'STRUCTURAL PURITY',
  'SPATIAL CLARITY',
  'LIGHT AS A MEDIUM',
  'CONTEXTUAL ARCHITECTURE',
  'TIMELESS PROPORTION',
  'PRECISION CRAFT',
];

export default function ArchitecturalTicker({
  items = DEFAULT_ITEMS,
  theme = 'light',
  speed = 'normal',
}: ArchitecturalTickerProps) {
  // Duplicate array to create a seamless infinite loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div
      className={`architectural-ticker architectural-ticker--${theme} architectural-ticker--${speed}`}
      aria-hidden="true"
    >
      <div className="ticker-track">
        {displayItems.map((item, index) => (
          <span key={index} className="ticker-item">
            <span className="ticker-text">{item}</span>
            <span className="ticker-separator">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
