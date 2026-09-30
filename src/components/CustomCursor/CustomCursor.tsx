import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cursorType, setCursorType] = useState<string>('default');

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  const mousePosition = useRef({ x: -100, y: -100 });
  const followerPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      const clickableEl = target.closest('a, button, input, textarea, select, .project-card, .interactive-target');

      if (cursorEl) {
        const type = cursorEl.getAttribute('data-cursor') || 'view';
        setCursorType(type);
        setIsHovered(true);
        if (type === 'view') setCursorText('VIEW');
        else if (type === 'drag') setCursorText('DRAG');
        else if (type === 'explore') setCursorText('EXPLORE');
        else if (type === 'close') setCursorText('CLOSE');
        else setCursorText(cursorEl.getAttribute('data-cursor-text') || '');
      } else if (clickableEl) {
        const isProject = clickableEl.classList.contains('project-card');
        if (isProject) {
          setCursorType('view');
          setCursorText('VIEW');
        } else {
          setCursorType('pointer');
          setCursorText('');
        }
        setIsHovered(true);
      } else {
        setCursorType('default');
        setCursorText('');
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth follower animation loop
    let animationFrameId: number;
    const animate = () => {
      const speed = 0.18; // smooth easing factor
      followerPosition.current.x += (mousePosition.current.x - followerPosition.current.x) * speed;
      followerPosition.current.y += (mousePosition.current.y - followerPosition.current.y) * speed;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0)`;
      }

      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.transform = `translate3d(${followerPosition.current.x}px, ${followerPosition.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      {/* Center drafting crosshair dot */}
      <div
        ref={cursorDotRef}
        className={`cursor-dot ${isHovered ? 'cursor-dot--hover' : ''} ${isClicking ? 'cursor-dot--click' : ''}`}
      >
        <span className="crosshair-h" />
        <span className="crosshair-v" />
      </div>

      {/* Trailing follower ring with badge */}
      <div
        ref={cursorFollowerRef}
        className={`cursor-follower cursor-follower--${cursorType} ${isHovered ? 'cursor-follower--hover' : ''} ${isClicking ? 'cursor-follower--click' : ''}`}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
    </div>
  );
}
