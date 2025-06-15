import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowLeft, ArrowRight, Github, Linkedin, Mail, Instagram, Facebook, XIcon } from 'lucide-react';
import Hero3D from './Hero3D';
import RotatingText from './RotatingText';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const roles = [
    "AI Engineer",
    "Web Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Creative Developer"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <Hero3D />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default group">
                <span className="group-hover:animate-bounce inline-block">👋</span> Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="group relative inline-block cursor-pointer">
                <span className="relative z-10 text-gradient bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent transition-all duration-300 group-hover:text-transparent">
                  Roney Karki
                </span>
                
                {/* Animated gradient outline */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span 
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_2s_ease-in-out_infinite] text-transparent bg-clip-text"
                    style={{
                      WebkitTextStroke: '2px transparent',
                      backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                  >
                    Roney Karki
                  </span>
                </span>
                
                {/* Glowing border effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  <span 
                    className="absolute inset-0 text-transparent"
                    style={{
                      WebkitTextStroke: '1px hsl(var(--primary))',
                      filter: 'blur(2px)',
                    }}
                  >
                    Roney Karki
                  </span>
                </span>
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-2xl md:text-3xl font-semibold min-h-[2em] flex items-center justify-center">
              <RotatingText words={roles} />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed hover:text-primary transition-colors duration-300">
              Crafting intelligent solutions with modern web technologies and machine learning
            </p>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => window.open('/Roney.pdf', '_blank')}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 hover:gap-4 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View My CV
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Ron-10"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))"
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-card border border-border p-3 rounded-full hover:border-primary/50 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/roney-karki-9b2002221/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1,
                  rotate: -5,
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))"
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-card border border-border p-3 rounded-full hover:border-primary/50 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
              </motion.a>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
