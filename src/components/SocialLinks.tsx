import { contact } from "../data/portfolio";
import { Linkedin, Send } from "lucide-react";

type SocialLinksProps = {
  label?: string;
};

function SocialLinks({ label = "Social links" }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-5" aria-label={label}>
      <a className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-muted transition duration-300 hover:-translate-y-1 hover:border-brand/70 hover:text-brand" href={contact.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
        <TwitterIcon />
      </a>
      <a className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-muted transition duration-300 hover:-translate-y-1 hover:border-brand/70 hover:text-brand" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-muted transition duration-300 hover:-translate-y-1 hover:border-brand/70 hover:text-brand" href={contact.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
        <Send size={19} />
      </a>
    </div>
  );
}

function TwitterIcon() {
  return (
    <svg className="h-5 w-5 fill-current" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M13.9 10.5 21.3 2h-1.8l-6.4 7.4L8 2H2l7.8 11.3L2 22h1.8l6.8-7.8L16 22h6l-8.1-11.5Zm-2.4 2.7-.8-1.1L4.4 3.3h2.7l5 7 .8 1.1 6.6 9.4h-2.7l-5.3-7.6Z" />
    </svg>
  );
}

export default SocialLinks;
