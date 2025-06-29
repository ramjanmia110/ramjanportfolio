// import React from 'react';
// import { motion } from 'framer-motion';

// import { TypeAnimation } from 'react-type-animation';


// import logo from '../assets/ramjanlogo.png';
// import ramjan from '../assets/ramjan.png';
// import Container from '../Components/Container';
// import Flex from '../Components/Flex';
// import ProfileCard from './ProfileCard';
// import { CiFacebook, CiMail } from 'react-icons/ci';
// import { TiSocialLinkedinCircular } from 'react-icons/ti';
// import { VscGithub } from 'react-icons/vsc';


// const navLinks = [
//   { text: 'Home', href: '#home' },
//   { text: 'About', href: '#about' },
//   { text: 'Skills', href: '#skills' },
//   { text: 'Services', href: '#services' },
//   { text: 'Portfolio', href: '#portfolio' },
//   { text: 'Contact', href: '#contact' },
// ];

// const Menubar = () => {
  
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, 
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       },
//     },
//   };

//   return (
//     <header className="relative w-full h-[800px]  flex flex-col animated-gradient overflow-hidden">
      
//       <Container>
      
//         <nav className="relative z-10 flex items-center justify-start py-6 gap-x-16 md:gap-x-24">
          
       
//           <motion.img
//             src={logo}
//             alt="Logo"
//             className="w-[280px] h-auto flex-shrink-0 mr-[150px]" 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           />

         
//           <ul className="hidden md:flex items-center gap-x-8 text-white font-montser font-medium text-[22px]">
//             {navLinks.map((link, index) => (
//               <motion.li
//                 key={link.text}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//               >
//                 <a href={link.href} className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">
//                   {link.text}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         </nav>
//       </Container>

    
//       <Container className="flex-grow flex items-center">
//         <motion.section
//           className="w-full"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <Flex className='justify-between items-center'>
          
            
//             <div className='w-full lg:w-[60%] flex flex-col justify-center text-white mr-[150px]'>
//               <motion.h2
//                 className='text-[30px] md:text-[30px] lg:text-3.5xl my-[20px] font-bold font-montser'
//                 variants={itemVariants}
//               >
//                 MOHAMMAD RAMJAN MIA
//               </motion.h2>

           
//               <motion.h4
//                 className='text-xl md:text-2xl lg:text-2xl mt-2 font-montser'
//                 variants={itemVariants}
//               >
//                 And I'm a{' '}
//                 <TypeAnimation
//                   sequence={[
                   
//                     'Frontend Developer',
//                     2000,
//                     'React Developer',
//                     2000,
//                     'Web Designer',
//                     2000,
                    
//                   ]}
//                   wrapper="span"
//                   speed={50}
//                   className='text-cyan-400 font-semibold'
//                   repeat={Infinity}
//                 />
//               </motion.h4>

//               <motion.p
//                 className='text-base mt-4 font-montser max-w-lg'
//                 variants={itemVariants}
//               >
//                 I'm a professional web developer with strong skills in HTML, CSS, JavaScript, React, Tailwind CSS, and more. I have been working in this field for almost 3 years, completing all projects successfully with 100% client satisfaction.
//               </motion.p>

//               <Flex className='text-[33px] text-secondary items-center gap-x-[23px] my-8 cursor-pointer'>
//                 <CiFacebook />
//                 <TiSocialLinkedinCircular />
//                 <VscGithub />
//                 <CiMail />
//               </Flex>

//               <div className="flex gap-4 flex-wrap">
      
//       <a
//          href="/mdramjanmiaresume.pdf"
//         download
//         className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
//       >
//         Download CV
//       </a>

     
//       <a
//         href="/path/to/your-portfolio.pdf"
//         download
//         className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 hover:from-green-500 hover:to-cyan-600 transition-all duration-300 shadow-lg"
//       >
//          Portfolio
//       </a>
//     </div>
//             </div>

           
//             <div className='w-[40%] hidden lg:flex justify-center items-center'>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8, x: 100 }}
//                 animate={{ opacity: 1, scale: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 <ProfileCard imageUrl={ramjan} />
//               </motion.div>
//             </div>
//           </Flex>
//         </motion.section>
//       </Container>
//     </header>
//   );
// };

// export default Menubar;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import logo from '../assets/ramjanlogo.png';
import ramjan from '../assets/ramjan.png';
import Container from '../Components/Container';
import Flex from '../Components/Flex';
import ProfileCard from './ProfileCard';
import { CiFacebook, CiMail } from 'react-icons/ci';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { VscGithub } from 'react-icons/vsc';


