type ProfilePhotoProps = {
  variant?: "about";
};

function ProfilePhoto({ variant }: ProfilePhotoProps) {
  const isAbout = variant === "about";
  const image = isAbout ? "/assets/stephen-about.jpeg" : "/assets/stephen-profile.jpeg";

  return (
    <div className={`relative grid place-items-center ${isAbout ? "min-h-[560px]" : "min-h-[460px] lg:min-h-[640px]"}`}>
      {!isAbout && (
        <div className="absolute aspect-square w-[min(90vw,618px)] rounded-full bg-gradient-to-b from-white/10 to-white/[0.02] motion-safe:animate-soft-pulse" />
      )}
      {isAbout && <div className="absolute bottom-0 right-8 h-[84%] w-[92%] rounded-lg bg-white/10" />}
      <div
        className={`relative overflow-hidden bg-[#1b1b1b] shadow-2xl shadow-black/30 transition duration-500 hover:scale-[1.015] motion-safe:animate-float ${
          isAbout
            ? "h-[min(108vw,760px)] w-[min(76vw,540px)] rounded-b-[220px] rounded-t-lg"
            : "h-[min(106vw,781px)] max-h-[781px] w-[min(76vw,520px)] rounded-[244px]"
        }`}
      >
        <img className="h-full w-full object-cover object-[50%_34%] mix-blend-luminosity" src={image} alt="Stephen Oluwagbemiga" />
      </div>
    </div>
  );
}

export default ProfilePhoto;
