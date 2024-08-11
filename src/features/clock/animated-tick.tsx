import { ClockFace } from "./clock-face";

export const AnimatedTick = () => {
  return (
    <div className="absolute right-0 bottom-0 w-[150%]">
      <ClockFace className="animate-clock-tick" />
    </div>
  );
};
