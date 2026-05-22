import { contact } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="mt-24 w-full max-w-full overflow-hidden bg-white/[0.04] px-6 py-10 text-center md:mt-[150px]">
      <div className="mx-auto grid w-full max-w-[1440px] justify-items-center gap-8 md:gap-10 md:px-20">
        <a className="bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text font-logo text-3xl font-bold text-transparent" href="#home">
          SO
        </a>

        <nav className="grid w-full max-w-sm grid-cols-2 gap-3 text-sm font-medium text-muted sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 md:gap-10" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact me</a>
        </nav>

        <SocialLinks label="Footer social links" />

        <div className="grid w-full max-w-md gap-3 rounded-2xl bg-white/[0.04] p-4 text-sm font-bold text-muted sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-8 sm:bg-transparent sm:p-0 md:gap-10">
          <a className="break-all transition hover:text-brand" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a className="transition hover:text-brand" href={`tel:${contact.phone}`}>
            {contact.phone}
          </a>
        </div>

        <p className="m-0 w-full border-t border-dim pt-4 font-bold text-dim">
          Built by Stephen Oluwagbemiga, Full-Stack Developer
        </p>
      </div>
    </footer>
  );
}

export default Footer;
