# Full CSS Responsibility Audit

## Summary
- TSX files scanned: 21
- CSS files scanned: 5
- Unique class names in TSX: 240
- Unique IDs in TSX: 10
- Unique data-* attrs in TSX: 3
- Unique class selectors in CSS: 350
- Unique ID selectors in CSS: 64
- Unique data-* selectors in CSS: 4

## CSS Files
- src/app/additional-styles.css
- src/app/admission-test/admission-test.css
- src/app/globals.css
- src/app/testimonials/AddTestimonialModal.css
- src/app/testimonials/additional-styles.css

## CSS Imports From TSX
- src/app/admission-test/page.tsx -> ./admission-test.css
- src/app/layout.tsx -> ./globals.css
- src/app/testimonials/AddTestimonialModal.tsx -> ./AddTestimonialModal.css
- src/app/testimonials/page.tsx -> ./additional-styles.css

## Theme/Dark Mode Hooks (TSX)
- src/app/components/layout/Navigation.tsx
- src/app/layout.tsx

## Dark Mode Implemented In CSS
- `@media (prefers-color-scheme: dark)` files:
  - src/app/admission-test/admission-test.css
  - src/app/globals.css
- `[data-theme=...]` selector files:
  - src/app/additional-styles.css
  - src/app/globals.css
  - src/app/testimonials/additional-styles.css

## Nav/Background-Related CSS Files
- src/app/additional-styles.css
- src/app/admission-test/admission-test.css
- src/app/globals.css

## TSX Classnames By File
### src/app/admission-test/page.tsx (27)
admission-card, admission-cta-panel, admission-grid, admission-hero, admission-highlight, admission-highlights, admission-page, admission-section, admission-table, container, hero-cta, hero-cta--ghost, hero-cta--primary, hero-cta-row, hero-eyebrow, hero-stats, highlight-row, page, quick-facts, reason-card, reason-grid, reason-icon, schedule-card, schedule-card__eyebrow, schedule-grid, schedule-note, schedule-section

### src/app/components/animations/ParticlesBackground.tsx (19)
chem-bond, chem-bond--1, chem-bond--2, chem-node, chem-node--1, chem-node--2, chem-node--3, rw-bg-layer, rw-bg-shape, rw-chem-atom-cluster, rw-chem-core, rw-chem-electron, rw-chem-orbit, rw-math-symbol, rw-phys-pulley, rw-phys-rope, rw-phys-weight, rw-phys-wheel, rw-physics-wave

### src/app/components/animations/ScrollProgress.tsx (1)
scroll-progress

### src/app/components/layout/Footer.tsx (8)
container, footer, footer-bottom, footer-content, footer-logo, footer-tagline, social-link, social-links

### src/app/components/layout/Navigation.tsx (15)
brand-logo, container, menu, mobile-dost-btn, mobile-menu-panel, mobile-nav-cta, mobile-toggle, nav-actions, nav-brand, nav-cta, nav-desktop, nav-inner, rw-menu, site-nav, theme-toggle

### src/app/components/layout/ScrollManager.tsx (0)
- (none)

### src/app/components/sections/FoundersSection.tsx (36)
about-iitsf, about-iitsf__eyeline, about-iitsf__highlight-body, about-iitsf__highlight-text, about-iitsf__highlight-title, about-iitsf__highlights, about-iitsf__icon, about-iitsf__text, container, director-card, director-card__content, director-card__heading, director-card__photo, director-card__photo-wrap, f-head, f-head--sub, f-stat, f-stat__label, f-stat__num, f-stat__plus, f-stat__value, f-stats, f-sub, faculty-card, faculty-card__body, faculty-card__highlights, faculty-card__name, faculty-card__photo, faculty-card__photo-wrap, faculty-card__role, faculty-grid, founders, section, section-title, title-text, title-underline

### src/app/components/sections/GallerySection.tsx (15)
container, f, gallery, gallery-card, gallery-chip, gallery-cta, gallery-description, gallery-filters, gallery-info, gallery-scroll, gallery-thumb, gallery-title, section-title, title-text, title-underline

### src/app/components/sections/HeroSection.tsx (31)
container, hero-content, hero-copy, hero-eyebrow, hero-pill, hero-pill-row, hero-pill__dot, hero-section, hero-subtitle, hero-title, hero-title__brand, hero-title__ticker, result-card, result-card--result, result-card__body, result-card__header, result-card__img-wrap, result-card__left, result-card__media, result-card__meta, result-card__name, result-card__rank, result-card__tag, rw-hero, rw-hero__left, rw-hero__right, rw-rail, rw-rail__item, rw-rail__track, rw-rail__viewport, section

### src/app/components/sections/TestimonialsSection.tsx (18)
avatar-initials, container, section-title, star, t-empty, testimonial-achievement, testimonial-avatar, testimonial-card, testimonial-course, testimonial-header, testimonial-info, testimonial-name, testimonial-stars, testimonial-text, testimonials, testimonials-grid, title-text, title-underline

### src/app/components/sections/TickerText.tsx (2)
rw-ticker, rw-ticker__item

### src/app/components/sections/WhyIITSFSection.tsx (21)
container, f-sub, section, section-title, title-text, title-underline, why-card, why-card__icon, why-card__list, why-card__text, why-card__title, why-feature, why-feature__icon, why-feature__text, why-feature__title, why-iitsf, why-iitsf__cards, why-iitsf__content, why-iitsf__feature-grid, why-iitsf__intro, why-iitsf__lead

### src/app/courses/page.tsx (31)
btn, btn--primary, container, course-audience, course-card, course-card__accent, course-card__emoji, course-card__halo, course-card__header, course-card__title-row, course-description, course-highlights, course-tagline, courses-cta, courses-grid, courses-hero, courses-hero__content, courses-hero__grid, courses-hero__spotlight, courses-page, dream-card, dream-card__note, dream-card__stats, dream-card__tag, eyebrow, hero-benefits, hero-benefits__bullet, hero-cta, hero-cta--ghost, hero-cta-row, lead

### src/app/dost/DostClient.tsx (5)
dost-root, error, frame, popup, popupContent

### src/app/dost/page.tsx (0)
- (none)

### src/app/layout.tsx (2)
page, page-grid-overlay

