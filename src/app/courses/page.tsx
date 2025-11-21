import type { Metadata } from 'next'
import Link from 'next/link'

type Course = {
  id: string
  name: string
  tagline: string
  audience: string
  description: string
  focus: string
  classes: string
  outcome: string
  emoji: string
  theme: {
    background: string
    border: string
    accent: string
  }
}

const heroBenefits = [
  'Classroom + mentoring ecosystem',
  'Regular CBTs & progress reports',
  'IIT Delhi & IIT Roorkee faculty',
  'Scholarships for early enrolments',
]

const heroStats = [
  { value: '120+', label: 'Top AIR ranks mentored' },
  { value: '4.8/5', label: 'Parent satisfaction score' },
  { value: '3k+', label: 'Annual guided study hours' },
]

const courses: Course[] = [
  {
    id: 'early',
    name: 'Early JEE Course',
    tagline: 'Toppers Start Early',
    emoji: '🌅',
    theme: {
      background: 'linear-gradient(135deg, #fffbea, #fde68a)',
      border: 'rgba(250, 204, 21, 0.6)',
      accent: '#ca8a04',
    },
    audience: 'Ideal for Class 9 & 10 students who dream of becoming IITians.',
    description:
      'Students complement their regular academics with exposure to core JEE concepts so that logical thinking and problem-solving habits form early.',
    focus: 'Strong foundation in school subjects with early exposure to JEE pattern.',
    classes: 'Daily academic sessions plus 3 competitive preparation classes every week.',
    outcome: 'Confidence, conceptual clarity, and an early edge in JEE preparation.',
  },
  {
    id: 'aspire',
    name: 'Aspire Course',
    tagline: 'The Right Start for JEE Preparation',
    emoji: '🚀',
    theme: {
      background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
      border: 'rgba(59, 130, 246, 0.35)',
      accent: '#2563eb',
    },
    audience: 'Crafted for fresh Class 11 entrants beginning their serious JEE journey.',
    description:
      'We emphasise concept depth, analytical skills and consistent practice that mirrors the latest JEE pattern so students transition smoothly into advanced problem solving.',
    focus: 'Fresh start for JEE with concept-building and strong fundamentals.',
    classes: 'Daily lectures, weekly part tests, and dedicated doubt-solving sessions.',
    outcome: 'A solid base for advanced JEE topics and exam readiness.',
  },
  {
    id: 'achiever',
    name: 'Achiever Course',
    tagline: 'Excellence for Class 12th Students',
    emoji: '👑',
    theme: {
      background: 'linear-gradient(135deg, #fdf4ff, #ede9fe)',
      border: 'rgba(147, 51, 234, 0.35)',
      accent: '#7c3aed',
    },
    audience: 'Designed for Class 12 students targeting top results in Boards plus JEE (Main & Advanced).',
    description:
      'The syllabus is covered comprehensively with systematic revision of Class 11 topics, regular mock tests and PYQ-solving sessions to sharpen exam temperament.',
    focus: 'Balanced preparation for Boards and JEE (Main & Advanced).',
    classes: 'Regular sessions, revision modules, and full-length JEE mock tests.',
    outcome: 'Complete preparation, exam confidence, and readiness for top results.',
  },
]

export const metadata: Metadata = {
  title: 'Courses | IIT Study Forum',
  description:
    'Explore IIT Study Forum courses for Class 9-12 students: Early JEE, Aspire and Achiever programs with daily classes, tests and mentoring.',
}

export default function CoursesPage() {
  return (
    <main className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero__grid">
            <div className="courses-hero__content">
              <p className="eyebrow">Programs for every serious aspirant</p>
              <h1>Courses at IIT Study Forum</h1>
              <p className="lead">
                From first exposure to IIT-JEE concepts to board + JEE excellence, our structured programs
                keep students disciplined, mentored and exam ready.
              </p>

              <ul className="hero-benefits">
                {heroBenefits.map((benefit) => (
                  <li key={benefit}>
                    <span className="hero-benefits__bullet" />
                    <span>{benefit}</span>
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
                  Every batch runs with an outcome charter — curated study plans, personal mentorship and exam
                  rehearsals until confidence is routine.
                </p>

                <ul className="dream-card__stats">
                  {heroStats.map((stat) => (
                    <li key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </li>
                  ))}
                </ul>

                <p className="dream-card__note">Limited premium seats. Enrol early to unlock scholarships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="course-card__header">
              <p className="course-tagline">{course.tagline}</p>
              <div className="course-card__title-row">
                <h2>{course.name}</h2>
                <span className="course-card__emoji" aria-hidden>
                  {course.emoji}
                </span>
              </div>
              <p className="course-audience">{course.audience}</p>
            </div>

            <p className="course-description">{course.description}</p>

            <ul className="course-highlights">
              <li>
                <strong>Focus:</strong> {course.focus}
              </li>
              <li>
                <strong>Classes:</strong> {course.classes}
              </li>
              <li>
                <strong>Outcome:</strong> {course.outcome}
              </li>
            </ul>
            <div
              className="course-card__accent"
              style={{ background: course.theme.accent }}
            />
          </article>
        ))}
      </section>

      <section className="courses-cta">
        <div className="container">
          <div>
            <p className="eyebrow">Ready to start?</p>
            <h2>We don&apos;t just teach – we transform aspirants into achievers.</h2>
            <p>
              Visit our campus or contact the academic team to know batches, scholarship tests and the
              best course fit for your ward.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
