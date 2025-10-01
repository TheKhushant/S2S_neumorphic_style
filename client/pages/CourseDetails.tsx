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
  SparklesIcon
} from "@heroicons/react/24/outline";

export default function CourseDetails() {
  const { id } = useParams();
  const course = id ? getCourseById(id) : null;
  const [activeModule, setActiveModule] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    // Simulate loading for smooth entrance
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!course) {
    return (
      <Layout>
        <section className="container py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <SparklesIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Course not found
              </h1>
            </div>
            <p className="mt-4 text-foreground/80 max-w-md mx-auto">
              We couldn't find the requested course. Explore our other cutting-edge AI courses below.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6"
            >
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Browse All Courses
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-16 flex justify-center items-center min-h-[60vh]">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
            className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-primary/20 rounded-full blur-3xl"></div>
      </div>

      <section className="container py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <SparklesIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Learning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                {course.title}
              </h1>
              <p className="text-xl text-foreground/70 mt-4 leading-relaxed">
                {course.description}
              </p>
            </motion.div>

            {/* Key Information Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid gap-6 rounded-2xl bg-gradient-to-br from-card to-card/50 p-8 border border-border/50 shadow-2xl shadow-primary/5 backdrop-blur-sm"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <ClockIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Duration</div>
                    <div className="text-lg font-bold">{course.duration}</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30"
                >
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <AcademicCapIcon className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Level</div>
                    <div className="text-lg font-bold">{course.level || "All Levels"}</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30"
                >
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <CheckBadgeIcon className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Certificate</div>
                    <div className="text-lg font-bold">Included</div>
                  </div>
                </motion.div>
              </div>

              {/* Syllabus & Outcomes */}
              <div className="grid gap-6 md:grid-cols-2 mt-4">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary" />
                    What You'll Learn
                  </h3>
                  <div className="space-y-2">
                    {course.outcomes.map((outcome, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary" />
                    Course Syllabus
                  </h3>
                  <div className="space-y-2">
                    {course.syllabus.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Course Modules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl bg-card/50 p-8 border border-border/50 shadow-xl shadow-primary/5 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AcademicCapIcon className="w-6 h-6 text-primary" />
                Course Curriculum
              </h3>

              <div className="space-y-4">
                {course.modules?.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`rounded-xl border-2 transition-all duration-300 ${activeModule === index
                      ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                      : 'border-border/30 bg-background/30 hover:border-primary/30'
                      }`}
                  >
                    <button
                      onClick={() => setActiveModule(activeModule === index ? -1 : index)}
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${activeModule === index
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/10 text-primary'
                          }`}>
                          <span className="font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{module.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {module.topics.length} topics
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: activeModule === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeModule === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <ul className="grid gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <motion.li
                                key={topicIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * topicIndex }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors"
                              >
                                <PlayIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{topic}</span>
                              </motion.li>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl bg-card/50 p-8 border border-border/50 shadow-xl shadow-primary/5 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <PlayIcon className="w-6 h-6 text-primary" />
                  Course Preview
                </h3>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden bg-black"
                >
                  <video
                    controls
                    poster={course.image}
                    className="w-full aspect-video"
                  >
                    <source src={course.demoVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </motion.div>
              </motion.div>
            )}

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-2xl bg-card/50 p-8 border border-border/50 shadow-xl shadow-primary/5 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "Do you provide placement assistance?",
                    answer: "Yes, we offer comprehensive placement support including interview preparation, resume reviews, mock interviews, and direct connections with our hiring partners."
                  },
                  {
                    question: "What is the class schedule?",
                    answer: "We offer flexible batches including weekday evenings and weekend sessions. You can choose the schedule that works best for you."
                  },
                  {
                    question: "Is there any prerequisite knowledge required?",
                    answer: course.prerequisites?.length
                      ? `Basic knowledge of ${course.prerequisites.join(', ')} is recommended.`
                      : "No prior experience required! This course is designed for beginners."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`rounded-xl border-2 transition-all duration-300 ${expandedFaq === index
                      ? 'border-primary bg-primary/5'
                      : 'border-border/30 hover:border-primary/30'
                      }`}
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                      <span className="font-semibold text-lg">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-gradient-to-br from-primary/10 to-purple-600/10 p-8 border border-primary/20 shadow-2xl shadow-primary/20 backdrop-blur-sm sticky top-6"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-foreground">{course.fees}</div>
                <div className="text-sm text-muted-foreground mt-1">One-time payment</div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mb-6"
              >
                <Link to={`/enroll/${course.id}`} className="block w-full">
                  <button className="w-full rounded-xl bg-gradient-to-r from-primary to-purple-600 px-6 py-4 font-bold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <SparklesIcon className="w-5 h-5" />
                    Inquiry
                  </button>
                </Link>
              </motion.div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-border/30">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/30">
                  <span className="text-muted-foreground">Level</span>
                  <span className="font-semibold">{course.level || "All Levels"}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground">Certificate</span>
                  <span className="font-semibold text-green-500">Included</span>
                </div>
              </div>
            </motion.div>

            {/* Batch Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl bg-card/50 p-6 border border-border/50 shadow-xl shadow-primary/5 backdrop-blur-sm"
            >
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-primary" />
                Batch Schedule
              </h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {course.schedule || "Next batch starts soon! Contact us for exact dates."}
              </p>
            </motion.div>

            {/* Instructors */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl bg-card/50 p-6 border border-border/50 shadow-xl shadow-primary/5 backdrop-blur-sm"
            >

            </motion.div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}