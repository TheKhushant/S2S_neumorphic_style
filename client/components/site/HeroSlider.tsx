import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero1 from "../../../public/1.png";
import Hero2 from "../../../public/5.png";
import Hero3 from "../../../public/3.png";

const slides = [
  { image: Hero3, cta: { label: "Explore Courses", to: "/courses" } },
  { image: Hero2, cta: { label: "View Programs", to: "/courses" } },
  { image: Hero1, cta: { label: "Contact Us", to: "/contact" } },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  // Update selected index
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    let id: number | undefined;
    if (playing) {
      id = window.setInterval(() => emblaApi && emblaApi.scrollNext(), 5000);
    }
    return () => id && clearInterval(id);
  }, [emblaApi, playing]);

  return (
    <div className="relative w-full">
      {/* Slides */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className="min-w-full relative"
            >
              <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                <img
                  src={s.image}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/1920x1080"; // Fallback image
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1 sm:p-2 md:p-3"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        aria-label="Next"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1 sm:p-2 md:p-3"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots & Play/Pause */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 md:bottom-6 flex items-center gap-1 sm:gap-2 md:gap-3">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="text-white/90 text-xs sm:text-sm md:text-base px-1 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded bg-black/30"
        >
          {playing ? "Pause" : "Play"}
        </button>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-colors duration-200 ease-in-out hover:bg-white/60 focus:bg-white/60 ${selectedIndex === i ? 'bg-white' : 'bg-white/40'}"
            />
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6 flex justify-center gap-2 sm:gap-3 md:gap-4">
        {slides.map((s, idx) => (
          <Link
            key={idx}
            to={s.cta.to}
            className={`bg-blue-600 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded ${selectedIndex === idx ? 'block' : 'hidden'} transition-all duration-200 ease-in-out hover:bg-blue-700`}
          >
            {s.cta.label}
          </Link>
        ))}
      </div>
    </div>
  );
}