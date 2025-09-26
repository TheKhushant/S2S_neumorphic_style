import Layout from "@/components/site/Layout";
import { useParams, Link } from "react-router-dom";
import { getCourseById } from "@/data/courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = id ? getCourseById(id) : null;

  if (!course) {
    return (
      <Layout>
        <section className="container py-24 text-center">
          <h1 className="text-2xl font-bold">Course not found</h1>
          <p className="mt-4 text-foreground/80">We couldn't find the requested course.</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-extrabold">{course.title}</h1>
            <p className="text-foreground/80">{course.description}</p>
            <div className="mt-6 grid gap-4 rounded-lg border bg-card p-6">
              <div>
                <h3 className="font-bold">Syllabus</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80">
                  {course.syllabus.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold">What you'll learn</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80">
                  {course.outcomes.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>
              {course.prerequisites?.length ? (
                <div>
                  <h3 className="font-bold">Prerequisites</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80">
                    {course.prerequisites!.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-bold">Meet Your Trainers</h3>
                <div className="mt-3 grid gap-3">
                  <div>
                    <div className="font-semibold">Arjun</div>
                    <div className="text-sm text-muted-foreground">Senior Java Developer & Trainer — 10+ years experience</div>
                  </div>
                  <div>
                    <div className="font-semibold">Priya</div>
                    <div className="text-sm text-muted-foreground">Frontend Engineer & Mentor — React & UI expert</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-bold">Frequently Asked Questions</h3>
                <div className="mt-3 text-sm text-foreground/80">
                  <details className="mb-2">
                    <summary className="font-medium">Do you provide placement assistance?</summary>
                    <div className="mt-1">Yes, we offer interview prep, resume reviews and placement support.</div>
                  </details>
                  <details className="mb-2">
                    <summary className="font-medium">What is the class schedule?</summary>
                    <div className="mt-1">We have both weekday and weekend batches. Check the schedule section for this course.</div>
                  </details>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border bg-card p-6">
              <h3 className="font-bold">Course Modules</h3>
              <div className="mt-3 grid gap-3">
                {course.modules?.map((m, idx) => (
                  <div key={idx} className="rounded-md border p-4">
                    <div className="font-semibold">{m.title}</div>
                    <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80">
                      {m.topics.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {course.projects?.length ? (
                <div className="mt-4">
                  <h4 className="font-bold">Projects</h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80">
                    {course.projects.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {course.demoVideo ? (
                <div className="mt-4">
                  <h4 className="font-bold">Course Demo</h4>
                  <video controls poster={course.image} className="mt-2 w-full rounded-md">
                    <source src={course.demoVideo} type="video/mp4" />
                  </video>
                </div>
              ) : null}

              {course.certificate ? (
                <div className="mt-4">
                  <h4 className="font-bold">Certification</h4>
                  <div className="mt-1 text-sm text-foreground/80">{course.certificate}</div>
                </div>
              ) : null}
            </div>

            <div className="mt-6 rounded-lg border bg-card p-6">
              <h3 className="font-bold">Related Courses</h3>
              <div className="mt-3 flex gap-3 overflow-auto">
                {/* Simple related items: could be replaced with real recommendations */}
                <Link to="/courses/react-ts" className="rounded-md border bg-background px-3 py-2 text-sm">React + TypeScript</Link>
                <Link to="/courses/python-django" className="rounded-md border bg-background px-3 py-2 text-sm">Python & Django</Link>
              </div>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Duration</div>
                  <div className="text-lg font-bold">{course.duration}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Fees</div>
                  <div className="text-lg font-bold">{course.fees}</div>
                </div>
              </div>
              <div className="mt-4">
                <Link to={`/enroll/${course.id}`} className="inline-block w-full">
                  <button className="w-full rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Enroll Now</button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h4 className="font-bold">Batch Schedule</h4>
              <p className="mt-2 text-sm text-foreground/80">{course.schedule || "Contact us for next batch dates."}</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
