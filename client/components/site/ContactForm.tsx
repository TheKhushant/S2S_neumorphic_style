import { Link } from "react-router-dom";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-background py-16">
      <div className="container grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight">Get in Touch</h2>
          <p className="text-foreground/80">Have questions about courses, schedules, or fees? Send us a message.</p>
          <form className="grid gap-3">
            <input
              className="rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-foreground/50"
              placeholder="Full name"
              required
            />
            <input
              className="rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-foreground/50"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-foreground/50"
              placeholder="Phone"
              required
            />
            <textarea
              className="min-h-[120px] rounded-md border bg-background px-3 py-2 text-foreground placeholder:text-foreground/50"
              placeholder="Your message"
            />
            <button className="h-11 rounded-md bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">
              Send
            </button>
          </form>
        </div>
        <div className="overflow-hidden rounded-xl border">
          <iframe
            title="SS Infotech Nagpur Location"
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