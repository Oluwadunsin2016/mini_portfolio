import { services } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function Services() {
  return (
    <section className="scroll-mt-24" id="services">
      <SectionHeading
        title="Services"
        copy="Full-stack development support for clean interfaces, useful features, and reliable web products."
      />

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article className="group grid min-h-[322px] justify-items-center gap-6 rounded-3xl bg-white/[0.04] px-6 py-8 md:px-8 md:py-9 text-center transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/20 motion-safe:animate-fade-up" key={service.title}>
            <div className="grid h-[70px] w-[70px] place-items-center rounded-2xl border-2 border-brand font-black text-brand transition duration-300 group-hover:rotate-3 group-hover:scale-110" aria-hidden="true">
              {"</>"}
            </div>
            <h3 className="m-0 text-xl md:text-2xl font-bold text-brand">{service.title}</h3>
            <p className="m-0 text-base md:text-lg leading-relaxed text-dim">{service.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
