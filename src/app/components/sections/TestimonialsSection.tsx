'use client'

import { useEffect, useMemo, useState } from 'react'
import { getTestimonials, type Testimonial } from '@/lib/testimonials'
import localStore from '@/lib/localStore'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase())
    .join('')
}

export default function TestimonialsSection() {
  const [base, setBase] = useState<Testimonial[]>([])
  const [stored, setStored] = useState<Testimonial[]>([])

  useEffect(() => {
    let alive = true
    getTestimonials()
      .then(data => {
        if (alive) setBase(Array.isArray(data) ? data : [])
      })
      .catch(() => alive && setBase([]))
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    const update = () => setStored(localStore.loadAll())
    update()
    const handler = () => update()
    window.addEventListener('storage', handler)
    window.addEventListener(localStore.changeEvent, handler)
    return () => {
      window.removeEventListener('storage', handler)
      window.removeEventListener(localStore.changeEvent, handler)
    }
  }, [])

  const testimonials = useMemo(() => {
    const merged = [...stored, ...base]
    return merged.filter(t => t.kind === 'text' && t.text?.trim())
  }, [stored, base])

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <div className="title-text">Testimonials</div>
          <div className="title-underline" />
        </div>

        {testimonials.length === 0 ? (
          <p className="t-empty">More testimonials coming soon.</p>
        ) : (
          <div className="testimonials-scroll">
            {testimonials.map(t => (
              <article key={t.id} className="card testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{initials(t.name)}</div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-achievement">{t.short}</div>
                    <div className="testimonial-course">{t.subject}</div>
                  </div>
                  {t.stars ? (
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`star ${idx < (t.stars || 0) ? 'active' : ''}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <p className="testimonial-text">{t.text}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
