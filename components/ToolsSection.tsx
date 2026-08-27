'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ToolItem {
  name: string;
  level: string;
  accent: string;
  glow: string;
  floatDuration: number;
  floatDelay: number;
  icon: React.ReactNode;
}

const TOOLS_DATA: ToolItem[] = [
  {
    name: 'Premiere Pro',
    level: 'Master Editor',
    accent: '#9999FF',
    glow: 'rgba(153, 153, 255, 0.35)',
    floatDuration: 4.2,
    floatDelay: -0.4,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#9999FF" fillOpacity="0.2" />
        <path d="M7 17V7h4.5a3 3 0 0 1 0 6H7" stroke="#e6d5b8" strokeWidth="2" />
        <path d="M14 17V11h3a2 2 0 0 1 0 4h-3" stroke="#e6d5b8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'After Effects',
    level: 'Motion & VFX',
    accent: '#D291FF',
    glow: 'rgba(210, 145, 255, 0.35)',
    floatDuration: 4.8,
    floatDelay: -1.7,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#D291FF" fillOpacity="0.2" />
        <path d="M6 17l4-10 4 10M8 13h4M15 17v-6h4M15 14h3M15 17h4" stroke="#e6d5b8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Photoshop',
    level: 'Thumbnail & Retouch',
    accent: '#31A8FF',
    glow: 'rgba(49, 168, 255, 0.35)',
    floatDuration: 3.9,
    floatDelay: -2.8,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#31A8FF" fillOpacity="0.2" />
        <path
          d="M7 17V7h4a3 3 0 0 1 0 6H7M14 15c.5.7 1.2 1 2 1 1.5 0 2-.8 2-1.8 0-2-3-1.5-3-3.2 0-1 .8-1.8 2-1.8 1 0 1.6.4 2 1"
          stroke="#e6d5b8"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: 'Illustrator',
    level: 'Vector Branding',
    accent: '#FF9A00',
    glow: 'rgba(255, 154, 0, 0.35)',
    floatDuration: 5.1,
    floatDelay: -0.9,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#FF9A00" fillOpacity="0.2" />
        <path d="M6 17l4-10 4 10M8 13h4M16 8v9M16 6v1" stroke="#e6d5b8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'DaVinci Resolve',
    level: 'Color Grading Studio',
    accent: '#e02868',
    glow: 'rgba(224, 40, 104, 0.35)',
    floatDuration: 4.5,
    floatDelay: -3.4,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#e6d5b8" strokeWidth="1.5" />
        <circle cx="12" cy="8" r="3" fill="#e02868" />
        <circle cx="8" cy="15" r="3" fill="#d4af37" />
        <circle cx="16" cy="15" r="3" fill="#31A8FF" />
      </svg>
    ),
  },
  {
    name: 'CapCut Pro',
    level: 'Viral Short-Form',
    accent: '#00F2FE',
    glow: 'rgba(0, 242, 254, 0.35)',
    floatDuration: 3.7,
    floatDelay: -1.2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 8l8-4 8 4-8 4-8-4zM4 16l8 4 8-4M4 12l8 4 8-4" stroke="#e6d5b8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    level: 'UI & Layouts',
    accent: '#A259FF',
    glow: 'rgba(162, 89, 255, 0.35)',
    floatDuration: 4.9,
    floatDelay: -2.3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="15" cy="6" r="3" fill="#e6d5b8" fillOpacity="0.3" />
        <circle cx="9" cy="6" r="3" fill="#e6d5b8" fillOpacity="0.5" />
        <circle cx="9" cy="12" r="3" fill="#e6d5b8" fillOpacity="0.7" />
        <circle cx="15" cy="12" r="3" fill="#e6d5b8" fillOpacity="0.8" />
        <circle cx="9" cy="18" r="3" fill="#d4af37" />
      </svg>
    ),
  },
  {
    name: 'Canva Pro',
    level: 'Rapid Graphics',
    accent: '#00C4CC',
    glow: 'rgba(0, 196, 204, 0.35)',
    floatDuration: 4.3,
    floatDelay: -0.8,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#e6d5b8" strokeWidth="2" />
        <path d="M15 9c-1.5-1-4-1-5 1s0 4 2 5 3 0 4-1" stroke="#d4af37" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Audition',
    level: 'Audio Mastering',
    accent: '#00e5bb',
    glow: 'rgba(0, 229, 187, 0.35)',
    floatDuration: 5.3,
    floatDelay: -3.1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#00e5bb" fillOpacity="0.2" />
        <path d="M5 15V9h2l3 6V9M14 9v6a2 2 0 0 0 4 0V9" stroke="#e6d5b8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Blender 3D',
    level: '3D Assets & Camera',
    accent: '#FF7B00',
    glow: 'rgba(255, 123, 0, 0.35)',
    floatDuration: 4.1,
    floatDelay: -1.9,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zM12 2v18M20 6.5l-8 4.5M4 6.5l8 4.5"
          stroke="#e6d5b8"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
];

