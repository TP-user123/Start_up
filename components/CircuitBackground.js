"use client";

import { useEffect, useRef } from "react";

const MAX_PULSES = 5;
const PULSE_DURATION = 1150;

export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 700px)");
    const pulses = [];
    let width = 0;
    let height = 0;
    let spacing = 72;
    let frame = 0;
    let lastNode = "";
    let lastPulseAt = 0;
    let lastHoverTarget = null;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, smallScreen.matches ? 1 : 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      spacing = smallScreen.matches ? 58 : 72;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(performance.now());
    };

    const addPulse = (x, y) => {
      if (reducedMotion.matches || document.visibilityState !== "visible") return;
      const col = Math.round(x / spacing);
      const row = Math.round(y / spacing);
      const key = `${col}:${row}`;
      const now = performance.now();
      if (key === lastNode && now - lastPulseAt < 720) return;
      lastNode = key;
      lastPulseAt = now;
      const route = [{ x: col * spacing, y: row * spacing }];
      let cx = col;
      let cy = row;
      let horizontal = Math.random() > .5;
      const hops = smallScreen.matches ? 2 : 4;
      for (let i = 0; i < hops; i += 1) {
        const direction = Math.random() > .5 ? 1 : -1;
        if (horizontal) cx += direction;
        else cy += direction;
        route.push({ x: cx * spacing, y: cy * spacing });
        horizontal = !horizontal;
      }
      if (pulses.length >= MAX_PULSES) pulses.shift();
      pulses.push({ route, started: performance.now(), hue: [200, 148, 2][Math.floor(Math.random() * 3)] });
      if (!frame) frame = requestAnimationFrame(draw);
    };

    function draw(now) {
      frame = 0;
      context.clearRect(0, 0, width, height);
      const light = document.documentElement.dataset.theme === "light";
      context.lineWidth = 1;
      context.strokeStyle = light ? "rgba(35,80,132,.075)" : "rgba(164,193,235,.075)";
      context.beginPath();
      for (let x = spacing / 2; x < width; x += spacing) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
      }
      for (let y = spacing / 2; y < height; y += spacing) {
        context.moveTo(0, y);
        context.lineTo(width, y);
      }
      context.stroke();

      for (let p = pulses.length - 1; p >= 0; p -= 1) {
        const pulse = pulses[p];
        const age = now - pulse.started;
        if (age >= PULSE_DURATION || pulse.route.length < 2) { pulses.splice(p, 1); continue; }
        // RAF timestamps can be a little earlier than performance.now() from the
        // pointer event that created the pulse, so clamp the initial progress.
        const normalizedProgress = Math.min(1, Math.max(0, age / PULSE_DURATION));
        const progress = normalizedProgress * (pulse.route.length - 1);
        const segment = Math.min(Math.floor(progress), pulse.route.length - 2);
        const amount = Math.min(1, Math.max(0, progress - segment));
        const color = pulse.hue === 2 ? "244,91,88" : pulse.hue === 148 ? "42,190,139" : "65,153,255";
        context.save();
        context.lineCap = "round";
        context.lineJoin = "round";
        context.shadowBlur = 15;
        context.shadowColor = `rgba(${color},.68)`;
        context.strokeStyle = `rgba(${color},${(1 - age / PULSE_DURATION) * .7})`;
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(pulse.route[0].x, pulse.route[0].y);
        for (let i = 1; i <= segment; i += 1) context.lineTo(pulse.route[i].x, pulse.route[i].y);
        const from = pulse.route[segment];
        const to = pulse.route[segment + 1];
        if (from && to) {
          context.lineTo(from.x + (to.x - from.x) * amount, from.y + (to.y - from.y) * amount);
        }
        context.stroke();
        const tip = to || from;
        const prior = from || pulse.route[0];
        const dotX = prior.x + (tip.x - prior.x) * amount;
        const dotY = prior.y + (tip.y - prior.y) * amount;
        context.fillStyle = `rgba(230,248,255,${1 - age / PULSE_DURATION})`;
        context.beginPath();
        context.arc(dotX, dotY, 2.2, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
      if (pulses.length) frame = requestAnimationFrame(draw);
    }

    const onMove = (event) => addPulse(event.clientX, event.clientY);
    const onClick = (event) => { lastNode = ""; addPulse(event.clientX, event.clientY); };
    const onHover = (event) => {
      const target = event.target instanceof Element ? event.target.closest("a,button,.service-row,.service-detail,.portfolio-card,.team-person,.process-step") : null;
      if (!target || target === lastHoverTarget) return;
      lastHoverTarget = target;
      lastNode = "";
      addPulse(event.clientX, event.clientY);
    };
    const onHoverOut = (event) => {
      if (lastHoverTarget && !lastHoverTarget.contains(event.relatedTarget)) lastHoverTarget = null;
    };
    const onMotionChange = () => { if (reducedMotion.matches) pulses.length = 0; };
    const onVisibility = () => { if (document.visibilityState === "hidden") { pulses.length = 0; cancelAnimationFrame(frame); frame = 0; } };
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onClick, { passive: true });
    document.addEventListener("pointerover", onHover, { passive: true });
    document.addEventListener("pointerout", onHoverOut, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener?.("change", onMotionChange);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
      document.removeEventListener("pointerover", onHover);
      document.removeEventListener("pointerout", onHoverOut);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener?.("change", onMotionChange);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="circuit-background" aria-hidden="true" />;
}
