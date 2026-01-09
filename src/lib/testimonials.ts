// lib/testimonials.ts
export type Exam = 'JEE' | 'NEET' | 'Foundation' | 'Olympiads';
export type Subject = 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology' | 'General';
export type MediaKind = 'video' | 'image' | 'text';
export type JeeTier = 'mains' | 'advanced';

export type Testimonial = {
  id: string;
  name: string;
  short: string;                 // "AIR 16" | "JEE Main 99.87%ile"
  exam: Exam;
  jeeTier?: JeeTier;             // lets us split JEE Main vs Advanced
  subject: Subject;
  year: number;
  kind: MediaKind;
  program?: string;
  stars?: number;
  badge?: { label?: string; value: string };
  rank?: number | string;

  // image (either uploaded to IndexedDB, or dataURL for small images)
  image?: {
    id?: string;
    url?: string;                 // for remote (future)
    alt?: string;
    provider?: string;
    dataUrl?: string;             // local preview (small~medium)
    blobId?: string;              // id if stored as blob in IndexedDB
  };

  // video (either URL or uploaded blob)
  video?: {
    type: 'embed' | 'file';
    provider?: string;
    src: string;                  // URL or blobId (when type='file')
    poster?: string;              // external poster
    posterDataUrl?: string;       // locally stored thumbnail
    mime?: string;                // when file
  };

  text?: string;
  action?: { label: string; href: string }; // optional button on card
};

export const exams: Exam[] = ['JEE', 'NEET', 'Foundation', 'Olympiads'];
export const subjects: Subject[] = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'General'];
export const mediaKinds: MediaKind[] = ['video', 'image', 'text'];
export const yearsFrom = (rows: Testimonial[]) =>
  Array.from(new Set(rows.map(r => r.year))).sort((a, b) => b - a);

/** Replace this with your DB/API later */
export async function getTestimonials(): Promise<Testimonial[]> {
  // TODO: Add your testimonials here
  // Example format:
  /*
  return [
    {
      id: 't1',
      name: 'Student Name',
      short: 'JEE Main 99.87%ile',
      exam: 'JEE',
      jeeTier: 'mains',
      subject: 'Physics',
      year: 2024,
      kind: 'text',
      text: 'Great coaching experience...',
      stars: 5,
    },
    {
      id: 't2',
      name: 'Another Student',
      short: 'JEE Advanced AIR 22',
      exam: 'JEE',
      jeeTier: 'advanced',
      subject: 'Mathematics',
      year: 2023,
      kind: 'image',
      image: { url: 'https://drive.google.com/file/d/YOUR_IMAGE_ID/view', alt: 'Result' },
      stars: 5,
    },
  ];
  */
  
  return [];
}

