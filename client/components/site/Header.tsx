import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  SparklesIcon,
  AcademicCapIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  UserCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { to: "/", label: "Home", icon: SparklesIcon },
  { to: "/courses", label: "Courses", icon: AcademicCapIcon },
  { to: "/online-training", label: "Online Training", icon: BookOpenIcon },
  { to: "/classroom-training", label: "Classroom", icon: BuildingOfficeIcon },
  { to: "/corporate-training", label: "Corporate", icon: BuildingOfficeIcon },
  { to: "/blog", label: "Blog", icon: BookOpenIcon },
  { to: "/about", label: "About", icon: UserCircleIcon },
  { to: "/contact", label: "Contact", icon: PhoneIcon },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white transition-all duration-300",
        scrolled ? "border-gray-200 shadow-lg" : "border-gray-100 shadow-sm"
      )}
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="container flex h-16 sm:h-20 lg:h-24 items-center justify-between px-4 sm:px-6 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0 mt-[10px]">
          <img
            src="/logo.png"
            alt="Skill2Success Logo"
            className="
              h-auto object-contain
              w-[120px]   /* base mobile */
              sm:w-[110px] /* ≥640px */
              md:w-[130px] /* ≥768px */
              lg:w-[150px] /* ≥1024px */
              xl:w-[170px] /* ≥1280px */
              2xl:w-[190px] /* ≥1536px */
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0 xl:gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 text-sm font-semibold transition-colors hover:text-black px-3 py-2 rounded-lg",
                  isActive
                    ? "text-black bg-gray-50 shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                )
              }
            >
              <item.icon className="w-4 h-4 xl:w-5 xl:h-5" />
              <span className="whitespace-nowrap">{item.label}</span>
            </NavLink>
          ))}
          <Link to="/portal">
            <Button className="text-sm px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap">
              <span className="flex items-center gap-2">
                <UserCircleIcon className="w-4 h-4 xl:w-5 xl:h-5" />
                Student Portal
              </span>
            </Button>
          </Link>
        </nav>

        {/* Tablet Navigation (768px - 1023px) */}
        <nav className="hidden md:flex lg:hidden items-center gap-3">
          {navItems.slice(0, 4).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1 text-xs font-semibold transition-colors hover:text-black px-2 py-1 rounded",
                  isActive
                    ? "text-black bg-gray-50 shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                )
              }
            >
              <item.icon className="w-3 h-3" />
              <span className="whitespace-nowrap">{item.label}</span>
            </NavLink>
          ))}
          <Link to="/portal">
            <Button className="text-xs px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap">
              <span className="flex items-center gap-1">
                <UserCircleIcon className="w-3 h-3" />
                Portal
              </span>
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="container grid gap-2 py-4 px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors hover:bg-gray-50 hover:text-black rounded-lg",
                    isActive
                      ? "text-black bg-gray-50 border border-gray-200"
                      : "text-gray-700"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            ))}
            <Link to="/portal" onClick={() => setOpen(false)}>
              <Button className="w-full text-sm px-4 py-3 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                <span className="flex items-center gap-2 justify-center">
                  <UserCircleIcon className="w-5 h-5" />
                  Student Portal
                </span>
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}