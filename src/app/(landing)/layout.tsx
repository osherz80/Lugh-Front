import { Header } from "@/components/landing/Header/Header";
import { Footer } from "@/components/landing/Footer/Footer";

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
