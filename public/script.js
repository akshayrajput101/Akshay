/**
 * LUXURY DARK EDITORIAL PORTFOLIO - SCRIPT
 * Video Editor & Graphic Designer
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Data Store for 15 Video Showcase Items & Projects
  // --------------------------------------------------------------------------
  const videoPortfolioData = [
    {
      id: 1,
      title: "Viral Alex Hormozi Style High-Retention Reel",
      category: "reels",
      categoryName: "Reels & Shorts (9:16)",
      duration: "0:38",
      views: "4.2M Views",
      aspect: "9:16 VERTICAL",
      isVertical: true,
      client: "HyperScale Media",
      videoSrc: "/first.mp4",
      thumb: "/first.mp4",
      desc: "Fast-paced short-form masterclass edit with kinetic animated typography, sound emojis, and retention-maximizing b-roll cuts.",
      specs: {
        software: "Premiere Pro, After Effects, CapCut Pro",
        resolution: "1080x1920 Vertical 60fps",
        colorGrade: "High-Contrast Vibrant Pop",
        soundDesign: "Micro-SFX & Whoosh Syncing",
        turnaround: "24 Hours"
      }
    },
    {
      id: 2,
      title: "Cyberpunk 2099 Tech Reveal Commercial",
      category: "commercials",
      categoryName: "Commercials & Ads",
      duration: "0:45",
      views: "1.8M Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "Aether Dynamics",
      videoSrc: "/sec.mp4",
      thumb: "/sec.mp4",
      desc: "High-octane product reveal commercial featuring kinetic 3D HUD overlays, volumetric anamorphic lighting, and sound design.",
      specs: {
        software: "Premiere Pro, After Effects, Mocha Pro",
        resolution: "4K DCI (3840x2160) 60fps ProRes 422HQ",
        colorGrade: "Custom Lumetri Obsidian Gold LUT",
        soundDesign: "48-Track Immersive Spatial Mix",
        turnaround: "5 Days"
      }
    },
    {
      id: 3,
      title: "The Rise of Superintelligent AI Documentary Cut",
      category: "youtube",
      categoryName: "YouTube Long-Form",
      duration: "18:24",
      views: "980K Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "Future Horizon (850K Subs)",
      videoSrc: "/third.mp4",
      thumb: "/third.mp4",
      desc: "Documentary-style deep dive cut with seamless motion graphic chapters, archival footage restoration, and cinematic pacing.",
      specs: {
        software: "Premiere Pro, Photoshop, After Effects",
        resolution: "4K UHD 24fps Cinema",
        colorGrade: "Film Emulation Kodak 2383",
        soundDesign: "Orchestral Score & Dialogue Mastering",
        turnaround: "7 Days"
      }
    },
    {
      id: 4,
      title: "Aura Noir Luxury Timepiece Commercial Launch",
      category: "commercials",
      categoryName: "Commercials & Ads",
      duration: "1:12",
      views: "2.4M Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "Aura Horology Geneva",
      videoSrc: "/four.mp4",
      thumb: "/four.mp4",
      desc: "Luxury product commercial with macro gear reflections, slow-motion fluid physics, and champagne gold color mastery.",
      specs: {
        software: "DaVinci Resolve Studio, After Effects",
        resolution: "4K DCI CinemaScope 2.39:1",
        colorGrade: "ACES Film Grade Gold Speculars",
        soundDesign: "Custom Mechanical Clockwork Foley",
        turnaround: "4 Days"
      }
    },
    {
      id: 5,
      title: "Kinetic 3D Typography & Holographic Identity",
      category: "motion",
      categoryName: "Motion Graphics & VFX",
      duration: "0:25",
      views: "650K Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "Vanguard Labs",
      videoSrc: "/five.mp4",
      thumb: "/five.mp4",
      desc: "Experimental 3D typography intro with dynamic chromatic dispersion, ray-traced lighting, and glass refractions.",
      specs: {
        software: "Cinema 4D, After Effects, Illustrator",
        resolution: "4K 60fps Smooth Motion",
        colorGrade: "Neon Magenta & Obsidian Black",
        soundDesign: "Synthesizer Glitch & Sub Drops",
        turnaround: "3 Days"
      }
    },
    {
      id: 6,
      title: "Raw Power Fitness Motivation High-Energy Reel",
      category: "reels",
      categoryName: "Reels & Shorts (9:16)",
      duration: "0:42",
      views: "3.5M Views",
      aspect: "9:16 VERTICAL",
      isVertical: true,
      client: "IronForge Athletics",
      thumb: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=900&auto=format&fit=crop",
      desc: "Adrenaline-fueled gym reel featuring speed ramping, beat matching, heavy bass drops, and aesthetic gym lighting grade.",
      specs: {
        software: "Premiere Pro, CapCut Pro",
        resolution: "1080x1920 60fps",
        colorGrade: "Dark Moody Gritty Warmth",
        soundDesign: "Heavy Impact & Heartbeat SFX",
        turnaround: "24 Hours"
      }
    },
    {
      id: 7,
      title: "The $100M Creator Economy Deep Dive",
      category: "youtube",
      categoryName: "YouTube Long-Form",
      duration: "24:10",
      views: "1.2M Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "Tech Insider Weekly",
      thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
      desc: "Full long-form YouTube edit with 3D map animations, custom chart callouts, and audio leveling for maximum retention.",
      specs: {
        software: "Premiere Pro, After Effects, Figma",
        resolution: "4K UHD 30fps",
        colorGrade: "Clean Studio Tech LUT",
        soundDesign: "Stereo Dialogue Mastering & Ambient BGM",
        turnaround: "6 Days"
      }
    },
    {
      id: 8,
      title: "Tokyo Midnight Drift Cinematic Film",
      category: "cinematic",
      categoryName: "Cinematic & Music",
      duration: "2:15",
      views: "3.1M Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "Drift Syndicate Japan",
      thumb: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=900&auto=format&fit=crop",
      desc: "Cinematic night automotive film with anamorphic lens flares, wet asphalt reflections, and twin-turbo audio synthesis.",
      specs: {
        software: "DaVinci Resolve Studio, Premiere Pro",
        resolution: "4K Scope 2.39:1 24fps",
        colorGrade: "Neon Night Teal/Red Film Emulation",
        soundDesign: "Custom Engine & Exhaust Foley",
        turnaround: "5 Days"
      }
    },
    {
      id: 9,
      title: "Streetwear Brand Autumn Drop Kinetic Teaser",
      category: "commercials",
      categoryName: "Commercials & Ads",
      duration: "0:30",
      views: "890K Views",
      aspect: "9:16 VERTICAL",
      isVertical: true,
      client: "Obsidian Apparel NYC",
      thumb: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop",
      desc: "Fast-cut editorial fashion teaser featuring textured 35mm film grain, analog paper rips, and glitch typography.",
      specs: {
        software: "Premiere Pro, Photoshop, After Effects",
        resolution: "1080x1920 60fps",
        colorGrade: "Editorial 35mm Film Grain",
        soundDesign: "Underground Trap Beat & Shutter Clicks",
        turnaround: "2 Days"
      }
    },
    {
      id: 10,
      title: "Fintech Next-Gen Mobile App Motion Explainer",
      category: "motion",
      categoryName: "Motion Graphics & VFX",
      duration: "1:05",
      views: "520K Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "Nova Pay Global",
      thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
      desc: "Sleek dark UI product animation demonstrating instant biometric settlements, 3D card spins, and floating graphs.",
      specs: {
        software: "After Effects, Figma, Illustrator",
        resolution: "4K UHD 60fps",
        colorGrade: "High-End Dark UI Glow",
        soundDesign: "Clean Haptic UI Clicks & Chimes",
        turnaround: "4 Days"
      }
    },
    {
      id: 11,
      title: "Viral TikTok E-Commerce Drop-Hook Ad",
      category: "reels",
      categoryName: "Reels & Shorts (9:16)",
      duration: "0:28",
      views: "2.1M Views",
      aspect: "9:16 VERTICAL",
      isVertical: true,
      client: "Lumina Glow Beauty",
      thumb: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=900&auto=format&fit=crop",
      desc: "High-converting UGC style ad with 3-second hook variations, dynamic subtitle animations, and direct-response call to action.",
      specs: {
        software: "CapCut Pro, Premiere Pro",
        resolution: "1080x1920 Vertical",
        colorGrade: "Clean Beauty High Saturation",
        soundDesign: "Trending Audio & Hook Impact",
        turnaround: "24 Hours"
      }
    },
    {
      id: 12,
      title: "Studio Masterclass & Founder Interview Multi-Cam",
      category: "youtube",
      categoryName: "YouTube Long-Form",
      duration: "45:00",
      views: "750K Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "The High Stakes Podcast",
      thumb: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=900&auto=format&fit=crop",
      desc: "3-camera 4K podcast edit with intelligent active speaker switching, noise removal, studio color match, and highlight markers.",
      specs: {
        software: "Premiere Pro, Audition, Photoshop",
        resolution: "4K Multi-Cam Sync",
        colorGrade: "Warm Studio Tungsten Match",
        soundDesign: "iZotope RX Audio Restoration",
        turnaround: "3 Days"
      }
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Custom Magnetic Luxury Cursor
  // --------------------------------------------------------------------------
  const cursorDot = document.querySelector('.custom-cursor');
  const cursorFollower = document.querySelector('.custom-cursor-follower');
  const cursorText = document.querySelector('.cursor-text');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  if (cursorDot && cursorFollower) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;

      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;

      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Hover triggers for magnetic cursor
    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const text = el.getAttribute('data-cursor') || 'VIEW';
        if (cursorText) cursorText.textContent = text;
        document.body.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Synthesized Web Audio API Sound System
  // --------------------------------------------------------------------------
  let soundEnabled = false;
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundStatusText = document.getElementById('soundStatusText');
  let audioCtx = null;

  const initAudio = () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  };

  const playLuxuryTone = (freq = 520, type = 'sine', duration = 0.08, vol = 0.05) => {
    if (!soundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.7, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(vol, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio feedback error:", e);
    }
  };

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      initAudio();
      soundEnabled = !soundEnabled;
      if (soundStatusText) {
        soundStatusText.textContent = soundEnabled ? 'SOUND: ON' : 'SOUND: OFF';
      }
      soundToggleBtn.style.color = soundEnabled ? 'var(--gold-bright)' : 'var(--text-secondary)';
      if (soundEnabled) {
        playLuxuryTone(660, 'sine', 0.12, 0.08);
      }
    });
  }

  // Add click/hover tone listeners to interactive elements
  document.querySelectorAll('a, button, .video-card-item, .toc-card-item, .filter-btn').forEach((btn) => {
    btn.addEventListener('mouseenter', () => playLuxuryTone(880, 'sine', 0.04, 0.015));
    btn.addEventListener('click', () => playLuxuryTone(440, 'triangle', 0.08, 0.04));
  });

  // --------------------------------------------------------------------------
  // 4. Sticky Header Scroll Effect & Active Section Spy
  // --------------------------------------------------------------------------
  const mainNav = document.getElementById('mainNav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }

    // Scroll spy
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinksList = document.getElementById('navMenuLinks');

  if (mobileToggle && navLinksList) {
    mobileToggle.addEventListener('click', () => {
      navLinksList.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinksList.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. Render 15 Video Showcase Items
  // --------------------------------------------------------------------------
  const videoGrid = document.getElementById('videoPortfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  const renderVideoCards = () => {
    if (!videoGrid) return;
    videoGrid.innerHTML = '';

    videoPortfolioData.forEach((video) => {
      const card = document.createElement('div');
      card.className = `video-card-item ${video.isVertical ? 'is-vertical' : ''}`;
      card.setAttribute('data-category', video.category);
      card.setAttribute('data-cursor', 'PLAY');

      const isVideoMedia = Boolean(video.videoSrc || (video.thumb && video.thumb.endsWith('.mp4')));
      const videoSrcPath = video.videoSrc || video.thumb;

      const mediaHtml = isVideoMedia
        ? `<video src="${videoSrcPath}" class="video-thumb-img video-thumb-media w-full h-full object-cover object-center z-10" autoplay muted loop playsinline webkit-playsinline preload="auto"></video>`
        : `<img src="${video.thumb}" alt="${video.title}" class="video-thumb-img w-full h-full object-cover object-center z-10" loading="lazy" />`;

      card.innerHTML = `
        <div class="video-thumb-container">
          ${mediaHtml}
          <div class="video-hover-overlay">
            <div class="play-trigger-disc">
              <i class="play-icon">▶</i>
            </div>
          </div>
          <span class="video-format-pill">${video.aspect}</span>
          <span class="video-duration-pill">${video.duration}</span>
          <span class="video-views-badge">✦ ${video.views}</span>
        </div>
        <div class="video-card-body">
          <span class="video-category-tag">${video.categoryName}</span>
          <h3 class="video-item-title">${video.title}</h3>
          <p class="video-item-desc">${video.desc}</p>
          <div class="video-card-bottom-row">
            <span class="video-client-name">Client: ${video.client}</span>
            <span class="video-watch-cta">Watch Edit →</span>
          </div>
        </div>
      `;

      if (isVideoMedia) {
        const videoElem = card.querySelector('video.video-thumb-media');
        if (videoElem) {
          videoElem.muted = true;
          videoElem.defaultMuted = true;

          const safePlay = () => {
            videoElem.muted = true;
            const p = videoElem.play();
            if (p && typeof p.catch === 'function') {
              p.catch(() => {});
            }
          };

          // Skip initial 0.0s black intro frame when video data loads
          videoElem.addEventListener('loadeddata', () => {
            if (videoElem.currentTime < 0.1 && videoElem.duration > 0.5) {
              videoElem.currentTime = 0.35;
            }
            safePlay();
          }, { once: true });

          videoElem.addEventListener('canplay', safePlay);
          safePlay();

          card.addEventListener('mouseenter', () => {
            safePlay();
          });

          card.addEventListener('mouseleave', () => {
            safePlay();
          });
        }
      }

      // Touch & Click: Tapping card or Watch Edit CTA opens Cinema Player modal
      card.addEventListener('click', () => openVideoModal(video));
      videoGrid.appendChild(card);
    });

    // Viewport Intersection Observer for seamless auto-streaming in grid
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const v = entry.target.querySelector('video.video-thumb-media');
          if (!v) return;
          if (entry.isIntersecting) {
            v.muted = true;
            const p = v.play();
            if (p && typeof p.catch === 'function') p.catch(() => {});
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.video-card-item').forEach((c) => observer.observe(c));
    }
  };

  renderVideoCards();

  // Category Filtering
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const allCards = document.querySelectorAll('.video-card-item');

      allCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCat === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 6. Interactive Video Player Modal with Animated Canvas & Native Video Support
  // --------------------------------------------------------------------------
  const videoModal = document.getElementById('videoModalBackdrop');
  const closeModalBtn = document.getElementById('closeVideoModalBtn');
  const modalVideoCanvas = document.getElementById('modalVideoCanvas');
  const modalVideoElem = document.getElementById('modalVideoElement');
  const modalUnmuteBtn = document.getElementById('modalUnmuteBtn');
  const playerSoundToggleBtn = document.getElementById('playerSoundToggleBtn');
  const modalTitle = document.getElementById('modalVideoTitle');
  const modalCat = document.getElementById('modalCategoryTag');
  const modalDesc = document.getElementById('modalProjectSummary');
  const modalSoftware = document.getElementById('modalSoftwareSpec');
  const modalRes = document.getElementById('modalResolutionSpec');
  const modalColor = document.getElementById('modalColorSpec');
  const modalSound = document.getElementById('modalSoundSpec');
  const playerPlayBtn = document.getElementById('playerPlayBtn');
  const playerProgressBar = document.getElementById('playerProgressBar');
  const playerProgressFill = document.getElementById('playerProgressFill');
  const playerTimeDisplay = document.getElementById('playerTimeDisplay');

  let isPlaying = false;
  let animFrameId = null;
  let currentVideoDurationSec = 45;
  let currentPlaybackSec = 0;
  let currentActiveVideo = null;

  // Sound UI helper
  const updateSoundUI = (isMuted) => {
    if (modalUnmuteBtn) {
      if (isMuted) {
        modalUnmuteBtn.classList.remove('hidden');
      } else {
        modalUnmuteBtn.classList.add('hidden');
      }
    }
    if (playerSoundToggleBtn) {
      playerSoundToggleBtn.textContent = isMuted ? '🔇' : '🔊';
      playerSoundToggleBtn.style.color = isMuted ? 'var(--text-muted)' : 'var(--gold-bright)';
      playerSoundToggleBtn.title = isMuted ? 'Click to Unmute' : 'Click to Mute';
    }
  };

  const toggleModalSound = () => {
    if (!modalVideoElem) return;
    try {
      modalVideoElem.muted = !modalVideoElem.muted;
      if (!modalVideoElem.muted) {
        modalVideoElem.volume = 1.0;
      }
      updateSoundUI(modalVideoElem.muted);
    } catch (err) {}
  };

  if (modalUnmuteBtn) {
    modalUnmuteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (modalVideoElem) {
        try {
          modalVideoElem.muted = false;
          modalVideoElem.volume = 1.0;
          const p = modalVideoElem.play();
          if (p && typeof p.catch === 'function') p.catch(() => {});
          updateSoundUI(false);
        } catch (err) {}
      }
    });
  }

  if (playerSoundToggleBtn) {
    playerSoundToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleModalSound();
    });
  }

  // Open Video Modal
  const openVideoModal = (video) => {
    currentActiveVideo = video;
    if (modalTitle) modalTitle.textContent = video.title;
    if (modalCat) modalCat.textContent = video.categoryName;
    if (modalDesc) modalDesc.textContent = video.desc;
    if (modalSoftware) modalSoftware.textContent = video.specs.software;
    if (modalRes) modalRes.textContent = video.specs.resolution;
    if (modalColor) modalColor.textContent = video.specs.colorGrade;
    if (modalSound) modalSound.textContent = video.specs.soundDesign;

    // Convert mm:ss to seconds
    const parts = video.duration.split(':').map(Number);
    currentVideoDurationSec = parts.length === 2 ? parts[0] * 60 + parts[1] : 45;
    currentPlaybackSec = 0;

    if (videoModal) {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    const hasRealVideo = Boolean(video.videoSrc || (video.thumb && video.thumb.endsWith('.mp4')));

    if (hasRealVideo) {
      if (modalVideoCanvas) modalVideoCanvas.style.display = 'none';
      if (modalVideoElem) {
        modalVideoElem.style.display = 'block';
        const vSrc = video.videoSrc || (video.thumb.endsWith('.mp4') ? video.thumb : '');
        modalVideoElem.src = vSrc;
        modalVideoElem.removeAttribute('poster');
        modalVideoElem.currentTime = 0;

        // Try unmuted audio first (user gesture from card click)
        try {
          modalVideoElem.muted = false;
          modalVideoElem.volume = 1.0;

          const modalPlayPromise = modalVideoElem.play();
          if (modalPlayPromise !== undefined && modalPlayPromise !== null) {
            modalPlayPromise.then(() => {
              updateSoundUI(false);
            }).catch(() => {
              // If browser blocks unmuted playback, fallback to muted with Unmute overlay
              try {
                modalVideoElem.muted = true;
                const mutedPlayPromise = modalVideoElem.play();
                if (mutedPlayPromise && typeof mutedPlayPromise.catch === 'function') {
                  mutedPlayPromise.catch(() => {});
                }
                updateSoundUI(true);
              } catch (e) {}
            });
          }
        } catch (playErr) {
          // Safe silent fallback
        }

        modalVideoElem.onloadedmetadata = () => {
          if (modalVideoElem.duration && !isNaN(modalVideoElem.duration)) {
            currentVideoDurationSec = modalVideoElem.duration;
          }
          updatePlaybackUI();
        };
        modalVideoElem.ontimeupdate = () => {
          currentPlaybackSec = modalVideoElem.currentTime;
          updatePlaybackUI();
        };
        modalVideoElem.onended = () => {
          setIsPlaying(false);
        };
      }
    } else {
      if (modalVideoElem) {
        modalVideoElem.pause();
        modalVideoElem.src = '';
        modalVideoElem.style.display = 'none';
      }
      if (modalUnmuteBtn) modalUnmuteBtn.classList.add('hidden');
      if (modalVideoCanvas) modalVideoCanvas.style.display = 'block';
      startCanvasSimulation(video);
    }

    setIsPlaying(true);
  };

  const closeVideoModal = () => {
    if (videoModal) {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (modalVideoElem) {
      modalVideoElem.pause();
      modalVideoElem.src = '';
      modalVideoElem.style.display = 'none';
    }
    if (modalUnmuteBtn) modalUnmuteBtn.classList.add('hidden');
    setIsPlaying(false);
    if (animFrameId) cancelAnimationFrame(animFrameId);
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // Play / Pause Simulation & Native Player Control
  const setIsPlaying = (state) => {
    isPlaying = state;
    if (playerPlayBtn) {
      playerPlayBtn.textContent = isPlaying ? '❚❚' : '▶';
    }
    if (modalVideoElem && modalVideoElem.style.display !== 'none') {
      if (isPlaying) {
        modalVideoElem.play().catch(() => {});
      } else {
        modalVideoElem.pause();
      }
    }
  };

  if (playerPlayBtn) {
    playerPlayBtn.addEventListener('click', () => {
      setIsPlaying(!isPlaying);
    });
  }

  if (modalVideoElem) {
    modalVideoElem.addEventListener('click', () => {
      setIsPlaying(!isPlaying);
    });
  }

  // Scrubber click
  if (playerProgressBar) {
    playerProgressBar.addEventListener('click', (e) => {
      const rect = playerProgressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      currentPlaybackSec = pct * currentVideoDurationSec;
      if (modalVideoElem && modalVideoElem.style.display !== 'none') {
        modalVideoElem.currentTime = currentPlaybackSec;
      }
      updatePlaybackUI();
    });
  }

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const updatePlaybackUI = () => {
    const pct = (currentPlaybackSec / currentVideoDurationSec) * 100;
    if (playerProgressFill) playerProgressFill.style.width = `${pct}%`;
    if (playerTimeDisplay) {
      playerTimeDisplay.textContent = `${formatTime(currentPlaybackSec)} / ${formatTime(currentVideoDurationSec)}`;
    }
  };

  // Canvas Cinema Simulator
  const startCanvasSimulation = (video) => {
    if (!modalVideoCanvas) return;
    const ctx = modalVideoCanvas.getContext('2d');
    modalVideoCanvas.width = 1280;
    modalVideoCanvas.height = 720;

    const bgImg = new Image();
    bgImg.crossOrigin = "anonymous";
    bgImg.src = video.thumb;

    let tick = 0;

    const drawFrame = () => {
      tick++;

      if (isPlaying) {
        currentPlaybackSec += 1 / 60;
        if (currentPlaybackSec >= currentVideoDurationSec) {
          currentPlaybackSec = 0;
        }
      }
      updatePlaybackUI();

      ctx.fillStyle = '#060608';
      ctx.fillRect(0, 0, 1280, 720);

      // Draw background frame
      if (bgImg.complete && bgImg.naturalWidth > 0) {
        ctx.save();
        const zoom = 1 + Math.sin(tick * 0.015) * 0.04;
        ctx.translate(640, 360);
        ctx.scale(zoom, zoom);
        ctx.drawImage(bgImg, -640, -360, 1280, 720);
        ctx.restore();
      }

      // Cinema Grade Vignette & Gold Lighting
      const gradient = ctx.createRadialGradient(640, 360, 200, 640, 360, 750);
      gradient.addColorStop(0, 'rgba(0,0,0,0.1)');
      gradient.addColorStop(0.7, 'rgba(7,7,8,0.5)');
      gradient.addColorStop(1, 'rgba(4,4,5,0.92)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1280, 720);

      // Anamorphic Gold & Magenta Lens Streak
      ctx.save();
      const streakY = 360 + Math.sin(tick * 0.03) * 60;
      const streakGrad = ctx.createLinearGradient(0, streakY - 8, 1280, streakY + 8);
      streakGrad.addColorStop(0, 'transparent');
      streakGrad.addColorStop(0.3, 'rgba(212, 175, 55, 0.15)');
      streakGrad.addColorStop(0.5, 'rgba(244, 232, 211, 0.4)');
      streakGrad.addColorStop(0.7, 'rgba(224, 40, 104, 0.2)');
      streakGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = streakGrad;
      ctx.fillRect(0, streakY - 3, 1280, 6);
      ctx.restore();

      // Film Scanlines
      ctx.fillStyle = 'rgba(255, 255, 255, 0.015)';
      for (let y = 0; y < 720; y += 4) {
        ctx.fillRect(0, y, 1280, 1);
      }

      // Audio Waveform Spectrum Overlay
      ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
      const bars = 48;
      const barW = 8;
      const spacing = 14;
      const startX = 640 - (bars * spacing) / 2;

      for (let i = 0; i < bars; i++) {
        const height = isPlaying ? (Math.sin(tick * 0.1 + i * 0.3) * 0.5 + 0.5) * 45 + 5 : 6;
        ctx.fillRect(startX + i * spacing, 630 - height, barW, height);
      }

      // Timecode watermark in video screen
      ctx.font = '700 16px "Space Grotesk", monospace';
      ctx.fillStyle = '#e6d5b8';
      ctx.fillText(`REC  ●  ${formatTime(currentPlaybackSec)}:24  //  PRORES 422HQ`, 40, 50);

      animFrameId = requestAnimationFrame(drawFrame);
    };

    if (animFrameId) cancelAnimationFrame(animFrameId);
    drawFrame();
  };

  // Hero Watch Showreel button trigger
  const watchShowreelBtn = document.getElementById('heroWatchShowreelBtn');
  if (watchShowreelBtn) {
    watchShowreelBtn.addEventListener('click', () => {
      openVideoModal(videoPortfolioData[0]);
    });
  }

  // --------------------------------------------------------------------------
  // 7. 3D Interactive Laptop Workstation & Suite Floating Icons Parallax
  // --------------------------------------------------------------------------
  const about3dStage = document.getElementById('about3dStage');
  const laptop3dModel = document.getElementById('laptop3dModel');
  const suiteIcons = document.querySelectorAll('.suite-icon-item');

  if (about3dStage && laptop3dModel) {
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    let isLaptopHovered = false;

    const baseRotX = 18;
    const baseRotY = -18;
    const baseRotZ = 3;

    const handleLaptopMouseMove = (e) => {
      const rect = about3dStage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Max tilt angle
      const maxTilt = 12;
      targetTiltY = Math.max(-maxTilt, Math.min(maxTilt, (mouseX / (rect.width / 2)) * maxTilt));
      targetTiltX = Math.max(-maxTilt, Math.min(maxTilt, -(mouseY / (rect.height / 2)) * maxTilt));
    };

    const updateLaptop3D = () => {
      const ease = isLaptopHovered ? 0.08 : 0.04;
      currentTiltX += (targetTiltX - currentTiltX) * ease;
      currentTiltY += (targetTiltY - currentTiltY) * ease;

      const finalRotX = baseRotX + currentTiltX;
      const finalRotY = baseRotY + currentTiltY;

      laptop3dModel.style.transform = `rotateX(${finalRotX.toFixed(2)}deg) rotateY(${finalRotY.toFixed(2)}deg) rotateZ(${baseRotZ}deg)`;

      // Parallax shifts on the 5 suite floating icons
      suiteIcons.forEach((icon) => {
        const depth = parseFloat(icon.getAttribute('data-depth')) || 1.4;
        const shiftX = currentTiltY * depth * 2.4;
        const shiftY = -currentTiltX * depth * 2.4;
        icon.style.setProperty('--suite-px', `${shiftX.toFixed(1)}px`);
        icon.style.setProperty('--suite-py', `${shiftY.toFixed(1)}px`);
      });

      requestAnimationFrame(updateLaptop3D);
    };

    about3dStage.addEventListener('mouseenter', () => {
      isLaptopHovered = true;
    });

    about3dStage.addEventListener('mousemove', (e) => {
      isLaptopHovered = true;
      handleLaptopMouseMove(e);
    });

    about3dStage.addEventListener('mouseleave', () => {
      isLaptopHovered = false;
      targetTiltX = 0;
      targetTiltY = 0;
    });

    // Touch support for mobile
    about3dStage.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        isLaptopHovered = true;
        handleLaptopMouseMove(e.touches[0]);
      }
    }, { passive: true });

    about3dStage.addEventListener('touchend', () => {
      isLaptopHovered = false;
      targetTiltX = 0;
      targetTiltY = 0;
    });

    requestAnimationFrame(updateLaptop3D);
  }

  // --------------------------------------------------------------------------
  // 8. Animated Statistics Counters
  // --------------------------------------------------------------------------
  const counterElements = document.querySelectorAll('.stat-number[data-target]');
  let hasCounted = false;

  const animateCounters = () => {
    if (hasCounted) return;
    counterElements.forEach((el) => {
      const target = +el.getAttribute('data-target');
      let count = 0;
      const step = Math.max(1, Math.floor(target / 40));

      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = count;
        }
      }, 30);
    });
    hasCounted = true;
  };

  const statsSection = document.querySelector('.hero-bottom-stats-ribbon');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    }, { threshold: 0.2 });
    observer.observe(statsSection);
  } else {
    animateCounters();
  }

  // --------------------------------------------------------------------------
  // 9. Real-Time Contact & Booking Form with Toast Feedback
  // --------------------------------------------------------------------------
  const bookingForm = document.getElementById('projectBookingForm');
  const luxuryToast = document.getElementById('luxuryToast');

  const showToast = (message) => {
    if (!luxuryToast) return;
    luxuryToast.querySelector('.toast-msg').textContent = message;
    luxuryToast.classList.add('show');
    playLuxuryTone(780, 'sine', 0.15, 0.06);

    setTimeout(() => {
      luxuryToast.classList.remove('show');
    }, 4500);
  };

  if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('clientName');
      const emailInput = document.getElementById('clientEmail');
      const projectType = document.getElementById('projectType');
      const budgetRange = document.getElementById('budgetRange');
      const projectDetails = document.getElementById('projectDetails');
      const submitBtn = bookingForm.querySelector('.form-submit-btn');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const service = projectType ? projectType.value : '';
      const budget = budgetRange ? budgetRange.value : '';
      const vision = projectDetails ? projectDetails.value.trim() : '';

      if (!name || !email) {
        showToast("⚠️ Please fill in your name and email address.");
        return;
      }

      // UI State: Loading & Disabled
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '<span>Send Project Inquiry</span>';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';
        submitBtn.innerHTML = `
          <span>Sending Inquiry...</span>
          <svg class="spin-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
        `;
      }

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, service, budget, vision }),
        });

        let result = {};
        const contentType = response.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          try {
            result = await response.json();
          } catch (parseErr) {
            console.warn('Could not parse response JSON:', parseErr);
            result = {};
          }
        } else {
          const rawText = await response.text().catch(() => '');
          if (rawText) {
            result = { error: rawText.slice(0, 150) };
          }
        }

        if (response.ok && result.success) {
          showToast(`✦ Project Inquiry sent successfully to Akshay! Thank you ${name}.`);
          bookingForm.reset();
        } else {
          const statusPrefix = response.status ? `[HTTP ${response.status}] ` : '';
          const errorMessage = result.error || result.message || response.statusText || 'Failed to deliver message.';
          console.error(`Contact Form API error (Status ${response.status}):`, result);
          showToast(`⚠️ ${statusPrefix}${errorMessage}`);
        }
      } catch (err) {
        console.error('Submission network error:', err);
        const errMsg = err && err.message ? err.message : 'Network failure';
        showToast(`⚠️ Network error (${errMsg}). Please email directly at Mrakshay31@gmail.com.`);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.style.cursor = 'pointer';
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 10. Live Local Clock Widget in Footer
  // --------------------------------------------------------------------------
  const clockElement = document.getElementById('liveLocalClock');
  const updateClock = () => {
    if (!clockElement) return;
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds} LOCAL TIME • OPEN FOR Q1/Q2 2026 PROJECTS`;
  };
  setInterval(updateClock, 1000);
  updateClock();

  // --------------------------------------------------------------------------
  // 11. Back to Top Button
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 12. 3D Profile Centerpiece & Floating Software Icons Parallax
  // --------------------------------------------------------------------------
  const heroPortraitWrap = document.getElementById('heroPortraitWrap');
  const portrait3dCard = document.getElementById('portrait3dCard');
  const portraitGlare = document.getElementById('portraitGlare');
  const floatingIcons = document.querySelectorAll('.floating-icon-item');

  if (heroPortraitWrap && portrait3dCard) {
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let isHovering = false;

    const handleMouseMove = (e) => {
      const rect = heroPortraitWrap.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Calculate tilt degrees (clamped to max ±15 deg)
      const maxTilt = 15;
      targetRotateY = Math.max(-maxTilt, Math.min(maxTilt, (mouseX / (rect.width / 2)) * maxTilt));
      targetRotateX = Math.max(-maxTilt, Math.min(maxTilt, -(mouseY / (rect.height / 2)) * maxTilt));

      // Dynamic glare positioning
      if (portraitGlare) {
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        portraitGlare.style.setProperty('--glare-x', `${glareX}%`);
        portraitGlare.style.setProperty('--glare-y', `${glareY}%`);
        portraitGlare.style.setProperty('--glare-opacity', '0.65');
      }
    };

    const update3DTransform = () => {
      const ease = isHovering ? 0.08 : 0.04;
      currentRotateX += (targetRotateX - currentRotateX) * ease;
      currentRotateY += (targetRotateY - currentRotateY) * ease;

      portrait3dCard.style.transform = `perspective(1200px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateZ(10px)`;

      // Apply differential 3D parallax to floating software icons
      floatingIcons.forEach((icon) => {
        const depth = parseFloat(icon.getAttribute('data-depth')) || 1.2;
        const iconParallaxX = currentRotateY * depth * 2.2;
        const iconParallaxY = -currentRotateX * depth * 2.2;
        icon.style.setProperty('--icon-px', `${iconParallaxX.toFixed(1)}px`);
        icon.style.setProperty('--icon-py', `${iconParallaxY.toFixed(1)}px`);
      });

      requestAnimationFrame(update3DTransform);
    };

    heroPortraitWrap.addEventListener('mouseenter', () => {
      isHovering = true;
    });

    heroPortraitWrap.addEventListener('mousemove', (e) => {
      isHovering = true;
      handleMouseMove(e);
    });

    heroPortraitWrap.addEventListener('mouseleave', () => {
      isHovering = false;
      targetRotateX = 0;
      targetRotateY = 0;
      if (portraitGlare) {
        portraitGlare.style.setProperty('--glare-opacity', '0');
      }
    });

    // Touch support for mobile interaction
    heroPortraitWrap.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        isHovering = true;
        handleMouseMove(e.touches[0]);
      }
    }, { passive: true });

    heroPortraitWrap.addEventListener('touchend', () => {
      isHovering = false;
      targetRotateX = 0;
      targetRotateY = 0;
      if (portraitGlare) {
        portraitGlare.style.setProperty('--glare-opacity', '0');
      }
    });

    // Start 3D rendering loop
    requestAnimationFrame(update3DTransform);
  }

  // --------------------------------------------------------------------------
  // Tools Section: 3D Parallax Tilt, Spotlight & Staggered Scroll Reveal
  // --------------------------------------------------------------------------
  function initToolCards3D() {
    const toolsGrid = document.querySelector('.tools-grid-circular');
    if (!toolsGrid) return;

    // 1. Staggered 3D Scroll Reveal using IntersectionObserver
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            toolsGrid.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      observer.observe(toolsGrid);
    } else {
      toolsGrid.classList.add('is-revealed');
    }

    // 2. Real-Time 3D Tilt Physics & Dynamic Spotlight
    const toolCards = toolsGrid.querySelectorAll('.tool-circle-card');
    toolCards.forEach((card) => {
      const accent = card.getAttribute('data-accent');
      const glow = card.getAttribute('data-glow');
      if (accent) card.style.setProperty('--card-accent', accent);
      if (glow) card.style.setProperty('--card-glow', glow);

      let isHovered = false;
      let rafId = null;

      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate smooth 3D tilt angles (up to +/- 14 degrees)
        const rotateX = -((y - centerY) / centerY) * 14;
        const rotateY = ((x - centerX) / centerX) * 14;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.06, 1.06, 1.06) translateZ(10px)`;
        });
      };

      const handleMouseEnter = (e) => {
        isHovered = true;
        card.classList.add('is-tilting');
        if (typeof playLuxuryTone === 'function') {
          playLuxuryTone(720, 'sine', 0.03, 0.015);
        }
        handleMouseMove(e);
      };

      const handleMouseLeave = () => {
        isHovered = false;
        if (rafId) cancelAnimationFrame(rafId);
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)`;
        setTimeout(() => {
          if (!isHovered) {
            card.classList.remove('is-tilting');
            card.style.transform = '';
          }
        }, 280);
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Touch events for mobile devices
      card.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
          isHovered = true;
          card.classList.add('is-tilting');
          handleMouseMove(e.touches[0]);
        }
      }, { passive: true });

      card.addEventListener('touchend', () => {
        handleMouseLeave();
      });
    });
  }

  // --------------------------------------------------------------------------
  // Table of Contents Section: Lightweight, High-Performance Scroll Reveal
  // --------------------------------------------------------------------------
  function initTableOfContents() {
    const tocGrid = document.querySelector('.toc-grid-container');
    if (!tocGrid) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tocGrid.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

      observer.observe(tocGrid);
    } else {
      tocGrid.classList.add('is-revealed');
    }
  }

  initToolCards3D();
  initTableOfContents();
});
