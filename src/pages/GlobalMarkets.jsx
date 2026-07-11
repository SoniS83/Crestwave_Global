import React from 'react';
import { Globe, ShieldAlert, Ship, ShieldCheck, MapPin } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function GlobalMarkets() {
  const regions = [
    { name: 'North America', count: 'USA, Canada', desc: 'Importing Home Textiles, hotel bath linen collections, and organic agriculture goods under custom retail packaging.' },
    { name: 'Western Europe', count: 'UK, Germany, France, Italy, Spain', desc: 'Sourcing premium cotton bedsheets, wholesale seasonal spices, and private label OEM textile ranges.' },
    { name: 'Middle East', count: 'UAE, Saudi Arabia', desc: 'Delivering export-grade fresh mangoes, seasonal agricultural crops, seeds, and spices under strict phytosanitary guidelines.' },
    { name: 'Asia-Pacific & Africa', count: 'Australia, Singapore, South Africa', desc: 'Exporting premium Basmati and long-grain rice, oil seeds, and hospitality linen sets.' }
  ];

  return (
    <div>
      {/* Subpage Hero */}
      <section style={{
        background: 'linear-gradient(rgba(11, 35, 65, 0.9), rgba(11, 35, 65, 0.95)), url("/images/Cargo_vessel_cutting_ocean.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 0',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--accent)',
            fontWeight: '600',
            marginBottom: '1rem',
            display: 'inline-block'
          }}>Global Network</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: '800',
            color: '#ffffff',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}>
            Connecting Businesses Across Continents.
          </h1>
        </div>
      </section>

      {/* Main content and map */}
      <section className="section">
        <div className="container">
          <div className="section-header center text-center">
            <h2 className="section-title">Our Trade Routes & Ports</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              We support international buyers across North America, Europe, the Middle East, Asia-Pacific, and Africa with dependable sourcing and export solutions tailored to their market requirements.
            </p>
          </div>

          {/* SVG Map Section */}
          <div style={{
            backgroundColor: '#07162C',
            border: '1px solid #1E293B',
            borderRadius: '1.5rem',
            padding: '3rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            marginBottom: '5rem'
          }}>
            <svg viewBox="0 0 1000 500" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* World Map Outline Shapes */}
              <path d="M 150 150 L 190 130 L 220 160 L 260 170 L 280 200 L 250 250 L 200 300 L 160 320 L 170 380 L 190 400 L 170 420 L 140 400 L 120 310 L 130 250 L 120 200 Z" fill="#1E293B" opacity="0.4" /> {/* Americas */}
              <path d="M 450 120 L 520 90 L 580 120 L 610 160 L 590 200 L 530 250 L 520 300 L 480 340 L 460 380 L 420 330 L 440 250 Z" fill="#1E293B" opacity="0.4" /> {/* Europe & Africa */}
              <path d="M 600 100 L 680 80 L 780 110 L 850 150 L 820 240 L 760 280 L 700 250 L 650 180 Z" fill="#1E293B" opacity="0.4" /> {/* Asia */}
              <path d="M 800 350 L 850 340 L 880 380 L 850 420 L 790 400 Z" fill="#1E293B" opacity="0.4" /> {/* Australia */}

              {/* Sourcing Hub: India */}
              <circle cx="650" cy="200" r="8" fill="var(--accent)" />
              <circle cx="650" cy="200" r="20" fill="transparent" stroke="var(--accent)" strokeWidth="1.5">
                <animate attributeName="r" values="8;30;8" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0;1" dur="4s" repeatCount="indefinite" />
              </circle>
              <text x="650" y="175" fill="var(--accent)" fontSize="13" fontWeight="800" textAnchor="middle">INDIA (ORIGIN)</text>

              {/* Sourcing Lines */}
              {/* Route: USA */}
              <path d="M 650 200 Q 400 130 200 180" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeDasharray="6" className="map-route-line" />
              <circle cx="200" cy="180" r="6" fill="#ffffff" />
              <text x="200" y="160" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle">USA & Canada</text>

              {/* Route: UK/Germany */}
              <path d="M 650 200 Q 550 130 500 140" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeDasharray="6" className="map-route-line" />
              <circle cx="500" cy="140" r="6" fill="#ffffff" />
              <text x="500" y="120" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle">Western Europe</text>

              {/* Route: UAE */}
              <path d="M 650 200 Q 600 180 570 190" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeDasharray="6" className="map-route-line" />
              <circle cx="570" cy="190" r="6" fill="#ffffff" />
              <text x="570" y="170" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle">Middle East</text>

              {/* Route: Australia */}
              <path d="M 650 200 Q 750 300 820 370" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeDasharray="6" className="map-route-line" />
              <circle cx="820" cy="370" r="6" fill="#ffffff" />
              <text x="820" y="350" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle">Australia</text>

              {/* Route: South Africa */}
              <path d="M 650 200 Q 550 280 480 350" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeDasharray="6" className="map-route-line" />
              <circle cx="480" cy="350" r="6" fill="#ffffff" />
              <text x="480" y="330" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle">South Africa</text>
            </svg>
          </div>

          {/* Regional Information Details */}
          <div className="grid-2">
            {regions.map((reg, idx) => (
              <div key={idx} className="card" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {reg.count}
                  </span>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>
                    {reg.name}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {reg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Transit Sourcing Details */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><Ship size={24} /></div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Port Sourcing Viability</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We load shipments from leading Indian maritime hubs including Mundra Port, Nhava Sheva (JNPT), and Chennai Port, optimizing travel time.</p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><ShieldCheck size={24} /></div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>B2B Trade Compliance</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Every shipment conforms to global buyer requirements including phytosanitary testing, SGS loading reports, and customs clearing documentation.</p>
            </div>

            <div className="card">
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}><Globe size={24} /></div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Flexible Incoterms</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We offer FOB (Free On Board), CIF (Cost, Insurance & Freight), and CFR (Cost & Freight) shipping contract variants to fit buyer workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
