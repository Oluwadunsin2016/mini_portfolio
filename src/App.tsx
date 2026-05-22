import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RevealOnScroll from "./components/RevealOnScroll";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-base text-white [background:radial-gradient(circle_at_15%_8%,rgba(253,111,0,0.13),transparent_28rem),radial-gradient(circle_at_88%_4%,rgba(253,111,0,0.09),transparent_22rem),#121212]">
      <Header />
      <main className="mx-auto grid w-full max-w-[1440px] gap-24 overflow-x-hidden px-6 py-8 md:gap-[150px] md:px-10 xl:px-20">
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll>
          <Services />
        </RevealOnScroll>
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
      <Footer />
    </div>
  );
}

export default App;
