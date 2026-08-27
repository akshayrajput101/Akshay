'use client';

import React from 'react';

interface FeaturePillar {
  icon: string;
  title: string;
  desc: string;
}

const FEATURE_PILLARS: FeaturePillar[] = [
  {
    icon: '⚡',
    title: 'RHYTHM & PACING',
    desc: 'Frame-accurate cuts aligned with psychological retention drop-offs.',
  },
  {
    icon: '🎨',
    title: 'COLOR SCIENCE',
    desc: 'Custom ACES and Lumetri LUT grading creating a distinct cinematic atmosphere.',
  },
  {
    icon: '🔊',
    title: 'SOUND ARCHITECTURE',
    desc: 'Layered spatial sound effects, sub-bass impacts, and clean vocal mastering.',
  },
  {
    icon: '🎯',
    title: 'HIGH-CTR VISUALS',
    desc: 'Thumbnail and graphic design that stops the scroll and drives clicks.',
  },
];

export default function AboutFeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 mt-2.5">
      {FEATURE_PILLARS.map((pillar) => (
        <div
          key={pillar.title}
          className="group relative flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 ease-in-out hover:border-yellow-500/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
        >
          {/* Pillar Icon */}
          <span className="text-xl text-[#d4af37] transition-all duration-300 ease-in-out group-hover:text-yellow-400">
            {pillar.icon}
          </span>

          {/* Heading with pure white hover transition */}
          <h3 className="font-display text-sm font-bold tracking-wider uppercase text-[#d4af37] transition-all duration-300 ease-in-out group-hover:text-white">
            {pillar.title}
          </h3>

          {/* Paragraph with pure white hover transition */}
          <p className="text-xs text-gray-400 leading-relaxed transition-all duration-300 ease-in-out group-hover:text-white">
            {pillar.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
