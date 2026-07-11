import React from 'react';
import { Truck, ChevronRight, HelpCircle, CheckCircle } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function ExportProcess() {
  const steps = [
    {
      num: '01',
      title: 'Product Inquiry',
      desc: 'Buyer sends initial requests detailing products, thread counts, crop grades, packaging sizes, target pricing, and destination ports.'
    },
    {
      num: '02',
      title: 'Requirement Analysis',
      desc: 'Our trade desk reviews viability, secures custom pricing quotes from partnered factories, and clarifies technical details.'
    },
    {
      num: '03',
      title: 'Sampling Approval',
      desc: 'We produce and air-ship counter-samples (fabrics, crops, packaging mockups) for the buyer\'s laboratory or visual approval.'
    },
    {
      num: '04',
      title: 'Bulk Production',
      desc: 'Upon contract signature and L/C setup, we trigger bulk manufacturing, checking timelines against cargo booking plans.'
    },
    {
      num: '05',
      title: 'QA Inspection',
      desc: 'Our quality controllers execute audits, checking fabrics, dimensions, moisture levels, or crop safety parameters.'
    },
    {
      num: '06',
      title: 'Export Packaging',
      desc: 'Products are packed in export-grade cartons, crates, or bags. Pallets are shrink-wrapped and stuffed into containers.'
    },
    {
      num: '07',
      title: 'Customs & Documentation',
      desc: 'Our customs brokers prepare commercial invoices, packing lists, certificates of origin, phytosanitary certs, and bills of lading.'
    },
    {
      num: '08',
      title: 'Ocean/Air Shipping',
      desc: 'Containers are loaded onto vessels. Tracking credentials, carrier updates, and shipping alerts are shared with the buyer.'
    },
    {
      num: '09',
      title: 'Safe Port Delivery',
      desc: 'Cargo arrives at destination. We support clearing paperwork, ensuring a smooth container release to the buyer\'s warehouse.'
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
          }}>Operations</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: '800',
            color: '#ffffff',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}>
            Every Shipment. Carefully Managed.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
            Precision and Compliance at Every Mile
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            International trade requires precision. Our export process is designed to ensure every order moves efficiently from inquiry to final delivery with complete transparency and documentation. We coordinate customs, freight forwarding, and local testing so you can focus on marketing the products.
          </p>
        </div>
      </section>

      {/* Detailed Vertical Timeline */}
      <section className="section section-bg">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ position: 'relative' }} className="vertical-timeline">
            
            {/* Center Line for desktop */}
            <div style={{
              position: 'absolute',
              left: '50px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              backgroundColor: 'var(--border)',
              zIndex: 1
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {steps.map((step, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '2.5rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  
                  {/* Step Bubble Counter */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 10px 20px rgba(11, 35, 65, 0.1)',
                    border: '4px solid #ffffff'
                  }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>STEP</span>
                    <span style={{ fontSize: '1.75rem', fontWeight: '800', fontFamily: 'var(--font-display)', lineHeight: '1' }}>{step.num}</span>
                  </div>

                  {/* Step Description Card */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border)',
                    borderRadius: '1rem',
                    padding: '2rem 2.5rem',
                    flex: 1,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'var(--primary)',
                      marginBottom: '0.75rem'
                    }}>{step.title}</h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.6'
                    }}>{step.desc}</p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .vertical-timeline::before {
              left: 30px !important;
            }
            .vertical-timeline div[style*="width: 100px"] {
              width: 60px !important;
              height: 60px !important;
            }
            .vertical-timeline div[style*="width: 100px"] span:first-child {
              display: none !important;
            }
            .vertical-timeline div[style*="width: 100px"] span:last-child {
              font-size: 1.25rem !important;
            }
          }
        `}} />
      </section>

      <FinalCTA />
    </div>
  );
}
