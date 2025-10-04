import { useState, useEffect, useRef } from "react";
import Layout from "@/components/site/Layout";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import ContactForm from "@/components/site/ContactForm";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";
import {
  SparklesIcon,
  PlayCircleIcon,
  AcademicCapIcon,
  TrophyIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import PosterTemplates from "../components/site/PosterTemplates"

export default function Index() {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Featured courses with more details
  const featuredCourses = [
    {
      title: "Python + DSA",
      description: "Master Python programming with advanced Data Structures and Algorithms",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      icon: SparklesIcon,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      features: ["Live Sessions", "100+ Problems", "Interview Prep"]
    },
    {
      title: "Databricks",
      description: "Become an expert in big data processing and analytics",
      duration: "10 weeks",
      level: "Intermediate",
      icon: ChartBarIcon,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      features: ["Real Projects", "Cloud Integration", "Certification"]
    },
    {
      title: "AI-Data Analytics",
      description: "AI-powered data analysis and machine learning applications",
      duration: "14 weeks",
      level: "Advanced",
      icon: AcademicCapIcon,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      features: ["ML Models", "Data Visualization", "Industry Projects"]
    }
  ];

  // Professional testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "The instructors are top-notch and the curriculum is very practical. I landed a job just two months after completing the course!",
      author: "Niharika Sharma",
      role: "Software Developer",
      company: "Tech Solutions Inc.",
      rating: 5,
      avatar: "/Niharika.jpg",
      course: "Python + DSA",
      achievements: ["Got 3 job offers", "Salary increased by 200%", "Placed in 2 months"]
    },
    {
      id: 2,
      quote: "Skill2Success's course gave me the skills and confidence I needed to switch my career. The projects were invaluable for my portfolio.",
      author: "Prateek Kumar",
      role: "Frontend Engineer",
      company: "Digital Innovations",
      rating: 5,
      avatar: "/pratik.jpg",
      course: "Full Stack Development",
      achievements: ["Career switch successful", "Built 5+ real projects", "Mentorship support"]
    },
    {
      id: 3,
      quote: "Hands-on learning and personalized attention made all the difference. Highly recommend this course to anyone serious about data analysis.",
      author: "Raj Borkar",
      role: "Data Analyst",
      company: "Analytics Pro",
      rating: 5,
      avatar: "/Borkar.jpg",
      course: "AI-Data Analytics",
      achievements: ["Mastered ML algorithms", "Real-world case studies", "Industry ready skills"]
    },
    {
      id: 4,
      quote: "The projects were hands-on and very practical. I gained confidence in real-world data analysis and visualization techniques.",
      author: "Saloni Patel",
      role: "Business Analyst",
      company: "Data Insights Ltd.",
      rating: 5,
      avatar: "/girl.jpg",
      course: "Data Science",
      achievements: ["Data visualization expert", "Business insights skills", "Client project experience"]
    },
    {
      id: 5,
      quote: "The mentorship and guidance from Skill2Success helped me grow faster than I expected. The career support was exceptional.",
      author: "Ajay Singh",
      role: "ML Engineer",
      company: "AI Innovations",
      rating: 5,
      avatar: "/beard.jpg",
      course: "Machine Learning",
      achievements: ["Advanced ML concepts", "Model deployment", "Research opportunities"]
    },
    {
      id: 6,
      quote: "The projects and real-life case studies really boosted my confidence. The interview preparation sessions were incredibly helpful.",
      author: "Meenal Gupta",
      role: "Data Scientist",
      company: "Tech Analytics",
      rating: 5,
      avatar: "/Meenal.jpg",
      course: "AI-Data Analytics",
      achievements: ["Multiple job offers", "Confident in interviews", "Practical experience"]
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
  };

  return (
    <Layout>
      {/* Removed Animated Background Elements */}
      <Hero />
      <PosterTemplates />

      {/* Featured Courses Section */}
      <section id="courses" className="container py-20 relative bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <SparklesIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">AI-Powered Learning</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Top Courses
          </h2>
          <p className="mt-6 text-xl text-foreground/70 max-w-2xl mx-auto">
            Hand-picked programs designed with industry experts to accelerate your career with
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-semibold"> AI-powered mentorship</span>.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.title}
              variants={fadeInUp(i * 0.1)}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredCourse(i)}
              onHoverEnd={() => setHoveredCourse(null)}
              className={`group relative rounded-2xl bg-gradient-to-br from-background to-muted/20 p-6 border border-border/50 overflow-hidden backdrop-blur-sm cursor-pointer transition-all duration-500 ${hoveredCourse === i ? course.bgColor : 'hover:from-primary/5 hover:to-purple-600/5'
                }`}
            >
              {/* Animated Background Glow */}
              <motion.div
                animate={{
                  opacity: hoveredCourse === i ? 1 : 0,
                  scale: hoveredCourse === i ? 1 : 0.8
                }}
                className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10 rounded-2xl pointer-events-none transition-all duration-500`}
              />

              {/* Border Glow Effect */}
              <motion.div
                animate={{
                  opacity: hoveredCourse === i ? 1 : 0,
                }}
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${course.color} opacity-20 p-[1px] pointer-events-none transition-all duration-500`}
              >
                <div className="w-full h-full rounded-2xl bg-background/80 backdrop-blur-sm" />
              </motion.div>

              <div className="relative z-10">
                {/* Course Icon */}
                <motion.div
                  animate={{ scale: hoveredCourse === i ? 1.1 : 1 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${course.color} text-white mb-4 transition-all duration-300`}
                >
                  <course.icon className="w-6 h-6" />
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                  className="h-1 w-full rounded-full bg-gradient-to-r from-secondary to-primary mb-4"
                />

                <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {course.title}
                </h3>
                <p className="mt-2 text-foreground/70 text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Course Features */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Duration</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Level</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>
                </div>

                {/* Feature Tags */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {course.features.map((feature, index) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-all duration-300 group"
                  >
                    <span>Explore Course</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Courses CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/courses"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <EyeIcon className="w-5 h-5" />
              <span>View All Courses</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Stats />

      {/* About Us Section */}
      <section id="about" className="container py-20 relative bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <TrophyIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">About Skill2Success</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                Innovating Education with AI
              </h2>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg"
              >
                <p className="text-xl font-semibold text-foreground">
                  Where innovation meets excellence in the realm of IT solutions and education.
                </p>
                <p>
                  Skill2Success is a premier software organization with a strong presence in Pune and Nagpur.
                  We specialize in cutting-edge IT solutions, digital marketing, and transformative education programs.
                </p>
              </motion.div>

              {/* Interactive Accordion Sections */}
              <div className="space-y-4">
                {[
                  {
                    title: "🎓 Education",
                    content: "Education is key to personal and professional growth. We empower individuals to excel academically and professionally, opening doors to new opportunities and horizons through AI-powered learning."
                  },
                  {
                    title: "💡 Belief",
                    content: "We believe in nurturing talent and fostering careers. We connect top-tier talent with leading organizations, facilitating mutually beneficial partnerships and helping individuals navigate the complexities of the job market."
                  },
                  {
                    title: "🚀 Solutions",
                    content: "Our tailored solutions ensure that your projects are not only executed flawlessly but also meet your unique requirements and objectives. Driven by excellence, integrity, and client satisfaction."
                  }
                ].map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="rounded-xl bg-background/50 border border-border/30 p-4 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  >
                    <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                    <p className="text-sm text-foreground/70">{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-purple-600/10 to-transparent border border-primary/20 p-2 backdrop-blur-sm">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background/60">
                <video
                  src="/v1.mp4"
                  className="h-full w-full rounded-2xl object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                />

                {/* Video Overlay */}
                <AnimatePresence>
                  {!isVideoPlaying && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <PlayCircleIcon className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 rounded-xl font-semibold shadow-lg"
            >
              Live Classroom
            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg"
            >
              AI Powered
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Professional Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden bg-white">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <ChatBubbleLeftRightIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Success Stories</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              What Our Students Say
            </h2>
            <p className="mt-6 text-xl text-foreground/70 max-w-2xl mx-auto">
              Real stories from our alumni who transformed their careers with Skill2Success
            </p>
          </motion.div>

          {/* Professional Testimonials Carousel */}
          <div
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Testimonial Display */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="grid lg:grid-cols-2">
                {/* Testimonial Content */}
                <div className="p-8 md:p-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="h-full flex flex-col justify-center"
                    >
                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 font-light italic">
                        "{testimonials[activeTestimonial].quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {testimonials[activeTestimonial].author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-bold text-lg text-foreground">
                            {testimonials[activeTestimonial].author}
                          </div>
                          <div className="text-foreground/60">
                            {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                          </div>
                          <div className="text-primary font-semibold text-sm mt-1">
                            Completed: {testimonials[activeTestimonial].course}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {testimonials[activeTestimonial].achievements.map((achievement, index) => (
                          <motion.span
                            key={achievement}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Visual Side */}
                <div className="bg-gradient-to-br from-primary/5 to-purple-600/5 p-8 md:p-12 flex items-center justify-center">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                      {testimonials[activeTestimonial].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-2">
                        {testimonials[activeTestimonial].author.split(' ')[0]}
                      </div>
                      <div className="text-foreground/60 text-sm">
                        Alumni Success Story
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index
                      ? "bg-primary w-8"
                      : "bg-slate-300 hover:bg-primary/50"
                      }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="p-3 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="p-3 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Auto-play Indicator */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">
                <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-green-500 animate-pulse'}`} />
                {isPaused ? 'Paused' : 'Auto-playing'}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {[
              { value: "10,000+", label: "Students Trained" },
              { value: "98%", label: "Success Rate" },
              { value: "500+", label: "Companies" },
              { value: "4.9/5", label: "Rating" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-lg backdrop-blur-sm"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <UserGroupIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Start Your Journey Today
          </h2>
          <p className="mt-6 text-xl text-foreground/70 max-w-2xl mx-auto">
            Reach out to us for more information about our services and training programs.
            Let's build your success story together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <ContactForm />
        </motion.div>
      </section>
    </Layout>
  );
}
