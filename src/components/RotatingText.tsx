import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  words: string[];
  className?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({ words, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`relative h-[1.2em] inline-block whitespace-nowrap flex items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 text-primary font-bold whitespace-nowrap flex items-center justify-center"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText; 