import React from 'react';
import { Cpu, Users, Calendar, ShieldAlert, Package, Layers } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function Manufacturing() {
  const sections = [
    {
      icon: <Layers size={24} />,
      title: 'Modern Infrastructure',
      desc: 'Our partnered production units utilize sprawling facilities designed to scale production output smoothly. They meet strict environmental, workplace safety, and local labor regulatory standards.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Advanced Machinery',
      desc: 'From high-speed shuttleless Sulzer looms for bedsheets to automatic packaging machines, technology drives consistency. Automation minimizes raw material defects and maintains standard dimensions.'
    },
    {
      icon: <Users size={24} />,
      title: 'Skilled Workforce',
      desc: 'Craftsmanship matters. Our partners retain weavers, crop sorters, and packers with extensive experience. Continuous workshops maintain precision and safety training across all plants.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Production Planning',
      desc: 'To prevent shipment delays, we apply strict project milestones. We map raw material sourcing, loom scheduling, and chemical testing weeks ahead of time to meet loading deadlines.'
    },
    {
      icon: <ShieldAlert size={24} />,
      title: 'Quality Inspection',
      desc: 'Quality control desks are embedded directly into production lines. Handlooms, cutting machines, and packing bays maintain immediate rejection systems to lock out defects early.'
    },
    {
      icon: <Package size={24} />,
      title: 'Export Packaging',
      desc: 'Humidity control wrappers, corrugated structural supports, and custom outer packing safeguard goods from cargo sweat, sea shocks, and cargo port handling.'
    }
  ];

  return (
    <div>
      {/* Subpage Hero */}
      <section style={{
        background: 'linear-gradient(rgba(11, 35, 65, 0.9), rgba(11, 35, 65, 0.95)), url("/images/Textile_manufacturing.jpeg")',
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
          }}>Infrastructure</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: '800',
            color: '#ffffff',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}>
            Manufacturing Built Around Quality.
          </h1>
        </div>
      </section>

      {/* Main Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
            World-Class Infrastructure Supporting B2B Sourcing
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Every manufacturing partner we work with follows structured production processes, modern equipment, skilled workmanship, and quality-focused operations designed for international markets. We verify certification compliance so your orders are made in modern, sustainable facilities.
          </p>
        </div>
      </section>

      {/* Infrastructure Details Grid */}
      <section className="section section-bg" style={{ paddingTop: '5rem' }}>
        <div className="container">
          <div className="grid-3">
            {sections.map((sec, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {sec.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', fontWeight: '700' }}>{sec.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Floor Image Showcase */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Logistics & Supply</span>
              <h2 className="section-title">End-to-End Control</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                We believe that premium B2B sourcing demands control over details. By regularly visiting partner loom factories, crop farms, and packaging warehouses, we manage production schedules directly.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                This proactive engagement keeps production speeds high, prevents supply bottleneck surprises, and enables us to adapt fast to buyer specification changes.
              </p>
            </div>
            
            <div className="img-container" style={{ height: '350px', borderRadius: '1rem' }}>
              <img src="/images/warehouse.jpeg" alt="Logistics warehouse loading" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
