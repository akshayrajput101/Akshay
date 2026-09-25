'use client';

import React from 'react';

export default function ContactForm() {
  return (
    <div className="contact-action-panel">
      <div className="contact-action-panel-header">
        <span className="action-panel-badge">
          <span className="status-pulse-dot"></span>
          FAST-TRACK DIRECT ACCESS
        </span>
        <h3 className="action-panel-title">START YOUR PROJECT INSTANTLY</h3>
        <p className="action-panel-subtitle">
          Zero friction, no lengthy forms. Connect directly with Akshay via Phone or WhatsApp for immediate consultation, turnaround estimates, and custom rates.
        </p>
      </div>

      <div className="direct-cards-stack">
        {/* Card 1: Direct Call */}
        <a href="tel:+919528667038" className="direct-action-card call-card" data-cursor="CALL">
          <div className="action-card-glow"></div>
          <div className="action-card-inner">
            <div className="action-card-icon-box call-icon-box">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="action-card-text">
              <div className="action-card-headline">
                <span className="action-card-label">Call Directly</span>
                <span className="action-badge-pill">Direct Line</span>
              </div>
              <span className="action-card-subtext">Get an instant response</span>
              <span className="action-card-meta">+91 9528667038 • Tap to call now</span>
            </div>
            <div className="action-card-arrow-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </a>

        {/* Card 2: WhatsApp Chat */}
        <a
          href="https://wa.me/919528667038?text=Hi%20Akshay,%20I%20want%20to%20discuss%20a%20video%20project!"
          target="_blank"
          rel="noopener noreferrer"
          className="direct-action-card whatsapp-card"
          data-cursor="CHAT"
        >
          <div className="action-card-glow"></div>
          <div className="action-card-inner">
            <div className="action-card-icon-box whatsapp-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.58L5.06 16.27C4.24 14.95 3.81 13.45 3.81 11.91C3.81 7.37 7.5 3.69 12.04 3.69C16.58 3.69 20.27 7.37 20.27 11.92C20.27 16.46 16.58 20.15 12.04 20.15ZM16.56 14.37C16.31 14.25 15.09 13.65 14.86 13.56C14.64 13.48 14.47 13.44 14.31 13.68C14.14 13.93 13.66 14.49 13.52 14.65C13.37 14.81 13.23 14.84 12.98 14.71C12.73 14.59 11.92 14.32 10.97 13.47C10.23 12.81 9.73 12 9.58 11.75C9.44 11.51 9.57 11.37 9.69 11.25C9.8 11.14 9.94 10.96 10.06 10.82C10.18 10.68 10.22 10.57 10.3 10.41C10.38 10.24 10.34 10.1 10.28 9.98C10.22 9.85 9.73 8.65 9.53 8.16C9.33 7.68 9.13 7.74 8.98 7.74H8.51C8.34 7.74 8.08 7.8 7.85 8.05C7.63 8.3 7 8.89 7 10.09C7 11.29 7.87 12.45 8 12.61C8.12 12.77 9.72 15.25 12.18 16.31C12.76 16.56 13.22 16.71 13.57 16.82C14.16 17.01 14.7 16.98 15.12 16.92C15.6 16.85 16.56 16.34 16.76 15.77C16.96 15.2 16.96 14.71 16.9 14.61C16.84 14.51 16.69 14.45 16.44 14.33L16.56 14.37Z"/>
              </svg>
            </div>
            <div className="action-card-text">
              <div className="action-card-headline">
                <span className="action-card-label">Chat on WhatsApp</span>
                <span className="action-badge-pill whatsapp-pill">Fastest Response</span>
              </div>
              <span className="action-card-subtext">Share your project details</span>
              <span className="action-card-meta">Direct chat • Reference links &amp; footage</span>
            </div>
            <div className="action-card-arrow-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </a>
      </div>

      {/* Trust / Guarantee Bar */}
      <div className="action-panel-trust">
        <div className="trust-item">
          <span className="trust-bullet">✦</span>
          <span>Immediate 1-on-1 Consultation</span>
        </div>
        <div className="trust-item">
          <span className="trust-bullet">✦</span>
          <span>Replies in &lt;15 Minutes</span>
        </div>
        <div className="trust-item">
          <span className="trust-bullet">✦</span>
          <span>Worldwide Remote Clients</span>
        </div>
      </div>
    </div>
  );
}
