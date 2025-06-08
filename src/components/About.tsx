import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Passionate about developing intelligent systems"
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Creating modern web applications with React"
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Transforming data into actionable insights"
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Finding innovative solutions to complex challenges"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                About Me
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Turning Ideas Into</span><br />
              <span className="text-foreground">Digital Reality</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed hover:text-primary transition-colors duration-300">
                  I am a passionate and dedicated aspiring AI Engineer with a strong foundation in computer engineering 
                  and hands-on experience in web development, machine learning, and data analysis.
                </p>
                
                <p className="text-lg leading-relaxed hover:text-primary transition-colors duration-300">
                  As a freelance web developer and graphic designer, I've successfully delivered custom solutions that 
                  blend technical expertise with creative design. My experience as an instructor has honed my communication 
                  skills and ability to break down complex concepts.
                </p>
                
                <p className="text-lg leading-relaxed hover:text-primary transition-colors duration-300">
                  My career objective is to leverage my technical skills in AI and machine learning to contribute to 
                  innovative projects that make a meaningful impact on the world.
                </p>
              </div>
              
              <div className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {['Python', 'React', 'Machine Learning', 'Data Science', 'Web Development'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
