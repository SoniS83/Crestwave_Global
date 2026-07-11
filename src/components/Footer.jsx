import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our B2B Market Insights newsletter.');
  };

  return (
    <footer style={{
      backgroundColor: '#0B2341',
      color: '#E2E8F0',
      borderTop: '4px solid var(--accent)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      fontFamily: 'var(--font-body)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr',
          gap: '3rem',
          marginBottom: '4rem'
        }} className="footer-grid">
          
          {/* Column 1: Brand & Slogan */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <img 
                src="/images/logo.jpeg" 
                alt="Crestwave Global Logo" 
                style={{ height: '48px', width: 'auto', borderRadius: '4px', filter: 'brightness(1.05)' }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  letterSpacing: '0.05em'
                }}>CRESTWAVE</span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  color: 'var(--accent)',
                  letterSpacing: '0.25em'
                }}>GLOBAL</span>
              </div>
            </Link>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.6' }}>
              Bridging trusted Indian manufacturers and producers with global trade markets. Deliver-ready premium home textiles, agricultural commodities, fresh fruits, and custom OEM packaging solutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
              QUICK LINKS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/products" className="footer-link">Product Sourcing</Link></li>
              <li><Link to="/manufacturing" className="footer-link">Manufacturing</Link></li>
              <li><Link to="/quality" className="footer-link">Quality Control</Link></li>
              <li><Link to="/export-process" className="footer-link">Export Timeline</Link></li>
              <li><Link to="/global-markets" className="footer-link">Global Markets</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
              PRODUCTS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <li><Link to="/products" className="footer-link">Home Textiles</Link></li>
              <li><Link to="/products" className="footer-link">Hotel Linen</Link></li>
              <li><Link to="/products" className="footer-link">Fresh Mangoes & Fruits</Link></li>
              <li><Link to="/products" className="footer-link">Spices & Crops</Link></li>
              <li><Link to="/products" className="footer-link">OEM Sourcing</Link></li>
              <li><Link to="/products" className="footer-link">Private Label Sourcing</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                HEAD OFFICE & INFO
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#94A3B8' }}>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <MapPin size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Sourcing Hub & Offices: Gujarat, India</span>
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <Phone size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ color: '#fff' }}>+91 95124 00083</span>
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <Mail size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <a href="mailto:contact@crestwaveglobal.com" style={{ color: '#fff', textDecoration: 'underline' }}>contact@crestwaveglobal.com</a>
                </li>
              </ul>
            </div>

            <div>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '0.75rem', fontWeight: '500' }}>
                Subscribe to B2B Sourcing Updates
              </p>
              <form onSubmit={handleSubscribe} style={{ display: 'flex', borderRadius: '4px', overflow: 'hidden' }}>
                <input 
                  type="email" 
                  placeholder="Enter work email"
                  required
                  style={{
                    flex: 1,
                    border: 'none',
                    padding: '0.75rem 1rem',
                    fontSize: '0.85rem',
                    color: 'var(--text)',
                    backgroundColor: '#ffffff'
                  }}
                />
                <button type="submit" style={{
                  backgroundColor: 'var(--accent)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0 1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          fontSize: '0.8rem',
          color: '#64748B'
        }} className="footer-bottom">
          <p>© {currentYear} Crestwave Global. Sourcing India's Finest Products. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }} className="footer-bottom-links">
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Sitemap</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1.2fr 1fr 1.2fr !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
        .footer-link {
          color: #94A3B8;
        }
        .footer-link:hover {
          color: var(--accent) !important;
          padding-left: 4px;
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          color: #E2E8F0;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background-color: var(--accent);
          color: #ffffff;
          transform: translateY(-2px);
        }
      `}} />
    </footer>
  );
}
