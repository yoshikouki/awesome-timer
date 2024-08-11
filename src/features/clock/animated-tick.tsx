import { ClockFace } from "./clock-face";

interface AnimatedClockProps {
  time: Date | null;
}

export const AnimatedTick: React.FC<AnimatedClockProps> = () => {
  return (
    <div className="absolute right-0 bottom-0 w-[150%]">
      <ClockFace className="animate-clock-tick" />
    </div>
  );
};
