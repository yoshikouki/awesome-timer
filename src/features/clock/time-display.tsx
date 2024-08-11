"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type Time = Date | null;

export const TimeDisplay = () => {
  const [time, setTime] = useState<Time>(null);

  const formatTime = (date: Time) => {
    return date?.toLocaleTimeString("ja-JP", { hour12: false });
  };

  const timerRef = () => {
    const timerInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  };

  return (
    <>
      <div
        className={cn(
          "z-50 mx-4 w-1/2 bg-gradient-to-b from-background to-accent bg-clip-text text-[12vw] text-transparent",
        )}
        ref={timerRef}
      >
        {formatTime(time)}
      </div>
    </>
  );
};
