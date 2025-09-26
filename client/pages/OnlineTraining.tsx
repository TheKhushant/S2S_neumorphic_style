import Layout from "@/components/site/Layout";
import { Link } from "react-router-dom";
import { courses } from "@/data/courses";

export default function OnlineTraining() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold">Online Training</h1>
          <p className="mt-3 text-foreground/80">Join live instructor-led online classes with recorded sessions, assignments, and mentor support.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {courses.map((c) => (
            <article key={c.id} className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{c.short}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">{c.duration}</div>
                <Link to={`/enroll/${c.id}`} className="text-primary font-semibold">Register</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
