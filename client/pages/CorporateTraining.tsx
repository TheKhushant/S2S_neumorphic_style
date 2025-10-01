import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/site/Layout";
import GallerySection from "../components/site/GallerySection"
import {
  SparklesIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  AcademicCapIcon,
  TrophyIcon,
  CheckBadgeIcon,
  PlayCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export default function CorporateTraining() {
  const [form, setForm] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    employees: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Format form data into a WhatsApp message
    const whatsappMessage = `
🏢 Corporate Training Enquiry

🏛️ Company: ${form.company}
👤 Contact: ${form.contact}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
👥 No. of Employees: ${form.employees}
📝 Details: ${form.message}

🤖 Sent via AI Learning Platform
    `.trim();

    // WhatsApp Click to Chat URL
    const phoneNumber = "919399345989";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank");

    // Reset form after opening
    setForm({ company: "", contact: "", email: "", phone: "", employees: "", message: "" });
    setIsSubmitting(false);
  }

  // Features data
  const features = [
    {
      icon: BuildingOfficeIcon,
      title: "Customized Curriculum",
      description: "Tailored learning paths aligned with your business objectives and technology stack",
      benefits: ["Industry-specific content", "Real-world projects", "Custom assessments"]
    },
    {
      icon: UserGroupIcon,
      title: "Team Upskilling",
      description: "Transform your workforce with cutting-edge AI and technology skills",
      benefits: ["Group learning", "Team projects", "Progress tracking"]
    },
    {
      icon: ChartBarIcon,
      title: "Performance Analytics",
      description: "Comprehensive tracking and reporting on team progress and skill development",
      benefits: ["Skill gap analysis", "Progress reports", "ROI measurement"]
    },
    {
      icon: ClockIcon,
      title: "Flexible Scheduling",
      description: "On-site, remote, or hybrid delivery options to suit your team's workflow",
      benefits: ["24/7 access", "Recorded sessions", "Multiple time zones"]
    }
  ];

  // Success metrics
  const metrics = [
    { value: "200+", label: "Corporate Clients", icon: BuildingOfficeIcon },
    { value: "15,000+", label: "Professionals Trained", icon: UserGroupIcon },
    { value: "95%", label: "Satisfaction Rate", icon: ChartBarIcon },
    { value: "50%", label: "Productivity Boost", icon: TrophyIcon }
  ];

  // Training domains
  const domains = [
    {
      title: "AI & Machine Learning",
      description: "Transform your team with cutting-edge AI capabilities",
      technologies: ["TensorFlow", "PyTorch", "MLOps", "Computer Vision"]
    },
    {
      title: "Cloud & DevOps",
      description: "Master cloud infrastructure and deployment strategies",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web and mobile development expertise",
      technologies: ["React", "Node.js", "Python", "MongoDB"]
    },
    {
      title: "Data Science",
      description: "Leverage data for strategic decision making",
      technologies: ["Python", "SQL", "Tableau", "Big Data"]
    }
  ];

  // Get the current active feature icon component
  const ActiveFeatureIcon = features[activeFeature].icon;

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
            <span className="text-sm font-semibold text-primary">Enterprise AI Training</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Corporate Training
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your workforce with customized training programs,
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-semibold"> AI-powered learning</span>,
            and enterprise-grade skill development.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm"
              >
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Why Choose Our Corporate Training?
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive solutions designed for enterprise success and team growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveFeature(index)}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${activeFeature === index
                    ? "bg-gradient-to-br from-primary/10 to-purple-600/10 border-primary/50 shadow-lg shadow-primary/10"
                    : "bg-background/50 border-border/30 hover:border-primary/30"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${activeFeature === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                      }`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-foreground/70 text-sm mb-3">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-purple-600/5 border border-border/30 p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <ActiveFeatureIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{features[activeFeature].title}</h3>
                  <p className="text-foreground/70">{features[activeFeature].description}</p>
                </div>

                {/* Animated Progress Visualization */}
                <div className="space-y-4">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ delay: 1.4 + index * 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <CheckBadgeIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-1">{benefit}</div>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${80 + index * 5}%` }}
                          transition={{ delay: 1.6 + index * 0.2, duration: 1 }}
                          className="h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Training Domains */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Our Training Domains
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive coverage of modern technologies and methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm"
              >
                <h3 className="font-bold text-xl mb-3">{domain.title}</h3>
                <p className="text-foreground/70 mb-4">{domain.description}</p>
                <div className="flex flex-wrap gap-2">
                  {domain.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + i * 0.1 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Form Section */}
          <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-purple-600/5 border border-border/30 p-8 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-2">
                Request a Corporate Program
              </h2>
              <p className="text-foreground/70">
                Get in touch to discuss your training needs and get a customized proposal
              </p>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="Contact person"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    required
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <input
                  name="employees"
                  value={form.employees}
                  onChange={handleChange}
                  placeholder="Number of employees to train"
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your training requirements, goals, and timeline..."
                  className="w-full min-h-[120px] px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  required
                />
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <PhoneIcon className="w-5 h-5" />
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => setForm({ company: "", contact: "", email: "", phone: "", employees: "", message: "" })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  Reset Form
                </motion.button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
              <p className="text-foreground/70 mb-6">
                Our corporate training experts are ready to design a customized program that drives real business results.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-foreground/70">+91 93993 45989</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <EnvelopeIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-foreground/70">corporate@ailearning.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <ClockIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-foreground/70">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-background/50 border border-border/30 p-6 backdrop-blur-sm"
            >
              <h4 className="font-bold text-lg mb-3">Need Immediate Assistance?</h4>
              <p className="text-foreground/70 text-sm mb-4">
                Schedule a quick call with our training consultant to discuss your requirements.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-all duration-300"
              >
                <PlayCircleIcon className="w-4 h-4" />
                Schedule Discovery Call
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        <GallerySection/>
      </section>
    </Layout>
  );
}