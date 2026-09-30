import { useState, useEffect } from 'react';
import './ArchitecturalGrid.css';

export default function ArchitecturalGrid() {
  const [gridActive, setGridActive] = useState<boolean>(() => {
    return localStorage.getItem('rf_grid_active') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('rf_grid_active', gridActive.toString());
    if (gridActive) {
      document.body.classList.add('grid-overlay-active');
    } else {
      document.body.classList.remove('grid-overlay-active');
    }
  }, [gridActive]);

  return (
    <>
      {/* Floating Blueprint Toggle Button */}
      <button
        type="button"
        className={`grid-toggle-btn ${gridActive ? 'grid-toggle-btn--active' : ''}`}
        onClick={() => setGridActive(!gridActive)}
        title="Toggle Architectural Blueprint Grid [G]"
        aria-label="Toggle Architectural Alignment Grid"
        data-cursor="pointer"
      >
        <span className="grid-toggle-icon">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="12" height="12" rx="1" />
            <line x1="8" y1="2" x2="8" y2="14" strokeDasharray="2 2" />
            <line x1="2" y1="8" x2="14" y2="8" strokeDasharray="2 2" />
          </svg>
        </span>
        <span className="grid-toggle-label">
          GRID: <strong>{gridActive ? 'ON' : 'OFF'}</strong>
        </span>
      </button>

      {/* Blueprint Grid Overlay Elements */}
      {gridActive && (
        <div className="architectural-grid-overlay" aria-hidden="true">
          {/* Viewport Frame Brackets */}
          <div className="corner-bracket corner-tl">┌ 0,0</div>
          <div className="corner-bracket corner-tr">┐ 100vw</div>
          <div className="corner-bracket corner-bl">└ RF.STUDIO</div>
          <div className="corner-bracket corner-br">┘ +100vh</div>

          {/* Top Axis Ribbon */}
          <div className="grid-axis-ribbon">
            <span className="grid-spec-tag">REF: RF-AXIS-2026</span>
            <span className="grid-spec-tag">LAT 28°32&apos;07&quot;N · LONG 77°23&apos;28&quot;E</span>
            <span className="grid-spec-tag">MODULAR GRID 12-COL // 1:100</span>
          </div>

          {/* 12 Vertical Architectural Columns */}
          <div className="grid-columns-container">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="grid-col-line">
                <span className="grid-col-number">{String.fromCharCode(65 + i)}-0{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Left Vertical Datum Markers */}
          <div className="grid-datum-markers">
            <div className="datum-tick" style={{ top: '15%' }}><span>+0.00 FL</span></div>
            <div className="datum-tick" style={{ top: '35%' }}><span>+3.20 LVL-1</span></div>
            <div className="datum-tick" style={{ top: '55%' }}><span>+6.40 LVL-2</span></div>
            <div className="datum-tick" style={{ top: '75%' }}><span>+9.60 ROOF</span></div>
            <div className="datum-tick" style={{ top: '90%' }}><span>PARAPET</span></div>
          </div>
        </div>
      )}
    </>
  );
}
