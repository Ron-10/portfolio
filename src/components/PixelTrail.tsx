import React, { useEffect, useRef } from 'react';

interface PixelTrailProps {
  className?: string;
}

const PixelTrail: React.FC<PixelTrailProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle settings
    const particles: Particle[] = [];
    const particleCount = 60;
    const particleColor = 'rgba(144, 238, 144, ';

    // Mouse position and velocity
    let mouseX = 0;
    let mouseY = 0;
    let mouseVX = 0;
    let mouseVY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout: NodeJS.Timeout;

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseVX = mouseX - lastMouseX;
      mouseVY = mouseY - lastMouseY;
      isMouseMoving = true;

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
      baseSize: number;
      targetX: number;
      targetY: number;
      phase: number;
      frequency: number;
      amplitude: number;
      connectionDistance: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = 0;
        this.vy = 0;
        this.alpha = Math.random() * 0.3 + 0.1;
        this.baseSize = Math.random() * 1.5 + 1;
        this.size = this.baseSize;
        this.targetX = this.x;
        this.targetY = this.y;
        this.phase = Math.random() * Math.PI * 2;
        this.frequency = Math.random() * 0.001 + 0.005;
        this.amplitude = Math.random() * 50 + 20;
        this.connectionDistance = Math.random() * 100 + 50;
      }

      update() {
        // Update phase for wave motion
        this.phase += this.frequency;

        // Calculate wave motion
        const waveX = Math.cos(this.phase) * this.amplitude;
        const waveY = Math.sin(this.phase) * this.amplitude;

        // Mouse interaction
        if (isMouseMoving) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) {
            // Repel from mouse with wave effect
            const force = 0.00005;
            const angle = Math.atan2(dy, dx);
            this.vx -= Math.cos(angle) * force * (300 - distance);
            this.vy -= Math.sin(angle) * force * (300 - distance);
            
            // Add mouse velocity influence
            this.vx += mouseVX * 0.005;
            this.vy += mouseVY * 0.005;
            
            this.size = this.baseSize * (1.5 + Math.sin(this.phase) * 0.3);
          }
        }

        // Apply wave motion to target position
        this.targetX = this.x + waveX;
        this.targetY = this.y + waveY;

        // Smooth movement towards target
        this.x += (this.targetX - this.x) * 0.03;
        this.y += (this.targetY - this.y) * 0.03;

        // Apply velocity with damping
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.97;
        this.vy *= 0.97;

        // Wrap around screen
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;

        // Update alpha
        if (!isMouseMoving) {
          this.alpha = Math.max(0.05, this.alpha - 0.002);
        } else {
          this.alpha = Math.min(0.4, this.alpha + 0.01);
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `${particleColor}${Math.floor(this.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      drawConnections(particles: Particle[]) {
        if (!ctx) return;
        particles.forEach(particle => {
          if (particle === this) return;
          
          const dx = this.x - particle.x;
          const dy = this.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < this.connectionDistance) {
            const opacity = (1 - distance / this.connectionDistance) * 0.2;
            ctx.strokeStyle = `${particleColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
          }
        });
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
        particle.drawConnections(particles);
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
};

export default PixelTrail; 