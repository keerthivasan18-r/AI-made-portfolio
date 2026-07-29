import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { GlassCard } from '../common/GlassCard';
import { SocialIcon } from '../common/SocialIcon';
import { ContactForm } from './ContactForm';
import { profileData } from '../../data/profileData';
import { socialLinks } from '../../data/socialData';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <SectionTitle
          badgeText="Initiate Conversation"
          title="Get In Touch"
          subtitle="Interested in hiring, collaborating on full-stack projects, or reviewing code repositories? Let's connect."
        />

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-column reveal-on-scroll">
            <GlassCard className="contact-card">
              <h3 className="contact-card-heading">Contact Details</h3>
              <p className="contact-card-sub">Feel free to reach out directly via email, phone, or professional networks.</p>

              <div className="contact-details-list">
                <a href={`mailto:${profileData.contactInfo.email}`} className="contact-detail-item">
                  <div className="detail-icon-box">✉</div>
                  <div className="detail-text">
                    <span className="detail-label">Email Address</span>
                    <span className="detail-value">{profileData.contactInfo.email}</span>
                  </div>
                </a>

                <a href={`tel:${profileData.contactInfo.phone.replace(/\s+/g, '')}`} className="contact-detail-item">
                  <div className="detail-icon-box">📞</div>
                  <div className="detail-text">
                    <span className="detail-label">Phone / WhatsApp</span>
                    <span className="detail-value">{profileData.contactInfo.phone}</span>
                  </div>
                </a>

                <div className="contact-detail-item">
                  <div className="detail-icon-box">📍</div>
                  <div className="detail-text">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{profileData.contactInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="contact-socials-group">
                <span className="socials-label">Connect on Social Platforms:</span>
                <div className="socials-icons-row">
                  {socialLinks.map((s) => (
                    <SocialIcon key={s.name} name={s.name} url={s.url} icon={s.icon} />
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column reveal-on-scroll reveal-delay-2">
            <GlassCard className="contact-card">
              <h3 className="contact-card-heading">Send a Direct Message</h3>
              <ContactForm />
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
