import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCounter(to: number, duration = 1.2) {
  const controls = useAnimation();
  const [value, setValue] = useState(0);
  useEffect(() => {
    controls.start({ count: to, transition: { duration, ease: "easeOut" } });
  }, [to]);
  return { controls, value, setValue };
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const a = useCounter(60000);
  const b = useCounter(5000);
  const c = useCounter(200);

  useEffect(() => {
    if (inView) {
      a.controls.start({ count: 60000 });
      b.controls.start({ count: 5000 });
      c.controls.start({ count: 200 });
    }
  }, [inView]);

  return (
    <section ref={ref} className="container py-16">
      <div className="grid gap-6 rounded-2xl bg-accent/50 p-8 text-center backdrop-blur md:grid-cols-3">
        <AnimatedNumber controls={a.controls} suffix="+" label="Students Trained" />
        <AnimatedNumber controls={b.controls} suffix="+" label="Successful Placements" />
        <AnimatedNumber controls={c.controls} suffix="+" label="Courses Offered" />
      </div>
    </section>
  );
}

function AnimatedNumber({ controls, suffix, label }: { controls: any; suffix?: string; label: string }) {
  const [display, setDisplay] = useState(0);
  return (
    <div className="space-y-2">
      <motion.span
        initial={{ count: 0 }}
        animate={controls}
        onUpdate={(latest: any) => setDisplay(Math.floor(latest.count || 0))}
        className="bg-gradient-to-br from-secondary to-primary bg-clip-text text-4xl font-extrabold tracking-tight text-transparent"
      />
      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">{display}{suffix}</div>
      <div className="text-sm text-foreground/70">{label}</div>
    </div>
  );
}
