import { ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
};

function RevealOnScroll({
  children,
  threshold = 0.02,
  rootMargin = "0px 0px -50px 0px",
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin,
        threshold,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={elementRef}
      className={`w-full max-w-full min-w-0 transform-gpu transition-all duration-700 ease-out will-change-transform motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;
