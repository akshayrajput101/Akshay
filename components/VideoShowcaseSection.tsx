'use client';

import React, { useRef, useState } from 'react';

interface VideoItem {
  id: number;
  title: string;
  category: string;
  categoryName: string;
  duration: string;
  views: string;
  aspect: string;
  isVertical: boolean;
  client: string;
  videoSrc?: string;
  poster?: string;
  thumb: string;
  desc: string;
  specs: {
    software: string;
    resolution: string;
    colorGrade: string;
    soundDesign: string;
    turnaround: string;
  };
}

const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 1,
    title: 'High-Retention Dynamic Visual Reel',
    category: 'reels',
    categoryName: 'Reels & Shorts (9:16)',
    duration: '1:10',
    views: '2.8M Views',
    aspect: '9:16 VERTICAL',
    isVertical: true,
    client: 'Featured Creator',
    videoSrc: '/six.mp4',
    thumb: '/six.mp4',
    desc: 'Dynamic short-form showcase edit with kinetic animated typography, seamless visual transitions, and high-retention sound design.',
    specs: {
      software: 'Premiere Pro, After Effects, CapCut Pro',
      resolution: '1080x1920 Vertical 60fps',
      colorGrade: 'High-Contrast Vibrant Pop',
      soundDesign: 'Micro-SFX & Rhythm Syncing',
      turnaround: '24 Hours',
    },
  },
  {
    id: 2,
    title: 'Cyberpunk 2099 Tech Reveal Commercial',
    category: 'commercials',
    categoryName: 'Commercials & Ads',
    duration: '0:45',
    views: '1.8M Views',
    aspect: '16:9 4K UHD',
    isVertical: false,
    client: 'Aether Dynamics',
    videoSrc: '/sec.mp4',
    thumb: '/sec.mp4',
    desc: 'High-octane product reveal commercial featuring kinetic 3D HUD overlays, volumetric anamorphic lighting, and sound design.',
    specs: {
      software: 'Premiere Pro, After Effects, Mocha Pro',
      resolution: '4K DCI (3840x2160) 60fps ProRes 422HQ',
      colorGrade: 'Custom Lumetri Obsidian Gold LUT',
      soundDesign: '48-Track Immersive Spatial Mix',
      turnaround: '5 Days',
    },
  },
  {
    id: 3,
    title: 'Cinematic Narrative & Commercial Visual Cut',
    category: 'youtube',
    categoryName: 'YouTube Long-Form',
    duration: '1:02',
    views: '1.4M Views',
    aspect: '16:9 4K UHD',
    isVertical: false,
    client: 'Creative Partner',
    videoSrc: '/seven.mp4',
    thumb: '/seven.mp4',
    desc: 'Dynamic cinematic edit with seamless visual storytelling, stylized color grading, and custom audio sound design.',
    specs: {
      software: 'Premiere Pro, After Effects, DaVinci Resolve',
      resolution: '4K UHD 60fps',
      colorGrade: 'Film Emulation & Vibrant Pop',
      soundDesign: 'Custom Foley & Audio Mastering',
      turnaround: '3 Days',
    },
  },
  {
    id: 4,
    title: 'Aura Noir Luxury Timepiece Commercial Launch',
    category: 'commercials',
    categoryName: 'Commercials & Ads',
    duration: '1:12',
    views: '2.4M Views',
    aspect: '16:9 4K UHD',
    isVertical: false,
    client: 'Aura Horology Geneva',
    videoSrc: '/four.mp4',
    thumb: '/four.mp4',
    desc: 'Luxury product commercial with macro gear reflections, slow-motion fluid physics, and champagne gold color mastery.',
    specs: {
      software: 'DaVinci Resolve Studio, After Effects',
      resolution: '4K DCI CinemaScope 2.39:1',
      colorGrade: 'ACES Film Grade Gold Speculars',
      soundDesign: 'Custom Mechanical Clockwork Foley',
      turnaround: '4 Days',
    },
  },
  {
    id: 5,
    title: 'Kinetic 3D Typography & Holographic Identity',
    category: 'motion',
    categoryName: 'Motion Graphics & VFX',
    duration: '0:25',
    views: '650K Views',
    aspect: '16:9 4K UHD',
    isVertical: false,
    client: 'Vanguard Labs',
    videoSrc: '/five.mp4',
    thumb: '/five.mp4',
    desc: 'Experimental 3D typography intro with dynamic chromatic dispersion, ray-traced lighting, and glass refractions.',
    specs: {
      software: 'Cinema 4D, After Effects, Illustrator',
      resolution: '4K 60fps Smooth Motion',
      colorGrade: 'Neon Magenta & Obsidian Black',
      soundDesign: 'Synthesizer Glitch & Sub Drops',
      turnaround: '3 Days',
    },
  },
  {
    id: 6,
    title: 'Viral Alex Hormozi Style High-Retention Reel',
    category: 'reels',
    categoryName: 'Reels & Shorts (9:16)',
    duration: '0:38',
    views: '4.2M Views',
    aspect: '9:16 VERTICAL',
    isVertical: true,
    client: 'HyperScale Media',
    videoSrc: '/first.mp4',
    thumb: '/first.mp4',
    desc: 'Fast-paced short-form masterclass edit with kinetic animated typography, sound emojis, and retention-maximizing b-roll cuts.',
    specs: {
      software: 'Premiere Pro, After Effects, CapCut Pro',
      resolution: '1080x1920 Vertical 60fps',
      colorGrade: 'High-Contrast Vibrant Pop',
      soundDesign: 'Micro-SFX & Whoosh Syncing',
      turnaround: '24 Hours',
    },
  },
  {
    id: 7,
    title: 'The Rise of Superintelligent AI Documentary Cut',
    category: 'youtube',
    categoryName: 'YouTube Long-Form',
    duration: '18:24',
    views: '980K Views',
    aspect: '16:9 4K UHD',
    isVertical: false,
    client: 'Future Horizon (850K Subs)',
    videoSrc: '/third.mp4',
    thumb: '/third.mp4',
    desc: 'Documentary-style deep dive cut with seamless motion graphic chapters, archival footage restoration, and cinematic pacing.',
    specs: {
      software: 'Premiere Pro, Photoshop, After Effects',
      resolution: '4K UHD 24fps Cinema',
      colorGrade: 'Film Emulation Kodak 2383',
      soundDesign: 'Orchestral Score & Dialogue Mastering',
      turnaround: '7 Days',
    },
  },
  {
    id: 8,
    title: 'Urban Velocity Cinematic Motion Reel',
    category: 'cinematic',
    categoryName: 'Cinematic & Music',
    duration: '0:18',
    views: '2.1M Views',
    aspect: '16:9 4K UHD',
    isVertical: false,
    client: 'Vanguard Syndicate',
    videoSrc: '/eight.mp4',
    thumb: '/eight.mp4',
    desc: 'High-energy cinematic cut featuring dynamic night aesthetics, precision speed ramping, and immersive audio sound design.',
    specs: {
      software: 'DaVinci Resolve Studio, Premiere Pro',
      resolution: '4K DCI 60fps',
      colorGrade: 'Moody Neon Contrast & Film Emulation',
      soundDesign: 'Immersive Spatial SFX & Sound Design',
      turnaround: '3 Days',
    },
  },
];

