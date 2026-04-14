import { useState, useEffect } from "react";
import Layout from "@/components/site/Layout";
import { useParams, Link } from "react-router-dom";
import { getCourseById } from "@/data/courses";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDownIcon,
  PlayIcon,
  ClockIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function CourseDetails() {
  const { id } = useParams();
  const course = id ? getCourseById(id) : null;
  const [activeModule, setActiveModule] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const accentColor = "#e5bcfb";
  const accentDark = "#c084fc";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (!course) {
    return (
      <Layout>
        <section className="min-h-screen bg-[#e0e5ec] py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="mx-auto w-24 h-24 rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] flex items-center justify-center mb-8">
              <SparklesIcon className="w-12 h-12" style={{ color: accentColor }} />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Course not found</h1>
            <p className="text-gray-600 mb-8">
              We couldn't find the requested course. Explore our other programs.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-[#e0e5ec] text-gray-800 font-semibold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]"
            >
              Browse All Courses
            </Link>
          </motion.div>
        </section>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-[#e0e5ec] border-t-[#e5bcfb] rounded-full shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#e0e5ec]">
        <section className="container py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]">
                  <SparklesIcon className="w-5 h-5" style={{ color: accentColor }} />
                  <span className="font-semibold" style={{ color: "#6b21a8" }}>AI-Powered Learning</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                  {course.description}
                </p>
              </motion.div>

              {/* Key Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  { icon: ClockIcon, label: "Duration", value: course.duration, color: accentColor },
                  { icon: AcademicCapIcon, label: "Level", value: course.level || "All Levels", color: "#10b981" },
                  { icon: CheckBadgeIcon, label: "Certificate", value: "Included", color: "#8b5cf6" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="bg-[#e0e5ec] p-6 rounded-3xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]"
                  >
                    <div className="p-3 w-12 h-12 rounded-2xl mb-4" style={{ background: `${item.color}15` }}>
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="text-2xl font-bold text-gray-800">{item.value}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* What You'll Learn & Syllabus */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#e0e5ec] p-8 rounded-3xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <SparklesIcon className="w-6 h-6" style={{ color: accentColor }} />
                    What You'll Learn
                  </h3>
                  <div className="space-y-4">
                    {course.outcomes?.map((outcome, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ background: accentColor }} />
                        <span className="text-gray-600">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="bg-[#e0e5ec] p-8 rounded-3xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <SparklesIcon className="w-6 h-6" style={{ color: accentColor }} />
                    Course Syllabus
                  </h3>
                  <div className="space-y-4">
                    {course.syllabus?.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0 bg-purple-500" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Course Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <AcademicCapIcon className="w-7 h-7" style={{ color: accentColor }} />
                  Course Curriculum
                </h3>

                <div className="space-y-4">
                  {course.modules?.map((module, index) => (
                    <motion.div
                      key={index}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeModule === index
                          ? "border-[#e5bcfb] bg-white shadow-lg"
                          : "border-transparent bg-[#e0e5ec] hover:border-gray-200"
                        }`}
                    >
                      <button
                        onClick={() => setActiveModule(activeModule === index ? -1 : index)}
                        className="w-full px-6 py-6 flex items-center justify-between text-left"
                      >
                        <div className="flex items-center gap-5">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all ${activeModule === index ? "bg-[#e5bcfb] text-gray-800" : "bg-white shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]"}`}>
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-xl">{module.title}</h4>
                            <p className="text-sm text-gray-500">{module.topics.length} topics</p>
                          </div>
                        </div>
                        <motion.div animate={{ rotate: activeModule === index ? 180 : 0 }}>
                          <ChevronDownIcon className="w-6 h-6" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeModule === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-6"
                          >
                            <ul className="space-y-3 pl-2">
                              {module.topics.map((topic, tIndex) => (
                                <li key={tIndex} className="flex items-start gap-4 text-gray-600">
                                  <PlayIcon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Demo Video */}
              {course.demoVideo && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <PlayIcon className="w-7 h-7" style={{ color: accentColor }} />
                    Course Preview
                  </h3>
                  <div className="rounded-3xl overflow-hidden shadow-inner bg-black">
                    <video controls poster={course.image} className="w-full aspect-video">
                      <source src={course.demoVideo} type="video/mp4" />
                    </video>
                  </div>
                </motion.div>
              )}

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
              >
                <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    { q: "Do you provide placement assistance?", a: "Yes, we offer comprehensive placement support..." },
                    { q: "What is the class schedule?", a: "We offer flexible batches including weekday evenings..." },
                    { q: "Is there any prerequisite knowledge required?", a: course.prerequisites?.length ? `Basic knowledge of ${course.prerequisites.join(", ")} is recommended.` : "No prior experience required!" },
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      className={`rounded-2xl border transition-all ${expandedFaq === index ? "border-[#e5bcfb] bg-white" : "border-transparent hover:border-gray-200 bg-[#e0e5ec]"}`}
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full px-6 py-6 text-left flex justify-between items-center"
                      >
                        <span className="font-semibold text-lg">{faq.q}</span>
                        <motion.div animate={{ rotate: expandedFaq === index ? 180 : 0 }}>
                          <ChevronDownIcon className="w-6 h-6" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="px-6 pb-6 text-gray-600"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Enrollment Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] sticky top-8"
              >
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold" style={{ background: `linear-gradient(to right, ${accentColor}, ${accentDark})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {course.fees}
                  </div>
                  <p className="text-gray-500 mt-1">One-time payment • Lifetime access</p>
                </div>

                <Link to={`/enroll/${course.id}`} className="block">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-5 rounded-3xl font-bold text-lg text-white shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] active:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]"
                    style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentDark})` }}
                  >
                    Enroll Now
                  </motion.button>
                </Link>

                <div className="mt-8 space-y-4 text-sm">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-500">Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-500">Certificate</span>
                    <span className="font-medium text-emerald-600">Included</span>
                  </div>
                </div>
              </motion.div>

              {/* Batch Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
              >
                <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                  <ClockIcon className="w-6 h-6" style={{ color: accentColor }} />
                  Next Batch
                </h4>
                <p className="text-gray-600">
                  {course.schedule || "Next batch starts soon. Contact us for exact dates and availability."}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}