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
} from "@heroicons/react/24/outline";

// Blog posts data with more details
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
    content: `
      <h2>Mastering Technical Interviews</h2>
      <p>Technical interviews can be daunting, but with the right preparation, you can confidently tackle any challenge that comes your way.</p>
      
      <h3>Data Structures & Algorithms</h3>
      <p>Focus on mastering core data structures like arrays, linked lists, trees, and graphs. Practice common algorithm patterns including:</p>
      <ul>
        <li>Two-pointer technique</li>
        <li>Sliding window</li>
        <li>Depth-first search</li>
        <li>Breadth-first search</li>
        <li>Dynamic programming</li>
      </ul>

      <h3>System Design Fundamentals</h3>
      <p>For senior roles, system design becomes crucial. Understand:</p>
      <ul>
        <li>Scalability principles</li>
        <li>Database design</li>
        <li>Caching strategies</li>
        <li>Load balancing</li>
      </ul>

      <h3>Behavioral Questions</h3>
      <p>Prepare STAR (Situation, Task, Action, Result) stories for common behavioral questions.</p>
    `
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
    content: `
      <h2>The Future of Frontend Development</h2>
      <p>Frontend development continues to evolve at a rapid pace. Here are the tools you need to master in 2025.</p>

      <h3>Framework Innovations</h3>
      <p><strong>React 19+</strong> brings concurrent features and improved server components.</p>
      <p><strong>Vue 3.4</strong> offers better TypeScript support and performance optimizations.</p>
      <p><strong>Svelte 5</strong> introduces runes for reactive state management.</p>

      <h3>Build Tools Revolution</h3>
      <p><strong>Vite 5</strong> continues to lead with lightning-fast builds and excellent developer experience.</p>
      <p><strong>Turbopack</strong> from the Next.js team offers incremental bundling.</p>

      <h3>AI-Powered Development</h3>
      <p>Tools like GitHub Copilot and Amazon CodeWhisperer are becoming essential for productivity.</p>
    `
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
    content: `
      <h2>AI-Driven Educational Revolution</h2>
      <p>Artificial Intelligence is transforming how we learn, teach, and assess educational outcomes.</p>

      <h3>Personalized Learning Paths</h3>
      <p>AI algorithms analyze student performance to create customized learning journeys.</p>

      <h3>Intelligent Tutoring Systems</h3>
      <p>24/7 AI tutors provide instant feedback and guidance to students.</p>

      <h3>Automated Assessment</h3>
      <p>Machine learning models can evaluate complex assignments and provide detailed feedback.</p>
    `
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
    content: `
      <h2>Python for Data Professionals</h2>
      <p>Python remains the language of choice for data science. Here's how to master it.</p>

      <h3>Essential Libraries</h3>
      <p><strong>Pandas</strong> for data manipulation and analysis.</p>
      <p><strong>NumPy</strong> for numerical computing.</p>
      <p><strong>Matplotlib & Seaborn</strong> for data visualization.</p>

      <h3>Machine Learning with Scikit-learn</h3>
      <p>Comprehensive guide to implementing ML algorithms.</p>
    `
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories
  const categories = ["all", ...new Set(posts.map(post => post.category))];

  // Filter posts based on category and search
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            <BookOpenIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Knowledge Hub</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          <p className="mt-6 text-xl text-foreground/70 max-w-2xl mx-auto">
            Latest updates, tutorials, and industry insights from our expert team.
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-semibold"> Stay ahead in your learning journey.</span>
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl w-full">
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background/50 border border-border/30 backdrop-blur-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <SparklesIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category
                      ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25"
                      : "bg-background/50 border border-border/30 text-foreground/70 hover:border-primary/30"
                    }`}
                >
                  {category === "all" ? "All Topics" : category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative rounded-2xl bg-gradient-to-br from-background to-muted/20 p-6 border border-border/50 overflow-hidden backdrop-blur-sm cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 opacity-0 rounded-2xl pointer-events-none transition-all duration-500"
                  />

                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    <TagIcon className="w-3 h-3" />
                    {post.category}
                  </div>

                  {/* Post Image Placeholder */}
                  <div className="w-full h-48 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 mb-4 flex items-center justify-center">
                    <BookOpenIcon className="w-12 h-12 text-primary/40" />
                  </div>

                  <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-foreground/70 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="w-3 h-3" />
                      {post.author}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/5 text-primary rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Arrow */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm"
                  >
                    <span>Read More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </motion.div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                <BookOpenIcon className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold"
              >
                Clear filters
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-purple-600/10 to-transparent border border-primary/20 p-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Latest Trends
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss an update on the latest in technology and education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background/50 border border-border/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold shadow-lg shadow-primary/25"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-background rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-8 border-b border-border/30">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                >
                  <ArrowRightIcon className="w-5 h-5 rotate-45" />
                </button>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {selectedPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{selectedPost.date}</span>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {selectedPost.title}
                </h2>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    {selectedPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    {selectedPost.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeIcon className="w-4 h-4" />
                    1.2k views
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[60vh]">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </div>

              {/* Modal Footer */}
              <div className="p-8 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-semibold"
                  >
                    <ShareIcon className="w-4 h-4" />
                    Share
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}