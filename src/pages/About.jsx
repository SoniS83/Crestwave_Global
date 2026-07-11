import React from 'react';
import { Target, Eye, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function About() {
  const coreValues = [
    { name: 'Integrity', desc: 'Operating with ethical rigor, transparency, and accountability in every export contract.' },
    { name: 'Quality Focus', desc: 'Enforcing strict pre-shipment grading controls, physical tests, and packaging compliance.' },
    { name: 'Transparency', desc: 'Keeping buyers informed with clear logistics timelines, tracking data, and honest disclosures.' },
    { name: 'Innovation', desc: 'Optimizing container packaging, shipment timelines, and digital tracing solutions.' },
    { name: 'Commitment', desc: 'Achieving delivery deadlines, volume assurances, and product specification accuracy.' },
    { name: 'Reliability', desc: 'Striving to be a consistent global trade partner buyers can count on year after year.' }
  ];

  const valuePropositions = [
    { title: 'Reliable Communication', desc: 'Clear, timely updates with our dedicated trade desks throughout the order lifecycle.' },
    { title: 'Quality Inspections', desc: 'Independent pre-shipment reviews matching target parameters prior to loading.' },
    { title: 'Global Logistics Support', desc: 'Multimodal container contracts and air freight routing for efficient shipping.' },
    { title: 'Professional Documentation', desc: 'SGS approvals, phytosanitary certifications, custom bills, and trade paperwork.' },
    { title: 'Dedicated Customer Service', desc: 'Immediate issue-resolution and client-focused B2B trade specialists.' },
    { title: 'Long-Term Partnerships', desc: 'Reliability focused on growing together with our international wholesale buyers.' }
  ];

  return (
    <div>
      {/* Subpage Hero */}
      <section style={{
        background: 'linear-gradient(rgba(11, 35, 65, 0.9), rgba(11, 35, 65, 0.95)), url("/images/Executives.jpeg")',
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
          }}>About Crestwave Global</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: '800',
            color: '#ffffff',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}>
            Building Long-Term Global Business Relationships.
          </h1>
        </div>
      </section>

      {/* Corporate Story */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Our History</span>
              <h2 className="section-title">The Crestwave Journey</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Crestwave Global was established with a simple vision—to connect India's manufacturing excellence and agricultural produce with businesses around the world through dependable export solutions. 
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Our focus is not only on supplying products but on building long-term partnerships based on trust, transparency, and consistent quality. We bridge the gap between Indian manufacturing capabilities and international trade expectations.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                We understand that global sourcing requires reliability, clean communication, and adherence to strict specifications. That is why we manage every transaction with absolute dedication from inquiry to final delivery.
              </p>
            </div>
            
            <div className="img-container" style={{ height: '400px', borderRadius: '1rem' }}>
              <img src="/images/International_trade_documentation.jpeg" alt="Export Documentation Sourcing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Split */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid-2">
            <div className="card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(37, 99, 235, 0.08)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
                To simplify global sourcing by providing reliable export solutions supported by quality assurance, professional communication, and efficient logistics. We streamline supply routes to enable seamless commerce.
              </p>
            </div>

            <div className="card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(37, 99, 235, 0.08)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
                To become a trusted international sourcing partner recognized for reliability, professionalism, and long-term business relationships. We aim to be the first choice for global buyers seeking quality Indian exports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-tag">Brand Pillars</span>
            <h2 className="section-title">Our Core Corporate Values</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The ethical framework guiding all B2B customer relationships and shipments.</p>
          </div>

          <div className="grid-3">
            {coreValues.map((val, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ fontSize: '1rem', color: 'var(--accent)', fontWeight: '700', fontFamily: 'var(--font-display)' }}>
                  0{idx + 1}
                </span>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>{val.name}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Checklist */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-tag">Our Strengths</span>
            <h2 className="section-title">Why Work With Us</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>How we secure trust and quality for overseas buyers and retailers.</p>
          </div>

          <div className="grid-3">
            {valuePropositions.map((prop, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                padding: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }}>
                  <ShieldCheck size={20} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary)' }}>{prop.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Component */}
      <FinalCTA />
    </div>
  );
}
