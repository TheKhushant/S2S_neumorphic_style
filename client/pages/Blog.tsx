import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/site/Layout";
import {
  SparklesIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  ShareIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/solid";

const posts = [
  {
    id: 1,
    title: "How to Prepare for Coding Interviews in 2025",
    date: "2025-01-15",
    readTime: "8 min read",
    author: "Arjun Patel",
    excerpt: "Master the art of technical interviews with our comprehensive guide covering data structures, system design, and behavioral questions.",
    category: "Interview Prep",
    tags: ["Coding", "Interview", "Career"],
    image: "/blog/interview-prep.jpg",
    content: `...` // Keep your original content
  },
  {
    id: 2,
    title: "Top Frontend Tools and Libraries Shaping 2025",
    date: "2025-02-10",
    readTime: "6 min read",
    author: "Priya Sharma",
    excerpt: "Explore the cutting-edge tools and frameworks that are revolutionizing frontend development this year.",
    category: "Frontend",
    tags: ["React", "Tools", "Innovation"],
    image: "/blog/frontend-tools.jpg",
    content: `...`
  },
  {
    id: 3,
    title: "AI in Education: Transforming Learning Experiences",
    date: "2025-01-28",
    readTime: "10 min read",
    author: "Dr. Rajesh Kumar",
    excerpt: "Discover how artificial intelligence is revolutionizing the education sector and personalized learning.",
    category: "AI & Education",
    tags: ["AI", "Education", "Innovation"],
    image: "/blog/ai-education.jpg",
    content: `...`
  },
  {
    id: 4,
    title: "Mastering Python for Data Science",
    date: "2025-01-20",
    readTime: "12 min read",
    author: "Neha Gupta",
    excerpt: "Comprehensive guide to Python libraries and techniques for effective data analysis and machine learning.",
    category: "Data Science",
    tags: ["Python", "Data Science", "ML"],
    image: "/blog/python-ds.jpg",
    content: `...`
  }
];

export default function Blog({ raisedShadow, insetShadow }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["all", ...new Set(posts.map(post => post.category))];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
              <BookOpenIcon className="w-6 h-6 text-violet-600" />
              <span className="font-semibold text-violet-700">Knowledge Hub</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest updates, tutorials, and industry insights from our expert team. 
              Stay ahead in your learning journey.
            </p>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="container mx-auto px-6 pb-12">
          <div className={`max-w-4xl mx-auto rounded-3xl bg-[#e0e5ec] ${raisedShadow} p-2`}>
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-14 pr-6 py-4 rounded-3xl bg-[#e0e5ec] ${insetShadow} focus:outline-none text-gray-700 placeholder:text-gray-400`}
                />
                <SparklesIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3 lg:flex-nowrap">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-3xl font-medium whitespace-nowrap transition-all duration-300
                      ${activeCategory === category 
                        ? `bg-[#e0e5ec] text-violet-700 ${insetShadow}` 
                        : `bg-[#e0e5ec] text-gray-700 ${raisedShadow} hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]`}`}
                  >
                    {category === "all" ? "All Topics" : category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -12 }}
                  onClick={() => setSelectedPost(post)}
                  className={`group rounded-3xl bg-[#e0e5ec] ${raisedShadow} overflow-hidden cursor-pointer transition-all duration-300`}
                >
                  {/* Image / Placeholder */}
                  <div className="relative h-52 bg-[#d8dde6] flex items-center justify-center overflow-hidden">
                    <BookOpenIcon className="w-20 h-20 text-gray-400" />
                    <div className="absolute top-4 right-4 px-4 py-1 bg-white/90 text-xs font-semibold rounded-2xl shadow-inner">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-violet-700 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-[15px] leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-IN')}
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <UserIcon className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-1 bg-white text-gray-600 text-xs rounded-2xl shadow-inner">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center text-violet-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Read Full Article
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpenIcon className="w-20 h-20 mx-auto text-gray-400 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">No articles found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter</p>
              <button
                onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
                className={`px-8 py-4 rounded-3xl bg-[#e0e5ec] ${raisedShadow} hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]`}
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* CTA Newsletter */}
        <section className="container mx-auto px-6 mt-20">
          <div className={`rounded-3xl bg-[#e0e5ec] ${raisedShadow} p-12 md:p-16 text-center`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Stay Updated</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
              Subscribe to our newsletter and get the latest insights on technology, career growth, and skill development.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`flex-1 px-6 py-4 rounded-3xl bg-[#e0e5ec] ${insetShadow} focus:outline-none text-gray-700`}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-4 rounded-3xl font-semibold bg-[#e0e5ec] ${raisedShadow} text-gray-800`}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </section>

        {/* Blog Post Modal - Neumorphic */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`relative max-w-4xl w-full bg-[#e0e5ec] rounded-3xl overflow-hidden ${raisedShadow}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-10">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className={`absolute top-8 right-8 p-4 rounded-2xl bg-[#e0e5ec] ${raisedShadow} active:${insetShadow}`}
                  >
                    ✕
                  </button>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-5 py-2 bg-white text-violet-700 text-sm font-semibold rounded-2xl shadow-inner">
                      {selectedPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{selectedPost.readTime}</span>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
                    {selectedPost.title}
                  </h2>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-10">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-5 h-5" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5" />
                      {new Date(selectedPost.date).toLocaleDateString('en-IN')}
                    </div>
                  </div>

                  <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                </div>

                <div className="border-t border-gray-200 p-10 flex flex-wrap gap-3">
                  {selectedPost.tags.map((tag, i) => (
                    <span key={i} className="px-5 py-2 bg-white text-gray-600 text-sm rounded-2xl shadow-inner">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}