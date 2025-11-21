'use client';

import React, { useEffect, useRef } from 'react';
import { driveProxy } from '@/lib/drive';

function useCountUp() {
  const started = useRef(false);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-count]')
    );
    if (!('IntersectionObserver' in window) || targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (started.current) return;
        if (entries.some((e) => e.isIntersecting)) {
          started.current = true;

          targets.forEach((el) => {
            const target = Number(el.dataset.count || '0');
            const duration = 900;
            const start = performance.now();

            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const value = Math.floor(target * progress);
              el.textContent = value.toString();
              if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
          });

          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}

export default function FoundersSection() {
  useCountUp();

  return (
    <section id="founders" className="founders section">
      <div className="container">
        {/* About IIT Study Forum */}
        <div className="section-title f-head">
          <div className="title-text">About IIT Study Forum</div>
          <div className="title-underline" />
          <p className="f-sub">IITSF – Where Aspirants Are Made Rankers.</p>
        </div>

        <div className="about-iitsf">
          <div className="about-iitsf__text">
            <h3 className="about-iitsf__eyeline">
              Why Parents &amp; Students Trust IITSF
            </h3>
            <p>
              Founded in 1999 by visionary educator Er. Shishir Mohta (IIT
              Delhi), IIT Study Forum (IITSF) has been Saharanpur&apos;s premier
              institute for IIT-JEE preparation. For over two decades, IITSF has
              consistently produced exceptional ranks while building strong
              concepts and confidence in students.
            </p>
            <p>
              At IITSF, students benefit from regular IIT-JEE level classes,
              focused doubt-solving, frequent mock tests and a nurturing yet
              competitive environment. The mission is simple – to help
              disciplined aspirants secure a seat in the IITs through clarity of
              concepts, rigorous practice and personal mentoring.
            </p>
          </div>

          <ul className="about-iitsf__highlights">
            <li>
              <span className="about-iitsf__icon">🎯</span>
              <div className="about-iitsf__highlight-body">
                <div className="about-iitsf__highlight-title">25+ years</div>
                <p className="about-iitsf__highlight-text">
                  of dedicated IIT-JEE mentoring in Saharanpur.
                </p>
              </div>
            </li>

            <li>
              <span className="about-iitsf__icon">🏆</span>
              <div className="about-iitsf__highlight-body">
                <div className="about-iitsf__highlight-title">
                  Multiple 99+ percentilers
                </div>
                <p className="about-iitsf__highlight-text">
                  and AIR 22, 268, 299, 501, 529, 591, 959, 982 &amp; many more.
                </p>
              </div>
            </li>

            <li>
              <span className="about-iitsf__icon">👨‍🏫</span>
              <div className="about-iitsf__highlight-body">
                <div className="about-iitsf__highlight-title">
                  Core faculty from IIT Delhi &amp; IIT Roorkee
                </div>
                <p className="about-iitsf__highlight-text">
                  with rich classroom experience.
                </p>
              </div>
            </li>

            <li>
              <span className="about-iitsf__icon">📚</span>
              <div className="about-iitsf__highlight-body">
                <div className="about-iitsf__highlight-title">
                  Early JEE, Aspire &amp; Achiever courses
                </div>
                <p className="about-iitsf__highlight-text">
                  covering Classes 9–12.
                </p>
              </div>
            </li>

            <li>
              <span className="about-iitsf__icon">🤝</span>
              <div className="about-iitsf__highlight-body">
                <div className="about-iitsf__highlight-title">
                  Personal mentoring &amp; regular feedback
                </div>
                <p className="about-iitsf__highlight-text">
                  so serious students never feel lost.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Director card */}
        <div id="faculty" className="section-title f-head f-head--sub">
          <div className="title-text">From the Desk of the Director</div>
          <div className="title-underline" />
          <p className="f-sub">
            Er. Shishir Mohta – Director, IIT Study Forum
          </p>
        </div>

        <div className="director-card">
          <div className="director-card__content">
            <h3 className="director-card__heading">
              Meeting Your Expectations
            </h3>
            <p>
              Earning the absolute trust of our students is our most important
              goal. Our commitment to relationships builds the confidence that
              enables us to act decisively and expediently.
            </p>
            <p>
              Our experience gives our students access to an unparalleled depth
              of knowledge. We understand that each student is unique, yet our
              years of IIT-JEE mentoring enable us to quickly discover and
              respond to changing patterns of the exam.
            </p>
            <p>
              We place priority on results, empowering our students to act in a
              straightforward, efficient manner. Our faculty work collaboratively
              with students to unravel the complexities of each topic, peeling
              away the layers to uncover opportunities that lead to successful
              outcomes.
            </p>
          </div>

          <div className="director-card__photo-wrap">
            {/* TODO: replace this src with your real director image link */}
            <img
              src={driveProxy('https://drive.google.com/file/d/18G58kC1cEe89Rd4c7wsZr004lCZXZSzO/view?usp=sharing')}
              alt="Er. Shishir Mohta – Director, IIT Study Forum"
              className="director-card__photo"
              loading="lazy"
            />
          </div>
        </div>

        {/* Faculty cards */}
        <div id="faculty" className="section-title f-head f-head--sub">
          <div className="title-text">Core Faculty Team</div>
          <div className="title-underline" />
          <p className="f-sub">
            Subject experts who mentor IITSF students every day.
          </p>
        </div>

        <div className="f-stats">
          <div className="f-stat">
            <div className="f-stat__value">
              <span className="f-stat__num" data-count={25}></span>
              <span className="f-stat__plus">+</span>
            </div>
            <div className="f-stat__label">Years of Excellence</div>
          </div>

          <div className="f-stat">
            <div className="f-stat__value">
              <span className="f-stat__num" data-count={50}></span>
              <span className="f-stat__plus">+</span>
            </div>
            <div className="f-stat__label">AIR &lt; 100 &amp; 99+ %ilers</div>
          </div>

          <div className="f-stat">
            <div className="f-stat__value">
              <span className="f-stat__num" data-count={2000}></span>
              <span className="f-stat__plus">+</span>
            </div>
            <div className="f-stat__label">Successful Selections</div>
          </div>
        </div>

        <div className="faculty-grid">
          {/* Physics */}
          <article className="faculty-card">
            <div className="faculty-card__photo-wrap">
              <img
                src={driveProxy('https://drive.google.com/file/d/1G0HBfg16toFjvtvgfJ-KiyCmvcEoTgvc/view?usp=sharing')}
                alt="Er. Shishir Mohta – Physics Faculty"
                className="faculty-card__photo"
                loading="lazy"
              />
            </div>
            <div className="faculty-card__body">
              <h3 className="faculty-card__name">Er. Shishir Mohta</h3>
              <p className="faculty-card__role">
                Director &amp; Senior Physics Faculty (B.Tech, IIT Delhi)
              </p>
              <ul className="faculty-card__highlights">
                <li>27+ years of teaching experience in Physics.</li>
                <li>
                  Mentor to AIR 22, 268, 299, 501, 529, 591, 959, 982 &amp; many
                  more from Saharanpur.
                </li>
                <li>
                  Known for conceptual clarity, engaging teaching style and
                  dedicated mentorship.
                </li>
              </ul>
            </div>
          </article>

          {/* Mathematics */}
          <article className="faculty-card">
            <div className="faculty-card__photo-wrap">
              <img
                src={driveProxy('https://drive.google.com/file/d/1WqK3IYsxXVK-iFCgB3sI3DS3X5MBdVY_/view?usp=sharing')}
                alt="Mr. Anuj Kumar – Mathematics Faculty"
                className="faculty-card__photo"
                loading="lazy"
              />
            </div>
            <div className="faculty-card__body">
              <h3 className="faculty-card__name">Mr. Anuj Kumar</h3>
              <p className="faculty-card__role">
                Senior Mathematics Faculty (IIT Roorkee)
              </p>
              <ul className="faculty-card__highlights">
                <li>20+ years of rich teaching experience in Mathematics.</li>
                <li>
                  Former faculty at Resonance, Kota; known for deep conceptual
                  understanding and innovative, time-saving problem-solving
                  approaches.
                </li>
                <li>
                  Has helped countless aspirants master Mathematics and achieve
                  outstanding success in the IIT-JEE.
                </li>
              </ul>
            </div>
          </article>

          {/* Chemistry */}
          <article className="faculty-card">
            <div className="faculty-card__photo-wrap">
              <img
                src={driveProxy('https://drive.google.com/file/d/1j5XqyjlhJ7tIZNfdhU5w7iyWSvWOdRvJ/view?usp=sharing')}
                alt="Dr. Gaurav Garg – Chemistry Faculty"
                className="faculty-card__photo"
                loading="lazy"
              />
            </div>
            <div className="faculty-card__body">
              <h3 className="faculty-card__name">Dr. Gaurav Garg</h3>
              <p className="faculty-card__role">
                Senior Chemistry Faculty (BAMS, M.Sc. Chemistry)
              </p>
              <ul className="faculty-card__highlights">
                <li>
                  20+ years of teaching experience mentoring IIT-JEE and NEET-UG
                  toppers.
                </li>
                <li>
                  Known for deep understanding of Chemistry and a
                  student-centric approach that balances competition and
                  concept-building.
                </li>
                <li>
                  Inspires students to achieve their fullest potential through
                  clarity and disciplined practice.
                </li>
              </ul>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}
