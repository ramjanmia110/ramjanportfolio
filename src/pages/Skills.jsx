

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';


const skillsData = [
  { name: 'React', level: 80, icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'JavaScript (ES6+)', level: 85, icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'Node.js', level: 15, icon: <FaNodeJs className="text-green-400" /> },
 
 
  { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Figma', level: 80, icon: <FaFigma className="text-pink-500" /> },
  { name: 'Git', level: 65, icon: <FaGitAlt className="text-red-500" /> },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};


const Skill = ({ name, level, icon }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700/80 flex flex-col items-center gap-4 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/10 hover:shadow-lg"
    >
      <motion.div
        className="text-5xl"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
        {icon}
      </motion.div>
      <div className="w-full text-center">
        <p className="text-slate-200 font-semibold mb-2">{name}</p>
        <div className="w-full bg-slate-700 rounded-full h-2.5">
          <motion.div
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
        <p className="text-slate-400 text-xs mt-1 text-right">{level}%</p>
      </div>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <section className="p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-100 mb-2">
          My Skills
        </h2>
        <p className="text-center text-slate-400 mb-12">
          A showcase of my tools and technologies.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


export default function App() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center font-sans relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-cyan-500/20 rounded-full blur-[200px]" />
      <div className="relative z-10">
        <Skills />
      </div>
    </main>
  );
}