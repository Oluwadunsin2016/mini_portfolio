import ImageWithLoader from "./ImageWithLoader";

type ProfilePhotoProps = {
  variant?: "about";
};

function ProfilePhoto({ variant }: ProfilePhotoProps) {
  const isAbout = variant === "about";
  const image = isAbout ? "/assets/stephen-about.jpeg" : "/assets/stephen-profile.jpeg";

  return (
    <div className={`relative grid place-items-center ${isAbout ? "min-h-[380px] sm:min-h-[480px] md:min-h-[560px]" : "min-h-[340px] sm:min-h-[440px] lg:min-h-[640px]"}`}>
      {!isAbout && (
        <div className="absolute aspect-square w-[min(90vw,618px)] rounded-full bg-gradient-to-b from-white/10 to-white/[0.02] motion-safe:animate-soft-pulse" />
      )}
      {isAbout && <div className="absolute bottom-0 right-8 h-[84%] w-[92%] rounded-lg bg-white/10" />}
      
      <ImageWithLoader
        src={image}
        alt="Stephen Oluwagbemiga"
        className={`relative shadow-2xl shadow-black/30 transition duration-500 hover:scale-[1.015] motion-safe:animate-float ${
          isAbout
            ? "h-[min(108vw,760px)] w-[min(76vw,540px)] rounded-b-[220px] rounded-t-lg"
            : "h-[min(106vw,781px)] max-h-[781px] w-[min(76vw,520px)] rounded-[244px]"
        }`}
        imgClassName="h-full w-full object-cover object-[50%_34%] mix-blend-luminosity"
      />
    </div>
  );
}

export default ProfilePhoto;
