'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string; // Added support for custom classes
  delay?: number;     // Added support for animation delay (ms)
}

// Custom Hook for hydration safety
const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export const RevealOnScroll = ({ children, className = "", delay = 0 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" }); // Trigger earlier (10% from bottom)
  const controls = useAnimation();
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (isInView && hasMounted) {
      controls.start("visible");
    }
  }, [isInView, hasMounted, controls]);

  // Fail-Safe: Force visibility after 3s to prevent permanent invisibility
  useEffect(() => {
    if (hasMounted) {
      const timer = setTimeout(() => {
        controls.start("visible");
      }, 3000); // 3s safety net
      return () => clearTimeout(timer);
    }
  }, [hasMounted, controls]);

  if (!hasMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 1, y: 0 }, // FORCE VISIBLE (Emergency Fix)
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.6, // Faster animation
        ease: "easeOut",
        delay: delay / 1000
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
