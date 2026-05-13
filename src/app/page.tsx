import { LandingScreen } from "@/screens/landing/LandingScreen";
import { Header } from "@/screens/landing/components/Header/Header";
import { Footer } from "@/screens/landing/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <LandingScreen />
      </main>
      <Footer />
    </>
  );
}
