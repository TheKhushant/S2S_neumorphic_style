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
      <section className="container py-6 sm:py-10 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">Our Popular Courses</h1>
          <p className="mt-2 text-foreground/80 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg">Interactive, job-ready programs with hands-on projects and mentor support.</p>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:mt-6 md:mt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full rounded-md border px-3 py-2 text-sm sm:w-auto sm:text-base"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm sm:w-auto sm:text-base"
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm sm:w-auto sm:text-base"
            >
              <option value="">All Levels</option>
              {levels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div className="mt-2 sm:mt-0">
            <button
              onClick={() => { setQuery(""); setCategory(""); setLevel(""); }}
              className="w-full rounded-md border px-3 py-2 text-sm sm:w-auto sm:text-base"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-4 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {filtered.map((c, i) => (
            <motion.div key={c.id} variants={fadeInUp(i * 0.04)}>
              <CourseCard course={c} />
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-4 text-center text-muted-foreground text-sm sm:text-base md:text-lg">No courses match your filters.</div>
        )}
      </section>
    </Layout>
  );
}