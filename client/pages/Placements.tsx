import Layout from "@/components/site/Layout";

const companies = ["Google", "Amazon", "Microsoft", "TCS", "Infosys"];
const jobs = [
  { title: "Frontend Engineer", company: "Google", location: "Hyderabad", salary: "₹8-12 LPA" },
  { title: "Backend Developer", company: "Amazon", location: "Bengaluru", salary: "₹6-10 LPA" },
  { title: "Full-Stack Developer", company: "TCS", location: "Remote", salary: "₹4-8 LPA" },
];

export default function Placements() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold">Placements</h1>
          <p className="mt-3 text-foreground/80">Recent job postings and student success stories from our placement cell.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-bold">Companies</h3>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {companies.map((c) => (
                <div key={c} className="h-12 w-32 rounded-md border bg-background flex items-center justify-center text-sm font-semibold">{c}</div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold">Job Openings</h3>
            <ul className="mt-4 space-y-3">
              {jobs.map((j, i) => (
                <li key={i} className="rounded-md border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{j.title}</div>
                      <div className="text-sm text-muted-foreground">{j.company} • {j.location}</div>
                    </div>
                    <div className="text-sm font-bold">{j.salary}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
