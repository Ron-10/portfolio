import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "Himalaya College of Engineering",
    period: "2021 - 2025",
    description: "Comprehensive study of computer systems, software development, and engineering principles"
  },
  {
    degree: "High School in Science",
    institution: "Goldengate International College",
    period: "2019 - 2021",
    description: "Focus on mathematics, physics, and computer science fundamentals"
  }
];

const certificates = [
  {
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    verificationLink: "/src/assets/gen ai.pdf"
  },
  {
    name: "Prompt Engineering Professional",
    issuer: "IMTF",
    credentialId: "IMTF-PEP-2024-5678",
    verificationLink: "/src/assets/prompteng.pdf"
  },
  {
    name: "5-Day ML Bootcamp",
    issuer: "Coding Ninjas",
    credentialId: "167836",
    verificationLink: "/src/assets/ml.pdf"
  },
  {
    name: "MERN Stack Certification",
    issuer: "Himalaya College of Engineering",
    verificationLink: "/src/assets/Roney.pdf"
  },
  {
    name: "AWS Node Runners",
    issuer: "Binance Academy",
    credentialId: "726cbf3ca2efeb79a5e7b79287236680a8f458d7c83ad63ba181c4c1a4f654cc",
    verificationLink: "/src/assets/aws.pdf"
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Education & Certificates</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <span className="text-primary font-medium">{edu.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Certificates</h3>
              <div className="grid gap-3">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <p className="text-foreground font-medium">{cert.name}</p>
                      <p className="text-primary text-sm">{cert.issuer}</p>
                      {cert.credentialId && (
                        <p className="text-sm text-muted-foreground mt-1">Credential ID: {cert.credentialId}</p>
                      )}
                      <a 
                        href={cert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary mt-1 flex items-center gap-1"
                      >
                        View Certificate
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
