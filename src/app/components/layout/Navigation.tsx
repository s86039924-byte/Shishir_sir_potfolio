'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LOGO } from '@/lib/constants'

const LOGO_SRC = LOGO

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark'
    if (currentTheme) setTheme(currentTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    ;(document.documentElement as HTMLElement).style.colorScheme = newTheme
  }

  const items = [
    { label: 'Home', href: '/' },
    { label: 'About IITSF', href: '/#founders' },
    { label: 'Our Faculty', href: '/#faculty' },
    { label: 'Courses', href: '/courses' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Dost', href: '/Dost' },
    { label: 'Upcoming Admission Test', href: '/admission-test' },
    { label: 'Contact', href: '/#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // close on route click
  const handleNavClick = () => setIsMobileMenuOpen(false)

  return (
    <header data-nav className={`site-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-brand">
          <Link href="/" aria-label="IIT Study Forum home" onClick={handleNavClick}>
            <Image
              src={LOGO_SRC}
              alt="IIT Study Forum"
              width={140}
              height={140}
              priority
              className="brand-logo"
            />
          </Link>
        </div>

        {/* desktop menu */}
        <nav className="nav-desktop">
          <ul className="menu rw-menu">
            {items.map(it => (
              <li key={it.label}>
                <Link href={it.href}>{it.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link className="nav-cta" href="/admission-test">
            Upcoming Admission Test
          </Link>
          <Link className="mobile-dost-btn" href="/Dost">
            Dost
          </Link>
          <button
            className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className="theme-toggle">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>

      {/* mobile panel – sits BELOW the header */}
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'show' : ''}`}>
        <ul>
          {items.map(it => (
            <li key={it.label}>
              <Link href={it.href} onClick={handleNavClick}>
                {it.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/admission-test" className="mobile-nav-cta" onClick={handleNavClick}>
              Upcoming Admission Test
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
