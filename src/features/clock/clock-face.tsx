"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Tick = {
  key: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  tickWidth: number;
};

const generateTicks = (size: number | null): Tick[] => {
  if (!size) return [];
  const center = size / 2;
  const radius = size / 2 - 10;

  const ticks: Tick[] = [];
  for (let i = 0; i < 60; i++) {
    const angle = (i / 60) * 360;
    const radians = (angle * Math.PI) / 180;
    const tickLength = size * 0.03;
    const tickWidth = size * 0.001;

    ticks.push({
      key: i,
      x1: center + radius * Math.sin(radians),
      y1: center - radius * Math.cos(radians),
      x2: center + (radius - tickLength) * Math.sin(radians),
      y2: center - (radius - tickLength) * Math.cos(radians),
      tickWidth,
    });
  }
  return ticks;
};

export const ClockFace = ({
  className,
}: {
  className?: string;
}) => {
  const [size, setSize] = useState<number | null>(null);
  const ticks = generateTicks(size);

  const clockFaceRef = (svg: SVGSVGElement) => {
    const resize = () => setSize(svg.parentElement?.clientWidth || 0);
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("visibilitychange", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("visibilitychange", resize);
    };
  };

  return (
    <svg
      width={size || 0}
      height={size || 0}
      className={cn("stroke-black/20", className)}
      ref={clockFaceRef}
    >
      <title>Clock Face</title>
      {ticks.map((tick) => (
        <line
          key={tick.key}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          strokeWidth={tick.tickWidth}
        />
      ))}
    </svg>
  );
};
