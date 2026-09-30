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
      title: "High-Retention Dynamic Visual Reel",
      category: "reels",
      categoryName: "Reels & Shorts (9:16)",
      duration: "1:10",
      views: "2.8M Views",
      aspect: "9:16 VERTICAL",
      isVertical: true,
      client: "Featured Creator",
      videoSrc: "/six.mp4",
      thumb: "/six.mp4",
      desc: "Dynamic short-form showcase edit with kinetic animated typography, seamless visual transitions, and high-retention sound design.",
      specs: {
        software: "Premiere Pro, After Effects, CapCut Pro",
        resolution: "1080x1920 Vertical 60fps",
        colorGrade: "High-Contrast Vibrant Pop",
        soundDesign: "Micro-SFX & Rhythm Syncing",
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
      title: "Cinematic Narrative & Commercial Visual Cut",
      category: "youtube",
      categoryName: "YouTube Long-Form",
      duration: "1:02",
      views: "1.4M Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "Creative Partner",
      videoSrc: "/seven.mp4",
      thumb: "/seven.mp4",
      desc: "Dynamic cinematic edit with seamless visual storytelling, stylized color grading, and custom audio sound design.",
      specs: {
        software: "Premiere Pro, After Effects, DaVinci Resolve",
        resolution: "4K UHD 60fps",
        colorGrade: "Film Emulation & Vibrant Pop",
        soundDesign: "Custom Foley & Audio Mastering",
        turnaround: "3 Days"
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
      id: 7,
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
      id: 8,
      title: "Urban Velocity Cinematic Motion Reel",
      category: "cinematic",
      categoryName: "Cinematic & Music",
      duration: "0:18",
      views: "2.1M Views",
      aspect: "16:9 4K UHD",
      isVertical: false,
      client: "Vanguard Syndicate",
      videoSrc: "/eight.mp4",
      thumb: "/eight.mp4",
      desc: "High-energy cinematic cut featuring dynamic night aesthetics, precision speed ramping, and immersive audio sound design.",
      specs: {
        software: "DaVinci Resolve Studio, Premiere Pro",
        resolution: "4K DCI 60fps",
        colorGrade: "Moody Neon Contrast & Film Emulation",
        soundDesign: "Immersive Spatial SFX & Sound Design",
        turnaround: "3 Days"
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
      `;

      if (isVideoMedia) {
        const videoElem = card.querySelector('video.video-thumb-media');
        const playOverlay = card.querySelector('.video-hover-overlay');
        const watchCta = card.querySelector('.video-watch-cta');
        let isPlayingInline = false;

        if (videoElem) {
          videoElem.muted = true;
          videoElem.defaultMuted = true;

          const safePlayPreview = () => {
            if (isPlayingInline) return;
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
            safePlayPreview();
          }, { once: true });

          videoElem.addEventListener('canplay', safePlayPreview);
          safePlayPreview();

          card.addEventListener('mouseenter', () => {
            if (!isPlayingInline) safePlayPreview();
          });

          card.addEventListener('mouseleave', () => {
            if (!isPlayingInline) safePlayPreview();
          });

          // Inline Playback Logic:
          // Unmutes, enables native controls, hides play overlay & thumbnail badges,
          // and seamlessly continues video playback from current timestamp
          const startInlinePlayback = (e) => {
            if (e) e.stopPropagation();
            if (isPlayingInline) return;

            // Pause/mute any other inline video for optimal performance & clean audio
            document.querySelectorAll('.video-card-item.is-playing-inline').forEach((otherCard) => {
              if (otherCard !== card) {
                const otherVid = otherCard.querySelector('video.video-thumb-media');
                if (otherVid) {
                  otherVid.controls = false;
                  otherVid.muted = true;
                }
                otherCard.classList.remove('is-playing-inline');
                const otherBtn = otherCard.querySelector('.video-watch-cta');
                if (otherBtn) otherBtn.textContent = 'Watch Edit →';
              }
            });

            // Reset video to the very beginning (0:00) for a fresh start with audio & controls
            try {
              videoElem.currentTime = 0;
            } catch (err) {}

            isPlayingInline = true;
            card.classList.add('is-playing-inline');

            // Unmute and enable native video controls
            videoElem.muted = false;
            videoElem.controls = true;

            // Play smoothly from 0:00 with sound
            const playPromise = videoElem.play();
            if (playPromise !== undefined && playPromise !== null) {
              playPromise.catch(() => {
                // Safe fallback if browser security restricts unmuted autoplay
                videoElem.muted = true;
                videoElem.play().catch(() => {});
              });
            }

            if (watchCta) {
              watchCta.textContent = 'Playing Inline 🔊';
            }
          };

          if (playOverlay) {
            playOverlay.addEventListener('click', startInlinePlayback);
            playOverlay.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                startInlinePlayback(e);
              }
            });
          }

          card.addEventListener('click', (e) => {
            if (e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'video' && isPlayingInline) return;
            if (!isPlayingInline) {
              startInlinePlayback(e);
            }
          });

          if (watchCta) {
            watchCta.addEventListener('click', startInlinePlayback);
          }
        }
      }

      videoGrid.appendChild(card);
    });

    // Viewport Intersection Observer for seamless auto-streaming in grid
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const v = entry.target.querySelector('video.video-thumb-media');
          if (!v) return;
          // If already playing inline with sound, don't interrupt or re-mute
          if (entry.target.classList.contains('is-playing-inline')) return;
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

  // Hero Watch Showreel button trigger -> Smooth scroll to showcase & play first reel inline
  const watchShowreelBtn = document.getElementById('heroWatchShowreelBtn');
  if (watchShowreelBtn) {
    watchShowreelBtn.addEventListener('click', () => {
      const showcaseSection = document.getElementById('video-showcase');
      if (showcaseSection) {
        showcaseSection.scrollIntoView({ behavior: 'smooth' });
      }
      const firstCardPlay = document.querySelector('.video-card-item .video-hover-overlay');
      if (firstCardPlay) {
        setTimeout(() => firstCardPlay.click(), 600);
      }
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
