'use client'

import { motion } from 'framer-motion'

interface BubbleProps {
  count: number;
  colors: string[];
  speed?: number;
  containerRef?: React.RefObject<HTMLElement>;
}

export default function Bubbles({ count, colors, speed = 1, containerRef }: BubbleProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 60 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl"
            style={{
              backgroundColor: color,
              width: size,
              height: size,
            }}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: (Math.random() * 10 + 10) / speed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            drag
            dragConstraints={containerRef}
          />
        )
      })}
    </>
  )
}

