import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Ecosystem from "@/components/Ecosystem";
import FeaturedLaptops from "@/components/FeaturedLaptops";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Server Component: renders the page shell; each section is a client
// component where it needs animation or state.
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Ecosystem />
      <FeaturedLaptops />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
