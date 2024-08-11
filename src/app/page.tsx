import { Clock } from "./timer";

export default async function HomePage() {
  return (
    <main className="flex h-svh w-svw flex-col items-center justify-center">
      <Clock />
    </main>
  );
}
