import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail, ChevronDown, Package2, Shirt, Apple, Wheat, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const productDropdownItems = [
  { path: '/products?cat=textiles', label: 'Home & Hotel Textiles', icon: Shirt, desc: 'Bedsheets, towels, bath linen' },
  { path: '/products?cat=fruits', label: 'Fresh Produce', icon: Apple, desc: 'Mangoes, fruits, fresh exports' },
  { path: '/products?cat=agriculture', label: 'Agricultural Commodities', icon: Wheat, desc: 'Spices, crops & more' },
  { path: '/products?cat=oem', label: 'OEM & Private Label', icon: Tag, desc: 'Custom branded sourcing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/export-process', label: 'Export Process' },
    { path: '/global-markets', label: 'Global Markets' },
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
            <Phone size={12} style={{ color: '#C8102E' }} /> +91 95124 00083
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={12} style={{ color: '#C8102E' }} /> contact@crestwaveglobal.com
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
              src="/images/logo_icon.png"
              alt="Crestwave Global Logo"
              style={{ height: '54px', width: 'auto', mixBlendMode: 'multiply', objectFit: 'contain' }}
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

            {/* Home & About */}
            {navLinks.slice(0, 2).map((link) => (
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

            {/* Products Dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                id="products-dropdown-btn"
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: productsOpen ? 'var(--accent)' : 'var(--primary)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  transition: 'color 0.2s ease'
                }}
                aria-haspopup="true"
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDown
                  size={14}
                  style={{
                    transition: 'transform 0.25s ease',
                    transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </button>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setProductsOpen(false)}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 0.75rem)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '320px',
                      background: '#ffffff',
                      borderRadius: '1rem',
                      boxShadow: '0 20px 60px rgba(11, 35, 65, 0.15)',
                      border: '1px solid #E2E8F0',
                      padding: '0.75rem',
                      zIndex: 1100
                    }}
                  >
                    {/* Arrow */}
                    <div style={{
                      position: 'absolute',
                      top: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%) rotate(45deg)',
                      width: '12px',
                      height: '12px',
                      background: '#ffffff',
                      border: '1px solid #E2E8F0',
                      borderBottom: 'none',
                      borderRight: 'none'
                    }} />

                    {/* Dropdown Header */}
                    <div style={{
                      padding: '0.5rem 0.75rem 0.75rem',
                      borderBottom: '1px solid #F1F5F9',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Package2 size={16} style={{ color: 'var(--accent)' }} />
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--text-muted)'
                        }}>Our Product Categories</span>
                      </div>
                    </div>

                    {/* Category Items */}
                    {productDropdownItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setProductsOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            padding: '0.65rem 0.75rem',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            transition: 'background 0.2s ease',
                            color: 'inherit'
                          }}
                          className="dropdown-item"
                        >
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: 'rgba(200, 16, 46, 0.07)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <Icon size={16} style={{ color: 'var(--accent)' }} />
                          </div>
                          <div>
                            <div style={{
                              fontSize: '0.875rem',
                              fontWeight: '600',
                              color: 'var(--primary)',
                              fontFamily: 'var(--font-display)'
                            }}>{item.label}</div>
                            <div style={{
                              fontSize: '0.75rem',
                              color: 'var(--text-muted)',
                              marginTop: '0.1rem'
                            }}>{item.desc}</div>
                          </div>
                        </Link>
                      );
                    })}

                    {/* View All Footer */}
                    <div style={{ borderTop: '1px solid #F1F5F9', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
                      <Link
                        to="/products"
                        onClick={() => setProductsOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem',
                          padding: '0.6rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          color: 'var(--accent)',
                          fontFamily: 'var(--font-display)',
                          background: 'rgba(200, 16, 46, 0.05)',
                          transition: 'background 0.2s'
                        }}
                        className="dropdown-view-all"
                      >
                        View All Products →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining nav links */}
            {navLinks.slice(2).map((link) => (
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

        {/* CSS for Navbar */}
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
          .dropdown-item:hover {
            background: #F8FAFC;
          }
          .dropdown-view-all:hover {
            background: rgba(200, 16, 46, 0.1) !important;
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
              padding: '2rem 1.5rem',
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Home & About */}
              {navLinks.slice(0, 2).map((link) => (
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

              {/* Mobile Products Accordion */}
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    color: 'var(--primary)',
                    padding: 0
                  }}
                >
                  Products
                  <ChevronDown
                    size={16}
                    style={{
                      transition: 'transform 0.25s ease',
                      transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {productDropdownItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.5rem 0.75rem',
                                borderRadius: '0.5rem',
                                background: '#F8FAFC',
                                color: 'var(--primary)',
                                fontFamily: 'var(--font-display)',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                              }}
                            >
                              <Icon size={16} style={{ color: 'var(--accent)' }} />
                              {item.label}
                            </Link>
                          );
                        })}
                        <Link
                          to="/products"
                          onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); }}
                          style={{
                            padding: '0.5rem 0.75rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(200, 16, 46, 0.06)',
                            color: 'var(--accent)',
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            textAlign: 'center'
                          }}
                        >
                          View All Products →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining links */}
              {navLinks.slice(2).map((link) => (
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
