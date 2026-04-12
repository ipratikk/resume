import Navbar from "components/Navbar";
import Hero from "components/Hero";
import CinematicImpact from "components/CinematicImpact";
import ProductShowcase from "components/ProductShowcase";
import Experience from "components/Experience";
import Philosophy from "components/Philosophy";
import Footer from "components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CinematicImpact />
      <Experience />
      <ProductShowcase />
      <Philosophy />
      <Footer />
    </main>
  );
}