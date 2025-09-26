import Layout from "@/components/site/Layout";

import { useState } from "react";

export default function CorporateTraining() {
  const [form, setForm] = useState({ company: "", contact: "", email: "", phone: "", employees: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Corporate enquiry", form);
    alert("Enquiry submitted. We'll get back to you shortly.");
    setForm({ company: "", contact: "", email: "", phone: "", employees: "", message: "" });
  }

  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold">Corporate Training</h1>
          <p className="mt-3 text-foreground/80">Customized training programs for teams, upskilling, and enterprise adoption.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-6">
            <h3 className="font-bold">Tailored Curriculum</h3>
            <p className="mt-2 text-sm text-foreground/80">We design curriculum aligned with your team's goals and technology stack.</p>
          </div>
          <div className="rounded-lg border bg-background p-6">
            <h3 className="font-bold">On-site & Remote Delivery</h3>
            <p className="mt-2 text-sm text-foreground/80">Flexible delivery options with assessment and certification.</p>
          </div>
        </div>

        <div className="mt-10 mx-auto max-w-2xl rounded-lg border bg-card p-6">
          <h2 className="text-xl font-bold">Request a Corporate Program</h2>
          <form onSubmit={submit} className="mt-4 grid gap-3">
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" className="rounded-md border px-3 py-2" />
            <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact person" className="rounded-md border px-3 py-2" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-md border px-3 py-2" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded-md border px-3 py-2" />
            <input name="employees" value={form.employees} onChange={handleChange} placeholder="No. of employees" className="rounded-md border px-3 py-2" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Details about your requirement" className="min-h-[120px] rounded-md border px-3 py-2" />
            <div className="flex gap-3">
              <button type="submit" className="h-11 rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Send Enquiry</button>
              <button type="button" onClick={() => setForm({ company: "", contact: "", email: "", phone: "", employees: "", message: "" })} className="h-11 rounded-md border px-4">Reset</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
