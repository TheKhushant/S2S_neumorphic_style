import Layout from "@/components/site/Layout";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import TestimonialCard from "@/components/site/TestimonialCard";
import ContactForm from "@/components/site/ContactForm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/lib/animations";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <section id="courses" className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Top Courses</h2>
          <p className="mt-3 text-foreground/80">Hand-picked programs designed with industry experts to accelerate your career.</p>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {["Python + DSA", "Databricks", "AI-Data Analytics"].map((title, i) => (
            <motion.article
              key={title}
              variants={fadeInUp(i * 0.05)}
              className="group rounded-xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-2 w-16 rounded-full bg-gradient-to-r from-secondary to-primary" />
              <h3 className="mt-3 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70">Live sessions, projects, and mentorship. Flexible schedules and placement support.</p>
              <Link to="/courses" className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline">Explore</Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
      <Stats />
      <section id="about" className="container py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-extrabold tracking-tight">About Us</h2>
            <p className="mt-4 text-foreground/80">We deliver high-quality training with a focus on real-world skills, taught by expert trainers with industry experience.</p>
            <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
              <li>• Mentor-led live classes</li>
              <li>• Hands-on assignments</li>
              <li>• Placement assistance</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-secondary/50 to-primary/30 p-1">
              <div className="h-full w-full rounded-2xl bg-background/60 backdrop-blur">
                <img src="/placeholder.svg" alt="Classroom" className="h-full w-full rounded-2xl object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="testimonials" className="bg-accent/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">What Our Students Say</h2>
            <p className="mt-3 text-foreground/80">Success stories from our alumni.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard quote="Comprehensive curriculum and supportive mentors helped me land a developer job." author="Ananya" role="Java Developer" />
            <TestimonialCard quote="Loved the projects and the guidance on interviews and resumes." author="Rohit" role="Frontend Engineer" />
            <TestimonialCard quote="Flexible classes and great trainers. Highly recommend!" author="Sneha" role="Python Developer" />
          </div>
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
}