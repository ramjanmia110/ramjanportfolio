import React, { useState, useRef } from 'react';
import { FaStar } from 'react-icons/fa';


const StatBox = ({ children, delay }) => (
  <div className={`opacity-0 animate-flip-in animation-delay-${delay} p-4 bg-slate-800/60 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg 
                   hover:scale-105 hover:-translate-y-1 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer`}>
    {children}
  </div>
);


const Particle = ({ delay, duration }) => (
  <div 
    className="absolute top-0 left-0 w-1 h-1 bg-cyan-400/50 rounded-full animate-float opacity-0"
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

const ProfileCard = ({ imageUrl }) => {
  const [style, setStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    const x = (clientX - left - width / 2) / 20; 
    const y = (clientY - top - height / 2) / 20;

    setStyle({
      transform: `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
    });
  };

  const particles = Array.from({ length: 20 });

  return (
    <div 
      className="relative w-full max-w-sm mx-auto flex items-center justify-center p-4 transition-transform duration-300"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="relative w-96 h-96 flex items-center justify-center top-10 ">
     

      
        <div className="absolute w-full h-full">
            {particles.map((_, i) => (
                <Particle key={i} delay={Math.random() * 5} duration={Math.random() * 5 + 5} />
            ))}
        </div>
        
    
        <div className="absolute top-1/2 left-1/2 w-96 h-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0 animate-shooting-star" />
        
       

     
        <div className="absolute w-full h-full rounded-full border-2 animate-spin-slow animate-aurora" style={{ borderImageSlice: 1 }}></div>
        
       
        <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-transparent border-t-cyan-400 border-l-cyan-400 animate-spin-fast"></div>
        
      
        <div className="absolute w-[300px] h-[300px] rounded-full border border-pink-500/50 animate-glow-pulse"></div>

     
        <div className="absolute w-4 h-4 bg-teal-300 rounded-full shadow-lg shadow-teal-300/50 animate-orbit-slow" />

      
        <div className="absolute w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-orbit-fast" />

     
        <div className="absolute w-64 h-64 bg-orange-500 rounded-full shadow-2xl shadow-orange-500/30 opacity-0 animate-scale-in" />
        

        
   
        <div
          className="absolute top-[-160px] left-[6px] w-[350px] h-[500px] rounded-full overflow-hidden z-10 
                     opacity-0 animate-fade-in animation-delay-400"
          style={{ transform: `translateX(${-style.transform?.split('rotateY(')[1]?.split('deg')[0] / 3 || 0}px) 
                               translateY(${-style.transform?.split('rotateX(')[1]?.split('deg')[0] / 3 || 0}px)` }}
        >
            <img 
                src={imageUrl} 
                alt="Profile" 
                className="w-full h-full object-cover"
            />
        </div>
        
      
        <div 
          className="absolute top-20 -left-12 z-20" 
          style={{ transform: `translateX(${style.transform?.split('rotateY(')[1]?.split('deg')[0] / 2 || 0}px) 
                               translateY(${style.transform?.split('rotateX(')[1]?.split('deg')[0] / 2 || 0}px)` }}
        >
          <StatBox delay="800">
            <p className="text-white text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}>10+</p>
            <p className="text-gray-300 text-sm">Clients work</p>
          </StatBox>
        </div>

        <div 
          className="absolute top-10 right-0 z-20"
          style={{ transform: `translateX(${style.transform?.split('rotateY(')[1]?.split('deg')[0] / 2 || 0}px) 
                               translateY(${style.transform?.split('rotateX(')[1]?.split('deg')[0] / 2 || 0}px)` }}
        >
          <StatBox delay="1000">
            <p className="text-white text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}>100</p>
            <p className="text-gray-300 text-sm">Projects done</p>
          </StatBox>
        </div>

        <div 
          className="absolute bottom-16 -right-12 z-20"
          style={{ transform: `translateX(${style.transform?.split('rotateY(')[1]?.split('deg')[0] / 2 || 0}px) 
                               translateY(${style.transform?.split('rotateX(')[1]?.split('deg')[0] / 2 || 0}px)` }}
        >
          <StatBox delay="1200">
            <div className="flex text-yellow-400">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-white text-lg font-semibold">1 year</p>
            <p className="text-gray-300 text-sm">of experience</p>
          </StatBox>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;