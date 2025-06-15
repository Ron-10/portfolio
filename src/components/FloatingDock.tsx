import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, FolderOpen, Award, Mail, Github, Linkedin, FileText } from 'lucide-react';

interface DockItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  action: () => void;
  isExternal?: boolean;
}

const FloatingDock = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDockHovered, setIsDockHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some offset for better UX)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section === 'hero' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const dockItems: DockItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      action: () => scrollToSection('hero')
    },
    {
      id: 'about',
      label: 'About',
      icon: User,
      action: () => scrollToSection('about')
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: Briefcase,
      action: () => scrollToSection('experience')
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: FolderOpen,
      action: () => scrollToSection('projects')
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: Award,
      action: () => scrollToSection('skills')
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Mail,
      action: () => scrollToSection('contact')
    },
    {
      id: 'cv',
      label: 'View CV',
      icon: FileText,
      action: () => window.open('/Roney.pdf', '_blank'),
      isExternal: true
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: Github,
      action: () => window.open('https://github.com/Ron-10', '_blank'),
      isExternal: true
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: Linkedin,
      action: () => window.open('https://www.linkedin.com/in/roney-karki-9b2002221/', '_blank'),
      isExternal: true
    }
  ];

  return (
    <div className="fixed left-6 top-80 transform -translate-y-1/2 z-[9999]">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsDockHovered(true)}
        onMouseLeave={() => setIsDockHovered(false)}
        className="flex flex-col items-center gap-2 px-2 py-3 bg-background/90 backdrop-blur-xl border border-border rounded-2xl shadow-lg"
      >
        {dockItems.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hoveredItem === item.id;
          const isActive = activeSection === item.id;
          const adjacentHovered = 
            hoveredItem === dockItems[index - 1]?.id || 
            hoveredItem === dockItems[index + 1]?.id;

          return (
            <div key={item.id} className="relative group">
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 60 : 40,
                  scale: isHovered ? 1 : 0.8
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-full ml-2 px-2 py-1 bg-foreground/90 text-background text-xs font-medium rounded-md whitespace-nowrap pointer-events-none shadow-md"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                {item.label}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1 border-4 border-transparent border-r-foreground/90"></div>
              </motion.div>

              {/* Dock Item */}
              <motion.button
                onClick={item.action}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`
                  relative p-2.5 rounded-xl transition-all duration-200 ease-out
                  ${item.isExternal 
                    ? 'bg-accent/10 hover:bg-accent/20 text-accent' 
                    : isActive
                      ? 'bg-primary/20 text-primary'
                      : 'bg-primary/10 hover:bg-primary/20 text-primary'
                  }
                  hover:shadow-md active:scale-95
                `}
                animate={{
                  scale: isHovered ? 1.3 : adjacentHovered ? 1.1 : isActive ? 1.2 : 1,
                  x: isHovered ? 6 : adjacentHovered ? 3 : isActive ? 4 : 0,
                  rotate: isHovered ? 5 : 0,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }}
              >
                <Icon size={18} />
                
                {/* Glow effect */}
                <motion.div
                  className={`
                    absolute inset-0 rounded-xl blur-md -z-10
                    ${item.isExternal ? 'bg-accent/30' : 'bg-primary/30'}
                  `}
                  animate={{
                    opacity: isHovered || isActive ? 0.6 : 0,
                    scale: isHovered || isActive ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />

                {/* Ripple effect */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-primary/20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.button>
            </div>
          );
        })}

        {/* Dock background animation */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 -z-10"
          animate={{
            opacity: isDockHovered ? 1 : 0,
            scale: isDockHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default FloatingDock;
