import Layout from "@/components/site/Layout";
import GallerySection from "../components/site/GallerySection";
import { motion } from "framer-motion";
import { CalendarIcon, UsersIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function ClassroomTraining({ 
  raisedShadow, 
  insetShadow 
}: { 
  raisedShadow?: string; 
  insetShadow?: string;
}) {
  return (
    <Layout>
      <div className="bg-[#e0e5ec] min-h-screen pb-20 ">
        
        {/* Hero Section */}
        <section className="pt-16 pb-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-4xl text-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] mb-6">
                <UsersIcon className="w-6 h-6 text-violet-600" />
                <span className="font-semibold text-violet-700">Classroom Training</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Learn In-Person with Expert Guidance
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                Join our instructor-led classroom training at Nagpur center. 
                Small batches, live projects, and personalized attention.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Batch Information - Neumorphic Cards */}
        <section className="container mx-auto px-6 pb-16">
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            
            {/* Weekday Batch */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`rounded-3xl p-8 bg-[#e0e5ec] ${raisedShadow} hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center">
                  <CalendarIcon className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Weekday Batch</h3>
                  <p className="text-emerald-600 font-medium">Mon - Fri</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-gray-500" />
                  <span>6:30 PM - 8:30 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <UsersIcon className="w-5 h-5 text-gray-500" />
                  <span>Small Batch (8-12 Students)</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200/60">
                <p className="text-sm text-gray-500">
                  Perfect for working professionals and students who prefer evening classes.
                </p>
              </div>
            </motion.div>

            {/* Weekend Batch */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`rounded-3xl p-8 bg-[#e0e5ec] ${raisedShadow} hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-inner flex items-center justify-center">
                  <CalendarIcon className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Weekend Batch</h3>
                  <p className="text-amber-600 font-medium">Sat & Sun</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-gray-500" />
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <UsersIcon className="w-5 h-5 text-gray-500" />
                  <span>Small Batch (8-12 Students)</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200/60">
                <p className="text-sm text-gray-500">
                  Ideal for students and professionals who want intensive weekend learning.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <div className="max-w-5xl mx-auto">
          <GallerySection />
        </div>

      </div>
    </Layout>
  );
}