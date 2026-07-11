import React from 'react';
import { CheckSquare, ArrowRight, ShieldCheck, FileText, ClipboardList } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function Quality() {
  const steps = [
    {
      title: 'Incoming Materials Check',
      desc: 'Validating raw cotton quality, yarn strength, spice purity levels, or fruit maturity criteria. Substandard raw components are rejected at the gate.'
    },
    {
      title: 'Production Inspection',
      desc: 'In-line checks to check weft tension, dye consistency, crop cleanliness, sorting grades, and compliance with size specs.'
    },
    {
      title: 'Dimension & Spec Validation',
      desc: 'Physical checks measuring weight limits, thread count verification, shrink testing, and temperature controls for fresh produce.'
    },
    {
      title: 'Packaging Inspection',
      desc: 'Confirming inner barcodes match retail expectations, plastic liners are moisture-tight, and corrugated boxes meet crushing strength specs.'
    },
    {
      title: 'Final Approval Review',
      desc: 'Signing off pre-shipment reports, packing lists, health certificates, or laboratory tests for complete transparency.'
    },
    {
      title: 'Supervised Dispatch',
      desc: 'Watching cargo loading directly, verifying container seals, and securing packages to prevent shipping shifts.'
    }
  ];

  return (
    <div>
      {/* Subpage Hero */}
      <section style={{
        background: 'linear-gradient(rgba(11, 35, 65, 0.9), rgba(11, 35, 65, 0.95)), url("/images/International_trade_documentation.jpeg")',
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
          }}>Standards</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: '800',
            color: '#ffffff',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}>
            Quality Without Compromise.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Quality Framework</span>
              <h2 className="section-title">Consistency travels with every shipment.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Our quality assurance process begins before production and continues until every shipment is ready for export. We focus on consistency, product integrity, and compliance with customer requirements at every stage.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                Whether exporting premium home textiles or sensitive seasonal mangoes, we apply structured checklists to avoid shipping defects. International buyers trust Crestwave Global because our QA team stands on the factory floor, not in remote boardrooms.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                backgroundColor: 'var(--section-bg)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem'
              }}>
                <div style={{ color: 'var(--secondary)' }}><ShieldCheck size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '0.25rem' }}>ISO & Oeko-Tex Compliance</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We align with global auditing standards, certifying fabric chemicals and food safety levels.</p>
                </div>
              </div>

              <div style={{
                backgroundColor: 'var(--section-bg)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem'
              }}>
                <div style={{ color: 'var(--secondary)' }}><FileText size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '0.25rem' }}>Full Documentation Trials</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Every batch includes laboratory tests, sizing worksheets, and certificates of origin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QC Steps Diagram List */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header center text-center">
            <span className="section-tag">Audit Workflow</span>
            <h2 className="section-title">The Sourcing Quality Path</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>How we monitor and approve product integrity from raw supply to vessel loading.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  PHASE 0{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
