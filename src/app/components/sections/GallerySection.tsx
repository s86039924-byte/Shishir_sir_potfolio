'use client';

import { useMemo, useState } from 'react';
import { driveProxy, driveId } from '@/lib/drive';

type Size = 'large' | 'medium' | 'small';
type Category = 'Events' | 'Lectures' | 'Results';

const filters = ['All', 'Events', 'Lectures', 'Results'] as const;

const youtubeEmbed = (url: string): string | null => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') {
      return parsed.pathname.slice(1) || null;
    }
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsed.pathname.startsWith('/watch')) {
        return parsed.searchParams.get('v');
      }
      if (parsed.pathname.startsWith('/shorts/')) {
        return parsed.pathname.split('/')[2] ?? null;
      }
    }
    if (host === 'youtube-nocookie.com') {
      return parsed.pathname.split('/').pop() ?? null;
    }
  } catch (err) {
    return null;
  }
  return null;
};

// ==== EDIT YOUR CARDS HERE ====
// Paste your Google Drive share link (…/file/d/<ID>/view) or any image URL in `image`.
const items: Array<{
  id: string;
  title: string;
  description?: string;
  category: Category;
  size: Size;
  image: string;
  video?: string;
}> = [
  {
    id: 'g1',
    title: 'Class Celebration',
    description: 'Students celebrating a milestone together.',
    category: 'Events',
    size: 'large',
    image: 'https://drive.google.com/file/d/1qdBbTUC8xXd5ooeyu3ttf2pUOQrfnEgL/view?usp=sharing',
  },
  {
    id: 'g2',
    title: 'Focused Class',
    description: 'Regular classroom session with faculty guidance.',
    category: 'Lectures',
    size: 'medium',
    image: 'https://drive.google.com/file/d/1nWgn6lx2hbUveFitJz4WK7ZanFH0RNCW/view?usp=sharing',
  },
  {
    id: 'g3',
    title: 'Results Highlight',
    description: 'Newspaper coverage of top ranks.',
    category: 'Results',
    size: 'small',
    image: 'https://drive.google.com/file/d/1s1L4dJ3Na_6uFuEA7TUEQIRBZLwnyVwt/view?usp=sharing',
  },
  {
    id: 'g4',
    title: 'Results Feature',
    description: 'Print media featuring IITSF achievers.',
    category: 'Results',
    size: 'small',
    image: 'https://drive.google.com/file/d/1iFBmGEsQEtqonosiKtKHg6SCZ77lj6yi/view?usp=sharing',
  },
  {
    id: 'g5',
    title: 'Another Result Highlight',
    description: 'Yet another newspaper headline of IITSF ranks.',
    category: 'Results',
    size: 'medium',
    image: 'https://drive.google.com/file/d/12mh7d_dsveTQFoZfF86k32fvermuugXC/view?usp=sharing',
  },
  {
    id: 'g6',
    title: 'Chemistry Strategy Session',
    description: 'Snippets from our mentor explaining exam frameworks.',
    category: 'Lectures',
    size: 'medium',
    image: 'https://img.youtube.com/vi/ss1G8vNILH0/hqdefault.jpg',
    video: 'https://youtu.be/ss1G8vNILH0',
  },
  {
    id: 'g7',
    title: 'Physics Concept Capsule',
    description: 'Visual explanation to build strong fundamentals.',
    category: 'Lectures',
    size: 'small',
    image: 'https://img.youtube.com/vi/eyvXBZAmmNw/hqdefault.jpg',
    video: 'https://youtu.be/eyvXBZAmmNw',
  },
  {
    id: 'g8',
    title: 'Maths Marathon Snippet',
    description: 'See how we drill problem solving in class.',
    category: 'Lectures',
    size: 'small',
    image: 'https://img.youtube.com/vi/vBXQzS18B1E/hqdefault.jpg',
    video: 'https://youtu.be/vBXQzS18B1E',
  },
  {
    id: 'g9',
    title: 'Rapid Tricks Short',
    description: 'Quick doubt-solving hack from the mentors.',
    category: 'Lectures',
    size: 'small',
    image: 'https://img.youtube.com/vi/4iSZY1TqloM/hqdefault.jpg',
    video: 'https://youtube.com/shorts/4iSZY1TqloM',
  },
  {
    id: 'g10',
    title: 'Motivation Byte',
    description: 'Short push to keep aspirants focused.',
    category: 'Lectures',
    size: 'small',
    image: 'https://img.youtube.com/vi/iAd1XRqEJCE/hqdefault.jpg',
    video: 'https://youtube.com/shorts/iAd1XRqEJCE',
  },
];

export default function GallerySection() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');

  const visible = useMemo(() => {
    if (active === 'All') return items;
    return items.filter((i) => i.category === active);
  }, [active]);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <div className="title-text">Gallery</div>
          <div className="title-underline" />
        </div>

        <div className="gallery-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="gallery-scroll">
          {visible.map((card) => {
            const embedId = card.video ? youtubeEmbed(card.video) : null;
            const isVideo = Boolean(embedId);
            const ctaLabel = isVideo ? null : 'View album →';
            const ctaHref = card.video ?? card.image;

            return (
              <div
                key={card.id}
                className={`gallery-card ${card.size}${isVideo ? ' gallery-card--video' : ''}`}
              >
                <div className="gallery-thumb">
                  {embedId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${embedId}?rel=0`}
                      title={card.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={driveProxy(card.image)}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        const id = driveId(el.src) || driveId(card.image);
                        if (id) el.src = `/api/drive-image?id=${id}`;
                      }}
                    />
                  )}
                  <span className="gallery-chip">{card.category}</span>
                </div>
                {!isVideo && (
                  <div className="gallery-info">
                    <div>
                      <div className="gallery-title">{card.title}</div>
                      {card.description && <p className="gallery-description">{card.description}</p>}
                    </div>
                    {ctaLabel && (
                      <a
                        className="gallery-cta"
                        aria-label={`${ctaLabel} ${card.title}`}
                        href={ctaHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {ctaLabel}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
