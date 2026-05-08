import { contact } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="mx-auto mt-[150px] grid w-full max-w-[1440px] justify-items-center gap-10 bg-white/[0.04] px-6 py-10 text-center md:px-20">
      <a className="bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text font-logo text-3xl font-bold text-transparent" href="#home">
        SO
      </a>
      <nav className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-muted md:gap-10" aria-label="Footer navigation">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact me</a>
      </nav>
      <SocialLinks label="Footer social links" />
      <div className="flex flex-wrap justify-center gap-6 font-bold text-muted md:gap-10">
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
      </div>
      <p className="m-0 w-full border-t border-dim pt-4 font-bold text-dim">
        Built by Stephen Oluwagbemiga, Full-Stack Developer
      </p>
    </footer>
  );
}

export default Footer;
