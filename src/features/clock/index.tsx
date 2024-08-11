import { NoSleeper } from "@/features/no-sleeper";
import { AnimatedTick } from "./animated-tick";
import { TimeDisplay } from "./time-display";

export const Clock = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-start justify-center">
      <TimeDisplay />
      <AnimatedTick />
      <NoSleeper />
    </div>
  );
};
