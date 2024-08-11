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
    let wakeLock: WakeLockSentinel | null;
    if (!("wakeLock" in navigator)) return;
    (async () => {
      wakeLock = await navigator.wakeLock.request("screen");
    })();

    return () => {
      clearInterval(timerInterval);
      wakeLock?.release();
      wakeLock = null;
    };
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div
        className="rounded-lg bg-white/10 p-8 font-bold text-8xl text-white shadow-lg"
        ref={timerRef}
      >
        {formatTime(time)}
      </div>
    </div>
  );
};
