import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/site/Layout";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/site/CourseCard";
import {
  SparklesIcon,
  PlayCircleIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
  EyeIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  TrophyIcon,
  StarIcon
} from "@heroicons/react/24/outline";

export default function OnlineTraining() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Extract unique categories and levels
  const categories = ["all", ...new Set(courses.map(course => course.category))];
  const levels = ["all", ...new Set(courses.map(course => course.level))];

  // Filter courses based on search and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.short.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Stats for the platform
  const stats = [
    { value: "10,000+", label: "Students Trained", icon: UserGroupIcon },
    { value: "98%", label: "Success Rate", icon: ChartBarIcon },
    { value: "24/7", label: "Mentor Support", icon: ClockIcon },
    { value: "50+", label: "Projects", icon: SparklesIcon }
  ];

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "classroom",
      title: "Live Interactive Sessions",
      description: "Real-time learning with expert instructors",
      image: "/gallery/live-session.jpg",
      badge: "Live"
    },
    {
      id: 2,
      type: "video",
      category: "projects",
      title: "Student Project Showcase",
      description: "See what our students have built",
      image: "/gallery/project-showcase.jpg",
      badge: "Projects"
    },
    {
      id: 3,
      type: "image",
      category: "success",
      title: "Placement Success Stories",
      description: "Our graduates at top companies",
      image: "/gallery/success-stories.jpg",
      badge: "Success"
    },
    {
      id: 4,
      type: "video",
      category: "classroom",
      title: "AI-Powered Learning",
      description: "Smart learning with AI assistants",
      image: "/gallery/ai-learning.jpg",
      badge: "AI"
    },
    {
      id: 5,
      type: "image",
      category: "projects",
      title: "Hands-on Workshops",
      description: "Practical coding sessions",
      image: "/gallery/workshop.jpg",
      badge: "Workshop"
    },
    {
      id: 6,
      type: "image",
      category: "success",
      title: "Certificate Distribution",
      description: "Celebrating student achievements",
      image: "/gallery/certificates.jpg",
      badge: "Certified"
    }
  ];

  // Filter gallery items
  const filteredGallery = activeGalleryTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeGalleryTab);

  // Gallery tabs
  const galleryTabs = [
    { id: "all", label: "All", count: galleryItems.length },
    { id: "classroom", label: "Classroom", count: galleryItems.filter(item => item.category === "classroom").length },
    { id: "projects", label: "Projects", count: galleryItems.filter(item => item.category === "projects").length },
    { id: "success", label: "Success", count: galleryItems.filter(item => item.category === "success").length }
  ];

  return (
    <Layout>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      <section className="container py-16 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <SparklesIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">AI-Powered Learning Platform</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Online Training
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Join live instructor-led online classes with recorded sessions, assignments, and
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-semibold"> AI-powered mentor support</span>.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl w-full">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses by title, technology, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div>

            {/* Filter Toggle for Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-6 py-4 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm"
            >
              <FunnelIcon className="w-5 h-5" />
              <span>Filters</span>
            </motion.button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
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
                className="lg:hidden mt-4 space-y-4 overflow-hidden"
              >
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>
                        {level === "all" ? "All Levels" : level}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative mb-20"
        >
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 flex items-center justify-between"
          >
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredCourses.length}</span> courses
              {(searchTerm || selectedCategory !== "all" || selectedLevel !== "all") && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-2"
                >
                  •{" "}
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      setSelectedLevel("all");
                    }}
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    Clear filters
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </motion.span>
              )}
            </p>
          </motion.div>

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
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      delay: index * 0.1
                    }}
                    whileHover={{ y: -5 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                <MagnifyingGlassIcon className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold"
              >
                Clear all filters
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Interactive Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <EyeIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Learning Experience</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Explore Our Learning Journey
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Get a glimpse of our interactive classrooms, student projects, and success stories
            </p>
          </div>

          {/* Gallery Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {galleryTabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveGalleryTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeGalleryTab === tab.id
                  ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25"
                  : "bg-background/50 border border-border/30 text-foreground/70 hover:border-primary/30"
                  }`}
              >
                {tab.label}
                <span className={`text-xs px-2 py-1 rounded-full ${activeGalleryTab === tab.id
                  ? "bg-white/20 text-white"
                  : "bg-primary/10 text-primary"
                  }`}>
                  {tab.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: index * 0.1
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative rounded-2xl overflow-hidden bg-background/50 border border-border/30 backdrop-blur-sm cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    {/* Placeholder for image - replace with actual images */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-center">
                        {item.type === "video" ? (
                          <VideoCameraIcon className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                        ) : (
                          <EyeIcon className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                        )}
                        <p className="text-sm text-foreground/50">Gallery Image</p>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.badge === "Live" ? "bg-red-500/20 text-red-500" :
                        item.badge === "Projects" ? "bg-green-500/20 text-green-500" :
                          item.badge === "Success" ? "bg-yellow-500/20 text-yellow-500" :
                            "bg-primary/20 text-primary"
                        }`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        >
                          <PlayCircleIcon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center"
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-purple-600/10 to-transparent border border-primary/20 p-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our AI-powered learning platform.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-2xl shadow-primary/25"
            >
              <PlayCircleIcon className="w-5 h-5" />
              <span>Explore All Courses</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full bg-background rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content would go here */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{selectedImage.title}</h3>
                <p className="text-foreground/70 mb-6">{selectedImage.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold"
                >
                  Close Preview
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}