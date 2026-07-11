import React from 'react';
import { ShoppingCart, BedDouble, Building2, Layers, Network, FileSpreadsheet } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function Industries() {
  const industries = [
    {
      icon: <ShoppingCart size={24} />,
      title: 'Retail Chains & Supermarkets',
      desc: 'High-volume cotton home textiles, private label agricultural products, and packaged dry commodities. We support direct distribution center drop shipping with customized barcode alignments.',
      solutions: ['Store branding layouts', 'UPC / GS1 Barcoding', 'Distribution center drop delivery']
    },
    {
      icon: <BedDouble size={24} />,
      title: 'Hospitality & Luxury Hotels',
      desc: 'Crisp white hotel bedsheets, bathrobes, heavy-gsm towels, and custom bed linens. All textiles are tested to withstand commercial laundry chemicals and heat cycles.',
      solutions: ['Custom thread counts (200-1000TC)', 'High-durability hem stitches', 'Standard commercial laundering tests']
    },
    {
      icon: <Building2 size={24} />,
      title: 'Wholesalers & Bulk Importers',
      desc: 'Full-container-load (FCL) spice seeds, grains, crop commodities, and textiles. Sourced directly from farms and partner factories to ensure competitive B2B margins.',
      solutions: ['FCL & LCL shipment support', 'Direct orchard/factory sourcing', 'SGS quality certifications']
    },
    {
      icon: <Layers size={24} />,
      title: 'Private Label Brands',
      desc: 'Ready-to-sell retail packaging for organic foods, spices, and linens. We work with your designer layouts to deliver store-ready boxes and bags.',
      solutions: ['Custom packaging layouts', 'Moisture-controlled food bags', 'Logo engraving & printing']
    },
    {
      icon: <Network size={24} />,
      title: 'Government Procurement',
      desc: 'Structured supply agreements for agricultural staples, crops, and textiles. We support formal tender compliance, strict certificates of analysis, and contract guarantees.',
      solutions: ['Phytosanitary clearances', 'Tender compliance paperwork', 'Bulk crop testing documentation']
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: 'E-Commerce Brands',
      desc: 'Smaller batch imports for fast-growing online brands. We support barcode labelling, FBA-compliant master carton structures, and fast air-cargo sampling.',
      solutions: ['Amazon FBA box compliance', 'Barcode label application', 'Express air-freight samples']
    }
  ];

  return (
    <div>
      {/* Subpage Hero */}
      <section style={{
        background: 'linear-gradient(rgba(11, 35, 65, 0.9), rgba(11, 35, 65, 0.95)), url("/images/warehouse.jpeg")',
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
          }}>B2B Sectors</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: '800',
            color: '#ffffff',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}>
            Industries We Serve
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
            Custom Supply Solutions For Global Businesses
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Whether you manage procurement for a luxury hotel group, a European supermarket chain, or a growing online retail brand, Crestwave Global delivers tailored B2B solutions. We adapt our testing, packing, and shipment metrics to integrate seamlessly with your internal supply chain.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid-2">
            {industries.map((ind, idx) => (
              <div key={idx} className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
                    {ind.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700' }}>{ind.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{ind.desc}</p>
                </div>

                <div style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1.25rem',
                  marginTop: '0.5rem'
                }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Sourcing Strengths
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--primary)' }}>
                    {ind.solutions.map((sol, solIdx) => (
                      <li key={solIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%' }} />
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
