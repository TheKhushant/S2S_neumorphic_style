import Layout from "@/components/site/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "@/data/courses";
import { useState } from "react";
import * as XLSX from "xlsx";

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
    timestamp: new Date().toISOString(),
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();

    // Prepare data for Excel
    const enrollmentData = [
      {
        "Course": form.course,
        "Name": form.name,
        "Email": form.email,
        "Phone": form.phone,
        "Qualification": form.qualification,
        "City": form.city,
        "Message": form.message,
        "Timestamp": new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
      }
    ];

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(enrollmentData);

    // Auto-size columns
    const colWidths = [
      { wch: 20 }, // Course
      { wch: 15 }, // Name
      { wch: 20 }, // Email
      { wch: 15 }, // Phone
      { wch: 20 }, // Qualification
      { wch: 15 }, // City
      { wch: 30 }, // Message
      { wch: 25 }, // Timestamp
    ];
    ws['!cols'] = colWidths;

    // Append worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Enrollments");

    // Add timestamp to filename
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    const filename = `enrollment-${timestamp}.xlsx`;

    // Generate and download Excel file
    XLSX.writeFile(wb, filename);

    // Log for debugging
    console.log("Enrollment data saved to Excel:", form);

    // Navigate to home (or show success message)
    navigate("/", { replace: true });

    // Reset form
    setForm({
      course: course?.title || "",
      name: "",
      email: "",
      phone: "",
      qualification: "",
      city: "",
      message: "",
      timestamp: new Date().toISOString(),
    });
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