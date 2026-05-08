import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-base text-white [background:radial-gradient(circle_at_15%_8%,rgba(253,111,0,0.13),transparent_28rem),radial-gradient(circle_at_88%_4%,rgba(253,111,0,0.09),transparent_22rem),#121212]">
      <Header />
      <main className="mx-auto grid w-full max-w-[1440px] gap-[150px] px-6 py-8 md:px-10 xl:px-20">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
