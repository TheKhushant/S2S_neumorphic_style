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

  // Neumorphism styles
  const raisedInput = "bg-[#e0e5ec] border-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all rounded-3xl px-5 py-3 text-gray-800 placeholder:text-gray-500 focus:outline-none";

  const raisedButton = "bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all rounded-3xl px-6 py-3 font-medium text-gray-700 active:scale-95";

  return (
    <Layout>
      <section className="min-h-screen bg-[#e0e5ec] py-12">
        <div className="container">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] mb-6"
            >
              <span className="text-sm font-semibold" style={{ color: "#6b21a8" }}>Explore Our Programs</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
              Our Popular Courses
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
              Interactive, job-ready programs with hands-on projects and mentor support.
            </p>
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  {/* Search Input */}
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search courses..."
                    className={`${raisedInput} w-full md:w-80`}
                  />

                  {/* Category Select */}
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={`${raisedInput} w-full md:w-52`}
                  >
                    <option value="">All Categories</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>

                  {/* Level Select */}
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className={`${raisedInput} w-full md:w-52`}
                  >
                    <option value="">All Levels</option>
                    {levels.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters Button */}
                <button
                  onClick={() => {
                    setQuery("");
                    setCategory("");
                    setLevel("");
                  }}
                  className={`${raisedButton} whitespace-nowrap text-sm font-semibold hover:text-gray-800`}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          >
            {filtered.map((c, i) => (
              <motion.div
                key={c.id}
                variants={fadeInUp(i * 0.04)}
                className="h-full"
              >
                <CourseCard course={c} />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filtered.length === 0 && (
            <div className="mt-16 text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] flex items-center justify-center mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <p className="text-xl text-gray-500">No courses match your filters.</p>
              <p className="text-sm text-gray-400 mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}