import type { Metadata } from 'next'
import Link from 'next/link'

type CourseBullet = string

type Course = {
  id: string
  name: string
  audience: string
  targets: string
  emoji: string
  eligibility: string
  schedule: string
  period?: string
  bullets: CourseBullet[]
  admission: string
  theme: {
    background: string
    border: string
    accent: string
    badge: string
  }
}

const heroBenefits = [
  'Classroom + mentoring ecosystem',
  'Regular CBTs & progress reports',
  'IIT Delhi & IIT Roorkee alumni faculty',
  'Scholarships for early enrolments',
]

const heroStats = [
  { value: '120+', label: 'Top AIR ranks mentored' },
  { value: '4.8/5', label: 'Parent satisfaction score' },
  { value: '3k+', label: 'Annual guided study hours' },
]

const courses: Course[] = [
  {
    id: 'crash',
    name: 'Crash Course',
    audience: 'For XII Studying / Passed Students',
    targets: 'JEE MAINS / ADVANCE / NEET / BITSAT / UPSEE',
    emoji: '⚡',
    eligibility: 'Class XII appearing and passed students',
    schedule: 'Daily Classes',
    bullets: [
      'The entire syllabus of JEE/UPSEE/NEET is taught in the form of concept-clearing classes. The fundamentals of all topics in all subjects made strong under the guidance of our expert faculty.',
      'Regular tests conducted on the pattern to give the real insight of exams.',
      'Full Class XI and XII syllabus is covered in short span with exhaustive depth so that the student finds JEE/UPSEE/NEET a cakewalk.',
      'Develop capabilities to solve the complete question paper within the prescribed time.',
      'Capabilities to solve tedious and confusing questions that need more than one concept from different chapters in minimum possible time.',
      'Capabilities to use relevant short-cut method instead of using lengthy and complicated calculations.',
    ],
    admission: 'Direct',
    theme: {
      background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
      border: 'rgba(251, 146, 60, 0.4)',
      accent: '#ea580c',
      badge: '#fff7ed',
    },
  },
  {
    id: 'aspire',
    name: 'Aspire Course',
    audience: 'For XI Moving Students',
    targets: 'JEE MAINS / ADVANCE / NEET / BITSAT / UPSEE',
    emoji: '🚀',
    eligibility: 'Class X passed students',
    schedule: 'Daily Classes',
    period: 'This course commences from 2nd week of April / May & continues till 2nd week of February.',
    bullets: [
      'Gives a very good headstart to students who aspire for Engineering / Medicine as a career.',
      'Covers full academic syllabus of class XI.',
      'Provides in depth knowledge of concepts used in JEE / UPSEE / NEET Exams.',
    ],
    admission: 'Through Admission cum Scholarship Test',
    theme: {
      background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
      border: 'rgba(59, 130, 246, 0.4)',
      accent: '#2563eb',
      badge: '#eff6ff',
    },
  },
  {
    id: 'achiever',
    name: 'Achiever Course',
    audience: 'For XII Moving Students',
    targets: 'JEE MAINS / ADVANCE / NEET / BITSAT / UPSEE',
    emoji: '👑',
    eligibility: 'Class XI passed students',
    schedule: 'Daily Classes',
    period: 'This course commences from 1st week of April / May & continues till 1st week of February.',
    bullets: [
      'Thoroughly covers all topics of Physics, Chemistry and Mathematics for JEE/UPSEE/NEET.',
      'The concepts of students with respect to class XI syllabus are revised thoroughly with the help of rigorous doubt clearing sessions and classroom tests, after completing Class XII syllabus.',
    ],
    admission: 'Through Admission cum Scholarship Test',
    theme: {
      background: 'linear-gradient(135deg, #fdf4ff, #ede9fe)',
      border: 'rgba(147, 51, 234, 0.4)',
      accent: '#7c3aed',
      badge: '#fdf4ff',
    },
  },
  {
    id: 'target',
    name: 'Target Course',
    audience: 'For XII Passed Students',
    targets: 'JEE MAINS / ADVANCE / NEET / BITSAT / UPSEE',
    emoji: '🎯',
    eligibility: 'Class XII passed students',
    schedule: 'Daily 8 Hours Classes',
    bullets: [
      'All Topics of JEE / UPSEE / NEET are thoroughly covered.',
      'The fundamentals of all topics in all subjects are made crystal clear under the guidance of our expert faculty through doubt clearing classes & regular tests.',
    ],
    admission: 'Direct or through Admission cum Scholarship Test',
    theme: {
      background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
      border: 'rgba(34, 197, 94, 0.4)',
      accent: '#16a34a',
      badge: '#f0fdf4',
    },
  },
]

