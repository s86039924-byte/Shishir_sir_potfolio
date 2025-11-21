import './admission-test.css'

const upcomingTests = [
  {
    round: 'Round 1',
    date: 'Sunday, 9 March 2025',
    time: '10:00 AM',
    venue: 'IITSF Campus, Saharanpur',
    note: 'On-spot counselling & early scholarship offers.',
  },
  {
    round: 'Round 2',
    date: 'Sunday, 6 April 2025',
    time: '10:00 AM',
    venue: 'IITSF Campus, Saharanpur',
    note: 'Ideal for Aspire & Achiever aspirants joining after boards.',
  },
]

const reasons = [
  {
    icon: '🎯',
    title: 'Single test, double benefit',
    description: 'Admission + scholarship decided in one attempt so preparation stays focused.',
  },
  {
    icon: '⚡',
    title: 'Result within a week',
    description: 'Scorecard, counselling call and scholarship letter reach you in 7 days.',
  },
  {
    icon: '💰',
    title: 'Up to 50% fee waiver',
    description: 'Top 30 rankers receive assured concessions, redeemable immediately.',
  },
  {
    icon: '👨‍🏫',
    title: 'Mentorship by IITians',
    description: 'IIT Delhi & IIT Roorkee graduates design the paper and mentor the toppers.',
  },
]

const quickFacts = [
  'Covers Maths, Physics & Chemistry fundamentals.',
  'For classes 9–12 (Early, Aspire, Achiever).',
  'Top scorers get invite-only mentorship & mock interviews.',
]

const purposes = [
  'Assess the current level of the student and judge readiness for advanced preparation.',
  'Evaluate the ability to sustain difficulty, workload, and regular practice.',
  'Understand temperament, sincerity, and aptitude so we can guide students personally.',
  'Maintain homogeneous batches so every student receives focused attention.',
]

const registrationSteps = [
  'Complete the application form with accurate details.',
  'Attach two recent passport-size photographs.',
  'Submit photocopies of the latest mark sheet and board admit card (if applicable).',
  'Pay the ₹500 registration fee via demand draft in favour of IIT Study Forum, payable at Saharanpur.',
  'Write the student’s name and contact information on the rear of the draft.',
  'Collect the admit card at the time of registration (mandatory to enter the test).',
  'Results are declared within one week and communicated via phone/SMS/post.',
]

const scholarshipBands = [
  { rank: 'Rank 1–5', concession: '40%' },
  { rank: 'Rank 6–10', concession: '30%' },
  { rank: 'Rank 11–20', concession: '20%' },
  { rank: 'Rank 21–30', concession: '10%' },
]

const specialScholarships = [
  { name: 'NTSE Qualified', concession: '50%' },
  { name: 'SC / ST Category', concession: '20%' },
  { name: 'Siblings', concession: '10%' },
  { name: 'Defence Personnel (Army / Airforce / Navy)', concession: '5%' },
  { name: 'Single Parent', concession: '10%' },
]

export default function AdmissionTestPage() {
  return (
    <main className="page admission-page">
      <section className="admission-hero">
        <div className="container">
          <div className="hero-eyebrow">Admission &amp; Scholarship</div>
          <h1>Upcoming Admission Test &amp; Scholarship Drive</h1>
          <p>
            Secure your seat in IIT Study Forum’s flagship batches with our Admission-cum-Scholarship
            Test. The same exam decides batch allotment as well as merit-based fee waivers.
          </p>
          <div className="hero-cta-row">
            <a
              className="hero-cta hero-cta--primary"
              href="https://forms.gle/your-form-link"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>
            <a className="hero-cta hero-cta--ghost" href="/#contact">
              Talk to Counsellor
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>Sunday, 9 March</strong>
              <span>10:00 AM | On-Campus</span>
            </div>
            <div>
              <strong>Up to 50% scholarship</strong>
              <span>for top performers</span>
            </div>
            <div>
              <strong>Classes 9–12</strong>
              <span>Early, Aspire & Achiever batches</span>
            </div>
          </div>
        </div>
      </section>

      <section className="admission-section schedule-section">
        <div className="container">
          <h2>Choose Your Test Window</h2>
          <div className="schedule-grid">
            {upcomingTests.map(test => (
              <article key={test.round} className="schedule-card">
                <div className="schedule-card__eyebrow">{test.round}</div>
                <h3>{test.date}</h3>
                <p>
                  <strong>{test.time}</strong> · {test.venue}
                </p>
                <p className="schedule-note">{test.note}</p>
              </article>
            ))}
          </div>
          <div className="quick-facts">
            {quickFacts.map(fact => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="admission-section">
        <div className="container">
          <h2>Why attempt the Admission Test?</h2>
          <div className="admission-grid reason-grid">
            {reasons.map(reason => (
              <article key={reason.title} className="admission-card reason-card">
                <span className="reason-icon">{reason.icon}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="admission-section highlight-row">
        <div className="container">
          <h2>Purpose of the Admission-cum-Scholarship Test</h2>
          <ul className="admission-card">
            {purposes.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="admission-highlights">
            <div className="admission-highlight">
              <span>₹50k+</span>
              <p>Total scholarships announced every test</p>
            </div>
            <div className="admission-highlight">
              <span>Top 30</span>
              <p>Rankers earn instant fee concessions</p>
            </div>
            <div className="admission-highlight">
              <span>7 Days</span>
              <p>Result &amp; counselling within a week</p>
            </div>
          </div>
        </div>
      </section>

      <section className="admission-section">
        <div className="container">
          <h2>How to Enrol / Register</h2>
          <p>Follow these steps to complete the registration:</p>
          <ol className="admission-card">
            {registrationSteps.map(step => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="admission-section">
        <div className="container">
          <h2>Scholarship Criteria (Overall Merit)</h2>
          <div className="admission-card">
            <p>
              Scholarships are awarded to the top 30 rankers in each test. Students must score at least
              35% overall to be eligible. Scholarships are applicable if the student qualifies in all
              three subjects. Scoring 90%+ in ACST grants a 50% concession.
            </p>
            <table className="admission-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Fee Concession</th>
                </tr>
              </thead>
              <tbody>
                {scholarshipBands.map(band => (
                  <tr key={band.rank}>
                    <td>{band.rank}</td>
                    <td>{band.concession}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="admission-section">
        <div className="container">
          <h2>Scholarships for Other Categories</h2>
          <div className="admission-card">
            <table className="admission-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Tuition Waiver</th>
                </tr>
              </thead>
              <tbody>
                {specialScholarships.map(row => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.concession}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="admission-cta-panel">
        <div className="container">
          <div>
            <h2>Give the test. Claim your scholarship. Begin your IIT story.</h2>
            <p>
              Seats in Early, Aspire and Achiever programs are limited. Secure your scholarship token
              before batches fill up.
            </p>
            <div className="hero-cta-row">
              <a
                className="hero-cta hero-cta--primary"
                href="https://forms.gle/your-form-link"
                target="_blank"
                rel="noreferrer"
              >
                Register for Admission Test
              </a>
              <a className="hero-cta hero-cta--ghost" href="tel:+919999999999">
                Call the Academic Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
