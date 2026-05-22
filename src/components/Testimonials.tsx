import { useRef } from "react";
import { testimonials } from "../data/portfolio";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cardWidth = track.querySelector(".testimonial-card")?.clientWidth ?? 320;
    track.scrollBy({
      left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-full min-w-0 scroll-mt-24 overflow-hidden" id="testimonials">
      <SectionHeading
        title="Testimonials"
        copy="What clients say about the experience of working with me."
      />

      <div className="grid w-full max-w-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden sm:gap-5">
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-brand/50 bg-brand/10 text-brand transition duration-300 hover:-translate-x-1 hover:bg-brand hover:text-white sm:h-12 sm:w-12"
          onClick={() => scrollTestimonials("left")}
          type="button"
          aria-label="Scroll testimonials left"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="grid min-w-0 max-w-full auto-cols-[minmax(620px,760px)] grid-flow-col gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-color:#fd6f00_rgba(255,255,255,0.08)] max-md:auto-cols-[minmax(260px,82vw)]" ref={trackRef}>
          {testimonials.map((testimonial) => (
            <article className="grid min-h-[260px] grid-rows-[auto_1fr_auto] gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-brand/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/20 motion-safe:animate-fade-up md:p-8" key={`${testimonial.name}-${testimonial.role}`}>
              <header className="grid grid-cols-[auto_1fr] items-center gap-4">
                <img className="h-16 w-16 rounded-full border-2 border-brand/70 object-cover" src={testimonial.avatar} alt={testimonial.name} />
                <div className="grid min-w-0 gap-1">
                  <strong className="text-lg text-white">{testimonial.name}</strong>
                  <span className="text-sm font-bold !text-muted md:text-base">
                    {testimonial.role} · {testimonial.state}, {testimonial.country}
                  </span>
                </div>
              </header>

              <p className="m-0 text-base leading-relaxed !text-[#c6c6c6] md:text-lg">“{testimonial.quote}”</p>

              <div className="flex items-center gap-1 text-brand" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill={index < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-brand/50 bg-brand/10 text-brand transition duration-300 hover:translate-x-1 hover:bg-brand hover:text-white sm:h-12 sm:w-12"
          onClick={() => scrollTestimonials("right")}
          type="button"
          aria-label="Scroll testimonials right"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
