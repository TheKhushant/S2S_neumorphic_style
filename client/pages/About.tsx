import Layout from "@/components/site/Layout";

export default function About() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold">About Us</h1>
          <p className="mt-3 text-foreground/80">Our mission is to bridge the gap between education and employment through practical training.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-md border bg-background p-6">
              <h3 className="font-bold">Mission</h3>
              <p className="mt-2 text-foreground/80">Provide job-ready training with mentor support and placement assistance.</p>
            </div>
            <div className="rounded-md border bg-background p-6">
              <h3 className="font-bold">Vision</h3>
              <p className="mt-2 text-foreground/80">Become the leading institute for practical software education in the region.</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Trainers</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border bg-background p-4"> <div className="font-semibold">Arjun</div><div className="text-sm text-muted-foreground">Full-Stack Java Trainer</div></div>
              <div className="rounded-md border bg-background p-4"> <div className="font-semibold">Priya</div><div className="text-sm text-muted-foreground">React & Frontend Trainer</div></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
