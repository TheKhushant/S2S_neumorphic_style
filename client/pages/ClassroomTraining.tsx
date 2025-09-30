import Layout from "@/components/site/Layout";

export default function ClassroomTraining() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold">Classroom Training</h1>
          <p className="mt-3 text-foreground/80">In-person instructor-led classes at our Nagpur center. Small batches and live projects.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-background p-6">
            <h3 className="text-lg font-bold">Weekday Batch</h3>
            <p className="mt-2 text-sm text-foreground/80">Monday - Friday, 6:30 PM - 8:30 PM</p>
          </div>
          <div className="rounded-lg border bg-background p-6">
            <h3 className="text-lg font-bold">Weekend Batch</h3>
            <p className="mt-2 text-sm text-foreground/80">Saturday & Sunday, 10:00 AM - 2:00 PM</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
