import { Clock } from "./timer";

export default async function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 py-40">
      <Clock />
    </main>
  );
}
