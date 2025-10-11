import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Course } from "@/data/courses";
import {
  SparklesIcon,
  ClockIcon,
  AcademicCapIcon,
  ChartBarIcon,
  PlayCircleIcon,
  ChevronDownIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function CourseCard({ course }: { course: Course }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    hover: {
      y: -6,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer max-w-sm mx-auto"
      style={{
        background: "white",
        borderColor: "rgb(229 231 235)"
      }}
    >
      {/* Background Highlight Effect - Removed colored overlay */}

      {/* Course Image */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover relative z-10"
        />

        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-30">
          <span
            className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full border border-gray-200 shadow-lg"
            style={{ background: "white" }}
          >
            {course.category}
          </span>
        </div>

        {/* Hover View Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 right-3 z-30"
        >
          <Button
            size="sm"
            className="bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white border border-gray-200 shadow-lg rounded-full gap-1 text-xs"
            style={{ background: "white" }}
          >
            <PlayCircleIcon className="w-3 h-3" />
            Quick View
          </Button>
        </motion.div>
      </div>

      {/* Card Body */}
      <div className="p-6 relative z-10" style={{ background: "white" }}>
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-gray-100 rounded-full mb-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm"
          />
        </div>

        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-gray-800 transition-colors">
            {course.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors">
            {course.short}
          </p>
        </div>

        {/* Course Metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
            <AcademicCapIcon className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-gray-700">{course.level}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
            <ClockIcon className="w-4 h-4 text-purple-600" />
            <span className="font-medium text-gray-700">{course.duration}</span>
          </div>
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 space-y-3 overflow-hidden"
            >
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-gray-800">
                  <CheckBadgeIcon className="w-4 h-4 text-blue-600" />
                  Key Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.syllabus?.slice(0, 3).map((topic, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1.5 bg-gray-50 text-gray-800 rounded-xl text-xs font-semibold border border-gray-200 shadow-sm"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Section */}
        <div className="flex items-center justify-between pt-2">
          {/* Price and Expand Button */}
          <div className="flex items-center gap-3">
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              {course.fees}
            </motion.span>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-xl bg-gray-100 hover:bg-blue-100 transition-colors group/button"
            >
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-600 group-hover/button:text-blue-600 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                  }`}
              />
            </motion.button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={`/courses/${course.id}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-gray-600 hover:text-gray-900 border-gray-300 hover:border-gray-400 bg-white rounded-xl font-medium"
                  style={{ background: "white" }}
                >
                  <PlayCircleIcon className="w-4 h-4" />
                  Preview
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={`/enroll/${course.id}`}>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold gap-2 rounded-xl"
                >
                  <SparklesIcon className="w-4 h-4" />
                  Enroll
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Hover Border Effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 border-2 border-blue-200 rounded-2xl pointer-events-none shadow-2xl"
      />
    </motion.article>
  );
}