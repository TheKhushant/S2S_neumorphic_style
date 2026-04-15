import { useState } from "react";
import { motion } from "framer-motion";
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
} from "@heroicons/react/24/solid";

export default function About({ raisedShadow, insetShadow }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const coreValues = [
    {
      icon: AcademicCapIcon,
      title: "Education",
      description: "Education is key to personal and professional growth. We empower individuals to excel academically and professionally.",
    },
    {
      icon: LightBulbIcon,
      title: "Belief",
      description: "We believe in nurturing talent and fostering careers through innovative learning experiences.",
    },
    {
      icon: PuzzlePieceIcon,
      title: "Solutions",
      description: "Our tailored solutions ensure that your projects are delivered with excellence and efficiency.",
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
      <div className="bg-[#e0e5ec] min-h-screen pb-20">
        
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] mb-6"
            >
              <SparklesIcon className="w-6 h-6 text-violet-600" />
              <span className="font-semibold text-violet-700">Innovating Education</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
              About Skill Training Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where innovation meets excellence in the realm of IT solutions and transformative education programs.
            </p>
          </div>
        </section>

        {/* Stats Grid - Neumorphic Cards */}
        <section className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`rounded-3xl p-8 bg-[#e0e5ec] ${raisedShadow} text-center transition-all duration-300`}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center">
                  <stat.icon className="w-9 h-9 text-violet-600" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Introduction */}
        <section className="container mx-auto px-6 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Skill Training Center is a premier software organization with a strong presence in Pune and Nagpur. 
              We specialize in cutting-edge IT solutions, digital marketing, and transformative education programs 
              designed to bridge the gap between academia and industry.
            </p>
          </div>
        </section>

        {/* Core Values - Neumorphic Cards */}
        <section className="container mx-auto px-6 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission and shape every success story
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`rounded-3xl p-10 bg-[#e0e5ec] ${raisedShadow} transition-all duration-300 group`}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center mb-8">
                  <value.icon className="w-9 h-9 text-violet-600" />
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mb-5">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Mission */}
            <motion.div
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-10 bg-[#e0e5ec] ${raisedShadow}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center">
                  <TrophyIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-[17px] leading-relaxed">
                Provide job-ready training with comprehensive mentor support, real-world projects, 
                and dedicated placement assistance to transform careers through practical, 
                industry-aligned education.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-10 bg-[#e0e5ec] ${raisedShadow}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center">
                  <ChartBarIcon className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-[17px] leading-relaxed">
                Become the leading institute for practical software education in the region, 
                recognized for producing industry-ready professionals who drive innovation 
                and excellence in technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto px-6">
          <div className={`max-w-5xl mx-auto rounded-3xl bg-[#e0e5ec] ${raisedShadow} p-12 md:p-16`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">Reach out to us for more information about our services and training programs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Locations */}
              <div className={`rounded-3xl p-10 bg-[#e0e5ec] ${raisedShadow}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Our Locations</h3>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Pune Office</h4>
                      <p className="text-gray-600">IT Park, Hinjawadi, Pune, Maharashtra</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Nagpur Office</h4>
                      <p className="text-gray-600">Tech Hub, Sitabuldi, Nagpur, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className={`rounded-3xl p-10 bg-[#e0e5ec] ${raisedShadow}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 93993 45989</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">info@skilltrainingcenter.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 mt-20">
          <div className={`rounded-3xl bg-[#e0e5ec] ${raisedShadow} p-16 text-center`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of successful students who have accelerated their careers with our industry-leading training programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 py-4 rounded-3xl font-semibold text-lg bg-[#e0e5ec] ${raisedShadow} hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]`}
            >
              Explore Our Courses
            </motion.button>
          </div>
        </section>
      </div>
    </Layout>
  );
}