interface VideoCardProps {
  video: VideoItem;
}

function VideoCard({ video }: VideoCardProps) {
  const [isPlayingInline, setIsPlayingInline] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isVideo = Boolean(video.videoSrc || (video.thumb && video.thumb.endsWith('.mp4')));
  const videoSrcPath = video.videoSrc || video.thumb;

  const handleStartInlinePlay = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.stopPropagation();
    }

    // Reset video to the very beginning (0:00) for a fresh start with audio & controls
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
    }

    setIsPlayingInline(true);

    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined && playPromise !== null) {
        playPromise.catch(() => {
          // If browser policy restricts unmuted play without user gesture, fallback to muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  };

  const handleCardMouseEnter = () => {
    if (isPlayingInline) return;
    try {
      if (videoRef.current) {
        videoRef.current.muted = true;
        const promise = videoRef.current.play();
        if (promise !== undefined && promise !== null) {
          promise.catch(() => {});
        }
      }
    } catch {
      // Safe catch
    }
  };

  const handleCardMouseLeave = () => {
    if (isPlayingInline) return;
    try {
      if (videoRef.current) {
        // Safe preview maintenance
      }
    } catch {
      // Safe catch
    }
  };

  return (
    <div
      onClick={handleStartInlinePlay}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border bg-[#0e0e14]/70 backdrop-blur-md transition-all duration-500 cursor-pointer ${
        isPlayingInline
          ? 'border-[#d4af37] shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_30px_rgba(212,175,55,0.3)]'
          : 'border-white/10 hover:border-[#d4af37]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:-translate-y-2'
      }`}
    >
      {/* Video Container (Preserves strict aspect ratio bounds and responsive layout) */}
      <div className="relative w-full aspect-[9/13] min-h-[380px] sm:min-h-[420px] overflow-hidden bg-gradient-to-br from-[#1c1c28] to-[#0c0c12] rounded-2xl">
        {isVideo ? (
          <video
            ref={videoRef}
            src={videoSrcPath}
            autoPlay={true}
            muted={!isPlayingInline}
            loop={true}
            controls={isPlayingInline}
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-center z-10 transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <img
            src={video.thumb}
            alt={video.title}
            className="absolute inset-0 h-full w-full object-cover object-center z-10 transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Large Play Button Overlay (Visible during Default/Preview state, Hidden during Inline Play) */}
        {!isPlayingInline && (
          <div
            onClick={handleStartInlinePlay}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleStartInlinePlay(e);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Play ${video.title} with sound`}
            className="absolute inset-0 z-20 bg-black/30 hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer"
          >
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#b38a22] text-black font-bold shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.4)] transform transition-transform duration-300 group-hover:scale-110">
              <span className="ml-1 text-lg sm:text-xl">▶</span>
              <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#e6d5b8]/50 animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
        )}

        {/* Thumbnail Badges (Hidden when playing inline so controls aren't obstructed) */}
        {!isPlayingInline && (
          <>
            <span className="absolute top-3 left-3 z-20 rounded-md bg-black/75 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-[#d4af37] border border-white/10 backdrop-blur-md">
              {video.aspect}
            </span>
            <span className="absolute bottom-3 right-3 z-20 rounded-md bg-black/75 px-2 py-1 font-mono text-[10px] text-white border border-white/10 backdrop-blur-md">
              {video.duration}
            </span>
            <span className="absolute bottom-3 left-3 z-20 font-mono text-[11px] font-semibold text-[#d4af37] drop-shadow-md">
              ✦ {video.views}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default function VideoShowcaseSection() {
  return (
    <section className="relative py-24 bg-[#0a0a0e]" id="video-showcase">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d4af37]">
            04 // CURATED VIDEO REPERTOIRE (15 WORKS)
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            EDITED VIDEO{' '}
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f7e08b] to-[#d4af37] bg-clip-text text-transparent">
              SHOWCASE
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 md:text-base">
            Browse curated video projects across Short-Form Reels, YouTube Documentaries, Commercials, Motion Graphics, and Cinematic Films. Click any item to play inline with full controls.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEO_ITEMS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
