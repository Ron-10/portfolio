import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Target, Award, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 90, color: "bg-blue-500", description: "Advanced proficiency in data analysis, machine learning, and web development" },
      { name: "JavaScript", level: 85, color: "bg-yellow-500", description: "Expert in modern ES6+ features and TypeScript" },
      { name: "SQL", level: 80, color: "bg-orange-500", description: "Strong in complex queries and database optimization" },
      { name: "HTML/CSS", level: 95, color: "bg-red-500", description: "Mastery of responsive design and modern CSS features" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚛️",
    skills: [
      { name: "React", level: 90, color: "bg-cyan-500", description: "Expert in hooks, context, and performance optimization" },
      { name: "Node.js", level: 75, color: "bg-green-500", description: "Proficient in building RESTful APIs and microservices" },
      { name: "Scikit-learn", level: 80, color: "bg-purple-500", description: "Advanced machine learning model development" },
      { name: "Pandas", level: 85, color: "bg-indigo-500", description: "Expert in data manipulation and analysis" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85, color: "bg-gray-600", description: "Advanced version control and collaboration" },
      { name: "Firebase", level: 70, color: "bg-amber-500", description: "Real-time database and authentication" },
      { name: "MySQL", level: 80, color: "bg-blue-600", description: "Database design and optimization" },
      { name: "VS Code", level: 95, color: "bg-blue-400", description: "Advanced debugging and extensions" }
    ]
  },
  {
    title: "Core Competencies",
    icon: "🎯",
    skills: [
      { name: "Machine Learning", level: 85, color: "bg-emerald-500", description: "Model development and deployment" },
      { name: "Data Analysis", level: 90, color: "bg-teal-500", description: "Statistical analysis and visualization" },
      { name: "Web Development", level: 90, color: "bg-rose-500", description: "Full-stack development and architecture" },
      { name: "Problem Solving", level: 95, color: "bg-violet-500", description: "Algorithm design and optimization" }
    ]
  }
];

const learningJourney = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Regularly updating skills through online courses, documentation, and practical projects"
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Setting clear objectives and tracking progress in skill development"
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Pursuing relevant certifications to validate expertise"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring new technologies and methodologies to stay ahead"
  }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-card/30 to-background">
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
                Skills & Expertise
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Technical</span><br />
              <span className="text-foreground">Proficiency</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.1) }}
                      viewport={{ once: true }}
                      className="space-y-3"
                      onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted" 
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (index * 0.1) + (idx * 0.1) }}
                          viewport={{ once: true }}
                          className={`absolute top-0 left-0 h-2 rounded-full ${skill.color} opacity-80`}
                        />
                      </div>
                      {hoveredSkill === `${category.title}-${skill.name}` && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-muted-foreground mt-2"
                        >
                          {skill.description}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Learning Journey</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningJourney.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
