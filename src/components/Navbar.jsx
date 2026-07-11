import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/manufacturing', label: 'Manufacturing' },
    { path: '/quality', label: 'Quality' },
    { path: '/export-process', label: 'Export Process' },
    { path: '/global-markets', label: 'Global Markets' },
    { path: '/industries', label: 'Industries' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div style={{
        background: '#0B2341', 
        color: '#fff', 
        fontSize: '0.75rem', 
        padding: '0.4rem 2rem', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        zIndex: 1001,
        position: 'relative'
      }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Phone size={12} style={{ color: '#C9A227' }} /> +91 95124 00083
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={12} style={{ color: '#C9A227' }} /> contact@crestwaveglobal.com
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#94A3B8' }}>
            <Globe size={12} /> B2B Global Trade Sourcing
          </span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(11, 35, 65, 0.05)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '0 2rem'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo & Branding */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img 
              src="/images/logo.jpeg" 
              alt="Crestwave Global Logo" 
              style={{ height: '50px', width: 'auto', borderRadius: '4px', objectFit: 'contain' }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--primary)',
                letterSpacing: '0.05em',
                lineHeight: '1.1'
              }}>CRESTWAVE</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--accent)',
                letterSpacing: '0.25em'
              }}>GLOBAL</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? 'var(--secondary)' : 'var(--primary)',
                  position: 'relative',
                  padding: '0.5rem 0'
                })}
                className="nav-link-hover"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/request-quote" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
              Request Quote
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--primary)'
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* CSS for Navbar styling directly within jsx structure (for responsive design helper) */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 1024px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-toggle {
              display: block !important;
            }
          }
          .nav-link-hover::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--secondary);
            transition: width 0.3s ease;
          }
          .nav-link-hover:hover::after {
            width: 100%;
          }
          .nav-link-hover.active::after {
            width: 100%;
            background-color: var(--secondary);
          }
        `}} />
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 'calc(var(--header-height) + 26px)',
              left: 0,
              width: '100%',
              background: '#ffffff',
              borderBottom: '1px solid var(--border)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              zIndex: 999,
              padding: '2rem 1.5rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? 'var(--secondary)' : 'var(--primary)',
                    borderBottom: '1px solid #F1F5F9',
                    paddingBottom: '0.75rem'
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/request-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1rem' }}
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
