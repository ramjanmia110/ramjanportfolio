// src/components/ServicesSection.jsx

import React from 'react';
import { LayoutGrid, PenTool, MonitorSmartphone } from 'lucide-react';

// --- Data for the service cards ---
// Storing data separately makes the component cleaner and easier to update.
const servicesData = [
  {
    icon: <MonitorSmartphone size={32} className="text-slate-300" />,
    title: "UI/UX & Web Design",
    description: "Creating visually stunning and highly intuitive user interfaces that provide an exceptional user experience, driving engagement and user satisfaction.",
  },
  {
    icon: <LayoutGrid size={32} className="text-slate-300" />,
    title: "Full-Stack Development",
    description: "Building robust, scalable, and high-performance web applications from front to back, using the latest technologies to bring your vision to life.",
  },
  {
    icon: <PenTool size={32} className="text-slate-300" />,
    title: "Branding & Identity",
    description: "Developing strong, memorable brand identities and digital assets that resonate with your target audience and set you apart from the competition.",
  },
];

// --- The Service Card Sub-Component ---
// Breaking down UI into smaller components is a core React principle.
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative p-0.5 rounded-xl border-white/10 transition-all duration-300 hover:border-white/40">
      {/* Animated Gradient Border on Hover */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
      
      {/* Main Card Content */}
      <div className="relative flex flex-col h-full items-center text-center p-8 rounded-[11px] bg-slate-900/80 backdrop-blur-xl">
        {/* Icon */}
        <div className="mb-6 p-4 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-slate-700 transition-colors duration-300">
          {icon}
        </div>
        {/* Title */}
        <h3 className="text-xl font-bold mb-4 text-slate-100">{title}</h3>
        {/* Description */}
        <p className="text-slate-400 leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};


// --- The Main Services Section Component ---
// This is the complete, self-contained component you'll import into your pages.
const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-slate-950 text-white py-24 sm:py-32 overflow-hidden">
      {/* Aurora Background Glows */}
      <div className="absolute top-0 -left-1/4 w-full h-full bg-radial-gradient from-cyan-500/10 to-transparent blur-3xl animate-aurora z-0"></div>
      <div className="absolute bottom-0 -right-1/4 w-full h-full bg-radial-gradient from-purple-500/10 to-transparent blur-3xl animate-aurora animation-delay-4000 z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase">Our Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
            Services We Provide
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            We transform innovative ideas into brilliant digital products, delivering excellence at every stage of the process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;