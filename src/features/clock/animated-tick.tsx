import { ClockFace } from "./clock-face";

interface AnimatedClockProps {
  time: Date | null;
}

export const AnimatedTick: React.FC<AnimatedClockProps> = () => {
  return (
    <div className="absolute inset-0">
      <ClockFace className="animate-clock-tick" />
    </div>
  );
};
