import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/site/Layout";
import GallerySection from "../components/site/GallerySection";
import {
  SparklesIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  AcademicCapIcon,
  TrophyIcon,
  CheckBadgeIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function CorporateTraining({ 
  raisedShadow, 
  insetShadow 
}: { 
  raisedShadow?: string; 
  insetShadow?: string;
}) {
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

    const whatsappMessage = `
🏢 Corporate Training Enquiry

🏛️ Company: ${form.company}
👤 Contact: ${form.contact}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
👥 No. of Employees: ${form.employees}
📝 Details: ${form.message}

🤖 Sent via Skill Training Center
    `.trim();

    const phoneNumber = "919399345989";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    await new Promise(resolve => setTimeout(resolve, 1200));
    window.open(whatsappUrl, "_blank");

    setForm({ company: "", contact: "", email: "", phone: "", employees: "", message: "" });
    setIsSubmitting(false);
  }

  const features = [
    {
      icon: BuildingOfficeIcon,
      title: "Customized Curriculum",
      description: "Tailored learning paths aligned with your business objectives",
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
      description: "Comprehensive tracking and reporting on team progress",
      benefits: ["Skill gap analysis", "Progress reports", "ROI measurement"]
    },
    {
      icon: ClockIcon,
      title: "Flexible Scheduling",
      description: "On-site, remote, or hybrid delivery options",
      benefits: ["24/7 access", "Recorded sessions", "Multiple time zones"]
    }
  ];

  const metrics = [
    { value: "200+", label: "Corporate Clients", icon: BuildingOfficeIcon },
    { value: "15,000+", label: "Professionals Trained", icon: UserGroupIcon },
    { value: "95%", label: "Satisfaction Rate", icon: TrophyIcon },
    { value: "50%", label: "Productivity Boost", icon: ChartBarIcon }
  ];

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

  const ActiveFeatureIcon = features[activeFeature].icon;

  return (
    <Layout>
      <div className="bg-[#e0e5ec] min-h-screen pb-20">
        
        {/* Hero Section */}
        <section className="pt-16 pb-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] mb-6"
              >
                <SparklesIcon className="w-6 h-6 text-violet-600" />
                <span className="font-semibold text-violet-700">Enterprise Training</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Professional Collaboration
              </h1>

              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your workforce with customized AI-powered training programs, 
                expert instructors, and measurable business outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Metrics - Neumorphic Cards */}
        <section className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`rounded-3xl p-8 bg-[#e0e5ec] ${raisedShadow} text-center transition-all duration-300`}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center">
                  <metric.icon className="w-8 h-8 text-violet-600" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{metric.value}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us - Features */}
        <section className="container mx-auto px-6 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Why Choose Our Corporate Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed for enterprise success and team growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            
            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-3xl p-8 cursor-pointer transition-all duration-300 bg-[#e0e5ec] 
                    ${activeFeature === index 
                      ? `${insetShadow} border-2 border-violet-300` 
                      : raisedShadow
                    }`}
                >
                  <div className="flex gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-inner
                      ${activeFeature === index ? "bg-violet-100" : "bg-[#e0e5ec]"}`}>
                      <feature.icon className={`w-7 h-7 ${activeFeature === index ? "text-violet-600" : "text-gray-600"}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-gray-800 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-5">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, i) => (
                          <span key={i} className="px-4 py-1.5 bg-white text-gray-700 text-sm rounded-2xl shadow-inner">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Feature Highlight */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`rounded-3xl p-10 bg-[#e0e5ec] ${raisedShadow} h-full`}
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-[#e0e5ec] shadow-inner flex items-center justify-center">
                  <ActiveFeatureIcon className="w-12 h-12 text-violet-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600 text-lg">{features[activeFeature].description}</p>
              </div>

              <div className="space-y-6">
                {features[activeFeature].benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckBadgeIcon className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-700">{benefit}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training Domains */}
        <section className="container mx-auto px-6 pb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800">Our Training Domains</h2>
            <p className="mt-4 text-xl text-gray-600">Comprehensive coverage of modern technologies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`rounded-3xl p-9 bg-[#e0e5ec] ${raisedShadow}`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{domain.title}</h3>
                <p className="text-gray-600 mb-8">{domain.description}</p>
                <div className="flex flex-wrap gap-3">
                  {domain.technologies.map((tech, i) => (
                    <span key={i} className="px-5 py-2 bg-white text-gray-700 rounded-2xl text-sm shadow-inner">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="container mx-auto px-6">
          <div className={`max-w-5xl mx-auto rounded-3xl bg-[#e0e5ec] ${raisedShadow} p-10 md:p-16`}>
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Form */}
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-3">Request Corporate Program</h2>
                <p className="text-gray-600 mb-10">
                  Get a customized training proposal tailored to your organization's needs.
                </p>

                <form onSubmit={submit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Company Name</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 rounded-2xl bg-[#e0e5ec] ${insetShadow} focus:outline-none focus:ring-2 focus:ring-violet-400`}
                        placeholder="Your Company"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Contact Person</label>
                      <input
                        name="contact"
                        value={form.contact}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 rounded-2xl bg-[#e0e5ec] ${insetShadow} focus:outline-none focus:ring-2 focus:ring-violet-400`}
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 rounded-2xl bg-[#e0e5ec] ${insetShadow} focus:outline-none focus:ring-2 focus:ring-violet-400`}
                        placeholder="company@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 rounded-2xl bg-[#e0e5ec] ${insetShadow} focus:outline-none focus:ring-2 focus:ring-violet-400`}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Number of Employees to Train</label>
                    <input
                      name="employees"
                      value={form.employees}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 rounded-2xl bg-[#e0e5ec] ${insetShadow} focus:outline-none focus:ring-2 focus:ring-violet-400`}
                      placeholder="e.g. 25"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Training Requirements</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-6 py-4 rounded-3xl bg-[#e0e5ec] ${insetShadow} focus:outline-none focus:ring-2 focus:ring-violet-400 resize-y`}
                      placeholder="Tell us about your goals, timeline, and specific training needs..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-3xl font-semibold text-lg flex items-center justify-center gap-3 bg-[#e0e5ec] ${raisedShadow} hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] active:${insetShadow}`}
                  >
                    {isSubmitting ? "Preparing WhatsApp Message..." : "Send Enquiry via WhatsApp"}
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 pt-8 lg:pt-12">
                <div className={`rounded-3xl p-8 bg-[#e0e5ec] ${raisedShadow}`}>
                  <h3 className="text-2xl font-bold mb-6">Ready to Upskill Your Team?</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center">
                        <PhoneIcon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Call Us Directly</div>
                        <div className="text-gray-600">+91 93993 45989</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center">
                        <EnvelopeIcon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-gray-600">corporate@skilltrainingcenter.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`rounded-3xl p-8 bg-[#e0e5ec] ${raisedShadow}`}>
                  <p className="text-gray-600">
                    Our training consultants will get back to you within 24 hours with a customized proposal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <div className="max-w-5xl mx-auto">
          <GallerySection raisedShadow={raisedShadow} insetShadow={insetShadow} />
        </div>
      </div>
    </Layout>
  );
}