const WORKFLOW_TAGS = [
  '✦ 4K & 8K 10-Bit ProRes Export',
  '✦ Frame-Accurate Beat Syncing',
  '✦ Custom LUTs & Lumetri Grading',
  '✦ Kinetic Typography & Subtitle Animations',
  '✦ 3D Camera Tracking & Mocha Rotoscoping',
  '✦ Dialogue De-Noising & Spectral Repair',
  '✦ High-CTR Thumbnail Composition',
];

// Single 3D Interactive Card Component
function ToolCard({ tool, index }: { tool: ToolItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  // Spring Physics for 3D Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 220, mass: 0.15 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    // Normalize coordinates to [-0.5, 0.5]
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 45, rotateX: 20, scale: 0.92 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.06,
          },
        },
      }}
      className="relative [perspective:1000px]"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={
          isHovered
            ? {}
            : {
                y: [0, -4, 0],
                rotate: [0, 0.4, 0],
                transition: {
                  duration: tool.floatDuration,
                  delay: Math.abs(tool.floatDelay),
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
        }
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.06,
          z: 20,
          transition: { duration: 0.15, ease: 'easeOut' },
        }}
        className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[14px] border border-white/10 bg-[#121218]/80 px-4 py-6 text-center shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-[var(--accent)] hover:bg-[#1a1a24]/90"
      >
        {/* Dynamic Cursor Spotlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(180px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${tool.glow}, transparent 70%)`,
          }}
        />

        {/* Glowing Dynamic Border Ring */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(140px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${tool.accent}, transparent 65%)`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1px',
          }}
        />

        {/* Inner Content with 3D Depth Pop */}
        <div className="relative z-10 flex flex-col items-center gap-3 [transform-style:preserve-3d]">
          {/* Tool Icon */}
          <div
            className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/10 bg-[#e6d5b8]/[0.06] transition-all duration-300 [transform:translateZ(28px)] group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[#e6d5b8]/[0.16] group-hover:[transform:translateZ(36px)]"
            style={{
              boxShadow: isHovered ? `0 0 24px ${tool.glow}` : undefined,
              borderColor: isHovered ? tool.accent : undefined,
            }}
          >
            {tool.icon}
          </div>

          {/* Tool Name */}
          <span
            className="font-bold tracking-wide text-white transition-all duration-300 [transform:translateZ(20px)] group-hover:[transform:translateZ(26px)] text-sm"
            style={{
              textShadow: isHovered ? `0 0 12px ${tool.glow}` : undefined,
            }}
          >
            {tool.name}
          </span>

          {/* Tool Level Badge */}
          <span
            className="font-mono text-[11px] uppercase tracking-wider text-[#d4af37]/80 transition-all duration-300 [transform:translateZ(14px)] group-hover:[transform:translateZ(18px)]"
            style={{
              color: isHovered ? tool.accent : undefined,
            }}
          >
            {tool.level}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Full Tools Section Component
export default function ToolsSection() {
  return (
    <section className="relative py-24" id="skills">
      <div className="container mx-auto px-4">
        {/* Outer Glowing Wrapper Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12]/90 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          {/* Section Editorial Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d4af37]">
              03 // SOFTWARE &amp; HARDWARE STACK
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              TOOLS I <span className="bg-gradient-to-r from-[#d4af37] via-[#f7e08b] to-[#d4af37] bg-clip-text text-transparent">USE</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
              Industry-standard creative software mastered for lightning-fast workflows and high-fidelity output.
            </p>
          </motion.div>

          {/* 3D Staggered Animated Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 [perspective:1200px]"
          >
            {TOOLS_DATA.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </motion.div>

          {/* Workflow Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-3 border-t border-white/10 pt-8"
          >
            {WORKFLOW_TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#e6d5b8]/[0.05] px-4 py-2 font-mono text-xs text-gray-300 transition-colors duration-200 hover:border-[#d4af37]/50 hover:bg-[#e6d5b8]/[0.12] hover:text-[#d4af37]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
