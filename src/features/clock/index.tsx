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
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-primary to-pink-500">
      <div
        className={cn(
          "mx-4 flex w-full items-center justify-center rounded-lg font-black text-[20vw] text-white shadow-lg",
        )}
        ref={timerRef}
      >
        {formatTime(time)}
      </div>
      <AnimatedTick time={time} />
    </div>
  );
};
