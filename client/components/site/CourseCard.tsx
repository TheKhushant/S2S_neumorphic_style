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
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

export default function CourseCard({ course }: { course: Course }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative rounded-2xl bg-gradient-to-br from-background to-muted/20 p-6 border border-border/50 overflow-hidden group cursor-pointer"
      style={{
        background: isHovered
          ? 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.3) 100%)'
          : 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.1) 100%)'
      }}
    >
      {/* Animated Background Glow */}
      <motion.div
        variants={glowVariants}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent pointer-events-none"
      />



      <div className="relative flex items-start gap-4">
        {/* Course Image with Shine Effect */}
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 10 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
          <img
            src={course.image}
            alt={course.title}
            className="h-20 w-28 rounded-xl object-cover relative z-10 border border-white/10 shadow-lg"
          />
          <motion.div
            animate={{
              x: isHovered ? ["0%", "200%"] : "0%",
              opacity: isHovered ? [0, 1, 0] : 0
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 z-20 rounded-xl"
          />
        </motion.div>

        <div className="flex-1 min-w-0">
          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 w-full rounded-full bg-gradient-to-r from-secondary to-primary mb-3"
          />

          <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent line-clamp-1">
            {course.title}
          </h3>

          <p className="mt-2 text-sm text-foreground/70 line-clamp-2 leading-relaxed">
            {course.short}
          </p>

          {/* Course Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1">
              <AcademicCapIcon className="w-3 h-3" />
              <span>{course.level}</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-3 h-3" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <ChartBarIcon className="w-3 h-3" />
              <span>{course.category}</span>
            </div>
          </motion.div>
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
            className="mt-4 space-y-3 overflow-hidden"
          >
            <div className="border-t border-border/30 pt-3">
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                <CheckBadgeIcon className="w-4 h-4 text-primary" />
                Key Topics
              </h4>
              <div className="flex flex-wrap gap-2">
                {course.syllabus?.slice(0, 3).map((topic, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <motion.div
        layout
        className="mt-6 flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-2">
          <motion.span
            className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {course.fees}
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                }`}
            />
          </motion.button>
        </div>

        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to={`/courses/${course.id}`}>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-muted-foreground hover:text-foreground"
              >
                <PlayCircleIcon className="w-4 h-4" />
                Preview
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/enroll/${course.id}`}>
              <Button className="bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 font-semibold gap-2">
                <SparklesIcon className="w-4 h-4" />
                Enroll Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Hover Effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8
        }}
        className="absolute inset-0 rounded-2xl border-2 border-primary/20 pointer-events-none"
      />
    </motion.article>
  );
}