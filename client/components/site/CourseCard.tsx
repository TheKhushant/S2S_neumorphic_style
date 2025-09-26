import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-xl border bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start gap-4">
        <img src={course.image} alt={course.title} className="h-20 w-28 rounded-md object-cover" />
        <div className="flex-1">
          <div className="h-2 w-16 rounded-full bg-gradient-to-r from-secondary to-primary" />
          <h3 className="mt-3 text-xl font-bold">{course.title}</h3>
          <div className="mt-1 text-sm font-medium text-foreground/80">{course.short}</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">{course.level} • {course.category}</div>
            <div className="text-sm font-semibold">{course.fees}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Link to={`/enroll/${course.id}`} className="inline-block">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Enroll</Button>
        </Link>
        <Link to={`/courses/${course.id}`} className="inline-flex items-center text-sm font-semibold text-primary hover:underline">View Details</Link>
        <button onClick={() => setOpen((s) => !s)} className="ml-auto text-sm text-foreground/70 underline">
          {open ? "Hide Syllabus" : "View Syllabus"}
        </button>
      </div>

      {open && (
        <div className="mt-4 rounded-md border bg-card p-4">
          <h4 className="mb-2 text-sm font-bold">Syllabus Preview</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/80">
            {course.syllabus.slice(0, 6).map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
