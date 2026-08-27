'use client';

import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  vision: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'Reels & TikTok Video Editing',
    budget: '$1,000 – $2,500',
    vision: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let result: any = {};
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
        setStatus({
          message: `✦ Project Inquiry sent successfully to Akshay! Thank you ${formData.name}.`,
          isError: false,
        });
        // Clear Form State
        setFormData({
          name: '',
          email: '',
          service: 'Reels & TikTok Video Editing',
          budget: '$1,000 – $2,500',
          vision: '',
        });
      } else {
        const statusPrefix = response.status ? `[HTTP ${response.status}] ` : '';
        const errorMessage = result.error || result.message || response.statusText || 'Failed to send inquiry.';
        console.error(`Contact Form API error (Status ${response.status}):`, result);
        setStatus({
          message: `⚠️ ${statusPrefix}${errorMessage}`,
          isError: true,
        });
      }
    } catch (err: any) {
      console.error('Submission network error:', err);
      const errMsg = err && err.message ? err.message : 'Network failure';
      setStatus({
        message: `⚠️ Network error (${errMsg}). Please email directly at Mrakshay31@gmail.com.`,
        isError: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form-card">
      <form id="projectBookingForm" className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-field">
            <label htmlFor="clientName">Your Name *</label>
            <input
              type="text"
              id="clientName"
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="clientEmail">Email Address *</label>
            <input
              type="email"
              id="clientEmail"
              placeholder="alex@brand.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-field">
            <label htmlFor="projectType">Project Service</label>
            <select
              id="projectType"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Reels & TikTok Video Editing">Reels & TikTok Editing (9:16)</option>
              <option value="YouTube Long-Form Editing">YouTube Long-Form Editing</option>
              <option value="Brand & Commercial Video">Brand Commercial / Promo</option>
              <option value="Motion Graphics & VFX">Motion Graphics & VFX</option>
              <option value="High-CTR Thumbnail Package">High-CTR Thumbnail Design</option>
              <option value="Monthly Creative Retainer">Monthly Video & Design Retainer</option>
              <option value="Other Custom Project">Other Custom Project</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="budgetRange">Estimated Budget</label>
            <select
              id="budgetRange"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="$1,000 – $2,500">$1,000 – $2,500</option>
              <option value="$2,500 – $5,000">$2,500 – $5,000</option>
              <option value="$5,000 – $10,000+">$5,000 – $10,000+</option>
              <option value="Monthly Retainer ($3,000+/mo)">Monthly Retainer ($3,000+/mo)</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="projectDetails">Project Vision & Timeline</label>
          <textarea
            id="projectDetails"
            placeholder="Tell me about your channel/brand, footage volume, reference links, and deadline..."
            rows={4}
            value={formData.vision}
            onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
          />
        </div>

        {status && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontFamily: 'monospace',
              color: status.isError ? '#ff5f56' : '#d4af37',
              background: status.isError ? 'rgba(255, 95, 86, 0.12)' : 'rgba(212, 175, 55, 0.12)',
              border: `1px solid ${status.isError ? 'rgba(255, 95, 86, 0.35)' : 'rgba(212, 175, 55, 0.35)'}`,
              marginTop: '6px',
            }}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          className="form-submit-btn"
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.75 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer',
          }}
        >
          <span>{isLoading ? 'Sending Inquiry...' : 'Send Project Inquiry'}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}
