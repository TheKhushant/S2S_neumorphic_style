import { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon, PlayCircleIcon, TrophyIcon, EyeIcon } from "@heroicons/react/24/outline";
import newposter6 from "../../../public/newposter6.jpg";
import newposter5 from "../../../public/newposter5.jpg";
import poster3 from "../../../public/poster3.jpg";
import poster4 from "../../../public/poster4.jpg";

export default function PosterTemplates() {
  const accentColor = "#e5bcfb";
  const accentDark = "#c084fc";

  // Poster templates data (unchanged)
  const posterTemplates = [
    {
      title: "AI-Data Analytics",
      description: "Traning & Certification",
      icon: SparklesIcon,
      gradient: `linear-gradient(135deg, ${accentColor}, ${accentDark})`,
      previewImage: newposter6,
    },
    {
      title: "AI-Data Analytics",
      description: "Traning & Certification",
      icon: PlayCircleIcon,
      gradient: `linear-gradient(135deg, #a5b4fc, ${accentColor})`,
      previewImage: newposter5,
    },
    {
      title: "AI Data-Bricks Seminar",
      description: "AI Analytics Engineering On Data-Bricks Seminar",
      icon: TrophyIcon,
      gradient: `linear-gradient(135deg, ${accentColor}, #f9a8d4)`,
      previewImage: poster3,
    },
    {
      title: "Answercraft",
      description: "Professional traning On communication",
      icon: TrophyIcon,
      gradient: `linear-gradient(135deg, ${accentColor}, #f472b6)`,
      previewImage: poster4,
    },
  ];

  // Scroll to contact (unchanged)
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const raisedShadow = "shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]";
  const softHover = "hover:shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:-translate-y-1";

  return (
    <section id="posters" className="container py-16 bg-[#e0e5ec]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-lg text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] mb-6 mx-auto">
          <SparklesIcon className="w-5 h-5" style={{ color: accentColor }} />
          <span className="text-sm font-semibold" style={{ color: "#6b21a8" }}>Latest Updates</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Updates</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
          Latest courses, webinars, and success stories.
        </p>
      </motion.div>

      {/* Neumorphic Poster Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {posterTemplates.map((template, index) => {
          const IconComponent = template.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
              onClick={scrollToContact}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') scrollToContact();
              }}
              className={`group relative h-[260px] rounded-3xl bg-[#e0e5ec] p-5 cursor-pointer overflow-hidden transition-all duration-300 ${raisedShadow} ${softHover}`}
            >
              {/* Soft Inner Highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                {/* <div
                  className="inline-flex p-3 rounded-2xl text-white mb-4 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]"
                  style={{ background: template.gradient }}
                >
                  <IconComponent className="w-5 h-5" />
                </div> */}

                {/* Poster Image Preview */}
                <div className="flex-1 rounded-2xl overflow-hidden mb-4 relative shadow-inner bg-white">
                  <img
                    src={template.previewImage}
                    alt={`${template.title} preview`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-[2px_2px_6px_#bebebe]">
                      <EyeIcon className="w-5 h-5" style={{ color: "#6b21a8" }} />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-800 text-base leading-tight line-clamp-1">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-tight line-clamp-2">
                    {template.description}
                  </p>
                </div>
              </div>

              {/* Subtle bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/5 to-transparent rounded-b-3xl pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* Optional CTA - currently empty in your code */}
      <div className="text-center mt-10">
        {/* You can add a "View All Updates" button here later if needed */}
      </div>
    </section>
  );
}