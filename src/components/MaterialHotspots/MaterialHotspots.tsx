import { useState } from 'react';
import './MaterialHotspots.css';

export interface Hotspot {
  id: string;
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
  code: string;
  title: string;
  application: string;
  finish: string;
  origin?: string;
}

interface MaterialHotspotsProps {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  hotspots?: Hotspot[];
}

const DEFAULT_HOTSPOTS: Hotspot[] = [
  {
    id: 'mat-1',
    x: 28,
    y: 38,
    code: 'RF-MAT-01',
    title: 'Cast Architectural Concrete',
    application: 'Load-bearing sheer wall & structural spine',
    finish: 'Smooth board-formed with exposed tie-rod apertures',
    origin: 'Locally batch-blended pozzolana mix',
  },
  {
    id: 'mat-2',
    x: 68,
    y: 54,
    code: 'RF-MAT-02',
    title: 'Smoked European Oak',
    application: 'Integrated acoustic ceiling baffles & joinery',
    finish: 'Ultra-matte natural bio-oil treatment',
    origin: 'FSC-certified sustainable foresting',
  },
  {
    id: 'mat-3',
    x: 44,
    y: 78,
    code: 'RF-MAT-03',
    title: 'Monolithic Fluted Travertine',
    application: 'Floor planes & low-profile reception plinth',
    finish: 'Honed vein-cut with micro-beveled edges',
    origin: 'Quarried Tivoli limestone',
  },
];

export default function MaterialHotspots({
  imageSrc,
  imageAlt,
  title = 'SPATIAL MATERIALITY & DETAIL SPECIFICATION',
  subtitle = 'Interactive material schedule. Select any architectural datum marker below.',
  hotspots = DEFAULT_HOTSPOTS,
}: MaterialHotspotsProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(DEFAULT_HOTSPOTS[0]);

  return (
    <div className="material-hotspots-section">
      <div className="hotspots-header">
        <div className="hotspots-label">
          <span className="hotspots-bullet" />
          <span>TECHNICAL SPECIFICATION</span>
        </div>
        <h3 className="hotspots-title">{title}</h3>
        <p className="hotspots-subtitle">{subtitle}</p>
      </div>

      <div className="hotspots-stage">
        {/* Main Architectural Image */}
        <div className="hotspots-image-container">
          <img src={imageSrc} alt={imageAlt} className="hotspots-image" loading="lazy" />

          {/* Interactive Pins */}
          {hotspots.map((spot, index) => {
            const isActive = activeHotspot?.id === spot.id;
            return (
              <button
                key={spot.id}
                type="button"
                className={`hotspot-pin ${isActive ? 'hotspot-pin--active' : ''}`}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onClick={() => setActiveHotspot(spot)}
                onMouseEnter={() => setActiveHotspot(spot)}
                aria-label={`View spec for ${spot.title}`}
                data-cursor="explore"
              >
                <span className="pin-pulse" />
                <span className="pin-core">0{index + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Spec Card */}
        <div className="hotspots-spec-card">
          {activeHotspot ? (
            <div className="spec-card-content">
              <div className="spec-card-header">
                <span className="spec-code">{activeHotspot.code}</span>
                <span className="spec-status">CERTIFIED</span>
              </div>
              <h4 className="spec-material-name">{activeHotspot.title}</h4>

              <div className="spec-divider" />

              <div className="spec-grid">
                <div className="spec-item">
                  <span className="spec-item-label">APPLICATION</span>
                  <p className="spec-item-value">{activeHotspot.application}</p>
                </div>
                <div className="spec-item">
                  <span className="spec-item-label">FINISH & TEXTURE</span>
                  <p className="spec-item-value">{activeHotspot.finish}</p>
                </div>
                {activeHotspot.origin && (
                  <div className="spec-item">
                    <span className="spec-item-label">SOURCE & PROVENANCE</span>
                    <p className="spec-item-value">{activeHotspot.origin}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="spec-card-empty">
              <p>Hover or click any marker on the elevation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
