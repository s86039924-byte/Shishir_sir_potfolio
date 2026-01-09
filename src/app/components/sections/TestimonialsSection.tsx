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

function TestimonialCardContent({ t }: { t: Testimonial }) {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    let alive = true

    // Try to load image from dataUrl first
    if (t.image?.dataUrl) {
      if (alive) setImageUrl(t.image.dataUrl)
      return
    }

    // Try to load from stored image data
    const stored = localStore.readImageData(t.id)
    if (stored && alive) {
      setImageUrl(stored)
      return
    }

    // Try to fetch from blob API
    if ((t.image as any)?.blobId) {
      const url = `/api/blob/images/${(t.image as any).blobId}`
      if (alive) setImageUrl(url)
      return
    }

    return () => { alive = false }
  }, [t])

  return (
    <article className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          {imageUrl ? (
            <img src={imageUrl} alt={t.name} />
          ) : (
            <span className="avatar-initials">{initials(t.name)}</span>
          )}
        </div>
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
  )
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
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <TestimonialCardContent key={t.id} t={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
