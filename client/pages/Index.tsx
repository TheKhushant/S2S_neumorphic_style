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
            <div className="mt-4 text-foreground/80">
              <p>Skill2Success, where innovation meets excellence in the realm of IT solutions.</p>
              <p className="mt-2">Skill2Success is a software organization with a presence in Pune and Nagpur city. Specializing in various aspects of IT and digital marketing, Skill2Success excels in customized web development, application development and various training programs.</p>
              <h3 className="mt-4 font-bold">Education</h3>
              <p className="mt-2">Education is key to personal and professional growth. So we empower individuals to excel academically and professionally, opening doors to new opportunities and horizons.</p>
              <h3 className="mt-4 font-bold">Belief</h3>
              <p className="mt-2">We believe in nurturing talent and fostering careers. We connect top-tier talent with leading organizations, facilitating mutually beneficial partnerships and helping individuals navigate the complexities of the job market.</p>
              <h3 className="mt-4 font-bold">Solutions</h3>
              <p className="mt-2">Our tailored solutions ensure that your projects are not only executed flawlessly but also meet your unique requirements and objectives. Driven by a commitment to excellence, integrity, and client satisfaction, Skill2Success is your go-to partner for innovative and impactful IT solutions.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-secondary/50 to-primary/30 p-1">
              <div className="h-full w-full rounded-2xl bg-background/60 backdrop-blur">
                <video
                  src="/v1.mp4"
                  alt="Classroom"
                  className="h-full w-full rounded-2xl object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                />
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
      <section id="contact" className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Contact Us</h2>
          <p className="mt-3 text-foreground/80">Reach out to us for more information about our services and training programs.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <ContactForm />
        </motion.div>
      </section>
    </Layout>
  );
}