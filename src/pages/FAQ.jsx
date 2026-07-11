import React, { useState } from 'react';
import { HelpCircle, ChevronRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinalCTA from '../components/FinalCTA';

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  const categories = [
    {
      title: 'Sourcing & Customization',
      items: [
        {
          q: "What is Crestwave Global's Minimum Order Quantity (MOQ)?",
          a: "Our MOQs vary by product line. For Home Textiles, the typical MOQ is 500 to 1,000 sets per color/design. For agricultural commodities, our MOQ is generally one 20ft container (approx 15-20 metric tons). We can offer smaller trial orders for new B2B partnerships under specific terms."
        },
        {
          q: "Can we request custom branding and retail packaging?",
          a: "Yes. We specialize in private labeling and OEM packaging. We can apply barcodes, retail hangtags, custom inner boxes, and outer cartons printed with your logos according to your CAD design layouts."
        },
        {
          q: "Do you supply customized thread counts or weave fabric structures?",
          a: "Absolutely. Our textile mills manufacture 100% Cotton, Poly-Cotton, and Bamboo blends in thread counts ranging from 200TC to 1000TC. You can choose from Sateen, Percale, Twill, and Jacquard weave structures."
        }
      ]
    },
    {
      title: 'Quality & Sampling',
      items: [
        {
          q: "How can we obtain samples before placing a bulk order?",
          a: "We offer physical pre-production samples. For textiles and dry commodities, we prepare samples within 7-10 days and ship them via express air courier (DHL/FedEx). Sample costs may apply depending on custom specifications, but are typically credited back upon contract placement."
        },
        {
          q: "Can we appoint an independent inspector (like SGS or Intertek)?",
          a: "Yes. We encourage third-party inspections. We support inspections by SGS, Intertek, Bureau Veritas, or any certified auditor of your choice. Inspections can take place during production or prior to container stuffing."
        },
        {
          q: "How does Crestwave handle fresh fruit shelf life and temperature requirements?",
          a: "For fresh fruits like mangoes, we utilize specialized refrigerated containers (Reefers) equipped with temperature and humidity loggers. We perform vapour heat treatment (VHT) or hot water treatment (HWT) to ensure compliance with import country quarantine standards."
        }
      ]
    },
    {
      title: 'Shipping, Payments & Logistics',
      items: [
        {
          q: "What are your standard payment options for international trade?",
          a: "We work with secure trade methods: 1) Confirmed Irrevocable Letter of Credit (L/C) at sight. 2) Telegraphic Transfer (T/T) with 30-50% advance deposit and the remaining balance payable upon presentation of scanned shipping documents (B/L)."
        },
        {
          q: "What Incoterms do you support?",
          a: "Our standard pricing structures utilize FOB (Free On Board) from major Indian ports. We also provide competitive CIF (Cost, Insurance & Freight) and CFR (Cost & Freight) quotations to your target destination port."
        },
        {
          q: "What certifications do you provide with agricultural shipments?",
          a: "We provide all required regulatory paperwork: Phytosanitary Certificates, APEDA registrations, Certificate of Origin, Fumigation Certificates, Health and Sanitary Certificates, and independent Lab Analysis reports."
        }
      ]
    }
  ];

  return (
    <div>
      {/* Subpage Hero */}
      <section style={{
        background: 'linear-gradient(rgba(11, 35, 65, 0.9), rgba(11, 35, 65, 0.95)), url("/images/Cargo_ship_sailing.jpeg")',
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
          }}>Support Desk</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: '800',
            color: '#ffffff',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}>
            FAQ & Trade Support
          </h1>
        </div>
      </section>

      {/* Accordion Layout */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {categories.map((cat, catIdx) => (
              <div key={catIdx}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--primary)',
                  marginBottom: '1.5rem',
                  borderBottom: '2px solid var(--border)',
                  paddingBottom: '0.5rem',
                  fontFamily: 'var(--font-display)'
                }}>
                  {cat.title}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {cat.items.map((item, itemIdx) => {
                    const uniqueId = `${catIdx}-${itemIdx}`;
                    const isOpen = activeFaq === uniqueId;
                    return (
                      <div key={itemIdx} style={{
                        backgroundColor: 'var(--section-bg)',
                        border: '1px solid var(--border)',
                        borderRadius: '0.75rem',
                        padding: '1.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }} onClick={() => setActiveFaq(isOpen ? null : uniqueId)}>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--primary)', lineHeight: '1.4' }}>
                            {item.q}
                          </h4>
                          <ChevronRight size={18} style={{
                            transform: isOpen ? 'rotate(90deg)' : 'none',
                            transition: 'transform 0.3s ease',
                            color: 'var(--secondary)',
                            flexShrink: 0
                          }} />
                        </div>

                        {isOpen && (
                          <div style={{
                            marginTop: '1rem',
                            borderTop: '1px solid #E2E8F0',
                            paddingTop: '1rem',
                            fontSize: '0.925rem',
                            color: 'var(--text-muted)',
                            lineHeight: '1.7'
                          }}>
                            {item.a}
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Hub Contact Card */}
          <div className="card" style={{
            marginTop: '5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            backgroundColor: '#ffffff'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(201, 162, 39, 0.08)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MessageSquare size={24} />
            </div>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700' }}>Have Specific Sourcing Specifications?</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Our trade desks handle specialized technical requests, crop analysis reports, sample logistics, and shipping terms directly. Let us know how we can support your business requirements.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '0.9rem' }}>
                Contact Sourcing Desk
              </Link>
              <Link to="/request-quote" className="btn btn-secondary" style={{ padding: '0.8rem 1.8rem', fontSize: '0.9rem' }}>
                Request B2B Quote
              </Link>
            </div>
          </div>

        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
