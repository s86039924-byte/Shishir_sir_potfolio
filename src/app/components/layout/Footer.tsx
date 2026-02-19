'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LOGO } from '@/lib/constants';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="cta">
      <div className="container footer-content">
        {/* Branding & Contact */}
        <div className="footer-brand">
          <Image
            src={LOGO}
            alt="IIT Study Forum"
            width={120}
            height={120}
            className="footer-logo-img"
          />
          <p className="footer-description">
            Premier coaching institute for Foundation, Olympiad, NEET, and JEE preparation.
            Empowering students with excellence since 1999.
          </p>

          <div className="footer-contact-info">
            <a href="mailto:contact@iitstudyforum.com" className="contact-item">
              <span className="contact-icon">✉</span>
              contact@iitstudyforum.com
            </a>
            <a href="tel:+91XXXXXXXXXX" className="contact-item">
              <span className="contact-icon">✆</span>
              +91-XXXXXXXXXX
            </a>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              Saharanpur, Uttar Pradesh, India
            </div>
          </div>

          <div className="footer-socials">
            <a href="#" className="social-btn" aria-label="Facebook">f</a>
            <a href="#" className="social-btn" aria-label="Instagram">ig</a>
            <a href="#" className="social-btn" aria-label="YouTube">yt</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-column-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link href="/courses" className="footer-link">Courses</Link></li>
            <li><Link href="/admission-test" className="footer-link">Scholarship</Link></li>
            <li><Link href="/testimonials" className="footer-link">Testimonials</Link></li>
            <li><Link href="/#contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-column">
          <h3 className="footer-column-title">Our Courses</h3>
          <ul className="footer-links">
            <li><Link href="/courses#foundation" className="footer-link">Foundation</Link></li>
            <li><Link href="/courses#olympiad" className="footer-link">Olympiad</Link></li>
            <li><Link href="/courses#neet" className="footer-link">NEET</Link></li>
            <li><Link href="/courses#jee" className="footer-link">IIT-JEE</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3 className="footer-column-title">Legal</h3>
          <ul className="footer-links">
            <li><Link href="/terms-and-conditions" className="footer-link">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            © {new Date().getFullYear()} IIT Study Forum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}