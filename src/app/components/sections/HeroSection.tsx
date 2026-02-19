'use client';

import React, { useMemo } from 'react';
import { TickerText } from './TickerText';
import { driveProxy } from '@/lib/drive';
import { resultsData, type ResultCard } from '@/lib/resultsData';

export default function HeroSection() {
  /**
   * TODO: Replace the `img` values below with your real Google Drive links
   * for topper photos or result posters. You can add or remove cards freely.
   */
  const cards: ResultCard[] = useMemo(() => resultsData, []);


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
