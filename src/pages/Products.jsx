import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function Products() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    return cat || 'all';
  });

  // Sync when URL query param changes (e.g. clicking dropdown links)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    setSelectedCategory(cat || 'all');
  }, [location.search]);

  const categories = [
    { id: 'all', label: 'All Sourcing Categories' },
    { id: 'textiles', label: 'Home & Hotel Textiles' },
    { id: 'fruits', label: 'Fresh Produce' },
    { id: 'agriculture', label: 'Agricultural Commodities' },
    { id: 'oem', label: 'OEM & Private Label' }
  ];

  const productList = [
    {
      id: 'bedsheets',
      category: 'textiles',
      title: 'Premium Bedsheets & Pillowcases',
      desc: 'Export-grade sateen, percale, and twill weave linens manufactured with pure Indian cotton. Available in customizable thread counts from 200TC to 1000TC.',
      image: '/images/Luxury_bedding_in_hotel_bedroom.jpeg',
      specs: [
        { label: 'Material', value: '100% Cotton, Poly-Cotton blends' },
        { label: 'Weave', value: 'Sateen, Percale, Twill, Jacquard' },
        { label: 'Thread Counts', value: '200 TC, 300 TC, 400 TC, 600 TC, 800 TC, 1000 TC' },
        { label: 'Sizing', value: 'King, Queen, Double, Single, Custom dimensions' }
      ]
    },
    {
      id: 'hotel-linen',
      category: 'textiles',
      title: 'Luxury Hotel Bath Linen & Towels',
      desc: 'High-absorption ring-spun terry towels, bathrobes, bath mats, and spa collections. Specially finished to withstand industrial laundering.',
      image: '/images/Luxury_bedding_in_hotel_bedroom.jpeg',
      specs: [
        { label: 'GSM Range', value: '450 GSM to 800 GSM' },
        { label: 'Yarn Type', value: 'Ring spun, Combed cotton, Zero-twist yarn' },
        { label: 'Finishing', value: 'Double needle stitched hems, vat dyed colors' },
        { label: 'Compliance', value: 'Oeko-Tex Standard 100 Certified' }
      ]
    },
    {
      id: 'mangoes',
      category: 'fruits',
      title: 'Export-Grade Fresh Mangoes',
      desc: 'Premium Alphonso, Kesar, and Banganapalli mangoes directly sourced from orchards. Sorted by weight, heat-treated, and packed in ventilated transit cartons.',
      image: '/images/Mangoes_on_conveyor_belt.jpeg',
      specs: [
        { label: 'Varieties', value: 'Alphonso, Kesar, Banganapalli, Totapuri' },
        { label: 'Grades', value: 'A-Grade export quality (unblemished skin)' },
        { label: 'Treatments', value: 'Hot Water Treatment (HWT), Vapor Heat Treatment (VHT) where required' },
        { label: 'Packaging', value: '3kg / 4kg net weight corrugated boxes with dividers' }
      ]
    },
    {
      id: 'spices',
      category: 'agriculture',
      title: 'Indian Spices & Whole Seeds',
      desc: 'High-pungency Turmeric, Chilli, Cumin, Coriander, Cardamom, and Pepper. Sourced directly from major crop-producing districts of India.',
      image: '/images/warehouse.jpeg',
      specs: [
        { label: 'Commodities', value: 'Turmeric (finger/powder), Cumin seeds, Black Pepper, Green Cardamom, Red Chilli' },
        { label: 'Purity Levels', value: '99% to 99.5% minimum purity' },
        { label: 'Certifications', value: 'Spices Board of India Registered, Phytosanitary Certs' },
        { label: 'Moisture Limit', value: 'Below 10-12% maximum specs' }
      ]
    },
    {
      id: 'crops',
      category: 'agriculture',
      title: 'Rice, Grains & Seeds',
      desc: 'Premium Basmati and Non-Basmati rice, Durum wheat, oil seeds (sesame, mustard), and pulses processed under strict hygiene conditions.',
      image: '/images/warehouse.jpeg',
      specs: [
        { label: 'Rice Types', value: '1121 Basmati, Sugandha, Sharbati, IR-64 Long Grain Rice' },
        { label: 'Grain Length', value: 'Basmati average length 7.5mm - 8.35mm' },
        { label: 'Damaged Grains', value: 'Less than 1.5% maximum' },
        { label: 'Packaging', value: '10kg, 20kg, 25kg, 50kg PP bags / Jute bags' }
      ]
    },
    {
      id: 'private-label',
      category: 'oem',
      title: 'OEM Private Label Sourcing',
      desc: 'Complete end-to-end custom branding, box layouts, barcoding, and retail shelf packaging for global retail chains and boutique brands.',
      image: '/images/Textile_manufacturing.jpeg',
      specs: [
        { label: 'Services', value: 'CAD Box Layouts, Custom Embossing, Retail Hangtags' },
        { label: 'Barcoding', value: 'UPC, EAN-13, GS1 standard formats' },
        { label: 'Fulfillment', value: 'Inner pack cartons, shrink wrapping, barcode labeling' },
        { label: 'Quality Audit', value: 'Factory compliance checks to BSCI, ISO 9001 levels' }
      ]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? productList 
    : productList.filter(p => p.category === selectedCategory);

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
          }}>Our Portfolio</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: '800',
            color: '#ffffff',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: '1.2'
          }}>
            Explore Sourcing and Product Portfolios
          </h1>
        </div>
      </section>

      {/* Category Sorter Controls */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '4rem',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '2rem'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: selectedCategory === cat.id ? 'var(--secondary)' : 'var(--border)',
                  backgroundColor: selectedCategory === cat.id ? 'var(--secondary)' : '#ffffff',
                  color: selectedCategory === cat.id ? '#ffffff' : 'var(--primary)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid Layout */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {filteredProducts.map((prod, idx) => (
              <div key={prod.id} className="grid-2" style={{
                alignItems: 'center',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '1.5rem',
                padding: '3rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
              }} className="product-row">
                
                {/* Image panel */}
                <div className="img-container" style={{ height: '380px', borderRadius: '1rem' }}>
                  <img src={prod.image} alt={prod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Specs and Details panel */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: '700' }}>{prod.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>{prod.desc}</p>
                  
                  {/* Specifications Table */}
                  <div style={{ marginTop: '0.5rem', border: '1px solid var(--border)', borderRadius: '0.5rem', overflow: 'hidden' }}>
                    <div style={{ backgroundColor: 'var(--section-bg)', padding: '0.5rem 1rem', fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', borderBottom: '1px solid var(--border)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Technical Specifications Sourcing Guide
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                      <tbody>
                        {prod.specs.map((spec, specIdx) => (
                          <tr key={specIdx} style={{ borderBottom: specIdx < prod.specs.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                            <td style={{ padding: '0.75rem 1rem', fontWeight: '600', color: 'var(--primary)', width: '30%', backgroundColor: 'var(--section-bg)' }}>{spec.label}</td>
                            <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <Link to={`/request-quote?product=${encodeURIComponent(prod.title)}`} className="btn btn-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '0.9rem' }}>
                      Inquire / Get Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 992px) {
            .product-row {
              grid-template-columns: 1fr !important;
              padding: 2rem !important;
            }
          }
        `}} />
      </section>

      <FinalCTA />
    </div>
  );
}
