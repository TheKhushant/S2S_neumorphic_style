import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Empowering Futures: SS Skills to Success's 10-Year Legacy of Hands-On Excellence",
    subtitle: "Join 50,000+ alumni transforming careers in tech.",
    image:
      "https://images.unsplash.com/photo-1529336953121-a5fc3574bb12?q=80&w=2000&auto=format&fit=crop",
    cta: { label: "Explore Courses", to: "/courses" },
  },
  {
    title: "Industry-Led Curriculum — Build Real Projects",
    subtitle: "Hands-on labs, GitHub portfolios and interview-ready skills.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
    cta: { label: "View Programs", to: "/courses" },
  },
  {
    title: "Mentorship & Placement Support",
    subtitle: "1:1 mentoring, mock interviews and placement assistance.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    cta: { label: "Contact Us", to: "/contact" },
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    let id: number | undefined;
    if (playing) {
      id = window.setInterval(() => emblaApi && emblaApi.scrollNext(), 5000);
    }
    return () => id && clearInterval(id);
  }, [emblaApi, playing]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, idx) => (
            <div key={idx} className="min-w-full relative grid place-items-center h-[80vh] sm:h-[90vh]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
                role="img"
                aria-label={s.title}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{s.title}</h2>
                <p className="mt-4 text-lg sm:text-xl text-white/90">{s.subtitle}</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <Link to={s.cta.to} className="px-6 py-3 rounded-md bg-primary text-white font-semibold shadow hover:opacity-90">
                    {s.cta.label}
                  </Link>
                  <Link to="/contact" className="px-6 py-3 rounded-md bg-accent text-white font-semibold shadow hover:opacity-90">
                    Free Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
      >
        <ChevronLeft />
      </button>
      <button
        aria-label="Next"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
      >
        <ChevronRight />
      </button>

      {/* Dots and play/pause */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-3">
        <button onClick={() => setPlaying((p) => !p)} className="text-white/90 text-sm px-3 py-1 rounded bg-black/30">
          {playing ? "Pause" : "Play"}
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${selectedIndex === i ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
