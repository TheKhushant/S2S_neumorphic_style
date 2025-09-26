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
            <div key={idx} className="min-w-full relative grid place-items-center h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
                role="img"
                aria-label={s.title}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 text-center text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">{s.title}</h2>
                <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/90">{s.subtitle}</p>
                <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link to={s.cta.to} className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-primary text-white font-semibold text-sm sm:text-base shadow hover:opacity-90">
                    {s.cta.label}
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-accent text-white font-semibold text-sm sm:text-base shadow hover:opacity-90">
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
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1 sm:p-2"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        aria-label="Next"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1 sm:p-2"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dots and play/pause */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-6 flex items-center gap-2 sm:gap-3">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="text-white/90 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded bg-black/30"
        >
          {playing ? "Pause" : "Play"}
        </button>
        <div className="flex items-center gap-1 sm:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${selectedIndex === i ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}