import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  spotlightColor = "rgba(120, 119, 198, 0.15)",
  enableTilt = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(mouseX, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    if (enableTilt) {
      // Calculate rotation between -3.5 deg and +3.5 deg
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = -((y - centerY) / centerY) * 3;
      const rotY = ((x - centerX) / centerX) * 3;

      mouseX.set(rotY);
      mouseY.set(rotX);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt) {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-neutral-200/80 bg-white/70 p-5 shadow-xs transition-colors duration-300 dark:border-neutral-800/80 dark:bg-neutral-900/40 backdrop-blur-md hover:border-neutral-300 dark:hover:border-neutral-700",
        className
      )}
      {...props as any}
    >
      {/* Border Spotlight Illumination Ring */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.75 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />

      {/* Surface Radial Spotlight Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />

      {/* Card Content with 3D depth */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
