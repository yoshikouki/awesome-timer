"use client";

export const Clock = () => {
  const timerRef = (div: HTMLDivElement) => {
    if (!div) return;
    div.innerText = new Date().toString();
  };
  return (
    <div className="text-2xl h-svh tabular-nums" ref={timerRef}>
      Loading...
    </div>
  );
};
