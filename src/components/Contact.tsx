import { FormEvent, ReactNode, useEffect, useState } from "react";
import { Send, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "info" | "error";
    visible: boolean;
  }>({
    message: "",
    type: "info",
    visible: false,
  });

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const showToast = (message: string, type: "success" | "info" | "error") => {
    setToast({ message, type, visible: true });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast((current) => ({ ...current, visible: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  const validateForm = () => {
    const nextErrors: Partial<ContactForm> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!emailPattern.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (form.message.trim().length < 10) nextErrors.message = "Please enter at least 10 characters.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      showToast("Please fix the highlighted fields.", "error");
      return;
    }

    setIsSending(true);

    const mailBody = `
You have received a new contact message from your portfolio website.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
`.trim();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS environment variables are missing. Please verify your .env file contains VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY, then restart your Vite dev server."
      );
      showToast("Email configuration is missing. Please restart your dev server.", "error");
      setIsSending(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          subject: `Portfolio Contact from ${form.name}`,
          recipient_email: "oluwadunsin2016@gmail.com",
          body: mailBody,
        },
        publicKey
      );

      showToast("Thank you! Your message has been sent successfully.", "success");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS sending error:", error);
      showToast("Failed to send message. Please try again or contact me directly.", "error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="scroll-mt-24 motion-safe:animate-fade-up" id="contact">
      <SectionHeading title="Contact me" copy="Cultivating connections: reach out and connect with me." />

      <form className="mx-auto grid max-w-[1012px] gap-6 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        <FieldError error={errors.name}>
          <input
            className="min-h-[54px] w-full rounded-lg border border-transparent bg-white/[0.04] px-4 md:px-6 py-3 text-muted outline-none focus:border-brand"
            aria-label="Name"
            placeholder="Name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            disabled={isSending}
          />
        </FieldError>
        <FieldError error={errors.email}>
          <input
            className="min-h-[54px] w-full rounded-lg border border-transparent bg-white/[0.04] px-4 md:px-6 py-3 text-muted outline-none focus:border-brand"
            aria-label="Email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            disabled={isSending}
          />
        </FieldError>
        <FieldError error={errors.phone} className="md:col-span-2">
          <input
            className="min-h-[54px] w-full rounded-lg border border-transparent bg-white/[0.04] px-4 md:px-6 py-3 text-muted outline-none focus:border-brand"
            aria-label="Phone number"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            disabled={isSending}
          />
        </FieldError>
        <FieldError error={errors.message} className="md:col-span-2">
          <textarea
            className="min-h-[162px] w-full resize-y rounded-lg border border-transparent bg-white/[0.04] px-4 md:px-6 py-3 text-muted outline-none focus:border-brand"
            aria-label="Message"
            placeholder="Your Message..."
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            disabled={isSending}
          />
        </FieldError>
        <button
          className="inline-flex min-h-12 w-full md:w-auto items-center justify-center gap-2 md:justify-self-end rounded-lg border-2 border-muted px-10 py-3 font-bold text-muted transition duration-300 hover:-translate-y-1 hover:border-brand hover:text-brand md:col-span-2 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSending}
        >
          <Send size={18} />
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>

      <div
        className={`fixed top-6 right-6 z-[90] flex items-center gap-3 rounded-xl border px-6 py-4 shadow-2xl backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          toast.visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-12 opacity-0 pointer-events-none"
        } ${
          toast.type === "success"
            ? "bg-[#0E2015] border-green-500/30 text-green-400"
            : "bg-[#251212] border-red-500/30 text-red-400"
        }`}
        role="alert"
      >
        <span>{toast.message}</span>
        <button
          onClick={() => setToast((current) => ({ ...current, visible: false }))}
          className="ml-3 hover:text-white transition"
          aria-label="Close alert"
        >
          <X size={16} />
        </button>
      </div>
    </section>
  );
}

type FieldErrorProps = {
  children: ReactNode;
  error?: string;
  className?: string;
};

function FieldError({ children, error, className = "" }: FieldErrorProps) {
  return (
    <label className={`grid gap-2 ${className}`}>
      {children}
      {error && <span className="text-sm font-bold text-brand">{error}</span>}
    </label>
  );
}

export default Contact;
