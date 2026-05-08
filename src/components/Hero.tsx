import { contact, stats } from "../data/portfolio";
import { Download } from "lucide-react";
import ProfilePhoto from "./ProfilePhoto";
import SocialLinks from "./SocialLinks";

function Hero() {
  return (
    <section className="grid scroll-mt-24 items-center gap-16 lg:min-h-[781px] lg:grid-cols-[minmax(0,534px)_minmax(420px,1fr)]" id="home">
      <div className="grid justify-items-center gap-6 text-center lg:justify-items-start lg:text-left">
        <p className="m-0 text-2xl font-bold text-dim">Hi I am</p>
        <h2 className="-mt-3 text-2xl font-bold text-muted md:text-[28px]">Stephen Oluwagbemiga</h2>
        <h1 className="m-0 max-w-[9ch] bg-gradient-to-r from-[#984300] via-brand to-[#ca5900] bg-clip-text text-6xl font-black leading-none text-transparent md:text-[6.4rem]">
          Full-Stack Developer
        </h1>

        <SocialLinks />

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-brand to-[#e46400] px-10 py-3 font-bold text-white transition hover:-translate-y-0.5 sm:w-auto" href={`mailto:${contact.email}`}>
            Hire Me
          </a>
          <a className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-muted px-10 py-3 font-bold text-muted transition hover:-translate-y-0.5 sm:w-auto" href={contact.cv} download>
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className="mt-9 flex w-full flex-col gap-0 rounded-lg bg-white/[0.04] p-6 sm:w-fit sm:flex-row sm:gap-8">
          {stats.map((stat) => (
            <div className="grid gap-3 border-b border-muted py-4 text-center last:border-0 sm:min-w-[114px] sm:border-b-0 sm:border-r sm:py-1 sm:pr-8 sm:text-left sm:last:pr-0" key={stat.label}>
              <strong className="text-2xl font-extrabold text-brand">{stat.value}</strong>
              <span className="font-bold text-[#dfdfdf]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <ProfilePhoto />
    </section>
  );
}

export default Hero;
