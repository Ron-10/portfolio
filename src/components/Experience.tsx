
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "Freelance Web Developer & Graphic Designer",
    company: "Self-Employed",
    period: "2023 – Present",
    location: "Remote",
    type: "Freelance",
    description: "Developing custom websites and creating branding materials for diverse clients across various industries.",
    highlights: [
      "Built responsive React applications with modern UI/UX",
      "Created comprehensive branding packages",
      "Delivered projects for 15+ satisfied clients",
      "Specialized in e-commerce and portfolio websites"
    ],
    tech: ["React", "JavaScript", "CSS3", "Adobe Creative Suite"]
  },
  {
    title: "Instructor",
    company: "DAES",
    period: "2021 – 2024",
    location: "Nepal",
    type: "Full-time",
    description: "Teaching technical concepts and mentoring students in computer science and programming fundamentals.",
    highlights: [
      "Developed and delivered curriculum for 200+ students",
      "Improved student pass rates by 35%",
      "Mentored students in web development projects",
      "Organized coding workshops and hackathons"
    ],
    tech: ["Python", "Web Development", "Database Management", "Teaching"]
  },
  {
    title: "Content Writer",
    company: "Sathi-Solutions",
    period: "2020 – 2022",
    location: "Nepal",
    type: "Part-time",
    description: "Creating technical content and documentation for software products and educational materials.",
    highlights: [
      "Wrote 100+ technical articles and tutorials",
      "Created comprehensive API documentation",
      "Developed user guides and training materials",
      "Collaborated with development teams on content strategy"
    ],
    tech: ["Technical Writing", "Documentation", "Content Strategy", "SEO"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
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
                Experience
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Professional</span><br />
              <span className="text-foreground">Journey</span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"></div>
                  
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              exp.type === 'Freelance' ? 'bg-blue-100 text-blue-700' :
                              exp.type === 'Full-time' ? 'bg-green-100 text-green-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary mb-2">{exp.company}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
