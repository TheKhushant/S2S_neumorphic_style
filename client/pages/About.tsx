import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/site/Layout";
import {
  SparklesIcon,
  AcademicCapIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserGroupIcon,
  TrophyIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";

export default function About() {
  const [activeSection, setActiveSection] = useState("education");
  const [hoveredCard, setHoveredCard] = useState(null);

  const coreValues = [
    {
      icon: AcademicCapIcon,
      title: "Education",
      description: "Education is key to personal and professional growth. We empower individuals to excel academically and professionally, opening doors to new opportunities and horizons.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: LightBulbIcon,
      title: "Belief",
      description: "We believe in nurturing talent and fostering careers. We connect top-tier talent with leading organizations, facilitating mutually beneficial partnerships.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: PuzzlePieceIcon,
      title: "Solutions",
      description: "Our tailored solutions ensure that your projects are executed flawlessly and meet your unique requirements. Driven by excellence, integrity, and client satisfaction.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const teamMembers = [
    {
      name: "Arjun",
      role: "Full-Stack Java Trainer",
      experience: "10+ years",
      specialization: "Java, Spring Boot, Microservices",
      achievements: ["Mentored 1000+ students", "Ex-Senior Developer at Tech Giant"]
    },
    {
      name: "Priya",
      role: "React & Frontend Trainer",
      experience: "8+ years",
      specialization: "React, TypeScript, UI/UX",
      achievements: ["Frontend Architect", "Open Source Contributor"]
    }
  ];

  const stats = [
    { value: "10,000+", label: "Students Trained", icon: UserGroupIcon },
    { value: "95%", label: "Placement Rate", icon: TrophyIcon },
    { value: "50+", label: "Courses Offered", icon: AcademicCapIcon },
    { value: "200+", label: "Partner Companies", icon: BuildingOfficeIcon }
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

      <section className="container py-20 relative">
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
            <span className="text-sm font-semibold text-primary">Innovating Education</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            About Skill Training Center
          </h1>
          <p className="mt-6 text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Where innovation meets excellence in the realm of IT solutions and transformative education.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-foreground/70 leading-relaxed">
            Skill Training Center is a premier software organization with a strong presence in Pune and Nagpur.
            We specialize in cutting-edge IT solutions, digital marketing, and transformative education programs
            designed to bridge the gap between academia and industry.
          </p>
        </motion.div>

        {/* Interactive Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              The principles that guide our mission and shape our success stories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`group relative rounded-2xl bg-gradient-to-br from-background to-muted/20 p-8 border border-border/50 overflow-hidden backdrop-blur-sm cursor-pointer transition-all duration-500 ${hoveredCard === index ? 'bg-background/80' : 'hover:bg-background/60'
                  }`}
              >
                {/* Animated Background Glow */}
                <motion.div
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    scale: hoveredCard === index ? 1 : 0.8
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10 rounded-2xl pointer-events-none transition-all duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6 transition-all duration-300`}
                  >
                    <value.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 border border-blue-500/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <TrophyIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Provide job-ready training with comprehensive mentor support, real-world projects,
              and dedicated placement assistance to transform careers through practical, industry-aligned education.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 border border-purple-500/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Become the leading institute for practical software education in the region,
              recognized for producing industry-ready professionals who drive innovation and excellence in technology.
            </p>
          </motion.div>
        </motion.div>



        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Reach out to us for more information about our services and training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-gradient-to-br from-primary/10 to-purple-600/10 p-8 border border-primary/20 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Locations</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pune Office</h4>
                    <p className="text-foreground/70">IT Park, Hinjawadi, Pune, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Nagpur Office</h4>
                    <p className="text-foreground/70">Tech Hub, Sitabuldi, Nagpur, Maharashtra</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 border border-blue-500/20 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Details</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <p className="text-foreground/70">+91 93993 45989</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-foreground/70">info@Skill Training Center.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-purple-600/10 to-transparent border border-primary/20 p-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have accelerated their careers with our industry-leading training programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-lg shadow-primary/25"
            >
              <SparklesIcon className="w-5 h-5" />

            </motion.button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}