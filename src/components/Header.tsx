import { contact } from "../data/portfolio";

function Header() {
  return (
    <header className="sticky top-0 z-30 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-5 bg-base/85 px-6 py-5 backdrop-blur-lg lg:flex-row xl:px-20">
      <a
        className="bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text font-logo text-3xl font-bold text-transparent"
        href="#home"
        aria-label="Stephen Oluwagbemiga home"
      >
        SO
      </a>

      <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-muted lg:gap-8 xl:gap-[60px]" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact me</a>
      </nav>

      <a className="inline-flex min-h-[43px] items-center justify-center rounded-lg bg-gradient-to-r from-brand to-[#e46400] px-10 py-2.5 font-bold text-white transition hover:-translate-y-0.5" href={`mailto:${contact.email}`}>
        Hire Me
      </a>
    </header>
  );
}

export default Header;
