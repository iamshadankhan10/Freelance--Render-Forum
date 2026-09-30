import { useState, useRef, useCallback, useEffect } from 'react';
import './ComparisonSlider.css';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  caption?: string;
}

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'DIGITAL CAD STUDY // 3D WIREFRAME',
  afterLabel = 'BUILT EXECUTION // PHOTOGRAPHY',
  aspectRatio = '16 / 9',
  caption,
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleInteractionEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  return (
    <div className="comparison-slider-wrapper">
      <div
        ref={containerRef}
        className={`comparison-slider-container ${isDragging ? 'is-dragging' : ''}`}
        style={{ aspectRatio }}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        data-cursor="drag"
      >
        {/* After (Completed) Image - Full width underlayer */}
        <div className="comparison-image-layer comparison-image-after">
          <img src={afterImage} alt="Built execution" loading="lazy" />
          <span className="slider-badge slider-badge--after">{afterLabel}</span>
        </div>

        {/* Before (Digital CAD / Study) Image - Clipped top layer */}
        <div
          className="comparison-image-layer comparison-image-before"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Digital CAD study"
            className="cad-study-filter"
            loading="lazy"
          />
          <span className="slider-badge slider-badge--before">{beforeLabel}</span>
        </div>

        {/* Vertical divider line */}
        <div
          className="slider-divider-line"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular handle */}
          <div className="slider-handle" aria-label="Drag to compare">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 16l-4-4m0 0l4-4m-4 4h18m-4 4l4-4m0 0l-4-4" />
            </svg>
          </div>
        </div>
      </div>

      {caption && (
        <div className="comparison-caption">
          <span className="caption-icon">⌖</span>
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
}
