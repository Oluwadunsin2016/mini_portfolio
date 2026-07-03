import { useEffect, useState } from "react";

function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isExit, setIsExit] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const duration = 1200; // Total loading duration
    const intervalTime = 12; // Update every 12ms
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsExit(true);
      }, 300);

      const removeTimer = setTimeout(() => {
        setIsRemoved(true);
      }, 1000); // Wait for transition + buffer

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[99] flex flex-col items-center justify-center bg-base transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExit ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Pulsing Glowing Logo */}
        <div className="bg-gradient-to-r from-[#fa6e00] to-[#e60026] bg-clip-text font-logo text-6xl font-black text-transparent animate-pulse tracking-wide">
          SO
        </div>

        {/* Progress Bar Container */}
        <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-brand to-[#e46400] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <span className="font-mono text-xs font-bold tracking-widest text-muted">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}

export default PageLoader;
