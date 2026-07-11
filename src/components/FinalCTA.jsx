import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section" style={{
      background: 'linear-gradient(rgba(11, 35, 69, 0.92), rgba(11, 35, 69, 0.96)), url("/images/Cargo_ship_sailing.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#ffffff',
      textAlign: 'center'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--accent)',
            fontWeight: '600'
          }}>
            Partner With Crestwave
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.2'
          }}>
            Your Global Supply Chain Starts Here.
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#94A3B8',
            lineHeight: '1.7',
            marginBottom: '1.5rem'
          }}>
            Partner with Crestwave Global for dependable sourcing, quality-focused manufacturing, and professional export solutions designed to support your business growth.
          </p>
          <Link to="/request-quote" className="btn btn-accent" style={{
            fontSize: '1rem',
            padding: '1.1rem 2.5rem'
          }}>
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
