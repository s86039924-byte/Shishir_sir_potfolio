'use client';

import { useEffect, useMemo, useState } from 'react';
import { getTestimonials, type Testimonial } from '@/lib/testimonials';
import localStore from '@/lib/localStore';
import './additional-styles.css';

import AddTestimonialModal from './AddTestimonialModal';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsPage() {
  const [base, setBase] = useState<Testimonial[]>([]);
  const [stored, setStored] = useState<Testimonial[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await getTestimonials();
        if (alive) setBase(Array.isArray(data) ? data : []);
      } catch {
        if (alive) setBase([]);
      }
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    setStored(localStore.loadAll());
    setHydrated(true);
  }, []);

  const onAdded = () => {
    setStored(localStore.loadAll());
  };

  const categorizeJeeResult = (t: Testimonial): 'mains' | 'advanced' => {
    if (t.jeeTier) return t.jeeTier;
    if (t.exam !== 'JEE') return 'mains';
    const blob = [t.short, t.program, t.text].filter(Boolean).join(' ').toLowerCase();
    if (blob.includes('advanced') || blob.includes('adv.')) return 'advanced';
    if (blob.includes('main') || blob.includes('mains')) return 'mains';
    return 'mains';
  };

  const buildMediaBuckets = (list: Testimonial[]) => {
    const buckets = { videos: [] as Testimonial[], images: [] as Testimonial[], texts: [] as Testimonial[] };
    list.forEach((t) => {
      if (t.video && (t.video.type === 'embed' || t.video.type === 'file')) {
        buckets.videos.push(t);
      } else if (t.image) {
        buckets.images.push(t);
      } else {
        buckets.texts.push(t);
      }
    });
    return buckets;
  };

  const jeeBuckets = useMemo(() => {
    if (!hydrated) {
      return { mains: { videos: [], images: [], texts: [] }, advanced: { videos: [], images: [], texts: [] } };
    }
    const mainsItems: Testimonial[] = [];
    const advancedItems: Testimonial[] = [];
    const merged = [...stored, ...base];
    merged.forEach((t) => {
      const bucket = categorizeJeeResult(t) === 'advanced' ? advancedItems : mainsItems;
      bucket.push(t);
    });
    return { mains: buildMediaBuckets(mainsItems), advanced: buildMediaBuckets(advancedItems) };
  }, [stored, base, hydrated]);

  const renderSection = (title: string, media: ReturnType<typeof buildMediaBuckets>) => {
    const { videos, images, texts } = media;
    const hasContent = videos.length > 0 || images.length > 0 || texts.length > 0;
    if (!hasContent) return null;
    return (
      <div key={title} className="testi-section">
        <div className="testi-section__header">
          <h2 className="testi-section__title">{title}</h2>
          <span className="testi-section__badge">Students</span>
        </div>
        {videos.length > 0 && (
          <div className="testi-grid testi-grid--video">
            {videos.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </div>
        )}
        {images.length > 0 && (
          <div className="testi-grid testi-grid--image">
            {images.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </div>
        )}
        {texts.length > 0 && (
          <div className="testi-grid testi-grid--text">
            {texts.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="testimonials-page">
      <div className="container">
        <div className="testi-page-header">
          <h1 className="testi-page-title">Student Testimonials</h1>
          <button className="testi-add-btn" onClick={() => setOpen(true)}>+ Add Testimonial</button>
        </div>
        <div className="testi-sections">
          {renderSection('JEE Main Results', jeeBuckets.mains)}
          {renderSection('JEE Advanced Results', jeeBuckets.advanced)}
        </div>
      </div>
      {open && <AddTestimonialModal onCancel={() => setOpen(false)} onAdded={onAdded} />}
    </main>
  );
}
