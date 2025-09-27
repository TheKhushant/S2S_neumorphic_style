import Layout from "@/components/site/Layout";

export default function About() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold">About Us</h1>
          <div className="mt-3 text-foreground/80">
            <p>Skill2Success, where innovation meets excellence in the realm of IT solutions.</p>
            <p className="mt-2">Skill2Success is a software organization with a presence in Pune and Nagpur city. Specializing in various aspects of IT and digital marketing, Skill2Success excels in customized web development, application development and various training programs.</p>
            <h3 className="mt-4 font-bold">Education</h3>
            <p className="mt-2">Education is key to personal and professional growth. So we empower individuals to excel academically and professionally, opening doors to new opportunities and horizons.</p>
            <h3 className="mt-4 font-bold">Belief</h3>
            <p className="mt-2">We believe in nurturing talent and fostering careers. We connect top-tier talent with leading organizations, facilitating mutually beneficial partnerships and helping individuals navigate the complexities of the job market.</p>
            <h3 className="mt-4 font-bold">Solutions</h3>
            <p className="mt-2">Our tailored solutions ensure that your projects are not only executed flawlessly but also meet your unique requirements and objectives. Driven by a commitment to excellence, integrity, and client satisfaction, Skill2Success is your go-to partner for innovative and impactful IT solutions.</p>
          </div>
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
          {/* <div className="mt-8">
            <h2 className="text-2xl font-bold">Trainers</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border bg-background p-4">
                <div className="font-semibold">Arjun</div>
                <div className="text-sm text-muted-foreground">Full-Stack Java Trainer</div>
              </div>
              <div className="rounded-md border bg-background p-4">
                <div className="font-semibold">Priya</div>
                <div className="text-sm text-muted-foreground">React & Frontend Trainer</div>
              </div>
            </div>
          </div> */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-2 text-foreground/80">Reach out to us for more information about our services and training programs.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}