### src/app/page.tsx (0)
- (none)

### src/app/testimonials/AddTestimonialForm.tsx (7)
atm-actions, atm-form, btn, btn-primary, col-12, col-3, col-9

### src/app/testimonials/AddTestimonialModal.tsx (4)
atm-backdrop, atm-close, atm-modal, atm-title

### src/app/testimonials/TestimonialCard.tsx (11)
t-badge, t-body, t-card, t-card-select, t-content, t-media, t-meta, t-name, t-rank-inline, t-short, t-text

### src/app/testimonials/page.tsx (14)
container, testi-add-btn, testi-grid, testi-grid--image, testi-grid--text, testi-grid--video, testi-page-header, testi-page-title, testi-section, testi-section__badge, testi-section__header, testi-section__title, testi-sections, testimonials-page

## TSX IDs By File
- src/app/components/layout/Footer.tsx: cta
- src/app/components/sections/FoundersSection.tsx: faculty, founders
- src/app/components/sections/GallerySection.tsx: gallery
- src/app/components/sections/HeroSection.tsx: hero-heading, home
- src/app/components/sections/TestimonialsSection.tsx: testimonials
- src/app/components/sections/WhyIITSFSection.tsx: why-iitsf
- src/app/layout.tsx: early-theme
- src/app/testimonials/AddTestimonialModal.tsx: atm-title

## TSX data-* Attributes By File
- src/app/components/layout/Navigation.tsx: data-nav
- src/app/components/sections/FoundersSection.tsx: data-count
- src/app/layout.tsx: data-theme

## Cross-Reference: Classes In TSX But Missing In CSS
admission-page, dost-root, error, f, f-head, f-head--sub, f-sub, frame, hero-pill, hero-pill-row, hero-pill__dot, hero-subtitle, hero-title, hero-title__ticker, popup, popupContent, reason-card, rw-menu

## Cross-Reference: Classes In CSS But Not In TSX
acad-atom, acad-atom-core, acad-atom-ring, acad-ball, acad-ball--swing, acad-bg, acad-chem-scribble, acad-pendulum, acad-wave, active, ai, avatar-glow, avatar-placeholder, bewise, btn--lg, btn-ghost, card, channel-card, channel-content, channel-goal, channel-header, channel-icon, channel-name, channel-target, channels, channels-grid, css, cta, cta-card, cta-description, cta-grid, cta-icon, cta-subtitle, cta-title, diff-card, diff-description, diff-icon, diff-title, differentiators, differentiators-grid, exam-label, filter-btn, foundation, founder-achievement, founder-avatar, founder-card, founder-education, founder-info, founder-name, founder-quote, founder-timeline, founder-title, founders-grid, fs-cta, fs-cta-actions, fs-cta-sub, fs-cta-title, gallery-card--video, gallery-grid, hero, hero-backdrop, hero-card, hero-content-card, hero-lead, hero-main-card, hero-shell, hero__chips, hero__eyebrow, highlight-section, jee-neet, large, medium, mission-box, mission-content, mission-icon, nav, nav-menu, offering-card, offering-description, offering-features, offering-icon, offering-title, offerings-grid, offerings-title, open, org, panel, perplexity, platform, result-card__content, result-card__label, result-card__text, rw-hero-card, rw-hero__inner, rw-hero__title, scrolled, section--accent, show, small, surface, t-button, t-button--ghost, t-card--featured, t-card--text, t-card-select--active, t-controls, t-input, t-profile, t-profile-img, t-profile-initials, t-quoteMark, t-result-block, t-result-header, t-result-title, t-row-grid, t-row-grid--4, t-row-title, t-sect, t-simple-header, t-simple-title, t-wrap--simple, testimonials-scroll, timeline-desc, timeline-item, timeline-year, tsx, w3, woff2

