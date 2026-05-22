import { contact } from "../data/portfolio";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact me", href: "#contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky left-0 right-0 top-0 z-40 mx-auto flex w-full max-w-[1440px] items-center justify-between overflow-hidden border-b border-white/5 bg-base/90 px-6 py-5 backdrop-blur-lg xl:px-20">
        <a
          className="bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text font-logo text-3xl font-bold text-transparent"
          href="#home"
          aria-label="Stephen Oluwagbemiga home"
          onClick={closeMenu}
        >
          SO
        </a>

        <nav className="hidden items-center justify-center gap-8 text-sm font-medium text-muted lg:flex xl:gap-[60px]" aria-label="Main navigation">
          {navItems.map((item) => (
            <a className="transition hover:text-brand" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="hidden min-h-[43px] items-center justify-center rounded-lg bg-gradient-to-r from-brand to-[#e46400] px-10 py-2.5 font-bold text-white transition hover:-translate-y-0.5 lg:inline-flex" href={`mailto:${contact.email}`}>
          Hire Me
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white lg:hidden"
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={26} />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-base transition duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex min-h-screen flex-col px-6 py-5">
          <div className="flex items-center justify-between">
            <a
              className="bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text font-logo text-3xl font-bold text-transparent"
              href="#home"
              onClick={closeMenu}
            >
              SO
            </a>
            <button
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <X size={26} />
            </button>
          </div>

          <nav className="mt-16 grid gap-6 text-2xl font-semibold text-white" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                className="border-b border-white/10 pb-5 transition hover:text-brand"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="mt-auto inline-flex min-h-14 items-center justify-center rounded-lg bg-gradient-to-r from-brand to-[#e46400] px-10 py-3 text-lg font-bold text-white"
            href={`mailto:${contact.email}`}
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
