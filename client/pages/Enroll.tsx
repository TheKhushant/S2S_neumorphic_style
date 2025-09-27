import React, { useState } from "react";
import Layout from "@/components/site/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "@/data/courses";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzABRv_G0hw1dw49dM012FsVrICdtpZjP9dR9ZbJoEbacILmbFQJ6jpO6FuEtqRHvdscA/exec"; // <- replace

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

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      // Use URLSearchParams to avoid JSON preflight
      const payload = new URLSearchParams();
      Object.entries(form).forEach(([k, v]) =>
        payload.append(k, (v ?? "").toString())
      );

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          "Accept": "application/json",
        },
        body: payload.toString(),
      });

      // Try parse JSON (Apps Script returns JSON)
      const text = await response.text();
      let json: any = {};
      try {
        json = JSON.parse(text || "{}");
      } catch (_) {
        json = { status: response.ok ? "success" : "error", message: text };
      }

      if (response.ok && json.status === "success") {
        setStatusMessage("✅ Thank you! Your inquiry has been recorded.");
        // reset form (keep course)
        setForm({
          course: course?.title || "",
          name: "",
          email: "",
          phone: "",
          qualification: "",
          city: "",
          message: "",
        });
        // navigate back after short delay
        setTimeout(() => navigate("/", { replace: true }), 1400);
      } else {
        throw new Error(json.message || "Server error");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatusMessage(
        "❌ Something went wrong. Check DevTools network tab and Apps Script deployment."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-extrabold">
            Enroll{course ? `: ${course.title}` : ""}
          </h1>
          <p className="mt-2 text-foreground/80">
            Complete the form and our admissions team will contact you.
          </p>

          <form onSubmit={submit} className="mt-6 grid gap-3">
            <label className="text-sm">Course</label>
            <input
              name="course"
              value={form.course}
              readOnly
              className="rounded-md border bg-gray-100 px-3 py-2"
            />

            <label className="text-sm">Full name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-md border px-3 py-2"
            />

            <label className="text-sm">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-md border px-3 py-2"
            />

            <label className="text-sm">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="rounded-md border px-3 py-2"
            />

            <label className="text-sm">Highest Qualification</label>
            <input
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
              className="rounded-md border px-3 py-2"
            />

            <label className="text-sm">City</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              className="rounded-md border px-3 py-2"
            />

            <label className="text-sm">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="min-h-[120px] rounded-md border px-3 py-2"
            />

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="h-11 rounded-md bg-primary px-6 font-semibold text-primary-foreground disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Enrollment"}
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="h-11 rounded-md border px-4"
              >
                Cancel
              </button>
            </div>

            {statusMessage && (
              <p
                className={`mt-4 text-center ${statusMessage.includes("✅") ? "text-green-600" : "text-red-600"
                  }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}
