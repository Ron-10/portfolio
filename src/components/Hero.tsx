import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
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
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                👋 Welcome to my portfolio
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
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
              onClick={scrollToAbout}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 hover:gap-4 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:roneykarki011@gmail.com" 
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