export const metadata: Metadata = {
  title: 'Courses | IIT Study Forum',
  description:
    'Explore IIT Study Forum courses: Crash Course, Aspire, Achiever and Target programs for JEE / NEET / UPSEE / BITSAT aspirants, with daily classes, tests and expert mentoring.',
}

export default function CoursesPage() {
  return (
    <main className="courses-page">
      {/* ── Hero ── */}
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero__grid">
            <div className="courses-hero__content">
              <p className="eyebrow">Programs for every serious aspirant</p>
              <h1>Courses at IIT Study Forum</h1>
              <p className="lead">
                From your first JEE-prep class to a dedicated post-XII intensive, our structured
                programs keep students disciplined, mentored and exam-ready.
              </p>

              <ul className="hero-benefits">
                {heroBenefits.map((b) => (
                  <li key={b}>
                    <span className="hero-benefits__bullet" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="hero-cta-row">
                <Link
                  href="https://docs.google.com/forms/d/1T6fld5H-kIt9OrEGFeAbs-EKD6dzTDGpQOCICIradeg/edit"
                  className="btn btn--primary hero-cta"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a Counselling Call
                </Link>
                <Link href="/testimonials" className="btn hero-cta hero-cta--ghost">
                  See Recent Rankers
                </Link>
              </div>
            </div>

            <div className="courses-hero__spotlight">
              <div className="dream-card">
                <p className="dream-card__tag">Dreamers ➝ Rankers</p>
                <h3>Picture your name on our next AIR wall.</h3>
                <p>
                  Every batch runs with an outcome charter — curated study plans, personal
                  mentorship and exam rehearsals until confidence is routine.
                </p>

                <ul className="dream-card__stats">
                  {heroStats.map((s) => (
                    <li key={s.label}>
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </li>
                  ))}
                </ul>

                <p className="dream-card__note">
                  Limited premium seats. Enrol early to unlock scholarships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Course Cards ── */}
      <section className="courses-grid container">
        {courses.map((course) => (
          <article
            key={course.id}
            className={`course-card course-card--${course.id}`}
            style={{
              background: course.theme.background,
              borderColor: course.theme.border,
            }}
          >
            <span className="course-card__halo" aria-hidden />

            {/* Header */}
            <div className="course-card__header">
              <div className="course-card__title-row">
                <div>
                  <p className="course-audience-tag">{course.audience}</p>
                  <h2 style={{ color: course.theme.accent }}>{course.name}</h2>
                  <p className="course-targets">{course.targets}</p>
                </div>
                <span className="course-card__emoji" aria-hidden>
                  {course.emoji}
                </span>
              </div>
              {course.period && (
                <p className="course-period">{course.period}</p>
              )}
            </div>

            {/* Eligibility + Schedule */}
            <div className="course-meta-row">
              <div className="course-meta-item">
                <span className="course-meta-label">Eligibility</span>
                <span className="course-meta-value">{course.eligibility}</span>
              </div>
              <div className="course-meta-item">
                <span className="course-meta-label">Classes Schedule</span>
                <span className="course-meta-value">{course.schedule}</span>
              </div>
            </div>

            {/* Description bullets */}
            <div className="course-description-block">
              <p className="course-description-heading">Course Description</p>
              <ul className="course-bullets">
                {course.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Admission */}
            <div
              className="course-admission"
              style={{ borderTopColor: course.theme.border }}
            >
              <span className="course-admission__label">Admission:</span>
              <span className="course-admission__value">{course.admission}</span>
            </div>

            <div
              className="course-card__accent"
              style={{ background: course.theme.accent }}
            />
          </article>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="courses-cta">
        <div className="container">
          <div className="courses-cta__inner">
            <div>
              <p className="eyebrow">Ready to start?</p>
              <h2>We don&apos;t just teach – we transform aspirants into achievers.</h2>
              <p>
                Visit our campus or contact the academic team to know about batches, scholarship
                tests and the best course fit for your ward.
              </p>
            </div>
            <div className="courses-cta__actions">
              <Link
                href="https://docs.google.com/forms/d/1T6fld5H-kIt9OrEGFeAbs-EKD6dzTDGpQOCICIradeg/edit"
                className="btn btn--primary"
                target="_blank"
                rel="noreferrer"
              >
                Enrol Now
              </Link>
              <Link href="/admission-test" className="btn hero-cta--ghost">
                Take Admission Test
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
