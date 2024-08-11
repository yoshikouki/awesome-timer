"use client";

import { useState } from "react";

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
    return () => clearInterval(timerInterval);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div
        className="font-bold text-8xl text-white shadow-lg p-8 rounded-lg bg-white/10"
        ref={timerRef}
      >
        {formatTime(time)}
      </div>
    </div>
  );
};
