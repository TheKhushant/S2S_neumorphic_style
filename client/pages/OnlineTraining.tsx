import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/site/Layout";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/site/CourseCard";
import GallerySection from "../components/site/GallerySection";
import {
  SparklesIcon,
  PlayCircleIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function OnlineTraining() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const accentColor = "#e5bcfb";
  const accentDark = "#c084fc";

  // Extract unique categories and levels
  const categories = ["all", ...new Set(courses.map(course => course.category))];
  const levels = ["all", ...new Set(courses.map(course => course.level))];

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.short.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Stats
  const stats = [
    { value: "10,000+", label: "Students Trained", icon: UserGroupIcon },
    { value: "98%", label: "Success Rate", icon: ChartBarIcon },
    { value: "24/7", label: "Mentor Support", icon: ClockIcon },
    { value: "50+", label: "Projects", icon: SparklesIcon }
  ];

  const raisedShadow = "shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]";
  const insetShadow = "shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]";
  const softHover = "hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:-translate-y-1";

  return (
    <Layout>
      <div className="min-h-screen bg-[#e0e5ec]">
        <section className="container max-w-5xl max-w-6xl mx-auto px-4 py-16 relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] mb-8 mx-auto"
            >
              <SparklesIcon className="w-5 h-5" style={{ color: accentColor }} />
              <span className="text-sm font-semibold" style={{ color: "#6b21a8" }}>
                AI-Powered Learning Platform
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
              Online Training
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Join live instructor-led online classes with recorded sessions, assignments, and{" "}
              <span className="font-semibold" style={{ color: "#6b21a8" }}>AI-powered mentor support</span>.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`text-center p-6 rounded-3xl bg-[#e0e5ec] ${raisedShadow} ${softHover}`}
                >
                  <stat.icon className="w-9 h-9 mx-auto mb-4" style={{ color: accentColor }} />
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12 "
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center max-w-5xl mx-auto">
              {/* Search Bar - Inset Style */}
              <div className="relative flex-1 max-w-2xl w-full">
                <MagnifyingGlassIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses by title, technology, or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-3xl bg-[#e0e5ec] border-none shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] focus:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] text-gray-800 placeholder:text-gray-500 transition-all"
                />
              </div>

              {/* Mobile Filter Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden w-full flex items-center justify-center gap-3 px-6 py-4 rounded-3xl bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]"
              >
                <FunnelIcon className="w-5 h-5" style={{ color: accentColor }} />
                <span className="font-medium text-gray-700">Filters</span>
              </motion.button>

              {/* Desktop Filters - Inset Style */}
              <div className="hidden lg:flex items-center gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-4 rounded-3xl bg-[#e0e5ec] border-none shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] focus:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] text-gray-800 transition-all"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-6 py-4 rounded-3xl bg-[#e0e5ec] border-none shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] focus:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] text-gray-800 transition-all"
                >
                  {levels.map(lvl => (
                    <option key={lvl} value={lvl}>
                      {lvl === "all" ? "All Levels" : lvl}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden mt-6 bg-[#e0e5ec] rounded-3xl p-6 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-6 py-4 rounded-3xl bg-white shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat === "all" ? "All Categories" : cat}</option>
                      ))}
                    </select>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="px-6 py-4 rounded-3xl bg-white shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]"
                    >
                      {levels.map(lvl => (
                        <option key={lvl} value={lvl}>{lvl === "all" ? "All Levels" : lvl}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Results Info */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-800">{filteredCourses.length}</span> courses
            </p>
            {(searchTerm || selectedCategory !== "all" || selectedLevel !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                }}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Clear filters <XMarkIcon className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <motion.div
              layout
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    onHoverStart={() => setHoveredCard(course.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="mx-auto w-28 h-28 rounded-3xl bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center mb-8">
                <MagnifyingGlassIcon className="w-14 h-14" style={{ color: "#9ca3af" }} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">No courses found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Try adjusting your search term or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                }}
                className="px-8 py-4 rounded-3xl bg-[#e0e5ec] font-medium shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]"
              >
                Clear all filters
              </button>
            </motion.div>
          )}

          {/* Gallery Section */}
          <GallerySection />

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="max-w-2xl mx-auto bg-[#e0e5ec] rounded-3xl p-12 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Ready to Start Your AI Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Join thousands of students who have transformed their careers with our platform.
              </p>
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-10 py-5 rounded-3xl bg-gradient-to-r from-[#e5bcfb] to-[#c084fc] text-white font-bold text-lg shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] active:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] flex items-center gap-3 mx-auto"
                >
                  <PlayCircleIcon className="w-6 h-6" />
                  Explore All Courses
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}