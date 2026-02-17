'use client';

import React, { useMemo } from 'react';
import { TickerText } from './TickerText';
import { driveProxy } from '@/lib/drive';

type ResultCard = {
  name: string;   // e.g. "Prakhar Aggarwal"
  label: string;  // e.g. "Percentile" or "All India Rank"
  value: string;  // e.g. "99.85" or "AIR 22"
  img: string;    // Google Drive link or any image URL
};

export default function HeroSection() {
  /**
   * TODO: Replace the `img` values below with your real Google Drive links
   * for topper photos or result posters. You can add or remove cards freely.
   */
  const cards: ResultCard[] = useMemo(
    () => [
      {
        name: 'Srishti Aggarwal',
        label: 'Percentile',
        value: '99.13',
        img: 'https://drive.google.com/file/d/1c9Z-zDGhBwUSorkNju8P7ch6FtcYtlw-/view?usp=sharing',
      },
      {
        name: 'Aditya Kadanga',
        label: 'Percentile',
        value: '96.74',
        img: 'https://drive.google.com/file/d/1yNcvdzKNMaGpNKPd3JWYnzkkZU9YF-PT/view?usp=sharing',
      },
      {
        name: 'Dhruv Maheshwari',
        label: 'Percentile',
        value: '96.79',
        img: 'https://drive.google.com/file/d/1FEGwxN-fm6bWCQpRIh1aaFqzJ9WtYtoM/view?usp=sharing',
      },
            {
        name: 'Anmol yadav',
        label: 'Percentile',
        value: '99.65',
        img: 'https://drive.google.com/file/d/1ucvP3SOVxVu4bgptmxSSzCsIYZlVO0bJ/view?usp=sharing',
      },
                  {
        name: 'Mukul Saini',
        label: 'Percentile',
        value: '99.6',
        img: 'https://drive.google.com/file/d/1TxXRZfY2mOwzSuaAkbnwfL31YhJmp1Gr/view?usp=sharing',
      },
                  {
        name: 'Ansh Goyal',
        label: 'Percentile',
        value: '99.23',
        img: 'https://drive.google.com/file/d/1KBmgdEMuWDYeS7vhM9NpOSLYOEoNkqXQ/view?usp=sharing',
      },
      {
        name: 'Nitin',
        label: 'AIR',
        value: '1198',
        img: 'https://drive.google.com/file/d/1eQHqQdEnUcLixlVk3dsI3fvWLyYVIwUx/view?usp=sharing',
      },
      {
        name: 'Ankit Aggarwal',
        label: 'AIR',
        value: '22',
        img: 'https://drive.google.com/file/d/1lY1eqy81W4wYNt4HvbTP5XFf3Pda1AHa/view?usp=sharing',
      },
      {
        name: 'Prakhar Aggarwal',
        label: 'Percentile',
        value: '99.86',
        img: 'https://drive.google.com/file/d/1AGNecsn0AVSXbmhHp_zfoBpn3v5I_AVG/view?usp=sharing',
      },
      {
        name: 'Ajay Sharma',
        label: 'AIR',
        value: '982',
        img: 'https://drive.google.com/file/d/112r0Zvp-abTuilGgoT1faqPKR3JfP56m/view?usp=sharing',
      },
      {
        name: 'Anuj Arora',
        label: 'AIR',
        value: '501',
        img: 'https://drive.google.com/file/d/1vwLTCcytUkD_iR5WRtlL96ipTya33Ulw/view?usp=sharing',
      },
      {
        name: 'Chirag Jain',
        label: 'AIR',
        value: '529',
        img: 'https://drive.google.com/file/d/1Y5H7o20qvvtLoTUqt6U61C0GloRWMbgM/view?usp=sharing',
      },
    ],
    []
  );

  return (
    <section
      id="home"
      className="section hero-section rw-hero"
      aria-labelledby="hero-heading"
    >
      <div className="container hero-content">
        {/* LEFT: Institute positioning */}
        <div className="rw-hero__left hero-copy">
          <p className="hero-eyebrow">
            Since 1999 · Saharanpur&apos;s Premier IIT-JEE Institute
          </p>

          <h1 id="hero-heading" className="hero-title">
            <span className="hero-title__brand">IIT Study Forum</span>{' '}
            <span className="hero-title__ticker">
              <TickerText />
            </span>
          </h1>

          <p className="hero-subtitle">
            Founded by IIT alumni, IIT Study Forum (IITSF) has been the
            benchmark for IIT-JEE preparation in Saharanpur for over two
            decades. With a legacy of top AIRs and 99+ percentilers, we combine
            deep conceptual teaching, disciplined practice and personal
            mentoring to turn aspirants into rankers.
          </p>

          <div className="hero-pill-row">
            <div className="hero-pill">
              <span className="hero-pill__dot" /> 25+ Years of Excellence
            </div>
            <div className="hero-pill">
              <span className="hero-pill__dot" /> AIR 22, 268, 299, 501, 529,
              591, 959, 982 &amp; many more
            </div>
            <div className="hero-pill">
              <span className="hero-pill__dot" /> IIT Delhi &amp; IIT Roorkee
              Alumni Faculty
            </div>
          </div>
        </div>

        {/* RIGHT: Toppers rail */}
        <aside
          className="rw-hero__right"
          aria-label="Top results from IIT Study Forum"
        >
          <div className="rw-rail">
            <div className="rw-rail__viewport">
              <div className="rw-rail__track">
                {cards.map((c, idx) => (
                  <article
                    key={`${c.name}-${idx}`}
                    className="result-card result-card--result rw-rail__item"
                  >
                    <div className="result-card__body">
                      <div className="result-card__left">
                        <div className="result-card__name">{c.name}</div>
                        <div className="result-card__meta">{c.label}</div>
                        <div className="result-card__rank">{c.value}</div>
                      </div>

                      <div className="result-card__img-wrap" aria-hidden="true">
                        <img
                          src={driveProxy(c.img)}
                          alt={c.name}
                          className="result-card__media"
                          loading={idx < 2 ? 'eager' : 'lazy'}
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
