import { FormEvent, ReactNode, useState } from "react";
import { contact } from "../data/portfolio";
import { Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  details: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  timeline: "",
  details: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [status, setStatus] = useState("");

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validateForm = () => {
    const nextErrors: Partial<ContactForm> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!emailPattern.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!form.service) nextErrors.service = "Please choose a service.";
    if (!form.timeline.trim()) nextErrors.timeline = "Please enter your timeline.";
    if (form.details.trim().length < 15) nextErrors.details = "Please add at least 15 characters.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus("Please fix the highlighted fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Service: ${form.service}`,
        `Timeline: ${form.timeline}`,
        "",
        "Project details:",
        form.details,
      ].join("\n"),
    );

    setStatus("Opening your email app with the message ready to send.");
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="scroll-mt-24 motion-safe:animate-fade-up" id="contact">
      <SectionHeading title="Contact me" copy="Cultivating connections: reach out and connect with me." />

      <form className="mx-auto grid max-w-[1012px] gap-6 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        <FieldError error={errors.name}>
          <input className="min-h-[54px] w-full rounded-lg border border-transparent bg-white/[0.04] px-6 py-3 text-muted outline-none focus:border-brand" aria-label="Name" placeholder="Name" value={form.name} onChange={(event) => updateField("name", event.target.value)} />
        </FieldError>
        <FieldError error={errors.email}>
          <input className="min-h-[54px] w-full rounded-lg border border-transparent bg-white/[0.04] px-6 py-3 text-muted outline-none focus:border-brand" aria-label="Email" placeholder="Email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
        </FieldError>
        <FieldError error={errors.phone}>
          <input className="min-h-[54px] w-full rounded-lg border border-transparent bg-white/[0.04] px-6 py-3 text-muted outline-none focus:border-brand" aria-label="Phone number" placeholder="Phone Number" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
        </FieldError>
        <FieldError error={errors.service}>
          <select className="min-h-[54px] w-full rounded-lg border border-transparent bg-white/[0.04] px-6 py-3 text-muted outline-none focus:border-brand" aria-label="Service of interest" value={form.service} onChange={(event) => updateField("service", event.target.value)}>
          <option value="" disabled>
            Service of Interest
          </option>
          <option>Frontend Development</option>
          <option>Full-Stack App</option>
          <option>API Integration</option>
        </select>
        </FieldError>
        <FieldError error={errors.timeline}>
          <input className="min-h-[54px] w-full rounded-lg border border-transparent bg-white/[0.04] px-6 py-3 text-muted outline-none focus:border-brand" aria-label="Timeline" placeholder="Timeline" value={form.timeline} onChange={(event) => updateField("timeline", event.target.value)} />
        </FieldError>
        <FieldError error={errors.details}>
          <textarea className="min-h-[162px] w-full resize-y rounded-lg border border-transparent bg-white/[0.04] px-6 py-3 text-muted outline-none focus:border-brand" aria-label="Project details" placeholder="Project Details..." value={form.details} onChange={(event) => updateField("details", event.target.value)} />
        </FieldError>
        <button className="inline-flex min-h-12 items-center justify-center gap-2 justify-self-end rounded-lg border-2 border-muted px-10 py-3 font-bold text-muted transition duration-300 hover:-translate-y-1 hover:border-brand hover:text-brand md:col-span-2" type="submit">
          <Send size={18} />
          Send
        </button>
        {status && <p className="m-0 text-sm font-bold text-brand md:col-span-2">{status}</p>}
      </form>
    </section>
  );
}

type FieldErrorProps = {
  children: ReactNode;
  error?: string;
};

function FieldError({ children, error }: FieldErrorProps) {
  return (
    <label className="grid gap-2">
      {children}
      {error && <span className="text-sm font-bold text-brand">{error}</span>}
    </label>
  );
}

export default Contact;
