import { contact, skills } from "../data/portfolio";
import { Download } from "lucide-react";
import ProfilePhoto from "./ProfilePhoto";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section className="w-full max-w-full min-w-0 scroll-mt-24 overflow-hidden" id="about">
      <SectionHeading
        title="About Me"
        copy="I build both the visible interface and the logic that helps web applications work."
      />

      <div className="grid items-center gap-16 lg:grid-cols-[minmax(320px,566px)_minmax(0,631px)] xl:gap-[100px]">
        <ProfilePhoto variant="about" />
        <div className="grid justify-items-start gap-7 motion-safe:animate-fade-up-slow">
          <p className="m-0 text-lg leading-relaxed text-dim">
            I am a full-stack developer focused on building practical,
            responsive, and user-friendly web experiences. I enjoy working
            across the stack: shaping clean frontend screens, connecting APIs,
            handling data, and improving details until the product feels easy
            to use.
          </p>
          <p className="m-0 text-lg leading-relaxed text-dim">
            My work is shaped by a simple idea: good software should be clear
            for users and maintainable for the people who improve it later. I
            pay attention to page structure, reusable components, API contracts,
            loading states, responsive behavior, and small interaction details
            that make a product feel trustworthy.
          </p>
          <p className="m-0 text-lg leading-relaxed text-dim">
            I have worked with React.js, Next.js, Vue.js, Node.js, and
            PHP/Laravel, with growing exposure to Angular. I am comfortable
            moving between frontend implementation and backend logic, especially
            when a project needs someone who can understand the full flow from
            interface to data.
          </p>
          <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-[#e46400] px-10 py-3 font-bold text-white shadow-lg shadow-brand/20 transition duration-300 hover:-translate-y-1 hover:shadow-brand/35" href={contact.cv} download>
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>

      <div className="mt-24 w-full max-w-full min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max max-w-none gap-8 motion-safe:animate-marquee hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((skill, index) => (
            <div className="group grid min-w-[110px] md:min-w-[160px] justify-items-center gap-3 text-center" key={`${skill.name}-${index}`}>
              <div className="grid h-[90px] w-[90px] md:h-[130px] md:w-[130px] place-items-center rounded-full border-2 border-brand bg-white/[0.04] shadow-[inset_0_0_0_6px_rgba(253,111,0,0.08)] md:shadow-[inset_0_0_0_10px_rgba(253,111,0,0.08)] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-brand/20">
                <img className="h-10 w-10 md:h-16 md:w-16 object-contain" src={skill.logo} alt={`${skill.name} logo`} />
              </div>
              <strong className="text-sm md:text-base text-[#dfdfdf]">{skill.name}</strong>
              <span className="text-xs md:text-sm font-black text-brand">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
