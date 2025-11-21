'use client';

export default function WhyIITSFSection() {
  return (
    <section id="why-iitsf" className="why-iitsf section">
      <div className="container">
        <div className="section-title">
          <div className="title-text">Why IIT Study Forum</div>
          <div className="title-underline" />
          <p className="f-sub">
            What we promise, we deliver – a complete system for IIT-JEE success.
          </p>
        </div>

        <div className="why-iitsf__content">
          {/* LEFT: visual feature tiles */}
          <div className="why-iitsf__intro">
            <p className="why-iitsf__lead">
              IIT Study Forum gives a complete ecosystem around every serious
              JEE aspirant – not just classes.
            </p>

            <div className="why-iitsf__feature-grid">
              <div className="why-feature">
                <div className="why-feature__icon">🏫</div>
                <div className="why-feature__title">
                  Competitive, disciplined campus
                </div>
                <p className="why-feature__text">
                  Focused classroom culture that keeps students motivated and
                  exam–oriented.
                </p>
              </div>

              <div className="why-feature">
                <div className="why-feature__icon">📘</div>
                <div className="why-feature__title">Planned lectures &amp; material</div>
                <p className="why-feature__text">
                  Topic–wise planning with graded assignments and high–quality
                  study material.
                </p>
              </div>

              <div className="why-feature">
                <div className="why-feature__icon">👨‍🏫</div>
                <div className="why-feature__title">
                  Small, attentive batches
                </div>
                <p className="why-feature__text">
                  Homogeneous batch sizes so teachers know every student by
                  name and performance.
                </p>
              </div>

              <div className="why-feature">
                <div className="why-feature__icon">📊</div>
                <div className="why-feature__title">
                  Testing, analysis &amp; feedback
                </div>
                <p className="why-feature__text">
                  Regular CBT &amp; written tests, detailed analysis and
                  feedback to students &amp; parents.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: system cards – Approach / Teaching / Testing */}
          <div className="why-iitsf__cards">
            <article className="why-card">
              <div className="why-card__icon">🔧</div>
              <h3 className="why-card__title">Our Approach</h3>
              <p className="why-card__text">
                Finding newer ways of overcoming challenges so that results grow
                year after year.
              </p>
              <ul className="why-card__list">
                <li>Transparent system that tracks every student&apos;s progress.</li>
                <li>
                  Academic year is pre–planned – from study plans to test
                  schedules and parent meetings.
                </li>
                <li>
                  Parents are informed when a student misses class, ensuring
                  accountability at home.
                </li>
              </ul>
            </article>

            <article className="why-card">
              <div className="why-card__icon">📖</div>
              <h3 className="why-card__title">Teaching Methodology</h3>
              <p className="why-card__text">
                Making no challenge too tough to handle with a structured delivery
                system.
              </p>
              <ul className="why-card__list">
                <li>
                  Standardised classroom methodology followed by all faculty for
                  consistent quality.
                </li>
                <li>
                  Interactive lectures focused on conceptual clarity, not rote
                  learning.
                </li>
                <li>
                  Audio–visual aids and modern tools used wherever they boost
                  understanding.
                </li>
              </ul>
            </article>

            <article className="why-card">
              <div className="why-card__icon">🧪</div>
              <h3 className="why-card__title">Testing Strategy</h3>
              <p className="why-card__text">
                Computer–based &amp; paper–based tests that mirror real entrance
                examinations.
              </p>
              <ul className="why-card__list">
                <li>
                  Part tests &amp; full syllabus tests designed exactly on latest
                  JEE pattern.
                </li>
                <li>
                  Special testing software &amp; labs help students learn time
                  management and accuracy.
                </li>
                <li>
                  Detailed result analysis &amp; discussion so students know
                  exactly how to improve.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
