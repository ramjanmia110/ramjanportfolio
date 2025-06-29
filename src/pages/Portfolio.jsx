import React, { useState, useEffect } from 'react'; // <--- THIS LINE IS NOW CORRECT
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiLink, FiGithub } from 'react-icons/fi';
import image01 from '../assets/web03.png'
import image02 from '../assets/web01.png'
import image03 from '../assets/web02.png'
import image04 from '../assets/ecomerce01.png'
import image05 from '../assets/app01.png'
import image06 from '../assets/app02.png'
import image07 from '../assets/app034.png'
import image08 from '../assets/game01.png'
import image09 from '../assets/calculator01.png'




const portfolioData = [
  {
    id: 1,
    title: 'Creative Agency Website',
    category: 'Web Design',
    image: image01,
    description: 'A full-featured e-commerce platform built with the MERN stack. Includes product listings, shopping cart, user authentication, and a Stripe payment gateway. The goal was to create a seamless and fast shopping experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: 'https://ramjanmia110.github.io/website-project/',
    repoLink: '#',
  },

   {
    id: 2,
    title: 'Creative Agency Website',
    category: 'Web Design',
    image: image02,
    description: 'A full-featured e-commerce platform built with the MERN stack. Includes product listings, shopping cart, user authentication, and a Stripe payment gateway. The goal was to create a seamless and fast shopping experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: 'https://ramjanmia110.github.io/sapwan_project/',
    repoLink: '#',
  },

   {
    id: 3,
    title: 'Creative Agency Website',
    category: 'Web Design',
    image: image03,
    description: 'A full-featured e-commerce platform built with the MERN stack. Includes product listings, shopping cart, user authentication, and a Stripe payment gateway. The goal was to create a seamless and fast shopping experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: 'https://ramjanmia110.github.io/patroll_project/',
    repoLink: '#',
  },
  {
    id: 4,
    title: 'Expense Tracker',
    category: 'Mobile App',
    image: image05,
    description: 'A secure and intuitive mobile banking application for iOS and Android. Features include balance checking, fund transfers, bill payments, and biometric login. Designed for simplicity and security.',
    tech: ['React Native', 'Firebase', 'Redux'],
    liveLink: 'https://expense-tracker-flax-alpha.vercel.app/',
    repoLink: '#',
  },
  {
    id: 5,
    title: 'To Do App',
    category: 'Branding',
    image: image07,
    description: 'A complete branding overhaul for a tech startup. This project involved creating a new logo, color palette, typography guidelines, and marketing materials to establish a strong and modern brand identity.',
    tech: ['Figma', 'Adobe Illustrator', 'Photoshop'],
    liveLink: 'https://ramjanmia110.github.io/todoProject2024/',
  },
  {
    id: 6,
    title: 'Game Project',
    category: 'Web App',
    image: image08,
    description: 'A collaborative project management dashboard that helps teams organize tasks, track progress, and communicate effectively. Features drag-and-drop kanban boards, real-time updates, and reporting.',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://ramjanmia110.github.io/gameProject/',
    repoLink: '#',
  },
  {
    id: 7,
    title: 'Quiz App ',
    category: 'Mobile App',
    image: image06,
    description: 'A mobile app to track workouts, set fitness goals, and monitor progress over time. Integrated with HealthKit and Google Fit to sync data seamlessly.',
    tech: ['Flutter', 'Dart', 'Google Fit API'],
    liveLink: 'https://ramjanmia110.github.io/Quizapp1/',
    repoLink: '#',
  },
  {
    id: 8,
    title: 'Calculator Project',
    category: 'Web App',
    image: image09,
    description: 'A visually stunning and highly animated website for a creative design agency. The site showcases their portfolio and services using modern web technologies to create an immersive user experience.',
    tech: ['Gatsby', 'React', 'GSAP', 'Contentful'],
    liveLink: 'https://ramjanmia110.github.io/calculator/',
    repoLink: '#',
  },

   {id: 9,
    title: 'E-commerce Platform',
    category: 'Web Design',
    image: image04,
    description: 'A full-featured e-commerce platform built with the MERN stack. Includes product listings, shopping cart, user authentication, and a Stripe payment gateway. The goal was to create a seamless and fast shopping experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: 'https://ecomerceproject2025.vercel.app/',
    repoLink: '#',
  }
];

const categories = ['All', 'Web App', 'Mobile App', 'Web Design', 'Branding'];



const FilterButtons = ({ activeCategory, setActiveCategory }) => (
  <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ease-in-out
          ${activeCategory === category
            ? 'bg-cyan-400 text-slate-900 shadow-lg'
            : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
          }`}
      >
        {category}
      </button>
    ))}
  </div>
);

const ProjectCard = ({ project, onCardClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
    onClick={() => onCardClick(project)}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 flex flex-col justify-end p-6">
      <div className="transform transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
        <p className="text-sm font-medium text-cyan-300 mb-1">{project.category}</p>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-800 text-slate-200 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10">
            <FiX size={28} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <img src={project.image} alt={project.title} className="w-full h-64 md:h-full object-cover md:rounded-l-2xl" />
            
            <div className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{project.title}</h2>
              <p className="text-slate-400 mb-6">{project.category}</p>
              
              <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cyan-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-lg">
                    <FiLink />
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 font-semibold transition-all duration-300">
                    <FiGithub />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};




export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(
        portfolioData.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);
  
 
  useEffect(() => {
    const handleEsc = (event) => {
       if (event.key === 'Escape') {
        setSelectedProject(null);
       }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section id="portfolio" className="bg-slate-900 py-20 md:py-28">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Creative <span className="text-cyan-400">Portfolio</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I'm proud of. From web apps to branding, I love turning ideas into reality.
          </p>
        </div>

        <FilterButtons 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
        />
        
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onCardClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}