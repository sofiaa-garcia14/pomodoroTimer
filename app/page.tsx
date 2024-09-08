import { Footer } from "@/components/ui/footer";
import PomodoroTimer from "@/components/ui/PomodoroTimer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 gap-y-20">
      <PomodoroTimer />
      <Footer />
    </main>
  );
}
