import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DonutMenu from "@/components/DonutMenu";
import Drinks from "@/components/Drinks";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import MouseEffects from "@/components/MouseEffects";
import BasketDrawer from "@/components/BasketDrawer";
import FloatingBasket from "@/components/FloatingBasket";
import CheckoutModal from "@/components/CheckoutModal";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <MouseEffects />
      <Navbar />
      <Hero />
      <DonutMenu />
      <Drinks />
      <CtaBand />
      <Footer />
      <FloatingBasket />
      <BasketDrawer />
      <CheckoutModal />
    </main>
  );
}