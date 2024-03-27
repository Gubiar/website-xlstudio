import Navbar from "@/components/home/navbar";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import Portfolio from "@/components/home/portfolio";
import Testimonials from "@/components/home/testimonials";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import TrustedBy from "@/components/home/trusted-by";
import Footer from "@/components/home/footer";

export default function PageHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
