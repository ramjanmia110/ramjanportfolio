import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import ramjan02 from '../assets/ramjan.png'




const aboutData = {
  education: {
    icon: <GraduationCap size={24} />,
    items: [
       {
        degree: 'M.Sc (Honours) in Physics',
        institute: 'University Of Dhaka (7 affiliated college)',
         session: '2018',
       
      },
      {
        degree: 'B.Sc (Honours) in Physics',
        institute: 'University Of Dhaka (7 affiliated college)',
         session: '2017',
       
      },
      {
        degree: 'Higher Secondary Certificate (H.S.C)',
        institute: 'Mollartek Udayan High school & Collage',
        session: '2013',
        result: 'CGPA: 4.50 out of 5.00',
      },
      {
        degree: 'Secondary School Certificate (S.S.C)',
        institute: 'Mollartek Udayan High school & Collage',
        session: '2011',
        result: 'GPA: 4.88 out of 5.00',
      },
    ],
  },
  courses: {
    icon: <Award size={24} />,
    items: [
      {
        name: 'Front-End Development with React',
        platform: 'CREATIVE IT INSTITUTE',
        duration: '8 Months',
        description: 'In-depth guide to React, from basics to advanced concepts like hooks and Redux.',
      },
      {
        name: 'Graphic Design',
        platform: 'National Youth & Technical Training Center',
        duration: '6 Month',
        description: 'Canva (easy for beginners),Builds brand identity (logos, business cards, etc.),Attracts attention (posters, banners, websites),Adobe Illustrator (vector design, logos)',
      },
    ],
  },
  experience: {
    icon: <Briefcase size={24} />,
    items: [
      {
        role: 'Research Associate',
        company: 'Bitchipdigital',
        period: 'Jun 2021 - running',
        description: 'Built intelligent tools using AI for content writing and keyword optimization, contributing to improved content quality and user engagement.',
      },
      {
        role: 'Freelance Web Designer',
        company: 'Self-Employed',
        period: '2021 - 2022',
        description: 'Designed and developed websites for small businesses using WordPress and custom CSS.',
      }
    ],
  },
};

const TABS = [
  { id: 'education', label: 'Education' },
  { id: 'courses', label: 'Short Courses' },
  { id: 'experience', label: 'Experience' },
];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('education');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="bg-slate-900   min-h-screen flex items-center justify-center p-4 font-sans">
      
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 bg-slate-800/50 backdrop-blur-lg border border-cyan-400/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/40"
        >
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col items-center text-center md:w-1/3"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl animate-pulse"></div>
              <img
                src={ramjan02}
                alt="MOHAMMAD RAMJAN MIA"
                className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-white">MD RAMJAN MIA</h2>
            <div className="mt-2 text-gray-300 space-y-1">
              <p>React Developer</p>
             

            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="md:w-2/3"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
              About <span className="text-cyan-400">Me</span>
            </h1>

          
            <div className="flex border-b border-gray-600 mb-6">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                  } relative py-3 px-4 text-sm md:text-base font-medium transition-colors duration-300 focus:outline-none`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

           
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {aboutData[activeTab].items.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex gap-4">
                    <div className="text-cyan-400 mt-1">{aboutData[activeTab].icon}</div>
                    <div>
                      <h3 className="font-bold text-white text-lg">
                        {item.degree || item.name || item.role}
                      </h3>
                      <p className="text-sm font-medium text-gray-400">
                        {item.institute || item.platform || item.company}
                        {(item.session || item.period) && ` | ${item.session || item.period}`}
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        {item.result || item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;