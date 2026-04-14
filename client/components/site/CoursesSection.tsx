// src/components/CoursesSection.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SparklesIcon, ArrowRightIcon, EyeIcon } from "lucide-react";

import { stagger, fadeInUp } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";
import { BookOpenIcon, BrainIcon, CodeIcon } from "lucide-react";

// Course data structure
interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  features: string[];
  color: string;
  icon: LucideIcon;
}

const featuredCourses: Course[] = [
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    description: "Master the core concepts of artificial intelligence and machine learning with hands-on projects.",
    duration: "8 weeks",
    level: "Beginner",
    features: ["Live Sessions", "Projects", "Mentorship"],
    color: "from-blue-500 to-blue-600",
    icon: BrainIcon,
  },
  {
    id: "advanced-ml",
    title: "Advanced Machine Learning",
    description: "Deep dive into neural networks, deep learning, and advanced ML algorithms.",
    duration: "12 weeks",
    level: "Advanced",
    features: ["Code Reviews", "Research Papers", "Capstone"],
    color: "from-purple-500 to-purple-600",
    icon: CodeIcon,
  },
  {
    id: "data-science",
    title: "Data Science Mastery",
    description: "Learn data analysis, visualization, and insights extraction from real-world datasets.",
    duration: "10 weeks",
    level: "Intermediate",
    features: ["Real Datasets", "Dashboards", "Portfolio"],
    color: "from-emerald-500 to-emerald-600",
    icon: BookOpenIcon,
  },
];

interface CoursesSectionProps {
  title?: string;
  subtitle?: string;
  showBadge?: boolean;
}

const CoursesSection = ({
  title = "Top Courses",
  subtitle = "Hand-picked programs designed with industry experts to accelerate your career with AI-powered mentorship.",
  showBadge = true,
}: CoursesSectionProps) => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const handleCourseClick = (courseId: string) => {
    console.log("Navigating to course:", courseId);
  };

  return (
    <section id="courses" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {showBadge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-3xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] mb-6"
            >
              <SparklesIcon className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-semibold text-violet-700">
                AI-Powered Learning
              </span>
            </motion.div>
          )}

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            {title}
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        >
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              variants={fadeInUp(i * 0.1)}
              whileHover={{ y: -6, scale: 1.015 }}
              onHoverStart={() => setHoveredCourse(i)}
              onHoverEnd={() => setHoveredCourse(null)}
              onClick={() => handleCourseClick(course.id)}
              className="group relative w-full max-w-sm rounded-3xl bg-[#e0e5ec] p-6 cursor-pointer transition-all duration-300 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] hover:shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]"
            >
              {/* Icon */}
              <motion.div
                animate={{ scale: hoveredCourse === i ? 1.08 : 1 }}
                className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${course.color} text-white mb-5 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]`}
              >
                <course.icon className="w-6 h-6" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-tight">
                {course.title}
              </h3>
              
              <p className="text-gray-600 text-[15px] leading-snug mb-5 line-clamp-3">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="space-y-2.5 mb-6 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Duration</span>
                  <span className="font-medium text-gray-700">{course.duration}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Level</span>
                  <span className="font-medium text-gray-700">{course.level}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {course.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-xl bg-white/90 text-gray-700 shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r ${course.color} flex items-center justify-center gap-2 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] active:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] transition-all duration-200 group-hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]`}
              >
                Explore Course
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/courses"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-[#e0e5ec] text-gray-800 font-semibold text-base shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300"
            >
              <EyeIcon className="w-5 h-5" />
              View All Courses
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;