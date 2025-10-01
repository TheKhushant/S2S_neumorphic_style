import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EyeIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

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

export default function GallerySection() {
  const [activeGalleryTab, setActiveGalleryTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter gallery items
  const filteredGallery = activeGalleryTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeGalleryTab);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
      className="mb-20"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 mt-16"
        >
          <EyeIcon className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Learning Experience</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
          Explore Our Learning Journey
        </h2>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Get a glimpse of our interactive classrooms, student projects, and success stories
        </p>
      </div>

      {/* Gallery Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {galleryTabs.map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveGalleryTab(tab.id)}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeGalleryTab === tab.id
                ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25"
                : "bg-background/50 border border-border/30 text-foreground/70 hover:border-primary/30"
            }`}
          >
            {tab.label}
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                activeGalleryTab === tab.id
                  ? "bg-white/20 text-white"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {tab.count}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden bg-background/50 border border-border/30 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                {/* Placeholder for image - replace with actual images */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.badge === "Live"
                        ? "bg-red-500/20 text-red-500"
                        : item.badge === "Projects"
                        ? "bg-green-500/20 text-green-500"
                        : item.badge === "Success"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Video Play Button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <PlayCircleIcon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full bg-background rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{selectedImage.title}</h3>
                <p className="text-foreground/70 mb-6">{selectedImage.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold"
                >
                  Close Preview
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}