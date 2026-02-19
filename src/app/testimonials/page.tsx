'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './additional-styles.css';
import { resultsData, legacyResultsData } from '@/lib/resultsData';
import { driveProxy } from '@/lib/drive';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function TestimonialsPage() {
  return (
    <main className="testimonials-page">
      {/* Decorative Background Blobs */}
      <div className="testi-bg-blob blob-1" />
      <div className="testi-bg-blob blob-2" />

      <div className="container">
        <header className="testi-header-v2">
          <motion.h1
            className="testi-title-v2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Students Achievement
          </motion.h1>
          <motion.p
            className="testi-subtitle-v2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Celebrating the hard work and success of our top performers who have achieved excellence in their careers.
          </motion.p>
        </header>

        {/* Top Performers Section */}
        <section>
          <h2 className="testi-section-title">Our Top Performers</h2>
          <motion.div
            className="testi-grid-v2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {resultsData.map((result, idx) => (
              <motion.article
                key={`${result.name}-${idx}`}
                className="result-card-v2"
                variants={itemVariants}
              >
                <div className="card-image-wrapper">
                  <img
                    src={driveProxy(result.img)}
                    alt={result.name}
                    className="card-image-v2"
                    loading="lazy"
                  />
                  <div className="card-badge-v2">{result.label}</div>
                </div>
                <div className="card-content-v2">
                  <h3 className="card-name-v2">{result.name}</h3>
                  <div className="card-rank-v2">
                    {result.label === 'Percentile'
                      ? `${result.value}%tile`
                      : result.label === 'AIR' && !result.value.includes('AIR')
                        ? `AIR ${result.value}`
                        : result.value}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Legacy Results Section */}
        <section>
          <h2 className="testi-section-title">Legacy Excellence</h2>
          <motion.div
            className="legacy-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {legacyResultsData.map((legacy, idx) => (
              <motion.div
                key={`legacy-${idx}`}
                className="legacy-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img
                  src={legacy.img}
                  alt={legacy.title}
                  className="legacy-image"
                  loading="lazy"
                />
                <div className="legacy-overlay">
                  <h3 className="legacy-title">{legacy.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
