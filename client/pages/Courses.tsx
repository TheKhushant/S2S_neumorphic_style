import Layout from "@/components/site/Layout";
import CourseCard from "@/components/site/CourseCard";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";
import { courses } from "@/data/courses";
import { useMemo, useState } from "react";

export default function Courses() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | "">("");
  const [level, setLevel] = useState<string | "">("");

  const categories = useMemo(() => Array.from(new Set(courses.map((c) => c.category))), []);
  const levels = useMemo(() => Array.from(new Set(courses.map((c) => c.level))), []);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (category && c.category !== category) return false;
      if (level && c.level !== level) return false;
      if (query) {
        const q = query.toLowerCase();
        return (
          c.title.toLowerCase().includes(q) ||
          c.short.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [query, category, level]);

  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Our Popular Courses</h1>
          <p className="mt-4 text-foreground/80">Interactive, job-ready programs with hands-on projects and mentor support.</p>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses..." className="rounded-md border px-3 py-2" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-md border px-3 py-2">
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="rounded-md border px-3 py-2">
              <option value="">All Levels</option>
              {levels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div className="mt-2 md:mt-0">
            <button onClick={() => { setQuery(""); setCategory(""); setLevel(""); }} className="rounded-md border px-3 py-2">Clear Filters</button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((c, i) => (
            <motion.div key={c.id} variants={fadeInUp(i * 0.04)}>
              <CourseCard course={c} />
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-8 text-center text-muted-foreground">No courses match your filters.</div>
        )}
      </section>
    </Layout>
  );
}
