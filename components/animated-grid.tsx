"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedGridProps {
  variant?: "grid" | "dots" | "lines" | "lattice" | "network"
  className?: string
}

export function AnimatedGrid({ variant = "grid", className = "" }: AnimatedGridProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (variant === "dots") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#4DA7B3" fillOpacity="0.3" />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#dots)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>
        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-aqua-mist/40"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === "lines") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1="0"
              y1={`${10 + i * 12}%`}
              x2="100%"
              y2={`${15 + i * 12}%`}
              stroke="#4DA7B3"
              strokeWidth="0.5"
              strokeOpacity="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          ))}
        </svg>
      </div>
    )
  }

  if (variant === "lattice") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lattice" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <motion.path
                d="M60 0 L0 60 M30 0 L0 30 M60 30 L30 60"
                stroke="#4DA7B3"
                strokeWidth="0.5"
                strokeOpacity="0.15"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lattice)" />
        </svg>
        {/* Glowing nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-aqua-mist/30"
            style={{
              left: `${20 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 40}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === "network") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Network lines */}
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + (i % 4) * 25}%`}
              y1={`${20 + Math.floor(i / 4) * 30}%`}
              x2={`${30 + ((i + 1) % 4) * 20}%`}
              y2={`${35 + Math.floor((i + 2) / 4) * 25}%`}
              stroke="#4DA7B3"
              strokeWidth="0.5"
              strokeOpacity="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          ))}
          {/* Network nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={`${15 + (i % 4) * 22}%`}
              cy={`${25 + Math.floor(i / 4) * 35}%`}
              r="3"
              fill="#4DA7B3"
              fillOpacity="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
    )
  }

  // Default grid
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4DA7B3" strokeWidth="0.5" strokeOpacity="0.15" />
          </pattern>
        </defs>
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
      {/* Subtle scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua-mist/30 to-transparent"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
