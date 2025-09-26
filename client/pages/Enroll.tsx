import Layout from "@/components/site/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "@/data/courses";
import { useState } from "react";

export default function Enroll() {
  const { id } = useParams();
  const course = id ? getCourseById(id) : null;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    course: course?.title || "",
    name: "",
    email: "",
    phone: "",
    qualification: "",
    city: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Here you would call API to submit enrollment; we'll fake success and navigate to thank you placeholder
    console.log("Enroll submitted", form);
    navigate("/", { replace: true });
    // Ideally show a toast; using Sonner or Toaster if available
  }

  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-extrabold">Enroll{course ? `: ${course.title}` : ""}</h1>
          <p className="mt-2 text-foreground/80">Complete the form and our admissions team will contact you to confirm the batch and payment details.</p>

          <form onSubmit={submit} className="mt-6 grid gap-3">
            <label className="text-sm">Course</label>
            <input name="course" value={form.course} readOnly className="rounded-md border bg-background px-3 py-2" />

            <label className="text-sm">Full name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="rounded-md border px-3 py-2" />

            <label className="text-sm">Email</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" required className="rounded-md border px-3 py-2" />

            <label className="text-sm">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="rounded-md border px-3 py-2" />

            <label className="text-sm">Highest Qualification</label>
            <input name="qualification" value={form.qualification} onChange={handleChange} className="rounded-md border px-3 py-2" />

            <label className="text-sm">City</label>
            <input name="city" value={form.city} onChange={handleChange} className="rounded-md border px-3 py-2" />

            <label className="text-sm">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="min-h-[120px] rounded-md border px-3 py-2" />

            <div className="flex items-center gap-3">
              <button type="submit" className="h-11 rounded-md bg-primary px-6 font-semibold text-primary-foreground">Submit Enrollment</button>
              <button type="button" onClick={() => navigate(-1)} className="h-11 rounded-md border px-4">Cancel</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
