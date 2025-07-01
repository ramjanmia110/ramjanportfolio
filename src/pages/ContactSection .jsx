

// import React, { useState } from 'react'; 
// import { motion } from 'framer-motion';
// import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
// import { h1 } from 'framer-motion/client';


// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.2,
//     },
//   },
// };


// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       stiffness: 100,
//       damping: 12,
//     },
//   },
// };

// const ContactSection = () => {
 
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert('Form submitted! (This is a demo)');
    
   
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };




//   return (

   
//     <section 
//       id="contact" 
//       className="bg-gradient-to-br from-slate-900 to-indigo-950 text-slate-300 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto">
       
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, type: 'spring' }}
//         >
//           Get in{' '}
//           <span className="relative inline-block">
          
//             <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-lg -z-10 blur-2xl opacity-70 transform -skew-y-3"></span>
//             <span className="relative">touch</span>
//           </span>
//         </motion.h2>

       
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
         
//           <motion.div variants={itemVariants} className="flex flex-col justify-center">
//             <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
//               Let's talk
//             </h3>
//             <p className="text-slate-400 mb-8 max-w-md">
//               I'm currently available to take on new projects. Feel free to send me a message about anything you want me to work on. You can contact me anytime.
//             </p>

//             <div className="space-y-6">
//               <motion.div variants={itemVariants} className="flex items-center space-x-4 group">
//                 <FiMail className="w-6 h-6 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
//                 <a href="mailto:greatstackdev@gmail.com" className="text-slate-300 hover:text-white transition-colors">
//                   mdramjanmia112@gmail.com
//                 </a>
//               </motion.div>
//               <motion.div variants={itemVariants} className="flex items-center space-x-4 group">
//                 <FiPhone className="w-6 h-6 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
//                 <span className="text-slate-300">+880 01778799818</span>
//               </motion.div>
//               <motion.div variants={itemVariants} className="flex items-center space-x-4 group">
//                 <FiMapPin className="w-6 h-6 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
//                 <span className="text-slate-300">East Mollertek, Uttara Dhaka -1230</span>
//               </motion.div>
//             </div>
//           </motion.div>

         
//           <motion.div variants={itemVariants}>
//             <form 
//               onSubmit={handleSubmit} 
//               className="space-y-6 bg-slate-900/40 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50"
//             >
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   placeholder="Enter your name"
//                   className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
//                   value={formData.name} 
//                   onChange={handleChange} 
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   placeholder="Enter your email"
//                   className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
//                   value={formData.email} 
//                   onChange={handleChange} 
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
//                   Write your message here
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   required
//                   placeholder="Enter your message"
//                   className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 resize-none"
//                   value={formData.message} 
//                   onChange={handleChange} 
//                 ></textarea>
//               </div>
//               <div>
//                 <motion.button
//                   type="submit"
//                   className="w-full font-semibold text-white bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-orange-500 py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300"
//                   whileHover={{ scale: 1.05, boxShadow: '0px 0px 25px rgba(217, 70, 239, 0.4)' }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Submit Now
//                 </motion.button>
//               </div>
//             </form>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

const ContactSection = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  
    emailjs.sendForm(
      'service_eu92tio',  
      'template_4g2nzdh',  
      form.current,
      '0ndh9jXEXZrlf5kG1'    
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send the message. Please try again.');
      }
    );
  };

  return (
    <section 
      id="contact" 
      className="bg-gradient-to-br from-slate-900 to-indigo-950 text-slate-300 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          Get in{' '}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-lg -z-10 blur-2xl opacity-70 transform -skew-y-3"></span>
            <span className="relative">touch</span>
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
              Let's talk
            </h3>
            <p className="text-slate-400 mb-8 max-w-md">
              I'm currently available to take on new projects. Feel free to send me a message about anything you want me to work on. You can contact me anytime.
            </p>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center space-x-4 group">
                <FiMail className="w-6 h-6 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
                <a href="mailto:greatstackdev@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  mdramjanmia112@gmail.com
                </a>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center space-x-4 group">
                <FiPhone className="w-6 h-6 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
                <span className="text-slate-300">+880 01778799818</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center space-x-4 group">
                <FiMapPin className="w-6 h-6 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
                <span className="text-slate-300">East Mollertek, Uttara Dhaka -1230</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form 
              ref={form}
              onSubmit={handleSubmit} 
              className="space-y-6 bg-slate-900/40 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50"
            >
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name" 
                  required
                  placeholder="Enter your name"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                  value={formData.user_name}
                  onChange={handleChange} 
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email" 
                  required
                  placeholder="Enter your email"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                  value={formData.user_email}
                  onChange={handleChange} 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Write your message here
                </label>
                <textarea
                  id="message"
                  name="message" 
                  rows="5"
                  required
                  placeholder="Enter your message"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 resize-none"
                  value={formData.message} 
                  onChange={handleChange} 
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full font-semibold text-white bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-orange-500 py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: '0px 0px 25px rgba(217, 70, 239, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Now
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;