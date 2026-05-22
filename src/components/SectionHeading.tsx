type SectionHeadingProps = {
  title: string;
  copy: string;
};

function SectionHeading({ title, copy }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 grid max-w-[900px] justify-items-center gap-4 text-center motion-safe:animate-fade-up md:mb-20">
      <h2 className="text-3xl font-bold text-white md:text-[40px]">{title}</h2>
      <p className="max-w-[805px] text-base leading-relaxed text-dim md:text-xl">{copy}</p>
    </div>
  );
}

export default SectionHeading;
