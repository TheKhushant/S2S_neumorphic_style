import { useState, useEffect, useRef } from "react";
import Layout from "@/components/site/Layout";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import ContactForm from "@/components/site/ContactForm";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";
import CoursesSection from "@/components/site/CoursesSection";
// import OverseasDropdown from "@/components/OverseasDropdown";
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
import PosterTemplates from "@/components/site/PosterTemplates";
import TestimonialsSection from "@/components/site/TestimonialsSection";

export default function Index() {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // Featured courses data (unchanged)
  const featuredCourses = [
    {
      id: "python-dsa",
      title: "Python + DSA",
      description: "Master Python programming with advanced Data Structures and Algorithms",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      icon: SparklesIcon,
      color: "from-orange-500 to-red-500",
      features: ["Live Sessions", "100+ Problems", "Interview Prep"]
    },
    {
      id: "databricks",
      title: "Databricks",
      description: "Become an expert in big data processing and analytics",
      duration: "10 weeks",
      level: "Intermediate",
      icon: ChartBarIcon,
      color: "from-blue-500 to-cyan-500",
      features: ["Real Projects", "Cloud Integration", "Certification"]
    },
    {
      id: "ai-data-analytics",
      title: "AI-Data Analytics",
      description: "AI-powered data analysis and machine learning applications",
      duration: "14 weeks",
      level: "Advanced",
      icon: AcademicCapIcon,
      color: "from-purple-500 to-pink-500",
      features: ["ML Models", "Data Visualization", "Industry Projects"]
    }
  ];

  // Testimonials data (unchanged)
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
      quote: "Skill Training Center's course gave me the skills and confidence I needed to switch my career. The projects were invaluable for my portfolio.",
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
      quote: "The mentorship and guidance from Skill Training Center helped me grow faster than I expected. The career support was exceptional.",
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

  // Auto-rotate testimonials (unchanged)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToTestimonial = (index: number) => setActiveTestimonial(index);

  const handleCourseClick = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  // Neumorphism shadow helpers
  const raisedShadow = "shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]";
  const insetShadow = "shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]";
  const softHoverLift = "hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:-translate-y-1";

  return (
    <Layout>
      <div className="min-h-screen bg-[#e0e5ec]">
        <Hero />
        {/* PosterTemplates assumed to be updated separately or kept as is */}
        <PosterTemplates />
        {/* ==================== FEATURED COURSES ==================== */}
        <CoursesSection/>

        <Stats />

        {/* ==================== ABOUT US ==================== */}
        <section id="about" className="container py-20 ">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]"
              >
                <TrophyIcon className="w-5 h-5 text-amber-600" />
                <span className="font-semibold text-amber-700">About Skill Training Center</span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                Innovating Education with AI
              </h2>

              <div className="space-y-1 text-gray-600 leading-relaxed">
                <p className="text-lg font-semibold text-gray-800">
                  Where innovation meets excellence in the realm of IT solutions and education.
                </p>
                <p>
                  Skill Training Center is a premier software organization with a strong presence in Pune and Nagpur. 
                  We specialize in cutting-edge IT solutions, digital marketing, and transformative education programs.
                </p>
              </div>

              {/* <div className="space-y-6"> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "🎓 Education", content: "Education is key to personal and professional growth" },
                  { title: "💡 Belief", content: "We believe in nurturing talent and fostering careers..." },
                  { title: "🚀 Solutions", content: "Our tailored solutions ensure that your projects..." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-3xl p-7 ${raisedShadow} bg-[#e0e5ec]`}
                  >
                    <h3 className="font-bold text-xl mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className={`rounded-3xl p-2 bg-[#e0e5ec] ${raisedShadow}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white">
                  <video
                    src="/v1.mp4"
                    className="h-full w-full object-cover rounded-3xl"
                    controls
                    autoPlay
                    muted
                    loop
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />

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
                          className="w-20 h-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-[4px_4px_10px_#bebebe,-4px_-4px_10px_#ffffff]"
                        >
                          <PlayCircleIcon className="w-10 h-10 text-violet-600" />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-5 -right-5 px-6 py-3 rounded-2xl bg-white font-semibold text-sm shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]"
              >
                Live Classroom
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-5 -left-5 px-5 py-2 rounded-2xl bg-white text-sm font-semibold shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]"
              >
                AI Powered
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS ==================== */}
        <TestimonialsSection 
          testimonials={testimonials}
        />
        

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            
            {/* Main Neumorphic Container */}
            <div className={`max-w-5xl mx-auto rounded-3xl bg-[#e0e5ec] ${raisedShadow} p-8 md:p-12`}>
              
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mx-auto max-w-3xl text-center mb-16"
              >
                {/* Neumorphic Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-3xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] mb-8"
                >
                  <UserGroupIcon className="w-6 h-6 text-sky-600" />
                  <span className="font-semibold text-sky-700 tracking-wide">Get In Touch</span>
                </motion.div>

                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight tracking-tight">
                  Start Your Journey Today
                </h2>
                
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Reach out to us for more information about our services and training programs. 
                  Our team is ready to help you take the next step.
                </p>
              </motion.div>

              {/* Form Container - Neumorphic Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`rounded-3xl bg-[#e0e5ec] ${raisedShadow} p-8 md:p-10 lg:p-12`}
              >
                <ContactForm />
              </motion.div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}