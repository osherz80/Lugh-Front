import { LandingScreen } from "@/screens/landing/LandingScreen";
import { LandingHeader } from "@/screens/landing/components/Header/LandingHeader";
import { Footer } from "@/screens/landing/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="flex-1 w-full">
        <LandingScreen />
      </main>
      <Footer />
    </>
  );
}
