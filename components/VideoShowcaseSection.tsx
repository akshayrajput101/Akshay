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
    title: 'Raw Power Fitness Motivation High-Energy Reel',
    category: 'reels',
    categoryName: 'Reels & Shorts (9:16)',
    duration: '0:42',
    views: '3.5M Views',
    aspect: '9:16 VERTICAL',
    isVertical: true,
    client: 'IronForge Athletics',
    videoSrc: '/first.mp4',
    thumb: '/first.mp4',
    desc: 'Adrenaline-fueled gym reel featuring speed ramping, beat matching, heavy bass drops, and aesthetic gym lighting grade.',
    specs: {
      software: 'Premiere Pro, CapCut Pro',
      resolution: '1080x1920 60fps',
      colorGrade: 'Dark Moody Gritty Warmth',
      soundDesign: 'Heavy Impact & Heartbeat SFX',
      turnaround: '24 Hours',
    },
  },
];

export default function VideoShowcaseSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    try {
      const video = e.currentTarget.querySelector('video');
      if (video) {
        video.muted = true;
        const promise = video.play();
        if (promise !== undefined && promise !== null) {
          promise.catch(() => {
            // Safely ignore abort / programmatic play blocks
          });
        }
      }
    } catch {
      // Safe catch
    }
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    try {
      const video = e.currentTarget.querySelector('video');
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    } catch {
      // Safe catch
    }
  };

  const handleOpenModal = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsMuted(false);
    setTimeout(() => {
      if (modalVideoRef.current) {
        try {
          modalVideoRef.current.currentTime = 0;
          modalVideoRef.current.muted = false;
          modalVideoRef.current.volume = 1.0;
          const playPromise = modalVideoRef.current.play();
          if (playPromise !== undefined && playPromise !== null) {
            playPromise
              .then(() => {
                setIsMuted(false);
              })
              .catch(() => {
                // If unmuted playback is blocked on mobile, fallback safely to muted
                if (modalVideoRef.current) {
                  modalVideoRef.current.muted = true;
                  const mutedPromise = modalVideoRef.current.play();
                  if (mutedPromise !== undefined && mutedPromise !== null) {
                    mutedPromise.catch(() => {});
                  }
                  setIsMuted(true);
                }
              });
          }
        } catch {
          // Safe catch
        }
      }
    }, 60);
  };

  const handleToggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted;
      setIsMuted(modalVideoRef.current.muted);
    }
  };

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
            Browse curated video projects across Short-Form Reels, YouTube Documentaries, Commercials, Motion Graphics, and Cinematic Films. Click any item to launch the interactive Cinema Player.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEO_ITEMS.map((video) => {
            const isVideo = Boolean(video.videoSrc || (video.thumb && video.thumb.endsWith('.mp4')));
            const videoSrcPath = video.videoSrc || video.thumb;

            return (
              <div
                key={video.id}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => handleOpenModal(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOpenModal(video);
                  }
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#121218] transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.2)]"
              >
                <div className="relative w-full aspect-[9/13] h-[380px] overflow-hidden bg-gradient-to-br from-[#1c1c28] to-[#0c0c12] rounded-t-2xl">
                  {isVideo ? (
                    <video
                      src={videoSrcPath}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="absolute inset-0 h-full w-full object-cover object-center z-10 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={video.thumb}
                      alt={video.title}
                      className="absolute inset-0 h-full w-full object-cover object-center z-10 transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 z-20 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center pointer-events-none">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37] text-black font-bold shadow-lg transform transition-transform group-hover:scale-110">
                      ▶
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 z-20 rounded-md bg-black/70 px-2 py-1 font-mono text-[10px] text-white backdrop-blur-md">
                    {video.aspect}
                  </span>
                  <span className="absolute bottom-3 right-3 z-20 rounded-md bg-black/70 px-2 py-1 font-mono text-[10px] text-[#d4af37] backdrop-blur-md">
                    {video.duration}
                  </span>
                </div>

                <div className="p-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#d4af37]">
                    {video.categoryName}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {video.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-[11px] text-gray-400">Client: {video.client}</span>
                    <span className="font-mono text-xs font-semibold text-[#d4af37] group-hover:underline">
                      Watch Edit →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Cinema Player (Responsive & Viewport-Constrained) */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-5xl max-h-[85vh] flex flex-col overflow-y-auto rounded-2xl border border-white/10 bg-[#121218] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#121218]/95 px-5 py-3.5 backdrop-blur-md">
                <div>
                  <span className="font-mono text-xs text-[#d4af37]">{selectedVideo.categoryName}</span>
                  <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-[280px] sm:max-w-md md:max-w-lg">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-video max-h-[48vh] w-full bg-black flex items-center justify-center overflow-hidden">
                <video
                  ref={modalVideoRef}
                  src={selectedVideo.videoSrc || selectedVideo.thumb}
                  loop
                  playsInline
                  controls
                  preload="auto"
                  className="h-full w-full object-contain z-10"
                />

                {/* Click to Unmute banner */}
                {isMuted && (
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    className="absolute top-4 right-4 z-20 rounded-full border border-yellow-500/60 bg-black/80 px-3.5 py-1.5 font-mono text-[11px] sm:text-xs font-bold text-white backdrop-blur-md hover:bg-yellow-500/20 shadow-lg"
                  >
                    🔊 CLICK TO UNMUTE
                  </button>
                )}
              </div>

              {/* Modal Footer Specifications */}
              <div className="p-4 sm:p-5 bg-[#0e0e14] border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {selectedVideo.desc}
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-[11px] font-mono text-gray-400 border-t md:border-t-0 md:border-l border-white/5 pt-3 md:pt-0 md:pl-4">
                  <div><strong className="text-[#d4af37]">Software:</strong> {selectedVideo.specs.software}</div>
                  <div><strong className="text-[#d4af37]">Format:</strong> {selectedVideo.specs.resolution}</div>
                  <div><strong className="text-[#d4af37]">Color:</strong> {selectedVideo.specs.colorGrade}</div>
                  <div><strong className="text-[#d4af37]">Sound:</strong> {selectedVideo.specs.soundDesign}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
