'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TocItem {
  number: string;
  title: string;
  desc: string;
  href: string;
  accent: string;
  glow: string;
  borderHover: string;
  floatDuration: number;
  floatDelay: number;
}

const TOC_ITEMS: TocItem[] = [
  {
    number: '01',
    title: 'ABOUT ME',
    desc: 'Creative background & philosophy',
    href: '#about',
    accent: '#d4af37',
    glow: 'rgba(212, 175, 55, 0.28)',
    borderHover: 'hover:border-[#d4af37]/60 hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.8),0_0_24px_rgba(212,175,55,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]',
    floatDuration: 5.4,
    floatDelay: 0,
  },
  {
    number: '02',
    title: 'SERVICES',
    desc: '8 tailored editing & design offerings',
    href: '#services',
    accent: '#22d3ee',
    glow: 'rgba(34, 211, 238, 0.28)',
    borderHover: 'hover:border-[#22d3ee]/60 hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.8),0_0_24px_rgba(34,211,238,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]',
    floatDuration: 6.2,
    floatDelay: -1.3,
  },
  {
    number: '03',
    title: 'SKILLS & TOOLS',
    desc: 'Software stack & workflow capabilities',
    href: '#skills',
    accent: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.28)',
    borderHover: 'hover:border-[#c084fc]/60 hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.8),0_0_24px_rgba(192,132,252,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]',
    floatDuration: 5.0,
    floatDelay: -2.6,
  },
  {
    number: '04',
    title: 'VIDEO SHOWCASE',
    desc: 'Curated video repertoire & cinema player',
    href: '#video-showcase',
    accent: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.28)',
    borderHover: 'hover:border-[#fbbf24]/60 hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.8),0_0_24px_rgba(251,191,36,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]',
    floatDuration: 5.8,
    floatDelay: -0.9,
  },
  {
    number: '05',
    title: 'TESTIMONIALS',
    desc: 'Client reviews & creator endorsements',
    href: '#testimonials',
    accent: '#34d399',
    glow: 'rgba(52, 211, 153, 0.28)',
    borderHover: 'hover:border-[#34d399]/60 hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.8),0_0_24px_rgba(52,211,153,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]',
    floatDuration: 6.5,
    floatDelay: -2.1,
  },
  {
    number: '06',
    title: 'CONTACT & BOOKING',
    desc: 'Project inquiries & direct channels',
    href: '#contact',
    accent: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.28)',
    borderHover: 'hover:border-[#f472b6]/60 hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.8),0_0_24px_rgba(244,114,182,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]',
    floatDuration: 5.2,
    floatDelay: -3.4,
  },
];

export default function TableOfContentsSection() {
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-[#0a0a0e]/90 via-[#0d0d12]/80 to-[#07070a]/95 border-y border-white/5 overflow-hidden" id="index-nav">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#d4af37]/5 via-amber-500/5 to-[#22d3ee]/5 blur-3xl opacity-60 rounded-full" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-9 md:mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-px w-3 bg-[#d4af37]" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#d4af37] font-semibold">
              NAVIGATION DIRECTORY
            </span>
            <span className="h-px w-3 bg-[#d4af37]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            TABLE OF{' '}
            <span className="bg-gradient-to-r from-[#d4af37] via-[#fce999] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]">
              CONTENTS
            </span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-xl text-xs sm:text-sm text-gray-400">
            Explore portfolio categories, technical software stack, video showcase, and case studies.
          </p>
        </motion.div>

        {/* Medium Sized 3D Glassmorphism Grid: 2 cols mobile, 3 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {TOC_ITEMS.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              animate={{ y: [0, -6, 0] }}
              style={{ willChange: 'transform' }}
              className="h-full"
            >
              <motion.a
                href={item.href}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                className={`group relative flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-5.5 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-[0_10px_30px_-5px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all duration-300 overflow-hidden ${item.borderHover}`}
              >
                {/* 3D Specular Sheen Gradient Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Subtle Ambient Radial Backlight on Hover */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: item.accent }}
                />

                {/* Left Content: Badge + Typography */}
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1 relative z-10">
                  {/* High-Contrast Luminous Number Badge */}
                  <div
                    className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 shadow-sm"
                    style={{
                      backgroundColor: `${item.accent}14`,
                      borderColor: `${item.accent}40`,
                      boxShadow: `0 0 14px -2px ${item.glow}`,
                    }}
                  >
                    <span
                      className="font-mono text-xs sm:text-sm font-extrabold tracking-wider"
                      style={{ color: item.accent }}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Typography: Crisp White Title & Subtitle */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-xs sm:text-sm md:text-[15px] font-extrabold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 truncate text-[10px] sm:text-[11px] md:text-xs text-gray-400 font-normal transition-colors duration-300 group-hover:text-gray-200">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Right Action: 3D Arrow Indicator */}
                <div
                  className="relative z-10 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-300 group-hover:border-current group-hover:scale-110 group-hover:translate-x-0.5"
                  style={{ color: item.accent }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
