
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    // Construct WhatsApp message
    const whatsappNumber = "919399345989";
    const message = `New Contact Form Submission:\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Reset form
    setForm({ name: "", email: "", phone: "", message: "" });

    setIsSubmitting(false);
    alert("Your message has been prepared in WhatsApp. Please send it to confirm.");
  }

  return (
    <section id="contact" className="bg-white py-16 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Get in Touch</h2>
          <p className="text-foreground/80">Have questions about courses, schedules, or fees? Send us a message via WhatsApp.</p>
          <form onSubmit={handleSubmit} className="grid gap-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-foreground/50"
              placeholder="Full name"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-foreground/50"
              placeholder="Email"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-foreground/50"
              placeholder="Phone"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="min-h-[120px] rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-foreground/50"
              placeholder="Your message"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-11 rounded-md bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send via WhatsApp"}
            </button>
          </form>
        </div>
        <div className="overflow-hidden rounded-xl border">
          <iframe
            title="Skill Training Center Nagpur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.337405892367!2d79.067185!3d21.1363751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1000c0583e5%3A0x2a9d4b509fe5934e!2sSS%20Infotech%20Nagpur!5e0!3m2!1sen!2sin!4v1695739200000!5m2!1sen!2sin"
            width="100%"
            height="350"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}
