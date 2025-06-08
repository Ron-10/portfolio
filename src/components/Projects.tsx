import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: "Smart Chatbot from Any PDF",
    description: "An AI-powered chatbot that allows users to upload any PDF document and interact with it using natural language, powered by OpenAI and LangChain.",
    detailedDescription: "Built a sophisticated document processing system that enables users to have natural conversations with their PDF documents. The system uses advanced NLP techniques to understand context and provide accurate responses to user queries about the document content.",
    tech: ["Python", "Streamlit", "OpenAI", "LangChain", "PDF Processing", "NLP"],
    category: "AI & NLP",
    github: "https://github.com/Ron-10/AI-PDF-Summarizer.git",
    demo: "https://ai-pdf-summarizer-01.streamlit.app/",
    challenges: [
      "Handling large PDF documents efficiently",
      "Maintaining context across multiple questions",
      "Optimizing token usage for cost-effective responses",
      "Creating an intuitive user interface for document interaction"
    ],
    learnings: [
      "Advanced document processing techniques",
      "LLM integration and prompt engineering",
      "Streamlit app development and deployment",
      "Context management in conversational AI"
    ]
  },
  {
    title: "Football Player Rating Prediction",
    description: "An advanced machine learning model that predicts player ratings based on performance metrics. The system uses feature engineering and ensemble methods to achieve high accuracy.",
    detailedDescription: "This project demonstrates my expertise in machine learning and data analysis. I implemented various algorithms including Random Forest and XGBoost, achieving 92% accuracy. The model considers over 50 performance metrics and includes a web interface for real-time predictions.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "HTML/CSS"],
    category: "Machine Learning",
    github: "https://github.com/yourusername/football-ratings",
    demo: "https://football-ratings-demo.com",
    challenges: [
      "Handling missing data and outliers in player statistics",
      "Optimizing model performance for real-time predictions",
      "Creating an intuitive user interface for non-technical users"
    ],
    learnings: [
      "Advanced feature engineering techniques",
      "Model optimization and hyperparameter tuning",
      "Building production-ready ML applications"
    ]
  },
  {
    title: "Live Football Data API System",
    description: "A real-time data processing system that integrates with multiple football APIs, processes live match data, and provides analytics.",
    detailedDescription: "Built a scalable system that processes millions of data points daily. Implemented caching mechanisms and rate limiting to handle API constraints. Created a dashboard for visualizing match statistics and trends.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
    category: "Data Engineering",
    github: "https://github.com/yourusername/football-api",
    demo: "https://football-data-demo.com",
    challenges: [
      "Managing API rate limits and data consistency",
      "Implementing efficient data caching strategies",
      "Scaling the system to handle concurrent requests"
    ],
    learnings: [
      "Microservices architecture",
      "Real-time data processing",
      "Cloud infrastructure management"
    ]
  },
  {
    title: "Interactive Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Three.js, featuring 3D animations and interactive elements.",
    detailedDescription: "Created an immersive portfolio experience using Three.js for 3D graphics and Framer Motion for smooth animations. Implemented a custom 3D scene with interactive elements and particle effects.",
    tech: ["React", "Three.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.com",
    challenges: [
      "Optimizing 3D performance for mobile devices",
      "Creating smooth animations and transitions",
      "Implementing responsive design for all screen sizes"
    ],
    learnings: [
      "3D graphics programming",
      "Performance optimization",
      "Advanced animation techniques"
    ]
  },
  {
    title: "AI-Powered Design System",
    description: "A comprehensive design system that uses AI to generate consistent, accessible, and beautiful UI components.",
    detailedDescription: "Developed a design system that leverages AI to generate and maintain consistent UI components. The system includes automated accessibility checks and responsive design patterns.",
    tech: ["React", "TensorFlow.js", "Storybook", "Figma API", "TypeScript"],
    category: "Design & AI",
    github: "https://github.com/yourusername/ai-design-system",
    demo: "https://ai-design-system-demo.com",
    challenges: [
      "Training AI models for design consistency",
      "Ensuring accessibility compliance",
      "Creating a scalable component architecture"
    ],
    learnings: [
      "AI integration in design systems",
      "Accessibility best practices",
      "Component-driven development"
    ]
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mb-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>

                <button
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {expandedProject === index ? (
                    <>
                      <ChevronUp size={16} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Show More
                    </>
                  )}
                </button>

                {expandedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-4"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Detailed Description</h4>
                      <p className="text-muted-foreground">{project.detailedDescription}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Challenges</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx}>{challenge}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Learnings</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {project.learnings.map((learning, idx) => (
                          <li key={idx}>{learning}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
