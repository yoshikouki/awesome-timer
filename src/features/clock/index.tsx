"use client";

import { NoSleep } from "@/features/no-sleep";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AnimatedTick } from "./animated-tick";

type Time = Date | null;

export const Clock = () => {
  const [time, setTime] = useState<Time>(null);

  const formatTime = (date: Time) => {
    if (!date) return;
    return date.toLocaleTimeString("ja-JP", { hour12: false });
  };

  const timerRef = (div: HTMLDivElement) => {
    if (!div) return;
    const timerInterval = setInterval(() => {
      setTime(new Date());
    });
    const noSleep = new NoSleep();
    noSleep.enable();
    return () => {
      clearInterval(timerInterval);
      noSleep.disable();
    };
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-start justify-center">
      <div
        className={cn(
          "z-50 mx-4 w-1/2 bg-gradient-to-b from-background to-accent bg-clip-text text-[12vw] text-transparent",
        )}
        ref={timerRef}
      >
        {formatTime(time)}
      </div>
      <AnimatedTick time={time} />
    </div>
  );
};
