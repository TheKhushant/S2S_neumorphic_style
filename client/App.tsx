import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { createRoot } from "react-dom/client";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Enroll from "./pages/Enroll";
import OnlineTraining from "./pages/OnlineTraining";
import ClassroomTraining from "./pages/ClassroomTraining";
import CorporateTraining from "./pages/CorporateTraining";
import Placements from "./pages/Placements";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PlaceholderPage from "./pages/PlaceholderPage";
import ScrollToTop from "./components/ScrollToTop";
import OverseasTranning from "@/components/site/OverseasTranning";

const queryClient = new QueryClient();
function RedirectToOverseas() {
  // window.location.href = "https://ssoverseas.in/";
  window.open("https://ssoverseas.in/", "_blank");
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />

        {/* Main Neumorphic App Wrapper */}
        <div className="min-h-screen bg-[#e0e5ec] overflow-x-hidden">
          
          {/* Subtle Background Pattern (Optional Soft Texture) */}
          <div className="fixed inset-0 bg-[radial-gradient(#d8dde6_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-40 pointer-events-none" />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/enroll/:id" element={<Enroll />} />
            <Route path="/online-training" element={<OnlineTraining />} />
            <Route path="/classroom-training" element={<ClassroomTraining />} />
            <Route path="/corporate-training" element={<CorporateTraining />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/blog" element={<Blog raisedShadow={undefined} insetShadow={undefined} />} />
            <Route path="/about" element={<About raisedShadow={undefined} insetShadow={undefined} />} />
            <Route path="/contact" element={<Contact />} />
            {/* Overseas Routes */}
            <Route path="/overseas-training" element={<OverseasTranning />} />
            <Route path="/overseas-admission" element={<RedirectToOverseas />} />
            <Route 
              path="/portal" 
              element={
                <PlaceholderPage 
                  title="Student Portal" 
                  description="Login and access your dashboard." 
                />
              } 
            />
            <Route 
              path="/admin" 
              element={
                <PlaceholderPage 
                  title="Admin Dashboard" 
                  description="Manage courses, students, and enquiries." 
                />
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);