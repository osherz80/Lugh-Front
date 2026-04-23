import { Header } from "@/screens/landing/components/Header/Header";
import { Footer } from "@/screens/landing/components/Footer/Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
