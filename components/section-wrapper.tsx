"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionWrapper({ children, className = "", delay = 0 }: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