## Raw Maps (JSON)
```json
{
  "classToTsx": {
    "about-iitsf": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "about-iitsf__eyeline": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "about-iitsf__highlight-body": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "about-iitsf__highlight-text": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "about-iitsf__highlight-title": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "about-iitsf__highlights": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "about-iitsf__icon": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "about-iitsf__text": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "admission-card": [
      "src/app/admission-test/page.tsx"
    ],
    "admission-cta-panel": [
      "src/app/admission-test/page.tsx"
    ],
    "admission-grid": [
      "src/app/admission-test/page.tsx"
    ],
    "admission-hero": [
      "src/app/admission-test/page.tsx"
    ],
    "admission-highlight": [
      "src/app/admission-test/page.tsx"
    ],
    "admission-highlights": [
      "src/app/admission-test/page.tsx"
    ],
    "admission-page": [
      "src/app/admission-test/page.tsx"
    ],
    "admission-section": [
      "src/app/admission-test/page.tsx"
    ],
    "admission-table": [
      "src/app/admission-test/page.tsx"
    ],
    "atm-actions": [
      "src/app/testimonials/AddTestimonialForm.tsx"
    ],
    "atm-backdrop": [
      "src/app/testimonials/AddTestimonialModal.tsx"
    ],
    "atm-close": [
      "src/app/testimonials/AddTestimonialModal.tsx"
    ],
    "atm-form": [
      "src/app/testimonials/AddTestimonialForm.tsx"
    ],
    "atm-modal": [
      "src/app/testimonials/AddTestimonialModal.tsx"
    ],
    "atm-title": [
      "src/app/testimonials/AddTestimonialModal.tsx"
    ],
    "avatar-initials": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "brand-logo": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "btn": [
      "src/app/courses/page.tsx",
      "src/app/testimonials/AddTestimonialForm.tsx"
    ],
    "btn--primary": [
      "src/app/courses/page.tsx"
    ],
    "btn-primary": [
      "src/app/testimonials/AddTestimonialForm.tsx"
    ],
    "chem-bond": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "chem-bond--1": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "chem-bond--2": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "chem-node": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "chem-node--1": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "chem-node--2": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "chem-node--3": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "col-12": [
      "src/app/testimonials/AddTestimonialForm.tsx"
    ],
    "col-3": [
      "src/app/testimonials/AddTestimonialForm.tsx"
    ],
    "col-9": [
      "src/app/testimonials/AddTestimonialForm.tsx"
    ],
    "container": [
      "src/app/admission-test/page.tsx",
      "src/app/components/layout/Footer.tsx",
      "src/app/components/layout/Navigation.tsx",
      "src/app/components/sections/FoundersSection.tsx",
      "src/app/components/sections/GallerySection.tsx",
      "src/app/components/sections/HeroSection.tsx",
      "src/app/components/sections/TestimonialsSection.tsx",
      "src/app/components/sections/WhyIITSFSection.tsx",
      "src/app/courses/page.tsx",
      "src/app/testimonials/page.tsx"
    ],
    "course-audience": [
      "src/app/courses/page.tsx"
    ],
    "course-card": [
      "src/app/courses/page.tsx"
    ],
    "course-card__accent": [
      "src/app/courses/page.tsx"
    ],
    "course-card__emoji": [
      "src/app/courses/page.tsx"
    ],
    "course-card__halo": [
      "src/app/courses/page.tsx"
    ],
    "course-card__header": [
      "src/app/courses/page.tsx"
    ],
    "course-card__title-row": [
      "src/app/courses/page.tsx"
    ],
    "course-description": [
      "src/app/courses/page.tsx"
    ],
    "course-highlights": [
      "src/app/courses/page.tsx"
    ],
    "course-tagline": [
      "src/app/courses/page.tsx"
    ],
    "courses-cta": [
      "src/app/courses/page.tsx"
    ],
    "courses-grid": [
      "src/app/courses/page.tsx"
    ],
    "courses-hero": [
      "src/app/courses/page.tsx"
    ],
    "courses-hero__content": [
      "src/app/courses/page.tsx"
    ],
    "courses-hero__grid": [
      "src/app/courses/page.tsx"
    ],
    "courses-hero__spotlight": [
      "src/app/courses/page.tsx"
    ],
    "courses-page": [
      "src/app/courses/page.tsx"
    ],
    "director-card": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "director-card__content": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "director-card__heading": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "director-card__photo": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "director-card__photo-wrap": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "dost-root": [
      "src/app/dost/DostClient.tsx"
    ],
    "dream-card": [
      "src/app/courses/page.tsx"
    ],
    "dream-card__note": [
      "src/app/courses/page.tsx"
    ],
    "dream-card__stats": [
      "src/app/courses/page.tsx"
    ],
    "dream-card__tag": [
      "src/app/courses/page.tsx"
    ],
    "error": [
      "src/app/dost/DostClient.tsx"
    ],
    "eyebrow": [
      "src/app/courses/page.tsx"
    ],
    "f": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "f-head": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "f-head--sub": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "f-stat": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "f-stat__label": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "f-stat__num": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "f-stat__plus": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "f-stat__value": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "f-stats": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "f-sub": [
      "src/app/components/sections/FoundersSection.tsx",
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "faculty-card": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "faculty-card__body": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "faculty-card__highlights": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "faculty-card__name": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "faculty-card__photo": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "faculty-card__photo-wrap": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "faculty-card__role": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "faculty-grid": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "footer": [
      "src/app/components/layout/Footer.tsx"
    ],
    "footer-bottom": [
      "src/app/components/layout/Footer.tsx"
    ],
    "footer-content": [
      "src/app/components/layout/Footer.tsx"
    ],
    "footer-logo": [
      "src/app/components/layout/Footer.tsx"
    ],
    "footer-tagline": [
      "src/app/components/layout/Footer.tsx"
    ],
    "founders": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "frame": [
      "src/app/dost/DostClient.tsx"
    ],
    "gallery": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "gallery-card": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "gallery-chip": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "gallery-cta": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "gallery-description": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "gallery-filters": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "gallery-info": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "gallery-scroll": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "gallery-thumb": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "gallery-title": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "hero-benefits": [
      "src/app/courses/page.tsx"
    ],
    "hero-benefits__bullet": [
      "src/app/courses/page.tsx"
    ],
    "hero-content": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-copy": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-cta": [
      "src/app/admission-test/page.tsx",
      "src/app/courses/page.tsx"
    ],
    "hero-cta--ghost": [
      "src/app/admission-test/page.tsx",
      "src/app/courses/page.tsx"
    ],
    "hero-cta--primary": [
      "src/app/admission-test/page.tsx"
    ],
    "hero-cta-row": [
      "src/app/admission-test/page.tsx",
      "src/app/courses/page.tsx"
    ],
    "hero-eyebrow": [
      "src/app/admission-test/page.tsx",
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-pill": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-pill-row": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-pill__dot": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-section": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-stats": [
      "src/app/admission-test/page.tsx"
    ],
    "hero-subtitle": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-title": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-title__brand": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "hero-title__ticker": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "highlight-row": [
      "src/app/admission-test/page.tsx"
    ],
    "lead": [
      "src/app/courses/page.tsx"
    ],
    "menu": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "mobile-dost-btn": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "mobile-menu-panel": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "mobile-nav-cta": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "mobile-toggle": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "nav-actions": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "nav-brand": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "nav-cta": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "nav-desktop": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "nav-inner": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "page": [
      "src/app/admission-test/page.tsx",
      "src/app/layout.tsx"
    ],
    "page-grid-overlay": [
      "src/app/layout.tsx"
    ],
    "popup": [
      "src/app/dost/DostClient.tsx"
    ],
    "popupContent": [
      "src/app/dost/DostClient.tsx"
    ],
    "quick-facts": [
      "src/app/admission-test/page.tsx"
    ],
    "reason-card": [
      "src/app/admission-test/page.tsx"
    ],
    "reason-grid": [
      "src/app/admission-test/page.tsx"
    ],
    "reason-icon": [
      "src/app/admission-test/page.tsx"
    ],
    "result-card": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card--result": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card__body": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card__header": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card__img-wrap": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card__left": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card__media": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card__meta": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card__name": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card__rank": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "result-card__tag": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "rw-bg-layer": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-bg-shape": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-chem-atom-cluster": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-chem-core": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-chem-electron": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-chem-orbit": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-hero": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "rw-hero__left": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "rw-hero__right": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "rw-math-symbol": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-menu": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "rw-phys-pulley": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-phys-rope": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-phys-weight": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-phys-wheel": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-physics-wave": [
      "src/app/components/animations/ParticlesBackground.tsx"
    ],
    "rw-rail": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "rw-rail__item": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "rw-rail__track": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "rw-rail__viewport": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "rw-ticker": [
      "src/app/components/sections/TickerText.tsx"
    ],
    "rw-ticker__item": [
      "src/app/components/sections/TickerText.tsx"
    ],
    "schedule-card": [
      "src/app/admission-test/page.tsx"
    ],
    "schedule-card__eyebrow": [
      "src/app/admission-test/page.tsx"
    ],
    "schedule-grid": [
      "src/app/admission-test/page.tsx"
    ],
    "schedule-note": [
      "src/app/admission-test/page.tsx"
    ],
    "schedule-section": [
      "src/app/admission-test/page.tsx"
    ],
    "scroll-progress": [
      "src/app/components/animations/ScrollProgress.tsx"
    ],
    "section": [
      "src/app/components/sections/FoundersSection.tsx",
      "src/app/components/sections/HeroSection.tsx",
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "section-title": [
      "src/app/components/sections/FoundersSection.tsx",
      "src/app/components/sections/GallerySection.tsx",
      "src/app/components/sections/TestimonialsSection.tsx",
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "site-nav": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "social-link": [
      "src/app/components/layout/Footer.tsx"
    ],
    "social-links": [
      "src/app/components/layout/Footer.tsx"
    ],
    "star": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "t-badge": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-body": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-card": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-card-select": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-content": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-empty": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "t-media": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-meta": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-name": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-rank-inline": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-short": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "t-text": [
      "src/app/testimonials/TestimonialCard.tsx"
    ],
    "testi-add-btn": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-grid": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-grid--image": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-grid--text": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-grid--video": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-page-header": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-page-title": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-section": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-section__badge": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-section__header": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-section__title": [
      "src/app/testimonials/page.tsx"
    ],
    "testi-sections": [
      "src/app/testimonials/page.tsx"
    ],
    "testimonial-achievement": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonial-avatar": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonial-card": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonial-course": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonial-header": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonial-info": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonial-name": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonial-stars": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonial-text": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonials": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonials-grid": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "testimonials-page": [
      "src/app/testimonials/page.tsx"
    ],
    "theme-toggle": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "title-text": [
      "src/app/components/sections/FoundersSection.tsx",
      "src/app/components/sections/GallerySection.tsx",
      "src/app/components/sections/TestimonialsSection.tsx",
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "title-underline": [
      "src/app/components/sections/FoundersSection.tsx",
      "src/app/components/sections/GallerySection.tsx",
      "src/app/components/sections/TestimonialsSection.tsx",
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-card": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-card__icon": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-card__list": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-card__text": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-card__title": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-feature": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-feature__icon": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-feature__text": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-feature__title": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-iitsf": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-iitsf__cards": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-iitsf__content": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-iitsf__feature-grid": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-iitsf__intro": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ],
    "why-iitsf__lead": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ]
  },
  "classToCss": {
    "about-iitsf": [
      "src/app/additional-styles.css"
    ],
    "about-iitsf__eyeline": [
      "src/app/additional-styles.css"
    ],
    "about-iitsf__highlight-body": [
      "src/app/additional-styles.css"
    ],
    "about-iitsf__highlight-text": [
      "src/app/additional-styles.css"
    ],
    "about-iitsf__highlight-title": [
      "src/app/additional-styles.css"
    ],
    "about-iitsf__highlights": [
      "src/app/additional-styles.css"
    ],
    "about-iitsf__icon": [
      "src/app/additional-styles.css"
    ],
    "about-iitsf__text": [
      "src/app/additional-styles.css"
    ],
    "acad-atom": [
      "src/app/additional-styles.css"
    ],
    "acad-atom-core": [
      "src/app/additional-styles.css"
    ],
    "acad-atom-ring": [
      "src/app/additional-styles.css"
    ],
    "acad-ball": [
      "src/app/additional-styles.css"
    ],
    "acad-ball--swing": [
      "src/app/additional-styles.css"
    ],
    "acad-bg": [
      "src/app/additional-styles.css"
    ],
    "acad-chem-scribble": [
      "src/app/additional-styles.css"
    ],
    "acad-pendulum": [
      "src/app/additional-styles.css"
    ],
    "acad-wave": [
      "src/app/additional-styles.css"
    ],
    "active": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "admission-card": [
      "src/app/admission-test/admission-test.css"
    ],
    "admission-cta-panel": [
      "src/app/admission-test/admission-test.css"
    ],
    "admission-grid": [
      "src/app/admission-test/admission-test.css"
    ],
    "admission-hero": [
      "src/app/admission-test/admission-test.css"
    ],
    "admission-highlight": [
      "src/app/admission-test/admission-test.css"
    ],
    "admission-highlights": [
      "src/app/admission-test/admission-test.css"
    ],
    "admission-section": [
      "src/app/admission-test/admission-test.css"
    ],
    "admission-table": [
      "src/app/admission-test/admission-test.css"
    ],
    "ai": [
      "src/app/globals.css"
    ],
    "atm-actions": [
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "atm-backdrop": [
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "atm-close": [
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "atm-form": [
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "atm-modal": [
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "atm-title": [
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "avatar-glow": [
      "src/app/globals.css"
    ],
    "avatar-initials": [
      "src/app/additional-styles.css"
    ],
    "avatar-placeholder": [
      "src/app/globals.css"
    ],
    "bewise": [
      "src/app/additional-styles.css"
    ],
    "brand-logo": [
      "src/app/globals.css"
    ],
    "btn": [
      "src/app/additional-styles.css",
      "src/app/globals.css",
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "btn--lg": [
      "src/app/globals.css"
    ],
    "btn--primary": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "btn-ghost": [
      "src/app/additional-styles.css"
    ],
    "btn-primary": [
      "src/app/additional-styles.css",
      "src/app/globals.css",
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "card": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "channel-card": [
      "src/app/additional-styles.css"
    ],
    "channel-content": [
      "src/app/additional-styles.css"
    ],
    "channel-goal": [
      "src/app/additional-styles.css"
    ],
    "channel-header": [
      "src/app/additional-styles.css"
    ],
    "channel-icon": [
      "src/app/additional-styles.css"
    ],
    "channel-name": [
      "src/app/additional-styles.css"
    ],
    "channel-target": [
      "src/app/additional-styles.css"
    ],
    "channels": [
      "src/app/additional-styles.css"
    ],
    "channels-grid": [
      "src/app/additional-styles.css"
    ],
    "chem-bond": [
      "src/app/additional-styles.css"
    ],
    "chem-bond--1": [
      "src/app/additional-styles.css"
    ],
    "chem-bond--2": [
      "src/app/additional-styles.css"
    ],
    "chem-node": [
      "src/app/additional-styles.css"
    ],
    "chem-node--1": [
      "src/app/additional-styles.css"
    ],
    "chem-node--2": [
      "src/app/additional-styles.css"
    ],
    "chem-node--3": [
      "src/app/additional-styles.css"
    ],
    "col-12": [
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "col-3": [
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "col-9": [
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "container": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "course-audience": [
      "src/app/additional-styles.css"
    ],
    "course-card": [
      "src/app/additional-styles.css"
    ],
    "course-card__accent": [
      "src/app/additional-styles.css"
    ],
    "course-card__emoji": [
      "src/app/additional-styles.css"
    ],
    "course-card__halo": [
      "src/app/additional-styles.css"
    ],
    "course-card__header": [
      "src/app/additional-styles.css"
    ],
    "course-card__title-row": [
      "src/app/additional-styles.css"
    ],
    "course-description": [
      "src/app/additional-styles.css"
    ],
    "course-highlights": [
      "src/app/additional-styles.css"
    ],
    "course-tagline": [
      "src/app/additional-styles.css"
    ],
    "courses-cta": [
      "src/app/additional-styles.css"
    ],
    "courses-grid": [
      "src/app/additional-styles.css"
    ],
    "courses-hero": [
      "src/app/additional-styles.css"
    ],
    "courses-hero__content": [
      "src/app/additional-styles.css"
    ],
    "courses-hero__grid": [
      "src/app/additional-styles.css"
    ],
    "courses-hero__spotlight": [
      "src/app/additional-styles.css"
    ],
    "courses-page": [
      "src/app/additional-styles.css"
    ],
    "css": [
      "src/app/globals.css"
    ],
    "cta": [
      "src/app/additional-styles.css"
    ],
    "cta-card": [
      "src/app/additional-styles.css"
    ],
    "cta-description": [
      "src/app/additional-styles.css"
    ],
    "cta-grid": [
      "src/app/additional-styles.css"
    ],
    "cta-icon": [
      "src/app/additional-styles.css"
    ],
    "cta-subtitle": [
      "src/app/additional-styles.css"
    ],
    "cta-title": [
      "src/app/additional-styles.css"
    ],
    "diff-card": [
      "src/app/additional-styles.css"
    ],
    "diff-description": [
      "src/app/additional-styles.css"
    ],
    "diff-icon": [
      "src/app/additional-styles.css"
    ],
    "diff-title": [
      "src/app/additional-styles.css"
    ],
    "differentiators": [
      "src/app/additional-styles.css"
    ],
    "differentiators-grid": [
      "src/app/additional-styles.css"
    ],
    "director-card": [
      "src/app/additional-styles.css"
    ],
    "director-card__content": [
      "src/app/additional-styles.css"
    ],
    "director-card__heading": [
      "src/app/additional-styles.css"
    ],
    "director-card__photo": [
      "src/app/additional-styles.css"
    ],
    "director-card__photo-wrap": [
      "src/app/additional-styles.css"
    ],
    "dream-card": [
      "src/app/additional-styles.css"
    ],
    "dream-card__note": [
      "src/app/additional-styles.css"
    ],
    "dream-card__stats": [
      "src/app/additional-styles.css"
    ],
    "dream-card__tag": [
      "src/app/additional-styles.css"
    ],
    "exam-label": [
      "src/app/globals.css"
    ],
    "eyebrow": [
      "src/app/additional-styles.css"
    ],
    "f-stat": [
      "src/app/additional-styles.css"
    ],
    "f-stat__label": [
      "src/app/additional-styles.css"
    ],
    "f-stat__num": [
      "src/app/additional-styles.css"
    ],
    "f-stat__plus": [
      "src/app/additional-styles.css"
    ],
    "f-stat__value": [
      "src/app/additional-styles.css"
    ],
    "f-stats": [
      "src/app/additional-styles.css"
    ],
    "faculty-card": [
      "src/app/additional-styles.css"
    ],
    "faculty-card__body": [
      "src/app/additional-styles.css"
    ],
    "faculty-card__highlights": [
      "src/app/additional-styles.css"
    ],
    "faculty-card__name": [
      "src/app/additional-styles.css"
    ],
    "faculty-card__photo": [
      "src/app/additional-styles.css"
    ],
    "faculty-card__photo-wrap": [
      "src/app/additional-styles.css"
    ],
    "faculty-card__role": [
      "src/app/additional-styles.css"
    ],
    "faculty-grid": [
      "src/app/additional-styles.css"
    ],
    "filter-btn": [
      "src/app/additional-styles.css"
    ],
    "footer": [
      "src/app/additional-styles.css"
    ],
    "footer-bottom": [
      "src/app/additional-styles.css"
    ],
    "footer-content": [
      "src/app/additional-styles.css"
    ],
    "footer-logo": [
      "src/app/additional-styles.css"
    ],
    "footer-tagline": [
      "src/app/additional-styles.css"
    ],
    "foundation": [
      "src/app/additional-styles.css"
    ],
    "founder-achievement": [
      "src/app/globals.css"
    ],
    "founder-avatar": [
      "src/app/globals.css"
    ],
    "founder-card": [
      "src/app/globals.css"
    ],
    "founder-education": [
      "src/app/globals.css"
    ],
    "founder-info": [
      "src/app/globals.css"
    ],
    "founder-name": [
      "src/app/globals.css"
    ],
    "founder-quote": [
      "src/app/globals.css"
    ],
    "founder-timeline": [
      "src/app/globals.css"
    ],
    "founder-title": [
      "src/app/globals.css"
    ],
    "founders": [
      "src/app/globals.css"
    ],
    "founders-grid": [
      "src/app/globals.css"
    ],
    "fs-cta": [
      "src/app/additional-styles.css"
    ],
    "fs-cta-actions": [
      "src/app/additional-styles.css"
    ],
    "fs-cta-sub": [
      "src/app/additional-styles.css"
    ],
    "fs-cta-title": [
      "src/app/additional-styles.css"
    ],
    "gallery": [
      "src/app/additional-styles.css"
    ],
    "gallery-card": [
      "src/app/additional-styles.css"
    ],
    "gallery-card--video": [
      "src/app/additional-styles.css"
    ],
    "gallery-chip": [
      "src/app/additional-styles.css"
    ],
    "gallery-cta": [
      "src/app/additional-styles.css"
    ],
    "gallery-description": [
      "src/app/additional-styles.css"
    ],
    "gallery-filters": [
      "src/app/additional-styles.css"
    ],
    "gallery-grid": [
      "src/app/additional-styles.css"
    ],
    "gallery-info": [
      "src/app/additional-styles.css"
    ],
    "gallery-scroll": [
      "src/app/additional-styles.css"
    ],
    "gallery-thumb": [
      "src/app/additional-styles.css"
    ],
    "gallery-title": [
      "src/app/additional-styles.css"
    ],
    "hero": [
      "src/app/globals.css"
    ],
    "hero-backdrop": [
      "src/app/globals.css"
    ],
    "hero-benefits": [
      "src/app/additional-styles.css"
    ],
    "hero-benefits__bullet": [
      "src/app/additional-styles.css"
    ],
    "hero-card": [
      "src/app/additional-styles.css"
    ],
    "hero-content": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "hero-content-card": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "hero-copy": [
      "src/app/globals.css"
    ],
    "hero-cta": [
      "src/app/additional-styles.css",
      "src/app/admission-test/admission-test.css"
    ],
    "hero-cta--ghost": [
      "src/app/additional-styles.css",
      "src/app/admission-test/admission-test.css"
    ],
    "hero-cta--primary": [
      "src/app/admission-test/admission-test.css"
    ],
    "hero-cta-row": [
      "src/app/additional-styles.css",
      "src/app/admission-test/admission-test.css"
    ],
    "hero-eyebrow": [
      "src/app/additional-styles.css",
      "src/app/admission-test/admission-test.css"
    ],
    "hero-lead": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "hero-main-card": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "hero-section": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "hero-shell": [
      "src/app/additional-styles.css"
    ],
    "hero-stats": [
      "src/app/admission-test/admission-test.css"
    ],
    "hero-title__brand": [
      "src/app/additional-styles.css"
    ],
    "hero__chips": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "hero__eyebrow": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "highlight-row": [
      "src/app/admission-test/admission-test.css"
    ],
    "highlight-section": [
      "src/app/additional-styles.css"
    ],
    "jee-neet": [
      "src/app/additional-styles.css"
    ],
    "large": [
      "src/app/additional-styles.css"
    ],
    "lead": [
      "src/app/additional-styles.css"
    ],
    "medium": [
      "src/app/additional-styles.css"
    ],
    "menu": [
      "src/app/globals.css"
    ],
    "mission-box": [
      "src/app/globals.css"
    ],
    "mission-content": [
      "src/app/globals.css"
    ],
    "mission-icon": [
      "src/app/globals.css"
    ],
    "mobile-dost-btn": [
      "src/app/globals.css"
    ],
    "mobile-menu-panel": [
      "src/app/globals.css"
    ],
    "mobile-nav-cta": [
      "src/app/globals.css"
    ],
    "mobile-toggle": [
      "src/app/globals.css"
    ],
    "nav": [
      "src/app/globals.css"
    ],
    "nav-actions": [
      "src/app/globals.css"
    ],
    "nav-brand": [
      "src/app/globals.css"
    ],
    "nav-cta": [
      "src/app/globals.css"
    ],
    "nav-desktop": [
      "src/app/globals.css"
    ],
    "nav-inner": [
      "src/app/globals.css"
    ],
    "nav-menu": [
      "src/app/globals.css"
    ],
    "offering-card": [
      "src/app/globals.css"
    ],
    "offering-description": [
      "src/app/globals.css"
    ],
    "offering-features": [
      "src/app/globals.css"
    ],
    "offering-icon": [
      "src/app/globals.css"
    ],
    "offering-title": [
      "src/app/globals.css"
    ],
    "offerings-grid": [
      "src/app/globals.css"
    ],
    "offerings-title": [
      "src/app/globals.css"
    ],
    "open": [
      "src/app/globals.css"
    ],
    "org": [
      "src/app/globals.css"
    ],
    "page": [
      "src/app/globals.css"
    ],
    "page-grid-overlay": [
      "src/app/globals.css"
    ],
    "panel": [
      "src/app/additional-styles.css"
    ],
    "perplexity": [
      "src/app/globals.css"
    ],
    "platform": [
      "src/app/globals.css"
    ],
    "quick-facts": [
      "src/app/admission-test/admission-test.css"
    ],
    "reason-grid": [
      "src/app/admission-test/admission-test.css"
    ],
    "reason-icon": [
      "src/app/admission-test/admission-test.css"
    ],
    "result-card": [
      "src/app/globals.css"
    ],
    "result-card--result": [
      "src/app/globals.css"
    ],
    "result-card__body": [
      "src/app/globals.css"
    ],
    "result-card__content": [
      "src/app/globals.css"
    ],
    "result-card__header": [
      "src/app/globals.css"
    ],
    "result-card__img-wrap": [
      "src/app/globals.css"
    ],
    "result-card__label": [
      "src/app/globals.css"
    ],
    "result-card__left": [
      "src/app/globals.css"
    ],
    "result-card__media": [
      "src/app/globals.css"
    ],
    "result-card__meta": [
      "src/app/globals.css"
    ],
    "result-card__name": [
      "src/app/globals.css"
    ],
    "result-card__rank": [
      "src/app/globals.css"
    ],
    "result-card__tag": [
      "src/app/globals.css"
    ],
    "result-card__text": [
      "src/app/globals.css"
    ],
    "rw-bg-layer": [
      "src/app/additional-styles.css"
    ],
    "rw-bg-shape": [
      "src/app/additional-styles.css"
    ],
    "rw-chem-atom-cluster": [
      "src/app/additional-styles.css"
    ],
    "rw-chem-core": [
      "src/app/additional-styles.css"
    ],
    "rw-chem-electron": [
      "src/app/additional-styles.css"
    ],
    "rw-chem-orbit": [
      "src/app/additional-styles.css"
    ],
    "rw-hero": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "rw-hero-card": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "rw-hero__inner": [
      "src/app/globals.css"
    ],
    "rw-hero__left": [
      "src/app/globals.css"
    ],
    "rw-hero__right": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "rw-hero__title": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "rw-math-symbol": [
      "src/app/additional-styles.css"
    ],
    "rw-phys-pulley": [
      "src/app/additional-styles.css"
    ],
    "rw-phys-rope": [
      "src/app/additional-styles.css"
    ],
    "rw-phys-weight": [
      "src/app/additional-styles.css"
    ],
    "rw-phys-wheel": [
      "src/app/additional-styles.css"
    ],
    "rw-physics-wave": [
      "src/app/additional-styles.css"
    ],
    "rw-rail": [
      "src/app/globals.css"
    ],
    "rw-rail__item": [
      "src/app/globals.css"
    ],
    "rw-rail__track": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "rw-rail__viewport": [
      "src/app/additional-styles.css"
    ],
    "rw-ticker": [
      "src/app/globals.css"
    ],
    "rw-ticker__item": [
      "src/app/globals.css"
    ],
    "schedule-card": [
      "src/app/admission-test/admission-test.css"
    ],
    "schedule-card__eyebrow": [
      "src/app/admission-test/admission-test.css"
    ],
    "schedule-grid": [
      "src/app/admission-test/admission-test.css"
    ],
    "schedule-note": [
      "src/app/admission-test/admission-test.css"
    ],
    "schedule-section": [
      "src/app/admission-test/admission-test.css"
    ],
    "scroll-progress": [
      "src/app/additional-styles.css"
    ],
    "scrolled": [
      "src/app/globals.css"
    ],
    "section": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "section--accent": [
      "src/app/additional-styles.css"
    ],
    "section-title": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "show": [
      "src/app/globals.css"
    ],
    "site-nav": [
      "src/app/globals.css"
    ],
    "small": [
      "src/app/additional-styles.css"
    ],
    "social-link": [
      "src/app/additional-styles.css"
    ],
    "social-links": [
      "src/app/additional-styles.css"
    ],
    "star": [
      "src/app/additional-styles.css"
    ],
    "surface": [
      "src/app/globals.css"
    ],
    "t-badge": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-body": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-button": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-button--ghost": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-card": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-card--featured": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-card--text": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-card-select": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-card-select--active": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-content": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-controls": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-empty": [
      "src/app/additional-styles.css",
      "src/app/testimonials/additional-styles.css"
    ],
    "t-input": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-media": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-meta": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-name": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-profile": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-profile-img": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-profile-initials": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-quoteMark": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-rank-inline": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-result-block": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-result-header": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-result-title": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-row-grid": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-row-grid--4": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-row-title": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-sect": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-short": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-simple-header": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-simple-title": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-text": [
      "src/app/testimonials/additional-styles.css"
    ],
    "t-wrap--simple": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-add-btn": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-grid": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-grid--image": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-grid--text": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-grid--video": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-page-header": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-page-title": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-section": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-section__badge": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-section__header": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-section__title": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testi-sections": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testimonial-achievement": [
      "src/app/additional-styles.css"
    ],
    "testimonial-avatar": [
      "src/app/additional-styles.css"
    ],
    "testimonial-card": [
      "src/app/additional-styles.css"
    ],
    "testimonial-course": [
      "src/app/additional-styles.css"
    ],
    "testimonial-header": [
      "src/app/additional-styles.css"
    ],
    "testimonial-info": [
      "src/app/additional-styles.css"
    ],
    "testimonial-name": [
      "src/app/additional-styles.css"
    ],
    "testimonial-stars": [
      "src/app/additional-styles.css"
    ],
    "testimonial-text": [
      "src/app/additional-styles.css"
    ],
    "testimonials": [
      "src/app/additional-styles.css"
    ],
    "testimonials-grid": [
      "src/app/additional-styles.css"
    ],
    "testimonials-page": [
      "src/app/testimonials/additional-styles.css"
    ],
    "testimonials-scroll": [
      "src/app/additional-styles.css"
    ],
    "theme-toggle": [
      "src/app/globals.css"
    ],
    "timeline-desc": [
      "src/app/globals.css"
    ],
    "timeline-item": [
      "src/app/globals.css"
    ],
    "timeline-year": [
      "src/app/globals.css"
    ],
    "title-text": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "title-underline": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "tsx": [
      "src/app/globals.css"
    ],
    "w3": [
      "src/app/globals.css"
    ],
    "why-card": [
      "src/app/additional-styles.css"
    ],
    "why-card__icon": [
      "src/app/additional-styles.css"
    ],
    "why-card__list": [
      "src/app/additional-styles.css"
    ],
    "why-card__text": [
      "src/app/additional-styles.css"
    ],
    "why-card__title": [
      "src/app/additional-styles.css"
    ],
    "why-feature": [
      "src/app/additional-styles.css"
    ],
    "why-feature__icon": [
      "src/app/additional-styles.css"
    ],
    "why-feature__text": [
      "src/app/additional-styles.css"
    ],
    "why-feature__title": [
      "src/app/additional-styles.css"
    ],
    "why-iitsf": [
      "src/app/additional-styles.css"
    ],
    "why-iitsf__cards": [
      "src/app/additional-styles.css"
    ],
    "why-iitsf__content": [
      "src/app/additional-styles.css"
    ],
    "why-iitsf__feature-grid": [
      "src/app/additional-styles.css"
    ],
    "why-iitsf__intro": [
      "src/app/additional-styles.css"
    ],
    "why-iitsf__lead": [
      "src/app/additional-styles.css"
    ],
    "woff2": [
      "src/app/globals.css"
    ]
  },
  "idToTsx": {
    "atm-title": [
      "src/app/testimonials/AddTestimonialModal.tsx"
    ],
    "cta": [
      "src/app/components/layout/Footer.tsx"
    ],
    "early-theme": [
      "src/app/layout.tsx"
    ],
    "faculty": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "founders": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "gallery": [
      "src/app/components/sections/GallerySection.tsx"
    ],
    "hero-heading": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "home": [
      "src/app/components/sections/HeroSection.tsx"
    ],
    "testimonials": [
      "src/app/components/sections/TestimonialsSection.tsx"
    ],
    "why-iitsf": [
      "src/app/components/sections/WhyIITSFSection.tsx"
    ]
  },
  "idToCss": {
    "D38A3A": [
      "src/app/globals.css"
    ],
    "E2E8F0": [
      "src/app/globals.css"
    ],
    "E9F2FF": [
      "src/app/globals.css"
    ],
    "F5F6FA": [
      "src/app/globals.css"
    ],
    "F8F7F4": [
      "src/app/globals.css"
    ],
    "F8FAFC": [
      "src/app/globals.css"
    ],
    "FFB86C": [
      "src/app/globals.css"
    ],
    "FFFFFF": [
      "src/app/globals.css"
    ],
    "a30f1b": [
      "src/app/admission-test/admission-test.css"
    ],
    "a50f1b": [
      "src/app/globals.css"
    ],
    "b45309": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "c1121f": [
      "src/app/admission-test/admission-test.css",
      "src/app/globals.css"
    ],
    "cbd5f5": [
      "src/app/additional-styles.css"
    ],
    "d1d5db": [
      "src/app/testimonials/additional-styles.css"
    ],
    "d97706": [
      "src/app/additional-styles.css"
    ],
    "e0f2fe": [
      "src/app/additional-styles.css"
    ],
    "e2e8f0": [
      "src/app/additional-styles.css"
    ],
    "e5e7eb": [
      "src/app/additional-styles.css",
      "src/app/globals.css",
      "src/app/testimonials/additional-styles.css"
    ],
    "e7ae2f": [
      "src/app/globals.css"
    ],
    "ea580c": [
      "src/app/admission-test/admission-test.css"
    ],
    "eaf1f8": [
      "src/app/additional-styles.css",
      "src/app/testimonials/AddTestimonialModal.css"
    ],
    "ec4899": [
      "src/app/additional-styles.css"
    ],
    "eeb539": [
      "src/app/globals.css"
    ],
    "eee": [
      "src/app/additional-styles.css"
    ],
    "ef4444": [
      "src/app/additional-styles.css"
    ],
    "f0b90b": [
      "src/app/testimonials/additional-styles.css"
    ],
    "f0f4f8": [
      "src/app/additional-styles.css"
    ],
    "f0f9ff": [
      "src/app/additional-styles.css"
    ],
    "f2a73b": [
      "src/app/testimonials/additional-styles.css"
    ],
    "f3c14b": [
      "src/app/globals.css"
    ],
    "f3f4f6": [
      "src/app/testimonials/additional-styles.css"
    ],
    "f59e0b": [
      "src/app/additional-styles.css"
    ],
    "f5f7fb": [
      "src/app/globals.css"
    ],
    "f6f9ff": [
      "src/app/globals.css"
    ],
    "f8f9fa": [
      "src/app/additional-styles.css",
      "src/app/testimonials/additional-styles.css"
    ],
    "f8fafc": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "f97316": [
      "src/app/additional-styles.css",
      "src/app/admission-test/admission-test.css",
      "src/app/globals.css"
    ],
    "facc15": [
      "src/app/additional-styles.css",
      "src/app/globals.css"
    ],
    "fbbf24": [
      "src/app/additional-styles.css",
      "src/app/globals.css",
      "src/app/testimonials/additional-styles.css"
    ],
    "fcd34d": [
      "src/app/additional-styles.css",
      "src/app/admission-test/admission-test.css"
    ],
    "fed7aa": [
      "src/app/additional-styles.css"
    ],
    "fef3c7": [
      "src/app/additional-styles.css",
      "src/app/admission-test/admission-test.css",
      "src/app/globals.css"
    ],
    "ffc46a": [
      "src/app/globals.css"
    ],
    "ffc53d": [
      "src/app/globals.css"
    ],
    "ffc86e": [
      "src/app/globals.css"
    ],
    "ffca6f": [
      "src/app/admission-test/admission-test.css"
    ],
    "ffcf4a": [
      "src/app/globals.css"
    ],
    "ffd18f": [
      "src/app/admission-test/admission-test.css"
    ],
    "ffd54f": [
      "src/app/globals.css"
    ],
    "ffd76a": [
      "src/app/globals.css"
    ],
    "ffd89c": [
      "src/app/globals.css"
    ],
    "ffdba2": [
      "src/app/admission-test/admission-test.css"
    ],
    "ffe0a3": [
      "src/app/globals.css"
    ],
    "ffe0b5": [
      "src/app/admission-test/admission-test.css"
    ],
    "ffe27a": [
      "src/app/globals.css"
    ],
    "fff": [
      "src/app/additional-styles.css",
      "src/app/admission-test/admission-test.css",
      "src/app/globals.css",
      "src/app/testimonials/additional-styles.css"
    ],
    "fff1c1": [
      "src/app/globals.css"
    ],
    "fff3cc": [
      "src/app/globals.css"
    ],
    "fff7df": [
      "src/app/admission-test/admission-test.css"
    ],
    "fff7e0": [
      "src/app/admission-test/admission-test.css"
    ],
    "fff7ed": [
      "src/app/additional-styles.css"
    ],
    "ffffff": [
      "src/app/additional-styles.css",
      "src/app/globals.css",
      "src/app/testimonials/AddTestimonialModal.css",
      "src/app/testimonials/additional-styles.css"
    ],
    "ffffffcc": [
      "src/app/globals.css"
    ],
    "ffffffee": [
      "src/app/globals.css"
    ]
  },
  "dataAttrToTsx": {
    "data-count": [
      "src/app/components/sections/FoundersSection.tsx"
    ],
    "data-nav": [
      "src/app/components/layout/Navigation.tsx"
    ],
    "data-theme": [
      "src/app/layout.tsx"
    ]
  },
  "dataAttrToCss": {
    "data-color-scheme": [
      "src/app/globals.css"
    ],
    "data-nav": [
      "src/app/globals.css"
    ],
    "data-scroll-area": [
      "src/app/globals.css"
    ],
    "data-theme": [
      "src/app/additional-styles.css",
      "src/app/globals.css",
      "src/app/testimonials/additional-styles.css"
    ]
  }
}
```