const navLinks = [
  { text: 'Home', href: '#home' },
  { text: 'About', href: '#about' },
  { text: 'Skills', href: '#skills' },
  { text: 'Services', href: '#services' },
  { text: 'Portfolio', href: '#portfolio' },
  { text: 'Contact', href: '#contact' },
];

const Menubar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  
 
  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4,
        staggerChildren: 0.1,
      }
    }
  }


  const menuLinkVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4
      }
    }
  }


  return (
    <header className="relative w-full min-h-[90vh] lg:h-[100vh] flex flex-col animated-gradient overflow-hidden">
      <Container>
        <nav className="relative z-20 flex items-center justify-between py-6 mr-[261px]">
        
          <motion.img
            src={logo}
            alt="Logo"
            className="w-[200px] sm:w-[240px] md:w-[260px] h-auto flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

       
          <ul className="hidden md:flex items-center gap-x-8 text-white font-montser font-medium md:text-[14px] md:ml-[32px]  text-lg lg:text-[20px] lg:ml-[261px]">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.text}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="hover:text-cyan-400 cursor-pointer transition-colors duration-300"
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>

        
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white z-30 relative w-8 h-8 focus:outline-none left-[170px]"
            >
              
              <motion.div
                className="w-7 h-0.5 bg-white rounded-full absolute top-2 left-0"
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0
                }}
              />
              <motion.div
                className="w-7 h-0.5 bg-white rounded-full absolute top-4 left-0"
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
              />
              <motion.div
                className="w-7 h-0.5 bg-white rounded-full absolute top-6 left-0"
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0
                }}
              />
            </button>
          </div>
        </nav>
      </Container>
      
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-10 bg-black bg-opacity-80 backdrop-blur-sm md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Flex className="h-full flex-col items-center justify-center">
              <ul className="text-white text-center">
                {navLinks.map((link) => (
                  <motion.li key={link.text} className="my-6" variants={menuLinkVariants}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)} 
                      className="text-2xl font-montser font-semibold hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>


      <Container className="flex-grow flex items-center">
        <motion.section
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Flex className="flex-col lg:flex-row justify-between items-center text-center lg:text-left flex  gap-x-[200px]">
           
            <div className="w-full lg:w-[60%] flex flex-col justify-center items-center lg:items-start text-white">
              <motion.h2
                className="text-[20px] md:text-2xl lg:text-3xl my-4 font-bold font-montser"
                variants={itemVariants}
              >
                MOHAMMAD RAMJAN MIA
              </motion.h2>

              <motion.h4
                className="text-xl md:text-2xl lg:text-2xl mt-2 font-montser"
                variants={itemVariants}
              >
                And I'm a{' '}
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    2000,
                    'React Developer',
                    2000,
                    'Web Designer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-cyan-400 font-semibold"
                  repeat={Infinity}
                />
              </motion.h4>

              <motion.p
                className="text-base mt-4 text-[13px] text-justify p-3 font-montser max-w-lg lg:text-[16px] lg:p-0"
                variants={itemVariants}
              >
                I'm a professional web developer with strong skills in HTML, CSS,
                JavaScript, React, Tailwind CSS, and more. I have been working in
                this field for almost 3 years, completing all projects
                successfully with 100% client satisfaction.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Flex className="text-3xl sm:text-4xl text-secondary items-center gap-x-6 my-8 cursor-pointer justify-center lg:justify-start">
                  <a href="#" aria-label="Facebook" className="hover:text-cyan-400 transition-colors"><CiFacebook /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors"><TiSocialLinkedinCircular /></a>
                  <a href="#" aria-label="Github" className="hover:text-cyan-400 transition-colors"><VscGithub /></a>
                  <a href="#" aria-label="Email" className="hover:text-cyan-400 transition-colors"><CiMail /></a>
                </Flex>
              </motion.div>

              <motion.div className="flex gap-4 flex-wrap justify-center lg:justify-start" variants={itemVariants}>
                <a
                  href="/mdramjanmiaresume.pdf"
                  download
                  className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                >
                  Download CV
                </a>
                <a
                  href="#portfolio"
                  className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 hover:from-green-500 hover:to-cyan-600 transition-all duration-300 shadow-lg"
                >
                  Portfolio
                </a>
              </motion.div>
            </div>

            {/* Right Image Area */}
            <div className="w-full mt-12 lg:mt-0 lg:w-[40%] hidden lg:flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProfileCard imageUrl={ramjan} />
              </motion.div>
            </div>
          </Flex>
        </motion.section>
      </Container>
    </header>
  );
};

export default Menubar;