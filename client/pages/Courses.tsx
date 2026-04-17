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

  const accentColor = "#e5bcfb";
  const accentDark = "#c084fc";

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
      <section className="min-h-screen bg-[#e0e5ec] py-12 md:py-5">
        <div className="max-w-6xl mx-auto px-6">          

          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] mb-6 mx-auto"
            >
              <span className="text-sm font-semibold" style={{ color: "#6b21a8" }}>
                Explore Our Programs
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
              Our Popular Courses
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Interactive, job-ready programs with hands-on projects and mentor support.
            </p>
          </div>

          {/* Filters Section -Card */}
          <div className="max-w-4xl mx-auto mb-5">
            <div className="bg-[#e0e5ec] rounded-3xl p-5 shadow-[6px_6px_14px_#bebebe,-6px_-6px_14px_#ffffff]">
              <div className="flex flex-col md:flex-row gap-3 md:items-end">
                
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search courses..."
                    className="w-full bg-[#e0e5ec] rounded-3xl px-6 py-3 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none"
                  />

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#e0e5ec] rounded-3xl px-6 py-3 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none"
                  >
                    <option value="">All Categories</option>
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>

                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full bg-[#e0e5ec] rounded-3xl px-6 py-3 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none"
                  >
                    <option value="">All Levels</option>
                    {levels.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>

                <button
                  onClick={() => { setQuery(""); setCategory(""); setLevel(""); }}
                  className="px-8 py-3 rounded-3xl font-semibold text-gray-700 bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all whitespace-nowrap"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          >
            {filtered.map((c, i) => (
              <motion.div
                key={c.id}
                variants={fadeInUp(i * 0.05)}
                className="w-full max-w-sm"
              >
                <CourseCard course={c} />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results State */}
          {filtered.length === 0 && (
            <div className="mt-20 text-center">
              <div className="mx-auto mb-6 w-24 h-24 rounded-3xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] flex items-center justify-center">
                <span className="text-5xl opacity-60">🔍</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search term or filters</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}