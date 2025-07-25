import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_agg4vgy',  // Your Service ID
        'template_gb8hrc6', // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'roneykarki011@gmail.com',
        },
        '6ipLVRmZHXOWCLzIR'  // Your Public Key
      );
      

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "success",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and AI. Feel free to reach out!
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Email</h4>
                  <a 
                    href="mailto:roneykarki011@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    roneykarki011@gmail.com
                  </a>
                </div>
              </div>
              
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

                <motion.a
                  href="https://www.instagram.com/i__am_ron/"
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
                  <Instagram className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.a>

                <motion.a
                  href="https://facebook.com/profile.php?id=100011711830610"
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
                  <Facebook className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.a>

                <motion.a
                  href="https://x.com/i__am_ron"
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
                  <XIcon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
