import React, { useEffect, useRef } from "react";

const TRAIL_COUNT = 8;

const GalleryCursor = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const streakRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("cursor-hidden");

    const state = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      tx: window.innerWidth / 2,
      ty: window.innerHeight / 2,
      trails: Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 })),
      prevX: window.innerWidth / 2,
      prevY: window.innerHeight / 2,
    };
    const hoverScale = { value: 1 };
    const isDown = { value: false };

    const handleMove = (event: MouseEvent) => {
      state.tx = event.clientX;
      state.ty = event.clientY;
    };

    const handleDown = () => {
      isDown.value = true;
    };

    const handleUp = () => {
      isDown.value = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    let rafId = 0;
    const loop = () => {
      state.x += (state.tx - state.x) * 0.18;
      state.y += (state.ty - state.y) * 0.18;

      const dx = state.x - state.prevX;
      const dy = state.y - state.prevY;
      const speed = Math.min(Math.hypot(dx, dy) * 0.9, 40);
      const stretch = 1 + speed * 0.035 + (isDown.value ? 0.2 : 0);
      const squash = 1 - Math.min(speed * 0.015, 0.5);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${hoverScale.value * stretch}, ${hoverScale.value * squash})`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${state.x + 18}px, ${state.y + 18}px, 0)`;
      }
      if (streakRef.current) {
        const streakScale = Math.min(1 + speed * 0.06, 3.2);
        streakRef.current.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) rotate(${angle}deg) scaleX(${streakScale})`;
        streakRef.current.style.opacity = isDown.value ? "0.9" : "0.55";
      }

      if (!prefersReduced) {
        let prevX = state.x;
        let prevY = state.y;
        state.trails.forEach((trail, index) => {
          trail.x += (prevX - trail.x) * 0.25;
          trail.y += (prevY - trail.y) * 0.25;
          const trailEl = trailRefs.current[index];
          if (trailEl) {
            trailEl.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%)`;
          }
          prevX = trail.x;
          prevY = trail.y;
        });
      }

      state.prevX = state.x;
      state.prevY = state.y;

      rafId = window.requestAnimationFrame(loop);
    };

    rafId = window.requestAnimationFrame(loop);

    const updateHoverState = (target: HTMLElement | null) => {
      const label = target?.getAttribute("data-cursor-label") || "";
      const root = rootRef.current;
      if (ringRef.current) {
        ringRef.current.style.borderColor = label ? "rgba(192, 107, 62, 0.6)" : "rgba(17, 17, 17, 0.45)";
      }
      if (labelRef.current) {
        labelRef.current.textContent = label;
        labelRef.current.style.opacity = label ? "1" : "0";
      }
      if (root) {
        root.classList.toggle("cursor-hover", Boolean(label));
      }
      hoverScale.value = label ? 1.25 : 1;
    };

    const handlePointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const labelTarget = target.closest("[data-cursor-label]") as HTMLElement | null;
      updateHoverState(labelTarget);
    };

    const handlePointerOut = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const related = (event as MouseEvent).relatedTarget as HTMLElement | null;
      const stillInside = related && related.closest("[data-cursor-label]");
      if (!stillInside) {
        updateHoverState(null);
      }
    };

    document.addEventListener("pointerover", handlePointerOver, true);
    document.addEventListener("pointerout", handlePointerOut, true);

    const magneticTargets = Array.from(
      document.querySelectorAll("[data-cursor-magnetic]")
    ) as HTMLElement[];

    const magneticListeners = magneticTargets.map((el) => {
      const handleMagneticMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const relX = event.clientX - rect.left - rect.width / 2;
        const relY = event.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate3d(${relX * 0.18}px, ${relY * 0.18}px, 0)`;
      };
      const handleMagneticLeave = () => {
        el.style.transform = "translate3d(0px, 0px, 0)";
      };

      el.addEventListener("mousemove", handleMagneticMove);
      el.addEventListener("mouseleave", handleMagneticLeave);

      return { el, handleMagneticMove, handleMagneticLeave };
    });

    return () => {
      document.body.classList.remove("cursor-hidden");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("pointerover", handlePointerOver, true);
      document.removeEventListener("pointerout", handlePointerOut, true);
      magneticListeners.forEach(({ el, handleMagneticMove, handleMagneticLeave }) => {
        el.removeEventListener("mousemove", handleMagneticMove);
        el.removeEventListener("mouseleave", handleMagneticLeave);
        el.style.transform = "translate3d(0px, 0px, 0)";
      });
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-[999]">
      <div ref={streakRef} className="cursor-streak" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={labelRef} className="cursor-label" />
      <div className="cursor-trails">
        {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) trailRefs.current[index] = el;
            }}
            className="cursor-trail"
            style={{ opacity: 0.2 - index * 0.02 }}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryCursor;
