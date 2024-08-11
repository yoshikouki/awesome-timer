"use client";

import { NoSleep } from "./no-sleep";

export const NoSleeper = () => {
  const noSleepRef = () => {
    const noSleep = new NoSleep();
    noSleep.enable();
    return () => {
      noSleep.disable();
    };
  };

  return <div ref={noSleepRef} />;
};
