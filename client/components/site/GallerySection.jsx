import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EyeIcon, PlayCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

const galleryItems = [
  {
    id: 1,
    type: "image",
    category: "classroom",
    title: "Live Interactive Sessions",
    description: "Real-time learning with expert instructors",
    image: "/img/live.png",
    badge: "Live"
  },
  {
    id: 2,
    type: "discussion",
    category: "group",
    title: "Chhatrapati Shivaji Maharaj Jayanti Celebration",
    description: "A group discussion and cultural celebration honoring the legacy of Chhatrapati Shivaji Maharaj.",
    image: "/img/jayanti.jpeg",
    badge: "Celebration"
  },
  {
    id: 3,
    type: "discussion",
    category: "group",
    title: "Job Fair 2023",
    description: "Interactive group discussion on career opportunities, placements, and experiences from Job Fair 2023.",
    image: "/img/jobfair.jpeg",
    badge: "Job Fair 2023"
  },
  {
    id: 4,
    type: "discussion",
    category: "group",
    title: "Group Discussion on AI",
    description: "Interactive group discussion about AI-powered learning and its impact on education.",
    image: "/img/gd.jpeg",
    badge: "Group Discussion"
  },
  {
    id: 5,
    type: "image",
    category: "projects",
    title: "Hands-on Workshops",
    description: "Practical coding sessions",
    image: "/img/workshop.jpeg",
    badge: "Workshop"
  },
  {
    id: 6,
    type: "image",
    category: "success",
    title: "Certificate Distribution",
    description: "Celebrating student achievements",
    image: "/img/group.jpeg",
    badge: "Certified"
  }
];

const galleryTabs = [
  { id: "all", label: "All", count: galleryItems.length },
  { id: "classroom", label: "Classroom", count: galleryItems.filter(item => item.category === "classroom").length },
  { id: "projects", label: "Projects", count: galleryItems.filter(item => item.category === "projects").length },
  { id: "success", label: "Success", count: galleryItems.filter(item => item.category === "success").length }
];

export default function GallerySection({ 
  raisedShadow, 
  insetShadow 
}) {
  const [activeGalleryTab, setActiveGalleryTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredGallery = activeGalleryTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeGalleryTab);

  return (
    <section className="py-20 bg-[#e0e5ec]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] mb-6"
          >
            <EyeIcon className="w-6 h-6 text-violet-600" />
            <span className="font-semibold text-violet-700">Learning Experience</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Explore Our Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a glimpse of our interactive classrooms, student projects, and success stories
          </p>
        </div>

        {/* Neumorphic Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryTabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGalleryTab(tab.id)}
              className={`px-8 py-4 rounded-3xl font-semibold text-sm flex items-center gap-3 transition-all duration-300
                ${activeGalleryTab === tab.id 
                  ? `bg-[#e0e5ec] text-violet-700 ${insetShadow}` 
                  : `bg-[#e0e5ec] text-gray-700 hover:text-gray-900 ${raisedShadow} hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]`
                }`}
            >
              {tab.label}
              <span className={`text-xs px-3 py-1 rounded-full font-medium
                ${activeGalleryTab === tab.id 
                  ? "bg-violet-100 text-violet-700" 
                  : "bg-gray-100 text-gray-600"}`}>
                {tab.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -30 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -12, scale: 1.03 }}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-3xl overflow-hidden bg-[#e0e5ec] ${raisedShadow} cursor-pointer transition-all duration-300`}
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-1.5 text-xs font-semibold rounded-2xl bg-white/90 backdrop-blur shadow-inner text-gray-800">
                      {item.badge}
                    </span>
                  </div>

                  {/* Play Icon for Video Type */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-[4px_4px_10px_#bebebe,-4px_-4px_10px_#ffffff]">
                        <PlayCircleIcon className="w-9 h-9 text-violet-600" />
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-violet-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Modal - Neumorphic Style */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`relative max-w-4xl w-full bg-[#e0e5ec] rounded-3xl overflow-hidden ${raisedShadow}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[75vh] object-contain"
                  />

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className={`absolute top-6 right-6 p-4 rounded-2xl bg-[#e0e5ec] ${raisedShadow} active:${insetShadow}`}
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-700" />
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedImage.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}