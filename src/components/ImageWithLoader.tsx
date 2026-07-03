import { useState } from "react";

type ImageWithLoaderProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  onLoad?: () => void;
};

export function ImageWithLoader({
  src,
  alt,
  className = "",
  imgClassName = "",
  onLoad,
}: ImageWithLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <div className={`relative overflow-hidden bg-white/[0.02] ${className}`}>
      {/* Shimmer skeleton */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.07] to-white/[0.01] bg-[length:200%_100%] animate-shimmer"
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${imgClassName} ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleLoad}
      />
    </div>
  );
}

export default ImageWithLoader;
