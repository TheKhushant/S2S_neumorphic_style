import Layout from "@/components/site/Layout";

const posts = [
  { title: "How to Prepare for Coding Interviews", date: "2025-01-15", excerpt: "Tips and mock questions to get you ready for interviews." },
  { title: "Top Frontend Tools in 2025", date: "2025-02-10", excerpt: "A look at tools and libraries shaping frontend development." },
];

export default function Blog() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold">Blog & News</h1>
          <p className="mt-2 text-foreground/80">Latest updates and articles from our team.</p>
          <div className="mt-6 grid gap-4">
            {posts.map((p, i) => (
              <article key={i} className="rounded-md border bg-background p-6">
                <h3 className="font-bold">{p.title}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{p.date}</div>
                <p className="mt-3 text-foreground/80">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
