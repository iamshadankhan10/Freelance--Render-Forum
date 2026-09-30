import './SectionLabel.css';

interface SectionLabelProps {
  number?: string;
  label: string;
  dark?: boolean;
}

export default function SectionLabel({ number, label, dark = false }: SectionLabelProps) {
  return (
    <div className={`section-label${dark ? ' section-label--dark' : ''}`}>
      {number && <span className="section-label__num">{number}</span>}
      <span className="section-label__text">{label}</span>
    </div>
  );
}
